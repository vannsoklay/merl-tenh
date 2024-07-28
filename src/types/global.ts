type LoginForm = {
  email?: string;
  phone?: string;
  password?: string;
};

type ContextAuth = {
  user: () => User;
  loading: () => void;
};
