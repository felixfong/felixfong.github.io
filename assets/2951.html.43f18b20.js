import{r,o as l,c as o,b as e,a as i,F as p,e as s,d as a}from"./app.dbf5d933.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const t={},d=s(`<h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1\uFF0C\u7B80\u4ECB</h2><p>Kafka \u662F\u4E00\u79CD\u9AD8\u541E\u5410\u7684\u5206\u5E03\u5F0F\u53D1\u5E03\u8BA2\u9605\u6D88\u606F\u7CFB\u7EDF\uFF0C\u80FD\u591F\u66FF\u4EE3\u4F20\u7EDF\u7684\u6D88\u606F\u961F\u5217\u7528\u4E8E\u89E3\u8026\u5408\u6570\u636E\u5904\u7406\uFF0C\u7F13\u5B58\u672A\u5904\u7406\u6D88\u606F\u7B49\uFF0C\u540C\u65F6\u5177\u6709\u66F4\u9AD8\u7684\u541E\u5410\u7387\uFF0C\u652F\u6301\u5206\u533A\u3001\u591A\u526F\u672C\u3001\u5197\u4F59\uFF0C\u56E0\u6B64\u88AB\u5E7F\u6CDB\u7528\u4E8E\u5927\u89C4\u6A21\u6D88\u606F\u6570\u636E\u5904\u7406\u5E94\u7528\u3002Kafka \u652F\u6301 Java \u53CA\u591A\u79CD\u5176\u5B83\u8BED\u8A00\u5BA2\u6237\u7AEF\uFF0C\u53EF\u4E0E Hadoop\u3001Storm\u3001Spark \u7B49\u5176\u5B83\u5927\u6570\u636E\u5DE5\u5177\u7ED3\u5408\u4F7F\u7528\u3002</p><h2 id="_2-\u4E0B\u8F7D-kafka" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0B\u8F7D-kafka" aria-hidden="true">#</a> 2\uFF0C\u4E0B\u8F7D kafka</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://mirrors.cnnic.cn/apache/kafka/0.11.0.2/kafka_2.11-0.11.0.2.tgz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_3-\u5B89\u88C5-jdk" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5-jdk" aria-hidden="true">#</a> 3\uFF0C\u5B89\u88C5 JDK</h2><p>Kafka \u4F7F\u7528 Zookeeper \u6765\u4FDD\u5B58\u76F8\u5173\u914D\u7F6E\u4FE1\u606F\uFF0CKafka \u53CA Zookeeper \u4F9D\u8D56 Java \u8FD0\u884C\u73AF\u5883\u3002</p><p>\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u5B89\u88C5\uFF1A<code>curl 192.168.1.1/a | sh</code>\u3002</p>`,7),h=a("\u6B64\u79CD\u5B89\u88C5\u65B9\u5F0F\u53EF\u4EE5"),b={href:"https://github.com/eryajf/magic-of-sysuse-scripts",target:"_blank",rel:"noopener noreferrer"},u=a("\u53C2\u8003\u8FD9\u91CC"),k=a("\u3002"),m=s(`<h2 id="_4-\u5B89\u88C5-kafka" tabindex="-1"><a class="header-anchor" href="#_4-\u5B89\u88C5-kafka" aria-hidden="true">#</a> 4\uFF0C\u5B89\u88C5 Kafka</h2><p>\u4ECE\u5B98\u7F51\u4E0B\u8F7D Kafka \u5B89\u88C5\u5305\uFF0C\u89E3\u538B\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -xf kafka_2.11-0.11.0.2.tgz     
<span class="token function">mv</span> kafka_2.11-0.11.0.2 /usr/local/kafka
<span class="token builtin class-name">cd</span> kafka
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-\u542F\u52A8-kafka" tabindex="-1"><a class="header-anchor" href="#_1-\u542F\u52A8-kafka" aria-hidden="true">#</a> 1\uFF0C\u542F\u52A8 kafka</h3><ul><li><p>1\uFF0C\u542F\u52A8 zookeeper\u3002</p><p>\u4F7F\u7528\u5B89\u88C5\u5305\u4E2D\u7684\u811A\u672C\u542F\u52A8\u5355\u8282\u70B9 Zookeeper \u5B9E\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/zookeeper-server-start.sh -daemon  config/zookeeper.properties
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><p>\u770B\u5176\u4ED6\u6559\u7A0B\u8BF4\u8FD9\u4E2A\u5730\u65B9\u4F1A\u6709\u4E00\u4E9B\u6807\u51C6\u8F93\u51FA\uFF0C\u4F46\u662F\u6211\u5728\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\u5E76\u6CA1\u6709\u5C06\u89C1\u5230\u6709\u4EC0\u4E48\u8F93\u51FA\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/d39b754dd3ede32f.jpg" alt="image"></p><p>\u6839\u636E\u662F\u5426\u51FA\u73B0\u7EA2\u6846\u5185 QuorumPeerMain\uFF0C\u9A8C\u8BC1\u542F\u52A8\u662F\u5426\u6210\u529F\u3002</p><ul><li><p>2\uFF0C\u542F\u52A8 kafka \u670D\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/kafka-server-start.sh -daemon config/server.properties
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u52A1\u5FC5\u5C06\u8FDB\u7A0B\u653E\u5165\u540E\u53F0\u6267\u884C\uFF0C\u5426\u5219\u4F1A\u4E00\u76F4\u505C\u5728\u4E00\u4E2A\u754C\u9762\u4E4B\u4E2D\u3002</p></li></ul><h3 id="_2-\u529F\u80FD\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_2-\u529F\u80FD\u9A8C\u8BC1" aria-hidden="true">#</a> 2\uFF0C\u529F\u80FD\u9A8C\u8BC1</h3><ul><li><p>1\uFF0C\u521B\u5EFA topic</p><p>\u4F7F\u7528 kafka-topics.sh \u521B\u5EFA\u5355\u5206\u533A\u5355\u526F\u672C\u7684 topic test\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor <span class="token number">1</span> --partitions <span class="token number">1</span> --topic <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>2\uFF0C\u67E5\u770B topic\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/kafka-topics.sh --list --zookeeper localhost:2181
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u8F93\u51FA\u4E00\u4E2A test \u8BF4\u660E\u6B63\u5E38\u3002</p></li><li><p>3\uFF0C\u4EA7\u751F\u6D88\u606F</p><p>\u4F7F\u7528 kafka-console-producer.sh \u53D1\u9001\u6D88\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/kafka-console-producer.sh --broker-list localhost:9092 --topic <span class="token builtin class-name">test</span> 
Hello world\uFF01
Hello Kafka\uFF01
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>4\uFF0C\u6D88\u8D39\u6D88\u606F</p><p>\u4F7F\u7528 kafka-console-consumer.sh \u63A5\u6536\u6D88\u606F\u5E76\u5728\u7EC8\u7AEF\u6253\u5370\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic <span class="token builtin class-name">test</span> --from-beginning
 Hello world<span class="token operator">!</span>
 Hello Kafka<span class="token operator">!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul>`,11);function f(g,_){const n=r("ExternalLinkIcon");return l(),o(p,null,[d,e("p",null,[h,e("a",b,[u,i(n)]),k]),m],64)}var K=c(t,[["render",f]]);export{K as default};
