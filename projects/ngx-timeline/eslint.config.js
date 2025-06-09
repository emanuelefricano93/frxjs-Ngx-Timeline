// @ts-check
import tseslint from "typescript-eslint";
import rootConfig from "../../eslint.config.js";

export default tseslint.config(
  ...rootConfig,
  {
    files: ["**/*.ts"],
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "lib",
          style: "camelCase",
        },
      ],
      // "@angular-eslint/component-selector": [
      //   "error",
      //   {
      //     type: "element",
      //     prefix: "lib",
      //     style: "kebab-case",
      //   },
      // ],
      "@angular-eslint/component-selector": "off",
    },
  },
  {
    files: ["**/*.html"],
    rules: {
      "@angular-eslint/template/click-events-have-key-events": "off",
      "@angular-eslint/template/interactive-supports-focus": "off"
    },
  }
);
