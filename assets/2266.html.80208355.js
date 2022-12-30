import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u4ECA\u5929\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u65E5\u5FD7\u6E05\u7406\u811A\u672C\uFF0C\u7136\u540E\u5374\u603B\u662F\u4F1A\u62A5\u51FA<code>command not found</code>\u7684\u9519\u8BEF\uFF0C\u4E00\u65F6\u4E5F\u662F\u61F5\u4F4F\u4E86\uFF0C\u56F0\u4E86\u4E00\u5927\u4F1A\u513F\u624D\u627E\u5230\u539F\u56E0\uFF0C\u53EF\u80FD\u8FD9\u5C31\u662F\u7ECF\u9A8C\u4E0D\u591F\u4E30\u5BCC\u7684\u539F\u56E0\u5427\u3002</p><p>\u8FD9\u662F\u4EC0\u4E48\u539F\u56E0\uFF0C\u4E00\u822C\u62A5\u9519\u8FD9\u4E2A\u9519\u8BEF\u7684\uFF0C\u5728 Linux \u7CFB\u7EDF\u5F53\u4E2D\uFF0C\u90FD\u662F\u8BF4\u6CA1\u6709\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u4F46\u662F\u6211\u7528\u7684 ls\uFF0C\u96BE\u9053\u771F\u7684\u662F\u88AB\u5220\u6839\uFF0C\u8FDE ls \u90FD\u6CA1\u6709\u4E86\u5417\u3002 \u5148\u6765\u770B\u770B\u811A\u672C\u90FD\u5199\u4E86\u4EC0\u4E48\u5427\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/tomcat/logs
<span class="token keyword">for</span> <span class="token for-or-select variable">A</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token builtin class-name">.</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">cd</span> <span class="token environment constant">$PATH</span>
    <span class="token function">find</span> <span class="token variable">$A</span>/  -mtime +1 -name <span class="token string">&quot;*.log*&quot;</span> -exec <span class="token function">rm</span> -rf <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u770B\u4E0A\u53BB\u633A\u6B63\u5E38\u7684\u4E00\u4E2A\u811A\u672C\uFF0C\u91CD\u590D\u6267\u884C\u4ECD\u65E7\u5982\u6B64\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/b92935f1672d6522.jpg" alt="image"></p><p>\u73B0\u5728\uFF0C\u6709\u4E24\u4E2A\u601D\u8DEF\u53EF\u4EE5\u6765\u8FDB\u884C\u4E00\u4E0B\u6392\u67E5\uFF1A</p><ul><li>1\uFF0C \u53EF\u80FD\u7CFB\u7EDF\u5F53\u4E2D\u771F\u7684\u6CA1\u6709\u811A\u672C\u5F53\u4E2D\u51FA\u73B0\u7684\u547D\u4EE4\uFF0C\u6216\u8005\u811A\u672C\u5F53\u4E2D\u7684\u547D\u4EE4\u4E66\u5199\u4E0D\u89C4\u8303\uFF0C\u9700\u8981\u4ED4\u7EC6\u68C0\u67E5\u3002</li><li>2\uFF0C \u90A3\u5C31\u662F\u6211\u4ECA\u5929\u72AF\u7684\u9519\u8BEF\u4E86\uFF0C\u5728\u5B9A\u4E49\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u4E86 PATH \u8FD9\u4E2A\u53D8\u91CF\u540D\uFF0C\u8FD9\u5728 Linux \u4E2D\u5C31\u72AF\u4E86\u5927\u5FCC\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u4E34\u65F6\u5B9A\u4E49\u7684\u540D\u79F0\uFF0C\u4F1A\u88AB\u5F53\u505A\u73AF\u5883\u53D8\u91CF\u800C\u5C06\u7CFB\u7EDF\u4E2D\u7684\u73AF\u5883\u53D8\u91CF\u7ED9\u8986\u76D6\uFF0C\u5728\u73AF\u5883\u53D8\u91CF\u4E0B\u7684\u547D\u4EE4\u4EEC\u5C31\u50CF\u4E00\u7FA4\u4E00\u76F4\u4ECE\u90A3\u4E2A\u72EC\u6728\u6865\u56DE\u5BB6\u7684\u5C0F\u7F8A\uFF0C\u7A81\u7136\u4E00\u5929\u72EC\u6728\u6865\u88AB\u780D\u65AD\uFF0C\u4ED6\u4EEC\u5C31\u4F1A\u89C9\u5F97\u627E\u4E0D\u5230\u56DE\u5BB6\u7684\u8DEF\u4E86\u4E00\u6837\u3002</li></ul><p>\u6B64\u65F6\uFF0C\u5C06 PATH \u66F4\u6539\u6210 Path \u6216\u8005\u5176\u4ED6\uFF0C\u518D\u56DE\u53BB\u6267\u884C\u521A\u624D\u7684\u811A\u672C\uFF0C\u53D1\u73B0\u5C31\u4E0D\u4F1A\u62A5\u8FD9\u4E2A\u9519\u4E86\u3002</p>`,8);function p(t,l){return e}var r=s(a,[["render",p]]);export{r as default};