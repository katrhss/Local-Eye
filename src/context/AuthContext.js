import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return {
        errorMessage: "",
        token: action.payload,
        username: action.username,
      };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    case "isSignedIn":
      return { token: action.payload };
    case "getUsername":
      return { username: action.payload };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("Home");
  } else {
    navigate("Signup");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup =
  (dispatch) =>
  async ({ email, password, username }) => {
    try {
      const response = await trackerApi.post("/signup", {
        email,
        password,
        username,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("Home");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong while signing up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      //console.log(username);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });
      navigate("Home");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

// const getUsername = (dispatch) => async (email) => {
//    const { state, password } = useContext(AuthContext);
//   const [username, setUsername] = useState("Guest");

//    useEffect(() => {
//     getUsername();
//      }, []);
//   };

const getUsername = (dispatch) => async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await trackerApi.get(`/users`, { token });
    //setUsername(response.data);
    dispatch({ type: "getUsername", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin, getUsername },
  { token: null, errorMessage: "", username: "" }
);
