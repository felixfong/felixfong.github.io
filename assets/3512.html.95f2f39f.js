import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>\u4E4B\u524D\u8FD8\u5728\u5934\u75BC\u6279\u91CF\u90E8\u7F72\u4E0E\u56DE\u6EDA\u7684\u4E8B\u60C5\uFF0C\u6700\u8FD1\u5404\u65B9\u9762\u63A5\u89E6ansible\u5F00\u59CB\u591A\u8D77\u6765\uFF0C\u4E8E\u662F\u5C06ansible\u63A5\u5165\u5230\u4E86\u90E8\u7F72\u6D41\u7A0B\u4E2D\uFF0C\u4ECE\u800C\u5C06\u6279\u91CF\u90E8\u7F72\u4E0E\u56DE\u6EDA\u53D8\u5F97\u7B80\u5316\u8D77\u6765\u3002</p><p>\u5148\u770B\u4E00\u4E0Bansible\u7684\u5267\u672C\u6784\u9020\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ops-eryajf-test-1 deploystatic<span class="token punctuation">]</span><span class="token variable">$tree</span>
<span class="token builtin class-name">.</span>
\u251C\u2500\u2500 hosts
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 roles
\u2502   \u251C\u2500\u2500 deploy
\u2502   \u2502   \u251C\u2500\u2500 files
\u2502   \u2502   \u2502   \u2514\u2500\u2500 keepfive.sh
\u2502   \u2502   \u2514\u2500\u2500 tasks
\u2502   \u2502       \u2514\u2500\u2500 main.yml
\u2502   \u2514\u2500\u2500 rollback
\u2502       \u2514\u2500\u2500 tasks
\u2502           \u2514\u2500\u2500 main.yml
\u2514\u2500\u2500 site.yml
<span class="token number">6</span> directories, <span class="token number">7</span> files
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>\u5176\u4E2Dhosts\u6587\u4EF6\u4E0D\u56FA\u5B9A\uFF0C\u7531\u9879\u76EE\u6784\u5EFA\u4E2D\u7075\u6D3B\u5B9A\u4E49\u3002</p></blockquote><p>\u7136\u540E\u9010\u4E2A\u67E5\u770B\u5185\u5BB9\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$cat site.yml
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token string">&quot;remote&quot;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u9879\u76EE\u90E8\u7F72\u811A\u672C&quot;</span>
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> deploy
    <span class="token punctuation">-</span> rollback
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7136\u540E\u770B\u4E24\u4E2A\u5267\u672C\u7684\u5177\u4F53\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> roles/deploy/files/keepfive.sh
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token keyword">do</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">wc</span> -l<span class="token variable">\`</span></span>
<span class="token assign-left variable">B</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> -lrX <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">tail</span> -n <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $9}&#39;</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> -gt <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span> <span class="token function">rm</span> -rf ./<span class="token variable">$B</span><span class="token punctuation">;</span><span class="token keyword">else</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span><span class="token keyword">fi</span><span class="token punctuation">;</span><span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>\u8FD9\u4E2A\u811A\u672C\u5B9A\u4E49\u4E86\u4EE4\u8FDC\u7A0B\u7248\u672C\u5E93\u4FDD\u75595\u4E2A\u6784\u5EFA\u5386\u53F2\u7684\u64CD\u4F5C\u3002</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ cat roles/deploy/tasks/main.yml
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u521B\u5EFA\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u7684\u7248\u672C\u76EE\u5F55&quot;</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span> path=/release/<span class="token punctuation">{</span><span class="token punctuation">{</span>project<span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token punctuation">{</span><span class="token punctuation">{</span>_version<span class="token punctuation">}</span><span class="token punctuation">}</span> state=directory
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> deploy
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5C06\u4EE3\u7801\u540C\u6B65\u5230\u8FDC\u7A0B\u4E3B\u673A\u7248\u672C\u76EE\u5F55&quot;</span>
  <span class="token key atrule">synchronize</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /<span class="token punctuation">{</span><span class="token punctuation">{</span>WORKSPACE<span class="token punctuation">}</span><span class="token punctuation">}</span>/
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /release/<span class="token punctuation">{</span><span class="token punctuation">{</span>project<span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token punctuation">{</span><span class="token punctuation">{</span>_version<span class="token punctuation">}</span><span class="token punctuation">}</span>/
    <span class="token key atrule">delete</span><span class="token punctuation">:</span> yes
    <span class="token key atrule">rsync_opts</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>exclude<span class="token punctuation">-</span>from=/<span class="token punctuation">{</span><span class="token punctuation">{</span>WORKSPACE<span class="token punctuation">}</span><span class="token punctuation">}</span>/excludefile
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> deploy
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5C06\u9879\u76EE\u90E8\u7F72\u5230\u751F\u4EA7\u76EE\u5F55&quot;</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span> path=/data/www/<span class="token punctuation">{</span><span class="token punctuation">{</span>project<span class="token punctuation">}</span><span class="token punctuation">}</span> state=link src=/release/<span class="token punctuation">{</span><span class="token punctuation">{</span>project<span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token punctuation">{</span><span class="token punctuation">{</span>_version<span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> deploy
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u4F7F\u7248\u672C\u76EE\u5F55\u4FDD\u6301\u4E94\u4E2A\u7248\u672C\u5386\u53F2&quot;</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> chdir=/release/<span class="token punctuation">{</span><span class="token punctuation">{</span>project<span class="token punctuation">}</span><span class="token punctuation">}</span> keepfive.sh
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> deploy
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u751F\u6210\u8FDC\u7A0B\u7248\u672C\u53F7&quot;</span>
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> <span class="token string">&quot;ls /release/{{project}} &gt; /release/{{project}}.log&quot;</span>
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> deploy
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u540C\u6B65\u7248\u672C\u53F7\u5230\u672C\u5730&quot;</span>
  <span class="token key atrule">synchronize</span><span class="token punctuation">:</span> <span class="token string">&quot;src=/release/{{project}}.log dest=/root/.jenkins/version/{{project}}.log mode=pull&quot;</span>
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> deploy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><blockquote><p>\u5B9A\u4E49\u4E86\u4E3B\u8981\u7684\u90E8\u7F72\u6D41\u7A0B</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ cat roles/rollback/tasks/main.yml
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5C06\u9879\u76EE\u56DE\u6EDA\u5230\u5BF9\u5E94\u671F\u671B\u7684\u6784\u5EFA&quot;</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span> path=/data/www/<span class="token punctuation">{</span><span class="token punctuation">{</span>project<span class="token punctuation">}</span><span class="token punctuation">}</span> state=link src=<span class="token punctuation">{</span><span class="token punctuation">{</span>Version<span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> rollback
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>\u5B9A\u4E49\u4E86\u56DE\u6EDA\u7684\u6D41\u7A0B\u3002</p></blockquote><p>\u770B\u8D77\u6765\u5C31\u8FD9\u4E48\u591A\uFF0C\u4E5F\u5E76\u4E0D\u7B97\u590D\u6742\uFF0C\u53EA\u8981\u91CC\u8FB9\u7684\u53D8\u91CF\uFF0C\u4EE5\u53CA\u53C2\u6570\u5B9A\u4E49\u597D\u5373\u53EF\u3002\u73B0\u5728\u5C06\u6574\u4E2A\u5267\u672C\u653E\u5728Jenkins\u4E3B\u673A\u7684 <code>/root/.jenkins/ansible/deploystatic</code>\u76EE\u5F55\u4E0B\uFF0C\u4EE5\u4FBF\u5982\u4E0B\u811A\u672C\u8C03\u7528\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/18e8fa1539737f51.jpg" alt="img"></p><p>\u63A5\u4E0B\u6765\u5C31\u662F\u6838\u5FC3\u7684Jenkinsfile\u7684\u5B9A\u4E49\u4E86\uFF0C\u76EE\u524D\u521D\u6B65\u5B9A\u4E49\u4E3A\u5982\u4E0B\u6837\u5B50\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token keyword">def</span> <span class="token function">createVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;yyyyMMddHHmmss&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string gstring">&quot;_<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>env<span class="token punctuation">.</span>BUILD_ID<span class="token punctuation">}</span></span>&quot;</span>
<span class="token punctuation">}</span>
pipeline <span class="token punctuation">{</span>
    agent any
    environment <span class="token punctuation">{</span>
        _version <span class="token operator">=</span> <span class="token function">createVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// \u9700\u8981\u4FEE\u6539\u6B64\u5904\uFF0C\u5B9A\u4E49\u9879\u76EE\u540D\u79F0</span>
        project<span class="token operator">=</span><span class="token string gstring">&quot;admin-ansible&quot;</span>
        <span class="token comment">// \u5B9A\u4E49\u9879\u76EEgit\u5730\u5740</span>
        git_url <span class="token operator">=</span> <span class="token string gstring">&quot;git@10.3.0.42:jenkins-learn/breeze-college.git&quot;</span>
        remote_port<span class="token operator">=</span><span class="token string gstring">&quot;22&quot;</span>
        remote_user<span class="token operator">=</span><span class="token string gstring">&quot;root&quot;</span>
        <span class="token comment">// \u5B9A\u4E49\u9879\u76EE\u7684webroot\u76EE\u5F55        </span>
        project_dir<span class="token operator">=</span><span class="token string gstring">&quot;/data/www/<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>project<span class="token punctuation">}</span></span>&quot;</span>
        <span class="token comment">//\u5B9A\u4E49\u9879\u76EE\u7684\u7248\u672C\u76EE\u5F55\uFF0C\u4E00\u822C\u4E0D\u7528\u66F4\u6539</span>
        version_dir<span class="token operator">=</span><span class="token string gstring">&quot;/release/<span class="token expression"><span class="token punctuation">$</span>project</span>/<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>_version<span class="token punctuation">}</span></span>&quot;</span>
    <span class="token punctuation">}</span>
    options <span class="token punctuation">{</span>
        <span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">disableConcurrentBuilds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">timeout</span><span class="token punctuation">(</span>time<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token string">&#39;MINUTES&#39;</span><span class="token punctuation">)</span>
        <span class="token function">buildDiscarder</span><span class="token punctuation">(</span><span class="token function">logRotator</span><span class="token punctuation">(</span>numToKeepStr<span class="token punctuation">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    triggers<span class="token punctuation">{</span>
        <span class="token function">gitlab</span><span class="token punctuation">(</span> triggerOnPush<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                triggerOnMergeRequest<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                branchFilterType<span class="token punctuation">:</span> <span class="token string">&#39;All&#39;</span><span class="token punctuation">,</span>
                secretToken<span class="token punctuation">:</span> <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>env<span class="token punctuation">.</span>git_token<span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    parameters <span class="token punctuation">{</span>
        <span class="token function">string</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string">&#39;branch&#39;</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">&#39;master&#39;</span><span class="token punctuation">,</span> description<span class="token punctuation">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u5C06\u8981\u6784\u5EFA\u7684\u4EE3\u7801\u5206\u652F&#39;</span><span class="token punctuation">)</span>        
        <span class="token function">choice</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string">&#39;mode&#39;</span><span class="token punctuation">,</span> choices<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;deploy&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;rollback&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> description<span class="token punctuation">:</span> <span class="token string">&#39;\u8BF7\u9009\u62E9\u53D1\u5E03\u6216\u8005\u56DE\u6EDA\uFF1F&#39;</span><span class="token punctuation">)</span>
        <span class="token function">string</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string">&#39;version_id&#39;</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> description<span class="token punctuation">:</span> <span class="token string">&#39;\u56DE\u6EDA\u65F6\u7528\uFF0C\u9ED8\u8BA4\u56DE\u6EDA\u5230\u4E0A\u4E00\u6B21\u6784\u5EFA\uFF0C\u5982\u9700\u8981\u56DE\u6EDA\u5230\u66F4\u65E9\u6784\u5EFA\uFF0C\u8BF7\u8F93\u5165\u5BF9\u5E94\u6784\u5EFAID\uFF0C\u53EA\u652F\u6301\u6700\u8FD1\u4E94\u6B21\u6784\u5EFA\u7684\u56DE\u6EDA,\u90E8\u7F72\u8BF7\u5FFD\u7565\u6B64\u53C2\u6570&#39;</span><span class="token punctuation">)</span>
        <span class="token function">choice</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string">&#39;remote_ip&#39;</span><span class="token punctuation">,</span> choices<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;10.3.9.32&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;10.3.20.4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> description<span class="token punctuation">:</span> <span class="token string">&#39;\u9009\u62E9\u8981\u53D1\u5E03\u7684\u4E3B\u673A&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u62C9\u53D6\u4EE3\u7801&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo <span class="token string">&#39;Checkout&#39;</span>
                script <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        git branch<span class="token punctuation">:</span> <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>branch<span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">,</span>url<span class="token punctuation">:</span> <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>git_url<span class="token punctuation">}</span></span>&quot;</span>
                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        echo <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>err<span class="token punctuation">}</span></span>&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B9A\u4E49\u90E8\u7F72\u4E3B\u673A\u5217\u8868&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps<span class="token punctuation">{</span>
                script<span class="token punctuation">{</span>
                    <span class="token keyword">try</span><span class="token punctuation">{</span>
                        sh <span class="token string">&#39;&#39;&#39;
                        if [ $remote_ip == &quot;all&quot; ];then
cat &gt; /root/.jenkins/ansible/deploystatic/hosts &lt;&lt; EOF
[remote]
10.3.9.32 ansible_port=34222
10.3.20.4 ansible_port=34222
EOF
else
cat &gt; /root/.jenkins/ansible/deploystatic/hosts &lt;&lt; EOF
[remote]
$remote_ip ansible_port=34222
EOF
fi
&#39;&#39;&#39;</span>
                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        echo <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>err<span class="token punctuation">}</span></span>&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B9A\u4E49\u5FFD\u7565\u6587\u4EF6&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps<span class="token punctuation">{</span>
                script<span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
sh <span class="token string">&#39;&#39;&#39;                        
cat &gt; excludefile &lt;&lt; EOF
Jenkinsfile
excludefile
EOF
&#39;&#39;&#39;</span>                      
                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        echo <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>err<span class="token punctuation">}</span></span>&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u90E8\u7F72&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                environment name<span class="token punctuation">:</span> <span class="token string">&#39;mode&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">:</span> <span class="token string">&#39;deploy&#39;</span>
            <span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span>
              <span class="token function">dir</span><span class="token punctuation">(</span><span class="token string gstring">&quot;/root/.jenkins/ansible/deploystatic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                  script <span class="token punctuation">{</span>                    
                      <span class="token keyword">try</span> <span class="token punctuation">{</span>
                          sh <span class="token string">&#39;&#39;&#39;
                          ansible-playbook -i ./hosts --tags &quot;deploy&quot; site.yml -e &quot;project&quot;=$project  -e &quot;WORKSPACE&quot;=$WORKSPACE -e &quot;_version&quot;=\${_version}
                          &#39;&#39;&#39;</span>
                      <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                          echo <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>err<span class="token punctuation">}</span></span>&quot;</span>
                      <span class="token punctuation">}</span>
                  <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u56DE\u6EDA&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                environment name<span class="token punctuation">:</span> <span class="token string">&#39;mode&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">:</span> <span class="token string">&#39;rollback&#39;</span>
            <span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span>
                <span class="token function">dir</span><span class="token punctuation">(</span><span class="token string gstring">&quot;/root/.jenkins/ansible/deploystatic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                  script <span class="token punctuation">{</span>
                      <span class="token keyword">try</span><span class="token punctuation">{</span>
                          <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span>version_id <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>                        
                              sh <span class="token string">&#39;&#39;&#39;
                                  echo &quot;\u9009\u62E9\u56DE\u6EDA\u7684\u7248\u672C\u662F\u9ED8\u8BA4\uFF0C\u5C06\u56DE\u6EDA\u5230\u4E0A\u6B21\u5236\u54C1\uFF0C\u56DE\u6EDA\u5373\u5C06\u8FDB\u884C...&quot;
                                  Version=&quot;/release/$project/\`tail -n2 /root/.jenkins/version/\${project}.log | head -n1\`&quot;
                                  ansible-playbook -i ./hosts --tags &quot;rollback&quot; site.yml -e &quot;project&quot;=\${project}  -e &quot;Version&quot;=\${Version}
                                  echo &quot;==============&quot;
                                  echo &quot;\u9879\u76EE\u5DF2\u56DE\u6EDA\u5B8C\u6210\uFF01&quot;
                                  echo &quot;==============&quot;
                                  &#39;&#39;&#39;</span>
                          <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>
                              sh <span class="token string">&#39;&#39;&#39;
                                  echo &quot;\u9009\u62E9\u56DE\u6EDA\u7684\u7248\u672C\u662F\uFF1A\${version_id}\uFF0C\u5C06\u56DE\u6EDA\u5230 \${version_id} \u7684\u5236\u54C1\uFF0C\u56DE\u6EDA\u5373\u5C06\u8FDB\u884C...&quot;
                                  Version=&quot;/release/$project/\`grep &quot;_$version_id&quot; /root/.jenkins/version/\${project}.log\`&quot;
                                  ansible-playbook -i ./hosts --tags &quot;rollback&quot; site.yml -e &quot;project&quot;=\${project}  -e &quot;Version&quot;=\${Version}
                                  echo &quot;\u9879\u76EE\u56DE\u6EDA\u5230 \${version_id} \u5B8C\u6210\uFF01&quot;
                                  &#39;&#39;&#39;</span>
                          <span class="token punctuation">}</span>
                      <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                          echo <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>err<span class="token punctuation">}</span></span>&quot;</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    post <span class="token punctuation">{</span>
        success <span class="token punctuation">{</span>
            dingTalk accessToken<span class="token punctuation">:</span><span class="token string">&#39;https://oapi.dingtalk.com/robot/send?access_token=\u6539\u6210\u81EA\u5DF1\u7684&#39;</span><span class="token punctuation">,</span>
            imageUrl<span class="token punctuation">:</span><span class="token string">&#39;https://ae01.alicdn.com/kf/Hdfe28d2621434a1eb821ac6327b768e79.png&#39;</span><span class="token punctuation">,</span>
            jenkinsUrl<span class="token punctuation">:</span> <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>env<span class="token punctuation">.</span>JENKINS_URL<span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">,</span>
            message<span class="token punctuation">:</span><span class="token string">&#39;\u6784\u5EFA\u6210\u529F \u2705&#39;</span><span class="token punctuation">,</span>
            notifyPeople<span class="token punctuation">:</span><span class="token string">&#39;\u674E\u542F\u9F99&#39;</span>
        <span class="token punctuation">}</span>
        failure <span class="token punctuation">{</span>
            dingTalk accessToken<span class="token punctuation">:</span><span class="token string">&#39;https://oapi.dingtalk.com/robot/send?access_token=\u6539\u6210\u81EA\u5DF1\u7684&#39;</span><span class="token punctuation">,</span>
            imageUrl<span class="token punctuation">:</span><span class="token string">&#39;https://ae01.alicdn.com/kf/Hdfe28d2621434a1eb821ac6327b768e79.png&#39;</span><span class="token punctuation">,</span>
            jenkinsUrl<span class="token punctuation">:</span> <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>env<span class="token punctuation">.</span>JENKINS_URL<span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">,</span>
            message<span class="token punctuation">:</span><span class="token string">&#39;\u6784\u5EFA\u5931\u8D25 \u274C&#39;</span><span class="token punctuation">,</span>
            notifyPeople<span class="token punctuation">:</span><span class="token string">&#39;\u674E\u542F\u9F99&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br></div></div><p>\u6838\u5FC3\u811A\u672C\u4E5F\u4E0D\u7B97\u590D\u6742\uFF0C\u53EA\u9700\u8981\u5728\u65B0\u914D\u7F6E\u9879\u76EE\u7684\u65F6\u5019\u8C03\u6574\u4E00\u4E9B\u53C2\u6570\u5373\u53EF\u6295\u5165\u4F7F\u7528\u3002</p>`,18);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
