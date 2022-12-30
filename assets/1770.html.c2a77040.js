import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<p>\u672C\u8282\u5185\u5BB9\u9700\u8981\u5728\u53E6\u5916\u4E24\u4E2A node \u8282\u70B9\u6267\u884C\u3002</p><h2 id="_1-\u4E0B\u8F7D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u4E0B\u8F7D\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># wget https://download.docker.com/linux/static/stable/x86_64/docker-17.12.0-ce.tgz</span>
 
<span class="token comment"># tar zxvf docker-17.12.0-ce.tgz</span>
 
<span class="token comment"># cp docker/docker* /usr/local/bin</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_2-\u914D\u7F6E\u542F\u52A8-docker" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E\u542F\u52A8-docker" aria-hidden="true">#</a> 2\uFF0C\u914D\u7F6E\u542F\u52A8 docker</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> docker.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Docker Application Container Engine
Documentation=http://docs.docker.io
 
[Service]
Environment=&quot;PATH=/usr/local/bin:/bin:/sbin:/usr/bin:/usr/sbin&quot;
EnvironmentFile=-/run/flannel/subnet.env
EnvironmentFile=-/run/flannel/docker
ExecStart=/usr/local/bin/dockerd <span class="token entity" title="\\\\">\\\\</span>
  --exec-opt native.cgroupdriver=cgroupfs <span class="token entity" title="\\\\">\\\\</span>
  --log-level=error <span class="token entity" title="\\\\">\\\\</span>
  --log-driver=json-file <span class="token entity" title="\\\\">\\\\</span>
  --storage-driver=overlay <span class="token entity" title="\\\\">\\\\</span>
  \\<span class="token variable">$DOCKER_NETWORK_OPTIONS</span>
ExecReload=/bin/kill -s HUP \\<span class="token variable">$MAINPID</span>
Restart=on-failure
RestartSec=5
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
Delegate=yes
KillMode=process
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>$DOCKER_NETWORK_OPTIONS \u548C $MAINPID \u4E0D\u9700\u8981\u66FF\u6362\uFF1B</p><p>flanneld \u542F\u52A8\u65F6\u5C06\u7F51\u7EDC\u914D\u7F6E\u5199\u5165\u5230 /run/flannel/docker \u6587\u4EF6\u4E2D\u7684\u53D8\u91CF DOCKER_NETWORK_OPTIONS\uFF0Cdockerd \u547D\u4EE4\u884C\u4E0A\u6307\u5B9A\u8BE5\u53D8\u91CF\u503C\u6765\u8BBE\u7F6E docker0 \u7F51\u6865\u53C2\u6570\uFF1B</p><p>\u5982\u679C\u6307\u5B9A\u4E86\u591A\u4E2A EnvironmentFile \u9009\u9879\uFF0C\u5219\u5FC5\u987B\u5C06 /run/flannel/docker \u653E\u5728\u6700\u540E (\u786E\u4FDD docker0 \u4F7F\u7528 flanneld \u751F\u6210\u7684 bip \u53C2\u6570)\uFF1B</p><p>\u4E0D\u80FD\u5173\u95ED\u9ED8\u8BA4\u5F00\u542F\u7684 \u2013iptables \u548C \u2013ip-masq \u9009\u9879\uFF1B</p><p>\u5982\u679C\u5185\u6838\u7248\u672C\u6BD4\u8F83\u65B0\uFF0C\u5EFA\u8BAE\u4F7F\u7528 overlay \u5B58\u50A8\u9A71\u52A8\uFF1B</p><p>\u2013exec-opt native.cgroupdriver=systemd \u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u4E3A\u201Dcgroupfs\u201D \u6216\u8005 \u201Csystemd\u201D</p><h2 id="_3-\u542F\u52A8-docker-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-\u542F\u52A8-docker-\u670D\u52A1" aria-hidden="true">#</a> 3\uFF0C\u542F\u52A8 docker \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cp docker.service /etc/systemd/system/docker.service</span>
 
systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> docker
systemctl start docker
systemctl status docker
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4-\u5B89\u88C5\u548C\u914D\u7F6E-kubelet" tabindex="-1"><a class="header-anchor" href="#_4-\u5B89\u88C5\u548C\u914D\u7F6E-kubelet" aria-hidden="true">#</a> 4\uFF0C\u5B89\u88C5\u548C\u914D\u7F6E kubelet</h2><p>kubelet \u542F\u52A8\u65F6\u5411 kube-apiserver \u53D1\u9001 TLS bootstrapping \u8BF7\u6C42\uFF0C\u9700\u8981\u5148\u5C06 bootstrap token \u6587\u4EF6\u4E2D\u7684 kubelet-bootstrap \u7528\u6237\u8D4B\u4E88 system:node-bootstrapper \u89D2\u8272\uFF0C\u7136\u540E kubelet \u624D\u6709\u6743\u9650\u521B\u5EFA\u8BA4\u8BC1\u8BF7\u6C42\u3002</p><p>\u4E0B\u9762\u8FD9\u6761\u547D\u4EE4\u53EA\u5728 master \u70B9\u6267\u884C\u4E00\u6B21\u5373\u53EF\uFF01</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master1 ~<span class="token punctuation">]</span><span class="token comment">#  kubectl create clusterrolebinding kubelet-bootstrap --clusterrole=system:node-bootstrapper --user=kubelet-bootstrap</span>
 
clusterrolebinding <span class="token string">&quot;kubelet-bootstrap&quot;</span> created
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_5-\u4E0B\u8F7D\u5B89\u88C5-kubelet-\u548C-kube-proxy" tabindex="-1"><a class="header-anchor" href="#_5-\u4E0B\u8F7D\u5B89\u88C5-kubelet-\u548C-kube-proxy" aria-hidden="true">#</a> 5\uFF0C\u4E0B\u8F7D\u5B89\u88C5 kubelet \u548C kube-proxy</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># wget https://dl.k8s.io/v1.8.6/kubernetes-server-linux-amd64.tar.gz</span>
 
<span class="token comment"># tar -xzvf kubernetes-server-linux-amd64.tar.gz</span>
 
<span class="token comment"># cp -r kubernetes/server/bin/{kube-proxy,kubelet} /usr/local/bin/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_6-\u521B\u5EFA-kubelet-\u5DE5\u4F5C\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_6-\u521B\u5EFA-kubelet-\u5DE5\u4F5C\u76EE\u5F55" aria-hidden="true">#</a> 6\uFF0C\u521B\u5EFA kubelet \u5DE5\u4F5C\u76EE\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /var/lib/kubelet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_7-\u914D\u7F6E\u542F\u52A8-kubelet" tabindex="-1"><a class="header-anchor" href="#_7-\u914D\u7F6E\u542F\u52A8-kubelet" aria-hidden="true">#</a> 7\uFF0C\u914D\u7F6E\u542F\u52A8 kubelet</h2><p>\u4E3A\u4E86\u907F\u514D\u914D\u7F6E\u51FA\u9519\uFF0C\u8FD9\u91CC\u5C06\u4E24\u4E2A node \u8282\u70B9\u7684\u914D\u7F6E\u90FD\u5217\u51FA\u6765\u4E86\u3002</p><h3 id="_1-node01\u3002" tabindex="-1"><a class="header-anchor" href="#_1-node01\u3002" aria-hidden="true">#</a> 1\uFF0Cnode01\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kubelet.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Kubernetes Kubelet
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
After=docker.service
Requires=docker.service
 
[Service]
WorkingDirectory=/var/lib/kubelet
ExecStart=/usr/local/bin/kubelet <span class="token entity" title="\\\\">\\\\</span>
  --address=192.168.106.4 <span class="token entity" title="\\\\">\\\\</span>
  --hostname-override=192.168.106.4 <span class="token entity" title="\\\\">\\\\</span>
  --pod-infra-container-image=registry.access.redhat.com/rhel7/pod-infrastructure:latest <span class="token entity" title="\\\\">\\\\</span>
  --experimental-bootstrap-kubeconfig=/etc/kubernetes/bootstrap.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --kubeconfig=/etc/kubernetes/kubelet.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --require-kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --cert-dir=/etc/kubernetes/ssl <span class="token entity" title="\\\\">\\\\</span>
  --container-runtime=docker <span class="token entity" title="\\\\">\\\\</span>
  --cluster-dns=10.254.0.2 <span class="token entity" title="\\\\">\\\\</span>
  --cluster-domain=cluster.local <span class="token entity" title="\\\\">\\\\</span>
  --hairpin-mode promiscuous-bridge <span class="token entity" title="\\\\">\\\\</span>
  --allow-privileged=true <span class="token entity" title="\\\\">\\\\</span>
  --serialize-image-pulls=false <span class="token entity" title="\\\\">\\\\</span>
  --register-node=true <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --cgroup-driver=cgroupfs  <span class="token entity" title="\\\\">\\\\</span>
  --v=2
 
Restart=on-failure
KillMode=process
LimitNOFILE=65536
RestartSec=5
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="_2-node02\u3002" tabindex="-1"><a class="header-anchor" href="#_2-node02\u3002" aria-hidden="true">#</a> 2\uFF0Cnode02\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kubelet.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Kubernetes Kubelet
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
After=docker.service
Requires=docker.service
 
[Service]
WorkingDirectory=/var/lib/kubelet
ExecStart=/usr/local/bin/kubelet <span class="token entity" title="\\\\">\\\\</span>
  --address=192.168.106.5 <span class="token entity" title="\\\\">\\\\</span>
  --hostname-override=192.168.106.5 <span class="token entity" title="\\\\">\\\\</span>
  --pod-infra-container-image=registry.access.redhat.com/rhel7/pod-infrastructure:latest <span class="token entity" title="\\\\">\\\\</span>
  --experimental-bootstrap-kubeconfig=/etc/kubernetes/bootstrap.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --kubeconfig=/etc/kubernetes/kubelet.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --require-kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --cert-dir=/etc/kubernetes/ssl <span class="token entity" title="\\\\">\\\\</span>
  --container-runtime=docker <span class="token entity" title="\\\\">\\\\</span>
  --cluster-dns=10.254.0.2 <span class="token entity" title="\\\\">\\\\</span>
  --cluster-domain=cluster.local <span class="token entity" title="\\\\">\\\\</span>
  --hairpin-mode promiscuous-bridge <span class="token entity" title="\\\\">\\\\</span>
  --allow-privileged=true <span class="token entity" title="\\\\">\\\\</span>
  --serialize-image-pulls=false <span class="token entity" title="\\\\">\\\\</span>
  --register-node=true <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --cgroup-driver=cgroupfs  <span class="token entity" title="\\\\">\\\\</span>
  --v=2
 
Restart=on-failure
KillMode=process
LimitNOFILE=65536
RestartSec=5
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><code>\u8BE6\u89E3</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>--address \u662F\u672C\u673Aip\uFF0C\u4E0D\u80FD\u8BBE\u7F6E\u4E3A <span class="token number">127.0</span>.0.1\uFF0C\u5426\u5219\u540E\u7EED Pods \u8BBF\u95EE kubelet \u7684 API \u63A5\u53E3\u65F6\u4F1A\u5931\u8D25\uFF0C\u56E0\u4E3A Pods \u8BBF\u95EE\u7684 <span class="token number">127.0</span>.0.1 \u6307\u5411\u81EA\u5DF1\u800C\u4E0D\u662F kubelet\uFF1B
--hostname-override \u4E5F\u662F\u672C\u673AIP\uFF1B
--cgroup-driver \u914D\u7F6E\u6210 cgroup\uFF08\u4FDD\u6301docker\u548Ckubelet\u4E2D\u7684cgroup driver\u914D\u7F6E\u4E00\u81F4\u5373\u53EF\uFF09<span class="token punctuation">;</span>
\u2013experimental-bootstrap-kubeconfig \u6307\u5411 bootstrap kubeconfig \u6587\u4EF6\uFF0Ckubelet \u4F7F\u7528\u8BE5\u6587\u4EF6\u4E2D\u7684\u7528\u6237\u540D\u548C token \u5411 kube-apiserver \u53D1\u9001 TLS Bootstrapping \u8BF7\u6C42\uFF1B
\u7BA1\u7406\u5458\u901A\u8FC7\u4E86 CSR \u8BF7\u6C42\u540E\uFF0Ckubelet \u81EA\u52A8\u5728 \u2013cert-dir \u76EE\u5F55\u521B\u5EFA\u8BC1\u4E66\u548C\u79C1\u94A5\u6587\u4EF6<span class="token punctuation">(</span>kubelet-client.crt \u548C kubelet-client.key<span class="token punctuation">)</span>\uFF0C\u7136\u540E\u5199\u5165 \u2013kubeconfig \u6587\u4EF6<span class="token punctuation">(</span>\u81EA\u52A8\u521B\u5EFA \u2013kubeconfig \u6307\u5B9A\u7684\u6587\u4EF6<span class="token punctuation">)</span>\uFF1B
\u5EFA\u8BAE\u5728 \u2013kubeconfig \u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A kube-apiserver \u5730\u5740\uFF0C\u5982\u679C\u672A\u6307\u5B9A \u2013api-servers \u9009\u9879\uFF0C\u5219\u5FC5\u987B\u6307\u5B9A \u2013require-kubeconfig \u9009\u9879\u540E\u624D\u4ECE\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BFB\u53D6 kue-apiserver \u7684\u5730\u5740\uFF0C\u5426\u5219 kubelet \u542F\u52A8\u540E\u5C06\u627E\u4E0D\u5230 kube-apiserver <span class="token punctuation">(</span>\u65E5\u5FD7\u4E2D\u63D0\u793A\u672A\u627E\u5230 API Server\uFF09\uFF0Ckubectl get nodes \u4E0D\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684 Node \u4FE1\u606F<span class="token punctuation">;</span>
--cluster-dns \u6307\u5B9A kubedns \u7684 Service IP<span class="token punctuation">(</span>\u53EF\u4EE5\u5148\u5206\u914D\uFF0C\u540E\u7EED\u521B\u5EFA kubedns \u670D\u52A1\u65F6\u6307\u5B9A\u8BE5 IP<span class="token punctuation">)</span>\uFF0C\u2013cluster-domain \u6307\u5B9A\u57DF\u540D\u540E\u7F00\uFF0C\u8FD9\u4E24\u4E2A\u53C2\u6570\u540C\u65F6\u6307\u5B9A\u540E\u624D\u4F1A\u751F\u6548\uFF1B
--cluster-domain \u6307\u5B9A pod \u542F\u52A8\u65F6 /etc/resolve.conf \u6587\u4EF6\u4E2D\u7684 search domain \uFF0C\u8D77\u521D\u6211\u4EEC\u5C06\u5176\u914D\u7F6E\u6210\u4E86 cluster.local.\uFF0C\u8FD9\u6837\u5728\u89E3\u6790 <span class="token function">service</span> \u7684 DNS \u540D\u79F0\u65F6\u662F\u6B63\u5E38\u7684\uFF0C\u53EF\u662F\u5728\u89E3\u6790 headless <span class="token function">service</span> \u4E2D\u7684 FQDN pod name \u7684\u65F6\u5019\u5374\u9519\u8BEF\uFF0C\u56E0\u6B64\u6211\u4EEC\u5C06\u5176\u4FEE\u6539\u4E3A cluster.local\uFF0C\u53BB\u6389\u5634\u540E\u9762\u7684 \u201D\u70B9\u53F7\u201C \u5C31\u53EF\u4EE5\u89E3\u51B3\u8BE5\u95EE\u9898\uFF1B
--kubeconfig<span class="token operator">=</span>/etc/kubernetes/kubelet.kubeconfig\u4E2D\u6307\u5B9A\u7684kubelet.kubeconfig\u6587\u4EF6\u5728\u7B2C\u4E00\u6B21\u542F\u52A8kubelet\u4E4B\u524D\u5E76\u4E0D\u5B58\u5728\uFF0C\u8BF7\u770B\u4E0B\u6587\uFF0C\u5F53\u901A\u8FC7CSR\u8BF7\u6C42\u540E\u4F1A\u81EA\u52A8\u751F\u6210kubelet.kubeconfig\u6587\u4EF6\uFF0C\u5982\u679C\u4F60\u7684\u8282\u70B9\u4E0A\u5DF2\u7ECF\u751F\u6210\u4E86~/.kube/config\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5C06\u8BE5\u6587\u4EF6\u62F7\u8D1D\u5230\u8BE5\u8DEF\u5F84\u4E0B\uFF0C\u5E76\u91CD\u547D\u540D\u4E3Akubelet.kubeconfig\uFF0C\u6240\u6709node\u8282\u70B9\u53EF\u4EE5\u5171\u7528\u540C\u4E00\u4E2Akubelet.kubeconfig\u6587\u4EF6\uFF0C\u8FD9\u6837\u65B0\u6DFB\u52A0\u7684\u8282\u70B9\u5C31\u4E0D\u9700\u8981\u518D\u521B\u5EFACSR\u8BF7\u6C42\u5C31\u80FD\u81EA\u52A8\u6DFB\u52A0\u5230kubernetes\u96C6\u7FA4\u4E2D\u3002\u540C\u6837\uFF0C\u5728\u4EFB\u610F\u80FD\u591F\u8BBF\u95EE\u5230kubernetes\u96C6\u7FA4\u7684\u4E3B\u673A\u4E0A\u4F7F\u7528kubectl \u2013kubeconfig\u547D\u4EE4\u64CD\u4F5C\u96C6\u7FA4\u65F6\uFF0C\u53EA\u8981\u4F7F\u7528~/.kube/config\u6587\u4EF6\u5C31\u53EF\u4EE5\u901A\u8FC7\u6743\u9650\u8BA4\u8BC1\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u9762\u5DF2\u7ECF\u6709\u8BA4\u8BC1\u4FE1\u606F\u5E76\u8BA4\u4E3A\u4F60\u662Fadmin\u7528\u6237\uFF0C\u5BF9\u96C6\u7FA4\u62E5\u6709\u6240\u6709\u6743\u9650\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_8-\u542F\u52A8-kubelet" tabindex="-1"><a class="header-anchor" href="#_8-\u542F\u52A8-kubelet" aria-hidden="true">#</a> 8\uFF0C\u542F\u52A8 kubelet</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cp kubelet.service /etc/systemd/system/kubelet.service</span>
 
systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> kubelet
systemctl start kubelet
systemctl status kubelet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_9-\u6267\u884C-tls-\u8BC1\u4E66\u6388\u6743\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_9-\u6267\u884C-tls-\u8BC1\u4E66\u6388\u6743\u8BF7\u6C42" aria-hidden="true">#</a> 9\uFF0C\u6267\u884C TLS \u8BC1\u4E66\u6388\u6743\u8BF7\u6C42</h2><p>kubelet \u9996\u6B21\u542F\u52A8\u65F6\u5411 kube-apiserver \u53D1\u9001\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF0C\u5FC5\u987B\u6388\u6743\u901A\u8FC7\u540E\uFF0CNode \u624D\u4F1A\u52A0\u5165\u5230\u96C6\u7FA4\u4E2D \u5728\u4E09\u4E2A\u8282\u70B9\u90FD\u90E8\u7F72\u5B8C kubelet \u4E4B\u540E\uFF0C\u5728 master \u8282\u70B9 \u6267\u884C\u6388\u6743\u64CD\u4F5C\u3002</p><h3 id="_1-\u67E5\u8BE2\u6388\u6743\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u8BE2\u6388\u6743\u8BF7\u6C42" aria-hidden="true">#</a> 1\uFF0C\u67E5\u8BE2\u6388\u6743\u8BF7\u6C42</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master1 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get csr</span>
NAME                                                   AGE       REQUESTOR           CONDITION
node-csr-CBQBCTCkD0UWgpJT140-mRKBcbcG5sz5pbX00LOaU6Q   39s       kubelet-bootstrap   Pending\uFF08\u7B49\u5F85\uFF09
node-csr-Mostzx0Z65MyU2E2ctvfHs9IKorhlbLxP1hszSr0l4E   45s       kubelet-bootstrap   Pending
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#_2-\u6388\u6743" aria-hidden="true">#</a> 2\uFF0C\u6388\u6743</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master1 ~<span class="token punctuation">]</span><span class="token comment"># kubectl certificate approve node-csr-CBQBCTCkD0UWgpJT140-mRKBcbcG5sz5pbX00LOaU6Q  #\u6CE8\u610F\u8FD9\u91CC\u7684node-ID\u662F\u4E0A\u8FB9\u83B7\u53D6\u5230\u7684</span>
certificatesigningrequest <span class="token string">&quot;node-csr-CBQBCTCkD0UWgpJT140-mRKBcbcG5sz5pbX00LOaU6Q&quot;</span> approved
 
<span class="token punctuation">[</span>root@master1 ~<span class="token punctuation">]</span><span class="token comment"># kubectl certificate approve node-csr-Mostzx0Z65MyU2E2ctvfHs9IKorhlbLxP1hszSr0l4E</span>
certificatesigningrequest <span class="token string">&quot;node-csr-Mostzx0Z65MyU2E2ctvfHs9IKorhlbLxP1hszSr0l4E&quot;</span> approved
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-\u518D\u6B21\u67E5\u770B\u4E00\u4E0B\u6388\u6743\u8BF7\u6C42\u7684\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_3-\u518D\u6B21\u67E5\u770B\u4E00\u4E0B\u6388\u6743\u8BF7\u6C42\u7684\u72B6\u6001" aria-hidden="true">#</a> 3\uFF0C\u518D\u6B21\u67E5\u770B\u4E00\u4E0B\u6388\u6743\u8BF7\u6C42\u7684\u72B6\u6001</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master k8s<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get csr
NAME                                                   AGE       REQUESTOR           CONDITION
node-csr-5Wupmti2R-12poZy8-9w9eBQRkpMeoaxBwrN0vdc2VA   1m        kubelet-bootstrap   Approved<span class="token punctuation">(</span>\u6279\u51C6<span class="token punctuation">)</span>,Issued
node-csr-oh87oCPs6Wo_Ti4OhGB5BTRgi1kk3RnfUSmLcJB-xKQ   1m        kubelet-bootstrap   Approved,Issued
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_4-\u67E5\u770B\u5DF2\u52A0\u5165\u96C6\u7FA4\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-\u67E5\u770B\u5DF2\u52A0\u5165\u96C6\u7FA4\u7684\u8282\u70B9" aria-hidden="true">#</a> 4\uFF0C\u67E5\u770B\u5DF2\u52A0\u5165\u96C6\u7FA4\u7684\u8282\u70B9</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get nodes
NAME            STATUS    ROLES     AGE       VERSION
<span class="token number">192.168</span>.106.4   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    3d        v1.8.6
<span class="token number">192.168</span>.106.5   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    3d        v1.8.6
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_10-\u521B\u5EFA-kube-proxy-\u5DE5\u4F5C\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_10-\u521B\u5EFA-kube-proxy-\u5DE5\u4F5C\u76EE\u5F55" aria-hidden="true">#</a> 10\uFF0C\u521B\u5EFA kube-proxy \u5DE5\u4F5C\u76EE\u5F55</h2><p>\u5728 node \u8282\u70B9\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># sudo mkdir -p /var/lib/kube-proxy</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_11-\u914D\u7F6E\u542F\u52A8-kube-proxy" tabindex="-1"><a class="header-anchor" href="#_11-\u914D\u7F6E\u542F\u52A8-kube-proxy" aria-hidden="true">#</a> 11\uFF0C\u914D\u7F6E\u542F\u52A8 kube-proxy</h2><h3 id="_1-node01\u3002-1" tabindex="-1"><a class="header-anchor" href="#_1-node01\u3002-1" aria-hidden="true">#</a> 1\uFF0Cnode01\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-proxy.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Kubernetes Kube-Proxy Server
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
After=network.target
 
[Service]
WorkingDirectory=/var/lib/kube-proxy
ExecStart=/usr/local/bin/kube-proxy <span class="token entity" title="\\\\">\\\\</span>
  --bind-address=192.168.106.4 <span class="token entity" title="\\\\">\\\\</span>
  --hostname-override=192.168.106.4 <span class="token entity" title="\\\\">\\\\</span>
  --cluster-cidr=10.254.0.0/16 <span class="token entity" title="\\\\">\\\\</span>
  --kubeconfig=/etc/kubernetes/kube-proxy.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on-failure
RestartSec=5
LimitNOFILE=65536
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_2-node02\u3002-1" tabindex="-1"><a class="header-anchor" href="#_2-node02\u3002-1" aria-hidden="true">#</a> 2\uFF0Cnode02\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-proxy.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Kubernetes Kube-Proxy Server
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
After=network.target
 
[Service]
WorkingDirectory=/var/lib/kube-proxy
ExecStart=/usr/local/bin/kube-proxy <span class="token entity" title="\\\\">\\\\</span>
  --bind-address=192.168.106.5 <span class="token entity" title="\\\\">\\\\</span>
  --hostname-override=192.168.106.5 <span class="token entity" title="\\\\">\\\\</span>
  --cluster-cidr=10.254.0.0/16 <span class="token entity" title="\\\\">\\\\</span>
  --kubeconfig=/etc/kubernetes/kube-proxy.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on-failure
RestartSec=5
LimitNOFILE=65536
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><code>\u8BE6\u89E3</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>--bind-address \u53C2\u6570\u4E3A\u672C\u673AIP 
--hostname-override \u53C2\u6570\u4E3A\u672C\u673AIP\uFF0C\u503C\u5FC5\u987B\u4E0E kubelet \u7684\u503C\u4E00\u81F4\uFF0C\u5426\u5219 kube-proxy \u542F\u52A8\u540E\u4F1A\u627E\u4E0D\u5230\u8BE5 Node\uFF0C\u4ECE\u800C\u4E0D\u4F1A\u521B\u5EFA\u4EFB\u4F55 iptables \u89C4\u5219\uFF1B
--cluster-cidr \u5FC5\u987B\u4E0E kube-apiserver \u7684 \u2013service-cluster-ip-range \u9009\u9879\u503C\u4E00\u81F4\uFF0Ckube-proxy \u6839\u636E \u2013cluster-cidr \u5224\u65AD\u96C6\u7FA4\u5185\u90E8\u548C\u5916\u90E8\u6D41\u91CF\uFF0C\u6307\u5B9A \u2013cluster-cidr \u6216 \u2013masquerade-all \u9009\u9879\u540E kube-proxy \u624D\u4F1A\u5BF9\u8BBF\u95EE Service IP \u7684\u8BF7\u6C42\u505A SNAT\uFF1B
--kubeconfig \u6307\u5B9A\u7684\u914D\u7F6E\u6587\u4EF6\u5D4C\u5165\u4E86 kube-apiserver \u7684\u5730\u5740\u3001\u7528\u6237\u540D\u3001\u8BC1\u4E66\u3001\u79D8\u94A5\u7B49\u8BF7\u6C42\u548C\u8BA4\u8BC1\u4FE1\u606F\uFF1B
\u9884\u5B9A\u4E49\u7684 RoleBinding cluster-admin \u5C06User system:kube-proxy \u4E0E Role system:node-proxier \u7ED1\u5B9A\uFF0C\u8BE5 Role \u6388\u4E88\u4E86\u8C03\u7528 kube-apiserver Proxy \u76F8\u5173 API \u7684\u6743\u9650\uFF1B
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_12-\u542F\u52A8-kube-proxy" tabindex="-1"><a class="header-anchor" href="#_12-\u542F\u52A8-kube-proxy" aria-hidden="true">#</a> 12\uFF0C\u542F\u52A8 kube-proxy</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cp kube-proxy.service /etc/systemd/system/</span>
 
systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> kube-proxy
systemctl start kube-proxy
systemctl status kube-proxy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728\u53E6\u5916\u7684\u4E00\u4E2A\u8282\u70B9\u8FDB\u884C\u4E0A\u9762\u7684\u90E8\u7F72\u64CD\u4F5C\uFF0C\u6CE8\u610F\u66FF\u6362\u5176\u4E2D\u7684 ip\u3002</p>`,54);function r(l,t){return a}var c=s(e,[["render",r]]);export{c as default};
