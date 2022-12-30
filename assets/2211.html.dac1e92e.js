import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>kube-proxy \u8FD0\u884C\u5728\u6240\u6709 worker \u8282\u70B9\u4E0A\uFF0C\uFF0C\u5B83\u76D1\u542C apiserver \u4E2D service \u548C Endpoint \u7684\u53D8\u5316\u60C5\u51B5\uFF0C\u521B\u5EFA\u8DEF\u7531\u89C4\u5219\u6765\u8FDB\u884C\u670D\u52A1\u8D1F\u8F7D\u5747\u8861\u3002</p><p>\u672C\u6587\u6863\u8BB2\u89E3\u90E8\u7F72 kube-proxy \u7684\u90E8\u7F72\uFF0C\u4F7F\u7528 ipvs \u6A21\u5F0F\u3002</p><h2 id="_1-\u521B\u5EFA-kube-proxy-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-kube-proxy-\u8BC1\u4E66" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA kube-proxy \u8BC1\u4E66</h2><p>\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-proxy-csr.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;CN&quot;: &quot;system:kube-proxy&quot;,
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>CN\uFF1A\u6307\u5B9A\u8BE5\u8BC1\u4E66\u7684 User \u4E3A system:kube-proxy\uFF1B</li><li>\u9884\u5B9A\u4E49\u7684 RoleBinding system:node-proxier \u5C06 User system:kube-proxy \u4E0E Role system:node-proxier \u7ED1\u5B9A\uFF0C\u8BE5 Role \u6388\u4E88\u4E86\u8C03\u7528 kube-apiserver Proxy \u76F8\u5173 API \u7684\u6743\u9650\uFF1B</li><li>\u8BE5\u8BC1\u4E66\u53EA\u4F1A\u88AB kube-proxy \u5F53\u505A client \u8BC1\u4E66\u4F7F\u7528\uFF0C\u6240\u4EE5 hosts \u5B57\u6BB5\u4E3A\u7A7A\uFF1B</li></ul><p>\u751F\u6210\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cfssl</span> gencert -ca<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  -ca-key<span class="token operator">=</span>/etc/kubernetes/cert/ca-key.pem <span class="token punctuation">\\</span>
  -config<span class="token operator">=</span>/etc/kubernetes/cert/ca-config.json <span class="token punctuation">\\</span>
  -profile<span class="token operator">=</span>kubernetes  kube-proxy-csr.json <span class="token operator">|</span> cfssljson -bare kube-proxy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2-\u521B\u5EFA\u548C\u5206\u53D1-kubeconfig-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u548C\u5206\u53D1-kubeconfig-\u6587\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 kubeconfig \u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /opt/k8s/bin/environment.sh
kubectl config set-cluster kubernetes <span class="token punctuation">\\</span>
  --certificate-authority<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --server<span class="token operator">=</span><span class="token variable">\${KUBE_APISERVER}</span> <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-proxy.kubeconfig
kubectl config set-credentials kube-proxy <span class="token punctuation">\\</span>
  --client-certificate<span class="token operator">=</span>kube-proxy.pem <span class="token punctuation">\\</span>
  --client-key<span class="token operator">=</span>kube-proxy-key.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-proxy.kubeconfig
kubectl config set-context default <span class="token punctuation">\\</span>
  --cluster<span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
  --user<span class="token operator">=</span>kube-proxy <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-proxy.kubeconfig
kubectl config use-context default --kubeconfig<span class="token operator">=</span>kube-proxy.kubeconfig
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>--embed-certs=true\uFF1A\u5C06 ca.pem \u548C admin.pem \u8BC1\u4E66\u5185\u5BB9\u5D4C\u5165\u5230\u751F\u6210\u7684 kubectl-proxy.kubeconfig \u6587\u4EF6\u4E2D (\u4E0D\u52A0\u65F6\uFF0C\u5199\u5165\u7684\u662F\u8BC1\u4E66\u6587\u4EF6\u8DEF\u5F84)\uFF1B</li></ul><p>\u5206\u53D1 kubeconfig \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_name in \${NODE_NAMES[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_name}&quot;
    scp kube-proxy.kubeconfig k8s@\${node_name}:/etc/kubernetes/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u521B\u5EFA-kube-proxy-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA-kube-proxy-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA kube-proxy \u914D\u7F6E\u6587\u4EF6</h2><p>\u4ECE v1.10 \u5F00\u59CB\uFF0Ckube-proxy \u90E8\u5206\u53C2\u6570\u53EF\u4EE5\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u3002\u53EF\u4EE5\u4F7F\u7528 \u2013write-config-to \u9009\u9879\u751F\u6210\u8BE5\u914D\u7F6E\u6587\u4EF6\uFF0C\u6216\u8005\u53C2\u8003 kubeproxyconfig \u7684\u7C7B\u578B\u5B9A\u4E49\u6E90\u6587\u4EF6 \uFF1Ahttps://github.com/kubernetes/kubernetes/blob/master/pkg/proxy/apis/kubeproxyconfig/types.go</p><p>\u521B\u5EFA kube-proxy config \u6587\u4EF6\u6A21\u677F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span>kube-proxy.config.yaml.template <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: ##NODE_IP##
clientConnection:
  kubeconfig: /etc/kubernetes/kube-proxy.kubeconfig
clusterCIDR: <span class="token variable">\${CLUSTER_CIDR}</span>
healthzBindAddress: ##NODE_IP##:10256
hostnameOverride: ##NODE_NAME##
kind: KubeProxyConfiguration
metricsBindAddress: ##NODE_IP##:10249
mode: &quot;ipvs&quot;
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>bindAddress: \u76D1\u542C\u5730\u5740\uFF1B</li><li>clientConnection.kubeconfig: \u8FDE\u63A5 apiserver \u7684 kubeconfig \u6587\u4EF6\uFF1B</li><li>clusterCIDR: kube-proxy \u6839\u636E --cluster-cidr \u5224\u65AD\u96C6\u7FA4\u5185\u90E8\u548C\u5916\u90E8\u6D41\u91CF\uFF0C\u6307\u5B9A --cluster-cidr \u6216 --masquerade-all \u9009\u9879\u540E kube-proxy \u624D\u4F1A\u5BF9\u8BBF\u95EE Service IP \u7684\u8BF7\u6C42\u505A SNAT\uFF1B</li><li>hostnameOverride: \u53C2\u6570\u503C\u5FC5\u987B\u4E0E kubelet \u7684\u503C\u4E00\u81F4\uFF0C\u5426\u5219 kube-proxy \u542F\u52A8\u540E\u4F1A\u627E\u4E0D\u5230\u8BE5 Node\uFF0C\u4ECE\u800C\u4E0D\u4F1A\u521B\u5EFA\u4EFB\u4F55 ipvs \u89C4\u5219\uFF1B</li><li>mode: \u4F7F\u7528 ipvs \u6A21\u5F0F\uFF1B</li></ul><p>\u4E3A\u5404\u8282\u70B9\u521B\u5EFA\u548C\u5206\u53D1 kube-proxy \u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for (( i=0; i &lt; 3; i++ ))
do 
    echo &quot;&gt;&gt;&gt; \${NODE_NAMES[i]}&quot;
    sed -e &quot;s/##NODE_NAME##/\${NODE_NAMES[i]}/&quot; -e &quot;s/##NODE_IP##/\${NODE_IPS[i]}/&quot; kube-proxy.config.yaml.template &gt; kube-proxy-\${NODE_NAMES[i]}.config.yaml
    scp kube-proxy-\${NODE_NAMES[i]}.config.yaml root@\${NODE_NAMES[i]}:/etc/kubernetes/kube-proxy.config.yaml
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_4-\u521B\u5EFA\u548C\u5206\u53D1-kube-proxy-systemd-unit-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA\u548C\u5206\u53D1-kube-proxy-systemd-unit-\u6587\u4EF6" aria-hidden="true">#</a> 4\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 kube-proxy systemd unit \u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span> <span class="token operator">&gt;</span> kube-proxy.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=Kubernetes Kube-Proxy Server
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
After=network.target
[Service]
WorkingDirectory=/var/lib/kube-proxy
ExecStart=/opt/k8s/bin/kube-proxy <span class="token entity" title="\\\\">\\\\</span>
  --config=/etc/kubernetes/kube-proxy.config.yaml <span class="token entity" title="\\\\">\\\\</span>
  --alsologtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=false <span class="token entity" title="\\\\">\\\\</span>
  --log-dir=/var/log/kubernetes <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on-failure
RestartSec=5
LimitNOFILE=65536
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u5206\u53D1 kube-proxy systemd unit \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_name in \${NODE_NAMES[@]}
do 
    echo &quot;&gt;&gt;&gt; \${node_name}&quot;
    scp kube-proxy.service root@\${node_name}:/etc/systemd/system/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_5-\u542F\u52A8-kube-proxy-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_5-\u542F\u52A8-kube-proxy-\u670D\u52A1" aria-hidden="true">#</a> 5\uFF0C\u542F\u52A8 kube-proxy \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;mkdir -p /var/lib/kube-proxy&quot;
    ssh root@\${node_ip} &quot;mkdir -p /var/log/kubernetes &amp;&amp; chown -R k8s /var/log/kubernetes&quot;
    ssh root@\${node_ip} &quot;systemctl daemon-reload &amp;&amp; systemctl enable kube-proxy &amp;&amp; systemctl start kube-proxy&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_6-\u68C0\u67E5\u542F\u52A8\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_6-\u68C0\u67E5\u542F\u52A8\u7ED3\u679C" aria-hidden="true">#</a> 6\uFF0C\u68C0\u67E5\u542F\u52A8\u7ED3\u679C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh k8s@\${node_ip} &quot;systemctl status kube-proxy|grep Active&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">19</span>:39:28 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">19</span>:39:28 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">19</span>:39:29 CST<span class="token punctuation">;</span> 6h ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5219\u6B63\u5E38\uFF0C\u5982\u679C\u542F\u52A8\u5931\u8D25\uFF0C\u68C0\u67E5\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>journalctl -xu kube-proxy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_7-\u67E5\u770B\u76D1\u542C\u7AEF\u53E3\u548C-metrics" tabindex="-1"><a class="header-anchor" href="#_7-\u67E5\u770B\u76D1\u542C\u7AEF\u53E3\u548C-metrics" aria-hidden="true">#</a> 7\uFF0C\u67E5\u770B\u76D1\u542C\u7AEF\u53E3\u548C metrics</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>k8s@kube-node1 abc<span class="token punctuation">]</span><span class="token variable">$sudo</span> <span class="token function">netstat</span> -lnpt<span class="token operator">|</span><span class="token function">grep</span> kube-prox
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.106.3:10256     <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">19061</span>/kube-proxy
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.106.3:10249     <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">19061</span>/kube-proxy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>10249\uFF1Ahttp prometheus metrics port;</li><li>10256\uFF1Ahttp healthz port;</li></ul><h2 id="_8-\u67E5\u770B-ipvs-\u8DEF\u7531\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_8-\u67E5\u770B-ipvs-\u8DEF\u7531\u89C4\u5219" aria-hidden="true">#</a> 8\uFF0C\u67E5\u770B ipvs \u8DEF\u7531\u89C4\u5219</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;/usr/sbin/ipvsadm -ln&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
IP Virtual Server version <span class="token number">1.2</span>.1 <span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">4096</span><span class="token punctuation">)</span>
Prot LocalAddress:Port Scheduler Flags
  -<span class="token operator">&gt;</span> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  <span class="token number">10.254</span>.0.1:443 rr persistent <span class="token number">10800</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
IP Virtual Server version <span class="token number">1.2</span>.1 <span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">4096</span><span class="token punctuation">)</span>
Prot LocalAddress:Port Scheduler Flags
  -<span class="token operator">&gt;</span> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  <span class="token number">10.254</span>.0.1:443 rr persistent <span class="token number">10800</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
IP Virtual Server version <span class="token number">1.2</span>.1 <span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">4096</span><span class="token punctuation">)</span>
Prot LocalAddress:Port Scheduler Flags
  -<span class="token operator">&gt;</span> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  <span class="token number">10.254</span>.0.1:443 rr persistent <span class="token number">10800</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5:6443         Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u53EF\u89C1\u5C06\u6240\u6709\u5230 kubernetes cluster ip 443 \u7AEF\u53E3\u7684\u8BF7\u6C42\u90FD\u8F6C\u53D1\u5230\u4E86 kube-apiserver \u7684 6443 \u7AEF\u53E3\u3002</p>`,40);function p(r,t){return e}var c=s(a,[["render",p]]);export{c as default};
