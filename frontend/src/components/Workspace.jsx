import { Clock, Music2 } from "lucide-react";

function Workspace({ selectedProgression }) {
	if (!selectedProgression) {
		return (
			<div className="text-primary flex-1 flex justify-center items-center">
				Select or create a chord progression
			</div>
		);
	}

	return (
		<div className="text-primary flex-1">
			<h1 className="text-4xl">{selectedProgression.title}</h1>
			{/* <input type="text" value={selectedProgression.title} onChange={(e) => {}}/> */}
			<h2 className="text-2xl">{selectedProgression.artistName}</h2>
			<div className="flex">
				<Clock />
				<span>{selectedProgression.timeSignature}</span>
			</div>
			<div className="flex">
				<Music2 />
				<span>{selectedProgression.scaleKey}</span>
			</div>
		</div>
	);
}

export default Workspace;
