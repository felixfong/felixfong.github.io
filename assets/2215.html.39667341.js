import{e as s}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h2 id="_1-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h2><p>\u5C06\u4E0B\u8F7D\u7684 kubernetes-server-linux-amd64.tar.gz \u89E3\u538B\u540E\uFF0C\u518D\u89E3\u538B\u5176\u4E2D\u7684 kubernetes-src.tar.gz \u6587\u4EF6\u3002</p><p>coredns \u5BF9\u5E94\u7684\u76EE\u5F55\u662F\uFF1Acluster/addons/dns\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$pwd</span>
/home/k8s/k8s/kubernetes/cluster/addons/dns
$ <span class="token function">cp</span> coredns.yaml.base coredns.yaml
<span class="token comment">#\u4FEE\u6539\u7B2C61\u884C\u4EE5\u53CA\u7B2C153\u884C\u7684\u5185\u5BB9\u3002</span>
<span class="token variable">$vim</span> coredns.yaml
<span class="token comment">#\u4FEE\u6539\u540E\u5185\u5BB9\u4E0E\u539F\u5185\u5BB9\u5BF9\u6BD4\u5982\u4E0B\uFF1A</span>
<span class="token variable">$diff</span> coredns.yaml.base coredns.yaml
61c61
<span class="token operator">&lt;</span>         kubernetes __PILLAR__DNS__DOMAIN__ in-addr.arpa ip6.arpa <span class="token punctuation">{</span>
---
<span class="token operator">&gt;</span>         kubernetes cluster.local. in-addr.arpa ip6.arpa <span class="token punctuation">{</span>
153c153
<span class="token operator">&lt;</span>   clusterIP: __PILLAR__DNS__SERVER__
---
<span class="token operator">&gt;</span>   clusterIP: <span class="token number">10.254</span>.0.2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_2-\u521B\u5EFA-coredns" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA-coredns" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA coredns</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl create -f coredns.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_3-\u68C0\u67E5-coredns-\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_3-\u68C0\u67E5-coredns-\u529F\u80FD" aria-hidden="true">#</a> 3\uFF0C \u68C0\u67E5 coredns \u529F\u80FD</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get all -n kube-system
NAME                                        READY     STATUS    RESTARTS   AGE
pod/coredns-77c989547b-j77lp                <span class="token number">1</span>/1       Running   <span class="token number">0</span>          15h
pod/coredns-77c989547b-t6mxc                <span class="token number">1</span>/1       Running   <span class="token number">0</span>          15h
NAME                           TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>         AGE
service/coredns                ClusterIP   <span class="token number">10.254</span>.0.2     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">53</span>/UDP,53/TCP   15h
NAME                                   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/coredns                <span class="token number">2</span>         <span class="token number">2</span>         <span class="token number">2</span>            <span class="token number">2</span>           15h
NAME                                              DESIRED   CURRENT   READY     AGE
replicaset.apps/coredns-77c989547b                <span class="token number">2</span>         <span class="token number">2</span>         <span class="token number">2</span>         15h
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u65B0\u5EFA\u4E00\u4E2A Deployment\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&gt;</span> my-nginx.yaml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: my-nginx
spec:
  replicas: 2
  template:
    metadata:
      labels:
        run: my-nginx
    spec:
      containers:
      - name: my-nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
EOF</span>
$ kubectl create -f my-nginx.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Export \u8BE5 Deployment, \u751F\u6210 <code>my-nginx</code> \u670D\u52A1\uFF1A</p><p>\u521B\u5EFA\u53E6\u4E00\u4E2A <code>Pod</code>\uFF0C\u67E5\u770B <code>/etc/resolv.conf</code> \u662F\u5426\u5305\u542B <code>kubelet</code> \u914D\u7F6E\u7684 <code>--cluster-dns</code> \u548C <code>--cluster-domain</code>\uFF0C\u662F\u5426\u80FD\u591F\u5C06\u670D\u52A1 <code>my-nginx</code> \u89E3\u6790\u5230\u4E0A\u9762\u663E\u793A\u7684 Cluster IP <code>10.254.22.37</code>\u3002</p><p>\u9A8C\u8BC1\u4E00\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl create -f pod-nginx.yaml
$ kubectl <span class="token builtin class-name">exec</span>  nginx -i -t -- /bin/bash
<span class="token variable">$kubectl</span> <span class="token builtin class-name">exec</span> -it nginx <span class="token function">bash</span>
root@nginx:/<span class="token comment"># cat /etc/resolv.conf </span>
nameserver <span class="token number">10.254</span>.0.2
search default.svc.cluster.local. svc.cluster.local. cluster.local.
options ndots:5
root@nginx:/<span class="token comment"># ping my-nginx</span>
PING my-nginx.default.svc.cluster.local <span class="token punctuation">(</span><span class="token number">10.254</span>.22.37<span class="token punctuation">)</span>: <span class="token number">48</span> data bytes
<span class="token number">56</span> bytes from <span class="token number">10.254</span>.22.37: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.118</span> ms
<span class="token number">56</span> bytes from <span class="token number">10.254</span>.22.37: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.085</span> ms
^C--- my-nginx.default.svc.cluster.local <span class="token function">ping</span> statistics ---
<span class="token number">2</span> packets transmitted, <span class="token number">2</span> packets received, <span class="token number">0</span>% packet loss
round-trip min/avg/max/stddev <span class="token operator">=</span> <span class="token number">0.085</span>/0.102/0.118/0.000 ms
root@nginx:/<span class="token comment"># ping kubernetes</span>
PING kubernetes.default.svc.cluster.local <span class="token punctuation">(</span><span class="token number">10.254</span>.0.1<span class="token punctuation">)</span>: <span class="token number">48</span> data bytes
<span class="token number">56</span> bytes from <span class="token number">10.254</span>.0.1: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.111</span> ms
<span class="token number">56</span> bytes from <span class="token number">10.254</span>.0.1: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.098</span> ms
^C--- kubernetes.default.svc.cluster.local <span class="token function">ping</span> statistics ---
<span class="token number">2</span> packets transmitted, <span class="token number">2</span> packets received, <span class="token number">0</span>% packet loss
round-trip min/avg/max/stddev <span class="token operator">=</span> <span class="token number">0.098</span>/0.105/0.111/0.000 ms
root@nginx:/<span class="token comment"># ping coredns.kube-system.svc.cluster.local</span>
PING coredns.kube-system.svc.cluster.local <span class="token punctuation">(</span><span class="token number">10.254</span>.0.2<span class="token punctuation">)</span>: <span class="token number">48</span> data bytes
<span class="token number">56</span> bytes from <span class="token number">10.254</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.120</span> ms
<span class="token number">56</span> bytes from <span class="token number">10.254</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.083</span> ms
^C--- coredns.kube-system.svc.cluster.local <span class="token function">ping</span> statistics ---
<span class="token number">2</span> packets transmitted, <span class="token number">2</span> packets received, <span class="token number">0</span>% packet loss
round-trip min/avg/max/stddev <span class="token operator">=</span> <span class="token number">0.083</span>/0.102/0.120/0.000 ms
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="_4-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_4-\u53C2\u8003" aria-hidden="true">#</a> 4\uFF0C\u53C2\u8003</h2><ul><li>https://community.infoblox.com/t5/Community-Blog/CoreDNS-for-Kubernetes-Service-Discovery/ba-p/8187</li><li>https://coredns.io/2017/03/01/coredns-for-kubernetes-service-discovery-take-2/</li><li>https://www.cnblogs.com/boshen-hzb/p/7511432.html https://github.com/kubernetes/kubernetes/tree/master/cluster/addons/dns</li></ul>`,16);function p(l,r){return e}var o=n(a,[["render",p]]);export{o as default};
