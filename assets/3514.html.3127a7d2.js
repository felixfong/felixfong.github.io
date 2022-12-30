import{r as p,o as t,c as l,b as s,a as o,F as c,e as n,d as a}from"./app.dbf5d933.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n(`<p>\u516C\u53F8\u8FD9\u6B21\u7684\u6253\u5305\u5E73\u53F0\u662F\u6D4B\u8BD5\u540C\u5B66\u641E\u7684\uFF0CJenkins\u90E8\u7F72\u5728Mac\u7535\u8111\uFF0C\u770B\u5230\u4ED6\u628A\u5305\u641E\u5230\u4E86\u4E09\u65B9\uFF0C\u56E0\u6B64\u6253\u7B97\u4E00\u8D77\u62C9\u56DE\u5230\u672C\u5730\u3002</p><h2 id="_1-nginx\u7684\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-nginx\u7684\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 1\uFF0CNGINX\u7684\u51C6\u5907\u5DE5\u4F5C</h2><p>Mac\u7535\u8111\u5F88\u65B9\u4FBF\uFF0C\u56E0\u6B64\u4F7F\u7528docker\u5148\u6765\u8DD1\u4E24\u4E2ANGINX\u865A\u62DF\u4E3B\u673A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ docker run -itd --name erya -v /Users/liqilong/eryajf/docker/nginx/test1:/apk -v /Users/liqilong/eryajf/docker/nginx/test2:/er -v /Users/liqilong/eryajf/docker/nginx/test1/default.conf:/etc/nginx/conf.d/default.conf  -p <span class="token number">801</span>:800 -p <span class="token number">802</span>:801  daocloud.io/library/nginx:1.15.9-alpine-perl
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2Dtest1\u4F5C\u4E3Aapk\u5305\u7684\u76EE\u5F55\uFF0Ctest2\u4F5C\u4E3A\u4E8C\u7EF4\u7801\u7684\u76EE\u5F55\uFF0C\u7528\u5230\u7684default.conf\u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>$ <span class="token directive"><span class="token keyword">cat</span> default.conf
server</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">800</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">root</span>  /apk</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">autoindex</span>       <span class="token boolean">on</span></span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">autoindex_exact_size</span>    <span class="token boolean">off</span></span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">autoindex_localtime</span>     <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">801</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">root</span> /er</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">autoindex</span>       <span class="token boolean">on</span></span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">autoindex_exact_size</span>    <span class="token boolean">off</span></span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">autoindex_localtime</span>     <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u542F\u52A8\u4E4B\u540E\uFF0C\u8BBF\u95EE<code>localhost:800</code>\u5373\u53EF\u770B\u5230\u6BCF\u6B21\u7684\u5305\uFF0C\u8BBF\u95EE<code>localhost:801</code>\u5373\u53EF\u770B\u5230\u5BF9\u5E94\u4E8C\u7EF4\u7801\u3002\u5F53\u7136\u5728Jenkins\u4E2D\u9700\u8981\u7528IP\u8FDB\u884C\u8BBF\u95EE\u3002</p><h2 id="_2-\u5B89\u5353\u9879\u76EE\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u5353\u9879\u76EE\u7684\u914D\u7F6E" aria-hidden="true">#</a> 2\uFF0C\u5B89\u5353\u9879\u76EE\u7684\u914D\u7F6E</h2><p>\u5B89\u5353\u7684\u6253\u5305\uFF0C\u4F9D\u7136\u9700\u8981\u4E0B\u8F7D\u5236\u4F5C\u4E8C\u7EF4\u7801\u7684\u5F00\u6E90\u7A0B\u5E8F\uFF0C\u57FA\u672C\u4E0A\u8FD9\u4E2A\u601D\u8DEF\u90FD\u8FD8\u6BD4\u8F83\u6E05\u6670\u7B80\u5355\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/0282f2e56c8c4626.jpg" alt="image"></p><p>\u811A\u672C\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> /Users/zxmren/.jenkins/workspace/test_android/app/build/outputs/apk/release/app-release.apk /Users/zxmren/nginx/apk/wpt-<span class="token variable">$BUILD_ID</span>.apk
java -jar /Users/zxmren/nginx/jar/qr.jar <span class="token assign-left variable">url</span><span class="token operator">=</span>http://192.168.3.3:800/wpt-<span class="token variable">$BUILD_ID</span>.apk <span class="token assign-left variable">image</span><span class="token operator">=</span>wpt-<span class="token variable">$BUILD_ID</span>.jpg <span class="token assign-left variable">save</span><span class="token operator">=</span>/Users/zxmren/nginx/er/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5C31OK\u4E86\u3002</p><h2 id="_3-ios\u7684\u66F2\u6298\u914D\u7F6E\u4E4B\u8DEF" tabindex="-1"><a class="header-anchor" href="#_3-ios\u7684\u66F2\u6298\u914D\u7F6E\u4E4B\u8DEF" aria-hidden="true">#</a> 3\uFF0CiOS\u7684\u66F2\u6298\u914D\u7F6E\u4E4B\u8DEF</h2>`,14),k=a("\u73B0\u5728\u6BD4\u8F83\u5C34\u5C2C\u7684\u662FiOS\u7684\u60C5\u51B5\uFF0C\u4E00\u5F00\u59CB\u4E0D\u4E86\u89E3\uFF0C\u4F9D\u65E7\u6309\u7167\u5B89\u5353\u7684\u601D\u8DEF\u8FDB\u884C\u914D\u7F6E\uFF0C\u540E\u6765\u53D1\u73B0iOS\u6253\u51FA\u6765\u7684ipa\u5305\uFF0C\u624B\u673A\u626B\u4E86\u4E4B\u540E\u5E76\u4E0D\u80FD\u76F4\u63A5\u5B89\u88C5\uFF0C\u975E\u5E38\u5C34\u5C2C\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u5751\uFF0C\u803D\u8BEF\u4E86\u51E0\u4E2A\u5C0F\u65F6\uFF0C\u76F4\u5230\u540E\u6765\u5728GitHub\u770B\u5230\u4E86\u4E00\u4E2A\u5F00\u6E90\u7A0B\u5E8F\uFF1A"),b={href:"https://github.com/bumaociyuan/ios-ipa-server",target:"_blank",rel:"noopener noreferrer"},d=a("ios-ipa-server"),m=n(`<p>::: cardList 1</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ios<span class="token punctuation">-</span>ipa<span class="token punctuation">-</span>server
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> ios\u5305\u4E0B\u8F7D\u5DE5\u5177
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//avatars2.githubusercontent.com/u/416130<span class="token punctuation">?</span>s=460<span class="token important">&amp;u=8753e86600e300a9811cdc539aa158deec2e2724&amp;v=4</span> <span class="token comment"># \u53EF\u9009</span>
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/bumaociyuan/ios<span class="token punctuation">-</span>ipa<span class="token punctuation">-</span>server <span class="token comment"># \u53EF\u9009</span>
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#FBDE4B&#39;</span> <span class="token comment"># \u53EF\u9009\uFF0C\u9ED8\u8BA4var(--bodyBg)\u3002\u989C\u8272\u503C\u6709#\u53F7\u65F6\u8BF7\u6DFB\u52A0\u5355\u5F15\u53F7</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#fff&#39;</span> <span class="token comment"># \u53EF\u9009\uFF0C\u9ED8\u8BA4var(--textColor)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>:::</p><p>\u5BFB\u627E\u89E3\u51B3\u65B9\u6848\u7684\u8FC7\u7A0B\u4E2D\u4E86\u89E3\u5230\u4E86ipa\u7684\u5305\u60F3\u8981\u5B89\u88C5\u987A\u5229\uFF0C\u9700\u8981\u4E00\u4E2Aplist\u7684\u6587\u4EF6\u8FDB\u884C\u914D\u7F6E\uFF0C\u800C\u5F00\u6E90\u7A0B\u5E8F\uFF0C\u6B63\u662F\u505A\u4E86\u8FD9\u4E2A\u4E8B\u60C5\u3002</p><p>\u8FD9\u4E2A\u7A0B\u5E8F\u80FD\u591F\u8BA9\u6253\u597D\u7684\u5305\u76F4\u63A5\u8F6C\u5316\u6210\u53EF\u5B89\u88C5\uFF0C\u7136\u540E\u63D0\u4F9B\u4E8C\u7EF4\u7801\u7528\u4E8E\u4E0B\u8F7D\uFF0C\u5148\u5728\u4E3B\u673A\u5B89\u88C5\u8F6F\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i -g ios-ipa-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u547D\u4EE4\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ios-ipa-server -i 192.168.3.4 -p 666 /media/ipa/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>/media/ipa/</code>\u4E0B\u653E\u7684\u662F\u6BCF\u6B21\u6253\u597D\u7684ipa\u5305\uFF0C\u8FD9\u4E2A\u8F6F\u4EF6\u4F18\u79C0\u7684\u662F\uFF0C\u540E\u7EED\u518D\u653E\u8FDB\u6765\u7684ipa\u5305\uFF0C\u4E5F\u4F1A\u81EA\u52A8\u8F6C\u5316\u6210\u53EF\u7528\u7684\uFF0C\u6240\u4EE5\u53EA\u9700\u8981\u5B88\u62A4\u8FDB\u7A0B\uFF08\u8FD9\u91CC\u7528\u7684<code>tmux</code>\uFF09\u8FD0\u884C\u8FD9\u4E2A\u7A0B\u5E8F\uFF0C\u7136\u540E\u6BCF\u6B21\u6784\u5EFA\u7684\u5305\u653E\u5230\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u8FD9\u4E2A\u65F6\u5019\u4F1A\u8FD4\u56DE\u4E24\u4E2A\u4E8C\u7EF4\u7801\uFF0C\u4EE5\u53CA\u4E24\u4E2A\u94FE\u63A5\uFF0C\u7B2C\u4E00\u4E2A\u662Fca\u8BC1\u4E66\uFF0C\u53EF\u4EE5\u5FFD\u7565\uFF0C\u7B2C\u4E8C\u4E2A\u624D\u662F\u91CD\u70B9\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/342f455140b436b2.jpg" alt="image"></p><p>\u63A5\u4E0B\u6765\u7684\u64CD\u4F5C\u57FA\u672C\u4E0A\u5C31\u5DEE\u4E0D\u591A\u4E86\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u4E8C\u7EF4\u7801URL\u662F\u56FA\u5B9A\u7684\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5728Jenkins\u91CC\u8FB9\u4E5F\u56FA\u5B9A\u4E00\u4E0B\uFF0C\u628A\u8FD9\u4E2AURL\u6253\u6210\u4E8C\u7EF4\u7801\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/0cfd2a8cd2c0cd09.jpg" alt="image"></p><p>\u540C\u65F6\u4E5F\u53EF\u4EE5\u5728\u9879\u76EE\u7684\u8BF4\u660E\u4FE1\u606F\u5F53\u4E2D\u6DFB\u52A0\u4E00\u4E0B\u8BF4\u660E\uFF0C\u4ECE\u800C\u6613\u4E8E\u4F7F\u7528\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/1f06e0a11d8fca60.jpg" alt="image"></p><p>\u5176\u4E2D\u7528\u5230\u7684\u4FDD\u7559\u4E94\u4E2A\u7248\u672C\u7684\u811A\u672C\uFF0C\u8FD9\u91CC\u4E5F\u8BB0\u5F55\u4E00\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> keep-five.sh
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">file_path</span><span class="token operator">=</span><span class="token string">&quot;/media/ipa/&quot;</span>
<span class="token assign-left variable">file_name</span><span class="token operator">=</span><span class="token string">&quot;*.ipa&quot;</span>
<span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> $file_path/$file_name <span class="token operator">|</span> <span class="token function">wc</span> -l<span class="token variable">\`</span></span>
<span class="token assign-left variable">B</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> -lt $file_path/$file_namt <span class="token operator">|</span> <span class="token function">tail</span> -n <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $9}&#39;</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> -gt <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   <span class="token function">rm</span> -f <span class="token variable">$file_path</span>/<span class="token variable">$B</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">break</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,17);function v(g,f){const e=p("ExternalLinkIcon");return t(),l(c,null,[u,s("p",null,[k,s("a",b,[d,o(e)])]),m],64)}var _=r(i,[["render",v]]);export{_ as default};