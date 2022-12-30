import{e}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=e(`<h2 id="_0-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_0-\u6982\u8FF0" aria-hidden="true">#</a> 0. \u6982\u8FF0</h2><p>\u6211\u4EEC\u5E73\u5E38\u770B\u5230\u7684\u670D\u52A1\u5668\u5382\u5546\u5BF9\u5916\u5BA3\u4F20\u7684CPU\u6838\u6570\u662F\u670D\u52A1\u5668\u771F\u5B9E\u7684CPU\u6838\u6570\u5417\uFF1F \u4F8B\u5982\uFF1Atop\u547D\u4EE4\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u670D\u52A1\u5668\u8FD4\u56DE\u4E8624\u4E2A\u6838\u6570\uFF0C\u90A3\u5176\u5B9E\u8FD9\u4E2A\u662F\u903B\u8F91\u6838\u6570\uFF0C\u5E76\u975E\u771F\u6B63\u7684\u7269\u7406\u6838\u6570</p><h2 id="_1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u5FF5" aria-hidden="true">#</a> 1. \u6982\u5FF5</h2><ul><li>\u7269\u7406CPU\uFF1A\u4E3B\u677F\u4E0A\u771F\u6B63\u5B89\u88C5\u7684CPU\u7684\u4E2A\u6570\uFF0C\u901A\u8FC7physical id\u53EF\u4EE5\u67E5\u770B</li><li>\u7269\u7406\u6838\uFF1A\u4E00\u4E2ACPU\u4F1A\u96C6\u6210\u591A\u4E2A\u7269\u7406\u6838\u6570\uFF0C\u901A\u8FC7core id\u53EF\u4EE5\u67E5\u770B\u5230\u7269\u7406\u6838\u7684\u5E8F\u53F7</li><li>\u903B\u8F91\u6838\uFF1Aintel\u8FD0\u7528\u4E86\u8D85\u7EBF\u7A0B\u6280\u672F\uFF0C\u4E00\u4E2A\u7269\u7406\u6838\u53EF\u4EE5\u88AB\u865A\u62DF\u51FA\u6765\u591A\u4E2A\u903B\u8F91\u6838\uFF0Cprocessor\u662F\u903B\u8F91\u6838\u5E8F\u53F7</li></ul><h2 id="_2-\u67E5\u770B\u670D\u52A1\u5668cpu\u6307\u6807" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u670D\u52A1\u5668cpu\u6307\u6807" aria-hidden="true">#</a> 2. \u67E5\u770B\u670D\u52A1\u5668CPU\u6307\u6807</h2><ul><li>\u67E5\u770B\u7269\u7406CPU</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#cat /proc/cpuinfo | grep &quot;physical id&quot; | sort | uniq  
physical id     : 0  
physical id     : 1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u8BE5\u5B9E\u673A\u6709\u4E24\u4E2A\u7269\u7406CPU\u3002</p><ul><li>\u7269\u7406\u6838</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#cat /proc/cpuinfo| grep &quot;cpu cores&quot;| uniq  
cpu cores       : 6
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>cpu cores\u8868\u793A\u6BCF\u4E2Acpu\u67096\u4E2A\u7269\u7406\u6838\u5FC3\uFF0C\u56E0\u4E3A\u67092\u4E2A\u7269\u7406CPU\uFF0C\u6240\u4EE5\u8BE5\u673A\u5668\u603B\u5171\u53EA\u670912\u4E2A\u7269\u7406\u6838\u3002\u800C\u4E0D\u662Ftop\u547D\u4EE4\u91CC\u770B\u5230\u768424\u4E2A\uFF0C\u6574\u6574\u5C11\u4E86\u4E00\u534A\u3002 Intel\u662F\u901A\u8FC7\u8D85\u7EBF\u7A0B\u6280\u672F\u628A\u4E00\u4E2A\u7269\u7406\u6838\u865A\u62DF\u51FA\u6765\u4E86\u591A\u4E2A\uFF0C\u6545\u800C\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u9762\u770B\u5230\u7684\u6BD4\u5B9E\u9645\u7684\u7269\u7406\u6838\u8981\u591A\u3002\u6211\u4EEC\u5BFB\u627E\u4E00\u4E0B\u8BC1\u636E</p><ul><li>\u903B\u8F91\u6838</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#cat /proc/cpuinfo  | grep -E &quot;core id|process|physical id&quot;  
processor       : 0
physical id     : 0  
core id         : 0  
......  
processor       : 12  
physical id     : 0  
core id         : 0  
......  
processor       : 23  
physical id     : 1  
core id         : 10
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>processor\u5C31\u662F\u903B\u8F91\u6838\u7684\u5E8F\u53F7\uFF0C\u53EF\u4EE5\u770B\u51FA\u8BE5\u673A\u5668\u603B\u5171\u670924\u4E2A\u903B\u8F91\u6838\u3002\u5927\u5BB6\u6CE8\u610F\u770Bprocessor 0\u548Cprocessor 12\u7684physical id\u3001core id\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u4E5F\u5C31\u8BF4\u4ED6\u4EEC\u4ED6\u4EEC\u4E5F\u5904\u5728\u540C\u4E00\u4E2A\u7269\u7406\u6838\u4E0A\u3002\u4F46\u662F\u4ED6\u4EEC\u7684processor\u7F16\u53F7\u5374\u4E0D\u4E00\u6837\uFF0C\u4E00\u4E2A\u662F0\uFF0C\u4E00\u4E2A\u662F12\u3002\u8FD9\u5C31\u662F\u8BF4\uFF0C\u8FD9\u4E24\u4E2A\u6838\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u6838\uFF0C\u53EA\u662F\u901A\u8FC7\u865A\u62DF\u6280\u672F\u865A\u62DF\u51FA\u6765\u7684\u800C\u5DF2</p><h2 id="\u8D85\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8D85\u7EBF\u7A0B" aria-hidden="true">#</a> \u8D85\u7EBF\u7A0B</h2><p>\u8D85\u7EBF\u7A0B\u91CC\u76842\u4E2A\u903B\u8F91\u6838\u5B9E\u9645\u4E0A\u662F\u5728\u4E00\u4E2A\u7269\u7406\u6838\u4E0A\u8FD0\u884C\u7684\uFF0C\u6A21\u62DF\u53CC\u6838\u5FC3\u8FD0\u4F5C\uFF0C\u5171\u4EAB\u8BE5\u7269\u7406\u6838\u7684L1\u548CL2\u7F13\u5B58\u3002\u7269\u7406\u8BA1\u7B97\u80FD\u529B\u5E76\u6CA1\u6709\u589E\u52A0\uFF0C\u8D85\u7EBF\u7A0B\u6280\u672F\u53EA\u6709\u5728\u591A\u4EFB\u52A1\u7684\u65F6\u5019\u624D\u80FD\u63D0\u5347\u673A\u5668\u6838\u6574\u4F53\u7684\u541E\u5410\u91CF\u3002\u800C\u4E14\u636EIntel\u5B98\u65B9\u4ECB\u7ECD\uFF0C\u76F8\u6BD4\u5B9E\u6838\uFF0C\u5E73\u5747\u6027\u80FD\u63D0\u5347\u53EA\u670920-30%\u5DE6\u53F3\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u6211\u521A\u624D\u7684\u673A\u5668\u4E0A\u770B\u5230\u768424\u6838\u7684\u5904\u7406\u80FD\u529B\uFF0C\u6574\u4F53\u4E0A\u53EA\u6BD4\u4E0D\u5F00\u8D85\u7EBF\u7A0B\u768412\u6838\u6027\u80FD\u9AD830%\u3002\u8BA9\u6211\u4EEC\u518D\u7528\u5F00\u53D1\u8005\u4F7F\u7528\u7684\u8FDB\u7A0B\u6765\u770B\uFF0C\u7531\u4E8E\u4F60\u7684\u8FDB\u7A0B\u88AB\u5176\u5B83\u8FDB\u7A0B\u5206\u4EAB\u4E86L1\u3001L2\uFF0C\u8FD9\u5C31\u5BFC\u81F4cache miss\u53D8\u591A\uFF0C\u6027\u80FD\u4F1A\u6BD4\u4E0D\u5F00\u8D85\u7EBF\u7A0B\u8981\u5DEE\u3002</p>`,16);function r(i,c){return a}var d=s(n,[["render",r]]);export{d as default};