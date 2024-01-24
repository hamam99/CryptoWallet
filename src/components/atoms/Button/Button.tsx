import { useTheme } from '@/theme';
import { memo } from 'react';
import { Text, TextProps, TouchableOpacity } from 'react-native';

type Props = TextProps & {
	title?: string;
	onPress?: () => void;
};

function Button(props: Props) {
	const { onPress, title, disabled = false } = props;
	const { components } = useTheme();
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[disabled ? components.buttonDisabled : components.buttonGreen]}
			disabled={disabled}
		>
			<Text style={[components.buttonText]}>{title}</Text>
		</TouchableOpacity>
	);
}

Button.defaultProps = {
	title: '',
	onPress: () => {},
};

export default memo(Button);
