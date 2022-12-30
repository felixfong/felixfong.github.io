import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<p>\u672C\u6587\u6863\u8BB2\u89E3\u4F7F\u7528 keepalived \u548C haproxy \u90E8\u7F72\u4E00\u4E2A 3 \u8282\u70B9\u9AD8\u53EF\u7528 master \u96C6\u7FA4\u7684\u6B65\u9AA4\uFF0C\u5BF9\u5E94\u7684 LB VIP \u4E3A\u73AF\u5883\u53D8\u91CF \${MASTER_VIP}\u3002</p><p>\u914D\u7F6E\u4E4B\u524D\u9700\u8981\u5148\u5B89\u88C5 kubelet,flannel \u7B49\u7EC4\u4EF6\uFF0C\u4E0D\u8FC7\u524D\u8FB9\u5DF2\u7ECF\u5B89\u88C5\uFF0C\u73B0\u5728\u76F4\u63A5\u8FDB\u5165\u914D\u7F6E\u3002</p><h2 id="_1-\u521B\u5EFA-kubernetes-\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-kubernetes-\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA kubernetes \u8BC1\u4E66\u548C\u79C1\u94A5</h2><p>\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span> <span class="token operator">&gt;</span> kubernetes-csr.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;CN&quot;: &quot;kubernetes&quot;,
  &quot;hosts&quot;: [
    &quot;127.0.0.1&quot;,
    &quot;192.168.106.3&quot;,
    &quot;192.168.106.4&quot;,
    &quot;192.168.106.5&quot;,
    &quot;<span class="token variable">\${MASTER_VIP}</span>&quot;,
    &quot;<span class="token variable">\${CLUSTER_KUBERNETES_SVC_IP}</span>&quot;,
    &quot;kubernetes&quot;,
    &quot;kubernetes.default&quot;,
    &quot;kubernetes.default.svc&quot;,
    &quot;kubernetes.default.svc.cluster&quot;,
    &quot;kubernetes.default.svc.cluster.local&quot;
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul><li>hosts \u5B57\u6BB5\u6307\u5B9A\u6388\u6743\u4F7F\u7528\u8BE5\u8BC1\u4E66\u7684 IP \u6216\u57DF\u540D\u5217\u8868\uFF0C\u8FD9\u91CC\u5217\u51FA\u4E86 VIP \u3001apiserver \u8282\u70B9 IP\u3001kubernetes \u670D\u52A1 IP \u548C\u57DF\u540D\uFF1B</li><li>\u57DF\u540D\u6700\u540E\u5B57\u7B26\u4E0D\u80FD\u662F .(\u5982\u4E0D\u80FD\u4E3A kubernetes.default.svc.cluster.local.)\uFF0C\u5426\u5219\u89E3\u6790\u65F6\u5931\u8D25\uFF0C\u63D0\u793A\uFF1A x509: cannot parse dnsName \u201Ckubernetes.default.svc.cluster.local.\u201D\uFF1B</li><li>\u5982\u679C\u4F7F\u7528\u975E cluster.local \u57DF\u540D\uFF0C\u5982 opsnull.com\uFF0C\u5219\u9700\u8981\u4FEE\u6539\u57DF\u540D\u5217\u8868\u4E2D\u7684\u6700\u540E\u4E24\u4E2A\u57DF\u540D\u4E3A\uFF1Akubernetes.default.svc.opsnull\u3001kubernetes.default.svc.opsnull.com</li><li>kubernetes \u670D\u52A1 IP \u662F apiserver \u81EA\u52A8\u521B\u5EFA\u7684\uFF0C\u4E00\u822C\u662F --service-cluster-ip-range \u53C2\u6570\u6307\u5B9A\u7684\u7F51\u6BB5\u7684\u7B2C\u4E00\u4E2A IP\uFF0C\u540E\u7EED\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u83B7\u53D6\uFF1A</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get svc kubernetes
NAME         CLUSTER-IP   EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>   AGE
kubernetes   <span class="token number">10.254</span>.0.1   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP   1d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u73B0\u5728\u8FD8\u4E0D\u80FD\u8FDB\u884C\u8FD9\u6837\u7684\u64CD\u4F5C\uFF0C\u7EE7\u7EED\u5F80\u4E0B\u914D\u7F6E\u3002</p><p>\u751F\u6210\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cfssl</span> gencert -ca<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  -ca-key<span class="token operator">=</span>/etc/kubernetes/cert/ca-key.pem <span class="token punctuation">\\</span>
  -config<span class="token operator">=</span>/etc/kubernetes/cert/ca-config.json <span class="token punctuation">\\</span>
  -profile<span class="token operator">=</span>kubernetes kubernetes-csr.json <span class="token operator">|</span> cfssljson -bare kubernetes
<span class="token variable">$ls</span> kubernetes*pem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5C06\u751F\u6210\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\u6587\u4EF6\u62F7\u8D1D\u5230 master \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;mkdir -p /etc/kubernetes/cert/ &amp;&amp; sudo chown -R k8s /etc/kubernetes/cert/&quot;
    scp kubernetes*.pem k8s@\${node_ip}:/etc/kubernetes/cert/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>k8s \u8D26\u6237\u53EF\u4EE5\u8BFB\u5199 /etc/kubernetes/cert/ \u76EE\u5F55\uFF1B</li></ul><h2 id="_2-\u521B\u5EFA\u52A0\u5BC6\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u52A0\u5BC6\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u52A0\u5BC6\u914D\u7F6E\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span> <span class="token operator">&gt;</span> encryption-config.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
kind: EncryptionConfig
apiVersion: v1
resources:
  - resources:
      - secrets
    providers:
      - aescbc:
          keys:
            - name: key1
              secret: <span class="token variable">\${ENCRYPTION_KEY}</span>
      - identity: {}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5C06\u52A0\u5BC6\u914D\u7F6E\u6587\u4EF6\u62F7\u8D1D\u5230 master \u8282\u70B9\u7684 /etc/kubernetes \u76EE\u5F55\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp encryption-config.yaml root@\${node_ip}:/etc/kubernetes/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u521B\u5EFA-kube-apiserver-systemd-unit-\u6A21\u677F\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA-kube-apiserver-systemd-unit-\u6A21\u677F\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA kube-apiserver systemd unit \u6A21\u677F\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span> <span class="token operator">&gt;</span> kube-apiserver.service.template <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=Kubernetes API Server
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
After=network.target
[Service]
ExecStart=/opt/k8s/bin/kube-apiserver <span class="token entity" title="\\\\">\\\\</span>
  --enable-admission-plugins=Initializers,NamespaceLifecycle,NodeRestriction,LimitRanger,ServiceAccount,DefaultStorageClass,ResourceQuota <span class="token entity" title="\\\\">\\\\</span>
  --anonymous-auth=false <span class="token entity" title="\\\\">\\\\</span>
  --experimental-encryption-provider-config=/etc/kubernetes/encryption-config.yaml <span class="token entity" title="\\\\">\\\\</span>
  --advertise-address=##NODE_IP## <span class="token entity" title="\\\\">\\\\</span>
  --bind-address=##NODE_IP## <span class="token entity" title="\\\\">\\\\</span>
  --insecure-port=0 <span class="token entity" title="\\\\">\\\\</span>
  --authorization-mode=Node,RBAC <span class="token entity" title="\\\\">\\\\</span>
  --runtime-config=api/all <span class="token entity" title="\\\\">\\\\</span>
  --enable-bootstrap-token-auth <span class="token entity" title="\\\\">\\\\</span>
  --service-cluster-ip-range=<span class="token variable">\${SERVICE_CIDR}</span> <span class="token entity" title="\\\\">\\\\</span>
  --service-node-port-range=<span class="token variable">\${NODE_PORT_RANGE}</span> <span class="token entity" title="\\\\">\\\\</span>
  --tls-cert-file=/etc/kubernetes/cert/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --tls-private-key-file=/etc/kubernetes/cert/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --client-ca-file=/etc/kubernetes/cert/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --kubelet-client-certificate=/etc/kubernetes/cert/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --kubelet-client-key=/etc/kubernetes/cert/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --service-account-key-file=/etc/kubernetes/cert/ca-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --etcd-cafile=/etc/kubernetes/cert/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --etcd-certfile=/etc/kubernetes/cert/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --etcd-keyfile=/etc/kubernetes/cert/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --etcd-servers=<span class="token variable">\${ETCD_ENDPOINTS}</span> <span class="token entity" title="\\\\">\\\\</span>
  --enable-swagger-ui=true <span class="token entity" title="\\\\">\\\\</span>
  --allow-privileged=true <span class="token entity" title="\\\\">\\\\</span>
  --apiserver-count=3 <span class="token entity" title="\\\\">\\\\</span>
  --audit-log-maxage=30 <span class="token entity" title="\\\\">\\\\</span>
  --audit-log-maxbackup=3 <span class="token entity" title="\\\\">\\\\</span>
  --audit-log-maxsize=100 <span class="token entity" title="\\\\">\\\\</span>
  --audit-log-path=/var/log/kube-apiserver-audit.log <span class="token entity" title="\\\\">\\\\</span>
  --event-ttl=1h <span class="token entity" title="\\\\">\\\\</span>
  --alsologtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=false <span class="token entity" title="\\\\">\\\\</span>
  --log-dir=/var/log/kubernetes <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on-failure
RestartSec=5
Type=notify
User=k8s
LimitNOFILE=65536
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><ul><li>--experimental-encryption-provider-config\uFF1A\u542F\u7528\u52A0\u5BC6\u7279\u6027\uFF1B</li><li>--authorization-mode=Node,RBAC\uFF1A \u5F00\u542F Node \u548C RBAC \u6388\u6743\u6A21\u5F0F\uFF0C\u62D2\u7EDD\u672A\u6388\u6743\u7684\u8BF7\u6C42\uFF1B</li><li>--enable-admission-plugins\uFF1A\u542F\u7528 ServiceAccount \u548C NodeRestriction\uFF1B</li><li>--service-account-key-file\uFF1A\u7B7E\u540D ServiceAccount Token \u7684\u516C\u94A5\u6587\u4EF6\uFF0Ckube-controller-manager \u7684 --service-account-private-key-file \u6307\u5B9A\u79C1\u94A5\u6587\u4EF6\uFF0C\u4E24\u8005\u914D\u5BF9\u4F7F\u7528\uFF1B</li><li>--tls-*-file\uFF1A\u6307\u5B9A apiserver \u4F7F\u7528\u7684\u8BC1\u4E66\u3001\u79C1\u94A5\u548C CA \u6587\u4EF6\u3002--client-ca-file \u7528\u4E8E\u9A8C\u8BC1 client (kue-controller-manager\u3001kube-scheduler\u3001kubelet\u3001kube-proxy \u7B49) \u8BF7\u6C42\u6240\u5E26\u7684\u8BC1\u4E66\uFF1B</li><li>--kubelet-client-certificate\u3001--kubelet-client-key\uFF1A\u5982\u679C\u6307\u5B9A\uFF0C\u5219\u4F7F\u7528 https \u8BBF\u95EE kubelet APIs\uFF1B\u9700\u8981\u4E3A\u8BC1\u4E66\u5BF9\u5E94\u7684\u7528\u6237 (\u4E0A\u9762 kubernetes*.pem \u8BC1\u4E66\u7684\u7528\u6237\u4E3A kubernetes) \u7528\u6237\u5B9A\u4E49 RBAC \u89C4\u5219\uFF0C\u5426\u5219\u8BBF\u95EE kubelet API \u65F6\u63D0\u793A\u672A\u6388\u6743\uFF1B</li><li>--bind-address\uFF1A \u4E0D\u80FD\u4E3A 127.0.0.1\uFF0C\u5426\u5219\u5916\u754C\u4E0D\u80FD\u8BBF\u95EE\u5B83\u7684\u5B89\u5168\u7AEF\u53E3 6443\uFF1B</li><li>--insecure-port=0\uFF1A\u5173\u95ED\u76D1\u542C\u975E\u5B89\u5168\u7AEF\u53E3 (8080)\uFF1B</li><li>--service-cluster-ip-range\uFF1A \u6307\u5B9A Service Cluster IP \u5730\u5740\u6BB5\uFF1B</li><li>--service-node-port-range\uFF1A \u6307\u5B9A NodePort \u7684\u7AEF\u53E3\u8303\u56F4\uFF1B</li><li>--runtime-config=api/all=true\uFF1A \u542F\u7528\u6240\u6709\u7248\u672C\u7684 APIs\uFF0C\u5982 autoscaling/v2alpha1\uFF1B</li><li>--enable-bootstrap-token-auth\uFF1A\u542F\u7528 kubelet bootstrap \u7684 token \u8BA4\u8BC1\uFF1B</li><li>--apiserver-count=3\uFF1A\u6307\u5B9A\u96C6\u7FA4\u8FD0\u884C\u6A21\u5F0F\uFF0C\u591A\u53F0 kube-apiserver \u4F1A\u901A\u8FC7 leader \u9009\u4E3E\u4EA7\u751F\u4E00\u4E2A\u5DE5\u4F5C\u8282\u70B9\uFF0C\u5176\u5B83\u8282\u70B9\u5904\u4E8E\u963B\u585E\u72B6\u6001\uFF1B</li><li>User=k8s\uFF1A\u4F7F\u7528 k8s \u8D26\u6237\u8FD0\u884C\uFF1B</li></ul><h2 id="_4-\u4E3A\u5404\u8282\u70B9\u521B\u5EFA\u548C\u5206\u53D1-kube-apiserver-systemd-unit-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u4E3A\u5404\u8282\u70B9\u521B\u5EFA\u548C\u5206\u53D1-kube-apiserver-systemd-unit-\u6587\u4EF6" aria-hidden="true">#</a> 4\uFF0C\u4E3A\u5404\u8282\u70B9\u521B\u5EFA\u548C\u5206\u53D1 kube-apiserver systemd unit \u6587\u4EF6</h2><p>\u66FF\u6362\u6A21\u677F\u6587\u4EF6\u4E2D\u7684\u53D8\u91CF\uFF0C\u4E3A\u5404\u8282\u70B9\u521B\u5EFA systemd unit \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for (( i=0; i &lt; 3; i++ ))
do
    sed -e &quot;s/##NODE_NAME##/\${NODE_NAMES[i]}/&quot; -e &quot;s/##NODE_IP##/\${NODE_IPS[i]}/&quot; kube-apiserver.service.template &gt; kube-apiserver-\${NODE_IPS[i]}.service 
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>NODE_NAMES \u548C NODE_IPS \u4E3A\u76F8\u540C\u957F\u5EA6\u7684 bash \u6570\u7EC4\uFF0C\u5206\u522B\u4E3A\u8282\u70B9\u540D\u79F0\u548C\u5BF9\u5E94\u7684 IP\uFF1B</li></ul><p>\u5206\u53D1\u751F\u6210\u7684 systemd unit \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;mkdir -p /var/log/kubernetes &amp;&amp; chown -R k8s /var/log/kubernetes&quot;
    scp kube-apiserver-\${node_ip}.service root@\${node_ip}:/etc/systemd/system/kube-apiserver.service
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u5FC5\u987B\u5148\u521B\u5EFA\u65E5\u5FD7\u76EE\u5F55\uFF1B</li><li>\u6587\u4EF6\u91CD\u547D\u540D\u4E3A kube-apiserver.service;</li></ul><h2 id="_5-\u542F\u52A8-kube-apiserver-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_5-\u542F\u52A8-kube-apiserver-\u670D\u52A1" aria-hidden="true">#</a> 5\uFF0C\u542F\u52A8 kube-apiserver \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;systemctl daemon-reload &amp;&amp; systemctl enable kube-apiserver &amp;&amp; systemctl start kube-apiserver&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u68C0\u67E5 kube-apiserver \u8FD0\u884C\u72B6\u6001:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;systemctl status kube-apiserver |grep &#39;Active:&#39;&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8F93\u51FA\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:13:44 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:13:51 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:13:57 CST<span class="token punctuation">;</span> 6h ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5219\u6B63\u5E38\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u68C0\u67E5\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>journalctl -xu kube-apiserver
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_6-\u6253\u5370-kube-apiserver-\u5199\u5165-etcd-\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_6-\u6253\u5370-kube-apiserver-\u5199\u5165-etcd-\u7684\u6570\u636E" aria-hidden="true">#</a> 6\uFF0C\u6253\u5370 kube-apiserver \u5199\u5165 etcd \u7684\u6570\u636E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl <span class="token punctuation">\\</span>
    --endpoints<span class="token operator">=</span><span class="token variable">\${ETCD_ENDPOINTS}</span> <span class="token punctuation">\\</span>
    --cacert<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
    --cert<span class="token operator">=</span>/etc/etcd/cert/etcd.pem <span class="token punctuation">\\</span>
    --key<span class="token operator">=</span>/etc/etcd/cert/etcd-key.pem <span class="token punctuation">\\</span>
    get /registry/ --prefix --keys-only
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_7-\u68C0\u67E5\u96C6\u7FA4\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_7-\u68C0\u67E5\u96C6\u7FA4\u4FE1\u606F" aria-hidden="true">#</a> 7\uFF0C\u68C0\u67E5\u96C6\u7FA4\u4FE1\u606F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> cluster-info
Kubernetes master is running at https://192.168.106.110:8443
To further debug and diagnose cluster problems, use <span class="token string">&#39;kubectl cluster-info dump&#39;</span><span class="token builtin class-name">.</span>
<span class="token variable">$kubectl</span> get all --all-namespaces
NAMESPACE     NAME                           TYPE        CLUSTER-IP       EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>          AGE
default       service/kubernetes             ClusterIP   <span class="token number">10.254</span>.0.1       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP          6h
<span class="token variable">$kubectl</span> get componentstatuses
NAME                 STATUS      MESSAGE                                                                                                                                  ERROR
controller-manager   Unhealthy   Get http://127.0.0.1:10252/healthz: net/http: HTTP/1.x transport connection broken: malformed HTTP response <span class="token string">&quot;<span class="token entity" title="\\x15">\\x15</span><span class="token entity" title="\\x03">\\x03</span><span class="token entity" title="\\x01">\\x01</span><span class="token entity" title="\\x00">\\x00</span><span class="token entity" title="\\x02">\\x02</span><span class="token entity" title="\\x02">\\x02</span>&quot;</span>
etcd-1               Healthy     <span class="token punctuation">{</span><span class="token string">&quot;health&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span>
etcd-0               Healthy     <span class="token punctuation">{</span><span class="token string">&quot;health&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span>
etcd-2               Healthy     <span class="token punctuation">{</span><span class="token string">&quot;health&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span>
scheduler            Healthy     ok
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6CE8\u610F\uFF1A</p><ol><li>\u5982\u679C\u6267\u884C kubectl \u547D\u4EE4\u5F0F\u65F6\u8F93\u51FA\u5982\u4E0B\u9519\u8BEF\u4FE1\u606F\uFF0C\u5219\u8BF4\u660E\u4F7F\u7528\u7684 ~/.kube/config \u6587\u4EF6\u4E0D\u5BF9\uFF0C\u8BF7\u5207\u6362\u5230\u6B63\u786E\u7684\u8D26\u6237\u540E\u518D\u6267\u884C\u8BE5\u547D\u4EE4\uFF1A The connection to the server localhost:8080 was refused \u2013 did you specify the right host or port?</li><li>\u6267\u884C kubectl get componentstatuses \u547D\u4EE4\u65F6\uFF0Capiserver \u9ED8\u8BA4\u5411 127.0.0.1 \u53D1\u9001\u8BF7\u6C42\u3002\u5F53 controller-manager\u3001scheduler \u4EE5\u96C6\u7FA4\u6A21\u5F0F\u8FD0\u884C\u65F6\uFF0C\u6709\u53EF\u80FD\u548C kube-apiserver \u4E0D\u5728\u4E00\u53F0\u673A\u5668\u4E0A\uFF0C\u8FD9\u65F6 controller-manager \u6216 scheduler \u7684\u72B6\u6001\u4E3A Unhealthy\uFF0C\u4F46\u5B9E\u9645\u4E0A\u5B83\u4EEC\u5DE5\u4F5C\u6B63\u5E38\u3002</li></ol><h2 id="_8-\u68C0\u67E5-kube-apiserver-\u76D1\u542C\u7684\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_8-\u68C0\u67E5-kube-apiserver-\u76D1\u542C\u7684\u7AEF\u53E3" aria-hidden="true">#</a> 8\uFF0C\u68C0\u67E5 kube-apiserver \u76D1\u542C\u7684\u7AEF\u53E3</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$sudo</span> <span class="token function">netstat</span> -lnpt<span class="token operator">|</span><span class="token function">grep</span> kube
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">192.168</span>.106.3:6443      <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">14318</span>/kube-apiserve
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>6443: \u63A5\u6536 https \u8BF7\u6C42\u7684\u5B89\u5168\u7AEF\u53E3\uFF0C\u5BF9\u6240\u6709\u8BF7\u6C42\u505A\u8BA4\u8BC1\u548C\u6388\u6743\uFF1B</li><li>\u7531\u4E8E\u5173\u95ED\u4E86\u975E\u5B89\u5168\u7AEF\u53E3\uFF0C\u6545\u6CA1\u6709\u76D1\u542C 8080\uFF1B</li></ul><h2 id="_9-\u6388\u4E88-kubernetes-\u8BC1\u4E66\u8BBF\u95EE-kubelet-api-\u7684\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_9-\u6388\u4E88-kubernetes-\u8BC1\u4E66\u8BBF\u95EE-kubelet-api-\u7684\u6743\u9650" aria-hidden="true">#</a> 9\uFF0C\u6388\u4E88 kubernetes \u8BC1\u4E66\u8BBF\u95EE kubelet API \u7684\u6743\u9650</h2><p>\u5728\u6267\u884C kubectl exec\u3001run\u3001logs \u7B49\u547D\u4EE4\u65F6\uFF0Capiserver \u4F1A\u8F6C\u53D1\u5230 kubelet\u3002\u8FD9\u91CC\u5B9A\u4E49 RBAC \u89C4\u5219\uFF0C\u6388\u6743 apiserver \u8C03\u7528 kubelet API\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl create clusterrolebinding kube-apiserver:kubelet-apis --clusterrole<span class="token operator">=</span>system:kubelet-api-admin --user kubernetes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_10-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_10-\u53C2\u8003" aria-hidden="true">#</a> 10\uFF0C\u53C2\u8003</h2><p>1\uFF0C\u5173\u4E8E\u8BC1\u4E66\u57DF\u540D\u6700\u540E\u5B57\u7B26\u4E0D\u80FD\u662F . \u7684\u95EE\u9898\uFF0C\u5B9E\u9645\u548C Go \u7684\u7248\u672C\u6709\u5173\uFF0C1.9 \u4E0D\u652F\u6301\u8FD9\u79CD\u7C7B\u578B\u7684\u8BC1\u4E66\uFF1Ahttps://github.com/kubernetes/ingress-nginx/issues/2188</p>`,49);function t(r,p){return a}var c=s(e,[["render",t]]);export{c as default};
