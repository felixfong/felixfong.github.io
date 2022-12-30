import{r as e,o as p,c as r,b as n,a as l,F as t,e as s,d as c}from"./app.dbf5d933.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const u={},b=s(`<h2 id="_1-\u5B89\u88C5-dns-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-dns-\u63D2\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5 DNS \u63D2\u4EF6</h2><p>\u5728 Master \u8282\u70B9 \u4E0A\u8FDB\u884C\u5B89\u88C5\u64CD\u4F5C\u3002</p><p>\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cd</span>
<span class="token comment"># wget https://github.com/kubernetes/kubernetes/releases/download/v1.8.6/kubernetes.tar.gz</span>
<span class="token comment"># tar xzvf kubernetes.tar.gz</span>
 
<span class="token comment"># cd /root/kubernetes/cluster/addons/dns</span>
<span class="token comment"># mv  kubedns-svc.yaml.sed kubedns-svc.yaml</span>
 
<span class="token comment">#\u628A\u6587\u4EF6\u4E2D$DNS_SERVER_IP\u66FF\u6362\u621010.254.0.2</span>
<span class="token comment"># sed -i &#39;s/$DNS_SERVER_IP/10.254.0.2/g&#39; ./kubedns-svc.yaml</span>
 
<span class="token comment"># mv ./kubedns-controller.yaml.sed ./kubedns-controller.yaml</span>
 
<span class="token comment">#\u628A$DNS_DOMAIN\u66FF\u6362\u6210cluster.local</span>
<span class="token comment"># sed -i &#39;s/$DNS_DOMAIN/cluster.local/g&#39; ./kubedns-controller.yaml</span>
 
<span class="token comment"># ls *.yaml</span>
kubedns-cm.yaml  kubedns-controller.yaml  kubedns-sa.yaml  kubedns-svc.yaml
 
<span class="token punctuation">[</span>root@master1 dns<span class="token punctuation">]</span><span class="token comment"># kubectl create -f .</span>
configmap <span class="token string">&quot;kube-dns&quot;</span> created
deployment <span class="token string">&quot;kube-dns&quot;</span> created
serviceaccount <span class="token string">&quot;kube-dns&quot;</span> created
<span class="token function">service</span> <span class="token string">&quot;kube-dns&quot;</span> created
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_2-\u90E8\u7F72-dashboard-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u90E8\u7F72-dashboard-\u63D2\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u90E8\u7F72 dashboard \u63D2\u4EF6</h2><p>\u5728 master \u8282\u70B9\u90E8\u7F72</p><p>\u65B0\u589E\u90E8\u7F72\u914D\u7F6E\u6587\u4EF6</p><p>\u9700\u8981 2 \u4E2A\u6587\u4EF6\u3002</p><h3 id="_1-\u6587\u4EF6\u4E00\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u6587\u4EF6\u4E00\u3002" aria-hidden="true">#</a> 1\uFF0C\u6587\u4EF6\u4E00\u3002</h3><p><code>dashboard.yaml</code>\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> cluster<span class="token punctuation">-</span>admin
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> extensions/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
    <span class="token key atrule">kubernetes.io/cluster-service</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
    <span class="token key atrule">addonmanager.kubernetes.io/mode</span><span class="token punctuation">:</span> Reconcile
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
        <span class="token key atrule">scheduler.alpha.kubernetes.io/critical-pod</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
        <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.docker<span class="token punctuation">-</span>cn.com/kubernetesdashboarddev/kubernetes<span class="token punctuation">-</span>dashboard<span class="token punctuation">-</span>amd64<span class="token punctuation">:</span>head
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 100m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 300Mi
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 100m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 100Mi
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">9090</span>
        <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
          <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /
            <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9090</span>
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>
          <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">&quot;CriticalAddonsOnly&quot;</span>
        <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">&quot;Exists&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><h3 id="_2-\u6587\u4EF6\u4E8C\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u6587\u4EF6\u4E8C\u3002" aria-hidden="true">#</a> 2\uFF0C\u6587\u4EF6\u4E8C\u3002</h3><p><code>dashboard-svc.yaml</code>\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
    <span class="token key atrule">kubernetes.io/cluster-service</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
    <span class="token key atrule">addonmanager.kubernetes.io/mode</span><span class="token punctuation">:</span> Reconcile
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9090</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9090</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">8888</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_3-\u5206\u522B\u6267\u884C-2-\u4E2A\u90E8\u7F72\u6587\u4EF6\u8FDB\u884C\u521B\u5EFA\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u5206\u522B\u6267\u884C-2-\u4E2A\u90E8\u7F72\u6587\u4EF6\u8FDB\u884C\u521B\u5EFA\u3002" aria-hidden="true">#</a> 3\uFF0C\u5206\u522B\u6267\u884C 2 \u4E2A\u90E8\u7F72\u6587\u4EF6\u8FDB\u884C\u521B\u5EFA\u3002</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl create -f dashboard.yaml
 
kubectl create -f dashboard-svc.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_4-\u5982\u4F55\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_4-\u5982\u4F55\u8BBF\u95EE" aria-hidden="true">#</a> 4\uFF0C\u5982\u4F55\u8BBF\u95EE\uFF1F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pod -n kube-system -o wide
NAME                                    READY     STATUS              RESTARTS   AGEIP            NODE
kube-dns-778977457c-2rwdj               <span class="token number">0</span>/3       ErrImagePull        <span class="token number">0</span>          1m172.30.24.2   <span class="token number">192.168</span>.106.5
kubernetes-dashboard-8665cd4dfb-jzxg6   <span class="token number">0</span>/1       ContainerCreating   <span class="token number">0</span>          26s<span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">192.168</span>.106.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u9996\u5148\u67E5\u770B\u4E00\u4E0B\u90E8\u7F72\u7684\u670D\u52A1\u662F\u5426\u6B63\u5E38\uFF1F</p><p>\u5982\u4E0A\u53EF\u4EE5\u5F88\u6E05\u6670\u7684\u770B\u5230 \u54B1\u4EEC\u90E8\u7F72\u7684 kubernetes-dashboard \u5728 192.168.106.4 \u4E0A\u9762\u5DF2\u7ECF\u90E8\u7F72\u4E86\u3002</p><p>\u90A3\u6211\u4EEC\u53EF\u4EE5\u53BB\u8BBF\u95EE\u4E0B\uFF1A</p>`,21),i={href:"http://192.168.106.4:8888/",target:"_blank",rel:"noopener noreferrer"},m=c("http://192.168.106.4:8888"),d=s(`<h2 id="_5-\u90E8\u7F72-heapster-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u90E8\u7F72-heapster-\u63D2\u4EF6" aria-hidden="true">#</a> 5\uFF0C\u90E8\u7F72 heapster \u63D2\u4EF6</h2><h3 id="_1-\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># wget https://github.com/kubernetes/heapster/archive/v1.5.0.tar.gz</span>
 
<span class="token comment"># tar xzvf ./v1.5.0.tar.gz</span>
 
<span class="token comment"># cd ./heapster-1.5.0/</span>
 
<span class="token punctuation">[</span>root@master1 heapster-1.5.0<span class="token punctuation">]</span><span class="token comment"># kubectl create -f deploy/kube-config/influxdb/</span>
deployment <span class="token string">&quot;monitoring-grafana&quot;</span> created
<span class="token function">service</span> <span class="token string">&quot;monitoring-grafana&quot;</span> created
serviceaccount <span class="token string">&quot;heapster&quot;</span> created
deployment <span class="token string">&quot;heapster&quot;</span> created
<span class="token function">service</span> <span class="token string">&quot;heapster&quot;</span> created
deployment <span class="token string">&quot;monitoring-influxdb&quot;</span> created
<span class="token function">service</span> <span class="token string">&quot;monitoring-influxdb&quot;</span> created
 
<span class="token punctuation">[</span>root@master1 heapster-1.5.0<span class="token punctuation">]</span><span class="token comment">#  kubectl create -f deploy/kube-config/rbac/heapster-rbac.yaml</span>
clusterrolebinding <span class="token string">&quot;heapster&quot;</span> created
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_2-\u90E8\u7F72\u5931\u8D25\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u90E8\u7F72\u5931\u8D25\u3002" aria-hidden="true">#</a> 2\uFF0C\u90E8\u7F72\u5931\u8D25\u3002</h3><p>\u4F46\u662F\u8FD9\u4E2A\u5730\u65B9\u5728\u90E8\u7F72\u7684\u65F6\u5019\u5931\u8D25\u4E86\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u6765\u67E5\u770B pod \u7684\u72B6\u6001\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pod -n kube-system -o wide
NAME                                    READY     STATUS             RESTARTS   AGE       IP             NODE
heapster-55c5d9c56b-wh88h               <span class="token number">0</span>/1       ImagePullBackOff\uFF08\u955C\u50CF\u95EE\u9898\uFF09   <span class="token number">0</span>          1d        <span class="token number">172.30</span>.101.2   <span class="token number">192.168</span>.106.4
helloworldapi-6ff9f5b6db-hstbr          <span class="token number">0</span>/1       ImagePullBackOff   <span class="token number">0</span>          4h        <span class="token number">172.30</span>.24.4    <span class="token number">192.168</span>.106.5
helloworldapi-6ff9f5b6db-qtg85          <span class="token number">1</span>/1       Running            <span class="token number">0</span>          4h        <span class="token number">172.30</span>.101.5   <span class="token number">192.168</span>.106.4
kube-dns-778977457c-2rwdj               <span class="token number">0</span>/3       ErrImagePull       <span class="token number">0</span>          1d        <span class="token number">172.30</span>.24.2    <span class="token number">192.168</span>.106.5
kubernetes-dashboard-8665cd4dfb-jzxg6   <span class="token number">1</span>/1       Running            <span class="token number">1</span>          1d        <span class="token number">172.30</span>.101.4   <span class="token number">192.168</span>.106.4
monitoring-grafana-5bccc9f786-2tqsn     <span class="token number">0</span>/1       ImagePullBackOff   <span class="token number">0</span>          1d        <span class="token number">172.30</span>.24.3    <span class="token number">192.168</span>.106.5
monitoring-influxdb-85cb4985d4-q8dp6    <span class="token number">0</span>/1       ImagePullBackOff   <span class="token number">0</span>          1d        <span class="token number">172.30</span>.101.3   <span class="token number">192.168</span>.106.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u540C\u65F6\u5931\u8D25\u7684\u4FE1\u606F\u4E5F\u53EF\u4EE5\u5728 k8s \u7684 web \u754C\u9762\u770B\u5230\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/981ab36e7f6f74e8.jpg" alt="image"></p><p>\u53EF\u4EE5\u770B\u5230\u62A5\u7684\u95EE\u9898\u662F\u62C9\u53D6\u955C\u50CF\u5931\u8D25\uFF0C\u54C8\u54C8\u54C8\uFF0C\u88AB\u5899\u4E86\u3002</p><p>\u6B64\u65F6\u53EF\u4EE5\u5148\u5728\u4E00\u4E2A\u80FD\u591F\u8BBF\u95EE\u7684\u4E3B\u673A\u4E0A\u5C06\u955C\u50CF\u4E0B\u8F7D\u4E0B\u6765\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u52A0\u8F7D\u3002</p><h3 id="_3-\u4E0B\u8F7D\u955C\u50CF\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u4E0B\u8F7D\u955C\u50CF\u3002" aria-hidden="true">#</a> 3\uFF0C\u4E0B\u8F7D\u955C\u50CF\u3002</h3><p>\u914D\u7F6E\u4EE3\u7406\u8BF7\u8D70\u5982\u4E0B\u65B9\u5411\uFF1Ahttp://doc.eryajf.net/docs/test/test-1am8o26r6csm9</p><p>\u7136\u540E\u5728\u5BF9\u5E94\u4E3B\u673A\u4E0A\u4E0B\u8F7D\u5BF9\u5E94\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$docker</span> pull gcr.io/google_containers/heapster-amd64:v1.4.2
 
Trying to pull repository gcr.io/google_containers/heapster-amd64 <span class="token punctuation">..</span>.
v1.4.2: Pulling from gcr.io/google_containers/heapster-amd64
4e4eeec2f874: Pull complete
5c479041def4: Pull complete
Digest: sha256:f58ded16b56884eeb73b1ba256bcc489714570bacdeca43d4ba3b91ef9897b20
Status: Downloaded newer image <span class="token keyword">for</span> gcr.io/google_containers/heapster-amd64:v1.4.2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_4-\u4FDD\u5B58\u955C\u50CF\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u4FDD\u5B58\u955C\u50CF\u3002" aria-hidden="true">#</a> 4\uFF0C\u4FDD\u5B58\u955C\u50CF\u3002</h3><p>\u4E0B\u8F7D\u4E4B\u540E\u4FDD\u5B58\u955C\u50CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u67E5\u770B\u955C\u50CF
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$docker</span> images
 
REPOSITORY                                TAG                 IMAGE ID            CREATED             SIZE
gcr.io/google_containers/heapster-amd64   v1.4.2              d4e02f5922ca        <span class="token number">13</span> months ago       <span class="token number">73.4</span> MB
 
\u4FDD\u5B58\u955C\u50CF
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$docker</span> save gcr.io/google_containers/heapster-amd64 -o heapster-amd64
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_5-\u52A0\u8F7D\u955C\u50CF\u3002" tabindex="-1"><a class="header-anchor" href="#_5-\u52A0\u8F7D\u955C\u50CF\u3002" aria-hidden="true">#</a> 5\uFF0C\u52A0\u8F7D\u955C\u50CF\u3002</h3><p>\u7136\u540E\u628A\u955C\u50CF\u4F20\u5230 k8s \u7684 master \u4E0A\uFF0C\u8FDB\u884C\u52A0\u8F7D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u4F20\u8F93
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$scp</span> heapster-amd64 root@192.168.106.3:/mnt/
 
\u52A0\u8F7D
<span class="token punctuation">[</span>root@master mnt<span class="token punctuation">]</span><span class="token variable">$cat</span> heapster-amd64 <span class="token operator">|</span> <span class="token function">ssh</span> root@node01 <span class="token string">&#39;docker load&#39;</span>
Loaded image: gcr.io/google_containers/heapster-amd64:v1.4.2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u63A5\u7740\u53BB\u5BF9\u5E94\u7684 node \u4E3B\u673A\u4E0A\u770B\u770B\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node01 ~<span class="token punctuation">]</span><span class="token variable">$docker</span> images
REPOSITORY                                                                 TAG                 IMAGE ID            CREATED             SIZE
registry.docker-cn.com/kubernetesdashboarddev/kubernetes-dashboard-amd64   <span class="token function">head</span>                cf8ed7dd44bb        <span class="token number">4</span> days ago          122MB
<span class="token number">192.168</span>.106.3:5000/centos                                                  v0323               5182e96772bf        <span class="token number">7</span> weeks ago         200MB
<span class="token number">192.168</span>.106.3:5000/helloworldapi                                           v2.2                85378ce05520        <span class="token number">6</span> months ago        329MB
registry.access.redhat.com/rhel7/pod-infrastructure                        latest              99965fb98423        <span class="token number">11</span> months ago       209MB
gcr.io/google_containers/heapster-amd64                                    v1.4.2              d4e02f5922ca        <span class="token number">13</span> months ago       <span class="token number">73</span>.4MB
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_6-\u9A8C\u8BC1\u6548\u679C\u3002" tabindex="-1"><a class="header-anchor" href="#_6-\u9A8C\u8BC1\u6548\u679C\u3002" aria-hidden="true">#</a> 6\uFF0C\u9A8C\u8BC1\u6548\u679C\u3002</h3><p>\u5F53\u955C\u50CF\u6B63\u5E38\u52A0\u8F7D\u4E4B\u540E\uFF0Ck8s \u7684 kube-controller-manage \u4F1A\u81EA\u52A8 restart \u5BB9\u5668\u7684\u3002</p><p>\u5148\u5728\u4E3B\u673A\u4E0A\u770B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master mnt<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pod -n kube-system -o wide
NAME                                    READY     STATUS             RESTARTS   AGE       IP             NODE
heapster-55c5d9c56b-wh88h               <span class="token number">1</span>/1       Running\uFF08\u8DD1\u8D77\u6765\u4E86\uFF09            <span class="token number">0</span>          1d        <span class="token number">172.30</span>.101.2   <span class="token number">192.168</span>.106.4
helloworldapi-6ff9f5b6db-hstbr          <span class="token number">0</span>/1       ImagePullBackOff   <span class="token number">0</span>          5h        <span class="token number">172.30</span>.24.4    <span class="token number">192.168</span>.106.5
helloworldapi-6ff9f5b6db-qtg85          <span class="token number">1</span>/1       Running            <span class="token number">0</span>          5h        <span class="token number">172.30</span>.101.5   <span class="token number">192.168</span>.106.4
kube-dns-778977457c-2rwdj               <span class="token number">0</span>/3       ImagePullBackOff   <span class="token number">0</span>          1d        <span class="token number">172.30</span>.24.2    <span class="token number">192.168</span>.106.5
kubernetes-dashboard-8665cd4dfb-jzxg6   <span class="token number">1</span>/1       Running            <span class="token number">1</span>          1d        <span class="token number">172.30</span>.101.4   <span class="token number">192.168</span>.106.4
monitoring-grafana-5bccc9f786-2tqsn     <span class="token number">0</span>/1       ImagePullBackOff   <span class="token number">0</span>          1d        <span class="token number">172.30</span>.24.3    <span class="token number">192.168</span>.106.5
monitoring-influxdb-85cb4985d4-q8dp6    <span class="token number">0</span>/1       ImagePullBackOff   <span class="token number">0</span>          1d        <span class="token number">172.30</span>.101.3   <span class="token number">192.168</span>.106.4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7136\u540E\u53BB web \u754C\u9762\u770B\u770B\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/0a7b3caefc88b24d.jpg" alt="image"></p><p>\u518D\u7B49\u4E00\u4F1A\u513F\uFF0C\u7ED9\u4ED6\u4E00\u4E2A\u52A0\u8F7D\u641C\u96C6\u7684\u65F6\u95F4\uFF0C\u5373\u53EF\u770B\u5230\u76D1\u63A7\u4E86\u3002</p><p>\u4E00\u4F1A\u513F\u8FC7\u53BB\u4E86\uFF0C\uFF0C\uFF0C</p><p><code>\u67E5\u770B\u603B\u89C8\uFF1A</code></p><p><img src="http://t.eryajf.net/imgs/2021/09/bab9771f470bfa11.jpg" alt="image"></p><p><code>\u67E5\u770B\u8282\u70B9\uFF1A</code></p><p><img src="http://t.eryajf.net/imgs/2021/09/01161d6f6c92e2d5.jpg" alt="image"></p><p><code>\u8282\u70B9\u8BE6\u60C5\uFF1A</code></p><p><img src="http://t.eryajf.net/imgs/2021/09/63ff3af3f53f510e.jpg" alt="image"></p><h2 id="_6-\u53E6\u5916\u51E0\u4E2A\u63D2\u4EF6\u3002" tabindex="-1"><a class="header-anchor" href="#_6-\u53E6\u5916\u51E0\u4E2A\u63D2\u4EF6\u3002" aria-hidden="true">#</a> 6\uFF0C\u53E6\u5916\u51E0\u4E2A\u63D2\u4EF6\u3002</h2><p>\u5F53\u6211\u67E5\u770B\u521B\u5EFA\u7684 pod \u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u9664\u4E86 dashboard \u6210\u4E86\u4E4B\u540E\uFF0C\u5176\u4F59\u7684\u90FD\u5931\u8D25\u4E86\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\uFF0C\u5C31\u5982\u4E0A\u8FB9\u65B9\u6CD5\u70AE\u5236\uFF0C\u4E0B\u8F7D\u5BF9\u5E94\u955C\u50CF\uFF0C\u5BF9\u4E4B\u8FDB\u884C\u6574\u7406\u3002</p><p>\u8FD9\u91CC\u4E3A\u4E86\u5FEB\u901F\u4E0B\u8F7D\u955C\u50CF\uFF0C\u53EF\u4EE5\u9009\u62E9\u5C06 google \u7684\u955C\u50CF\u6362\u6210\u963F\u91CC\u4E91\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gcr.io/google_containers/kubernetes-dashboard-amd64:v1.8.1
docker pull registry.docker-cn.com/kubernetesdashboarddev/kubernetes-dashboard-amd64:head
 
 
gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5
docker pull registry.cn-hangzhou.aliyuncs.com/wonders/k8s-dns-kube-dns-amd64:1.14.5
 
 
gcr.io/google_containers/heapster-grafana-amd64:v4.4.3
docker pull registry.cn-hangzhou.aliyuncs.com/inspur_research/heapster-grafana-amd64:v4.4.3
 
 
gcr.io/google_containers/heapster-amd64:v1.4.2
docker pull registry.cn-hangzhou.aliyuncs.com/inspur_research/heapster-amd64:v1.4.2
 
 
gcr.io/google_containers/heapster-influxdb-amd64:v1.3.3
docker pull registry.cn-hangzhou.aliyuncs.com/inspur_research/heapster-influxdb-amd64:v1.3.3
 
 
gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64:1.14.5
docker pull registry.cn-hangzhou.aliyuncs.com/inspur_research/k8s-dns-dnsmasq-nanny-amd64:1.14.5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u7F51\u53CB\u8D21\u732E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hub.c.163.com/zhijiansd/k8s-dns-kube-dns-amd64:1.14.5
 
hub.c.163.com/zhijiansd/k8s-dns-dnsmasq-nanny-amd64:1.14.5
 
hub.c.163.com/zhijiansd/k8s-dns-sidecar-amd64:1.14.5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6216\u8005\u4F7F\u7528\u963F\u91CC\u7684\u955C\u50CF\u6E90\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://dev.aliyun.com/search.html
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0B\u8F7D\u4E4B\u540E\uFF0C\u5982\u6CD5\u70AE\u5236\uFF0C\u53EF\u4EE5\u770B\u5230\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/848d13a627d29160.jpg" alt="image"></p><p>\u4F46\u662F\u65B0\u7684\u95EE\u9898\u6765\u4E86\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u5730\u65B9\u4F7F\u7528\u963F\u91CC\u4E91\u7684\u4ED3\u5E93\u5730\u5740 pull \u7684\u955C\u50CF\uFF0C\u6700\u540E\u53D1\u73B0\u90E8\u7F72\u4ECD\u65E7\u662F\u5931\u8D25\u7684\u3002</p><p>ok\uFF0C\u63A5\u7740\u518D\u6765\u95EE\u9898\u89E3\u51B3\u5927\u6CD5\u3002</p><p>\u53BB\u670D\u52A1\u5668\u770B\u770B pod \u60C5\u51B5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master mnt<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pods
No resources found.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4EC0\u4E48\u9B3C\uFF0C\u600E\u4E48\u4F1A\u6CA1\u6570\u636E\u5462\u3002\u8FD9\u4E2A\u5730\u65B9\u5DF2\u7ECF\u4E0D\u80FD\u8FD9\u4E48\u770B\u4E86\uFF0C\u56E0\u4E3A\u90E8\u7F72\u7684 pod \u90FD\u662F\u5728\u521B\u5EFA\u7684 namespace \u4E4B\u4E2D\u7684\uFF0C\u6240\u4EE5\u4EE5\u540E\u8981\u6307\u5B9A namespace \u624D\u80FD\u67E5\u8BE2\u5566\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master mnt<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pods -n kube-system
NAME                                    READY     STATUS             RESTARTS   AGE
heapster-55c5d9c56b-wh88h               <span class="token number">1</span>/1       Running            <span class="token number">0</span>          1d
helloworldapi-6ff9f5b6db-hstbr          <span class="token number">0</span>/1       ErrImagePull       <span class="token number">0</span>          6h
helloworldapi-6ff9f5b6db-qtg85          <span class="token number">1</span>/1       Running            <span class="token number">0</span>          6h
kube-dns-778977457c-2rwdj               <span class="token number">0</span>/3       CrashLoopBackOff   <span class="token number">6</span>          1d
kubernetes-dashboard-8665cd4dfb-jzxg6   <span class="token number">1</span>/1       Running            <span class="token number">1</span>          1d
monitoring-grafana-5bccc9f786-2tqsn     <span class="token number">1</span>/1       Running            <span class="token number">0</span>          1d
monitoring-influxdb-85cb4985d4-q8dp6    <span class="token number">1</span>/1       Running            <span class="token number">0</span>          1d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u770B\u770B\u8BE6\u7EC6\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master mnt<span class="token punctuation">]</span><span class="token variable">$kubectl</span> -n kube-system describe pods kube-dns-778977457c-2rwdj
Name:           kube-dns-778977457c-2rwdj
Namespace:      kube-system
Node:           <span class="token number">192.168</span>.106.5/192.168.106.5
Start Time:     Sat, <span class="token number">29</span> Sep <span class="token number">2018</span> <span class="token number">11</span>:44:34 +0800
Labels:         k8s-app<span class="token operator">=</span>kube-dns
                pod-template-hash<span class="token operator">=</span><span class="token number">3345330137</span>
Annotations:    kubernetes.io/created-by<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;SerializedReference&quot;</span>,<span class="token string">&quot;apiVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;v1&quot;</span>,<span class="token string">&quot;reference&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;ReplicaSet&quot;</span>,<span class="token string">&quot;namespace&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;kube-system&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;kube-dns-778977457c&quot;</span>,<span class="token string">&quot;uid&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;fa63df41-c399-11e8-823b-525400c7...
                scheduler.alpha.kubernetes.io/critical-pod=
Status:         Pending
IP:             172.30.24.2
Created By:     ReplicaSet/kube-dns-778977457c
Controlled By:  ReplicaSet/kube-dns-778977457c
Containers:
  kubedns:
    Container ID:
    Image:         gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5
    Image ID:
    Ports:         10053/UDP, 10053/TCP, 10055/TCP
    Args:
      --domain=cluster.local.
      --dns-port=10053
      --config-dir=/kube-dns-config
      --v=2
    State:          Waiting
      Reason:       ImagePullBackOff
    Ready:          False
    Restart Count:  0
    Limits:
      memory:  170Mi
    Requests:
      cpu:      100m
      memory:   70Mi
    Liveness:   http-get http://:10054/healthcheck/kubedns delay=60s timeout=5s period=10s #success=1 #failure=5
    Readiness:  http-get http://:8081/readiness delay=3s timeout=5s period=10s #success=1 #failure=3
    Environment:
      PROMETHEUS_PORT:  10055
    Mounts:
      /kube-dns-config from kube-dns-config (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from kube-dns-token-vsmtl (ro)
  dnsmasq:
    Container ID:  docker://61e6ea7f3c478c0d925b221ca31b803ffeb023c1a5bc8a391fe490f63bffa971
    Image:         gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64:1.14.5
    Image ID:      docker://sha256:96c7a868215290b21a9600a46ca2f80a7ceaa49ec6811ca2be7da6fcd8aaac77
    Ports:         53/UDP, 53/TCP
    Args:
      -v=2
      -logtostderr
      -configDir=/etc/k8s/dns/dnsmasq-nanny
      -restartDnsmasq=true
      --
      -k
      --cache-size=1000
      --log-facility=-
      --server=/cluster.local/127.0.0.1#10053
      --server=/in-addr.arpa/127.0.0.1#10053
      --server=/ip6.arpa/127.0.0.1#10053
    State:          Waiting
      Reason:       CrashLoopBackOff
    Last State:     Terminated
      Reason:       Error
      Exit Code:    137
      Started:      Sun, 30 Sep 2018 15:49:59 +0800
      Finished:     Sun, 30 Sep 2018 15:51:59 +0800
    Ready:          False
    Restart Count:  6
    Requests:
      cpu:        150m
      memory:     20Mi
    Liveness:     http-get http://:10054/healthcheck/dnsmasq delay=60s timeout=5s period=10s #success=1 #failure=5
    Environment:  &lt;none&gt;
    Mounts:
      /etc/k8s/dns/dnsmasq-nanny from kube-dns-config (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from kube-dns-token-vsmtl (ro)
  sidecar:
    Container ID:
    Image:         gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5
    Image ID:
    Port:          10054/TCP
    Args:
      --v=2
      --logtostderr
      --probe=kubedns,127.0.0.1:10053,kubernetes.default.svc.cluster.local,5,A
      --probe=dnsmasq,127.0.0.1:53,kubernetes.default.svc.cluster.local,5,A
    State:          Waiting
      Reason:       ErrImagePull
    Ready:          False
    Restart Count:  0
    Requests:
      cpu:        10m
      memory:     20Mi
    Liveness:     http-get http://:10054/metrics delay=60s timeout=5s period=10s #success=1 #failure=5
    Environment:  &lt;none&gt;
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-dns-token-vsmtl (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          False
  PodScheduled   True
Volumes:
  kube-dns-config:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      kube-dns
    Optional:  true
  kube-dns-token-vsmtl:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  kube-dns-token-vsmtl
    Optional:    false
QoS Class:       Burstable
Node-Selectors:  &lt;none&gt;
Tolerations:     CriticalAddonsOnly
Events:
  Type     Reason      Age                  From                    Message
  ----     ------      ----                 ----                    -------
  Warning  FailedSync  38m (x6369 over 1d)  kubelet, 192.168.106.5  Error syncing pod
  Warning  Failed      33m (x313 over 1d)   kubelet, 192.168.106.5  Failed to pull image &quot;</span>gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64:1.14.5<span class="token string">&quot;: rpc error: code = Unknown desc = Error response from daemon: Get https://gcr.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)
  Warning  Failed      28m (x314 over 1d)   kubelet, 192.168.106.5  Failed to pull image &quot;</span>gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5<span class="token string">&quot;: rpc error: code = Unknown desc = Errorresponse from daemon: Get https://gcr.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)
  Normal   BackOff     18m (x6135 over 1d)  kubelet, 192.168.106.5  Back-off pulling image &quot;</span>gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5&quot;
  Warning  Unhealthy   8m <span class="token punctuation">(</span>x14 over 14m<span class="token punctuation">)</span>    kubelet, <span class="token number">192.168</span>.106.5  Liveness probe failed: Get http://172.30.24.2:10054/healthcheck/dnsmasq: dial tcp <span class="token number">172.30</span>.24.2:10054: getsockopt: connection refused
  Normal   Killing     3m <span class="token punctuation">(</span>x6 over 13m<span class="token punctuation">)</span>     kubelet, <span class="token number">192.168</span>.106.5  Killing container with <span class="token function">id</span> docker://dnsmasq:Container failed liveness probe<span class="token punctuation">..</span> Container will be killed and recreated.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br></div></div><p>\u770B\u6700\u540E\u7684\u4FE1\u606F\uFF0C\u5927\u6982\u8BF4\u7684\u662F\u4F9D\u7136\u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u955C\u50CF\uFF0C\u6211\u4EEC\u53BB 192.168.106.5 \u8FD9\u53F0\u4E3B\u673A\u4E0A\u770B\u770B\u662F\u5426\u6709\u8FD9\u4E2A\u955C\u50CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node02 log<span class="token punctuation">]</span><span class="token variable">$docker</span> images
REPOSITORY                                                                      TAG                 IMAGE ID            CREATED             SIZE
gcr.io/google_containers/heapster-grafana-amd64                                 v4.4.3              edd7018a59de        <span class="token number">8</span> months ago        152MB
registry.cn-hangzhou.aliyuncs.com/inspur_research/heapster-grafana-amd64        v4.4.3              edd7018a59de        <span class="token number">8</span> months ago        152MB
gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64                            <span class="token number">1.14</span>.5              96c7a8682152        <span class="token number">8</span> months ago        <span class="token number">41</span>.4MB
registry.cn-hangzhou.aliyuncs.com/inspur_research/k8s-dns-dnsmasq-nanny-amd64   <span class="token number">1.14</span>.5              96c7a8682152        <span class="token number">8</span> months ago        <span class="token number">41</span>.4MB
registry.cn-hangzhou.aliyuncs.com/wonders/k8s-dns-kube-dns-amd64                <span class="token number">1.14</span>.5              38844359ff14        <span class="token number">9</span> months ago        <span class="token number">49</span>.4MB
registry.access.redhat.com/rhel7/pod-infrastructure                             latest              99965fb98423        <span class="token number">11</span> months ago       209MB
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8BDD\u8BF4\u7B2C\u4E94\u4E2A\u4E0D\u5C31\u662F\u4E48\uFF0C\u4F46\u662F\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u5730\u65B9\u56E0\u4E3A\u7528\u963F\u91CC\u4E91\u4ED3\u5E93\u4E0B\u8F7D\uFF0C\u6240\u4EE5 tag \u540D\u79F0\u4E0E\u4EBA\u5BB6\u62A5\u51FA\u6765\u7684\u4E0D\u4E00\u81F4\uFF0C\u56E0\u6B64\u5BFC\u81F4\u5931\u8D25\u3002\u89E3\u51B3\u529E\u6CD5\u5C31\u662F\u4FEE\u6539\u5BF9\u5E94\u7684 tag\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u6CE8\u610F\u4FEE\u6539\u7684\u65F6\u5019\u5E26\u4E0A\u540E\u8FB9\u7684\u7248\u672C\u53F7\u3002
 
<span class="token punctuation">[</span>root@node02 log<span class="token punctuation">]</span><span class="token variable">$docker</span> tag registry.cn-hangzhou.aliyuncs.com/wonders/k8s-dns-kube-dns-amd64:1.14.5 gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64:1.14.5
<span class="token punctuation">[</span>root@node02 log<span class="token punctuation">]</span>$
<span class="token punctuation">[</span>root@node02 log<span class="token punctuation">]</span><span class="token variable">$docker</span> images
REPOSITORY                                                                      TAG                 IMAGE ID            CREATED             SIZE
gcr.io/google_containers/heapster-grafana-amd64                                 v4.4.3              edd7018a59de        <span class="token number">8</span> months ago        152MB
registry.cn-hangzhou.aliyuncs.com/inspur_research/heapster-grafana-amd64        v4.4.3              edd7018a59de        <span class="token number">8</span> months ago        152MB
registry.cn-hangzhou.aliyuncs.com/inspur_research/k8s-dns-dnsmasq-nanny-amd64   <span class="token number">1.14</span>.5              96c7a8682152        <span class="token number">8</span> months ago        <span class="token number">41</span>.4MB
gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64                            <span class="token number">1.14</span>.5              38844359ff14        <span class="token number">9</span> months ago        <span class="token number">49</span>.4MB
registry.cn-hangzhou.aliyuncs.com/wonders/k8s-dns-kube-dns-amd64                <span class="token number">1.14</span>.5              38844359ff14        <span class="token number">9</span> months ago        <span class="token number">49</span>.4MB
registry.access.redhat.com/rhel7/pod-infrastructure                             latest              99965fb98423        <span class="token number">11</span> months ago       209MB
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6539\u5B8C\u4E4B\u540E\u5C31\u53EF\u4EE5\u53BB master \u770B\u770B pod \u7684\u72B6\u6001\u4E86\u3002</p><p>\u8FD9\u4E2A\u65F6\u5019\u7684\u65E5\u5FD7\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 node \u8282\u70B9\u7684 / var/log/messages \u8FDB\u884C\u76D1\u63A7\u3002</p><p>\u90A3\u4E48\u5230\u6B64\u523B\uFF0C\u4E00\u4E2A\u6240\u8C13\u7684\u5B89\u88C5\u6D41\u7A0B\u7B97\u662F\u5230\u6B64\u5B8C\u6BD5\u3002\u4E8B\u5B9E\u4E0A\u8FD9\u53EA\u662F\u4E00\u5C0F\u5C0F\u5C0F\u6B65\u800C\u5DF2\uFF0C\u7ECF\u8FC7\u4E86\u8FD9\u904D\u5B89\u88C5\u4E5F\u53EA\u662F\u719F\u6089\u4E86 k8s \u6240\u9700\u8981\u7684\u7EC4\u4EF6\u6709\u54EA\u4E9B\uFF0C\u81F3\u4E8E\u5176\u4E2D\u5404\u4E2A\u7EC4\u4EF6\u5206\u522B\u4EE3\u8868\u4EC0\u4E48\uFF0C\u53C8\u5206\u522B\u6709\u4EC0\u4E48\u529F\u80FD\uFF0C\u4E4B\u95F4\u7684\u534F\u4F5C\u662F\u600E\u6837\u7684\uFF0Ck8s \u7684\u5B9E\u9645\u5E94\u7528\u53C8\u662F\u90A3\u4E9B\uFF0C\u8FD9\u90FD\u662F\u9700\u8981\u6DF1\u5165\u7684\u5730\u65B9\u3002</p>`,61);function k(g,h){const a=e("ExternalLinkIcon");return p(),r(t,null,[b,n("p",null,[n("a",i,[m,l(a)])]),d],64)}var v=o(u,[["render",k]]);export{v as default};
