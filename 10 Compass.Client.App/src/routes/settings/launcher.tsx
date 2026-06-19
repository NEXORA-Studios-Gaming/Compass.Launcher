import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/launcher")({
    component: SettingsLauncherComponent,
});

function SettingsLauncherComponent() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold">启动器设置</h1>
            <p className="text-muted-foreground mt-4">开发中...</p>
        </main>
    );
}
