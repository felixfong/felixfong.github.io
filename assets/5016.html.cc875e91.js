import{r as t,o as p,c as r,b as s,a as l,F as o,e as a,d as n}from"./app.dbf5d933.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const c={},b=a(`<p>\u6709\u540C\u5B66\u53CD\u9988\u8BF4api\u7684\u65E5\u5FD7\u53EF\u80FD\u6F0F\u91C7\u4E86\uFF0C\u90E8\u5206\u65E5\u5FD7\u67E5\u4E0D\u5230\uFF0C\u6211\u4E8E\u662F\u7ACB\u9A6C\u8FDB\u884C\u4E00\u6CE2\u67E5\u9A8C\uFF0C\u53D1\u73B0\u7684\u786E\u662F\u6709\u90E8\u5206\u65E5\u5FD7\u6CA1\u6709\u5199\u5230es\uFF0C\u4E00\u5F00\u59CB\u8FD8\u4EE5\u4E3A\u662F\u8FD9\u90E8\u5206\u65E5\u5FD7\u6709\u95EE\u9898\uFF0C\u7136\u540E\u5F00\u53D1\u540C\u5B66\u662F\u540C\u76EE\u5F55\u4E0B\u7684\u65E5\u5FD7\u7528\u7684\u662F\u540C\u4E00\u4E2A\u6846\u67B6\uFF0C\u4E8E\u662F\u53C8\u60F3\u662F\u4E0D\u662Fes\u5199\u5165\u6709\u95EE\u9898\uFF0C\u770B\u4E86\u770B\u4E5F\u6CA1\u95EE\u9898\uFF0C\u540E\u6765\u6765\u5230\u4E3B\u673A\u4E0A\u770Bfilebeat\u7684\u65E5\u5FD7\uFF0C\u53D1\u73B0\u4E86\u5982\u4E0B\u62A5\u9519\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">2019</span>-12-03T15:46:22+08:00 ERR Failed to create tempfile <span class="token punctuation">(</span>/var/lib/filebeat/registry.new<span class="token punctuation">)</span> <span class="token keyword">for</span> writing: <span class="token function">open</span> /var/lib/filebeat/registry.new: too many <span class="token function">open</span> files
<span class="token number">2019</span>-12-03T15:46:22+08:00 ERR Writing of registry returned error: <span class="token function">open</span> /var/lib/filebeat/registry.new: too many <span class="token function">open</span> files. Continuing<span class="token punctuation">..</span>.
<span class="token number">2019</span>-12-03T15:46:23+08:00 ERR Harvester could not be started on existing file: /var/log/secure, Err: Error setting up harvester: Harvester setup failed. Unexpected <span class="token function">file</span> opening error: Failed opening /var/log/secure: <span class="token function">open</span> /var/log/secure: too many <span class="token function">open</span> files
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u4E0A\u62A5\u9519\u662F\u91C7\u96C6\u7684\u65E5\u5FD7\u6587\u4EF6\u8D85\u8FC7\u4E86filebeat\u8FDB\u7A0B\u7684\u6700\u5927\u6587\u4EF6\u6253\u5F00\u6570\u4E86\uFF0C\u800C\u8D85\u51FA\u7684\u90E8\u5206\uFF0C\u4E5F\u5C06\u65E0\u6CD5\u843D\u5165\u5230es\u4E2D\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/e2220bd19861e421.jpg" alt="img"></p>`,4),u=n("\u89E3\u51B3\u53EF\u4EE5"),f={href:"https://wiki.eryajf.net/pages/5008.html",target:"_blank",rel:"noopener noreferrer"},m=n("\u53C2\u8003\u52A8\u6001\u4FEE\u6539"),k=n("\uFF0C\u4F46\u53EA\u662F\u4E34\u65F6\u751F\u6548\uFF0C\u4E00\u65E6\u670D\u52A1\u6216\u8005\u7CFB\u7EDF\u91CD\u542F\uFF0C\u5C31\u53C8\u5931\u6548\u4E86\uFF0C\u56E0\u6B64\u5728\u542F\u52A8\u6587\u4EF6\u4E2D\u6DFB\u52A0\u914D\u7F6E\u6765\u89E3\u51B3\uFF1A"),d=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> /usr/lib/systemd/system/filebeat.service
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>filebeat
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://www.elastic.co/guide/en/beats/filebeat/current/index.html
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>network-online.target
<span class="token assign-left variable">After</span><span class="token operator">=</span>network-online.target
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/share/filebeat/bin/filebeat -c /etc/filebeat/filebeat.yml -path.home /usr/share/filebeat -path.config /etc/filebeat -path.data /var/lib/filebeat -path.logs /var/log/filebeat
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>always
<span class="token assign-left variable">LimitNOFILE</span><span class="token operator">=</span><span class="token number">10240</span>
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u7136\u540E\u91CD\u542F\u670D\u52A1\u5373\u53EF\u3002</p>`,2);function g(v,h){const e=t("ExternalLinkIcon");return p(),r(o,null,[b,s("p",null,[u,s("a",f,[m,l(e)]),k]),d],64)}var x=i(c,[["render",g]]);export{x as default};