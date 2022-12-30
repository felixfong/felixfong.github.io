import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u672C\u6587\u6863\u4ECB\u7ECD\u90E8\u7F72\u4E00\u4E2A\u4E09\u4E2A\u8282\u70B9\u9AD8\u53EF\u7528 etcd \u96C6\u7FA4\u7684\u6B65\u9AA4\uFF1A</p><ul><li>\u4E0B\u8F7D\u548C\u5206\u53D1 etcd \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1B</li><li>\u521B\u5EFA etcd \u96C6\u7FA4\u5404\u8282\u70B9\u7684 x509 \u8BC1\u4E66\uFF0C\u7528\u4E8E\u52A0\u5BC6\u5BA2\u6237\u7AEF (\u5982 etcdctl) \u4E0E etcd \u96C6\u7FA4\u3001etcd \u96C6\u7FA4\u4E4B\u95F4\u7684\u6570\u636E\u6D41\uFF1B</li><li>\u521B\u5EFA etcd \u7684 systemd unit \u6587\u4EF6\uFF0C\u914D\u7F6E\u670D\u52A1\u53C2\u6570\uFF1B</li><li>\u68C0\u67E5\u96C6\u7FA4\u5DE5\u4F5C\u72B6\u6001\uFF1B</li></ul><h2 id="_1-\u4E0B\u8F7D\u548C\u5206\u53D1-etcd-\u4E8C\u8FDB\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u548C\u5206\u53D1-etcd-\u4E8C\u8FDB\u5236\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u4E0B\u8F7D\u548C\u5206\u53D1 etcd \u4E8C\u8FDB\u5236\u6587\u4EF6</h2><p>\u5230 https://github.com/coreos/etcd/releases \u9875\u9762\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u7684\u53D1\u5E03\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/coreos/etcd/releases/download/v3.3.7/etcd-v3.3.7-linux-amd64.tar.gz
<span class="token function">tar</span> -xvf etcd-v3.3.7-linux-amd64.tar.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5206\u53D1\u4E8C\u8FDB\u5236\u6587\u4EF6\u5230\u96C6\u7FA4\u6240\u6709\u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    scp etcd-v3.3.7-linux-amd64/etcd* k8s@\${node_ip}:/opt/k8s/bin
    ssh k8s@\${node_ip} &quot;chmod +x /opt/k8s/bin/*&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_2-\u521B\u5EFA-etcd-\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA-etcd-\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA etcd \u8BC1\u4E66\u548C\u79C1\u94A5</h2><p>\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> etcd-csr.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;CN&quot;: &quot;etcd&quot;,
  &quot;hosts&quot;: [
    &quot;127.0.0.1&quot;,
    &quot;192.168.106.3&quot;,
    &quot;192.168.106.4&quot;,
    &quot;192.168.106.5&quot;
  ],
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;ST&quot;: &quot;BeiJing&quot;,
      &quot;L&quot;: &quot;BeiJing&quot;,
      &quot;O&quot;: &quot;k8s&quot;,
      &quot;OU&quot;: &quot;4Paradigm&quot;
    }
  ]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul><li>hosts \u5B57\u6BB5\u6307\u5B9A\u6388\u6743\u4F7F\u7528\u8BE5\u8BC1\u4E66\u7684 etcd \u8282\u70B9 IP \u6216\u57DF\u540D\u5217\u8868\uFF0C\u8FD9\u91CC\u5C06 etcd \u96C6\u7FA4\u7684\u4E09\u4E2A\u8282\u70B9 IP \u90FD\u5217\u5728\u5176\u4E2D</li></ul><p>\u751F\u6210\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cfssl</span> gencert -ca<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
    -ca-key<span class="token operator">=</span>/etc/kubernetes/cert/ca-key.pem <span class="token punctuation">\\</span>
    -config<span class="token operator">=</span>/etc/kubernetes/cert/ca-config.json <span class="token punctuation">\\</span>
    -profile<span class="token operator">=</span>kubernetes etcd-csr.json <span class="token operator">|</span> cfssljson -bare etcd
<span class="token variable">$ls</span> etcd*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5206\u53D1\u751F\u6210\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\u5230\u5404 etcd \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    ssh root@\${node_ip} &quot;mkdir -p /etc/etcd/cert &amp;&amp; chown -R k8s /etc/etcd/cert&quot;
    scp etcd*.pem k8s@\${node_ip}:/etc/etcd/cert/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_3-\u521B\u5EFA-etcd-\u7684-systemd-unit-\u6A21\u677F\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA-etcd-\u7684-systemd-unit-\u6A21\u677F\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA etcd \u7684 systemd unit \u6A21\u677F\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span> <span class="token operator">&gt;</span> etcd.service.template <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target
Documentation=https://github.com/coreos
[Service]
User=k8s
Type=notify
WorkingDirectory=/var/lib/etcd/
ExecStart=/opt/k8s/bin/etcd <span class="token entity" title="\\\\">\\\\</span>
  --data-dir=/var/lib/etcd <span class="token entity" title="\\\\">\\\\</span>
  --name=##NODE_NAME## <span class="token entity" title="\\\\">\\\\</span>
  --cert-file=/etc/etcd/cert/etcd.pem <span class="token entity" title="\\\\">\\\\</span>
  --key-file=/etc/etcd/cert/etcd-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --trusted-ca-file=/etc/kubernetes/cert/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-cert-file=/etc/etcd/cert/etcd.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-key-file=/etc/etcd/cert/etcd-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-trusted-ca-file=/etc/kubernetes/cert/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --peer-client-cert-auth <span class="token entity" title="\\\\">\\\\</span>
  --client-cert-auth <span class="token entity" title="\\\\">\\\\</span>
  --listen-peer-urls=https://##NODE_IP##:2380 <span class="token entity" title="\\\\">\\\\</span>
  --initial-advertise-peer-urls=https://##NODE_IP##:2380 <span class="token entity" title="\\\\">\\\\</span>
  --listen-client-urls=https://##NODE_IP##:2379,http://127.0.0.1:2379 <span class="token entity" title="\\\\">\\\\</span>
  --advertise-client-urls=https://##NODE_IP##:2379 <span class="token entity" title="\\\\">\\\\</span>
  --initial-cluster-token=etcd-cluster-0 <span class="token entity" title="\\\\">\\\\</span>
  --initial-cluster=<span class="token variable">\${ETCD_NODES}</span> <span class="token entity" title="\\\\">\\\\</span>
  --initial-cluster-state=new
Restart=on-failure
RestartSec=5
LimitNOFILE=65536
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><ul><li><code>User\uFF1A</code>\u6307\u5B9A\u4EE5 k8s \u8D26\u6237\u8FD0\u884C\uFF1B</li><li><code>WorkingDirectory\u3001--data-dir\uFF1A</code>\u6307\u5B9A\u5DE5\u4F5C\u76EE\u5F55\u548C\u6570\u636E\u76EE\u5F55\u4E3A /var/lib/etcd\uFF0C\u9700\u5728\u542F\u52A8\u670D\u52A1\u524D\u521B\u5EFA\u8FD9\u4E2A\u76EE\u5F55\uFF1B</li><li><code>--name\uFF1A</code>\u6307\u5B9A\u8282\u70B9\u540D\u79F0\uFF0C\u5F53 \u2013initial-cluster-state \u503C\u4E3A new \u65F6\uFF0C\u2013name \u7684\u53C2\u6570\u503C\u5FC5\u987B\u4F4D\u4E8E \u2013initial-cluster \u5217\u8868\u4E2D\uFF1B</li><li><code>--cert-file\u3001--key-file\uFF1A</code>etcd server \u4E0E client \u901A\u4FE1\u65F6\u4F7F\u7528\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1B</li><li><code>--trusted-ca-file\uFF1A</code>\u7B7E\u540D client \u8BC1\u4E66\u7684 CA \u8BC1\u4E66\uFF0C\u7528\u4E8E\u9A8C\u8BC1 client \u8BC1\u4E66\uFF1B</li><li><code>--peer-cert-file\u3001--peer-key-file\uFF1A</code>etcd \u4E0E peer \u901A\u4FE1\u4F7F\u7528\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1B</li><li><code>--peer-trusted-ca-file\uFF1A</code>\u7B7E\u540D peer \u8BC1\u4E66\u7684 CA \u8BC1\u4E66\uFF0C\u7528\u4E8E\u9A8C\u8BC1 peer \u8BC1\u4E66\uFF1B</li></ul><h2 id="_4-\u5C06\u521A\u521A\u7684\u6587\u4EF6\u521D\u59CB\u5316\u6210\u8282\u70B9\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u5C06\u521A\u521A\u7684\u6587\u4EF6\u521D\u59CB\u5316\u6210\u8282\u70B9\u53EF\u7528" aria-hidden="true">#</a> 4\uFF0C\u5C06\u521A\u521A\u7684\u6587\u4EF6\u521D\u59CB\u5316\u6210\u8282\u70B9\u53EF\u7528</h2><p>\u66FF\u6362\u6A21\u677F\u6587\u4EF6\u4E2D\u7684\u53D8\u91CF\uFF0C\u4E3A\u5404\u8282\u70B9\u521B\u5EFA systemd unit \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for (( i=0; i &lt; 3; i++ ))
do
    sed -e &quot;s/##NODE_NAME##/\${NODE_NAMES[i]}/&quot; -e &quot;s/##NODE_IP##/\${NODE_IPS[i]}/&quot; etcd.service.template &gt; etcd-\${NODE_IPS[i]}.service 
done
EOF</span>
<span class="token variable">$bash</span> magic.sh
<span class="token variable">$ls</span> *.service
etcd-192.168.106.3.service  etcd-192.168.106.4.service  etcd-192.168.106.5.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>NODE_NAMES \u548C NODE_IPS \u4E3A\u76F8\u540C\u957F\u5EA6\u7684 bash \u6570\u7EC4\uFF0C\u5206\u522B\u4E3A\u8282\u70B9\u540D\u79F0\u548C\u5BF9\u5E94\u7684 IP\uFF1B</li></ul><p>\u5206\u53D1\u751F\u6210\u7684 systemd unit \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    ssh root@\${node_ip} &quot;mkdir -p /var/lib/etcd &amp;&amp; chown -R k8s /var/lib/etcd&quot; 
    scp etcd-\${node_ip}.service root@\${node_ip}:/etc/systemd/system/etcd.service
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u5982\u679C\u524D\u8FB9\u6CA1\u6709 etcd \u6570\u636E\u76EE\u5F55\u548C\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u8FD9\u91CC\u9700\u8981\u5148\u521B\u5EFA\u3002</li><li>\u6587\u4EF6\u91CD\u547D\u540D\u4E3A etcd.service\u3002</li></ul><h2 id="_5-\u542F\u52A8-etcd-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_5-\u542F\u52A8-etcd-\u670D\u52A1" aria-hidden="true">#</a> 5\uFF0C\u542F\u52A8 etcd \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;systemctl daemon-reload &amp;&amp; systemctl enable etcd &amp;&amp; systemctl start etcd &amp;&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>etcd \u8FDB\u7A0B\u9996\u6B21\u542F\u52A8\u65F6\u4F1A\u7B49\u5F85\u5176\u5B83\u8282\u70B9\u7684 etcd \u52A0\u5165\u96C6\u7FA4\uFF0C\u547D\u4EE4 systemctl start etcd \u4F1A\u5361\u4F4F\u4E00\u6BB5\u65F6\u95F4\uFF0C\u4E3A\u6B63\u5E38\u73B0\u8C61\u3002</li></ul><h2 id="_6-\u68C0\u67E5\u542F\u52A8\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_6-\u68C0\u67E5\u542F\u52A8\u7ED3\u679C" aria-hidden="true">#</a> 6\uFF0C\u68C0\u67E5\u542F\u52A8\u7ED3\u679C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh k8s@\${node_ip} &quot;systemctl status etcd|grep Active&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7ED3\u679C\u5982\u4E0B\uFF0C\u5219\u8BF4\u660E\u6B63\u5E38\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">16</span>:56:13 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">16</span>:56:13 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">16</span>:56:20 CST<span class="token punctuation">;</span> 6h ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5426\u5219\u67E5\u770B\u65E5\u5FD7\uFF0C\u786E\u8BA4\u539F\u56E0\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ journalctl -xu etcd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_7-\u9A8C\u8BC1\u670D\u52A1\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_7-\u9A8C\u8BC1\u670D\u52A1\u72B6\u6001" aria-hidden="true">#</a> 7\uFF0C\u9A8C\u8BC1\u670D\u52A1\u72B6\u6001</h2><p>\u90E8\u7F72\u5B8C etcd \u96C6\u7FA4\u540E\uFF0C\u5728\u4EFB\u4E00 etc \u8282\u70B9\u4E0A\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7ED3\u679C\u5982\u4E0B\uFF0C\u5219\u8BF4\u660E\u6B63\u5E38\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
https://192.168.106.3:2379 is healthy: successfully committed proposal: took <span class="token operator">=</span> <span class="token number">1</span>.899188ms
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
https://192.168.106.4:2379 is healthy: successfully committed proposal: took <span class="token operator">=</span> <span class="token number">1</span>.653305ms
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
https://192.168.106.5:2379 is healthy: successfully committed proposal: took <span class="token operator">=</span> <span class="token number">1</span>.811279ms
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA\u5747\u4E3A healthy \u65F6\u8868\u793A\u96C6\u7FA4\u670D\u52A1\u6B63\u5E38\u3002</p>`,40);function t(p,l){return e}var i=s(a,[["render",t]]);export{i as default};
