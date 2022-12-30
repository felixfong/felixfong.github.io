import{e as t}from"./app.dbf5d933.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const l={},i=t('<h2 id="_1-http\u57FA\u7840\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#_1-http\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a> 1. HTTP\u57FA\u7840\u77E5\u8BC6</h2><p>\u6982\u5FF5\uFF1A\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF0C\u5373\uFF1A\u4E00\u4E2A\u5728\u8BA1\u7B97\u673A\u4E16\u754C\u91CC\u4E13\u95E8\u5728\u300C\u4E24\u70B9\u300D\u4E4B\u95F4\u300C\u4F20\u8F93\u300D\u6587\u5B57\u3001\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\u7B49\u300C\u8D85\u6587\u672C\u300D\u6570\u636E\u7684\u300C\u7EA6\u5B9A\u548C\u89C4\u8303\u300D\u3002</p><blockquote><p>\u5E38\u89C1\u72B6\u6001\u7801</p></blockquote><ul><li><p>1xx 1xx\u63D0\u793A\u4FE1\u606F\uFF0C\u534F\u8BAE\u5904\u7406\u4E2D\u7684\u4E00\u79CD\u4E2D\u95F4\u72B6\u6001</p></li><li><p>2xx 2xx\u670D\u52A1\u5668\u6210\u529F\u5904\u7406\u4E86\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42</p></li></ul><table><thead><tr><th style="text-align:center;">\u72B6\u6001\u7801</th><th style="text-align:center;">\u82F1\u6587\u6982\u5FF5</th><th style="text-align:center;">\u4E2D\u6587\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">200</td><td style="text-align:center;">ok</td><td style="text-align:center;">\u5982\u679C\u662F\u975E<strong>HEAD</strong>\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u54CD\u5E94\u5934\u90FD\u4F1A\u6709body\u6570\u636E</td></tr><tr><td style="text-align:center;">204</td><td style="text-align:center;">no content</td><td style="text-align:center;">\u54CD\u5E94\u5934\u6CA1\u6709body\u6570\u636E</td></tr><tr><td style="text-align:center;">206</td><td style="text-align:center;">partial content</td><td style="text-align:center;">\u5E94\u7528\u4E8EHTTP\u5206\u5757\u4E0B\u8F7D\u6216\u65AD\u7535\u7EED\u4F20\uFF0C\u8868\u793A\u54CD\u5E94\u8FD4\u56DE\u7684body\u6570\u636E\u5E76\u4E0D\u662F\u8D44\u6E90\u7684\u5168\u90E8\uFF0C\u800C\u662F\u5176\u4E2D\u7684\u4E00\u90E8\u5206\uFF0C\u4E5F\u662F\u670D\u52A1\u5668\u5904\u7406\u6210\u529F\u7684\u72B6\u6001\u3002</td></tr></tbody></table><ul><li>3xx 3xx\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u8D44\u6E90\u53D1\u751F\u4E86\u53D8\u52A8\uFF0C\u9700\u8981\u5BA2\u6237\u7AEF\u4F7F\u7528\u65B0\u7684URL\u91CD\u65B0\u53D1\u9001\u8BF7\u6C42\uFF0C\u5373\u91CD\u5B9A\u5411 11:15 14:15 13:00</li></ul><table><thead><tr><th style="text-align:center;">\u72B6\u6001\u7801</th><th style="text-align:center;">\u82F1\u6587\u6982\u5FF5</th><th style="text-align:center;">\u4E2D\u6587\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">301</td><td style="text-align:center;">moved permanently</td><td style="text-align:center;">\u6C38\u4E45\u91CD\u5B9A\u5411\uFF0C\u8BF4\u660E\u8BF7\u6C42\u7684\u8D44\u6E90\u5DF2\u7ECF\u4E0D\u5B58\u5728\u4E86\uFF0C\u9700\u8981\u6539\u7528\u65B0\u7684URL\u518D\u6B21\u8BBF\u95EE</td></tr><tr><td style="text-align:center;">301</td><td style="text-align:center;">templated permanently</td><td style="text-align:center;">\u4E34\u65F6\u91CD\u5B9A\u5411\uFF0C\u8BF4\u660E\u8BF7\u6C42\u7684\u8D44\u6E90\u8FD8\u5B58\u5728\uFF0C\u53EA\u662F\u6682\u65F6\u9700\u8981\u4F7F\u7528\u65B0\u7684URL\u8BBF\u95EE</td></tr><tr><td style="text-align:center;">304</td><td style="text-align:center;">not modified</td><td style="text-align:center;">\u8D44\u6E90\u672A\u4FEE\u6539\uFF0C\u91CD\u5B9A\u5411\u5DF2\u5B58\u5728\u7684\u7F13\u51B2\u6587\u4EF6\uFF0C\u4E5F\u79F0\u4E3A\u7F13\u5B58\u91CD\u5B9A\u5411</td></tr></tbody></table><p>301 \u548C 302 \u90FD\u4F1A\u5728\u54CD\u5E94\u5934\u91CC\u4F7F\u7528\u5B57\u6BB5<strong>Location</strong>\uFF0C\u6307\u660E\u540E\u7EED\u8981\u8DF3\u8F6C\u7684URL\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u91CD\u5B9A\u5411\u65B0\u7684URL\u3002</p><ul><li>4xx 4xx\u4EE3\u8868\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u62A5\u6587\u6709\u8BEF\uFF0C\u670D\u52A1\u5668\u65E0\u6CD5\u5904\u7406</li></ul><table><thead><tr><th style="text-align:center;">\u72B6\u6001\u7801</th><th style="text-align:center;">\u82F1\u6587\u6982\u5FF5</th><th style="text-align:center;">\u4E2D\u6587\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">400</td><td style="text-align:center;">bad request</td><td style="text-align:center;">\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u62A5\u6587\u6709\u9519\u8BEF\uFF0C\u53EA\u662F\u4E2A\u7B3C\u7EDF\u7684\u9519\u8BEF</td></tr><tr><td style="text-align:center;">403</td><td style="text-align:center;">forbidden</td><td style="text-align:center;">\u670D\u52A1\u5668\u7981\u6B62\u8BBF\u95EE\u8D44\u6E90\uFF0C\u5E76\u4E0D\u662F\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u51FA\u9519</td></tr><tr><td style="text-align:center;">404</td><td style="text-align:center;">not found</td><td style="text-align:center;">\u8BF7\u6C42\u7684\u8D44\u6E90\u5728\u670D\u52A1\u5668\u4E0A\u4E0D\u5B58\u5728\u6216\u672A\u627E\u5230\uFF0C\u6240\u4EE5\u65E0\u6CD5\u63D0\u4F9B\u7ED9\u5BA2\u6237\u7AEF</td></tr></tbody></table><ul><li>5xx 5xx\u8868\u793A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u62A5\u6587\u6B63\u786E\uFF0C\u4F46\u662F\u670D\u52A1\u5668\u5904\u7406\u65F6\u5185\u90E8\u53D1\u751F\u9519\u8BEF\uFF0C\u5C5E\u4E8E\u670D\u52A1\u7AEF\u7684\u9519\u8BEF\u7801</li></ul><table><thead><tr><th style="text-align:center;">\u72B6\u6001\u7801</th><th style="text-align:center;">\u82F1\u6587\u6982\u5FF5</th><th style="text-align:center;">\u4E2D\u6587\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">500</td><td style="text-align:center;">internal server error</td><td style="text-align:center;">\u7B3C\u7EDF\u7684\u9519\u8BEF\u7801\uFF0C\u670D\u52A1\u5668\u53D1\u751F\u4E86\u4EC0\u4E48\u9519\u8BEF\uFF0C\u5E76\u4E0D\u77E5\u9053</td></tr><tr><td style="text-align:center;">501</td><td style="text-align:center;">not implemented</td><td style="text-align:center;">\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u529F\u80FD\u8FD8\u4E0D\u652F\u6301\uFF0C\u7C7B\u4F3C&quot;\u5373\u5C06\u5F00\u4E1A\uFF0C\u656C\u8BF7\u7B49\u5F85&quot;\u7684\u610F\u601D</td></tr><tr><td style="text-align:center;">502</td><td style="text-align:center;">bad gateway</td><td style="text-align:center;">\u670D\u52A1\u5668\u4F5C\u4E3A\u7F51\u5173\u6216\u4EE3\u7406\u65F6\u8FD4\u56DE\u7684\u9519\u8BEF\u7801\uFF0C\u8868\u793A\u670D\u52A1\u5668\u81EA\u8EAB\u5DE5\u4F5C\u6B63\u5E38\uFF0C\u8BBF\u95EE\u540E\u7AEF\u670D\u52A1\u5668\u53D1\u751F\u4E86\u9519\u8BEF</td></tr><tr><td style="text-align:center;">503</td><td style="text-align:center;">service unavailable</td><td style="text-align:center;">\u670D\u52A1\u5668\u5F53\u524D\u5F88\u5FD9\uFF0C\u6682\u65F6\u65E0\u6CD5\u54CD\u5E94\u670D\u52A1\u5668\uFF0C\u7C7B\u4F3C&quot;\u7F51\u7EDC\u670D\u52A1\u6B63\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5&quot;\u7684\u610F\u601D</td></tr></tbody></table><h2 id="_3-http\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_3-http\u7279\u6027" aria-hidden="true">#</a> 3. HTTP\u7279\u6027</h2><p>\u4F18\u70B9\uFF1A</p><ul><li><p>\u7B80\u5355 HTTP\u62A5\u6587\u683C\u5F0F\u5C31\u662F<code>header + body</code>\uFF0C\u5934\u90E8\u4FE1\u606F\u4E5F\u662F <code>key-value</code> \u7B80\u5355\u6587\u672C\u7684\u5F62\u5F0F\uFF0C\u6613\u4E8E\u7406\u89E3\uFF0C\u964D\u4F4E\u4E86\u5B66\u4E60\u548C\u4F7F\u7528\u7684\u95E8\u69DB\u3002</p></li><li><p>\u7075\u6D3B\u548C\u6613\u4E8E\u6269\u5C55 HTTP\u534F\u8BAE\u91CC\u7684\u5404\u7C7B\u8BF7\u6C42\u65B9\u6CD5\u3001URI/URL\u3001\u72B6\u6001\u7801\u3001\u5934\u5B57\u6BB5\u7B49\u6BCF\u4E2A\u7EC4\u6210\u8981\u6C42\u90FD\u6CA1\u6709\u88AB\u56FA\u5B9A\u6B7B\uFF0C\u90FD\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u81EA\u5B9A\u4E49\u548C\u6269\u5145\u3002 \u540C\u65F6\uFF0CHTTP\u7531\u4E8E\u662F\u5DE5\u4F5C\u5728\u5E94\u7528\u5C42\uFF0C\u5B83\u7684\u4E0B\u5C42\u53EF\u4EE5\u968F\u610F\u53D8\u5316\u3002 HTTPS\u662FHTTP\u4E0ETCP\u4E4B\u95F4\u589E\u52A0\u4E86SSL/TLS\u5B89\u5168\u4F20\u8F93\u5C42\uFF0CHTTP/3\u751A\u81F3\u628ATCPP\u5C42\u6362\u6210\u4E86\u57FA\u4E8EUDP\u7684QUIC</p></li><li><p>\u5E94\u7528\u5E7F\u6CDB\u548C\u8DE8\u5E73\u53F0</p></li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li><p>\u65E0\u72B6\u6001\u53CC\u5203\u5251 \u597D\u5904\uFF1A\u670D\u52A1\u5668\u4E0D\u7528\u8BB0\u5FC6HTTP\u7684\u72B6\u6001\uFF0C\u6240\u4EE5\u4E0D\u9700\u989D\u5916\u7684\u8D44\u6E90\u6765\u8BB0\u5F55\u72B6\u6001\u4FE1\u606F\uFF0C\u8FD9\u6837\u80FD\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u5206\u62C5\uFF0C\u80FD\u591F\u628A\u66F4\u591A\u7684CPU\u548C\u5185\u5B58\u7528\u6765\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u3002 \u574F\u5904\uFF1A\u65E2\u7136\u670D\u52A1\u5668\u6CA1\u6709\u8BB0\u5FC6\u80FD\u529B\uFF0C\u5B83\u5728\u5B8C\u6210\u6709\u5173\u8054\u6027\u7684\u64CD\u4F5C\u65F6\u4F1A\u975E\u5E38\u9EBB\u70E6\uFF0C\u9700\u8981\u501F\u52A9cookie\u3001session\u673A\u5236\u6765\u5B8C\u6210\u3002</p></li><li><p>\u660E\u6587\u4F20\u8F93\u53CC\u5203\u5251 \u597D\u5904\uFF1A\u6613\u4E8E\u67E5\u770B\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u7684\u4FE1\u606F\uFF0C\u65B9\u4FBF\u8C03\u8BD5F12\u548Cwireshark\u6293\u5305 \u574F\u5904\uFF1A\u4FE1\u606F\u76F8\u5F53\u4E8E\u88F8\u5954\uFF0C\u4E0D\u5B89\u5168</p></li></ul><h2 id="_4-http\u4E0Ehttps" tabindex="-1"><a class="header-anchor" href="#_4-http\u4E0Ehttps" aria-hidden="true">#</a> 4. HTTP\u4E0EHTTPS</h2><p>HTTP\u534F\u8BAE\u662F\u57FA\u4E8ETCP/IP\uFF0C\u5E76\u4E14\u4F7F\u7528\u4E86\u300C\u8BF7\u6C42 - \u5E94\u7B54\u300D\u7684\u901A\u4FE1\u6A21\u5F0F\u3002</p><p>4.1 HTTP/1.0\u7684\u6027\u80FD\uFF1A</p><ul><li>\u6BCF\u6B21\u7684\u8BF7\u6C42\u90FD\u4F1A\u65B0\u5EFA\u4E00\u6B21TCP\u8FDE\u63A5(\u90FD\u9700\u8981\u8FDB\u884C\u4E09\u6B21\u63E1\u624B\uFF0C\u56DB\u6B21\u6325\u624B)\uFF0C\u800C\u4E14\u662F\u4E32\u884C\u8BF7\u6C42\uFF0C\u5BFC\u81F4\u5F88\u591A\u65E0\u754F\u7684TCP\u5EFA\u7ACB\u8FDE\u63A5\u548C\u65AD\u5F00\uFF0C\u589E\u52A0\u4E86\u901A\u4FE1\u5F00\u9500\u3002</li></ul><p>4.2 HTTP/1.1\u7684\u6027\u80FD\uFF1A</p><ul><li>\u957F\u8FDE\u63A5\uFF0C\u4E5F\u53EB\u6301\u4E45\u8FDE\u63A5\uFF0C\u91C7\u7528\u4FDD\u6D3B\u673A\u5236</li><li>\u7BA1\u9053\u7F51\u7EDC\u4F20\u8F93\uFF0C\u5373\u53EF\u5728\u540C\u4E00\u4E2ATCP\u8FDE\u63A5\u91CC\u9762\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u53D1\u8D77\u591A\u4E2A\u8BF7\u6C42\uFF0C\u53EA\u8981\u7B2C\u4E00\u4E2A\u53D1\u51FA\u53BB\u4E86\uFF0C\u4E0D\u5FC5\u7B49\u5176\u56DE\u6765\uFF0C\u5C31\u53EF\u4EE5\u53D1\u7B2C\u4E8C\u4E2A\u8BF7\u6C42\u51FA\u53BB\uFF0C\u53EF\u4EE5<strong>\u51CF\u5C11\u6574\u4F53\u7684\u54CD\u5E94\u65F6\u95F4</strong>\uFF0C \u4F46\u670D\u52A1\u7AEF\u8FD8\u662F\u9700\u8981\u4E32\u884C\u6765\u64CD\u4F5C\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u3002 \u8FD9\u6837\u5E26\u6765\u7684\u95EE\u9898\uFF1A \u5C31\u4F1A\u5BFC\u81F4\u5BF9\u5934\u963B\u585E\u95EE\u9898\uFF0C\u4ECE\u800C\u5F53\u987A\u5E8F\u53D1\u9001\u7684\u8BF7\u6C42\u5E8F\u5217\u4E2D\u7684\u4E00\u4E2A\u8BF7\u6C42\u56E0\u4E3A\u67D0\u79CD\u539F\u56E0\u88AB\u963B\u585E\u65F6\uFF0C\u5728\u540E\u9762\u6392\u961F\u7684\u6240\u6709\u8BF7\u6C42\u4E5F\u4E00\u540C\u88AB\u963B\u585E\u4E86\uFF0C\u4F1A\u62DB\u81F4\u5BA2\u6237\u7AEF\u4E00\u76F4\u8BF7\u6C42\u4E0D\u5230\u6570\u636E\u3002</li></ul><p>4.3 HTTPS\u89E3\u51B3\u4E86HTTP\u7684\u54EA\u4E9B\u95EE\u9898 HTTP\u662F\u660E\u6587\u4F20\u8F93\uFF0C\u6240\u4EE5\u5B89\u5168\u4E0A\u5B58\u5728\u4EE5\u4E0B\u4E09\u4E2A\u98CE\u9669\uFF1A</p><ul><li>\u7A83\u542C\u98CE\u9669\uFF0C\u6BD4\u5982\u901A\u4FE1\u94FE\u8DEF\u4E0A\u53EF\u4EE5\u83B7\u53D6\u901A\u4FE1\u5185\u5BB9\uFF0C\u7528\u6237\u53F7\u5BB9\u6613\u6CA1\u3002</li><li>\u7BE1\u6539\u98CE\u9669\uFF0C\u6BD4\u5982\u5F3A\u5236\u7F6E\u5165\u5783\u573E\u5E7F\u544A</li><li>\u5192\u5145\u98CE\u9669\uFF0C\u6BD4\u5982\u5192\u5145\u6DD8\u5B9D\u7F51\u7AD9</li></ul><p>HTTPS\u53EF\u4EE5\u5F88\u597D\u5730\u89E3\u51B3\u4E0A\u8FF0\u98CE\u9669\uFF1A</p><ul><li>\u4FE1\u606F\u52A0\u5BC6\uFF1A\u4EA4\u4E92\u4FE1\u606F\u65E0\u6CD5\u88AB\u7A83\u53D6\uFF0C\u4F46\u4F60\u7684\u53F7\u4F1A\u56E0\u4E3A\u300C\u81EA\u8EAB\u5FD8\u8BB0\u300D\u8D26\u53F7\u800C\u6CA1</li><li>\u6821\u9A8C\u673A\u5236\uFF1A\u65E0\u6CD5\u7BE1\u6539\u901A\u4FE1\u5185\u5BB9\uFF0C\u7BE1\u6539\u4E86\u5C31\u4E0D\u80FD\u6B63\u5E38\u663E\u793A</li><li>\u8EAB\u4EFD\u8BC1\u4E66\uFF1A\u8BC1\u660E\u6DD8\u5B9D\u662F\u771F\u7684\u6DD8\u5B9D</li></ul><p>4.4 HTTPS\u662F\u5982\u4F55\u89E3\u51B3\u4E0A\u9762\u7684\u4E09\u4E2A\u98CE\u9669</p><blockquote><p>\u6DF7\u5408\u52A0\u5BC6\u5B9E\u73B0\u4FE1\u606F\u7684\u673A\u5BC6\u6027\uFF0C\u89E3\u51B3\u7A83\u542C\u7684\u98CE\u9669\u3001\u6458\u8981\u7B97\u6CD5\u5B9E\u73B0\u5B8C\u6574\u6027\uFF0C\u89E3\u51B3\u7BE1\u6539\u7684\u98CE\u9669\u3001\u5C06\u670D\u52A1\u5668\u516C\u94A5\u653E\u5165\u5230\u6570\u5B57\u8BC1\u4E66\u4E2D\uFF0C\u89E3\u51B3\u4E86\u5192\u5145\u7684\u98CE\u9669</p></blockquote><ul><li><p>\u6DF7\u5408\u52A0\u5BC6\uFF1A \u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u5148\u901A\u8FC7RSA\u975E\u5BF9\u79F0\u52A0\u5BC6\u4EA4\u6362AES\u53E3\u4EE4\uFF0C\u63A5\u4E0B\u6765\u53CC\u65B9\u901A\u4FE1\u5B9E\u9645\u4E0A\u91C7\u7528\u7684\u662F\u901F\u5EA6\u8F83\u5FEB\u7684AES\u5BF9\u79F0\u52A0\u5BC6\u3002</p></li><li><p>\u6570\u5B57\u8BC1\u4E66 \u5BA2\u6237\u7AEF\u5148\u5411\u670D\u52A1\u7AEF\u7D22\u8981\u516C\u94A5\uFF0C\u7136\u540E\u7528\u516C\u94A5\u52A0\u5BC6\u4FE1\u606F\uFF0C\u670D\u52A1\u5668\u6536\u5230\u5BC6\u6587\u540E\uFF0C\u7528\u81EA\u5DF1\u7684\u79C1\u94A5\u89E3\u5BC6\u3002 \u4E3A\u4E86\u4FDD\u8BC1\u516C\u94A5\u4E0D\u88AB\u7BE1\u6539\uFF0C\u9700\u8981\u501F\u52A9\u7B2C\u4E09\u65B9\u6743\u5A01\u673A\u6784CA\uFF08\u6570\u5B57\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784\uFF09\uFF0C\u5C06\u670D\u52A1\u5668\u516C\u94A5\u653E\u5728\u6570\u5B57\u8BC1\u4E66\u4E2D\uFF0C\u53EA\u8981\u8BC1\u4E66\u662F\u53EF\u4FE1\u7684\uFF0C\u516C\u94A5\u5C31\u662F\u53EF\u4FE1\u7684\u3002</p></li></ul><p>SSL/TLS\u7684\u300C\u63E1\u624B\u9636\u6BB5\u300D\u6D89\u53CA<strong>\u56DB\u6B21\u901A\u4FE1</strong>\uFF0C\u53EF\u89C1\u4E0B\u56FE\uFF1A <img src="https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUMRTqQDVOJHMZe3JoN5TqSb0uYicOqMH2qHgic7M6rtCrjPOToDjBm11A/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img"></p><blockquote><ol><li>\u5BA2\u6237\u7AEF\u7ED9\u51FA\u534F\u8BAE\u7248\u672C\u53F7\u3001\u4E00\u4E2A\u5BA2\u6237\u7AEF\u751F\u6210\u7684\u968F\u673A\u6570\uFF0C\u4EE5\u53CA\u5BA2\u6237\u7AEF\u652F\u6301\u7684\u52A0\u5BC6\u65B9\u6CD5</li><li>\u670D\u52A1\u7AEF\u786E\u8BA4\u53CC\u65B9\u4F7F\u7528\u7684\u52A0\u5BC6\u65B9\u6CD5\uFF0C\u5E76\u7ED9\u51FA\u6570\u5B57\u8BC1\u4E66\u3001\u4EE5\u53CA\u4E00\u4E2A\u670D\u52A1\u5668\u751F\u6210\u7684\u968F\u673A\u6570</li><li>\u5BA2\u6237\u7AEF\u786E\u8BA4\u6570\u5B57\u8BC1\u4E66\u6709\u6548\uFF0C\u7136\u540E\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u968F\u673A\u6570\uFF0C\u5E76\u4F7F\u7528\u6570\u5B57\u8BC1\u4E66\u4E2D\u7684\u516C\u94A5\u52A0\u5BC6\u8FD9\u4E2A\u968F\u673A\u6570\uFF0C\u53D1\u7ED9\u670D\u52A1\u7AEF</li><li>\u670D\u52A1\u7AEF\u4F7F\u7528\u81EA\u5DF1\u7684\u79C1\u94A5\uFF0C\u83B7\u53D6\u5BA2\u6237\u7AEF\u7684\u968F\u673A\u6570</li><li>\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u6839\u636E\u7EA6\u5B9A\u7684\u52A0\u5BC6\u65B9\u6CD5\uFF0C\u4F7F\u7528\u524D\u9762\u7684\u4E09\u4E2A\u968F\u673A\u6570\uFF0C\u751F\u6210&quot;\u5BF9\u8BDD\u79D8\u94A5&quot;(session key)\uFF0C\u7528\u6765\u52A0\u5BC6\u63A5\u4E0B\u6765\u7684\u6574\u4E2A\u5BF9\u8BDD\u8FC7\u7A0B\u3002</li></ol></blockquote><h2 id="_5-http-1-1\u3001http-2-0\u3001http-3-0\u6F14\u53D8" tabindex="-1"><a class="header-anchor" href="#_5-http-1-1\u3001http-2-0\u3001http-3-0\u6F14\u53D8" aria-hidden="true">#</a> 5. HTTP/1.1\u3001HTTP/2.0\u3001HTTP/3.0\u6F14\u53D8</h2><p>\u6458\u8981\u7B97\u6CD5\u7528\u6765\u786E\u4FDD\u6570\u636E\u6CA1\u6709\u7BE1\u6539\uFF0C\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u53EF\u4EE5\u5BF9\u6570\u636E\u8FDB\u884C\u52A0\u89E3\u5BC6\uFF0C\u7B7E\u540D\u7B97\u6CD5\u53EF\u4EE5\u786E\u4FDD\u6570\u636E\u5B8C\u6574\u6027\u548C\u6297\u5426\u8BA4\u6027\uFF0C\u628A\u8FD9\u4E9B\u7B97\u6CD5\u96C6\u5408\u5230\u4E00\u8D77\uFF0C\u5E76\u641E\u4E00\u5957\u5B8C\u5584\u7684\u6807\u51C6\u5C31\u662F\u6570\u5B57\u8BC1\u4E66\u3002 \u6570\u5B57\u8BC1\u4E66\u91C7\u7528\u94FE\u5F0F\u7B7E\u540D\u7BA1\u7406\uFF0C\u9876\u7EA7\u7684Root CA\u8BC1\u4E66\u5DF2\u5185\u7F6E\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u3002 \u6570\u5B57\u8BC1\u4E66\u5B58\u50A8\u7684\u662F\u516C\u94A5\uFF0C\u53EF\u4EE5\u5B89\u5168\u516C\u5F00\uFF0C\u800C\u79C1\u94A5\u5FC5\u987B\u4E25\u683C\u4FDD\u5BC6\u3002</p><p><img src="https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUy5OSaaTftjD7JmdU4AUMnlrGOWXnMYss5sCxMMTPUibLeHIgdsdkklQ/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img"></p><blockquote><p>5.1 \u8BF4\u8BF4HTTP/1.1\u76F8\u6BD4HTTP/1.0\u63D0\u9AD8\u4E86\u4EC0\u4E48\u6027\u80FD</p><ul><li>\u4F7F\u7528TCP\u957F\u94FE\u63A5\u7684\u65B9\u5F0F\u6539\u5584\u4E86HTTP/1.0\u77ED\u94FE\u63A5\u9020\u6210\u7684\u6027\u80FD\u5F00\u9500</li><li>\u652F\u6301\u7BA1\u9053(pipeline)\u7F51\u7EDC\u4F20\u8F93\uFF0C\u53EF\u4EE5\u5E76\u884C\u53D1\u9001\u8BF7\u6C42\uFF0C\u800C\u4E0D\u7528\u4E32\u884C\u7B49\u5F85\u53D1\u9001\u8BF7\u6C42\uFF0C\u51CF\u5C11\u4E86\u6574\u4F53\u7684\u54CD\u5E94\u65F6\u95F4</li></ul><p>5.2 HTTP/1.1\u7684\u6027\u80FD\u74F6\u9888</p><ul><li>\u8BF7\u6C42/\u54CD\u5E94\u5934\u90E8\u672A\u7ECF\u538B\u7F29\u5C31\u53D1\u9001\uFF0C\u9996\u90E8\u4FE1\u606F\u8D8A\u591A\u5EF6\u8FDF\u8D8A\u5927\u3002\u53EA\u80FD\u538B\u7F29body\u90E8\u5206</li><li>\u53D1\u9001\u5197\u957F\u7684\u9996\u90E8\uFF0C\u6BCF\u6B21\u4E92\u76F8\u53D1\u9001\u76F8\u540C\u7684\u9996\u90E8\u9020\u6210\u7684\u6D6A\u8D39\u8F83\u591A</li><li>\u670D\u52A1\u5668\u662F\u6309\u8BF7\u6C42\u7684\u987A\u5E8F\u54CD\u5E94\u7684\uFF0C\u5982\u679C\u670D\u52A1\u5668\u54CD\u5E94\u6162\uFF0C\u4F1A\u62DB\u81F4\u5BA2\u6237\u7AEF\u4E00\u76F4\u63A5\u6536\u4E0D\u5230\u6570\u636E\uFF0C\u4ECE\u800C\u9020\u961F\u5934\u963B\u585E</li><li>\u6CA1\u6709\u8BF7\u6C42\u4F18\u5148\u7EA7</li><li>\u8BF7\u6C42\u53EA\u80FD\u4ECE\u5BA2\u6237\u7AEF\u5F00\u59CB\uFF0C\u670D\u52A1\u7AEF\u53EA\u80FD\u88AB\u52A8\u54CD\u5E94</li></ul><p>5.3 HTTP/2.0\u76F8\u6BD4HTTP/1.1\u505A\u4E86\u54EA\u4E9B\u4F18\u5316</p><ul><li>\u5934\u90E8\u538B\u7F29\uFF1Ahpack\u7B97\u6CD5\uFF1A\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u540C\u65F6\u7EF4\u62A4\u4E00\u5F20\u5934\u4FE1\u606F\u8868\uFF0C\u6240\u6709\u5B57\u6BB5\u90FD\u4F1A\u5B58\u5165\u8FD9\u4E2A\u8868\uFF0C\u751F\u6210\u4E00\u4E2A\u7D22\u5F15\u53F7\uFF0C\u4EE5\u540E\u5C31\u4E0D\u4F1A\u53D1\u9001\u540C\u6837\u5B57\u6BB5\u4E86\uFF0C\u53EA\u53D1\u9001\u7D22\u5F15\u53F7</li><li>\u4E8C\u8FDB\u5236\u683C\u5F0F\uFF1A\u5934\u4FE1\u606F\u548C\u6570\u636E\u4F53\u90FD\u662F\u4E8C\u8FDB\u5236\uFF0C\u5E76\u4E14\u7EDF\u79F0\u4E3A\u5E27</li><li>\u6570\u636E\u6D41</li><li>\u591A\u8DEF\u590D\u7528</li><li>\u670D\u52A1\u5668\u63A8\u9001</li></ul><p>5.4 HTTP/3.0\u76F8\u6BD4HTTP/2.0\u505A\u4E86\u54EA\u4E9B\u4F18\u5316</p><ul><li>HTTP/2.0\u4E3B\u8981\u7684\u95EE\u9898\uFF1A\u591A\u4E2AHTTP\u8BF7\u6C42\u5728\u590D\u7528\u4E00\u4E2ATCP\u8FDE\u63A5\uFF0C\u4E0B\u5C42\u7684TCP\u534F\u8BAE\u662F\u4E0D\u77E5\u9053\u6709\u591A\u5C11HTTP\u8BF7\u6C42\u7684\uFF0C\u6240\u4EE5\u4E00\u65E6\u53D1\u751F\u4E86\u4E22\u5305\uFF0C\u5C31\u4F1A\u89E6\u53D1TCP\u91CD\u4F20\u673A\u5236\uFF0C\u8FD9\u6837\u5728\u4E00\u4E2ATCP\u8FDE\u63A5\u4E2D\u7684\u6240\u6709\u7684HTTP\u8BF7\u6C42\u90FD\u5FC5\u987B\u7B49\u5F85\u8FD9\u4E2A\u4E22\u4E86\u7684\u5305\u88AB\u91CD\u4F20\u56DE\u6765\u3002</li><li>HTTP/1.1 \u4E2D\u7684\u7BA1\u9053\uFF08 pipeline\uFF09\u4F20\u8F93\u4E2D\u5982\u679C\u6709\u4E00\u4E2A\u8BF7\u6C42\u963B\u585E\u4E86\uFF0C\u90A3\u4E48\u961F\u5217\u540E\u8BF7\u6C42\u4E5F\u7EDF\u7EDF\u88AB\u963B\u585E\u4F4F\u4E86; HTTP/2 \u591A\u8BF7\u6C42\u590D\u7528\u4E00\u4E2ATCP\u8FDE\u63A5\uFF0C\u4E00\u65E6\u53D1\u751F\u4E22\u5305\uFF0C\u5C31\u4F1A\u963B\u585E\u4F4F\u6240\u6709\u7684 HTTP \u8BF7\u6C42\u3002\u8FD9\u90FD\u662F\u57FA\u4E8E TCP \u4F20\u8F93\u5C42\u7684\u95EE\u9898\uFF0C\u6240\u4EE5 HTTP/3 \u628A HTTP \u4E0B\u5C42\u7684 TCP \u534F\u8BAE\u6539\u6210\u4E86 UDP\uFF01</li><li>\u5927\u5BB6\u90FD\u77E5\u9053 UDP \u662F\u4E0D\u53EF\u9760\u4F20\u8F93\u7684\uFF0C\u4F46\u57FA\u4E8E UDP \u7684 QUIC \u534F\u8BAE \u53EF\u4EE5\u5B9E\u73B0\u7C7B\u4F3C TCP \u7684\u53EF\u9760\u6027\u4F20\u8F93\u3002</li><li>QUIC \u6709\u81EA\u5DF1\u7684\u4E00\u5957\u673A\u5236\u53EF\u4EE5\u4FDD\u8BC1\u4F20\u8F93\u7684\u53EF\u9760\u6027\u7684\u3002\u5F53\u67D0\u4E2A\u6D41\u53D1\u751F\u4E22\u5305\u65F6\uFF0C\u53EA\u4F1A\u963B\u585E\u8FD9\u4E2A\u6D41\uFF0C\u5176\u4ED6\u6D41\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\u3002</li><li>TL3 \u5347\u7EA7\u6210\u4E86\u6700\u65B0\u7684 1.3 \u7248\u672C\uFF0C\u5934\u90E8\u538B\u7F29\u7B97\u6CD5\u4E5F\u5347\u7EA7\u6210\u4E86 QPack\u3002</li><li>HTTPS \u8981\u5EFA\u7ACB\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u8981\u82B1\u8D39 6 \u6B21\u4EA4\u4E92\uFF0C\u5148\u662F\u5EFA\u7ACB\u4E09\u6B21\u63E1\u624B\uFF0C\u7136\u540E\u662F TLS/1.3 \u7684\u4E09\u6B21\u63E1\u624B\u3002QUIC \u76F4\u63A5\u628A\u4EE5\u5F80\u7684 TCP \u548C TLS/1.3 \u7684 6 \u6B21\u4EA4\u4E92\u5408\u5E76\u6210\u4E86 3 \u6B21\uFF0C\u51CF\u5C11\u4E86\u4EA4\u4E92\u6B21\u6570\u3002</li><li>QUIC \u662F\u65B0\u534F\u8BAE\uFF0C\u5BF9\u4E8E\u5F88\u591A\u7F51\u7EDC\u8BBE\u5907\uFF0C\u6839\u672C\u4E0D\u77E5\u9053\u4EC0\u4E48\u662F QUIC\uFF0C\u53EA\u4F1A\u5F53\u505A UDP\uFF0C\u8FD9\u6837\u4F1A\u51FA\u73B0\u65B0\u7684\u95EE\u9898\u3002\u6240\u4EE5 HTTP/3 \u73B0\u5728\u666E\u53CA\u7684\u8FDB\u5EA6\u975E\u5E38\u7684\u7F13\u6162\uFF0C\u4E0D\u77E5\u9053\u672A\u6765 UDP \u662F\u5426\u80FD\u591F\u9006\u88AD TCP\u3002</li></ul></blockquote><p><img src="https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUyP3HNicKS2J21mHQD9EepOiciakC8nRkrX9C3I0hjC6Fhjvd4nLiakuLeg/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img"></p>',37);function n(a,r){return i}var T=e(l,[["render",n]]);export{T as default};