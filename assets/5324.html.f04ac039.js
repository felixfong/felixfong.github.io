import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="_1-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a> 1\uFF0C\u524D\u8A00</h2><p>\u63D0\u4F9B\u4E86Python\u79C1\u4ED3\u4E4B\u540E\uFF0C\u9664\u4E86\u901A\u8FC7\u79C1\u4ED3\u62C9\u5305\u65B9\u4FBF\u4E4B\u5916\uFF0C\u5C0F\u4F19\u4F34\u4EEC\u96BE\u514D\u4F1A\u6709\u5F80\u79C1\u4ED3\u4F20\u5305\u7684\u9700\u6C42\uFF0C\u56E0\u4E3A\u7A0D\u5FAE\u6709\u70B9\u7ED5\u5F2F\uFF0C\u56E0\u6B64\u8FD9\u91CC\u8BB0\u5F55\u4E00\u4E0B\u3002</p><p>\u5176\u5B9E\u7528\u4E00\u53E5\u8BDD\u6765\u8868\u8FF0\uFF0C\u5C31\u662F<code>\u901A\u8FC7\u79C1\u670D\u62C9\u5305\u7684\u65F6\u5019\uFF0C\u8D70group\u7684\u4EE3\u7406\uFF0C\u4ECE\u672C\u5730\u4E0A\u4F20\u5305\u7684\u65F6\u5019\uFF0C\u8981\u8D70local\u7684\u4ED3\u5E93\u3002</code></p><p>\u63A5\u4E0B\u6765\u5C31\u8BB0\u5F55\u4E00\u4E0B\u914D\u7F6E\u65B9\u6CD5\u5E76\u7528\u6D4B\u8BD5\u5305\u6765\u9A8C\u8BC1\u4E0B\u3002</p><p>\u521B\u5EFA\u79C1\u670D\u7684\u8FC7\u7A0B\u8FD9\u91CC\u4E0D\u8BE6\u8FF0\u4E86\uFF0C\u5DF2\u77E5\u73B0\u6709Python\u79C1\u4ED3\uFF0C\u7269\u6599\u4FE1\u606F\u5982\u4E0B\uFF1A</p><ul><li>group\uFF1Ahttp://nexus.test.com/repository/pyg/</li><li>local\uFF1Ahttp://nexus.test.com/repository/pyg/</li></ul><h2 id="_2-\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0A\u4F20" aria-hidden="true">#</a> 2\uFF0C\u4E0A\u4F20</h2><h3 id="_1-\u5148\u5B89\u88C5\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u5148\u5B89\u88C5\u4F9D\u8D56\u5305" aria-hidden="true">#</a> 1\uFF0C\u5148\u5B89\u88C5\u4F9D\u8D56\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ pip3 <span class="token function">install</span> wheel --user
$ pip3 <span class="token function">install</span> twine --user
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="http://t.eryajf.net/imgs/2021/09/395aabbff10e80be.jpg" alt="img"></p><h3 id="_2-\u6DFB\u52A0\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u6DFB\u52A0\u914D\u7F6E" aria-hidden="true">#</a> 2\uFF0C\u6DFB\u52A0\u914D\u7F6E</h3><p>\u6709\u4E86\u5982\u4E0A\u7269\u6599\u4E4B\u540E\uFF0C\u6211\u4EEC\u9996\u5148\u6765\u9A8C\u8BC1\u4E0B\u4E0A\u4F20\u529F\u80FD\uFF0C\u5728\u672C\u5730\u7528\u6237\u5BB6\u76EE\u5F55\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.pypirc
<span class="token punctuation">[</span>distutils<span class="token punctuation">]</span>
index-servers <span class="token operator">=</span>
    pypi
    nexus
<span class="token punctuation">[</span>pypi<span class="token punctuation">]</span>
repository:https://pypi.python.org/pypi
username:eryajf
password:test
<span class="token punctuation">[</span>nexus<span class="token punctuation">]</span>
<span class="token assign-left variable">repository</span><span class="token operator">=</span>http://nexus.test.com/repository/pyg/
<span class="token assign-left variable">username</span><span class="token operator">=</span>dev
<span class="token assign-left variable">password</span><span class="token operator">=</span>GVLaX-E<span class="token operator">|</span>yq<span class="token variable">$vE</span><span class="token punctuation">[</span>/k
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-\u7F16\u5199\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-\u7F16\u5199\u4EE3\u7801" aria-hidden="true">#</a> 3\uFF0C\u7F16\u5199\u4EE3\u7801</h3><p>\u7136\u540E\u5728\u672C\u5730\u6253\u4E00\u4E2A\u6D4B\u8BD5\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> helloworld
$ <span class="token function">touch</span> helloworld/__init__.py
$ <span class="token function">cat</span> helloworld/demo.py
class Demo:
    @staticmethod
    def hello<span class="token punctuation">(</span><span class="token punctuation">)</span>:
        print<span class="token punctuation">(</span><span class="token string">&#39;helloworld&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7F16\u5199setup.py\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> setup.py
from setuptools <span class="token function">import</span> setup
setup<span class="token punctuation">(</span>
    <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&#39;helloworld&#39;</span>,
    <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&#39;1.0&#39;</span>,
    <span class="token assign-left variable">author</span><span class="token operator">=</span><span class="token string">&quot;techlog&quot;</span>,
    <span class="token assign-left variable">license</span><span class="token operator">=</span><span class="token string">&quot;MIT&quot;</span>,
    <span class="token assign-left variable">packages</span><span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">&#39;helloworld&#39;</span>
    <span class="token punctuation">]</span>,
    <span class="token assign-left variable">install_requires</span><span class="token operator">=</span><span class="token punctuation">[</span>
    <span class="token punctuation">]</span>,
    <span class="token assign-left variable">classifiers</span><span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">&quot;Topic :: Utilities&quot;</span>,
        <span class="token string">&quot;Topic :: Internet&quot;</span>,
        <span class="token string">&quot;Topic :: Software Development :: Libraries :: Python Modules&quot;</span>
    <span class="token punctuation">]</span>,
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u5177\u4F53\u7684 setup.py \u7684\u7F16\u5199\u89C4\u8303\u53EF\u4EE5\u53C2\u8003\uFF1Ahttps://packaging.python.org/tutorials/distributing-packages/#setup-py</p><p>\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tree
<span class="token builtin class-name">.</span>
\u251C\u2500\u2500 helloworld
\u2502   \u251C\u2500\u2500 __init__.py
\u2502   \u2514\u2500\u2500 demo.py
\u2514\u2500\u2500 setup.py
<span class="token number">1</span> directory, <span class="token number">3</span> files
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_4-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#_4-\u6253\u5305" aria-hidden="true">#</a> 4\uFF0C\u6253\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ python3 setup.py sdist bdist_wheel
running sdist
running egg_info
creating helloworld.egg-info
writing helloworld.egg-info/PKG-INFO
writing dependency_links to helloworld.egg-info/dependency_links.txt
writing top-level names to helloworld.egg-info/top_level.txt
writing manifest <span class="token function">file</span> <span class="token string">&#39;helloworld.egg-info/SOURCES.txt&#39;</span>
reading manifest <span class="token function">file</span> <span class="token string">&#39;helloworld.egg-info/SOURCES.txt&#39;</span>
writing manifest <span class="token function">file</span> <span class="token string">&#39;helloworld.egg-info/SOURCES.txt&#39;</span>
warning: sdist: standard <span class="token function">file</span> not found: should have one of README, README.rst, README.txt, README.md
running check
warning: check: missing required meta-data: url
warning: check: missing meta-data: <span class="token keyword">if</span> <span class="token string">&#39;author&#39;</span> supplied, <span class="token string">&#39;author_email&#39;</span> must be supplied too
creating helloworld-1.0
creating helloworld-1.0/helloworld
creating helloworld-1.0/helloworld.egg-info
copying files to helloworld-1.0<span class="token punctuation">..</span>.
copying setup.py -<span class="token operator">&gt;</span> helloworld-1.0
copying helloworld/__init__.py -<span class="token operator">&gt;</span> helloworld-1.0/helloworld
copying helloworld/demo.py -<span class="token operator">&gt;</span> helloworld-1.0/helloworld
copying helloworld.egg-info/PKG-INFO -<span class="token operator">&gt;</span> helloworld-1.0/helloworld.egg-info
copying helloworld.egg-info/SOURCES.txt -<span class="token operator">&gt;</span> helloworld-1.0/helloworld.egg-info
copying helloworld.egg-info/dependency_links.txt -<span class="token operator">&gt;</span> helloworld-1.0/helloworld.egg-info
copying helloworld.egg-info/top_level.txt -<span class="token operator">&gt;</span> helloworld-1.0/helloworld.egg-info
Writing helloworld-1.0/setup.cfg
creating dist
Creating <span class="token function">tar</span> archive
removing <span class="token string">&#39;helloworld-1.0&#39;</span> <span class="token punctuation">(</span>and everything under it<span class="token punctuation">)</span>
running bdist_wheel
running build
running build_py
creating build
creating build/lib
creating build/lib/helloworld
copying helloworld/__init__.py -<span class="token operator">&gt;</span> build/lib/helloworld
copying helloworld/demo.py -<span class="token operator">&gt;</span> build/lib/helloworld
installing to build/bdist.macosx-10.14-x86_64/wheel
running <span class="token function">install</span>
running install_lib
creating build/bdist.macosx-10.14-x86_64
creating build/bdist.macosx-10.14-x86_64/wheel
creating build/bdist.macosx-10.14-x86_64/wheel/helloworld
copying build/lib/helloworld/__init__.py -<span class="token operator">&gt;</span> build/bdist.macosx-10.14-x86_64/wheel/helloworld
copying build/lib/helloworld/demo.py -<span class="token operator">&gt;</span> build/bdist.macosx-10.14-x86_64/wheel/helloworld
running install_egg_info
Copying helloworld.egg-info to build/bdist.macosx-10.14-x86_64/wheel/helloworld-1.0-py3.7.egg-info
running install_scripts
creating build/bdist.macosx-10.14-x86_64/wheel/helloworld-1.0.dist-info/WHEEL
creating <span class="token string">&#39;dist/helloworld-1.0-py3-none-any.whl&#39;</span> and adding <span class="token string">&#39;build/bdist.macosx-10.14-x86_64/wheel&#39;</span> to it
adding <span class="token string">&#39;helloworld/__init__.py&#39;</span>
adding <span class="token string">&#39;helloworld/demo.py&#39;</span>
adding <span class="token string">&#39;helloworld-1.0.dist-info/METADATA&#39;</span>
adding <span class="token string">&#39;helloworld-1.0.dist-info/WHEEL&#39;</span>
adding <span class="token string">&#39;helloworld-1.0.dist-info/top_level.txt&#39;</span>
adding <span class="token string">&#39;helloworld-1.0.dist-info/RECORD&#39;</span>
removing build/bdist.macosx-10.14-x86_64/wheel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>\u6253\u5305\u4E4B\u540E\uFF0C\u4F1A\u751F\u6210\u4E00\u4E2Abuild\u76EE\u5F55\u548Cdist\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tree
<span class="token builtin class-name">.</span>
\u251C\u2500\u2500 build
\u2502   \u251C\u2500\u2500 bdist.macosx-10.14-x86_64
\u2502   \u2514\u2500\u2500 lib
\u2502       \u2514\u2500\u2500 helloworld
\u2502           \u251C\u2500\u2500 __init__.py
\u2502           \u2514\u2500\u2500 demo.py
\u251C\u2500\u2500 dist
\u2502   \u251C\u2500\u2500 helloworld-1.0-py3-none-any.whl
\u2502   \u2514\u2500\u2500 helloworld-1.0.tar.gz
\u251C\u2500\u2500 helloworld
\u2502   \u251C\u2500\u2500 __init__.py
\u2502   \u2514\u2500\u2500 demo.py
\u251C\u2500\u2500 helloworld.egg-info
\u2502   \u251C\u2500\u2500 PKG-INFO
\u2502   \u251C\u2500\u2500 SOURCES.txt
\u2502   \u251C\u2500\u2500 dependency_links.txt
\u2502   \u2514\u2500\u2500 top_level.txt
\u2514\u2500\u2500 setup.py
<span class="token number">7</span> directories, <span class="token number">11</span> files
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_5-\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#_5-\u4E0A\u4F20" aria-hidden="true">#</a> 5\uFF0C\u4E0A\u4F20</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ python3 -m twine upload --repository nexus dist/*
Uploading distributions to http://nexus.test.com/repository/pygl/
Uploading helloworld-1.0-py3-none-any.whl
<span class="token number">100</span>%<span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> <span class="token number">4</span>.38k/4.38k <span class="token punctuation">[</span>00:0<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>00:00, <span class="token number">46</span>.9kB/s<span class="token punctuation">]</span>
Uploading helloworld-1.0.tar.gz
<span class="token number">100</span>%<span class="token operator">|</span>\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588<span class="token operator">|</span> <span class="token number">3</span>.77k/3.77k <span class="token punctuation">[</span>00:0<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>00:00, 112kB/s<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u770B\u5230\u5982\u4E0A\u5185\u5BB9\uFF0C\u5C31\u8BF4\u660E\u4E0A\u4F20\u6210\u529F\u4E86\u3002</p><p>\u53EF\u4EE5\u6D4F\u89C8\u5668\u4E0A\u770B\u4E0B\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/d296492a494877ef.jpg" alt="image-20201120164214736"></p><h2 id="_3-\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_3-\u4E0B\u8F7D" aria-hidden="true">#</a> 3\uFF0C\u4E0B\u8F7D</h2><p>\u62C9\u5305\u5C31\u6BD4\u8F83\u7B80\u5355\u4E86\uFF0C\u9996\u5148\u914D\u7F6E\u5982\u4E0B\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/.pip
<span class="token function">cat</span> <span class="token operator">&gt;</span> ~/.pip/pip.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[global]
timeout = 60
trusted-host =  nexus.test.com
index-url = http://nexus.test.com/repository/pypi/simple
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7136\u540E\u76F4\u63A5\u5B89\u88C5\u5BF9\u5E94\u5305\u5373\u53EF\u3002</p>`,34);function l(p,r){return e}var t=s(a,[["render",l]]);export{t as default};
