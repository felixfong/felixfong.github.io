import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<p>\u672C\u6587\u6863\u4ECB\u7ECD\u90E8\u7F72\u9AD8\u53EF\u7528 kube-controller-manager \u96C6\u7FA4\u7684\u6B65\u9AA4\u3002</p><p>\u8BE5\u96C6\u7FA4\u5305\u542B 3 \u4E2A\u8282\u70B9\uFF0C\u542F\u52A8\u540E\u5C06\u901A\u8FC7\u7ADE\u4E89\u9009\u4E3E\u673A\u5236\u4EA7\u751F\u4E00\u4E2A leader \u8282\u70B9\uFF0C\u5176\u5B83\u8282\u70B9\u4E3A\u963B\u585E\u72B6\u6001\u3002\u5F53 leader \u8282\u70B9\u4E0D\u53EF\u7528\u540E\uFF0C\u5269\u4F59\u8282\u70B9\u5C06\u518D\u6B21\u8FDB\u884C\u9009\u4E3E\u4EA7\u751F\u65B0\u7684 leader \u8282\u70B9\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u670D\u52A1\u7684\u53EF\u7528\u6027\u3002</p><p>\u672C\u6587\u6863\u4ECB\u7ECD\u90E8\u7F72\u9AD8\u53EF\u7528 kube-controller-manager \u96C6\u7FA4\u7684\u6B65\u9AA4\u3002</p><p>\u8BE5\u96C6\u7FA4\u5305\u542B 3 \u4E2A\u8282\u70B9\uFF0C\u542F\u52A8\u540E\u5C06\u901A\u8FC7\u7ADE\u4E89\u9009\u4E3E\u673A\u5236\u4EA7\u751F\u4E00\u4E2A leader \u8282\u70B9\uFF0C\u5176\u5B83\u8282\u70B9\u4E3A\u963B\u585E\u72B6\u6001\u3002\u5F53 leader \u8282\u70B9\u4E0D\u53EF\u7528\u540E\uFF0C\u5269\u4F59\u8282\u70B9\u5C06\u518D\u6B21\u8FDB\u884C\u9009\u4E3E\u4EA7\u751F\u65B0\u7684 leader \u8282\u70B9\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u670D\u52A1\u7684\u53EF\u7528\u6027\u3002</p><p>\u4E3A\u4FDD\u8BC1\u901A\u4FE1\u5B89\u5168\uFF0C\u672C\u6587\u6863\u5148\u751F\u6210 x509 \u8BC1\u4E66\u548C\u79C1\u94A5\uFF0Ckube-controller-manager \u5728\u5982\u4E0B\u4E24\u79CD\u60C5\u51B5\u4E0B\u4F7F\u7528\u8BE5\u8BC1\u4E66\uFF1A</p><ol><li>\u4E0E kube-apiserver \u7684\u5B89\u5168\u7AEF\u53E3\u901A\u4FE1\u65F6;</li><li>\u5728\u5B89\u5168\u7AEF\u53E3 (https\uFF0C10252) \u8F93\u51FA prometheus \u683C\u5F0F\u7684 metrics\uFF1B</li></ol><p>\u914D\u7F6E\u4E4B\u524D\u9700\u8981\u5148\u5B89\u88C5 kubelet,flannel \u7B49\u7EC4\u4EF6\uFF0C\u4E0D\u8FC7\u524D\u8FB9\u5DF2\u7ECF\u5B89\u88C5\uFF0C\u73B0\u5728\u76F4\u63A5\u8FDB\u5165\u914D\u7F6E\u3002</p><h2 id="_1-\u521B\u5EFA-kube-controller-manager-\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-kube-controller-manager-\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA kube-controller-manager \u8BC1\u4E66\u548C\u79C1\u94A5</h2><p>\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-controller-manager-csr.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
    &quot;CN&quot;: &quot;system:kube-controller-manager&quot;,
    &quot;key&quot;: {
        &quot;algo&quot;: &quot;rsa&quot;,
        &quot;size&quot;: 2048
    },
    &quot;hosts&quot;: [
      &quot;127.0.0.1&quot;,
      &quot;192.168.106.3&quot;,
      &quot;192.168.106.4&quot;,
      &quot;192.168.106.5&quot;
    ],
    &quot;names&quot;: [
      {
        &quot;C&quot;: &quot;CN&quot;,
        &quot;ST&quot;: &quot;BeiJing&quot;,
        &quot;L&quot;: &quot;BeiJing&quot;,
        &quot;O&quot;: &quot;system:kube-controller-manager&quot;,
        &quot;OU&quot;: &quot;4Paradigm&quot;
      }
    ]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul><li>hosts \u5217\u8868\u5305\u542B\u6240\u6709 kube-controller-manager \u8282\u70B9 IP\uFF1B</li><li>CN \u4E3A system:kube-controller-manager\u3001O \u4E3A system:kube-controller-manager\uFF0Ckubernetes \u5185\u7F6E\u7684 ClusterRoleBindings system:kube-controller-manager \u8D4B\u4E88 kube-controller-manager \u5DE5\u4F5C\u6240\u9700\u7684\u6743\u9650\u3002</li></ul><p>\u751F\u6210\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cfssl</span> gencert -ca<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  -ca-key<span class="token operator">=</span>/etc/kubernetes/cert/ca-key.pem <span class="token punctuation">\\</span>
  -config<span class="token operator">=</span>/etc/kubernetes/cert/ca-config.json <span class="token punctuation">\\</span>
  -profile<span class="token operator">=</span>kubernetes kube-controller-manager-csr.json <span class="token operator">|</span> cfssljson -bare kube-controller-manager
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5C06\u751F\u6210\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\u5206\u53D1\u5230\u6240\u6709 master \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp kube-controller-manager*.pem k8s@\${node_ip}:/etc/kubernetes/cert/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_2-\u521B\u5EFA\u548C\u5206\u53D1-kubeconfig-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u548C\u5206\u53D1-kubeconfig-\u6587\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 kubeconfig \u6587\u4EF6</h2><p>kubeconfig \u6587\u4EF6\u5305\u542B\u8BBF\u95EE apiserver \u7684\u6240\u6709\u4FE1\u606F\uFF0C\u5982 apiserver \u5730\u5740\u3001CA \u8BC1\u4E66\u548C\u81EA\u8EAB\u4F7F\u7528\u7684\u8BC1\u4E66\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$kubectl</span> config set-cluster kubernetes <span class="token punctuation">\\</span>
  --certificate-authority<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --server<span class="token operator">=</span><span class="token variable">\${KUBE_APISERVER}</span> <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-controller-manager.kubeconfig
<span class="token variable">$kubectl</span> config set-credentials system:kube-controller-manager <span class="token punctuation">\\</span>
  --client-certificate<span class="token operator">=</span>kube-controller-manager.pem <span class="token punctuation">\\</span>
  --client-key<span class="token operator">=</span>kube-controller-manager-key.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-controller-manager.kubeconfig
<span class="token variable">$kubectl</span> config set-context system:kube-controller-manager <span class="token punctuation">\\</span>
  --cluster<span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
  --user<span class="token operator">=</span>system:kube-controller-manager <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-controller-manager.kubeconfig
<span class="token variable">$kubectl</span> config use-context system:kube-controller-manager --kubeconfig<span class="token operator">=</span>kube-controller-manager.kubeconfig
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5206\u53D1 kubeconfig \u5230\u6240\u6709 master \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp kube-controller-manager.kubeconfig k8s@\${node_ip}:/etc/kubernetes/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u521B\u5EFA\u548C\u5206\u53D1-kube-controller-manager-systemd-unit-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u548C\u5206\u53D1-kube-controller-manager-systemd-unit-\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 kube-controller-manager systemd unit \u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span> <span class="token operator">&gt;</span> kube-controller-manager.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
[Service]
ExecStart=/opt/k8s/bin/kube-controller-manager <span class="token entity" title="\\\\">\\\\</span>
  --port=0 <span class="token entity" title="\\\\">\\\\</span>
  --secure-port=10252 <span class="token entity" title="\\\\">\\\\</span>
  --bind-address=127.0.0.1 <span class="token entity" title="\\\\">\\\\</span>
  --kubeconfig=/etc/kubernetes/kube-controller-manager.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --service-cluster-ip-range=<span class="token variable">\${SERVICE_CIDR}</span> <span class="token entity" title="\\\\">\\\\</span>
  --cluster-name=kubernetes <span class="token entity" title="\\\\">\\\\</span>
  --cluster-signing-cert-file=/etc/kubernetes/cert/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --cluster-signing-key-file=/etc/kubernetes/cert/ca-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --experimental-cluster-signing-duration=8760h <span class="token entity" title="\\\\">\\\\</span>
  --root-ca-file=/etc/kubernetes/cert/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --service-account-private-key-file=/etc/kubernetes/cert/ca-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --leader-elect=true <span class="token entity" title="\\\\">\\\\</span>
  --feature-gates=RotateKubeletServerCertificate=true <span class="token entity" title="\\\\">\\\\</span>
  --controllers=*,bootstrapsigner,tokencleaner <span class="token entity" title="\\\\">\\\\</span>
  --horizontal-pod-autoscaler-use-rest-clients=true <span class="token entity" title="\\\\">\\\\</span>
  --horizontal-pod-autoscaler-sync-period=10s <span class="token entity" title="\\\\">\\\\</span>
  --tls-cert-file=/etc/kubernetes/cert/kube-controller-manager.pem <span class="token entity" title="\\\\">\\\\</span>
  --tls-private-key-file=/etc/kubernetes/cert/kube-controller-manager-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --use-service-account-credentials=true <span class="token entity" title="\\\\">\\\\</span>
  --alsologtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=false <span class="token entity" title="\\\\">\\\\</span>
  --log-dir=/var/log/kubernetes <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on
Restart=on-failure
RestartSec=5
User=k8s
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><ul><li>--port=0\uFF1A\u5173\u95ED\u76D1\u542C http /metrics \u7684\u8BF7\u6C42\uFF0C\u540C\u65F6 --address \u53C2\u6570\u65E0\u6548\uFF0C--bind-address \u53C2\u6570\u6709\u6548\uFF1B</li><li>--secure-port=10252\u3001--bind-address=0.0.0.0: \u5728\u6240\u6709\u7F51\u7EDC\u63A5\u53E3\u76D1\u542C 10252 \u7AEF\u53E3\u7684 https /metrics \u8BF7\u6C42\uFF1B</li><li>--kubeconfig\uFF1A\u6307\u5B9A kubeconfig \u6587\u4EF6\u8DEF\u5F84\uFF0Ckube-controller-manager \u4F7F\u7528\u5B83\u8FDE\u63A5\u548C\u9A8C\u8BC1 kube-apiserver\uFF1B</li><li>--cluster-signing-*-file\uFF1A\u7B7E\u540D TLS Bootstrap \u521B\u5EFA\u7684\u8BC1\u4E66\uFF1B</li><li>--experimental-cluster-signing-duration\uFF1A\u6307\u5B9A TLS Bootstrap \u8BC1\u4E66\u7684\u6709\u6548\u671F\uFF1B</li><li>--root-ca-file\uFF1A\u653E\u7F6E\u5230\u5BB9\u5668 ServiceAccount \u4E2D\u7684 CA \u8BC1\u4E66\uFF0C\u7528\u6765\u5BF9 kube-apiserver \u7684\u8BC1\u4E66\u8FDB\u884C\u6821\u9A8C\uFF1B</li><li>--service-account-private-key-file\uFF1A\u7B7E\u540D ServiceAccount \u4E2D Token \u7684\u79C1\u94A5\u6587\u4EF6\uFF0C\u5FC5\u987B\u548C kube-apiserver \u7684 --service-account-key-file \u6307\u5B9A\u7684\u516C\u94A5\u6587\u4EF6\u914D\u5BF9\u4F7F\u7528\uFF1B</li><li>--service-cluster-ip-range \uFF1A\u6307\u5B9A Service Cluster IP \u7F51\u6BB5\uFF0C\u5FC5\u987B\u548C kube-apiserver \u4E2D\u7684\u540C\u540D\u53C2\u6570\u4E00\u81F4\uFF1B</li><li>--leader-elect=true\uFF1A\u96C6\u7FA4\u8FD0\u884C\u6A21\u5F0F\uFF0C\u542F\u7528\u9009\u4E3E\u529F\u80FD\uFF1B\u88AB\u9009\u4E3A leader \u7684\u8282\u70B9\u8D1F\u8D23\u5904\u7406\u5DE5\u4F5C\uFF0C\u5176\u5B83\u8282\u70B9\u4E3A\u963B\u585E\u72B6\u6001\uFF1B</li><li>--feature-gates=RotateKubeletServerCertificate=true\uFF1A\u5F00\u542F kublet server \u8BC1\u4E66\u7684\u81EA\u52A8\u66F4\u65B0\u7279\u6027\uFF1B</li><li>--controllers=*,bootstrapsigner,tokencleaner\uFF1A\u542F\u7528\u7684\u63A7\u5236\u5668\u5217\u8868\uFF0Ctokencleaner \u7528\u4E8E\u81EA\u52A8\u6E05\u7406\u8FC7\u671F\u7684 Bootstrap token\uFF1B</li><li>--horizontal-pod-autoscaler-*\uFF1Acustom metrics \u76F8\u5173\u53C2\u6570\uFF0C\u652F\u6301 autoscaling/v2alpha1\uFF1B</li><li>--tls-cert-file\u3001--tls-private-key-file\uFF1A\u4F7F\u7528 https \u8F93\u51FA metrics \u65F6\u4F7F\u7528\u7684 Server \u8BC1\u4E66\u548C\u79D8\u94A5\uFF1B</li><li>--use-service-account-credentials=true:</li><li>User=k8s\uFF1A\u4F7F\u7528 k8s \u8D26\u6237\u8FD0\u884C\uFF1B</li></ul><p>kube-controller-manager \u4E0D\u5BF9\u8BF7\u6C42 https metrics \u7684 Client \u8BC1\u4E66\u8FDB\u884C\u6821\u9A8C\uFF0C\u6545\u4E0D\u9700\u8981\u6307\u5B9A \u2013tls-ca-file \u53C2\u6570\uFF0C\u800C\u4E14\u8BE5\u53C2\u6570\u5DF2\u88AB\u6DD8\u6C70\u3002</p><p>\u5206\u53D1 systemd unit \u6587\u4EF6\u5230\u6240\u6709 master \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp kube-controller-manager.service root@\${node_ip}:/etc/systemd/system/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-kube-controller-manager-\u7684\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_4-kube-controller-manager-\u7684\u6743\u9650" aria-hidden="true">#</a> 4\uFF0Ckube-controller-manager \u7684\u6743\u9650</h2><p>ClusteRole: system:kube-controller-manager \u7684\u6743\u9650\u5F88\u5C0F\uFF0C\u53EA\u80FD\u521B\u5EFA secret\u3001serviceaccount \u7B49\u8D44\u6E90\u5BF9\u8C61\uFF0C\u5404 controller \u7684\u6743\u9650\u5206\u6563\u5230 ClusterRole system:controller:XXX \u4E2D\u3002</p><p>\u9700\u8981\u5728 kube-controller-manager \u7684\u542F\u52A8\u53C2\u6570\u4E2D\u6DFB\u52A0 \u3001\u2013use-service-account-credentials=true \u53C2\u6570\uFF0C\u8FD9\u6837 main controller \u4F1A\u4E3A\u5404 controller \u521B\u5EFA\u5BF9\u5E94\u7684 ServiceAccount XXX-controller\u3002</p><p>\u5185\u7F6E\u7684 ClusterRoleBinding system:controller:XXX \u5C06\u8D4B\u4E88\u5404 XXX-controller ServiceAccount \u5BF9\u5E94\u7684 ClusterRole system:controller:XXX \u6743\u9650\u3002</p><h2 id="_5-\u542F\u52A8-kube-controller-manager-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_5-\u542F\u52A8-kube-controller-manager-\u670D\u52A1" aria-hidden="true">#</a> 5\uFF0C\u542F\u52A8 kube-controller-manager \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;mkdir -p /var/log/kubernetes &amp;&amp; chown -R k8s /var/log/kubernetes&quot;
    ssh root@\${node_ip} &quot;systemctl daemon-reload &amp;&amp; systemctl enable kube-controller-manager &amp;&amp; systemctl start kube-controller-manager&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_6-\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_6-\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001" aria-hidden="true">#</a> 6\uFF0C\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh k8s@\${node_ip} &quot;systemctl status kube-controller-manager|grep Active&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u8F93\u51FA\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:23:11 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:23:12 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:23:12 CST<span class="token punctuation">;</span> 6h ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5219\u4E3A\u6B63\u5E38\uFF0C\u5426\u5219\uFF0C\u67E5\u770B\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>journalctl -xu kube-controller-manager
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_7-\u67E5\u770B\u8F93\u51FA\u7684-metric" tabindex="-1"><a class="header-anchor" href="#_7-\u67E5\u770B\u8F93\u51FA\u7684-metric" aria-hidden="true">#</a> 7\uFF0C\u67E5\u770B\u8F93\u51FA\u7684 metric</h2><p><code>\u6CE8\u610F\uFF1A\u4EE5\u4E0B\u547D\u4EE4\u5728 kube-controller-manager \u8282\u70B9\u4E0A\u6267\u884C\u3002</code></p><p>kube-controller-manager \u76D1\u542C 10252 \u7AEF\u53E3\uFF0C\u63A5\u6536 https \u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$sudo</span> <span class="token function">netstat</span> -lnpt<span class="token operator">|</span><span class="token function">grep</span> kube-controll
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:10252         <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">14858</span>/kube-controll
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$curl</span> -s --cacert /etc/kubernetes/cert/ca.pem https://127.0.0.1:10252/metrics <span class="token operator">|</span><span class="token function">head</span>
<span class="token comment"># HELP ClusterRoleAggregator_adds Total number of adds handled by workqueue: ClusterRoleAggregator</span>
<span class="token comment"># TYPE ClusterRoleAggregator_adds counter</span>
ClusterRoleAggregator_adds <span class="token number">17</span>
<span class="token comment"># HELP ClusterRoleAggregator_depth Current depth of workqueue: ClusterRoleAggregator</span>
<span class="token comment"># TYPE ClusterRoleAggregator_depth gauge</span>
ClusterRoleAggregator_depth <span class="token number">0</span>
<span class="token comment"># HELP ClusterRoleAggregator_queue_latency How long an item stays in workqueueClusterRoleAggregator before being requested.</span>
<span class="token comment"># TYPE ClusterRoleAggregator_queue_latency summary</span>
ClusterRoleAggregator_queue_latency<span class="token punctuation">{</span>quantile<span class="token operator">=</span><span class="token string">&quot;0.5&quot;</span><span class="token punctuation">}</span> NaN
ClusterRoleAggregator_queue_latency<span class="token punctuation">{</span>quantile<span class="token operator">=</span><span class="token string">&quot;0.9&quot;</span><span class="token punctuation">}</span> NaN
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>curl --cacert CA \u8BC1\u4E66\u7528\u6765\u9A8C\u8BC1 kube-controller-manager https server \u8BC1\u4E66\uFF1B</li></ul><h2 id="_8-\u67E5\u770B\u5F53\u524D\u7684-leader" tabindex="-1"><a class="header-anchor" href="#_8-\u67E5\u770B\u5F53\u524D\u7684-leader" aria-hidden="true">#</a> 8\uFF0C\u67E5\u770B\u5F53\u524D\u7684 leader</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get endpoints kube-controller-manager --namespace<span class="token operator">=</span>kube-system  -o yaml
apiVersion: v1
kind: Endpoints
metadata:
  annotations:
    control-plane.alpha.kubernetes.io/leader: <span class="token string">&#39;{&quot;holderIdentity&quot;:&quot;kube-node1_c79b4380-ef09-11e8-aa72-525400c7ba97&quot;,&quot;leaseDurationSeconds&quot;:15,&quot;acquireTime&quot;:&quot;2018-11-23T10:23:11Z&quot;,&quot;renewTime&quot;:&quot;2018-11-23T16:50:16Z&quot;,&quot;leaderTransitions&quot;:0}&#39;</span>
  creationTimestamp: <span class="token number">2018</span>-11-23T10:23:11Z
  name: kube-controller-manager
  namespace: kube-system
  resourceVersion: <span class="token string">&quot;29655&quot;</span>
  selfLink: /api/v1/namespaces/kube-system/endpoints/kube-controller-manager
  uid: c79fb0ff-ef09-11e8-9670-525400c7ba97
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u53EF\u89C1\uFF0C\u5F53\u524D\u7684 leader \u4E3A kube-node1 \u8282\u70B9\u3002</p><h2 id="_9-\u6D4B\u8BD5-kube-controller-manager-\u96C6\u7FA4\u7684\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#_9-\u6D4B\u8BD5-kube-controller-manager-\u96C6\u7FA4\u7684\u9AD8\u53EF\u7528" aria-hidden="true">#</a> 9\uFF0C\u6D4B\u8BD5 kube-controller-manager \u96C6\u7FA4\u7684\u9AD8\u53EF\u7528</h2><p>\u505C\u6389\u4E00\u4E2A\u6216\u4E24\u4E2A\u8282\u70B9\u7684 kube-controller-manager \u670D\u52A1\uFF0C\u89C2\u5BDF\u5176\u5B83\u8282\u70B9\u7684\u65E5\u5FD7\uFF0C\u770B\u662F\u5426\u83B7\u53D6\u4E86 leader \u6743\u9650\u3002</p><p>\u73B0\u5728\u505C\u6389 kube-node1 \u4E0A\u7684 kube-controller-manager\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$systemctl</span> stop kube-controller-manager
<span class="token variable">$systemctl</span> status kube-controller-manager <span class="token operator">|</span><span class="token function">grep</span> Active
   Active: inactive <span class="token punctuation">(</span>dead<span class="token punctuation">)</span> since Sat <span class="token number">2018</span>-11-24 00:52:53 CST<span class="token punctuation">;</span> 44s ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u518D\u67E5\u770B\u4E00\u4E0B\u5F53\u524D\u7684 leader\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get endpoints kube-controller-manager --namespace<span class="token operator">=</span>kube-system  -o yaml
apiVersion: v1
kind: Endpoints
metadata:
  annotations:
    control-plane.alpha.kubernetes.io/leader: <span class="token string">&#39;{&quot;holderIdentity&quot;:&quot;kube-node3_c809d2de-ef09-11e8-bfb1-525400b42484&quot;,&quot;leaseDurationSeconds&quot;:15,&quot;acquireTime&quot;:&quot;2018-11-23T16:53:10Z&quot;,&quot;renewTime&quot;:&quot;2018-11-23T16:54:24Z&quot;,&quot;leaderTransitions&quot;:1}&#39;</span>
  creationTimestamp: <span class="token number">2018</span>-11-23T10:23:11Z
  name: kube-controller-manager
  namespace: kube-system
  resourceVersion: <span class="token string">&quot;29971&quot;</span>
  selfLink: /api/v1/namespaces/kube-system/endpoints/kube-controller-manager
  uid: c79fb0ff-ef09-11e8-9670-525400c7ba97
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u81EA\u52A8\u6F02\u79FB\u5230 kube-node3 \u4E0A\u53BB\u4E86\u3002</p><h2 id="_10-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_10-\u53C2\u8003" aria-hidden="true">#</a> 10\uFF0C\u53C2\u8003</h2><ol><li>\u5173\u4E8E controller \u6743\u9650\u548C use-service-account-credentials \u53C2\u6570\uFF1Ahttps://github.com/kubernetes/kubernetes/issues/48208</li><li>kublet \u8BA4\u8BC1\u548C\u6388\u6743\uFF1Ahttps://kubernetes.io/docs/admin/kubelet-authentication-authorization/#kubelet-authorization</li></ol><p>\u4E3A\u4FDD\u8BC1\u901A\u4FE1\u5B89\u5168\uFF0C\u672C\u6587\u6863\u5148\u751F\u6210 x509 \u8BC1\u4E66\u548C\u79C1\u94A5\uFF0Ckube-controller-manager \u5728\u5982\u4E0B\u4E24\u79CD\u60C5\u51B5\u4E0B\u4F7F\u7528\u8BE5\u8BC1\u4E66\uFF1A</p><ol><li>\u4E0E kube-apiserver \u7684\u5B89\u5168\u7AEF\u53E3\u901A\u4FE1\u65F6;</li><li>\u5728\u5B89\u5168\u7AEF\u53E3 (https\uFF0C10252) \u8F93\u51FA prometheus \u683C\u5F0F\u7684 metrics\uFF1B</li></ol><p>\u914D\u7F6E\u4E4B\u524D\u9700\u8981\u5148\u5B89\u88C5 kubelet,flannel \u7B49\u7EC4\u4EF6\uFF0C\u4E0D\u8FC7\u524D\u8FB9\u5DF2\u7ECF\u5B89\u88C5\uFF0C\u73B0\u5728\u76F4\u63A5\u8FDB\u5165\u914D\u7F6E\u3002</p><h2 id="_1-\u521B\u5EFA-kube-controller-manager-\u8BC1\u4E66\u548C\u79C1\u94A5-1" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-kube-controller-manager-\u8BC1\u4E66\u548C\u79C1\u94A5-1" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA kube-controller-manager \u8BC1\u4E66\u548C\u79C1\u94A5</h2><p>\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-controller-manager-csr.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
    &quot;CN&quot;: &quot;system:kube-controller-manager&quot;,
    &quot;key&quot;: {
        &quot;algo&quot;: &quot;rsa&quot;,
        &quot;size&quot;: 2048
    },
    &quot;hosts&quot;: [
      &quot;127.0.0.1&quot;,
      &quot;192.168.106.3&quot;,
      &quot;192.168.106.4&quot;,
      &quot;192.168.106.5&quot;
    ],
    &quot;names&quot;: [
      {
        &quot;C&quot;: &quot;CN&quot;,
        &quot;ST&quot;: &quot;BeiJing&quot;,
        &quot;L&quot;: &quot;BeiJing&quot;,
        &quot;O&quot;: &quot;system:kube-controller-manager&quot;,
        &quot;OU&quot;: &quot;4Paradigm&quot;
      }
    ]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul><li>hosts \u5217\u8868\u5305\u542B\u6240\u6709 kube-controller-manager \u8282\u70B9 IP\uFF1B</li><li>CN \u4E3A system:kube-controller-manager\u3001O \u4E3A system:kube-controller-manager\uFF0Ckubernetes \u5185\u7F6E\u7684 ClusterRoleBindings system:kube-controller-manager \u8D4B\u4E88 kube-controller-manager \u5DE5\u4F5C\u6240\u9700\u7684\u6743\u9650\u3002</li></ul><p>\u751F\u6210\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cfssl</span> gencert -ca<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  -ca-key<span class="token operator">=</span>/etc/kubernetes/cert/ca-key.pem <span class="token punctuation">\\</span>
  -config<span class="token operator">=</span>/etc/kubernetes/cert/ca-config.json <span class="token punctuation">\\</span>
  -profile<span class="token operator">=</span>kubernetes kube-controller-manager-csr.json <span class="token operator">|</span> cfssljson -bare kube-controller-manager
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5C06\u751F\u6210\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\u5206\u53D1\u5230\u6240\u6709 master \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp kube-controller-manager*.pem k8s@\${node_ip}:/etc/kubernetes/cert/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_2-\u521B\u5EFA\u548C\u5206\u53D1-kubeconfig-\u6587\u4EF6-1" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u548C\u5206\u53D1-kubeconfig-\u6587\u4EF6-1" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 kubeconfig \u6587\u4EF6</h2><p>kubeconfig \u6587\u4EF6\u5305\u542B\u8BBF\u95EE apiserver \u7684\u6240\u6709\u4FE1\u606F\uFF0C\u5982 apiserver \u5730\u5740\u3001CA \u8BC1\u4E66\u548C\u81EA\u8EAB\u4F7F\u7528\u7684\u8BC1\u4E66\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$kubectl</span> config set-cluster kubernetes <span class="token punctuation">\\</span>
  --certificate-authority<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --server<span class="token operator">=</span><span class="token variable">\${KUBE_APISERVER}</span> <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-controller-manager.kubeconfig
<span class="token variable">$kubectl</span> config set-credentials system:kube-controller-manager <span class="token punctuation">\\</span>
  --client-certificate<span class="token operator">=</span>kube-controller-manager.pem <span class="token punctuation">\\</span>
  --client-key<span class="token operator">=</span>kube-controller-manager-key.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-controller-manager.kubeconfig
<span class="token variable">$kubectl</span> config set-context system:kube-controller-manager <span class="token punctuation">\\</span>
  --cluster<span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
  --user<span class="token operator">=</span>system:kube-controller-manager <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-controller-manager.kubeconfig
<span class="token variable">$kubectl</span> config use-context system:kube-controller-manager --kubeconfig<span class="token operator">=</span>kube-controller-manager.kubeconfig
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5206\u53D1 kubeconfig \u5230\u6240\u6709 master \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp kube-controller-manager.kubeconfig k8s@\${node_ip}:/etc/kubernetes/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u521B\u5EFA\u548C\u5206\u53D1-kube-controller-manager-systemd-unit-\u6587\u4EF6-1" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u548C\u5206\u53D1-kube-controller-manager-systemd-unit-\u6587\u4EF6-1" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 kube-controller-manager systemd unit \u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span> <span class="token operator">&gt;</span> kube-controller-manager.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
[Service]
ExecStart=/opt/k8s/bin/kube-controller-manager <span class="token entity" title="\\\\">\\\\</span>
  --port=0 <span class="token entity" title="\\\\">\\\\</span>
  --secure-port=10252 <span class="token entity" title="\\\\">\\\\</span>
  --bind-address=127.0.0.1 <span class="token entity" title="\\\\">\\\\</span>
  --kubeconfig=/etc/kubernetes/kube-controller-manager.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --service-cluster-ip-range=<span class="token variable">\${SERVICE_CIDR}</span> <span class="token entity" title="\\\\">\\\\</span>
  --cluster-name=kubernetes <span class="token entity" title="\\\\">\\\\</span>
  --cluster-signing-cert-file=/etc/kubernetes/cert/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --cluster-signing-key-file=/etc/kubernetes/cert/ca-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --experimental-cluster-signing-duration=8760h <span class="token entity" title="\\\\">\\\\</span>
  --root-ca-file=/etc/kubernetes/cert/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --service-account-private-key-file=/etc/kubernetes/cert/ca-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --leader-elect=true <span class="token entity" title="\\\\">\\\\</span>
  --feature-gates=RotateKubeletServerCertificate=true <span class="token entity" title="\\\\">\\\\</span>
  --controllers=*,bootstrapsigner,tokencleaner <span class="token entity" title="\\\\">\\\\</span>
  --horizontal-pod-autoscaler-use-rest-clients=true <span class="token entity" title="\\\\">\\\\</span>
  --horizontal-pod-autoscaler-sync-period=10s <span class="token entity" title="\\\\">\\\\</span>
  --tls-cert-file=/etc/kubernetes/cert/kube-controller-manager.pem <span class="token entity" title="\\\\">\\\\</span>
  --tls-private-key-file=/etc/kubernetes/cert/kube-controller-manager-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --use-service-account-credentials=true <span class="token entity" title="\\\\">\\\\</span>
  --alsologtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=false <span class="token entity" title="\\\\">\\\\</span>
  --log-dir=/var/log/kubernetes <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on
Restart=on-failure
RestartSec=5
User=k8s
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><ul><li>--port=0\uFF1A\u5173\u95ED\u76D1\u542C http /metrics \u7684\u8BF7\u6C42\uFF0C\u540C\u65F6 --address \u53C2\u6570\u65E0\u6548\uFF0C--bind-address \u53C2\u6570\u6709\u6548\uFF1B</li><li>--secure-port=10252\u3001--bind-address=0.0.0.0: \u5728\u6240\u6709\u7F51\u7EDC\u63A5\u53E3\u76D1\u542C 10252 \u7AEF\u53E3\u7684 https /metrics \u8BF7\u6C42\uFF1B</li><li>--kubeconfig\uFF1A\u6307\u5B9A kubeconfig \u6587\u4EF6\u8DEF\u5F84\uFF0Ckube-controller-manager \u4F7F\u7528\u5B83\u8FDE\u63A5\u548C\u9A8C\u8BC1 kube-apiserver\uFF1B</li><li>--cluster-signing-*-file\uFF1A\u7B7E\u540D TLS Bootstrap \u521B\u5EFA\u7684\u8BC1\u4E66\uFF1B</li><li>--experimental-cluster-signing-duration\uFF1A\u6307\u5B9A TLS Bootstrap \u8BC1\u4E66\u7684\u6709\u6548\u671F\uFF1B</li><li>--root-ca-file\uFF1A\u653E\u7F6E\u5230\u5BB9\u5668 ServiceAccount \u4E2D\u7684 CA \u8BC1\u4E66\uFF0C\u7528\u6765\u5BF9 kube-apiserver \u7684\u8BC1\u4E66\u8FDB\u884C\u6821\u9A8C\uFF1B</li><li>--service-account-private-key-file\uFF1A\u7B7E\u540D ServiceAccount \u4E2D Token \u7684\u79C1\u94A5\u6587\u4EF6\uFF0C\u5FC5\u987B\u548C kube-apiserver \u7684 --service-account-key-file \u6307\u5B9A\u7684\u516C\u94A5\u6587\u4EF6\u914D\u5BF9\u4F7F\u7528\uFF1B</li><li>--service-cluster-ip-range \uFF1A\u6307\u5B9A Service Cluster IP \u7F51\u6BB5\uFF0C\u5FC5\u987B\u548C kube-apiserver \u4E2D\u7684\u540C\u540D\u53C2\u6570\u4E00\u81F4\uFF1B</li><li>--leader-elect=true\uFF1A\u96C6\u7FA4\u8FD0\u884C\u6A21\u5F0F\uFF0C\u542F\u7528\u9009\u4E3E\u529F\u80FD\uFF1B\u88AB\u9009\u4E3A leader \u7684\u8282\u70B9\u8D1F\u8D23\u5904\u7406\u5DE5\u4F5C\uFF0C\u5176\u5B83\u8282\u70B9\u4E3A\u963B\u585E\u72B6\u6001\uFF1B</li><li>--feature-gates=RotateKubeletServerCertificate=true\uFF1A\u5F00\u542F kublet server \u8BC1\u4E66\u7684\u81EA\u52A8\u66F4\u65B0\u7279\u6027\uFF1B</li><li>--controllers=*,bootstrapsigner,tokencleaner\uFF1A\u542F\u7528\u7684\u63A7\u5236\u5668\u5217\u8868\uFF0Ctokencleaner \u7528\u4E8E\u81EA\u52A8\u6E05\u7406\u8FC7\u671F\u7684 Bootstrap token\uFF1B</li><li>--horizontal-pod-autoscaler-*\uFF1Acustom metrics \u76F8\u5173\u53C2\u6570\uFF0C\u652F\u6301 autoscaling/v2alpha1\uFF1B</li><li>--tls-cert-file\u3001--tls-private-key-file\uFF1A\u4F7F\u7528 https \u8F93\u51FA metrics \u65F6\u4F7F\u7528\u7684 Server \u8BC1\u4E66\u548C\u79D8\u94A5\uFF1B</li><li>--use-service-account-credentials=true:</li><li>User=k8s\uFF1A\u4F7F\u7528 k8s \u8D26\u6237\u8FD0\u884C\uFF1B</li></ul><p>kube-controller-manager \u4E0D\u5BF9\u8BF7\u6C42 https metrics \u7684 Client \u8BC1\u4E66\u8FDB\u884C\u6821\u9A8C\uFF0C\u6545\u4E0D\u9700\u8981\u6307\u5B9A \u2013tls-ca-file \u53C2\u6570\uFF0C\u800C\u4E14\u8BE5\u53C2\u6570\u5DF2\u88AB\u6DD8\u6C70\u3002</p><p>\u5206\u53D1 systemd unit \u6587\u4EF6\u5230\u6240\u6709 master \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp kube-controller-manager.service root@\${node_ip}:/etc/systemd/system/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-kube-controller-manager-\u7684\u6743\u9650-1" tabindex="-1"><a class="header-anchor" href="#_4-kube-controller-manager-\u7684\u6743\u9650-1" aria-hidden="true">#</a> 4\uFF0Ckube-controller-manager \u7684\u6743\u9650</h2><p>ClusteRole: system:kube-controller-manager \u7684\u6743\u9650\u5F88\u5C0F\uFF0C\u53EA\u80FD\u521B\u5EFA secret\u3001serviceaccount \u7B49\u8D44\u6E90\u5BF9\u8C61\uFF0C\u5404 controller \u7684\u6743\u9650\u5206\u6563\u5230 ClusterRole system:controller:XXX \u4E2D\u3002</p><p>\u9700\u8981\u5728 kube-controller-manager \u7684\u542F\u52A8\u53C2\u6570\u4E2D\u6DFB\u52A0 \u3001\u2013use-service-account-credentials=true \u53C2\u6570\uFF0C\u8FD9\u6837 main controller \u4F1A\u4E3A\u5404 controller \u521B\u5EFA\u5BF9\u5E94\u7684 ServiceAccount XXX-controller\u3002</p><p>\u5185\u7F6E\u7684 ClusterRoleBinding system:controller:XXX \u5C06\u8D4B\u4E88\u5404 XXX-controller ServiceAccount \u5BF9\u5E94\u7684 ClusterRole system:controller:XXX \u6743\u9650\u3002</p><h2 id="_5-\u542F\u52A8-kube-controller-manager-\u670D\u52A1-1" tabindex="-1"><a class="header-anchor" href="#_5-\u542F\u52A8-kube-controller-manager-\u670D\u52A1-1" aria-hidden="true">#</a> 5\uFF0C\u542F\u52A8 kube-controller-manager \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;mkdir -p /var/log/kubernetes &amp;&amp; chown -R k8s /var/log/kubernetes&quot;
    ssh root@\${node_ip} &quot;systemctl daemon-reload &amp;&amp; systemctl enable kube-controller-manager &amp;&amp; systemctl start kube-controller-manager&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_6-\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001-1" tabindex="-1"><a class="header-anchor" href="#_6-\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001-1" aria-hidden="true">#</a> 6\uFF0C\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh k8s@\${node_ip} &quot;systemctl status kube-controller-manager|grep Active&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u8F93\u51FA\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:23:11 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:23:12 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:23:12 CST<span class="token punctuation">;</span> 6h ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5219\u4E3A\u6B63\u5E38\uFF0C\u5426\u5219\uFF0C\u67E5\u770B\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>journalctl -xu kube-controller-manager
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_7-\u67E5\u770B\u8F93\u51FA\u7684-metric-1" tabindex="-1"><a class="header-anchor" href="#_7-\u67E5\u770B\u8F93\u51FA\u7684-metric-1" aria-hidden="true">#</a> 7\uFF0C\u67E5\u770B\u8F93\u51FA\u7684 metric</h2><p><code>\u6CE8\u610F\uFF1A\u4EE5\u4E0B\u547D\u4EE4\u5728 kube-controller-manager \u8282\u70B9\u4E0A\u6267\u884C\u3002</code></p><p>kube-controller-manager \u76D1\u542C 10252 \u7AEF\u53E3\uFF0C\u63A5\u6536 https \u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$sudo</span> <span class="token function">netstat</span> -lnpt<span class="token operator">|</span><span class="token function">grep</span> kube-controll
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:10252         <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">14858</span>/kube-controll
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$curl</span> -s --cacert /etc/kubernetes/cert/ca.pem https://127.0.0.1:10252/metrics <span class="token operator">|</span><span class="token function">head</span>
<span class="token comment"># HELP ClusterRoleAggregator_adds Total number of adds handled by workqueue: ClusterRoleAggregator</span>
<span class="token comment"># TYPE ClusterRoleAggregator_adds counter</span>
ClusterRoleAggregator_adds <span class="token number">17</span>
<span class="token comment"># HELP ClusterRoleAggregator_depth Current depth of workqueue: ClusterRoleAggregator</span>
<span class="token comment"># TYPE ClusterRoleAggregator_depth gauge</span>
ClusterRoleAggregator_depth <span class="token number">0</span>
<span class="token comment"># HELP ClusterRoleAggregator_queue_latency How long an item stays in workqueueClusterRoleAggregator before being requested.</span>
<span class="token comment"># TYPE ClusterRoleAggregator_queue_latency summary</span>
ClusterRoleAggregator_queue_latency<span class="token punctuation">{</span>quantile<span class="token operator">=</span><span class="token string">&quot;0.5&quot;</span><span class="token punctuation">}</span> NaN
ClusterRoleAggregator_queue_latency<span class="token punctuation">{</span>quantile<span class="token operator">=</span><span class="token string">&quot;0.9&quot;</span><span class="token punctuation">}</span> NaN
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>curl --cacert CA \u8BC1\u4E66\u7528\u6765\u9A8C\u8BC1 kube-controller-manager https server \u8BC1\u4E66\uFF1B</li></ul><h2 id="_8-\u67E5\u770B\u5F53\u524D\u7684-leader-1" tabindex="-1"><a class="header-anchor" href="#_8-\u67E5\u770B\u5F53\u524D\u7684-leader-1" aria-hidden="true">#</a> 8\uFF0C\u67E5\u770B\u5F53\u524D\u7684 leader</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get endpoints kube-controller-manager --namespace<span class="token operator">=</span>kube-system  -o yaml
apiVersion: v1
kind: Endpoints
metadata:
  annotations:
    control-plane.alpha.kubernetes.io/leader: <span class="token string">&#39;{&quot;holderIdentity&quot;:&quot;kube-node1_c79b4380-ef09-11e8-aa72-525400c7ba97&quot;,&quot;leaseDurationSeconds&quot;:15,&quot;acquireTime&quot;:&quot;2018-11-23T10:23:11Z&quot;,&quot;renewTime&quot;:&quot;2018-11-23T16:50:16Z&quot;,&quot;leaderTransitions&quot;:0}&#39;</span>
  creationTimestamp: <span class="token number">2018</span>-11-23T10:23:11Z
  name: kube-controller-manager
  namespace: kube-system
  resourceVersion: <span class="token string">&quot;29655&quot;</span>
  selfLink: /api/v1/namespaces/kube-system/endpoints/kube-controller-manager
  uid: c79fb0ff-ef09-11e8-9670-525400c7ba97
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u53EF\u89C1\uFF0C\u5F53\u524D\u7684 leader \u4E3A kube-node1 \u8282\u70B9\u3002</p><h2 id="_9-\u6D4B\u8BD5-kube-controller-manager-\u96C6\u7FA4\u7684\u9AD8\u53EF\u7528-1" tabindex="-1"><a class="header-anchor" href="#_9-\u6D4B\u8BD5-kube-controller-manager-\u96C6\u7FA4\u7684\u9AD8\u53EF\u7528-1" aria-hidden="true">#</a> 9\uFF0C\u6D4B\u8BD5 kube-controller-manager \u96C6\u7FA4\u7684\u9AD8\u53EF\u7528</h2><p>\u505C\u6389\u4E00\u4E2A\u6216\u4E24\u4E2A\u8282\u70B9\u7684 kube-controller-manager \u670D\u52A1\uFF0C\u89C2\u5BDF\u5176\u5B83\u8282\u70B9\u7684\u65E5\u5FD7\uFF0C\u770B\u662F\u5426\u83B7\u53D6\u4E86 leader \u6743\u9650\u3002</p><p>\u73B0\u5728\u505C\u6389 kube-node1 \u4E0A\u7684 kube-controller-manager\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$systemctl</span> stop kube-controller-manager
<span class="token variable">$systemctl</span> status kube-controller-manager <span class="token operator">|</span><span class="token function">grep</span> Active
   Active: inactive <span class="token punctuation">(</span>dead<span class="token punctuation">)</span> since Sat <span class="token number">2018</span>-11-24 00:52:53 CST<span class="token punctuation">;</span> 44s ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u518D\u67E5\u770B\u4E00\u4E0B\u5F53\u524D\u7684 leader\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get endpoints kube-controller-manager --namespace<span class="token operator">=</span>kube-system  -o yaml
apiVersion: v1
kind: Endpoints
metadata:
  annotations:
    control-plane.alpha.kubernetes.io/leader: <span class="token string">&#39;{&quot;holderIdentity&quot;:&quot;kube-node3_c809d2de-ef09-11e8-bfb1-525400b42484&quot;,&quot;leaseDurationSeconds&quot;:15,&quot;acquireTime&quot;:&quot;2018-11-23T16:53:10Z&quot;,&quot;renewTime&quot;:&quot;2018-11-23T16:54:24Z&quot;,&quot;leaderTransitions&quot;:1}&#39;</span>
  creationTimestamp: <span class="token number">2018</span>-11-23T10:23:11Z
  name: kube-controller-manager
  namespace: kube-system
  resourceVersion: <span class="token string">&quot;29971&quot;</span>
  selfLink: /api/v1/namespaces/kube-system/endpoints/kube-controller-manager
  uid: c79fb0ff-ef09-11e8-9670-525400c7ba97
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u81EA\u52A8\u6F02\u79FB\u5230 kube-node3 \u4E0A\u53BB\u4E86\u3002</p><h2 id="_10-\u53C2\u8003-1" tabindex="-1"><a class="header-anchor" href="#_10-\u53C2\u8003-1" aria-hidden="true">#</a> 10\uFF0C\u53C2\u8003</h2><ol><li>\u5173\u4E8E controller \u6743\u9650\u548C use-service-account-credentials \u53C2\u6570\uFF1Ahttps://github.com/kubernetes/kubernetes/issues/48208</li><li>kublet \u8BA4\u8BC1\u548C\u6388\u6743\uFF1Ahttps://kubernetes.io/docs/admin/kubelet-authentication-authorization/#kubelet-authorization</li></ol>`,108);function r(t,l){return a}var c=s(e,[["render",r]]);export{c as default};
