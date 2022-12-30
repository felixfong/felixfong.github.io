import{r as e,o as p,c as l,b as s,a as t,F as r,e as c,d as n}from"./app.dbf5d933.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=c(`<p>\u5F53\u65E5\u5FD7\u91CF\u8DB3\u591F\u5927\u7684\u65F6\u5019\uFF0C\u5C31\u6709\u5FC5\u8981\u4F7F\u7528kafka\u4E86\uFF0C\u8FD9\u91CC\u7B80\u5355\u8BB0\u5F55\u4E00\u4E0B\u6574\u4E2A\u6D41\u7A0B\u3002</p><p>\u6D41\u7A0B\u7B80\u5355\u5982\u4E0B\uFF1A</p><p><code>filebeat</code>--&gt; <code>kafka</code>--&gt; <code>logstash</code>--&gt; <code>elasticsearch</code>--&gt; <code>kiabana</code>\u3002</p><p>\u7248\u672C\u5982\u4E0B\uFF1A</p><ul><li>filebeat\uFF1A6.5.4</li><li>zookeeper-3.4.10</li><li>kafka\uFF1Akafka_2.12-2.0.0</li><li>logstash\uFF1A6.5.4</li><li><code>elasticsearch</code>\uFF1A6.5.4</li><li><code>kiabana</code>\uFF1A6.5.4</li></ul><p>\u770B\u4E0A\u53BB\u5E94\u8BE5\u5148\u90E8\u7F72filebeat\uFF0C\u8FD9\u91CC\u56E0\u4E3A\u719F\u6089\u4E86\u6BCF\u4E2A\u9636\u6BB5\u7EC4\u4EF6\u6240\u8D1F\u8D23\u7684\u5185\u5BB9\uFF0C\u56E0\u6B64\u53EF\u4EE5\u6839\u636E\u4F9D\u8D56\u987A\u5E8F\uFF0C\u6765\u90E8\u7F72\u3002</p><h2 id="_1-\u51C6\u5907\u5DE5\u4F5C\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u51C6\u5907\u5DE5\u4F5C\u3002" aria-hidden="true">#</a> 1\uFF0C\u51C6\u5907\u5DE5\u4F5C\u3002</h2><ul><li>\u5B89\u88C5\u4E00\u4E9B\u4F9D\u8D56\u5305\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> lrzsz <span class="token function">vim</span> <span class="token function">curl</span> <span class="token function">wget</span> java ntpdate <span class="token operator">&amp;&amp;</span> ntpdate -u cn.pool.ntp.org
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u6DFB\u52A0hosts\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;10.3.0.41 elk-node1&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>\u5982\u679C\u6267\u884C\u8FD9\u4E00\u6B65\u62A5\u9519\uFF0C\u5219\u6709\u53EF\u80FD\u662F\u4E3B\u673A\u65F6\u95F4\u95EE\u9898\uFF0C\u53EF\u4EE5\u540C\u6B65\u4E00\u4E0B\u4E3B\u673A\u65F6\u95F4\uFF0C\u5728\u6267\u884C\uFF01</code></p><p><img src="http://t.eryajf.net/imgs/2021/09/7794f57d98155e44.jpg" alt=""></p><h2 id="_2-filebeat\u3002" tabindex="-1"><a class="header-anchor" href="#_2-filebeat\u3002" aria-hidden="true">#</a> 2\uFF0Cfilebeat\u3002</h2><p>\u5B89\u88C5\u5E94\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> filebeat-6.5.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7B80\u5355\u914D\u7F6E\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ cd /etc/filebeat
$ cat filebeat.yml

<span class="token key atrule">filebeat.config_dir</span><span class="token punctuation">:</span> /etc/filebeat/conf.d/
<span class="token key atrule">filebeat.shutdown_timeout</span><span class="token punctuation">:</span> 5s
<span class="token key atrule">fields_under_root</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">fields</span><span class="token punctuation">:</span>
  <span class="token key atrule">ip</span><span class="token punctuation">:</span> <span class="token string">&quot;10.3.2.12&quot;</span>
  <span class="token key atrule">groups</span><span class="token punctuation">:</span> nginx

<span class="token key atrule">output.kafka</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;10.3.0.41:9092&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">topic</span><span class="token punctuation">:</span> <span class="token string">&quot;%{[log_topic]}&quot;</span>
  <span class="token key atrule">worker</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">max_retries</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">bulk_max_size</span><span class="token punctuation">:</span> <span class="token number">2048</span>
  <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 30s
  <span class="token key atrule">broker_timeout</span><span class="token punctuation">:</span> 10s
  <span class="token key atrule">channel_buffer_size</span><span class="token punctuation">:</span> <span class="token number">256</span>
  <span class="token key atrule">keep_alive</span><span class="token punctuation">:</span> <span class="token number">30</span>
  <span class="token key atrule">compression</span><span class="token punctuation">:</span> gzip
  <span class="token key atrule">max_message_bytes</span><span class="token punctuation">:</span> <span class="token number">1000000</span>
  <span class="token key atrule">required_acks</span><span class="token punctuation">:</span> <span class="token number">1</span>

<span class="token key atrule">logging.level</span><span class="token punctuation">:</span> warning
<span class="token comment">#logging.level: debug</span>

<span class="token key atrule">filebeat.config.modules</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>path.config<span class="token punctuation">}</span>/modules.d/<span class="token important">*.yml</span>
  <span class="token key atrule">reload.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u6240\u6709\u91C7\u96C6\u65E5\u5FD7\u7684\u914D\u7F6E\u6587\u4EF6\u653E\u5728 <code>/etc/filebeat/conf.d/</code>\u76EE\u5F55\u4E0B\uFF0C\u8FD9\u91CC\u521B\u5EFA\u4E00\u4E2A\u91C7\u96C6NGINX\u65E5\u5FD7\u7684\u4E3A\u4F8B\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ mkdir conf.d

$ cat conf.d/nginx.yml
<span class="token key atrule">filebeat.inputs</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> log
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /data/log/tmp.log
  <span class="token key atrule">fields_under_root</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">json.keys_under_root</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">json.overwrite_keys</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">json.message_key</span><span class="token punctuation">:</span> message
  <span class="token key atrule">ignore_older</span><span class="token punctuation">:</span> 24h
  <span class="token key atrule">scan_frequency</span><span class="token punctuation">:</span> 10s
  <span class="token key atrule">clean_inactive</span><span class="token punctuation">:</span> 25h
  <span class="token key atrule">close_inactive</span><span class="token punctuation">:</span> 24h
  <span class="token key atrule">clean_removed</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">close_removed</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">close_renamed</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">tail_files</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> log
    <span class="token key atrule">log_topic</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>access
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u7136\u540E\u542F\u52A8\u5E94\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart filebeat
systemctl status filebeat
systemctl <span class="token builtin class-name">enable</span> filebeat
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-kafka\u3002" tabindex="-1"><a class="header-anchor" href="#_3-kafka\u3002" aria-hidden="true">#</a> 3\uFF0Ckafka\u3002</h2><p>\u8FD9\u91CC\u53EA\u662F\u6A21\u62DF\u6574\u4E2A\u94FE\u8DEF\uFF0C\u56E0\u6B64\u6CA1\u6709\u914D\u7F6E\u96C6\u7FA4\u3002</p><h3 id="_1-\u5B89\u88C5zookeeper\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5zookeeper\u3002" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5zookeeper\u3002</h3><p>\u9996\u5148\u5B89\u88C5\u914D\u7F6Ezookeeper\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> http://archive.apache.org/dist/zookeeper/zookeeper-3.4.10/zookeeper-3.4.10.tar.gz
<span class="token function">tar</span> xf zookeeper-3.4.10.tar.gz -C /usr/local
<span class="token builtin class-name">cd</span> /usr/local
<span class="token function">mv</span> zookeeper-3.4.10/ zookeeper
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u914D\u7F6Ezookeeper\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">egrep</span> -v <span class="token string">&quot;^$|^#&quot;</span> conf/zoo.cfg

<span class="token assign-left variable">tickTime</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token assign-left variable">initLimit</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">syncLimit</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/usr/local/zookeeper/data
<span class="token assign-left variable">dataLogDir</span><span class="token operator">=</span>/usr/local/zookeeper/logs
<span class="token assign-left variable">clientPort</span><span class="token operator">=</span><span class="token number">2181</span>
server.1<span class="token operator">=</span><span class="token number">127.0</span>.0.1:2888:3888
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u521B\u5EFA\u5BF9\u5E94\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span>  -p /usr/local/zookeeper/data
<span class="token function">mkdir</span> -p /usr/local/zookeeper/logs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6DFB\u52A0\u542F\u52A8\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /lib/systemd/system/zookeeper.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF

[Unit]
Description=zookeeper.service
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/zookeeper/bin/zkServer.sh start-foreground
PrivateTmp=true

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u542F\u52A8zookeeper\uFF0C\u5982\u679C\u524D\u8FB9\u7684java\u73AF\u5883\u662F\u6E90\u7801\u914D\u7F6E\u7684\uFF0C\u542F\u52A8\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u62A5\u9519\u8BEF\uFF1A<code>/usr/local/zookeeper/bin/zkServer.sh: line 170: exec: java: not found</code>\uFF0C\u628A <code>JAVA_HOME</code>\u6DFB\u52A0\u5230\u544A\u8B66\u63D0\u793A\u7684\u6587\u4EF6\u4E2D\u5373\u53EF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>JAVA_HOME=&quot;/usr/local/jdk1.8.0_192&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start zookeeper
systemctl status zookeeper
systemctl <span class="token builtin class-name">enable</span> zookeeper
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-\u5B89\u88C5kafka\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5kafka\u3002" aria-hidden="true">#</a> 2\uFF0C\u5B89\u88C5kafka\u3002</h3><p>\u7136\u540E\u5B89\u88C5kafka\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">wget</span> https://archive.apache.org/dist/kafka/2.0.0/kafka_2.12-2.0.0.tgz
$ <span class="token function">tar</span> xf kafka_2.12-2.0.0.tgz -C /usr/local
$ <span class="token builtin class-name">cd</span> /usr/local
$ <span class="token function">mv</span> kafka_2.12-2.0.0/ kafka
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8C03\u6574\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">egrep</span> -v <span class="token string">&quot;^$|^#&quot;</span> config/server.properties

broker.id<span class="token operator">=</span><span class="token number">0</span>
advertised.listeners<span class="token operator">=</span>PLAINTEXT://10.3.0.41:9092
num.network.threads<span class="token operator">=</span><span class="token number">3</span>
num.io.threads<span class="token operator">=</span><span class="token number">8</span>
socket.send.buffer.bytes<span class="token operator">=</span><span class="token number">102400</span>
socket.receive.buffer.bytes<span class="token operator">=</span><span class="token number">102400</span>
socket.request.max.bytes<span class="token operator">=</span><span class="token number">104857600</span>
log.dirs<span class="token operator">=</span>/usr/local/kafka/logs/kafka
num.partitions<span class="token operator">=</span><span class="token number">1</span>
num.recovery.threads.per.data.dir<span class="token operator">=</span><span class="token number">1</span>
offsets.topic.replication.factor<span class="token operator">=</span><span class="token number">1</span>
transaction.state.log.replication.factor<span class="token operator">=</span><span class="token number">1</span>
transaction.state.log.min.isr<span class="token operator">=</span><span class="token number">1</span>
log.retention.hours<span class="token operator">=</span><span class="token number">168</span>
log.segment.bytes<span class="token operator">=</span><span class="token number">1073741824</span>
log.retention.check.interval.ms<span class="token operator">=</span><span class="token number">300000</span>
zookeeper.connect<span class="token operator">=</span>localhost:2181
zookeeper.connection.timeout.ms<span class="token operator">=</span><span class="token number">6000</span>
group.initial.rebalance.delay.ms<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u521B\u5EFA\u65E5\u5FD7\u76EE\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /usr/local/kafka/logs/kafka
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u542F\u52A8\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /lib/systemd/system/kafka.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF

[Unit]
Description=kafka.service
After=network.target remote-fs.target zookeeper.service

[Service]
Type=simple
ExecStart=/usr/local/kafka/bin/kafka-server-start.sh /usr/local/kafka/config/server.properties

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u542F\u52A8\u670D\u52A1\uFF0C\u540C\u6837\uFF0C\u5982\u679C\u6E90\u7801\u5B89\u88C5\u7684java\u8FD8\u662F\u4F1A\u62A5\u4E00\u4E2A\u9519\u8BEF:<code>/usr/local/kafka/bin/kafka-run-class.sh: line 306: exec: java: not found</code>\uFF0C\u540C\u6837\u628A\u914D\u7F6E\u5199\u5165\u5230\u4E0A\u8FB9\u5185\u5BB9\u5373\u53EF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start kafka
systemctl status kafka
systemctl <span class="token builtin class-name">enable</span> kafka
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7B80\u5355\u9A8C\u8BC1\uFF1A</p><p>\u67E5\u770Btopic\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> list.sh
bin/kafka-topics.sh --list --zookeeper localhost:2181

$ <span class="token function">chmod</span> +x list.sh

$ ./list.sh
--from-beginning
__consumer_offsets
nginx-access
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u67E5\u770Btopic\u7684\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> topic.sh
bin/kafka-console-consumer.sh --bootstrap-server  localhost:9092 --topic <span class="token variable">$1</span>  --from-beginning

$ <span class="token function">chmod</span> +x topic.sh

$ ./topic.sh nginx-access  <span class="token comment">#\u5373\u53EF\u770B\u5230\u5BF9\u5E94topic\u7684\u5185\u5BB9</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4-logstash\u3002" tabindex="-1"><a class="header-anchor" href="#_4-logstash\u3002" aria-hidden="true">#</a> 4\uFF0Clogstash\u3002</h2><p>\u5B89\u88C5\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> logstash-6.5.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/logstash/logstash.yml

pipeline.workers: <span class="token number">2</span>
pipeline.output.workers: <span class="token number">2</span>
<span class="token comment">#\u6BCF\u6B21\u53D1\u9001\u7684\u4E8B\u4EF6\u6570</span>
pipeline.batch.size: <span class="token number">800</span>

http.host: <span class="token string">&quot;0.0.0.0&quot;</span>
log.level: warn
path.logs: /var/log/logstash
xpack.monitoring.enabled: <span class="token boolean">true</span>
xpack.monitoring.elasticsearch.url: <span class="token punctuation">[</span><span class="token string">&quot;http://10.3.0.41:9200&quot;</span><span class="token punctuation">]</span>
xpack.monitoring.collection.interval: 10s
slowlog.threshold.warn: 2s
slowlog.threshold.info: 1s
slowlog.threshold.debug: 500ms
slowlog.threshold.trace: 100ms
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u6DFB\u52A0NGINX\u65E5\u5FD7\u914D\u7F6E\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ cat /etc/logstash/conf.d/nginx.yml

input <span class="token punctuation">{</span>
  kafka <span class="token punctuation">{</span>
      bootstrap_servers  =<span class="token punctuation">&gt;</span> &quot;10.3.0.41<span class="token punctuation">:</span>9092&quot;
      group_id          =<span class="token punctuation">&gt;</span> &quot;nginx&quot;
      consumer_threads =<span class="token punctuation">&gt;</span> 6
      topics            =<span class="token punctuation">&gt;</span> &quot;nginx<span class="token punctuation">-</span>access&quot;
      codec             =<span class="token punctuation">&gt;</span> &quot;json&quot;
      client_id =<span class="token punctuation">&gt;</span> &quot;nginx&quot;
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

filter <span class="token punctuation">{</span>
    geoip <span class="token punctuation">{</span>
        source =<span class="token punctuation">&gt;</span> &quot;remote_addr&quot;
        fields =<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;city_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;country_code2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;country_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;latitude&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;longitude&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;region_name&quot;</span><span class="token punctuation">]</span>
        remove_field =<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;[geoip][latitude]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;[geoip][longitude]&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    json <span class="token punctuation">{</span>
        source =<span class="token punctuation">&gt;</span> &quot;message&quot;
        target =<span class="token punctuation">&gt;</span> &quot;jsoncontent&quot;
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

output <span class="token punctuation">{</span>
   elasticsearch <span class="token punctuation">{</span>
      hosts =<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;http://10.3.0.41:9200&quot;</span><span class="token punctuation">]</span>
      index =<span class="token punctuation">&gt;</span> &quot;logstash<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>%<span class="token punctuation">{</span>+YYYY.MM<span class="token punctuation">}</span>&quot;
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u6DFB\u52A0\u4ECE\u7BA1\u9053\u5F15\u7528\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ cat /etc/logstash/pipelines.yml

<span class="token comment"># This file is where you define your pipelines. You can define multiple.</span>
<span class="token comment"># For more information on multiple pipelines, see the documentation:</span>
<span class="token comment">#   https://www.elastic.co/guide/en/logstash/current/multiple-pipelines.html</span>

<span class="token punctuation">-</span> <span class="token key atrule">pipeline.id</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">path.config</span><span class="token punctuation">:</span> <span class="token string">&quot;/etc/logstash/conf.d/nginx.yml&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u542F\u52A8\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start logstash
systemctl status logstash
systemctl <span class="token builtin class-name">enable</span> logstash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_5-elasticsearch\u3002" tabindex="-1"><a class="header-anchor" href="#_5-elasticsearch\u3002" aria-hidden="true">#</a> 5\uFF0Celasticsearch\u3002</h2><p>\u5B89\u88C5\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> elasticsearch-6.5.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/elasticsearch/elasticsearch.yml

cluster.name: my-application
node.name: node-1
path.data: /logs/elasticsearch6
path.logs: /logs/elasticsearch6/log
network.host: <span class="token number">0.0</span>.0.0
http.port: <span class="token number">9200</span>
discovery.zen.ping.unicast.hosts: <span class="token punctuation">[</span><span class="token string">&quot;elk-node1&quot;</span><span class="token punctuation">]</span>
discovery.zen.minimum_master_nodes: <span class="token number">1</span>
xpack.security.enabled: <span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u521B\u5EFA\u5BF9\u5E94\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /logs/elasticsearch6/log
<span class="token builtin class-name">cd</span> /logs
<span class="token function">chown</span> -R elasticsearch.elasticsearch elasticsearch6/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start elasticsearch
systemctl status elasticsearch
systemctl <span class="token builtin class-name">enable</span> elasticsearch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_6-kibana\u3002" tabindex="-1"><a class="header-anchor" href="#_6-kibana\u3002" aria-hidden="true">#</a> 6\uFF0Ckibana\u3002</h2><p>\u5B89\u88C5\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> kibana-6.5.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/kibana/kibana.yml

server.port: <span class="token number">5601</span>
server.host: <span class="token string">&quot;0.0.0.0&quot;</span>
elasticsearch.url: <span class="token string">&quot;http://10.3.0.41:9200&quot;</span>
kibana.index: <span class="token string">&quot;.kibana&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u914D\u7F6E\u53D1\u73B0\uFF0C\u5F53\u6211\u628A\u4E0A\u8FB9\u914D\u7F6E\u5199\u5165kibana\uFF0C\u7136\u540E\u542F\u52A8\uFF0C\u770B\u72B6\u6001\u662F\u6B63\u5E38\u7684\uFF0C\u4F46\u662F\u8BBF\u95EE\u8D77\u6765\u603B\u662F\u4F1A\u62A5 <code>Kibana server is not ready yet</code>\uFF0C\u8FD9\u4F3C\u4E4E\u662F\u4E00\u4E2A\u7ECF\u5178\u7684\u9519\u8BEF\uFF0C\u5374\u53C8\u8BA9\u4EBA\u65E0\u4ECE\u4E0B\u624B\u89E3\u51B3\u3002\u7ECF\u8FC7\u6211\u7684\u4E00\u4E9B\u6D4B\u8BD5\uFF0C\u83B7\u5F97\u4EE5\u5C0F\u7ECF\u9A8C\u3002</p><p>\u90A3\u5C31\u662F\uFF0C\u6B64\u5904\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u628A\u539F\u6765\u914D\u7F6E\u5185\u5BB9\u6E05\u7A7A\uFF0C\u7136\u540E\u6DFB\u52A0\u5F53\u524D\u5185\u5BB9\u7684\u65B9\u5F0F\uFF0C\u5C3D\u7BA1\u5728\u4E0A\u8FB9\u914D\u7F6Eelasticsearch\u4EE5\u53CAlogstash\u7684\u65F6\u5019\uFF0C\u90FD\u8FD9\u4E48\u505A\u4E86\uFF0C\u4E24\u4E2A\u5E94\u7528\u90FD\u6CA1\u6709\u53D1\u751F\u4EC0\u4E48\u5947\u602A\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u8FD9\u5728kibana\u8FD9\u91CC\uFF0C\u4F3C\u4E4E\u662F\u4E0D\u53EF\u884C\u7684\uFF0C\u4E8E\u662F\u5982\u679C\u5DF2\u7ECF\u9677\u5165\u4E0A\u8FB9\u90A3\u4E2A\u62A5\u9519\u4E4B\u4E2D\u4E86\uFF0C\u90A3\u4E48\u6211\u7684\u5EFA\u8BAE\u662F\u9996\u5148\u628A\u5F53\u524Dkibana\u5378\u8F7D\uFF0C\u7136\u540E\u91CD\u65B0\u5B89\u88C5\uFF0C\u63A5\u7740\u5728\u539F\u6709\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u6BD4\u7167\u7740\u4E0A\u8FB9\u7684\u56DB\u9879\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u66F4\u6539\u5373\u53EF\uFF0C\u914D\u7F6E\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u542F\u52A8kibana\uFF0C\u7B49\u4E2A\u4E24\u4E09\u5206\u949F\u4E4B\u540E\u518D\u8BBF\u95EE\u4F1A\u53D1\u73B0\uFF0C\u95EE\u9898\u5C31\u795E\u5947\u7684\u6D88\u5931\u4E86\u3002</p><p>\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start kibana
systemctl status kibana
systemctl <span class="token builtin class-name">enable</span> kibana
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7136\u540E\u6D4F\u89C8\u5668\u8BBF\u95EEkibana\uFF0C\u5C31\u80FD\u591F\u770B\u5230\u5BF9\u5E94\u7D22\u5F15\u4EE5\u53CA\u65E5\u5FD7\u4E86\u3002</p><h2 id="_7-\u4E24\u4E2A\u63D2\u4EF6\u3002" tabindex="-1"><a class="header-anchor" href="#_7-\u4E24\u4E2A\u63D2\u4EF6\u3002" aria-hidden="true">#</a> 7\uFF0C\u4E24\u4E2A\u63D2\u4EF6\u3002</h2><p>\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u4E24\u4E2A\u63D2\u4EF6\uFF0C\u4EE5\u4FBF\u4E8E\u65E5\u5E38\u7BA1\u7406\u4E0E\u7EF4\u62A4\uFF0C\u4E00\u4E2A\u662Fkafka\u7BA1\u7406\uFF0C\u4E00\u4E2Aes\u7684\u76D1\u63A7\u3002</p><p>\u7BA1\u7406\u7EC4\u4EF6\uFF0C\u76F4\u63A5\u901A\u8FC7docker\u6765\u90E8\u7F72\u3002</p><h3 id="_1-kafka-manager" tabindex="-1"><a class="header-anchor" href="#_1-kafka-manager" aria-hidden="true">#</a> 1\uFF0Ckafka-manager</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> docker-compose.yml
version: <span class="token string">&#39;2&#39;</span>
services:
  kafka-manager:
    image: sheepkiller/kafka-manager                <span class="token comment">## \u955C\u50CF\uFF1A\u5F00\u6E90\u7684web\u7BA1\u7406kafka\u96C6\u7FA4\u7684\u754C\u9762</span>
    environment:
        ZK_HOSTS: <span class="token number">10.3</span>.0.41                   <span class="token comment">## \u4FEE\u6539:\u5BBF\u4E3B\u673AIP</span>
    ports:
      - <span class="token string">&quot;9000:9000&quot;</span>                                 <span class="token comment">## \u66B4\u9732\u7AEF\u53E3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u542F\u52A8\u4E4B\u540E\u8BBF\u95EE\u5373\u53EF\u3002</p><h3 id="_2-es\u76D1\u63A7\u3002" tabindex="-1"><a class="header-anchor" href="#_2-es\u76D1\u63A7\u3002" aria-hidden="true">#</a> 2\uFF0Ces\u76D1\u63A7\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -d -p <span class="token number">9001</span>:9000 lmenezes/cerebro
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u6D4F\u89C8\u5668\u8BBF\u95EE\u5373\u53EF\u3002</p><p><code>\u6CE8\u610F\uFF1A</code></p>`,99),b=n("\u6CE8\u610Fkafka\u7248\u672C\u95EE\u9898\u3002 "),m={href:"https://www.elastic.co/guide/en/logstash/current/plugins-inputs-kafka.html",target:"_blank",rel:"noopener noreferrer"},k=n("https://www.elastic.co/guide/en/logstash/current/plugins-inputs-kafka.html");function d(g,h){const a=e("ExternalLinkIcon");return p(),l(r,null,[u,s("ul",null,[s("li",null,[b,s("ul",null,[s("li",null,[s("a",m,[k,t(a)])])])])])],64)}var y=o(i,[["render",d]]);export{y as default};
