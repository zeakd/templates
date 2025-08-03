import { defineConfig, globalIgnores } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['**/dist/**', '**/node_modules/**', '**/coverage/**', '**/*.config.js']),
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
]);