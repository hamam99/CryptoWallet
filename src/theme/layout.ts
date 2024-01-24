import { ViewStyle } from 'react-native';

export default {
	col: {
		flexDirection: 'column',
	},
	colReverse: {
		flexDirection: 'column-reverse',
	},
	wrap: {
		flexWrap: 'wrap',
	},
	row: {
		flexDirection: 'row',
	},
	rowReverse: {
		flexDirection: 'row-reverse',
	},
	itemsCenter: {
		alignItems: 'center',
	},
	itemsStart: {
		alignItems: 'flex-start',
	},
	itemsStretch: {
		alignItems: 'stretch',
	},
	itemsEnd: {
		alignItems: 'flex-end',
	},
	justifyCenter: {
		justifyContent: 'center',
	},
	justifyAround: {
		justifyContent: 'space-around',
	},
	justifyBetween: {
		justifyContent: 'space-between',
	},
	justifyEnd: {
		justifyContent: 'flex-end',
	},
	justifyStart: {
		justifyContent: 'flex-start',
	},
	/* Sizes Layouts */
	flex_1: {
		flex: 1,
	},
	fullWidth: {
		width: '100%',
	},
	fullHeight: {
		height: '100%',
	},
	/* Positions */
	relative: {
		position: 'relative',
	},
	absolute: {
		position: 'absolute',
	},
	top0: {
		top: 0,
	},
	top48: {
		top: 48,
	},
	bottom0: {
		bottom: 0,
	},
	bottom64: {
		bottom: 64,
	},
	left0: {
		left: 0,
	},
	right0: {
		right: 0,
	},
	z1: {
		zIndex: 1,
	},
	z10: {
		zIndex: 10,
	},
	gap4: {
		gap: 4,
	},
	gap8: {
		gap: 8,
	},
	gap24: {
		gap: 24,
	},
} as const satisfies Record<string, ViewStyle>;
