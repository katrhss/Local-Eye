import Navigator from "./src/routes/Navigator";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

export default function App() {
  return (
    <AuthProvider>
      <Navigator
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
}
