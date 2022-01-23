export const initialCells = [
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	"center",
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
];

export const boardPositions = [
	[-1, 1, -1],
	[0, 1, -1],
	[1, 1, -1],
	[-1, 0, -1],
	[0, 0, -1],
	[1, 0, -1],
	[-1, -1, -1],
	[0, -1, -1],
	[1, -1, -1],
	[-1, 1, 0],
	[0, 1, 0],
	[1, 1, 0],
	[-1, 0, 0],
	[0, 0, 0],
	[1, 0, 0],
	[-1, -1, 0],
	[0, -1, 0],
	[1, -1, 0],
	[-1, 1, 1],
	[0, 1, 1],
	[1, 1, 1],
	[-1, 0, 1],
	[0, 0, 1],
	[1, 0, 1],
	[-1, -1, 1],
	[0, -1, 1],
	[1, -1, 1],
];

export const winLines = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
	[9, 10, 11],
	[15, 16, 17],
	[9, 12, 15],
	[11, 14, 17],
	[18, 19, 20],
	[21, 22, 23],
	[24, 25, 26],
	[18, 21, 24],
	[19, 22, 25],
	[20, 23, 26],
	[18, 22, 26],
	[20, 22, 24],
	[0, 9, 18],
	[1, 10, 19],
	[2, 11, 20],
	[0, 10, 20],
	[2, 10, 18],
	[3, 12, 21],
	[5, 14, 23],
	[6, 15, 24],
	[7, 16, 25],
	[8, 17, 26],
	[6, 16, 26],
	[8, 16, 24],
	[6, 12, 18],
	[0, 12, 24],
	[2, 14, 26],
	[8, 14, 20],
];

export const checkWinner = (squares) => {
	for (let i = 0; i < winLines.length; i++) {
		const [a, b, c] = winLines[i];

		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
};
