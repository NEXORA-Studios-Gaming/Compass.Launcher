# Proto 代码生成脚本
# 生成 C# (.NET) 和 Rust 代码

param(
    [string]$ProtoDir = $PSScriptRoot,
    [string]$CSharpOut = "$PSScriptRoot/../21 Compass.Core/Proto",
    [string]$RustOut = "$PSScriptRoot/../10 Compass.Client.App/src-tauri/src/core_client/proto"
)

$ErrorActionPreference = "Stop"

Write-Host "=== Compass Proto 代码生成 ===" -ForegroundColor Cyan
Write-Host "Proto 目录: $ProtoDir"
Write-Host "C# 输出: $CSharpOut"
Write-Host "Rust 输出: $RustOut"
Write-Host ""

# 检查 protoc
$protocVersion = protoc --version
Write-Host "使用 $protocVersion" -ForegroundColor Green

# 创建输出目录
New-Item -ItemType Directory -Force -Path $CSharpOut | Out-Null
New-Item -ItemType Directory -Force -Path $RustOut | Out-Null

# 获取所有 proto 文件
$protoFiles = Get-ChildItem -Path "$ProtoDir/compass" -Filter "*.proto" | Select-Object -ExpandProperty FullName

Write-Host "找到 $($protoFiles.Count) 个 proto 文件:" -ForegroundColor Yellow
$protoFiles | ForEach-Object { Write-Host "  - $(Split-Path $_ -Leaf)" }
Write-Host ""

# 生成 C# 代码
Write-Host "正在生成 C# 代码..." -ForegroundColor Cyan
$csharpArgs = @(
    "--proto_path=$ProtoDir"
    "--csharp_out=$CSharpOut"
    "--csharp_opt=file_extension=.cs"
) + $protoFiles

& protoc $csharpArgs
if ($LASTEXITCODE -ne 0) {
    Write-Error "C# 代码生成失败"
    exit 1
}
Write-Host "C# 代码生成完成: $CSharpOut" -ForegroundColor Green
Write-Host ""

# 生成 Rust 代码 (需要 prost-build)
Write-Host "正在生成 Rust 代码..." -ForegroundColor Cyan
Write-Host "注意: 需要安装 prost-build 工具" -ForegroundColor Yellow

# 检查是否有 cargo
$cargoExists = Get-Command cargo -ErrorAction SilentlyContinue
if ($cargoExists) {
    # 使用 prost-build 生成 Rust 代码
    Set-Location $PSScriptRoot
    cargo run --manifest-path "$PSScriptRoot/Cargo.toml" --bin proto-gen 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Rust 代码生成完成: $RustOut" -ForegroundColor Green
    } else {
        Write-Warning "Rust 代码生成失败，请手动运行 prost-build"
    }
} else {
    Write-Warning "未找到 cargo，跳过 Rust 代码生成"
}

Write-Host ""
Write-Host "=== 代码生成完成 ===" -ForegroundColor Cyan
