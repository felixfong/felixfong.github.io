import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="_0-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_0-\u524D\u8A00" aria-hidden="true">#</a> 0. \u524D\u8A00</h2><p>\u672C\u5730\u5F00\u53D1\u76F4\u63A5\u4F7F\u7528<code>npm run dev</code>\u5C31\u53EF\u4EE5\u5B9E\u65F6\u770B\u5230\u6548\u679C\uFF0C\u60F3\u7740\u5728github\u4E0A\u770B\u4E00\u4E0B\u6548\u679C\uFF0C\u5728\u4EE3\u7801\u90E8\u7F72github page\u65F6\u9047\u5230\u4E86\u4E0D\u5C11\u95EE\u9898\u3002</p><h2 id="_1-\u5355\u72EC\u811A\u672C\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_1-\u5355\u72EC\u811A\u672C\u90E8\u7F72" aria-hidden="true">#</a> 1. \u5355\u72EC\u811A\u672C\u90E8\u7F72</h2><ol><li>github \u6DFB\u52A0repository</li></ol><ul><li>\u9996\u5148\u767B\u5F55\u4E2A\u4EBAGitHub\u9996\u9875\uFF0C\u6DFB\u52A0\u65B0\u7684repository\uFF0C\u4ED3\u5E93\u540D\u4E3Ausername.github.io(username\u66FF\u6362\u4E3A\u4E2A\u4EBAGithub\u8D26\u6237\u540D)\uFF0C\u5E76\u8BBE\u7F6Essh key</li><li>\u672C\u5730\u6839\u76EE\u5F55\u4E0B\u521B\u5EFAdeploy.sh\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token comment">#!/usr/bin/env sh</span>

  <span class="token comment"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span>
  <span class="token builtin class-name">set</span> -e
  
  <span class="token comment"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span>
  <span class="token function">npm</span> run build
  
  <span class="token comment"># \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939</span>
  <span class="token builtin class-name">cd</span> docs/.vuepress/dist
  
  <span class="token comment"># deploy to github pages</span>
  <span class="token comment"># echo &#39;eryajf.net&#39; &gt; CNAME</span>
  
  <span class="token comment"># cat CNAME</span>
  
  <span class="token assign-left variable">msg</span><span class="token operator">=</span><span class="token string">&#39;deploy&#39;</span>
  <span class="token assign-left variable">githubUrl</span><span class="token operator">=</span>git@github.com:username/username.github.io.git
  
  <span class="token function">git</span> init
  <span class="token function">git</span> <span class="token function">add</span> -A
  <span class="token function">git</span> commit -m <span class="token string">&quot;<span class="token variable">\${msg}</span>&quot;</span>
  <span class="token function">git</span> push -f <span class="token variable">$githubUrl</span> master:gh-pages <span class="token comment"># \u63A8\u9001\u5230github gh-pages\u5206\u652F</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li><li>\u5728package.json\u4E0B\u7684scripts\u4E0B\u6DFB\u52A0<code>&quot;deploy&quot;: &quot;bash deploy.sh&quot;</code>\uFF0C\u5E76\u6267\u884C\u547D\u4EE4<code>npm run deploy</code>\uFF0C\u5373\u53EF\u5C06\u4EE3\u7801\u90E8\u7F72\u5230\u76F8\u5E94\u5206\u652F\u4E0B</li><li>\u8FDB\u5165username.github.io\uFF0C\u8BBE\u7F6Esettings\u4E0B\u7684pages\uFF0Csource\u9009\u62E9gh-pages\u548C\u8DEF\u5F84</li></ul><ol start="2"><li>\u8BBF\u95EEhttps://username.github.io\uFF0C\u5373\u53EF\u67E5\u770B\u535A\u5BA2\u6548\u679C</li></ol><h2 id="_2-\u4F7F\u7528ci\u5DE5\u5177\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528ci\u5DE5\u5177\u90E8\u7F72" aria-hidden="true">#</a> 2. \u4F7F\u7528CI\u5DE5\u5177\u90E8\u7F72</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6BCF\u5F53 push \u5230 main \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
  <span class="token comment"># \u624B\u52A8\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u201C\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u201D \u7B49 git \u65E5\u5FD7\u76F8\u5173\u4FE1\u606F\uFF0C\u9700\u8981\u62C9\u53D6\u5168\u90E8\u63D0\u4EA4\u8BB0\u5F55</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u9009\u62E9\u8981\u4F7F\u7528\u7684 node \u7248\u672C</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;14&#39;</span>

      <span class="token comment"># \u7F13\u5B58 node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            **/node_modules</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>

      <span class="token comment"># \u5982\u679C\u7F13\u5B58\u6CA1\u6709\u547D\u4E2D\uFF0C\u5B89\u88C5\u4F9D\u8D56</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># \u8FD0\u884C\u6784\u5EFA\u811A\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn build

      <span class="token comment"># \u67E5\u770B workflow \u7684\u6587\u6863\u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u90E8\u7F72\u5230 gh-pages \u5206\u652F</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u90E8\u7F72\u76EE\u5F55\u4E3A VuePress \u7684\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># \u9700\u8981\u914D\u7F6Esecret\uFF0C\u4ECE\u800C\u4E0D\u7528\u8F93\u5165\u7528\u6237\u540D\u548C\u90AE\u7BB1\u5BC6\u7801\u7B49\u4FE1\u606F</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h2 id="_3-\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> 3. \u9047\u5230\u7684\u95EE\u9898</h2><p>\u67E5\u770B\u535A\u5BA2\u65F6\u6709\u53EF\u80FD\u9875\u9762css\u7B49\u6837\u5F0F\u5168\u4E71\u7684\u60C5\u51B5\u53D1\u751F\uFF0C\u6B64\u65F6\u662F\u56E0\u4E3Acss\u3001js\u6587\u4EF6\u8DEF\u5F84\u6709\u95EE\u9898\u3002</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A * config.js\u6587\u4EF6\u4E2D\u7AD9\u70B9\u914D\u7F6E\u4E0B\uFF0C\u6DFB\u52A0\u6216\u4FEE\u6539<code>base: &#39;./&#39;</code>\uFF0C\u4E3B\u9898\u914D\u7F6EthemeConfig\u4E0B\uFF0C\u6DFB\u52A0\u6216\u4FEE\u6539<code>home: &#39;./&#39;</code></p>`,11);function p(t,c){return e}var u=s(a,[["render",p]]);export{u as default};
