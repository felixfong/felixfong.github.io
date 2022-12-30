import{e as s}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<p>\u4EE5\u5F80\u90FD\u662F\u7EB8\u4E0A\u8C08\u5175\uFF0C\u6BD5\u7ADF\u4E8B\u60C5\u4E5F\u90FD\u7531\u90E8\u95E8\u5176\u4ED6\u5C0F\u4F19\u4F34\u627F\u62C5\u4E86\uFF0C\u56E0\u6B64\u81EA\u5DF1\u867D\u7136\u4E5F\u6574\u7406\u4E86\u7B14\u8BB0\uFF0C\u5F53\u771F\u7684\u9700\u8981\u90E8\u7F72\u8D77\u6765\u7684\u65F6\u5019\uFF0C\u5374\u53D1\u73B0\u5E76\u6CA1\u6709\u8FD9\u4E2A\u80FD\u529B\uFF0C\u8FD9\u6B21\u4E5F\u51E0\u7ECF\u78E8\u96BE\uFF0C\u603B\u7B97\u4FEE\u6210\u6B63\u679C\uFF0C\u7279\u6B64\u8BB0\u5F55\u4E00\u4E0B\u3002</p><p>\u9996\u5148\u6765\u5FEB\u901F\u5C06\u4E00\u4E2A\u7B80\u6613\u7684\u73AF\u5883\u90E8\u7F72\u8D77\u6765\u3002 \u5176\u4E2D\u9632\u706B\u5899\u5173\u95ED\uFF0Cselinux\u5173\u95ED\u7B49\u7684\u5C31\u4E0D\u591A\u8BF4\u4E86\uFF0C\u7CFB\u7EDF\u662FCentOS-7.3\uFF0C\u5E72\u51C0\u800C\u4E14\u521D\u59CB\u5316\u8FC7\u4E86\u7684\u73AF\u5883\u3002</p><h3 id="_1-\u51C6\u5907\u5DE5\u4F5C\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u51C6\u5907\u5DE5\u4F5C\u3002" aria-hidden="true">#</a> 1\uFF0C\u51C6\u5907\u5DE5\u4F5C\u3002</h3><ul><li>\u5B89\u88C5\u4E00\u4E9B\u4F9D\u8D56\u5305\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> lrzsz <span class="token function">vim</span> <span class="token function">curl</span> <span class="token function">wget</span> java ntpdate <span class="token operator">&amp;&amp;</span> ntpdate -u cn.pool.ntp.org
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CCjava\u73AF\u5883\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u5982\u679C\u4E0D\u901A\u8FC7yum\u5B89\u88C5\uFF0C\u6E90\u7801\u65B9\u5F0F\u4E5F\u662F\u53EF\u4EE5\u7684\u3002\u4F46\u8981\u6CE8\u610F\u914D\u7F6E\u597D\u73AF\u5883\u53D8\u91CF\u3002</p><ul><li>\u914D\u7F6Eyum\u6E90\u3002</li></ul><p>\u6DFB\u52A0\u6E90\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/elk.repo <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[elasticsearch-6.x]
name=Elasticsearch repository for 6.x packages
baseurl=https://artifacts.elastic.co/packages/6.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5BFC\u5165key\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>\u5982\u679C\u6267\u884C\u8FD9\u4E00\u6B65\u62A5\u9519\uFF0C\u5219\u6709\u53EF\u80FD\u662F\u4E3B\u673A\u65F6\u95F4\u95EE\u9898\uFF0C\u53EF\u4EE5\u540C\u6B65\u4E00\u4E0B\u4E3B\u673A\u65F6\u95F4\uFF0C\u518D\u6267\u884C\uFF01</code></p><blockquote><p>\u6CE8\uFF1A\u4E00\u5F00\u59CB\u6211\u60F3\u7740\u628Aelk\u4E09\u4E2A\u5B89\u88C5\u5305\u90FD\u7F13\u5B58\u4E0B\u6765\uFF0C\u8FD9\u6837\u4EE5\u540E\u5B89\u88C5\u8D77\u6765\u5C31\u4F1A\u65B9\u4FBF\u591A\u4E86\uFF0C\u4E8E\u662F\u6211\u8FD9\u4E48\u505A\u4E86\uFF0C\u4F46\u662F\u540E\u6765\u53D1\u73B0\uFF0C\u7ECF\u8FC7\u7F13\u5B58\u7684\u5305\u5B89\u88C5\u7684elk\u96C6\u7FA4\uFF0C\u4F7F\u7528\u7684\u65F6\u5019\u662F\u4E00\u79CD\u6CA1\u6709\u6388\u6743\u7684\u72B6\u6001\uFF0C\u540E\u6765\u60F3\u8D77\u6B63\u5E38\u5B89\u88C5\u65F6\u6709\u8FD9\u6837\u4E00\u4E2A\u5BFC\u5165key\u7684\u64CD\u4F5C\uFF0C\u601D\u6765\u60F3\u53BB\uFF0C\u5927\u6982\u5C31\u662F\u8DDF\u8FD9\u4E00\u6B65\u6709\u5173\u7CFB\u4E86\u3002\u6700\u540E\u8FD8\u662F\u8001\u8001\u5B9E\u5B9E\u7684\u901A\u8FC7\u8FD9\u6837\u4E00\u4E2A\u6D41\u7A0B\u65B9\u5F0F\u8FDB\u884C\u5B89\u88C5\u4E86\u3002</p></blockquote><h3 id="_2-\u5B89\u88C5elasticsearch\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5elasticsearch\u3002" aria-hidden="true">#</a> 2\uFF0C\u5B89\u88C5elasticsearch\u3002</h3><p>\u76F4\u63A5yum\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> elasticsearch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u542F\u52A8\u670D\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> elasticsearch.service
systemctl start elasticsearch.service
systemctl status elasticsearch.service
<span class="token function">curl</span> localhost:9200
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8C03\u6574\u4E00\u4E0B\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@elk ~<span class="token punctuation">]</span><span class="token variable">$egrep</span> -v <span class="token string">&quot;^#|^$&quot;</span> /etc/elasticsearch/elasticsearch.yml
cluster.name: my-application
node.name: node-1
path.data: /logs/elasticsearch6
path.logs: /logs/elasticsearch6/log
network.host: <span class="token number">0.0</span>.0.0
http.port: <span class="token number">9200</span>
discovery.zen.ping.unicast.hosts: <span class="token punctuation">[</span><span class="token string">&quot;elk-node1&quot;</span><span class="token punctuation">]</span>
discovery.zen.minimum_master_nodes: <span class="token number">1</span>
xpack.security.enabled: <span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><code>cluster.name</code>\uFF1A\u81EA\u5B9A\u4E49\u96C6\u7FA4\u540D\uFF0C\u76F8\u540C\u96C6\u7FA4\u5185\u7684\u8282\u70B9\u8BBE\u7F6E\u76F8\u540C\u7684\u96C6\u7FA4\u540D</li><li><code>node.name</code>\uFF1A\u81EA\u5B9A\u4E49\u8282\u70B9\u540D\uFF0C\u5EFA\u8BAE\u7EDF\u4E00\u91C7\u7528\u8282\u70B9hostname</li><li><code>path.data</code>\uFF1Adata\u5B58\u50A8\u8DEF\u5F84\uFF0C\u8FD9\u91CC\u66F4\u6539\u6210\u81EA\u5B9A\u4E49\u4EE5\u5E94\u5BF9\u65E5\u5FD7\u7684big\u3002</li><li><code>path.logs</code>\uFF1Alog\u5B58\u50A8\u8DEF\u5F84\uFF0C\u662F\u4E3Aes\u81EA\u5DF1\u7684\u65E5\u5FD7\u3002</li><li>\u6CE8\u610F\u521B\u5EFA\u4E0A\u8FB9\u4E24\u9879\u5B9A\u4E49\u7684\u4E24\u4E2A\u6587\u4EF6\u76EE\u5F55\u3002\u5426\u5219\u4F1A\u542F\u52A8\u5931\u8D25\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /logs/elasticsearch6/log
<span class="token builtin class-name">cd</span> /logs
<span class="token function">chown</span> -R elasticsearch.elasticsearch elasticsearch6/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u6CE8\u610F\u8981\u66F4\u6539\u5BF9\u5E94\u76EE\u5F55\u7684\u6743\u9650\uFF0C\u5426\u5219es\u542F\u52A8\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@elk logs<span class="token punctuation">]</span><span class="token variable">$systemctl</span> status elasticsearch
\u25CF elasticsearch.service - Elasticsearch
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/elasticsearch.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: failed <span class="token punctuation">(</span>Result: exit-code<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-12-14 <span class="token number">15</span>:12:48 CST<span class="token punctuation">;</span> 5min ago
     Docs: http://www.elastic.co
  Process: <span class="token number">79428</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/share/elasticsearch/bin/elasticsearch -p <span class="token variable">\${PID_DIR}</span>/elasticsearch.pid --quiet <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">1</span>/FAILURE<span class="token punctuation">)</span>
 Main PID: <span class="token number">79428</span> <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">1</span>/FAILURE<span class="token punctuation">)</span>
Dec <span class="token number">14</span> <span class="token number">15</span>:12:48 elk elasticsearch<span class="token punctuation">[</span><span class="token number">79428</span><span class="token punctuation">]</span>: <span class="token number">2018</span>-12-14 <span class="token number">15</span>:12:48,084 main ERROR Null object returned <span class="token keyword">for</span> <span class="token for-or-select variable">RollingFile</span> <span class="token keyword">in</span> Appenders.
Dec <span class="token number">14</span> <span class="token number">15</span>:12:48 elk elasticsearch<span class="token punctuation">[</span><span class="token number">79428</span><span class="token punctuation">]</span>: <span class="token number">2018</span>-12-14 <span class="token number">15</span>:12:48,084 main ERROR Unable to <span class="token function">locate</span> appender <span class="token string">&quot;rolling&quot;</span> <span class="token keyword">for</span> logger config <span class="token string">&quot;root&quot;</span>
Dec <span class="token number">14</span> <span class="token number">15</span>:12:48 elk elasticsearch<span class="token punctuation">[</span><span class="token number">79428</span><span class="token punctuation">]</span>: <span class="token number">2018</span>-12-14 <span class="token number">15</span>:12:48,084 main ERROR Unable to <span class="token function">locate</span> appender <span class="token string">&quot;index_indexing_slowlog_rolling&quot;</span> <span class="token keyword">for</span> logger config <span class="token string">&quot;index.indexing.slowlog.index&quot;</span>
Dec <span class="token number">14</span> <span class="token number">15</span>:12:48 elk elasticsearch<span class="token punctuation">[</span><span class="token number">79428</span><span class="token punctuation">]</span>: <span class="token number">2018</span>-12-14 <span class="token number">15</span>:12:48,084 main ERROR Unable to <span class="token function">locate</span> appender <span class="token string">&quot;audit_rolling&quot;</span> <span class="token keyword">for</span> logger config <span class="token string">&quot;org.elasticsearch.xpack.security....gAuditTrail&quot;</span>
Dec <span class="token number">14</span> <span class="token number">15</span>:12:48 elk elasticsearch<span class="token punctuation">[</span><span class="token number">79428</span><span class="token punctuation">]</span>: <span class="token number">2018</span>-12-14 <span class="token number">15</span>:12:48,084 main ERROR Unable to <span class="token function">locate</span> appender <span class="token string">&quot;index_search_slowlog_rolling&quot;</span> <span class="token keyword">for</span> logger config <span class="token string">&quot;index.search.slowlog&quot;</span>
Dec <span class="token number">14</span> <span class="token number">15</span>:12:48 elk elasticsearch<span class="token punctuation">[</span><span class="token number">79428</span><span class="token punctuation">]</span>: <span class="token number">2018</span>-12-14 <span class="token number">15</span>:12:48,084 main ERROR Unable to <span class="token function">locate</span> appender <span class="token string">&quot;deprecated_audit_rolling&quot;</span> <span class="token keyword">for</span> logger config <span class="token string">&quot;org.elasticsearch.xpac...gAuditTrail&quot;</span>
Dec <span class="token number">14</span> <span class="token number">15</span>:12:48 elk elasticsearch<span class="token punctuation">[</span><span class="token number">79428</span><span class="token punctuation">]</span>: <span class="token number">2018</span>-12-14 <span class="token number">15</span>:12:48,085 main ERROR Unable to <span class="token function">locate</span> appender <span class="token string">&quot;deprecation_rolling&quot;</span> <span class="token keyword">for</span> logger config <span class="token string">&quot;org.elasticsearch.deprecation&quot;</span>
Dec <span class="token number">14</span> <span class="token number">15</span>:12:48 elk systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: elasticsearch.service: main process exited, <span class="token assign-left variable">code</span><span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">1</span>/FAILURE
Dec <span class="token number">14</span> <span class="token number">15</span>:12:48 elk systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Unit elasticsearch.service entered failed state.
Dec <span class="token number">14</span> <span class="token number">15</span>:12:48 elk systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: elasticsearch.service failed.
Hint: Some lines were ellipsized, use -l to show <span class="token keyword">in</span> full.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li><code>network.host</code>\uFF1Aes\u76D1\u542C\u5730\u5740\uFF0C\u91C7\u7528<code>&quot;0.0.0.0&quot;</code>\uFF0C\u8868\u793A\u5141\u8BB8\u6240\u6709\u8BBE\u5907\u8BBF\u95EE\u3002</li><li><code>http.port</code>\uFF1Aes\u76D1\u542C\u7AEF\u53E3\uFF0C\u53EF\u4E0D\u53D6\u6D88\u6CE8\u91CA\uFF0C\u9ED8\u8BA4\u5373\u6B64\u7AEF\u53E3\u3002</li><li><code>discovery.zen.ping.unicast.hosts</code>\uFF1A\u96C6\u7FA4\u8282\u70B9\u53D1\u73B0\u5217\u8868\uFF0C\u4E5F\u53EF\u91C7\u7528ip\u7684\u5F62\u5F0F</li><li><code>discovery.zen.minimum_master_nodes</code>\uFF1A\u5982\u679C\u6682\u65F6\u662F\u5355\u8282\u70B9\u90E8\u7F72\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u62101</li><li><code>xpack.security.enabled</code>\uFF1A\u6DFB\u52A0\u8FD9\u6761\uFF0C\u8FD9\u6761\u662F\u914D\u7F6Ekibana\u7684\u5B89\u5168\u673A\u5236\uFF0C\u6682\u65F6\u5173\u95ED\u3002</li></ul><p>\u91CD\u542Fes\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart elasticsearch.service
systemctl status elasticsearch.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-\u5B89\u88C5logstash\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5logstash\u3002" aria-hidden="true">#</a> 3\uFF0C\u5B89\u88C5logstash\u3002</h3><p>\u76F4\u63A5yum\u5B89\u88C5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install logstash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6Elogstash\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@elk ~<span class="token punctuation">]</span><span class="token variable">$egrep</span> -v <span class="token string">&quot;^#|^$&quot;</span> /etc/logstash/logstash.yml
path.data: /var/lib/logstash
path.config: /etc/logstash/conf.d
path.logs: /var/log/logstash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u4E2A\u5730\u65B9\u91CD\u8981\u7684\u662F\u7B2C\u4E8C\u6761\u914D\u7F6E\uFF0C\u540C\u8BB8\u591A\u5E94\u7528\u7C7B\u4F3C\u7684\uFF0C\u8FD9\u91CC\u5B9A\u4E49\u4E86\u4E00\u4E2Ainclude\u7684\u76EE\u5F55\uFF0C\u4EE5\u540E\u6211\u4EEC\u7684\u591A\u4E2A\u5E94\u7528\u5B9E\u4F8B\u5C31\u53EF\u4EE5\u76F4\u63A5\u653E\u7F6E\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u4E86\uFF0C\u8FD9\u91CC\u4F5C\u4E3A\u4E86\u89E3\uFF0C\u540E\u8FB9\u5E76\u4E0D\u4F1A\u5E94\u7528\u914D\u7F6E\u597D\u7684logstash\uFF0C\u539F\u56E0\u5728\u540E\u8FB9\u4F1A\u8BF4\u3002</p><p>\u7136\u540E\u5B9A\u4E49\u6B64logstash\u4E0D\u518D\u4F7F\u7528\u7CFB\u7EDF\u7BA1\u7406\u542F\u52A8\uFF0C\u800C\u662F\u4EE5\u540E\u901A\u8FC7\u547D\u4EE4\u884C\u6765\u8D77\u5BF9\u5E94\u7684logstash\u5B9E\u4F8B\u3002 \u540C\u65F6\u521B\u5EFA\u8F6F\u94FE\u63A5\uFF0C\u4ECE\u800C\u8BA9\u7CFB\u7EDF\u80FD\u591F\u5728<code>/usr/share/logstash</code>\u4E0B\u8BFB\u53D6\u5230\u76F8\u5BF9\u5E94\u7684logstash\u914D\u7F6E\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl disable logstash.service
<span class="token function">ln</span> -s /etc/logstash /usr/share/logstash/config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540Elogstash\u5148\u653E\u5728\u8FD9\u91CC\uFF0C\u4E0D\u7528\u542F\u52A8\uFF0C\u5BF9\u5E94\u7684\u65E5\u5FD7\u7B49\u64CD\u4F5C\uFF0C\u540E\u8FB9\u5C31\u4F1A\u4ECB\u7ECD\u4E86\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/4ac1da02927396a9.jpg" alt=""></p><h3 id="_4-\u5B89\u88C5kibana" tabindex="-1"><a class="header-anchor" href="#_4-\u5B89\u88C5kibana" aria-hidden="true">#</a> 4\uFF0C\u5B89\u88C5kibana</h3><p>\u76F4\u63A5yum\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> kibana
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6Ekibana\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@elk ~<span class="token punctuation">]</span><span class="token variable">$egrep</span> -v <span class="token string">&quot;^#|^$&quot;</span> /etc/kibana/kibana.yml
server.port: <span class="token number">5601</span>
server.host: <span class="token string">&quot;0.0.0.0&quot;</span>
elasticsearch.url: <span class="token string">&quot;http://10.100.120.82:9200&quot;</span>
kibana.index: <span class="token string">&quot;.newkibana&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><code>kibana.index</code>\uFF1A\u539F\u6765\u9ED8\u8BA4\u662F<code>&quot;.kibana&quot;</code>\uFF0C\u4F46\u662F\u65B0\u7248\u672C\u7684kibana\u542F\u52A8\u4E4B\u540E\u53D1\u73B0\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u8BBF\u95EE\u4E4B\u540E\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38\uFF1A<code>kibana server is not ready yet</code>\uFF0C\u90A3\u4E48\u56DE\u6765\u628A\u914D\u7F6E\u66F4\u6539\u6210<code>&quot;.newkibana&quot;</code>\uFF0C\u7136\u540E\u91CD\u542Fkibana\uFF0C\u518D\u6B21\u8BBF\u95EE\uFF0C\u5373\u53EF\u6210\u529F\u3002</li></ul><p>\u53E6\u5916\uFF1A\u914D\u7F6E\u53D1\u73B0\uFF0C\u5F53\u6211\u628A\u4E0A\u8FB9\u914D\u7F6E\u5199\u5165kibana\uFF0C\u7136\u540E\u542F\u52A8\uFF0C\u770B\u72B6\u6001\u662F\u6B63\u5E38\u7684\uFF0C\u4F46\u662F\u8BBF\u95EE\u8D77\u6765\u603B\u662F\u4F1A\u62A5 <code>Kibana server is not ready yet</code>\uFF0C\u8FD9\u4F3C\u4E4E\u662F\u4E00\u4E2A\u7ECF\u5178\u7684\u9519\u8BEF\uFF0C\u5374\u53C8\u8BA9\u4EBA\u65E0\u4ECE\u4E0B\u624B\u89E3\u51B3\u3002\u7ECF\u8FC7\u6211\u7684\u4E00\u4E9B\u6D4B\u8BD5\uFF0C\u83B7\u5F97\u4EE5\u5C0F\u7ECF\u9A8C\u3002</p><p>\u90A3\u5C31\u662F\uFF0C\u6B64\u5904\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u628A\u539F\u6765\u914D\u7F6E\u5185\u5BB9\u6E05\u7A7A\uFF0C\u7136\u540E\u6DFB\u52A0\u5F53\u524D\u5185\u5BB9\u7684\u65B9\u5F0F\uFF0C\u5C3D\u7BA1\u5728\u4E0A\u8FB9\u914D\u7F6Eelasticsearch\u4EE5\u53CAlogstash\u7684\u65F6\u5019\uFF0C\u90FD\u8FD9\u4E48\u505A\u4E86\uFF0C\u4E24\u4E2A\u5E94\u7528\u90FD\u6CA1\u6709\u53D1\u751F\u4EC0\u4E48\u5947\u602A\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u8FD9\u5728kibana\u8FD9\u91CC\uFF0C\u4F3C\u4E4E\u662F\u4E0D\u53EF\u884C\u7684\uFF0C\u4E8E\u662F\u5982\u679C\u5DF2\u7ECF\u9677\u5165\u4E0A\u8FB9\u90A3\u4E2A\u62A5\u9519\u4E4B\u4E2D\u4E86\uFF0C\u90A3\u4E48\u6211\u7684\u5EFA\u8BAE\u662F\u9996\u5148\u628A\u5F53\u524Dkibana\u5378\u8F7D\uFF0C\u7136\u540E\u91CD\u65B0\u5B89\u88C5\uFF0C\u63A5\u7740\u5728\u539F\u6709\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u6BD4\u7167\u7740\u4E0A\u8FB9\u7684\u56DB\u9879\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u66F4\u6539\u5373\u53EF\uFF0C\u914D\u7F6E\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u542F\u52A8kibana\uFF0C\u7B49\u4E2A\u4E24\u4E09\u5206\u949F\u4E4B\u540E\u518D\u8BBF\u95EE\u4F1A\u53D1\u73B0\uFF0C\u95EE\u9898\u5C31\u795E\u5947\u7684\u6D88\u5931\u4E86\u3002</p><p>\u542F\u52A8kibana\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> kibana.service
systemctl restart kibana
systemctl status  kibana
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5230\u8FD9\u513F\uFF0C\u57FA\u672C\u4E0A\uFF0C\u4F5C\u4E3A\u5355\u53F0\u7684elk\u4E3B\u673A\u4E0A\u7684\u5DE5\u4F5C\u57FA\u672C\u4E0A\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u53EF\u4EE5\u8BF4\u975E\u5E38\u7B80\u5355\uFF0C\u800C\uFF0C\u620F\uFF0C\u4E5F\u4ECE\u6B64\u521A\u521A\u5F00\u59CB\u800C\u5DF2\u3002</p>`,48);function l(p,t){return e}var r=n(a,[["render",l]]);export{r as default};