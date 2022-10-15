import {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";

type State = {
  user: string | null;
  loading: boolean;
};

const initialState: State = {
  user: null,
  loading: true,
};

export const AuthContext = createContext(initialState);

const AuthProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    const fn = async () => {
      // check if user is logged in or not
      let userToken = null;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
        setState({ user: userToken, loading: false });
      } catch (error) {
        console.log("Error while getting user token: ", error);
      }
    };

    fn();
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
