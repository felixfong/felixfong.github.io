import{e as p}from"./app.dbf5d933.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const t={},a=p('<p>Jenkins\u62C9\u53D6\u4ECEGit\u4ED3\u5E93\u62C9\u53D6\u4EE3\u7801\u8FDB\u884C\u90E8\u7F72\u64CD\u4F5C\u3002\u73B0\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C\u4ECA\u5929\u5206\u522B\u8BB0\u5F55\u4E24\u79CD\u65B9\u6CD5\uFF0C\u5E76\u5BF9\u5176\u4E2D\u4E00\u4E9B\u95EE\u9898\u8FDB\u884C\u8BB2\u89E3\u3002</p><h2 id="_1-\u76F4\u63A5\u901A\u8FC7\u5176\u9644\u5E26\u7684git\u63D2\u4EF6\u6765\u62C9\u53D6\u4EE3\u7801\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u76F4\u63A5\u901A\u8FC7\u5176\u9644\u5E26\u7684git\u63D2\u4EF6\u6765\u62C9\u53D6\u4EE3\u7801\u3002" aria-hidden="true">#</a> 1\uFF0C \u76F4\u63A5\u901A\u8FC7\u5176\u9644\u5E26\u7684Git\u63D2\u4EF6\u6765\u62C9\u53D6\u4EE3\u7801\u3002</h2><p>\u914D\u7F6E\u5982\u4E0B\u56FE\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/50df861fb9955519.jpg" alt="image"></p><p>\u901A\u8FC7\u5728\u6E90\u7801\u7BA1\u7406\u5F53\u4E2D\u76F4\u63A5\u8BBE\u7F6EGit\u4ED3\u5E93\u7684\u4EE3\u7801\u94FE\u63A5\uFF0C\u7136\u540E\u4E0B\u8FB9\u6DFB\u52A0\u76F8\u5BF9\u5E94\u7684\u5DF2\u6CE8\u518C\u7528\u6237\u8D26\u53F7\u5BC6\u7801\uFF0C\u5982\u6B64\u5C31\u53EF\u4EE5\u62C9\u53D6\u5230\u672C\u5730workspace\u91CC\u4E86\u3002\u7136\u540E\u5C31\u80FD\u591F\u9488\u5BF9\u4EE3\u7801\u8FDB\u884C\u64CD\u4F5C\u4E86\u3002</p><p>\u90A3\u4E48\u8FD9\u79CD\u65B9\u5F0F\u6784\u5EFA\u7684\u9879\u76EE\uFF0C\u5206\u652F\u5207\u6362\u66F4\u52A0\u7075\u6D3B\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u6784\u5EFA\u8BB0\u5F55\u5F53\u4E2D\u6240\u663E\u73B0\u7684\u4EE3\u7801\u53D8\u52A8\u8BB0\u5F55\u4E5F\u4F1A\u975E\u5E38\u5927\uFF0C\u5728\u771F\u6B63\u6784\u5EFA\u4E4B\u524D\u90FD\u662F\u4EE3\u7801\u53D8\u52A8\u7684\u8BB0\u5F55\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/fa2ab597fe447252.jpg" alt="image"></p><p>\u770B\u5230\u65B9\u6846\u91CC\u8FB9\u5C31\u662F\u6C47\u603B\u663E\u793A\u53D8\u52A8\u4F20\u8F93\u7684\u60C5\u51B5\u3002</p><h2 id="_2-\u4E0D\u901A\u8FC7git\u63D2\u4EF6\u5BF9\u4EE3\u7801\u8FDB\u884C\u64CD\u4F5C\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0D\u901A\u8FC7git\u63D2\u4EF6\u5BF9\u4EE3\u7801\u8FDB\u884C\u64CD\u4F5C\u3002" aria-hidden="true">#</a> 2\uFF0C \u4E0D\u901A\u8FC7Git\u63D2\u4EF6\u5BF9\u4EE3\u7801\u8FDB\u884C\u64CD\u4F5C\u3002</h2><p>\u8FD9\u79CD\u65B9\u5F0F\u66F4\u9002\u5408\u4E8E\u5355\u4E00\u5206\u652F\u53D1\u5E03\u7684\u60C5\u51B5\uFF0C\u4E00\u822C\u7EBF\u4E0A\u6B63\u662F\u73AF\u5883\u90FD\u662F\u53EA\u53D1master\u5206\u652F\uFF0C\u6BD4\u8F83\u9002\u5408\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002</p><p>\u64CD\u4F5C\u6D41\u7A0B\u5927\u6982\u662F\u8FD9\u6837\uFF0C\u9996\u5148\u5728Jenkins\u6240\u5728\u670D\u52A1\u5668\u4E0A\u5BF9\u8981\u5DE5\u4F5C\u7684\u9879\u76EE\u8FDB\u884C\u624B\u52A8clone\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u5728Jenkins\u8FD9\u91CC\u76F4\u63A5\u5BF9\u4EE3\u7801\u8FDB\u884C\u64CD\u4F5C\u90E8\u7F72\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/651908cb2af403ba.jpg" alt="image"></p><p>\u76F4\u63A5\u5728\u6784\u5EFA\u7684\u5730\u65B9\u5BF9\u4EE3\u7801\u8FDB\u884C\u64CD\u4F5C</p><p><img src="http://t.eryajf.net/imgs/2021/09/97e70e1457b5d486.jpg" alt="image"></p><p>\u8FD9\u91CC\u9690\u53BB\u7684\u662F\u901A\u8FC7\u811A\u672C\u5BF9\u4EE3\u7801\u8FDB\u884C\u64CD\u4F5C\u7684\u4E00\u4E9B\u4E8B\u60C5\u3002</p><p>\u90A3\u4E48\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6765\u8FDB\u884C\u90E8\u7F72\uFF0C\u5176\u4EE3\u7801\u53D8\u5316\uFF0C\u5219\u770B\u8D77\u6765\u4F1A\u66F4\u52A0\u76F4\u89C2\u4FBF\u6377\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/de389aefbf089a2b.jpg" alt="image"></p><p>\u89E3\u91CA\uFF1A</p><ul><li><p>\u9996\u5148\u662F\u5206\u652F\u5DF2\u7ECF\u5728master\u3002</p></li><li><p>\u7136\u540E\u663E\u793A\u4ECEGit\u5E93\u94FE\u63A5\u62C9\u53D6\u66F4\u65B0\u3002</p></li><li><p>\u4E0B\u8FB9\u5C31\u662F\u4E00\u4E9B\u8BE6\u7EC6\u66F4\u65B0\u5185\u5BB9\u7684\u5C55\u793A\u3002</p></li></ul><p>\u4E24\u79CD\u65B9\u5F0F\u90FD\u662F\u53EF\u4EE5\u8FDB\u884C\u6B63\u5E38\u6784\u5EFA\u90E8\u7F72\u7684\u3002\u7B2C\u4E00\u79CD\u66F4\u9002\u5408\u4E8E\u6D4B\u8BD5\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u5206\u652F\u53D8\u52A8\u66F4\u52A0\u7075\u6D3B\uFF0C\u7B2C\u4E8C\u79CD\u66F4\u9002\u5408\u4E8E\u6B63\u5F0F\u73AF\u5883\uFF0C\u53EA\u9488\u5BF9\u5355\u4E00\u5206\u652F\u8FDB\u884C\u90E8\u7F72\u66F4\u65B0\u3002</p><p>\u800C\u4E24\u79CD\u65B9\u5F0F\u8FD8\u6709\u4E00\u4E2A\u5C0F\u533A\u522B\uFF0C\u7B2C\u4E00\u79CD\u6784\u5EFA\u65B9\u5F0F\uFF0C\u6240\u6709\u7684\u4EE3\u7801\u53D8\u52A8\u66F4\u65B0\u90FD\u53EF\u4EE5\u901A\u8FC7\u9879\u76EE\u7684\u53D8\u66F4\u8BB0\u5F55\u91CC\u8FB9\u770B\u5230\uFF0C\u4F46\u662F\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u53BB\u5230\u53D8\u66F4\u8BB0\u5F55\u91CC\u8FB9\uFF0C\u5219\u5168\u90E8\u662F\u6CA1\u6709\u53D8\u52A8\u3002\u6709\u8FD9\u4E2A\u533A\u522B\uFF0C\u5C31\u4E0D\u4F1A\u5728\u5F00\u53D1\u6765\u627E\u4F60\u95EE\u6211\u4EE3\u7801\u6709\u6CA1\u6709\u53D1\u4E0A\u53BB\uFF0C\u800C\u4F60\u5728\u786E\u8BA4\u662F\u5426\u6709\u53D1\u4E0A\u53BB\u65F6\u2013\u88AB\u52A8\u3002</p>',21);function i(r,s){return a}var g=e(t,[["render",i]]);export{g as default};
