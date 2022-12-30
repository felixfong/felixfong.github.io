import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u4E0A\u9762\u7684\u90A3\u4E00\u5806\u90FD\u662F\u51C6\u5907\u5DE5\u4F5C\uFF0C\u4E0B\u9762\u5F00\u59CB\u6B63\u5F0F\u90E8\u7F72 kubernetes \u4E86\u3002</p><p>\u672C\u8282\u5728 master \u8282\u70B9\u8FDB\u884C\u90E8\u7F72\u3002</p><h2 id="_1-\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># wget https://dl.k8s.io/v1.8.6/kubernetes-server-linux-amd64.tar.gz</span>
 
<span class="token comment"># tar -xzvf kubernetes-server-linux-amd64.tar.gz</span>
 
<span class="token comment"># cp -r kubernetes/server/bin/{kube-apiserver,kube-controller-manager,kube-scheduler,kubectl,kube-proxy,kubelet} /usr/local/bin/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_2-\u914D\u7F6E\u548C\u542F\u52A8-kube-apiserver" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E\u548C\u542F\u52A8-kube-apiserver" aria-hidden="true">#</a> 2\uFF0C\u914D\u7F6E\u548C\u542F\u52A8 kube-apiserver</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-apiserver.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Kubernetes API Server
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
After=network.target
After=etcd.service
 
[Service]
ExecStart=/usr/local/bin/kube-apiserver <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --admission-control=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,ResourceQuota,NodeRestriction <span class="token entity" title="\\\\">\\\\</span>
  --advertise-address=192.168.106.3 <span class="token entity" title="\\\\">\\\\</span>
  --bind-address=192.168.106.3 <span class="token entity" title="\\\\">\\\\</span>
  --insecure-bind-address=127.0.0.1 <span class="token entity" title="\\\\">\\\\</span>
  --authorization-mode=Node,RBAC <span class="token entity" title="\\\\">\\\\</span>
  --runtime-config=rbac.authorization.k8s.io/v1alpha1 <span class="token entity" title="\\\\">\\\\</span>
  --kubelet-https=true <span class="token entity" title="\\\\">\\\\</span>
  --enable-bootstrap-token-auth <span class="token entity" title="\\\\">\\\\</span>
  --token-auth-file=/etc/kubernetes/token.csv <span class="token entity" title="\\\\">\\\\</span>
  --service-cluster-ip-range=10.254.0.0/16 <span class="token entity" title="\\\\">\\\\</span>
  --service-node-port-range=8400-10000 <span class="token entity" title="\\\\">\\\\</span>
  --tls-cert-file=/etc/kubernetes/ssl/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --tls-private-key-file=/etc/kubernetes/ssl/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --client-ca-file=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --service-account-key-file=/etc/kubernetes/ssl/ca-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --etcd-cafile=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --etcd-certfile=/etc/kubernetes/ssl/kubernetes.pem <span class="token entity" title="\\\\">\\\\</span>
  --etcd-keyfile=/etc/kubernetes/ssl/kubernetes-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --etcd-servers=https://192.168.106.3:2379,https://192.168.106.4:2379,https://192.168.106.5:2379 <span class="token entity" title="\\\\">\\\\</span>
  --enable-swagger-ui=true <span class="token entity" title="\\\\">\\\\</span>
  --allow-privileged=true <span class="token entity" title="\\\\">\\\\</span>
  --apiserver-count=3 <span class="token entity" title="\\\\">\\\\</span>
  --audit-log-maxage=30 <span class="token entity" title="\\\\">\\\\</span>
  --audit-log-maxbackup=3 <span class="token entity" title="\\\\">\\\\</span>
  --audit-log-maxsize=100 <span class="token entity" title="\\\\">\\\\</span>
  --audit-log-path=/var/lib/audit.log <span class="token entity" title="\\\\">\\\\</span>
  --event-ttl=1h <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on-failure
RestartSec=5
Type=notify
LimitNOFILE=65536
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u6CE8\u610F\uFF1A\u66F4\u6362\u6210\u81EA\u5DF1\u7684 IP\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>--authorization-mode<span class="token operator">=</span>RBAC \uFF1A\u6307\u5B9A\u5728\u5B89\u5168\u7AEF\u53E3\u4F7F\u7528 RBAC \u6388\u6743\u6A21\u5F0F\uFF0C\u62D2\u7EDD\u672A\u901A\u8FC7\u6388\u6743\u7684\u8BF7\u6C42\uFF1B
kube-scheduler\u3001kube-controller-manager \uFF1A\u4E00\u822C\u548C kube-apiserver \u90E8\u7F72\u5728\u540C\u4E00\u53F0\u673A\u5668\u4E0A\uFF0C\u5B83\u4EEC\u4F7F\u7528\u975E\u5B89\u5168\u7AEF\u53E3\u548C kube-apiserver\u901A\u4FE1<span class="token punctuation">;</span> 
kubelet\u3001kube-proxy\u3001kubectl \uFF1A\u90E8\u7F72\u5728\u5176\u5B83 Node \u8282\u70B9\u4E0A\uFF0C\u5982\u679C\u901A\u8FC7\u5B89\u5168\u7AEF\u53E3\u8BBF\u95EE kube-apiserver\uFF0C\u5219\u5FC5\u987B\u5148\u901A\u8FC7 TLS \u8BC1\u4E66\u8BA4\u8BC1\uFF0C\u518D\u901A\u8FC7 RBAC \u6388\u6743\uFF1B 
kube-proxy\u3001kubectl \uFF1A\u901A\u8FC7\u5728\u4F7F\u7528\u7684\u8BC1\u4E66\u91CC\u6307\u5B9A\u76F8\u5173\u7684 User\u3001Group \u6765\u8FBE\u5230\u901A\u8FC7 RBAC \u6388\u6743\u7684\u76EE\u7684\uFF1B 
\u5982\u679C\u4F7F\u7528\u4E86 kubelet TLS Boostrap \u673A\u5236\uFF0C\u5219\u4E0D\u80FD\u518D\u6307\u5B9A \u2013kubelet-certificate-authority\u3001\u2013kubelet-client-certificate \u548C \u2013kubelet-client-key \u9009\u9879\uFF0C\u5426\u5219\u540E\u7EED kube-apiserver \u6821\u9A8C kubelet \u8BC1\u4E66\u65F6\u51FA\u73B0 \u201Dx509: certificate signed by unknown authority\u201C \u9519\u8BEF\uFF1B 
--admission-control \uFF1A\u503C\u5FC5\u987B\u5305\u542B ServiceAccount\uFF0C\u5426\u5219\u90E8\u7F72\u96C6\u7FA4\u63D2\u4EF6\u65F6\u4F1A\u5931\u8D25\uFF1B
--bind-address \uFF1A\u4E0D\u80FD\u4E3A <span class="token number">127.0</span>.0.1\uFF1B 
--runtime-config\uFF1A\u914D\u7F6E\u4E3Arbac.authorization.k8s.io/v1beta1\uFF0C\u8868\u793A\u8FD0\u884C\u65F6\u7684apiVersion\uFF1B
--service-cluster-ip-range\uFF1A \u6307\u5B9A Service Cluster IP \u5730\u5740\u6BB5\uFF0C\u8BE5\u5730\u5740\u6BB5\u4E0D\u80FD\u8DEF\u7531\u53EF\u8FBE\uFF1B 
--service-node-port-range \uFF1A\u6307\u5B9A NodePort \u7684\u7AEF\u53E3\u8303\u56F4\uFF1B 
\u7F3A\u7701\u60C5\u51B5\u4E0B kubernetes \u5BF9\u8C61\u4FDD\u5B58\u5728 etcd /registry \u8DEF\u5F84\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7 \u2013etcd-prefix \u53C2\u6570\u8FDB\u884C\u8C03\u6574\uFF1B
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_3-\u542F\u52A8-kube-apiserver" tabindex="-1"><a class="header-anchor" href="#_3-\u542F\u52A8-kube-apiserver" aria-hidden="true">#</a> 3\uFF0C\u542F\u52A8 kube-apiserver</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cp kube-apiserver.service /etc/systemd/system/</span>
 
<span class="token comment"># systemctl daemon-reload</span>
 
<span class="token comment"># systemctl enable kube-apiserver</span>
 
<span class="token comment"># systemctl start kube-apiserver</span>
 
<span class="token comment"># systemctl status kube-apiserver</span>
 
 
kube-apiserver.service - Kubernetes API Server
   Loaded: loaded <span class="token punctuation">(</span>/etc/systemd/system/kube-apiserver.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since \u4E00 <span class="token number">2018</span>-03-19 <span class="token number">16</span>:26:03 CST<span class="token punctuation">;</span> 19s ago
     Docs: https://github.com/GoogleCloudPlatform/kubernetes
 Main PID: <span class="token number">5948</span> <span class="token punctuation">(</span>kube-apiserver<span class="token punctuation">)</span>
   CGroup: /system.slice/kube-apiserver.service
           \u2514\u25005948 /usr/local/bin/kube-apiserver --logtostderr<span class="token operator">=</span>true --admission-control<span class="token operator">=</span>NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,ResourceQuota,NodeRestriction --advertise-address<span class="token operator">=</span><span class="token number">192</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
 
<span class="token number">3</span>\u6708 <span class="token number">19</span> <span class="token number">16</span>:26:05 master1 kube-apiserver<span class="token punctuation">[</span><span class="token number">5948</span><span class="token punctuation">]</span>: I0319 <span class="token number">16</span>:26:05.901059    <span class="token number">5948</span> wrap.go:42<span class="token punctuation">]</span> POST /api/v1/namespaces: <span class="token punctuation">(</span><span class="token number">11</span>.166039ms<span class="token punctuation">)</span> <span class="token number">409</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>kube-apiserver/v1.8.6 <span class="token punctuation">(</span>linux/amd64<span class="token punctuation">)</span> kubernetes/6260bb0<span class="token punctuation">]</span> <span class="token number">192</span><span class="token punctuation">..</span>.161.161:60460<span class="token punctuation">]</span>
<span class="token number">3</span>\u6708 <span class="token number">19</span> <span class="token number">16</span>:26:05 master1 kube-apiserver<span class="token punctuation">[</span><span class="token number">5948</span><span class="token punctuation">]</span>: I0319 <span class="token number">16</span>:26:05.914750    <span class="token number">5948</span> wrap.go:42<span class="token punctuation">]</span> POST /apis/rbac.authorization.k8s.io/v1beta1/namespaces/kube-system/rolebindings: <span class="token punctuation">(</span><span class="token number">5</span>.722228ms<span class="token punctuation">)</span> <span class="token number">201</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>kub<span class="token punctuation">..</span>.161.161:60460<span class="token punctuation">]</span>
<span class="token number">3</span>\u6708 <span class="token number">19</span> <span class="token number">16</span>:26:05 master1 kube-apiserver<span class="token punctuation">[</span><span class="token number">5948</span><span class="token punctuation">]</span>: I0319 <span class="token number">16</span>:26:05.915229    <span class="token number">5948</span> storage_rbac.go:287<span class="token punctuation">]</span> created rolebinding.rbac.authorization.k8s.io/system:controller:token-cleaner <span class="token keyword">in</span> kube-system
<span class="token number">3</span>\u6708 <span class="token number">19</span> <span class="token number">16</span>:26:05 master1 kube-apiserver<span class="token punctuation">[</span><span class="token number">5948</span><span class="token punctuation">]</span>: I0319 <span class="token number">16</span>:26:05.929618    <span class="token number">5948</span> wrap.go:42<span class="token punctuation">]</span> GET /apis/rbac.authorization.k8s.io/v1beta1/namespaces/kube-public/rolebindings/system:controller:bootst<span class="token punctuation">..</span>.161.161:60460<span class="token punctuation">]</span>
<span class="token number">3</span>\u6708 <span class="token number">19</span> <span class="token number">16</span>:26:05 master1 kube-apiserver<span class="token punctuation">[</span><span class="token number">5948</span><span class="token punctuation">]</span>: I0319 <span class="token number">16</span>:26:05.935152    <span class="token number">5948</span> wrap.go:42<span class="token punctuation">]</span> POST /api/v1/namespaces: <span class="token punctuation">(</span><span class="token number">4</span>.882855ms<span class="token punctuation">)</span> <span class="token number">409</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>kube-apiserver/v1.8.6 <span class="token punctuation">(</span>linux/amd64<span class="token punctuation">)</span> kubernetes/6260bb0<span class="token punctuation">]</span> <span class="token number">192</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token number">161.161</span>:60460<span class="token punctuation">]</span>
<span class="token number">3</span>\u6708 <span class="token number">19</span> <span class="token number">16</span>:26:05 master1 kube-apiserver<span class="token punctuation">[</span><span class="token number">5948</span><span class="token punctuation">]</span>: I0319 <span class="token number">16</span>:26:05.965294    <span class="token number">5948</span> wrap.go:42<span class="token punctuation">]</span> POST /apis/rbac.authorization.k8s.io/v1beta1/namespaces/kube-public/rolebindings: <span class="token punctuation">(</span><span class="token number">17</span>.302393ms<span class="token punctuation">)</span> <span class="token number">201</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>ku<span class="token punctuation">..</span>.161.161:60460<span class="token punctuation">]</span>
<span class="token number">3</span>\u6708 <span class="token number">19</span> <span class="token number">16</span>:26:05 master1 kube-apiserver<span class="token punctuation">[</span><span class="token number">5948</span><span class="token punctuation">]</span>: I0319 <span class="token number">16</span>:26:05.965805    <span class="token number">5948</span> storage_rbac.go:287<span class="token punctuation">]</span> created rolebinding.rbac.authorization.k8s.io/system:controller:bootstrap-signer <span class="token keyword">in</span> kube-public
<span class="token number">3</span>\u6708 <span class="token number">19</span> <span class="token number">16</span>:26:13 master1 kube-apiserver<span class="token punctuation">[</span><span class="token number">5948</span><span class="token punctuation">]</span>: I0319 <span class="token number">16</span>:26:13.776733    <span class="token number">5948</span> wrap.go:42<span class="token punctuation">]</span> GET /api/v1/namespaces/default: <span class="token punctuation">(</span><span class="token number">2</span>.511793ms<span class="token punctuation">)</span> <span class="token number">200</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>kube-apiserver/v1.8.6 <span class="token punctuation">(</span>linux/amd64<span class="token punctuation">)</span> kubernetes/6260bb<span class="token punctuation">..</span>.161.161:60460<span class="token punctuation">]</span>
<span class="token number">3</span>\u6708 <span class="token number">19</span> <span class="token number">16</span>:26:13 master1 kube-apiserver<span class="token punctuation">[</span><span class="token number">5948</span><span class="token punctuation">]</span>: I0319 <span class="token number">16</span>:26:13.780367    <span class="token number">5948</span> wrap.go:42<span class="token punctuation">]</span> GET /api/v1/namespaces/default/services/kubernetes: <span class="token punctuation">(</span><span class="token number">2</span>.593409ms<span class="token punctuation">)</span> <span class="token number">200</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>kube-apiserver/v1.8.6 <span class="token punctuation">(</span>linux/amd6<span class="token punctuation">..</span>.161.161:60460<span class="token punctuation">]</span>
<span class="token number">3</span>\u6708 <span class="token number">19</span> <span class="token number">16</span>:26:13 master1 kube-apiserver<span class="token punctuation">[</span><span class="token number">5948</span><span class="token punctuation">]</span>: I0319 <span class="token number">16</span>:26:13.784057    <span class="token number">5948</span> wrap.go:42<span class="token punctuation">]</span> GET /api/v1/namespaces/default/endpoints/kubernetes: <span class="token punctuation">(</span><span class="token number">2</span>.67392ms<span class="token punctuation">)</span> <span class="token number">200</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>kube-apiserver/v1.8.6 <span class="token punctuation">(</span>linux/amd6<span class="token punctuation">..</span>.161.161:60460<span class="token punctuation">]</span>
Hint: Some lines were ellipsized, use -l to show <span class="token keyword">in</span> full.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="_4-\u914D\u7F6E\u548C\u542F\u52A8-kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6E\u548C\u542F\u52A8-kube-controller-manager" aria-hidden="true">#</a> 4\uFF0C\u914D\u7F6E\u548C\u542F\u52A8 kube-controller-manager</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-controller-manager.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
 
[Service]
ExecStart=/usr/local/bin/kube-controller-manager <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=true  <span class="token entity" title="\\\\">\\\\</span>
  --address=127.0.0.1 <span class="token entity" title="\\\\">\\\\</span>
  --master=http://127.0.0.1:8080 <span class="token entity" title="\\\\">\\\\</span>
  --allocate-node-cidrs=true <span class="token entity" title="\\\\">\\\\</span>
  --service-cluster-ip-range=10.254.0.0/16 <span class="token entity" title="\\\\">\\\\</span>
  --cluster-cidr=172.30.0.0/16 <span class="token entity" title="\\\\">\\\\</span>
  --cluster-name=kubernetes <span class="token entity" title="\\\\">\\\\</span>
  --cluster-signing-cert-file=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --cluster-signing-key-file=/etc/kubernetes/ssl/ca-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --service-account-private-key-file=/etc/kubernetes/ssl/ca-key.pem <span class="token entity" title="\\\\">\\\\</span>
  --root-ca-file=/etc/kubernetes/ssl/ca.pem <span class="token entity" title="\\\\">\\\\</span>
  --leader-elect=true <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on-failure
LimitNOFILE=65536
RestartSec=5
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>--address \uFF1A\u503C\u5FC5\u987B\u4E3A <span class="token number">127.0</span>.0.1\uFF0C\u56E0\u4E3A\u5F53\u524D kube-apiserver \u671F\u671B scheduler \u548C controller-manager \u5728\u540C\u4E00\u53F0\u673A\u5668\uFF1B
--master<span class="token operator">=</span>http://<span class="token punctuation">{</span>MASTER_IP<span class="token punctuation">}</span>:8080\uFF1A\u4F7F\u7528\u975E\u5B89\u5168 <span class="token number">8080</span> \u7AEF\u53E3\u4E0E kube-apiserver \u901A\u4FE1\uFF1B 
--cluster-cidr\uFF1A \u6307\u5B9A Cluster \u4E2D Pod \u7684 CIDR \u8303\u56F4\uFF0C\u8BE5\u7F51\u6BB5\u5728\u5404 Node \u95F4\u5FC5\u987B\u8DEF\u7531\u53EF\u8FBE<span class="token punctuation">(</span>flanneld\u4FDD\u8BC1<span class="token punctuation">)</span>\uFF1B 
--service-cluster-ip-range\uFF1A \u53C2\u6570\u6307\u5B9A Cluster \u4E2D Service \u7684CIDR\u8303\u56F4\uFF0C\u8BE5\u7F51\u7EDC\u5728\u5404 Node \u95F4\u5FC5\u987B\u8DEF\u7531\u4E0D\u53EF\u8FBE\uFF0C\u5FC5\u987B\u548C kube-apiserver \u4E2D\u7684\u53C2\u6570\u4E00\u81F4\uFF1B 
--cluster-signing-*\uFF1A \u6307\u5B9A\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\u6587\u4EF6\u7528\u6765\u7B7E\u540D\u4E3A TLS BootStrap \u521B\u5EFA\u7684\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1B 
--root-ca-file \uFF1A\u7528\u6765\u5BF9 kube-apiserver \u8BC1\u4E66\u8FDB\u884C\u6821\u9A8C\uFF0C\u6307\u5B9A\u8BE5\u53C2\u6570\u540E\uFF0C\u624D\u4F1A\u5728Pod \u5BB9\u5668\u7684 ServiceAccount \u4E2D\u653E\u7F6E\u8BE5 CA \u8BC1\u4E66\u6587\u4EF6\uFF1B 
--leader-elect<span class="token operator">=</span>true\uFF1A \u90E8\u7F72\u591A\u53F0\u673A\u5668\u7EC4\u6210\u7684 master \u96C6\u7FA4\u65F6\u9009\u4E3E\u4EA7\u751F\u4E00\u5904\u4E8E\u5DE5\u4F5C\u72B6\u6001\u7684 kube-controller-manager \u8FDB\u7A0B\uFF1B
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_5-\u542F\u52A8-kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#_5-\u542F\u52A8-kube-controller-manager" aria-hidden="true">#</a> 5\uFF0C\u542F\u52A8 kube-controller-manager</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cp kube-controller-manager.service /etc/systemd/system/</span>
 
<span class="token comment"># systemctl daemon-reload</span>
 
<span class="token comment"># systemctl enable kube-controller-manager</span>
 
<span class="token comment"># systemctl start kube-controller-manager</span>
 
<span class="token comment"># systemctl status kube-controller-manager</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_6-\u914D\u7F6E\u548C\u542F\u52A8-kube-scheduler" tabindex="-1"><a class="header-anchor" href="#_6-\u914D\u7F6E\u548C\u542F\u52A8-kube-scheduler" aria-hidden="true">#</a> 6\uFF0C\u914D\u7F6E\u548C\u542F\u52A8 kube-scheduler</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-scheduler.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Kubernetes Scheduler
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
 
[Service]
ExecStart=/usr/local/bin/kube-scheduler <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --address=127.0.0.1 <span class="token entity" title="\\\\">\\\\</span>
  --master=http://127.0.0.1:8080 <span class="token entity" title="\\\\">\\\\</span>
  --leader-elect=true <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on-failure
LimitNOFILE=65536
RestartSec=5
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>--address \u503C\u5FC5\u987B\u4E3A <span class="token number">127.0</span>.0.1\uFF0C\u56E0\u4E3A\u5F53\u524D kube-apiserver \u671F\u671B scheduler \u548C controller-manager \u5728\u540C\u4E00\u53F0\u673A\u5668\uFF1B 
--master<span class="token operator">=</span>http://<span class="token punctuation">{</span>MASTER_IP<span class="token punctuation">}</span>:8080\uFF1A\u4F7F\u7528\u975E\u5B89\u5168 <span class="token number">8080</span> \u7AEF\u53E3\u4E0E kube-apiserver \u901A\u4FE1\uFF1B 
--leader-elect<span class="token operator">=</span>true \u90E8\u7F72\u591A\u53F0\u673A\u5668\u7EC4\u6210\u7684 master \u96C6\u7FA4\u65F6\u9009\u4E3E\u4EA7\u751F\u4E00\u5904\u4E8E\u5DE5\u4F5C\u72B6\u6001\u7684 kube-controller-manager \u8FDB\u7A0B\uFF1B
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_7-\u542F\u52A8-kube-scheduler" tabindex="-1"><a class="header-anchor" href="#_7-\u542F\u52A8-kube-scheduler" aria-hidden="true">#</a> 7\uFF0C\u542F\u52A8 kube-scheduler</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cp kube-scheduler.service /etc/systemd/system/</span>
 
<span class="token comment"># systemctl daemon-reload</span>
 
<span class="token comment"># systemctl enable kube-scheduler</span>
 
<span class="token comment"># systemctl start kube-scheduler</span>
 
<span class="token comment"># systemctl status kube-scheduler</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_8-\u9A8C\u8BC1-master-\u8282\u70B9\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_8-\u9A8C\u8BC1-master-\u8282\u70B9\u529F\u80FD" aria-hidden="true">#</a> 8\uFF0C\u9A8C\u8BC1 master \u8282\u70B9\u529F\u80FD</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master1 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get cs</span>
NAME                 STATUS    MESSAGE              ERROR
scheduler            Healthy   ok                   
controller-manager   Healthy   ok                   
etcd-0               Healthy   <span class="token punctuation">{</span><span class="token string">&quot;health&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span>   
etcd-2               Healthy   <span class="token punctuation">{</span><span class="token string">&quot;health&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span>   
etcd-1               Healthy   <span class="token punctuation">{</span><span class="token string">&quot;health&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,22);function t(p,l){return e}var u=s(a,[["render",t]]);export{u as default};
