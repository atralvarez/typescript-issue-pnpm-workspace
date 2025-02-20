## Issue

```sh
atralvarez@atralvarez repo % pnpm run start:serverless

> repo@0.0.0 start:serverless /dev/code/repo
> pnpm --filter @repo/serverless-function start


> @repo/serverless-function@0.0.0 start /dev/code/repo/apps/serverless-function
> functions-framework --target=handler

Provided module can't be loaded.
Is there a syntax error in your code?
Detailed stack trace: Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import '/dev/code/repo/packages/database/dist/schema' is not supported resolving ES modules imported from /dev/code/repo/packages/database/dist/index.js
    at finalizeResolution (node:internal/modules/esm/resolve:258:11)
    at moduleResolve (node:internal/modules/esm/resolve:917:10)
    at defaultResolve (node:internal/modules/esm/resolve:1130:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:396:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:365:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:240:38)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:85:39)
    at link (node:internal/modules/esm/module_job:84:36)
Could not load the function, shutting down.
```

## Steps to reproduce

Install the dependencies

```sh
pnpm install
```

Build the packages

```sh
pnpm run build:packages
```

Build the serverless function

```sh
pnpm run build:serverless
```

Start the serverless function

```sh
pnpm run start:serverless
```
