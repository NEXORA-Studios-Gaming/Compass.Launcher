import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/comps/download")({
    component: CompsDownloadComponent,
});

function CompsDownloadComponent() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold">资源下载</h1>
            <p className="text-muted-foreground mt-4">开发中...</p>
        </main>
    );
}
