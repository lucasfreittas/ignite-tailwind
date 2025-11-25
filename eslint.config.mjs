// eslint.config.mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

// NÃO importe o plugin do tailwind aqui

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // Simplesmente avisa que deve seguir o arquivo .prettierrc
      "prettier/prettier": "error",
    },
  },

  prettier,
]);
