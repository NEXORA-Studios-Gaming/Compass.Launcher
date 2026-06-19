# Compass Proto

Compass Launcher 的 Protocol Buffers 契约定义，用于 Rust (Tauri) 和 .NET (Core) 之间的通信。

## 目录结构

```
27 Compass.Proto/
├── compass/                  # Proto 文件目录
│   ├── common.proto          # 通用类型和消息
│   ├── auth.proto            # 认证相关
│   ├── minecraft.proto       # Minecraft 版本/启动
│   ├── download.proto        # 下载管理
│   ├── config.proto          # 配置管理
│   └── instance.proto        # 实例管理
├── generate.ps1              # 代码生成脚本 (PowerShell)
├── Cargo.toml                # Rust 构建配置 (可选)
└── README.md                 # 本文件
```

## 安装依赖

### Windows

```powershell
# 使用 winget 安装 protoc
winget install --id Google.Protobuf

# 安装 Rust prost 工具 (用于生成 Rust 代码)
cargo install prost-build
```

### macOS

```bash
brew install protobuf
```

### Linux

```bash
# Ubuntu/Debian
sudo apt-get install -y protobuf-compiler

# Arch
sudo pacman -S protobuf
```

## 生成代码

### 一键生成 (推荐)

```powershell
# 在 27 Compass.Proto 目录下运行
.\generate.ps1
```

### 手动生成 C# 代码

```powershell
protoc --proto_path=. --csharp_out="../21 Compass.Core/Proto" compass/*.proto
```

### 手动生成 Rust 代码

```bash
# 需要配置 prost-build
cargo build
```

## 使用说明

### C# (.NET Core)

生成的代码位于 `21 Compass.Core/Proto/`，命名空间为 `Compass.Proto.*`。

```csharp
using Compass.Proto.Auth;

var request = new LoginOfflineRequest {
    Username = "PlayerName"
};
```

### Rust (Tauri)

生成的代码位于 `10 Compass.Client.App/src-tauri/src/core_client/proto/`，使用 `prost` crate。

```rust
use compass_proto::auth::LoginOfflineRequest;

let request = LoginOfflineRequest {
    username: "PlayerName".to_string(),
    uuid: None,
};
```

## 添加新的 Proto 文件

1. 在 `compass/` 目录下创建 `.proto` 文件
2. 添加 `option csharp_namespace` 和 `option rust_package`
3. 运行 `generate.ps1` 生成代码
4. 在项目中引用生成的代码

## 命名规范

- **包名**: `compass.<module>` (如 `compass.auth`)
- **C# 命名空间**: `Compass.Proto.<Module>` (如 `Compass.Proto.Auth`)
- **Rust 包名**: `compass_proto::<module>` (如 `compass_proto::auth`)
- **消息名**: PascalCase (如 `LoginRequest`)
- **字段名**: snake_case (如 `user_name`)

## 版本管理

Proto 文件变更遵循以下规则：

1. **向后兼容**: 只添加新字段，不删除旧字段
2. **字段编号**: 一旦分配，永久不变
3. **弃用字段**: 使用 `reserved` 标记，不删除
4. **重大变更**: 需要更新版本号并通知所有依赖方
