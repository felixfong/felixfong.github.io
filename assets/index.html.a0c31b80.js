import{e as t}from"./app.dbf5d933.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const i={},l=t('<h2 id="_0-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_0-\u524D\u8A00" aria-hidden="true">#</a> 0. \u524D\u8A00</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>TCP\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B\u9762\u8BD5\u9898</li><li>TCP\u91CD\u4F20\u3001\u6ED1\u52A8\u7A97\u53E3\u3001\u6D41\u91CF\u63A7\u5236\u3001\u62E5\u585E\u63A7\u5236</li><li>TCP\u5B9E\u6218\u6293\u5305\u5206\u6790</li><li>TCP\u534A\u8FDE\u63A5\u961F\u5217\u548C\u5168\u8FDE\u63A5\u961F\u5217</li><li>TCP\u5185\u6838\u53C2\u6570\uFF1A\u5982\u4F55\u4F18\u5316TCP\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B</li><li>TCP\u7C98\u5305\u548C\u62C6\u5305</li><li>\u6536\u5230RST\uFF0C\u5C31\u4E00\u5B9A\u4F1A\u65AD\u5F00TCP\u8FDE\u63A5\u5417\uFF1F</li><li>\u4EE3\u7801\u6267\u884Csend\u540E\uFF0C\u6570\u636E\u5C31\u53D1\u51FA\u53BB\u4E86\u5417\uFF1F</li><li>\u7C97\u66B4\u7684\u5173\u95ED vs \u4F18\u96C5\u7684\u5173\u95ED</li></ul></div><p><img src="https://raw.githubusercontent.com/felixfong/illustrations/main/png/test.png" alt="img"></p><p>TCP\u8FDE\u63A5\uFF1A\u7528\u4E8E\u4FDD\u8BC1\u53EF\u9760\u6027\u548C\u6D41\u63A7\u5236\u673A\u5236\u7684\u4FE1\u606F\uFF0C\u5305\u62ECsocket\u3001\u5E8F\u5217\u53F7\u53CA\u7A97\u53E3\u5927\u5C0F\u7684\u521D\u59CB\u5316\uFF0C \u5176\u4E2D\uFF0C</p><ul><li>\u8FDE\u63A5\u4E2D\u7684\u4E00\u5BF9socket\u662F\u7531\u4E92\u8054\u7F51\u5730\u5740\u6807\u8BC6\u7B26\u548C\u7AEF\u53E3\u7EC4\u6210</li><li>\u7A97\u53E3\u5927\u5C0F\u4E3B\u8981\u7528\u6765\u505A\u6D41\u63A7\u5236</li><li>\u5E8F\u5217\u53F7\u662F\u7528\u6765\u8FFD\u8E2A\u901A\u4FE1\u53D1\u8D77\u65B9\u53D1\u9001\u7684\u6570\u636E\u5305\u5E8F\u53F7\uFF0C\u63A5\u6536\u65B9\u53EF\u4EE5\u901A\u8FC7\u5E8F\u5217\u53F7\u5411\u53D1\u9001\u65B9\u786E\u8BA4\u67D0\u4E2A\u6570\u636E\u5305\u7684\u6210\u529F\u63A5\u6536\u3002</li></ul><h2 id="_1-\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_1-\u8BBE\u8BA1" aria-hidden="true">#</a> 1. \u8BBE\u8BA1</h2><ul><li>\u901A\u8FC7\u4E09\u6B21\u63E1\u624B\u624D\u80FD\u963B\u6B62\u91CD\u590D\u5386\u53F2\u8FDE\u63A5\u7684\u521D\u59CB\u5316</li><li>\u901A\u8FC7\u4E09\u6B21\u63E1\u624B\u624D\u80FD\u5BF9\u901A\u4FE1\u53CC\u65B9\u7684\u521D\u59CB\u5E8F\u5217\u53F7\u8FDB\u884C\u521D\u59CB\u5316</li><li>\u5176\u4ED6\u6B21\u6570\u63E1\u624B\u5EFA\u7ACB\u8FDE\u63A5\u7684\u53EF\u80FD\u6027\uFF0C\u4E09\u6B21\u63E1\u624B\u53EF\u4EE5\u907F\u514D\u8D44\u6E90\u6D6A\u8D39</li></ul><h3 id="_1-1-\u4E0D\u4F7F\u7528\u4E24\u6B21\u63E1\u624B-\u548C-\u56DB\u6B21\u63E1\u624B\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4E0D\u4F7F\u7528\u4E24\u6B21\u63E1\u624B-\u548C-\u56DB\u6B21\u63E1\u624B\u7684\u539F\u56E0" aria-hidden="true">#</a> 1.1 \u4E0D\u4F7F\u7528\u4E24\u6B21\u63E1\u624B \u548C \u56DB\u6B21\u63E1\u624B\u7684\u539F\u56E0\uFF1A</h3><ul><li>\u4E24\u6B21\u63E1\u624B\uFF1A\u65E0\u6CD5\u9632\u6B62\u91CD\u590D\u5386\u53F2\u8FDE\u63A5\uFF0C\u4F1A\u9020\u6210\u53CC\u65B9\u8D44\u6E90\u7684\u6D6A\u8D39\uFF0C\u4E5F\u65E0\u6CD5\u53EF\u9760\u7684\u540C\u6B65\u53CC\u65B9\u5E8F\u5217\u53F7</li><li>\u56DB\u6B21\u63E1\u624B\uFF1A\u4E09\u6B21\u63E1\u624B\u5C31\u5DF2\u7ECF\u7406\u8BBA\u4E0A\u6700\u5C11\u53EF\u9760\u8FDE\u63A5\u5EFA\u7ACB\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u4F7F\u7528\u66F4\u591A\u7684\u901A\u4FE1\u6B21\u6570</li></ul><h3 id="_1-2-\u521D\u59CB\u5E8F\u5217\u53F7isn\u662F\u5982\u4F55\u968F\u673A\u4EA7\u751F\u7684" tabindex="-1"><a class="header-anchor" href="#_1-2-\u521D\u59CB\u5E8F\u5217\u53F7isn\u662F\u5982\u4F55\u968F\u673A\u4EA7\u751F\u7684" aria-hidden="true">#</a> 1.2 \u521D\u59CB\u5E8F\u5217\u53F7ISN\u662F\u5982\u4F55\u968F\u673A\u4EA7\u751F\u7684</h3><p>\u8D77\u59CBISN\u662F\u57FA\u4E8E\u65F6\u949F\u7684\uFF0C\u6BCF4\u6BEB\u79D2 + 1\uFF0C\u8F6C\u4E00\u5708\u9700\u89814.55\u4E2A\u5C0F\u65F6</p><p>ISN = M + F(localhost, localport, remotehost, remoteport)</p><ul><li>M \u662F\u4E00\u4E2A\u8BA1\u65F6\u5668\uFF0C\u8FD9\u4E2A\u8BA1\u65F6\u5668\u6BCF4\u6BEB\u79D2\u52A01</li><li>F \u662F\u4E00\u4E2Ahash\u7B97\u6CD5\uFF0C\u6839\u636E\u6E90IP\u3001\u6E90\u7AEF\u53E3\u3001\u76EE\u7684IP\u3001\u76EE\u7684\u7AEF\u53E3\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570\u503C\u3002\u91C7\u7528MD5\u7B97\u6CD5</li></ul><h3 id="_1-3-\u65E2\u7136ip\u5C42\u4F1A\u5206\u7247-\u4E3A\u4EC0\u4E48tcp\u5C42\u8FD8\u9700\u8981mss\u5462" tabindex="-1"><a class="header-anchor" href="#_1-3-\u65E2\u7136ip\u5C42\u4F1A\u5206\u7247-\u4E3A\u4EC0\u4E48tcp\u5C42\u8FD8\u9700\u8981mss\u5462" aria-hidden="true">#</a> 1.3 \u65E2\u7136IP\u5C42\u4F1A\u5206\u7247\uFF0C\u4E3A\u4EC0\u4E48TCP\u5C42\u8FD8\u9700\u8981MSS\u5462</h3><ul><li>MTU\uFF1A\u4E00\u4E2A\u7F51\u7EDC\u5305\u7684\u6700\u5927\u957F\u5EA6\uFF0C\u4EE5\u592A\u7F51\u4E2D\u4E00\u822C\u4E3A1500\u5B57\u8282</li><li>MSS\uFF1A\u51FA\u53BBIP\u548CTCP\u5934\u90E8\u4E4B\u540E\uFF0C\u4E00\u4E2A\u7F51\u7EDC\u5305\u6240\u80FD\u5BB9\u7EB3\u7684TCP\u6570\u636E\u7684\u6700\u5927\u957F\u5EA6</li></ul><p>\u56E0\u4E3AIP\u5C42\u672C\u8EAB\u6CA1\u6709\u8D85\u65F6\u91CD\u4F20\u673A\u5236\uFF0C\u8FD8\u662F\u9700\u8981\u7531TCP\u6765\u8D1F\u8D23\u8D85\u65F6\u548C\u91CD\u4F20\uFF0C\u4E3A\u4E86\u8FBE\u5230\u6700\u4F73\u7684\u4F20\u8F93\u6548\u80FDTCP\u534F\u8BAE\u5728\u5EFA\u7ACB\u94FE\u63A5\u7684\u65F6\u5019\u901A\u5E38\u8981\u534F\u5546MS\u503C\uFF0C\u5F53TCP\u5C42\u53D1\u73B0\u6570\u636E\u8D85\u8FC7MSS\u503C\u65F6\uFF0C \u5C31\u4F1A\u5148\u8FDB\u884C\u5206\u7247\uFF0C\u5F53\u7136\u7531\u5B83\u5F62\u6210\u7684IP\u5305\u7684\u957F\u5EA6\u4E5F\u5C31\u4E0D\u4F1A\u5927\u4E8EMTU\uFF0C\u81EA\u7136\u4E0D\u7528IP\u5206\u7247\u4E86\uFF0C\u7ECF\u8FC7TCP\u5C42\u5206\u7247\u540E\uFF0C\u5982\u679C\u4E00\u4E2ATCP\u5206\u7247\u4E22\u5931\u540E\uFF0C\u8FDB\u884C\u91CD\u53D1\u4E5F\u662F\u4EE5MSS\u5355\u4F4D\uFF0C \u800C\u4E0D\u7528\u91CD\u4F20\u6240\u6709\u5206\u7247\uFF0C\u5927\u5927\u589E\u52A0\u4E86\u91CD\u4F20\u7684\u6548\u7387\u3002</p><h3 id="_1-4-\u56DB\u6B21\u6325\u624B\u5173\u95ED\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_1-4-\u56DB\u6B21\u6325\u624B\u5173\u95ED\u8FDE\u63A5" aria-hidden="true">#</a> 1.4 \u56DB\u6B21\u6325\u624B\u5173\u95ED\u8FDE\u63A5</h3><p>\u6BCF\u4E2A\u65B9\u5411\u90FD\u9700\u8981\u4E00\u4E2AFIN\u548C\u4E00\u4E2AACK\uFF0C\u4E3B\u52A8\u5173\u95ED\u8FDE\u63A5\u7684\uFF0C\u624D\u6709TIME_WAIT\u72B6\u6001\u3002</p><ul><li>\u5173\u95ED\u8FDE\u63A5\u65F6\uFF0C\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001FIN\u65F6\uFF0C\u4EC5\u4EC5\u8868\u793A\u5BA2\u6237\u7AEF\u4E0D\u518D\u53D1\u9001\u6570\u636E\u4E86\u4F46\u662F\u8FD8\u80FD\u63A5\u6536\u6570\u636E\u3002</li><li>\u670D\u52A1\u5668\u6536\u5230\u5BA2\u6237\u7AEF\u7684FIN\u62A5\u6587\u65F6\uFF0C\u5148\u56DE\u4E86\u4E00\u4E2AACK\u5E94\u7B54\u62A5\u6587\uFF0C\u800C\u670D\u52A1\u7AEF\u53EF\u80FD\u8FD8\u6709\u6570\u636E\u8981\u5904\u7406\u548C\u53D1\u9001\uFF0C\u7B49\u670D\u52A1\u7AEF\u5904\u7406\u5B8C\u6240\u6709\u6570\u636E\u4E0D\u518D\u53D1\u9001\u6570\u636E\u65F6\uFF0C\u624D\u53D1\u9001FIN\u62A5\u6587\u7ED9\u5BA2\u6237\u7AEF\u6765\u8868\u793A\u540C\u610F\u73B0\u5728\u5173\u95ED\u8FDE\u63A5\u3002</li></ul><h3 id="_1-5-\u5982\u679C\u5DF2\u7ECF\u5EFA\u7ACB\u4E86\u8FDE\u63A5-\u4F46\u662F\u5BA2\u6237\u7AEF\u7A81\u7136\u51FA\u73B0\u6545\u969C\u4E86\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#_1-5-\u5982\u679C\u5DF2\u7ECF\u5EFA\u7ACB\u4E86\u8FDE\u63A5-\u4F46\u662F\u5BA2\u6237\u7AEF\u7A81\u7136\u51FA\u73B0\u6545\u969C\u4E86\u600E\u4E48\u529E" aria-hidden="true">#</a> 1.5 \u5982\u679C\u5DF2\u7ECF\u5EFA\u7ACB\u4E86\u8FDE\u63A5\uFF0C\u4F46\u662F\u5BA2\u6237\u7AEF\u7A81\u7136\u51FA\u73B0\u6545\u969C\u4E86\u600E\u4E48\u529E</h3><p>TCP\u6709\u4E00\u4E2A\u673A\u5236\u662F\u4FDD\u6D3B\u673A\u5236\uFF1A \u5B9A\u4E49\u4E00\u4E2A\u65F6\u95F4\u6BB5\uFF0C\u5728\u8FD9\u4E2A\u65F6\u95F4\u6BB5\u5185\uFF0C\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u8FDE\u63A5\u76F8\u5173\u7684\u6D3B\u52A8\uFF0CTCP \u4FDD\u6D3B\u673A\u5236\u4F1A\u5F00\u59CB\u4F5C\u7528\uFF0C\u6BCF\u9694\u4E00\u4E2A\u65F6\u95F4\u95F4\u9694\uFF0C\u53D1\u9001\u4E00\u4E2A\u63A2\u6D4B\u62A5\u6587\uFF0C\u8BE5\u63A2\u6D4B\u62A5\u6587\u5305\u542B\u7684\u6570\u636E\u975E\u5E38\u5C11\uFF0C\u5982\u679C\u8FDE\u7EED\u51E0\u4E2A\u63A2\u6D4B\u62A5\u6587\u90FD\u6CA1\u6709\u5F97\u5230\u54CD\u5E94\uFF0C\u5219\u8BA4\u4E3A\u5F53\u524D\u7684 TCP \u8FDE\u63A5\u5DF2\u7ECF\u6B7B\u4EA1\uFF0C\u7CFB\u7EDF\u5185\u6838\u5C06\u9519\u8BEF\u4FE1\u606F\u901A\u77E5\u7ED9\u4E0A\u5C42\u5E94\u7528\u7A0B\u5E8F\u3002 \u5728 Linux \u5185\u6838\u53EF\u4EE5\u6709\u5BF9\u5E94\u7684\u53C2\u6570\u53EF\u4EE5\u8BBE\u7F6E\u4FDD\u6D3B\u65F6\u95F4\u3001\u4FDD\u6D3B\u63A2\u6D4B\u7684\u6B21\u6570\u3001\u4FDD\u6D3B\u63A2\u6D4B\u7684\u65F6\u95F4\u95F4\u9694 \u5728 Linux \u7CFB\u7EDF\u4E2D\uFF0C\u6700\u5C11\u9700\u8981\u7ECF\u8FC7 2 \u5C0F\u65F6 11 \u5206 15 \u79D2\u624D\u53EF\u4EE5\u53D1\u73B0\u4E00\u4E2A\u300C\u6B7B\u4EA1\u300D\u8FDE\u63A5</p><h3 id="_1-6-\u9488\u5BF9tcp-socket\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-6-\u9488\u5BF9tcp-socket\u7F16\u7A0B" aria-hidden="true">#</a> 1.6 \u9488\u5BF9TCP\uFF0Csocket\u7F16\u7A0B</h3><p>\u57FA\u4E8E TCP \u534F\u8BAE\u7684\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5DE5\u4F5C</p><ul><li>\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u521D\u59CB\u5316 socket\uFF0C\u5F97\u5230\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF1B</li><li>\u670D\u52A1\u7AEF\u8C03\u7528 bind\uFF0C\u5C06\u7ED1\u5B9A\u5728 IP \u5730\u5740\u548C\u7AEF\u53E3;</li><li>\u670D\u52A1\u7AEF\u8C03\u7528 listen\uFF0C\u8FDB\u884C\u76D1\u542C\uFF1B</li><li>\u670D\u52A1\u7AEF\u8C03\u7528 accept\uFF0C\u7B49\u5F85\u5BA2\u6237\u7AEF\u8FDE\u63A5\uFF1B</li><li>\u5BA2\u6237\u7AEF\u8C03\u7528 connect\uFF0C\u5411\u670D\u52A1\u5668\u7AEF\u7684\u5730\u5740\u548C\u7AEF\u53E3\u53D1\u8D77\u8FDE\u63A5\u8BF7\u6C42\uFF1B</li><li>\u670D\u52A1\u7AEF accept \u8FD4\u56DE\u7528\u4E8E\u4F20\u8F93\u7684 socket \u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF1B</li><li>\u5BA2\u6237\u7AEF\u8C03\u7528 write \u5199\u5165\u6570\u636E\uFF1B\u670D\u52A1\u7AEF\u8C03\u7528 read \u8BFB\u53D6\u6570\u636E\uFF1B</li><li>\u5BA2\u6237\u7AEF\u65AD\u5F00\u8FDE\u63A5\u65F6\uFF0C\u4F1A\u8C03\u7528 close\uFF0C\u90A3\u4E48\u670D\u52A1\u7AEF read \u8BFB\u53D6\u6570\u636E\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u8BFB\u53D6\u5230\u4E86 EOF\uFF0C\u5F85\u5904\u7406\u5B8C\u6570\u636E\u540E\uFF0C\u670D\u52A1\u7AEF\u8C03\u7528 close\uFF0C\u8868\u793A\u8FDE\u63A5\u5173\u95ED\u3002 \u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u670D\u52A1\u7AEF\u8C03\u7528 accept \u65F6\uFF0C\u8FDE\u63A5\u6210\u529F\u4E86\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5DF2\u5B8C\u6210\u8FDE\u63A5\u7684 socket\uFF0C\u540E\u7EED\u7528\u6765\u4F20\u8F93\u6570\u636E\u3002</li></ul><p>\u6240\u4EE5\uFF0C\u76D1\u542C\u7684 socket \u548C\u771F\u6B63\u7528\u6765\u4F20\u9001\u6570\u636E\u7684 socket\uFF0C\u662F\u300C\u4E24\u4E2A\u300D socket\uFF0C\u4E00\u4E2A\u53EB\u4F5C\u76D1\u542C socket\uFF0C\u4E00\u4E2A\u53EB\u4F5C\u5DF2\u5B8C\u6210\u8FDE\u63A5 socket\u3002</p><h3 id="_1-7-listen\u65F6\u5019\u53C2\u6570backlog\u7684\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#_1-7-listen\u65F6\u5019\u53C2\u6570backlog\u7684\u610F\u4E49" aria-hidden="true">#</a> 1.7 listen\u65F6\u5019\u53C2\u6570backlog\u7684\u610F\u4E49</h3><p>linux\u5185\u6838\u7EF4\u62A4\u4E86\u4E24\u79CD\u961F\u5217\uFF1A</p><ul><li>\u672A\u5B8C\u6210\u8FDE\u63A5\u961F\u5217(SYN\u961F\u5217)\uFF0C\u63A5\u6536\u5230\u4E00\u4E2ASYN\u5EFA\u7ACB\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u5904\u4E8ESYN_RCVD\u72B6\u6001</li><li>\u5DF2\u5B8C\u6210\u8FDE\u63A5\u961F\u5217(Accept\u961F\u5217), \u5DF2\u5B8C\u6210TCP\u4E09\u6B21\u63E1\u624B\u8FC7\u7A0B\uFF0C\u5904\u4E8Eestablished\u9636\u6BB5 <img src="https://cdn.jsdelivr.net/gh/xiaolincoder/ImageHost2/\u8BA1\u7B97\u673A\u7F51\u7EDC/TCP-\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B/35.jpg" alt="img"> SYN \u961F\u5217 \u4E0E Accpet \u961F\u5217 int listen (int socketfd, int backlog) \u53C2\u6570\u4E00 socketfd \u4E3A socketfd \u6587\u4EF6\u63CF\u8FF0\u7B26 \u53C2\u6570\u4E8C backlog\uFF0C\u8FD9\u53C2\u6570\u5728\u5386\u53F2\u7248\u672C\u6709\u4E00\u5B9A\u7684\u53D8\u5316 \u5728\u65E9\u671F Linux \u5185\u6838 backlog \u662F SYN \u961F\u5217\u5927\u5C0F\uFF0C\u4E5F\u5C31\u662F\u672A\u5B8C\u6210\u7684\u961F\u5217\u5927\u5C0F\u3002</li></ul><p>\u5728 Linux \u5185\u6838 2.2 \u4E4B\u540E\uFF0Cbacklog \u53D8\u6210 accept \u961F\u5217\uFF0C\u4E5F\u5C31\u662F\u5DF2\u5B8C\u6210\u8FDE\u63A5\u5EFA\u7ACB\u7684\u961F\u5217\u957F\u5EA6\uFF0C\u6240\u4EE5\u73B0\u5728\u901A\u5E38\u8BA4\u4E3A backlog \u662F accept \u961F\u5217\u3002</p><p>\u4F46\u662F\u4E0A\u9650\u503C\u662F\u5185\u6838\u53C2\u6570 somaxconn \u7684\u5927\u5C0F\uFF0C\u4E5F\u5C31\u8BF4 accpet \u961F\u5217\u957F\u5EA6 = min(backlog, somaxconn)</p><h3 id="_1-8-accept\u53D1\u751F\u5728\u4E09\u6B21\u63E1\u624B\u7684\u7B2C\u51E0\u6B65" tabindex="-1"><a class="header-anchor" href="#_1-8-accept\u53D1\u751F\u5728\u4E09\u6B21\u63E1\u624B\u7684\u7B2C\u51E0\u6B65" aria-hidden="true">#</a> 1.8 accept\u53D1\u751F\u5728\u4E09\u6B21\u63E1\u624B\u7684\u7B2C\u51E0\u6B65</h3><p><img src="https://cdn.jsdelivr.net/gh/xiaolincoder/ImageHost2/\u8BA1\u7B97\u673A\u7F51\u7EDC/TCP-\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B/36.jpg" alt="img"> \u5BA2\u6237\u7AEFconnect\u6210\u529F\u8FD4\u56DE\u662F\u5728\u7B2C\u4E8C\u6B21\u63E1\u624B\uFF0C\u670D\u52A1\u7AEFaccept\u6210\u529F\u8FD4\u56DE\u662F\u5728\u7B2C\u4E09\u6B21\u63E1\u624B\u6210\u529F\u4E4B\u540E\u3002</p><h2 id="_2-tcp\u6027\u80FD\u4F18\u5316\u91CD\u8981\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-tcp\u6027\u80FD\u4F18\u5316\u91CD\u8981\u53C2\u6570" aria-hidden="true">#</a> 2. tcp\u6027\u80FD\u4F18\u5316\u91CD\u8981\u53C2\u6570</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E3B\u8981\u4ECE\u4E09\u4E2A\u65B9\u9762\u9610\u8FF0\u63D0\u5347TCP\u6027\u80FD\u7684\u7B56\u7565: 2.1 TCP\u4E09\u6B21\u63E1\u624B\u7684\u6027\u80FD\u63D0\u5347 * \u8C03\u6574SYN\u62A5\u6587\u91CD\u4F20\u6B21\u6570 * \u8C03\u6574SYN\u534A\u8FDE\u63A5\u961F\u5217\u7684\u957F\u5EA6 * \u8C03\u6574SYN+ACK\u62A5\u6587\u91CD\u4F20\u6B21\u6570 * \u8C03\u6574Accept\u961F\u5217\u957F\u5EA6 * \u7ED5\u8FC7\u4E09\u6B21\u63E1\u624B 2.2 TCP\u56DB\u6B21\u6325\u624B\u7684\u6027\u80FD\u63D0\u5347 * \u8C03\u6574FIN\u62A5\u6587\u91CD\u4F20\u6B21\u6570 * \u8C03\u6574FIN_WAIT2\u72B6\u6001\u7684\u65F6\u95F4 * \u8C03\u6574\u5B64\u513F\u8FDE\u63A5\u7684\u4E0A\u9650\u4E2A\u6570 * \u8C03\u6574time_wait\u72B6\u6001\u7684\u4E0A\u9650\u4E2A\u6570 * \u590D\u7528time_wait\u72B6\u6001\u7684\u8FDE\u63A5 2.3 TCP\u6570\u636E\u4F20\u8F93\u7684\u6027\u80FD\u63D0\u5347 * \u6269\u5927\u6ED1\u52A8\u7A97\u53E3\u5927\u5C0F * \u8C03\u6574\u53D1\u9001\u7F13\u51B2\u533A\u8303\u56F4 * \u8C03\u6574\u63A5\u6536\u7F13\u51B2\u533A\u8303\u56F4 * \u63A5\u6536\u7F13\u51B2\u533A\u52A8\u6001\u8C03\u6574 * \u8C03\u6574\u5185\u5B58\u8303\u56F4</p></div><p>###2.2 \u4F18\u5316\u4E09\u6B21\u63E1\u624B</p><table><thead><tr><th style="text-align:center;">\u7B56\u7565</th><th style="text-align:center;">TCP\u5185\u6838\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">\u8C03\u6574SYN\u62A5\u6587\u91CD\u4F20\u6B21\u6570</td><td style="text-align:center;">tcp_syn_retries</td></tr><tr><td style="text-align:center;">\u8C03\u6574SYN\u534A\u8FDE\u63A5\u961F\u5217\u957F\u5EA6</td><td style="text-align:center;">tcp_max_syn_backlog\u3001somaxconn\u3001backlog</td></tr><tr><td style="text-align:center;">\u8C03\u6574SYN+ACK\u62A5\u6587\u7684\u91CD\u4F20\u6B21\u6570</td><td style="text-align:center;">tcp_synack_retries</td></tr><tr><td style="text-align:center;">\u8C03\u6574Accept\u961F\u5217\u957F\u5EA6</td><td style="text-align:center;">min(backlog, somaxconn)</td></tr><tr><td style="text-align:center;">\u7ED5\u8FC7\u4E09\u6B21\u63E1\u624B</td><td style="text-align:center;">tcp_fastopen</td></tr></tbody></table><p>###2.3 \u4F18\u5316\u56DB\u6B21\u6325\u624B</p><table><thead><tr><th style="text-align:center;">\u7B56\u7565</th><th style="text-align:center;">TCP\u5185\u6838\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">\u8C03\u6574FIN\u62A5\u6587\u91CD\u4F20\u6B21\u6570</td><td style="text-align:center;">tcp_orphan_retries</td></tr><tr><td style="text-align:center;">\u8C03\u6574FIN_WAIT2 \u72B6\u6001\u7684\u65F6\u95F4(\u53EA\u9002\u7528close\u51FD\u6570\u5173\u95ED\u7684\u8FDE\u63A5)</td><td style="text-align:center;">tcp_fin_timeout</td></tr><tr><td style="text-align:center;">\u8C03\u6574\u5B64\u513F\u8FDE\u63A5\u7684\u4E0A\u9650\u4E2A\u6570(\u53EA\u9002\u7528close\u51FD\u6570\u5173\u95ED\u7684\u8FDE\u63A5)</td><td style="text-align:center;">tcp_max_orphans</td></tr><tr><td style="text-align:center;">\u8C03\u6574time_wait\u72B6\u6001\u7684\u4E0A\u9650\u4E2A\u6570</td><td style="text-align:center;">tcp_max_tw_buckets</td></tr><tr><td style="text-align:center;">\u590D\u7528time_wait \u72B6\u6001\u7684\u8FDE\u63A5(\u53EA\u9002\u7528\u5BA2\u6237\u7AEF)</td><td style="text-align:center;">tcp_tw_reuse\u3001tcp_timestamps</td></tr></tbody></table><p>###2.4 \u6570\u636E\u4F20\u8F93\u7684\u4F18\u5316</p><table><thead><tr><th style="text-align:center;">\u7B56\u7565</th><th style="text-align:center;">TCP\u5185\u6838\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">\u6269\u5927\u7A97\u53E3\u5927\u5C0F</td><td style="text-align:center;">tcp_window_scaling</td></tr><tr><td style="text-align:center;">\u8C03\u6574\u53D1\u9001\u7F13\u51B2\u533A\u8303\u56F4</td><td style="text-align:center;">tcp_wmem</td></tr><tr><td style="text-align:center;">\u8C03\u6574\u63A5\u6536\u7F13\u51B2\u533A\u8303\u56F4</td><td style="text-align:center;">tcp_rmem</td></tr><tr><td style="text-align:center;">\u6253\u5F00\u63A5\u6536\u7F13\u51B2\u533A\u52A8\u6001\u8C03\u8282</td><td style="text-align:center;">tcp_moderate_rcvbuf</td></tr><tr><td style="text-align:center;">\u8C03\u6574\u5185\u5B58\u8303\u56F4</td><td style="text-align:center;">tcp_mem</td></tr></tbody></table><h2 id="_3-\u601D\u8003" tabindex="-1"><a class="header-anchor" href="#_3-\u601D\u8003" aria-hidden="true">#</a> 3. \u601D\u8003</h2><ul><li>\u9664\u4E86\u4F7F\u7528\u5E8F\u5217\u53F7\u662F\u5426\u8FD8\u6709\u5176\u4ED6\u65B9\u5F0F\u4FDD\u8BC1\u6D88\u606F\u7684\u4E0D\u91CD\u590D\u4E0D\u4E22\u5931</li><li>UDP\u534F\u8BAE\u6709\u8FDE\u63A5\u7684\u6982\u5FF5\u4E48\uFF0C\u5B83\u80FD\u5426\u4FDD\u8BC1\u6570\u636E\u4F20\u8F93\u7684\u53EF\u9760\u6027</li><li>\u5982\u679C\u4E3B\u52A8\u5173\u95ED\u65B9\u6CA1\u6709time_wait \u548C \u65F6\u95F4\u4E0D\u4E3A2msl\u4F1A\u600E\u4E48\u6837(\u89E3\u7B54\uFF1A\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u7684\u521D\u59CB\u5316\u5E8F\u5217\u53F7\u90FD\u662F\u968F\u673A\u751F\u6210\u7684F(\u56DB\u5143\u7EC4)+M(\u65F6\u95F4\u6233\u9012\u589E4ms+1)\uFF1B\u5F88\u5927\u7A0B\u5EA6\u4E0A\u907F\u514D\u4E86\u5386\u53F2\u62A5\u6587\u88AB\u4E0B\u4E00\u4E2A\u76F8\u540C\u56DB\u5143\u7EC4\u7684\u8FDE\u63A5\u63A5\u53D7\uFF0C\u7136\u540E\u53C8\u5F15\u5165\u4E86\u65F6\u95F4\u6233\u673A\u5236\uFF0C\u4ECE\u800C\u5B8C\u5168\u907F\u514D\u4E86\u5386\u53F2\u62A5\u6587\u88AB\u63A5\u6536\u7684\u95EE\u9898)</li></ul><h2 id="_4-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_4-\u53C2\u8003" aria-hidden="true">#</a> 4. \u53C2\u8003</h2><ul><li>\u88AB\u95EE\u5343\u767E\u904D\u7684TCP\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B\u9762\u8BD5\u9898\uFF1Ahttps://www.cnblogs.com/xiaolincoding/p/12638546.html</li><li>\u4E3A\u4EC0\u4E48TCP\u5EFA\u7ACB\u8FDE\u63A5\u9700\u8981\u4E09\u6B21\u63E1\u624B\uFF1Ahttps://draveness.me/whys-the-design-tcp-three-way-handshake</li></ul>',44);function a(c,n){return l}var s=e(i,[["render",a]]);export{s as default};
