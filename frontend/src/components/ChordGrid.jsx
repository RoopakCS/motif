function ChordGrid({ chords, timeSignature = "4/4", onSelect }) {
	const beats = parseInt(timeSignature.split("/")[0]);
	const measures = 8;

	const findChord = (measure, beat) =>
		chords.find((c) => c.measure === measure && c.beat === beat);

	return (
		<div className="space-y-4">
			{Array.from({ length: measures }).map((_, m) => {
				const measureNumber = m + 1;

				return (
					<div
						key={measureNumber}
						className="flex items-center gap-4"
					>
						<span className="w-2 md:w-8 text-sm">{measureNumber}</span>

						<div
							className="grid gap-3 flex-1"
							style={{
								gridTemplateColumns: `repeat(${beats}, minmax(0, 1fr))`,
							}}
						>
							{Array.from({ length: beats }).map((_, b) => {
								const chord = findChord(measureNumber, b);

								return (
									<button
										key={b}
										onClick={() =>
											onSelect?.({
												chord,
												measure: measureNumber,
												beat: b,
											})
										}
										className={`h-12 md:h-14 rounded-lg text-sm md:text-lg font-semibold cursor-pointer ${
											chord
												? "bg-slate-800 text-white"
												: "bg-slate-400/40 hover:bg-slate-700"
										}`}
									>
										{chord?.chord || ""}
									</button>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ChordGrid;
