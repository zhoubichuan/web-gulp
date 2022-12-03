module.exports = {
  // 基础配置
  base: '/web-gulp/', // 部署站点的基础路径
  description: 'gulp相关知识点',
  locales: {
    // 默认标题
    '/': {
      title: 'gulp笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  port: 3009,
  dest: 'web-gulp', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    repo: 'https://github.com/zhoubichuan/web-gulp', // 源码地址
    repoLabel: '查看源码', // (查看源码的)组件名称
    docsBranch: 'master', // git 源仓库 仓库分支
    editLinks: true, // 编辑链接
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    editLinkText: '在github上编辑此页',
    sidebarDepth: 2,
    lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
    nav: [
      {
        text: '基础知识',
        items: [
          {
            text: '1.gulp基础',
            link: '/base/build/1.config'
          },
          // {
          //   text: '2.gulp相关实践',
          //   link: '/base/practice/1.gulp',
          // }
        ]
      },
      // {
      //   text: '高级知识',
      //   items: [
      //     {
      //       text: '1.gulp源码分析',
      //       link: '/senior/use/1.index'
      //     },
      //   ]
      // }
    ],
    sidebar: {
      '/base/build/': [
        '1.config',
        '2.webpack',
        '3.file',
        '4.single',
        '5.page',
        '7.module',
        '8.project',
        '9.utils',
        '10.ui',
        '11.data',
        '12.skill',
        '13.com',
        '14.data',
        '15.api'
      ],
      '/base/practice/': [
        '1.gulp',
        '2.Jenkins',
        '3.gitlab',
        'vscode',
        'test',
        'prem',
        'i18n'
      ],
      '/senior/use/': [
        '1.index',
      ],
    },
    searchMaxSuggestoins: 10
  }
}