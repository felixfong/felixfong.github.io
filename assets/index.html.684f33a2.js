import{r as l,o as r,c,b as n,a as e,F as t,d as s,e as p}from"./app.dbf5d933.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=s("\u5982\u4F55\u914D\u7F6E\u4E00\u4E2Ayum\u79C1\u670D\uFF0C\u8FD9\u4E2A\u95EE\u9898\u5F88\u65E9\u4E4B\u524D\u5C31\u5DF2\u7ECF\u7814\u7A76\u8FC7\uFF0C\u535A\u5BA2\u4E5F\u53D1\u8868\u8FC7\u6B64\u6587\u7AE0\uFF1A"),b={href:"https://wiki.eryajf.net/pages/2002.html",target:"_blank",rel:"noopener noreferrer"},m=s("\u4F7F\u7528nexus3\u914D\u7F6Eyum\u79C1\u6709\u4ED3\u5E93"),d=s("\uFF0C\u53EA\u4E0D\u8FC7\u6253\u7B97\u91CD\u65B0\u542F\u7528\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u539F\u6765\u535A\u5BA2\u4E2D\u524D\u534A\u90E8\u5206\u7684\u914D\u7F6E\u6CA1\u4EC0\u4E48\u6BDB\u75C5\uFF0C\u5728\u540E\u534A\u90E8\u5206\u7684\u4F7F\u7528\u4E0A\uFF0C\u5219\u7A0D\u6709\u6B20\u7F3A\uFF0C\u8FD9\u91CC\u53E6\u8D77\u6587\u7AE0\uFF0C\u4F5C\u4E3A\u8865\u5145\u3002"),h=p(`<p>\u8FD9\u4E2A\u8DDFPython\u79C1\u670D\u6709\u70B9\u7C7B\u4F3C\uFF1A</p><p>\u5176\u5B9E\u7528\u4E00\u53E5\u8BDD\u6765\u8868\u8FF0\uFF0C\u5C31\u662F<code>\u901A\u8FC7\u79C1\u670D\u62C9\u5305\u7684\u65F6\u5019\uFF0C\u8D70group\u7684\u4EE3\u7406\uFF0C\u4ECE\u672C\u5730\u4E0A\u4F20\u5305\u7684\u65F6\u5019\uFF0C\u8981\u8D70local\u7684\u4ED3\u5E93\u3002</code></p><p>\u63A5\u4E0B\u6765\u5C31\u8BB0\u5F55\u4E00\u4E0B\u914D\u7F6E\u65B9\u6CD5\u5E76\u7528\u6D4B\u8BD5\u5305\u6765\u9A8C\u8BC1\u4E0B\u3002</p><p>\u521B\u5EFA\u79C1\u670D\u7684\u8FC7\u7A0B\u8FD9\u91CC\u4E0D\u8BE6\u8FF0\u4E86\uFF0C\u5DF2\u77E5\u73B0\u6709Yum\u79C1\u4ED3\uFF0C\u7269\u6599\u4FE1\u606F\u5982\u4E0B\uFF1A</p><ul><li>group\uFF1Ahttp://nexus.test.com/repository/yum/</li><li>local\uFF1Ahttp://nexus.test.com/repository/wpt-yum-local/</li></ul><p>\u8FD9\u4E24\u4E2A\u4ED3\u5E93\u5728\u5BA2\u6237\u7AEF\u5F15\u7528\u7684\u65F6\u5019\uFF0C\u8981\u5206\u522B\u914D\u7F6E\uFF0C\u5176\u4E2Dgroup\u53EF\u4EE3\u7406\u5916\u90E8\u5305\u81EA\u52A8\u4E0B\u8F7D\uFF0C\u4E00\u4E9B\u60F3\u8981\u56FA\u5B9A\u7248\u672C\u4E4B\u7C7B\u7684\u5305\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u4E0A\u4F20\u5230local\u91CC\u8FB9\u8FDB\u884C\u5B58\u50A8\u3002</p><p>group\u7684\u914D\u7F6E\u4E0A\u8FB9\u6587\u7AE0\u5DF2\u7ECF\u4ECB\u7ECD\uFF0C\u8FD9\u91CC\u7740\u91CD\u8BF4\u4E00\u4E0Blocal\u4ED3\u5E93\u7684\u5E94\u7528\uFF0C\u672C\u6587\u4EE5\u5C06elk-7.14.0\u7248\u672C\u7684RPM\u5305\u53CA\u5176\u4F9D\u8D56down\u5230\u672C\u5730\u5E76\u4F20\u5230\u79C1\u670D\u7684\u5168\u6D41\u7A0B\u3002</p><h2 id="_1-\u914D\u7F6Eelk-repo" tabindex="-1"><a class="header-anchor" href="#_1-\u914D\u7F6Eelk-repo" aria-hidden="true">#</a> 1\uFF0C\u914D\u7F6Eelk-repo</h2><p>\u9996\u5148\u8981\u5728\u4E00\u53F0\u80FD\u591F\u8054\u7F51\u7684\u7684\u4E3B\u673A\u4E0A\u914D\u7F6Eelk\u7684repo\uFF0C\u6700\u597D\u662F\u80FD\u8BBF\u95EE\u56FD\u5916\u7F51\u7AD9\u7684\u8282\u70B9\uFF0C\u901A\u8FC7 <code>repotrack</code>\u547D\u4EE4\u5C06RPM\u5305\u53CA\u4F9D\u8D56\u4E0B\u8F7D\u5230\u672C\u5730\u3002</p><p>\u4E00\u4E9B\u8F6F\u4EF6\u5305repo\u6E90\u5728\u56FD\u5916\uFF0C\u5E76\u4E0D\u5BB9\u6613\u4E0B\u8F7D\uFF0C\u8FD9\u91CC\u63D0\u4F9B\u4E00\u4E2A\u5F00\u6E90\u7684\u56FD\u5185\u955C\u50CF\u540C\u6B65\u641C\u7D22\u5DE5\u5177:</p><p>::: cardList 1</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> search<span class="token punctuation">-</span>mirror
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> \u5F00\u6E90\u8F6F\u4EF6\u7684\u56FD\u5185\u955C\u50CF\u7AD9\u70B9
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//avatars2.githubusercontent.com/u/416130<span class="token punctuation">?</span>s=460<span class="token important">&amp;u=8753e86600e300a9811cdc539aa158deec2e2724&amp;v=4</span> <span class="token comment"># \u53EF\u9009</span>
  <span class="token key atrule">link</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//m.eryajf.net/<span class="token comment">#/</span>
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#FBDE4B&#39;</span> <span class="token comment"># \u53EF\u9009\uFF0C\u9ED8\u8BA4var(--bodyBg)\u3002\u989C\u8272\u503C\u6709#\u53F7\u65F6\u8BF7\u6DFB\u52A0\u5355\u5F15\u53F7</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#fff&#39;</span> <span class="token comment"># \u53EF\u9009\uFF0C\u9ED8\u8BA4var(--textColor)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>:::</p>`,13),k=s("\u53C2\u8003elastic\u5B98\u65B9\u6587\u6863\uFF0C\u53EF\u4EE5\u770B\u5230"),g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.14/rpm.html",target:"_blank",rel:"noopener noreferrer"},v=s("7.x"),y=s("\uFF08\u53E6\u5916"),_={href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.7/rpm.html",target:"_blank",rel:"noopener noreferrer"},f=s("6.x"),x=s("\uFF09\u7684repo\u914D\u7F6E\u59FF\u52BF\u5927\u81F4\u5982\u4E0B\uFF1A"),w=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u79D8\u94A5</span>
$ <span class="token function">rpm</span> --import https://artifacts.elastic.co/GPG-KEY-elasticsearch

<span class="token comment"># \u914D\u7F6Erepo</span>
$ <span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/yum.repos.d/es7.repo <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[elasticsearch]
name=Elasticsearch repository for 7.x packages
baseurl=https://artifacts.elastic.co/packages/7.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6CE8\u610F\u5B98\u65B9\u914D\u7F6E\u7684 <code>enabled=</code>\u4E3A<code>0</code>\uFF0C\u8FD9\u91CC\u8981\u6539\u6210<code>1</code>\u3002</p><p>\u5982\u4E0A\u914D\u7F6E\u641E\u5B9A\u4E4B\u540E\uFF0C\u6765\u4E24\u6B65\u5E38\u89C4\u7684\u6784\u5EFA\u7F13\u5B58\u52A8\u4F5C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum clean all
$ yum makecache
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7F13\u5B58\u6784\u5EFA\u5B8C\u6BD5\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u7B80\u5355\u67E5\u770B\u4E00\u4E0B\u6E90\u91CC\u7684\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum list <span class="token operator">|</span><span class="token function">grep</span> elasticsearch
apm-server.i686                           <span class="token number">7.14</span>.0-1                   elasticsearch
apm-server.x86_64                         <span class="token number">7.14</span>.0-1                   elasticsearch
app-search.noarch                         <span class="token number">7.6</span>.2-1                    elasticsearch
auditbeat.i686                            <span class="token number">7.14</span>.0-1                   elasticsearch
auditbeat.x86_64                          <span class="token number">7.14</span>.0-1                   elasticsearch
elastic-agent.i686                        <span class="token number">7.12</span>.1-1                   elasticsearch
elastic-agent.x86_64                      <span class="token number">7.14</span>.0-1                   elasticsearch
elasticsearch.x86_64                      <span class="token number">7.14</span>.0-1                   elasticsearch
enterprise-search.noarch                  <span class="token number">7.14</span>.0-1                   elasticsearch
filebeat.i686                             <span class="token number">7.14</span>.0-1                   elasticsearch
filebeat.x86_64                           <span class="token number">7.14</span>.0-1                   elasticsearch
heartbeat-elastic.i686                    <span class="token number">7.14</span>.0-1                   elasticsearch
heartbeat-elastic.x86_64                  <span class="token number">7.14</span>.0-1                   elasticsearch
journalbeat.i686                          <span class="token number">7.14</span>.0-1                   elasticsearch
journalbeat.x86_64                        <span class="token number">7.14</span>.0-1                   elasticsearch
kibana.x86_64                             <span class="token number">7.14</span>.0-1                   elasticsearch
logstash.noarch                           <span class="token number">1</span>:7.9.3-1                  elasticsearch
logstash.x86_64                           <span class="token number">1</span>:7.14.0-1                 elasticsearch
metricbeat.i686                           <span class="token number">7.14</span>.0-1                   elasticsearch
metricbeat.x86_64                         <span class="token number">7.14</span>.0-1                   elasticsearch
packetbeat.i686                           <span class="token number">7.14</span>.0-1                   elasticsearch
packetbeat.x86_64                         <span class="token number">7.14</span>.0-1                   elasticsearch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u5E38\u7528\u7684\u51E0\u5927\u91D1\u521A\u7684rpm\u5305\u5168\u5728\u91CC\u8FB9\u4E86\u3002</p><p><code>\u6CE8\u610F</code>\uFF1A\u8FD9\u4E2A\u5730\u65B9\u4E0D\u6307\u5B9A\u7248\u672C\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u662F\u5BF9\u5E94\u5927\u7248\u672C\u7684\u6700\u540E\u4E00\u4E2A\u7248\u672C\uFF0C\u6211\u4EEC\u4EA6\u53EF\u4EE5\u901A\u8FC7 <code>yum list | grep elasticsearch-7.10.1</code>\u6765\u67E5\u770B\u6307\u5B9A\u5C0F\u7248\u672C\u7684\u5305\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/3ddc54d030b9c22e.jpg" alt="20210429\u2014 - 2021-04-29T154332.757"></p><h2 id="_2-\u4E0B\u8F7D\u5305" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0B\u8F7D\u5305" aria-hidden="true">#</a> 2\uFF0C\u4E0B\u8F7D\u5305</h2>`,10),$=s("\u5982\u4E0A\u51C6\u5907\u5DE5\u4F5C\u5B8C\u6210\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u8981\u4E0B\u8F7D\u5305\u4E86\uFF0C\u4E0B\u8F7D\u5305\u6709\u591A\u79CD\u65B9\u5F0F\uFF0C"),E={href:"https://www.cnblogs.com/dyh004/p/13975275.html",target:"_blank",rel:"noopener noreferrer"},B=s("\u8FD9\u7BC7\u6587\u7AE0"),P=s("\u4ECB\u7ECD\u4E86\u4E09\u79CD\u65B9\u5F0F\uFF0C\u5176\u4E2D\u7684 "),R=n("code",null,"repotrack",-1),Y=s("\u65E2\u80FD\u4E0B\u8F7DRPM\u5305\u53CA\u4F9D\u8D56\u53C8\u80FD\u4E0B\u8F7D\u4F9D\u8D56\u7684\u4F9D\u8D56\uFF0C\u56E0\u6B64\u9488\u5BF9\u4E00\u4E9B\u79BB\u7EBF\u73AF\u5883\u662F\u6BD4\u8F83\u53CB\u597D\u7684\uFF0C\u8FD9\u91CC\u4E5F\u4F7F\u7528\u6B64\u547D\u4EE4\u3002"),j=p(`<p>\u6211\u4EEC\u9996\u5148\u5C06\u56DB\u5927\u91D1\u521A\u5199\u5165\u5230\u4E00\u4E2A\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> a
kibana
elasticsearch
logstash
filebeat
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7136\u540E\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u5C06\u5305\u7F13\u5B58\u5230\u672C\u5730\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> a<span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> repotrack <span class="token variable">$i</span> -p <span class="token number">7</span><span class="token punctuation">;</span><span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><code>-p</code>\u53C2\u6570\u662F\u6307\u5B9A\u5305\u7684\u4E0B\u8F7D\u8DEF\u5F84\u3002</li></ul><p>\u540C\u7406\uFF0C\u5982\u679C\u4F60\u60F3\u7F13\u5B58\u5176\u4ED6\u6307\u5B9A\u7248\u672C\u7684\u5305\uFF0C\u53EF\u7528\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> a<span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> repotrack <span class="token variable">$i</span>-7.10.1 -p <span class="token number">7</span><span class="token punctuation">;</span><span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u547D\u4EE4\u8DD1\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u672C\u5730\u770B\u5230\u7F13\u5B58\u4E0B\u6765\u7684RPM\u5305\u3002</p><h2 id="_3-\u4E0A\u4F20\u5230\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#_3-\u4E0A\u4F20\u5230\u79C1\u670D" aria-hidden="true">#</a> 3\uFF0C\u4E0A\u4F20\u5230\u79C1\u670D</h2><p>\u60F3\u8981\u7F13\u5B58\u7684\u5305\u5DF2\u7ECF\u6709\u4E86\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u5C06\u5305\u6279\u91CF\u4F20\u5230\u79C1\u670D\u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token number">7</span>
$ <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span><span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token function">curl</span> -v --user <span class="token string">&#39;admin:admin&#39;</span> --upload-file <span class="token variable">$i</span> http://nexus.test.com/repository/wpt-yum-local/7/os/x86_64/Packages/<span class="token variable">$i</span><span class="token punctuation">;</span><span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>\u6CE8\u610F</code>\uFF1A\u5728local\u8FD9\u4E2A\u5757\u513F\u7684path\u540E\u8FB9\u52A0\u4E86\u4E2A <code>7/os/x86_64/Packages</code>\uFF0C\u662F\u4E3A\u4E86\u4E0Egroup\u7F13\u5B58\u7684path\u5BF9\u9F50\uFF0C\u4ECE\u800C\u5728\u5BA2\u6237\u7AEF\u68C0\u7D22\u7684\u65F6\u5019\u80FD\u591F\u76F4\u63A5\u4F7F\u7528\u3002</p><h2 id="_4-\u6B63\u5F0F\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u6B63\u5F0F\u5E94\u7528" aria-hidden="true">#</a> 4\uFF0C\u6B63\u5F0F\u5E94\u7528</h2><p>\u79C1\u670D\u5DF2\u7ECF\u6709\u4E86RPM\u5305\uFF0C\u8FD9\u4E2A\u65F6\u5019\u627E\u4E00\u53F0\u5BA2\u6237\u7AEF\u4E3B\u673A\uFF0C\u53EF\u4EE5\u6E05\u7A7A\u4ED6\u7684repo\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> /etc/yum.repos.d
$ <span class="token function">mkdir</span> bak <span class="token operator">&amp;&amp;</span> <span class="token function">mv</span> * bak
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6DFB\u52A0\u5982\u4E0B\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/yum.repos.d/nexus.repo <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
[nexus]
name=Nexus Repository
baseurl=http://nexus.test.com/repository/yum/$releasever/os/$basearch/
enabled=1
gpgcheck=0

[nexus-local]
name=Nexus Repository
baseurl=http://nexus.test.com/repository/wpt-yum-local/
enabled=1
gpgcheck=0
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5982\u4E0A\u914D\u7F6E\u5C06group\u548Clocal\u5206\u522B\u5199\u5728\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u5B9E\u73B0\u5185\u5916\u4E24\u79CD\u5305\u90FD\u80FD\u65E0\u5FE7\u4E0B\u8F7D\u5E76\u5B89\u88C5\u3002</p><p>\u5982\u4E0A\u914D\u7F6E\u641E\u5B9A\u4E4B\u540E\uFF0C\u6765\u4E24\u6B65\u5E38\u89C4\u7684\u6784\u5EFA\u7F13\u5B58\u52A8\u4F5C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum clean all
$ yum makecache
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7F13\u5B58\u6784\u5EFA\u5B8C\u6BD5\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u7B80\u5355\u67E5\u770B\u4E00\u4E0B\u6E90\u91CC\u7684\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum list <span class="token operator">|</span><span class="token function">grep</span> elasticsearch
elasticsearch.x86_64                      <span class="token number">7.14</span>.0-1                   nexus-local
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u65F6\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u5305\u662F\u5728<code>nexus-local</code>\u8FD9\u4E2A\u6E90\u91CC\uFF0C\u90A3\u4E48\u518D\u8FDB\u884C\u5B89\u88C5elk\u7684\u5305\u5C31\u76F4\u63A5\u8D70\u672C\u5730\u79C1\u670D\u7684yum\u6E90\u4E86\u3002</p><blockquote><p>\u5982\u4E0A\u59FF\u52BF\u662F\u62FF\u8FD9\u79CD\u6807\u51C6\u4E0B\u7684\u5305\u8FDB\u884C\u4E3E\u4F8B\uFF0C\u4E0E\u6B64\u96F7\u540C\u7684\u8FD8\u6709\u8BF8\u5982remi\u6E90\u540C\u6837\u53EF\u4EE5\u5229\u7528\u6B64\u65B9\u5F0F\u8F6C\u79FB\u5230\u672C\u5730\u79C1\u670D\uFF0C\u4F46\u662F\u8FD8\u6709\u4E00\u4E9B\u6BD4\u5982gitlab\uFF0C\u6216\u8005grafana\u8FD9\u79CD\u7684\uFF0C\u9ED8\u8BA4\u901A\u8FC7yum\u6E90\u53EA\u80FD\u5B89\u88C5\u6700\u65B0\u7248\u672C\uFF0C\u800C\u65E0\u6CD5\u62FF\u5230\u4E4B\u524D\u7684\u5386\u53F2\u7248\u672C\uFF0C\u8FD9\u79CD\u65F6\u5019\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D\u5BF9\u5E94\u7248\u672C\u7684rpm\u5305\uFF0C\u76F4\u63A5curl\u4E0A\u4F20\u5230\u79C1\u670D\u4ED3\u5E93\u5373\u53EF\u3002</p></blockquote><h2 id="_5-\u62A5\u9519\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#_5-\u62A5\u9519\u6C47\u603B" aria-hidden="true">#</a> 5\uFF0C\u62A5\u9519\u6C47\u603B</h2><p>\u5728\u914D\u7F6E\u4E4B\u540E\uFF0C\u5C06\u79C1\u670D\u914D\u7F6E\u63A8\u5E7F\u5230\u4E86\u6240\u6709\u670D\u52A1\u5668\uFF0C\u8FC7\u7A0B\u4E2D\u9047\u5230\u4E86\u4E00\u4E9B\u62A5\u9519\uFF0C\u8FD9\u91CC\u8BB0\u5F55\u4E00\u6CE2\u3002</p><h3 id="_1-yum\u547D\u4EE4\u65E0\u6CD5\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_1-yum\u547D\u4EE4\u65E0\u6CD5\u6267\u884C" aria-hidden="true">#</a> 1\uFF0Cyum\u547D\u4EE4\u65E0\u6CD5\u6267\u884C</h3><p>\u53EA\u8981\u4E00\u6267\u884C\u547D\u4EE4\uFF0C\u5C31\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum clean
error: rpmdb: BDB0113 Thread/process <span class="token number">19126</span>/139888834549824 failed: BDB1507 Thread died <span class="token keyword">in</span> Berkeley DB library
error: db5 error<span class="token punctuation">(</span>-30973<span class="token punctuation">)</span> from dbenv-<span class="token operator">&gt;</span>failchk: BDB0087 DB_RUNRECOVERY: Fatal error, run database recovery
error: cannot <span class="token function">open</span> Packages index using db5 -  <span class="token punctuation">(</span>-30973<span class="token punctuation">)</span>
error: cannot <span class="token function">open</span> Packages database <span class="token keyword">in</span> /var/lib/rpm
CRITICAL:yum.main:

Error: rpmdb <span class="token function">open</span> failed
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u89E3\u51B3\u529E\u6CD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">rm</span> -rf /var/lib/rpm/__db.*
$ yum clean all <span class="token operator">&amp;&amp;</span> yum makecache
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-\u5B89\u88C5\u8F6F\u4EF6\u7684\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u8F6F\u4EF6\u7684\u62A5\u9519" aria-hidden="true">#</a> 2\uFF0C\u5B89\u88C5\u8F6F\u4EF6\u7684\u62A5\u9519</h3><p>\u5728\u5B89\u88C5\u8F6F\u4EF6\u7684\u65F6\u5019\uFF0C\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Error: Multilib version problems found. This often means that the root
       cause is something <span class="token keyword">else</span> and multilib version checking is just
       pointing out that there is a problem. Eg.:

         <span class="token number">1</span>. You have an upgrade <span class="token keyword">for</span> libuuid <span class="token function">which</span> is missing some
            dependency that another package requires. Yum is trying to
            solve this by installing an older version of libuuid of the
            different architecture. If you exclude the bad architecture
            yum will tell you what the root cause is <span class="token punctuation">(</span>which package
            requires what<span class="token punctuation">)</span>. You can try redoing the upgrade with
            --exclude libuuid.otherarch <span class="token punctuation">..</span>. this should give you an error
            message showing the root cause of the problem.

         <span class="token number">2</span>. You have multiple architectures of libuuid installed, but
            yum can only see an upgrade <span class="token keyword">for</span> one of those architectures.
            If you don&#39;t want/need both architectures anymore <span class="token keyword">then</span> you
            can remove the one with the missing update and everything
            will work.

         <span class="token number">3</span>. You have duplicate versions of libuuid installed already.
            You can use <span class="token string">&quot;yum check&quot;</span> to get yum show these errors.

       <span class="token punctuation">..</span>.you can also use --setopt<span class="token operator">=</span>protected_multilib<span class="token operator">=</span>false to remove
       this checking, however this is almost never the correct thing to
       <span class="token keyword">do</span> as something <span class="token keyword">else</span> is very likely to go wrong <span class="token punctuation">(</span>often causing
       much <span class="token function">more</span> problems<span class="token punctuation">)</span>.

       Protected multilib versions: libuuid-2.23.2-65.el7.i686 <span class="token operator">!=</span> libuuid-2.23.2-65.el7_9.1.x86_64
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u90A3\u4E48\u5728\u5B89\u88C5\u7684\u65F6\u5019\u52A0\u4E0A\u63D0\u793A\u7684\u53C2\u6570\u5373\u53EF\u89E3\u51B3\u6B64\u95EE\u9898\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> openresty --setopt<span class="token operator">=</span>protected_multilib<span class="token operator">=</span>false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,36);function F(C,N){const a=l("ExternalLinkIcon");return r(),c(t,null,[n("p",null,[u,n("a",b,[m,e(a)]),d]),h,n("p",null,[k,n("a",g,[v,e(a)]),y,n("a",_,[f,e(a)]),x]),w,n("p",null,[$,n("a",E,[B,e(a)]),P,R,Y]),j],64)}var I=o(i,[["render",F]]);export{I as default};