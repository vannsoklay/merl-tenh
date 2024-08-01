import { A } from "@solidjs/router";

export default function Register() {
    return (
        <main class="text-center mx-auto text-gray-700 p-4">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
                Register Page
            </h1>
            <p><A href="/login">Login</A></p>
        </main>
    );
}