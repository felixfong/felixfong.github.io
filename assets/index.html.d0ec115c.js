import{e}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const t={},n=e(`<p>\u6709\u4E00\u4E9B\u7ECF\u9A8C\uFF0C\u975E\u771F\u5207\u7ECF\u5386\u800C\u4E0D\u80FD\u771F\u5207\u4F53\u4F1A\uFF0C\u800C\u5F53\u771F\u5207\u4F53\u4F1A\u4E4B\u540E\uFF0C\u5C31\u5E94\u5F53\u771F\u5207\u51DD\u7EC3\u6C47\u603B\uFF0C\u8FD9\u91CC\u6C47\u603B\u6574\u7406\u8BB0\u5F55\u4E00\u4E9B\u5DE5\u4F5C\u4E2D\u7684\u5FC3\u5F97\u7ECF\u9A8C\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/11/9e5a098c0095e5d2.jpg" alt=""></p><ol><li><p>\u5982\u679C\u4E1A\u52A1\u65E5\u5FD7\u7684kafka\u67D0\u4E2Atopic\u5806\u79EF\u4E86\u5927\u91CF\u7684\u6570\u636E\uFF0C\u800C\u4E1A\u52A1\u65B9\u53C8\u786E\u8BA4\u53EF\u4EE5\u5C06\u8FD9\u6BB5\u65E5\u5FD7\u8DF3\u8FC7\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u80FD\u901A\u8FC7\u5220\u9664topic\u7684\u65B9\u5F0F\u5904\u7406\uFF0C\u53EF\u4EE5\u901A\u8FC7kafka-manager\u5C06\u53C2\u6570<code>retention.ms</code>\u6539\u5C0F\uFF0C\u6539\u62101\u5206\u949F\uFF0C\u4FDD\u5B58\u4E4B\u540E\uFF0C\u5341\u5206\u949F\u5DE6\u53F3\uFF0C\u6D88\u606F\u5C31\u4F1A\u5220\u5B8C\u3002\u5B8C\u4E8B\u513F\u4E4B\u540E\u518D\u628A\u53C2\u6570\u8FD8\u539F\u3002</p></li><li><p>Jenkins\u7684\u4E3B\u57DF\u540D\u5E94\u8BE5\u5C31\u89E3\u6790\u5728master\u670D\u52A1\u5668\u672C\u8EAB\uFF0C\u56E0\u4E3A\u5728\u914D\u7F6Eslave\u7684\u65F6\u5019\uFF0C\u901A\u4FE1\u7AEF\u53E3\u662F<code>\u5168\u5C40\u5B89\u5168\u914D\u7F6E</code>\u4E2D<code>\u4EE3\u7406</code>\u5904\u6307\u5B9A\u7684\u7AEF\u53E3\u3002\u6B64\u65F6slave\u4E0Emaster\u901A\u4FE1\u4ECD\u5C06\u901A\u8FC7<code>\u7CFB\u7EDF\u914D\u7F6E</code>\u4E2D<code>Jenkins Location</code>\u4E2D\u7684<code>Jenkins URL</code>\u52A0\u7AEF\u53E3\u8FDB\u884C\uFF0C\u5982\u679C\u57DF\u540D\u89E3\u6790\u5230\u4E86\u5176\u4ED6\u5730\u65B9\uFF0Cslave\u8282\u70B9\u5C06\u603B\u662F\u65E0\u6CD5\u6B63\u5E38\u6CE8\u518C\u3002\u5982\u679C\u5B9E\u5728\u65E0\u6CD5\u5728master\u4E0A\u89E3\u6790\uFF0C\u4E5F\u5E94\u8BE5\u653E\u4E00\u4EFDNginx\u914D\u7F6E\u6587\u4EF6\uFF0Cslave\u901A\u8FC7\u7ED1\u5B9Ahosts\u5230master\u7684\u65B9\u5F0F\u5F3A\u884C\u5F15\u5BFC\u6253\u901A\u3002</p></li><li><p>\u5728k8s\u4E2D\u90E8\u7F72\u670D\u52A1\uFF0C\u5982\u679C\u670D\u52A1\u57DF\u540D\u901A\u8FC7ingress\u914D\u7F6E\u7684\uFF0C\u90A3\u4E48\u6B64\u65F6svc\u7684\u6A21\u5F0F\u53EF\u4EE5\u8BBE\u7F6E\u6210ClusterIP\uFF0C\u56E0\u4E3A\u6D41\u91CF\u5DF2\u7ECF\u8D70\u4E86ingress\u7684\u6620\u5C04\uFF0C\u4E0D\u518D\u9700\u8981\u901A\u8FC7NodePort\u8FDB\u884C\u4EE3\u7406\u8F6C\u53D1\u3002</p></li><li><p>es\u4E2D\u4E3B\u7D22\u5F15\u7684\u5206\u7247\u65E0\u6CD5\u52A0\u5927\u6216\u8005\u7F29\u5C0F\uFF0C\u5982\u679C\u8BE5\u7D22\u5F15\u662F\u56FA\u5B9A\u7684\u5355\u7D22\u5F15\u7684\u8BDD\uFF0C\u901A\u5E38\u7D22\u5F15\u5206\u7247\u662F\u8D70mapping\u6765\u5B9A\u4E49\u5206\u7247\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5E94\u8BE5\u5EFA\u7ACBmapping\uFF0C\u65B0\u5EFA\u7D22\u5F15\uFF0C\u7136\u540Ereindex\u7684\u65B9\u5F0F\u5904\u7406\u3002</p></li><li><p>logstash\u57286.x\u7248\u672C\u4E2D\u4F7F\u7528mutate\u5173\u952E\u5B57add_field\u65F6\uFF0C\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mutate {
  split           =&gt; [&quot;request_uri&quot; , &quot;?&quot;]
  add_field       =&gt; {
      &quot;uri_path&quot;  =&gt; &quot;%{request_uri[0]}&quot;
      &quot;uri_query&quot; =&gt; &quot;%{request_uri[1]}&quot;
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u6837\u662F\u6B63\u5E38\u7684\uFF0C\u4F46\u662F\u540C\u6837\u7684\u914D\u7F6E\u57287.x\u7248\u672C\u4E2D\uFF0C\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[2021-05-06T20:33:53,365][WARN ][logstash.filters.mutate  ][main][cc8d92e453b7aeb97baaede527c74dc6b680b6c68938aa1df68cf82be5edb576] Exception caught while applying mutate filter {:exception=&gt;&quot;Invalid FieldReference: \`request_uri[0]\`&quot;}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6B64\u65F6\u5E94\u8BE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\uFF0C\u5373\u53EF\u6B63\u5E38\u6DFB\u52A0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>add_field       =&gt; {&quot;uri_path&quot;  =&gt; &quot;%{[request_uri][0]}&quot;}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u53C2\u8003\uFF1Ahttps://discuss.elastic.co/t/logstash-7-2-0-mutate-error/193086</p></li><li><p>\u4F7F\u7528wget\u4E0B\u8F7D\u6587\u4EF6\u65F6\uFF0C\u5C3D\u91CF\u4E0D\u8981\u7528-o\u53C2\u6570\u6307\u5B9A\u6587\u4EF6\u4E0B\u8F7D\u76EE\u5F55\uFF0C\u53EF\u4EE5\u901A\u8FC7-P\u6765\u6307\u5B9A\u6587\u4EF6\u5B58\u653E\u76EE\u5F55\uFF0C\u5B9E\u6D4B\u901A\u8FC7-o\u4E4B\u540E\u53EF\u80FD\u4F1A\u6539\u53D8\u6587\u4EF6md5\uFF0C\u5BFC\u81F4\u4E0D\u53EF\u9884\u77E5\u7684\u95EE\u9898\u51FA\u73B0\u3002</p></li><li><p>\u5343\u4E07\u4E0D\u8981\u90E8\u7F72\u7834\u89E3\u7248\u7684\u4E1C\u897F\u7528\u5728\u516C\u53F8\u751F\u4EA7\uFF0C\u4E0D\u4F46\u4F1A\u7ED9\u516C\u53F8\u9020\u6210\u4FB5\u6743\u95EE\u9898\uFF0C\u8FD8\u4F1A\u7ED9\u81EA\u5DF1\u540E\u7EED\u7684\u7EF4\u62A4\u5DE5\u4F5C\u5E26\u6765\u65E0\u7A77\u5C3D\u7684\u70E6\u607C\u3002\u5982\u679C\u8FD9\u4E2A\u4EA7\u54C1\u6CA1\u6709\u8F83\u597D\u7684\u5F00\u6E90\u66FF\u4EE3\u54C1\uFF0C\u5C31\u5E94\u8BE5\u5728\u4E00\u5F00\u59CB\u53CD\u9988\u51FA\u6765\uFF0C\u8BA9\u516C\u53F8\u8003\u8651\u4ED8\u8D39\u4F7F\u7528\uFF0C\u6216\u8005\u9009\u62E9\u5F00\u6E90\u4EA7\u54C1\u4F7F\u7528\u3002</p></li><li><p>\u5982\u679C\u4F60\u7528nginx+upsync+consul\u7BA1\u7406\u540E\u7AEF\u670D\u52A1\uFF0C\u5E76\u4E14\u901A\u8FC7\u914D\u7F6E\u7BA1\u7406\u5E73\u53F0\u7BA1\u7406\u7740Nginx\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\uFF0C\u6BCF\u4E2Aserver\u5BF9\u5E94\u7684upstream\u4E2D\u7684dump\u6587\u4EF6\u4EE5\u53CAinclude\u6587\u4EF6\uFF0C\u5728\u521D\u59CB\u540C\u6B65\u4E4B\u540E\u5C31\u4E0D\u5E94\u8BE5\u518D\u8FDB\u884C\u540C\u6B65\u6216\u8005\u66F4\u65B0\uFF0C\u5F53\u521D\u59CB\u914D\u7F6E\u5185\u5BB9\u88ABNginx\u52A0\u8F7D\u4E4B\u540E\uFF0C\u5373\u4E0Econsul\u5BF9\u63A5\u901A\u8FC7\u5E73\u53F0\u7BA1\u7406\u3002\u4E4B\u6240\u4EE5\u4E0D\u5E94\u518D\u66F4\u65B0\u7684\u539F\u56E0\u5728\u4E8E\uFF0CNginx\u5148\u8BFB\u53D6\u672C\u5730\u914D\u7F6E\u52A0\u8F7D\u6210\u529F\u5E76\u542F\u52A8\uFF0C\u7136\u540E\u624D\u4F1A\u8FDE\u63A5consul\u5BF9\u63A5\u6570\u636E\u3002\u4E00\u65E6\u521D\u59CB\u6570\u636E\u4E2D\u7684\u540E\u7AEF\u670D\u52A1\u6709\u53D8\u66F4\u6216\u8005\u4E0B\u7EBF\uFF0C\u90A3\u4E48\u4E0B\u6B21\u66F4\u65B0\u5C31\u4F1A\u51FA\u73B0\u7B80\u77ED\u7684\u4E0D\u53EF\u7528\u3002</p><p>\u4E3A\u907F\u514D\u6B64\u95EE\u9898\uFF0C\u540C\u6B65\u914D\u7F6E\u65F6\uFF0C\u53EF\u501F\u52A9rsync\u7684<code>--ignore-existing</code>\u53C2\u6570\u5B9E\u73B0\u3002</p></li></ol>`,3);function a(i,l){return n}var c=s(t,[["render",a]]);export{c as default};
