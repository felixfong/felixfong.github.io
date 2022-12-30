import{e as a}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},e=a(`<p>\u96C6\u7FA4\u76D1\u63A7\u6709\u4E0D\u5C11\u65B9\u6848\uFF0C\u8FD9\u91CC\u4ECB\u7ECD\u4E00\u79CD\u56FD\u4EBA\u7814\u53D1\u7684\uFF0C\u7ECF\u5E38\u770B\u5230\u6709\u4EBA\u63A8\u8350\u7684\u4E00\u4E2A\u65B9\u6848\uFF0C<code>Kafka Eagle</code>\u3002</p><h2 id="_1-\u8D44\u6599\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u8D44\u6599\u3002" aria-hidden="true">#</a> 1\uFF0C\u8D44\u6599\u3002</h2><ul><li>\u5B98\u7F51\uFF1Ahttps://www.kafka-eagle.org/index.html</li><li>Github\uFF1Ahttps://github.com/smartloli/kafka-eagle/</li><li>\u5B98\u65B9\u6587\u6863\uFF1Ahttps://docs.kafka-eagle.org/</li><li>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttp://download.kafka-eagle.org/</li></ul><h2 id="_2-\u90E8\u7F72\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u90E8\u7F72\u3002" aria-hidden="true">#</a> 2\uFF0C\u90E8\u7F72\u3002</h2><p>\u5F53\u6211\u4EEC\u628A kafka \u96C6\u7FA4\u90E8\u7F72\u5B8C\u6210\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u90E8\u7F72<code>Kafka Eagle</code>\u76D1\u63A7\u7CFB\u7EDF\u4E86\u3002</p><p>github \u4E0A\u7684 releases \u4E2D\u4E8B\u5B9E\u4E0A\u8FD8\u662F\u6E90\u7801\uFF0C\u800C\u6E90\u7801\u53EF\u80FD\u4E0D\u5BB9\u6613\u7F16\u8BD1\u6210\u529F\uFF0C\u56E0\u6B64\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u5B98\u7F51\u7684\u4E0B\u8F7D\u5730\u5740\u4E0B\u8F7D\u4F5C\u8005\u5DF2\u7ECF\u63D0\u4F9B\u7684\u7F16\u8BD1\u597D\u7684\u5305\u8FDB\u884C\u90E8\u7F72\u3002</p><h3 id="_1-\u4E0B\u8F7D\u5305\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u5305\u3002" aria-hidden="true">#</a> 1\uFF0C\u4E0B\u8F7D\u5305\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">wget</span> https://codeload.github.com/smartloli/kafka-eagle-bin/tar.gz/v1.3.3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-\u89E3\u538B\u5305\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u538B\u5305\u3002" aria-hidden="true">#</a> 2\uFF0C\u89E3\u538B\u5305\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost opt<span class="token punctuation">]</span>$ <span class="token function">tar</span> xf v1.3.3
l<span class="token punctuation">[</span>root@localhost opt<span class="token punctuation">]</span>$ <span class="token function">ls</span>
kafka-eagle-bin-1.3.3  v1.3.3
<span class="token punctuation">[</span>root@localhost opt<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> kafka-eagle-bin-1.3.3/
<span class="token punctuation">[</span>root@localhost kafka-eagle-bin-1.3.3<span class="token punctuation">]</span>$ <span class="token function">ls</span>
kafka-eagle-web-1.3.3-bin.tar.gz
<span class="token punctuation">[</span>root@localhost kafka-eagle-bin-1.3.3<span class="token punctuation">]</span>$ <span class="token function">tar</span> xf kafka-eagle-web-1.3.3-bin.tar.gz
l<span class="token punctuation">[</span>root@localhost kafka-eagle-bin-1.3.3<span class="token punctuation">]</span>$ <span class="token function">ls</span>
kafka-eagle-web-1.3.3  kafka-eagle-web-1.3.3-bin.tar.gz
<span class="token punctuation">[</span>root@localhost kafka-eagle-bin-1.3.3<span class="token punctuation">]</span>$ <span class="token function">mv</span> kafka-eagle-web-1.3.3 /opt/kafka-eagle
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u3002" aria-hidden="true">#</a> 3\uFF0C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
export JAVA_HOME=/usr/local/jdk1.8.0_192
export KE_HOME=/opt/kafka-eagle
export PATH=<span class="token environment constant">$PATH</span>:<span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$KE_HOME</span>
EOF</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4-\u914D\u7F6E-system-config-properties-\u6587\u4EF6\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6E-system-config-properties-\u6587\u4EF6\u3002" aria-hidden="true">#</a> 4\uFF0C\u914D\u7F6E system-config.properties \u6587\u4EF6\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">######################################</span>
<span class="token comment"># \u914D\u7F6E\u591A\u4E2AKafka\u96C6\u7FA4\u6240\u5BF9\u5E94\u7684Zookeeper</span>
<span class="token comment">######################################</span>
kafka.eagle.zk.cluster.alias<span class="token operator">=</span>cluster1
cluster1.zk.list<span class="token operator">=</span><span class="token number">192.168</span>.106.7:2181,192.168.106.8:2181,192.168.106.9:2181
<span class="token comment">#cluster2.zk.list=xdn10:2181,xdn11:2181,xdn12:2181</span>
<span class="token comment">######################################</span>
<span class="token comment"># \u8BBE\u7F6EZookeeper\u7EBF\u7A0B\u6570</span>
<span class="token comment">######################################</span>
kafka.zk.limit.size<span class="token operator">=</span><span class="token number">25</span>
<span class="token comment">######################################</span>
<span class="token comment"># \u8BBE\u7F6EKafka Eagle\u6D4F\u89C8\u5668\u8BBF\u95EE\u7AEF\u53E3</span>
<span class="token comment">######################################</span>
kafka.eagle.webui.port<span class="token operator">=</span><span class="token number">8048</span>
<span class="token comment">######################################</span>
<span class="token comment"># \u5982\u679C\u4F60\u7684offsets\u5B58\u50A8\u5728Kafka\u4E2D\uFF0C\u8FD9\u91CC\u5C31\u914D\u7F6E</span>
<span class="token comment"># \u5C5E\u6027\u503C\u4E3Akafka\uFF0C\u5982\u679C\u662F\u5728Zookeeper\u4E2D\uFF0C\u53EF\u4EE5</span>
<span class="token comment"># \u6CE8\u91CA\u8BE5\u5C5E\u6027\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0COffsets\u7684\u4E5F\u548C\u4F60\u6D88</span>
<span class="token comment"># \u8D39\u8005API\u6709\u5173\u7CFB\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u7684Kafka\u7248\u672C\u4E3A0.10.x</span>
<span class="token comment"># \u4EE5\u540E\u7684\u7248\u672C\uFF0C\u4F46\u662F\uFF0C\u4F60\u7684\u6D88\u8D39API\u4F7F\u7528\u7684\u662F0.8.2.x</span>
<span class="token comment"># \u65F6\u7684API\uFF0C\u6B64\u65F6\u6D88\u8D39\u8005\u4F9D\u7136\u662F\u5728Zookeeper\u4E2D</span>
<span class="token comment">######################################</span>
cluster1.kafka.eagle.offset.storage<span class="token operator">=</span>kafka
<span class="token comment">#cluster2.kafka.eagle.offset.storage=zk</span>
<span class="token comment">######################################</span>
<span class="token comment"># \u662F\u5426\u542F\u52A8\u76D1\u63A7\u56FE\u8868\uFF0C\u9ED8\u8BA4\u662F\u4E0D\u542F\u52A8\u7684</span>
<span class="token comment">######################################</span>
kafka.eagle.metrics.charts<span class="token operator">=</span>true
<span class="token comment">######################################</span>
<span class="token comment"># \u5728\u4F7F\u7528Kafka SQL\u67E5\u8BE2\u4E3B\u9898\u65F6\uFF0C\u5982\u679C\u9047\u5230\u9519\u8BEF\uFF0C</span>
<span class="token comment"># \u53EF\u4EE5\u5C1D\u8BD5\u5F00\u542F\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5F00\u542F</span>
<span class="token comment">######################################</span>
kafka.eagle.sql.fix.error<span class="token operator">=</span>true
<span class="token comment">######################################</span>
<span class="token comment"># kafka sql topic records max</span>
<span class="token comment">######################################</span>
kafka.eagle.sql.topic.records.max<span class="token operator">=</span><span class="token number">5000</span>
<span class="token comment">######################################</span>
<span class="token comment"># \u90AE\u4EF6\u670D\u52A1\u5668\u8BBE\u7F6E\uFF0C\u7528\u6765\u544A\u8B66</span>
<span class="token comment">######################################</span>
kafka.eagle.mail.enable<span class="token operator">=</span>false
kafka.eagle.mail.sa<span class="token operator">=</span>alert_sa@163.com
kafka.eagle.mail.username<span class="token operator">=</span>alert_sa@163.com
kafka.eagle.mail.password<span class="token operator">=</span>mqslimczkdqabbbh
kafka.eagle.mail.server.host<span class="token operator">=</span>smtp.163.com
kafka.eagle.mail.server.port<span class="token operator">=</span><span class="token number">25</span>
<span class="token comment">######################################</span>
<span class="token comment"># alarm im configure</span>
<span class="token comment">######################################</span>
<span class="token comment">#kafka.eagle.im.dingding.enable=true</span>
<span class="token comment">#kafka.eagle.im.dingding.url=https://oapi.dingtalk.com/robot/send?access_token=</span>
<span class="token comment">#kafka.eagle.im.wechat.enable=true</span>
<span class="token comment">#kafka.eagle.im.wechat.token=https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=xxx&amp;corpsecret=xxx</span>
<span class="token comment">#kafka.eagle.im.wechat.url=https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=</span>
<span class="token comment">#kafka.eagle.im.wechat.touser=</span>
<span class="token comment">#kafka.eagle.im.wechat.toparty=</span>
<span class="token comment">#kafka.eagle.im.wechat.totag=</span>
<span class="token comment">#kafka.eagle.im.wechat.agentid=</span>
<span class="token comment">######################################</span>
<span class="token comment"># \u8D85\u7EA7\u7BA1\u7406\u5458\u5220\u9664\u4E3B\u9898\u7684Token</span>
<span class="token comment">######################################</span>
kafka.eagle.topic.token<span class="token operator">=</span>keadmin
<span class="token comment">######################################</span>
<span class="token comment"># \u5982\u679C\u542F\u52A8Kafka SASL\u534F\u8BAE\uFF0C\u5F00\u542F\u8BE5\u5C5E\u6027</span>
<span class="token comment">######################################</span>
cluster1.kafka.eagle.sasl.enable<span class="token operator">=</span>false
cluster1.kafka.eagle.sasl.protocol<span class="token operator">=</span>SASL_PLAINTEXT
cluster1.kafka.eagle.sasl.mechanism<span class="token operator">=</span>PLAIN
cluster2.kafka.eagle.sasl.enable<span class="token operator">=</span>false
cluster2.kafka.eagle.sasl.protocol<span class="token operator">=</span>SASL_PLAINTEXT
cluster2.kafka.eagle.sasl.mechanism<span class="token operator">=</span>PLAIN
<span class="token comment">######################################</span>
<span class="token comment"># Kafka Eagle\u9ED8\u8BA4\u5B58\u50A8\u5728Sqlite\u4E2D\uFF0C\u5982\u679C\u8981\u4F7F\u7528</span>
<span class="token comment"># MySQL\u53EF\u4EE5\u66FF\u6362\u9A71\u52A8\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u3001\u8FDE\u63A5\u5730\u5740</span>
<span class="token comment">######################################</span>
kafka.eagle.driver<span class="token operator">=</span>org.sqlite.JDBC
kafka.eagle.url<span class="token operator">=</span>jdbc:sqlite:/opt/kafka-eagle/db/ke.db
kafka.eagle.username<span class="token operator">=</span>root
kafka.eagle.password<span class="token operator">=</span>smartloli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><h3 id="_5-\u542F\u52A8-kafka-eagle\u3002" tabindex="-1"><a class="header-anchor" href="#_5-\u542F\u52A8-kafka-eagle\u3002" aria-hidden="true">#</a> 5\uFF0C\u542F\u52A8 Kafka Eagle\u3002</h3><p>\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u6267\u884C Kafka Eagle \u811A\u672C ke.sh\u3002\u5982\u679C\u9996\u6B21\u6267\u884C\uFF0C\u9700\u8981\u7ED9\u8BE5\u811A\u672C\u8D4B\u4E88\u6267\u884C\u6743\u9650\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod +x $KE_HOME/bin/ke.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5728 ke.sh \u811A\u672C\u4E2D\uFF0C\u652F\u6301\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><table><thead><tr><th style="text-align:center;">\u547D\u4EE4</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">ke.sh start</td><td style="text-align:center;">\u542F\u52A8 Kafka Eagle \u7CFB\u7EDF</td></tr><tr><td style="text-align:center;">ke.sh stop</td><td style="text-align:center;">\u505C\u6B62 Kafka Eagle \u7CFB\u7EDF</td></tr><tr><td style="text-align:center;">ke.sh restart</td><td style="text-align:center;">\u91CD\u542F Kafka Eagle \u7CFB\u7EDF</td></tr><tr><td style="text-align:center;">ke.sh status</td><td style="text-align:center;">\u67E5\u770B Kafka Eagle \u7CFB\u7EDF\u8FD0\u884C\u72B6\u6001</td></tr><tr><td style="text-align:center;">ke.sh stats</td><td style="text-align:center;">\u7EDF\u8BA1 Kafka Eagle \u7CFB\u7EDF\u5360\u7528 Linux \u8D44\u6E90\u60C5\u51B5</td></tr><tr><td style="text-align:center;">ke.sh find [ClassName]</td><td style="text-align:center;">\u67E5\u770B Kafka Eagle \u7CFB\u7EDF\u4E2D\u7684\u7C7B\u662F\u5426\u5B58\u5728</td></tr></tbody></table><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost kafka-eagle<span class="token punctuation">]</span>$./bin/ke.sh start
<span class="token punctuation">[</span><span class="token number">2019</span>-07-07 <span class="token number">17</span>:21:03<span class="token punctuation">]</span> INFO: Starting  kafka eagle environment check <span class="token punctuation">..</span>.
  created: META-INF/
 inflated: META-INF/MANIFEST.MF
  created: WEB-INF/
 \u3002
 \u3002\u4E2D\u95F4\u8F93\u51FA\u7701\u7565
 \u3002
  created: META-INF/maven/org.smartloli.kafka.eagle/
  created: META-INF/maven/org.smartloli.kafka.eagle/kafka-eagle-web/
 inflated: META-INF/maven/org.smartloli.kafka.eagle/kafka-eagle-web/pom.xml
 inflated: META-INF/maven/org.smartloli.kafka.eagle/kafka-eagle-web/pom.properties
*******************************************************************
* Kafka Eagle system monitor port successful<span class="token punctuation">..</span>.
*******************************************************************
<span class="token punctuation">[</span><span class="token number">2019</span>-07-07 <span class="token number">17</span>:21:03<span class="token punctuation">]</span> INFO: Status Code<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">2019</span>-07-07 <span class="token number">17</span>:21:03<span class="token punctuation">]</span> INFO: <span class="token punctuation">[</span>Job done<span class="token operator">!</span><span class="token punctuation">]</span>
Welcome to
    __ __    ___     ____    __ __    ___            ______    ___    ______    __     ______
   / //_/   /   <span class="token operator">|</span>   / __/   / //_/   /   <span class="token operator">|</span>          / ____/   /   <span class="token operator">|</span>  / ____/   / /    / ____/
  / ,<span class="token operator">&lt;</span>     / /<span class="token operator">|</span> <span class="token operator">|</span>  / /_    / ,<span class="token operator">&lt;</span>     / /<span class="token operator">|</span> <span class="token operator">|</span>         / __/     / /<span class="token operator">|</span> <span class="token operator">|</span> / / __    / /    / __/
 / /<span class="token operator">|</span> <span class="token operator">|</span>   / ___ <span class="token operator">|</span> / __/   / /<span class="token operator">|</span> <span class="token operator">|</span>   / ___ <span class="token operator">|</span>        / /___    / ___ <span class="token operator">|</span>/ /_/ /   / /___ / /___
/_/ <span class="token operator">|</span>_<span class="token operator">|</span>  /_/  <span class="token operator">|</span>_<span class="token operator">|</span>/_/     /_/ <span class="token operator">|</span>_<span class="token operator">|</span>  /_/  <span class="token operator">|</span>_<span class="token operator">|</span>       /_____/   /_/  <span class="token operator">|</span>_<span class="token operator">|</span><span class="token punctuation">\\</span>____/   /_____//_____/
Version <span class="token number">1.3</span>.3
*******************************************************************
* Kafka Eagle Service has started success.
* Welcome, Now you can visit <span class="token string">&#39;http://&lt;your_host_or_ip&gt;:port/ke&#39;</span>
* Account:admin ,Password:123456
*******************************************************************
* <span class="token operator">&lt;</span>Usage<span class="token operator">&gt;</span> ke.sh <span class="token punctuation">[</span>start<span class="token operator">|</span>status<span class="token operator">|</span>stop<span class="token operator">|</span>restart<span class="token operator">|</span>stats<span class="token punctuation">]</span> <span class="token operator">&lt;</span>/Usage<span class="token operator">&gt;</span>
* <span class="token operator">&lt;</span>Usage<span class="token operator">&gt;</span> https://www.kafka-eagle.org/ <span class="token operator">&lt;</span>/Usage<span class="token operator">&gt;</span>
*******************************************************************
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="_6-\u8BBF\u95EE\u3002" tabindex="-1"><a class="header-anchor" href="#_6-\u8BBF\u95EE\u3002" aria-hidden="true">#</a> 6\uFF0C\u8BBF\u95EE\u3002</h3><p>\u63A5\u7740\u5C31\u53EF\u4EE5\u901A\u8FC7<code>http://&lt;your_host_or_ip&gt;:port/ke</code>\u8FDB\u884C\u8BBF\u95EE\u4E86\u3002</p><p>\u7528\u6237\u540D\u5BC6\u7801\u662F <code>Account:admin ,Password:123456</code>\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/1e5bfc1f932e79a3.jpg" alt="image"></p><h3 id="_7-\u76D1\u63A7\u8D8B\u52BF\u56FE\u3002" tabindex="-1"><a class="header-anchor" href="#_7-\u76D1\u63A7\u8D8B\u52BF\u56FE\u3002" aria-hidden="true">#</a> 7\uFF0C\u76D1\u63A7\u8D8B\u52BF\u56FE\u3002</h3><p>Kafka \u7CFB\u7EDF\u9ED8\u8BA4\u662F\u6CA1\u6709\u5F00\u542F JMX \u7AEF\u53E3\u7684\uFF0C\u6240\u4EE5 Kafka Eagle \u7684\u76D1\u63A7\u8D8B\u52BF\u56FE\u9ED8\u8BA4\u91C7\u7528\u4E0D\u542F\u7528\u7684\u65B9\u5F0F\uFF0C\u5373<code>kafka.eagle.metrics.charts=false</code>\u3002</p><p>\u5982\u679C\u9700\u8981\u67E5\u770B\u76D1\u63A7\u8D8B\u52BF\u56FE\uFF0C\u9700\u8981\u5F00\u542F Kafka \u7CFB\u7EDF\u7684 JMX \u7AEF\u53E3\uFF0C\u8BBE\u7F6E\u8BE5\u7AEF\u53E3\u5728 $KAFKA_HOME/bin/kafka-server-start.sh \u811A\u672C\u4E2D\uFF0C\u8BBE\u7F6E\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;x<span class="token variable">$KAFKA_HEAP_OPTS</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;x&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">KAFKA_HEAP_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-server -Xms2G -Xmx2G -XX:PermSize=128m -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=8 -XX:ConcGCThreads=5 -XX:InitiatingHeapOccupancyPercent=70&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">JMX_PORT</span><span class="token operator">=</span><span class="token string">&quot;9999&quot;</span>
    <span class="token comment">#export KAFKA_HEAP_OPTS=&quot;-Xmx1G -Xms1G&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7136\u540E\u5C06\u96C6\u7FA4\u7684 kafka \u91CD\u542F\uFF0C\u5728\u91CD\u542F kafka eagle\uFF0C\u5C31\u80FD\u770B\u5230\u76F8\u5173\u7684\u76D1\u63A7\u4E86\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/be2235d665538a82.jpg" alt="image"></p><h2 id="_3-\u53C2\u8003\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u53C2\u8003\u3002" aria-hidden="true">#</a> 3\uFF0C\u53C2\u8003\u3002</h2><ul><li>http://t.cn/RDbk79P</li></ul>`,32);function p(t,l){return e}var c=s(n,[["render",p]]);export{c as default};
