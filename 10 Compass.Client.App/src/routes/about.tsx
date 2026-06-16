import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
    component: AboutComponent,
});

function AboutComponent() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold">About</h1>
            <p className="mt-4">Compass Launcher - A modern Minecraft launcher</p>
        </main>
    );
}
