import { View, DimensionValue, Image } from 'react-native';

import Logo from '@/theme/assets/images/Logo.png';
import LogoDark from '@/theme/assets/images/LogoDark.png';

import { useTheme } from '@/theme';
import { isImageSourcePropType } from '@/types/guards/image';
import { memo } from 'react';
import ImageVariant from '@/components/atoms/ImageVariant/ImageVariant';

type Props = {
	height?: DimensionValue;
	width?: DimensionValue;
	mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
	theme?: 'dark' | 'light';
};

function Brand({ height, width, mode, theme }: Props) {
	const { layout, backgrounds } = useTheme();

	if (!isImageSourcePropType(Logo) || !isImageSourcePropType(LogoDark)) {
		throw new Error('Image source is not valid');
	}

	return (
		<View testID="brand-img-wrapper" style={{ height, width }}>
			{/* <ImageVariant
				testID="brand-img"
				style={[layout.fullHeight, layout.fullWidth]}
				source={Logo}
				sourceDark={LogoDark}
				resizeMode={mode}
			/> */}
			<Image
				testID="brand-img"
				style={[layout.fullHeight, layout.fullWidth]}
				source={theme === 'dark' ? LogoDark : Logo}
				resizeMode={mode}
			/>
		</View>
	);
}

Brand.defaultProps = {
	height: 200,
	width: 200,
	mode: 'contain',
	theme: 'light',
};

export default memo(Brand);
