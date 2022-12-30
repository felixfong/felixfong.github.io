import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>\u4EE5\u5F80\u91C7\u96C6\u65E5\u5FD7\u90FD\u662F\u6BD4\u8F83\u7B80\u5355\u7684\u64CD\u4F5C\uFF0C\u6CA1\u6709\u8FC7\u591A\u6DF1\u5165es\u7684mapping\u7B49\u5185\u5BB9\uFF0C\u4E0D\u8FC7\u6709\u65F6\u5019\u6280\u80FD\u90FD\u662F\u57FA\u4E8E\u9700\u6C42\u9A71\u52A8\u7684\u3002</p><p>\u73B0\u6709\u65E5\u5FD7\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;sign&quot;</span><span class="token operator">:</span><span class="token string">&quot;test-log&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;@timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;2020-07-05T17:43:12+08:00&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;filter&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sale_id&quot;</span><span class="token operator">:</span><span class="token number">2084090132</span><span class="token punctuation">,</span><span class="token property">&quot;sale_uri&quot;</span><span class="token operator">:</span><span class="token string">&quot;2003261352dvxv50&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;shop_id&quot;</span><span class="token operator">:</span><span class="token number">47516579</span><span class="token punctuation">,</span><span class="token property">&quot;shop_uri&quot;</span><span class="token operator">:</span><span class="token string">&quot;1910201845lawpvt&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;cat_id&quot;</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token property">&quot;sec_cat_id&quot;</span><span class="token operator">:</span><span class="token number">4001</span><span class="token punctuation">,</span><span class="token property">&quot;rule&quot;</span><span class="token operator">:</span><span class="token string">&quot;startprice&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u62CD\u54C1\u8D77\u62CD\u4EF7\\u003e0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;score&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;arguments&quot;</span><span class="token operator">:</span><span class="token string">&quot;{\\&quot;startPrice\\&quot;:2600}&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u56E0\u4E3A\u540E\u671F\u4F1A\u5BF9\u65E5\u5FD7\u4E2D\u4E00\u4E9B\u5185\u5BB9\u8FDB\u884C\u805A\u5408\u8BA1\u7B97\uFF0C\u56E0\u6B64\u8981\u6C42\u65E5\u5FD7\u4E2Dscore\u5B57\u6BB5\u5199\u5165\u4E4B\u540E\u662Ffloat\u7C7B\u578B\uFF0C\u4F46\u662F\u5982\u679C\u4EC0\u4E48\u90FD\u4E0D\u6307\u5B9A\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u5199\u5165\u4E4B\u540E\uFF0C\u4F1A\u5206\u914D\u4E00\u4E2A\u5176\u4ED6\u7684\u7C7B\u578B\u3002</p><p>\u4E24\u79CD\u89E3\u51B3\u65B9\u5F0F\u3002</p><h2 id="\u7B2C\u4E00-\u521B\u5EFA\u7D22\u5F15\u7684\u65F6\u5019\u6307\u5B9Amapping" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00-\u521B\u5EFA\u7D22\u5F15\u7684\u65F6\u5019\u6307\u5B9Amapping" aria-hidden="true">#</a> \u7B2C\u4E00\uFF1A\u521B\u5EFA\u7D22\u5F15\u7684\u65F6\u5019\u6307\u5B9Amapping</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT test-index
<span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;score&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;float&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;shards_acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;test-indexa&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u67E5\u770B\u7D22\u5F15mapping\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET test-index/_mapping
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD4\u56DE\u7ED3\u679C</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;test-index&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;score&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FD9\u6837\u5199\u8FDB\u6765\u4E4B\u540E\u5BF9\u5E94\u7684 score\u5B57\u6BB5\u5C31\u662Ffloat\u7C7B\u578B\u4E86\u3002</p><p>\u4F46\u662F\u8FD9\u6837\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u56E0\u4E3A\u521A\u521A\u662F\u6307\u5B9A\u4E86\u5355\u4E2A\u7D22\u5F15\u7684mapping\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u7684\u65E5\u5FD7\u7D22\u5F15\u90FD\u4F1A\u6309\u5929\u6765\u5B58\uFF0C\u90A3\u4E48\u65B0\u7684\u7D22\u5F15\u5C31\u65E0\u6CD5\u81EA\u52A8\u8FDB\u884C\u5BF9\u7167\u4E86\u3002\u63A5\u4E0B\u6765\u8981\u5F15\u5165\u7D22\u5F15\u6A21\u677F\u7684\u914D\u7F6E\u5B9A\u4E49\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT _template/template_test
<span class="token punctuation">{</span>
  <span class="token property">&quot;index_patterns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;test*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;order&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_replicas&quot;</span> <span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;score&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u521B\u5EFA\u4E00\u4E2A\u7D22\u5F15\u6A21\u677F\uFF0C\u53EA\u8981\u662F\u4EE5test\u5F00\u5934\u7684\u7D22\u5F15\uFF0C\u90A3\u4E48\u521B\u5EFA\u7D22\u5F15\u5E76\u5199\u5165\u8FDB\u6765\u4E4B\u540E\uFF0C\u5BF9\u5E94\u7684score\u5B57\u6BB5\u5C31\u5E94\u8BE5\u662Ffloat\u7C7B\u578B\u4E86\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET test-index<span class="token number">-2020</span><span class="token number">-03</span><span class="token number">-30</span>/_mapping

<span class="token punctuation">{</span>
  <span class="token property">&quot;test-index-2020-03-30&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;@timestamp&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@version&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;arguments&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;batch&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cat_id&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;host&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rule&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sale_id&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sale_uri&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;float&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sec_cat_id&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;shop_id&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;shop_uri&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sign&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br></div></div><p><img src="http://t.eryajf.net/imgs/2021/09/2b320de75c62f3dd.jpg" alt="img"></p><h2 id="_2-logstash\u5904\u7406\u3002" tabindex="-1"><a class="header-anchor" href="#_2-logstash\u5904\u7406\u3002" aria-hidden="true">#</a> 2\uFF0Clogstash\u5904\u7406\u3002</h2><p>\u8FD8\u6709\u4E00\u79CD\u76F8\u5BF9\u7B80\u4FBF\u7684\u65B9\u6848\u662F\u5728lgostash\u5C42\u9762\u6765\u505A\uFF0C\u8BA9\u65E5\u5FD7\u5728\u4ECElogstash\u8F6C\u8FC7\u6765\u7684\u65F6\u5019\uFF0C\u6307\u5B9A\u67D0\u4E9B\u5B57\u6BB5\u7684\u7C7B\u578B\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>input <span class="token punctuation">{</span>
  kafka <span class="token punctuation">{</span>
    bootstrap_servers =&gt; <span class="token string">&quot;192.168.0.1:9092&quot;</span>
    group_id =&gt; <span class="token string">&quot;test-index&quot;</span>
    consumer_threads =&gt; <span class="token number">6</span>
    topics =&gt; <span class="token punctuation">[</span><span class="token string">&quot;test-index&quot;</span><span class="token punctuation">]</span>
    client_id =&gt; <span class="token string">&quot;test-index&quot;</span>
    codec =&gt; <span class="token string">&quot;json&quot;</span>
    check_crcs =&gt; <span class="token string">&quot;false&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

filter <span class="token punctuation">{</span>
   mutate <span class="token punctuation">{</span>
      convert    =&gt; <span class="token punctuation">{</span>
         <span class="token string">&quot;score&quot;</span> =&gt; <span class="token string">&quot;float&quot;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

output <span class="token punctuation">{</span>
  elasticsearch <span class="token punctuation">{</span>
    hosts =&gt; <span class="token punctuation">[</span><span class="token string">&quot;http://192.168.0.2:9208&quot;</span><span class="token punctuation">]</span>
    index =&gt; <span class="token string">&quot;test-index-%{+YYYY-MM-dd-HH}&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u5B9E\u9645\u751F\u4EA7\u4E2D\uFF0C\u4E5F\u4F1A\u5229\u7528\u8FD9\u4E00\u529F\u80FD\uFF0C\u5BF9NGINX\u7684access\u65E5\u5FD7\u8FDB\u884C\u4E00\u4E9B\u7279\u6B8A\u5904\u7406\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>input <span class="token punctuation">{</span>
  kafka <span class="token punctuation">{</span>
      bootstrap_servers  =&gt; <span class="token string">&quot;192.168.0.1:9092&quot;</span>
      group_id          =&gt; <span class="token string">&quot;nginx_access&quot;</span>
      consumer_threads =&gt; <span class="token number">6</span>
      topics            =&gt; <span class="token string">&quot;nginx_access&quot;</span>
      codec             =&gt; <span class="token string">&quot;json&quot;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter <span class="token punctuation">{</span>
   mutate <span class="token punctuation">{</span>
      split           =&gt; <span class="token punctuation">[</span><span class="token string">&quot;request_uri&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">]</span>
      add_field       =&gt; <span class="token punctuation">{</span>
          <span class="token string">&quot;uri_path&quot;</span>  =&gt; <span class="token string">&quot;%{request_uri[0]}&quot;</span>
          <span class="token string">&quot;uri_query&quot;</span> =&gt; <span class="token string">&quot;%{request_uri[1]}&quot;</span>
      <span class="token punctuation">}</span>
      remove_field    =&gt; <span class="token punctuation">[</span><span class="token string">&quot;request_uri&quot;</span><span class="token punctuation">]</span>
      convert         =&gt; <span class="token punctuation">{</span>
         <span class="token string">&quot;response&quot;</span>               =&gt; <span class="token string">&quot;integer&quot;</span>
         <span class="token string">&quot;body_bytes_sent&quot;</span>        =&gt; <span class="token string">&quot;integer&quot;</span>
         <span class="token string">&quot;request_time&quot;</span>           =&gt; <span class="token string">&quot;float&quot;</span>
         <span class="token string">&quot;upstream_response_time&quot;</span> =&gt; <span class="token string">&quot;float&quot;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
   elasticsearch <span class="token punctuation">{</span>
      hosts =&gt; <span class="token punctuation">[</span><span class="token string">&quot;http://192.168.0.2:9208&quot;</span><span class="token punctuation">]</span>
      index =&gt; <span class="token string">&quot;nginx_access-%{+YYYY.MM.dd}-1&quot;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,24);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
