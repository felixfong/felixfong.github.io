import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>\u7D22\u5F15\u751F\u547D\u5468\u671F\u7BA1\u7406\u5C06\u4F1A\u662Fes\u7EF4\u62A4\u7BA1\u7406\u4E2D\u91CD\u8981\u7684\u4E00\u73AF\uFF0C\u751F\u4EA7\u4E2D\u5DF2\u7ECF\u6709\u4E00\u4E2A\u96C6\u7FA4\u7528\u7684 <code>7.x</code> \u7248\u672C\uFF0C\u4E00\u76F4\u4E5F\u6CA1\u6709\u4F7F\u7528\u81EA\u5E26\u7684\u751F\u547D\u5468\u671F\u7BA1\u7406\u5DE5\u5177\uFF0C\u4ECA\u5929\u5C31\u6765\u7814\u7A76\u4E00\u4E0B\uFF0C\u73B0\u5728\u5148\u901A\u8FC7\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u7406\u89E3\u8FD9\u4E2A\u529F\u80FD\u4EE5\u53CA\u7528\u6CD5\u3002</p><h2 id="_1-\u5FEB\u901F\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#_1-\u5FEB\u901F\u4F53\u9A8C" aria-hidden="true">#</a> 1\uFF0C\u5FEB\u901F\u4F53\u9A8C</h2><h3 id="_1-\u521B\u5EFA\u7D22\u5F15\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u7D22\u5F15\u7B56\u7565" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA\u7D22\u5F15\u7B56\u7565</h3><p>\u6211\u4EEC\u53EF\u4EE5\u5728kibana\u8BBE\u7F6E\u7684\u56FE\u5F62\u754C\u9762\u91CC\u914D\u7F6E\u7D22\u5F15\u7B56\u7565\uFF0C\u4F46\u662F\u4F7F\u7528\u5DE5\u5177\u6765\u8FDB\u884C\u7BA1\u7406\u7EF4\u62A4\u663E\u5F97\u66F4\u52A0\u65B9\u4FBF\u4FBF\u6377\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT _ilm/policy/eryajf_policy 
<span class="token punctuation">{</span>
  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>                       
    <span class="token property">&quot;phases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;hot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>                      
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;rollover&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                  <span class="token property">&quot;max_age&quot;</span><span class="token operator">:</span><span class="token string">&quot;30s&quot;</span>
              <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;90s&quot;</span><span class="token punctuation">,</span>           
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>              
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u8FD9\u91CC\u4E3A\u4E86\u6F14\u793A\u65B9\u4FBF\uFF0C\u5B9A\u4E49\u4E86\u7D22\u5F15\u5728<code>hot</code>\u8282\u70B9\u4FDD\u7559<code>10s</code>\uFF0C\u7136\u540E\u5C31\u4F1A\u89E6\u53D1\u6EDA\u52A8\u7B56\u7565\u5230<code>delete</code>\u9636\u6BB5\uFF0C\u5230<code>delete</code>\u9636\u6BB5\u4E4B\u540E\uFF0C\u4FDD\u7559<code>60s</code>\u5DE6\u53F3\uFF0C\u5C31\u4F1A\u5220\u9664\uFF0C\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u80FD\u591F\u6BD4\u8F83\u6E05\u6670\u5730\u770B\u5230\u7D22\u5F15\u5728\u58F0\u660E\u5468\u671F\u4E2D\u7684\u53D8\u5316\u3002</p><h3 id="_2-\u521B\u5EFA\u7D22\u5F15\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u7D22\u5F15\u6A21\u677F" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u7D22\u5F15\u6A21\u677F</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT _template/template_eryajf
<span class="token punctuation">{</span>
  <span class="token property">&quot;index_patterns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;eryajf*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                 
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;index.lifecycle.name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eryajf_policy&quot;</span><span class="token punctuation">,</span>      
    <span class="token property">&quot;index.lifecycle.rollover_alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eryajf&quot;</span>    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><code>index_patterns</code>\uFF1A \u7D22\u5F15\u4EE5 <code>eryajf</code> \u5F00\u5934\u7684\u81EA\u52A8\u91C7\u7528<code>settings</code>\u7684\u914D\u7F6E\uFF0C\u4E8B\u5B9E\u4E0A\u8FD9\u91CC\u8FD8\u53EF\u4EE5\u52A0\u5165mapping\u7B49\u7684\u7684\u914D\u7F6E\uFF0C\u4E0D\u662F\u672C\u6587\u91CD\u70B9\uFF0C\u4E0D\u518D\u8D58\u8FF0\u3002</li><li><code>index.lifecycle.name</code>:\u8868\u793A\u91C7\u7528 <code>eryajf_policy</code>\u8FD9\u4E2A\u7B56\u7565</li><li><code>index.lifecycle.rollover_alias</code>\uFF1A\u8868\u793A\u7D22\u5F15\u6EDA\u52A8\u7B56\u7565\u57FA\u4E8E<code>eryajf</code>\u8FD9\u4E2A\u522B\u540D\u8FDB\u884C\u7BA1\u7406\uFF0C\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u522B\u540D\u76F8\u5F53\u91CD\u8981\u3002</li></ul><h3 id="_3-\u521B\u5EFA\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA\u7D22\u5F15</h3><p>\u6B64\u5904\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u521B\u5EFA\u7684\u7D22\u5F15\u540E\u7F00\u9700\u8981\u5E26\u6709\u6570\u5B57\u5E76\u4EE5\u4E2D\u6A2A\u6760\u5206\u5272\uFF0C\u5426\u5219\u5728\u7B56\u7565\u5E94\u7528\u7684\u65F6\u5019\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A</p><p><code>illegal_argument_exception: index name [liql-test] does not match pattern &#39;^.*-\\d+$&#39;</code>\uFF0C\u81F3\u5C11\u5728\u6211\u5F53\u524D\u4F7F\u7528\u7684\u7248\u672C\u5F53\u4E2D\uFF0C\u662F\u6709\u8FD9\u6837\u4E00\u4E2A\u9650\u5236\u7684\uFF0C\u4EA6\u5373\uFF1A<code>\u7D22\u5F15\u5FC5\u987B\u4EE5\u4E2D\u6A2A\u6760\u5206\u5272\u4E14\u4EE5\u6570\u5B57\u7ED3\u5C3E</code>\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT eryajf<span class="token number">-1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;eryajf&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;is_write_index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_4-\u914D\u7F6Elifecycle\u68C0\u6D4B\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6Elifecycle\u68C0\u6D4B\u65F6\u95F4" aria-hidden="true">#</a> 4\uFF0C\u914D\u7F6Elifecycle\u68C0\u6D4B\u65F6\u95F4</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT _cluster/settings
<span class="token punctuation">{</span>
  <span class="token property">&quot;transient&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;indices.lifecycle.poll_interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10s&quot;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u9ED8\u8BA4\u7B56\u7565\u8F6E\u8BE2\u65F6\u95F4\u95F4\u9694\u4E3A<code>\u5341\u5206\u949F</code>\uFF0C\u8FD9\u91CC\u6539\u621010\u79D2\uFF0C\u662F\u4E3A\u4E86\u65B9\u4FBF\u89C2\u5BDF\u6EDA\u52A8\u6548\u679C\u3002</p><h3 id="_5-\u529F\u80FD\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_5-\u529F\u80FD\u9A8C\u8BC1" aria-hidden="true">#</a> 5\uFF0C\u529F\u80FD\u9A8C\u8BC1</h3><p>\u5B9E\u9645\u64CD\u4F5C\u4E4B\u524D\uFF0C\u9996\u5148\u6765\u63CF\u8FF0\u4E0B\u5C06\u8981\u64CD\u4F5C\u4E0E\u9A8C\u8BC1\u7684\u6D41\u7A0B\uFF1A</p><ol><li>\u67E5\u770B\u5F53\u524D\u60C5\u51B5\u3002</li><li>\u5F80\u7D22\u5F15\u5199\u51653\u6761\u6570\u636E\uFF0C\u95F4\u9699\u8D76\u5FD9\u89C2\u5BDF\u7D22\u5F15\u72B6\u6001\u53D8\u5316\u3002</li><li>\u770B\u5230\u7D22\u5F15\u5DF2\u7ECF\u6210\u529F\u8F6E\u66FF\u4E4B\u540E\uFF0C\u518D\u5F80\u7D22\u5F15\u5199\u51656\u6761\u6570\u636E\uFF0C\u6CE8\u610F\u6570\u636E\u843D\u70B9\u5728\u4F55\u5904\u3002</li><li>\u7136\u540E\u518D\u591A\u89C2\u5BDF\u51E0\u8F6E\uFF0C\u5C31\u80FD\u5927\u6982\u4F53\u4F1A\u751F\u547D\u5468\u671F\u7BA1\u7406\u7684\u610F\u4E49\u4E86\u3002</li></ol><p>\u9A8C\u8BC1\u4E4B\u524D\uFF0C\u53EF\u4EE5\u5148\u770B\u4E00\u4E0B\u5F53\u524D\u7D22\u5F15\u72B6\u51B5\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/ec1fdcb560a1896a.jpg" alt=""></p><p>\u7136\u540E\u6279\u91CF\u5199\u5165\u51E0\u6761\u6570\u636E\uFF0C\u6CE8\u610F\u8FD9\u4E2A\u5730\u65B9\uFF0C\u5199\u6570\u636E\u7684\u7D22\u5F15\u662F <code>eryajf</code>\uFF0C\u4E5F\u5C31\u662F\u4E0A\u8FB9\u914D\u7F6E\u7684<code>\u522B\u540D</code>\u3002\u5B9E\u9645\u751F\u4EA7\u5F53\u4E2D\uFF0C\u4E5F\u5E94\u8BE5\u5F80\u8FD9\u4E2A\u522B\u540D\u91CC\u5199\u5185\u5BB9\uFF0C\u800C\u975E\u5176\u4ED6\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /eryajf/_doc/_bulk
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello-01&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello-02&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello-03&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6B64\u65F6\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u89C2\u6D4B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET eryajf-*/_ilm/explain
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BB0\u5F97\u53CA\u65F6\u89C2\u6D4B\u53D8\u5316\u60C5\u51B5\uFF0C\u91CD\u70B9\u662F\u6570\u636E\u843D\u811A\u70B9\uFF0C\u6B64\u65F6\u843D\u5230\u4E86\u65B0\u7684\u6EDA\u52A8\u7D22\u5F15 <code>eryajf-000002</code>\u4E0A\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/60578248d31364b8.jpg" alt=""></p><p>\u7A0D\u5FAE\u7B49\u4E00\u4E0B\uFF0C\u770B\u5230\u518D\u6B21\u6EDA\u52A8\u4E4B\u540E\uFF0C\u518D\u5199\u51656\u6761\u6570\u636E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /eryajf/_doc/_bulk
{&quot;index&quot;:{}}
{&quot;message&quot;:&quot;hello-01&quot;}
{&quot;index&quot;:{}}
{&quot;message&quot;:&quot;hello-02&quot;}
{&quot;index&quot;:{}}
{&quot;message&quot;:&quot;hello-03&quot;}
{&quot;index&quot;:{}}
{&quot;message&quot;:&quot;hello-04&quot;}
{&quot;index&quot;:{}}
{&quot;message&quot;:&quot;hello-05&quot;}
{&quot;index&quot;:{}}
{&quot;message&quot;:&quot;hello-06&quot;}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7136\u540E\u89C2\u6D4B\u6570\u636E\u843D\u811A\u70B9\uFF0C\u53EF\u4EE5\u770B\u5230\u843D\u5230\u4E86\u65B0\u7684\u8F6E\u66FF\u7D22\u5F15\u4E0A\u4E86\uFF0C\u5C31\u662F\u5982\u6B64\u8F6E\u66FF\u7684\u4E00\u4E2A\u65B9\u6848\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/b545e89cc13f9621.jpg" alt=""></p><p>\u5927\u6982\u7ECF\u8FC715\u79D2\u4E4B\u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u7D22\u5F15\u540D\u79F0\u66F4\u65B0\u4E86\uFF0C\u65B0\u7684\u7D22\u5F15\u540D\u53EB \u7136\u540E\u518D\u8FC730\u79D2\u5DE6\u53F3\uFF0C\u6570\u636E\u4E5F\u5C31\u88AB\u5220\u9664\u4E86\u3002</p><h2 id="_2-\u7D22\u5F15\u7B56\u7565\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-\u7D22\u5F15\u7B56\u7565\u8BE6\u89E3" aria-hidden="true">#</a> 2\uFF0C\u7D22\u5F15\u7B56\u7565\u8BE6\u89E3</h2><ul><li>\u7B56\u7565\u53EF\u4EE5\u5B9A\u4E49\u56DB\u4E2A\u9636\u6BB5 <ul><li>hot</li><li>warm</li><li>cold</li><li>delete</li></ul></li><li>\u6EDA\u52A8\u7684\u4F9D\u636E\u6709\u4E09\u79CD\u60C5\u51B5 <ul><li><code>max_age</code>\uFF1A\u5728\u5F53\u524D\u9636\u6BB5\u7D22\u5F15\u4FDD\u7559\u6700\u957F\u65F6\u95F4\uFF08\u4EE5\u7D22\u5F15\u521B\u5EFA\u65F6\u95F4\u4E3A\u51C6\uFF09</li><li><code>max_size</code>\uFF1A\u5728\u5F53\u524D\u9636\u6BB5\u7D22\u5F15\u4FDD\u7559\u6700\u5927\u5927\u5C0F</li><li><code>max_docs</code>\uFF1A\u5728\u5F53\u524D\u9636\u6BB5\u7D22\u5F15\u4FDD\u7559\u6700\u591A\u6587\u6863\u6570</li></ul></li></ul><p>\u4E00\u4E2A\u76F8\u5BF9\u5B8C\u6574\u7684\u7D22\u5F15\u7B56\u7565\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT _ilm/policy/my_policy
<span class="token punctuation">{</span>
  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;phases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;hot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;rollover&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;max_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7d&quot;</span><span class="token punctuation">,</span>    <span class="token comment">//rollover\u524D\u8DDD\u79BB\u7D22\u5F15\u7684\u521B\u5EFA\u65F6\u95F4\u6700\u5927\u4E3A7\u5929</span>
            <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50G&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//rollover\u524D\u7D22\u5F15\u7684\u6700\u5927\u5927\u5C0F\u4E0D\u8D85\u8FC750G</span>
            <span class="token property">&quot;max_docs&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>      <span class="token comment">//rollover\u524D\u7D22\u5F15\u7684\u6700\u5927\u6587\u6863\u6570\u4E0D\u8D85\u8FC71\u4E2A\uFF08\u6D4B\u8BD5\u7528\uFF09</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;warm&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30d&quot;</span><span class="token punctuation">,</span>       <span class="token comment">//rollover\u4E4B\u540E\u8FDB\u5165warm\u9636\u6BB5\u7684\u65F6\u95F4\u4E0D\u5C0F\u4E8E30\u5929</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;forcemerge&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;max_num_segments&quot;</span><span class="token operator">:</span> <span class="token number">1</span>   <span class="token comment">//\u5F3A\u5236\u5206\u7247merge\u5230segment\u4E3A1</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;shrink&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">1</span>   <span class="token comment">//\u6536\u7F29\u5206\u7247\u6570\u4E3A1</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;allocate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token comment">//\u526F\u672C\u6570\u4E3A2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cold&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60d&quot;</span><span class="token punctuation">,</span>       <span class="token comment">//rollover\u4E4B\u540E\u8FDB\u5165cold\u9636\u6BB5\u7684\u65F6\u95F4\u4E0D\u5C0F\u4E8E60\u5929</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;allocate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cold&quot;</span>    <span class="token comment">//\u5206\u914D\u5230cold \u8282\u70B9\uFF0CES\u53EF\u6839\u636E\u673A\u5668\u8D44\u6E90\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684\u8282\u70B9</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;90d&quot;</span><span class="token punctuation">,</span>       <span class="token comment">//rollover\u4E4B\u540E\u8FDB\u5165cold\u9636\u6BB5\u7684\u65F6\u95F4\u4E0D\u5C0F\u4E8E60\u5929</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u53EF\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u8C03\u6574\u914D\u7F6E\u3002</p><h2 id="_3-\u6B63\u5F0F\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u6B63\u5F0F\u5E94\u7528" aria-hidden="true">#</a> 3\uFF0C\u6B63\u5F0F\u5E94\u7528</h2><p>\u64CD\u4F5C\u6D41\u7A0B\u5927\u6982\u5E94\u8BE5\u5982\u4E0B\uFF0C\u5148\u521B\u5EFA\u7D22\u5F15\u7B56\u7565\uFF0C\u7136\u540E\u521B\u5EFA\u7D22\u5F15\u6A21\u677F\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A\u7D22\u5F15\uFF0C\u7136\u540E\u5F80\u7D22\u5F15\u6A21\u677F\u4E2D\u5B9A\u4E49\u7684\u522B\u540D\u5199\u6570\u636E\u5C31\u53EF\u4EE5\u4E86\u3002</p><h3 id="_1-\u521B\u5EFA\u7D22\u5F15\u7B56\u7565-1" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u7D22\u5F15\u7B56\u7565-1" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA\u7D22\u5F15\u7B56\u7565</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT _ilm/policy/shop-policy 
<span class="token punctuation">{</span>
  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>                       
    <span class="token property">&quot;phases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;hot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>                      
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;rollover&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                  <span class="token property">&quot;max_age&quot;</span><span class="token operator">:</span><span class="token string">&quot;30d&quot;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;min_age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30d&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>              
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u8FD9\u91CC\u5B9A\u4E49\u4E86\u4E24\u4E2A\u9636\u6BB5\uFF0Chot\u9636\u6BB5\u4FDD\u755930\u5929\uFF0C\u7136\u540E\u8FDB\u5165delete\u518D\u4FDD\u755930\u5929\u3002\u4EA6\u5373\u7D22\u5F15\u4FDD\u755960\u5929\u3002</p><h3 id="_2-\u521B\u5EFA\u7D22\u5F15\u6A21\u677F-1" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u7D22\u5F15\u6A21\u677F-1" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u7D22\u5F15\u6A21\u677F</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT _template/template_shop
<span class="token punctuation">{</span>
  <span class="token property">&quot;index_patterns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;shop*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;index.lifecycle.name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shop-policy&quot;</span><span class="token punctuation">,</span>      
    <span class="token property">&quot;index.lifecycle.rollover_alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shop&quot;</span>    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-\u521B\u5EFA\u7D22\u5F15-1" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u7D22\u5F15-1" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA\u7D22\u5F15</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT shop<span class="token number">-1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;is_write_index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u9700\u8981\u6CE8\u610F\u8FD9\u4E2A\u7D22\u5F15\u5E76\u975E\u6700\u7EC8\u5199\u5165\u7AEF\u4F7F\u7528\u7684\u7D22\u5F15\uFF0C\u522B\u540D\u624D\u662F\uFF0C\u8FD9\u4E2A\u7D22\u5F15\u53EA\u662F\u4E3A\u4E86\u6EDA\u52A8\u6240\u9700\u3002\u6CE8\u610F\u547D\u540D\u8981\u6C42\u3002</p><p>\u56E0\u4E3A\u522B\u540D\u662F\u5339\u914D\u7684\uFF0C\u56E0\u6B64\u4F1A\u81EA\u52A8\u5E94\u7528\u4E0A\u524D\u8FB9\u521B\u5EFA\u7684\u7B56\u7565\uFF0C\u6B64\u65F6\u5199\u5165\u65B9\u6307\u5B9A\u7684\u7D22\u5F15\u540D\u4E3A <code>shop</code>\uFF0C\u5BF9\uFF0C\u5C31\u662F\u4E0A\u8FB9\u5B9A\u4E49\u7684\u7D22\u5F15\u522B\u540D\u3002</p><p>\u5728\u8FD9\u4E2A\u7D22\u5F15\u521B\u5EFA30\u5929\u4E4B\u540E\uFF0C\u5C31\u4F1A\u89E6\u53D1<code>rollover</code>\uFF0C\u5C06\u8001\u7684\u6570\u636E\u5B9A\u4E49\u5230<code>delete</code>\u9636\u6BB5\uFF0C\u7136\u540E\u65B0\u5EFA\u4E00\u4E2A\u7D22\u5F15\uFF0C\u540D\u5B57\u5E94\u8BE5\u4E3A\uFF1A<code>shop-000002</code>\uFF0C\u518D\u8FC730\u5929\u4E4B\u540E\uFF0C<code>shop-000002</code>\u4F1A\u8FDB\u5165delete\u9636\u6BB5\uFF0C\u5E76\u751F\u6210<code>shop-000003</code> \uFF0C\u7136\u540E <code>shop-1</code>\u4F1A\u88AB\u5220\u9664\uFF0C\u5982\u6B64\u5FAA\u73AF\u5F80\u590D\u4E0B\u53BB\u3002</p><p>\u4E4B\u524D\u88AB\u522B\u540D\u4EE5\u53CA\u7D22\u5F15\u7ED5\u6765\u7ED5\u53BB\uFF0C\u5FEB\u6574\u6655\u4E86\uFF0C\u76EE\u524D\u6765\u770B\uFF0C\u81F3\u5C11\u5F53\u524D\u8FD9\u79CD\u601D\u8DEF\u662F\u53EF\u884C\u53EF\u7528\u7684\u3002\u5982\u679C\u4F60\u6709\u66F4\u597D\u7684\u601D\u8DEF\uFF0C\u53EF\u4EE5\u5206\u4EAB\u4E00\u4E0B\u54E6\u3002</p><h2 id="_4-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_4-\u53C2\u8003" aria-hidden="true">#</a> 4\uFF0C\u53C2\u8003</h2><ul><li>https://elasticsearch.cn/article/6358</li></ul>`,52);function e(o,t){return p}var r=s(a,[["render",e]]);export{r as default};
