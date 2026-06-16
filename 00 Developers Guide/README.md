# Compass Launcher 开发者指南

欢迎来到 Compass Launcher 开发者指南！本文档包含了项目的完整开发文档。

## 文档目录

| 文档                                | 说明                             |
| ----------------------------------- | -------------------------------- |
| [01-项目概述](./01-项目概述.md)     | 项目简介、技术栈、核心功能规划   |
| [02-技术架构](./02-技术架构.md)     | 前后端架构设计、数据流、API依赖  |
| [03-UI设计规范](./03-UI设计规范.md) | 色彩、字体、组件、布局规范       |
| [04-开发计划](./04-开发计划.md)     | 分阶段开发计划、里程碑、风险对策 |
| [05-AI功能设计](./05-AI功能设计.md) | AI助手架构、功能设计、隐私安全   |
| [06-代码架构设计](./06-代码架构设计.md) | 微内核架构、事件驱动、错误处理、测试策略 |
| [07-包结构与组件复用](./07-包结构与组件复用.md) | Workspace分包、组件复用、发布策略 |
| [08-多语言架构设计](./08-多语言架构设计.md) | Nx Monorepo、gRPC通信、多语言协作 |

## 技术栈

- **前端**: React 18 + TypeScript + TailwindCSS 4 + shadcn/ui
- **后端**: Tauri (Rust) - 包含 UI 外壳和业务逻辑
- **Minecraft核心**: .NET 8 + CmlLib.Core（通过 gRPC 通信）
- **AI服务**: Python（可选，实验性功能）
- **Monorepo工具**: Nx
- **跨语言通信**: gRPC（本地进程间通信）
- **构建工具**: Vite
- **包管理器**: pnpm

> **架构说明**: 项目采用多语言混合架构，Rust 作为 Tauri 后端主导，.NET 负责 Minecraft 核心功能，Python 提供可选的 AI 服务。各语言层通过 gRPC 进行本地进程间通信。

## 快速开始

### 环境要求

- **Node.js** >= 18
- **Rust** >= 1.75
- **.NET SDK** >= 8.0
- **Python** >= 3.10
- **pnpm** (包管理器)
- **Nx CLI** (Monorepo工具)

### 初始化项目

```bash
# 安装 Tauri CLI
cargo install tauri-cli

# 创建项目
cargo create-tauri-app compass-launcher
# 选择: React + TypeScript

# 进入项目
cd compass-launcher

# 安装依赖
pnpm install

# 安装 shadcn/ui
pnpm dlx shadcn-ui@latest init

# 开发模式运行
cargo tauri dev
```

## 项目结构

> **注意**: 实际项目结构请参考 [08-多语言架构设计.md](./08-多语言架构设计.md)，采用 Nx Monorepo 管理多语言包

### 简化视图

```
compass-launcher/
├── packages/
│   ├── compass-frontend/         # TypeScript/React 前端
│   ├── compass-tauri/            # Rust Tauri 外壳
│   ├── compass-minecraft-dotnet/ # .NET Minecraft 核心
│   ├── compass-ai-python/        # Python AI 服务（可选）
│   └── compass-proto/            # 共享 gRPC 协议
├── apps/
│   └── compass-launcher/         # 主应用入口
└── docs/                         # 文档
```

### 详细结构

详见 [08-多语言架构设计.md](./08-多语言架构设计.md) 的"目录结构更新"部分

## 开发规范

### 代码规范

- 使用 ESLint + Prettier 统一代码风格
- TypeScript 严格模式
- 组件使用函数式 + Hooks

### Git 规范

- 分支管理：`main` / `develop` / `feature/*`
- 提交信息：遵循 [Conventional Commits](https://www.conventionalcommits.org/)

### 提交信息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type 类型：**

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试
- `chore`: 构建/工具

## 技术栈

| 层级      | 技术                      |
| --------- | ------------------------- |
| 后端/原生 | Tauri (Rust)              |
| 前端框架  | React 18 + TypeScript     |
| UI 组件   | shadcn/ui                 |
| 样式      | TailwindCSS 4             |
| 状态管理  | Zustand                   |
| 路由      | React Router v6           |
| 构建工具  | Vite                      |

## 功能特性

### MVP (v0.1.0)

- ✅ 正版登录 (Microsoft)
- ✅ 离线模式
- ✅ 多版本管理
- ✅ Mod 加载器支持 (Forge/Fabric/Quilt)
- ✅ Java 自动管理

### 功能扩展 (v0.2.0)

- 🔄 CurseForge/Modrinth 整合包
- 🔄 皮肤管理
- 🔄 联机功能
- 🔄 日志系统

### 高级功能 (v0.3.0)

- 📋 资源集中存储 (pnpm式)
- 📋 性能监控
- 📋 云同步
- 📋 自动更新

### 实验性功能 (Post-v1.0)

- 🧪 AI 智能助手 (崩溃分析、配置优化、游戏向导) - 远期规划

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

[MIT License](../LICENSE)

---

**Compass Launcher** - 为 Minecraft 玩家打造的现代化启动器

