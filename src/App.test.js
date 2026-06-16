import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/vue'
import App from './App.vue'
describe('APP 组件', () => {
    it('应该显示标题文字', () => {
        render(App)
        const title = screen.getByText(/真实Vite\+Vue3 CI\/CD 已跑通/i)
        expect(title).toBeInTheDocument()
    })
})










