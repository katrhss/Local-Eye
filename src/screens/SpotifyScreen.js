import React from "react";
import { StyleSheet } from "react-native";

import { authorize, refresh } from "react-native-app-auth";
// const SPOTIFY_CLIENT_ID = "6840a005894f420c85e49881678afb09";
// const SPOTIFY_CLIENT_SECRET = "2e09af4e8c1242dcb8dbbf858cec3895";
// const SPOTIFY_REDIRECT_URI = "exp://192.168.1.6:19000/--/redirect";

class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
      clientId: "6840a005894f420c85e49881678afb09",
      clientSecret: "2e09af4e8c1242dcb8dbbf858cec3895",
      redirectUrl: "exp://192.168.0.235:19000/--/redirect",
      scopes: [
        "playlist-read-private",
        "playlist-modify-public",
        "playlist-modify-private",
        "user-library-read",
        "user-library-modify",
        "user-top-read",
      ],
      serviceConfiguration: {
        authorizationEndpoint: "https://accounts.spotify.com/authorize",
        tokenEndpoint: "https://accounts.spotify.com/api/token",
      },
    };
  }

  async onLogin() {
    console.log("Starting login process...");
    try {
      const result = await authorize(this.spotifyAuthConfig);
      console.log("Login successful: ", result);
      alert(JSON.stringify(result));
      return result;
    } catch (error) {
      console.log("Login error: ", error);
    }
  }
  async refreshLogin(refreshToken) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  }
}

const SpotifyScreen = new AuthenticationHandler();

export default SpotifyScreen;
