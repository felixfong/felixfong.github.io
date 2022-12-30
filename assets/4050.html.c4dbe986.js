import{e as s}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h2 id="_1-\u5FEB\u901F\u90E8\u7F72\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u5FEB\u901F\u90E8\u7F72\u3002" aria-hidden="true">#</a> 1\uFF0C\u5FEB\u901F\u90E8\u7F72\u3002</h2><p>\u4E0B\u8F7D\u5C31\u4E0D\u591A\u8BF4\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u53BB github \u8FDB\u884C\u4E0B\u8F7D\u3002</p><p>\u5355\u673A\u901A\u8FC7\u4E0D\u540C\u7AEF\u53E3\uFF0C\u90E8\u7F72\u4E00\u4E2A\u7B80\u6613\u96C6\u7FA4\u3002</p><p><code>node-1.sh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> /mnt/etcd/node-1.sh
etcd --name infra1 --initial-advertise-peer-urls http://192.168.0.122:2381 <span class="token punctuation">\\</span>
    --listen-peer-urls http://192.168.0.122:2381 <span class="token punctuation">\\</span>
    --listen-client-urls http://192.168.0.122:2379 <span class="token punctuation">\\</span>
    --advertise-client-urls http://192.168.0.122:2379 <span class="token punctuation">\\</span>
    --initial-cluster-token etcd-cluster-1 <span class="token punctuation">\\</span>
    --initial-cluster <span class="token assign-left variable">infra1</span><span class="token operator">=</span>http://192.168.0.122:2381,infra2<span class="token operator">=</span>http://192.168.0.122:2382,infra3<span class="token operator">=</span>http://192.168.0.122:2383 <span class="token punctuation">\\</span>
    --initial-cluster-state new <span class="token operator">&amp;&gt;</span> nohup1.out <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>node-2.sh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> /mnt/etcd/node-2.sh
etcd --name infra2 --initial-advertise-peer-urls http://192.168.0.122:2382 <span class="token punctuation">\\</span>
    --listen-peer-urls http://192.168.0.122:2382 <span class="token punctuation">\\</span>
    --listen-client-urls http://192.168.0.122:2378 <span class="token punctuation">\\</span>
    --advertise-client-urls http://192.168.0.122:2378 <span class="token punctuation">\\</span>
    --initial-cluster-token etcd-cluster-1 <span class="token punctuation">\\</span>
    --initial-cluster <span class="token assign-left variable">infra1</span><span class="token operator">=</span>http://192.168.0.122:2381,infra2<span class="token operator">=</span>http://192.168.0.122:2382,infra3<span class="token operator">=</span>http://192.168.0.122:2383 <span class="token punctuation">\\</span>
    --initial-cluster-state new <span class="token operator">&amp;&gt;</span> nohup2.out <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>node-3.sh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> /mnt/etcd/node-3.sh
etcd --name infra3 --initial-advertise-peer-urls http://192.168.0.122:2383 <span class="token punctuation">\\</span>
    --listen-peer-urls http://192.168.0.122:2383 <span class="token punctuation">\\</span>
    --listen-client-urls http://192.168.0.122:2377 <span class="token punctuation">\\</span>
    --advertise-client-urls http://192.168.0.122:2377 <span class="token punctuation">\\</span>
    --initial-cluster-token etcd-cluster-1 <span class="token punctuation">\\</span>
    --initial-cluster <span class="token assign-left variable">infra1</span><span class="token operator">=</span>http://192.168.0.122:2381,infra2<span class="token operator">=</span>http://192.168.0.122:2382,infra3<span class="token operator">=</span>http://192.168.0.122:2383 <span class="token punctuation">\\</span>
    --initial-cluster-state new <span class="token operator">&amp;&gt;</span> nohup3.out <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u9010\u4E00\u8FD0\u884C\u5982\u4E0A\u811A\u672C\uFF0C\u5373\u53EF\u542F\u52A8\u4E00\u4E2A\u96C6\u7FA4\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/c7ee7fa0ef52bd72.jpg" alt="img"></p><h2 id="_2-\u67E5\u770B\u72B6\u6001\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u72B6\u6001\u3002" aria-hidden="true">#</a> 2\uFF0C\u67E5\u770B\u72B6\u6001\u3002</h2><p>\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u53EF\u4EE5\u7B80\u5355\u68C0\u67E5\u96C6\u7FA4\u72B6\u6001\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ etcdctl --write-out<span class="token operator">=</span>table --endpoints<span class="token operator">=</span>http://192.168.0.122:2379,http://192.168.0.122:2377,http://192.168.0.122:2378 endpoint status
+---------------------------+------------------+---------+---------+-----------+-----------+------------+
<span class="token operator">|</span>         ENDPOINT          <span class="token operator">|</span>        ID        <span class="token operator">|</span> VERSION <span class="token operator">|</span> DB SIZE <span class="token operator">|</span> IS LEADER <span class="token operator">|</span> RAFT <span class="token environment constant">TERM</span> <span class="token operator">|</span> RAFT INDEX <span class="token operator">|</span>
+---------------------------+------------------+---------+---------+-----------+-----------+------------+
<span class="token operator">|</span> http://192.168.0.122:2379 <span class="token operator">|</span> 13a3eecc5a072589 <span class="token operator">|</span>  <span class="token number">3.3</span>.18 <span class="token operator">|</span>   <span class="token number">20</span> kB <span class="token operator">|</span>      <span class="token boolean">true</span> <span class="token operator">|</span>         <span class="token number">3</span> <span class="token operator">|</span>         <span class="token number">11</span> <span class="token operator">|</span>
<span class="token operator">|</span> http://192.168.0.122:2377 <span class="token operator">|</span> 2b3234939251977f <span class="token operator">|</span>  <span class="token number">3.3</span>.18 <span class="token operator">|</span>   <span class="token number">20</span> kB <span class="token operator">|</span>     <span class="token boolean">false</span> <span class="token operator">|</span>         <span class="token number">3</span> <span class="token operator">|</span>         <span class="token number">11</span> <span class="token operator">|</span>
<span class="token operator">|</span> http://192.168.0.122:2378 <span class="token operator">|</span> ca4d20bca4cb0ff0 <span class="token operator">|</span>  <span class="token number">3.3</span>.18 <span class="token operator">|</span>   <span class="token number">20</span> kB <span class="token operator">|</span>     <span class="token boolean">false</span> <span class="token operator">|</span>         <span class="token number">3</span> <span class="token operator">|</span>         <span class="token number">11</span> <span class="token operator">|</span>
+---------------------------+------------------+---------+---------+-----------+-----------+------------+
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5404\u4E2A\u4FE1\u606F\u5F88\u6E05\u6670\u53EF\u4EE5\u770B\u5230\u3002</p><h2 id="_3-\u7B80\u5355\u4F7F\u7528\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u7B80\u5355\u4F7F\u7528\u3002" aria-hidden="true">#</a> 3\uFF0C\u7B80\u5355\u4F7F\u7528\u3002</h2><p>\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u6761\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">ETCD_CLUSTER</span><span class="token operator">=</span><span class="token string">&quot;http://192.168.0.122:2379,http://192.168.0.122:2377,http://192.168.0.122:2378&quot;</span>
$ etcdctl --endpoints<span class="token operator">=</span><span class="token variable">$ETCD_CLUSTER</span> put eryajf <span class="token string">&quot;test&quot;</span>
No <span class="token builtin class-name">help</span> topic <span class="token keyword">for</span> <span class="token string">&#39;put&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u770B\u5230\u5931\u8D25\u4E86\uFF0C\u62A5\u9519 <code>No help topic for &#39;put&#39;</code>\uFF0C\u89E3\u51B3\u65B9\u6CD5\u662F\u8BBE\u7F6E\u5982\u4E0B\u73AF\u5883\u53D8\u91CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u518D\u6267\u884C\u5982\u4E0A\u547D\u4EE4\uFF0C\u53D1\u73B0\u5C31\u53EF\u4EE5\u6210\u529F\u4E86\u3002</p><p>\u83B7\u53D6\u5982\u4E0A\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ etcdctl --endpoints<span class="token operator">=</span><span class="token variable">$ETCD_CLUSTER</span> get eryajf
eryajf
<span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,23);function p(t,r){return e}var c=n(a,[["render",p]]);export{c as default};