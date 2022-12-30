import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>\u6CE8\uFF1A\u6B64\u6587\u6863\u6839\u636E\u6155\u8BFE\u7F51 k8s \u89C6\u9891\u6559\u7A0B\u5B66\u4E60\u6574\u7406\u800C\u6210\u3002</p><h2 id="_1-\u521B\u5EFA\u4E00\u4E2A-nginx-\u7684-pod\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u4E00\u4E2A-nginx-\u7684-pod\u3002" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA\u4E00\u4E2A nginx \u7684 pod\u3002</h2><p>\u5B9A\u4E49\u4E86\u4E00\u4E2A nginx.yaml \u7684\u6587\u4EF6\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master pod<span class="token punctuation">-</span>basic<span class="token punctuation">]</span>$cat pod_nginx.yml
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5176\u4E2D\u5B9A\u4E49\u4E86\u7248\u672C\uFF0C\u7C7B\u578B\uFF0C\u540D\u79F0\uFF0C\u955C\u50CF\uFF0C\u7AEF\u53E3\u7B49\u7B49\u3002</p><p>\u73B0\u5728\u6765\u542F\u52A8\u5B83\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master pod<span class="token punctuation">-</span>basic<span class="token punctuation">]</span>$kubectl create <span class="token punctuation">-</span>f pod_nginx.yml
pod &quot;nginx&quot; created
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7B80\u5355\u67E5\u770B\u4E00\u4E0B\u72B6\u6001\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master pod-basic<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pod
NAME      READY     STATUS    RESTARTS   AGE
nginx     <span class="token number">1</span>/1       Running   <span class="token number">0</span>          25s
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u547D\u540D\u4E3A nginx \u7684 pod \u8D77\u6765\u4E86\uFF0C1/1 \u8868\u793A\u53EA\u6709\u4E00\u4E2A\u3002</p><p>\u67E5\u770B\u8BE6\u7EC6\u72B6\u6001\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master pod-basic<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pods -o wide
NAME      READY     STATUS    RESTARTS   AGE       IP            NODE
nginx     <span class="token number">1</span>/1       Running   <span class="token number">0</span>          1m        <span class="token number">10.244</span>.1.18   node
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53C8\u80FD\u770B\u5230 pod \u7684 ip\uFF0810.244.1.18\uFF09\uFF0C\u4EE5\u53CA\u6240\u88AB\u5206\u914D\u5230\u7684\u8282\u70B9\uFF08node\uFF09\u3002</p><h2 id="_2-\u8FDB\u5165\u5230-pod\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u8FDB\u5165\u5230-pod\u3002" aria-hidden="true">#</a> 2\uFF0C\u8FDB\u5165\u5230 pod\u3002</h2><p>\u5982\u4F55\u8FDB\u5165\u5230\u8FD9\u4E2A pod \u5462\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master pod-basic<span class="token punctuation">]</span><span class="token variable">$kubectl</span> <span class="token builtin class-name">exec</span> -it nginx <span class="token function">bash</span>
root@nginx:/<span class="token comment"># ls</span>
bin   dev  home  lib64    mnt  proc  run     srv  tmp  var
boot  etc  lib     media    opt  root  sbin  sys  usr
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u6837\u4EE5\u6765\u5C31\u76F4\u63A5\u8FDB\u5165\u5230 pod \u5BF9\u5E94\u7684\u5BB9\u5668\u91CC\u8FB9\u6765\u4E86\uFF0C\u5982\u679C\u8FD9\u4E2A pod \u91CC\u8FB9\u542B\u6709\u591A\u4E2A\u5BB9\u5668\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u662F\u8FDB\u5165\u5230\u7B2C\u4E00\u4E2A\u5BB9\u5668\u5F53\u4E2D\uFF0C\u5982\u679C\u60F3\u8981\u8FDB\u5165\u5230\u5176\u4ED6\u5BB9\u5668\uFF0C\u90A3\u4E48\u770B\u4E0B\u547D\u4EE4\u5E2E\u52A9\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root @ master pod-basic<span class="token punctuation">]</span> $ kubectl <span class="token builtin class-name">exec</span> --help
 
\u5728\u5BB9\u5668\u4E2D\u6267\u884C\u547D\u4EE4\u3002
 
\u4F8B\u5B50\uFF1A
 
  \uFF03\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u7B2C\u4E00\u4E2A\u5BB9\u5668\u4ECEpod <span class="token number">123456</span>-7890\u4E2D\u8FD0\u884C<span class="token string">&#39;date&#39;</span>\u8F93\u51FA
  kubectl <span class="token builtin class-name">exec</span> <span class="token number">123456</span>-7890 <span class="token function">date</span>
 
  \uFF03\u4ECEpod <span class="token number">123456</span>-7890\u83B7\u53D6ruby-container\u4E2D\u8FD0\u884C<span class="token string">&#39;date&#39;</span>\u7684\u8F93\u51FA
  kubectl <span class="token builtin class-name">exec</span> <span class="token number">123456</span>-7890 -cruby-container\u65E5\u671F
 
  \uFF03\u5207\u6362\u5230\u539F\u59CB\u7EC8\u7AEF\u6A21\u5F0F\uFF0C\u5C06stdin\u53D1\u9001\u5230pod <span class="token number">123456</span>-7890\u7684ruby-container\u4E2D\u7684<span class="token string">&#39;bash&#39;</span>
  \uFF03\u5E76\u5C06stdout / stderr\u4ECE<span class="token string">&#39;bash&#39;</span>\u53D1\u9001\u56DE\u5BA2\u6237\u7AEF
  kubectl <span class="token builtin class-name">exec</span> <span class="token number">123456</span>-7890 -c ruby-container -i -t - <span class="token function">bash</span> -il
 
  \uFF03\u4ECEpod <span class="token number">123456</span>-7890\u7684\u7B2C\u4E00\u4E2A\u5BB9\u5668\u4E2D\u5217\u51FA/ usr\u7684\u5185\u5BB9\uFF0C\u5E76\u6309\u4FEE\u6539\u65F6\u95F4\u6392\u5E8F\u3002
  \uFF03\u5982\u679C\u8981\u5728pod\u4E2D\u6267\u884C\u7684\u547D\u4EE4\u6709\u4EFB\u4F55\u5171\u540C\u7684\u6807\u5FD7\uFF08\u4F8B\u5982-i\uFF09\uFF0C
  \uFF03\u60A8\u5FC5\u987B\u4F7F\u7528\u4E24\u4E2A\u7834\u6298\u53F7\uFF08 - \uFF09\u6765\u5206\u9694\u547D\u4EE4\u7684\u6807\u5FD7/\u53C2\u6570\u3002
  \uFF03\u53E6\u8BF7\u6CE8\u610F\uFF0C\u4E0D\u8981\u7528\u5F15\u53F7\u62EC\u8D77\u547D\u4EE4\u53CA\u5176flags / arguments
  \uFF03\u9664\u975E\u4F60\u6B63\u5E38\u6267\u884C\u5B83\uFF08\u5373\uFF0C\u6267\u884Cls -t / usr\uFF0C\u800C\u4E0D\u662F\u201Cls -t / usr\u201D\uFF09\u3002
  kubectl <span class="token builtin class-name">exec</span> <span class="token number">123456</span>-7890 -i -t - <span class="token function">ls</span> -t / usr
 
\u9009\u9879\uFF1A
  -c\uFF0C - container <span class="token operator">=</span><span class="token string">&#39;&#39;</span>\uFF1A\u5BB9\u5668\u540D\u79F0\u3002\u5982\u679C\u7701\u7565\uFF0C\u5C06\u9009\u62E9pod\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5BB9\u5668
  -p\uFF0C - pod <span class="token operator">=</span><span class="token string">&#39;&#39;</span>\uFF1APod\u540D\u79F0
  -i\uFF0C - stdin <span class="token operator">=</span> false\uFF1A\u5C06stdin\u4F20\u9012\u7ED9\u5BB9\u5668
  -t\uFF0C - t <span class="token operator">=</span> false\uFF1AStdin\u662FTTY
 
\u7528\u6CD5\uFF1A
  kubectl <span class="token builtin class-name">exec</span> POD <span class="token punctuation">[</span>-c CONTAINER<span class="token punctuation">]</span> - COMMAND <span class="token punctuation">[</span>args <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
 
\u4F7F\u7528\u201Ckubectl options\u201D\u83B7\u53D6\u5168\u5C40\u547D\u4EE4\u884C\u9009\u9879\u5217\u8868\uFF08\u9002\u7528\u4E8E\u6240\u6709\u547D\u4EE4\uFF09\u3002
\u53EF\u4EE5\u901A\u8FC7-c\u7684\u9009\u9879\u8FDB\u884C\u6307\u5B9A\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="_3-\u67E5\u770B-pod-\u8BE6\u7EC6\u4FE1\u606F\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u67E5\u770B-pod-\u8BE6\u7EC6\u4FE1\u606F\u3002" aria-hidden="true">#</a> 3\uFF0C\u67E5\u770B pod \u8BE6\u7EC6\u4FE1\u606F\u3002</h2><p>\u67E5\u770B pod \u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master pod-basic<span class="token punctuation">]</span><span class="token variable">$kubectl</span> describe pods nginx
Name:         nginx
Namespace:    default
Node:         node/192.168.106.5
Start Time:   Sat, <span class="token number">10</span> Nov <span class="token number">2018</span> <span class="token number">14</span>:40:33 +0800
Labels:       <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx
Annotations:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Status:       Running
IP:           <span class="token variable"><span class="token variable">\`</span><span class="token number">10.244</span>.1.18<span class="token variable">\`</span></span>\uFF0C\u90A3\u4E48\u6211\u4EEC\u8BBF\u95EE\u4E00\u4E0B\uFF1A
 
 
Containers:
  nginx:
    Container ID:   docker://5f35902dbaaf035fa420bab8a2a409660c4ed2b2753a7d2fc298b9d7971a0d33
    Image:          nginx
    Image ID:       docker-pullable://nginx@sha256:d59a1aa7866258751a261bae525a1842c7ff0662d4f34a355d5f36826abc0341
    Port:           <span class="token number">80</span>/TCP
    Host Port:      <span class="token number">0</span>/TCP
    State:          Running
      Started:      Sat, <span class="token number">10</span> Nov <span class="token number">2018</span> <span class="token number">14</span>:40:55 +0800
    Ready:          True
    Restart Count:  <span class="token number">0</span>
    Environment:    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-rp4h8 <span class="token punctuation">(</span>ro<span class="token punctuation">)</span>
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  default-token-rp4h8:
    Type:        Secret <span class="token punctuation">(</span>a volume populated by a Secret<span class="token punctuation">)</span>
    SecretName:  default-token-rp4h8
    Optional:    <span class="token boolean">false</span>
QoS Class:       BestEffort
Node-Selectors:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Tolerations:     node.kubernetes.io/not-ready:NoExecute <span class="token keyword">for</span> 300s
                 node.kubernetes.io/unreachable:NoExecute <span class="token keyword">for</span> 300s
Events:          <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="_4-\u8BBF\u95EE-pod\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u8BBF\u95EE-pod\u3002" aria-hidden="true">#</a> 4\uFF0C\u8BBF\u95EE pod\u3002</h2><p>\u73B0\u5728\u770B\u5230\u8FD9\u4E2A pod \u5728\u96C6\u7FA4\u4E2D\u7684 ip \u662F<code>10.244.1.18</code>\uFF0C\u90A3\u4E48\u6211\u4EEC\u8BBF\u95EE\u4E00\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master pod-basic<span class="token punctuation">]</span><span class="token variable">$curl</span> <span class="token number">10.244</span>.1.18
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    body <span class="token punctuation">{</span>
        width: 35em<span class="token punctuation">;</span>
        margin: <span class="token number">0</span> auto<span class="token punctuation">;</span>
        font-family: Tahoma, Verdana, Arial, sans-serif<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>/style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
 
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>For online documentation and support please refer to
<span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;http://nginx.org/&quot;</span><span class="token operator">&gt;</span>nginx.org<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>.<span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
Commercial support is available at
<span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;http://nginx.com/&quot;</span><span class="token operator">&gt;</span>nginx.com<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>.<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
 
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span>em<span class="token operator">&gt;</span>Thank you <span class="token keyword">for</span> using nginx.<span class="token operator">&lt;</span>/em<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u53D1\u73B0\u5728\u96C6\u7FA4\u5F53\u4E2D\u8BBF\u95EE\u90FD\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u662F\u6211\u4EEC\u8FD9\u4E2A nginx \u90E8\u7F72\u4E4B\u540E\uFF0C\u662F\u60F3\u8981\u8BA9\u5916\u90E8\u4EBA\u5458\u80FD\u591F\u8BBF\u95EE\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u65F6\u5019\u5C31\u8981\u7528\u7684 kubectl \u7684<code>port-forward</code>\u4E86\u3002</p><p>\u5148\u770B\u770B\u4ECB\u7ECD\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root @ master pod-basic<span class="token punctuation">]</span> $ kubectl port-forward --help
\u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u672C\u5730\u7AEF\u53E3\u8F6C\u53D1\u5230pod\u3002
 
\u4F7F\u7528\u8D44\u6E90\u7C7B\u578B/\u540D\u79F0\uFF08\u4F8B\u5982deployment / mydeployment\uFF09\u6765\u9009\u62E9pod\u3002\u5982\u679C\u7701\u7565\uFF0C\u8D44\u6E90\u7C7B\u578B\u9ED8\u8BA4\u4E3A\u201Cpod\u201D\u3002
 
\u5982\u679C\u6709\u591A\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u5E7F\u544A\u8FDE\u64AD\uFF0C\u5219\u4F1A\u81EA\u52A8\u9009\u62E9\u5E7F\u544A\u8FDE\u64AD\u3002\u8F6C\u53D1\u4F1A\u8BDD\u7ED3\u675F\u65F6
\u9009\u5B9A\u7684pod\u7EC8\u6B62\uFF0C\u5E76\u4E14\u9700\u8981\u91CD\u65B0\u8FD0\u884C\u8BE5\u547D\u4EE4\u624D\u80FD\u6062\u590D\u8F6C\u53D1\u3002
 
\u4F8B\u5B50\uFF1A
  \uFF03\u5728\u672C\u5730\u4FA6\u542C\u7AEF\u53E35000\u548C6000\uFF0C\u5C06\u6570\u636E\u8F6C\u53D1\u5230\u5BB9\u5668\u4E2D\u7684\u7AEF\u53E35000\u548C6000
  kubectl port-forward pod / mypod <span class="token number">5000</span> <span class="token number">6000</span>
 
  \uFF03\u5728\u672C\u5730\u4FA6\u542C\u7AEF\u53E35000\u548C6000\uFF0C\u5C06\u6570\u636E\u8F6C\u53D1\u5230/\u4ECE\u7AEF\u53E35000\u548C6000\u4E2D\u9009\u62E9\u7684\u7AEF\u53E3
\u90E8\u7F72
  kubectl port-forward deployment / mydeployment <span class="token number">5000</span> <span class="token number">6000</span>
 
  \uFF03\u5728\u672C\u5730\u7AEF\u53E38888\u4E0A\u4FA6\u542C\uFF0C\u5728pod\u4E2D\u8F6C\u53D1\u52305000
  kubectl port-forward pod / mypod <span class="token number">8888</span>\uFF1A5000
 
  \uFF03\u5728\u672C\u5730\u968F\u673A\u7AEF\u53E3\u6536\u542C\uFF0C\u8F6C\u53D1\u5230pod\u4E2D\u76845000
  kubectl port-forward pod / mypod\uFF1A5000
 
\u9009\u9879\uFF1A
      --pod-running-timeout <span class="token operator">=</span> 1m0s\uFF1A\u7B49\u5F85\u81F3\u5C11\u4E00\u4E2A\u7684\u65F6\u95F4\u957F\u5EA6\uFF08\u59825s\uFF0C2m\u62163h\uFF0C\u5927\u4E8E\u96F6\uFF09
pod\u6B63\u5728\u8FD0\u884C
 
\u7528\u6CD5\uFF1A
  kubectl port-forward TYPE / NAME <span class="token punctuation">[</span>LOCAL_PORT\uFF1A<span class="token punctuation">]</span> REMOTE_PORT <span class="token punctuation">[</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>LOCAL_PORT_N\uFF1A<span class="token punctuation">]</span> REMOTE_PORT_N<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
 
\u4F7F\u7528\u201Ckubectl options\u201D\u83B7\u53D6\u5168\u5C40\u547D\u4EE4\u884C\u9009\u9879\u5217\u8868\uFF08\u9002\u7528\u4E8E\u6240\u6709\u547D\u4EE4\uFF09\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u6307\u4EE4\u5C06 pod \u91CC\u8FB9\u7684\u7AEF\u53E3\u6620\u5C04\u5230\u4E3B\u673A\u4E0A\u6765\uFF0C\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master pod-basic<span class="token punctuation">]</span><span class="token variable">$kubectl</span> port-forward nginx <span class="token number">8080</span>:80
Forwarding from <span class="token number">127.0</span>.0.1:8080 -<span class="token operator">&gt;</span> <span class="token number">80</span>
Forwarding from <span class="token punctuation">[</span>::1<span class="token punctuation">]</span>:8080 -<span class="token operator">&gt;</span> <span class="token number">80</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5C06 pod \u91CC\u8FB9\u7684 80 \u7AEF\u53E3\u6620\u5C04\u5230\u4E3B\u673A\u7684 8080 \u7AEF\u53E3\uFF0C\u90A3\u4E48\u73B0\u5728\u53BB\u8BBF\u95EE\u4E00\u4E0B\u770B\u770B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token variable">$curl</span> <span class="token number">127.0</span>.0.1:8080
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    body <span class="token punctuation">{</span>
        width: 35em<span class="token punctuation">;</span>
        margin: <span class="token number">0</span> auto<span class="token punctuation">;</span>
        font-family: Tahoma, Verdana, Arial, sans-serif<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>/style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
 
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>For online documentation and support please refer to
<span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;http://nginx.org/&quot;</span><span class="token operator">&gt;</span>nginx.org<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>.<span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
Commercial support is available at
<span class="token operator">&lt;</span>a <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;http://nginx.com/&quot;</span><span class="token operator">&gt;</span>nginx.com<span class="token operator">&lt;</span>/a<span class="token operator">&gt;</span>.<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
 
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span>em<span class="token operator">&gt;</span>Thank you <span class="token keyword">for</span> using nginx.<span class="token operator">&lt;</span>/em<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u53D1\u73B0\u5DF2\u7ECF\u53EF\u4EE5\u4E86\u3002\u4F46\u662F\u521A\u521A\u90A3\u4E2A\u6620\u5C04\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u770B\u5230\u6620\u5C04\u8F93\u51FA\u5728\u524D\u53F0\u4E0D\u4F1A\u9000\u51FA\uFF0C\u800C\u4E00\u65E6\u9000\u51FA\u4E4B\u540E\uFF0C\u5219\u8FD9\u4E2A\u6620\u5C04\u53C8\u6D88\u5931\u4E86\uFF0C\u600E\u6837\u624D\u80FD\u6052\u4E45\u7684\u6620\u5C04\u5462\uFF0C\u8FD9\u4E2A\u540E\u8FB9\u518D\u8BF4\u3002</p>`,32);function e(t,r){return p}var c=s(a,[["render",e]]);export{c as default};
