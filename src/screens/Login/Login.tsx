import { Button } from '@/components/atoms';
import { Brand, Input } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { memo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function Login() {
	const { layout, backgrounds, colors, components, gutters, fonts } =
		useTheme();
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	return (
		<SafeScreen>
			<View style={[layout.flex_1, layout.itemsCenter, layout.justifyCenter]}>
				<View style={[layout.absolute, layout.top48]}>
					<Brand theme="dark" height={80} />
				</View>
				<Text style={[fonts.bold, fonts.size_32]}>Selamat Datang</Text>
				<Text style={[fonts.primary, fonts.size_14]}>
					Trusted by millions of users worldwide
				</Text>

				<View
					style={[
						gutters.paddingHorizontal_16,
						layout.fullWidth,
						layout.gap8,
						gutters.marginTop_40,
					]}
				>
					<Input
						label="Email"
						keyboardType="email-address"
						onChangeText={text => {
							setEmail(text);
						}}
						placeholder="Masukkan Email"
					/>
					<Input
						label="Kata Sandi"
						onChangeText={text => {
							setPassword(text);
						}}
						placeholder="Masukkan Kata Sandi"
					/>
				</View>

				<View
					style={[
						layout.fullWidth,
						layout.gap24,
						layout.justifyCenter,
						layout.itemsCenter,
						gutters.paddingHorizontal_16,
					]}
				>
					<TouchableOpacity>
						<Text style={[fonts.warning, fonts.size_12]}>Lupa kata sandi</Text>
					</TouchableOpacity>

					<Button title="MASUK" onPress={() => {}} disabled={false} />

					<View
						style={[
							layout.fullWidth,
							layout.row,
							layout.justifyCenter,
							layout.itemsCenter,
							layout.gap4,
						]}
					>
						<Text style={[fonts.green, fonts.size_12]}>Belum Punya Akun?</Text>
						<TouchableOpacity>
							<Text
								style={[
									fonts.green,
									fonts.size_12,
									fonts.underline,
									fonts.bold,
								]}
							>
								Daftar disini
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeScreen>
	);
}

export default memo(Login);
