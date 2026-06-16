import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    // Global ignores
    {
        ignores: [
            "**/dist/**",
            "**/node_modules/**",
            "**/target/**",
            "**/.nx/**",
            "**/Cargo.lock",
            "**/pnpm-lock.yaml",
            "**/routeTree.gen.ts",
        ],
    },

    // Base JavaScript/TypeScript configuration
    js.configs.recommended,
    ...tseslint.configs.recommended,

    // TypeScript specific rules
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
];
