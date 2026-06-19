# Tasks

- [x] Task 1: 创建缺失的 5 个路由占位页面文件
  - [x] SubTask 1.1: 创建 `src/routes/instance/new.tsx`（实例安装）
  - [x] SubTask 1.2: 创建 `src/routes/comps/download.tsx`（资源下载）
  - [x] SubTask 1.3: 创建 `src/routes/comps/favorites.tsx`（收藏夹）
  - [x] SubTask 1.4: 创建 `src/routes/settings/global.tsx`（实例全局设置）
  - [x] SubTask 1.5: 创建 `src/routes/settings/launcher.tsx`（启动器设置）
  - 说明：每个文件使用 `createFileRoute` 导出 `Route`，组件渲染中文标题 + "开发中" 提示，结构与既有 `index.tsx` / `about.tsx` 一致。

- [x] Task 2: 创建 404 兜底路由
  - [x] SubTask 2.1: 创建 `src/routes/$.tsx` 捕获未匹配路径
  - 说明：使用 `createFileRoute('/$')` 创建，渲染"页面未找到"提示并提供返回主页的 `<Link to="/">`。
  - 实现备注：spec 中提及 `_error/404.tsx`，但 TanStack Router 文件路由的 catch-all 约定为根目录下的 `$.tsx`，故按此约定实现。`routeTree.gen.ts` 已确认 `/$` 路由正确注册。

- [x] Task 3: 修正 `header.tsx` 的 `getPageTitle` 映射 + 更新 `sidebar.tsx` 路径
  - [x] SubTask 3.1: 移除不存在的路径（`/versions`、`/skins`、`/settings`、`/logs`）
  - [x] SubTask 3.2: 新增侧边栏引用的路径（`/instance/new`、`/comps/download`、`/comps/favorites`、`/settings/global`、`/settings/launcher`、`/about`）
  - [x] SubTask 3.3: 更新 `sidebar.tsx` 的 `navGroups` href 值以匹配新嵌套路径结构
  - [x] SubTask 3.4: 更新 `header.tsx` 的 `DefaultActions` 中 `/instances` 判断为 `/instance/new`
  - 说明：因 spec 将路由路径改为嵌套结构（如 `/instance/new`），sidebar.tsx 也需同步更新，否则导航链接指向错误路径。

- [x] Task 4: 验证路由配置完整性
  - [x] SubTask 4.1: 运行 `pnpm typecheck` 确认类型无误（exit code 0）
  - [x] SubTask 4.2: 运行 `pnpm lint` 确认代码规范通过（exit code 0）
  - [x] SubTask 4.3: 确认 `routeTree.gen.ts` 自动重新生成且包含所有 8 个路由（含 404 捕获）
  - [x] SubTask 4.4: 路由文件结构与 sidebar/header 引用路径一致性已通过代码审查验证

# Task Dependencies

- Task 1、Task 2、Task 3 互相独立，可并行执行
- Task 4 依赖 Task 1、Task 2、Task 3 全部完成
