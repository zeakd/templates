# pnpm Monorepo Template

A modern monorepo template using pnpm workspaces, TypeScript 5.8, ESLint 9 with @stylistic plugin, and Changesets.

## Features

- 🚀 **pnpm workspaces** - Fast, disk space efficient package manager
- 📦 **TypeScript 5.9** - Latest TypeScript with modern configuration
- 🎨 **ESLint 9 + @stylistic** - Modern linting and formatting in one tool (no Prettier needed)
- 🔄 **Changesets** - Version management and changelog generation
- 📁 **Organized structure** - Clear separation between apps and packages
- 🛠️ **VS Code integration** - Optimized settings for the best developer experience
- 📌 **Node.js 22** - Using the latest LTS version via .nvmrc

## Structure

```
.
├── apps/
│   └── web/              # Example web application
├── packages/
│   ├── ui/               # Shared UI components
│   └── utils/            # Shared utilities
├── .changeset/           # Changesets configuration
├── .vscode/              # VS Code workspace settings
├── eslint.config.js      # ESLint 9 flat config
├── tsconfig.json         # Root TypeScript config
└── pnpm-workspace.yaml   # pnpm workspace configuration
```

## Getting Started

### Prerequisites

- Node.js 22+ (use `nvm use` to switch to the correct version)
- pnpm 9.15.2+ (will be installed automatically via Corepack)

### Setup

1. Clone this template:
   ```bash
   git clone <repository-url> my-monorepo
   cd my-monorepo
   ```

2. Enable Corepack and install dependencies:
   ```bash
   corepack enable
   pnpm install
   ```

3. Start development:
   ```bash
   pnpm dev
   ```

## Available Scripts

### Root level scripts

- `pnpm build` - Build all packages and apps
- `pnpm dev` - Start all packages and apps in development mode
- `pnpm lint` - Lint all packages
- `pnpm lint:fix` - Fix linting issues
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm changeset` - Create a new changeset
- `pnpm version` - Version packages based on changesets
- `pnpm release` - Build and publish packages

### Package/App level scripts

Each package and app has its own scripts:
- `build` - Build the package/app
- `dev` - Start in development mode
- `lint` - Lint the package/app
- `typecheck` - Type check the package/app

## Working with the Monorepo

### Adding a new package

1. Create a new directory under `packages/` or `apps/`
2. Add a `package.json` with the appropriate name (e.g., `@repo/new-package`)
3. Add a `tsconfig.json` extending the root config
4. Start coding!

### Running commands in specific packages

```bash
# Run a command in a specific package
pnpm --filter @repo/ui build

# Run a command in all packages
pnpm -r build

# Run commands in parallel
pnpm -r --parallel dev
```

### Managing dependencies

```bash
# Add a dependency to a specific package
pnpm --filter @repo/web add express

# Add a dev dependency to the root
pnpm add -D -w @types/node

# Add a dependency to all packages
pnpm -r add lodash
```

## Changesets Workflow

1. Make your changes
2. Create a changeset:
   ```bash
   pnpm changeset
   ```
3. Commit the changeset file
4. When ready to release:
   ```bash
   pnpm version  # Updates versions
   pnpm release  # Builds and publishes
   ```

## ESLint + @stylistic

This template uses ESLint 9 with the @stylistic plugin for both linting and formatting. No Prettier needed!

The configuration includes:
- TypeScript support via typescript-eslint
- Stylistic rules for consistent code formatting
- Modern ESLint flat config format

VS Code is configured to auto-fix on save, providing a seamless development experience.

## TypeScript Configuration

The root `tsconfig.json` provides:
- ES2022 target with ESNext modules
- Strict type checking
- Path aliases for workspace packages
- Modern module resolution

Each package extends this base configuration and can add its own specific settings.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm changeset` to document your changes
4. Submit a pull request

## License

MIT