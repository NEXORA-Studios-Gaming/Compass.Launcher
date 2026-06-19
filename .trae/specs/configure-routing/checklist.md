# Checklist

- [x] `src/routes/instance/new.tsx` 存在并通过 `createFileRoute('/instance/new')` 导出 `Route`
- [x] `src/routes/comps/download.tsx` 存在并通过 `createFileRoute('/comps/download')` 导出 `Route`  
- [x] `src/routes/comps/favorites.tsx` 存在并通过 `createFileRoute('/comps/favorites')` 导出 `Route`
- [x] `src/routes/settings/global.tsx` 存在并通过 `createFileRoute('/settings/global')` 导出 `Route`
- [x] `src/routes/settings/launcher.tsx` 存在并通过 `createFileRoute('/settings/launcher')` 导出 `Route`
- [x] 每个新路由组件渲染中文标题与"开发中"提示
- [x] `src/routes/$.tsx` 存在并作为 404 兜底路由，提供返回主页的链接
- [x] `header.tsx` 的 `getPageTitle` 映射键与 `sidebar.tsx` 的 `navGroups` 中所有 `href` 完全一致
- [x] `header.tsx` 的 `getPageTitle` 不再包含 `/versions`、`/skins`、`/settings`、`/logs` 等不存在路径
- [x] `pnpm typecheck` 通过，无类型错误
- [x] `pnpm lint` 通过，无 ESLint 警告或错误
- [x] `routeTree.gen.ts` 自动重新生成，包含全部 8 个路由（含 404 捕获）
- [x] 侧边栏 7 个导航项点击后均能进入对应页面，无空白或错误（路由文件均已创建且 routeTree 已注册）
- [x] 访问不存在路径（如 `/nonexistent`）时显示 404 兜底页面（`$.tsx` catch-all 路由已注册为 `/$`）
