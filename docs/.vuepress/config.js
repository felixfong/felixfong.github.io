module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Memo',
    description: '这是我的第一个 VuePress 站点',
    base: './',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/img/memo-favicon.ico',
            },
        ],
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        home: './',
        navbar: [
            { text: '首页', link: '/' },
            { text: '专题',link: '/topic/',
                children: [
                    { text: 'ELK', link: '/topic/pages/2351.html'},
                    { text: 'K8S', link: '/topic/pages/1742.html'},
                    { text: 'Nexus', link: '/topic/pages/45c5da/'},
                    { text: 'Jenkins', link: '/topic/pages/2415.html'},
                    { text: 'Go', link: '/topic/pages/220101204130/'},
                    { text: '网络', link: '/topic/pages/22020104155458/'},
                ]
            },
            { text: '周刊', link: '/weekly/',
                children: [
                    { text: '2021', link: '/weekly/pages/11c668/'},
                    { text: '2022', link: '/weekly/pages/220103181312/'},
                ]
            },
            { text: '编程',link: '/code/',
                children: [
                    { text: 'Golang', link: '/code/pages/aeab08/'},
                    { text: 'Vue', link: '/code/pages/5164.html'},
                    { text: 'Shell', link: '/code/pages/531.html'},
                ]
            },
            { text: '运维',link: '/ops/',
                children: [
                    { text: '最佳实践', link: '/ops/pages/027a17/'},
                    { text: '迎刃而解', link: '/ops/pages/29.html'},
                    { text: 'Nginx', link: '/ops/pages/930.html'},
                    { text: 'Php', link: '/ops/pages/2782.html'},
                    { text: 'Zabbix', link: '/ops/pages/596.html'},
                    { text: 'Prometheus', link: '/ops/pages/2468.html'},
                    { text: 'Grafana', link: '/ops/pages/5380.html'},
                    { text: 'CentOS', link: '/ops/pages/5279.html'},
                    { text: 'Docker', link: '/ops/pages/1847.html'},
                    { text: 'Ansible', link: '/ops/pages/5173.html'},
                    { text: 'Ldap', link: '/ops/pages/3410.html'},
                    { text: 'Gitlab', link: '/ops/pages/243.html'},
                    { text: 'Kafka', link: '/ops/pages/2951.html'},
                    { text: 'Etcd', link: '/ops/pages/4050.html'},
                    { text: 'Other', link: '/ops/pages/285.html'},
                ]
            },
            { text: '博客',link: '/blog/',
                children: [
                    { text: '博客相关', link: '/blog/pages/211229105530.html'},
                ]
            },
        ],
        sidebar: {
            '/topic/': [
                {
                    text: '专题',
                    children: [
                        {
                            text: 'ELK专题',
                            children: [
                                {
                                    // 目录：ELK
                                    text: 'ELK笔记',
                                    children: [
                                        '/topic/pages/2351.html',
                                        '/topic/pages/2362.html',
                                        '/topic/pages/2369.html',
                                        '/topic/pages/3391.html',
                                        '/topic/pages/3504.html',
                                        '/topic/pages/5138.html',
                                    ],
                                },
                                {
                                    // 目录：FileBeat
                                    text: 'FileBeat笔记',
                                    children: [
                                        '/topic/pages/5010.html',
                                        '/topic/pages/5013.html',
                                        '/topic/pages/5016.html',
                                    ],
                                },
                                {
                                    // 目录：LogStash
                                    text: 'LogStash笔记',
                                    children: [
                                        '/topic/pages/3394.html',
                                        '/topic/pages/3396.html',
                                        '/topic/pages/3434.html',
                                    ],
                                },
                                {
                                    // 目录：ElasticSearch
                                    text: 'ElasticSearch笔记',
                                    children: [
                                        '/topic/pages/2371.html',
                                        '/topic/pages/2374.html',
                                        '/topic/pages/2376.html',
                                        '/topic/pages/3500.html',
                                        '/topic/pages/5129.html',
                                        '/topic/pages/5132.html',
                                        '/topic/pages/5153.html',
                                        '/topic/pages/5136.html',
                                    ],
                                },
                                {
                                    // 目录：Kibana
                                    text: 'Kibana笔记',
                                    children: [
                                        '/topic/pages/2367.html',
                                        '/topic/pages/3138.html',
                                        '/topic/pages/433887/',
                                    ],
                                },
                            ],
                        },
                        {
                            text: 'K8S',
                            children: [
                                '/topic/pages/1742.html',
                            ],
                        },
                        {
                            text: 'Go',
                            children: [
                                '/topic/pages/220101204130/',
                                '/topic/pages/211231234959/'
                            ],
                        },
                        {
                            text: '网络专题',
                            children: [
                                '/topic/pages/22020104155458/',
                            ],
                        },
                    ],
                },
            ],
            '/weekly/': [
                {
                    text: '周刊',
                    children: [
                        '/weekly/pages/11c668/',
                        '/weekly/pages/211225232834/',
                        '/weekly/pages/220103181312/'
                    ],
                },
            ],
            '/code/': [
                {
                    text: '编程世界',
                    children: [
                        {
                            text: 'GO编程笔记',
                            children: [
                                {
                                    // 目录：基础部分
                                    text: '基础部分',
                                    children: [
                                        '/code/pages/aeab08/',
                                        '/code/pages/9f203b/',
                                        '/code/pages/c3962e/',
                                        '/code/pages/3e84ca/',
                                        '/code/pages/0477b6/',
                                        '/code/pages/7738fe/',
                                    ],
                                },
                                {
                                    // 目录：web框架
                                    text: 'web框架',
                                    children: [
                                        '/code/pages/770234/',
                                    ],
                                },
                                {
                                    // 目录：orm框架
                                    text: 'orm框架',
                                    children: [
                                        '/code/pages/164926/',
                                    ],
                                },
                                {
                                    // 目录：知识碎片
                                    text: '知识碎片',
                                    children: [
                                        '/code/pages/c13b45/',
                                        '/code/pages/5114.html',
                                        '/code/pages/2bf6c3/',
                                        '/code/pages/9f51d6/',
                                    ],
                                },
                                {
                                    // 目录：动手项目
                                    text: '动手项目',
                                    children: [
                                        '/code/pages/5deb34/',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            '/ops/' : [
                {
                    text: '最佳实践',
                    children: [
                        // '/ops/pages/d7bc9f/',
                        // '/ops/pages/027a17/',
                        // '/ops/pages/1395.html',
                        // '/ops/pages/3158.html',
                        '/ops/pages/211225215940/'
                    ],
                },
                {
                    text: '迎刃而解',
                    children: [
                        '/ops/pages/29.html',
                    ],
                },
            ],
            '/blog/': [
                {
                    text: '博客',
                    children: [
                        '/blog/pages/211229105530.html',
                        '/blog/pages/47a507/',
                        '/blog/pages/dd027d/',
                    ],
                },
            ],
        },
        logo: 'img/memo-favicon.ico',
        logoDark: 'img/niao-favicon.ico',
        darkMode: true,
        repo: 'eryajf/eryajf.github.io',
        repoLabel: 'Github',
        sidebarDepth: 1,
        editLink: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: true,
        lastUpdatedText: '上次更新',
        toggleDarkMode: '切换夜间模式',

    },
    plugins: [
        [
            '@vuepress/docsearch',
            {
                apiKey: '<API_KEY>',
                indexName: '<INDEX_NAME>',
                locales: {
                    '/': {
                        placeholder: 'Search Documentation',
                    },
                    '/zh/': {
                        placeholder: '搜索文档',
                    },
                },
            },
        ],

    ],
}