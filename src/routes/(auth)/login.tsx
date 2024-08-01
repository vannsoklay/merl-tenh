import { A } from "@solidjs/router";

export default function Login() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Login Page</h1>

      <p><A href="/register">Register</A></p>
    </main>
  );
}
