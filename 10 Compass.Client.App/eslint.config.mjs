import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        ignores: ["vite.config.ts", "**/*.config.ts"],
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
    {
        ignores: ["dist/**", "node_modules/**", "src-tauri/target/**", "src/routeTree.gen.ts"],
    },
];
