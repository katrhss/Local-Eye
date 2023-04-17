import React from "react";
import { useState } from "react";
import { StyleSheet, Button, View, FlatList, Text } from "react-native";

const SpotiSongs = ({ navigation }) => {
  const playlistId = navigation.getParam("id");
  const SPOTIFY_API_ENDPOINT = navigation.getParam("api");
  const accessToken = navigation.getParam("acctok");
  const [song, setSong] = useState([]);
  const getSongs = async () => {
    if (!accessToken) {
      return;
    }

    try {
      const response = await fetch(
        `${SPOTIFY_API_ENDPOINT}/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      // console.log(JSON.stringify(data.items.track));
      setSong(data.items);

      // Do something with the data, e.g. update state to display the tracks
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <View>
      <Button title="Songs" onPress={getSongs} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={song}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.track.name}</Text>
            </View>
            
          );
        }}
      />
    </View>
  );
};
export default SpotiSongs;

{
  /* <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Songs", {
                        id: item.id,
                        api: SPOTIFY_API_ENDPOINT,
                        acctok: accessToken,
                      })
                    }
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity> */
}
