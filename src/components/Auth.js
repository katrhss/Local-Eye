import { authorize } from "react-native-app-auth";

const Auth = async () => {
  const config = {
    clientId: "your-client-id",
    clientSecret: "your-client-secret",
    redirectUrl: "your-redirect-url",
    scopes: ["user-read-email", "user-read-private", "playlist-read-private"],
    serviceConfiguration: {
      authorizationEndpoint: "https://accounts.spotify.com/authorize",
      tokenEndpoint: "https://accounts.spotify.com/api/token",
      revocationEndpoint: "https://accounts.spotify.com/api/token/revoke",
    },
  };

  const result = await authorize(config);
  const accessToken = result.accessToken;
};
export default Auth;
