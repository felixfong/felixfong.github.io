import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="_1-\u4E0B\u8F7D\u548C\u5206\u53D1-kubectl-\u4E8C\u8FDB\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u548C\u5206\u53D1-kubectl-\u4E8C\u8FDB\u5236\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u4E0B\u8F7D\u548C\u5206\u53D1 kubectl \u4E8C\u8FDB\u5236\u6587\u4EF6</h2><p>\u4E0B\u8F7D\u548C\u89E3\u538B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://dl.k8s.io/v1.10.4/kubernetes-client-linux-amd64.tar.gz
<span class="token function">tar</span> -xzvf kubernetes-client-linux-amd64.tar.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5206\u53D1\u5230\u6240\u6709\u4F7F\u7528 kubectl \u7684\u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    scp kubernetes/client/bin/kubectl k8s@\${node_ip}:/opt/k8s/bin/
    ssh k8s@\${node_ip} &quot;chmod +x /opt/k8s/bin/*&quot;
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_2-\u521B\u5EFA-admin-\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA-admin-\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA admin \u8BC1\u4E66\u548C\u79C1\u94A5</h2><p>kubectl \u4E0E apiserver https \u5B89\u5168\u7AEF\u53E3\u901A\u4FE1\uFF0Capiserver \u5BF9\u63D0\u4F9B\u7684\u8BC1\u4E66\u8FDB\u884C\u8BA4\u8BC1\u548C\u6388\u6743\u3002</p><p>kubectl \u4F5C\u4E3A\u96C6\u7FA4\u7684\u7BA1\u7406\u5DE5\u5177\uFF0C\u9700\u8981\u88AB\u6388\u4E88\u6700\u9AD8\u6743\u9650\u3002\u8FD9\u91CC\u521B\u5EFA\u5177\u6709\u6700\u9AD8\u6743\u9650\u7684 admin \u8BC1\u4E66\u3002</p><p>\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> admin-csr.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;CN&quot;: &quot;admin&quot;,
  &quot;hosts&quot;: [],
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;ST&quot;: &quot;BeiJing&quot;,
      &quot;L&quot;: &quot;BeiJing&quot;,
      &quot;O&quot;: &quot;system:masters&quot;,
      &quot;OU&quot;: &quot;4Paradigm&quot;
    }
  ]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>O \u4E3A system:masters\uFF0Ckube-apiserver \u6536\u5230\u8BE5\u8BC1\u4E66\u540E\u5C06\u8BF7\u6C42\u7684 Group \u8BBE\u7F6E\u4E3A system:masters\uFF1B</li><li>\u9884\u5B9A\u4E49\u7684 ClusterRoleBinding cluster-admin \u5C06 Group system:masters \u4E0E Role cluster-admin \u7ED1\u5B9A\uFF0C\u8BE5 Role \u6388\u4E88\u6240\u6709 API \u7684\u6743\u9650\uFF1B</li><li>\u8BE5\u8BC1\u4E66\u53EA\u4F1A\u88AB kubectl \u5F53\u505A client \u8BC1\u4E66\u4F7F\u7528\uFF0C\u6240\u4EE5 hosts \u5B57\u6BB5\u4E3A\u7A7A\uFF1B</li></ul><p>\u751F\u6210\u8BC1\u4E66\u548C\u79C1\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cfssl</span> gencert -ca<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
-ca-key<span class="token operator">=</span>/etc/kubernetes/cert/ca-key.pem <span class="token punctuation">\\</span>
-config<span class="token operator">=</span>/etc/kubernetes/cert/ca-config.json <span class="token punctuation">\\</span>
-profile<span class="token operator">=</span>kubernetes admin-csr.json <span class="token operator">|</span> cfssljson -bare admin
<span class="token variable">$ls</span> admin*
admin.csr  admin-csr.json  admin-key.pem  admin.pem  admin.pfx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_3-\u521B\u5EFA-kubeconfig-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA-kubeconfig-\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA kubeconfig \u6587\u4EF6</h2><p>kubeconfig \u4E3A kubectl \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5305\u542B\u8BBF\u95EE apiserver \u7684\u6240\u6709\u4FE1\u606F\uFF0C\u5982 apiserver \u5730\u5740\u3001CA \u8BC1\u4E66\u548C\u81EA\u8EAB\u4F7F\u7528\u7684\u8BC1\u4E66\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u52A0\u8F7D\u73AF\u5883\u914D\u7F6E</span>
<span class="token builtin class-name">source</span> /opt/k8s/bin/environment.sh
<span class="token comment"># \u8BBE\u7F6E\u96C6\u7FA4\u53C2\u6570</span>
kubectl config set-cluster kubernetes <span class="token punctuation">\\</span>
  --certificate-authority<span class="token operator">=</span>/etc/kubernetes/cert/ca.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --server<span class="token operator">=</span><span class="token variable">\${KUBE_APISERVER}</span> <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kubectl.kubeconfig
<span class="token comment"># \u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u53C2\u6570</span>
kubectl config set-credentials admin <span class="token punctuation">\\</span>
  --client-certificate<span class="token operator">=</span>admin.pem <span class="token punctuation">\\</span>
  --client-key<span class="token operator">=</span>admin-key.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kubectl.kubeconfig
<span class="token comment"># \u8BBE\u7F6E\u4E0A\u4E0B\u6587\u53C2\u6570</span>
kubectl config set-context kubernetes <span class="token punctuation">\\</span>
  --cluster<span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
  --user<span class="token operator">=</span>admin <span class="token punctuation">\\</span>
  --kubeconfig<span class="token operator">=</span>kubectl.kubeconfig
<span class="token comment"># \u8BBE\u7F6E\u9ED8\u8BA4\u4E0A\u4E0B\u6587</span>
kubectl config use-context kubernetes --kubeconfig<span class="token operator">=</span>kubectl.kubeconfig
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li><code>--certificate-authority\uFF1A</code>\u9A8C\u8BC1 kube-apiserver \u8BC1\u4E66\u7684\u6839\u8BC1\u4E66\uFF1B</li><li><code>--client-certificate\u3001--client-key\uFF1A</code>\u521A\u751F\u6210\u7684 admin \u8BC1\u4E66\u548C\u79C1\u94A5\uFF0C\u8FDE\u63A5 kube-apiserver \u65F6\u4F7F\u7528\uFF1B</li><li><code>--embed-certs=true\uFF1A</code>\u5C06 ca.pem \u548C admin.pem \u8BC1\u4E66\u5185\u5BB9\u5D4C\u5165\u5230\u751F\u6210\u7684 kubectl.kubeconfig \u6587\u4EF6\u4E2D (\u4E0D\u52A0\u65F6\uFF0C\u5199\u5165\u7684\u662F\u8BC1\u4E66\u6587\u4EF6\u8DEF\u5F84)\uFF1B</li></ul><h2 id="_4-\u5206\u53D1-kubeconfig-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u5206\u53D1-kubeconfig-\u6587\u4EF6" aria-hidden="true">#</a> 4\uFF0C\u5206\u53D1 kubeconfig \u6587\u4EF6</h2><p>\u5206\u53D1\u5230\u6240\u6709\u4F7F\u7528 kubectl \u547D\u4EE4\u7684\u8282\u70B9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    ssh k8s@\${node_ip} &quot;mkdir -p ~/.kube&quot;
    scp kubectl.kubeconfig k8s@\${node_ip}:~/.kube/config
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,20);function p(r,t){return e}var o=s(a,[["render",p]]);export{o as default};
