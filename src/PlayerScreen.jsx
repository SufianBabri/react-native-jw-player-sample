import React, { useRef, useState } from "react";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text
} from "react-native";
import { JWP_LICENSE_ANDROID, JWP_LICENSE_IOS } from "react-native-dotenv";
import JWPlayer from "react-native-jw-media-player";

export default function PlayerScreen({ route }) {
	const [playlistIndex, setPlaylistIndex] = useState(0);
	const { playlist } = route.params;
	const [title, setTitle] = useState("Loading...");
	const jwPlayer = useRef(null);

	function handleItemChange(index) {
		console.log("handleItemChange", index);
		jwPlayer.current.loadPlaylist([playlist[index]]);
		setPlaylistIndex(index);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<JWPlayer
				ref={jwPlayer}
				style={styles.player}
				onPlaylistItem={playlistItem =>
					setTitle(JSON.parse(playlistItem.nativeEvent.playlistItem).mTitle)
				}
				onPlaylistComplete={() => {
					if (playlistIndex + 1 === playlist.length) return;

					handleItemChange(playlistIndex + 1);
				}}
				config={{
					license:
						Platform.OS === "android" ? JWP_LICENSE_ANDROID : JWP_LICENSE_IOS,
					autostart: true,
					repeat: false,
					playlist: [playlist[0]]
				}}
			/>
			<ScrollView style={styles.row} horizontal>
				{playlist.map((p, index) => (
					<Text
						key={p.title}
						style={[
							styles.playlistItem,
							playlistIndex === index && styles.playlistSelected
						]}
						onPress={() => handleItemChange(index)}>
						{p.title}
					</Text>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black"
	},
	title: {
		fontSize: 18,
		paddingVertical: 2,
		paddingHorizontal: 8,
		color: "white"
	},
	player: { width: "100%", height: 300 },
	row: { flexDirection: "row" },
	playlistItem: {
		textAlign: "center",
		textAlignVertical: "center",
		marginHorizontal: 4,
		marginVertical: 2,
		color: "white",
		width: 150,
		backgroundColor: "gray",
		borderWidth: 2
	},
	playlistSelected: { borderColor: "white" }
});
