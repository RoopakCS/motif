import { Clock, Music2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
	createProgression,
	deleteProgression,
	updateProgression,
} from "../api/api";
import ChordGrid from "./ChordGrid";
import ChordPickerModal from "./ChordPickerModal";
import WorkspaceHeader from "./WorkspaceHeader";

function Workspace({ selectedProgression, onSaved, onDeleted }) {
	const [form, setForm] = useState(null);
	const [saving, setSaving] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const [selectedSlot, setSelectedSlot] = useState(null);
	const [showChordPicker, setShowChordPicker] = useState(false);

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
		const { measure, beat } = selectedSlot;

		const updated = form.chords.filter(
			(c) => !(c.measure === measure && c.beat === beat)
		);

		if (chordName) {
			updated.push({
				measure,
				beat,
				chord: chordName,
				duration: 1,
			});
		}

		setForm({ ...form, chords: updated });
	};

	return (
		<div className="text-primary flex-1 p-2 md:p-6">
			<WorkspaceHeader
				form={form}
				handleSave={handleSave}
				handleDelete={handleDelete}
				handleChange={handleChange}
				saving={saving}
				deleting={deleting}
			/>

			<ChordGrid
				chords={form.chords}
				timeSignature={form.timeSignature}
				onSelect={(slot) => {
					setSelectedSlot(slot);
					setShowChordPicker(true);
				}}
			/>

			{showChordPicker && selectedSlot && (
				<ChordPickerModal
					scaleKey={form.scaleKey}
					onSelect={(chordName) => {
						handleChordEdit(chordName);
						setShowChordPicker(false);
					}}
					onClose={() => setShowChordPicker(false)}
				/>
			)}
		</div>
	);
}

export default Workspace;
