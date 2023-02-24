import Screen from "./components/Screen";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";

export default function HomeScreen() {
	const navigation = useNavigation();

	function handlePress(playlist) {
		navigation.navigate("Player", { playlist });
	}

	return (
		<Screen>
			<Button title="Playlist 1" onPress={() => handlePress(playlists[0])} />
			<Button title="Playlist 2" onPress={() => handlePress(playlists[1])} />
		</Screen>
	);
}

const playlist1 = [
	{
		title: "1.1 - For Bigger Escapes",
		description:
			"Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
		mediaId: "1",
		file: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
		autostart: true
	},
	{
		title: "1.2 - For Bigger Joyrides",
		description:
			"Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
		mediaId: "2",
		file: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
		autostart: true
	}
];
const playlist2 = [
	{
		title: "2.1 - Elephant Dream",
		description: "The first Blender Open Movie from 2006",
		mediaId: "1",
		file: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
	},
	{
		title: "2.2 - For Bigger Blazes",
		description:
			"HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
		mediaId: "2",
		file: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
	}
];

const playlists = [playlist1, playlist2];
