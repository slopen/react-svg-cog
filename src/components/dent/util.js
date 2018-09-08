// @flow

export const getCoordinatesForPercent = (percent: number) => [
	Math.cos (2 * Math.PI * percent),
	Math.sin (2 * Math.PI * percent)
];

export const pathData = ([start, end]: [number, number]) => {
	const [startX, startY] = getCoordinatesForPercent (start);
	const [endX, endY] = getCoordinatesForPercent (end);
	const largeArcFlag = end - start > 0.5 ? 1 : 0;

	return `M ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`;
}

type StyleProps = {
	strokeWidth: number
};

export const getStyle = ({
	strokeWidth
}: StyleProps) => ({
	transform: `scale(${1 / (1 + Number (strokeWidth))})`
});
