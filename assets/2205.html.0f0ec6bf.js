import{e as s}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=s(`<p>kubernetes work \u8282\u70B9\u8FD0\u884C\u5982\u4E0B\u7EC4\u4EF6\uFF1A</p><ul><li>docker</li><li>kubelet</li><li>kube-proxy</li></ul><p>\u5B89\u88C5\u548C\u914D\u7F6E flanneld\uFF0C\u53C2\u8003\u524D\u8FB9\u7684\u914D\u7F6E\u3002</p><h2 id="_1-\u5B89\u88C5\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u4F9D\u8D56\u5305" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5\u4F9D\u8D56\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;yum install -y epel-release&quot;
    ssh root@\${node_ip} &quot;yum install -y conntrack ipvsadm ipset jq iptables curl sysstat libseccomp &amp;&amp; /usr/sbin/modprobe ip_vs &quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,5);function r(p,l){return a}var i=n(e,[["render",r]]);export{i as default};
