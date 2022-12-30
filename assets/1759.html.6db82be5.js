import{e as s}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h2 id="_1-\u521B\u5EFA-ca-\u8BC1\u4E66\u548C\u79D8\u94A5" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-ca-\u8BC1\u4E66\u548C\u79D8\u94A5" aria-hidden="true">#</a> 1, \u521B\u5EFA CA \u8BC1\u4E66\u548C\u79D8\u94A5</h2><p>kubernetes \u7CFB\u7EDF\u5404\u7EC4\u4EF6\u9700\u8981\u4F7F\u7528 TLS \u8BC1\u4E66\u5BF9\u901A\u4FE1\u8FDB\u884C\u52A0\u5BC6\uFF0C\u672C\u6587\u6863\u4F7F\u7528 CloudFlare \u7684 PKI \u5DE5\u5177\u96C6 cfssl \u6765\u751F\u6210 Certificate Authority (CA) \u8BC1\u4E66\u548C\u79D8\u94A5\u6587\u4EF6\uFF0CCA \u662F\u81EA\u7B7E\u540D\u7684\u8BC1\u4E66\uFF0C\u7528\u6765\u7B7E\u540D\u540E\u7EED\u521B\u5EFA\u7684\u5176\u5B83 TLS \u8BC1\u4E66\u3002</p><p>\u4EE5\u4E0B\u64CD\u4F5C\u90FD\u5728 master \u8282\u70B9\u5373 192.168.106.3 \u4E0A\u6267\u884C\uFF0C\u8BC1\u4E66\u53EA\u9700\u8981\u521B\u5EFA\u4E00\u6B21\u5373\u53EF\uFF0C\u4EE5\u540E\u5728\u5411\u96C6\u7FA4\u4E2D\u6DFB\u52A0\u65B0\u8282\u70B9\u65F6\u53EA\u8981\u5C06 /etc/kubernetes/ \u76EE\u5F55\u4E0B\u7684\u8BC1\u4E66\u62F7\u8D1D\u5230\u65B0\u8282\u70B9\u4E0A\u5373\u53EF\u3002</p><h2 id="_2-\u5B89\u88C5-cfssl" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5-cfssl" aria-hidden="true">#</a> 2, \u5B89\u88C5 CFSSL</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://pkg.cfssl.org/R1.2/cfssl_linux-amd64
<span class="token function">chmod</span> +x cfssl_linux-amd64
<span class="token function">mv</span> cfssl_linux-amd64 /usr/local/bin/cfssl
 
<span class="token function">wget</span> https://pkg.cfssl.org/R1.2/cfssljson_linux-amd64
<span class="token function">chmod</span> +x cfssljson_linux-amd64
<span class="token function">mv</span> cfssljson_linux-amd64 /usr/local/bin/cfssljson
 
<span class="token function">wget</span> https://pkg.cfssl.org/R1.2/cfssl-certinfo_linux-amd64
<span class="token function">chmod</span> +x cfssl-certinfo_linux-amd64
<span class="token function">mv</span> cfssl-certinfo_linux-amd64 /usr/local/bin/cfssl-certinfo
 
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_3-\u521B\u5EFA-ca-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA-ca-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 3, \u521B\u5EFA CA \u914D\u7F6E\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># mkdir /root/ssl &amp;&amp; cd /root/ssl</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> ca-config.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{
  &quot;signing&quot;: {
    &quot;default&quot;: {
      &quot;expiry&quot;: &quot;8760h&quot;
    },
    &quot;profiles&quot;: {
      &quot;kubernetes&quot;: {
        &quot;usages&quot;: [
            &quot;signing&quot;,
            &quot;key encipherment&quot;,
            &quot;server auth&quot;,
            &quot;client auth&quot;
        ],
        &quot;expiry&quot;: &quot;8760h&quot;
      }
    }
  }
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li><code>ca-config.json</code>\uFF1A\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A profiles\uFF0C\u5206\u522B\u6307\u5B9A\u4E0D\u540C\u7684\u8FC7\u671F\u65F6\u95F4\u3001\u4F7F\u7528\u573A\u666F\u7B49\u53C2\u6570\uFF1B\u540E\u7EED\u5728\u7B7E\u540D\u8BC1\u4E66\u65F6\u4F7F\u7528\u67D0\u4E2A profile\uFF1B</li><li><code>signing</code>\uFF1A\u8868\u793A\u8BE5\u8BC1\u4E66\u53EF\u7528\u4E8E\u7B7E\u540D\u5176\u5B83\u8BC1\u4E66\uFF1B\u751F\u6210\u7684 ca.pem \u8BC1\u4E66\u4E2D CA=TRUE\uFF1B</li><li><code>server auth</code>\uFF1A\u8868\u793A client \u53EF\u4EE5\u7528\u8BE5 CA \u5BF9 server \u63D0\u4F9B\u7684\u8BC1\u4E66\u8FDB\u884C\u9A8C\u8BC1\uFF1B</li><li><code>client auth</code>\uFF1A\u8868\u793A server \u53EF\u4EE5\u7528\u8BE5 CA \u5BF9 client \u63D0\u4F9B\u7684\u8BC1\u4E66\u8FDB\u884C\u9A8C\u8BC1\uFF1B</li></ul><h2 id="_4-\u521B\u5EFA-ca-\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA-ca-\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42" aria-hidden="true">#</a> 4, \u521B\u5EFA CA \u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ca-csr.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{
  &quot;CN&quot;: &quot;kubernetes&quot;,
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;ST&quot;: &quot;BeiJing&quot;,
      &quot;L&quot;: &quot;BeiJing&quot;,
      &quot;O&quot;: &quot;k8s&quot;,
      &quot;OU&quot;: &quot;System&quot;
    }
  ]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li><code>\u201CCN\u201D</code>\uFF1ACommon Name\uFF0Ckube-apiserver \u4ECE\u8BC1\u4E66\u4E2D\u63D0\u53D6\u8BE5\u5B57\u6BB5\u4F5C\u4E3A\u8BF7\u6C42\u7684\u7528\u6237\u540D (User Name)\uFF1B\u6D4F\u89C8\u5668\u4F7F\u7528\u8BE5\u5B57\u6BB5\u9A8C\u8BC1\u7F51\u7AD9\u662F\u5426\u5408\u6CD5\uFF1B</li><li><code>\u201CO\u201D</code>\uFF1AOrganization\uFF0Ckube-apiserver \u4ECE\u8BC1\u4E66\u4E2D\u63D0\u53D6\u8BE5\u5B57\u6BB5\u4F5C\u4E3A\u8BF7\u6C42\u7528\u6237\u6240\u5C5E\u7684\u7EC4 (Group)\uFF1B</li></ul><h2 id="_5-\u751F\u6210-ca-\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_5-\u751F\u6210-ca-\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 5, \u751F\u6210 CA \u8BC1\u4E66\u548C\u79C1\u94A5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cfssl gencert -initca ca-csr.json | cfssljson -bare ca</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA kubernetes \u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kubernetes-csr.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{
   &quot;CN&quot;: &quot;kubernetes&quot;,
    &quot;hosts&quot;: [
      &quot;127.0.0.1&quot;,
      &quot;192.168.106.3&quot;,
      &quot;192.168.106.4&quot;,
      &quot;192.168.106.5&quot;,
      &quot;10.254.0.1&quot;,
      &quot;kubernetes&quot;,
      &quot;kubernetes.default&quot;,
      &quot;kubernetes.default.svc&quot;,
      &quot;kubernetes.default.svc.cluster&quot;,
      &quot;kubernetes.default.svc.cluster.local&quot;
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
            &quot;O&quot;: &quot;k8s&quot;,
            &quot;OU&quot;: &quot;System&quot;
        }
    ]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u6CE8\u610F\uFF1A\u5982\u4E0A 3 \u4E2A ip \u66FF\u6362\u6210\u81EA\u5DF1\u670D\u52A1\u5668\u7684 ip\u3002</p><p>hosts \u4E2D\u7684\u5185\u5BB9\u53EF\u4EE5\u4E3A\u7A7A\uFF0C\u5373\u4F7F\u6309\u7167\u4E0A\u9762\u7684\u914D\u7F6E\uFF0C\u5411\u96C6\u7FA4\u4E2D\u589E\u52A0\u65B0\u8282\u70B9\u540E\u4E5F\u4E0D\u9700\u8981\u91CD\u65B0\u751F\u6210\u8BC1\u4E66\u3002</p><p>\u5982\u679C hosts \u5B57\u6BB5\u4E0D\u4E3A\u7A7A\u5219\u9700\u8981\u6307\u5B9A\u6388\u6743\u4F7F\u7528\u8BE5\u8BC1\u4E66\u7684 IP \u6216\u57DF\u540D\u5217\u8868\uFF0C\u7531\u4E8E\u8BE5\u8BC1\u4E66\u540E\u7EED\u88AB etcd \u96C6\u7FA4\u548C kubernetes master \u96C6\u7FA4\u4F7F\u7528\uFF0C\u6240\u4EE5\u4E0A\u9762\u5206\u522B\u6307\u5B9A\u4E86 etcd \u96C6\u7FA4\u3001kubernetes master \u96C6\u7FA4\u7684\u4E3B\u673A IP \u548C kubernetes \u670D\u52A1\u7684\u670D\u52A1 IP\u3002</p><h2 id="_6-\u751F\u6210-kubernetes-\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_6-\u751F\u6210-kubernetes-\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 6, \u751F\u6210 kubernetes \u8BC1\u4E66\u548C\u79C1\u94A5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes kubernetes-csr.json | cfssljson -bare kubernetes</span>
 
<span class="token comment"># ls kubernetes*</span>
kubernetes.csr  kubernetes-csr.json  kubernetes-key.pem  kubernetes.pem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_7-\u521B\u5EFA-admin-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_7-\u521B\u5EFA-admin-\u8BC1\u4E66" aria-hidden="true">#</a> 7, \u521B\u5EFA admin \u8BC1\u4E66</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> admin-csr.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
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
      &quot;OU&quot;: &quot;System&quot;
    }
  ]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>kube-apiserver \u4F7F\u7528 RBAC \u5BF9\u5BA2\u6237\u7AEF (\u5982 kubelet\u3001kube-proxy\u3001Pod) \u8BF7\u6C42\u8FDB\u884C\u6388\u6743\uFF1B kube-apiserver \u9884\u5B9A\u4E49\u4E86\u4E00\u4E9B RBAC \u4F7F\u7528\u7684 RoleBindings\uFF0C\u5982 cluster-admin \u5C06 Group system:masters \u4E0E Role cluster-admin \u7ED1\u5B9A\uFF0C\u8BE5 Role \u6388\u4E88\u4E86\u8C03\u7528 kube-apiserver \u7684\u6240\u6709 API \u7684\u6743\u9650\uFF1B OU \u6307\u5B9A\u8BE5\u8BC1\u4E66\u7684 Group \u4E3A system:masters\uFF0Ckubelet \u4F7F\u7528\u8BE5\u8BC1\u4E66\u8BBF\u95EE kube-apiserver \u65F6 \uFF0C\u7531\u4E8E\u8BC1\u4E66\u88AB CA \u7B7E\u540D\uFF0C\u6240\u4EE5\u8BA4\u8BC1\u901A\u8FC7\uFF0C\u540C\u65F6\u7531\u4E8E\u8BC1\u4E66\u7528\u6237\u7EC4\u4E3A\u7ECF\u8FC7\u9884\u6388\u6743\u7684 system:masters\uFF0C\u6240\u4EE5\u88AB\u6388\u4E88\u8BBF\u95EE\u6240\u6709 API \u7684\u6743\u9650\u3002</p><h2 id="_8-\u751F\u6210-admin-\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_8-\u751F\u6210-admin-\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 8, \u751F\u6210 admin \u8BC1\u4E66\u548C\u79C1\u94A5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes admin-csr.json | cfssljson -bare admin</span>
 
<span class="token comment"># ls admin*</span>
admin.csr  admin-csr.json  admin-key.pem  admin.pem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_9-\u521B\u5EFA-kube-proxy-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_9-\u521B\u5EFA-kube-proxy-\u8BC1\u4E66" aria-hidden="true">#</a> 9, \u521B\u5EFA kube-proxy \u8BC1\u4E66</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> kube-proxy-csr.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{
  &quot;CN&quot;: &quot;system:kube-proxy&quot;,
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
      &quot;O&quot;: &quot;k8s&quot;,
      &quot;OU&quot;: &quot;System&quot;
    }
  ]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>CN \u6307\u5B9A\u8BE5\u8BC1\u4E66\u7684 User \u4E3A system:kube-proxy\uFF1B kube-apiserver \u9884\u5B9A\u4E49\u7684 RoleBinding cluster-admin \u5C06 User system:kube-proxy \u4E0E Role system:node-proxier \u7ED1\u5B9A\uFF0C\u8BE5 Role \u6388\u4E88\u4E86\u8C03\u7528 kube-apiserver Proxy \u76F8\u5173 API \u7684\u6743\u9650\u3002</p><h2 id="_10-\u751F\u6210-kube-proxy-\u5BA2\u6237\u7AEF\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_10-\u751F\u6210-kube-proxy-\u5BA2\u6237\u7AEF\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 10, \u751F\u6210 kube-proxy \u5BA2\u6237\u7AEF\u8BC1\u4E66\u548C\u79C1\u94A5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes  kube-proxy-csr.json | cfssljson -bare kube-proxy</span>
 
<span class="token comment"># ls kube-proxy*</span>
kube-proxy.csr  kube-proxy-csr.json  kube-proxy-key.pem  kube-proxy.pem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_11-\u5206\u53D1\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_11-\u5206\u53D1\u8BC1\u4E66" aria-hidden="true">#</a> 11, \u5206\u53D1\u8BC1\u4E66</h2><p>\u5C06\u751F\u6210\u7684\u8BC1\u4E66\u548C\u79D8\u94A5\u6587\u4EF6\uFF08\u540E\u7F00\u540D\u4E3A. pem\uFF09\u62F7\u8D1D\u5230\u6240\u6709\u673A\u5668\u7684 /etc/kubernetes/ssl \u76EE\u5F55\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># mkdir -p /etc/kubernetes/ssl</span>
<span class="token comment"># cp *.pem /etc/kubernetes/ssl</span>
 
//\u524D\u63D0\u662Fnode01\u548Cnode02\u4E0A\u9762\u9700\u8981\u521B\u5EFA/etc/kubernetes/ssl
<span class="token comment"># scp *.pem node01:/etc/kubernetes/ssl</span>
<span class="token comment"># scp *.pem node02:/etc/kubernetes/ssl</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,33);function r(l,p){return e}var o=n(a,[["render",r]]);export{o as default};
