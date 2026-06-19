import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
    component: NotFoundComponent,
});

function NotFoundComponent() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-4 text-muted-foreground">页面未找到</p>
            <Link
                to="/"
                className="mt-6 text-primary underline underline-offset-4"
            >
                返回主页
            </Link>
        </main>
    );
}
