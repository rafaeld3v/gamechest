import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(true);

  async function signIn(email: string, password: string) {
    try {
      setAuthData(authData);
      AsyncStorage.setItem("@gamechest:authData", JSON.stringify(authData));
    } catch (error) {
      Alert.alert(error.message, "sign in error");
    }
  }

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem(
        "@gamechest:authData",
      );

      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
      Alert.alert(error.message, "load storage data");
    } finally {
      setisLoading(false);
    }
  }

  async function signOut() {
    setAuthData(undefined);
    AsyncStorage.removeItem("@gamechest:authData");
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
