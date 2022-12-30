import{e}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=e(`<p>\u6709\u65F6\u5019\u672C\u5730yum\u6E90\u53EF\u80FD\u88AB\u73A9\u574F\u4E86\uFF0C\u7136\u540E\u5728\u5B89\u88C5\u4E00\u4E9B\u8F6F\u4EF6\u7684\u65F6\u5019\u5C31\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost yum.repos.d]$yum -y update
Resolving Dependencies
--&gt; Running transaction check
---&gt; Package cryptsetup-libs.x86_64 0:1.7.4-4.el7 will be updated
---&gt; Package cryptsetup-libs.x86_64 0:2.0.3-3.el7 will be an update
---&gt; Package device-mapper.x86_64 7:1.02.146-4.el7 will be updated
--&gt; Processing Dependency: device-mapper = 7:1.02.146-4.el7 for package: 7:device-mapper-event-1.02.146-4.el7.x86_64
---&gt; Package device-mapper.x86_64 7:1.02.149-10.el7_6.2 will be an update
---&gt; Package device-mapper-libs.x86_64 7:1.02.146-4.el7 will be updated
---&gt; Package device-mapper-libs.x86_64 7:1.02.149-10.el7_6.2 will be an update
--&gt; Finished Dependency Resolution
Error: Package: 7:device-mapper-event-1.02.146-4.el7.x86_64 (@base)
           Requires: device-mapper = 7:1.02.146-4.el7
           Removing: 7:device-mapper-1.02.146-4.el7.x86_64 (@base)
               device-mapper = 7:1.02.146-4.el7
           Updated By: 7:device-mapper-1.02.149-10.el7_6.2.x86_64 (bash)
               device-mapper = 7:1.02.149-10.el7_6.2
 You could try using --skip-broken to work around the problem
 You could try running: rpm -Va --nofiles --nodigest
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u7F51\u4E0A\u5927\u591A\u6570\u7684\u8BF4\u6CD5\u90FD\u662F\u91CD\u65B0\u5EFA\u7ACB\u4EE5\u4E0B\u7F13\u5B58\uFF0C\u4F46\u662F\u5982\u679Cyum\u6E90\u51FA\u95EE\u9898\u4E86\uFF0C\u90A3\u4E48\u91CD\u5EFA\u4E5F\u662F\u6CA1\u7528\u7684\u3002</p><p>\u89E3\u51B3\u529E\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y epel-release
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5epel\uFF0C\u7136\u540E\u518D\u6267\u884C\u76F8\u5173\u7684\u7F13\u5B58\u91CD\u5EFA\uFF0C\u5B89\u88C5\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum clean all
$ yum update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,7);function l(p,r){return a}var b=n(s,[["render",l]]);export{b as default};
