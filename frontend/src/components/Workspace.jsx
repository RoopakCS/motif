import { Clock, Music2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
	createProgression,
	deleteProgression,
	updateProgression,
} from "../api/api";

function Workspace({ selectedProgression, onSaved, onDeleted }) {
	const [form, setForm] = useState(null);
	const [saving, setSaving] = useState(false);
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		setForm(selectedProgression);
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

	return (
		<div className="text-primary flex-1 p-6">
			<input
				className="text-4xl bg-transparent outline-none"
				value={form.title}
				onChange={(e) => {
					handleChange("title", e.target.value);
				}}
			/>

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
		</div>
	);
}

export default Workspace;
