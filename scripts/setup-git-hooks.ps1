#!/usr/bin/env pwsh
#
# Setup Git Hooks for Compass Launcher
# Run this script after cloning the repository
#

$ErrorActionPreference = "Stop"

$RepoRoot = git rev-parse --show-toplevel
$HooksSource = Join-Path $RepoRoot "scripts" "git-hooks"
$HooksTarget = Join-Path $RepoRoot ".git" "hooks"

Write-Host "🔧 Setting up Git hooks for Compass Launcher..." -ForegroundColor Cyan

# Create hooks directory if it doesn't exist
if (-not (Test-Path $HooksTarget)) {
    New-Item -ItemType Directory -Path $HooksTarget -Force | Out-Null
}

# Define hooks
$Hooks = @(
    @{ Name = "pre-commit"; Description = "Runs formatting and linting before commit" }
    @{ Name = "commit-msg"; Description = "Validates commit message format" }
    @{ Name = "pre-push"; Description = "Runs full check suite before push" }
)

foreach ($Hook in $Hooks) {
    $SourceFile = Join-Path $HooksSource $Hook.Name
    $TargetFile = Join-Path $HooksTarget $Hook.Name

    if (Test-Path $SourceFile) {
        Copy-Item -Path $SourceFile -Destination $TargetFile -Force
        Write-Host "  ✅ Installed: $($Hook.Name) - $($Hook.Description)" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  Not found: $($Hook.Name)" -ForegroundColor Yellow
    }
}

# Set execute permissions (Unix-like systems)
if ($IsMacOS -or $IsLinux) {
    foreach ($Hook in $Hooks) {
        $TargetFile = Join-Path $HooksTarget $Hook.Name
        if (Test-Path $TargetFile) {
            chmod +x $TargetFile
        }
    }
    Write-Host "  🔓 Execute permissions set for Unix-like systems" -ForegroundColor Green
}

Write-Host "`n✨ Git hooks setup complete!" -ForegroundColor Cyan
Write-Host "   The following checks will run automatically:" -ForegroundColor Gray
Write-Host "   • pre-commit: fmt → lint → typecheck" -ForegroundColor Gray
Write-Host "   • commit-msg: message format validation" -ForegroundColor Gray
Write-Host "   • pre-push: full check suite + Rust checks" -ForegroundColor Gray
