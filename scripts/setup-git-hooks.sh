#!/usr/bin/env bash
#
# Setup Git Hooks for Compass Launcher
# Run this script after cloning the repository
#

set -e

REPO_ROOT=$(git rev-parse --show-toplevel)
HOOKS_SOURCE="$REPO_ROOT/scripts/git-hooks"
HOOKS_TARGET="$REPO_ROOT/.git/hooks"

echo "🔧 Setting up Git hooks for Compass Launcher..."

# Create hooks directory if it doesn't exist
if [ ! -d "$HOOKS_TARGET" ]; then
    mkdir -p "$HOOKS_TARGET"
fi

# Define hooks
declare -a HOOK_NAMES=("pre-commit" "commit-msg" "pre-push")
declare -A HOOK_DESCRIPTIONS=(
    ["pre-commit"]="Runs formatting and linting before commit"
    ["commit-msg"]="Validates commit message format"
    ["pre-push"]="Runs full check suite before push"
)

for hook in "${HOOK_NAMES[@]}"; do
    source_file="$HOOKS_SOURCE/$hook"
    target_file="$HOOKS_TARGET/$hook"

    if [ -f "$source_file" ]; then
        cp -f "$source_file" "$target_file"
        chmod +x "$target_file"
        echo "  ✅ Installed: $hook - ${HOOK_DESCRIPTIONS[$hook]}"
    else
        echo "  ⚠️  Not found: $hook"
    fi
done

# Set execute permissions (already done above, but ensure for all)
for hook in "${HOOK_NAMES[@]}"; do
    target_file="$HOOKS_TARGET/$hook"
    if [ -f "$target_file" ]; then
        chmod +x "$target_file"
    fi
done
echo "  🔓 Execute permissions set for Unix-like systems"

echo ""
echo "✨ Git hooks setup complete!"
echo "   The following checks will run automatically:"
echo "   • pre-commit: fmt → lint → typecheck"
echo "   • commit-msg: message format validation"
echo "   • pre-push: full check suite + Rust checks"
