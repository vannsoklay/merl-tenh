import {
  createContext,
  useContext,
  JSXElement,
  type Component,
  createSignal,
  createEffect,
} from "solid-js";

interface ContextProps {
  children: JSXElement | Element[];
}

const ContextAuth = createContext<{
  user: () => User | null;
  loading: () => boolean;
}>();

const AuthProvider: Component<ContextProps> = (props) => {
  const [user, setUser] = createSignal<User | null>(null);
  const [auth, setAuth] = createSignal<boolean>(false);
  const [loading, setLoading] = createSignal<boolean>(false);

  createEffect(() => {
    setLoading(false);
    let user = {
      userId: "user1",
      first_name: "Soklay",
      last_name: "Vann",
      phone_number: "012345678",
      avatar:
        "https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/427897563_1993282961086601_1417045370339454855_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGx91sS9aAeVuK6cxxQiOmoPmiF_T4VO3M-aIX9PhU7c_nTZFIS-__ZCSHR4k-Pir0WtF3L_0Zmy6YTQNVEAD72&_nc_ohc=RupxVzodPCYQ7kNvgGVOVXE&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&oh=00_AYBKMXHAuGavc3B3bkFOBxhj6AmdhuChxptjks_0GwRJrw&oe=66AAC4CE",
      email: "soklay.chan@example.com",
      gender: "Male",
    } as User;
    setUser(user);
    setTimeout(() => {
      setLoading(true);
    }, 200);
  });

  const context = {
    user,
    loading,
  };

  return (
    <ContextAuth.Provider value={context}>{props.children}</ContextAuth.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  const context = useContext(ContextAuth) as ContextAuth;
  if (!context) {
    throw new Error("useAuth: cannot find a ContextAuth");
  }
  return context;
}
