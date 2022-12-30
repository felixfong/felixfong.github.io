import{e as a}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=a(`<p>\u5F88\u591A\u65F6\u5019\u5728\u90E8\u7F72\u4E00\u4E9B\u5F00\u6E90\u7684Python\u9879\u76EE\u65F6\uFF0C\u4F1A\u88AB\u5404\u79CD\u5305\u7684\u95EE\u9898\u7ED9\u6076\u5FC3\u5230\uFF0C\u8981\u4E48\u662F\u627E\u4E0D\u5230\uFF0C\u8981\u4E48\u662F\u7F51\u7EDC\u95EE\u9898\u4E0B\u4E0D\u4E0B\u6765\uFF0C\u5728\u8BB8\u591A\u4E0D\u591F\u7EC6\u5FC3\u5730\u65F6\u5019\uFF0C\u5C31\u90A3\u4E48\u8E29\u5751\u4E86\u3002\u73B0\u5728\u516C\u53F8\u6709\u4E00\u4E9B\u5C0F\u4F19\u4F34\u5728\u5199Python\u9879\u76EE\uFF0C\u79C1\u670D\u4E5F\u5728\uFF0C\u56E0\u6B64\u62C9\u51FA\u6765\u7B80\u7B80\u5355\u5355\u6DFB\u52A0\u4E86\u4E00\u4E0BPython\u7684\uFF0C\u8FC7\u7A0B\u540C\u5176\u4ED6\u51E0\u79CD\u79C1\u670D\u4E00\u6837\u7684\uFF0C\u90FD\u975E\u5E38\u7B80\u5355\uFF0C\u8FD9\u91CC\u4EC5\u505A\u7B80\u5355\u8BB0\u5F55\u3002</p><p>\u642D\u5EFAPython\u79C1\u670D\uFF0C\u6211\u4EEC\u4F9D\u65E7\u4F7F\u7528nexus3\u3002</p><p>\u4E0E\u5176\u4ED6\u79C1\u670D\u4E00\u6837\u7684\uFF0CPython\u79C1\u670D\u540C\u6837\u6709\u4E09\u79CD\u7C7B\u578B\uFF1A</p><ul><li><code>hosted</code> : \u672C\u5730\u5B58\u50A8\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u8005\u5C06\u4E2A\u4EBA\u7684\u4E00\u4E9B\u5305\u4E0A\u4F20\u5230\u79C1\u670D\u4E2D</li><li><code>proxy</code> : \u63D0\u4F9B\u4EE3\u7406\u5176\u4ED6\u4ED3\u5E93\u7684\u7C7B\u578B\uFF0C\u5982\u8C46\u74E3\u7684pypi\u4ED3\u5E93</li><li><code>group</code> : \u7EC4\u7C7B\u578B\uFF0C\u5B9E\u8D28\u4F5C\u7528\u662F\u7EC4\u5408\u591A\u4E2A\u4ED3\u5E93\u4E3A\u4E00\u4E2A\u5BF9\u5916\u7684\u5730\u5740</li></ul><p>\u90A3\u4E48\u5C31\u6765\u4E00\u4E2A\u4E00\u4E2A\u521B\u5EFA\u3002</p><h2 id="_1-\u521B\u5EFAblob\u5B58\u50A8\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFAblob\u5B58\u50A8\u3002" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFAblob\u5B58\u50A8\u3002</h2><p>\u4E3A\u5176\u521B\u5EFA\u4E00\u4E2A\u5355\u72EC\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/0ef8ef8d243f5ed0.jpg" alt="image"></p><h2 id="_2-\u521B\u5EFAhosted\u7C7B\u578B\u7684pypi\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFAhosted\u7C7B\u578B\u7684pypi\u3002" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFAhosted\u7C7B\u578B\u7684pypi\u3002</h2><ul><li><code>Name</code>: \u5B9A\u4E49\u4E00\u4E2A\u540D\u79F0local-pypi</li><li><code>Storage</code> Blob store\uFF0C\u6211\u4EEC\u4E0B\u62C9\u9009\u62E9\u524D\u9762\u521B\u5EFA\u597D\u7684\u4E13\u7528blob\uFF1Apypi-hub\u3002</li><li><code>Hosted</code> \u5F00\u53D1\u73AF\u5883\uFF0C\u6211\u4EEC\u8FD0\u884C\u91CD\u590D\u53D1\u5E03\uFF0C\u56E0\u6B64Delpoyment policy \u6211\u4EEC\u9009\u62E9Allow redeploy\u3002\u8FD9\u4E2A\u5F88\u91CD\u8981\uFF01</li></ul><p><img src="http://t.eryajf.net/imgs/2021/09/f200d1f0b065a421.jpg" alt="image"></p><h2 id="_3-\u521B\u5EFA\u4E00\u4E2Aproxy\u7C7B\u578B\u7684pypi\u4ED3\u5E93\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u4E00\u4E2Aproxy\u7C7B\u578B\u7684pypi\u4ED3\u5E93\u3002" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA\u4E00\u4E2Aproxy\u7C7B\u578B\u7684pypi\u4ED3\u5E93\u3002</h2><ul><li><p><code>Name</code>: proxy-pypi</p></li><li><p><code>Proxy</code></p><ul><li><p>Remote Storage: \u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</p><p>\u8FD9\u91CC\u586B\u5199: http://pypi.python.org/pypi/ \u4E0A\u8FB9\u7684\u662F\u5B98\u65B9\u7684\u4ED3\u5E93\u5730\u5740\uFF0C\u8FD8\u6709\u5176\u4ED6\u51E0\u4E2A\u56FD\u5185\u5E38\u89C1\u7684\uFF0C\u7F57\u5217\u5982\u4E0B\uFF1A</p><ul><li>\u963F\u91CC\u4E91\uFF1Ahttp://mirrors.aliyun.com/pypi/</li><li>\u4E2D\u56FD\u79D1\u6280\u5927\u5B66\uFF1Ahttps://pypi.mirrors.ustc.edu.cn/</li><li>\u8C46\u74E3\uFF1Ahttp://pypi.douban.com/</li><li>\u6E05\u534E\u5927\u5B66\uFF1Ahttps://pypi.tuna.tsinghua.edu.cn/</li><li>\u4E2D\u56FD\u79D1\u5B66\u6280\u672F\u5927\u5B66\uFF1Ahttp://pypi.mirrors.ustc.edu.cn/</li></ul></li></ul></li><li><p><code>Storage</code>: pypi-hub\u3002</p></li></ul><p>\u5176\u4ED6\u7684\u5747\u662F\u9ED8\u8BA4\u3002</p><p>\u6574\u4F53\u914D\u7F6E\u622A\u56FE\u5982\u4E0B\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/1b439f58e9bafccd.jpg" alt="image"></p><p>\u53E6\u5916\u51E0\u4E2A\u4ED3\u5E93\u540C\u4E0A\u64CD\u4F5C\uFF0C\u4E00\u4E00\u521B\u5EFA\uFF0C\u5F53\u7136\u4E5F\u4E0D\u5FC5\u5168\u90E8\u90FD\u52A0\uFF0C\u6839\u636E\u81EA\u5DF1\u5B9E\u9645\u9700\u6C42\u6DFB\u52A0\u5373\u53EF\u3002</p><h2 id="_4-\u521B\u5EFA\u4E00\u4E2Agroup\u7C7B\u578B\u7684pypi\u4ED3\u5E93\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA\u4E00\u4E2Agroup\u7C7B\u578B\u7684pypi\u4ED3\u5E93\u3002" aria-hidden="true">#</a> 4\uFF0C\u521B\u5EFA\u4E00\u4E2Agroup\u7C7B\u578B\u7684pypi\u4ED3\u5E93\u3002</h2><ul><li><code>Name</code>\uFF1Agroup-pypi</li><li><code>Storage</code>\uFF1A\u9009\u62E9\u4E13\u7528\u7684blob\u5B58\u50A8pypi-hub\u3002</li><li><code>group</code> : \u5C06\u5DE6\u8FB9\u53EF\u9009\u76844\u4E2A\u4ED3\u5E93\uFF0C\u6DFB\u52A0\u5230\u53F3\u8FB9\u7684members\u4E0B\u3002</li></ul><p>\u6574\u4F53\u914D\u7F6E\u622A\u56FE\u5982\u4E0B\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/a1c9a4a17159bae3.jpg" alt="image"></p><p>\u8FD9\u4E9B\u914D\u7F6E\u5B8C\u6210\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002</p><h2 id="_5-\u9A8C\u8BC1\u4F7F\u7528\u3002" tabindex="-1"><a class="header-anchor" href="#_5-\u9A8C\u8BC1\u4F7F\u7528\u3002" aria-hidden="true">#</a> 5\uFF0C\u9A8C\u8BC1\u4F7F\u7528\u3002</h2><h3 id="_1-\u6307\u5B9A\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-\u6307\u5B9A\u914D\u7F6E" aria-hidden="true">#</a> 1\uFF0C\u6307\u5B9A\u914D\u7F6E</h3><p>\u65B0\u5EFA\u4E00\u53F0\u73AF\u5883\u5E72\u51C0\u7684\u4E3B\u673A\uFF0C\u5B89\u88C5\u597DPython\u7684pip\u73AF\u5883\u3002\u53EF\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum -y <span class="token function">install</span> release
$ yum -y <span class="token function">install</span> python36 python36-devel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540E\u901A\u8FC7\u547D\u4EE4\u884C\u968F\u4FBF\u5B89\u88C5\u4E00\u4E2A\u5305\uFF0C\u5B89\u88C5\u7684\u65F6\u5019\uFF0C\u5C06\u4EE3\u7406\u6307\u5411\u6211\u4EEC\u7684\u79C1\u670D\u6765\u3002\u8FD9\u4E2A\u5730\u65B9\u9047\u5230\u4E86\u4E24\u4E2A\u5751\uFF0C\u8FD9\u91CC\u7528\u4E24\u4E2A\u6CE8\u610F\u6765\u8FDB\u884C\u63D0\u9192\u3002</p><ul><li><p><code>\u6CE8\u610F\uFF1A</code>\u5728\u6307\u5B9A\u521A\u521A\u914D\u7F6E\u7684\u79C1\u670D\u65F6\uFF0C\u9700\u8981\u5728\u7EDF\u4E00\u5BF9\u5916\u7684\u5730\u5740\u6700\u540E\u52A0\u4E0A\u4E00\u4E2Asimple\u3002</p></li><li><p><code>\u6CE8\u610F\uFF1A</code>\u5728\u7B2C\u4E00\u6B21\u8FDB\u884C\u5B89\u88C5\u6D4B\u8BD5\u7684\u65F6\u5019\uFF0C\u4E00\u5B9A\u8981\u6307\u5B9A\u6D4B\u8BD5\u5305\u7684\u7248\u672C\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ERROR: Could not <span class="token function">find</span> a version that satisfies the requirement django <span class="token punctuation">(</span>from versions: none<span class="token punctuation">)</span>
ERROR: No matching distribution found <span class="token keyword">for</span> django
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u4E2A\u65F6\u5019\u6307\u5B9A\u4E00\u4E0B\u5305\u7684\u7248\u672C\uFF0C\u5C31\u4E0B\u8F7D\u6210\u529F\u4E86\uFF0C\u800C\u5728\u5F80\u540E\u7684\u4E0B\u8F7D\uFF0C\u5C31\u4E0D\u9700\u8981\u6307\u5B9A\u7248\u672C\u4E86\u3002</p></li></ul><p>\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u9A8C\u8BC1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ pip3.6 <span class="token function">install</span> --trusted-host <span class="token number">10.3</span>.0.41 -i http://10.3.0.41:8081/repository/group-pypi/simple django
WARNING: Running pip <span class="token function">install</span> with root privileges is generally not a good idea. Try <span class="token variable"><span class="token variable">\`</span>pip3.6 <span class="token function">install</span> --user<span class="token variable">\`</span></span> instead.
Collecting django
  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/6a/23/08f7fd7afdd24184a400fcaebf921bd09b5b5235cbd62ffa02308a7d35d6/Django-3.0.1-py3-none-any.whl <span class="token punctuation">(</span><span class="token number">7</span>.4MB<span class="token punctuation">)</span>
    <span class="token number">100</span>% <span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> <span class="token number">7</span>.4MB <span class="token number">80</span>.3MB/s
Collecting asgiref~<span class="token operator">=</span><span class="token number">3.2</span> <span class="token punctuation">(</span>from django<span class="token punctuation">)</span>
  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/a5/cb/5a235b605a9753ebcb2730c75e610fb51c8cab3f01230080a8229fa36adb/asgiref-3.2.3-py2.py3-none-any.whl
Collecting pytz <span class="token punctuation">(</span>from django<span class="token punctuation">)</span>
  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/e7/f9/f0b53f88060247251bf481fa6ea62cd0d25bf1b11a87888e53ce5b7c8ad2/pytz-2019.3-py2.py3-none-any.whl <span class="token punctuation">(</span>509kB<span class="token punctuation">)</span>
    <span class="token number">100</span>% <span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> 512kB <span class="token number">78</span>.3MB/s
Collecting sqlparse<span class="token operator">&gt;=</span><span class="token number">0.2</span>.2 <span class="token punctuation">(</span>from django<span class="token punctuation">)</span>
  Downloading http://10.3.0.41:8081/repository/group-pypi/packages/ef/53/900f7d2a54557c6a37886585a91336520e5539e3ae2423ff1102daf4f3a7/sqlparse-0.3.0-py2.py3-none-any.whl
Installing collected packages: asgiref, pytz, sqlparse, django
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u8FD9\u4E2A\u65F6\u5019\u53BB\u79C1\u670D\u7684\u5E93\u91CC\u770B\u4E0B\uFF0C\u5DF2\u7ECF\u53EF\u4EE5\u770B\u5230\u521A\u521A\u5B89\u88C5\u7684\u51E0\u4E2A\u5305\u4E86\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/t@master/t/image-20191229213306188.png" alt="image-20191229213306188"></p><h3 id="_2-\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> 2\uFF0C\u5168\u5C40\u914D\u7F6E</h3><p>\u901A\u8FC7\u6DFB\u52A0\u5168\u5C40\u914D\u7F6E\uFF0C\u5C31\u4E0D\u9700\u8981\u6BCF\u6B21\u6267\u884C\u7F16\u8BD1\u7684\u65F6\u5019\u6307\u5B9A\u79C1\u670D\u5730\u5740\u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/.pip
<span class="token function">cat</span> <span class="token operator">&gt;</span> ~/.pip/pip.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[global]
timeout = 60
trusted-host =  10.3.0.41
index-url = http://10.3.0.41:8081/repository/group-pypi/simple
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4FDD\u5B58\u4E4B\u540E\uFF0C\u672C\u673A\u7684\u4EE3\u7406\u5C31\u8D70\u672C\u5730\u7684\u79C1\u670D\u4E86\u3002</p>`,36);function e(o,l){return p}var r=n(s,[["render",e]]);export{r as default};