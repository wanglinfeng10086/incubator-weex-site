module.exports = {
  title: 'WEEX',
  description: 'Weex',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "//gw.alicdn.com/tps/TB1XNqxPXXXXXcSXVXXXXXXXXXX-64-63.png"
      }
    ],
    [
      "script",
      {
        "src": "//g.alicdn.com/alilog/mlog/aplus_v2.js"
      }
    ],
    [
      "meta",
      {
        "name": "data-spm",
        "dataSpmProtocol": "i",
        "content": "a2c7j"
      }
    ],
    [
      "meta",
      {
        "name": "aplus-ajax",
        "content": "chksum"
      }
    ],
    [
      "meta",
      {
        "name": "aplus-waiting",
        "content": "MAN"
      }
    ],
    [
      "meta",
      {
        "name": "google-site-verification",
        "content": "FbH8DPHpxdDJlfkKLKXuXWOu69DI8ZRRP8O2Phg8UKw"
      }
    ],
    [
      "meta",
      {
        "name": "baidu-site-verification",
        "content": "WRr1iWvsYK"
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'en-US'
    },
    '/zh/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    "spm": "a2c7j",
    "repo": "apache/incubator-weex",
    "docsRepo": "apache/incubator-weex-site",
    "docsDir": "docs",
    "docsBranch": "master",
    "editLinks": true,
    "version": "v0.28",
    "versionLink": "/download/download.html",
    "logo": "/logo@2x.svg",
    "search": false,
    locales: {
      '/': {
        "selectText": "Languages",
        "label": "English",
        "lastUpdated": "Last Updated",
        "editLinkText": "Edit this page",
        "openIssueText": "Suggest",
        "scoreText": {
          "good": "Excellent doc",
          "bad": "Unusable doc"
        },
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Docs', link: '/docs/' },
          { text: 'Third Party Tools', link: '/tools/' },
          { text: 'Download', link: '/download/' },
          { text: 'Community', link: '/community/' },
          { text: 'Blog', link: '/blog/' }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Getting Started',
              collapsable: false,
              children: [
                ['introduction', 'Introduction'],
                ['front-end-frameworks', 'Front-End Frameworks'],
                ['platform-difference', 'Platform Difference'],
                ['use-vue-in-weex', 'Use Vue in Weex'],
                ['use-rax-in-weex', 'Use Rax in Weex'],
                ['playground', 'Playground App']
              ]
            },
            {
              title: 'Develop',
              collapsable: false,
              children: [
                ['develop/setup-develop-environment', 'Setup Develop Environment'],
                ['develop/create-a-new-app', 'Create a New App'],
                ['develop/weex_cli', 'Weex CLI'],
                ['develop/integrate-to-android-app', 'Integrate to Android'],
                ['develop/integrate-to-iOS-app', 'Integrate to iOS'],
                ['develop/weex_error_code', 'WeexErrorCode']
              ]
            },
            {
              title: 'Debug',
              collapsable: false,
              children: [
                ['debug/integrate-devtool-to-android', 'Integrate Devtool to Android'],
                ['debug/integrate-devtool-to-ios', 'Integrate Devtool to iOS'],
                ['debug/debug', 'Debug']
              ]
            },
            {
              title: 'Extend',
              collapsable: false,
              children: [
                ['extend/extend-android', 'Extend Android'],
                ['extend/extend-ios', 'Extend iOS'],
                ['extend/extend-ios-with-swift', 'Extend iOS with Swift'],
                ['extend/extend-web', 'Extend Web Renderer']
              ]
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: [
                ['advanced/asset-path', 'Asset Path'],
                ['advanced/downgrade', 'Downgrade'],
                ['advanced/use-vuex-and-vue-router', 'Use Vuex and vue-router'],
                ['advanced/multi-size-screen', 'Fit for multi-size screen']
              ]
            },
            {
              title: 'Contribute',
              collapsable: false,
              children: [
                ['contribute/how-to-contribute', 'Join Weex community'],
                ['contribute/thanks', 'Thanks'],
              ]
            }
          ],
          '/docs/': [
            {
              title: 'API',
              collapsable: false,
              children: [
                ['api/weex-variable', 'Weex Variable'],
                ['api/android-apis', 'Android APIs'],
                ['api/ios-apis', 'iOS APIs'],
                ['api/js-service', 'JS Service'],
                ['api/broadcast-channel', 'BroadcastChannel']
              ]
            },
            {
              title: 'Built-in Components',
              collapsable: false,
              children: [
                ['components/a', '<a>'],
                ['components/div', '<div>'],
                ['components/text', '<text>'],
                ['components/image', '<image>'],
                ['components/list', '<list>'],
                ['components/cell', '<cell>'],
                ['components/loading', '<loading>'],
                ['components/refresh', '<refresh>'],
                ['components/recycle-list', '<recycle-list>'],
                ['components/scroller', '<scroller>'],
                ['components/slider', '<slider>'],
                ['components/indicator', '<indicator>'],
                ['components/textarea', '<textarea>'],
                ['components/input', '<input>'],
                ['components/waterfall', '<waterfall>'],
                ['components/video', '<video>'],
                ['components/web', '<web>'],
                ['components/richtext', '<richtext>']
              ]
            },
            {
              title: 'Built-in Modules',
              collapsable: false,
              children: [
                ['modules/animation', 'animation'],
                ['modules/clipboard', 'clipboard'],
                ['modules/dom', 'dom'],
                ['modules/globalEvent', 'globalEvent'],
                ['modules/meta', 'meta'],
                ['modules/modal', 'modal'],
                ['modules/navigator', 'navigator'],
                ['modules/picker', 'picker'],
                ['modules/storage', 'storage'],
                ['modules/stream', 'stream'],
                ['modules/webview', 'webview'],
                ['modules/websockets', 'webSockets'],
                ['modules/deviceInfo', 'deviceInfo'],
                ['modules/console-log', 'console-log']
              ]
            },
            {
              title: 'Styles',
              collapsable: false,
              children: [
                ['styles/common-styles', 'Common Styles'],
                ['styles/text-styles', 'Text Styles'],
                ['styles/css-units', 'CSS Units'],
                ['styles/color-name', 'Color name']
              ]
            },
            {
              title: 'Events',
              collapsable: false,
              children: [
                ['events/common-events', 'Common Events'],
                ['events/event-bubbling', 'Event Bubble'],
                ['events/gesture', 'Gesture']
              ]
            }
          ],
          '/tools/': [
            ['extension', 'VSCode Extension'],
            ["dotwe", "Online Editor"],
            ['eeui', 'EEUI Framework']
          ],
          '/community/': [
            ['code-demos', 'Code Demos'],
            ['who-is-using-weex', 'Who is using Weex'],
            ['weex-third-party-extensions', 'Plugins Market']
          ],
          '/blog/': [
            ['write-a-blog', 'Write a Blog'],
            ['ios-weexcore.md', 'Adapt iOS WeexSDK to WeexCore'],
            ['weex-third-party-extensions','List of Third Party Plugin']
          ],
          '/download/':[
             ['download', "Source Download"],
             ['major_change', 'Major Change'] 
          ]
        },
        "algolia": {
          "apiKey": "a6896fe3619315a7f04e9a76bbbbbfcb",
          "indexName": "weex",
          "algoliaOptions": {
            "facetFilters": [
              "lang:en-US"
            ]
          }
        }
      },
      '/zh/': {
        "selectText": "选择语言",
        "label": "简体中文",
        "lastUpdated": "上次更新",
        "editLinkText": "编辑此页",
        "openIssueText": "提交建议",
        "scoreText": {
          "good": "文档写得很棒",
          "bad": "文档写得很差"
        },
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '文档', link: '/zh/docs/' },
          { text: '第三方工具', link: '/zh/tools/' },
          { text: '下载', link: '/zh/download/' },
          { text: '社区', link: '/zh/community/' },
          { text: '博客', link: '/zh/blog/' }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '快速上手',
              collapsable: false,
              children: [
                ['introduction', '简介'],
                ['front-end-frameworks', '前端框架'],
                ['platform-difference', '平台差异'],
                ['use-vue-in-weex', '在Weex中使用Vue.js'],
                ['use-rax-in-weex', '在Weex中使用Rax.js'],
                ['playground', 'Playground 应用']
              ]
            },
            {
              title: '开发',
              collapsable: false,
              children: [
                ['develop/setup-develop-environment', '设置开发环境'],
                ['develop/create-a-new-app', '创建一个新的app'],
                ['develop/weex_cli', 'Weex CLI'],
                ['develop/integrate-to-android-app', '集成到Android应用'],
                ['develop/integrate-to-iOS-app', '集成到iOS应用'],
                ['develop/weex_error_code', 'WEEX常见错误码']
              ]
            },
            {
              title: '调试',
              collapsable: false,
              children: [
                ['debug/integrate-devtool-to-android', '集成Devtool到Android'],
                ['debug/integrate-devtool-to-ios', '集成Devtool到iOS'],
                ['debug/debug', '调试']
              ]
            },
            {
              title: '扩展',
              collapsable: false,
              children: [
                ['extend/extend-android', '扩展Android能力'],
                ['extend/extend-ios', '扩展iOS能力'],
                ['extend/extend-ios-with-swift', '使用Swift扩展iOS能力'],
                ['extend/extend-web', '扩展Web组件']
              ]
            },
            {
              title: '高阶特性',
              collapsable: false,
              children: [
                ['advanced/asset-path', '资源路径'],
                ['advanced/downgrade', '降级方案'],
                ['advanced/use-vuex-and-vue-router', '使用Vuex和vue-router'],
                ['advanced/multi-size-screen', '适应不同尺寸屏幕']
              ]
            },
            {
              title: '贡献',
              collapsable: false,
              children: [
                ['contribute/how-to-contribute', '加入 Weex 社区'],
                ['contribute/thanks', '鸣谢'],
              ]
            }
          ],
          '/zh/docs/': [
            {
              title: 'API',
              collapsable: false,
              children: [
                ['api/weex-variable', 'Weex 环境变量'],
                ['api/android-apis', 'Android 接口'],
                ['api/ios-apis', 'iOS 接口'],
                ['api/js-service', 'JS 服务'],
                ['api/broadcast-channel', '跨页面通信']
              ]
            },
            {
              title: '内置组件',
              collapsable: false,
              children: [
                ['components/a', '<a>'],
                ['components/div', '<div>'],
                ['components/text', '<text>'],
                ['components/image', '<image>'],
                ['components/list', '<list>'],
                ['components/cell', '<cell>'],
                ['components/loading', '<loading>'],
                ['components/refresh', '<refresh>'],
                ['components/recycle-list', '<recycle-list>'],
                ['components/scroller', '<scroller>'],
                ['components/slider', '<slider>'],
                ['components/indicator', '<indicator>'],
                ['components/textarea', '<textarea>'],
                ['components/input', '<input>'],
                ['components/waterfall', '<waterfall>'],
                ['components/video', '<video>'],
                ['components/web', '<web>'],
                ['components/richtext', '<richtext>']
              ]
            },
            {
              title: '内置模块',
              collapsable: false,
              children: [
                ['modules/animation', 'animation'],
                ['modules/clipboard', 'clipboard'],
                ['modules/dom', 'dom'],
                ['modules/globalEvent', 'globalEvent'],
                ['modules/meta', 'meta'],
                ['modules/modal', 'modal'],
                ['modules/navigator', 'navigator'],
                ['modules/picker', 'picker'],
                ['modules/storage', 'storage'],
                ['modules/stream', 'stream'],
                ['modules/webview', 'webview'],
                ['modules/websockets', 'webSockets'],
                ['modules/deviceInfo', 'deviceInfo'],
                ['modules/console-log', 'console-log']
              ]
            },
            {
              title: '样式',
              collapsable: false,
              children: [
                ['styles/common-styles', '通用样式'],
                ['styles/text-styles', '文本样式'],
                ['styles/css-units', 'CSS 单位'],
                ['styles/color-name', '颜色值']
              ]
            },
            {
              title: '事件',
              collapsable: false,
              children: [
                ['events/common-events', '通用事件'],
                ['events/event-bubbling', '事件冒泡'],
                ['events/gesture', '手势']
              ]
            }
          ],
          '/zh/tools/': [
            ['extension', 'VSCode 插件'],
            ["dotwe", "Online Editor"],
            ["eeui", "EEUI 框架"]
          ],
          '/zh/community/': [
            ['code-demos', '代码示例'],
            ['who-is-using-weex', '谁在使用Weex'],
            ['weex-third-party-extensions', '插件市场']
          ],
          '/zh/blog/': [
            ['write-a-blog', '写一篇博客'],
            ['weex-auto-test-locating', 'Weex自动化测试元素定位方案'],
            ['ios-weexcore.md', 'iOS WeexSDK 接入 WeexCore'],
            ['weexcore-multiprocess-evolution', 'WeexCore 多进程多线程架构演进'],
            ['interaction-optimization', '可交互时间的探索和首屏时间的改进之路'],
            ['what_is_the_most_important_assest_to_an_open_souce_project', '什么是一个开源项目最重要的资产？'],
            ['weex-third-party-extensions','Weex 三方插件']
          ],
          '/zh/download/':[
            ['download', "源代码下载"],
            ['major_change', '重大变更']
          ]
        },
        "algolia": {
          "apiKey": "a6896fe3619315a7f04e9a76bbbbbfcb",
          "indexName": "weex",
          "algoliaOptions": {
            "facetFilters": [
              "lang:zh-CN"
            ]
          }
        }
      }
    }
  }
};
