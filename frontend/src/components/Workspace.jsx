import { Clock, Music2 } from "lucide-react";

function Workspace({ selectedProgression }) {
	if (!selectedProgression) {
		return <div className="">Select or create a chord progression</div>;
	}

	return (
		<div className="">
			<h1 className="text-4xl">{selectedProgression.title}</h1>
			<h2 className="text-2xl">{selectedProgression.artistName}</h2>
            <Clock />
			<p>{selectedProgression.timeSignature}</p>
            <Music2 />
			<p>{selectedProgression.scaleKey}</p>
		</div>
	);
}

export default Workspace;
