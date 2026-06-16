# Compass Launcher

一款现代化的 Minecraft 启动器，为玩家提供流畅、高效的游戏体验。

---

## 功能特性

### 核心功能

- **正版登录** - 支持 Microsoft 账号登录（内置浏览器 OAuth）
- **离线模式** - 支持离线游戏，无需网络连接
- **多版本管理** - 轻松安装、切换不同 Minecraft 版本
- **Mod 加载器支持** - 完整支持 Forge、Fabric、Quilt
- **Java 自动管理** - 自动检测系统 Java，支持内置下载
- **多开支持** - 可同时运行多个游戏实例
- **崩溃分析** - 自动分析崩溃原因并提供解决方案

### 进阶功能

- **整合包支持** - 一键安装 CurseForge、Modrinth 整合包
- **皮肤管理** - 本地皮肤、正版皮肤、第三方皮肤站支持
- **联机功能** - 局域网联机、第三方联机服务、服务器列表
- **日志系统** - 游戏日志查看、一键导出
- **Mod 生态** - 完整的 Mod 浏览、下载、管理功能
- **实例导入导出** - 支持 HMCL/PCL 格式、分享码

### 特色功能

- **资源集中存储** - 类似 pnpm 的资源集中存储机制，节省磁盘空间
- **性能监控** - 实时游戏性能监控
- **云同步** - 配置云端同步（存档不同步）
- **自动更新** - 可配置的更新机制
- **命令行支持** - 快速启动指定实例

---

## 系统要求

| 项目 | 最低要求 | 推荐配置 |
|------|----------|----------|
| **操作系统** | Windows 10 (64-bit) | Windows 11 |
| **内存** | 4 GB RAM | 8 GB RAM |
| **存储空间** | 500 MB（启动器）+ 游戏所需空间 | SSD 推荐 |
| **网络** | 宽带互联网连接 | - |

> **注意**：macOS 和 Linux 版本正在计划中。

---

## 下载与安装

### 最新版本

请前往 [Releases](../../releases) 页面下载最新版本。

### 安装步骤

1. 下载对应平台的安装包
2. 运行安装程序
3. 按照向导完成安装
4. 启动 Compass Launcher，登录你的 Microsoft 账号
5. 开始你的 Minecraft 之旅！

---

## 使用指南

### 快速开始

1. **首次启动** - 选择游戏目录位置
2. **登录账号** - 使用 Microsoft 账号登录或选择离线模式
3. **创建实例** - 选择 Minecraft 版本和 Mod 加载器
4. **启动游戏** - 点击启动按钮即可开始游戏

### 详细文档

如需了解更多使用细节，请参考 [用户手册](./01%20User%20Manual)。

---

## 常见问题

**Q: 支持哪些 Minecraft 版本？**

A: 支持从 1.0 到最新版本的所有 Minecraft Java 版。

**Q: 可以导入其他启动器的配置吗？**

A: 支持导入 HMCL、PCL 等主流启动器的实例配置。

**Q: 游戏数据存储在哪里？**

A: 默认存储在用户目录下的 `.minecraft` 文件夹中，可在设置中自定义。

**Q: 如何反馈问题或建议？**

A: 请通过 [Issues](../../issues) 提交反馈。

---

## 许可证声明

本项目采用 Monorepo 结构，各子包使用不同的许可证：

| 子包 | 路径 | 许可证 |
|------|------|--------|
| **Compass Client App** | `10 Compass.Client.App/` | [AGPL-3.0-only](./10%20Compass.Client.App/LICENSE) |
| **用户手册** | `01 User Manual/` | [CC BY-SA 4.0](./01%20User%20Manual/LICENSE) |
| **开发者指南** | `00 Developers Guide/` | [CC BY-NC-SA 4.0](./00%20Developers%20Guide/LICENSE) |

### 许可证说明

- **AGPL-3.0-only**: 应用程序代码采用 GNU Affero General Public License v3.0，要求衍生作品同样开源。
- **CC BY-SA 4.0**: 用户手册采用知识共享署名-相同方式共享 4.0 国际许可协议。
- **CC BY-NC-SA 4.0**: 开发者指南采用知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议。

---

## 贡献与支持

### 贡献代码

欢迎提交 Pull Request！请确保：

1. 代码符合项目规范
2. 通过所有测试
3. 更新相关文档

### 支持项目

如果 Compass Launcher 对你有帮助，欢迎：

- ⭐ 给项目点个 Star
- 🐛 提交 Bug 报告
- 💡 提出功能建议
- 📖 帮助完善文档

---

## 致谢

感谢以下开源项目：

- [Tauri](https://tauri.app/) - 跨平台桌面应用框架
- [React](https://react.dev/) - 前端框架
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [CmlLib.Core](https://github.com/CmlLib/CmlLib.Core) - Minecraft 启动核心

---

**Compass Launcher** - 为 Minecraft 玩家打造的现代化启动器

Made with ❤️ by [NEXORA Studios](mailto:jim.lin@nexora-studios.tech)
