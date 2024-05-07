# 这是一个 vue3 的加载动画

#### 下载

```bash
pnpm add m78-loader
```

#### 引入

main.ts

```ts
// 引入样式
import 'm78-loader/loader.css';
```

#### 使用

test.vue

```ts
<script lang="ts" setup>
import { loader } from 'm78-loader';
```

```html
<template>
    <!-- h 是高度 （默认50vh） -->
    <!-- vertical 加载动画竖向 （默认横向） -->
    <!-- test 测试模式，会在加载动画的边界加上红色边框（默认正常模式） -->
    <loader h="calc(100vh - 80px)" vertical></loader
></template>
```
