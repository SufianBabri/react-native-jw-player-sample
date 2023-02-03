import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { JWP_LICENSE_ANDROID, JWP_LICENSE_IOS } from "react-native-dotenv";
import JWPlayer from "react-native-jw-media-player";

export default function App() {
	const playlist = [
		{
			mediaId: "1",
			file: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
			autostart: true
		},
		{
			mediaId: "2",
			file: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
			autostart: true
		}
	];

	return (
		<SafeAreaView style={styles.container}>
			<JWPlayer
				style={styles.player}
				config={{
					license:
						Platform.OS === "android" ? JWP_LICENSE_ANDROID : JWP_LICENSE_IOS,
					backgroundAudioEnabled: true,
					autostart: true,
					repeat: false,
					playlist
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	player: { flex: 1 }
});
