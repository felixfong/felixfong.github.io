import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u521A\u521A\u9ED8\u8BA4\u521B\u5EFA\u7684 pod \u5C31\u53EA\u6709\u4E00\u4E2A\uFF0C\u90A3\u4E48\u5982\u4F55\u521B\u5EFA\u591A\u4E2A pod\uFF0C\u4EE5\u53CA\u52A8\u6001\u6269\u5BB9\u5462\u3002</p><p>\u6211\u4EEC\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\u4E4B\u524D\uFF0C\u5148\u5C06\u4E4B\u524D\u542F\u52A8\u7684 nginx \u7684 pod \u5220\u6389\uFF0C\u4F7F\u7528\u5982\u4E0B\u6307\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master pod-basic<span class="token punctuation">]</span><span class="token variable">$kubectl</span> delete -f pod_nginx.yml
pod <span class="token string">&quot;nginx&quot;</span> deleted
<span class="token punctuation">[</span>root@master pod-basic<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pods
No resources found.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_1-replicationcontroller\u3002" tabindex="-1"><a class="header-anchor" href="#_1-replicationcontroller\u3002" aria-hidden="true">#</a> 1\uFF0CReplicationController\u3002</h2><p>\u73B0\u5728\u6765\u770B\u4E00\u4E2A\u65B0\u7684 yaml \u6587\u4EF6\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$cat rc_nginx.yml
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ReplicationController
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u8FD9\u662F\u4E00\u4E2A<code>ReplicaSet</code>\u7C7B\u578B\u7684\uFF0C\u4E0B\u8FB9\u53C8\u53EF\u4EE5\u770B\u5230\u5B9A\u4E49\u7684\u6570\u5B57\u662F 3\uFF0C\u4E5F\u5C31\u662F\u542F\u52A8 3 \u4E2A pod\u3002</p><p>\u73B0\u5728\u5F00\u59CB\u521B\u5EFA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> create -f rc_nginx.yml
replicationcontroller <span class="token string">&quot;nginx&quot;</span> created
<span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pods
NAME          READY     STATUS              RESTARTS   AGE
nginx-2qzvm   <span class="token number">1</span>/1       Running             <span class="token number">0</span>          7s
nginx-c5nk4   <span class="token number">0</span>/1       ContainerCreating   <span class="token number">0</span>          7s
nginx-r2zcm   <span class="token number">0</span>/1       ContainerCreating   <span class="token number">0</span>          7s
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\uFF0C\u5DF2\u7ECF\u6709\u4E09\u4E2A\u4E86\uFF0C\u5176\u4E2D\u6709\u4E24\u4E2A\u7684\u72B6\u6001\u8FD8\u662F\u542F\u52A8\u4E2D\u7684\uFF0C\u90A3\u4E48\u7B49\u5F85\u4E00\u4F1A\u513F\uFF0C\u5C31\u4E5F running \u8D77\u6765\u4E86\u3002</p><p>\u8FD9\u4E2A\u65F6\u5019\u8FD8\u53EF\u4EE5\u4F7F\u7528\u53E6\u5916\u4E00\u4E2A\u547D\u4EE4\u6765\u67E5\u770B\u72B6\u6001\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get rc
NAME      DESIRED   CURRENT   READY     AGE
nginx     <span class="token number">3</span>         <span class="token number">3</span>         <span class="token number">3</span>         1m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u5C1D\u8BD5\u4E00\u4E0B\u5220\u9664\u5176\u4E2D\u7684\u4E00\u4E2A pod\uFF0C\u770B\u770B\u4F1A\u6709\u4EC0\u4E48\u6548\u679C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pods
NAME          READY     STATUS    RESTARTS   AGE
nginx-2qzvm   <span class="token number">1</span>/1       Running   <span class="token number">0</span>          4m
nginx-c5nk4   <span class="token number">1</span>/1       Running   <span class="token number">0</span>          4m
nginx-r2zcm   <span class="token number">1</span>/1       Running   <span class="token number">0</span>          4m
<span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> delete pods nginx-2qzvm
pod <span class="token string">&quot;nginx-2qzvm&quot;</span> deleted
<span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pods
NAME          READY     STATUS              RESTARTS   AGE
nginx-c5nk4   <span class="token number">1</span>/1       Running             <span class="token number">0</span>          5m
nginx-qlwl2   <span class="token number">0</span>/1       ContainerCreating   <span class="token number">0</span>          2s
nginx-r2zcm   <span class="token number">1</span>/1       Running             <span class="token number">0</span>          5m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5220\u9664\u4E86\u4E00\u4E2A\uFF0C\u7136\u540E\u518D\u6B21\u67E5\u770B\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u53C8\u6709\u4E00\u4E2A\u65B0\u7684 pod \u5728\u751F\u6210\u4E2D\u4E86\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53 pod \u4EE5\u8FD9\u79CD<code>kind: ReplicationController</code>\u65B9\u5F0F\u542F\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u7EF4\u6301\u4F4F 3 \u4E2A\u8FD9\u4E2A\u6570\u76EE\u3002\u8FD9\u5C31\u662F\u4ED6\u7684\u7279\u6027\uFF0C\u56E0\u6B64\u5728\u542F\u52A8\u4E00\u4E2A pod \u7684\u65F6\u5019\uFF0C\u662F\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u7684\uFF0C\u5373\u4FBF\u6570\u76EE\u662F 1 \u4E2A\uFF0C\u90A3\u4E48\u5373\u4FBF\u8FD9\u4E2A pod \u4F1A\u5728\u67D0\u4E2A\u65F6\u523B\u67D0\u4E2A\u539F\u56E0\u9000\u51FA\u4E86\uFF0C\u4ECD\u65E7\u4F1A\u88AB\u81EA\u52A8\u521B\u5EFA\u6062\u590D\u51FA\u6765\u3002</p><p>\u5728\u52A8\u6001\u6269\u5BB9\u7BA1\u7406\u65B9\u9762\uFF0C\u6211\u4EEC\u9700\u8981\u5F15\u5165\u5230\u53E6\u5916\u4E00\u4E2A\u53C2\u6570<code>scale\u3002</code></p><p>\u4F9D\u65E7\u662F\u5148\u770B\u4E0B\u7528\u6CD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root @ master replicas-set<span class="token punctuation">]</span> $ kubectl scale --help
\u4E3ADeployment\uFF0CReplicaSet\uFF0CReplication Controller\u6216StatefulSet\u8BBE\u7F6E\u65B0\u5927\u5C0F\u3002
 
Scale\u8FD8\u5141\u8BB8\u7528\u6237\u4E3A\u7F29\u653E\u64CD\u4F5C\u6307\u5B9A\u4E00\u4E2A\u6216\u591A\u4E2A\u524D\u63D0\u6761\u4EF6\u3002
 
\u5982\u679C\u6307\u5B9A\u4E86--current-replicas\u6216--resource-version\uFF0C\u5219\u5728\u5C1D\u8BD5\u6269\u5C55\u4E4B\u524D\u9A8C\u8BC1\u5B83\uFF0C\u5E76\u4E14\u5B83\u662F
\u4FDD\u8BC1\u5728\u5C06\u6BD4\u4F8B\u53D1\u9001\u5230\u670D\u52A1\u5668\u65F6\u524D\u63D0\u6761\u4EF6\u6210\u7ACB\u3002
 
\u4F8B\u5B50\uFF1A
  \uFF03\u5C06\u540D\u4E3A<span class="token string">&#39;foo&#39;</span>\u7684\u590D\u5236\u96C6\u7F29\u653E\u4E3A3\u3002
  kubectl scale --replicas <span class="token operator">=</span> <span class="token number">3</span> rs / foo
 
  \uFF03\u5C06\u7531\u201Cfoo.yaml\u201D\u4E2D\u6307\u5B9A\u7684\u7C7B\u578B\u548C\u540D\u79F0\u6807\u8BC6\u7684\u8D44\u6E90\u7F29\u653E\u4E3A3\u3002
  kubectl scale --replicas <span class="token operator">=</span> <span class="token number">3</span> -f foo.yaml
 
  \uFF03\u5982\u679C\u540D\u4E3Amysql\u5F53\u524D\u5927\u5C0F\u7684\u90E8\u7F72\u4E3A2\uFF0C\u5219\u5C06mysql\u6269\u5C55\u4E3A3\u3002
  kubectl scale --current-replicas <span class="token operator">=</span> <span class="token number">2</span> --replicas <span class="token operator">=</span> <span class="token number">3</span> deployment / mysql
 
  \uFF03\u7F29\u653E\u591A\u4E2A\u590D\u5236\u63A7\u5236\u5668\u3002
  kubectl scale --replicas <span class="token operator">=</span> <span class="token number">5</span> rc / foo rc / bar rc / baz
 
  \uFF03\u5C06\u540D\u4E3A<span class="token string">&#39;web&#39;</span>\u7684statefulset\u7F29\u653E\u4E3A3\u3002
  kubectl scale --replicas <span class="token operator">=</span> <span class="token number">3</span> statefulset / web
 
\u9009\u9879\uFF1A
      --all <span class="token operator">=</span> false\uFF1A\u9009\u62E9\u6307\u5B9A\u8D44\u6E90\u7C7B\u578B\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\u7684\u6240\u6709\u8D44\u6E90
      --current-replicas <span class="token operator">=</span> -1\uFF1A\u5F53\u524D\u5927\u5C0F\u7684\u524D\u63D0\u6761\u4EF6\u3002\u8981\u6C42\u8D44\u6E90\u7684\u5F53\u524D\u5927\u5C0F\u4E0E\u6B64\u5339\u914D
\u4EF7\u503C\u4EE5\u4FBF\u6269\u5927\u89C4\u6A21\u3002
  -f\uFF0C - filename <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\uFF1A\u6807\u8BC6\u8981\u8BBE\u7F6E\u65B0\u5927\u5C0F\u7684\u8D44\u6E90\u7684\u6587\u4EF6\u7684\u6587\u4EF6\u540D\uFF0C\u76EE\u5F55\u6216URL
      --include-extended-apis <span class="token operator">=</span> true\uFF1A\u5982\u679C\u4E3Atrue\uFF0C\u5219\u901A\u8FC7\u8C03\u7528API\u670D\u52A1\u5668\u5305\u542B\u65B0API\u7684\u5B9A\u4E49\u3002 <span class="token punctuation">[</span>\u9ED8\u8BA4\u4E3Atrue<span class="token punctuation">]</span>
  -o\uFF0C - output <span class="token operator">=</span><span class="token string">&#39;&#39;</span>\uFF1A\u8F93\u51FA\u6A21\u5F0F\u3002\u4F7F\u7528\u201C-o name\u201D\u8868\u793A\u8F83\u77ED\u7684\u8F93\u51FA\uFF08\u8D44\u6E90/\u540D\u79F0\uFF09\u3002
      --record <span class="token operator">=</span> false\uFF1A\u5728\u8D44\u6E90\u6CE8\u91CA\u4E2D\u8BB0\u5F55\u5F53\u524Dkubectl\u547D\u4EE4\u3002\u5982\u679C\u8BBE\u7F6E\u4E3Afalse\uFF0C\u8BF7\u4E0D\u8981\u8BB0\u5F55
\u547D\u4EE4\u3002\u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u8BB0\u5F55\u8BE5\u547D\u4EE4\u3002\u5982\u679C\u672A\u8BBE\u7F6E\uFF0C\u5219\u9ED8\u8BA4\u4EC5\u66F4\u65B0\u73B0\u6709\u6CE8\u91CA\u503C
\u5DF2\u7ECF\u5B58\u5728\u3002
  -R\uFF0C - recursive <span class="token operator">=</span> false\uFF1A\u9012\u5F52\u5904\u7406-f\uFF0C - filename\u4E2D\u4F7F\u7528\u7684\u76EE\u5F55\u3002\u5728\u60A8\u60F3\u8981\u7BA1\u7406\u65F6\u5F88\u6709\u7528
\u5728\u540C\u4E00\u76EE\u5F55\u4E2D\u7EC4\u7EC7\u7684\u76F8\u5173\u6E05\u5355\u3002
      --replicas <span class="token operator">=</span> -1\uFF1A\u65B0\u7684\u6240\u9700\u526F\u672C\u6570\u3002\u9700\u8981\u3002
      --resource-version <span class="token operator">=</span><span class="token string">&#39;&#39;</span>\uFF1A\u8D44\u6E90\u7248\u672C\u7684\u524D\u63D0\u6761\u4EF6\u3002\u8981\u6C42\u5F53\u524D\u8D44\u6E90\u7248\u672C\u4E0E\u6B64\u5339\u914D
\u4EF7\u503C\u4EE5\u4FBF\u6269\u5927\u89C4\u6A21\u3002
  -l\uFF0C - selector <span class="token operator">=</span><span class="token string">&#39;&#39;</span>\uFF1A\u8981\u8FC7\u6EE4\u7684\u9009\u62E9\u5668\uFF08\u6807\u7B7E\u67E5\u8BE2\uFF09\uFF0C\u652F\u6301<span class="token string">&#39;=&#39;</span>\uFF0C<span class="token string">&#39;==&#39;</span>\u548C<span class="token string">&#39;\uFF01=&#39;</span>\u3002\uFF08\u4F8B\u5982-l key1 <span class="token operator">=</span> value1\uFF0Ckey2 <span class="token operator">=</span> value2\uFF09
      --timeout <span class="token operator">=</span> 0s\uFF1A\u653E\u5F03\u7F29\u653E\u64CD\u4F5C\u4E4B\u524D\u7B49\u5F85\u7684\u65F6\u95F4\u957F\u5EA6\uFF0C\u96F6\u8868\u793A\u4E0D\u7B49\u5F85\u3002\u4EFB\u4F55\u5176\u4ED6
\u503C\u5E94\u5305\u542B\u76F8\u5E94\u7684\u65F6\u95F4\u5355\u4F4D\uFF08\u4F8B\u59821s\uFF0C2m\uFF0C3h\uFF09\u3002
 
\u7528\u6CD5\uFF1A
  kubectl scale <span class="token punctuation">[</span>--resource-version <span class="token operator">=</span> version<span class="token punctuation">]</span> <span class="token punctuation">[</span> - current-replicas <span class="token operator">=</span> count<span class="token punctuation">]</span> --replicas <span class="token operator">=</span> COUNT\uFF08-f FILENAME <span class="token operator">|</span> TYPE NAME\uFF09
<span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span>
 
\u4F7F\u7528\u201Ckubectl options\u201D\u83B7\u53D6\u5168\u5C40\u547D\u4EE4\u884C\u9009\u9879\u5217\u8868\uFF08\u9002\u7528\u4E8E\u6240\u6709\u547D\u4EE4\uFF09
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u73B0\u5728\uFF0C\u6211\u60F3\u628A\u521A\u521A\u542F\u52A8\u7684 nginx \u7684 3 \u4E2A pod \u53D8\u6210\u4E24\u4E2A\uFF0C\u53EF\u5982\u4E0B\u64CD\u4F5C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> scale rc nginx --replicas<span class="token operator">=</span><span class="token number">2</span>
replicationcontroller <span class="token string">&quot;nginx&quot;</span> scaled
<span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pods
NAME          READY     STATUS    RESTARTS   AGE
nginx-c5nk4   <span class="token number">1</span>/1       Running   <span class="token number">0</span>          13m
nginx-r2zcm   <span class="token number">1</span>/1       Running   <span class="token number">0</span>          13m
<span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get rc
NAME      DESIRED   CURRENT   READY     AGE
nginx     <span class="token number">2</span>         <span class="token number">2</span>         <span class="token number">2</span>         14m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u65F6\u770B\u5230\u5DF2\u7ECF\u5269\u4E0B\u4E24\u4E2A\u4E86\u3002\u90A3\u4E48\u6269\u5BB9\u4E5F\u662F\u4E00\u6837\u7684\uFF0C\u76F4\u63A5\u6269\u5BB9\u5C31\u884C\u4E86\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> scale rc nginx --replicas<span class="token operator">=</span><span class="token number">4</span>
replicationcontroller <span class="token string">&quot;nginx&quot;</span> scaled
<span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get pods
NAME          READY     STATUS              RESTARTS   AGE
nginx-99nns   <span class="token number">0</span>/1       ContainerCreating   <span class="token number">0</span>          2s
nginx-c5nk4   <span class="token number">1</span>/1       Running             <span class="token number">0</span>          42m
nginx-fjnrn   <span class="token number">0</span>/1       ContainerCreating   <span class="token number">0</span>          2s
nginx-r2zcm   <span class="token number">1</span>/1       Running             <span class="token number">0</span>          42m
<span class="token punctuation">[</span>root@master replicas-set<span class="token punctuation">]</span><span class="token variable">$kubectl</span> get rc
NAME      DESIRED   CURRENT   READY     AGE
nginx     <span class="token number">4</span>         <span class="token number">4</span>         <span class="token number">3</span>         42m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5C31\u8FD9\u6837\uFF0C\u975E\u5E38\u65B9\u4FBF\u7684\u5C31\u5B9E\u73B0\u4E86\u6269\u5BB9\u7B49\u64CD\u4F5C\u4E86\u3002</p>`,23);function p(l,r){return e}var o=s(a,[["render",p]]);export{o as default};
