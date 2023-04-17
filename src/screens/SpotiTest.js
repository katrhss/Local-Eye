import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { Buffer } from "buffer";
import queryString from "query-string";
import { withNavigation } from "react-navigation";

const AUTHORIZATION_ENDPOINT = "https://accounts.spotify.com/authorize";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const SPOTIFY_CLIENT_ID = "6840a005894f420c85e49881678afb09";
const SPOTIFY_REDIRECT_URI = "exp://192.168.0.146:19000/--/redirect";
const SPOTIFY_CLIENT_SECRET = "2e09af4e8c1242dcb8dbbf858cec3895";
const SPOTIFY_API_ENDPOINT = "https://api.spotify.com/v1";

const SpotifyLoginButton = ({ navigation }) => {
  const [error, setError] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  // const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleSpotifyLogin = async () => {
    const redirectUrl = AuthSession.makeRedirectUri({
      scheme: "my-scheme",
      path: "redirect",
    });
    // const authUrl =
    //   `${AUTHORIZATION_ENDPOINT}` +
    //   `?response_type=code` +
    //   `&client_id=${SPOTIFY_CLIENT_ID}` +
    //   `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
    //   `&scope=user-read-email,user-library-read`;
    const scope =
      "user-read-email%20user-library-read%20user-top-read%20playlist-read-private";
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      redirectUrl
    )}&response_type=code&scope=${encodeURIComponent(scope)}`;

    // console.log("authUrl:", authUrl);
    // const result = await AuthSession.startAsync({ authUrl });
    const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);
    console.log("result:", result);

    // console.log(result);
    // console.log(result.type);
    if (result.type === "success") {
      const code = queryString.parseUrl(result.url).query.code;

      console.log("Authorization code:", code);
      const data = {
        grant_type: "authorization_code",
        code,
        redirect_uri: SPOTIFY_REDIRECT_URI,
        client_id: SPOTIFY_CLIENT_ID,
      };
      console.log(data);
      const headers = {
        Authorization: `Basic ${Buffer.from(
          `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      };
      try {
        const response = await fetch(TOKEN_ENDPOINT, {
          method: "POST",
          headers,
          body: queryString.stringify(data),
        });
        // const responseText = await response.text();
        // const responseBody = JSON.parse(responseText);
        // console.log(responseBody);

        // console.log(JSON.stringify(response));
        const { access_token } = await response.json();
        console.log("Access token: " + access_token);
        setAccessToken(access_token);
        console.log("Access: " + accessToken);
      } catch (e) {
        setError(e.message);
      }
    } else if (result.type === "error") {
      setError(result.params.error_description);
    }
  };

  const handleGetPlaylists = async (playlistId) => {
    try {
      const response = await fetch(`${SPOTIFY_API_ENDPOINT}/me/playlists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log("Response" + JSON.stringify(response));
      const data = await response.json();
      setPlaylists(data.items);
      // console.log("Data" + JSON.stringify(data));
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // useEffect(() => {
  //   handleGetPlaylists();
  // }, [accessToken]);

  return (
    <View>
      <Button title="Login to Spotify" onPress={handleSpotifyLogin} />
      <Button title="Playlists" onPress={handleGetPlaylists} />
      {error && (
        <Text
          style={{ color: "red", marginTop: 10 }}
        >{`Unsuccessful login: ${error}`}</Text>
      )}
      {playlists ? (
        <View>
          <FlatList
            // showsVerticalScrollIndicator={false}
            data={playlists}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Songs", {
                        id: item.id,
                        api: SPOTIFY_API_ENDPOINT,
                        acctok: accessToken,
                      })
                    }
                  >
                    <Text>{item.name}</Text>
                    <Image
                      source={item.images.url}
                      style={{ height: "50%", width: "50%" }}
                    ></Image>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default withNavigation(SpotifyLoginButton);
