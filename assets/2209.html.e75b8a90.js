import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>kublet \u8FD0\u884C\u5728\u6BCF\u4E2A worker \u8282\u70B9\u4E0A\uFF0C\u63A5\u6536 kube-apiserver \u53D1\u9001\u7684\u8BF7\u6C42\uFF0C\u7BA1\u7406 Pod \u5BB9\u5668\uFF0C\u6267\u884C\u4EA4\u4E92\u5F0F\u547D\u4EE4\uFF0C\u5982 exec\u3001run\u3001logs \u7B49\u3002</p><p>kublet \u542F\u52A8\u65F6\u81EA\u52A8\u5411 kube-apiserver \u6CE8\u518C\u8282\u70B9\u4FE1\u606F\uFF0C\u5185\u7F6E\u7684 cadvisor \u7EDF\u8BA1\u548C\u76D1\u63A7\u8282\u70B9\u7684\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5\u3002</p><p>\u4E3A\u786E\u4FDD\u5B89\u5168\uFF0C\u672C\u6587\u6863\u53EA\u5F00\u542F\u63A5\u6536 https \u8BF7\u6C42\u7684\u5B89\u5168\u7AEF\u53E3\uFF0C\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1\u548C\u6388\u6743\uFF0C\u62D2\u7EDD\u672A\u6388\u6743\u7684\u8BBF\u95EE (\u5982 apiserver\u3001heapster)\u3002</p><p>\u4E0B\u8F7D\u5206\u53D1\uFF0C\u5728\u90E8\u7F72 master \u8282\u70B9\u65F6\u5DF2\u7ECF\u505A\u8FC7\uFF0C\u4F9D\u8D56\u5305\u4E5F\u5728 work \u8282\u70B9\u5F53\u4E2D\u5B89\u88C5\u8FC7\uFF0C\u73B0\u5728\u76F4\u63A5\u8FDB\u5165\u914D\u7F6E\u3002</p><h2 id="_1-\u521B\u5EFA-kubelet-bootstrap-kubeconfig-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-kubelet-bootstrap-kubeconfig-\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA kubelet bootstrap kubeconfig \u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_name in \${NODE_NAMES[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_name}&quot;
    # \u521B\u5EFA token
    export BOOTSTRAP_TOKEN=$(kubeadm token create \\
      --description kubelet-bootstrap-token \\
      --groups system:bootstrappers:\${node_name} \\
      --kubeconfig ~/.kube/config)
    # \u8BBE\u7F6E\u96C6\u7FA4\u53C2\u6570
    kubectl config set-cluster kubernetes \\
      --certificate-authority=/etc/kubernetes/cert/ca.pem \\
      --embed-certs=true \\
      --server=\${KUBE_APISERVER} \\
      --kubeconfig=kubelet-bootstrap-\${node_name}.kubeconfig
    # \u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u53C2\u6570
    kubectl config set-credentials kubelet-bootstrap \\
      --token=\${BOOTSTRAP_TOKEN} \\
      --kubeconfig=kubelet-bootstrap-\${node_name}.kubeconfig
    # \u8BBE\u7F6E\u4E0A\u4E0B\u6587\u53C2\u6570
    kubectl config set-context default \\
      --cluster=kubernetes \\
      --user=kubelet-bootstrap \\
      --kubeconfig=kubelet-bootstrap-\${node_name}.kubeconfig
    # \u8BBE\u7F6E\u9ED8\u8BA4\u4E0A\u4E0B\u6587
    kubectl config use-context default --kubeconfig=kubelet-bootstrap-\${node_name}.kubeconfig
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ul><li>\u8BC1\u4E66\u4E2D\u5199\u5165 Token \u800C\u975E\u8BC1\u4E66\uFF0C\u8BC1\u4E66\u540E\u7EED\u7531 controller-manager \u521B\u5EFA\u3002</li></ul><p>\u67E5\u770B kubeadm \u4E3A\u5404\u8282\u70B9\u521B\u5EFA\u7684 token\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubeadm</span> token list --kubeconfig ~/.kube/config
TOKEN                     TTL       EXPIRES                     USAGES                   DESCRIPTION               EXTRA <span class="token environment constant">GROUPS</span>
3v99js.8f7hy9cid9olxx23   17h       <span class="token number">2018</span>-11-24T18:55:13+08:00   authentication,signing   kubelet-bootstrap-token   system:bootstrappers:kube-node2
904crw.exhwgn907b8zuzgz   17h       <span class="token number">2018</span>-11-24T18:55:13+08:00   authentication,signing   kubelet-bootstrap-token   system:bootstrappers:kube-node3
v75f7h.6516uqw5g4yttcqj   17h       <span class="token number">2018</span>-11-24T18:55:13+08:00   authentication,signing   kubelet-bootstrap-token   system:bootstrappers:kube-node1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u521B\u5EFA\u7684 token \u6709\u6548\u671F\u4E3A 1 \u5929\uFF0C\u8D85\u671F\u540E\u5C06\u4E0D\u80FD\u518D\u88AB\u4F7F\u7528\uFF0C\u4E14\u4F1A\u88AB kube-controller-manager \u7684 tokencleaner \u6E05\u7406 (\u5982\u679C\u542F\u7528\u8BE5 controller \u7684\u8BDD)\uFF1B</li><li>kube-apiserver \u63A5\u6536 kubelet \u7684 bootstrap token \u540E\uFF0C\u5C06\u8BF7\u6C42\u7684 user \u8BBE\u7F6E\u4E3A system:bootstrap:\uFF0Cgroup \u8BBE\u7F6E\u4E3A system:bootstrappers\uFF1B</li></ul><p>\u5404 token \u5173\u8054\u7684 Secret\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get secrets  -n kube-system
NAME                                             TYPE                                  DATA      AGE
bootstrap-token-3v99js                           bootstrap.kubernetes.io/token         <span class="token number">7</span>         6h
bootstrap-token-904crw                           bootstrap.kubernetes.io/token         <span class="token number">7</span>         6h
bootstrap-token-v75f7h                           bootstrap.kubernetes.io/token         <span class="token number">7</span>         6h
default-token-sqk8s                              kubernetes.io/service-account-token   <span class="token number">3</span>         6h
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_2-\u5206\u53D1-bootstrap-kubeconfig-\u6587\u4EF6\u5230\u6240\u6709-worker-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-\u5206\u53D1-bootstrap-kubeconfig-\u6587\u4EF6\u5230\u6240\u6709-worker-\u8282\u70B9" aria-hidden="true">#</a> 2\uFF0C\u5206\u53D1 bootstrap kubeconfig \u6587\u4EF6\u5230\u6240\u6709 worker \u8282\u70B9</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_name in \${NODE_NAMES[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_name}&quot; 
    scp kubelet-bootstrap-\${node_name}.kubeconfig k8s@\${node_name}:/etc/kubernetes/kubelet-bootstrap.kubeconfig
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u521B\u5EFA\u548C\u5206\u53D1-kubelet-\u53C2\u6570\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u548C\u5206\u53D1-kubelet-\u53C2\u6570\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 kubelet \u53C2\u6570\u914D\u7F6E\u6587\u4EF6</h2><p>\u521B\u5EFA kubelet \u53C2\u6570\u914D\u7F6E\u6A21\u677F\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span> <span class="token operator">&gt;</span> kubelet.config.json.template <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;kind&quot;: &quot;KubeletConfiguration&quot;,
  &quot;apiVersion&quot;: &quot;kubelet.config.k8s.io/v1beta1&quot;,
  &quot;authentication&quot;: {
    &quot;x509&quot;: {
      &quot;clientCAFile&quot;: &quot;/etc/kubernetes/cert/ca.pem&quot;
    },
    &quot;webhook&quot;: {
      &quot;enabled&quot;: true,
      &quot;cacheTTL&quot;: &quot;2m0s&quot;
    },
    &quot;anonymous&quot;: {
      &quot;enabled&quot;: false
    }
  },
  &quot;authorization&quot;: {
    &quot;mode&quot;: &quot;Webhook&quot;,
    &quot;webhook&quot;: {
      &quot;cacheAuthorizedTTL&quot;: &quot;5m0s&quot;,
      &quot;cacheUnauthorizedTTL&quot;: &quot;30s&quot;
    }
  },
  &quot;address&quot;: &quot;##NODE_IP##&quot;,
  &quot;port&quot;: 10250,
  &quot;readOnlyPort&quot;: 0,
  &quot;cgroupDriver&quot;: &quot;cgroupfs&quot;,
  &quot;hairpinMode&quot;: &quot;promiscuous-bridge&quot;,
  &quot;serializeImagePulls&quot;: false,
  &quot;featureGates&quot;: {
    &quot;RotateKubeletClientCertificate&quot;: true,
    &quot;RotateKubeletServerCertificate&quot;: true
  },
  &quot;clusterDomain&quot;: &quot;<span class="token variable">\${CLUSTER_DNS_DOMAIN}</span>&quot;,
  &quot;clusterDNS&quot;: [&quot;<span class="token variable">\${CLUSTER_DNS_SVC_IP}</span>&quot;]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><ul><li>address\uFF1AAPI \u76D1\u542C\u5730\u5740\uFF0C\u4E0D\u80FD\u4E3A 127.0.0.1\uFF0C\u5426\u5219 kube-apiserver\u3001heapster \u7B49\u4E0D\u80FD\u8C03\u7528 kubelet \u7684 API\uFF1B</li><li>readOnlyPort=0\uFF1A\u5173\u95ED\u53EA\u8BFB\u7AEF\u53E3 (\u9ED8\u8BA4 10255)\uFF0C\u7B49\u6548\u4E3A\u672A\u6307\u5B9A\uFF1B</li><li>authentication.anonymous.enabled\uFF1A\u8BBE\u7F6E\u4E3A false\uFF0C\u4E0D\u5141\u8BB8\u533F\u540D\u8BBF\u95EE 10250 \u7AEF\u53E3\uFF1B</li><li>authentication.x509.clientCAFile\uFF1A\u6307\u5B9A\u7B7E\u540D\u5BA2\u6237\u7AEF\u8BC1\u4E66\u7684 CA \u8BC1\u4E66\uFF0C\u5F00\u542F HTTP \u8BC1\u4E66\u8BA4\u8BC1\uFF1B</li><li>authentication.webhook.enabled=true\uFF1A\u5F00\u542F HTTPs bearer token \u8BA4\u8BC1\uFF1B</li><li>\u5BF9\u4E8E\u672A\u901A\u8FC7 x509 \u8BC1\u4E66\u548C webhook \u8BA4\u8BC1\u7684\u8BF7\u6C42 (kube-apiserver \u6216\u5176\u4ED6\u5BA2\u6237\u7AEF)\uFF0C\u5C06\u88AB\u62D2\u7EDD\uFF0C\u63D0\u793A Unauthorized\uFF1B</li><li>authroization.mode=Webhook\uFF1Akubelet \u4F7F\u7528 SubjectAccessReview API \u67E5\u8BE2 kube-apiserver \u67D0 user\u3001group \u662F\u5426\u5177\u6709\u64CD\u4F5C\u8D44\u6E90\u7684\u6743\u9650 (RBAC)\uFF1B</li><li>featureGates.RotateKubeletClientCertificate\u3001featureGates.RotateKubeletServerCertificate\uFF1A\u81EA\u52A8 rotate \u8BC1\u4E66\uFF0C\u8BC1\u4E66\u7684\u6709\u6548\u671F\u53D6\u51B3\u4E8E kube-controller-manager \u7684 \u2013experimental-cluster-signing-duration \u53C2\u6570\uFF1B</li><li>\u9700\u8981 root \u8D26\u6237\u8FD0\u884C\uFF1B</li></ul><p>\u4E3A\u5404\u8282\u70B9\u521B\u5EFA\u548C\u5206\u53D1 kubelet \u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    sed -e &quot;s/##NODE_IP##/\${node_ip}/&quot; kubelet.config.json.template &gt; kubelet.config-\${node_ip}.json
    scp kubelet.config-\${node_ip}.json root@\${node_ip}:/etc/kubernetes/kubelet.config.json
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_4-\u521B\u5EFA\u548C\u5206\u53D1-kubelet-systemd-unit-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA\u548C\u5206\u53D1-kubelet-systemd-unit-\u6587\u4EF6" aria-hidden="true">#</a> 4\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 kubelet systemd unit \u6587\u4EF6</h2><p>\u521B\u5EFA kubelet systemd unit \u6587\u4EF6\u6A21\u677F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kubelet.service.template <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=Kubernetes Kubelet
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
After=docker.service
Requires=docker.service
[Service]
WorkingDirectory=/var/lib/kubelet
ExecStart=/opt/k8s/bin/kubelet <span class="token entity" title="\\\\">\\\\</span>
  --bootstrap-kubeconfig=/etc/kubernetes/kubelet-bootstrap.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --cert-dir=/etc/kubernetes/cert <span class="token entity" title="\\\\">\\\\</span>
  --kubeconfig=/etc/kubernetes/kubelet.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --config=/etc/kubernetes/kubelet.config.json <span class="token entity" title="\\\\">\\\\</span>
  --hostname-override=##NODE_NAME## <span class="token entity" title="\\\\">\\\\</span>
  --pod-infra-container-image=registry.access.redhat.com/rhel7/pod-infrastructure:latest <span class="token entity" title="\\\\">\\\\</span>
  --allow-privileged=true <span class="token entity" title="\\\\">\\\\</span>
  --alsologtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=false <span class="token entity" title="\\\\">\\\\</span>
  --log-dir=/var/log/kubernetes <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on-failure
RestartSec=5
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ul><li>\u5982\u679C\u8BBE\u7F6E\u4E86 --hostname-override \u9009\u9879\uFF0C\u5219 kube-proxy \u4E5F\u9700\u8981\u8BBE\u7F6E\u8BE5\u9009\u9879\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u627E\u4E0D\u5230 Node \u7684\u60C5\u51B5\uFF1B</li><li>--bootstrap-kubeconfig\uFF1A\u6307\u5411 bootstrap kubeconfig \u6587\u4EF6\uFF0Ckubelet \u4F7F\u7528\u8BE5\u6587\u4EF6\u4E2D\u7684\u7528\u6237\u540D\u548C token \u5411 kube-apiserver \u53D1\u9001 TLS Bootstrapping \u8BF7\u6C42\uFF1B</li><li>K8S approve kubelet \u7684 csr \u8BF7\u6C42\u540E\uFF0C\u5728 --cert-dir \u76EE\u5F55\u521B\u5EFA\u8BC1\u4E66\u548C\u79C1\u94A5\u6587\u4EF6\uFF0C\u7136\u540E\u5199\u5165 --kubeconfig \u6587\u4EF6\uFF1B</li></ul><p>\u4E3A\u5404\u8282\u70B9\u521B\u5EFA\u548C\u5206\u53D1 kubelet systemd unit \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_name in \${NODE_NAMES[@]}
do 
    echo &quot;&gt;&gt;&gt; \${node_name}&quot;
    sed -e &quot;s/##NODE_NAME##/\${node_name}/&quot; kubelet.service.template &gt; kubelet-\${node_name}.service
    scp kubelet-\${node_name}.service root@\${node_name}:/etc/systemd/system/kubelet.service
    scp kubelet-bootstrap-\${node_name}.kubeconfig root@\${node_name}:/etc/kubernetes/kubelet-bootstrap.kubeconfig
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_5-bootstrap-token-auth-\u548C\u6388\u4E88\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_5-bootstrap-token-auth-\u548C\u6388\u4E88\u6743\u9650" aria-hidden="true">#</a> 5\uFF0CBootstrap Token Auth \u548C\u6388\u4E88\u6743\u9650</h2><p>kublet \u542F\u52A8\u65F6\u67E5\u627E\u914D\u7F6E\u7684 \u2013kubeletconfig \u6587\u4EF6\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5219\u4F7F\u7528 --bootstrap-kubeconfig \u5411 kube-apiserver \u53D1\u9001\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42 (CSR)\u3002</p><p>kube-apiserver \u6536\u5230 CSR \u8BF7\u6C42\u540E\uFF0C\u5BF9\u5176\u4E2D\u7684 Token \u8FDB\u884C\u8BA4\u8BC1\uFF08\u4E8B\u5148\u4F7F\u7528 kubeadm \u521B\u5EFA\u7684 token\uFF09\uFF0C\u8BA4\u8BC1\u901A\u8FC7\u540E\u5C06\u8BF7\u6C42\u7684 user \u8BBE\u7F6E\u4E3A system:bootstrap:\uFF0Cgroup \u8BBE\u7F6E\u4E3A system:bootstrappers\uFF0C\u8FD9\u4E00\u8FC7\u7A0B\u79F0\u4E3A Bootstrap Token Auth\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A user \u548C group \u6CA1\u6709\u521B\u5EFA CSR \u7684\u6743\u9650\uFF0Ckubelet \u542F\u52A8\u5931\u8D25\uFF0C\u9519\u8BEF\u65E5\u5FD7\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> journalctl -u kubelet -a <span class="token operator">|</span><span class="token function">grep</span> -A <span class="token number">2</span> <span class="token string">&#39;certificatesigningrequests&#39;</span>
May 06 06:42:36 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">26986</span><span class="token punctuation">]</span>: F0506 06:42:36.314378   <span class="token number">26986</span> server.go:233<span class="token punctuation">]</span> failed to run Kubelet: cannot create certificate signing request: certificatesigningrequests.certificates.k8s.io is forbidden: User <span class="token string">&quot;system:bootstrap:lemy40&quot;</span> cannot create certificatesigningrequests.certificates.k8s.io at the cluster scope
May 06 06:42:36 kube-node1 systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: kubelet.service: Main process exited, <span class="token assign-left variable">code</span><span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">255</span>/n/a
May 06 06:42:36 kube-node1 systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: kubelet.service: Failed with result <span class="token string">&#39;exit-code&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u89E3\u51B3\u529E\u6CD5\u662F\uFF1A\u521B\u5EFA\u4E00\u4E2A clusterrolebinding\uFF0C\u5C06 group system:bootstrappers \u548C clusterrole system:node-bootstrapper \u7ED1\u5B9A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl create clusterrolebinding kubelet-bootstrap --clusterrole<span class="token operator">=</span>system:node-bootstrapper --group<span class="token operator">=</span>system:bootstrappers
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_6-\u542F\u52A8-kubelet-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_6-\u542F\u52A8-kubelet-\u670D\u52A1" aria-hidden="true">#</a> 6\uFF0C\u542F\u52A8 kubelet \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;mkdir -p /var/lib/kubelet&quot;
    ssh root@\${node_ip} &quot;/usr/sbin/swapoff -a&quot;
    ssh root@\${node_ip} &quot;mkdir -p /var/log/kubernetes &amp;&amp; chown -R k8s /var/log/kubernetes&quot;
    ssh root@\${node_ip} &quot;systemctl daemon-reload &amp;&amp; systemctl enable kubelet &amp;&amp; systemctl restart kubelet&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u5173\u95ED swap \u5206\u533A\uFF0C\u5426\u5219 kubelet \u4F1A\u542F\u52A8\u5931\u8D25\uFF1B</li><li>\u5FC5\u987B\u5148\u521B\u5EFA\u5DE5\u4F5C\u548C\u65E5\u5FD7\u76EE\u5F55\uFF1B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$journalctl</span> -u kubelet <span class="token operator">|</span><span class="token function">tail</span>
Nov <span class="token number">24</span> 00:41:10 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">17331</span><span class="token punctuation">]</span>: I1124 00:41:10.255251   <span class="token number">17331</span> container_manager_linux.go:427<span class="token punctuation">]</span> <span class="token punctuation">[</span>ContainerManager<span class="token punctuation">]</span>: Discovered runtime cgroups name: /system.slice/docker.service
Nov <span class="token number">24</span> 00:46:10 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">17331</span><span class="token punctuation">]</span>: I1124 00:46:10.255711   <span class="token number">17331</span> container_manager_linux.go:427<span class="token punctuation">]</span> <span class="token punctuation">[</span>ContainerManager<span class="token punctuation">]</span>: Discovered runtime cgroups name: /system.slice/docker.service
Nov <span class="token number">24</span> 00:51:10 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">17331</span><span class="token punctuation">]</span>: I1124 00:51:10.256110   <span class="token number">17331</span> container_manager_linux.go:427<span class="token punctuation">]</span> <span class="token punctuation">[</span>ContainerManager<span class="token punctuation">]</span>: Discovered runtime cgroups name: /system.slice/docker.service
Nov <span class="token number">24</span> 00:56:10 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">17331</span><span class="token punctuation">]</span>: I1124 00:56:10.256544   <span class="token number">17331</span> container_manager_linux.go:427<span class="token punctuation">]</span> <span class="token punctuation">[</span>ContainerManager<span class="token punctuation">]</span>: Discovered runtime cgroups name: /system.slice/docker.service
Nov <span class="token number">24</span> 01:01:10 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">17331</span><span class="token punctuation">]</span>: I1124 01:01:10.259279   <span class="token number">17331</span> container_manager_linux.go:427<span class="token punctuation">]</span> <span class="token punctuation">[</span>ContainerManager<span class="token punctuation">]</span>: Discovered runtime cgroups name: /system.slice/docker.service
Nov <span class="token number">24</span> 01:06:10 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">17331</span><span class="token punctuation">]</span>: I1124 01:06:10.259741   <span class="token number">17331</span> container_manager_linux.go:427<span class="token punctuation">]</span> <span class="token punctuation">[</span>ContainerManager<span class="token punctuation">]</span>: Discovered runtime cgroups name: /system.slice/docker.service
Nov <span class="token number">24</span> 01:11:10 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">17331</span><span class="token punctuation">]</span>: I1124 01:11:10.260211   <span class="token number">17331</span> container_manager_linux.go:427<span class="token punctuation">]</span> <span class="token punctuation">[</span>ContainerManager<span class="token punctuation">]</span>: Discovered runtime cgroups name: /system.slice/docker.service
Nov <span class="token number">24</span> 01:16:10 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">17331</span><span class="token punctuation">]</span>: I1124 01:16:10.261190   <span class="token number">17331</span> container_manager_linux.go:427<span class="token punctuation">]</span> <span class="token punctuation">[</span>ContainerManager<span class="token punctuation">]</span>: Discovered runtime cgroups name: /system.slice/docker.service
Nov <span class="token number">24</span> 01:21:10 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">17331</span><span class="token punctuation">]</span>: I1124 01:21:10.261772   <span class="token number">17331</span> container_manager_linux.go:427<span class="token punctuation">]</span> <span class="token punctuation">[</span>ContainerManager<span class="token punctuation">]</span>: Discovered runtime cgroups name: /system.slice/docker.service
Nov <span class="token number">24</span> 01:26:10 kube-node1 kubelet<span class="token punctuation">[</span><span class="token number">17331</span><span class="token punctuation">]</span>: I1124 01:26:10.262188   <span class="token number">17331</span> container_manager_linux.go:427<span class="token punctuation">]</span> <span class="token punctuation">[</span>ContainerManager<span class="token punctuation">]</span>: Discovered runtime cgroups name: /system.slice/docker.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>kubelet \u542F\u52A8\u540E\u4F7F\u7528 --bootstrap-kubeconfig \u5411 kube-apiserver \u53D1\u9001 CSR \u8BF7\u6C42\uFF0C\u5F53\u8FD9\u4E2A CSR \u88AB approve \u540E\uFF0Ckube-controller-manager \u4E3A kubelet \u521B\u5EFA TLS \u5BA2\u6237\u7AEF\u8BC1\u4E66\u3001\u79C1\u94A5\u548C --kubeletconfig \u6587\u4EF6\u3002 \u6CE8\u610F\uFF1Akube-controller-manager \u9700\u8981\u914D\u7F6E --cluster-signing-cert-file \u548C --cluster-signing-key-file \u53C2\u6570\uFF0C\u624D\u4F1A\u4E3A TLS Bootstrap \u521B\u5EFA\u8BC1\u4E66\u548C\u79C1\u94A5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get csr
NAME                                                   AGE       REQUESTOR                 CONDITION
node-csr-QzuuQiuUfcSdp3j5W4B2UOuvQ_n9aTNHAlrLzVFiqrk   43s       system:bootstrap:zkiem5   Pending
node-csr-oVbPmU-ikVknpynwu0Ckz_MvkAO_F1j0hmbcDa__sGA   27s       system:bootstrap:mkus5s   Pending
node-csr-u0E1-ugxgotO_9FiGXo8DkD6a7-ew8sX2qPE6KPS2IY   13m       system:bootstrap:k0s2bj   Pending
$ kubectl get nodes
No resources found.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u4E09\u4E2A work \u8282\u70B9\u7684 csr \u5747\u5904\u4E8E pending \u72B6\u6001\uFF1B</li></ul><h3 id="_1-approve-kubelet-csr-\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-approve-kubelet-csr-\u8BF7\u6C42" aria-hidden="true">#</a> 1\uFF0Capprove kubelet CSR \u8BF7\u6C42</h3><p>\u53EF\u4EE5\u624B\u52A8\u6216\u81EA\u52A8 approve CSR \u8BF7\u6C42\u3002\u63A8\u8350\u4F7F\u7528\u81EA\u52A8\u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u4ECE v1.8 \u7248\u672C\u5F00\u59CB\uFF0C\u53EF\u4EE5\u81EA\u52A8\u8F6E\u8F6C approve csr \u540E\u751F\u6210\u7684\u8BC1\u4E66\u3002</p><h3 id="_2-\u624B\u52A8-approve-csr-\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_2-\u624B\u52A8-approve-csr-\u8BF7\u6C42" aria-hidden="true">#</a> 2\uFF0C\u624B\u52A8 approve CSR \u8BF7\u6C42</h3><p>\u67E5\u770B CSR \u5217\u8868\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get csr
NAME                                                   AGE       REQUESTOR                 CONDITION
node-csr-QzuuQiuUfcSdp3j5W4B2UOuvQ_n9aTNHAlrLzVFiqrk   43s       system:bootstrap:zkiem5   Pending
node-csr-oVbPmU-ikVknpynwu0Ckz_MvkAO_F1j0hmbcDa__sGA   27s       system:bootstrap:mkus5s   Pending
node-csr-u0E1-ugxgotO_9FiGXo8DkD6a7-ew8sX2qPE6KPS2IY   13m       system:bootstrap:k0s2bj   Pending
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>approve CSR\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl certificate approve node-csr-QzuuQiuUfcSdp3j5W4B2UOuvQ_n9aTNHAlrLzVFiqrk
certificatesigningrequest.certificates.k8s.io <span class="token string">&quot;node-csr-QzuuQiuUfcSdp3j5W4B2UOuvQ_n9aTNHAlrLzVFiqrk&quot;</span> approved
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u67E5\u770B Approve \u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl describe  csr node-csr-QzuuQiuUfcSdp3j5W4B2UOuvQ_n9aTNHAlrLzVFiqrk
Name:               node-csr-QzuuQiuUfcSdp3j5W4B2UOuvQ_n9aTNHAlrLzVFiqrk
Labels:             <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
CreationTimestamp:  Wed, <span class="token number">24</span> Jun <span class="token number">2018</span> <span class="token number">16</span>:05:04 +0800
Requesting User:    system:bootstrap:zkiem5
Status:             Approved
Subject:
         Common Name:    system:node:kube-node2
         Serial Number:
         Organization:   system:nodes
Events:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>Requesting User\uFF1A\u8BF7\u6C42 CSR \u7684\u7528\u6237\uFF0Ckube-apiserver \u5BF9\u5B83\u8FDB\u884C\u8BA4\u8BC1\u548C\u6388\u6743\uFF1B</li><li>Subject\uFF1A\u8BF7\u6C42\u7B7E\u540D\u7684\u8BC1\u4E66\u4FE1\u606F\uFF1B</li><li>\u8BC1\u4E66\u7684 CN \u662F system:node:kube-node2\uFF0C Organization \u662F system:nodes\uFF0Ckube-apiserver \u7684 Node \u6388\u6743\u6A21\u5F0F\u4F1A\u6388\u4E88\u8BE5\u8BC1\u4E66\u7684\u76F8\u5173\u6743\u9650\uFF1B</li></ul><h3 id="_3-\u81EA\u52A8-approve-csr-\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_3-\u81EA\u52A8-approve-csr-\u8BF7\u6C42" aria-hidden="true">#</a> 3\uFF0C\u81EA\u52A8 approve CSR \u8BF7\u6C42</h3><p>\u521B\u5EFA\u4E09\u4E2A ClusterRoleBinding\uFF0C\u5206\u522B\u7528\u4E8E\u81EA\u52A8 approve client\u3001renew client\u3001renew server \u8BC1\u4E66\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> csr-crb.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
 # Approve all CSRs for the group &quot;system:bootstrappers&quot;
 kind: ClusterRoleBinding
 apiVersion: rbac.authorization.k8s.io/v1
 metadata:
   name: auto-approve-csrs-for-group
 subjects:
 - kind: Group
   name: system:bootstrappers
   apiGroup: rbac.authorization.k8s.io
 roleRef:
   kind: ClusterRole
   name: system:certificates.k8s.io:certificatesigningrequests:nodeclient
   apiGroup: rbac.authorization.k8s.io
---
 # To let a node of the group &quot;system:nodes&quot; renew its own credentials
 kind: ClusterRoleBinding
 apiVersion: rbac.authorization.k8s.io/v1
 metadata:
   name: node-client-cert-renewal
 subjects:
 - kind: Group
   name: system:nodes
   apiGroup: rbac.authorization.k8s.io
 roleRef:
   kind: ClusterRole
   name: system:certificates.k8s.io:certificatesigningrequests:selfnodeclient
   apiGroup: rbac.authorization.k8s.io
---
# A ClusterRole which instructs the CSR approver to approve a node requesting a
# serving cert matching its client cert.
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: approve-node-server-renewal-csr
rules:
- apiGroups: [&quot;certificates.k8s.io&quot;]
  resources: [&quot;certificatesigningrequests/selfnodeserver&quot;]
  verbs: [&quot;create&quot;]
---
 # To let a node of the group &quot;system:nodes&quot; renew its own server credentials
 kind: ClusterRoleBinding
 apiVersion: rbac.authorization.k8s.io/v1
 metadata:
   name: node-server-cert-renewal
 subjects:
 - kind: Group
   name: system:nodes
   apiGroup: rbac.authorization.k8s.io
 roleRef:
   kind: ClusterRole
   name: approve-node-server-renewal-csr
   apiGroup: rbac.authorization.k8s.io
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><ul><li>auto-approve-csrs-for-group\uFF1A\u81EA\u52A8 approve node \u7684\u7B2C\u4E00\u6B21 CSR\uFF1B \u6CE8\u610F\u7B2C\u4E00\u6B21 CSR \u65F6\uFF0C\u8BF7\u6C42\u7684 Group \u4E3A system:bootstrappers\uFF1B</li><li>node-client-cert-renewal\uFF1A\u81EA\u52A8 approve node \u540E\u7EED\u8FC7\u671F\u7684 client \u8BC1\u4E66\uFF0C\u81EA\u52A8\u751F\u6210\u7684\u8BC1\u4E66 Group \u4E3A system:nodes;</li><li>node-server-cert-renewal\uFF1A\u81EA\u52A8 approve node \u540E\u7EED\u8FC7\u671F\u7684 server \u8BC1\u4E66\uFF0C\u81EA\u52A8\u751F\u6210\u7684\u8BC1\u4E66 Group \u4E3A system:nodes;</li></ul><p>\u751F\u6548\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl apply -f csr-crb.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_7-\u67E5\u770B-kublet-\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_7-\u67E5\u770B-kublet-\u7684\u60C5\u51B5" aria-hidden="true">#</a> 7\uFF0C\u67E5\u770B kublet \u7684\u60C5\u51B5</h2><p>\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4 (1-10 \u5206\u949F)\uFF0C\u4E09\u4E2A\u8282\u70B9\u7684 CSR \u90FD\u88AB\u81EA\u52A8 approve\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get csr
NAME                                                   AGE       REQUESTOR                 CONDITION
csr-98h25                                              6m        system:node:kube-node2    Approved,Issued
csr-lb5c9                                              7m        system:node:kube-node3    Approved,Issued
csr-m2hn4                                              14m       system:node:kube-node1    Approved,Issued
node-csr-7q7i0q4MF_K2TSEJj16At4CJFLlJkHIqei6nMIAaJCU   28m       system:bootstrap:k0s2bj   Approved,Issued
node-csr-ND77wk2P8k2lHBtgBaObiyYw0uz1Um7g2pRvveMF-c4   35m       system:bootstrap:mkus5s   Approved,Issued
node-csr-Nysmrw55nnM48NKwEJuiuCGmZoxouK4N8jiEHBtLQso   6m        system:bootstrap:zkiem5   Approved,Issued
node-csr-QzuuQiuUfcSdp3j5W4B2UOuvQ_n9aTNHAlrLzVFiqrk   1h        system:bootstrap:zkiem5   Approved,Issued
node-csr-oVbPmU-ikVknpynwu0Ckz_MvkAO_F1j0hmbcDa__sGA   1h        system:bootstrap:mkus5s   Approved,Issued
node-csr-u0E1-ugxgotO_9FiGXo8DkD6a7-ew8sX2qPE6KPS2IY   1h        system:bootstrap:k0s2bj   Approved,Issued
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6240\u6709\u8282\u70B9\u5747 ready\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get node
NAME         STATUS    ROLES     AGE       VERSION
kube-node1   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    6h        v1.10.4
kube-node2   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    6h        v1.10.4
kube-node3   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    6h        v1.10.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>kube-controller-manager \u4E3A\u5404 node \u751F\u6210\u4E86 kubeconfig \u6587\u4EF6\u548C\u516C\u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$ls</span> -l /etc/kubernetes/kubelet.kubeconfig
-rw------- <span class="token number">1</span> root root <span class="token number">2296</span> Nov <span class="token number">23</span> <span class="token number">19</span>:11 /etc/kubernetes/kubelet.kubeconfig
<span class="token variable">$ls</span> -l /etc/kubernetes/cert/<span class="token operator">|</span><span class="token function">grep</span> kubelet
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">1046</span> Nov <span class="token number">23</span> <span class="token number">19</span>:11 kubelet-client.crt
-rw------- <span class="token number">1</span> root root  <span class="token number">227</span> Nov <span class="token number">23</span> <span class="token number">19</span>:09 kubelet-client.key
-rw------- <span class="token number">1</span> root root <span class="token number">1334</span> Nov <span class="token number">23</span> <span class="token number">19</span>:12 kubelet-server-2018-11-23-19-12-50.pem
lrwxrwxrwx <span class="token number">1</span> root root   <span class="token number">59</span> Nov <span class="token number">23</span> <span class="token number">19</span>:12 kubelet-server-current.pem -<span class="token operator">&gt;</span> /etc/kubernetes/cert/kubelet-server-2018-11-23-19-12-50.pem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>kubelet-server \u8BC1\u4E66\u4F1A\u5468\u671F\u8F6E\u8F6C\uFF1B</li></ul><h2 id="_8-kubelet-\u63D0\u4F9B\u7684-api-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_8-kubelet-\u63D0\u4F9B\u7684-api-\u63A5\u53E3" aria-hidden="true">#</a> 8\uFF0Ckubelet \u63D0\u4F9B\u7684 API \u63A5\u53E3</h2><p>kublet \u542F\u52A8\u540E\u76D1\u542C\u591A\u4E2A\u7AEF\u53E3\uFF0C\u7528\u4E8E\u63A5\u6536 kube-apiserver \u6216\u5176\u5B83\u7EC4\u4EF6\u53D1\u9001\u7684\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$sudo</span> <span class="token function">netstat</span> -lnpt<span class="token operator">|</span><span class="token function">grep</span> kubelet
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.106.3:10250     <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">17331</span>/kubelet
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.106.3:4194      <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">17331</span>/kubelet
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:10248         <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">17331</span>/kubelet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>4194: cadvisor http \u670D\u52A1\uFF1B</li><li>10248: healthz http \u670D\u52A1\uFF1B</li><li>10250: https API \u670D\u52A1\uFF1B\u6CE8\u610F\uFF1A\u672A\u5F00\u542F\u53EA\u8BFB\u7AEF\u53E3 10255\uFF1B</li></ul><p>\u4F8B\u5982\u6267\u884C kubectl ec -it nginx-ds-5rmws -- sh \u547D\u4EE4\u65F6\uFF0Ckube-apiserver \u4F1A\u5411 kubelet \u53D1\u9001\u5982\u4E0B\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>POST /exec/default/nginx-ds-5rmws/my-nginx?command<span class="token operator">=</span>sh<span class="token operator">&amp;</span><span class="token assign-left variable">input</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">&amp;</span><span class="token assign-left variable">output</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">&amp;</span><span class="token assign-left variable">tty</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>kubelet \u63A5\u6536 10250 \u7AEF\u53E3\u7684 https \u8BF7\u6C42\uFF1A</p><ul><li>/pods\u3001/runningpods</li><li>/metrics\u3001/metrics/cadvisor\u3001/metrics/probes</li><li>/spec</li><li>/stats\u3001/stats/container</li><li>/logs</li><li>/run/\u3001\u201D/exec/\u201D, \u201C/attach/\u201D, \u201C/portForward/\u201D, \u201C/containerLogs/\u201D \u7B49\u7BA1\u7406\uFF1B</li></ul><p>\u8BE6\u60C5\u53C2\u8003\uFF1Ahttps://github.com/kubernetes/kubernetes/blob/master/pkg/kubelet/server/server.go#L434:3</p><p>\u7531\u4E8E\u5173\u95ED\u4E86\u533F\u540D\u8BA4\u8BC1\uFF0C\u540C\u65F6\u5F00\u542F\u4E86 webhook \u6388\u6743\uFF0C\u6240\u6709\u8BBF\u95EE 10250 \u7AEF\u53E3 https API \u7684\u8BF7\u6C42\u90FD\u9700\u8981\u88AB\u8BA4\u8BC1\u548C\u6388\u6743\u3002</p><p>\u9884\u5B9A\u4E49\u7684 ClusterRole system:kubelet-api-admin \u6388\u4E88\u8BBF\u95EE kubelet \u6240\u6709 API \u7684\u6743\u9650\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> describe clusterrole system:kubelet-api-admin
Name:         system:kubelet-api-admin
Labels:       kubernetes.io/bootstrapping<span class="token operator">=</span>rbac-defaults
Annotations:  rbac.authorization.kubernetes.io/autoupdate<span class="token operator">=</span>true
PolicyRule:
  Resources      Non-Resource URLs  Resource Names  Verbs
  ---------      -----------------  --------------  -----
  nodes          <span class="token punctuation">[</span><span class="token punctuation">]</span>                 <span class="token punctuation">[</span><span class="token punctuation">]</span>              <span class="token punctuation">[</span>get list <span class="token function">watch</span> proxy<span class="token punctuation">]</span>
  nodes/log      <span class="token punctuation">[</span><span class="token punctuation">]</span>                 <span class="token punctuation">[</span><span class="token punctuation">]</span>              <span class="token punctuation">[</span>*<span class="token punctuation">]</span>
  nodes/metrics  <span class="token punctuation">[</span><span class="token punctuation">]</span>                 <span class="token punctuation">[</span><span class="token punctuation">]</span>              <span class="token punctuation">[</span>*<span class="token punctuation">]</span>
  nodes/proxy    <span class="token punctuation">[</span><span class="token punctuation">]</span>                 <span class="token punctuation">[</span><span class="token punctuation">]</span>              <span class="token punctuation">[</span>*<span class="token punctuation">]</span>
  nodes/spec     <span class="token punctuation">[</span><span class="token punctuation">]</span>                 <span class="token punctuation">[</span><span class="token punctuation">]</span>              <span class="token punctuation">[</span>*<span class="token punctuation">]</span>
  nodes/stats    <span class="token punctuation">[</span><span class="token punctuation">]</span>                 <span class="token punctuation">[</span><span class="token punctuation">]</span>              <span class="token punctuation">[</span>*<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_9-kublet-api-\u8BA4\u8BC1\u548C\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#_9-kublet-api-\u8BA4\u8BC1\u548C\u6388\u6743" aria-hidden="true">#</a> 9\uFF0Ckublet api \u8BA4\u8BC1\u548C\u6388\u6743</h2><p>kublet \u914D\u7F6E\u4E86\u5982\u4E0B\u8BA4\u8BC1\u53C2\u6570\uFF1A</p><ul><li>authentication.anonymous.enabled\uFF1A\u8BBE\u7F6E\u4E3A false\uFF0C\u4E0D\u5141\u8BB8\u533F\u540D\u8BBF\u95EE 10250 \u7AEF\u53E3\uFF1B</li><li>authentication.x509.clientCAFile\uFF1A\u6307\u5B9A\u7B7E\u540D\u5BA2\u6237\u7AEF\u8BC1\u4E66\u7684 CA \u8BC1\u4E66\uFF0C\u5F00\u542F HTTPs \u8BC1\u4E66\u8BA4\u8BC1\uFF1B</li><li>authentication.webhook.enabled=true\uFF1A\u5F00\u542F HTTPs bearer token \u8BA4\u8BC1\uFF1B</li></ul><p>\u540C\u65F6\u914D\u7F6E\u4E86\u5982\u4E0B\u6388\u6743\u53C2\u6570\uFF1A</p><ul><li>authroization.mode=Webhook\uFF1A\u5F00\u542F RBAC \u6388\u6743\uFF1B</li></ul><p>kubelet \u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u4F7F\u7528 clientCAFile \u5BF9\u8BC1\u4E66\u7B7E\u540D\u8FDB\u884C\u8BA4\u8BC1\uFF0C\u6216\u8005\u67E5\u8BE2 bearer token \u662F\u5426\u6709\u6548\u3002\u5982\u679C\u4E24\u8005\u90FD\u6CA1\u901A\u8FC7\uFF0C\u5219\u62D2\u7EDD\u8BF7\u6C42\uFF0C\u63D0\u793A Unauthorized\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">curl</span> -s --cacert /etc/kubernetes/cert/ca.pem https://192.168.106.5:10250/metrics
Unauthorized
$ <span class="token function">curl</span> -s --cacert /etc/kubernetes/cert/ca.pem -H <span class="token string">&quot;Authorization: Bearer 123456&quot;</span> https://192.168.106.5:10250/metrics
Unauthorized
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u901A\u8FC7\u8BA4\u8BC1\u540E\uFF0Ckubelet \u4F7F\u7528 SubjectAccessReview API \u5411 kube-apiserver \u53D1\u9001\u8BF7\u6C42\uFF0C\u67E5\u8BE2\u8BC1\u4E66\u6216 token \u5BF9\u5E94\u7684 user\u3001group \u662F\u5426\u6709\u64CD\u4F5C\u8D44\u6E90\u7684\u6743\u9650 (RBAC)\uFF1B</p><p>\u8BC1\u4E66\u8BA4\u8BC1\u548C\u6388\u6743\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token comment"># \u6743\u9650\u4E0D\u8DB3\u7684\u8BC1\u4E66\uFF1B</span>
$ <span class="token function">curl</span> -s --cacert /etc/kubernetes/cert/ca.pem --cert /etc/kubernetes/cert/kube-controller-manager.pem --key /etc/kubernetes/cert/kube-controller-manager-key.pem https://192.168.106.5:10250/metrics
Forbidden <span class="token punctuation">(</span>user<span class="token operator">=</span>system:kube-controller-manager, <span class="token assign-left variable">verb</span><span class="token operator">=</span>get, <span class="token assign-left variable">resource</span><span class="token operator">=</span>nodes, <span class="token assign-left variable">subresource</span><span class="token operator">=</span>metrics<span class="token punctuation">)</span>
$ <span class="token comment"># \u4F7F\u7528\u90E8\u7F72 kubectl \u547D\u4EE4\u884C\u5DE5\u5177\u65F6\u521B\u5EFA\u7684\u3001\u5177\u6709\u6700\u9AD8\u6743\u9650\u7684 admin \u8BC1\u4E66\uFF1B</span>
$ <span class="token function">curl</span> -s --cacert /etc/kubernetes/cert/ca.pem --cert ./admin.pem --key ./admin-key.pem https://192.168.106.5:10250/metrics<span class="token operator">|</span><span class="token function">head</span>
<span class="token comment"># HELP apiserver_client_certificate_expiration_seconds Distribution of the remaining lifetime on the certificate used to authenticate a request.</span>
<span class="token comment"># TYPE apiserver_client_certificate_expiration_seconds histogram</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;21600&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;43200&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;86400&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;172800&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;345600&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;604800&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;2.592e+06&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>--cacert\u3001--cert\u3001--key \u7684\u53C2\u6570\u503C\u5FC5\u987B\u662F\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5982\u4E0A\u9762\u7684 ./admin.pem \u4E0D\u80FD\u7701\u7565 ./\uFF0C\u5426\u5219\u8FD4\u56DE 401 Unauthorized\uFF1B</li></ul><p>bear token \u8BA4\u8BC1\u548C\u6388\u6743\uFF1A</p><p>\u521B\u5EFA\u4E00\u4E2A ServiceAccount\uFF0C\u5C06\u5B83\u548C ClusterRole system:kubelet-api-admin \u7ED1\u5B9A\uFF0C\u4ECE\u800C\u5177\u6709\u8C03\u7528 kubelet API \u7684\u6743\u9650\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl create sa kubelet-api-test
$ kubectl create clusterrolebinding kubelet-api-test --<span class="token variable">$clusterrole</span><span class="token operator">=</span>system:kubelet-api-admin --serviceaccount<span class="token operator">=</span>default:kubelet-api-test
$ <span class="token assign-left variable">SECRET</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>kubectl get secrets <span class="token operator">|</span> <span class="token function">grep</span> kubelet-api-test <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
$ <span class="token assign-left variable">TOKEN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>kubectl describe secret $<span class="token punctuation">{</span>SECRET<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">grep</span> -E <span class="token string">&#39;^token&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${TOKEN}</span>
$ <span class="token function">curl</span> -s --cacert /etc/kubernetes/cert/ca.pem -H <span class="token string">&quot;Authorization: Bearer <span class="token variable">\${TOKEN}</span>&quot;</span> https://172.27.129.111:10250/metrics<span class="token operator">|</span><span class="token function">head</span>
<span class="token comment"># HELP apiserver_client_certificate_expiration_seconds Distribution of the remaining lifetime on the certificate used to authenticate a request.</span>
<span class="token comment"># TYPE apiserver_client_certificate_expiration_seconds histogram</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;21600&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;43200&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;86400&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;172800&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;345600&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;604800&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
apiserver_client_certificate_expiration_seconds_bucket<span class="token punctuation">{</span>le<span class="token operator">=</span><span class="token string">&quot;2.592e+06&quot;</span><span class="token punctuation">}</span> <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_10-cadvisor-\u548C-metrics" tabindex="-1"><a class="header-anchor" href="#_10-cadvisor-\u548C-metrics" aria-hidden="true">#</a> 10\uFF0Ccadvisor \u548C metrics</h2><p>cadvisor \u7EDF\u8BA1\u6240\u5728\u8282\u70B9\u5404\u5BB9\u5668\u7684\u8D44\u6E90 (CPU\u3001\u5185\u5B58\u3001\u78C1\u76D8\u3001\u7F51\u5361) \u4F7F\u7528\u60C5\u51B5\uFF0C\u5206\u522B\u5728\u81EA\u5DF1\u7684 http web \u9875\u9762 (4194 \u7AEF\u53E3) \u548C 10250 \u4EE5 promehteus metrics \u7684\u5F62\u5F0F\u8F93\u51FA\u3002</p><p>\u6D4F\u89C8\u5668\u8BBF\u95EE http://192.168.106.5:4194/containers/ \u53EF\u4EE5\u67E5\u770B\u5230 cadvisor \u7684\u76D1\u63A7\u9875\u9762\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/90642103f50d2a54.jpg" alt="image"></p><h2 id="_11-\u83B7\u53D6-kublet-\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_11-\u83B7\u53D6-kublet-\u7684\u914D\u7F6E" aria-hidden="true">#</a> 11\uFF0C\u83B7\u53D6 kublet \u7684\u914D\u7F6E</h2><p>\u4ECE kube-apiserver \u83B7\u53D6\u5404 node \u7684\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">source</span> /opt/k8s/bin/environment.sh
$ <span class="token comment"># \u4F7F\u7528\u90E8\u7F72 kubectl \u547D\u4EE4\u884C\u5DE5\u5177\u65F6\u521B\u5EFA\u7684\u3001\u5177\u6709\u6700\u9AD8\u6743\u9650\u7684 admin \u8BC1\u4E66\uFF1B</span>
$ <span class="token function">curl</span> -sSL --cacert /etc/kubernetes/cert/ca.pem --cert ./admin.pem --key ./admin-key.pem <span class="token variable">\${KUBE_APISERVER}</span>/api/v1/nodes/kube-node1/proxy/configz <span class="token operator">|</span> jq <span class="token punctuation">\\</span>
  <span class="token string">&#39;.kubeletconfig|.kind=&quot;KubeletConfiguration&quot;|.apiVersion=&quot;kubelet.config.k8s.io/v1beta1&quot;&#39;</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;syncFrequency&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1m0s&quot;</span>,
  <span class="token string">&quot;fileCheckFrequency&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;20s&quot;</span>,
  <span class="token string">&quot;httpCheckFrequency&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;20s&quot;</span>,
  <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.27.129.80&quot;</span>,
  <span class="token string">&quot;port&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10250</span>,
  <span class="token string">&quot;readOnlyPort&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10255</span>,
  <span class="token string">&quot;authentication&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;x509&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
    <span class="token string">&quot;webhook&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;enabled&quot;</span><span class="token builtin class-name">:</span> false,
      <span class="token string">&quot;cacheTTL&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2m0s&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;anonymous&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;enabled&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;authorization&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;AlwaysAllow&quot;</span>,
    <span class="token string">&quot;webhook&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;cacheAuthorizedTTL&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;5m0s&quot;</span>,
      <span class="token string">&quot;cacheUnauthorizedTTL&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;30s&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;registryPullQPS&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5</span>,
  <span class="token string">&quot;registryBurst&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,
  <span class="token string">&quot;eventRecordQPS&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5</span>,
  <span class="token string">&quot;eventBurst&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,
  <span class="token string">&quot;enableDebuggingHandlers&quot;</span><span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;healthzPort&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10248</span>,
  <span class="token string">&quot;healthzBindAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>,
  <span class="token string">&quot;oomScoreAdj&quot;</span><span class="token builtin class-name">:</span> -999,
  <span class="token string">&quot;clusterDomain&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cluster.local.&quot;</span>,
  <span class="token string">&quot;clusterDNS&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;10.254.0.2&quot;</span>
  <span class="token punctuation">]</span>,
  <span class="token string">&quot;streamingConnectionIdleTimeout&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4h0m0s&quot;</span>,
  <span class="token string">&quot;nodeStatusUpdateFrequency&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10s&quot;</span>,
  <span class="token string">&quot;imageMinimumGCAge&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2m0s&quot;</span>,
  <span class="token string">&quot;imageGCHighThresholdPercent&quot;</span><span class="token builtin class-name">:</span> <span class="token number">85</span>,
  <span class="token string">&quot;imageGCLowThresholdPercent&quot;</span><span class="token builtin class-name">:</span> <span class="token number">80</span>,
  <span class="token string">&quot;volumeStatsAggPeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1m0s&quot;</span>,
  <span class="token string">&quot;cgroupsPerQOS&quot;</span><span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;cgroupDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cgroupfs&quot;</span>,
  <span class="token string">&quot;cpuManagerPolicy&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;none&quot;</span>,
  <span class="token string">&quot;cpuManagerReconcilePeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10s&quot;</span>,
  <span class="token string">&quot;runtimeRequestTimeout&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2m0s&quot;</span>,
  <span class="token string">&quot;hairpinMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;promiscuous-bridge&quot;</span>,
  <span class="token string">&quot;maxPods&quot;</span><span class="token builtin class-name">:</span> <span class="token number">110</span>,
  <span class="token string">&quot;podPidsLimit&quot;</span><span class="token builtin class-name">:</span> -1,
  <span class="token string">&quot;resolvConf&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/etc/resolv.conf&quot;</span>,
  <span class="token string">&quot;cpuCFSQuota&quot;</span><span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;maxOpenFiles&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1000000</span>,
  <span class="token string">&quot;contentType&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;application/vnd.kubernetes.protobuf&quot;</span>,
  <span class="token string">&quot;kubeAPIQPS&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5</span>,
  <span class="token string">&quot;kubeAPIBurst&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,
  <span class="token string">&quot;serializeImagePulls&quot;</span><span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;evictionHard&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;imagefs.available&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;15%&quot;</span>,
    <span class="token string">&quot;memory.available&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;100Mi&quot;</span>,
    <span class="token string">&quot;nodefs.available&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10%&quot;</span>,
    <span class="token string">&quot;nodefs.inodesFree&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;5%&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;evictionPressureTransitionPeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;5m0s&quot;</span>,
  <span class="token string">&quot;enableControllerAttachDetach&quot;</span><span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;makeIPTablesUtilChains&quot;</span><span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;iptablesMasqueradeBit&quot;</span><span class="token builtin class-name">:</span> <span class="token number">14</span>,
  <span class="token string">&quot;iptablesDropBit&quot;</span><span class="token builtin class-name">:</span> <span class="token number">15</span>,
  <span class="token string">&quot;featureGates&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;RotateKubeletClientCertificate&quot;</span><span class="token builtin class-name">:</span> true,
    <span class="token string">&quot;RotateKubeletServerCertificate&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;failSwapOn&quot;</span><span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;containerLogMaxSize&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10Mi&quot;</span>,
  <span class="token string">&quot;containerLogMaxFiles&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5</span>,
  <span class="token string">&quot;enforceNodeAllocatable&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;pods&quot;</span>
  <span class="token punctuation">]</span>,
  <span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;KubeletConfiguration&quot;</span>,
  <span class="token string">&quot;apiVersion&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;kubelet.config.k8s.io/v1beta1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div><p>\u6216\u8005\u53C2\u8003\u4EE3\u7801\u4E2D\u7684\u6CE8\u91CA\uFF1Ahttps://github.com/kubernetes/kubernetes/blob/master/pkg/kubelet/apis/kubeletconfig/v1beta1/types.go</p><h2 id="_12-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_12-\u53C2\u8003" aria-hidden="true">#</a> 12\uFF0C\u53C2\u8003</h2><p>kubelet \u8BA4\u8BC1\u548C\u6388\u6743\uFF1Ahttps://kubernetes.io/docs/reference/command-line-tools-reference/kubelet-authentication-authorization/</p>`,100);function t(p,r){return e}var c=s(a,[["render",t]]);export{c as default};
