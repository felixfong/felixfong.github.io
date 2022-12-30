import{r as p,o as t,c as r,b as n,a as l,F as o,e as s,d as a}from"./app.dbf5d933.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=s(`<h2 id="_1-\u7B80\u5355\u8BF4\u660E\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u5355\u8BF4\u660E\u3002" aria-hidden="true">#</a> 1\uFF0C\u7B80\u5355\u8BF4\u660E\u3002</h2><p>\u6B64\u811A\u672C\u6240\u80FD\u591F\u6210\u5F62\u4E8E\u4ECA\u65E5\uFF0C\u5B8C\u5168\u662F\u62DC\u5927\u795E\u5206\u4EAB\u7684 https://github.com/opsnull/follow-me-install-kubernetes-cluster \u9879\u76EE\u6240\u4F9D\u6258\u800C\u6210\u3002\u4E4B\u524D\u4E5F\u66FE\u60F3\u8FC7\u5BF9 k8s \u719F\u6089\u4E4B\u540E\u505A\u4E00\u4E0B\u90E8\u7F72\u811A\u672C\uFF0C\u4F46\u90A3\u65F6\u5019\u5E76\u6CA1\u6709\u4EC0\u4E48\u591A\u4E48\u597D\u7684\u601D\u8DEF\uFF0C\u76F4\u5230\u4E0A\u5468\u770B\u5230\u4E86\u5982\u4E0A\u5F00\u6E90\u9879\u76EE\u7684\u90E8\u7F72\u601D\u8DEF\uFF0C\u8BA9\u6211\u6709\u79CD\u62E8\u4E91\u89C1\u65E5\uFF0C\u8C41\u7136\u5F00\u6717\u7684\u611F\u89C9\uFF0C\u5F53\u6211\u8DDF\u968F\u9879\u76EE\u5B66\u4E60\u7684\u65F6\u5019\uFF0C\u5C31\u5DF2\u7ECF\u6253\u7B97\u4E86\u8981\u5199\u4E00\u4E0B\u90E8\u7F72\u5C0F\u811A\u672C\u4E86\u3002</p><p>\u56E0\u6B64\uFF0C\u8FD9\u4E2A\u811A\u672C\u57FA\u672C\u4E0A\u53EF\u4EE5\u8BF4\u662F\u5927\u795E\u9879\u76EE\u6D41\u7A0B\u7684\u4E00\u4E2A\u5806\u53E0\uFF0C\u81EA\u5DF1\u5219\u53EA\u4E0D\u8FC7\u662F\u505A\u4E86\u4E00\u70B9\u70B9\u5C0F\u5C0F\u7684\u6574\u7406\u4E0E\u8C03\u8BD5\u7F62\u4E86\uFF0C<strong>\u518D\u4E00\u6B21\uFF0C\u90D1\u91CD\u7684\uFF0C\u5BF9\u6B64\u8868\u793A\u611F\u8C22\uFF01</strong></p><p>\u5F53\u7136\u5566\uFF0C\u4E8B\u5B9E\u4E0A\u5F53\u81EA\u5DF1\u6765\u6574\u7406\u8FD9\u4E2A\u811A\u672C\u7684\u65F6\u5019\u53D1\u73B0\uFF0C\u4E8B\u60C5\u4E5F\u5E76\u6CA1\u6709\u90A3\u4E48\u7684\u7B80\u5355\uFF0C\u800C\u5199\u811A\u672C\u7684\u4E0D\u7B80\u5355\uFF0C\u5219\u662F\u4E3A\u4E86\u4EE5\u540E\u6BCF\u6B21\u90E8\u7F72\u7684\u66F4\u7B80\u5355\u3002</p><p>\u8FD9\u91CC\u7B80\u5355\u8BF4\u660E\u4E00\u4E0B\u6211\u4F7F\u7528\u7684\u670D\u52A1\u5668\u60C5\u51B5\uFF1A</p><p>\u670D\u52A1\u5668\u5747\u91C7\u7528 CentOS7.3 \u7248\u672C\uFF0C\u672A\u5728\u5176\u4ED6\u7CFB\u7EDF\u7248\u672C\u4E2D\u8FDB\u884C\u6D4B\u8BD5\u3002</p><table><thead><tr><th>\u4E3B\u673A</th><th>\u4E3B\u673A\u540D</th><th>\u7EC4\u4EF6</th></tr></thead><tbody><tr><td>192.168.111.3</td><td>kube-node1</td><td>Kubernetes 1.10.4,Docker 18.03.1-ce,Etcd 3.3.7,Flanneld 0.10.0,kube-apiserver,kube-controller-manager,kube-scheduler,kubelet,kube-proxy</td></tr><tr><td>192.168.111.4</td><td>kube-node2</td><td>\u540C\u4E0A</td></tr><tr><td>192.168.111.5</td><td>kube-node3</td><td>\u540C\u4E0A</td></tr></tbody></table><h2 id="_2-\u51C6\u5907\u5DE5\u4F5C\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u51C6\u5907\u5DE5\u4F5C\u3002" aria-hidden="true">#</a> 2\uFF0C\u51C6\u5907\u5DE5\u4F5C\u3002</h2><p>\u9996\u5148\u5C06\u6574\u4E2A\u90E8\u7F72\u6587\u4EF6\u4E0A\u4F20\u5230\u90E8\u7F72\u670D\u52A1\u5668\uFF0C\u8FDB\u884C\u89E3\u538B\uFF0C\u7136\u540E\u505A\u4EE5\u4E0B\u51C6\u5907\u5DE5\u4F5C\u3002</p><p>\u5176\u4E2D\u811A\u672C\u4EE3\u7801\uFF0C\u6211\u5DF2\u4E0A\u4F20\u5230 GitHub\uFF0C\u5404\u4F4D\u53EF\u4EE5\u53C2\u8003\uFF1A</p><p>::: cardList 1</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> magic<span class="token punctuation">-</span>of<span class="token punctuation">-</span>kubernetes<span class="token punctuation">-</span>scripts
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> k8s\u96C6\u7FA4\u4E00\u952E\u90E8\u7F72\u811A\u672C
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//avatars2.githubusercontent.com/u/416130<span class="token punctuation">?</span>s=460<span class="token important">&amp;u=8753e86600e300a9811cdc539aa158deec2e2724&amp;v=4</span> <span class="token comment"># \u53EF\u9009</span>
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/eryajf/magic<span class="token punctuation">-</span>of<span class="token punctuation">-</span>kubernetes<span class="token punctuation">-</span>scripts <span class="token comment"># \u53EF\u9009</span>
  <span class="token key atrule">bgColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#FBDE4B&#39;</span> <span class="token comment"># \u53EF\u9009\uFF0C\u9ED8\u8BA4var(--bodyBg)\u3002\u989C\u8272\u503C\u6709#\u53F7\u65F6\u8BF7\u6DFB\u52A0\u5355\u5F15\u53F7</span>
  <span class="token key atrule">textColor</span><span class="token punctuation">:</span> <span class="token string">&#39;#fff&#39;</span> <span class="token comment"># \u53EF\u9009\uFF0C\u9ED8\u8BA4var(--textColor)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>:::</p><p>\u6574\u4E2A\u5B89\u88C5\u5305\u6211\u5DF2\u6253\u5305\u5E76\u4E0A\u4F20\u767E\u5EA6\u4E91\uFF0C\u53EF\u81EA\u884C\u4E0B\u8F7D\u3002</p><p>\u63D0\u53D6\u7801\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u83B7\u5F97\uFF1A</p>`,15),u=a("\u4E0B\u8F7D\u5730\u5740\uFF1A"),m={href:"https://pan.baidu.com/s/1JbICafwEdIwHnsDlGvPIMw",target:"_blank",rel:"noopener noreferrer"},d=a("https://pan.baidu.com/s/1JbICafwEdIwHnsDlGvPIMw"),k=n("li",null,[n("p",null,"\u63D0\u53D6\u7801: 4iaq")],-1),h=s(`<h3 id="_1-\u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u3002" aria-hidden="true">#</a> 1\uFF0C\u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>config/environment.sh <span class="token comment">#\u4FEE\u6539ip\u4E3A\u81EA\u5DF1\u5C06\u8981\u90E8\u7F72\u7684\u673A\u5668ip</span>
config/Kcsh/hosts  <span class="token comment">#\u4FEE\u6539ip\u4E3A\u81EA\u5DF1\u5C06\u8981\u90E8\u7F72\u7684\u673A\u5668ip</span>
config/Ketcd/etcd-csr.json <span class="token comment">#\u4FEE\u6539ip\u4E3A\u81EA\u5DF1\u5C06\u8981\u90E8\u7F72\u7684\u673A\u5668ip</span>
config/Kmaster/Kha/haproxy.cfg <span class="token comment">#\u4FEE\u6539ip\u4E3A\u81EA\u5DF1\u5C06\u8981\u90E8\u7F72\u7684\u673A\u5668ip</span>
config/Kmaster/Kapi/kubernetes-csr.json <span class="token comment">#\u4FEE\u6539ip\u4E3A\u81EA\u5DF1\u5C06\u8981\u90E8\u7F72\u7684\u673A\u5668ip</span>
config/Kmaster/Kmanage/kube-controller-manager-csr.json <span class="token comment">#\u4FEE\u6539ip\u4E3A\u81EA\u5DF1\u5C06\u8981\u90E8\u7F72\u7684\u673A\u5668ip</span>
config/Kmaster/Kscheduler/kube-scheduler-csr.json <span class="token comment">#\u4FEE\u6539ip\u4E3A\u81EA\u5DF1\u5C06\u8981\u90E8\u7F72\u7684\u673A\u5668ip</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-\u57FA\u7840\u914D\u7F6E\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u7840\u914D\u7F6E\u3002" aria-hidden="true">#</a> 2\uFF0C\u57FA\u7840\u914D\u7F6E\u3002</h3><p>\u8FD9\u4E9B\u64CD\u4F5C\u5747\u5728 kube-node1 \u4E3B\u673A\u4E0A\u6267\u884C\u3002</p><p><code>\u6CE8\u610F\uFF1A</code>\u8BF7\u4E25\u683C\u6309\u7167\u5982\u4E0B\u8FD9\u51E0\u6B65\u64CD\u4F5C\u8FDB\u884C\uFF0C\u5426\u5219\u53EF\u80FD\u5BFC\u81F4\u4E0B\u8FB9\u90E8\u7F72\u811A\u672C\u65E0\u6CD5\u6B63\u5E38\u8D70\u5B8C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id <span class="token number">192.168</span>.111.3
ssh-copy-id <span class="token number">192.168</span>.111.4
ssh-copy-id <span class="token number">192.168</span>.111.5
<span class="token function">scp</span> config/Kcsh/hosts root@192.168.111.3:/etc/hosts
<span class="token function">scp</span> config/Kcsh/hosts root@192.168.111.4:/etc/hosts
<span class="token function">scp</span> config/Kcsh/hosts root@192.168.111.5:/etc/hosts
<span class="token function">ssh</span> root@kube-node1 <span class="token string">&quot;hostnamectl set-hostname kube-node1&quot;</span>
<span class="token function">ssh</span> root@kube-node2 <span class="token string">&quot;hostnamectl set-hostname kube-node2&quot;</span>
<span class="token function">ssh</span> root@kube-node3 <span class="token string">&quot;hostnamectl set-hostname kube-node3&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_3-\u6B63\u5F0F\u90E8\u7F72\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u6B63\u5F0F\u90E8\u7F72\u3002" aria-hidden="true">#</a> 3\uFF0C\u6B63\u5F0F\u90E8\u7F72\u3002</h2><p>\u90E8\u7F72\u975E\u5E38\u7B80\u5355\uFF0C\u76F4\u63A5\u6267\u884C<code>magic.sh</code>\u811A\u672C\u5373\u53EF\u3002</p><p>\u4E0D\u8FC7\u6709\u51E0\u70B9\u9700\u8981\u505A\u4E00\u4E0B\u7B80\u5355\u8BF4\u660E\uFF1A</p><ul><li>1\uFF0C\u542F\u52A8\u6B63\u5F0F\u90E8\u7F72\u4E4B\u524D\uFF0C\u52A1\u5FC5\u4ED4\u7EC6\u8BA4\u771F\u68C0\u67E5\u5404\u5904\u914D\u7F6E\u662F\u5426\u4E0E\u6240\u9700\u6C42\u7684\u76F8\u5339\u914D\u4E86\uFF0C\u82E5\u4E0D\u5339\u914D\uFF0C\u5E94\u5F53\u8C03\u6574\u3002</li><li>2\uFF0C\u90E8\u7F72\u8FC7\u7A0B\u4E2D\u5982\u679C\u6709\u5361\u58F3\uFF0C\u6216\u8005\u672A\u6B63\u5E38\u90E8\u7F72\u800C\u9000\u51FA\uFF0C\u8BF7\u6839\u636E\u5BF9\u5E94\u7684\u90E8\u7F72\u9636\u6BB5\u8FDB\u884C\u6392\u67E5\uFF0C\u7136\u540E\u91CD\u65B0\u6267\u884C\u90E8\u7F72\u811A\u672C\uFF0C\u5373\u53EF\u8FDB\u884C\u63A5\u7EED\u90E8\u7F72\u3002</li><li>3\uFF0C\u5982\u5BF9\u811A\u672C\u4E2D\u4E00\u4E9B\u4E0D\u8DB3\u5730\u65B9\u6709\u4EFB\u4F55\u5EFA\u8BAE\uFF0C\u6B22\u8FCE\u4E0E\u6211\u63D0\u51FA\uFF0C\u4E00\u8D77\u7EF4\u62A4\uFF0C\u5171\u540C\u8FDB\u6B65\uFF01</li></ul><h2 id="_4-\u7B80\u5355\u9A8C\u8BC1\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u7B80\u5355\u9A8C\u8BC1\u3002" aria-hidden="true">#</a> 4\uFF0C\u7B80\u5355\u9A8C\u8BC1\u3002</h2><p>\u90E8\u7F72\u5B8C\u6210\u4E4B\u540E\uFF0C\u53EF\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\u4E00\u4E9B\u5BF9\u96C6\u7FA4\u53EF\u7528\u6027\u7684\u521D\u6B65\u68C0\u9A8C\uFF1A</p><h3 id="_1-\u68C0\u67E5\u670D\u52A1\u662F\u5426\u5747\u5DF2\u6B63\u5E38\u542F\u52A8\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u68C0\u67E5\u670D\u52A1\u662F\u5426\u5747\u5DF2\u6B63\u5E38\u542F\u52A8\u3002" aria-hidden="true">#</a> 1\uFF0C\u68C0\u67E5\u670D\u52A1\u662F\u5426\u5747\u5DF2\u6B63\u5E38\u542F\u52A8\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token comment">#author:eryajf</span>
<span class="token comment">#blog:wiki.eryajf.net</span>
<span class="token comment">#time:2018-11</span>
<span class="token comment">#</span>
<span class="token builtin class-name">set</span> -e
<span class="token builtin class-name">source</span> /opt/k8s/bin/environment.sh
<span class="token comment">#</span>
<span class="token comment">##set color##</span>
<span class="token function-name function">echoRed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">$&#39;<span class="token entity" title="\\e">\\e</span>[0;31m&#39;</span>&quot;<span class="token variable">$1</span><span class="token string">&quot;$&#39;<span class="token entity" title="\\e">\\e</span>[0m&#39;; }
echoGreen() { echo $&#39;<span class="token entity" title="\\e">\\e</span>[0;32m&#39;&quot;</span><span class="token variable">$1</span><span class="token string">&quot;$&#39;<span class="token entity" title="\\e">\\e</span>[0m&#39;; }
echoYellow() { echo $&#39;<span class="token entity" title="\\e">\\e</span>[0;33m&#39;&quot;</span><span class="token variable">$1</span><span class="token string">&quot;$&#39;<span class="token entity" title="\\e">\\e</span>[0m&#39;; }
##set color##
#
for node_ip in <span class="token variable">\${NODE_IPS<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
do
    echoGreen &quot;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token variable">\${node_ip}</span><span class="token string">&quot;
    ssh root@<span class="token variable">\${node_ip}</span> &quot;</span>systemctl status etcd<span class="token operator">|</span><span class="token function">grep</span> Active<span class="token string">&quot;
    ssh root@<span class="token variable">\${node_ip}</span> &quot;</span>systemctl status flanneld<span class="token operator">|</span><span class="token function">grep</span> Active<span class="token string">&quot;
    ssh root@<span class="token variable">\${node_ip}</span> &quot;</span>systemctl status haproxy<span class="token operator">|</span><span class="token function">grep</span> Active<span class="token string">&quot;
    ssh root@<span class="token variable">\${node_ip}</span> &quot;</span>systemctl status keepalived<span class="token operator">|</span><span class="token function">grep</span> Active<span class="token string">&quot;
    ssh root@<span class="token variable">\${node_ip}</span> &quot;</span>systemctl status kube-apiserver <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;Active:&#39;</span><span class="token string">&quot;
    ssh root@<span class="token variable">\${node_ip}</span> &quot;</span>systemctl status kube-controller-manager<span class="token operator">|</span><span class="token function">grep</span> Active<span class="token string">&quot;
    ssh root@<span class="token variable">\${node_ip}</span> &quot;</span>systemctl status kube-scheduler<span class="token operator">|</span><span class="token function">grep</span> Active<span class="token string">&quot;
    ssh root@<span class="token variable">\${node_ip}</span> &quot;</span>systemctl status docker<span class="token operator">|</span><span class="token function">grep</span> Active<span class="token string">&quot;
    ssh root@<span class="token variable">\${node_ip}</span> &quot;</span>systemctl status kubelet <span class="token operator">|</span> <span class="token function">grep</span> Active<span class="token string">&quot;
    ssh root@<span class="token variable">\${node_ip}</span> &quot;</span>systemctl status kube-proxy<span class="token operator">|</span><span class="token function">grep</span> Active&quot;
<span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="_2-\u67E5\u770B\u76F8\u5173\u670D\u52A1\u53EF\u7528\u6027\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u76F8\u5173\u670D\u52A1\u53EF\u7528\u6027\u3002" aria-hidden="true">#</a> 2\uFF0C\u67E5\u770B\u76F8\u5173\u670D\u52A1\u53EF\u7528\u6027\u3002</h3><h4 id="_1-\u9A8C\u8BC1-etcd-\u96C6\u7FA4\u53EF\u7528\u6027\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u9A8C\u8BC1-etcd-\u96C6\u7FA4\u53EF\u7528\u6027\u3002" aria-hidden="true">#</a> 1\uFF0C\u9A8C\u8BC1 etcd \u96C6\u7FA4\u53EF\u7528\u6027\u3002</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ETCDCTL_API=3 /opt/k8s/bin/etcdctl \\
    --endpoints=https://\${node_ip}:2379 \\
    --cacert=/etc/kubernetes/cert/ca.pem \\
    --cert=/etc/etcd/cert/etcd.pem \\
    --key=/etc/etcd/cert/etcd-key.pem endpoint health
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="_2-\u9A8C\u8BC1-flannel-\u7F51\u7EDC\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u9A8C\u8BC1-flannel-\u7F51\u7EDC\u3002" aria-hidden="true">#</a> 2\uFF0C\u9A8C\u8BC1 flannel \u7F51\u7EDC\u3002</h4><p>\u67E5\u770B\u5DF2\u5206\u914D\u7684 Pod \u5B50\u7F51\u6BB5\u5217\u8868\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /opt/k8s/bin/environment.sh
etcdctl <span class="token punctuation">\\</span>
  --endpoints<span class="token operator">=</span><span class="token variable">\${ETCD_ENDPOINTS}</span> <span class="token punctuation">\\</span>
  --ca-file<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  --cert-file<span class="token operator">=</span>/etc/flanneld/cert/flanneld.pem <span class="token punctuation">\\</span>
  --key-file<span class="token operator">=</span>/etc/flanneld/cert/flanneld-key.pem <span class="token punctuation">\\</span>
  <span class="token function">ls</span> <span class="token variable">\${FLANNEL_ETCD_PREFIX}</span>/subnets
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/kubernetes/network/subnets/172.30.84.0-24
/kubernetes/network/subnets/172.30.8.0-24
/kubernetes/network/subnets/172.30.29.0-24
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9A8C\u8BC1\u5404\u8282\u70B9\u80FD\u901A\u8FC7 Pod \u7F51\u6BB5\u4E92\u901A\uFF1A</p><p><code>\u6CE8\u610F\u5176\u4E2D\u7684IP\u6BB5\u6362\u6210\u81EA\u5DF1\u7684\u3002</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh \${node_ip} &quot;ping -c 1 172.30.8.0&quot;
    ssh \${node_ip} &quot;ping -c 1 172.30.29.0&quot;
    ssh \${node_ip} &quot;ping -c 1 172.30.84.0&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_3-\u9AD8\u53EF\u7528\u7EC4\u4EF6\u9A8C\u8BC1\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u9AD8\u53EF\u7528\u7EC4\u4EF6\u9A8C\u8BC1\u3002" aria-hidden="true">#</a> 3\uFF0C\u9AD8\u53EF\u7528\u7EC4\u4EF6\u9A8C\u8BC1\u3002</h4><p>\u67E5\u770B VIP \u6240\u5728\u7684\u8282\u70B9\uFF0C\u786E\u4FDD\u53EF\u4EE5 ping \u901A VIP\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh \${node_ip} &quot;/usr/sbin/ip addr show \${VIP_IF}&quot;
    ssh \${node_ip} &quot;ping -c 1 \${MASTER_VIP}&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_4-\u9AD8\u53EF\u7528\u6027\u8BD5\u9A8C\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u9AD8\u53EF\u7528\u6027\u8BD5\u9A8C\u3002" aria-hidden="true">#</a> 4\uFF0C\u9AD8\u53EF\u7528\u6027\u8BD5\u9A8C\u3002</h4><p>\u67E5\u770B\u5F53\u524D\u7684 leader\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get endpoints kube-controller-manager --namespace<span class="token operator">=</span>kube-system  -o yaml
apiVersion: v1
kind: Endpoints
metadata:
  annotations:
    control-plane.alpha.kubernetes.io/leader: <span class="token string">&#39;{&quot;holderIdentity&quot;:&quot;kube-node1_444fbc06-f3d8-11e8-8ca8-0050568f514f&quot;,&quot;leaseDurationSeconds&quot;:15,&quot;acquireTime&quot;:&quot;2018-11-29T13:11:21Z&quot;,&quot;renewTime&quot;:&quot;2018-11-29T13:48:10Z&quot;,&quot;leaderTransitions&quot;:0}&#39;</span>
  creationTimestamp: <span class="token number">2018</span>-11-29T13:11:21Z
  name: kube-controller-manager
  namespace: kube-system
  resourceVersion: <span class="token string">&quot;3134&quot;</span>
  selfLink: /api/v1/namespaces/kube-system/endpoints/kube-controller-manager
  uid: 4452bff1-f3d8-11e8-a5a6-0050568fef9b
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u53EF\u89C1\uFF0C\u5F53\u524D\u7684 leader \u4E3A kube-node1 \u8282\u70B9\u3002</p><p>\u73B0\u5728\u505C\u6389 kube-node1 \u4E0A\u7684 kube-controller-manager\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$systemctl</span> stop kube-controller-manager
<span class="token variable">$systemctl</span> status kube-controller-manager <span class="token operator">|</span><span class="token function">grep</span> Active
   Active: inactive <span class="token punctuation">(</span>dead<span class="token punctuation">)</span> since Sat <span class="token number">2018</span>-11-24 00:52:53 CST<span class="token punctuation">;</span> 44s ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5927\u6982\u4E00\u5206\u949F\u540E\uFF0C\u518D\u67E5\u770B\u4E00\u4E0B\u5F53\u524D\u7684 leader\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get endpoints kube-controller-manager --namespace<span class="token operator">=</span>kube-system  -o yaml
apiVersion: v1
kind: Endpoints
metadata:
  annotations:
    control-plane.alpha.kubernetes.io/leader: <span class="token string">&#39;{&quot;holderIdentity&quot;:&quot;kube-node3_45525ae6-f3d8-11e8-a2b8-0050568fbcaa&quot;,&quot;leaseDurationSeconds&quot;:15,&quot;acquireTime&quot;:&quot;2018-11-29T13:49:28Z&quot;,&quot;renewTime&quot;:&quot;2018-11-29T13:49:28Z&quot;,&quot;leaderTransitions&quot;:1}&#39;</span>
  creationTimestamp: <span class="token number">2018</span>-11-29T13:11:21Z
  name: kube-controller-manager
  namespace: kube-system
  resourceVersion: <span class="token string">&quot;3227&quot;</span>
  selfLink: /api/v1/namespaces/kube-system/endpoints/kube-controller-manager
  uid: 4452bff1-f3d8-11e8-a5a6-0050568fef9b
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u81EA\u52A8\u6F02\u79FB\u5230 kube-node3 \u4E0A\u53BB\u4E86\u3002</p><h4 id="_5-\u67E5\u9A8C-kube-proxy-\u529F\u80FD\u3002" tabindex="-1"><a class="header-anchor" href="#_5-\u67E5\u9A8C-kube-proxy-\u529F\u80FD\u3002" aria-hidden="true">#</a> 5\uFF0C\u67E5\u9A8C kube-proxy \u529F\u80FD\u3002</h4><p>\u67E5\u770B ipvs \u8DEF\u7531\u89C4\u5219</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;/usr/sbin/ipvsadm -ln&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.120
IP Virtual Server version <span class="token number">1.2</span>.1 <span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">4096</span><span class="token punctuation">)</span>
Prot LocalAddress:Port Scheduler Flags
  -<span class="token operator">&gt;</span> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  <span class="token number">10.254</span>.0.1:443 rr persistent <span class="token number">10800</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.120:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.121:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.122:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.121
IP Virtual Server version <span class="token number">1.2</span>.1 <span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">4096</span><span class="token punctuation">)</span>
Prot LocalAddress:Port Scheduler Flags
  -<span class="token operator">&gt;</span> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  <span class="token number">10.254</span>.0.1:443 rr persistent <span class="token number">10800</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.120:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.121:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.122:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.122
IP Virtual Server version <span class="token number">1.2</span>.1 <span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">4096</span><span class="token punctuation">)</span>
Prot LocalAddress:Port Scheduler Flags
  -<span class="token operator">&gt;</span> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  <span class="token number">10.254</span>.0.1:443 rr persistent <span class="token number">10800</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.120:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.121:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.122:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="_6-\u521B\u5EFA\u4E00\u4E2A\u5E94\u7528\u3002" tabindex="-1"><a class="header-anchor" href="#_6-\u521B\u5EFA\u4E00\u4E2A\u5E94\u7528\u3002" aria-hidden="true">#</a> 6\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5E94\u7528\u3002</h4><p>\u67E5\u770B\u96C6\u7FA4\u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get node
NAME         STATUS    ROLES     AGE       VERSION
kube-node1   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    45m       v1.10.4
kube-node2   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    45m       v1.10.4
kube-node3   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    45m       v1.10.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u521B\u5EFA\u6D4B\u8BD5\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> nginx-ds.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: v1
kind: Service
metadata:
  name: nginx-ds
  labels:
    app: nginx-ds
spec:
  type: NodePort
  selector:
    app: nginx-ds
  ports:
  - name: http
    port: 80
    targetPort: 80
---
apiVersion: extensions/v1beta1
kind: DaemonSet
metadata:
  name: nginx-ds
  labels:
    addonmanager.kubernetes.io/mode: Reconcile
spec:
  template:
    metadata:
      labels:
        app: nginx-ds
    spec:
      containers:
      - name: my-nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u6267\u884C\u5B9A\u4E49\u6587\u4EF6\uFF0C\u542F\u52A8\u4E4B\u524D\uFF0C\u53EF\u4EE5\u5148\u5C06\u4E0A\u8FB9\u5B9A\u4E49\u7684\u955C\u50CF pull \u4E0B\u6765\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl create -f nginx-ds.yml
<span class="token function">service</span> <span class="token string">&quot;nginx-ds&quot;</span> created
daemonset.extensions <span class="token string">&quot;nginx-ds&quot;</span> created
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u68C0\u67E5\u5404 Node \u4E0A\u7684 Pod IP \u8FDE\u901A\u6027</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get pods  -o wide<span class="token operator">|</span><span class="token function">grep</span> nginx-ds
nginx-ds-78lqz   <span class="token number">1</span>/1       Running   <span class="token number">0</span>          2m        <span class="token number">172.30</span>.87.2   kube-node3
nginx-ds-j45zf   <span class="token number">1</span>/1       Running   <span class="token number">0</span>          2m        <span class="token number">172.30</span>.99.2   kube-node2
nginx-ds-xhttt   <span class="token number">1</span>/1       Running   <span class="token number">0</span>          2m        <span class="token number">172.30</span>.55.2   kube-node1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u53EF\u89C1\uFF0Cnginx-ds \u7684 Pod IP \u5206\u522B\u662F 172.30.84.2\u3001172.30.8.2\u3001172.30.29.2\uFF0C\u5728\u6240\u6709 Node \u4E0A\u5206\u522B ping \u8FD9\u4E09\u4E2A IP\uFF0C\u770B\u662F\u5426\u8FDE\u901A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    ssh \${node_ip} &quot;ping -c 1 172.30.87.2&quot;
    ssh \${node_ip} &quot;ping -c 1 172.30.99.2&quot;
    ssh \${node_ip} &quot;ping -c 1 172.30.55.2&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u68C0\u67E5\u670D\u52A1 IP \u548C\u7AEF\u53E3\u53EF\u8FBE\u6027</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get svc <span class="token operator">|</span><span class="token function">grep</span> nginx-ds
nginx-ds           NodePort    <span class="token number">10.254</span>.110.153   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:8781/TCP      6h
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u6240\u6709 Node \u4E0A curl Service IP\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh \${node_ip} &quot;curl 10.254.128.98&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u68C0\u67E5\u670D\u52A1\u7684 NodePort \u53EF\u8FBE\u6027</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh \${node_ip} &quot;curl \${node_ip}:8996&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,59);function g(v,q){const e=p("ExternalLinkIcon");return t(),r(o,null,[b,n("ul",null,[n("li",null,[n("p",null,[u,n("a",m,[d,l(e)])])]),k]),h],64)}var x=c(i,[["render",g]]);export{x as default};
