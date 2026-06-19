import { Outlet } from "@tanstack/react-router";
import { AppSidebar } from "./sidebar";
import { Header } from "./header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
    /** 是否隐藏侧边栏 */
    hideSidebar?: boolean;
    /** 是否隐藏顶部栏 */
    hideHeader?: boolean;
    /** 自定义顶部栏标题 */
    headerTitle?: string;
    /** 自定义顶部栏操作 */
    headerActions?: React.ReactNode;
    /** 显示返回按钮 */
    showBack?: boolean;
    /** 返回按钮回调 */
    onBack?: () => void;
    /** 自定义类名 */
    className?: string;
    /** 内容区域自定义类名 */
    contentClassName?: string;
}

/**
 * 主布局组件
 *
 * 提供应用的基础布局结构：
 * - 左侧可折叠侧边栏 (展开 16rem / 折叠 3rem)
 * - 顶部标题栏
 * - 主内容区域
 *
 * @example
 * // 基本用法
 * <Layout />
 *
 * // 自定义标题和操作
 * <Layout headerTitle="自定义标题" headerActions={<Button>操作</Button>} />
 *
 * // 隐藏侧边栏（用于登录页等）
 * <Layout hideSidebar />
 */
export function Layout({
    hideSidebar = false,
    hideHeader = false,
    headerTitle,
    headerActions,
    showBack,
    onBack,
    className,
    contentClassName,
}: LayoutProps) {
    if (hideSidebar) {
        return (
            <div className={cn("flex h-screen w-full overflow-hidden", className)}>
                {/* Page Content */}
                <main className={cn("bg-background flex-1 overflow-auto p-6", contentClassName)}>
                    <Outlet />
                </main>
            </div>
        );
    }

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "12.5rem",
                    "--sidebar-width-icon": "4rem",
                } as React.CSSProperties
            }>
            <div className={cn("flex h-screen w-full overflow-hidden", className)}>
                <AppSidebar />

                <SidebarInset>
                    {/* Header */}
                    {!hideHeader && <Header title={headerTitle} actions={headerActions} showBack={showBack} onBack={onBack} />}

                    {/* Page Content */}
                    <main className={cn("bg-background flex-1 overflow-auto p-6", contentClassName)}>
                        <Outlet />
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}

// 导出子组件
export { AppSidebar as Sidebar } from "./sidebar";
export { Header } from "./header";
