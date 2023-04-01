import Navigator from "./src/routes/Navigator";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as PlaceProvider } from "./src/context/PlaceContext";
import { setNavigator } from "./src/navigationRef";

export default function App() {
  return (
    <AuthProvider>
      <PlaceProvider>
        <Navigator
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </PlaceProvider>
    </AuthProvider>
  );
}
