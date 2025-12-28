import { Scale, Chord, Note } from "tonal";

export function getDiatonicChords(scaleKey) {
	const [tonic, type] = scaleKey.split(" ");

	const scaleType = type.toLowerCase();
	const scaleName = `${tonic} ${scaleType}`;

	const notes = Scale.get(scaleName).notes;

	const chordQualities =
		scaleType === "major"
			? ["", "m", "m", "", "", "m", "dim"]
			: ["m", "dim", "", "m", "m", "", ""];

	return notes.map((note, i) => note + chordQualities[i]);
}
