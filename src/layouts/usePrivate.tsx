import {
  createContext,
  JSXElement,
  type Component,
  Switch,
  Match,
} from "solid-js";
import { useAuth } from "~/contexts/useAuth";

interface ContextProps {
  children: JSXElement | Element[];
}

const ContextMe = createContext<{
  user: () => User | null;
}>();

const MyLayout: Component<ContextProps> = (props) => {
  const { user } = useAuth();
  const context = {
    user,
  };

  return (
    <Switch fallback={<div>Private page</div>}>
      <Match when={user()}>
        <ContextMe.Provider value={context}>
          {props.children}
        </ContextMe.Provider>
      </Match>
    </Switch>
  );
};

export default MyLayout;
