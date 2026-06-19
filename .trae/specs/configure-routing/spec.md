# 配置路由 (React Router / TanStack Router) Spec

## Why

开发计划 `04-开发计划.md` 第 55 行要求"配置路由 (React Router)"。当前项目虽然已引入 `@tanstack/react-router` 并完成了最小化配置，但侧边栏引用的 7 个路由中仅有 2 个（`/`、`/about`）实际存在，其余 5 个链接点击后无对应页面；`header.tsx` 中的 `getPageTitle` 映射表与侧边栏路由路径不一致；同时缺少 404 兜底路由。需要补齐路由配置以保证导航可用，并为后续业务页面开发奠定基础。

> 说明：技术架构文档 `02-技术架构.md` 中将路由技术记为 "React Router v6"，但项目实际已选定 `@tanstack/react-router`（基于文件路由 + 自动代码分割）。本 Spec 沿用现有实现，不替换为 `react-router-dom`，以避免破坏既有代码与构建链路。

## What Changes

* 补齐侧边栏已引用但缺失的 5 个路由文件（基于 TanStack Router 文件路由约定）：

  * `/instance/new`实例安装

  * `/comps/download`资源下载

  * `/comps/favorites`收藏夹

  * `/settings/global`实例全局设置

  * `/settings/launcher`启动器设置

* 为每个新路由提供占位页面组件（含标题与"开发中"提示），保持与 `index.tsx` / `about.tsx` 一致的结构。

* 新增 404 兜底路由（`routes/$.tsx` 捕获未匹配路径）。

* 修正 `header.tsx` 中 `getPageTitle` 的路径映射，使其与侧边栏 `sidebar.tsx` 中的实际路由对齐。

* 确认 `routeTree.gen.ts` 由 `@tanstack/router-plugin` 自动重新生成（无需手改）。

* 确认 `main.tsx` 中 `createRouter` 配置无需额外调整（当前已含 `defaultPreload: "intent"`、`context.queryClient`）。

## Impact

* Affected specs: 无既有 Spec 文件（本目录为首个）。

* Affected code:

  * `10 Compass.Client.App/src/routes/` 新增 5 个路由文件 + 1 个 404 捕获文件

  * `10 Compass.Client.App/src/components/layout/header.tsx` 修正 `getPageTitle` 映射

  * `10 Compass.Client.App/src/routeTree.gen.ts` 自动重新生成（由 Vite 插件）

  * `10 Compass.Client.App/src/components/layout/sidebar.tsx` 无需修改（已正确引用目标路径）

  * `10 Compass.Client.App/src/main.tsx` 无需修改

## ADDED Requirements

### Requirement: 完整的导航路由

系统 SHALL 提供与侧边栏导航项一一对应的路由页面，使用户点击任意侧边栏链接后都能进入对应页面（即使是占位页面），不得出现空白或 404。

#### Scenario: 用户点击侧边栏任意导航项

* **WHEN** 用户点击侧边栏中的"实例安装 / 资源下载 / 收藏夹 / 实例全局设置 / 启动器设置"任一链接

* **THEN** 浏览器导航至对应路径，并渲染该路径对应的占位页面组件（含中文标题与"开发中"提示）

#### Scenario: 用户访问不存在的路径

* **WHEN** 用户手动输入或导航至未定义的路径（例如 `/nonexistent`）

* **THEN** 系统渲染 404 兜底页面，提示"页面未找到"并提供返回主页的链接

### Requirement: 页面标题一致性

系统 SHALL 在顶部 Header 中显示与当前路由匹配的中文标题，标题映射 SHALL 与侧边栏导航项保持一致。

#### Scenario: 页面标题正确显示

* **WHEN** 用户位于 `/instance/new` 路径

* **THEN** Header 显示标题"实例安装"

* **AND** 当用户位于 `/comps/download` 路径时，Header 显示"资源下载"

* **AND** 当用户位于 `/comps/favorites` 路径时，Header 显示"收藏夹"

* **AND** 当用户位于 `/settings/global` 路径时，Header 显示"实例全局设置"

* **AND** 当用户位于 `/settings/launcher` 路径时，Header 显示"启动器设置"

### Requirement: 路由文件结构遵循 TanStack Router 文件路由约定

系统 SHALL 使用 TanStack Router 的文件路由约定定义路由，每个路由文件导出 `Route` 对象，并通过 `createFileRoute` 创建。

#### Scenario: 新增路由文件结构

* **WHEN** 开发者查看 `src/routes/` 目录

* **THEN** 应看到以下文件（除既有的 `__root.tsx`、`index.tsx`、`about.tsx` 外）：

  * `instance/new.tsx`

  * `comps/download.tsx`

  * `favorites.tsx`

  * `settings/global.tsx`

  * `settings/launcher.tsx`

  * `_error/404.tsx`（404 捕获）

* **AND** 每个文件均通过 `createFileRoute` 导出 `Route`，并包含 `component` 实现

## MODIFIED Requirements

### Requirement: Header 页面标题映射

修改 `header.tsx` 中的 `getPageTitle` 函数，使其路径映射与 `sidebar.tsx` 中的导航项完全对齐，移除不存在的路径（`/versions`、`/skins`、`/settings`、`/logs`），新增缺失的路径（`/instance/new`、`/comps/download`、`/favorites`、`/settings/global`、`/settings/launcher`、`/about`）。

#### Scenario: 标题映射与侧边栏一致

* **WHEN** 开发者审查 `header.tsx` 的 `getPageTitle` 函数

* **THEN** 映射表中的键 SHALL 与 `sidebar.tsx` 中 `navGroups` 的所有 `href` 值完全一致

* **AND** 不应包含任何侧边栏未引用的路径

