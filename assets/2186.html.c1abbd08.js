import{r as e,o as r,c as p,b as n,a as l,F as t,e as c,d as s}from"./app.dbf5d933.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=c(`<h2 id="_1-\u5B89\u88C5-cfssl-\u5DE5\u5177\u96C6" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-cfssl-\u5DE5\u5177\u96C6" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5 cfssl \u5DE5\u5177\u96C6</h2><p>\u4ECE\u73B0\u5728\u5F00\u59CB\uFF0C\u6240\u6709\u7684\u64CD\u4F5C\u90FD\u5728 kube-node1 \u7684 k8s \u7528\u6237\u5BB6\u76EE\u5F55\u4E0B\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://pkg.cfssl.org/R1.2/cfssl_linux-amd64
<span class="token function">wget</span> https://pkg.cfssl.org/R1.2/cfssljson_linux-amd64
<span class="token function">wget</span> https://pkg.cfssl.org/R1.2/cfssl-certinfo_linux-amd64
<span class="token function">mv</span> cfssljson_linux-amd64 /opt/k8s/bin/cfssljson
<span class="token function">mv</span> cfssl_linux-amd64 /opt/k8s/bin/cfssl
<span class="token function">mv</span> cfssl-certinfo_linux-amd64 /opt/k8s/bin/cfssl-certinfo
<span class="token function">chmod</span> +x /opt/k8s/bin/*
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/opt/k8s/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2-\u521B\u5EFA\u6839\u8BC1\u4E66-ca" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u6839\u8BC1\u4E66-ca" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u6839\u8BC1\u4E66 (CA)</h2><p>CA \u8BC1\u4E66\u662F\u96C6\u7FA4\u6240\u6709\u8282\u70B9\u5171\u4EAB\u7684\uFF0C\u53EA\u9700\u8981\u521B\u5EFA\u4E00\u4E2A CA \u8BC1\u4E66\uFF0C\u540E\u7EED\u521B\u5EFA\u7684\u6240\u6709\u8BC1\u4E66\u90FD\u7531\u5B83\u7B7E\u540D\u3002</p><h3 id="_1-\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</h3><p>CA \u914D\u7F6E\u6587\u4EF6\u7528\u4E8E\u914D\u7F6E\u6839\u8BC1\u4E66\u7684\u4F7F\u7528\u573A\u666F (profile) \u548C\u5177\u4F53\u53C2\u6570 (usage\uFF0C\u8FC7\u671F\u65F6\u95F4\u3001\u670D\u52A1\u7AEF\u8BA4\u8BC1\u3001\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u3001\u52A0\u5BC6\u7B49)\uFF0C\u540E\u7EED\u5728\u7B7E\u540D\u5176\u5B83\u8BC1\u4E66\u65F6\u9700\u8981\u6307\u5B9A\u7279\u5B9A\u573A\u666F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ca-config.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;signing&quot;: {
    &quot;default&quot;: {
      &quot;expiry&quot;: &quot;87600h&quot;
    },
    &quot;profiles&quot;: {
      &quot;kubernetes&quot;: {
        &quot;usages&quot;: [
            &quot;signing&quot;,
            &quot;key encipherment&quot;,
            &quot;server auth&quot;,
            &quot;client auth&quot;
        ],
        &quot;expiry&quot;: &quot;87600h&quot;
      }
    }
  }
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>signing\uFF1A\u8868\u793A\u8BE5\u8BC1\u4E66\u53EF\u7528\u4E8E\u7B7E\u540D\u5176\u5B83\u8BC1\u4E66\uFF0C\u751F\u6210\u7684 ca.pem \u8BC1\u4E66\u4E2D CA=TRUE\uFF1B</li><li>server auth\uFF1A\u8868\u793A client \u53EF\u4EE5\u7528\u8BE5\u8BE5\u8BC1\u4E66\u5BF9 server \u63D0\u4F9B\u7684\u8BC1\u4E66\u8FDB\u884C\u9A8C\u8BC1\uFF1B</li><li>client auth\uFF1A\u8868\u793A server \u53EF\u4EE5\u7528\u8BE5\u8BE5\u8BC1\u4E66\u5BF9 client \u63D0\u4F9B\u7684\u8BC1\u4E66\u8FDB\u884C\u9A8C\u8BC1\uFF1B</li></ul><h3 id="_2-\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\u6587\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ca-csr.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
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
      &quot;OU&quot;: &quot;4Paradigm&quot;
    }
  ]
}
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>CN\uFF1ACommon Name\uFF0Ckube-apiserver \u4ECE\u8BC1\u4E66\u4E2D\u63D0\u53D6\u8BE5\u5B57\u6BB5\u4F5C\u4E3A\u8BF7\u6C42\u7684\u7528\u6237\u540D (User Name)\uFF0C\u6D4F\u89C8\u5668\u4F7F\u7528\u8BE5\u5B57\u6BB5\u9A8C\u8BC1\u7F51\u7AD9\u662F\u5426\u5408\u6CD5\uFF1B</li><li>O\uFF1AOrganization\uFF0Ckube-apiserver \u4ECE\u8BC1\u4E66\u4E2D\u63D0\u53D6\u8BE5\u5B57\u6BB5\u4F5C\u4E3A\u8BF7\u6C42\u7528\u6237\u6240\u5C5E\u7684\u7EC4 (Group)\uFF1B</li><li>kube-apiserver \u5C06\u63D0\u53D6\u7684 User\u3001Group \u4F5C\u4E3A RBAC \u6388\u6743\u7684\u7528\u6237\u6807\u8BC6\uFF1B</li></ul><h3 id="_3-\u751F\u6210-ca-\u8BC1\u4E66\u548C\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#_3-\u751F\u6210-ca-\u8BC1\u4E66\u548C\u79C1\u94A5" aria-hidden="true">#</a> 3\uFF0C\u751F\u6210 CA \u8BC1\u4E66\u548C\u79C1\u94A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cfssl</span> gencert -initca ca-csr.json <span class="token operator">|</span> cfssljson -bare ca
<span class="token number">2018</span>/11/23 <span class="token number">22</span>:46:19 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> generating a new CA key and certificate from CSR
<span class="token number">2018</span>/11/23 <span class="token number">22</span>:46:19 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> generate received request
<span class="token number">2018</span>/11/23 <span class="token number">22</span>:46:19 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> received CSR
<span class="token number">2018</span>/11/23 <span class="token number">22</span>:46:19 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> generating key: rsa-2048
<span class="token number">2018</span>/11/23 <span class="token number">22</span>:46:20 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> encoded CSR
<span class="token number">2018</span>/11/23 <span class="token number">22</span>:46:20 <span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> signed certificate with serial number <span class="token number">652945881726401134885162916242742430723518895911</span>
<span class="token variable">$ls</span> ca*
ca-config.json  ca.csr  ca-csr.json  ca-key.pem  ca.pem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u5206\u53D1\u8BC1\u4E66\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u5206\u53D1\u8BC1\u4E66\u6587\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u5206\u53D1\u8BC1\u4E66\u6587\u4EF6</h2><p>\u5C06\u751F\u6210\u7684 CA \u8BC1\u4E66\u3001\u79D8\u94A5\u6587\u4EF6\u3001\u914D\u7F6E\u6587\u4EF6\u62F7\u8D1D\u5230\u6240\u6709\u8282\u70B9\u7684 /etc/kubernetes/cert \u76EE\u5F55\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> magic.sh <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;EOF&quot;
#!/bin/bash
source /opt/k8s/bin/environment.sh
for node_ip in \${NODE_IPS[@]}
do
    echo &quot;&gt;&gt;&gt; \${node_ip}&quot;
    scp ca*.pem ca-config.json k8s@\${node_ip}:/etc/kubernetes/cert
done
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>k8s \u8D26\u6237\u9700\u8981\u6709\u8BFB\u5199 /etc/kubernetes \u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55\u6587\u4EF6\u7684\u6743\u9650</li></ul><h2 id="_4-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_4-\u53C2\u8003" aria-hidden="true">#</a> 4\uFF0C\u53C2\u8003</h2>`,19),b=s("\u5404\u79CD CA \u8BC1\u4E66\u7C7B\u578B\uFF1A"),m={href:"https://github.com/kubernetes-incubator/apiserver-builder/blob/master/docs/concepts/auth.md",target:"_blank",rel:"noopener noreferrer"},d=s("https://github.com/kubernetes-incubator/apiserver-builder/blob/master/docs/concepts/auth.md");function h(k,g){const a=e("ExternalLinkIcon");return r(),p(t,null,[i,n("ul",null,[n("li",null,[b,n("a",m,[d,l(a)])])])],64)}var _=o(u,[["render",h]]);export{_ as default};
