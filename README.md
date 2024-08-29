# Upe Impact Site

This repo is a for the Upe Impact site built duing Onchain Summer II.

Showcases how to build:

- Gasless transactions
- Account abstraction
- Easy onboarding

## Live site

[Upe | Impact](https://i.u.pe)

## Running locally

### Setup client id

Before you start, you need to replace the placeholder `clientId` with your client ID to use thirdweb SDK.

Refer to [Creating a client](https://portal.thirdweb.com/typescript/v5/client) guide to see how you can get a client id.

Go to `src/constants.ts` file and replace the placeholder `clientId` with your client ID.

```ts
const clientId = "......";
```

### Enable corepack (Added in Node v16.9.0)

The preferred way to manage Yarn is by-project and through Corepack, a tool shipped by default with Node.js. Modern releases of Yarn aren't meant to be installed globally, or from npm.

Start by enabling Corepack, if it isn't already; this will add the yarn binary to your PATH:

```
corepack enable
```

### Install dependencies

```bash
yarn install
```

### Start development server

```bash
yarn dev
```

## Resources

- [thirdweb Connect documentation](https://portal.thirdweb.com/connect)
- [Connect SDK refence](https://portal.thirdweb.com/typescript/v5)
- [thirdweb Dashboard](https://thirdweb.com/dashboard)