import { useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { RefreshCw, Plus, ArrowLeft } from "lucide-react";

interface HeaderProps {
    title?: string;
    showBack?: boolean;
    onBack?: () => void;
    actions?: React.ReactNode;
    className?: string;
}

// 根据路径获取页面标题
function getPageTitle(pathname: string): string {
    const titles: Record<string, string> = {
        "/": "主页",
        "/instances": "实例管理",
        "/versions": "版本管理",
        "/skins": "皮肤管理",
        "/settings": "设置",
        "/logs": "日志",
    };
    return titles[pathname] || "";
}

export function Header({ title, showBack = false, onBack, actions, className }: HeaderProps) {
    const location = useLocation();
    const pageTitle = title || getPageTitle(location.pathname);

    return (
        <header className={cn("border-border bg-card flex h-16 items-center justify-between border-b px-6", className)}>
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <SidebarTrigger className="text-muted-foreground hover:text-foreground h-9 w-9" />
                {showBack && (
                    <Button variant="ghost" size="icon" onClick={onBack} className="h-9 w-9">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                )}
                <div className="ml-2 flex h-9 items-center">
                    <h1 className="text-foreground text-[15px] font-semibold tracking-tight">{pageTitle}</h1>
                </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-2">{actions || <DefaultActions />}</div>
        </header>
    );
}

// 默认操作按钮（根据页面动态显示）
function DefaultActions() {
    const location = useLocation();
    const pathname = location.pathname;

    // 主页显示刷新按钮
    if (pathname === "/") {
        return (
            <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                刷新
            </Button>
        );
    }

    // 实例安装页面显示新建按钮
    if (pathname === "/instance/new") {
        return (
            <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                新建实例
            </Button>
        );
    }

    return null;
}
