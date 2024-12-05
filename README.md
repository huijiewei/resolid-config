# @resolid/config

Resolid 通用配置, 包含了 `TypeScript`, `Biome` 的基础配置

## 使用方法

### 安装

```bash
pnpm add -D @resolid/config
```

### TypeScript 配置

增加下面内容到 `tsconfig.json`

#### 普通项目

```json
{
  "extends": "@resolid/config/tsconfig.base"
}
```

#### React 项目

```json
{
  "extends": "@resolid/config/tsconfig.react"
}
```

### Biome 配置

#### 普通配置

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": ["@resolid/config/biome"]
}
```

#### React 项目

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": [
    "@resolid/config/biome",
    "@resolid/config/biome.react"
  ]
}
```

#### TailwindCSS 项目

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": [
    "@resolid/config/biome",
    "@resolid/config/biome.tailwind"
  ]
}
```

