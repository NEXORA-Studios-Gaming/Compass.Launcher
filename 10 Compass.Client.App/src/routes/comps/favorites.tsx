import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/comps/favorites")({
    component: CompsFavoritesComponent,
});

function CompsFavoritesComponent() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold">收藏夹</h1>
            <p className="mt-4 text-muted-foreground">开发中...</p>
        </main>
    );
}
