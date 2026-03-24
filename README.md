# @resolid/config

Resolid 通用配置, 包含了 `TypeScript`, `Oxlint` 的基础配置

## 安装

```bash
pnpm add -D @resolid/config oxlint typescript
```

## TypeScript 配置

增加下面内容到 `tsconfig.json`

### 普通项目

```json
{
  "extends": "@resolid/config/tsconfig/base.json"
}
```

### Node 项目

```json
{
  "extends": "@resolid/config/tsconfig/node.json"
}
```

### React 项目

```json
{
  "extends": "@resolid/config/tsconfig/react.json"
}
```

## Oxlint 配置

### Javascript Lint 配置

```js
// oxlint.config.ts
import { defineConfig } from "oxlint";
import javascriptConfig from "@resolid/config/oxlint/javascript";

export default defineConfig({
  extends: [javascriptConfig],
});
```

### TypeScript Lint 配置

```js
// oxlint.config.ts
import { defineConfig } from "oxlint";
import typescriptConfig from "@resolid/config/oxlint/typescript";

export default defineConfig({
  extends: [typescriptConfig],
});
```

### React Lint 配置

由于 Oxlint 配置解析器的限制，目前你必须直接安装所需的 JS 插件

```shell
pnpm add -D eslint-plugin-react-hooks eslint-plugin-react-you-might-not-need-an-effect
```

```js
// oxlint.config.ts
import { defineConfig } from "oxlint";
import reactConfig from "@resolid/config/oxlint/react";

export default defineConfig({
  extends: [reactConfig],
});
```

### 环境 Lint 设置

```js
// oxlint.config.ts
import { defineConfig } from "oxlint";
// 浏览器环境
import browserConfig from "@resolid/config/oxlint/browser";
// Node 环境
import nodeConfig from "@resolid/config/oxlint/node";

export default defineConfig({
  extends: [browserConfig, nodeConfig],
});
```

## Oxfmt 配置

```js
import { oxfmtConfig } from "@resolid/config/oxfmt";

export default oxfmtConfig({});
```
