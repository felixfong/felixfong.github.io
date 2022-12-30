import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>docker \u662F\u5BB9\u5668\u7684\u8FD0\u884C\u73AF\u5883\uFF0C\u7BA1\u7406\u5B83\u7684\u751F\u547D\u5468\u671F\u3002kubelet \u901A\u8FC7 Container Runtime Interface (CRI) \u4E0E docker \u8FDB\u884C\u4EA4\u4E92\u3002</p><h2 id="_1-\u4E0B\u8F7D\u548C\u5206\u53D1-docker-\u4E8C\u8FDB\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u548C\u5206\u53D1-docker-\u4E8C\u8FDB\u5236\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u4E0B\u8F7D\u548C\u5206\u53D1 docker \u4E8C\u8FDB\u5236\u6587\u4EF6</h2><p>\u5230 https://download.docker.com/linux/static/stable/x86_64/ \u9875\u9762\u4E0B\u8F7D\u6700\u65B0\u53D1\u5E03\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz
<span class="token function">tar</span> -xvf docker-18.03.1-ce.tgz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5206\u53D1\u4E8C\u8FDB\u5236\u6587\u4EF6\u5230\u6240\u6709 worker \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp docker/docker*  k8s@\${node_ip}:/opt/k8s/bin/
    ssh k8s@\${node_ip} &quot;chmod +x /opt/k8s/bin/*&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_2-\u521B\u5EFA\u548C\u5206\u53D1-systemd-unit-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u548C\u5206\u53D1-systemd-unit-\u6587\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 systemd unit \u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> docker.service <span class="token operator">&lt;&lt;</span><span class="token string">&quot;EOF&quot;
[Unit]
Description=Docker Application Container Engine
Documentation=http://docs.docker.io
[Service]
Environment=&quot;PATH=/opt/k8s/bin:/bin:/sbin:/usr/bin:/usr/sbin&quot;
EnvironmentFile=-/run/flannel/docker
ExecStart=/opt/k8s/bin/dockerd --log-level=error $DOCKER_NETWORK_OPTIONS
ExecReload=/bin/kill -s HUP $MAINPID
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li><p>EOF \u524D\u540E\u6709\u53CC\u5F15\u53F7\uFF0C\u8FD9\u6837 bash \u4E0D\u4F1A\u66FF\u6362\u6587\u6863\u4E2D\u7684\u53D8\u91CF\uFF0C\u5982 $DOCKER_NETWORK_OPTIONS\uFF1B</p></li><li><p>dockerd \u8FD0\u884C\u65F6\u4F1A\u8C03\u7528\u5176\u5B83 docker \u547D\u4EE4\uFF0C\u5982 docker-proxy\uFF0C\u6240\u4EE5\u9700\u8981\u5C06 docker \u547D\u4EE4\u6240\u5728\u7684\u76EE\u5F55\u52A0\u5230 PATH \u73AF\u5883\u53D8\u91CF\u4E2D\uFF1B</p></li><li><p>flanneld \u542F\u52A8\u65F6\u5C06\u7F51\u7EDC\u914D\u7F6E\u5199\u5165 /run/flannel/docker \u6587\u4EF6\u4E2D\uFF0Cdockerd \u542F\u52A8\u524D\u8BFB\u53D6\u8BE5\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF DOCKER_NETWORK_OPTIONS \uFF0C\u7136\u540E\u8BBE\u7F6E docker0 \u7F51\u6865\u7F51\u6BB5\uFF1B</p></li><li><p>\u5982\u679C\u6307\u5B9A\u4E86\u591A\u4E2A EnvironmentFile \u9009\u9879\uFF0C\u5219\u5FC5\u987B\u5C06 /run/flannel/docker \u653E\u5728\u6700\u540E (\u786E\u4FDD docker0 \u4F7F\u7528 flanneld \u751F\u6210\u7684 bip \u53C2\u6570)\uFF1B</p></li><li><p>docker \u9700\u8981\u4EE5 root \u7528\u4E8E\u8FD0\u884C\uFF1B</p></li><li><p>docker \u4ECE 1.13 \u7248\u672C\u5F00\u59CB\uFF0C\u53EF\u80FD\u5C06 iptables FORWARD chain \u7684\u9ED8\u8BA4\u7B56\u7565\u8BBE\u7F6E\u4E3A DROP\uFF0C\u4ECE\u800C\u5BFC\u81F4 ping \u5176\u5B83 Node \u4E0A\u7684 Pod IP \u5931\u8D25\uFF0C\u9047\u5230\u8FD9\u79CD\u60C5\u51B5\u65F6\uFF0C\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u7B56\u7565\u4E3A ACCEPT\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> iptables -P FORWARD ACCEPT
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5E76\u4E14\u628A\u4EE5\u4E0B\u547D\u4EE4\u5199\u5165 /etc/rc.local \u6587\u4EF6\u4E2D\uFF0C\u9632\u6B62\u8282\u70B9\u91CD\u542F iptables FORWARD chain \u7684\u9ED8\u8BA4\u7B56\u7565\u53C8\u8FD8\u539F\u4E3A DROP</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> /sbin/iptables -P FORWARD ACCEPT
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><p>\u5206\u53D1 systemd unit \u6587\u4EF6\u5230\u6240\u6709 worker \u673A\u5668:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp docker.service root@\${node_ip}:/etc/systemd/system/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u914D\u7F6E\u548C\u5206\u53D1-docker-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E\u548C\u5206\u53D1-docker-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u914D\u7F6E\u548C\u5206\u53D1 docker \u914D\u7F6E\u6587\u4EF6</h2><p>\u4F7F\u7528\u56FD\u5185\u7684\u4ED3\u5E93\u955C\u50CF\u670D\u52A1\u5668\u4EE5\u52A0\u5FEB pull image \u7684\u901F\u5EA6\uFF0C\u540C\u65F6\u589E\u52A0\u4E0B\u8F7D\u7684\u5E76\u53D1\u6570 (\u9700\u8981\u91CD\u542F dockerd \u751F\u6548)\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> docker-daemon.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
    &quot;registry-mirrors&quot;: [&quot;https://hub-mirror.c.163.com&quot;, &quot;https://docker.mirrors.ustc.edu.cn&quot;],
    &quot;max-concurrent-downloads&quot;: 20
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5206\u53D1 docker \u914D\u7F6E\u6587\u4EF6\u5230\u6240\u6709 work \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;mkdir -p  /etc/docker/&quot;
    scp docker-daemon.json root@\${node_ip}:/etc/docker/daemon.json
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_4-\u542F\u52A8-docker-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u52A8-docker-\u670D\u52A1" aria-hidden="true">#</a> 4\uFF0C\u542F\u52A8 docker \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;systemctl stop firewalld &amp;&amp; systemctl disable firewalld&quot;
    ssh root@\${node_ip} &quot;/usr/sbin/iptables -F &amp;&amp; /usr/sbin/iptables -X &amp;&amp; /usr/sbin/iptables -F -t nat &amp;&amp; /usr/sbin/iptables -X -t nat&quot;
    ssh root@\${node_ip} &quot;/usr/sbin/iptables -P FORWARD ACCEPT&quot;
    ssh root@\${node_ip} &quot;systemctl daemon-reload &amp;&amp; systemctl enable docker &amp;&amp; systemctl start docker&quot;
    ssh root@\${node_ip} &#39;for intf in /sys/devices/virtual/net/docker0/brif/*; do echo 1 &gt; $intf/hairpin_mode; done&#39;
    ssh root@\${node_ip} &quot;sudo sysctl -p /etc/sysctl.d/kubernetes.conf&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>\u5173\u95ED firewalld(centos7)/ufw(ubuntu16.04)\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u91CD\u590D\u521B\u5EFA iptables \u89C4\u5219\uFF1B</li><li>\u6E05\u7406\u65E7\u7684 iptables rules \u548C chains \u89C4\u5219\uFF1B</li><li>\u5F00\u542F docker0 \u7F51\u6865\u4E0B\u865A\u62DF\u7F51\u5361\u7684 hairpin \u6A21\u5F0F;</li></ul><h2 id="_5-\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_5-\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001" aria-hidden="true">#</a> 5\uFF0C\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh k8s@\${node_ip} &quot;systemctl status docker|grep Active&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:51:54 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:51:54 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:51:54 CST<span class="token punctuation">;</span> 6h ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5219\u6B63\u5E38\uFF0C\u5982\u679C\u542F\u52A8\u5931\u8D25\uFF0C\u5219\u68C0\u67E5\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ journalctl -xu docker
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_6-\u68C0\u67E5-docker0-\u7F51\u6865" tabindex="-1"><a class="header-anchor" href="#_6-\u68C0\u67E5-docker0-\u7F51\u6865" aria-hidden="true">#</a> 6\uFF0C\u68C0\u67E5 docker0 \u7F51\u6865</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh k8s@\${node_ip} &quot;/usr/sbin/ip addr show flannel.1 &amp;&amp; /usr/sbin/ip addr show docker0&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
<span class="token number">3</span>: flannel.1: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1450</span> qdisc noqueue state UNKNOWN group default
    link/ether b2:29:a7:da:fa:d8 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.30</span>.84.0/32 scope global flannel.1
       valid_lft forever preferred_lft forever
<span class="token number">4</span>: docker0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1450</span> qdisc noqueue state UP group default
    link/ether 02:42:fc:9f:7d:c9 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.30</span>.84.1/24 brd <span class="token number">172.30</span>.84.255 scope global docker0
       valid_lft forever preferred_lft forever
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
<span class="token number">3</span>: flannel.1: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1450</span> qdisc noqueue state UNKNOWN group default
    link/ether f2:14:20:50:4f:af brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.30</span>.8.0/32 scope global flannel.1
       valid_lft forever preferred_lft forever
<span class="token number">4</span>: docker0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1450</span> qdisc noqueue state UP group default
    link/ether 02:42:a1:25:5f:c9 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.30</span>.8.1/24 brd <span class="token number">172.30</span>.8.255 scope global docker0
       valid_lft forever preferred_lft forever
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
<span class="token number">3</span>: flannel.1: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1450</span> qdisc noqueue state UNKNOWN group default
    link/ether b2:fe:60:ff:53:be brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.30</span>.29.0/32 scope global flannel.1
       valid_lft forever preferred_lft forever
<span class="token number">4</span>: docker0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1450</span> qdisc noqueue state UP group default
    link/ether 02:42:a1:8a:c7:9c brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.30</span>.29.1/24 brd <span class="token number">172.30</span>.29.255 scope global docker0
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u786E\u8BA4\u5404 work \u8282\u70B9\u7684 docker0 \u7F51\u6865\u548C flannel.1 \u63A5\u53E3\u7684 IP \u5904\u4E8E\u540C\u4E00\u4E2A\u7F51\u6BB5\u4E2D\uFF0C\u5982\u4E0A kube-node1 \u8282\u70B9\u7684 172.30.84.0 \u548C 172.30.84.1\u3002</p>`,30);function r(p,l){return e}var c=s(a,[["render",r]]);export{c as default};
