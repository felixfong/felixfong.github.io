import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>\u73B0\u5728\uFF0C\u518D\u53BB\u4E86\u89E3\u4E00\u4E2A\u65B0\u7684\u5B9A\u4E49\u65B9\u5F0F\u3002</p><p>\u4E86\u89E3\u4E4B\u524D\uFF0C\u5148\u5C06\u521A\u521A\u7684 pod \u5220\u9664\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl delete <span class="token punctuation">-</span>f rc_nginx.yml
replicationcontroller &quot;nginx&quot; deleted
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get pods
NAME          READY     STATUS        RESTARTS   AGE
nginx<span class="token punctuation">-</span>99nns   0/1       Terminating   0          6m
nginx<span class="token punctuation">-</span>c5nk4   0/1       Terminating   0          49m
nginx<span class="token punctuation">-</span>fjnrn   0/1       Terminating   0          6m
nginx<span class="token punctuation">-</span>r2zcm   0/1       Terminating   0          49m
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get pods
NAME          READY     STATUS        RESTARTS   AGE
nginx<span class="token punctuation">-</span>fjnrn   0/1       Terminating   0          6m
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get pods
No resources found.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230 pod \u4F1A\u6162\u6162\u7684\u6D88\u5931\u6389\uFF0C\u6709\u70B9\u6DE1\u5165\u6DE1\u51FA\u7684\u90A3\u79CD\u611F\u89C9\u54C8\u3002</p><p>\u90A3\u4E48\u65B0\u7684\u5B9A\u4E49\u7C7B\u578B\u53EB\u505A<code>ReplicaSet</code>\u3002</p><p>\u5176\u5B9E\u8FD9\u4E2A\u5B9A\u4E49\u65B9\u5F0F\u4E0E\u4E0A\u8FB9\u4ECB\u7ECD\u7684<code>ReplicationController</code>\u975E\u5E38\u50CF\uFF0C\u5B98\u7F51\u8FD9\u6837\u4ECB\u7ECD\uFF1A</p><p>ReplicaSet \u662F\u4E0B\u4E00\u4EE3\u590D\u5236\u63A7\u5236\u5668\u3002\u73B0\u5728 ReplicaSet \u548C Replication Controller \u4E4B\u95F4\u7684\u552F\u4E00\u533A\u522B\u662F\u9009\u62E9\u5668\u652F\u6301\u3002ReplicaSet \u652F\u6301\u6807\u7B7E\u7528\u6237\u6307\u5357\u4E2D\u63CF\u8FF0\u7684\u65B0\u7684\u57FA\u4E8E\u96C6\u5408\u7684\u9009\u62E9\u5668\u8981\u6C42\uFF0C \u800C Replication Controller \u4EC5\u652F\u6301\u57FA\u4E8E\u7B49\u540C\u7684\u9009\u62E9\u5668\u8981\u6C42\u3002</p><p>\u540C\u6837\u662F\u5B9A\u4E49\u4E00\u4E2A yaml \u6587\u4EF6\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$cat rs_nginx.yml
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ReplicaSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">tier</span><span class="token punctuation">:</span> frontend
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">tier</span><span class="token punctuation">:</span> frontend
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">tier</span><span class="token punctuation">:</span> frontend
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u521B\u5EFA pod:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl create <span class="token punctuation">-</span>f rs_nginx.yml
replicaset.apps &quot;nginx&quot; created
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get pods
NAME          READY     STATUS              RESTARTS   AGE
nginx<span class="token punctuation">-</span>4vp95   1/1       Running             0          8s
nginx<span class="token punctuation">-</span>9xxp6   0/1       ContainerCreating   0          8s
nginx<span class="token punctuation">-</span>f8vfg   1/1       Running             0          8s
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get rs
NAME      DESIRED   CURRENT   READY     AGE
nginx     3         3         1         4s
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5173\u4E8E\u6269\u5C55\u7B49\uFF0C\u4E0E\u4E0A\u8FB9\u7684\u4E00\u6837\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl scale rs nginx <span class="token punctuation">-</span><span class="token punctuation">-</span>replicas=2
replicaset.extensions &quot;nginx&quot; scaled
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get pods
NAME          READY     STATUS        RESTARTS   AGE
nginx<span class="token punctuation">-</span>4vp95   1/1       Running       0          1m
nginx<span class="token punctuation">-</span>9xxp6   0/1       Terminating   0          1m
nginx<span class="token punctuation">-</span>f8vfg   1/1       Running       0          1m
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get rs
NAME      DESIRED   CURRENT   READY     AGE
nginx     2         2         2         1m
 
 
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl scale rs nginx <span class="token punctuation">-</span><span class="token punctuation">-</span>replicas=5
replicaset.extensions &quot;nginx&quot; scaled
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get pods
NAME          READY     STATUS              RESTARTS   AGE
nginx<span class="token punctuation">-</span>4vp95   1/1       Running             0          2m
nginx<span class="token punctuation">-</span>bbxpk   0/1       ContainerCreating   0          2s
nginx<span class="token punctuation">-</span>cg8ts   0/1       ContainerCreating   0          2s
nginx<span class="token punctuation">-</span>f8vfg   1/1       Running             0          2m
nginx<span class="token punctuation">-</span>sgvpd   0/1       ContainerCreating   0          2s
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get rs
NAME      DESIRED   CURRENT   READY     AGE
nginx     5         5         3         2m
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get rs
NAME      DESIRED   CURRENT   READY     AGE
nginx     5         5         4         2m
<span class="token punctuation">[</span>root@master replicas<span class="token punctuation">-</span>set<span class="token punctuation">]</span>$kubectl get rs
NAME      DESIRED   CURRENT   READY     AGE
nginx     5         5         5         2m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u8FD9\u4E2A\u77E5\u8BC6\u70B9\uFF0C\u5C31\u5230\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u6839\u636E\u4EE5\u4E0A\u7684\u4E00\u4E9B\u5C0F\u5B9E\u8DF5\uFF0C\u7406\u89E3\u5176\u5DE5\u4F5C\u65B9\u5F0F\uFF01</p>`,14);function e(t,l){return p}var o=s(a,[["render",e]]);export{o as default};
