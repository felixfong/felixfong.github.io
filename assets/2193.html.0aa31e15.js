import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>flannel \u7B2C\u4E00\u6B21\u542F\u52A8\u65F6\uFF0C\u4ECE etcd \u83B7\u53D6 Pod \u7F51\u6BB5\u4FE1\u606F\uFF0C\u4E3A\u672C\u8282\u70B9\u5206\u914D\u4E00\u4E2A\u672A\u4F7F\u7528\u7684 /24 \u6BB5\u5730\u5740\uFF0C\u7136\u540E\u521B\u5EFA flannel.1\uFF08\u4E5F\u53EF\u80FD\u662F\u5176\u5B83\u540D\u79F0\uFF0C\u5982 flannel1 \u7B49\uFF09 \u63A5\u53E3\u3002</p><p>flannel \u5C06\u5206\u914D\u7684 Pod \u7F51\u6BB5\u4FE1\u606F\u5199\u5165 /run/flannel/docker \u6587\u4EF6\uFF0Cdocker \u540E\u7EED\u4F7F\u7528\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E docker0 \u7F51\u6865\u3002</p><h2 id="_1-\u4E0B\u8F7D\u548C\u5206\u53D1-flanneld-\u4E8C\u8FDB\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u548C\u5206\u53D1-flanneld-\u4E8C\u8FDB\u5236\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u4E0B\u8F7D\u548C\u5206\u53D1 flanneld \u4E8C\u8FDB\u5236\u6587\u4EF6</h2><p>\u5230 https://github.com/coreos/flannel/releases \u9875\u9762\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u7684\u53D1\u5E03\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> flannel
<span class="token function">wget</span> https://github.com/coreos/flannel/releases/download/v0.10.0/flannel-v0.10.0-linux-amd64.tar.gz
<span class="token function">tar</span> -xzvf flannel-v0.10.0-linux-amd64.tar.gz -C flannel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5206\u53D1 flanneld \u4E8C\u8FDB\u5236\u6587\u4EF6\u5230\u96C6\u7FA4\u6240\u6709\u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp  flannel/{flanneld,mk-docker-opts.sh} k8s@\${node_ip}:/opt/k8s/bin/
    ssh k8s@\${node_ip} &quot;chmod +x /opt/k8s/bin/*&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_2-\u521B\u5EFA-flannel-\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA-flannel-\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA flannel \u8BC1\u4E66\u548C\u79C1\u94A5</h2><p>flannel \u4ECE etcd \u96C6\u7FA4\u5B58\u53D6\u7F51\u6BB5\u5206\u914D\u4FE1\u606F\uFF0C\u800C etcd \u96C6\u7FA4\u542F\u7528\u4E86\u53CC\u5411 x509 \u8BC1\u4E66\u8BA4\u8BC1\uFF0C\u6240\u4EE5\u9700\u8981\u4E3A flanneld \u751F\u6210\u8BC1\u4E66\u548C\u79C1\u94A5\u3002</p><p>\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> flanneld-csr.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;CN&quot;: &quot;flanneld&quot;,
  &quot;hosts&quot;: [],
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>\u8BE5\u8BC1\u4E66\u53EA\u4F1A\u88AB kubectl \u5F53\u505A client \u8BC1\u4E66\u4F7F\u7528\uFF0C\u6240\u4EE5 hosts \u5B57\u6BB5\u4E3A\u7A7A\uFF1B</li></ul><p>\u751F\u6210\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cfssl</span> gencert -ca<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  -ca-key<span class="token operator">=</span>/etc/kubernetes/cert/ca-key.pem <span class="token punctuation">\\</span>
  -config<span class="token operator">=</span>/etc/kubernetes/cert/ca-config.json <span class="token punctuation">\\</span>
  -profile<span class="token operator">=</span>kubernetes flanneld-csr.json <span class="token operator">|</span> cfssljson -bare flanneld
<span class="token variable">$ls</span> flanneld*pem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5C06\u751F\u6210\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\u5206\u53D1\u5230\u6240\u6709\u8282\u70B9\uFF08master \u548C worker\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;mkdir -p /etc/flanneld/cert &amp;&amp; chown -R k8s /etc/flanneld&quot;
    scp flanneld*.pem k8s@\${node_ip}:/etc/flanneld/cert
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_3-\u5411-etcd-\u5199\u5165\u96C6\u7FA4-pod-\u7F51\u6BB5\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3-\u5411-etcd-\u5199\u5165\u96C6\u7FA4-pod-\u7F51\u6BB5\u4FE1\u606F" aria-hidden="true">#</a> 3\uFF0C\u5411 etcd \u5199\u5165\u96C6\u7FA4 Pod \u7F51\u6BB5\u4FE1\u606F</h2><p><code>\u6CE8\u610F\uFF1A\u672C\u6B65\u9AA4\u53EA\u9700\u6267\u884C\u4E00\u6B21\u3002</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$etcdctl</span> <span class="token punctuation">\\</span>
  --endpoints<span class="token operator">=</span><span class="token variable">\${ETCD_ENDPOINTS}</span> <span class="token punctuation">\\</span>
  --ca-file<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  --cert-file<span class="token operator">=</span>/etc/flanneld/cert/flanneld.pem <span class="token punctuation">\\</span>
  --key-file<span class="token operator">=</span>/etc/flanneld/cert/flanneld-key.pem <span class="token punctuation">\\</span>
  <span class="token builtin class-name">set</span> <span class="token variable">\${FLANNEL_ETCD_PREFIX}</span>/config <span class="token string">&#39;{&quot;Network&quot;:&quot;&#39;</span><span class="token variable">\${CLUSTER_CIDR}</span><span class="token string">&#39;&quot;, &quot;SubnetLen&quot;: 24, &quot;Backend&quot;: {&quot;Type&quot;: &quot;vxlan&quot;}}&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>flanneld \u5F53\u524D\u7248\u672C (v0.10.0) \u4E0D\u652F\u6301 etcd v3\uFF0C\u6545\u4F7F\u7528 etcd v2 API \u5199\u5165\u914D\u7F6E key \u548C\u7F51\u6BB5\u6570\u636E\uFF1B</li><li>\u5199\u5165\u7684 Pod \u7F51\u6BB5 \${CLUSTER_CIDR} \u5FC5\u987B\u662F /16 \u6BB5\u5730\u5740\uFF0C\u5FC5\u987B\u4E0E kube-controller-manager \u7684 --cluster-cidr \u53C2\u6570\u503C\u4E00\u81F4\uFF1B</li></ul><h2 id="_4-\u521B\u5EFA-flanneld-\u7684-systemd-unit-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA-flanneld-\u7684-systemd-unit-\u6587\u4EF6" aria-hidden="true">#</a> 4\uFF0C\u521B\u5EFA flanneld \u7684 systemd unit \u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span> <span class="token operator">&gt;</span> flanneld.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Flanneld overlay address etcd agent
After=network.target
After=network-online.target
Wants=network-online.target
After=etcd.service
Before=docker.service
[Service]
Type=notify
ExecStart=/opt/k8s/bin/flanneld <span class="token entity" title="\\\\">\\\\</span>
  -etcd-cafile=/etc/kubernetes/cert/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  -etcd-certfile=/etc/flanneld/cert/flanneld.pem <span class="token entity" title="\\\\">\\\\</span>
  -etcd-keyfile=/etc/flanneld/cert/flanneld-key.pem <span class="token entity" title="\\\\">\\\\</span>
  -etcd-endpoints=<span class="token variable">\${ETCD_ENDPOINTS}</span> <span class="token entity" title="\\\\">\\\\</span>
  -etcd-prefix=<span class="token variable">\${FLANNEL_ETCD_PREFIX}</span> <span class="token entity" title="\\\\">\\\\</span>
  -iface=<span class="token variable">\${VIP_IF}</span>
ExecStartPost=/opt/k8s/bin/mk-docker-opts.sh -k DOCKER_NETWORK_OPTIONS -d /run/flannel/docker
Restart=on-failure
[Install]
WantedBy=multi-user.target
RequiredBy=docker.service
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul><li>mk-docker-opts.sh \u811A\u672C\u5C06\u5206\u914D\u7ED9 flanneld \u7684 Pod \u5B50\u7F51\u7F51\u6BB5\u4FE1\u606F\u5199\u5165 /run/flannel/docker \u6587\u4EF6\uFF0C\u540E\u7EED docker \u542F\u52A8\u65F6\u4F7F\u7528\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF\u914D\u7F6E docker0 \u7F51\u6865\uFF1B</li><li>flanneld \u4F7F\u7528\u7CFB\u7EDF\u7F3A\u7701\u8DEF\u7531\u6240\u5728\u7684\u63A5\u53E3\u4E0E\u5176\u5B83\u8282\u70B9\u901A\u4FE1\uFF0C\u5BF9\u4E8E\u6709\u591A\u4E2A\u7F51\u7EDC\u63A5\u53E3\uFF08\u5982\u5185\u7F51\u548C\u516C\u7F51\uFF09\u7684\u8282\u70B9\uFF0C\u53EF\u4EE5\u7528 -iface \u53C2\u6570\u6307\u5B9A\u901A\u4FE1\u63A5\u53E3\uFF0C\u5982\u4E0A\u9762\u7684 eth0 \u63A5\u53E3;</li><li>flanneld \u8FD0\u884C\u65F6\u9700\u8981 root \u6743\u9650\uFF1B</li></ul><h2 id="_5-\u5206\u53D1-flanneld-systemd-unit-\u6587\u4EF6\u5230\u6240\u6709\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_5-\u5206\u53D1-flanneld-systemd-unit-\u6587\u4EF6\u5230\u6240\u6709\u8282\u70B9" aria-hidden="true">#</a> 5\uFF0C\u5206\u53D1 flanneld systemd unit \u6587\u4EF6\u5230\u6240\u6709\u8282\u70B9</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp flanneld.service root@\${node_ip}:/etc/systemd/system/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_6-\u542F\u52A8-flanneld-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_6-\u542F\u52A8-flanneld-\u670D\u52A1" aria-hidden="true">#</a> 6\uFF0C\u542F\u52A8 flanneld \u670D\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; magic.sh &lt;&lt; &quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;systemctl daemon-reload &amp;&amp; systemctl enable flanneld &amp;&amp; systemctl start flanneld&quot;
done
EOF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_7-\u68C0\u67E5\u542F\u52A8\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_7-\u68C0\u67E5\u542F\u52A8\u7ED3\u679C" aria-hidden="true">#</a> 7\uFF0C\u68C0\u67E5\u542F\u52A8\u7ED3\u679C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh k8s@\${node_ip} &quot;systemctl status flanneld|grep Active&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u770B\u5230\u5982\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">17</span>:11:40 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">17</span>:11:40 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">17</span>:11:41 CST<span class="token punctuation">;</span> 6h ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5219\u8BF4\u660E\u6B63\u5E38\uFF0C\u5982\u679C\u5931\u8D25\uFF0C\u5219\u7528\u5982\u4E0B\u547D\u4EE4\u67E5\u770B\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>journalctl -ux flanneld
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_8-\u68C0\u67E5\u5206\u914D\u7ED9\u5404-flanneld-\u7684-pod-\u7F51\u6BB5\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_8-\u68C0\u67E5\u5206\u914D\u7ED9\u5404-flanneld-\u7684-pod-\u7F51\u6BB5\u4FE1\u606F" aria-hidden="true">#</a> 8\uFF0C\u68C0\u67E5\u5206\u914D\u7ED9\u5404 flanneld \u7684 Pod \u7F51\u6BB5\u4FE1\u606F</h2><p>\u67E5\u770B\u96C6\u7FA4 Pod \u7F51\u6BB5 (/16)\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /opt/k8s/bin/environment.sh
etcdctl <span class="token punctuation">\\</span>
  --endpoints<span class="token operator">=</span><span class="token variable">\${ETCD_ENDPOINTS}</span> <span class="token punctuation">\\</span>
  --ca-file<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  --cert-file<span class="token operator">=</span>/etc/flanneld/cert/flanneld.pem <span class="token punctuation">\\</span>
  --key-file<span class="token operator">=</span>/etc/flanneld/cert/flanneld-key.pem <span class="token punctuation">\\</span>
  get <span class="token variable">\${FLANNEL_ETCD_PREFIX}</span>/config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span><span class="token string">&quot;Network&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;172.30.0.0/16&quot;</span>,<span class="token string">&quot;SubnetLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">24</span>, <span class="token string">&quot;Backend&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vxlan&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B\u5DF2\u5206\u914D\u7684 Pod \u5B50\u7F51\u6BB5\u5217\u8868 (/24):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /opt/k8s/bin/environment.sh
etcdctl <span class="token punctuation">\\</span>
  --endpoints<span class="token operator">=</span><span class="token variable">\${ETCD_ENDPOINTS}</span> <span class="token punctuation">\\</span>
  --ca-file<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  --cert-file<span class="token operator">=</span>/etc/flanneld/cert/flanneld.pem <span class="token punctuation">\\</span>
  --key-file<span class="token operator">=</span>/etc/flanneld/cert/flanneld-key.pem <span class="token punctuation">\\</span>
  <span class="token function">ls</span> <span class="token variable">\${FLANNEL_ETCD_PREFIX}</span>/subnets
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/kubernetes/network/subnets/172.30.84.0-24
/kubernetes/network/subnets/172.30.8.0-24
/kubernetes/network/subnets/172.30.29.0-24
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u67E5\u770B\u67D0\u4E00 Pod \u7F51\u6BB5\u5BF9\u5E94\u7684\u8282\u70B9 IP \u548C flannel \u63A5\u53E3\u5730\u5740:</p><p><code>\u6CE8\u610F\u5176\u4E2D\u7684IP\u6BB5\u6362\u6210\u81EA\u5DF1\u7684\u3002</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /opt/k8s/bin/environment.sh
etcdctl <span class="token punctuation">\\</span>
  --endpoints<span class="token operator">=</span><span class="token variable">\${ETCD_ENDPOINTS}</span> <span class="token punctuation">\\</span>
  --ca-file<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  --cert-file<span class="token operator">=</span>/etc/flanneld/cert/flanneld.pem <span class="token punctuation">\\</span>
  --key-file<span class="token operator">=</span>/etc/flanneld/cert/flanneld-key.pem <span class="token punctuation">\\</span>
  get <span class="token variable">\${FLANNEL_ETCD_PREFIX}</span>/subnets/172.30.8.0-24
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span><span class="token string">&quot;PublicIP&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;192.168.106.4&quot;</span>,<span class="token string">&quot;BackendType&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;vxlan&quot;</span>,<span class="token string">&quot;BackendData&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;VtepMAC&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;f2:14:20:50:4f:af&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_9-\u9A8C\u8BC1\u5404\u8282\u70B9\u80FD\u901A\u8FC7-pod-\u7F51\u6BB5\u4E92\u901A" tabindex="-1"><a class="header-anchor" href="#_9-\u9A8C\u8BC1\u5404\u8282\u70B9\u80FD\u901A\u8FC7-pod-\u7F51\u6BB5\u4E92\u901A" aria-hidden="true">#</a> 9\uFF0C\u9A8C\u8BC1\u5404\u8282\u70B9\u80FD\u901A\u8FC7 Pod \u7F51\u6BB5\u4E92\u901A</h2><p>\u5728\u5404\u8282\u70B9\u4E0A\u90E8\u7F72 flannel \u540E\uFF0C\u68C0\u67E5\u662F\u5426\u521B\u5EFA\u4E86 flannel \u63A5\u53E3 (\u540D\u79F0\u53EF\u80FD\u4E3A flannel0\u3001flannel.0\u3001flannel.1 \u7B49)\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh \${node_ip} &quot;/usr/sbin/ip addr show flannel.1|grep -w inet&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
    inet <span class="token number">172.30</span>.84.0/32 scope global flannel.1
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
    inet <span class="token number">172.30</span>.8.0/32 scope global flannel.1
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
    inet <span class="token number">172.30</span>.29.0/32 scope global flannel.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5728\u5404\u8282\u70B9\u4E0A ping \u6240\u6709 flannel \u63A5\u53E3 IP\uFF0C\u786E\u4FDD\u80FD\u901A\uFF1A</p><p><code>\u6CE8\u610F\u5176\u4E2D\u7684IP\u6BB5\u6362\u6210\u81EA\u5DF1\u7684\u3002</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
PING <span class="token number">172.30</span>.8.0 <span class="token punctuation">(</span><span class="token number">172.30</span>.8.0<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.30</span>.8.0: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.285</span> ms
--- <span class="token number">172.30</span>.8.0 <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.285</span>/0.285/0.285/0.000 ms
PING <span class="token number">172.30</span>.29.0 <span class="token punctuation">(</span><span class="token number">172.30</span>.29.0<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.30</span>.29.0: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.337</span> ms
--- <span class="token number">172.30</span>.29.0 <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.337</span>/0.337/0.337/0.000 ms
PING <span class="token number">172.30</span>.84.0 <span class="token punctuation">(</span><span class="token number">172.30</span>.84.0<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.30</span>.84.0: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.062</span> ms
--- <span class="token number">172.30</span>.84.0 <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.062</span>/0.062/0.062/0.000 ms
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
PING <span class="token number">172.30</span>.8.0 <span class="token punctuation">(</span><span class="token number">172.30</span>.8.0<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.30</span>.8.0: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.055</span> ms
--- <span class="token number">172.30</span>.8.0 <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.055</span>/0.055/0.055/0.000 ms
PING <span class="token number">172.30</span>.29.0 <span class="token punctuation">(</span><span class="token number">172.30</span>.29.0<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.30</span>.29.0: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.311</span> ms
--- <span class="token number">172.30</span>.29.0 <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.311</span>/0.311/0.311/0.000 ms
PING <span class="token number">172.30</span>.84.0 <span class="token punctuation">(</span><span class="token number">172.30</span>.84.0<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.30</span>.84.0: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.395</span> ms
--- <span class="token number">172.30</span>.84.0 <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.395</span>/0.395/0.395/0.000 ms
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
PING <span class="token number">172.30</span>.8.0 <span class="token punctuation">(</span><span class="token number">172.30</span>.8.0<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.30</span>.8.0: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.325</span> ms
--- <span class="token number">172.30</span>.8.0 <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.325</span>/0.325/0.325/0.000 ms
PING <span class="token number">172.30</span>.29.0 <span class="token punctuation">(</span><span class="token number">172.30</span>.29.0<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.30</span>.29.0: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.060</span> ms
--- <span class="token number">172.30</span>.29.0 <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.060</span>/0.060/0.060/0.000 ms
PING <span class="token number">172.30</span>.84.0 <span class="token punctuation">(</span><span class="token number">172.30</span>.84.0<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.30</span>.84.0: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.260</span> ms
--- <span class="token number">172.30</span>.84.0 <span class="token function">ping</span> statistics ---
<span class="token number">1</span> packets transmitted, <span class="token number">1</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 0ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.260</span>/0.260/0.260/0.000 ms
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,57);function p(t,l){return e}var o=s(a,[["render",p]]);export{o as default};
