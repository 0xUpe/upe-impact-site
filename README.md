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