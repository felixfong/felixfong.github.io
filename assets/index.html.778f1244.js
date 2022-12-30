import{e as s}from"./app.dbf5d933.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},e=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> epel-release
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528yum\u5B89\u88C5\u4E86epel\uFF0C\u7136\u540E\u518D\u5B89\u88C5\u8F6F\u4EF6\u5C31\u62A5\u9519\u4E86\u3002</p><p>\u8C03\u6574yum\u6E90\u5185\u5BB9\u4E3A\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>epel<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Extra Packages <span class="token keyword">for</span> Enterprise Linux <span class="token number">7</span> - <span class="token variable">$basearch</span>
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://download.fedoraproject.org/pub/epel/7/<span class="token variable">$basearch</span>
<span class="token comment">#metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-7&amp;arch=$basearch</span>
<span class="token assign-left variable">failovermethod</span><span class="token operator">=</span>priority
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7

<span class="token punctuation">[</span>epel-debuginfo<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Extra Packages <span class="token keyword">for</span> Enterprise Linux <span class="token number">7</span> - <span class="token variable">$basearch</span> - Debug
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://download.fedoraproject.org/pub/epel/7/<span class="token variable">$basearch</span>/debug
<span class="token comment">#metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-debug-7&amp;arch=$basearch</span>
<span class="token assign-left variable">failovermethod</span><span class="token operator">=</span>priority
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token punctuation">[</span>epel-source<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Extra Packages <span class="token keyword">for</span> Enterprise Linux <span class="token number">7</span> - <span class="token variable">$basearch</span> - Source
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://download.fedoraproject.org/pub/epel/7/SRPMS
<span class="token comment">#metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-source-7&amp;arch=$basearch</span>
<span class="token assign-left variable">failovermethod</span><span class="token operator">=</span>priority
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><blockquote><p>\u4FEE\u6539 \u53BB\u6389\u4E86 baseurl \u524D\u9762\u7684 # \uFF0C\u5728 metalink \u524D\u9762 \u52A0\u4E86 #</p></blockquote>`,5);function p(r,l){return e}var c=a(n,[["render",p]]);export{c as default};
