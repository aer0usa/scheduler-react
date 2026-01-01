// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import reactPlugin from "eslint-plugin-react";


export default [
    pluginJs.configs.recommended,
    {
        ...reactPlugin.configs.flat.recommended,
        languageOptions: {
            globals: {
                ...globals.serviceWorker,
                ...globals.browser,
            },
            ...reactPlugin.configs.flat.recommended.languageOptions,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            semi: "error",
            "prefer-const": "error",
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
        },
    },
];
