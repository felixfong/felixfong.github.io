import{r as a,o as e,c as t,b as n,a as o,F as l,e as r,d as p}from"./app.dbf5d933.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=r(`<p>MongoDB \u5B98\u7F51\uFF1Ahttps://www.mongodb.com/</p><p>\u5404\u7248\u672C\u8F6F\u4EF6\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://www.mongodb.com/download-center/community?jmp=nav</p><h2 id="_1-\u5B89\u88C5\u524D\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u524D\u51C6\u5907" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5\u524D\u51C6\u5907</h2><p>\u5728\u5B89\u88C5\u4E4B\u524D\u9996\u5148\u786E\u8BA4\u8BE5\u7248\u672C\u8F6F\u4EF6\u662F\u5426\u652F\u6301\u4F60\u7684\u64CD\u4F5C\u7CFB\u7EDF\u3002</p><p>\u66F4\u591A\u8BE6\u60C5\u67E5\u770B\uFF1Ahttps://docs.mongodb.com/manual/installation/</p><table><thead><tr><th><strong>Platform</strong></th><th><strong>4.0 Community &amp; Enterprise</strong></th><th><strong>3.6 Community &amp; Enterprise</strong></th><th><strong>3.4 Community &amp; Enterprise</strong></th><th><strong>3.2 Community &amp; Enterprise</strong></th><th><strong>3.0 Community &amp; Enterprise</strong></th></tr></thead><tbody><tr><td><strong>RHEL/CentOS 6.2 and later</strong></td><td>\u2713</td><td>\u2713</td><td>\u2713</td><td>\u2713</td><td>\u2713</td></tr><tr><td><strong>RHEL/CentOS 7.0 and later</strong></td><td>\u2713</td><td>\u2713</td><td>\u2713</td><td>\u2713</td><td>\u2713</td></tr></tbody></table><h2 id="_2-\u73AF\u5883\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-\u73AF\u5883\u8BF4\u660E" aria-hidden="true">#</a> 2\uFF0C\u73AF\u5883\u8BF4\u660E</h2><p><strong>\u7CFB\u7EDF\u73AF\u5883\u8BF4\u660E\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$cat</span> /etc/redhat-release
CentOS Linux release <span class="token number">7.5</span>.1804 <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u8F6F\u4EF6\u7248\u672C\u8BF4\u660E</strong></p><p><code>\u672C\u6B21\u4F7F\u7528\u7684mongodb\u7248\u672C\u4E3A\uFF1Amongodb-linux-s390x-rhel72-4.0.10.tgz</code></p><p><img src="http://t.eryajf.net/imgs/2021/09/7fb6bb6ca2cbc6a4.jpg" alt="image"></p><h2 id="_3-\u90E8\u7F72-mongodb" tabindex="-1"><a class="header-anchor" href="#_3-\u90E8\u7F72-mongodb" aria-hidden="true">#</a> 3\uFF0C\u90E8\u7F72 MongoDB</h2><h3 id="_1-\u5B89\u88C5\u6240\u9700\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u6240\u9700\u4F9D\u8D56" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5\u6240\u9700\u4F9D\u8D56</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> libcurl openssl
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-\u4E0B\u8F7D\u6240\u9700\u5305" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0B\u8F7D\u6240\u9700\u5305" aria-hidden="true">#</a> 2\uFF0C\u4E0B\u8F7D\u6240\u9700\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span>$ <span class="token function">wget</span> https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.0.10.tgz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_3-\u89E3\u538B\u5305" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u538B\u5305" aria-hidden="true">#</a> 3\uFF0C\u89E3\u538B\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span>$ <span class="token function">tar</span> xf mongodb-linux-x86_64-rhel70-4.0.10.tgz
<span class="token punctuation">[</span>root@localhost src<span class="token punctuation">]</span>$ <span class="token function">mv</span> mongodb-linux-x86_64-rhel70-4.0.10 /usr/local/mongodb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4-\u521B\u5EFA\u6570\u636E\u5B58\u50A8\u76EE\u5F55\u548C\u65E5\u5FD7\u6587\u4EF6\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA\u6570\u636E\u5B58\u50A8\u76EE\u5F55\u548C\u65E5\u5FD7\u6587\u4EF6\u76EE\u5F55" aria-hidden="true">#</a> 4\uFF0C\u521B\u5EFA\u6570\u636E\u5B58\u50A8\u76EE\u5F55\u548C\u65E5\u5FD7\u6587\u4EF6\u76EE\u5F55</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /usr/local/mongodb/data/db
<span class="token function">mkdir</span> -p /usr/local/mongodb/logs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_5-\u7F16\u8F91-mongodb-\u542F\u52A8\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u7F16\u8F91-mongodb-\u542F\u52A8\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 5\uFF0C\u7F16\u8F91 MongoDB \u542F\u52A8\u914D\u7F6E\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/mongodb/bin
<span class="token function">vim</span> mongodb.conf
<span class="token comment">#\u6570\u636E\u5B58\u50A8\u76EE\u5F55</span>
<span class="token assign-left variable">dbpath</span><span class="token operator">=</span>/usr/local/mongodb/data/db
<span class="token comment">#\u65E5\u5FD7\u6587\u4EF6\u76EE\u5F55</span>
<span class="token assign-left variable">logpath</span><span class="token operator">=</span>/usr/local/mongodb/logs/mongodb.log
<span class="token comment">#\u540E\u53F0\u8FD0\u884C</span>
<span class="token assign-left variable">fork</span><span class="token operator">=</span>true
<span class="token assign-left variable">auth</span><span class="token operator">=</span>true
<span class="token assign-left variable">bind_ip</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u53C2\u6570\u8BF4\u660E:</strong></p><table><thead><tr><th style="text-align:center;"><strong>\u53C2\u6570</strong></th><th style="text-align:center;"><strong>\u53C2\u6570\u8BF4\u660E</strong></th></tr></thead><tbody><tr><td style="text-align:center;"><strong>\u2013dbpath</strong></td><td style="text-align:center;">\u6570\u636E\u5B58\u653E\u8DEF\u5F84</td></tr><tr><td style="text-align:center;"><strong>\u2013logpath</strong></td><td style="text-align:center;">\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td style="text-align:center;"><strong>\u2013logappend</strong></td><td style="text-align:center;">\u65E5\u5FD7\u8F93\u51FA\u65B9\u5F0F</td></tr><tr><td style="text-align:center;"><strong>\u2013port</strong></td><td style="text-align:center;">\u542F\u7528\u7AEF\u53E3\u53F7</td></tr><tr><td style="text-align:center;"><strong>\u2013fork</strong></td><td style="text-align:center;">\u5728\u540E\u53F0\u8FD0\u884C</td></tr><tr><td style="text-align:center;"><strong>\u2013auth</strong></td><td style="text-align:center;">\u662F\u5426\u9700\u8981\u9A8C\u8BC1\u6743\u9650\u767B\u5F55 (\u7528\u6237\u540D\u548C\u5BC6\u7801)</td></tr><tr><td style="text-align:center;"><strong>\u2013bind_ip</strong></td><td style="text-align:center;">\u9650\u5236\u8BBF\u95EE\u7684 ip</td></tr><tr><td style="text-align:center;"><strong>\u2013shutdown</strong></td><td style="text-align:center;">\u5173\u95ED\u6570\u636E\u5E93</td></tr></tbody></table><h3 id="_6-mongodb-\u7684\u53EF\u6267\u884C\u6587\u4EF6\u4F4D\u4E8E-bin-\u76EE\u5F55\u4E0B-\u9700\u8981\u5C06\u5176\u6DFB\u52A0\u5230-path-\u8DEF\u5F84\u4E2D" tabindex="-1"><a class="header-anchor" href="#_6-mongodb-\u7684\u53EF\u6267\u884C\u6587\u4EF6\u4F4D\u4E8E-bin-\u76EE\u5F55\u4E0B-\u9700\u8981\u5C06\u5176\u6DFB\u52A0\u5230-path-\u8DEF\u5F84\u4E2D" aria-hidden="true">#</a> 6\uFF0CMongoDB \u7684\u53EF\u6267\u884C\u6587\u4EF6\u4F4D\u4E8E bin \u76EE\u5F55\u4E0B\uFF0C\u9700\u8981\u5C06\u5176\u6DFB\u52A0\u5230 PATH \u8DEF\u5F84\u4E2D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MONGODB_HOME</span><span class="token operator">=</span>/usr/local/mongodb
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$MONGODB_HOME</span>/bin   <span class="token comment">#\u672B\u5C3E\u5904\u6DFB\u52A0</span>
<span class="token builtin class-name">source</span> /etc/profile    <span class="token comment">#\u91CD\u65B0\u52A0\u8F7D\u73AF\u5883\u53D8\u91CF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_7-\u542F\u52A8-mongodb" tabindex="-1"><a class="header-anchor" href="#_7-\u542F\u52A8-mongodb" aria-hidden="true">#</a> 7\uFF0C\u542F\u52A8 MongoDB</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/mongodb/bin
mongod -f mongodb.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_8-\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_8-\u8BBF\u95EE" aria-hidden="true">#</a> 8\uFF0C\u8BBF\u95EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$mongo</span>
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;cdd40824-7611-41cb-a3ab-ef737a82068d&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Welcome to the MongoDB shell.
For interactive help, <span class="token builtin class-name">type</span> <span class="token string">&quot;help&quot;</span><span class="token builtin class-name">.</span>
For <span class="token function">more</span> comprehensive documentation, see
    http://docs.mongodb.org/
Questions? Try the support group
    http://groups.google.com/group/mongodb-user
<span class="token operator">&gt;</span>
<span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongod</span> -f mongodb.conf --shutdown  <span class="token comment">#\u5173\u95ED\u670D\u52A1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_9-\u4F7F\u7528\u811A\u672C\u52A0\u5165\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#_9-\u4F7F\u7528\u811A\u672C\u52A0\u5165\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> 9\uFF0C\u4F7F\u7528\u811A\u672C\u52A0\u5165\u5F00\u673A\u81EA\u542F</h3><p>\u7ED9\u7CFB\u7EDF\u6DFB\u52A0 MongoDB \u7BA1\u7406\u811A\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/lib/systemd/system/mongod.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=MongoDB database server
After=network.target
[Service]
Type=forking
#PIDFile=/home/dp/data/mongodb/pid
ExecStart=/usr/local/mongodb/bin/mongod -f /usr/local/mongodb/bin/mongodb.conf
PrivateTmp=true
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u7136\u540E\u52A0\u8F7D\u542F\u52A8\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$systemctl</span> daemon-reload
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$systemctl</span> start  mongod
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$systemctl</span> status  mongod
\u25CF mongod.service - MongoDB database server
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/mongod.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Wed <span class="token number">2019</span>-07-03 <span class="token number">11</span>:41:13 CST<span class="token punctuation">;</span> 1min 29s ago
 Main PID: <span class="token number">18489</span> <span class="token punctuation">(</span>mongod<span class="token punctuation">)</span>
   CGroup: /system.slice/mongod.service
           \u2514\u250018489 /usr/local/mongodb/bin/mongod -f /usr/local/mongodb/bin/mongodb.conf
Jul 03 <span class="token number">11</span>:41:12 localhost.localdomain systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting MongoDB database server<span class="token punctuation">..</span>.
Jul 03 <span class="token number">11</span>:41:12 localhost.localdomain mongod<span class="token punctuation">[</span><span class="token number">18487</span><span class="token punctuation">]</span>: about to fork child process, waiting <span class="token keyword">until</span> server is ready <span class="token keyword">for</span> connections.
Jul 03 <span class="token number">11</span>:41:12 localhost.localdomain mongod<span class="token punctuation">[</span><span class="token number">18487</span><span class="token punctuation">]</span>: forked process: <span class="token number">18489</span>
Jul 03 <span class="token number">11</span>:41:13 localhost.localdomain mongod<span class="token punctuation">[</span><span class="token number">18487</span><span class="token punctuation">]</span>: child process started successfully, parent exiting
Jul 03 <span class="token number">11</span>:41:13 localhost.localdomain systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started MongoDB database server.
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token variable">$systemctl</span> <span class="token builtin class-name">enable</span>  mongod
Created symlink from /etc/systemd/system/multi-user.target.wants/mongod.service to /usr/lib/systemd/system/mongod.service.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u8FD9\u6837\u5C31\u80FD\u591F\u5B9E\u73B0\u6BD4\u8F83\u7B80\u5355\u7684\u7BA1\u7406\u4E86\u3002</p><h2 id="_1-\u6570\u636E\u5E93\u7684\u542F\u52A8\u4E0E\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u5E93\u7684\u542F\u52A8\u4E0E\u5173\u95ED" aria-hidden="true">#</a> 1\uFF0C\u6570\u636E\u5E93\u7684\u542F\u52A8\u4E0E\u5173\u95ED</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u542F\u52A8\uFF1Amongod --dbpath<span class="token operator">=</span>/usr/local/mongodb/data --logpath<span class="token operator">=</span>/usr/local/mongodb/log/mongodb.log --port<span class="token operator">=</span><span class="token number">27017</span> --logappend --fork
\u5173\u95ED\uFF1Amongod --shutdown  --dbpath<span class="token operator">=</span>/usr/local/mongodb/data --logpath<span class="token operator">=</span>/usr/local/mongodb/log/mongodb.log --port<span class="token operator">=</span><span class="token number">27017</span> --logappend --fork
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_2-\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> 2\uFF0C \u53C2\u6570\u8BF4\u660E:</h2><table><thead><tr><th style="text-align:center;"><strong>\u53C2\u6570</strong></th><th style="text-align:center;"><strong>\u53C2\u6570\u8BF4\u660E</strong></th></tr></thead><tbody><tr><td style="text-align:center;"><strong>\u2013dbpath</strong></td><td style="text-align:center;">\u6570\u636E\u5B58\u653E\u8DEF\u5F84</td></tr><tr><td style="text-align:center;"><strong>\u2013logpath</strong></td><td style="text-align:center;">\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td style="text-align:center;"><strong>\u2013logappend</strong></td><td style="text-align:center;">\u65E5\u5FD7\u8F93\u51FA\u65B9\u5F0F</td></tr><tr><td style="text-align:center;"><strong>\u2013port</strong></td><td style="text-align:center;">\u542F\u7528\u7AEF\u53E3\u53F7</td></tr><tr><td style="text-align:center;"><strong>\u2013fork</strong></td><td style="text-align:center;">\u5728\u540E\u53F0\u8FD0\u884C</td></tr><tr><td style="text-align:center;"><strong>\u2013auth</strong></td><td style="text-align:center;">\u662F\u5426\u9700\u8981\u9A8C\u8BC1\u6743\u9650\u767B\u5F55 (\u7528\u6237\u540D\u548C\u5BC6\u7801)</td></tr><tr><td style="text-align:center;"><strong>\u2013bind_ip</strong></td><td style="text-align:center;">\u9650\u5236\u8BBF\u95EE\u7684 ip</td></tr><tr><td style="text-align:center;"><strong>\u2013shutdown</strong></td><td style="text-align:center;">\u5173\u95ED\u6570\u636E\u5E93</td></tr></tbody></table><h2 id="_3-\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\u7BA1\u7406\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\u7BA1\u7406\u6570\u636E\u5E93" aria-hidden="true">#</a> 3\uFF0C\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\u7BA1\u7406\u6570\u636E\u5E93</h2><h3 id="_1-\u666E\u901A\u683C\u5F0F\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u666E\u901A\u683C\u5F0F\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 1\uFF0C\u666E\u901A\u683C\u5F0F\u914D\u7F6E\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>mongod@MongoDB conf<span class="token punctuation">]</span>$ <span class="token function">vim</span> mongod1.conf 
<span class="token assign-left variable">dbpath</span><span class="token operator">=</span>/usr/local/mongodb/data
<span class="token assign-left variable">logpath</span><span class="token operator">=</span>/usr/local/mongodb/log/mongodb.log
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">27017</span>
<span class="token assign-left variable">logappend</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">fork</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u65F6\u7684\u542F\u52A8\u4E0E\u5173\u95ED\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u542F\u52A8\uFF1Amongod -f mongod1.conf 
\u5173\u95ED\uFF1Amongod -f mongod1.conf  --shutdown
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-yaml-\u683C\u5F0F\u914D\u7F6E\u6587\u4EF6-\u5B98\u65B9\u63A8\u8350\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-yaml-\u683C\u5F0F\u914D\u7F6E\u6587\u4EF6-\u5B98\u65B9\u63A8\u8350\u4F7F\u7528" aria-hidden="true">#</a> 2\uFF0CYAML \u683C\u5F0F\u914D\u7F6E\u6587\u4EF6\uFF08\u5B98\u65B9\u63A8\u8350\u4F7F\u7528\uFF09</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>mongod@MongoDB conf<span class="token punctuation">]</span>$ <span class="token function">cat</span>  mongod.conf 
systemLog:
   destination: <span class="token function">file</span>
   path: <span class="token string">&quot;/usr/local/mongodb/log/mongod.log&quot;</span>
   logAppend: <span class="token boolean">true</span>
storage:
   journal:
      enabled: <span class="token boolean">true</span>
   dbPath: <span class="token string">&quot;/usr/local/mongodb/data&quot;</span>
processManagement:
   fork: <span class="token boolean">true</span>
net:
   port: <span class="token number">27017</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6CE8\uFF1Amongod \u8FDB\u7A0B\u6536\u5230 SIGINT \u4FE1\u53F7\u6216\u8005 SIGTERM \u4FE1\u53F7\uFF0C\u4F1A\u505A\u4E00\u4E9B\u5904\u7406</p><ul><li>\u5173\u95ED\u6240\u6709\u6253\u5F00\u7684\u8FDE\u63A5</li><li>\u5C06\u5185\u5B58\u6570\u636E\u5F3A\u5236\u5237\u65B0\u5230\u78C1\u76D8</li><li>\u5F53\u524D\u7684\u64CD\u4F5C\u6267\u884C\u5B8C\u6BD5</li><li>\u5B89\u5168\u505C\u6B62</li></ul><h3 id="_3-\u5207\u5FCC-kill-9" tabindex="-1"><a class="header-anchor" href="#_3-\u5207\u5FCC-kill-9" aria-hidden="true">#</a> 3\uFF0C\u5207\u5FCC kill -9</h3><p>\u5982\u679C\u4F7F\u7528 <code>kill -9</code> \u76F4\u63A5\u5173\u95ED\u6570\u636E\u5E93\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u6570\u636E\u4E22\u5931\uFF0C\u6570\u636E\u6587\u4EF6\u635F\u5931\u7B49\u98CE\u9669\u3002</p><p>\u53EF\u901A\u8FC7\u5982\u4E0B\u5B89\u5168\u7684\u65B9\u5F0F\u8FDB\u884C\u5173\u95ED\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">kill</span> -2 PID
\u3000\u3000\u539F\u7406\uFF1A-2\u8868\u793A\u5411mongod\u8FDB\u7A0B\u53D1\u9001SIGINT\u4FE1\u53F7\u3002
$ <span class="token function">kill</span> -4 PID
\u3000\u3000\u539F\u7406\uFF1A-4\u8868\u793A\u5411mognod\u8FDB\u7A0B\u53D1\u9001SIGTERM\u4FE1\u53F7\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528<code>systemctl stop mongod</code>\u6765\u5173\u95ED\u6570\u636E\u5E93\u3002</p><h2 id="_4-\u5BA2\u6237\u7AEF\u8FDE\u63A5\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_4-\u5BA2\u6237\u7AEF\u8FDE\u63A5\u5DE5\u5177" aria-hidden="true">#</a> 4\uFF0C\u5BA2\u6237\u7AEF\u8FDE\u63A5\u5DE5\u5177</h2><p>MongoDB \u6709\u4E00\u4E2A\u76F8\u5F53\u53CB\u597D\u7684\u5BA2\u6237\u7AEF\u7BA1\u7406\u5DE5\u5177\uFF0C\u8FD9\u91CC\u6211\u63A8\u8350\u4F7F\u7528 <code>robo</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u5730\u5740\u4E0B\u8F7D\u4F7F\u7528\u3002</p>`,57),b={href:"http://c.eryajf.net/%E5%B7%A5%E5%85%B7/29%EF%BC%8CMongoDB%E5%AE%A2%E6%88%B7%E7%AB%AF/robo.3t.windows-x86_64.7z",target:"_blank",rel:"noopener noreferrer"},u=p("http://c.eryajf.net/%E5%B7%A5%E5%85%B7/29%EF%BC%8CMongoDB%E5%AE%A2%E6%88%B7%E7%AB%AF/robo.3t.windows-x86_64.7z"),m=n("p",null,"\u53C2\u8003\uFF1Ahttp://t.cn/AiOcP9Cy",-1);function g(h,k){const s=a("ExternalLinkIcon");return e(),t(l,null,[d,n("ul",null,[n("li",null,[n("a",b,[u,o(s)])])]),m],64)}var x=c(i,[["render",g]]);export{x as default};