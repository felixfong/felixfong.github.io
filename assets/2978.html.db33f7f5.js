import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<p>MongoDB \u6570\u636E\u5E93\u9ED8\u8BA4\u662F\u6CA1\u6709\u7528\u6237\u540D\u53CA\u5BC6\u7801\u7684\uFF0C\u5373\u65E0\u6743\u9650\u8BBF\u95EE\u9650\u5236\u3002\u4E3A\u4E86\u65B9\u4FBF\u6570\u636E\u5E93\u7684\u7BA1\u7406\u548C\u5B89\u5168\uFF0C\u9700\u521B\u5EFA\u6570\u636E\u5E93\u7528\u6237\u3002</p><h2 id="_1-\u7528\u6237\u7684\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_1-\u7528\u6237\u7684\u6743\u9650" aria-hidden="true">#</a> 1\uFF0C\u7528\u6237\u7684\u6743\u9650</h2><p>\u7528\u6237\u4E2D\u6743\u9650\u7684\u8BF4\u660E</p><table><thead><tr><th><strong>\u6743\u9650</strong></th><th><strong>\u8BF4\u660E</strong></th></tr></thead><tbody><tr><td><strong>Read</strong></td><td>\u5141\u8BB8\u7528\u6237\u8BFB\u53D6\u6307\u5B9A\u6570\u636E\u5E93</td></tr><tr><td><strong>readWrite</strong></td><td>\u5141\u8BB8\u7528\u6237\u8BFB\u5199\u6307\u5B9A\u6570\u636E\u5E93</td></tr><tr><td><strong>dbAdmin</strong></td><td>\u5141\u8BB8\u7528\u6237\u5728\u6307\u5B9A\u6570\u636E\u5E93\u4E2D\u6267\u884C\u7BA1\u7406\u51FD\u6570\uFF0C\u5982\u7D22\u5F15\u521B\u5EFA\u3001\u5220\u9664\uFF0C\u67E5\u770B\u7EDF\u8BA1\u6216\u8BBF\u95EE system.profile</td></tr><tr><td><strong>userAdmin</strong></td><td>\u5141\u8BB8\u7528\u6237\u5411 system.users \u96C6\u5408\u5199\u5165\uFF0C\u53EF\u4EE5\u627E\u6307\u5B9A\u6570\u636E\u5E93\u91CC\u521B\u5EFA\u3001\u5220\u9664\u548C\u7BA1\u7406\u7528\u6237</td></tr><tr><td><strong>clusterAdmin</strong></td><td>\u53EA\u5728 admin \u6570\u636E\u5E93\u4E2D\u53EF\u7528\uFF0C\u8D4B\u4E88\u7528\u6237\u6240\u6709\u5206\u7247\u548C\u590D\u5236\u96C6\u76F8\u5173\u51FD\u6570\u7684\u7BA1\u7406\u6743\u9650\u3002</td></tr><tr><td><strong>readAnyDatabase</strong></td><td>\u53EA\u5728 admin \u6570\u636E\u5E93\u4E2D\u53EF\u7528\uFF0C\u8D4B\u4E88\u7528\u6237\u6240\u6709\u6570\u636E\u5E93\u7684\u8BFB\u6743\u9650</td></tr><tr><td><strong>readWriteAnyDatabase</strong></td><td>\u53EA\u5728 admin \u6570\u636E\u5E93\u4E2D\u53EF\u7528\uFF0C\u8D4B\u4E88\u7528\u6237\u6240\u6709\u6570\u636E\u5E93\u7684\u8BFB\u5199\u6743\u9650</td></tr><tr><td><strong>userAdminAnyDatabase</strong></td><td>\u53EA\u5728 admin \u6570\u636E\u5E93\u4E2D\u53EF\u7528\uFF0C\u8D4B\u4E88\u7528\u6237\u6240\u6709\u6570\u636E\u5E93\u7684 userAdmin \u6743\u9650</td></tr><tr><td><strong>dbAdminAnyDatabase</strong></td><td>\u53EA\u5728 admin \u6570\u636E\u5E93\u4E2D\u53EF\u7528\uFF0C\u8D4B\u4E88\u7528\u6237\u6240\u6709\u6570\u636E\u5E93\u7684 dbAdmin \u6743\u9650\u3002</td></tr><tr><td><strong>root</strong></td><td>\u53EA\u5728 admin \u6570\u636E\u5E93\u4E2D\u53EF\u7528\u3002\u8D85\u7EA7\u8D26\u53F7\uFF0C\u8D85\u7EA7\u6743\u9650</td></tr></tbody></table><p>\u66F4\u591A\u5173\u4E8E\u7528\u6237\u6743\u9650\u7684\u8BF4\u660E\u53C2\u7167\uFF1Ahttps://docs.mongodb.com/manual/core/security-built-in-roles/</p><p><strong>\u7528\u6237\u521B\u5EFA\u8BED\u6CD5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
user: <span class="token string">&quot;&lt;name&gt;&quot;</span>, 
pwd: <span class="token string">&quot;&lt;cleartext password&gt;&quot;</span>, 
customData: <span class="token punctuation">{</span> <span class="token operator">&lt;</span>any information<span class="token operator">&gt;</span> <span class="token punctuation">}</span>, 
roles: <span class="token punctuation">[</span> 
<span class="token punctuation">{</span> role: <span class="token string">&quot;&lt;role&gt;&quot;</span>, 
db: <span class="token string">&quot;&lt;database&gt;&quot;</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token string">&quot;&lt;role&gt;&quot;</span>, 
<span class="token punctuation">..</span>. 
<span class="token punctuation">]</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u8BED\u6CD5\u8BF4\u660E\uFF1A</strong></p><ul><li>user \u5B57\u6BB5\uFF1A\u7528\u6237\u7684\u540D\u5B57;</li><li>pwd \u5B57\u6BB5\uFF1A\u7528\u6237\u7684\u5BC6\u7801;</li><li>cusomData \u5B57\u6BB5\uFF1A\u4E3A\u4EFB\u610F\u5185\u5BB9\uFF0C\u4F8B\u5982\u53EF\u4EE5\u4E3A\u7528\u6237\u5168\u540D\u4ECB\u7ECD;</li><li>roles \u5B57\u6BB5\uFF1A\u6307\u5B9A\u7528\u6237\u7684\u89D2\u8272\uFF0C\u53EF\u4EE5\u7528\u4E00\u4E2A\u7A7A\u6570\u7EC4\u7ED9\u65B0\u7528\u6237\u8BBE\u5B9A\u7A7A\u89D2\u8272\uFF1B</li><li>roles \u5B57\u6BB5\uFF1A\u53EF\u4EE5\u6307\u5B9A\u5185\u7F6E\u89D2\u8272\u548C\u7528\u6237\u5B9A\u4E49\u7684\u89D2\u8272\u3002</li></ul><h2 id="_2-\u521B\u5EFA\u7BA1\u7406\u5458\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u7BA1\u7406\u5458\u7528\u6237" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u7BA1\u7406\u5458\u7528\u6237</h2><p>\u5230\u8FD9\u91CC\u4E13\u95E8\u8BB2\u89E3\u7528\u6237\u7BA1\u7406\u4E86\uFF0C\u56E0\u6B64\u914D\u7F6E\u5F53\u4E2D\u5F00\u542F\u7528\u6237\u8BA4\u8BC1\uFF0C\u914D\u7F6E\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$cat</span> mongodb.conf
<span class="token comment">#\u6570\u636E\u5B58\u50A8\u76EE\u5F55</span>
<span class="token assign-left variable">dbpath</span><span class="token operator">=</span>/usr/local/mongodb/data/db
<span class="token comment">#\u65E5\u5FD7\u6587\u4EF6\u76EE\u5F55</span>
<span class="token assign-left variable">logpath</span><span class="token operator">=</span>/usr/local/mongodb/logs/mongodb.log
<span class="token comment">#\u540E\u53F0\u8FD0\u884C</span>
<span class="token assign-left variable">fork</span><span class="token operator">=</span>true
<span class="token assign-left variable">auth</span><span class="token operator">=</span>true
<span class="token assign-left variable">bind_ip</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0
<span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$systemctl</span> restart mongod
<span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$systemctl</span> status mongod
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FDB\u5165\u7BA1\u7406\u6570\u636E\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$mongo</span>
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;56712ce5-d30a-421f-b447-0eea5294aafb&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
<span class="token operator">&gt;</span> use admin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_1-\u521B\u5EFA\u7BA1\u7406\u7528\u6237-root-\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u7BA1\u7406\u7528\u6237-root-\u6743\u9650" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA\u7BA1\u7406\u7528\u6237\uFF0Croot \u6743\u9650</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> use admin
switched to db admin
<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;root&quot;</span>,pwd: <span class="token string">&quot;root&quot;</span>,roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;root&quot;</span>, db: <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
Successfully added user: <span class="token punctuation">{</span>
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>\u6CE8\u610F\uFF1A</strong></p><p>\u521B\u5EFA\u7BA1\u7406\u5458\u89D2\u8272\u7528\u6237\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u5230 admin \u4E0B\u521B\u5EFA\u3002</p><p>\u5220\u9664\u7684\u65F6\u5019\u4E5F\u8981\u5230\u76F8\u5E94\u7684\u5E93\u4E0B\u64CD\u4F5C\u3002</p><p>\u9A8C\u8BC1\u7528\u6237\u662F\u5426\u80FD\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> db.auth<span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span>,<span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
<span class="token number">1</span>  <span class="token comment"># \u8FD4\u56DE 1 \u5373\u4E3A\u6210\u529F</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-\u67E5\u770B\u521B\u5EFA\u7684\u7BA1\u7406\u5458\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u521B\u5EFA\u7684\u7BA1\u7406\u5458\u7528\u6237" aria-hidden="true">#</a> 2\uFF0C\u67E5\u770B\u521B\u5EFA\u7684\u7BA1\u7406\u5458\u7528\u6237</h3><p>\u4E00\u4E2A\u5E38\u89C1\u7684\u62A5\u9519\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> show <span class="token function">users</span>
<span class="token number">2019</span>-07-03T14:33:49.060+0800 E QUERY    <span class="token punctuation">[</span>js<span class="token punctuation">]</span> Error: <span class="token builtin class-name">command</span> usersInfo requires authentication <span class="token builtin class-name">:</span>
_getErrorWithCode@src/mongo/shell/utils.js:25:13
DB.prototype.getUsers@src/mongo/shell/db.js:1763:1
shellHelper.show@src/mongo/shell/utils.js:859:9
shellHelper@src/mongo/shell/utils.js:766:15
@<span class="token punctuation">(</span>shellhelp2<span class="token punctuation">)</span>:1:1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u79CD\u62A5\u9519\u5E38\u5E38\u51FA\u73B0\u5728\u6CA1\u6709\u6388\u6743\u7684\u60C5\u51B5\u4E0B\uFF0C\u521A\u521A\u4E5F\u53EA\u662F\u521B\u5EFA\u4E86\u5BF9\u5E94\u7684\u7528\u6237\u540D\u4EE5\u53CA\u89D2\u8272\uFF0C\u4F46\u662F\u8FD8\u6CA1\u6709\u901A\u8FC7 root \u7528\u6237\u8FDB\u884C\u767B\u9646\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> db.auth<span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span>,<span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
<span class="token number">1</span>
<span class="token operator">&gt;</span> show <span class="token function">users</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin.root&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;fa320150-781c-4a07-b427-c3a42f360133&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_3-\u767B\u9646\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_3-\u767B\u9646\u6570\u636E\u5E93" aria-hidden="true">#</a> 3\uFF0C\u767B\u9646\u6570\u636E\u5E93</h3><p>\u6CE8\u610F\uFF1A\u7528\u6237\u5728\u54EA\u4E2A\u6570\u636E\u5E93\u4E0B\u521B\u5EFA\u7684\uFF0C\u6700\u540E\u52A0\u4E0A\u4EC0\u4E48\u5E93\uFF0C\u8FD9\u91CC\u81EA\u7136\u9009\u62E9 admin \u5E93\u3002</p><ul><li>\u65B9\u6CD5\u4E00\uFF1A\u547D\u4EE4\u884C\u4E2D\u8FDB\u884C\u767B\u9646</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uroot -proot admin
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;3f5eda3b-89da-4ef5-bcb2-022bc0517c11&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-03T15:39:36.265+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-03T15:39:36.265+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u65B9\u6CD5\u4E8C\uFF1A\u5728\u6570\u636E\u5E93\u4E2D\u8FDB\u884C\u767B\u9646\u9A8C\u8BC1\uFF1A</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span>$ mongo
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;896ba84c-3127-4ac1-85a9-ca4f4da3e60c&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
<span class="token operator">&gt;</span> use admin
switched to db admin
<span class="token operator">&gt;</span> db.auth<span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span>,<span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
<span class="token number">1</span>
<span class="token operator">&gt;</span> show tables
system.users
system.version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u6B63\u5E38\u767B\u9646\u4E4B\u540E\uFF0C\u518D\u6B21\u67E5\u770B\u7528\u6237\uFF1A</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> show <span class="token function">users</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin.root&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;fa320150-781c-4a07-b427-c3a42f360133&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_4-\u5FD8\u8BB0\u7BA1\u7406\u5458\u5BC6\u7801\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#_4-\u5FD8\u8BB0\u7BA1\u7406\u5458\u5BC6\u7801\u600E\u4E48\u529E" aria-hidden="true">#</a> 4\uFF0C\u5FD8\u8BB0\u7BA1\u7406\u5458\u5BC6\u7801\u600E\u4E48\u529E</h3><p>\u6709\u65F6\u5019\u53EF\u80FD\u4F1A\u5FD8\u8BB0\u7BA1\u7406\u5458\u5BC6\u7801\uFF0C\u9700\u8981\u5BF9\u5176\u8FDB\u884C\u91CD\u7F6E\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u66F4\u65B0\u7BA1\u7406\u5458\u5BC6\u7801\u3002</p><p>\u5982\u679C\u8FDE\u7528\u6237\u540D\u90FD\u5FD8\u8BB0\u4E86\uFF0C\u90A3\u4E48\u6211\u4EEC\u9996\u5148\u9700\u8981\u66F4\u6539 MongoDB \u7684\u914D\u7F6E\uFF0C\u53BB\u6389\u7528\u6237\u540D\u5BC6\u7801\u8BA4\u8BC1\u7684\u529F\u80FD\uFF0C\u7136\u540E\u91CD\u542F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$cat</span> mongodb.conf
<span class="token comment">#\u6570\u636E\u5B58\u50A8\u76EE\u5F55</span>
<span class="token assign-left variable">dbpath</span><span class="token operator">=</span>/usr/local/mongodb/data/db
<span class="token comment">#\u65E5\u5FD7\u6587\u4EF6\u76EE\u5F55</span>
<span class="token assign-left variable">logpath</span><span class="token operator">=</span>/usr/local/mongodb/logs/mongodb.log
<span class="token comment">#\u540E\u53F0\u8FD0\u884C</span>
<span class="token assign-left variable">fork</span><span class="token operator">=</span>true
<span class="token assign-left variable">auth</span><span class="token operator">=</span>false
<span class="token assign-left variable">bind_ip</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0
<span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$systemctl</span> restart mongod
<span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$systemctl</span> status mongod
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7136\u540E\u4F7F\u7528 mongo \u547D\u4EE4\u8FDB\u5165\u5230\u6570\u636E\u5E93\uFF0C\u8FDB\u884C\u7B80\u5355\u67E5\u8BE2\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span>
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;3e0268c2-7e34-4a61-947d-f8e2368640f5&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-04T17:54:54.016+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-04T17:54:54.016+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> use admin
switched to db admin
<span class="token operator">&gt;</span> show <span class="token function">users</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin.root&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;c8514da6-4484-4036-9c13-b5deeb449575&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,    <span class="token comment">#\u8FD9\u91CC\u5C31\u53EF\u4EE5\u5224\u65AD\u89D2\u8272\u4E3Aroot\u7684\u8D26\u53F7\u540D\u5B57\u4E5F\u662Froot</span>
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;</span> show tables   <span class="token comment">#\u6216\u8005\u901A\u8FC7\u67E5\u8BE2\u8868\u6765\u5F97\u77E5</span>
system.users
system.version
<span class="token operator">&gt;</span> db.system.users.find<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">#\u67E5\u8BE2user\u8868</span>
<span class="token punctuation">{</span> <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin.root&quot;</span>, <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;c8514da6-4484-4036-9c13-b5deeb449575&quot;</span><span class="token punctuation">)</span>, <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>, <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>, <span class="token string">&quot;credentials&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;SCRAM-SHA-1&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;iterationCount&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">10000</span>, <span class="token string">&quot;salt&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;SxO3kQwjFX8833lnQXQKbw==&quot;</span>, <span class="token string">&quot;storedKey&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;1LQVQGW3ScF8WC0iCSMUJ5Iokpc=&quot;</span>, <span class="token string">&quot;serverKey&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;t2PSzcZSE1KFzMXXK4BmxfPno9s=&quot;</span> <span class="token punctuation">}</span>, <span class="token string">&quot;SCRAM-SHA-256&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;iterationCount&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">15000</span>, <span class="token string">&quot;salt&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;XDCd8GfHOtBiZnC6Eafx37aUV+2lO9EZbWl9rQ==&quot;</span>, <span class="token string">&quot;storedKey&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;ZYHs6Umf0bVP8uofPGlcAl5uFzzQWovc4oczHjckmBs=&quot;</span>, <span class="token string">&quot;serverKey&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;apVEilrpFXVAfBMMCwiIHl7H4bdnd6xm6KN88fXYJWo=&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>, <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>, <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u5F97\u77E5\u7BA1\u7406\u5458\u7528\u6237\u7684\u540D\u79F0\u4E3A root \u4E4B\u540E\uFF0C\u5C31\u80FD\u591F\u8FDB\u884C\u5BC6\u7801\u66F4\u65B0\u7684\u64CD\u4F5C\u4E86\u3002</p><ul><li><p>\u5229\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.changeUserPassword
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span>
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;3e0268c2-7e34-4a61-947d-f8e2368640f5&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-04T17:54:54.016+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-04T17:54:54.016+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> use admin
switched to db admin
<span class="token operator">&gt;</span> db.changeUserPassword<span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span>,<span class="token string">&#39;test1&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ul><p>\u7136\u540E\u91CD\u65B0\u5F00\u542F\u7528\u6237\u8BA4\u8BC1\uFF0C\u91CD\u542F\u9A8C\u8BC1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$cat</span> mongodb.conf
<span class="token comment">#\u6570\u636E\u5B58\u50A8\u76EE\u5F55</span>
<span class="token assign-left variable">dbpath</span><span class="token operator">=</span>/usr/local/mongodb/data/db
<span class="token comment">#\u65E5\u5FD7\u6587\u4EF6\u76EE\u5F55</span>
<span class="token assign-left variable">logpath</span><span class="token operator">=</span>/usr/local/mongodb/logs/mongodb.log
<span class="token comment">#\u540E\u53F0\u8FD0\u884C</span>
<span class="token assign-left variable">fork</span><span class="token operator">=</span>true
<span class="token assign-left variable">auth</span><span class="token operator">=</span>true
<span class="token assign-left variable">bind_ip</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0
<span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$systemctl</span> restart mongod
<span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$systemctl</span> status mongod
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u767B\u9646\u4E00\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uroot -ptest1 admin
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;7ebe8a49-a750-46b1-a59e-c95abc0d7401&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-04T18:06:24.623+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-04T18:06:24.623+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> db
admin
<span class="token operator">&gt;</span> show <span class="token function">users</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin.root&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;c8514da6-4484-4036-9c13-b5deeb449575&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><img src="http://t.eryajf.net/imgs/2021/09/e03910dbfdf2b9d1.jpg" alt="image"></p><h2 id="_3-\u6309\u751F\u4EA7\u9700\u6C42\u521B\u5EFA\u5E94\u7528\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_3-\u6309\u751F\u4EA7\u9700\u6C42\u521B\u5EFA\u5E94\u7528\u7528\u6237" aria-hidden="true">#</a> 3\uFF0C\u6309\u751F\u4EA7\u9700\u6C42\u521B\u5EFA\u5E94\u7528\u7528\u6237</h2><p>\u56E0\u4E3A\u76EE\u524D\u7528\u6237\u89C4\u5212\u90FD\u8FD8\u6BD4\u8F83\u7B80\u5355\uFF0C\u56E0\u6B64\u521B\u5EFA\u7528\u6237\u7684\u65F6\u5019\uFF0C\u90FD\u662F\u57FA\u4E8E admin \u6765\u8FDB\u884C\u3002</p><h3 id="_1-\u521B\u5EFA\u67D0\u5E93\u7684\u8BFB\u5199\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u67D0\u5E93\u7684\u8BFB\u5199\u7528\u6237" aria-hidden="true">#</a> 1\uFF0C\u521B\u5EFA\u67D0\u5E93\u7684\u8BFB\u5199\u7528\u6237</h3><ul><li>\u521B\u5EFA test \u7528\u6237\uFF0C\u6743\u9650\u4E3A\u8BFB\u5199</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mongodb bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uroot -proot admin    <span class="token comment">#\u4F7F\u7528admin\u767B\u9646</span>
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;3f5eda3b-89da-4ef5-bcb2-022bc0517c11&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-03T15:39:36.265+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-03T15:39:36.265+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> use eryajf    <span class="token comment">#\u4E00\u5B9A\u8981\u6CE8\u610F\uFF0C\u7ED9\u54EA\u4E2A\u5E93\u6388\u6743\u5C31\u8981\u5148\u5207\u6362\u5230\u5BF9\u5E94\u7684\u5E93\uFF0C\u4E0D\u7136\u8FD9\u4E2A\u7528\u6237\u5C06\u65E0\u6CD5\u767B\u9646</span>
<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;test&quot;</span>,pwd: <span class="token string">&quot;test&quot;</span>,roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;readWrite&quot;</span>, db: <span class="token string">&quot;eryajf&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">#\u521B\u5EFA\u8BFB\u5199\u7528\u6237</span>
Successfully added user: <span class="token punctuation">{</span>
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;readWrite&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;</span> show <span class="token function">users</span>    <span class="token comment">#\u67E5\u770B\u7528\u6237</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf.test&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;3bd64373-13c5-4a47-95f9-92a2433c0bf4&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;readWrite&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><strong>\u6CE8\u610F\uFF1A</strong><code>\u7ED9\u54EA\u4E2A\u5E93\u521B\u5EFA\u7528\u6237\uFF0C\u6388\u6743\u7528\u6237\uFF0C\u90FD\u8981\u5148use\u5230\u5BF9\u5E94\u7684\u5E93\uFF0C\u5426\u5219\u5C06\u4E0D\u751F\u6548\uFF0C\u5220\u9664\u7528\u6237\u4E5F\u662F\u3002</code></p><ul><li>\u6D4B\u8BD5\u7528\u6237\u6743\u9650</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -utest -ptest eryajf
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/eryajf?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;dd97a5e3-9226-4a04-8221-dec566edc1c3&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
<span class="token operator">&gt;</span> db.createCollection<span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span> <span class="token string">&quot;ok&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> db.getCollectionNames<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span> <span class="token string">&quot;a&quot;</span>, <span class="token string">&quot;b&quot;</span>, <span class="token string">&quot;c&quot;</span>, <span class="token string">&quot;d&quot;</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_2-\u521B\u5EFA\u5BF9\u67D0\u5E93\u7684\u53EA\u8BFB\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u5BF9\u67D0\u5E93\u7684\u53EA\u8BFB\u7528\u6237" aria-hidden="true">#</a> 2\uFF0C\u521B\u5EFA\u5BF9\u67D0\u5E93\u7684\u53EA\u8BFB\u7528\u6237</h3><ul><li>\u5728 eryajf \u5E93\u521B\u5EFA\u53EA\u8BFB\u7528\u6237 test</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uroot -proot admin
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;b1d0e8f4-6c13-4c27-abfa-b8035f983453&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-04T00:16:54.097+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-04T00:16:54.097+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> use eryajf    <span class="token comment">#\u5207\u6362\u5230\u5BF9\u5E94\u5E93</span>
<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;test1&quot;</span>,pwd: <span class="token string">&quot;test1&quot;</span>,roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;read&quot;</span>, db: <span class="token string">&quot;eryajf&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">#\u521B\u5EFA\u5BF9\u5E94\u7528\u6237</span>
Successfully added user: <span class="token punctuation">{</span>
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test1&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;read&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;</span> show <span class="token function">users</span>    <span class="token comment">#\u67E5\u770B\u7528\u6237</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf.test&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;3bd64373-13c5-4a47-95f9-92a2433c0bf4&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;readWrite&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf.test1&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;eb2e54b8-a036-40a8-b8d4-5c8f5548ad25&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test1&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;read&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><ul><li>\u767B\u5F55 test \u7528\u6237\uFF0C\u5E76\u6D4B\u8BD5\u662F\u5426\u53EA\u8BFB</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -utest1 -ptest1 eryajf
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/eryajf?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;cca6f744-47e6-4bcb-8682-8c1af7080108&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
<span class="token operator">&gt;</span> db.getCollectionNames<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">#\u53EF\u4EE5\u6B63\u5E38\u67E5\u8BE2</span>
<span class="token punctuation">[</span> <span class="token string">&quot;a&quot;</span>, <span class="token string">&quot;b&quot;</span>, <span class="token string">&quot;c&quot;</span>, <span class="token string">&quot;d&quot;</span> <span class="token punctuation">]</span>
<span class="token operator">&gt;</span> db.createCollection<span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>  <span class="token comment">#\u521B\u5EFA\u62A5\u9519</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;ok&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;errmsg&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;not authorized on eryajf to execute command { create: <span class="token entity" title="\\&quot;">\\&quot;</span>e<span class="token entity" title="\\&quot;">\\&quot;</span>, lsid: { id: UUID(<span class="token entity" title="\\&quot;">\\&quot;</span>cca6f744-47e6-4bcb-8682-8c1af7080108<span class="token entity" title="\\&quot;">\\&quot;</span>) }, <span class="token variable">$db</span>: <span class="token entity" title="\\&quot;">\\&quot;</span>eryajf<span class="token entity" title="\\&quot;">\\&quot;</span> }&quot;</span>,
    <span class="token string">&quot;code&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">13</span>,
    <span class="token string">&quot;codeName&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;Unauthorized&quot;</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_3-\u521B\u5EFA\u5BF9\u591A\u5E93\u4E0D\u540C\u6743\u9650\u7684\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u5BF9\u591A\u5E93\u4E0D\u540C\u6743\u9650\u7684\u7528\u6237" aria-hidden="true">#</a> 3\uFF0C\u521B\u5EFA\u5BF9\u591A\u5E93\u4E0D\u540C\u6743\u9650\u7684\u7528\u6237</h3><ul><li>\u521B\u5EFA\u5BF9 test \u4E3A\u8BFB\u5199\u6743\u9650\uFF0C\u5BF9 eryajf \u5E93\u4E3A\u53EA\u8BFB\u6743\u9650\u7684\u7528\u6237</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uroot -proot admin
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;c5e35008-0a1e-4513-9394-947e49f67f81&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-04T00:16:54.097+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-04T00:16:54.097+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> use <span class="token builtin class-name">test</span>  <span class="token comment">#\u5207\u6362\u5230test\u5E93</span>
switched to db <span class="token builtin class-name">test</span>
<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;app&quot;</span>,pwd: <span class="token string">&quot;app&quot;</span>,roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;readWrite&quot;</span>, db: <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span>,<span class="token punctuation">{</span> role: <span class="token string">&quot;read&quot;</span>, db: <span class="token string">&quot;eryajf&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>    <span class="token comment">#\u521B\u5EFA\u7528\u6237</span>
Successfully added user: <span class="token punctuation">{</span>
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;readWrite&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;read&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;</span> show <span class="token function">users</span>    <span class="token comment">#\u67E5\u770B\u7528\u6237</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test.app&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;e25d6c21-190a-44e4-8868-868a474fcf12&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;readWrite&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;read&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u65F6\u5019\u521B\u5EFA\u7684\u7528\u6237\uFF0C\u662F\u57FA\u4E8E test \u5E93\u521B\u5EFA\u7684\uFF0C\u90A3\u4E48\u540E\u7EED\u767B\u9646\u7B49\u64CD\u4F5C\uFF0C\u4E5F\u90FD\u9700\u8981\u8DDF\u4E0A test \u5E93\uFF0C\u800C\u4E0D\u80FD\u591F\u8DDF\u4E0A eryajf \u7684\u5E93\u3002\u5982\u679C\u8DDF\u4E0A eryajf \u7684\u5E93\uFF0C\u5C06\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uapp -papp eryajf
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/eryajf?gssapiServiceName<span class="token operator">=</span>mongodb
<span class="token number">2019</span>-07-04T00:54:54.617+0800 E QUERY    <span class="token punctuation">[</span>js<span class="token punctuation">]</span> Error: Authentication failed. <span class="token builtin class-name">:</span>
connect@src/mongo/shell/mongo.js:344:17
@<span class="token punctuation">(</span>connect<span class="token punctuation">)</span>:2:6
exception: connect failed
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u67E5\u770B\u5E76\u6D4B\u8BD5\u7528\u6237</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uapp -papp <span class="token builtin class-name">test</span>
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/test?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;8cef0c4a-3f3d-4802-8926-79aea22db826&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
<span class="token operator">&gt;</span> db.createCollection<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span> <span class="token string">&quot;ok&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> db.getCollectionNames<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span> <span class="token string">&quot;a&quot;</span> <span class="token punctuation">]</span>
<span class="token operator">&gt;</span> use eryajf
switched to db eryajf
<span class="token operator">&gt;</span> db.getCollectionNames<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span> <span class="token string">&quot;a&quot;</span>, <span class="token string">&quot;b&quot;</span>, <span class="token string">&quot;c&quot;</span>, <span class="token string">&quot;d&quot;</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_4-\u66F4\u6539\u7528\u6237\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_4-\u66F4\u6539\u7528\u6237\u6743\u9650" aria-hidden="true">#</a> 4\uFF0C\u66F4\u6539\u7528\u6237\u6743\u9650</h3><p>\u5176\u5B9E\u66F4\u6539\u6743\u9650\u65E0\u975E\u5C31\u662F\u66F4\u6539\u7528\u6237\u7684\u89D2\u8272\uFF0C\u56E0\u4E3A\u5728 MongoDB \u4E2D\uFF0C\u89D2\u8272\u51B3\u5B9A\u4E86\u4E0D\u540C\u7528\u6237\u7684\u4E0D\u540C\u6743\u9650\u3002</p><ul><li>\u5148\u67E5\u770B\u4E00\u4E0B\u5F53\u524D\u7528\u6237\u7684\u89D2\u8272\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uroot -ptest1 admin
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;dbda85c8-7a90-4143-a31c-7a8ea58b80cc&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-04T18:06:24.623+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-04T18:06:24.623+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> use eryajf
switched to db eryajf
<span class="token operator">&gt;</span> show <span class="token function">users</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf.test&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;3bd64373-13c5-4a47-95f9-92a2433c0bf4&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;readWrite&quot;</span>,   <span class="token comment">#\u53EF\u4EE5\u770B\u5230test\u7528\u6237\u662FreadWrite\u7684\u89D2\u8272</span>
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf.test1&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;eb2e54b8-a036-40a8-b8d4-5c8f5548ad25&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test1&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;read&quot;</span>,    <span class="token comment">#\u53EF\u4EE5\u770B\u5230test1\u7528\u6237\u662Fread\u7684\u89D2\u8272</span>
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><ul><li>\u66F4\u6539\u7528\u6237\u89D2\u8272</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uroot -ptest1 admin
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;dbda85c8-7a90-4143-a31c-7a8ea58b80cc&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-04T18:06:24.623+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-04T18:06:24.623+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> use eryajf
switched to db eryajf
<span class="token operator">&gt;</span> db.updateUser<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span>,<span class="token punctuation">{</span>roles:<span class="token punctuation">[</span><span class="token punctuation">{</span>role:<span class="token string">&quot;dbAdmin&quot;</span>,db:<span class="token string">&quot;eryajf&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> show <span class="token function">users</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf.test&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;3bd64373-13c5-4a47-95f9-92a2433c0bf4&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;dbAdmin&quot;</span>, <span class="token comment">#\u53EF\u4EE5\u770B\u5230\u6743\u9650\u5DF2\u7ECF\u66F4\u65B0</span>
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf.test1&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;eb2e54b8-a036-40a8-b8d4-5c8f5548ad25&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test1&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;read&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="_5-\u5220\u9664\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_5-\u5220\u9664\u7528\u6237" aria-hidden="true">#</a> 5\uFF0C\u5220\u9664\u7528\u6237</h3><ul><li>\u5220\u9664 app \u7528\u6237\uFF1A\u5148\u767B\u5F55\u5230 admin \u6570\u636E\u5E93</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uroot -proot admin
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;6edeba63-e2bf-477c-a098-965767d105b6&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-04T00:16:54.097+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-04T00:16:54.097+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u8FDB\u5165 test \u5E93\u5220\u9664 app \u7528\u6237</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> use <span class="token builtin class-name">test</span>
switched to db <span class="token builtin class-name">test</span>
<span class="token operator">&gt;</span> show <span class="token function">users</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test.app&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;e25d6c21-190a-44e4-8868-868a474fcf12&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;readWrite&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;read&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eryajf&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;</span> db.dropUser<span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span>
<span class="token boolean">true</span>
<span class="token operator">&gt;</span> show <span class="token function">users</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u5230\u8FD9\u91CC\uFF0C\u57FA\u672C\u4E0A\u80FD\u591F\u4F53\u4F1A\u5230\uFF0CMongoDB \u5F53\u4E2D\u90A3\u4E9B\u5173\u4E8E\u89D2\u8272\u7528\u6237\u6743\u9650\u89C4\u5219\u7684\u5B9A\u4E49\u4E0E\u914D\u7F6E\u4E86\uFF0CMongoDB \u81EA\u8EAB\u5DF2\u7ECF\u5B9A\u4E49\u597D\u4E86\u8BB8\u591A\u4E2A\u89D2\u8272\uFF0C\u8FD9\u4E9B\u89D2\u8272\u9488\u5BF9\u5168\u5C40\uFF0C\u800C\u5728\u521B\u5EFA\u7528\u6237\u7684\u65F6\u5019\uFF0C\u7528\u6237\uFF0C\u89D2\u8272\uFF0C\u5E93\u8FD9\u4E09\u4E2A\u6982\u5FF5\u53C8\u662F\u5206\u79BB\u7684\uFF0C\u56E0\u6B64\u8981\u591A\u591A\u4F53\u4F1A\uFF0C\u53BB\u7406\u89E3\u4E09\u8005\u7684\u5173\u7CFB\u3002</p><h3 id="_6-\u5176\u4ED6\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#_6-\u5176\u4ED6\u6388\u6743" aria-hidden="true">#</a> 6\uFF0C\u5176\u4ED6\u6388\u6743</h3><ul><li>\u521B\u5EFA app \u6570\u636E\u5E93\u7684\u7BA1\u7406\u5458\uFF1A\u5148\u767B\u5F55\u5230 admin \u6570\u636E\u5E93</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uroot -proot admin
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;572862cc-456d-4f5f-98ea-e65054411de6&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-04T00:16:54.097+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-04T00:16:54.097+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> use app
switched to db app
<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;admin&quot;</span>,pwd: <span class="token string">&quot;admin&quot;</span>,roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;dbAdmin&quot;</span>, db: <span class="token string">&quot;app&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
Successfully added user: <span class="token punctuation">{</span>
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;dbAdmin&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;</span> show <span class="token function">users</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app.admin&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;01e196c8-2119-488b-9d11-b969db266aea&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;dbAdmin&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><ul><li>\u521B\u5EFA app \u6570\u636E\u5E93\u8BFB\u5199\u6743\u9650\u7684\u7528\u6237\u5E76\u5177\u6709 clusterAdmin \u6743\u9650\uFF0C\u8981\u5F53\u5FC3\uFF0C\u8FD9\u4E2A\u7528\u6237\u7684\u6743\u9650\u53EF\u662F\u76F8\u5F53\u5927\u7684\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token variable">$mongo</span> -uroot -proot admin
MongoDB shell version v4.0.10
connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName<span class="token operator">=</span>mongodb
Implicit session: session <span class="token punctuation">{</span> <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;572862cc-456d-4f5f-98ea-e65054411de6&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
MongoDB server version: <span class="token number">4.0</span>.10
Server has startup warnings:
<span class="token number">2019</span>-07-04T00:16:54.097+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span> ** WARNING: You are running this process as the root user, <span class="token function">which</span> is not recommended.
<span class="token number">2019</span>-07-04T00:16:54.097+0800 I CONTROL  <span class="token punctuation">[</span>initandlisten<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> use app
switched to db app
<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;super-app&quot;</span>,pwd: <span class="token string">&quot;super-app&quot;</span>,roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;readWrite&quot;</span>, db: <span class="token string">&quot;app&quot;</span> <span class="token punctuation">}</span>,<span class="token punctuation">{</span> role: <span class="token string">&quot;clusterAdmin&quot;</span>, db: <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
Successfully added user: <span class="token punctuation">{</span>
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;super-app&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;readWrite&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;clusterAdmin&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">&gt;</span> show <span class="token function">users</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app.super-app&quot;</span>,
    <span class="token string">&quot;userId&quot;</span> <span class="token builtin class-name">:</span> UUID<span class="token punctuation">(</span><span class="token string">&quot;7533af91-3063-4460-8cb5-f77061eb5680&quot;</span><span class="token punctuation">)</span>,
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;super-app&quot;</span>,
    <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;readWrite&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;app&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;clusterAdmin&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;mechanisms&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;SCRAM-SHA-1&quot;</span>,
        <span class="token string">&quot;SCRAM-SHA-256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="_4-\u5B98\u65B9\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_4-\u5B98\u65B9\u6587\u6863" aria-hidden="true">#</a> 4\uFF0C\u5B98\u65B9\u6587\u6863</h2><p>\u5982\u679C\u60F3\u8981\u66F4\u52A0\u6DF1\u5165\u94BB\u7814\u7528\u6237\u6743\u9650\u95EE\u9898\uFF0C\u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u6587\u6863\uFF1Ahttps://docs.mongodb.com/manual/reference/method/js-user-management/</p>`,86);function p(e,o){return t}var u=s(a,[["render",p]]);export{u as default};
