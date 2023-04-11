import React, { Component } from "react";
import { View, Button } from "react-native";
import SpotifyScreen from "./SpotifyScreen";
import { authorize, refresh } from "react-native-app-auth";

class LoginScreen extends Component {
  state = {};

  handleLoginPress = async () => {
    const result = await SpotifyScreen.onLogin();
    console.log(result);
    // Handle the result of the login process here
  };

  render() {
    return (
      <View>
        <Button onPress={this.handleLoginPress} title="Press to login" />
      </View>
    );
  }
}

export default LoginScreen;

// const Spotify = () => {
//   const [accessToken, setAccessToken] = useState("");

//   useEffect(() => {
//     const getAuth = async () => {
//       const config = {
//         clientId: "6840a005894f420c85e49881678afb09",
//         clientSecret: "2e09af4e8c1242dcb8dbbf858cec3895",
//         redirectUrl: "exp://192.168.1.6:19000/--/redirect",
//         scopes: [
//           "user-read-email",
//           "user-read-private",
//           "playlist-read-private",
//         ],
//         serviceConfiguration: {
//           authorizationEndpoint: "https://accounts.spotify.com/authorize",
//           tokenEndpoint: "https://accounts.spotify.com/api/token",
//           revocationEndpoint: "https://accounts.spotify.com/api/token/revoke",
//         },
//       };

//       const result = await authorize(config);
//       console.log(result);
//       setAccessToken(result);
//     };
//   }, []);

//   useEffect(() => {
//     const fetchPlaylists = async () => {
//       const response = await fetch("https://api.spotify.com/v1/me/playlists", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       const data = await response.json();
//       console.log(data);
//     };

//     if (accessToken) {
//       fetchPlaylists();
//     }
//   }, [accessToken]);

//   const handleAuthSuccess = (token) => {
//     setAccessToken(token);
//   };

//   return (
//     <View>
//       {console.log(accessToken)}
//       {
//         accessToken ? <Text>You are logged in.</Text> : null //<Auth onSuccess={handleAuthSuccess} />
//       }
//     </View>
//   );
// };

// export default Spotify;

// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList } from "react-native";

// const App = () => {
//   const [playlists, setPlaylists] = useState([]);

//   const accessToken =
//     "BQAL3bhpKOEMQdPnLuq947odaRF0DcodHTkitYZGV8gY-E-9t2PKXdRyA2bAe2n5GZwFsklX8ZOETBqKmypBubgI_4SmyD78EZtNGKuyVdUaZIBKM7eLWzgYEYlLhSmukR6VYuKuVgvhVg9l17ONJj-TTJIwkNK_ZVBJl1t98-gUEZA_VMEYmTE6U0L993NZ-Z0jOPqs-meaH2k1Xg-UVJqSpDybipQLRw";

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://api.spotify.com/v1/me/playlists", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       const data = await response.json();
//       setPlaylists(data.items);
//     };

//     fetchData();
//   }, []);

//   return (
//     <View>
//       <Text>My Playlists:</Text>
//       <FlatList
//         data={playlists}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <Text>{item.name}</Text>}
//       />
//     </View>
//   );
// };

// export default App;
