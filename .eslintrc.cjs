module.exports = {
  extends: 'standard-with-typescript',
  ignorePatterns: ['vite.config.ts', 'env.d.ts'],
  parserOptions: {
    project: './tsconfig.json'
  }
}
