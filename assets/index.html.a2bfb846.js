import{e as s}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<p>\u8FD9\u4E2A\u95EE\u9898\u4E4B\u524D\u9047\u5230\u8FC7\u4E00\u6B21\uFF0C\u4E5F\u8BB0\u5F55\u8FC7\u89E3\u51B3\u7684\u529E\u6CD5\uFF0C\u6CA1\u60F3\u5230\u6700\u8FD1\u53C8\u5B89\u88C5\u9879\u76EE\uFF0C\u4E4B\u524D\u8BB0\u5F55\u7684\u529E\u6CD5\u7ADF\u7136\u4E5F\u4E0D\u7BA1\u7528\u4E86\u3002\u4ECA\u5929\u518D\u6765\u8BB0\u5F55\u4E00\u4E0B\u65B0\u627E\u5230\u7684\u89E3\u51B3\u529E\u6CD5\u3002</p><h2 id="_1-\u8001\u7248\u7B14\u8BB0\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u8001\u7248\u7B14\u8BB0\u3002" aria-hidden="true">#</a> 1\uFF0C\u8001\u7248\u7B14\u8BB0\u3002</h2><p>pip\u8FDB\u884C\u5B89\u88C5\u7684\u65F6\u5019\uFF0C\u603B\u662F\u62A5ssl\u7684\u95EE\u9898\uFF0C\u53EF\u80FD\u662F\u6E90\u7684\u95EE\u9898\u3002</p><p>\u62A5\u9519\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Could not <span class="token function">install</span> packages due to an EnvironmentError: HTTPSConnectionPool<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;files.pythonhosted.org&#39;</span>, <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">443</span><span class="token punctuation">)</span>: Max retries exceeded with url: /packages/5f/25/e52d3f31441505a5f3af41213346e5b6c221c9e086a166f3703d2ddaf940/pip-18.0-py2.py3-none-any.whl <span class="token punctuation">(</span>Caused by SSLError<span class="token punctuation">(</span>SSLError<span class="token punctuation">(</span><span class="token number">1</span>, u<span class="token string">&#39;[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:590)&#39;</span><span class="token punctuation">)</span>,<span class="token punctuation">))</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7F51\u4E0A\u6709\u8BF4\u5B89\u88C5\u65B9\u5F0F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>.pip <span class="token function">install</span> --index-url<span class="token operator">=</span>http://pypi.python.org/simple/ --trusted-host pypi.python.org pythonPackageName
<span class="token number">2</span>.pip --trusted-host pypi.python.org <span class="token function">install</span> pythonPackageName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5176\u4E2D &quot;pythonPackageName&quot; \u662F\u4F60\u8981\u5B89\u88C5\u7684\u5E93\u540D\u79F0\uFF08\u6BD4\u5982\uFF1Arequests\u3001lxml\u7B49\uFF09</p><p>\u7136\u800C\u7ECF\u8FC7\u6D4B\u8BD5\u53D1\u73B0\u5E76\u4E0D\u884C\u3002</p><p>\u4E8E\u662F\u91C7\u7528\u8C46\u74E3\u6E90\u8FDB\u884C\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip3 <span class="token function">install</span> requests -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com  <span class="token assign-left variable">aioredis</span><span class="token operator">==</span><span class="token number">1.1</span>.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F46\u662F\u8FD9\u4E2A\u4E5F\u53EA\u662F\u5355\u4E2A\u5B89\u88C5\u7684\u65F6\u5019\u6CA1\u6709\u95EE\u9898\uFF0C\u7528-r\u8FDB\u884C\u5B89\u88C5\u53C8\u4E0D\u884C\u4E86\u3002</p><p>\u4E8E\u662F\u5199\u5165\u5230\u914D\u7F6E\u91CC\u8FB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	<span class="token function">mkdir</span> /root/.pip
	<span class="token function">cat</span> <span class="token operator">&gt;</span> ~/.pip/pip.conf <span class="token operator">&lt;&lt;</span>EOF
	<span class="token punctuation">[</span>global<span class="token punctuation">]</span>
	<span class="token function">timeout</span> <span class="token operator">=</span> <span class="token number">60</span>
	index-url <span class="token operator">=</span> http://pypi.douban.com/simple
	trusted-host <span class="token operator">=</span> pypi.douban.com
	EOF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7136\u540E\u76F4\u63A5<code>pip install pack</code>\u5373\u53EF\u3002</p><p>\u4F46\u662F\u53D1\u73B0\u8FD8\u4F1A\u62A5\u9519\u3002 <code>\u796D\u51FA\u795E\u5668</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">packge</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span>  requirements.txt<span class="token variable">)</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> pip <span class="token function">install</span> requests -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com <span class="token variable">$packge</span> <span class="token punctuation">;</span><span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u786E\u5B9E\u662F\u795E\u5668\uFF0C\u975E\u5E38\u597D\u7528\uFF01</p><h2 id="_2-\u5B89\u88C5\u9047\u5230ssl\u95EE\u9898\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u9047\u5230ssl\u95EE\u9898\u3002" aria-hidden="true">#</a> 2\uFF0C\u5B89\u88C5\u9047\u5230ssl\u95EE\u9898\u3002</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$pip</span> <span class="token function">install</span> docker
Collecting docker
  Could not fetch URL https://pypi.python.org/simple/docker/: There was a problem confirming the ssl certificate: <span class="token punctuation">[</span>SSL: CERTIFICATE_VERIFY_FAILED<span class="token punctuation">]</span> certificate verify failed <span class="token punctuation">(</span>_ssl.c:777<span class="token punctuation">)</span>- skipping
  Could not <span class="token function">find</span> a version that satisfies the requirement docker <span class="token punctuation">(</span>from versions: <span class="token punctuation">)</span>
No matching distribution found <span class="token keyword">for</span> docker
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u89E3\u51B3\u529E\u6CD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	<span class="token function">mkdir</span> .pip
	<span class="token builtin class-name">cd</span> .pip 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540E\u65B0\u589E\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> pip.conf 

<span class="token punctuation">[</span>global<span class="token punctuation">]</span> 
<span class="token function">timeout</span> <span class="token operator">=</span> <span class="token number">6000</span> 
index-url <span class="token operator">=</span> http://pypi.douban.com/simple/  
<span class="token punctuation">[</span>install<span class="token punctuation">]</span> 
use-mirrors <span class="token operator">=</span> <span class="token boolean">true</span> 
mirrors <span class="token operator">=</span> http://pypi.douban.com/simple/  
trusted-host <span class="token operator">=</span> pypi.douban.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7136\u540E\u548Bpip install \u5C31\u597D\u4E86\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost .pip<span class="token punctuation">]</span><span class="token variable">$pip</span> <span class="token function">install</span> docker
Collecting docker
  Downloading http://pypi.doubanio.com/packages/06/0b/ce97eb31058eddaef316973b8299b737ebab0bcb5798fd5a3225d53b4455/docker-3.5.0-py2.py3-none-any.whl <span class="token punctuation">(</span>125kB<span class="token punctuation">)</span>
    <span class="token number">100</span>% <span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> 133kB <span class="token number">1</span>.4MB/s
Collecting docker-pycreds<span class="token operator">&gt;=</span><span class="token number">0.3</span>.0 <span class="token punctuation">(</span>from docker<span class="token punctuation">)</span>
  Downloading http://pypi.doubanio.com/packages/ea/bf/7e70aeebc40407fbdb96fa9f79fc8e4722ea889a99378303e3bcc73f4ab5/docker_pycreds-0.3.0-py2.py3-none-any.whl
Collecting requests<span class="token operator">!=</span><span class="token number">2.18</span>.0,<span class="token operator">&gt;=</span><span class="token number">2.14</span>.2 <span class="token punctuation">(</span>from docker<span class="token punctuation">)</span>
  Downloading http://pypi.doubanio.com/packages/65/47/7e02164a2a3db50ed6d8a6ab1d6d60b69c4c3fdf57a284257925dfc12bda/requests-2.19.1-py2.py3-none-any.whl <span class="token punctuation">(</span>91kB<span class="token punctuation">)</span>
    <span class="token number">100</span>% <span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> 92kB <span class="token number">14</span>.0MB/s
Collecting websocket-client<span class="token operator">&gt;=</span><span class="token number">0.32</span>.0 <span class="token punctuation">(</span>from docker<span class="token punctuation">)</span>
  Downloading http://pypi.doubanio.com/packages/14/d4/6a8cd4e7f67da465108c7cc0a307a1c5da7e2cdf497330b682069b1d4758/websocket_client-0.53.0-py2.py3-none-any.whl <span class="token punctuation">(</span>198kB<span class="token punctuation">)</span>
    <span class="token number">100</span>% <span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> 204kB <span class="token number">3</span>.4MB/s
Collecting six<span class="token operator">&gt;=</span><span class="token number">1.4</span>.0 <span class="token punctuation">(</span>from docker<span class="token punctuation">)</span>
  Downloading http://pypi.doubanio.com/packages/67/4b/141a581104b1f6397bfa78ac9d43d8ad29a7ca43ea90a2d863fe3056e86a/six-1.11.0-py2.py3-none-any.whl
Collecting urllib<span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span><span class="token number">1.24</span>,<span class="token operator">&gt;=</span><span class="token number">1.21</span>.1 <span class="token punctuation">(</span>from requests<span class="token operator">!=</span><span class="token number">2.18</span>.0,<span class="token operator">&gt;=</span><span class="token number">2.14</span>.2-<span class="token operator">&gt;</span>docker<span class="token punctuation">)</span>
  Downloading http://pypi.doubanio.com/packages/bd/c9/6fdd990019071a4a32a5e7cb78a1d92c53851ef4f56f62a3486e6a7d8ffb/urllib3-1.23-py2.py3-none-any.whl <span class="token punctuation">(</span>133kB<span class="token punctuation">)</span>
    <span class="token number">100</span>% <span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> 143kB <span class="token number">12</span>.9MB/s
Collecting chardet<span class="token operator">&lt;</span><span class="token number">3.1</span>.0,<span class="token operator">&gt;=</span><span class="token number">3.0</span>.2 <span class="token punctuation">(</span>from requests<span class="token operator">!=</span><span class="token number">2.18</span>.0,<span class="token operator">&gt;=</span><span class="token number">2.14</span>.2-<span class="token operator">&gt;</span>docker<span class="token punctuation">)</span>
  Downloading http://pypi.doubanio.com/packages/bc/a9/01ffebfb562e4274b6487b4bb1ddec7ca55ec7510b22e4c51f14098443b8/chardet-3.0.4-py2.py3-none-any.whl <span class="token punctuation">(</span>133kB<span class="token punctuation">)</span>
    <span class="token number">100</span>% <span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> 143kB <span class="token number">12</span>.9MB/s
Collecting idna<span class="token operator">&lt;</span><span class="token number">2.8</span>,<span class="token operator">&gt;=</span><span class="token number">2.5</span> <span class="token punctuation">(</span>from requests<span class="token operator">!=</span><span class="token number">2.18</span>.0,<span class="token operator">&gt;=</span><span class="token number">2.14</span>.2-<span class="token operator">&gt;</span>docker<span class="token punctuation">)</span>
  Downloading http://pypi.doubanio.com/packages/4b/2a/0276479a4b3caeb8a8c1af2f8e4355746a97fab05a372e4a2c6a6b876165/idna-2.7-py2.py3-none-any.whl <span class="token punctuation">(</span>58kB<span class="token punctuation">)</span>
    <span class="token number">100</span>% <span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> 61kB <span class="token number">18</span>.1MB/s
Collecting certifi<span class="token operator">&gt;=</span><span class="token number">2017.4</span>.17 <span class="token punctuation">(</span>from requests<span class="token operator">!=</span><span class="token number">2.18</span>.0,<span class="token operator">&gt;=</span><span class="token number">2.14</span>.2-<span class="token operator">&gt;</span>docker<span class="token punctuation">)</span>
  Downloading http://pypi.doubanio.com/packages/df/f7/04fee6ac349e915b82171f8e23cee63644d83663b34c539f7a09aed18f9e/certifi-2018.8.24-py2.py3-none-any.whl <span class="token punctuation">(</span>147kB<span class="token punctuation">)</span>
    <span class="token number">100</span>% <span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> 153kB <span class="token number">12</span>.5MB/s
Installing collected packages: six, docker-pycreds, urllib3, chardet, idna, certifi, requests, websocket-client, docker
Successfully installed certifi-2018.8.24 chardet-3.0.4 docker-3.5.0 docker-pycreds-0.3.0 idna-2.7 requests-2.19.1 six-1.11.0 urllib3-1.23 websocket-client-0.53.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="_3-\u5347\u7EA7pip\u4E00\u76F4\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#_3-\u5347\u7EA7pip\u4E00\u76F4\u62A5\u9519" aria-hidden="true">#</a> 3\uFF0C\u5347\u7EA7pip\u4E00\u76F4\u62A5\u9519</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost  ~<span class="token punctuation">]</span><span class="token variable">$pip</span> <span class="token function">install</span> --upgrade pip
Collecting pip
Exception:
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/basecommand.py&quot;</span>, line <span class="token number">215</span>, <span class="token keyword">in</span> main
    status <span class="token operator">=</span> self.run<span class="token punctuation">(</span>options, args<span class="token punctuation">)</span>
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/commands/install.py&quot;</span>, line <span class="token number">307</span>, <span class="token keyword">in</span> run
    requirement_set.prepare_files<span class="token punctuation">(</span>finder<span class="token punctuation">)</span>
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/req/req_set.py&quot;</span>, line <span class="token number">370</span>, <span class="token keyword">in</span> prepare_files
    <span class="token assign-left variable">ignore_dependencies</span><span class="token operator">=</span>self.ignore_dependencies<span class="token punctuation">))</span>
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/req/req_set.py&quot;</span>, line <span class="token number">587</span>, <span class="token keyword">in</span> _prepare_file
    <span class="token assign-left variable">session</span><span class="token operator">=</span>self.session, <span class="token assign-left variable">hashes</span><span class="token operator">=</span>hashes<span class="token punctuation">)</span>
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/download.py&quot;</span>, line <span class="token number">810</span>, <span class="token keyword">in</span> unpack_url
    <span class="token assign-left variable">hashes</span><span class="token operator">=</span>hashes
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/download.py&quot;</span>, line <span class="token number">649</span>, <span class="token keyword">in</span> unpack_http_url
    hashes<span class="token punctuation">)</span>
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/download.py&quot;</span>, line <span class="token number">842</span>, <span class="token keyword">in</span> _download_http_url
    <span class="token assign-left variable">stream</span><span class="token operator">=</span>True,
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/_vendor/requests/sessions.py&quot;</span>, line <span class="token number">487</span>, <span class="token keyword">in</span> get
    <span class="token builtin class-name">return</span> self.request<span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span>, url, **kwargs<span class="token punctuation">)</span>
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/download.py&quot;</span>, line <span class="token number">378</span>, <span class="token keyword">in</span> request
    <span class="token builtin class-name">return</span> super<span class="token punctuation">(</span>PipSession, self<span class="token punctuation">)</span>.request<span class="token punctuation">(</span>method, url, *args, **kwargs<span class="token punctuation">)</span>
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/_vendor/requests/sessions.py&quot;</span>, line <span class="token number">475</span>, <span class="token keyword">in</span> request
    resp <span class="token operator">=</span> self.send<span class="token punctuation">(</span>prep, **send_kwargs<span class="token punctuation">)</span>
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/_vendor/requests/sessions.py&quot;</span>, line <span class="token number">585</span>, <span class="token keyword">in</span> send
    r <span class="token operator">=</span> adapter.send<span class="token punctuation">(</span>request, **kwargs<span class="token punctuation">)</span>
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/_vendor/cachecontrol/adapter.py&quot;</span>, line <span class="token number">46</span>, <span class="token keyword">in</span> send
    resp <span class="token operator">=</span> super<span class="token punctuation">(</span>CacheControlAdapter, self<span class="token punctuation">)</span>.send<span class="token punctuation">(</span>request, **kw<span class="token punctuation">)</span>
  File <span class="token string">&quot;/usr/lib/python2.7/site-packages/pip/_vendor/requests/adapters.py&quot;</span>, line <span class="token number">477</span>, <span class="token keyword">in</span> send
    raise SSLError<span class="token punctuation">(</span>e, <span class="token assign-left variable">request</span><span class="token operator">=</span>request<span class="token punctuation">)</span>
SSLError: <span class="token punctuation">[</span>SSL: CERTIFICATE_VERIFY_FAILED<span class="token punctuation">]</span> certificate verify failed <span class="token punctuation">(</span>_ssl.c:618<span class="token punctuation">)</span>
You are using pip version <span class="token number">8.1</span>.2, however version <span class="token number">19.2</span>.2 is available.
You should consider upgrading via the <span class="token string">&#39;pip install --upgrade pip&#39;</span> command.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u8FD9\u4E2A\u65F6\u5019\u7528\u5982\u4E0B\u547D\u4EE4\u66F4\u65B0\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost  ~<span class="token punctuation">]</span><span class="token variable">$pip</span> <span class="token function">install</span> --upgrade --trusted-host pypi.org --trusted-host files.pythonhosted.org pip
Collecting pip
  Downloading https://files.pythonhosted.org/packages/8d/07/f7d7ced2f97ca3098c16565efbe6b15fafcba53e8d9bdb431e09140514b0/pip-19.2.2-py2.py3-none-any.whl <span class="token punctuation">(</span><span class="token number">1</span>.4MB<span class="token punctuation">)</span>
    <span class="token number">100</span>% <span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> <span class="token number">1</span>.4MB 134kB/s
Installing collected packages: pip
  Found existing installation: pip <span class="token number">8.1</span>.2
    Uninstalling pip-8.1.2:
      Successfully uninstalled pip-8.1.2
Successfully installed pip-19.2.2
<span class="token punctuation">[</span>root@localhost  ~<span class="token punctuation">]</span><span class="token variable">$pip</span> -V
pip <span class="token number">19.2</span>.2 from /usr/lib/python2.7/site-packages/pip <span class="token punctuation">(</span>python <span class="token number">2.7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,30);function e(t,o){return p}var r=n(a,[["render",e]]);export{r as default};
