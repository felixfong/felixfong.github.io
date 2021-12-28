---
home: true
# heroImage: img/heiban.jpeg
heroText: 街溜子🃏👓🕶
tagline: 沉淀、分享、成长，让自己和他人都能有所收获😁
# actionText: 立刻进入 →
# actionLink: /ops/
bannerBg: img/heiban.jpeg # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
# bannerBg: https://ae03.alicdn.com/kf/H3c772fc347444001939a064acd623d594.png # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
- title: 运维
  details: 运维观止,奇技淫巧,迎刃而解
  link: /ops/ # 可选
  # imgUrl: /img/ops.png # 可选
- title: 生活
  details: 日常随思,家人物语,生活感悟
  link: /life/
  # imgUrl: /img/life.png
- title: 编程
  details: 编程世界,运维开发,全沾艺人
  link: /code/
  # imgUrl: /img/other.png

footer: MIT Licensed | Copyright © 2018-present Evan You

---
### 像数 1, 2, 3 一样容易

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 在你的项目中安装
yarn add -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
yarn vuepress dev

# 构建静态文件
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
npx vuepress dev

# 构建静态文件
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>
