import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    // 站点的语言
    lang: 'zh-CN',
    // 站点的标题
    title: 'BBNext',
    // 站点的描述
    description: '这是我的第一个 VuePress 站点',
    // 部署站点的基础路径
    base: '/BBNext/',
    // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签
    head: [],

    debug: true

})
