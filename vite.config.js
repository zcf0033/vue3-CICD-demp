// Vite 插件：让 Vite 能解析 .vue 单文件组件（<template> + <script> + <style>）
import vue from '@vitejs/plugin-vue'
// Vite 的配置函数，提供 TypeScript 智能提示（即使 .js 文件也能用）
import { defineConfig } from 'vite'

export default defineConfig({
    // 加载的 Vite 插件列表
    plugins: [vue()],

    // 构建相关配置
    build: {
        // 打包输出目录（默认就是 dist，这里显式声明）
        outDir: 'dist',
    },

    // Vitest 测试配置（Vitest 与 Vite 共用这份配置文件）
    test: {
        // 全局模式：test / expect / describe 等 API 无需手动 import
        globals: true,
        // 测试环境：用 jsdom 在 Node.js 里模拟浏览器 DOM
        environment: 'jsdom',
        // 测试启动前自动执行的文件（通常放 @testing-library/jest-dom 的全局导入）
        setupFiles: './vitest.setup.js',
    },
})