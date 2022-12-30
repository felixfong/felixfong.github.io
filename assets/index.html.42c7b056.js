import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>\u7ECF\u8FC7\u8FD9\u6B21\u9879\u76EE\u914D\u7F6E\u90E8\u7F72\u4E0B\u6765\u53D1\u73B0\uFF0CGitHub \u7684 Actions \u771F\u7684\u662F\u4E2A\u597D\u4E1C\u897F\uFF0C\u6709\u4E86\u8FD9\u4E2A\u6D41\u6C34\u7EBF\uFF0C\u90A3\u4E48\u65E0\u8BBA\u662FGitHub Pages\u7684\u9759\u6001\u90E8\u7F72\uFF0C\u8FD8\u662F\u540C\u6B65\u5230\u670D\u52A1\u5668\uFF0C\u90FD\u53D8\u5F97\u8F7B\u677E\u7B80\u5355\u8D77\u6765\uFF0C\u8FD9\u91CC\u8BB0\u5F55\u4E00\u4E0B\u8FC7\u7A0B\u4E2D\u7684\u4E00\u4E9B\u7EC6\u8282\u3002</p><p>GitHub Actions\u4E3B\u8981\u4F9D\u8D56\u4ED3\u5E93\u4E2Dworkflows\u76EE\u5F55\u4E0B\u7684yaml\u6587\u4EF6\u5B9A\u4E49\u6D41\u6C34\u7EBF\u6B65\u9AA4\uFF0C\u8FD9\u91CC\u5B9A\u4E49\u5185\u5BB9\u5982\u4E0B\uFF0C\u53EF\u5C06\u63A8\u5230main\u5206\u652F\u7684\u6E90\u7801\u5185\u5BB9\u90E8\u7F72\u5230GitHub Pages\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> CI

<span class="token comment"># \u5728main\u5206\u652F\u53D1\u751Fpush\u4E8B\u4EF6\u65F6\u89E6\u53D1\u3002</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">env</span><span class="token punctuation">:</span> <span class="token comment"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</span>
  <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai <span class="token comment"># \u65F6\u533A\uFF08\u8BBE\u7F6E\u65F6\u533A\u53EF\u4F7F\u9875\u9762\u4E2D\u7684\`\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\`\u4F7F\u7528\u65F6\u533A\u65F6\u95F4\uFF09</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span> <span class="token comment"># \u81EA\u5B9A\u4E49\u540D\u79F0</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest <span class="token comment"># \u8FD0\u884C\u5728\u865A\u62DF\u673A\u73AF\u5883ubuntu-latest</span>

    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>12.x<span class="token punctuation">]</span>

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout <span class="token comment"># \u6B65\u9AA41</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v1 <span class="token comment"># \u4F7F\u7528\u7684\u52A8\u4F5C\u3002\u683C\u5F0F\uFF1AuserName/repoName\u3002\u4F5C\u7528\uFF1A\u68C0\u51FA\u4ED3\u5E93\uFF0C\u83B7\u53D6\u6E90\u7801\u3002 \u5B98\u65B9actions\u5E93\uFF1Ahttps://github.com/actions</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node<span class="token punctuation">-</span>version <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># \u6B65\u9AA42</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1 <span class="token comment"># \u4F5C\u7528\uFF1A\u5B89\u88C5nodejs</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node<span class="token punctuation">-</span>version <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># \u7248\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run deploy.sh <span class="token comment"># \u6B65\u9AA43</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span> <span class="token comment"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># toKen\u79C1\u5BC6\u53D8\u91CF</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token important">&amp;&amp;</span> npm run deploy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u5176\u4E2D\u7684 <code>ACCESS_TOKEN</code>\u662F\u4E2A\u5173\u952E\uFF0C\u9700\u8981\u5728\u4E2A\u4EBAGitHub\u8D26\u53F7\u4E2D\u8FDB\u884C\u521B\u5EFA\uFF1A</p><p><code>Settings</code>---&gt; <code>Developer settings</code>---&gt;<code>Personal access tokens</code>---&gt; <code>Generate new token</code>\u3002</p><p>\u7136\u540E\u5B9A\u4E49\u4E2A\u540D\u5B57\uFF0C\u63A5\u53E3\u53EF\u4EE5\u5168\u9009\u3002</p><p>\u63A5\u7740\u9700\u8981\u5C06\u79D8\u94A5\u5BF9\u653E\u7F6E\u5230\u5BF9\u5E94\u9879\u76EE\u4ED3\u5E93\u7684 <code>Secrets</code>\u4E2D\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/e072e4d2fb04e601.jpg" alt="image-20210614215458139"></p><p>\u4E0A\u8FB9\u7684\u5185\u5BB9\u90FD\u662F\u5B9A\u4E49\u4E86\u57FA\u7840\u73AF\u5883\uFF0C\u7136\u540E\u8C03\u7528\u4E86\u4E00\u4E2Adeploy\u7684\u811A\u672C\uFF0C\u811A\u672C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span>
<span class="token function">npm</span> run build

<span class="token comment"># \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># deploy to github pages</span>
<span class="token comment"># echo &#39;eryajf.net&#39; &gt; CNAME</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">$GITHUB_TOKEN</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token assign-left variable">msg</span><span class="token operator">=</span><span class="token string">&#39;deploy&#39;</span>
  <span class="token assign-left variable">githubUrl</span><span class="token operator">=</span>git@github.com:eryajf/eryajf.github.io.git
<span class="token keyword">else</span>
  <span class="token assign-left variable">msg</span><span class="token operator">=</span><span class="token string">&#39;\u6765\u81EAgithub actions\u7684\u81EA\u52A8\u90E8\u7F72&#39;</span>
  <span class="token assign-left variable">githubUrl</span><span class="token operator">=</span>https://eryajf:<span class="token variable">\${GITHUB_TOKEN}</span>@github.com/eryajf/eryajf.github.io.git
  <span class="token function">git</span> config --global user.name <span class="token string">&quot;eryajf&quot;</span>
  <span class="token function">git</span> config --global user.email <span class="token string">&quot;Linuxlql@163.com&quot;</span>
<span class="token keyword">fi</span>
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&quot;<span class="token variable">\${msg}</span>&quot;</span>
<span class="token function">git</span> push -f <span class="token variable">$githubUrl</span> master:gh-pages <span class="token comment"># \u63A8\u9001\u5230github gh-pages\u5206\u652F</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8FD9\u91CC\u5C31\u80FD\u591F\u81EA\u52A8\u6253\u5305\u6784\u5EFA\uFF0C\u6784\u5EFA\u4E4B\u540E\u751F\u6210\u7684\u9759\u6001\u6587\u4EF6\u53C8\u80FD\u591F\u81EA\u52A8\u8986\u76D6\u5230 <code>gh-pages</code> \u5206\u652F\uFF0C\u7136\u540E\u53EA\u9700\u8981\u8BBE\u7F6EPages\u5373\u53EF\u5B9E\u73B0\u63D0\u4EA4\u6E90\u7801\u4E4B\u540E\u81EA\u52A8\u6784\u5EFA\u7684\u529F\u80FD\u4E86\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/fa6186603ce3023a.jpg" alt="image-20210614220333450"></p><p>\u5982\u679C\u60F3\u8981\u5C06\u6784\u5EFA\u540E\u7684\u4EE3\u7801\u518D\u81EA\u52A8\u540C\u6B65\u5230\u81EA\u5DF1\u7684\u670D\u52A1\u5668\uFF0C\u5219\u53EF\u4EE5\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>			<span class="token comment"># \u5229\u7528action\u628Abuild\u597D\u7684\u6587\u4EF6\u4E0A\u4F20\u5230\u670D\u52A1\u5668/home/eryajf.github.io\u8DEF\u5F84\u4E0B,\u9700\u8981\u786E\u8BA4\u6B64\u76EE\u5F55\u5DF2\u5728\u670D\u52A1\u7AEF\u521B\u5EFA</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> deploy file to server
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> wlixcc/SFTP<span class="token punctuation">-</span>Deploy<span class="token punctuation">-</span>Action@v1.0 
        <span class="token key atrule">with</span><span class="token punctuation">:</span>  
          <span class="token key atrule">username</span><span class="token punctuation">:</span> <span class="token string">&#39;root&#39;</span>   <span class="token comment">#ssh user name</span>
          <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&#39;2017&#39;</span> <span class="token comment"># \u8FDC\u7A0B\u670D\u52A1\u5668ssh\u7AEF\u53E3\uFF0C\u9ED8\u8BA422</span>
          <span class="token key atrule">server</span><span class="token punctuation">:</span> <span class="token string">&#39;eryajf.net&#39;</span> <span class="token comment"># \u8FDC\u7A0B\u670D\u52A1\u5668IP</span>
          <span class="token key atrule">ssh_private_key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SSH_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># \u8BA4\u8BC1\u670D\u52A1\u5668\u79D8\u94A5\u5BF9\u7684\u79C1\u94A5</span>
          <span class="token key atrule">local_path</span><span class="token punctuation">:</span> <span class="token string">&#39;docs/.vuepress/dist/*&#39;</span>  <span class="token comment"># \u5BF9\u5E94\u6211\u4EEC\u9879\u76EE\u6253\u5305\u540E\u7684\u9759\u6001\u6587\u4EF6\u8DEF\u5F84</span>
          <span class="token key atrule">remote_path</span><span class="token punctuation">:</span> <span class="token string">&#39;/home/eryajf.github.io&#39;</span> <span class="token comment"># \u670D\u52A1\u5668\u4E0A\u7684\u8DEF\u5F84</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0A\u8FB9\u53C8\u591A\u4E86\u4E00\u4E2A\u79C1\u94A5\uFF0C\u8FD9\u4E2A\u79C1\u94A5\u6211\u4EEC\u5148\u5728\u670D\u52A1\u5668\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u521B\u5EFA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ssh-keygen -m PEM  # \u7136\u540E\u4E00\u8DEF\u56DE\u8F66\u5C31\u80FD\u521B\u5EFA\u6210\u529F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA\u5B8C\u6210\u4E4B\u540E\uFF0C\u9700\u8981\u628A\u516C\u94A5\u653E\u5230\u670D\u52A1\u5668\u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cat /root/.ssh/id_rsa.pub &gt;&gt; /root/.ssh/authorized_keys
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u5C06\u79C1\u94A5 <code>/root/.ssh/id_rsa</code> \u4EE5\u79D8\u94A5\u5BF9\u7684\u5F62\u5F0F\u5728\u9879\u76EE\u4E2D\u8FDB\u884C\u521B\u5EFA\u3002</p><p>\u5B8C\u6574\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> CI

<span class="token comment"># \u5728main\u5206\u652F\u53D1\u751Fpush\u4E8B\u4EF6\u65F6\u89E6\u53D1\u3002</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">env</span><span class="token punctuation">:</span> <span class="token comment"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</span>
  <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai <span class="token comment"># \u65F6\u533A\uFF08\u8BBE\u7F6E\u65F6\u533A\u53EF\u4F7F\u9875\u9762\u4E2D\u7684\`\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\`\u4F7F\u7528\u65F6\u533A\u65F6\u95F4\uFF09</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span> <span class="token comment"># \u81EA\u5B9A\u4E49\u540D\u79F0</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest <span class="token comment"># \u8FD0\u884C\u5728\u865A\u62DF\u673A\u73AF\u5883ubuntu-latest</span>

    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>12.x<span class="token punctuation">]</span>

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout <span class="token comment"># \u6B65\u9AA41</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v1 <span class="token comment"># \u4F7F\u7528\u7684\u52A8\u4F5C\u3002\u683C\u5F0F\uFF1AuserName/repoName\u3002\u4F5C\u7528\uFF1A\u68C0\u51FA\u4ED3\u5E93\uFF0C\u83B7\u53D6\u6E90\u7801\u3002 \u5B98\u65B9actions\u5E93\uFF1Ahttps://github.com/actions</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node<span class="token punctuation">-</span>version <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># \u6B65\u9AA42</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1 <span class="token comment"># \u4F5C\u7528\uFF1A\u5B89\u88C5nodejs</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node<span class="token punctuation">-</span>version <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># \u7248\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run deploy.sh <span class="token comment"># \u6B65\u9AA43</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span> <span class="token comment"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># toKen\u79C1\u5BC6\u53D8\u91CF</span>
          <span class="token key atrule">CODING_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.CODING_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token important">&amp;&amp;</span> npm run deploy

      <span class="token comment"># \u5229\u7528action\u628Abuild\u597D\u7684\u6587\u4EF6\u4E0A\u4F20\u5230\u670D\u52A1\u5668/home/eryajf.github.io\u8DEF\u5F84\u4E0B,\u9700\u8981\u786E\u8BA4\u6B64\u76EE\u5F55\u5DF2\u5728\u670D\u52A1\u7AEF\u521B\u5EFA</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> deploy file to server
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> wlixcc/SFTP<span class="token punctuation">-</span>Deploy<span class="token punctuation">-</span>Action@v1.0 
        <span class="token key atrule">with</span><span class="token punctuation">:</span>  
          <span class="token key atrule">username</span><span class="token punctuation">:</span> <span class="token string">&#39;root&#39;</span>   <span class="token comment">#ssh user name</span>
          <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&#39;2017&#39;</span> <span class="token comment"># \u8FDC\u7A0B\u670D\u52A1\u5668ssh\u7AEF\u53E3\uFF0C\u9ED8\u8BA422</span>
          <span class="token key atrule">server</span><span class="token punctuation">:</span> <span class="token string">&#39;eryajf.net&#39;</span> <span class="token comment"># \u8FDC\u7A0B\u670D\u52A1\u5668IP,\u6211\u8FD9\u91CC\u586B\u5199\u57DF\u540D\u662F\u56E0\u4E3A\u89E3\u6790\u5230\u4E86\u670D\u52A1\u5668IP</span>
          <span class="token key atrule">ssh_private_key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SSH_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># \u8BA4\u8BC1\u670D\u52A1\u5668\u79D8\u94A5\u5BF9\u7684\u79C1\u94A5</span>
          <span class="token key atrule">local_path</span><span class="token punctuation">:</span> <span class="token string">&#39;docs/.vuepress/dist/*&#39;</span>  <span class="token comment"># \u5BF9\u5E94\u6211\u4EEC\u9879\u76EE\u6253\u5305\u540E\u7684\u9759\u6001\u6587\u4EF6\u8DEF\u5F84</span>
          <span class="token key atrule">remote_path</span><span class="token punctuation">:</span> <span class="token string">&#39;/home/eryajf.github.io&#39;</span> <span class="token comment"># \u670D\u52A1\u5668\u4E0A\u7684\u8DEF\u5F84</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u5F53\u6211\u4EEC\u63D0\u4EA4\u9879\u76EE\u6E90\u7801\u4E4B\u540E\uFF0C\u81EA\u52A8\u5C06\u9879\u76EE\u90E8\u7F72\u5230 GitHub Pages\u4EE5\u53CA\u81EA\u5DF1\u670D\u52A1\u5668\u7684\u6307\u5B9A\u76EE\u5F55\u4E2D\u3002</p>`,22);function e(t,c){return p}var u=s(a,[["render",e]]);export{u as default};
