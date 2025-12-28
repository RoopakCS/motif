function ChordGrid({ chords, timeSignature = "4/4", onSelect }) {
	const beats = parseInt(timeSignature.split("/")[0]);

	const grouped = chords.reduce((acc, chord) => {
		acc[chord.measure] = acc[chord.measure] || [];
		acc[chord.measure].push(chord);
		return acc;
	}, {});

	const measures = Object.keys(grouped).length || 8;

	return (
		<div className="space-y-4">
			{Array.from({ length: measures }).map((_, i) => {
				const measureNumber = i + 1;
				const measureChords = (grouped[measureNumber] || []).slice();

				return (
					<div
						key={measureNumber}
						className="flex items-center gap-4"
					>
						<span className="w-8 text-sm">{measureNumber}</span>

						<div
							className="grid gap-3 flex-1"
							style={{
								gridTemplateColumns: `repeat(${beats}, minmax(0, 1fr))`,
							}}
						>
							{Array.from({ length: beats }).map(
								(_, beatIndex) => {
									const chord = measureChords[beatIndex];

									return (
										<button
											key={beatIndex}
											onClick={() =>
												onSelect?.({
													chord,
													measure: measureNumber,
													beat: beatIndex,
												})
											}
											className={`h-14 rounded-lg text-lg font-semibold cursor-pointer ${
												chord?.chord
													? "bg-slate-800 text-white"
													: "bg-slate-400/40 hover:bg-slate-700"
											}`}
										>
											{chord?.chord || ""}
										</button>
									);
								}
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ChordGrid;
