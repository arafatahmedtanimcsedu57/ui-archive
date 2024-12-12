# Turborepo + NextJS + Shadcn + Storybook starter

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a ui library using shadcn-ui
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Install

To get started, go to the root and run the following command:

```
pnpm install
```

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

I've also included various scripts to help you develop your apps and packages:

- `dev:docs`: develop the `docs` app
- `dev:web`: develop the `web` app
- `dev:both`: develop both the `docs` and `web` apps
- `dev:ui`: develop the `ui` package with Storybook
- `ui:add`: add a new component to the `ui` package using the shadcn-ui CLI.
