import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ComponentTheme } from '@/types/theme/theme';

export default ({
	layout,
	backgrounds,
	fonts,
	borders,
	gutters,
}: ComponentTheme) => {
	return {
		buttonCircle: {
			...layout.justifyCenter,
			...layout.itemsCenter,
			...backgrounds.purple100,
			...fonts.gray400,
			height: 70,
			width: 70,
			borderRadius: 35,
		},
		circle250: {
			borderRadius: 140,
			height: 250,
			width: 250,
		},

		buttonGreen: {
			borderRadius: 4,
			...backgrounds.green,
			...layout.justifyCenter,
			...layout.itemsCenter,
			...gutters.paddingVertical_12,
			...layout.fullWidth,
		},
		buttonDisabled: {
			borderRadius: 4,
			...backgrounds.gray200,
			...layout.justifyCenter,
			...layout.itemsCenter,
			...gutters.paddingVertical_12,
			...layout.fullWidth,
		},
		buttonText: {
			...fonts.white,
			...fonts.size_12,
			...fonts.uppercase,
			...fonts.semibold,
		},
	} as const satisfies Record<string, ImageStyle | TextStyle | ViewStyle>;
};
