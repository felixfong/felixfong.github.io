import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u672C\u6587\u6863\u8BB2\u89E3\u4F7F\u7528 keepalived \u548C haproxy \u5B9E\u73B0 kube-apiserver \u9AD8\u53EF\u7528\u7684\u6B65\u9AA4\uFF1A</p><ul><li>keepalived \u63D0\u4F9B kube-apiserver \u5BF9\u5916\u670D\u52A1\u7684 VIP\uFF1B</li><li>haproxy \u76D1\u542C VIP\uFF0C\u540E\u7AEF\u8FDE\u63A5\u6240\u6709 kube-apiserver \u5B9E\u4F8B\uFF0C\u63D0\u4F9B\u5065\u5EB7\u68C0\u67E5\u548C\u8D1F\u8F7D\u5747\u8861\u529F\u80FD\uFF1B</li></ul><p>\u8FD0\u884C keepalived \u548C haproxy \u7684\u8282\u70B9\u79F0\u4E3A LB \u8282\u70B9\u3002\u7531\u4E8E keepalived \u662F\u4E00\u4E3B\u591A\u5907\u8FD0\u884C\u6A21\u5F0F\uFF0C\u6545\u81F3\u5C11\u4E24\u4E2A LB \u8282\u70B9\u3002</p><p>\u672C\u6587\u6863\u590D\u7528 master \u8282\u70B9\u7684\u4E09\u53F0\u673A\u5668\uFF0Chaproxy \u76D1\u542C\u7684\u7AEF\u53E3 (8443) \u9700\u8981\u4E0E kube-apiserver \u7684\u7AEF\u53E3 6443 \u4E0D\u540C\uFF0C\u907F\u514D\u51B2\u7A81\u3002</p><p>keepalived \u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u5468\u671F\u68C0\u67E5\u672C\u673A\u7684 haproxy \u8FDB\u7A0B\u72B6\u6001\uFF0C\u5982\u679C\u68C0\u6D4B\u5230 haproxy \u8FDB\u7A0B\u5F02\u5E38\uFF0C\u5219\u89E6\u53D1\u91CD\u65B0\u9009\u4E3B\u7684\u8FC7\u7A0B\uFF0CVIP \u5C06\u98D8\u79FB\u5230\u65B0\u9009\u51FA\u6765\u7684\u4E3B\u8282\u70B9\uFF0C\u4ECE\u800C\u5B9E\u73B0 VIP \u7684\u9AD8\u53EF\u7528\u3002</p><p>\u6240\u6709\u7EC4\u4EF6\uFF08\u5982 kubeclt\u3001apiserver\u3001controller-manager\u3001scheduler \u7B49\uFF09\u90FD\u901A\u8FC7 VIP \u548C haproxy \u76D1\u542C\u7684 8443 \u7AEF\u53E3\u8BBF\u95EE kube-apiserver \u670D\u52A1\u3002</p><h2 id="_1-\u5B89\u88C5\u8F6F\u4EF6\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u8F6F\u4EF6\u5305" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5\u8F6F\u4EF6\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;yum install -y keepalived haproxy&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_2-\u914D\u7F6E\u548C\u4E0B\u53D1-haproxy-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E\u548C\u4E0B\u53D1-haproxy-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u914D\u7F6E\u548C\u4E0B\u53D1 haproxy \u914D\u7F6E\u6587\u4EF6</h2><p>haproxy \u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> haproxy.cfg <span class="token operator">&lt;&lt;</span><span class="token string">EOF
global
    log /dev/log local0
    log /dev/log local1 notice
    chroot /var/lib/haproxy
    stats socket /var/run/haproxy-admin.sock mode 660 level admin
    stats timeout 30s
    user haproxy
    group haproxy
    daemon
    nbproc 1
defaults
    log global
    timeout connect 5000
    timeout client 10m
    timeout server 10m
listen admin_stats
    bind 0.0.0.0:10080
    mode http
    log 127.0.0.1 local0 err
    stats refresh 30s
    stats uri /status
    stats realm welcome login\\ Haproxy
    stats auth admin:123456
    stats hide-version
    stats admin if TRUE
listen kube-master
    bind 0.0.0.0:8443
    mode tcp
    option tcplog
    balance source
    server 192.168.106.3 192.168.106.3:6443 check inter 2000 fall 2 rise 2 weight 1
    server 192.168.106.4 192.168.106.4:6443 check inter 2000 fall 2 rise 2 weight 1
    server 192.168.106.5 192.168.106.5:6443 check inter 2000 fall 2 rise 2 weight 1
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u6CE8\u610F\u66F4\u6539\u5176\u4E2D\u7684 ip \u4E0E\u81EA\u5DF1\u7684\u4E00\u81F4\u3002</p><ul><li>haproxy \u5728 10080 \u7AEF\u53E3\u8F93\u51FA status \u4FE1\u606F\uFF1B</li><li>haproxy \u76D1\u542C\u6240\u6709\u63A5\u53E3\u7684 8443 \u7AEF\u53E3\uFF0C\u8BE5\u7AEF\u53E3\u4E0E\u73AF\u5883\u53D8\u91CF \${KUBE_APISERVER} \u6307\u5B9A\u7684\u7AEF\u53E3\u5FC5\u987B\u4E00\u81F4\uFF1B</li><li>server \u5B57\u6BB5\u5217\u51FA\u6240\u6709 kube-apiserver \u76D1\u542C\u7684 IP \u548C\u7AEF\u53E3\uFF1B</li></ul><p>\u4E0B\u53D1 haproxy.cfg \u5230\u6240\u6709 master \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp haproxy.cfg root@\${node_ip}:/etc/haproxy
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u8D77-haproxy-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-\u8D77-haproxy-\u670D\u52A1" aria-hidden="true">#</a> 3\uFF0C\u8D77 haproxy \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;systemctl restart haproxy&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-\u68C0\u67E5-haproxy-\u670D\u52A1\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_4-\u68C0\u67E5-haproxy-\u670D\u52A1\u72B6\u6001" aria-hidden="true">#</a> 4\uFF0C\u68C0\u67E5 haproxy \u670D\u52A1\u72B6\u6001</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;systemctl status haproxy|grep Active&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u770B\u5230\u5982\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">17</span>:45:33 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">17</span>:45:33 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">17</span>:45:34 CST<span class="token punctuation">;</span> 6h ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5219\u8BF4\u660E\u6B63\u5E38\uFF0C\u5982\u679C\u5931\u8D25\uFF0C\u7528\u5982\u4E0B\u547D\u4EE4\u68C0\u67E5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>journalctl -xu haproxy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u68C0\u67E5 haproxy \u662F\u5426\u76D1\u542C 8443 \u7AEF\u53E3\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;netstat -lnpt|grep haproxy&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:8443            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">12672</span>/haproxy
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:10080           <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">12672</span>/haproxy
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:8443            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">10172</span>/haproxy
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:10080           <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">10172</span>/haproxy
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:8443            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">10333</span>/haproxy
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:10080           <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">10333</span>/haproxy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_5-\u914D\u7F6E\u548C\u4E0B\u53D1-keepalived-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u914D\u7F6E\u548C\u4E0B\u53D1-keepalived-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 5\uFF0C\u914D\u7F6E\u548C\u4E0B\u53D1 keepalived \u914D\u7F6E\u6587\u4EF6</h2><p>keepalived \u662F\u4E00\u4E3B\uFF08master\uFF09\u591A\u5907\uFF08backup\uFF09\u8FD0\u884C\u6A21\u5F0F\uFF0C\u6545\u6709\u4E24\u79CD\u7C7B\u578B\u7684\u914D\u7F6E\u6587\u4EF6\u3002master \u914D\u7F6E\u6587\u4EF6\u53EA\u6709\u4E00\u4EFD\uFF0Cbackup \u914D\u7F6E\u6587\u4EF6\u89C6\u8282\u70B9\u6570\u76EE\u800C\u5B9A\uFF0C\u5BF9\u4E8E\u672C\u6587\u6863\u800C\u8A00\uFF0C\u89C4\u5212\u5982\u4E0B\uFF1A</p><ul><li>master: 192.168.106.3</li><li>backup\uFF1A192.168.106.4\uFF0C192.168.106.5</li></ul><p><code>master \u914D\u7F6E\u6587\u4EF6\uFF1A</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span>  <span class="token operator">&gt;</span> keepalived-master.conf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
global_defs {
    router_id lb-master-105
}
vrrp_script check-haproxy {
    script &quot;killall -0 haproxy&quot;
    interval 5
    weight -30
}
vrrp_instance VI-kube-master {
    state MASTER
    priority 120
    dont_track_primary
    interface <span class="token variable">\${VIP_IF}</span>
    virtual_router_id 68
    advert_int 3
    track_script {
        check-haproxy
    }
    virtual_ipaddress {
        <span class="token variable">\${MASTER_VIP}</span>
    }
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ul><li>VIP \u6240\u5728\u7684\u63A5\u53E3\uFF08interface \${VIP_IF}\uFF09\u4E3A eth0\uFF1B</li><li>\u4F7F\u7528 killall -0 haproxy \u547D\u4EE4\u68C0\u67E5\u6240\u5728\u8282\u70B9\u7684 haproxy \u8FDB\u7A0B\u662F\u5426\u6B63\u5E38\u3002\u5982\u679C\u5F02\u5E38\u5219\u5C06\u6743\u91CD\u51CF\u5C11\uFF08-30\uFF09, \u4ECE\u800C\u89E6\u53D1\u91CD\u65B0\u9009\u4E3B\u8FC7\u7A0B\uFF1B</li><li>router_id\u3001virtual_router_id \u7528\u4E8E\u6807\u8BC6\u5C5E\u4E8E\u8BE5 HA \u7684 keepalived \u5B9E\u4F8B\uFF0C\u5982\u679C\u6709\u591A\u5957 keepalived HA\uFF0C\u5219\u5FC5\u987B\u5404\u4E0D\u76F8\u540C\uFF1B</li></ul><p><code>backup \u914D\u7F6E\u6587\u4EF6\uFF1A</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$cat</span>  <span class="token operator">&gt;</span> keepalived-backup.conf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
global_defs {
    router_id lb-backup-105
}
vrrp_script check-haproxy {
    script &quot;killall -0 haproxy&quot;
    interval 5
    weight -30
}
vrrp_instance VI-kube-master {
    state BACKUP
    priority 110
    dont_track_primary
    interface <span class="token variable">\${VIP_IF}</span>
    virtual_router_id 68
    advert_int 3
    track_script {
        check-haproxy
    }
    virtual_ipaddress {
        <span class="token variable">\${MASTER_VIP}</span>
    }
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ul><li>VIP \u6240\u5728\u7684\u63A5\u53E3\uFF08interface \${VIP_IF}\uFF09\u4E3A eth0\uFF1B</li><li>\u4F7F\u7528 killall -0 haproxy \u547D\u4EE4\u68C0\u67E5\u6240\u5728\u8282\u70B9\u7684 haproxy \u8FDB\u7A0B\u662F\u5426\u6B63\u5E38\u3002\u5982\u679C\u5F02\u5E38\u5219\u5C06\u6743\u91CD\u51CF\u5C11\uFF08-30\uFF09, \u4ECE\u800C\u89E6\u53D1\u91CD\u65B0\u9009\u4E3B\u8FC7\u7A0B\uFF1B</li><li>router_id\u3001virtual_router_id \u7528\u4E8E\u6807\u8BC6\u5C5E\u4E8E\u8BE5 HA \u7684 keepalived \u5B9E\u4F8B\uFF0C\u5982\u679C\u6709\u591A\u5957 keepalived HA\uFF0C\u5219\u5FC5\u987B\u5404\u4E0D\u76F8\u540C\uFF1B</li><li>priority \u7684\u503C\u5FC5\u987B\u5C0F\u4E8E master \u7684\u503C\uFF1B</li></ul><h2 id="_6-\u4E0B\u53D1-keepalived-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_6-\u4E0B\u53D1-keepalived-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 6\uFF0C\u4E0B\u53D1 keepalived \u914D\u7F6E\u6587\u4EF6</h2><p>\u4E0B\u53D1 master \u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> keepalived-master.conf root@kube-node1:/etc/keepalived/keepalived.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0B\u53D1 backup \u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> keepalived-backup.conf root@kube-node2:/etc/keepalived/keepalived.conf
<span class="token function">scp</span> keepalived-backup.conf root@kube-node3:/etc/keepalived/keepalived.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_7-\u8D77-keepalived-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_7-\u8D77-keepalived-\u670D\u52A1" aria-hidden="true">#</a> 7\uFF0C\u8D77 keepalived \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;systemctl restart keepalived&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_8-\u68C0\u67E5-keepalived-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_8-\u68C0\u67E5-keepalived-\u670D\u52A1" aria-hidden="true">#</a> 8\uFF0C\u68C0\u67E5 keepalived \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;systemctl status keepalived|grep Active&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">17</span>:51:56 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">17</span>:51:57 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">17</span>:51:57 CST<span class="token punctuation">;</span> 6h ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5219\u6B63\u5E38\uFF0C\u5982\u679C\u5931\u8D25\uFF0C\u5219\u68C0\u67E5\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>journalctl -xu keepalived
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B VIP \u6240\u5728\u7684\u8282\u70B9\uFF0C\u786E\u4FDD\u53EF\u4EE5 ping \u901A VIP\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh \${node_ip} &quot;/usr/sbin/ip addr show \${VIP_IF}&quot;
    ssh \${node_ip} &quot;ping -c 1 \${MASTER_VIP}&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230 VIP \u76EE\u524D\u5728 kube-node1 \u8282\u70B9\u4E0A\uFF0C\u800C\u4E14\u5404\u4E2A\u8282\u70B9\u4E5F\u90FD\u662F\u901A\u7684\u3002</p><h2 id="_9-\u67E5\u770B-haproxy-\u72B6\u6001\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_9-\u67E5\u770B-haproxy-\u72B6\u6001\u9875\u9762" aria-hidden="true">#</a> 9\uFF0C\u67E5\u770B haproxy \u72B6\u6001\u9875\u9762</h2><p>\u6D4F\u89C8\u5668\u8BBF\u95EE \${MASTER_VIP}:10080/status \u5730\u5740\uFF0C\u67E5\u770B haproxy \u72B6\u6001\u9875\u9762\uFF1A</p><p>\u7528\u6237\u540D\u5BC6\u7801\u5C31\u5728\u521A\u521A\u5B9A\u4E49\u7684 haproxy \u7684\u914D\u7F6E\u5F53\u4E2D\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/ae5da57877ee582d.jpg" alt="image"></p>`,56);function p(r,l){return e}var c=s(a,[["render",p]]);export{c as default};
