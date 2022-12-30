import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u672C\u6587\u6863\u4F7F\u7528 daemonset \u9A8C\u8BC1 master \u548C worker \u8282\u70B9\u662F\u5426\u5DE5\u4F5C\u6B63\u5E38\u3002</p><h2 id="_1-\u68C0\u67E5\u8282\u70B9\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_1-\u68C0\u67E5\u8282\u70B9\u72B6\u6001" aria-hidden="true">#</a> 1\uFF0C\u68C0\u67E5\u8282\u70B9\u72B6\u6001</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get nodes
NAME         STATUS    ROLES     AGE       VERSION
kube-node1   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    3h        v1.10.4
kube-node2   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    3h        v1.10.4
kube-node3   Ready     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>    3h        v1.10.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u90FD\u4E3A Ready \u65F6\u6B63\u5E38\u3002</p><h2 id="_2-\u521B\u5EFA\u6D4B\u8BD5\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u6D4B\u8BD5\u6587\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u6D4B\u8BD5\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&gt;</span> nginx-ds.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: v1
kind: Service
metadata:
  name: nginx-ds
  labels:
    app: nginx-ds
spec:
  type: NodePort
  selector:
    app: nginx-ds
  ports:
  - name: http
    port: 80
    targetPort: 80
---
apiVersion: extensions/v1beta1
kind: DaemonSet
metadata:
  name: nginx-ds
  labels:
    addonmanager.kubernetes.io/mode: Reconcile
spec:
  template:
    metadata:
      labels:
        app: nginx-ds
    spec:
      containers:
      - name: my-nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="_2-\u6267\u884C\u5B9A\u4E49\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u6267\u884C\u5B9A\u4E49\u6587\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u6267\u884C\u5B9A\u4E49\u6587\u4EF6</h2><p>\u542F\u52A8\u4E4B\u524D\uFF0C\u53EF\u4EE5\u5148\u5C06\u4E0A\u8FB9\u5B9A\u4E49\u7684\u955C\u50CF pull \u4E0B\u6765\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl create -f nginx-ds.yml
<span class="token function">service</span> <span class="token string">&quot;nginx-ds&quot;</span> created
daemonset.extensions <span class="token string">&quot;nginx-ds&quot;</span> created
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-\u68C0\u67E5\u5404-node-\u4E0A\u7684-pod-ip-\u8FDE\u901A\u6027" tabindex="-1"><a class="header-anchor" href="#_3-\u68C0\u67E5\u5404-node-\u4E0A\u7684-pod-ip-\u8FDE\u901A\u6027" aria-hidden="true">#</a> 3\uFF0C\u68C0\u67E5\u5404 Node \u4E0A\u7684 Pod IP \u8FDE\u901A\u6027</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get pods  -o wide<span class="token operator">|</span><span class="token function">grep</span> nginx-ds
nginx-ds-bw72r                      <span class="token number">1</span>/1       Running   <span class="token number">0</span>          6h        <span class="token number">172.30</span>.29.2   kube-node3
nginx-ds-fbx76                      <span class="token number">1</span>/1       Running   <span class="token number">0</span>          6h        <span class="token number">172.30</span>.84.2   kube-node1
nginx-ds-jbjzg                      <span class="token number">1</span>/1       Running   <span class="token number">0</span>          6h        <span class="token number">172.30</span>.8.2    kube-node2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u53EF\u89C1\uFF0Cnginx-ds \u7684 Pod IP \u5206\u522B\u662F 172.30.84.2\u3001172.30.8.2\u3001172.30.29.2\uFF0C\u5728\u6240\u6709 Node \u4E0A\u5206\u522B ping \u8FD9\u4E09\u4E2A IP\uFF0C\u770B\u662F\u5426\u8FDE\u901A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh \${node_ip} &quot;ping -c 1 172.30.84.2&quot;
    ssh \${node_ip} &quot;ping -c 1 172.30.8.2&quot;
    ssh \${node_ip} &quot;ping -c 1 172.30.29.2&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_4-\u68C0\u67E5\u670D\u52A1-ip-\u548C\u7AEF\u53E3\u53EF\u8FBE\u6027" tabindex="-1"><a class="header-anchor" href="#_4-\u68C0\u67E5\u670D\u52A1-ip-\u548C\u7AEF\u53E3\u53EF\u8FBE\u6027" aria-hidden="true">#</a> 4\uFF0C\u68C0\u67E5\u670D\u52A1 IP \u548C\u7AEF\u53E3\u53EF\u8FBE\u6027</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$kubectl</span> get svc <span class="token operator">|</span><span class="token function">grep</span> nginx-ds
nginx-ds           NodePort    <span class="token number">10.254</span>.110.153   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:8781/TCP      6h
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u53EF\u89C1\uFF1A</p><ul><li>Service Cluster IP\uFF1A10.254.110.153</li><li>\u670D\u52A1\u7AEF\u53E3\uFF1A80</li><li>NodePort \u7AEF\u53E3\uFF1A8781</li></ul><p>\u5728\u6240\u6709 Node \u4E0A curl Service IP\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh \${node_ip} &quot;curl 10.254.110.153&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u9884\u671F\u8F93\u51FA nginx \u6B22\u8FCE\u9875\u9762\u5185\u5BB9\u3002</p><h2 id="_5-\u68C0\u67E5\u670D\u52A1\u7684-nodeport-\u53EF\u8FBE\u6027" tabindex="-1"><a class="header-anchor" href="#_5-\u68C0\u67E5\u670D\u52A1\u7684-nodeport-\u53EF\u8FBE\u6027" aria-hidden="true">#</a> 5\uFF0C\u68C0\u67E5\u670D\u52A1\u7684 NodePort \u53EF\u8FBE\u6027</h2><p>\u5728\u6240\u6709 Node \u4E0A\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot; 
    ssh \${node_ip} &quot;curl \${node_ip}:8781&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u9884\u671F\u8F93\u51FA nginx \u6B22\u8FCE\u9875\u9762\u5185\u5BB9\u3002</p>`,24);function p(r,l){return e}var b=s(a,[["render",p]]);export{b as default};
