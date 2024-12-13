import { useRouter, useSegments } from "expo-router";
import { useContext, createContext, type PropsWithChildren } from "react";

export enum USER_TYPE {
  GUEST = "guest",
  MEMBER = "MEMBER",
}

interface AuthState {
  userType: USER_TYPE;
}

const initialAuthState: AuthState = {
  userType: USER_TYPE.GUEST,
};
const AuthContext = createContext<AuthState>(initialAuthState);

// This hook can be used to access the user info.
export function useAuth() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <AuthProvider />");
    }
  }

  return value;
}

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <AuthContext.Provider value={initialAuthState}>
      {children}
    </AuthContext.Provider>
  );
}
