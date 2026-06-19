import { Link, useLocation } from "@tanstack/react-router";
import { Home, Gamepad2, Download, Star, Settings2, Settings, Info, User } from "lucide-react";
import { getColorValue } from "@/lib/utils";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/logo";
import { LogoText } from "@/components/logo-text";
import { Separator } from "../ui/separator";

interface NavItem {
    icon: React.ElementType;
    label: string;
    href: string;
}

interface NavGroup {
    items: NavItem[];
}

const navGroups: NavGroup[] = [
    {
        items: [{ icon: Home, label: "主页", href: "/" }],
    },
    {
        items: [
            { icon: Gamepad2, label: "实例安装", href: "/instance/new" },
            { icon: Download, label: "资源下载", href: "/comps/download" },
            { icon: Star, label: "收藏夹", href: "/comps/favorites" },
        ],
    },
    {
        items: [
            { icon: Settings2, label: "实例全局设置", href: "/settings/global" },
            { icon: Settings, label: "启动器设置", href: "/settings/launcher" },
        ],
    },
    {
        items: [{ icon: Info, label: "关于", href: "/about" }],
    },
];

function SidebarBrand() {
    return (
        <div className="flex h-16 items-center gap-3 px-3 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0 group-data-[collapsible=icon]:px-0">
            <Logo
                width={36}
                height={36}
                whiteColor={getColorValue("--color-sidebar-foreground")!}
                secondColor={getColorValue("--color-destructive")!}
            />
            <LogoText
                color={getColorValue("--color-sidebar-foreground")!}
                className="ml-2 h-7.5 w-auto group-data-[collapsible=icon]:hidden"
            />
        </div>
    );
}

function AccountButton() {
    return (
        <SidebarMenuButton
            tooltip="账号管理"
            size="lg"
            className="group-data-[collapsible=icon]:size-12! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0!">
            <div className="bg-sidebar-accent text-sidebar-accent-foreground ring-sidebar-border/60 flex size-8 shrink-0 items-center justify-center rounded-full ring-1">
                <User className="size-4" />
            </div>
            <span className="text-sidebar-foreground ml-3 truncate text-[13px] font-medium group-data-[collapsible=icon]:hidden">
                未登录
            </span>
        </SidebarMenuButton>
    );
}

export function AppSidebar() {
    const location = useLocation();

    return (
        <Sidebar collapsible="icon" className="border-sidebar-border/60 border-r">
            <SidebarHeader className="border-sidebar-border/60 border-b">
                <SidebarBrand />
            </SidebarHeader>

            <SidebarContent className="gap-1 px-2 py-3">
                {navGroups.map((group, groupIndex) => (
                    <>
                        <SidebarGroup key={groupIndex} className="p-0">
                            <SidebarGroupContent>
                                <SidebarMenu className="gap-1">
                                    {group.items.map((item) => {
                                        const isActive = location.pathname === item.href;
                                        const Icon = item.icon;

                                        return (
                                            <SidebarMenuItem
                                                key={item.href}
                                                className="group-data-[collapsible=icon]:justify-center">
                                                <SidebarMenuButton
                                                    asChild
                                                    isActive={isActive}
                                                    tooltip={item.label}
                                                    size="lg"
                                                    className="group-data-[collapsible=icon]:size-12! group-data-[collapsible=icon]:p-0!">
                                                    <Link to={item.href} className="relative">
                                                        <Icon className="size-6! shrink-0 pl-1 group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:pl-0" />
                                                        <span className="ml-3 truncate text-[15px]! font-medium group-data-[collapsible=icon]:hidden">
                                                            {item.label}
                                                        </span>
                                                        {isActive && (
                                                            <span className="bg-sidebar-primary absolute top-1/2 left-0 h-6 w-0.75 -translate-y-1/2 rounded-r-full" />
                                                        )}
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        );
                                    })}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <Separator className="my-1" />
                    </>
                ))}
            </SidebarContent>

            <SidebarFooter className="border-sidebar-border/60 border-t p-2">
                <SidebarMenu>
                    <SidebarMenuItem className="flex justify-center">
                        <AccountButton />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    );
}
