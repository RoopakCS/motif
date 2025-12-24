import { Clock, Music2 } from "lucide-react";

function WorkspaceHeader({form, handleSave, handleDelete, handleChange}) {
	<div className="">
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
	</div>;
}

export default WorkspaceHeader