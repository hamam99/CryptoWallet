/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useTheme } from '@/theme';
import { Brand } from '@/components/molecules';
import { SafeScreen } from '@/components/template';

import type { ApplicationScreenProps } from '@/types/navigation';
import { ImageBackground, Text, View } from 'react-native';
import { useEffect } from 'react';
import { Loading } from '@/components/atoms';
import background from '@/theme/assets/images/background.png';

function Startup({ navigation }: ApplicationScreenProps) {
	const { layout, fonts, backgrounds } = useTheme();

	useEffect(() => {
		// setTimeout(() => {
		// 	navigation.reset({
		// 		index: 0,
		// 		routes: [{ name: 'Example' }],
		// 	});
		// }, 1000);
	}, []);

	return (
		<SafeScreen>
			<ImageBackground
				style={[
					layout.flex_1,
					layout.col,
					layout.itemsCenter,
					layout.justifyCenter,
					backgrounds.red500,
				]}
				source={background}
			>
				<Brand height={80} />
				<Text style={[fonts.white, fonts.size_16]}>
					Trusted by millions of users worldwide
				</Text>

				<View
					style={[
						layout.absolute,
						layout.bottom64,
						layout.left0,
						layout.right0,
					]}
				>
					<Loading animating size="large" />
				</View>
			</ImageBackground>
		</SafeScreen>
	);
}

export default Startup;
