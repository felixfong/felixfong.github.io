import{e}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=e(`<h2 id="_0-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_0-\u6982\u8FF0" aria-hidden="true">#</a> 0. \u6982\u8FF0</h2><p>\u8BB0\u5F55\u4E00\u4E0B\u6700\u8FD1git\u63D0\u4EA4\u4EE3\u7801\u65F6\uFF0C\u65E0\u6CD5\u63D0\u4EA4\u6210\u529F\u7684\u95EE\u9898\uFF0C\u8BE6\u7EC6\u62A5\u9519\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># git push
Enumerating objects: 81, done.
Counting objects: 100% (70/70), done.
Delta compression using up to 12 threads
Compressing objects: 100% (45/45), done.
Writing objects: 100% (47/47), 22.72 KiB | 4.54 MiB/s, done.
Total 47 (delta 16), reused 4 (delta 0), pack-reused 0
remote: PermissionDenied: Permission Deny: You are not allowed to push this branch.
! [remote rejected] feature/\u5206\u652F -&gt; feature/\u5206\u652F (pre-receive hook declined)
error: failed to push some refs to &#39;https://\u9879\u76EE\u8DEF\u5F84.git&#39;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E2D\u6587\u89E3\u91CA\uFF1A\u4F60\u4E0D\u5141\u8BB8\u63A8\u9001\u8FD9\u4E2A\u5206\u652F</p><h2 id="_1-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_1-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 1. \u89E3\u51B3\u65B9\u6848</h2><p>\u770B\u5230\u8BE5\u62A5\u9519\uFF0C\u9996\u5148\u9700\u8981\u786E\u8BA4\u7684\u662F\uFF1A 1.1 \u81EA\u5DF1\u4F7F\u7528\u7684\u8D26\u53F7\u662F\u5426\u62E5\u6709\u8BE5\u9879\u76EE\u7684\u6743\u9650\uFF0C\u5982\u679C\u6CA1\u6709\u63D0\u4EA4\u6743\u9650\u5219\u9700\u8981\u7BA1\u7406\u5458\u7ED9\u6DFB\u52A0\uFF0C\u6DFB\u52A0\u540E\u518D\u6B21\u5C1D\u8BD5\u63D0\u4EA4 1.2 \u6DFB\u52A0\u6743\u9650\u540E\u4EFB\u7136\u4E0D\u53EF\u4EE5\u63D0\u4EA4\uFF0C\u9700\u518D\u6B21\u786E\u8BA4\u662F\u5426\u6709hook\u811A\u672C\uFF0C\u786E\u8BA4hook\u811A\u672C\u662F\u5426\u6709\u95EE\u9898 1.3 \u5C1D\u8BD5\u914D\u7F6ESSH Key\uFF0C\u7136\u540E\u4F7F\u7528SSH\u6765clone\u4EE3\u7801\uFF0C\u518D\u6B21\u63D0\u4EA4</p><h2 id="_2-\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> 2. \u77E5\u8BC6\u70B9</h2><p>\u5E73\u5E38\u62C9\u53D6\u4EE3\u7801\u901A\u5E38\u6709\u4E24\u79CD\u65B9\u5F0F\uFF0C\u5206\u522B\u662FSSH\u548CHTTPS SSH\uFF1A\u4F1A\u6839\u636ESSH Key \u6765\u9A8C\u8BC1\u7528\u6237\u8EAB\u4EFD\uFF0C\u9879\u76EE\u5FC5\u987B\u662F\u62E5\u6709\u8005\u6216\u8005\u7BA1\u7406\u5458\u6743\u9650\uFF0CPUSH\u4EE3\u7801\u65F6\u4E0D\u9700\u8981\u8F93\u5165\u7528\u6237\u540D HTTPS\uFF1A\u4E0D\u7BA1\u662F\u8C01\uFF0C\u62FF\u5230url\u5C31\u53EF\u4EE5clone\u4EE3\u7801\uFF0C\u4F46\u662F\u5728PUSH\u7684\u65F6\u5019\u9700\u8981\u9A8C\u8BC1\u7528\u6237\u540D\u548C\u5BC6\u7801</p>`,8);function r(t,i){return a}var d=n(s,[["render",r]]);export{d as default};