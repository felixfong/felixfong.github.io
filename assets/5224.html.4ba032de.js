import{e as s}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<p>\u8FD9\u4E2A\u914D\u7F6E\u91CD\u70B9\u5176\u5B9E\u8FD8\u662F\u4E00\u4E2A\u9759\u6001\u4EE3\u7406\uFF0C\u901A\u8FC7root\u6216\u8005alias\u90FD\u662F\u53EF\u4EE5\u7684\uFF0C\u4E24\u79CD\u65B9\u5F0F\u5206\u522B\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Sitemap.xml</span>
location /sitemap.xml <span class="token punctuation">{</span>
    <span class="token builtin class-name">alias</span> /venvs/mobilepro/src/mobilepro/static/maps/map.xml<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6216\u8005\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Sitemap.xml</span>
location /sitemap.xml <span class="token punctuation">{</span>
    root /venvs/mobilepro/src/mobilepro/static/maps<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="http://t.eryajf.net/imgs/2021/09/ce130fb9b5ac8656.jpg" alt="img"></p>`,5);function p(l,t){return e}var o=n(a,[["render",p]]);export{o as default};
