import{r as t,o,c as l,b as s,a as p,F as c,e as a,d as n}from"./app.dbf5d933.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=a('<p>\u5F53\u6211\u4EEC\u8FD0\u884C\u524D\u7AEF\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u5E38\u5E38\u5728\u89E3\u51B3\u4F9D\u8D56\u7684\u65F6\u5019\u4F1A\u52A0\u4E0A\u4E00\u4E2A\u53C2\u6570<code>npm install --registry=https://registry.npm.taobao.org</code>\u5C06\u6E90\u6307\u5B9A\u4E3A\u6DD8\u5B9D\u7684\u6E90\uFF0C\u4EE5\u671F\u8BA9\u901F\u5EA6\u52A0\u5FEB\u8D77\u6765\uFF0C\u4E8B\u5B9E\u4E0A\u8FD9\u79CD\u7684\u786E\u80FD\u591F\u8BA9\u901F\u5EA6\u53D8\u5FEB\uFF0C\u4F46\u662F\u957F\u4E45\u6765\u770B\uFF0C\u5982\u679C\u60F3\u771F\u6B63\u7684\u5FEB\u901F\u654F\u6377\u5F00\u53D1\u90E8\u7F72\uFF0C\u642D\u5EFA\u4F01\u4E1A\u5185\u90E8\u7684\u79C1\u670D\uFF0C\u5219\u4F1A\u8BA9\u901F\u5EA6\u66F4\u4E0A\u4E00\u4E2A\u53F0\u9636\u3002</p><p>\u642D\u5EFAnpm\u79C1\u670D\uFF0C\u6211\u4EEC\u4F9D\u65E7\u4F7F\u7528nexus3\u3002</p><p>\u4E0E\u5176\u4ED6\u79C1\u670D\u4E00\u6837\u7684\uFF0Cnpm\u79C1\u670D\u540C\u6837\u6709\u4E09\u79CD\u7C7B\u578B\uFF1A</p><ul><li><code>hosted</code> : \u672C\u5730\u5B58\u50A8\uFF0C\u5373\u540C docker \u5B98\u65B9\u4ED3\u5E93\u4E00\u6837\u63D0\u4F9B\u672C\u5730\u79C1\u670D\u529F\u80FD</li><li><code>proxy</code> : \u63D0\u4F9B\u4EE3\u7406\u5176\u4ED6\u4ED3\u5E93\u7684\u7C7B\u578B\uFF0C\u5982 docker \u4E2D\u592E\u4ED3\u5E93</li><li><code>group</code> : \u7EC4\u7C7B\u578B\uFF0C\u5B9E\u8D28\u4F5C\u7528\u662F\u7EC4\u5408\u591A\u4E2A\u4ED3\u5E93\u4E3A\u4E00\u4E2A\u5730\u5740</li></ul><p>\u90A3\u4E48\u5C31\u6765\u4E00\u4E2A\u4E00\u4E2A\u521B\u5EFA\u3002</p><h2 id="_1-\u521B\u5EFAblob\u5B58\u50A8\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFAblob\u5B58\u50A8\u3002" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFAblob\u5B58\u50A8\u3002</h2><p>\u4E3A\u5176\u521B\u5EFA\u4E00\u4E2A\u5355\u72EC\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/1bfcd86269c5c714.jpg" alt="image"></p><h2 id="_2-\u521B\u5EFAhosted\u7C7B\u578B\u7684npm\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFAhosted\u7C7B\u578B\u7684npm\u3002" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFAhosted\u7C7B\u578B\u7684npm\u3002</h2><ul><li><code>Name</code>: \u5B9A\u4E49\u4E00\u4E2A\u540D\u79F0local-npm</li><li><code>Storage</code>\uFF1ABlob store\uFF0C\u6211\u4EEC\u4E0B\u62C9\u9009\u62E9\u524D\u9762\u521B\u5EFA\u597D\u7684\u4E13\u7528blob\uFF1Anpm-hub\u3002</li><li><code>Hosted</code>\uFF1A\u5F00\u53D1\u73AF\u5883\uFF0C\u6211\u4EEC\u8FD0\u884C\u91CD\u590D\u53D1\u5E03\uFF0C\u56E0\u6B64Delpoyment policy \u6211\u4EEC\u9009\u62E9Allow redeploy\u3002\u8FD9\u4E2A\u5F88\u91CD\u8981\uFF01</li></ul><p><img src="http://t.eryajf.net/imgs/2021/09/a84f7376e5ce267d.jpg" alt="image"></p><h2 id="_3-\u521B\u5EFA\u4E00\u4E2Aproxy\u7C7B\u578B\u7684npm\u4ED3\u5E93\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u4E00\u4E2Aproxy\u7C7B\u578B\u7684npm\u4ED3\u5E93\u3002" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA\u4E00\u4E2Aproxy\u7C7B\u578B\u7684npm\u4ED3\u5E93\u3002</h2>',12),d=s("li",null,[s("code",null,"Name"),n(": proxy-npm")],-1),b=s("code",null,"Proxy",-1),m=n("\uFF1ARemote Storage: \u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\uFF0C\u8FD9\u91CC\u586B\u5199: "),k={href:"https://registry.npmjs.org/",target:"_blank",rel:"noopener noreferrer"},g=n("https://registry.npmjs.org"),h=s("li",null,[s("code",null,"Storage"),n(": npm-hub\u3002")],-1),_=a('<p>\u5176\u4ED6\u7684\u5747\u662F\u9ED8\u8BA4\u3002</p><p>\u6574\u4F53\u914D\u7F6E\u622A\u56FE\u5982\u4E0B\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/ef27d8f4f6e5161f.jpg" alt="image"></p><h2 id="_4-\u521B\u5EFA\u4E00\u4E2Agroup\u7C7B\u578B\u7684npm\u4ED3\u5E93\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA\u4E00\u4E2Agroup\u7C7B\u578B\u7684npm\u4ED3\u5E93\u3002" aria-hidden="true">#</a> 4\uFF0C\u521B\u5EFA\u4E00\u4E2Agroup\u7C7B\u578B\u7684npm\u4ED3\u5E93\u3002</h2><ul><li><code>Name</code>\uFF1Agroup-npm</li><li><code>Storage</code>\uFF1A\u9009\u62E9\u4E13\u7528\u7684blob\u5B58\u50A8npm-hub\u3002</li><li><code>group</code> : \u5C06\u5DE6\u8FB9\u53EF\u9009\u76842\u4E2A\u4ED3\u5E93\uFF0C\u6DFB\u52A0\u5230\u53F3\u8FB9\u7684members\u4E0B\u3002</li></ul><p>\u6574\u4F53\u914D\u7F6E\u622A\u56FE\u5982\u4E0B\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/9cca019b9c80d33c.jpg" alt="image"></p><p>\u8FD9\u4E9B\u914D\u7F6E\u5B8C\u6210\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002</p><h2 id="_5-\u9A8C\u8BC1\u4F7F\u7528\u3002" tabindex="-1"><a class="header-anchor" href="#_5-\u9A8C\u8BC1\u4F7F\u7528\u3002" aria-hidden="true">#</a> 5\uFF0C\u9A8C\u8BC1\u4F7F\u7528\u3002</h2><p>\u65B0\u5EFA\u4E00\u53F0\u73AF\u5883\u5E72\u51C0\u7684\u4E3B\u673A\uFF0C\u5B89\u88C5\u597Dnode\u73AF\u5883\u3002</p><p>\u9996\u5148\u901A\u8FC7<code>curl 192.168.106.10/a | sh</code>\u5B89\u88C5\u597Dnode\u73AF\u5883\u3002</p>',11),f=n("\u5982\u679C\u770B\u4E0D\u61C2\u8FD9\u662F\u4EC0\u4E48\u9B3C\uFF0C\u53EF\u4EE5\u70B9\u51FB\u8FD9\u7BC7\u6587\u7AE0\u4E86\u89E3\uFF1A"),y={href:"https://wiki.eryajf.net/pages/1395.html",target:"_blank",rel:"noopener noreferrer"},v=n("\u6784\u5EFA\u8FD0\u7EF4\u5916\u6302\u3002"),x=a(`<p>\u6B64\u811A\u672C\u6211\u5DF2\u7ECF\u5F00\u6E90\u5728GitHub\u4E4B\u4E2D\uFF0C\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u70B9\u51FB\u4E0B\u8FB9\u8DF3\u8F6C\u53C2\u89C2\u3002</p><p>::: cardList 1</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> magic<span class="token punctuation">-</span>of<span class="token punctuation">-</span>sysuse<span class="token punctuation">-</span>scripts
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> \u8FD0\u7EF4\u5916\u6302\u5C0F\u5DE5\u5177
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//avatars2.githubusercontent.com/u/416130<span class="token punctuation">?</span>s=460<span class="token important">&amp;u=8753e86600e300a9811cdc539aa158deec2e2724&amp;v=4</span> <span class="token comment"># \u53EF\u9009</span>
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/eryajf/magic<span class="token punctuation">-</span>of<span class="token punctuation">-</span>sysuse<span class="token punctuation">-</span>scripts <span class="token comment"># \u53EF\u9009</span>
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#FBDE4B&#39;</span> <span class="token comment"># \u53EF\u9009\uFF0C\u9ED8\u8BA4var(--bodyBg)\u3002\u989C\u8272\u503C\u6709#\u53F7\u65F6\u8BF7\u6DFB\u52A0\u5355\u5F15\u53F7</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#fff&#39;</span> <span class="token comment"># \u53EF\u9009\uFF0C\u9ED8\u8BA4var(--textColor)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>:::</p><p>\u7136\u540E\u62F7\u8D1D\u4E00\u4EFD\u524D\u7AEF\u9879\u76EE\u7684\u6E90\u7801\u3002</p><h3 id="_1-\u9996\u5148\u83B7\u53D6\u9ED8\u8BA4\u7684\u4ED3\u5E93\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_1-\u9996\u5148\u83B7\u53D6\u9ED8\u8BA4\u7684\u4ED3\u5E93\u5730\u5740" aria-hidden="true">#</a> 1\uFF0C\u9996\u5148\u83B7\u53D6\u9ED8\u8BA4\u7684\u4ED3\u5E93\u5730\u5740\uFF1A</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@moban business_jsdweb<span class="token punctuation">]</span><span class="token variable">$npm</span> config get registryhttps://registry.npmjs.org/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-\u914D\u7F6E\u4E3A\u79C1\u670D\u5730\u5740\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E\u4E3A\u79C1\u670D\u5730\u5740\u3002" aria-hidden="true">#</a> 2\uFF0C\u914D\u7F6E\u4E3A\u79C1\u670D\u5730\u5740\u3002</h3><p>\u4ECE\u5982\u4E0B\u622A\u56FE\u4E2D\u67E5\u770B(\u5176\u5B9E\u5C31\u662F\u521B\u5EFA\u7684\u7EC4\u5BF9\u5916\u7684\u5730\u5740)\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/94a1469b6b9cd5e4.jpg" alt="image"></p><p>\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@moban business_jsdweb<span class="token punctuation">]</span><span class="token variable">$npm</span> config <span class="token builtin class-name">set</span> registry http://192.168.112.214:8081/repository/group-npm/
<span class="token punctuation">[</span>root@moban business_jsdweb<span class="token punctuation">]</span><span class="token variable">$npm</span> config get registry
http://192.168.112.214:8081/repository/group-npm/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u73B0\u5728\u5F00\u59CB\u5B89\u88C5\uFF0C\u5B89\u88C5\u4E4B\u524D\u5148\u770B\u4E00\u4E0B\u7EC4\u91CC\u7684\u5185\u5BB9\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/ac0e384fc52e1e12.jpg" alt="image"></p><p>\u53EF\u4EE5\u770B\u5230\u8FD8\u662F\u7A7A\u7684\u3002</p><h3 id="_3-\u5B89\u88C5\u7F16\u8BD1\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5\u7F16\u8BD1\u3002" aria-hidden="true">#</a> 3\uFF0C\u5B89\u88C5\u7F16\u8BD1\u3002</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5728\u7F16\u8BD1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u770B\u770B\u7EC4\u91CC\u7684\u53D8\u5316\u4E86\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/2a284ea50c702692.jpg" alt="image"></p><p>\u5B89\u88C5\u5B8C\u6210\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u5982\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u4E00\u5171\u82B1\u8D39\u4E86<code>82\u79D2</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@moban business_jsdweb<span class="token punctuation">]</span><span class="token variable">$npm</span> <span class="token function">install</span>
 
<span class="token operator">&gt;</span> uglifyjs-webpack-plugin@0.4.6 postinstall /root/business_jsdweb/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
<span class="token operator">&gt;</span> node lib/post_install.js
 
<span class="token function">npm</span> WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 <span class="token punctuation">(</span>node_modules/fsevents<span class="token punctuation">)</span>:
<span class="token function">npm</span> WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform <span class="token keyword">for</span> fsevents@1.2.4: wanted <span class="token punctuation">{</span><span class="token string">&quot;os&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;darwin&quot;</span>,<span class="token string">&quot;arch&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;any&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">(</span>current: <span class="token punctuation">{</span><span class="token string">&quot;os&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;linux&quot;</span>,<span class="token string">&quot;arch&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;x64&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 
added <span class="token number">1216</span> packages from <span class="token number">717</span> contributors <span class="token keyword">in</span> <span class="token number">82</span>.171s
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_4-\u518D\u4E00\u6B21\u5B89\u88C5\u7F16\u8BD1\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u518D\u4E00\u6B21\u5B89\u88C5\u7F16\u8BD1\u3002" aria-hidden="true">#</a> 4\uFF0C\u518D\u4E00\u6B21\u5B89\u88C5\u7F16\u8BD1\u3002</h3><p>\u8FD9\u91CC\u518D\u51C6\u5907\u4E00\u53F0\u73AF\u5883\u5E72\u51C0\u7684\u4E3B\u673A\uFF0C\u7136\u540E\u8FDB\u884C\u4E00\u6B21\u7F16\u8BD1\u5B89\u88C5\uFF0C\u770B\u770B\u6548\u679C\u3002</p><p>\u7F16\u8BD1\u4E4B\u524D\uFF0C\u5148\u5C06\u8FDC\u7A0B\u5730\u5740\u914D\u7F6E\u4E3A\u6211\u4EEC\u81EA\u5DF1\u7684\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@7-3 business_jsdweb<span class="token punctuation">]</span><span class="token variable">$npm</span> config get registry
https://registry.npmjs.org/
<span class="token punctuation">[</span>root@7-3 business_jsdweb<span class="token punctuation">]</span><span class="token variable">$npm</span> config <span class="token builtin class-name">set</span> registry http://192.168.112.214:8081/repository/group-npm/
<span class="token punctuation">[</span>root@7-3 business_jsdweb<span class="token punctuation">]</span><span class="token variable">$npm</span> config get registry
http://192.168.112.214:8081/repository/group-npm/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7136\u540E\u7F16\u8BD1\uFF0C\u770B\u6548\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@7-3 business_jsdweb<span class="token punctuation">]</span><span class="token variable">$npm</span> <span class="token function">install</span>
 
<span class="token operator">&gt;</span> uglifyjs-webpack-plugin@0.4.6 postinstall /root/business_jsdweb/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
<span class="token operator">&gt;</span> node lib/post_install.js
 
<span class="token function">npm</span> WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 <span class="token punctuation">(</span>node_modules/fsevents<span class="token punctuation">)</span>:
<span class="token function">npm</span> WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform <span class="token keyword">for</span> fsevents@1.2.4: wanted <span class="token punctuation">{</span><span class="token string">&quot;os&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;darwin&quot;</span>,<span class="token string">&quot;arch&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;any&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">(</span>current: <span class="token punctuation">{</span><span class="token string">&quot;os&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;linux&quot;</span>,<span class="token string">&quot;arch&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;x64&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 
added <span class="token number">1216</span> packages from <span class="token number">717</span> contributors <span class="token keyword">in</span> <span class="token number">31</span>.693s
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u540C\u6837\u662F\u5168\u65B0\u7684\u73AF\u5883\u4E0B\uFF0C\u56E0\u4E3A\u7B2C\u4E00\u6B21\u5DF2\u7ECF\u5C06\u4F9D\u8D56\u4ECE\u8FDC\u7A0B\u7F13\u5B58\u5230\u672C\u5730\u79C1\u670D\uFF0C\u90A3\u4E48\u5728\u7B2C\u4E8C\u6B21\u5B89\u88C5\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u7528\u65F6<code>31\u79D2</code>\u3002</p><p>\u79C1\u670D\u7684\u91CD\u8981\u6027\uFF0C\u4EE5\u53CA\u4FBF\u6377\u6027\uFF0C\u9AD8\u4E0B\u7ACB\u89C1\uFF01</p>`,29);function j(q,N){const e=t("ExternalLinkIcon");return o(),l(c,null,[u,s("ul",null,[d,s("li",null,[b,m,s("a",k,[g,p(e)])]),h]),_,s("p",null,[f,s("a",y,[v,p(e)])]),x],64)}var E=r(i,[["render",j]]);export{E as default};
