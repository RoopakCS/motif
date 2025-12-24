import { Clock, Music2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
	createProgression,
	deleteProgression,
	updateProgression,
} from "../api/api";
import ChordGrid from "./ChordGrid";

function Workspace({ selectedProgression, onSaved, onDeleted }) {
	const [form, setForm] = useState(null);
	const [saving, setSaving] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const [selectedSlot, setSelectedSlot] = useState(null);

	useEffect(() => {
		setForm(selectedProgression);
		setSelectedSlot(null);
	}, [selectedProgression]);

	if (!form) {
		return (
			<div className="text-primary flex-1 flex justify-center items-center">
				Select or create a chord progression
			</div>
		);
	}

	const handleChange = (field, value) => {
		setForm({
			...form,
			[field]: value,
		});
	};

	const handleSave = async () => {
		setSaving(true);

		try {
			if (form.isNew) {
				const { isNew, ...payload } = form;
				const res = await createProgression(payload);

				const saved = { ...res.data, isNew: false };
				setForm(saved);
				onSaved?.(saved);
			} else {
				const { isNew, ...payload } = form;
				await updateProgression(form._id, payload);

				onSaved?.(form);
			}
		} catch (e) {
			console.error("Save Failed", e);
		} finally {
			setSaving(false);
		}
	};

	const handleDelete = async () => {
		setDeleting(true);

		try {
			if (form.isNew) {
				onDeleted?.(null);
				setForm(null);
				return;
			}

			await deleteProgression(form._id);
			onDeleted?.(form._id);
			setForm(null);
		} catch (error) {
			console.error("Delete Failed", error);
		} finally {
			setDeleting(false);
		}
	};

	const handleChordEdit = (chordName) => {
		const { measure, beat, chord } = selectedSlot;

		const otherChords = form.chords.filter((c) => c.measure !== measure);
		const measureChords = form.chords.filter((c) => c.measure === measure);

		if (chord) {
			measureChords[beat] = {
				...measureChords[beat],
				chord: chordName,
			};
		} else {
			measureChords.splice(beat, 0, {
				measure,
				chord: chordName,
				duration: 1,
			});
		}

		setForm({ ...form, chords: [...otherChords, ...measureChords] });
	};

	return (
		<div className="text-primary flex-1 p-6">
			<input
				className="text-4xl bg-transparent outline-none"
				value={form.title}
				onChange={(e) => {
					handleChange("title", e.target.value);
				}}
			/>

			<br />

			<input
				className="text-2xl bg-transparent outline-none"
				value={form.artistName}
				onChange={(e) => {
					handleChange("artistName", e.target.value);
				}}
			/>

			<div className="flex">
				<Clock />
				<input
					className="bg-transparent outline-none"
					value={form.timeSignature}
					onChange={(e) => {
						handleChange("timeSignature", e.target.value);
					}}
				/>
			</div>

			<div className="flex">
				<Music2 />
				<input
					className="bg-transparent outline-none"
					value={form.scaleKey}
					onChange={(e) => {
						handleChange("scaleKey", e.target.value);
					}}
				/>
			</div>

			<button className="cursor-pointer" onClick={handleSave}>
				{saving ? "Saving..." : "Save"}
			</button>

			<button className="cursor-pointer" onClick={handleDelete}>
				{deleting ? "Deleting..." : "Delete"}
			</button>

			<ChordGrid
				chords={form.chords}
				timeSignature={form.timeSignature}
				onSelect={setSelectedSlot}
			/>

			{selectedSlot && (
				<div className="">
					<p>
						Measure {selectedSlot.measure}, Beat{" "}
						{selectedSlot.beat + 1}
					</p>
					<input
						type="text"
						value={selectedSlot.chord?.chord || ""}
						onChange={(e) => handleChordEdit(e.target.value)}
					/>
				</div>
			)}
		</div>
	);
}

export default Workspace;
