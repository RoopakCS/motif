import { getDiatonicChords } from "../utility/getDiatonicChords";

function ChordPickerModal({ scaleKey, onSelect, onClose }) {
	const chords = getDiatonicChords(scaleKey);

	return (
		<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
			<div className="bg-surface rounded-lg p-4 w-80">
				<div className="flex justify-between items-center mb-3">
					<h3 className="font-semibold">Choose a chord</h3>
					<button onClick={onClose} className="cursor-pointer">
						✕
					</button>
				</div>

				<div className="grid grid-cols-3 gap-2">
					{chords.map((chord) => (
						<button
							key={chord}
							onClick={() => {
								onSelect(chord);
								onClose();
							}}
							className="p-2 rounded border hover:bg-surface-hover cursor-pointer"
						>
							{chord}
						</button>
					))}
					<button
						className="p-2 rounded border border-error text-error hover:bg-surface-hover cursor-pointer"
						onClick={() => {
							onSelect("");
							onClose();
						}}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
}

export default ChordPickerModal;
