import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/global")({
    component: SettingsGlobalComponent,
});

function SettingsGlobalComponent() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold">实例全局设置</h1>
            <p className="mt-4 text-muted-foreground">开发中...</p>
        </main>
    );
}
