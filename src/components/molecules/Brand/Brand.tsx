import { View, DimensionValue } from 'react-native';

import LogoLight from '@/theme/assets/images/tom_light.png';
import LogoDark from '@/theme/assets/images/tom_dark.png';
import Logo from '@/theme/assets/images/Logo.png';

import { useTheme } from '@/theme';
import { isImageSourcePropType } from '@/types/guards/image';
import { memo } from 'react';
import ImageVariant from '@/components/atoms/ImageVariant/ImageVariant';

type Props = {
	height?: DimensionValue;
	width?: DimensionValue;
	mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

function Brand({ height, width, mode }: Props) {
	const { layout, backgrounds } = useTheme();

	if (!isImageSourcePropType(Logo)) {
		throw new Error('Image source is not valid');
	}

	return (
		<View testID="brand-img-wrapper" style={{ height, width }}>
			<ImageVariant
				testID="brand-img"
				style={[layout.fullHeight, layout.fullWidth]}
				source={Logo}
				sourceDark={Logo}
				resizeMode={mode}
			/>
		</View>
	);
}

Brand.defaultProps = {
	height: 200,
	width: 200,
	mode: 'contain',
};

export default memo(Brand);
