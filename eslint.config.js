import pluginVue from 'eslint-plugin-vue';

export default [
    // 直接使用 Vue 官方推荐的 flat 配置（自带解析器、基础规则）
    ...pluginVue.configs['flat/strongly-recommended'],
    {
        // 忽略文件夹
        ignores: ['node_modules/', 'dist/', '*.config.js'],
        rules: {
            // 关闭组件名必须多词的限制（方便单文件组件）
            'vue/multi-word-component-names': 'off',
            // HTML 缩进交给 Prettier 管，避免和 vue/html-indent 冲突
            'vue/html-indent': 'off',
            // 提示未使用的变量（warn 不阻断）
            'no-unused-vars': 'warn',
        },
    },
];