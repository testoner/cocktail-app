import eslint from "@eslint/js";
import eslintPluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import typescriptEslint from "typescript-eslint";
import globals from "globals";

export default typescriptEslint.config(
  { ignores: ["*.d.ts", "**/dist", "**/coverage"] },
  {
    files: ["**/*.{ts,vue}"],
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs["flat/recommended"],
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
        extraFileExtensions: [".vue"], // <-- добавляем .vue сюда
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
      "no-console": "warn",
      "vue/multi-word-component-names": "off",
    },
  },
);
