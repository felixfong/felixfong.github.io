import{e as s}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<p>\u4EE5\u5F80<code>NGINX</code>\u65E5\u5FD7\u4E0D\u4F1A\u8FDB\u884C\u5207\u5272\u7684\u64CD\u4F5C\uFF0C\u800C\u90FD\u662F\u628A\u5207\u5272\u7684\u5DE5\u4F5C\u4EA4\u7ED9<code>logrotate</code>\u6765\u505A\u4E86\uFF0C\u8FD9\u6CA1\u5565\u95EE\u9898\uFF0C\u4F46\u662F\u5982\u679C\u9047\u5230<code>NGINX</code>\u662F\u5BB9\u5668\u6765\u8DD1\u7684\uFF0C\u65E5\u5FD7\u53EA\u662F\u6302\u8F7D\u51FA\u6765\u7684\u60C5\u51B5\uFF0C\u5C31\u6709\u70B9\u4E0D\u79D1\u5B66\u4E86\uFF0C\u6BD5\u7ADF<code>logrotate</code>\u5728\u5207\u5272\u65E5\u5FD7\u7684\u65F6\u5019\u8FD8\u9700\u8981\u53D1\u4E00\u4E2A\u5E73\u6ED1\u6EDA\u52A8\u7684\u4FE1\u53F7\u7ED9 NGINX \u8FDB\u7A0B\u3002</p><p>\u90A3\u4E48\u8FD9\u91CC\u5C31\u5206\u4EAB\u57FA\u4E8E NGINX \u81EA\u8EAB\u914D\u7F6E\u6587\u4EF6\u6765\u8FDB\u884C\u65E5\u5FD7\u7684\u5207\u5272\u5DE5\u4F5C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$time_iso8601</span> ~ <span class="token string">&quot;^(\\d{4})-(\\d{2})-(\\d{2})&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">set</span> <span class="token variable">$year</span> <span class="token variable">$1</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">set</span> <span class="token variable">$month</span> <span class="token variable">$2</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">set</span> <span class="token variable">$day</span> <span class="token variable">$3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
access_log /var/log/nginx/<span class="token variable">$year</span>-<span class="token variable">$month</span>-<span class="token variable">$day</span>-access.log<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4EE5\u4E0A\u914D\u7F6E\u57FA\u4E8E <code>$time_iso8601</code>\u8FD9\u4E00\u65F6\u95F4\u6233\u53D6\u51FA\u65F6\u95F4\u53D8\u91CF\uFF0C\u4ECE\u800C\u6EE1\u8DB3\u81EA\u7531\u5B9A\u4E49\u7684\u65B9\u5F0F\uFF0C\u751F\u6210\u7684\u65E5\u5FD7\u5C06\u4F1A\u6309\u5929\u81EA\u52A8\u8FDB\u884C\u5207\u5272\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/0ae7bf7cb48f908a.jpg" alt="img"></p><p>\u5982\u679C\u7CBE\u786E\u5230\u79D2\uFF0C\u53EF\u4EE5\u7528\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$time_iso8601</span> ~ <span class="token string">&quot;^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">set</span> <span class="token variable">$year</span> <span class="token variable">$1</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">set</span> <span class="token variable">$month</span> <span class="token variable">$2</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">set</span> <span class="token variable">$day</span> <span class="token variable">$3</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">set</span> <span class="token variable">$hour</span> <span class="token variable">$4</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">set</span> <span class="token variable">$minutes</span> <span class="token variable">$5</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">set</span> <span class="token variable">$seconds</span> <span class="token variable">$6</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
access_log /data/log/test/nginx-access-<span class="token variable">$year</span>-<span class="token variable">$month</span>-<span class="token variable">$day</span>-<span class="token variable">$hour</span>-<span class="token variable">$minutes</span>-<span class="token variable">$seconds</span>.log json<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u6837\u5C31\u5DF2\u7ECF\u53EF\u4EE5\u5B9E\u73B0\u9700\u6C42\u4E86\uFF0C\u8FD8\u6709 Perl \u7684\u8868\u73B0\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u8BB2\u89E3\u4E86\u3002</p><p><code>\u6CE8\u610F\uFF1A</code>\u8FD9\u91CC\u7684 if \u8BED\u53E5\u53EA\u80FD\u653E\u5230 server \u533A\u5757\u4E0B\uFF0C\u6240\u4EE5\u4E0D\u80FD\u76F4\u63A5\u653E\u5728\u5168\u5C40\u5F15\u7528\u3002</p><p>\u4E8E\u662F\uFF0C\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2A\u65E5\u5FD7\u683C\u5F0F\u5316\u4E13\u7528\u7684\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vim</span> /usr/local/nginx/conf/log_format.conf
log_format json <span class="token assign-left variable">escape</span><span class="token operator">=</span>json <span class="token string">&#39;{&quot;remote_addr&quot;: &quot;$remote_addr&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;@timestamp&quot;: &quot;$time_iso8601&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;request_uri&quot;: &quot;$request_uri&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;verb&quot;: &quot;$request_method&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;httpversion&quot;: &quot;$server_protocol&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;response&quot;: &quot;$status&quot;, &#39;</span>
                                 <span class="token string">&#39;&quot;body_bytes_sent&quot;: &quot;$body_bytes_sent&quot;, &#39;</span>
                                 <span class="token string">&#39;&quot;referrer&quot;: &quot;$http_referer&quot;, &#39;</span>
                                 <span class="token string">&#39;&quot;user_agent&quot;: &quot;$http_user_agent&quot;, &#39;</span>
                                 <span class="token string">&#39;&quot;http_x_forwarded_for&quot;: &quot;$http_x_forwarded_for&quot;, &#39;</span>
                                 <span class="token string">&#39;&quot;server_name&quot;: &quot;$host&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;request_time&quot;: &quot;$request_time&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;upstream_response_time&quot;: &quot;$upstream_response_time&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;realpath_root&quot;: &quot;$realpath_root&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;request_body&quot;: &quot;$request_body&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;nginx_version&quot;: &quot;$nginx_version&quot;,&#39;</span>
                                 <span class="token string">&#39;&quot;scheme&quot;: &quot;$scheme&quot;}&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$time_iso8601</span> ~ <span class="token string">&quot;^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">set</span> <span class="token variable">$year</span> <span class="token variable">$1</span><span class="token punctuation">;</span>
        <span class="token builtin class-name">set</span> <span class="token variable">$month</span> <span class="token variable">$2</span><span class="token punctuation">;</span>
        <span class="token builtin class-name">set</span> <span class="token variable">$day</span> <span class="token variable">$3</span><span class="token punctuation">;</span>
        <span class="token builtin class-name">set</span> <span class="token variable">$hour</span> <span class="token variable">$4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
access_log /home/nginx/logs/<span class="token variable">\${server_name}</span>-<span class="token variable">\${year}</span>-<span class="token variable">\${month}</span>-<span class="token variable">\${day}</span>-<span class="token variable">\${hour}</span>_access.log json<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u7136\u540E\u518D\u5728\u914D\u7F6E\u5F53\u4E2D\u5F15\u7528\u8FDB\u6765\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> doc.conf
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  doc.eryajf.net<span class="token punctuation">;</span>
    charset utf-8<span class="token punctuation">;</span>
    include log_format.conf<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
        try_files /_not_exists_ @backend<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location @backend <span class="token punctuation">{</span>
        proxy_set_header X-Forwarded-For <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header Host            <span class="token variable">$http_host</span><span class="token punctuation">;</span>
        proxy_set_header   X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
        proxy_pass http://127.0.0.1:8180<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u8FD9\u6837\u65E5\u5FD7\u5C31\u4F1A\u6839\u636E\u4E0D\u540C\u57DF\u540D\uFF0C\u6309\u6BCF\u5C0F\u65F6\u4E00\u4E2A\u6587\u4EF6\u7684\u8FDB\u884C\u5206\u5272\u4E86\u3002</p><p><code>\u6CE8\u610F\uFF1A</code>\u5982\u679C\u914D\u7F6E\u4E4B\u540E\u65E5\u5FD7\u6CA1\u6709\u65B0\u751F\u6210\uFF0C\u68C0\u67E5\u4E00\u4E0B NGINX \u8FDB\u7A0B\u662F\u5426\u6709\u5BF9\u5E94\u76EE\u5F55\u7684\u5199\u5165\u6743\u9650\uFF0C\u5E76\u8BF7\u6C42\u4E00\u4E0B NGINX\uFF0C\u5E94\u8BE5\u5C31\u4F1A\u6709\u65E5\u5FD7\u4EA7\u751F\u4E86\u3002</p>`,15);function p(t,o){return e}var r=n(a,[["render",p]]);export{r as default};