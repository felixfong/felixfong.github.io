import{r as e,o as p,c as l,b as n,a as r,F as o,e as t,d as s}from"./app.dbf5d933.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const c={},b=t(`<h2 id="_1-\u96C6\u7FA4\u673A\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u96C6\u7FA4\u673A\u5668" aria-hidden="true">#</a> 1\uFF0C\u96C6\u7FA4\u673A\u5668</h2><ul><li>kube-node1\uFF1A192.168.106.3</li><li>kube-node2\uFF1A192.168.106.4</li><li>kube-node3\uFF1A192.168.106.5</li><li>VIP\uFF1A192.168.106.110</li></ul><h2 id="_2-\u4E3B\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3B\u673A\u540D" aria-hidden="true">#</a> 2\uFF0C\u4E3B\u673A\u540D</h2><ul><li>\u8BBE\u7F6E\u6C38\u4E45\u4E3B\u673A\u540D\u79F0\uFF0C\u7136\u540E\u91CD\u65B0\u767B\u5F55:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> hostnamectl set-hostname kube-node1 <span class="token comment"># \u5C06 kube-node1 \u66FF\u6362\u4E3A\u5F53\u524D\u4E3B\u673A\u540D</span>
$ <span class="token function">sudo</span> hostnamectl set-hostname kube-node2 <span class="token comment"># \u5C06 kube-node2 \u66FF\u6362\u4E3A\u5F53\u524D\u4E3B\u673A\u540D</span>
$ <span class="token function">sudo</span> hostnamectl set-hostname kube-node3 <span class="token comment"># \u5C06 kube-node3 \u66FF\u6362\u4E3A\u5F53\u524D\u4E3B\u673A\u540D</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u8BBE\u7F6E\u7684\u4E3B\u673A\u540D\u4FDD\u5B58\u5728 /etc/hosts \u6587\u4EF6\u4E2D\uFF1B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cat</span> <span class="token operator">&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
192.168.106.3 kube-node1
192.168.106.4 kube-node2
192.168.106.5 kube-node3
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-\u6DFB\u52A0-k8s-\u548C-docker-\u8D26\u6237" tabindex="-1"><a class="header-anchor" href="#_3-\u6DFB\u52A0-k8s-\u548C-docker-\u8D26\u6237" aria-hidden="true">#</a> 3\uFF0C\u6DFB\u52A0 k8s \u548C docker \u8D26\u6237</h2><ul><li>\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u6DFB\u52A0 k8s \u8D26\u6237\uFF0C\u53EF\u4EE5\u65E0\u5BC6\u7801 sudo\uFF1A</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">useradd</span> -m k8s
$ <span class="token builtin class-name">echo</span> <span class="token number">123456</span> <span class="token operator">|</span> <span class="token function">passwd</span> k8s --stdin <span class="token comment"># \u4E3A k8s \u8D26\u6237\u8BBE\u7F6E\u5BC6\u7801</span>
$ <span class="token function">sudo</span> visudo
$ <span class="token function">sudo</span> <span class="token function">grep</span> <span class="token string">&#39;%wheel.*NOPASSWD: ALL&#39;</span> /etc/sudoers
%wheel    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>    NOPASSWD: ALL
$ <span class="token function">sudo</span> gpasswd -a k8s wheel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u6DFB\u52A0 docker \u8D26\u6237\uFF0C\u5C06 k8s \u8D26\u6237\u6DFB\u52A0\u5230 docker \u7EC4\u4E2D\uFF0C\u540C\u65F6\u914D\u7F6E dockerd \u53C2\u6570\uFF1A</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">useradd</span> -m docker
$ <span class="token function">sudo</span> gpasswd -a k8s docker
$ <span class="token function">sudo</span> <span class="token function">mkdir</span> -p  /etc/docker/
$ <span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{
    &quot;registry-mirrors&quot;: [&quot;https://hub-mirror.c.163.com&quot;,&quot;https://docker.mirrors.ustc.edu.cn&quot;],
    &quot;max-concurrent-downloads&quot;: 20
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-\u65E0\u5BC6\u7801-ssh-\u767B\u5F55\u5176\u5B83\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-\u65E0\u5BC6\u7801-ssh-\u767B\u5F55\u5176\u5B83\u8282\u70B9" aria-hidden="true">#</a> 4\uFF0C\u65E0\u5BC6\u7801 ssh \u767B\u5F55\u5176\u5B83\u8282\u70B9</h2><p>\u5982\u679C\u6CA1\u6709\u7279\u6B8A\u6307\u660E\uFF0C\u672C\u6587\u6863\u7684\u6240\u6709\u64CD\u4F5C\u5747\u5728 kube-node1 \u8282\u70B9\u4E0A\u6267\u884C\uFF0C\u7136\u540E\u8FDC\u7A0B\u5206\u53D1\u6587\u4EF6\u548C\u6267\u884C\u547D\u4EE4\u3002\u7A0D\u5019\u4F1A\u4ECB\u7ECD\u4E00\u4E2A\u795E\u5668\uFF0C\u901A\u8FC7\u8FD9\u4E2A\uFF0C\u5C31\u80FD\u591F\u5B9E\u73B0\u57FA\u672C\u4E0A\u5168\u7A0B\u5728\u8282\u70B9 1 \u4E2D\u90E8\u7F72\u6574\u4E2A\u96C6\u7FA4\u3002</p><p>\u8BBE\u7F6E kube-node1 \u53EF\u4EE5\u65E0\u5BC6\u7801\u767B\u5F55\u6240\u6709\u8282\u70B9\u7684 k8s \u548C root \u8D26\u6237\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>k8s@kube-node1 k8s<span class="token punctuation">]</span>$ ssh-keygen -t rsa
<span class="token punctuation">[</span>k8s@kube-node1 k8s<span class="token punctuation">]</span>$ ssh-copy-id root@kube-node1
<span class="token punctuation">[</span>k8s@kube-node1 k8s<span class="token punctuation">]</span>$ ssh-copy-id root@kube-node2
<span class="token punctuation">[</span>k8s@kube-node1 k8s<span class="token punctuation">]</span>$ ssh-copy-id root@kube-node3
<span class="token punctuation">[</span>k8s@kube-node1 k8s<span class="token punctuation">]</span>$ ssh-copy-id k8s@kube-node1
<span class="token punctuation">[</span>k8s@kube-node1 k8s<span class="token punctuation">]</span>$ ssh-copy-id k8s@kube-node2
<span class="token punctuation">[</span>k8s@kube-node1 k8s<span class="token punctuation">]</span>$ ssh-copy-id k8s@kube-node3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4EE5\u540E\u7684\u90E8\u7F72\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u5728 kube-node1 \u7684 k8s \u7528\u6237\u5BB6\u76EE\u5F55\u4E0B\u8FDB\u884C\u4E86\uFF0C\u4E0D\u8981\u89C9\u5F97\u4E0D\u65B9\u4FBF\u3002</p><h2 id="_5-\u5C06\u53EF\u6267\u884C\u6587\u4EF6\u8DEF\u5F84-opt-k8s-bin-\u6DFB\u52A0\u5230-path-\u53D8\u91CF\u4E2D" tabindex="-1"><a class="header-anchor" href="#_5-\u5C06\u53EF\u6267\u884C\u6587\u4EF6\u8DEF\u5F84-opt-k8s-bin-\u6DFB\u52A0\u5230-path-\u53D8\u91CF\u4E2D" aria-hidden="true">#</a> 5\uFF0C\u5C06\u53EF\u6267\u884C\u6587\u4EF6\u8DEF\u5F84 /opt/k8s/bin \u6DFB\u52A0\u5230 PATH \u53D8\u91CF\u4E2D</h2><p>\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">sh</span> -c <span class="token string">&quot;echo &#39;PATH=/opt/k8s/bin:<span class="token environment constant">$PATH</span>:<span class="token environment constant">$HOME</span>/bin:<span class="token variable">$JAVA_HOME</span>/bin&#39; &gt;&gt;/root/.bashrc&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;PATH=/opt/k8s/bin:$PATH:$HOME/bin:$JAVA_HOME/bin&#39;</span> <span class="token operator">&gt;&gt;</span>~/.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_6-\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_6-\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> 6\uFF0C\u73AF\u5883\u53D8\u91CF</h2><p>\u73B0\u5728\u5C06\u8981\u5F15\u5165\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u4EE5\u4FBF\u4E8E\u6574\u4E2A\u6D41\u7A0B\u7684\u90E8\u7F72\u5DE5\u4F5C\uFF0C\u4E00\u5F00\u59CB\u6709\u70B9\u4E0D\u5927\u9002\u5E94\uFF0C\u4F46\u662F\u4E60\u60EF\u4E86\u8FD9\u79CD\u64CD\u4F5C\u4E4B\u540E\uFF0C\u53D1\u73B0\u8FD9\u4E2A\u601D\u8DEF\uFF0C\u7ED3\u5408\u5728 k8s \u7684\u90E8\u7F72\u4E4B\u4E0A\uFF0C\u662F\u771F\u7684\u7280\u5229\u3002</p><p>\u5B9A\u4E49\u53D8\u91CF\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u5B9A\u4E49\u6240\u6709\u8FD9\u6B21\u90E8\u7F72 k8s \u6240\u5DE5\u4F5C\u7684\u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /opt/k8s/bin/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u53D8\u91CF\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /opt/k8s/bin/environment.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/usr/bin/bash
# \u751F\u6210 EncryptionConfig \u6240\u9700\u7684\u52A0\u5BC6 key
export ENCRYPTION_KEY=$(head -c 32 /dev/urandom | base64)
# \u6700\u597D\u4F7F\u7528\u5F53\u524D\u672A\u7528\u7684\u7F51\u6BB5\u6765\u5B9A\u4E49\u670D\u52A1\u7F51\u6BB5\u548CPod\u7F51\u6BB5
# \u670D\u52A1\u7F51\u6BB5\uFF0C\u90E8\u7F72\u524D\u8DEF\u7531\u4E0D\u53EF\u8FBE\uFF0C\u90E8\u7F72\u540E\u96C6\u7FA4\u5185\u8DEF\u7531\u53EF\u8FBE(kube-proxy \u548C ipvs \u4FDD\u8BC1)
export SERVICE_CIDR=&quot;10.254.0.0/16&quot;
# Pod \u7F51\u6BB5\uFF0C\u5EFA\u8BAE /16 \u6BB5\u5730\u5740\uFF0C\u90E8\u7F72\u524D\u8DEF\u7531\u4E0D\u53EF\u8FBE\uFF0C\u90E8\u7F72\u540E\u96C6\u7FA4\u5185\u8DEF\u7531\u53EF\u8FBE(flanneld \u4FDD\u8BC1)
export CLUSTER_CIDR=&quot;172.30.0.0/16&quot;
# \u670D\u52A1\u7AEF\u53E3\u8303\u56F4 (NodePort Range)
export NODE_PORT_RANGE=&quot;8400-9000&quot;
# \u96C6\u7FA4\u5404\u673A\u5668 IP \u6570\u7EC4
export NODE_IPS=(192.168.106.3 192.168.106.4 192.168.106.5)
# \u96C6\u7FA4\u5404 IP \u5BF9\u5E94\u7684 \u4E3B\u673A\u540D\u6570\u7EC4
export NODE_NAMES=(kube-node1 kube-node2 kube-node3)
# kube-apiserver \u7684 VIP\uFF08HA \u7EC4\u4EF6 keepalived \u53D1\u5E03\u7684 IP\uFF09
export MASTER_VIP=192.168.106.110
# kube-apiserver VIP \u5730\u5740\uFF08HA \u7EC4\u4EF6 haproxy \u76D1\u542C 8443 \u7AEF\u53E3\uFF09
export KUBE_APISERVER=&quot;https://\${MASTER_VIP}:8443&quot;
# HA \u8282\u70B9\uFF0C\u914D\u7F6E VIP \u7684\u7F51\u7EDC\u63A5\u53E3\u540D\u79F0
export VIP_IF=&quot;eth0&quot;
# etcd \u96C6\u7FA4\u670D\u52A1\u5730\u5740\u5217\u8868
export ETCD_ENDPOINTS=&quot;https://192.168.106.3:2379,https://192.168.106.4:2379,https://192.168.106.5:2379&quot;
# etcd \u96C6\u7FA4\u95F4\u901A\u4FE1\u7684 IP \u548C\u7AEF\u53E3
export ETCD_NODES=&quot;kube-node1=https://192.168.106.3:2380,kube-node2=https://192.168.106.4:2380,kube-node3=https://192.168.106.5:2380&quot;
# flanneld \u7F51\u7EDC\u914D\u7F6E\u524D\u7F00
export FLANNEL_ETCD_PREFIX=&quot;/kubernetes/network&quot;
# kubernetes \u670D\u52A1 IP (\u4E00\u822C\u662F SERVICE_CIDR \u4E2D\u7B2C\u4E00\u4E2AIP)
export CLUSTER_KUBERNETES_SVC_IP=&quot;10.254.0.1&quot;
# \u96C6\u7FA4 DNS \u670D\u52A1 IP (\u4ECE SERVICE_CIDR \u4E2D\u9884\u5206\u914D)
export CLUSTER_DNS_SVC_IP=&quot;10.254.0.2&quot;
# \u96C6\u7FA4 DNS \u57DF\u540D
export CLUSTER_DNS_DOMAIN=&quot;cluster.local.&quot;
# \u5C06\u4E8C\u8FDB\u5236\u76EE\u5F55 /opt/k8s/bin \u52A0\u5230 PATH \u4E2D
export PATH=/opt/k8s/bin:$PATH
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u5176\u4E2D\u9700\u8981\u6CE8\u610F\u76F8\u5173 IP \u7684\u8BBE\u7F6E\u5BF9\u5E94\uFF0C\u4E0D\u8981\u641E\u9519\u4E86\u3002</p><h2 id="_7-\u5B89\u88C5\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#_7-\u5B89\u88C5\u4F9D\u8D56\u5305" aria-hidden="true">#</a> 7\uFF0C\u5B89\u88C5\u4F9D\u8D56\u5305</h2><p>\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u5B89\u88C5\u4F9D\u8D56\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> -y epel-release
$ <span class="token function">sudo</span> yum <span class="token function">install</span> -y conntrack ipvsadm ipset jq sysstat <span class="token function">curl</span> iptables libseccomp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u8FB9\u662F\u4F20\u7EDF\u65B9\u5F0F\u7684\u5B89\u88C5\u65B9\u6CD5\uFF0C\u73B0\u5728\u53EF\u4EE5\u91C7\u7528\u4E00\u4E0B\u521A\u521A\u5B9A\u4E49\u7684\u65B9\u5F0F\u5B89\u88C5\u4E00\u4E0B\uFF1A</p><p>\u5B9A\u4E49\u4E00\u4E2A\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    ssh root@\${node_ip} &quot;yum install -y epel-release conntrack ipvsadm ipset jq sysstat curl iptables libseccomp&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>\u6CE8\u610F\uFF1A</code>\u5728\u7B2C\u4E00\u4E2A EOF \u4E2D\u52A0\u5F15\u53F7\uFF0C\u8FD9\u6837\u6587\u672C\u5F53\u4E2D\u7684\u53D8\u91CF\u5C31\u4E0D\u4F1A\u88AB\u66FF\u6362\u3002</p><p>\u6267\u884C\u8FD9\u4E2A\u811A\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>k8s@kube-node1 ~<span class="token punctuation">]</span>$ <span class="token function">bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
Loaded plugins: fastestmirror
Repository updates is listed <span class="token function">more</span> than once <span class="token keyword">in</span> the configuration
Repository extras is listed <span class="token function">more</span> than once <span class="token keyword">in</span> the configuration
Repository centosplus is listed <span class="token function">more</span> than once <span class="token keyword">in</span> the configuration
Loading mirror speeds from cached hostfile
 * base: mirrors.cn99.com
 * epel: mirrors.aliyun.com
 * extras: mirrors.cn99.com
 * updates: mirrors.aliyun.com
Package epel-release-7-11.noarch already installed and latest version
Package conntrack-tools-1.4.4-3.el7_3.x86_64 already installed and latest version
Package ipvsadm-1.27-7.el7.x86_64 already installed and latest version
Package ipset-6.29-1.el7.x86_64 already installed and latest version
Package jq-1.5-1.el7.x86_64 already installed and latest version
Package sysstat-10.1.5-13.el7.x86_64 already installed and latest version
Package curl-7.29.0-46.el7.x86_64 already installed and latest version
Package iptables-1.4.21-24.1.el7_5.x86_64 already installed and latest version
Package libseccomp-2.3.1-3.el7.x86_64 already installed and latest version
Nothing to <span class="token keyword">do</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
Loaded plugins: fastestmirror
Repository updates is listed <span class="token function">more</span> than once <span class="token keyword">in</span> the configuration
Repository extras is listed <span class="token function">more</span> than once <span class="token keyword">in</span> the configuration
Repository centosplus is listed <span class="token function">more</span> than once <span class="token keyword">in</span> the configuration
Loading mirror speeds from cached hostfile
 * base: mirrors.cn99.com
 * epel: mirrors.aliyun.com
 * extras: mirrors.cn99.com
 * updates: mirrors.163.com
Package epel-release-7-11.noarch already installed and latest version
Package conntrack-tools-1.4.4-3.el7_3.x86_64 already installed and latest version
Package ipvsadm-1.27-7.el7.x86_64 already installed and latest version
Package ipset-6.29-1.el7.x86_64 already installed and latest version
Package jq-1.5-1.el7.x86_64 already installed and latest version
Package sysstat-10.1.5-13.el7.x86_64 already installed and latest version
Package curl-7.29.0-46.el7.x86_64 already installed and latest version
Package iptables-1.4.21-24.1.el7_5.x86_64 already installed and latest version
Package libseccomp-2.3.1-3.el7.x86_64 already installed and latest version
Nothing to <span class="token keyword">do</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
Loaded plugins: fastestmirror
Repository updates is listed <span class="token function">more</span> than once <span class="token keyword">in</span> the configuration
Repository extras is listed <span class="token function">more</span> than once <span class="token keyword">in</span> the configuration
Repository centosplus is listed <span class="token function">more</span> than once <span class="token keyword">in</span> the configuration
Loading mirror speeds from cached hostfile
 * base: mirrors.cn99.com
 * epel: mirrors.aliyun.com
 * extras: mirrors.cn99.com
 * updates: mirrors.aliyun.com
Package epel-release-7-11.noarch already installed and latest version
Package conntrack-tools-1.4.4-3.el7_3.x86_64 already installed and latest version
Package ipvsadm-1.27-7.el7.x86_64 already installed and latest version
Package ipset-6.29-1.el7.x86_64 already installed and latest version
Package jq-1.5-1.el7.x86_64 already installed and latest version
Package sysstat-10.1.5-13.el7.x86_64 already installed and latest version
Package curl-7.29.0-46.el7.x86_64 already installed and latest version
Package iptables-1.4.21-24.1.el7_5.x86_64 already installed and latest version
Package libseccomp-2.3.1-3.el7.x86_64 already installed and latest version
Nothing to <span class="token keyword">do</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>\u56E0\u4E3A\u5DF2\u7ECF\u88C5\u8FC7\u4E86\uFF0C\u6240\u4EE5\u4F1A\u62A5\u6CA1\u4EC0\u4E48\u53EF\u88C5\u7684\u3002</p><h2 id="_8-\u5173\u95ED\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#_8-\u5173\u95ED\u9632\u706B\u5899" aria-hidden="true">#</a> 8\uFF0C\u5173\u95ED\u9632\u706B\u5899</h2><p>\u5C06\u65B0\u5185\u5BB9\u5BFC\u5165\u5230\u5BF9\u5E94\u811A\u672C\uFF0C\u800C\u540E\u5C31\u8FD9\u6837\uFF0C\u4E00\u52B3\u6C38\u9038\u7684\uFF0C\u4E00\u6B65\u4E00\u6B65\u642D\u5EFA\u4E0B\u53BB\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    ssh root@\${node_ip} &quot;systemctl stop firewalld &amp;&amp; systemctl disable firewalld&quot;
    ssh root@\${node_ip} &quot;iptables -F &amp;&amp; sudo iptables -X &amp;&amp; sudo iptables -F -t nat &amp;&amp; sudo iptables -X -t nat &amp;&amp; iptables -P FORWARD ACCEPT&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_9-\u5173\u95ED-swap-\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_9-\u5173\u95ED-swap-\u5206\u533A" aria-hidden="true">#</a> 9\uFF0C\u5173\u95ED swap \u5206\u533A</h2><p>\u5982\u679C\u5F00\u542F\u4E86 swap \u5206\u533A\uFF0Ckubelet \u4F1A\u542F\u52A8\u5931\u8D25 (\u53EF\u4EE5\u901A\u8FC7\u5C06\u53C2\u6570 \u2013fail-swap-on \u8BBE\u7F6E\u4E3A false \u6765\u5FFD\u7565 swap on)\uFF0C\u6545\u9700\u8981\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u5173\u95ED swap \u5206\u533A\uFF0C\u4E3A\u4E86\u9632\u6B62\u5F00\u673A\u81EA\u52A8\u6302\u8F7D swap \u5206\u533A\uFF0C\u4E5F\u8981\u6CE8\u91CA /etc/fstab \u4E2D\u76F8\u5E94\u7684\u6761\u76EE\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    ssh root@\${node_ip} &quot;swapoff -a &amp;&amp; sed -i &#39;/ swap / s/^\\(.*\\)$/#\\1/g&#39; /etc/fstab&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_10-\u5173\u95ED-selinux" tabindex="-1"><a class="header-anchor" href="#_10-\u5173\u95ED-selinux" aria-hidden="true">#</a> 10\uFF0C\u5173\u95ED SELinux</h2><p>\u5173\u95ED SELinux\uFF0C\u5426\u5219\u540E\u7EED K8S \u6302\u8F7D\u76EE\u5F55\u65F6\u53EF\u80FD\u62A5\u9519 Permission denied\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> setenforce <span class="token number">0</span>
$ <span class="token function">grep</span> SELINUX /etc/selinux/config
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_11-\u52A0\u8F7D\u5185\u6838\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_11-\u52A0\u8F7D\u5185\u6838\u6A21\u5757" aria-hidden="true">#</a> 11\uFF0C\u52A0\u8F7D\u5185\u6838\u6A21\u5757</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    ssh root@\${node_ip} &quot;modprobe br_netfilter &amp;&amp; modprobe ip_vs&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_12-\u8BBE\u7F6E\u7CFB\u7EDF\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_12-\u8BBE\u7F6E\u7CFB\u7EDF\u53C2\u6570" aria-hidden="true">#</a> 12\uFF0C\u8BBE\u7F6E\u7CFB\u7EDF\u53C2\u6570</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kubernetes.conf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
net.bridge.bridge-nf-call-iptables=1
net.bridge.bridge-nf-call-ip6tables=1
net.ipv4.ip_forward=1
net.ipv4.tcp_tw_recycle=0
vm.swappiness=0
vm.overcommit_memory=1
vm.panic_on_oom=0
fs.inotify.max_user_watches=89100
fs.file-max=52706963
fs.nr_open=52706963
net.ipv6.conf.all.disable_ipv6=1
net.netfilter.nf_conntrack_max=2310720
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5206\u53D1\u7ED9\u4E09\u53F0\u4E3B\u673A\uFF0C\u5E76\u52A0\u8F7D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    scp kubernetes.conf root@{node_ip}:/etc/sysctl.d/kubernetes.conf
    ssh root@\${node_ip} &quot;sysctl -p /etc/sysctl.d/kubernetes.conf&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_13-\u5B89\u88C5\u4E00\u4E9B\u57FA\u7840\u5305" tabindex="-1"><a class="header-anchor" href="#_13-\u5B89\u88C5\u4E00\u4E9B\u57FA\u7840\u5305" aria-hidden="true">#</a> 13\uFF0C\u5B89\u88C5\u4E00\u4E9B\u57FA\u7840\u5305</h2><p>\u5B89\u88C5\u51E0\u4E2A\u5E38\u7528\u4F46\u7CFB\u7EDF\u672A\u5FC5\u5B89\u88C5\u7684\u5305\uFF0C\u540C\u65F6\u914D\u7F6E\u4E00\u4E0B\u65F6\u95F4\u540C\u6B65\uFF0C\u5E76\u628A\u65F6\u95F4\u540C\u6B65\u5199\u5165\u5230\u5B9A\u65F6\u4EFB\u52A1\u5F53\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    ssh root@\${node_ip} &#39;yum -y install wget ntpdate lrzsz curl rsync &amp;&amp; ntpdate -u cn.pool.ntp.org &amp;&amp; echo &quot;* * * * * /usr/sbin/ntpdate -u cn.pool.ntp.org &amp;&gt; /dev/null&quot; &gt; /var/spool/cron/root&#39;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_14-\u521B\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_14-\u521B\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> 14\uFF0C\u521B\u5EFA\u76EE\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    ssh root@\${node_ip} &#39;mkdir -p /opt/k8s/bin &amp;&amp; chown -R k8s /opt/k8s &amp;&amp; mkdir -p /etc/kubernetes/cert &amp;&amp; chown -R k8s /etc/kubernetes&#39;
    ssh root@\${node_ip} &#39;mkdir -p /etc/etcd/cert &amp;&amp; chown -R k8s /etc/etcd/cert &amp;&amp; mkdir -p /var/lib/etcd &amp;&amp; chown -R k8s /var/lib/etcd&#39;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_15-\u5206\u53D1\u73AF\u5883\u53D8\u91CF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_15-\u5206\u53D1\u73AF\u5883\u53D8\u91CF\u914D\u7F6E" aria-hidden="true">#</a> 15\uFF0C\u5206\u53D1\u73AF\u5883\u53D8\u91CF\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    scp /opt/k8s/bin/environment.sh k8s@\${node_ip}:/opt/k8s/bin/
    ssh k8s@\${node_ip} &quot;chmod +x /opt/k8s/bin/*&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_16-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_16-\u53C2\u8003" aria-hidden="true">#</a> 16\uFF0C\u53C2\u8003</h2>`,60),u=s("\u7CFB\u7EDF\u5185\u6838\u76F8\u5173\u53C2\u6570\u53C2\u8003\uFF1A"),d={href:"https://docs.openshift.com/enterprise/3.2/admin_guide/overcommit.html",target:"_blank",rel:"noopener noreferrer"},m=s("https://docs.openshift.com/enterprise/3.2/admin_guide/overcommit.html");function k(h,g){const a=e("ExternalLinkIcon");return p(),l(o,null,[b,n("ul",null,[n("li",null,[u,n("a",d,[m,r(a)])])])],64)}var f=i(c,[["render",k]]);export{f as default};
