import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: HomeComponent,
});

function HomeComponent() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold">Compass Launcher</h1>
            <p className="mt-4">Welcome to your modern Minecraft launcher</p>
        </main>
    );
}
