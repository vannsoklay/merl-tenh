import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Navbar";
import "./app.css";
import AuthProvider from "./contexts/useAuth";

export default function App() {
  return (
      <Router
        root={(props) => (
          <AuthProvider>
            <Nav />
            <Suspense>
              <div class="max-w-screen-xl mx-auto">{props.children}</div>
            </Suspense>
          </AuthProvider>
        )}
      >
        <FileRoutes />
      </Router>
  );
}
