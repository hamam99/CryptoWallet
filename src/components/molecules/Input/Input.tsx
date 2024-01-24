import { useTheme } from '@/theme';
import { memo, useEffect, useState } from 'react';
import { TextInput, View, TextInputProps, Text } from 'react-native';

type Props = TextInputProps & {
	label?: string;
	errorMessage?: string;
};

function Input(props: Props) {
	const { layout, fonts, colors, borders, gutters } = useTheme();
	const [isFocus, setFocus] = useState(false);
	const [error, setError] = useState(null);
	const { label, errorMessage } = props;

	const handleOnFocus = () => {
		setFocus(true);
		setError(null);
	};

	const handleOnBlur = () => {
		setFocus(false);
	};

	useEffect(() => {
		setError(errorMessage);
	}, [errorMessage]);

	return (
		<View style={{}}>
			<Text style={[fonts.size_14, fonts.semibold, gutters.marginBottom_8]}>
				{label}
			</Text>
			<TextInput
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
				{...props}
				style={[
					layout.fullWidth,
					borders.rounded_8,
					borders.w_1,
					gutters.paddingHorizontal_10,
					{
						backgroundColor: colors.white,
						borderWidth: 1,
						borderColor: isFocus ? colors.green : 'transparent',
					},
					props.style,
				]}
			/>
			<Text style={[layout.fullWidth, fonts.red500, fonts.size_12]}>
				{error}
			</Text>
		</View>
	);
}

export default memo(Input);

Input.defaultProps = {
	label: '',
	errorMessage: null,
};
