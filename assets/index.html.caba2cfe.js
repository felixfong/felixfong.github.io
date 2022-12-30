import{e}from"./app.dbf5d933.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const n={},s=e(`<p>\u9879\u76EE\u4E0A\u7EBF\u4E4B\u540E\uFF0C\u6D4B\u8BD5\u540C\u5B66\u53CD\u9988\u8BF4\u4E00\u4E9B\u6587\u4EF6\u4E0A\u4F20\u7684\u65F6\u5019\u62A5\u9519\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/4d36575655b499d3.jpg" alt="2019-07-17_103234"></p><p>\u62A5\u9519\u63D0\u793A\u7684\u4E5F\u975E\u5E38\u6E05\u695A\uFF0C<code>413 =&gt; \u201CHTTP/1.1 413 Request Entity Too Large\u201D#\u670D\u52A1\u5668\u65E0\u6CD5\u5904\u7406\u8BF7\u6C42\uFF0C\u56E0\u4E3A\u8BF7\u6C42\u5B9E\u4F53\u8FC7\u5927\uFF0C\u8D85\u51FA\u670D\u52A1\u5668\u7684\u5904\u7406\u80FD\u529B\u3002</code></p><p>\u90A3\u4E48\u5728nginx\u914D\u7F6E\u4E2D\u6DFB\u52A0\u5982\u4E0B\u4E24\u6761\u914D\u7F6E\u5373\u53EF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	client_max_body_size    10m;
    client_body_buffer_size 128k;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5E38\u89C4\u6765\u8BF4\uFF0C10M\u662F\u8DB3\u591F\u4E86\u7684\uFF0C\u5982\u679C\u8FD8\u4E0D\u591F\uFF0C\u53EF\u80FD\u9700\u8981\u5F00\u53D1\u68C0\u67E5\u4E00\u4E0B\u4EE3\u7801\u60C5\u51B5\u4E86\u3002</p><p>\u8981\u6CE8\u610F\u89C2\u5BDF\u662F\u54EA\u4E2A\u57DF\u540D\u9650\u5236\u7684\uFF0C\u6709\u65F6\u5019\u770B\u4F3C\u8BF7\u6C42\u7684\u662F\u524D\u7AEF\u57DF\u540D\uFF0C\u5B9E\u9645\u4E0A\u524D\u7AEF\u8F6C\u53D1\u7ED9\u4E86\u540E\u7AEF\uFF0C\u800C\u9650\u5236\u662F\u5728\u540E\u7AEF\u7684\uFF0C\u56E0\u6B64\u66F4\u6539\u914D\u7F6E\u4E5F\u8981\u66F4\u6539\u540E\u7AEF\u7684nginx\u914D\u7F6E\u624D\u5BF9\u3002</p>`,7);function p(r,a){return s}var d=t(n,[["render",p]]);export{d as default};
