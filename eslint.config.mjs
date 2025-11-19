import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Ignorar pastas padrão
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // Habilitar Prettier
  {
    plugins: {
      prettier: pluginPrettier,
    },

    rules: {
      "prettier/prettier": "error",
    },
  },

  // Deve ser sempre o último
  prettier,
]);
