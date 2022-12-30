import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u6CE8\uFF1A\u672C\u6587\u7AE0\u6839\u636E\u7F51\u4E0A\u98DE\u7FD4\u5206\u4EAB\u7684\u6587\u6863\u6574\u7406\u3002</p><p>\u5173\u4E8Edocker\u7684\u5B89\u88C5\u90E8\u7F72\uFF0C\u8FD9\u91CC\u6682\u5148\u7565\u6389\u3002</p><h2 id="_1-\u5148\u4E0B\u8F7Djenkins\u7684\u955C\u50CF\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u5148\u4E0B\u8F7Djenkins\u7684\u955C\u50CF\u3002" aria-hidden="true">#</a> 1\uFF0C\u5148\u4E0B\u8F7DJenkins\u7684\u955C\u50CF\u3002</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$docker</span> pull jenkinsci/blueocean
Using default tag: latest
latest: Pulling from jenkinsci/blueocean
ff3a5c916c92: Pull complete
5de5f69f42d7: Pull complete
fd869c8b9b59: Pull complete
09b77ebbb585: Pull complete
edaab8c638eb: Pull complete
74718d164167: Pull complete
6d6dab0396d5: Pull complete
f6a4487e3af7: Pull complete
4b44a66deffd: Pull complete
925e68272890: Pull complete
428de9991230: Pull complete
f4b1af398075: Pull complete
425d68489478: Pull complete
e2f8bb400606: Pull complete
251d043c8226: Pull complete
9a6a8fe90c4f: Downloading <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">&gt;</span>    <span class="token punctuation">]</span>  <span class="token number">62</span>.19MB/66.73MB
9a6a8fe90c4f: Pull complete
Digest: sha256:df6669eab61f76cba7b51847ef24623f65902499925b4d5a2516d155dc95c0c5
Status: Downloaded newer image <span class="token keyword">for</span> jenkinsci/blueocean:latest
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_2-\u67E5\u770B\u955C\u50CF\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u955C\u50CF\u3002" aria-hidden="true">#</a> 2\uFF0C\u67E5\u770B\u955C\u50CF\u3002</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$docker</span> images
REPOSITORY           TAG             IMAGE ID            CREATED             SIZE
jenkinsci/blueocean  latest          52e299133c9c        <span class="token number">20</span> hours ago        438MB
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-\u5C06\u955C\u50CF\u542F\u52A8\u6210\u5BB9\u5668\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u5C06\u955C\u50CF\u542F\u52A8\u6210\u5BB9\u5668\u3002" aria-hidden="true">#</a> 3\uFF0C\u5C06\u955C\u50CF\u542F\u52A8\u6210\u5BB9\u5668\u3002</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -d  <span class="token punctuation">\\</span>
--name jk -u root <span class="token punctuation">\\</span>
-p <span class="token number">9090</span>:8080  <span class="token punctuation">\\</span>
-v /var/jenkins_home:/var/jenkins_home  <span class="token punctuation">\\</span>
jenkinsci/blueocean
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><blockquote><ul><li>1\uFF0C\u2013name \u662F\u6307\u5B9A\u751F\u6210\u7684\u5BB9\u5668\u540D\u79F0\u3002</li><li>2\uFF0C\u6700\u597D\u4F7F\u7528root\u542F\u52A8\uFF0C\u4EE5\u514D\u6709\u6743\u9650\u95EE\u9898\u800C\u542F\u52A8\u5931\u8D25\u3002</li><li>3\uFF0C-p\u662F\u7AEF\u53E3\u7684\u6620\u5C04\uFF0C\u5192\u53F7\u524D\u8FB9\u662F\u5BBF\u4E3B\u673A\u7684\u7AEF\u53E3\uFF0C\u5192\u53F7\u540E\u8FB9\u7684\u662F\u5BB9\u5668\u7684\u7AEF\u53E3\u3002</li><li>4\uFF0C-v\u5C06Jenkins\u5BB9\u5668\u7684Jenkins_home\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u7684\u76EE\u5F55\u4E2D\uFF0C\u5B9E\u73B0\u6570\u636E\u6301\u7EED\u5316\u3002</li></ul></blockquote><h2 id="_4-\u67E5\u770B\u542F\u52A8\u7684\u5BB9\u5668\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u67E5\u770B\u542F\u52A8\u7684\u5BB9\u5668\u3002" aria-hidden="true">#</a> 4\uFF0C\u67E5\u770B\u542F\u52A8\u7684\u5BB9\u5668\u3002</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$docker</span> <span class="token function">ps</span>
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                               NAMES
19e670dc09b0        jenkinsci/blueocean   <span class="token string">&quot;/sbin/tini -- /usr/\u2026&quot;</span>   <span class="token number">4</span> seconds ago       Up <span class="token number">3</span> seconds        <span class="token number">50000</span>/tcp, <span class="token number">0.0</span>.0.0:9090-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   jenkins
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u542F\u52A8\u4E4B\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u5BBF\u4E3B\u673Aip+\u6620\u5C04\u7684\u7AEF\u53E3\u8FDB\u884C\u8BBF\u95EE\u4E86\u3002</p><h2 id="_5-\u521D\u5165jenkins\u3002" tabindex="-1"><a class="header-anchor" href="#_5-\u521D\u5165jenkins\u3002" aria-hidden="true">#</a> 5\uFF0C\u521D\u5165Jenkins\u3002</h2><p>\u6CE8\u610F\u521A\u8FDB\u5165\u4E4B\u540E\u4F1A\u6709\u4E00\u4E2A\u5751\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/c902710b00a7750f.jpg" alt="image"></p><p>\u8FD9\u91CC\u770B\u5230\u6307\u5B9A\u4E86\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u53BB\u5230var\u4E0B\u53BB\u627E\uFF0C\u4F46\u662F\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u5E76\u6CA1\u6709\u8FD9\u4E2A\u76EE\u5F55\uFF0C\u53EF\u80FD\u8FD9\u662F\u955C\u50CF\u9ED8\u8BA4\u7684\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u4F46\u662F\u4E8B\u5B9E\u5374\u5E76\u975E\u5982\u6B64\u3002</p><p>\u90A3\u4E48\u6211\u4EEC\u5C31\u8981\u7528\u4E00\u4E0Bfind \u5927\u6CD5\u4E86\uFF08\u5176\u5B9E\u5728/var/lib/docker/volumes/c727610d35c19516dc279ffb9cc8ef68a3ff9e8ef4798a4e2730a1223f22d372/secrets/initialAdminPassword\u4E4B\u4E2D\u3002\uFF09\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/48b197e8e245c58e.jpg" alt="image"></p><p>\u8FD9\u91CC\u662F\u6211\u4E4B\u524D\u8D77\u4E86\u51E0\u6B21\u5BB9\u5668\u624D\u4F1A\u6709\u591A\u4E2A\u6587\u4EF6\uFF0C\u6839\u636E\u65F6\u95F4\u5224\u65AD\u662F\u54EA\u4E2A\u5C31\u884C\u4E86\u3002</p><p>\u63A5\u4E0B\u6765\u53BB\u5230\u5BB9\u5668\u5F53\u4E2D\u770B\u770B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mnt<span class="token punctuation">]</span><span class="token variable">$docker</span> <span class="token builtin class-name">exec</span> -it jk <span class="token function">bash</span>
bash-4.4<span class="token comment">#</span>
bash-4.4<span class="token comment"># ls</span>
bin  etc   lib	  mnt	root  sbin  sys  usr
dev  home  media  proc	run   srv   tmp  var
bash-4.4<span class="token comment">#</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>\u6CE8\u610F\u8FD9\u91CC\u5BB9\u5668\u4E2D\u4F7F\u7528apk\u547D\u4EE4\u6765\u7BA1\u7406\u5E94\u7528\u7684\u5B89\u88C5\u914D\u7F6E\uFF0C\u7C7B\u4F3C\u4E8E\u7CFB\u7EDF\u4E2D\u7684yum\u547D\u4EE4\u3002</code></p><p>\u5148\u6765\u67E5\u770B\u4E00\u4E0Bapk\u547D\u4EE4\u7684\u7528\u6CD5\u3002</p><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash-4.4<span class="token comment"># apk -h</span>
apk-tools <span class="token number">2.8</span>.2, compiled <span class="token keyword">for</span> x86_64.
usage: apk COMMAND <span class="token punctuation">[</span>-h<span class="token operator">|</span>--help<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p<span class="token operator">|</span>--root DIR<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>-X<span class="token operator">|</span>--repository REPO<span class="token punctuation">]</span> <span class="token punctuation">[</span>-q<span class="token operator">|</span>--quiet<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>-v<span class="token operator">|</span>--verbose<span class="token punctuation">]</span> <span class="token punctuation">[</span>-i<span class="token operator">|</span>--interactive<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>-V<span class="token operator">|</span>--version<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f<span class="token operator">|</span>--force<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--force-binary-stdout<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--force-broken-world<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--force-non-repository<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--force-old-apk<span class="token punctuation">]</span> <span class="token punctuation">[</span>--force-overwrite<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--force-refresh<span class="token punctuation">]</span> <span class="token punctuation">[</span>-U<span class="token operator">|</span>--update-cache<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--progress<span class="token punctuation">]</span> <span class="token punctuation">[</span>--progress-fd FD<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--no-progress<span class="token punctuation">]</span> <span class="token punctuation">[</span>--purge<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--allow-untrusted<span class="token punctuation">]</span> <span class="token punctuation">[</span>--wait TIME<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--keys-dir KEYSDIR<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--repositories-file REPOFILE<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--no-network<span class="token punctuation">]</span> <span class="token punctuation">[</span>--no-cache<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--cache-dir CACHEDIR<span class="token punctuation">]</span> <span class="token punctuation">[</span>--arch ARCH<span class="token punctuation">]</span>
           <span class="token punctuation">[</span>--print-arch<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARGS<span class="token punctuation">]</span><span class="token punctuation">..</span>.
 
The following commands are available:
  <span class="token function">add</span>       Add PACKAGEs to <span class="token string">&#39;world&#39;</span> and <span class="token function">install</span>
            <span class="token punctuation">(</span>or upgrade<span class="token punctuation">)</span> them, <span class="token keyword">while</span> ensuring
            that all dependencies are met
  del       Remove PACKAGEs from <span class="token string">&#39;world&#39;</span> and
            uninstall them
  fix       Repair package or upgrade it without
            modifying main dependencies
  update    Update repository indexes from all
            remote repositories
  info      Give detailed information about
            PACKAGEs or repositories
  search    Search package by PATTERNs or by
            indexed dependencies
  upgrade   Upgrade currently installed packages
            to match repositories
  cache     Download missing PACKAGEs to cache
            and/or delete unneeded files from
            cache
  version   Compare package versions <span class="token punctuation">(</span>in
            installed database vs. available<span class="token punctuation">)</span> or
            <span class="token keyword">do</span> tests on literal version strings
  index     Create repository index <span class="token function">file</span> from
            FILEs
  fetch     Download PACKAGEs from global
            repositories to a <span class="token builtin class-name">local</span> directory
  audit     Audit the directories <span class="token keyword">for</span> changes
  verify    Verify package integrity and
            signature
  dot       Generate graphviz graphs
  policy    Show repository policy <span class="token keyword">for</span> packages
  stats     Show statistics about repositories
            and installations
  manifest  Show checksums of package contents
 
Global options:
  -h, --help              Show generic <span class="token builtin class-name">help</span> or
                          applet specific <span class="token builtin class-name">help</span>
  -p, --root DIR          Install packages to DIR
  -X, --repository REPO   Use packages from REPO
  -q, --quiet             Print <span class="token function">less</span> information
  -v, --verbose           Print <span class="token function">more</span> information
                          <span class="token punctuation">(</span>can be doubled<span class="token punctuation">)</span>
  -i, --interactive       Ask confirmation <span class="token keyword">for</span>
                          certain operations
  -V, --version           Print program version
                          and <span class="token builtin class-name">exit</span>
  -f, --force             Enable selected
                          --force-* <span class="token punctuation">(</span>deprecated<span class="token punctuation">)</span>
  --force-binary-stdout   Continue even <span class="token keyword">if</span> binary
                          data is to be output
  --force-broken-world    Continue even <span class="token keyword">if</span>
                          <span class="token string">&#39;world&#39;</span> cannot be
                          satisfied
  --force-non-repository  Continue even <span class="token keyword">if</span>
                          packages may be lost on
                          <span class="token function">reboot</span>
  --force-old-apk         Continue even <span class="token keyword">if</span>
                          packages use
                          unsupported features
  --force-overwrite       Overwrite files <span class="token keyword">in</span>
                          other packages
  --force-refresh         Do not use cached files
                          <span class="token punctuation">(</span>local or from proxy<span class="token punctuation">)</span>
  -U, --update-cache      Update the repository
                          cache
  --progress              Show a progress bar
  --progress-fd FD        Write progress to fd
  --no-progress           Disable progress bar
                          even <span class="token keyword">for</span> TTYs
  --purge                 Delete also modified
                          configuration files
                          <span class="token punctuation">(</span>pkg removal<span class="token punctuation">)</span> and
                          uninstalled packages
                          from cache <span class="token punctuation">(</span>cache
                          clean<span class="token punctuation">)</span>
  --allow-untrusted       Install packages with
                          untrusted signature or
                          no signature
  --wait TIME             Wait <span class="token keyword">for</span> TIME seconds
                          to get an exclusive
                          repository lock before
                          failing
  --keys-dir KEYSDIR      Override directory of
                          trusted keys
  --repositories-file REPOFILE Override
                          repositories <span class="token function">file</span>
  --no-network            Do not use network
                          <span class="token punctuation">(</span>cache is still used<span class="token punctuation">)</span>
  --no-cache              Do not use any <span class="token builtin class-name">local</span>
                          cache path
  --cache-dir CACHEDIR    Override cache
                          directory
  --arch ARCH             Use architecture with
                          --root
  --print-arch            Print default arch and
                          <span class="token builtin class-name">exit</span>
 
This apk has coffee making abilities.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br></div></div></details><h2 id="_6-\u57FA\u7840\u8F6F\u4EF6\u5B89\u88C5\u3002" tabindex="-1"><a class="header-anchor" href="#_6-\u57FA\u7840\u8F6F\u4EF6\u5B89\u88C5\u3002" aria-hidden="true">#</a> 6\uFF0C\u57FA\u7840\u8F6F\u4EF6\u5B89\u88C5\u3002</h2><p>\u63A5\u4E0B\u6765\u64CD\u4F5C\u4E00\u6CE2\u5B89\u88C5\u4E00\u4E9B\u5E38\u7528\u7684\u5DE5\u5177\u3002</p><h3 id="_1-maven\u3002" tabindex="-1"><a class="header-anchor" href="#_1-maven\u3002" aria-hidden="true">#</a> 1\uFF0Cmaven\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash-4.4<span class="token comment"># apk add maven</span>
OK: <span class="token number">402</span> MiB <span class="token keyword">in</span> <span class="token number">107</span> packages
bash-4.4<span class="token comment"># apk search ansible</span>
ansible-2.4.1.0-r0
ansible-doc-2.4.1.0-r0
bash-4.4<span class="token comment"># apk add ansible</span>
OK: <span class="token number">402</span> MiB <span class="token keyword">in</span> <span class="token number">107</span> packages
bash-4.4<span class="token comment"># apk add ansible-doc</span>
OK: <span class="token number">402</span> MiB <span class="token keyword">in</span> <span class="token number">107</span> packages
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u63A5\u7740\u67E5\u770B\u4E00\u4E0B\u8FD9\u4E9B\u5DE5\u5177\u5728\u5BB9\u5668\u4E2D\u662F\u5B89\u5728\u4E86\u4EC0\u4E48\u5730\u65B9\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash-4.4<span class="token comment"># apk info -L maven</span>
maven-3.5.2-r0 contains:
etc/mavenrc
usr/bin/mvnDebug
usr/bin/mvn
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2-git\u3002" tabindex="-1"><a class="header-anchor" href="#_2-git\u3002" aria-hidden="true">#</a> 2\uFF0Cgit\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash-4.4<span class="token comment"># apk info -L git</span>
usr/bin/git
usr/bin/git-upload-pack
usr/bin/git-receive-pack
usr/bin/git-upload-archive
usr/bin/git-shell
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-jdk\u3002" tabindex="-1"><a class="header-anchor" href="#_3-jdk\u3002" aria-hidden="true">#</a> 3\uFF0Cjdk\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash-4.4<span class="token comment"># echo $JAVA_HOME</span>
/usr/lib/jvm/java-1.8-openjdk
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_7-jenkins\u4E2D\u7684\u57FA\u7840\u914D\u7F6E\u3002" tabindex="-1"><a class="header-anchor" href="#_7-jenkins\u4E2D\u7684\u57FA\u7840\u914D\u7F6E\u3002" aria-hidden="true">#</a> 7\uFF0CJenkins\u4E2D\u7684\u57FA\u7840\u914D\u7F6E\u3002</h2><p>\u73B0\u5728\u8FDB\u884C\u57FA\u7840\u7684\u914D\u7F6E\uFF0C\u5305\u62EC\u63D2\u4EF6\u5B89\u88C5\uFF0C\u73AF\u5883\u53D8\u91CF\u7684\u914D\u7F6E\u7B49\u3002</p><p>\u63D2\u4EF6\u6709\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git	
gitlab	\u53EF\u4EE5\u914D\u7F6E\u4E0Egitlab\u7684\u8FDE\u63A5\u3002
Publish Over SSH	\u4F7F\u7528ssh\u7684\u65B9\u5F0F\u4E0Eremote\u670D\u52A1\u5668\u8FDB\u884C\u4EA4\u4E92\uFF0C\u4E4B\u524D\u4E00\u76F4\u4F7F\u7528\u547D\u4EE4\u4EE3\u52B3\u4E00\u5207\u4E86\uFF0C\u8FD9\u6B21\u91C7\u7528\u4E00\u4E0B\u7CFB\u7EDF\u7684\u63D2\u4EF6\u3002
docker
ansible
Monitoring	\u76D1\u63A7Jenkins\u6240\u6D88\u8017\u7684\u7CFB\u7EDF\u8D44\u6E90\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u63D2\u4EF6\u5B89\u88C5\u4E0D\u505A\u8FC7\u591A\u4ECB\u7ECD\u3002</p><p>\u6211\u4EEC\u6765\u5230\u7CFB\u7EDF\u8BBE\u7F6E\u2013\u300B\u5168\u5C40\u5DE5\u5177\u914D\u7F6E\u9875\u9762\u3002</p><p>\u4F9D\u7136\u662F\u4E00\u4E9B\u5DE5\u5177\u7684\u914D\u7F6E\u3002</p><p>\u521A\u624D\u5DF2\u7ECF\u5168\u90E8\u770B\u8FC7\u4E86\uFF0C\uFF0C\u73B0\u5728\u914D\u7F6E\u5982\u4E0B\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/dd61b6a41087807c.jpg" alt="image"></p><p><img src="http://t.eryajf.net/imgs/2021/09/6f41d18d34ddc37f.jpg" alt="image"></p><p>\u4E0A\u8FB9\u90FD\u662F\u4E00\u4E9B\u57FA\u672C\u5DE5\u4F5C\uFF0C\u5FC5\u987B\u8981\u505A\u7684\uFF0C\u4E0D\u7136\u4E0B\u8FB9\u7684\u4E8B\u513F\u90FD\u514D\u8C08\u4E86\u3002</p><p>\u63A5\u4E0B\u6765\u7684\u64CD\u4F5C\u5219\u662F\u5B8C\u5168\u5229\u7528Jenkins\u4E2D\u7684\u5DE5\u5177\uFF0C\u628A\u514D\u79D8\u94A5\u5DE5\u4F5C\u7684\u4E8B\u513F\u7ED9\u5E72\u4E86\u3002\u6211\u4EEC\u6765\u770B\u4E0B\u5982\u4F55\u914D\u7F6E\u7684\u3002</p><p>\u9996\u5148\u5728\u5BB9\u5668\u5F53\u4E2D\u751F\u6210\u5BC6\u94A5\u5BF9\u3002</p><p>\u7136\u540E\u6765\u5230Jenkins\u4E2D\u5148\u5C06\u5BB9\u5668\u81EA\u5DF1\u7684\u79C1\u94A5\u653E\u8FDB\u6765\u3002</p><p>\u5728\u521D\u59CB\u754C\u9762\u70B9\u51FB <code>Credentials</code> \u6DFB\u52A0\u8BC1\u4E66\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/c53fc55953f932bd.jpg" alt="image"></p><p>\u8FD9\u4E2A\u65F6\u5019\u53BB\u5BB9\u5668\u4E2D\u590D\u5236\u597D\u521A\u751F\u6210\u7684\u79C1\u94A5\uFF0C\u7B49\u4E0B\u8981\u7528\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/f3c2263f40d638cc.jpg" alt="image"></p><p>\u5BF9\u5708\u8D77\u6765\u7684\u5730\u65B9\u8FDB\u884C\u914D\u7F6E\u3002\u7136\u540E\u70B9\u51FBok\u3002\u5C31\u628AJenkins\u672C\u673A\u7684\u79C1\u94A5\u6DFB\u52A0\u8FDB\u53BB\u4E86\uFF0C\u968F\u540E\u53EA\u8981\u6211\u4EEC\u628AJenkins\u516C\u94A5\u653E\u5165\u5176\u4ED6\u5730\u65B9\uFF08\u6216\u8005\u662F\u670D\u52A1\u5668\uFF0C\u6216\u8005\u662F\u5176\u4ED6\u5730\u65B9\uFF09\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u4F7F\u7528\u8FD9\u4E2A\u914D\u7F6E\u597D\u7684\u8BC1\u4E66\u8FDB\u884C\u767B\u9646\u4E86\u3002</p><p>\u7136\u540E\u8FDB\u5165\u5230\u7CFB\u7EDF\u914D\u7F6E\uFF0C\u914D\u7F6E\u51FA\u5BB9\u5668\u4E2D\u7684Jenkins\u4E0E\u8FDC\u7A0B\u670D\u52A1\u5668\u5BBF\u4E3B\u673A\u7684\u4FE1\u606F\uFF0C\u4E0D\u8981\u7740\u6025\uFF0C\u8FD9\u4E2A\u5730\u65B9\u7684\u914D\u7F6E\uFF0C\u4F1A\u5728\u7B49\u4F1A\u513F\u7528\u5F97\u5230\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/a8b8575fc9ffb1b5.jpg" alt="image"></p><p>\u4EE5\u4E0A\u7B80\u5355\u8868\u8FF0\u4E86\u4E00\u4E0BJenkins\u901A\u8FC7docker\u90E8\u7F72\u4E4B\u540E\u7684\u4E00\u4E9B\u7B80\u5355\u914D\u7F6E\u8FC7\u7A0B\u3002\u63A5\u4E0B\u6765\u4E5F\u4F1A\u5F00\u542Fdocker\u65F6\u4EE3\uFF0C\u90FD\u4EE5docker\u4E3A\u57FA\u51C6\u8FDB\u884C\u66F4\u591A\u529F\u80FD\u7684\u914D\u7F6E\u4EE5\u53CA\u6269\u5C55\u3002</p><p>\u5C31\u50CF\u65E5\u65B0\u6708\u5F02\u7684\u6280\u672F\u4E00\u6837\u7684\uFF0C\u6211\u4EEC\u81EA\u5DF1\u6240\u638C\u63E1\u7684\uFF0C\u4E5F\u5E94\u8BE5\u662F\u65E5\u65E5\u65B0\u7684\u3002</p>`,58);function p(l,r){return e}var o=s(a,[["render",p]]);export{o as default};
