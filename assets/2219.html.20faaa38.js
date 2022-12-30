import{r as e,o as r,c as p,b as n,a as l,F as t,d as s,e as b}from"./app.dbf5d933.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},o=n("p",null,"Heapster \u662F\u4E00\u4E2A\u6536\u96C6\u8005\uFF0C\u5C06\u6BCF\u4E2A Node \u4E0A\u7684 cAdvisor \u7684\u6570\u636E\u8FDB\u884C\u6C47\u603B\uFF0C\u7136\u540E\u5BFC\u5230\u7B2C\u4E09\u65B9\u5DE5\u5177 (\u5982 InfluxDB)\u3002",-1),u=n("p",null,"Heapster \u662F\u901A\u8FC7\u8C03\u7528 kubelet \u7684 http API \u6765\u83B7\u53D6 cAdvisor \u7684 metrics \u6570\u636E\u7684\u3002",-1),m=n("p",null,"\u7531\u4E8E kublet \u53EA\u5728 10250 \u7AEF\u53E3\u63A5\u6536 https \u8BF7\u6C42\uFF0C\u6545\u9700\u8981\u4FEE\u6539 heapster \u7684 deployment \u914D\u7F6E\u3002\u540C\u65F6\uFF0C\u9700\u8981\u8D4B\u4E88 kube-system:heapster ServiceAccount \u8C03\u7528 kubelet API \u7684\u6743\u9650\u3002",-1),d=n("h2",{id:"_1-\u4E0B\u8F7D-heapster-\u6587\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u4E0B\u8F7D-heapster-\u6587\u4EF6","aria-hidden":"true"},"#"),s(" 1\uFF0C\u4E0B\u8F7D heapster \u6587\u4EF6")],-1),h=s("\u5230 "),k={href:"https://github.com/kubernetes/heapster/releases",target:"_blank",rel:"noopener noreferrer"},g=s("heapster release \u9875\u9762"),v=s(" \u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u7684 heapster"),f=b(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/kubernetes/heapster/archive/v1.5.3.tar.gz
<span class="token function">tar</span> -xzvf v1.5.3.tar.gz
<span class="token function">mv</span> v1.5.3.tar.gz heapster-1.5.3.tar.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B98\u65B9\u6587\u4EF6\u76EE\u5F55\uFF1A <code>heapster-1.5.3/deploy/kube-config/influxdb</code></p><h2 id="_2-\u4FEE\u6539\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u6539\u914D\u7F6E" aria-hidden="true">#</a> 2\uFF0C\u4FEE\u6539\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> heapster-1.5.3/deploy/kube-config/influxdb
$ <span class="token function">cp</span> grafana.yaml<span class="token punctuation">{</span>,.orig<span class="token punctuation">}</span>
$ <span class="token function">diff</span> grafana.yaml.orig grafana.yaml
16c16
<span class="token operator">&lt;</span>         image: gcr.io/google_containers/heapster-grafana-amd64:v4.4.3
---
<span class="token operator">&gt;</span>         image: cnych/heapster-grafana-amd64:v4.4.3
67c67
<span class="token operator">&lt;</span>   <span class="token comment"># type: NodePort</span>
---
<span class="token operator">&gt;</span>   type: NodePort
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4FEE\u6539\u540E\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> grafana.yaml
 
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: monitoring-grafana
  namespace: kube-system
spec:
  replicas: <span class="token number">1</span>
  template:
    metadata:
      labels:
        task: monitoring
        k8s-app: grafana
    spec:
      containers:
      - name: grafana
        image: cnych/heapster-grafana-amd64:v4.4.3
        ports:
        - containerPort: <span class="token number">3000</span>
          protocol: TCP
        volumeMounts:
        - mountPath: /etc/ssl/certs
          name: ca-certificates
          readOnly: <span class="token boolean">true</span>
        - mountPath: /var
          name: grafana-storage
        env:
        - name: INFLUXDB_HOST
          value: monitoring-influxdb
        - name: GF_SERVER_HTTP_PORT
          value: <span class="token string">&quot;3000&quot;</span>
          <span class="token comment"># The following env variables are required to make Grafana accessible via</span>
          <span class="token comment"># the kubernetes api-server proxy. On production clusters, we recommend</span>
          <span class="token comment"># removing these env variables, setup auth for grafana, and expose the grafana</span>
          <span class="token comment"># service using a LoadBalancer or a public IP.</span>
        - name: GF_AUTH_BASIC_ENABLED
          value: <span class="token string">&quot;false&quot;</span>
        - name: GF_AUTH_ANONYMOUS_ENABLED
          value: <span class="token string">&quot;true&quot;</span>
        - name: GF_AUTH_ANONYMOUS_ORG_ROLE
          value: Admin
        - name: GF_SERVER_ROOT_URL
          <span class="token comment"># If you&#39;re only using the API Server proxy, set this value instead:</span>
          <span class="token comment"># value: /api/v1/namespaces/kube-system/services/monitoring-grafana/proxy</span>
          value: /
      volumes:
      - name: ca-certificates
        hostPath:
          path: /etc/ssl/certs
      - name: grafana-storage
        emptyDir: <span class="token punctuation">{</span><span class="token punctuation">}</span>
---
apiVersion: v1
kind: Service
metadata:
  labels:
    <span class="token comment"># For use as a Cluster add-on (https://github.com/kubernetes/kubernetes/tree/master/cluster/addons)</span>
    <span class="token comment"># If you are NOT using this as an addon, you should comment out this line.</span>
    kubernetes.io/cluster-service: <span class="token string">&#39;true&#39;</span>
    kubernetes.io/name: monitoring-grafana
  name: monitoring-grafana
  namespace: kube-system
spec:
  <span class="token comment"># In a production setup, we recommend accessing Grafana through an external Loadbalancer</span>
  <span class="token comment"># or through a public IP.</span>
  <span class="token comment"># type: LoadBalancer</span>
  <span class="token comment"># You could also use NodePort to expose the service at a randomly-generated port</span>
  type: NodePort
  ports:
  - port: <span class="token number">80</span>
    targetPort: <span class="token number">3000</span>
  selector:
    k8s-app: grafana
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><ul><li>\u955C\u50CF\u66F4\u6539\u6210\u81EA\u5DF1\u5DF2\u7ECF pull \u597D\u4E86\u7684\uFF0C\u5E76\u4E14\u5F00\u542F NodePort\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cp</span> heapster.yaml<span class="token punctuation">{</span>,.orig<span class="token punctuation">}</span>
<span class="token variable">$diff</span> heapster.yaml.orig heapster.yaml
23c23
<span class="token operator">&lt;</span>         image: gcr.io/google_containers/heapster-amd64:v1.5.3
---
<span class="token operator">&gt;</span>         image: cnych/heapster-amd64:v1.4.2
27c27
<span class="token operator">&lt;</span>         - --source<span class="token operator">=</span>kubernetes:https://kubernetes.default
---
<span class="token operator">&gt;</span>         - --source<span class="token operator">=</span>kubernetes:https://kubernetes.default?kubeletHttps<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">kubeletPort</span><span class="token operator">=</span><span class="token number">10250</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4FEE\u6539\u540E\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> heapster.yaml
 
apiVersion: v1
kind: ServiceAccount
metadata:
  name: heapster
  namespace: kube-system
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: heapster
  namespace: kube-system
spec:
  replicas: <span class="token number">1</span>
  template:
    metadata:
      labels:
        task: monitoring
        k8s-app: heapster
    spec:
      serviceAccountName: heapster
      containers:
      - name: heapster
        image: cnych/heapster-amd64:v1.4.2
        imagePullPolicy: IfNotPresent
        command:
        - /heapster
        - --source<span class="token operator">=</span>kubernetes:https://kubernetes.default?kubeletHttps<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">kubeletPort</span><span class="token operator">=</span><span class="token number">10250</span>
        - --sink<span class="token operator">=</span>influxdb:http://monitoring-influxdb.kube-system.svc:8086
---
apiVersion: v1
kind: Service
metadata:
  labels:
    task: monitoring
    <span class="token comment"># For use as a Cluster add-on (https://github.com/kubernetes/kubernetes/tree/master/cluster/addons)</span>
    <span class="token comment"># If you are NOT using this as an addon, you should comment out this line.</span>
    kubernetes.io/cluster-service: <span class="token string">&#39;true&#39;</span>
    kubernetes.io/name: Heapster
  name: heapster
  namespace: kube-system
spec:
  ports:
  - port: <span class="token number">80</span>
    targetPort: <span class="token number">8082</span>
  selector:
    k8s-app: heapster
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><ul><li>\u7531\u4E8E kubelet \u53EA\u5728 10250 \u76D1\u542C https \u8BF7\u6C42\uFF0C\u6545\u6DFB\u52A0\u76F8\u5173\u53C2\u6570\uFF1B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cp</span> influxdb.yaml<span class="token punctuation">{</span>,.orig<span class="token punctuation">}</span>
$ <span class="token function">diff</span> influxdb.yaml.orig influxdb.yaml
16c16
<span class="token operator">&lt;</span>         image: gcr.io/google_containers/heapster-influxdb-amd64:v1.3.3
---
<span class="token operator">&gt;</span>         image: cnych/heapster-influxdb-amd64:v1.3.3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4FEE\u6539\u540E\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> influxdb.yaml
 
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: monitoring-influxdb
  namespace: kube-system
spec:
  replicas: <span class="token number">1</span>
  template:
    metadata:
      labels:
        task: monitoring
        k8s-app: influxdb
    spec:
      containers:
      - name: influxdb
        image: cnych/heapster-influxdb-amd64:v1.3.3
        volumeMounts:
        - mountPath: /data
          name: influxdb-storage
      volumes:
      - name: influxdb-storage
        emptyDir: <span class="token punctuation">{</span><span class="token punctuation">}</span>
---
apiVersion: v1
kind: Service
metadata:
  labels:
    task: monitoring
    <span class="token comment"># For use as a Cluster add-on (https://github.com/kubernetes/kubernetes/tree/master/cluster/addons)</span>
    <span class="token comment"># If you are NOT using this as an addon, you should comment out this line.</span>
    kubernetes.io/cluster-service: <span class="token string">&#39;true&#39;</span>
    kubernetes.io/name: monitoring-influxdb
  name: monitoring-influxdb
  namespace: kube-system
spec:
  ports:
  - port: <span class="token number">8086</span>
    targetPort: <span class="token number">8086</span>
  selector:
    k8s-app: influxdb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="_3-\u6267\u884C\u6240\u6709\u5B9A\u4E49\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u6267\u884C\u6240\u6709\u5B9A\u4E49\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u6267\u884C\u6240\u6709\u5B9A\u4E49\u6587\u4EF6</h2><p>\u4FEE\u6539\u540E\u7684\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> heapster-rbac.yaml
 
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: heapster
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:heapster
subjects:
- kind: ServiceAccount
  name: heapster
  namespace: kube-system
 
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: heapster-kubelet-api
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:kubelet-api-admin
subjects:
- kind: ServiceAccount
  name: heapster
  namespace: kube-system
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ul><li>\u5C06 serviceAccount kube-system:heapster \u4E0E ClusterRole system:kubelet-api-admin \u7ED1\u5B9A\uFF0C\u6388\u4E88\u5B83\u8C03\u7528 kubelet API \u7684\u6743\u9650\uFF1B</li></ul><h2 id="_4-\u68C0\u67E5\u6267\u884C\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_4-\u68C0\u67E5\u6267\u884C\u7ED3\u679C" aria-hidden="true">#</a> 4\uFF0C\u68C0\u67E5\u6267\u884C\u7ED3\u679C</h2><p>\u68C0\u67E5 kubernets dashboard \u754C\u9762\uFF0C\u53EF\u4EE5\u6B63\u786E\u663E\u793A\u5404 Nodes\u3001Pods \u7684 CPU\u3001\u5185\u5B58\u3001\u8D1F\u8F7D\u7B49\u7EDF\u8BA1\u6570\u636E\u548C\u56FE\u8868\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/429bee36339b3bb0.jpg" alt="image"></p><h2 id="_5-\u8BBF\u95EE-grafana" tabindex="-1"><a class="header-anchor" href="#_5-\u8BBF\u95EE-grafana" aria-hidden="true">#</a> 5\uFF0C\u8BBF\u95EE grafana</h2><h3 id="_1-\u901A\u8FC7-kube-apiserver-\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_1-\u901A\u8FC7-kube-apiserver-\u8BBF\u95EE" aria-hidden="true">#</a> 1. \u901A\u8FC7 kube-apiserver \u8BBF\u95EE</h3><p>\u83B7\u53D6 monitoring-grafana \u670D\u52A1 URL\uFF1A</p><p>\u6D4F\u89C8\u5668\u8BBF\u95EE URL\uFF1A <code>https://192.168.106.110:8443/api/v1/namespaces/kube-system/services/monitoring-grafana/proxy</code></p><h3 id="_2-\u901A\u8FC7-kubectl-proxy-\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_2-\u901A\u8FC7-kubectl-proxy-\u8BBF\u95EE" aria-hidden="true">#</a> 2\uFF0C\u901A\u8FC7 kubectl proxy \u8BBF\u95EE\uFF1A</h3><p>\u521B\u5EFA\u4EE3\u7406</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl proxy --address<span class="token operator">=</span><span class="token string">&#39;192.168.106.5&#39;</span> --port<span class="token operator">=</span><span class="token number">8086</span> --accept-hosts<span class="token operator">=</span><span class="token string">&#39;^*$&#39;</span>
Starting to serve on <span class="token number">192.168</span>.106.5:8086
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6D4F\u89C8\u5668\u8BBF\u95EE URL\uFF1A<code>http://192.168.106.5:8086/api/v1/namespaces/kube-system/services/monitoring-grafana/proxy/?orgId=1</code></p><h3 id="_3-\u901A\u8FC7-nodeport-\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_3-\u901A\u8FC7-nodeport-\u8BBF\u95EE" aria-hidden="true">#</a> 3\uFF0C\u901A\u8FC7 NodePort \u8BBF\u95EE\uFF1A</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get svc -n kube-system<span class="token operator">|</span><span class="token function">grep</span> -E <span class="token string">&#39;monitoring|heapster&#39;</span>
heapster               ClusterIP   <span class="token number">10.254</span>.34.87    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>/TCP          12m
monitoring-grafana     NodePort    <span class="token number">10.254</span>.186.62   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:8654/TCP     12m
monitoring-influxdb    ClusterIP   <span class="token number">10.254</span>.55.105   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8086</span>/TCP        12m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>grafana \u76D1\u542C NodePort 8654\uFF1B</li></ul><p>\u6D4F\u89C8\u5668\u8BBF\u95EE URL\uFF1A<code>http://192.168.106.3:8654/?orgId=1</code></p><p>\u90A3\u4E48\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u51E0\u79CD\u65B9\u5F0F\u8BBF\u95EE\u5230 grafana \u670D\u52A1\uFF1A</p><ul><li>http://192.168.106.3:8654/?orgId=1</li><li>http://192.168.106.4:8654/?orgId=1</li><li>http://192.168.106.5:8654/?orgId=1</li><li>https://192.168.106.110:8443/api/v1/namespaces/kube-system/services/monitoring-grafana/proxy</li></ul><p>\u8FDB\u53BB\u4E4B\u540E\u53EF\u4EE5\u70B9\u51FB\u4E00\u4E0B\u96C6\u7FA4\uFF0C\u770B\u770B\u91CC\u8FB9\u7684\u4E00\u4E9B\u4FE1\u606F\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/264a3b098edc5bbe.jpg" alt="image"></p><h2 id="_6-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_6-\u53C2\u8003" aria-hidden="true">#</a> 6\uFF0C\u53C2\u8003\uFF1A</h2><ol><li>\u914D\u7F6E heapster\uFF1Ahttps://github.com/kubernetes/heapster/blob/master/docs/source-configuration.md</li></ol>`,39);function y(_,x){const a=e("ExternalLinkIcon");return r(),p(t,null,[o,u,m,d,n("p",null,[h,n("a",k,[g,l(a)]),v]),f],64)}var I=c(i,[["render",y]]);export{I as default};
