import{e as s}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<p>\u672C\u6587\u6863\u4ECB\u7ECD\u90E8\u7F72\u9AD8\u53EF\u7528 kube-scheduler \u96C6\u7FA4\u7684\u6B65\u9AA4\u3002</p><p>\u8BE5\u96C6\u7FA4\u5305\u542B 3 \u4E2A\u8282\u70B9\uFF0C\u542F\u52A8\u540E\u5C06\u901A\u8FC7\u7ADE\u4E89\u9009\u4E3E\u673A\u5236\u4EA7\u751F\u4E00\u4E2A leader \u8282\u70B9\uFF0C\u5176\u5B83\u8282\u70B9\u4E3A\u963B\u585E\u72B6\u6001\u3002\u5F53 leader \u8282\u70B9\u4E0D\u53EF\u7528\u540E\uFF0C\u5269\u4F59\u8282\u70B9\u5C06\u518D\u6B21\u8FDB\u884C\u9009\u4E3E\u4EA7\u751F\u65B0\u7684 leader \u8282\u70B9\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u670D\u52A1\u7684\u53EF\u7528\u6027\u3002</p><p>\u4E3A\u4FDD\u8BC1\u901A\u4FE1\u5B89\u5168\uFF0C\u672C\u6587\u6863\u5148\u751F\u6210 x509 \u8BC1\u4E66\u548C\u79C1\u94A5\uFF0Ckube-scheduler \u5728\u5982\u4E0B\u4E24\u79CD\u60C5\u51B5\u4E0B\u4F7F\u7528\u8BE5\u8BC1\u4E66\uFF1A</p><ul><li>\u4E0E kube-apiserver \u7684\u5B89\u5168\u7AEF\u53E3\u901A\u4FE1;</li><li>\u5728\u5B89\u5168\u7AEF\u53E3 (https\uFF0C10251) \u8F93\u51FA prometheus \u683C\u5F0F\u7684 metrics\uFF1B</li></ul><p>\u914D\u7F6E\u4E4B\u524D\u9700\u8981\u5148\u5B89\u88C5 kubelet,flannel \u7B49\u7EC4\u4EF6\uFF0C\u4E0D\u8FC7\u524D\u8FB9\u5DF2\u7ECF\u5B89\u88C5\uFF0C\u73B0\u5728\u76F4\u63A5\u8FDB\u5165\u914D\u7F6E\u3002</p><h2 id="_1-\u521B\u5EFA-kube-scheduler-\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-kube-scheduler-\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA kube-scheduler \u8BC1\u4E66\u548C\u79C1\u94A5</h2><p>\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-scheduler-csr.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
    &quot;CN&quot;: &quot;system:kube-scheduler&quot;,
    &quot;hosts&quot;: [
      &quot;127.0.0.1&quot;,
      &quot;192.168.106.3&quot;,
      &quot;192.168.106.4&quot;,
      &quot;192.168.106.5&quot;
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
        &quot;O&quot;: &quot;system:kube-scheduler&quot;,
        &quot;OU&quot;: &quot;4Paradigm&quot;
      }
    ]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul><li>hosts \u5217\u8868\u5305\u542B\u6240\u6709 kube-scheduler \u8282\u70B9 IP\uFF1B</li><li>CN \u4E3A system:kube-scheduler\u3001O \u4E3A system:kube-scheduler\uFF0Ckubernetes \u5185\u7F6E\u7684 ClusterRoleBindings system:kube-scheduler \u5C06\u8D4B\u4E88 kube-scheduler \u5DE5\u4F5C\u6240\u9700\u7684\u6743\u9650\u3002</li></ul><p>\u751F\u6210\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cfssl</span> gencert -ca<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  -ca-key<span class="token operator">=</span>/etc/kubernetes/cert/ca-key.pem <span class="token punctuation">\\</span>
  -config<span class="token operator">=</span>/etc/kubernetes/cert/ca-config.json <span class="token punctuation">\\</span>
  -profile<span class="token operator">=</span>kubernetes kube-scheduler-csr.json <span class="token operator">|</span> cfssljson -bare kube-scheduler
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2-\u521B\u5EFA\u548C\u5206\u53D1-kubeconfig-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u548C\u5206\u53D1-kubeconfig-\u6587\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 kubeconfig \u6587\u4EF6</h2><p>kubeconfig \u6587\u4EF6\u5305\u542B\u8BBF\u95EE apiserver \u7684\u6240\u6709\u4FE1\u606F\uFF0C\u5982 apiserver \u5730\u5740\u3001CA \u8BC1\u4E66\u548C\u81EA\u8EAB\u4F7F\u7528\u7684\u8BC1\u4E66\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$source</span> /opt/k8s/bin/environment.sh
<span class="token variable">$kubectl</span> config set-cluster kubernetes <span class="token punctuation">\\</span>
  --certificate-authority<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --server<span class="token operator">=</span><span class="token variable">\${KUBE_APISERVER}</span> <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-scheduler.kubeconfig
<span class="token variable">$kubectl</span> config set-credentials system:kube-scheduler <span class="token punctuation">\\</span>
  --client-certificate<span class="token operator">=</span>kube-scheduler.pem <span class="token punctuation">\\</span>
  --client-key<span class="token operator">=</span>kube-scheduler-key.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-scheduler.kubeconfig
<span class="token variable">$kubectl</span> config set-context system:kube-scheduler <span class="token punctuation">\\</span>
  --cluster<span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
  --user<span class="token operator">=</span>system:kube-scheduler <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kube-scheduler.kubeconfig
<span class="token variable">$kubectl</span> config use-context system:kube-scheduler --kubeconfig<span class="token operator">=</span>kube-scheduler.kubeconfig
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>\u4E0A\u4E00\u6B65\u521B\u5EFA\u7684\u8BC1\u4E66\u3001\u79C1\u94A5\u4EE5\u53CA kube-apiserver \u5730\u5740\u88AB\u5199\u5165\u5230 kubeconfig \u6587\u4EF6\u4E2D\uFF1B</li></ul><p>\u5206\u53D1 kubeconfig \u5230\u6240\u6709 master \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp kube-scheduler.kubeconfig k8s@\${node_ip}:/etc/kubernetes/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u521B\u5EFA\u548C\u5206\u53D1-kube-scheduler-systemd-unit-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u548C\u5206\u53D1-kube-scheduler-systemd-unit-\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA\u548C\u5206\u53D1 kube-scheduler systemd unit \u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-scheduler.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=Kubernetes Scheduler
Documentation=https://github.com/GoogleCloudPlatform/kubernetes
[Service]
ExecStart=/opt/k8s/bin/kube-scheduler <span class="token entity" title="\\\\">\\\\</span>
  --address=127.0.0.1 <span class="token entity" title="\\\\">\\\\</span>
  --kubeconfig=/etc/kubernetes/kube-scheduler.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
  --leader-elect=true <span class="token entity" title="\\\\">\\\\</span>
  --alsologtostderr=true <span class="token entity" title="\\\\">\\\\</span>
  --logtostderr=false <span class="token entity" title="\\\\">\\\\</span>
  --log-dir=/var/log/kubernetes <span class="token entity" title="\\\\">\\\\</span>
  --v=2
Restart=on-failure
RestartSec=5
User=k8s
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>--address\uFF1A\u5728 127.0.0.1:10251 \u7AEF\u53E3\u63A5\u6536 http /metrics \u8BF7\u6C42\uFF1Bkube-scheduler \u76EE\u524D\u8FD8\u4E0D\u652F\u6301\u63A5\u6536 https \u8BF7\u6C42\uFF1B</li><li>--kubeconfig\uFF1A\u6307\u5B9A kubeconfig \u6587\u4EF6\u8DEF\u5F84\uFF0Ckube-scheduler \u4F7F\u7528\u5B83\u8FDE\u63A5\u548C\u9A8C\u8BC1 kube-apiserver\uFF1B</li><li>--leader-elect=true\uFF1A\u96C6\u7FA4\u8FD0\u884C\u6A21\u5F0F\uFF0C\u542F\u7528\u9009\u4E3E\u529F\u80FD\uFF1B\u88AB\u9009\u4E3A leader \u7684\u8282\u70B9\u8D1F\u8D23\u5904\u7406\u5DE5\u4F5C\uFF0C\u5176\u5B83\u8282\u70B9\u4E3A\u963B\u585E\u72B6\u6001\uFF1B</li><li>User=k8s\uFF1A\u4F7F\u7528 k8s \u8D26\u6237\u8FD0\u884C\uFF1B</li></ul><p>\u5206\u53D1 systemd unit \u6587\u4EF6\u5230\u6240\u6709 master \u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    scp kube-scheduler.service root@\${node_ip}:/etc/systemd/system/
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-\u542F\u52A8-kube-scheduler-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u52A8-kube-scheduler-\u670D\u52A1" aria-hidden="true">#</a> 4\uFF0C\u542F\u52A8 kube-scheduler \u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh root@\${node_ip} &quot;mkdir -p /var/log/kubernetes &amp;&amp; chown -R k8s /var/log/kubernetes&quot;
    ssh root@\${node_ip} &quot;systemctl daemon-reload &amp;&amp; systemctl enable kube-scheduler &amp;&amp; systemctl start kube-scheduler&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_5-\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_5-\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001" aria-hidden="true">#</a> 5\uFF0C\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u72B6\u6001</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh k8s@\${node_ip} &quot;systemctl status kube-scheduler|grep Active&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u770B\u5230\u5982\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$bash</span> magic.sh
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.3
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:31:30 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.4
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:29:32 CST<span class="token punctuation">;</span> 6h ago
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.106.5
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2018</span>-11-23 <span class="token number">18</span>:29:32 CST<span class="token punctuation">;</span> 6h ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5219\u6B63\u5E38\uFF0C\u5982\u679C\u5931\u8D25\uFF0C\u770B\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>journalctl -xu kube-scheduler
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_5-\u67E5\u770B\u8F93\u51FA\u7684-metric" tabindex="-1"><a class="header-anchor" href="#_5-\u67E5\u770B\u8F93\u51FA\u7684-metric" aria-hidden="true">#</a> 5\uFF0C\u67E5\u770B\u8F93\u51FA\u7684 metric</h2><p><code>\u6CE8\u610F\uFF1A\u4EE5\u4E0B\u547D\u4EE4\u5728 kube-scheduler \u8282\u70B9\u4E0A\u6267\u884C\u3002</code></p><p>kube-scheduler \u76D1\u542C 10251 \u7AEF\u53E3\uFF0C\u63A5\u6536 http \u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$sudo</span> <span class="token function">netstat</span> -lnpt<span class="token operator">|</span><span class="token function">grep</span> kube-sche
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:10251         <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">15377</span>/kube-schedule
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$curl</span> -s http://127.0.0.1:10251/metrics <span class="token operator">|</span><span class="token function">head</span>
<span class="token comment"># HELP apiserver_audit_event_total Counter of audit events generated and sent to the audit backend.</span>
<span class="token comment"># TYPE apiserver_audit_event_total counter</span>
apiserver_audit_event_total <span class="token number">0</span>
<span class="token comment"># HELP go_gc_duration_seconds A summary of the GC invocation durations.</span>
<span class="token comment"># TYPE go_gc_duration_seconds summary</span>
go_gc_duration_seconds<span class="token punctuation">{</span>quantile<span class="token operator">=</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">}</span> <span class="token number">6</span>.3423e-05
go_gc_duration_seconds<span class="token punctuation">{</span>quantile<span class="token operator">=</span><span class="token string">&quot;0.25&quot;</span><span class="token punctuation">}</span> <span class="token number">0.000120079</span>
go_gc_duration_seconds<span class="token punctuation">{</span>quantile<span class="token operator">=</span><span class="token string">&quot;0.5&quot;</span><span class="token punctuation">}</span> <span class="token number">0.000146495</span>
go_gc_duration_seconds<span class="token punctuation">{</span>quantile<span class="token operator">=</span><span class="token string">&quot;0.75&quot;</span><span class="token punctuation">}</span> <span class="token number">0.000174475</span>
go_gc_duration_seconds<span class="token punctuation">{</span>quantile<span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span> <span class="token number">0.001807813</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_6-\u67E5\u770B\u5F53\u524D\u7684-leader" tabindex="-1"><a class="header-anchor" href="#_6-\u67E5\u770B\u5F53\u524D\u7684-leader" aria-hidden="true">#</a> 6\uFF0C\u67E5\u770B\u5F53\u524D\u7684 leader</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get endpoints kube-scheduler --namespace<span class="token operator">=</span>kube-system  -o yaml
apiVersion: v1
kind: Endpoints
metadata:
  annotations:
    control-plane.alpha.kubernetes.io/leader: <span class="token string">&#39;{&quot;holderIdentity&quot;:&quot;kube-node2_aa57b017-ef0a-11e8-aaf2-5254001a681e&quot;,&quot;leaseDurationSeconds&quot;:15,&quot;acquireTime&quot;:&quot;2018-11-23T10:31:09Z&quot;,&quot;renewTime&quot;:&quot;2018-11-23T17:05:31Z&quot;,&quot;leaderTransitions&quot;:1}&#39;</span>
  creationTimestamp: <span class="token number">2018</span>-11-23T10:29:32Z
  name: kube-scheduler
  namespace: kube-system
  resourceVersion: <span class="token string">&quot;30835&quot;</span>
  selfLink: /api/v1/namespaces/kube-system/endpoints/kube-scheduler
  uid: aabb2233-ef0a-11e8-9670-525400c7ba97
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u53EF\u89C1\uFF0C\u5F53\u524D\u7684 leader \u4E3A kube-node2 \u8282\u70B9\u3002</p><h2 id="_7-\u6D4B\u8BD5-kube-scheduler-\u96C6\u7FA4\u7684\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#_7-\u6D4B\u8BD5-kube-scheduler-\u96C6\u7FA4\u7684\u9AD8\u53EF\u7528" aria-hidden="true">#</a> 7\uFF0C\u6D4B\u8BD5 kube-scheduler \u96C6\u7FA4\u7684\u9AD8\u53EF\u7528</h2><p>\u968F\u4FBF\u627E\u4E00\u4E2A\u6216\u4E24\u4E2A master \u8282\u70B9\uFF0C\u505C\u6389 kube-scheduler \u670D\u52A1\uFF0C\u770B\u5176\u5B83\u8282\u70B9\u662F\u5426\u83B7\u53D6\u4E86 leader \u6743\u9650\uFF08systemd \u65E5\u5FD7\uFF09\u3002</p><p>\u73B0\u5728\u5C31\u53BB\u505C\u6389 kube-node2 \u4E0A\u7684 kube-scheduler \u670D\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$systemctl</span> stop kube-scheduler
<span class="token variable">$systemctl</span> status kube-scheduler <span class="token operator">|</span> <span class="token function">grep</span> Active
   Active: inactive <span class="token punctuation">(</span>dead<span class="token punctuation">)</span> since Sat <span class="token number">2018</span>-11-24 01:06:40 CST<span class="token punctuation">;</span> 14s ago
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7136\u540E\u518D\u6765\u67E5\u770B\u4E00\u4E0B\u73B0\u5728\u7684 leader \u662F\u8C01\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get endpoints kube-scheduler --namespace<span class="token operator">=</span>kube-system  -o yaml
apiVersion: v1
kind: Endpoints
metadata:
  annotations:
    control-plane.alpha.kubernetes.io/leader: <span class="token string">&#39;{&quot;holderIdentity&quot;:&quot;kube-node3_aa9017f9-ef0a-11e8-b73d-525400b42484&quot;,&quot;leaseDurationSeconds&quot;:15,&quot;acquireTime&quot;:&quot;2018-11-23T17:06:57Z&quot;,&quot;renewTime&quot;:&quot;2018-11-23T17:07:31Z&quot;,&quot;leaderTransitions&quot;:2}&#39;</span>
  creationTimestamp: <span class="token number">2018</span>-11-23T10:29:32Z
  name: kube-scheduler
  namespace: kube-system
  resourceVersion: <span class="token string">&quot;30984&quot;</span>
  selfLink: /api/v1/namespaces/kube-system/endpoints/kube-scheduler
  uid: aabb2233-ef0a-11e8-9670-525400c7ba97
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5DF2\u7ECF\u6F02\u79FB\u5230\u4E86 kube-node3 \u4E0A\u53BB\u4E86\u3002</p>`,45);function p(r,t){return e}var c=n(a,[["render",p]]);export{c as default};
