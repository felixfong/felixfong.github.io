import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<p>\u6709\u65F6\u5019\u53EF\u80FD\u67D0\u4E2A\u8282\u70B9\u9700\u8981\u67D0\u4E9B\u7EF4\u62A4\uFF0C\u9700\u8981\u4ECE\u96C6\u7FA4\u4E2D\u8E22\u51FA\uFF0C\u90A3\u4E48\u5982\u4F55\u624D\u80FD\u59A5\u5584\u5C06\u67D0\u4E2A\u8282\u70B9\u8E22\u51FA\u5462\uFF1F</p><ul><li><p>\u7B2C\u4E00\u6B65\uFF1A\u4E0B\u7EBF\u8282\u70B9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u901A\u8FC7\u8282\u70B9name\u4E0B\u7EBF
PUT _cluster/settings
{
  &quot;transient&quot; : {
    &quot;cluster.routing.allocation.exclude._name&quot; : &quot;elk-node2&quot;
  }
}
# \u901A\u8FC7IP\u4E0B\u7EBF
PUT _cluster/settings
{
  &quot;transient&quot; : {
    &quot;cluster.routing.allocation.exclude._ip&quot; : &quot;10.3.3.3&quot;
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8868\u793A\u7B2C\u4E8C\u4E2A\u8282\u70B9\u5C06\u8981\u4E0B\u7EBF\uFF0C\u64CD\u4F5C\u4E4B\u540E\u5C31\u80FD\u591F\u770B\u5230\u8282\u70B92\u4E0A\u7684\u5206\u7247\u90FD\u4F1A\u5F80\u5176\u4ED6\u8282\u70B9\u8F6C\u79FB\u4E86\u3002\u7B49\u8F6C\u79FB\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u5C31\u80FD\u4E0B\u7EBF\u4E86\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/d7d6941df389a26f.jpg" alt=""></p></li><li><p>\u52A0\u56DE\u8282\u70B9</p><p>\u5982\u679C\u53EA\u662F\u91CD\u542F\u8282\u70B9\uFF0C\u7136\u540E\u8FD8\u8981\u52A0\u5165\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u8F6C\u79FB\u5B8C\u6BD5\uFF0C\u91CD\u542F\uFF0C\u7136\u540E\u6267\u884C\u5982\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT _cluster/settings
{
  &quot;transient&quot; : {
    &quot;cluster.routing.allocation.exclude._name&quot; : &quot;&quot;
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8BA9 <code>_name</code>\u8BBE\u4E3A\u7A7A\uFF0C\u5C31\u597D\u4E86\u3002\u5F53\u7136\u8FD9\u4E2A\u5730\u65B9\u4E5F\u53EF\u4EE5\u66FF\u6362\u6210ip,host\u90FD\u53EF\u4EE5\u3002</p></li></ul><p>\u5176\u4E2D\u4E0B\u7EBF\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u4F1A\u56E0\u4E3A\u4E00\u4E9B\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5BFC\u81F4\u4E0B\u7EBF\u901F\u5EA6\u5F88\u6162\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u53C2\u6570\u8FDB\u884C\u4E00\u4E9B\u8C03\u6574\u3002</p><ul><li><p>\u8C03\u6574\u5355\u4E2A\u8282\u70B9\u7684\u5165\u53E3\u5E76\u53D1\u6062\u590D\u7684\u5206\u7247\u6570\u91CF\uFF0C\u9ED8\u8BA4\u662F2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT _cluster/settings
{
  &quot;transient&quot; : {
    &quot;cluster.routing.allocation.node_concurrent_incoming_recoveries&quot; : &quot;3&quot;
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u8C03\u6574\u5355\u4E2A\u8282\u70B9\u7684\u51FA\u53E3\u5E76\u53D1\u6062\u590D\u7684\u5206\u7247\u6570\u91CF\uFF0C\u9ED8\u8BA4\u662F2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT _cluster/settings
{
  &quot;transient&quot; : {
    &quot;cluster.routing.allocation.node_concurrent_outgoing_recoveries&quot; : &quot;3&quot;
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>\u5982\u4E0A\u4E24\u4E2A\u53C2\u6570\u5728\u9047\u5230\u8282\u70B9\u9700\u8981\u4E0A\u4E0B\u7EBF\u65F6\u8C03\u6574\u79FB\u52A8\u961F\u5217\u6709\u975E\u5E38\u5927\u7684\u4F5C\u7528\u3002</p></blockquote></li><li><p>\u96C6\u7FA4\u5185\u540C\u65F6\u542F\u52A8\u7684\u6570\u636E\u4EFB\u52A1\u4E2A\u6570\uFF0C\u9ED8\u8BA4\u662F2\u4E2A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT _cluster/settings
{
  &quot;transient&quot; : {
    &quot;cluster.routing.allocation.cluster_concurrent_rebalance&quot; : &quot;30&quot;
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u8C03\u6574\u6062\u590D\u901F\u5EA6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /_cluster/settings
{
  &quot;transient&quot;: {&quot;indices.recovery.max_bytes_per_sec&quot;: &quot;1580m&quot;}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul>`,4);function l(r,t){return a}var i=s(e,[["render",l]]);export{i as default};
