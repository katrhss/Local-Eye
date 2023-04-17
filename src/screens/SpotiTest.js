import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { Buffer } from "buffer";
import queryString from "query-string";

const AUTHORIZATION_ENDPOINT = "https://accounts.spotify.com/authorize";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const SPOTIFY_CLIENT_ID = "439c71056e1845569ae588d08fcdc843";
const SPOTIFY_REDIRECT_URI = "exp://192.168.1.5:19000/--/redirect";
const SPOTIFY_CLIENT_SECRET = "4e8d819ae96b4e6e9a6a9e92e8430599";
const SPOTIFY_API_ENDPOINT = "https://api.spotify.com/v1";

export default function SpotifyLoginButton() {
  const [error, setError] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [accessToken, setAccessToken] = useState(null);

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
    } else if (result.type === "error") {
      setError(result.params.error_description);
    }
  };

  const handleGetPlaylists = async () => {};

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
          {playlists.map((playlist) => (
            <Text key={playlist.id}>{playlist.name}</Text>
          ))}
        </View>
      ) : null}
    </View>
  );
}
