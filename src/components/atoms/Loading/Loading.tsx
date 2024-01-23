/* eslint-disable react/require-default-props */
import { useMemo } from 'react';
import {
	ActivityIndicator,
	ColorValue,
	StyleProp,
	ViewStyle,
} from 'react-native';

type Props = {
	color?: ColorValue | undefined;
	animating?: boolean | undefined;
	size?: 'small' | 'large' | undefined;
	style?: StyleProp<ViewStyle> | undefined;
};

function Loading({
	color = 'white',
	animating = false,
	size = 'small',
	style,
}: Props) {
	return (
		<ActivityIndicator
			animating={animating}
			color={color}
			size={size}
			style={style}
		/>
	);
}

export default Loading;
