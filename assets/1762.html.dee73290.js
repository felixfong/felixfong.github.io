import{r as l,o as r,c as p,b as n,a as t,F as i,e,d as s}from"./app.dbf5d933.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const b={},o=e(`<p>\u5728\u4E09\u4E2A\u8282\u70B9\u90FD\u5B89\u88C5 etcd\uFF0C\u4E0B\u9762\u7684\u64CD\u4F5C\u9700\u8981\u5728\u4E09\u4E2A\u8282\u70B9\u90FD\u6267\u884C\u4E00\u904D\u3002</p><h2 id="_1-\u4E0B\u8F7D-etcd-\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D-etcd-\u5B89\u88C5\u5305" aria-hidden="true">#</a> 1\uFF0C\u4E0B\u8F7D etcd \u5B89\u88C5\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># wget https://github.com/coreos/etcd/releases/download/v3.2.12/etcd-v3.2.12-linux-amd64.tar.gz</span>
 
<span class="token comment"># tar -xvf etcd-v3.2.12-linux-amd64.tar.gz</span>
 
<span class="token comment"># sudo mv etcd-v3.2.12-linux-amd64/etcd* /usr/local/bin</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_2-\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> -p /var/lib/etcd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_3-\u521B\u5EFA-systemd-unit-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA-systemd-unit-\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA systemd unit \u6587\u4EF6</h2><p>\u8FD9\u4E2A\u5730\u65B9\u4E3A\u4E86\u907F\u514D\u8DF3\u5751\u91CC\u8FB9\uFF0C\u6211\u76F4\u63A5\u4E09\u53F0\u4E3B\u673A\u7684\u914D\u7F6E\u90FD\u8D34\u51FA\u6765\u4E86\u3002</p><h3 id="_1-master" tabindex="-1"><a class="header-anchor" href="#_1-master" aria-hidden="true">#</a> 1\uFF0Cmaster</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> etcd.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target
Documentation=https://github.com/coreos
 
[Service]
Type=notify
WorkingDirectory=/var/lib/etcd/
ExecStart=/usr/local/bin/etcd <span class="token entity" title="\\\\">\\\\</span>
  --name master <span class="token entity" title="\\\\">\\\\</span>         //\u4FEE\u6539\u6B64\u5904
  --cert-file=/etc/kubernetes/ssl/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --key-file=/etc/kubernetes/ssl/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-cert-file=/etc/kubernetes/ssl/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-key-file=/etc/kubernetes/ssl/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --trusted-ca-file=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-trusted-ca-file=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --initial-advertise-peer-urls https://192.168.106.3:2380 <span class="token entity" title="\\\\">\\\\</span>     //\u6B64\u5904
  --listen-peer-urls https://192.168.106.3:2380 <span class="token entity" title="\\\\">\\\\</span>        //\u6B64\u5904
  --listen-client-urls https://192.168.106.3:2379,http://127.0.0.1:2379 <span class="token entity" title="\\\\">\\\\</span>        //\u6B64\u5904
  --advertise-client-urls https://192.168.106.3:2379 <span class="token entity" title="\\\\">\\\\</span>   //\u6B64\u5904
  --initial-cluster-token etcd-cluster-0 <span class="token entity" title="\\\\">\\\\</span>
  --initial-cluster master=https://192.168.106.3:2380,node01=https://192.168.106.4:2380,node02=https://192.168.106.5:2380 <span class="token entity" title="\\\\">\\\\</span>        //\u6B64\u5904 \u4E0D\u8981\u5FFD\u7565name
  --initial-cluster-state new <span class="token entity" title="\\\\">\\\\</span>
  --data-dir=/var/lib/etcd
Restart=on-failure
RestartSec=5
LimitNOFILE=65536
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><ul><li>\u6CE8\u610F 1\uFF1A\u5982\u4E0A\u7684 IP \u5730\u5740 192.168.106.XXX \u8BF7\u9010\u4E00\u66FF\u6362\u6210\u4F60\u81EA\u5DF1\u670D\u52A1\u5668\u7684 IP\u3002</li><li>\u6CE8\u610F 2\uFF1A\u4E0D\u8981\u5FFD\u7565 name, \u6CE8\u610F\u4E2D\u95F4\u6BB5\u7684\u914D\u7F6E\u662F\u4E00\u884C\uFF0C\u56E0\u6B64\u6BCF\u884C\u540E\u8FB9\u90FD\u8981\u6709\u4E00\u4E2A\u53CD\u659C\u6760 \\ \u4F5C\u4E3A\u6362\u884C\u3002</li></ul><h3 id="_2-node01" tabindex="-1"><a class="header-anchor" href="#_2-node01" aria-hidden="true">#</a> 2\uFF0Cnode01</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> etcd.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target
Documentation=https://github.com/coreos
 
[Service]
Type=notify
WorkingDirectory=/var/lib/etcd/
ExecStart=/usr/local/bin/etcd <span class="token entity" title="\\\\">\\\\</span>
  --name node01 <span class="token entity" title="\\\\">\\\\</span>
  --cert-file=/etc/kubernetes/ssl/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --key-file=/etc/kubernetes/ssl/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-cert-file=/etc/kubernetes/ssl/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-key-file=/etc/kubernetes/ssl/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --trusted-ca-file=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-trusted-ca-file=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --initial-advertise-peer-urls https://192.168.106.4:2380 <span class="token entity" title="\\\\">\\\\</span>
  --listen-peer-urls https://192.168.106.4:2380 <span class="token entity" title="\\\\">\\\\</span>
  --listen-client-urls https://192.168.106.4:2379,http://127.0.0.1:2379 <span class="token entity" title="\\\\">\\\\</span>
  --advertise-client-urls https://192.168.106.4:2379 <span class="token entity" title="\\\\">\\\\</span>
  --initial-cluster-token etcd-cluster-0 <span class="token entity" title="\\\\">\\\\</span>
  --initial-cluster master=https://192.168.106.3:2380,node01=https://192.168.106.4:2380,node02=https://192.168.106.5:2380 <span class="token entity" title="\\\\">\\\\</span>
  --initial-cluster-state new <span class="token entity" title="\\\\">\\\\</span>
  --data-dir=/var/lib/etcd
Restart=on-failure
RestartSec=5
LimitNOFILE=65536
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="_3-node02" tabindex="-1"><a class="header-anchor" href="#_3-node02" aria-hidden="true">#</a> 3\uFF0Cnode02</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> etcd.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target
Documentation=https://github.com/coreos
 
[Service]
Type=notify
WorkingDirectory=/var/lib/etcd/
ExecStart=/usr/local/bin/etcd <span class="token entity" title="\\\\">\\\\</span>
  --name node02 <span class="token entity" title="\\\\">\\\\</span>
  --cert-file=/etc/kubernetes/ssl/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --key-file=/etc/kubernetes/ssl/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-cert-file=/etc/kubernetes/ssl/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-key-file=/etc/kubernetes/ssl/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --trusted-ca-file=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-trusted-ca-file=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --initial-advertise-peer-urls https://192.168.106.5:2380 <span class="token entity" title="\\\\">\\\\</span>
  --listen-peer-urls https://192.168.106.5:2380 <span class="token entity" title="\\\\">\\\\</span>
  --listen-client-urls https://192.168.106.5:2379,http://127.0.0.1:2379 <span class="token entity" title="\\\\">\\\\</span>
  --advertise-client-urls https://192.168.106.5:2379 <span class="token entity" title="\\\\">\\\\</span>
  --initial-cluster-token etcd-cluster-0 <span class="token entity" title="\\\\">\\\\</span>
  --initial-cluster master=https://192.168.106.3:2380,node01=https://192.168.106.4:2380,node02=https://192.168.106.5:2380 <span class="token entity" title="\\\\">\\\\</span>
  --initial-cluster-state new <span class="token entity" title="\\\\">\\\\</span>
  --data-dir=/var/lib/etcd
Restart=on-failure
RestartSec=5
LimitNOFILE=65536
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="_4-\u597D\u597D\u770B\u770B\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_4-\u597D\u597D\u770B\u770B\u6CE8\u91CA" aria-hidden="true">#</a> 4\uFF0C\u597D\u597D\u770B\u770B\u6CE8\u91CA</h3><p>\u4E0B\u9762\u7ED9\u51FA\u5E38\u7528\u914D\u7F6E\u7684\u53C2\u6570\u548C\u5B83\u4EEC\u7684\u89E3\u91CA\uFF0C\u65B9\u4FBF\u7406\u89E3\uFF1A</p>`,16),u=e("<li><code>--name</code>\uFF1A\u65B9\u4FBF\u7406\u89E3\u7684\u8282\u70B9\u540D\u79F0\uFF0C\u9ED8\u8BA4\u4E3A default\uFF0C\u5728\u96C6\u7FA4\u4E2D\u5E94\u8BE5\u4FDD\u6301\u552F\u4E00\uFF0C\u53EF\u4EE5\u4F7F\u7528 hostname</li><li><code>--data-dir</code>\uFF1A\u670D\u52A1\u8FD0\u884C\u6570\u636E\u4FDD\u5B58\u7684\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A ${name}.etcd</li><li><code>--snapshot-count</code>\uFF1A\u6307\u5B9A\u6709\u591A\u5C11\u4E8B\u52A1\uFF08transaction\uFF09\u88AB\u63D0\u4EA4\u65F6\uFF0C\u89E6\u53D1\u622A\u53D6\u5FEB\u7167\u4FDD\u5B58\u5230\u78C1\u76D8</li><li><code>--heartbeat-interval</code>\uFF1Aleader \u591A\u4E45\u53D1\u9001\u4E00\u6B21\u5FC3\u8DF3\u5230 followers\u3002\u9ED8\u8BA4\u503C\u662F 100ms</li><li><code>--eletion-timeout</code>\uFF1A\u91CD\u65B0\u6295\u7968\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5982\u679C follow \u5728\u8BE5\u65F6\u95F4\u95F4\u9694\u6CA1\u6709\u6536\u5230\u5FC3\u8DF3\u5305\uFF0C\u4F1A\u89E6\u53D1\u91CD\u65B0\u6295\u7968\uFF0C\u9ED8\u8BA4\u4E3A 1000 ms</li>",5),d=n("code",null,"--listen-peer-urls",-1),m=s("\uFF1A\u548C\u540C\u4F34\u901A\u4FE1\u7684\u5730\u5740\uFF0C\u6BD4\u5982 "),h={href:"http://ip:2380%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%9C%89%E5%A4%9A%E4%B8%AA%EF%BC%8C%E4%BD%BF%E7%94%A8%E9%80%97%E5%8F%B7%E5%88%86%E9%9A%94%E3%80%82%E9%9C%80%E8%A6%81%E6%89%80%E6%9C%89%E8%8A%82%E7%82%B9%E9%83%BD%E8%83%BD%E5%A4%9F%E8%AE%BF%E9%97%AE%EF%BC%8C%E6%89%80%E4%BB%A5%E4%B8%8D%E8%A6%81%E4%BD%BF%E7%94%A8/",target:"_blank",rel:"noopener noreferrer"},k=s("http://ip:2380\uFF0C\u5982\u679C\u6709\u591A\u4E2A\uFF0C\u4F7F\u7528\u9017\u53F7\u5206\u9694\u3002\u9700\u8981\u6240\u6709\u8282\u70B9\u90FD\u80FD\u591F\u8BBF\u95EE\uFF0C\u6240\u4EE5\u4E0D\u8981\u4F7F\u7528"),f=s(" localhost\uFF01"),y=n("code",null,"--listen-client-urls",-1),g=s("\uFF1A\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u7684\u5730\u5740\uFF1A\u6BD4\u5982 "),v={href:"http://ip:2379%2Chttp//127.0.0.1:2379%EF%BC%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BC%9A%E8%BF%9E%E6%8E%A5%E5%88%B0%E8%BF%99%E9%87%8C%E5%92%8C",target:"_blank",rel:"noopener noreferrer"},E=s("http://ip:2379,http://127.0.0.1:2379\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u8FDE\u63A5\u5230\u8FD9\u91CC\u548C"),_=s(" etcd \u4EA4\u4E92"),x=e("<li><code>--advertise-client-urls</code>\uFF1A\u5BF9\u5916\u516C\u544A\u7684\u8BE5\u8282\u70B9\u5BA2\u6237\u7AEF\u76D1\u542C\u5730\u5740\uFF0C\u8FD9\u4E2A\u503C\u4F1A\u544A\u8BC9\u96C6\u7FA4\u4E2D\u5176\u4ED6\u8282\u70B9</li><li><code>--initial-advertise-peer-urls</code>\uFF1A\u8BE5\u8282\u70B9\u540C\u4F34\u76D1\u542C\u5730\u5740\uFF0C\u8FD9\u4E2A\u503C\u4F1A\u544A\u8BC9\u96C6\u7FA4\u4E2D\u5176\u4ED6\u8282\u70B9</li><li><code>--initial-cluster</code>\uFF1A\u96C6\u7FA4\u4E2D\u6240\u6709\u8282\u70B9\u7684\u4FE1\u606F\uFF0C\u683C\u5F0F\u4E3A node1=http://ip1:2380,node2=http://ip2:2380,\u2026\u3002\u6CE8\u610F\uFF1A\u8FD9\u91CC\u7684 node1 \u662F\u8282\u70B9\u7684 \u2013name \u6307\u5B9A\u7684\u540D\u5B57\uFF1B\u540E\u9762\u7684 ip1:2380 \u662F \u2013initial-advertise-peer-urls \u6307\u5B9A\u7684\u503C</li><li><code>--initial-cluster-state</code>\uFF1A\u65B0\u5EFA\u96C6\u7FA4\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u503C\u4E3A new\uFF1B\u5047\u5982\u5DF2\u7ECF\u5B58\u5728\u7684\u96C6\u7FA4\uFF0C\u8FD9\u4E2A\u503C\u4E3A existing</li><li><code>--initial-cluster-token</code>\uFF1A\u521B\u5EFA\u96C6\u7FA4\u7684 token\uFF0C\u8FD9\u4E2A\u503C\u6BCF\u4E2A\u96C6\u7FA4\u4FDD\u6301\u552F\u4E00\u3002\u8FD9\u6837\u7684\u8BDD\uFF0C\u5982\u679C\u4F60\u8981\u91CD\u65B0\u521B\u5EFA\u96C6\u7FA4\uFF0C\u5373\u4F7F\u914D\u7F6E\u548C\u4E4B\u524D\u4E00\u6837\uFF0C\u4E5F\u4F1A\u518D\u6B21\u751F\u6210\u65B0\u7684\u96C6\u7FA4\u548C\u8282\u70B9 uuid\uFF1B\u5426\u5219\u4F1A\u5BFC\u81F4\u591A\u4E2A\u96C6\u7FA4\u4E4B\u95F4\u7684\u51B2\u7A81\uFF0C\u9020\u6210\u672A\u77E5\u7684\u9519\u8BEF</li>",5),w=e(`<p>\u6240\u6709\u4EE5 \u2013init \u5F00\u5934\u7684\u914D\u7F6E\u90FD\u662F\u5728 bootstrap \u96C6\u7FA4\u7684\u65F6\u5019\u624D\u4F1A\u7528\u5230\uFF0C\u540E\u7EED\u8282\u70B9\u7684\u91CD\u542F\u4F1A\u88AB\u5FFD\u7565\u3002</p><p>NOTE\uFF1A\u6240\u6709\u7684\u53C2\u6570\u4E5F\u53EF\u4EE5\u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u2013my-flag \u5BF9\u5E94\u73AF\u5883\u53D8\u91CF\u7684 ETCD_MY_FLAG\uFF1B\u4F46\u662F\u547D\u4EE4\u884C\u6307\u5B9A\u7684\u53C2\u6570\u4F1A\u8986\u76D6\u73AF\u5883\u53D8\u91CF\u5BF9\u5E94\u7684\u503C\u3002</p><p>\u6307\u5B9A etcd \u7684\u5DE5\u4F5C\u76EE\u5F55\u4E3A /var/lib/etcd\uFF0C\u6570\u636E\u76EE\u5F55\u4E3A /var/lib/etcd\uFF0C\u9700\u5728\u542F\u52A8\u670D\u52A1\u524D\u521B\u5EFA\u8FD9\u4E2A\u76EE\u5F55\uFF0C\u5426\u5219\u542F\u52A8\u670D\u52A1\u7684\u65F6\u5019\u4F1A\u62A5\u9519 \u201CFailed at step CHDIR spawning /usr/bin/etcd: No such file or directory\u201D\uFF1B</p><p>\u4E3A\u4E86\u4FDD\u8BC1\u901A\u4FE1\u5B89\u5168\uFF0C\u9700\u8981\u6307\u5B9A etcd \u7684\u516C\u79C1\u94A5 (cert-file \u548C key-file)\u3001Peers \u901A\u4FE1\u7684\u516C\u79C1\u94A5\u548C CA \u8BC1\u4E66 (peer-cert-file\u3001peer-key-file\u3001peer-trusted-ca-file)\u3001\u5BA2\u6237\u7AEF\u7684 CA \u8BC1\u4E66\uFF08trusted-ca-file\uFF09\uFF1B</p><p>\u521B\u5EFA kubernetes.pem \u8BC1\u4E66\u65F6\u4F7F\u7528\u7684 kubernetes-csr.json \u6587\u4EF6\u7684 hosts \u5B57\u6BB5\u5305\u542B\u6240\u6709 etcd \u8282\u70B9\u7684 IP\uFF0C\u5426\u5219\u8BC1\u4E66\u6821\u9A8C\u4F1A\u51FA\u9519\uFF1B</p><p>\u2013initial-cluster-state \u503C\u4E3A new \u65F6\uFF0C\u2013name \u7684\u53C2\u6570\u503C\u5FC5\u987B\u4F4D\u4E8E \u2013initial-cluster \u5217\u8868\u4E2D\uFF1B</p><h2 id="_4-\u542F\u52A8-etcd-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u52A8-etcd-\u670D\u52A1" aria-hidden="true">#</a> 4\uFF0C\u542F\u52A8 etcd \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> etcd.service /etc/systemd/system/
 
systemctl daemon-reload
 
systemctl <span class="token builtin class-name">enable</span> etcd
 
systemctl start etcd
 
systemctl status etcd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6700\u5148\u542F\u52A8\u7684 etcd \u8FDB\u7A0B\u4F1A\u5361\u4F4F\u4E00\u6BB5\u65F6\u95F4\uFF0C\u7B49\u5F85\u5176\u5B83\u8282\u70B9\u4E0A\u7684 etcd \u8FDB\u7A0B\u52A0\u5165\u96C6\u7FA4\uFF0C\u4E3A\u6B63\u5E38\u73B0\u8C61\u3002</p><p>\u5982\u679C\u5728\u6267\u884C\u5F00\u673A\u81EA\u542F\u7684\u65F6\u5019\u62A5\u9519<code>Bad message</code>\uFF0C\u90A3\u4E48\u4E00\u822C\u5C31\u662F\u4E0A\u8FB9\u7684\u914D\u7F6E\u4FE1\u606F\u6709\u95EE\u9898\uFF0C\u8FD9\u4E2A\u65F6\u5019\u91CD\u65B0\u68C0\u67E5\u914D\u7F6E\u4FE1\u606F\uFF0C\u7136\u540E\u91CD\u65B0\u52A0\u8F7D\u91CD\u65B0\u542F\u52A8\u5373\u53EF\u3002</p><p>\u5982\u4E0A\u64CD\u4F5C\u8BF7\u786E\u8BA4\u4E00\u5B9A\u8981\u5728\u4E09\u53F0\u673A\u5668\u4E0A\u9762\u90FD\u8981\u6267\u884C\uFF08\u5355\u8282\u70B9 ETCD \u9664\u5916\uFF09\u3002</p><h2 id="_5-\u9A8C\u8BC1-etcd-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_5-\u9A8C\u8BC1-etcd-\u670D\u52A1" aria-hidden="true">#</a> 5\uFF0C\u9A8C\u8BC1 etcd \u670D\u52A1</h2><p>\u5728\u4EFB\u4F55\u4E00\u4E2A etcd \u8282\u70B9\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF08\u5982\u679C\u4E0D\u6DFB\u52A0\u5BC6\u94A5\u53C2\u6570\u662F\u4F1A\u62A5\u9519\u7684\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token variable">$etcdctl</span> cluster-health
failed to check the health of member 4838d3e6217ff2a1 on https://192.168.106.4:2379: Get https://192.168.106.4:2379/health: x509: certificate signed by unknown authority
member 4838d3e6217ff2a1 is unreachable: <span class="token punctuation">[</span>https://192.168.106.4:2379<span class="token punctuation">]</span> are all unreachable
failed to check the health of member d4635870b1fea87f on https://192.168.106.5:2379: Get https://192.168.106.5:2379/health: x509: certificate signed by unknown authority
member d4635870b1fea87f is unreachable: <span class="token punctuation">[</span>https://192.168.106.5:2379<span class="token punctuation">]</span> are all unreachable
failed to check the health of member fa16f2892f13a4d6 on https://192.168.106.3:2379: Get https://192.168.106.3:2379/health: x509: certificate signed by unknown authority
member fa16f2892f13a4d6 is unreachable: <span class="token punctuation">[</span>https://192.168.106.3:2379<span class="token punctuation">]</span> are all unreachable
cluster is unhealthy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F7F\u7528\u5BC6\u94A5\u65B9\u5F0F\u68C0\u67E5\u96C6\u7FA4\u72B6\u6001\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master member<span class="token punctuation">]</span><span class="token variable">$etcdctl</span> --ca-file<span class="token operator">=</span>/etc/kubernetes/ssl/ca.pem --cert-file<span class="token operator">=</span>/etc/kubernetes/ssl/kubernetes.pem --key-file<span class="token operator">=</span>/etc/kubernetes/ssl/kubernetes-key.pem cluster-health
member 4838d3e6217ff2a1 is healthy: got healthy result from https://192.168.106.4:2379
member fa16f2892f13a4d6 is healthy: got healthy result from https://192.168.106.3:2379
cluster is healthy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u5730\u65B9\u76F4\u63A5\u5728 master \u8282\u70B9\u9A8C\u8BC1\uFF0C\u4E00\u822C\u6CA1\u4EC0\u4E48\u95EE\u9898\uFF0C\u68C0\u6D4B\u6B63\u5E38\uFF0C\u4F46\u662F\u4E5F\u53EF\u4EE5\u53BB node \u8282\u70B9\u68C0\u6D4B\u4E00\u4E0B\uFF0C\u4E00\u68C0\u6D4B\uFF0C\u53D1\u73B0\u8FD8\u662F\u62A5\u9519\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node01 k8s<span class="token punctuation">]</span><span class="token variable">$etcdctl</span> --ca-file<span class="token operator">=</span>/etc/kubernetes/ssl/ca.pem --cert-file<span class="token operator">=</span>/etc/kubernetes/ssl/kubernetes.pem --key-file<span class="token operator">=</span>/etc/kubernetes/ssl/kubernetes-key.pem cluster-health
failed to check the health of member 4838d3e6217ff2a1 on https://192.168.106.4:2379: Get https://192.168.106.4:2379/health: x509: certificate has expired or is not yet valid
member 4838d3e6217ff2a1 is unreachable: <span class="token punctuation">[</span>https://192.168.106.4:2379<span class="token punctuation">]</span> are all unreachable
failed to check the health of member d4635870b1fea87f on https://192.168.106.5:2379: Get https://192.168.106.5:2379/health: x509: certificate has expired or is not yet valid
member d4635870b1fea87f is unreachable: <span class="token punctuation">[</span>https://192.168.106.5:2379<span class="token punctuation">]</span> are all unreachable
failed to check the health of member fa16f2892f13a4d6 on https://192.168.106.3:2379: Get https://192.168.106.3:2379/health: x509: certificate has expired or is not yet valid
member fa16f2892f13a4d6 is unreachable: <span class="token punctuation">[</span>https://192.168.106.3:2379<span class="token punctuation">]</span> are all unreachable
cluster is unhealthy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><code>\u95EE\u9898\u539F\u56E0</code>\uFF1A\u53EF\u80FD\u662F\u4E3B\u673A\u65F6\u95F4\u4E0D\u540C\u6B65\u7684\u539F\u56E0\u3002</li><li><code>\u89E3\u51B3\u529E\u6CD5</code>\uFF1A\u4EE4\u5176\u540C\u6B65\uFF0C\u5206\u522B\u5728\u4E09\u53F0\u4E3B\u673A\u4E0A\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> ntp <span class="token operator">&amp;&amp;</span> ntpdate -u cn.pool.ntp.org
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_6-\u90E8\u7F72-flannel" tabindex="-1"><a class="header-anchor" href="#_6-\u90E8\u7F72-flannel" aria-hidden="true">#</a> 6\uFF0C\u90E8\u7F72 Flannel</h2><p>\u5728\u4E09\u4E2A\u8282\u70B9\u90FD\u5B89\u88C5 Flannel\uFF0C\u4E0B\u9762\u7684\u64CD\u4F5C\u9700\u8981\u5728\u4E09\u4E2A\u8282\u70B9\u90FD\u6267\u884C\u4E00\u904D\u3002</p><p>\u4E0B\u8F7D\u5B89\u88C5 Flannel\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># wget https://github.com/coreos/flannel/releases/download/v0.9.1/flannel-v0.9.1-linux-amd64.tar.gz</span>
 
<span class="token comment"># mkdir flannel</span>
 
<span class="token comment"># tar -xzvf flannel-v0.9.1-linux-amd64.tar.gz -C flannel</span>
 
<span class="token comment"># sudo cp flannel/{flanneld,mk-docker-opts.sh} /usr/local/bin</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5411 etcd \u5199\u5165\u7F51\u6BB5\u4FE1\u606F\uFF0C\u8FD9\u4E24\u4E2A\u547D\u4EE4\u53EA\u9700\u8981\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9\u4E0A\u6267\u884C\u4E00\u6B21\u5C31\u53EF\u4EE5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /kubernetes/network/config
 
etcdctl --endpoints<span class="token operator">=</span>https://192.168.106.3:2379,https://192.168.106.4:2379,https://192.168.106.5:2379 <span class="token punctuation">\\</span>
--ca-file<span class="token operator">=</span>/etc/kubernetes/ssl/ca.pem <span class="token punctuation">\\</span>
--cert-file<span class="token operator">=</span>/etc/kubernetes/ssl/kubernetes.pem <span class="token punctuation">\\</span>
--key-file<span class="token operator">=</span>/etc/kubernetes/ssl/kubernetes-key.pem <span class="token punctuation">\\</span>
<span class="token builtin class-name">set</span> /kubernetes/network/config <span class="token string">&#39;{&quot;Network&quot;:&quot;172.30.0.0/16&quot;,&quot;SubnetLen&quot;:24,&quot;Backend&quot;:{&quot;Type&quot;:&quot;vxlan&quot;}}&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6CE8\u610F\u5982\u4E0A\u66F4\u6362\u6210\u81EA\u5DF1\u7684 IP\u3002</p><p>\u521B\u5EFA systemd unit \u6587\u4EF6 \u5728\u4E09\u53F0\u673A\u5668\u4E0A\u9762\u90FD\u9700\u8981\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> flanneld.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Flanneld overlay address etcd agent
After=network.target
After=network-online.target
Wants=network-online.target
After=etcd.service
Before=docker.service
 
[Service]
Type=notify
ExecStart=/usr/local/bin/flanneld <span class="token entity" title="\\\\">\\\\</span>
  -etcd-cafile=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  -etcd-certfile=/etc/kubernetes/ssl/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  -etcd-keyfile=/etc/kubernetes/ssl/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  -etcd-endpoints=https://192.168.106.3:2379,https://192.168.106.4:2379,https://192.168.106.5:2379 <span class="token entity" title="\\\\">\\\\</span>
  -etcd-prefix=/kubernetes/network
ExecStartPost=/usr/local/bin/mk-docker-opts.sh -k DOCKER_NETWORK_OPTIONS -d /run/flannel/docker
Restart=on-failure
 
[Install]
WantedBy=multi-user.target
RequiredBy=docker.service
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>mk-docker-opts.sh \u811A\u672C\u5C06\u5206\u914D\u7ED9 flanneld \u7684 Pod \u5B50\u7F51\u7F51\u6BB5\u4FE1\u606F\u5199\u5165\u5230 /run/flannel/docker \u6587\u4EF6\u4E2D\uFF0C\u540E\u7EED docker \u542F\u52A8\u65F6\u4F7F\u7528\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u53C2\u6570\u503C\u8BBE\u7F6E docker0 \u7F51\u6865\uFF1B</p><p>flanneld \u4F7F\u7528\u7CFB\u7EDF\u7F3A\u7701\u8DEF\u7531\u6240\u5728\u7684\u63A5\u53E3\u548C\u5176\u5B83\u8282\u70B9\u901A\u4FE1\uFF0C\u5BF9\u4E8E\u6709\u591A\u4E2A\u7F51\u7EDC\u63A5\u53E3\u7684\u673A\u5668\uFF08\u5982\uFF0C\u5185\u7F51\u548C\u516C\u7F51\uFF09\uFF0C\u53EF\u4EE5\u7528 -iface=enpxx \u9009\u9879\u503C\u6307\u5B9A\u901A\u4FE1\u63A5\u53E3\u3002</p><h2 id="_7-\u542F\u52A8-flannel" tabindex="-1"><a class="header-anchor" href="#_7-\u542F\u52A8-flannel" aria-hidden="true">#</a> 7\uFF0C\u542F\u52A8 Flannel</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> flanneld.service /etc/systemd/system/
 
systemctl daemon-reload
 
systemctl <span class="token builtin class-name">enable</span> flanneld
 
systemctl start flanneld
 
systemctl status flanneld
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_8-\u68C0\u67E5-flannel-\u670D\u52A1\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_8-\u68C0\u67E5-flannel-\u670D\u52A1\u72B6\u6001" aria-hidden="true">#</a> 8\uFF0C\u68C0\u67E5 flannel \u670D\u52A1\u72B6\u6001</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># /usr/local/bin/etcdctl  --endpoints=https://192.168.106.3:2379,https://192.168.106.4:2379,https://192.168.106.5:2379  --ca-file=/etc/kubernetes/ssl/ca.pem  --cert-file=/etc/kubernetes/ssl/kubernetes.pem  --key-file=/etc/kubernetes/ssl/kubernetes-key.pem  ls /kubernetes/network/subnets</span>
 
/kubernetes/network/subnets/172.30.31.0-24
/kubernetes/network/subnets/172.30.63.0-24
/kubernetes/network/subnets/172.30.76.0-24
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7531\u6B64\u53EF\u4EE5\u770B\u51FA\uFF0C\u5982\u4E0A\u4E09\u4E2A\u8282\u70B9 pod \u7684\u7F51\u6BB5\uFF01</p><p>\u90E8\u7F72 Flannel \u7F51\u7EDC\uFF0Ckubernetes \u8981\u6C42\u96C6\u7FA4\u5185\u5404\u8282\u70B9\u80FD\u901A\u8FC7 Pod \u7F51\u6BB5\u4E92\u8054\u4E92\u901A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ping</span> <span class="token number">172.30</span>.31.0
$ <span class="token function">ping</span> <span class="token number">172.30</span>.63.0
$ <span class="token function">ping</span> <span class="token number">172.30</span>.76.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,38);function B(A,F){const a=l("ExternalLinkIcon");return r(),p(i,null,[o,n("ul",null,[u,n("li",null,[d,m,n("a",h,[k,t(a)]),f]),n("li",null,[y,g,n("a",v,[E,t(a)]),_]),x]),w],64)}var S=c(b,[["render",B]]);export{S as default};
