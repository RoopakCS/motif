import { Clock, Music2 } from "lucide-react";

function WorkspaceHeader({
	form,
	handleSave,
	handleDelete,
	handleChange,
	saving,
	deleting,
}) {
	return (
		<div className="border-b border-white/10 pb-4 mb-6">
			<div className="space-y-2">
				{/* Title */}
				<input
					className="text-4xl font-semibold bg-transparent outline-none w-full"
					value={form.title}
					onChange={(e) => handleChange("title", e.target.value)}
				/>

				{/* Artist */}
				<input
					className="text-lg text-white/60 bg-transparent outline-none w-full"
					value={form.artistName}
					onChange={(e) =>
						handleChange("artistName", e.target.value)
					}
				/>

				{/* Meta */}
				<div className="flex items-center gap-4 text-sm text-white/70">
					<div className="flex items-center gap-1">
						<Clock size={16} />
						<input
							className="w-14 bg-transparent outline-none"
							value={form.timeSignature}
							onChange={(e) =>
								handleChange("timeSignature", e.target.value)
							}
						/>
					</div>

					<div className="flex items-center gap-1">
						<Music2 size={16} />
						<input
							className="w-24 bg-transparent outline-none"
							value={form.scaleKey}
							onChange={(e) =>
								handleChange("scaleKey", e.target.value)
							}
						/>
					</div>
				</div>

				{/* Actions */}
				<div className="flex items-center gap-2 pt-2">
					<button
						onClick={handleSave}
						disabled={saving}
						className="px-3 py-1 rounded-md border border-white/20 hover:bg-white/10 disabled:opacity-50"
					>
						{saving ? "Saving…" : "Save"}
					</button>

					<button
						onClick={handleDelete}
						disabled={deleting}
						className="px-3 py-1 rounded-md border border-red-500/40 text-red-400 hover:bg-red-500/10 disabled:opacity-50"
					>
						{deleting ? "Deleting…" : "Delete"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default WorkspaceHeader;
