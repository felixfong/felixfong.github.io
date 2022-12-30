import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5FAE\u670D\u52A1\u65E5\u5FD7\u6253\u5370\u3002" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u670D\u52A1\u65E5\u5FD7\u6253\u5370\u3002" aria-hidden="true">#</a> \u5FAE\u670D\u52A1\u65E5\u5FD7\u6253\u5370\u3002</h1><p>\u4E0A\u8FB9\u662F\u8F93\u51FA\u4E86nginx\u65E5\u5FD7\uFF0C\u4ECE\u800C\u8FDB\u884C\u5C55\u793A\uFF0C\u4EE5\u53CA\u5404\u79CD\u7ED8\u56FE\u5206\u6790\uFF0C\u800C\u73B0\u5728\u7684\u9700\u6C42\u662F\uFF0C\u8981\u5C06\u5FAE\u670D\u52A1\u5F53\u4E2D\u7684\u65E5\u5FD7\u6C47\u603B\u5230elk\u5F53\u4E2D\u4EE5\u4FBF\u5F00\u53D1\u67E5\u8BE2\u65E5\u5FD7\u5B9A\u4F4D\u95EE\u9898\u3002</p><p>\u90FD\u77E5\u9053\uFF0C\u5FAE\u670D\u52A1\u7B2C\u4E00\u4E2A\u7279\u70B9\u5C31\u662F\uFF0C\u591A\uFF0C\u4E0D\u4EC5\u9879\u76EE\u591A\uFF0C\u800C\u4E14\u5F80\u5F80\u5355\u53F0\u4E3B\u673A\u5F53\u4E2D\u4E5F\u4F1A\u6709\u591A\u4E2A\u5E94\u7528\uFF0C\u56E0\u6B64\u591A\u4E2A\u65E5\u5FD7\u6587\u4EF6\u60C5\u51B5\u4E0B\uFF0C\u5982\u4F55\u5904\u7406\u624D\u66F4\u52A0\u5FEB\u901F\u4FBF\u6377\u5462\uFF0C\u8FD9\u91CC\u4F7F\u7528\u4E86filebeat\u6765\u4F5C\u4E3A\u65E5\u5FD7\u8F6C\u53D1\u7EC4\u4EF6\u3002</p><p>\u67B6\u6784\u5982\u56FE\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/0ff793c0152b7524.jpg" alt="image"></p><h3 id="_1-\u914D\u7F6Efilebeat\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u914D\u7F6Efilebeat\u3002" aria-hidden="true">#</a> 1\uFF0C\u914D\u7F6Efilebeat\u3002</h3><p>\u4E3B\u673A\u89C4\u5212\u5982\u4E0B\u56FE\u7B80\u793A\uFF1A</p><table><thead><tr><th style="text-align:center;">\u4E3B\u673A</th><th style="text-align:center;">\u7EC4\u4EF6</th></tr></thead><tbody><tr><td style="text-align:center;">192.168.100.21</td><td style="text-align:center;">spring-cloud\uFF0Cfilebeat-6.5.3</td></tr><tr><td style="text-align:center;">192.168.100.21</td><td style="text-align:center;">spring-cloud\uFF0Cfilebeat-6.5.3</td></tr><tr><td style="text-align:center;">192.168.10.10</td><td style="text-align:center;">logstash-6.5.3\uFF0Celk</td></tr></tbody></table><p>\u50CF\u521A\u521A\u90A3\u6837\uFF0C\u914D\u7F6E\u597Dyun\u6E90\uFF0C\u7136\u540E\u76F4\u63A5\u5B89\u88C5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install filebeat
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u6765\u914D\u7F6Efilebeat\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>cat <span class="token punctuation">&gt;</span> /etc/filebeat/filebeat.yml &lt;&lt; EOF
<span class="token key atrule">filebeat.inputs</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">input_type</span><span class="token punctuation">:</span> log
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /home/ishangjie/ishangjie<span class="token punctuation">-</span>config<span class="token punctuation">-</span>server/normal/<span class="token important">*.log</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;wf1-config&quot;</span>
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>
    <span class="token key atrule">logsource</span><span class="token punctuation">:</span> 192.168.100.21
    <span class="token key atrule">logtype</span><span class="token punctuation">:</span> wf1<span class="token punctuation">-</span>config
<span class="token punctuation">-</span> <span class="token key atrule">input_type</span><span class="token punctuation">:</span> log
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /home/ishangjie/ishangjie<span class="token punctuation">-</span>eureka<span class="token punctuation">-</span>server/normal/<span class="token important">*.log</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;wf1-eureka&quot;</span>
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>
    <span class="token key atrule">logsource</span><span class="token punctuation">:</span> 192.168.100.21
    <span class="token key atrule">logtype</span><span class="token punctuation">:</span> wf1<span class="token punctuation">-</span>eureka
<span class="token punctuation">-</span> <span class="token key atrule">input_type</span><span class="token punctuation">:</span> log
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /home/ishangjie/ishangjie<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>server/normal/<span class="token important">*.log</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;wf1-gateway&quot;</span>
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>
    <span class="token key atrule">logsource</span><span class="token punctuation">:</span> 192.168.100.21
    <span class="token key atrule">logtype</span><span class="token punctuation">:</span> wf1<span class="token punctuation">-</span>gateway
<span class="token key atrule">output.logstash</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.10.10:5044&quot;</span><span class="token punctuation">]</span>
EOF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul><li>\u591A\u4E2Ainput\u5B9A\u4E49\u591A\u4E2A\u5E94\u7528\u65E5\u5FD7\u8DEF\u5F84\uFF0C\u4E14\u53EF\u4EE5\u7528*.log\u8FDB\u884C\u5339\u914D\uFF0C\u9ED8\u8BA4\u8BFB\u53D6\u76EE\u5F55\u4E0B\u6700\u65B0\u7684\u65E5\u5FD7\u3002</li><li>\u6BCF\u4E2A\u91CC\u8FB9\u90FD\u5B9A\u4E49\u4E00\u4E2Atype\u7C7B\u578B\uFF0C\u4ECE\u800C\u4FBF\u4E8E\u4E0A\u4E0B\u6587\u8854\u63A5\u3002</li><li>\u6700\u540E\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u5230elk\u7684logstash\u76845044\u7AEF\u53E3\u3002</li></ul><p>\u518D\u53BB\u914D\u7F6E\u4E00\u4E0B\u53E6\u5916\u4E00\u53F0\u4E3B\u673A\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>cat <span class="token punctuation">&gt;</span> /etc/filebeat/filebeat.yml &lt;&lt; EOF
<span class="token key atrule">filebeat.inputs</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">input_type</span><span class="token punctuation">:</span> log
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /home/ishangjie/ishangjie<span class="token punctuation">-</span>activity<span class="token punctuation">-</span>service/normal/<span class="token important">*.log</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;wf5-activity&quot;</span>
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>
    <span class="token key atrule">logsource</span><span class="token punctuation">:</span> 192.168.100.25
    <span class="token key atrule">logtype</span><span class="token punctuation">:</span> wf5<span class="token punctuation">-</span>activity
<span class="token punctuation">-</span> <span class="token key atrule">input_type</span><span class="token punctuation">:</span> log
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /home/ishangjie/ishangjie<span class="token punctuation">-</span>order<span class="token punctuation">-</span>service/normal/<span class="token important">*.log</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;wf5-order&quot;</span>
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>
    <span class="token key atrule">logsource</span><span class="token punctuation">:</span> 192.168.100.25
    <span class="token key atrule">logtype</span><span class="token punctuation">:</span> wf5<span class="token punctuation">-</span>order
<span class="token punctuation">-</span> <span class="token key atrule">input_type</span><span class="token punctuation">:</span> log
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /home/ishangjie/ishangjie<span class="token punctuation">-</span>user<span class="token punctuation">-</span>service/normal/<span class="token important">*.log</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;wf5-user&quot;</span>
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>
    <span class="token key atrule">logsource</span><span class="token punctuation">:</span> 192.168.100.25
    <span class="token key atrule">logtype</span><span class="token punctuation">:</span> wf5<span class="token punctuation">-</span>user
<span class="token punctuation">-</span> <span class="token key atrule">input_type</span><span class="token punctuation">:</span> log
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /home/ishangjie/ishangjie<span class="token punctuation">-</span>thirdparty<span class="token punctuation">-</span>service/normal/<span class="token important">*.log</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;wf5-thirdparty&quot;</span>
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>
    <span class="token key atrule">logsource</span><span class="token punctuation">:</span> 192.168.100.25
    <span class="token key atrule">logtype</span><span class="token punctuation">:</span> wf5<span class="token punctuation">-</span>thirdparty
<span class="token key atrule">output.logstash</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.10.10:5045&quot;</span><span class="token punctuation">]</span>
EOF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ul><li>\u57FA\u672C\u4E0A\u914D\u7F6E\u4E0E\u4E0A\u8FB9\u5DEE\u4E0D\u591A\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u4E00\u4E2A\u5730\u65B9\u5C31\u662Foutput\u7684logstash\u7684\u7AEF\u53E3\uFF0C\u4E0E\u4E0A\u53F0\u4E3B\u673A\u4E0D\u8981\u4E00\u81F4\uFF0C\u56E0\u4E3A\u6211\u4EEC\u8981\u542F\u52A8\u591A\u4E2A\u5B9E\u4F8B\u8FDB\u884C\u7BA1\u7406\u7684\u3002</li></ul><p>\u542F\u52A8filebeat\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> filebeat
systemctl start filebeat
systemctl status filebeat
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-\u914D\u7F6Elogstash\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6Elogstash\u3002" aria-hidden="true">#</a> 2\uFF0C\u914D\u7F6Elogstash\u3002</h3><p>\u9488\u5BF9\u4E0A\u8FB9\u4E24\u4E2A\u4E3B\u673A\u8F6C\u8FC7\u6765\u7684\u65E5\u5FD7\uFF0C\u5728elk\u4E3B\u673A\u4E0A\u6DFB\u52A0\u76F8\u5BF9\u5E94\u7684\u914D\u7F6E\u8FDB\u884C\u63A5\u6536\u3002</p><p><code>A</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>cat &gt; /etc/logstash/conf.d/wf1.conf &lt;&lt; EOF
input <span class="token punctuation">{</span>
 beats <span class="token punctuation">{</span>
   port =&gt; <span class="token string">&quot;5044&quot;</span>
   host =&gt; <span class="token string">&quot;192.168.100.21&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter <span class="token punctuation">{</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf1-config&quot;</span> <span class="token punctuation">{</span>
      json <span class="token punctuation">{</span>
      source =&gt; <span class="token string">&quot;message&quot;</span>
      target =&gt; <span class="token string">&quot;data&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf1-eureka&quot;</span> <span class="token punctuation">{</span>
    json <span class="token punctuation">{</span>
      source =&gt; <span class="token string">&quot;message&quot;</span>
      target =&gt; <span class="token string">&quot;data&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf1-gateway&quot;</span> <span class="token punctuation">{</span>
    json <span class="token punctuation">{</span>
      source =&gt; <span class="token string">&quot;message&quot;</span>
      target =&gt; <span class="token string">&quot;data&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf1-config&quot;</span> <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span>
      hosts =&gt; <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9200&quot;</span><span class="token punctuation">]</span>
      index =&gt; <span class="token string">&quot;wf1-config-%{+YYYY.MM.dd}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf1-eureka&quot;</span> <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span>
      hosts =&gt; <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9200&quot;</span><span class="token punctuation">]</span>
      index =&gt; <span class="token string">&quot;wf1-eureka-%{+YYYY.MM.dd}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf1-gateway&quot;</span> <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span>
      hosts =&gt; <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9200&quot;</span><span class="token punctuation">]</span>
      index =&gt; <span class="token string">&quot;wf1-gateway-%{+YYYY.MM.dd}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
EOF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p><code>B</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>cat &gt; /etc/logstash/conf.d/wf5.conf &lt;&lt; EOF
input <span class="token punctuation">{</span>
 beats <span class="token punctuation">{</span>
   port =&gt; <span class="token number">5052</span>
   host =&gt; <span class="token string">&quot;192.168.100.25&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter <span class="token punctuation">{</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf5-activity&quot;</span> <span class="token punctuation">{</span>
      json <span class="token punctuation">{</span>
      source =&gt; <span class="token string">&quot;message&quot;</span>
      target =&gt; <span class="token string">&quot;data&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf5-order&quot;</span> <span class="token punctuation">{</span>
    json <span class="token punctuation">{</span>
      source =&gt; <span class="token string">&quot;message&quot;</span>
      target =&gt; <span class="token string">&quot;data&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf5-user&quot;</span> <span class="token punctuation">{</span>
    json <span class="token punctuation">{</span>
      source =&gt; <span class="token string">&quot;message&quot;</span>
      target =&gt; <span class="token string">&quot;data&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf5-thirdparty&quot;</span> <span class="token punctuation">{</span>
    json <span class="token punctuation">{</span>
      source =&gt; <span class="token string">&quot;message&quot;</span>
      target =&gt; <span class="token string">&quot;data&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf5-activity&quot;</span> <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span>
      hosts =&gt; <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9200&quot;</span><span class="token punctuation">]</span>
      index =&gt; <span class="token string">&quot;wf5-activity-%{+YYYY.MM.dd}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf5-order&quot;</span> <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span>
      hosts =&gt; <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9200&quot;</span><span class="token punctuation">]</span>
      index =&gt; <span class="token string">&quot;wf5-order-%{+YYYY.MM.dd}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf5-user&quot;</span> <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span>
      hosts =&gt; <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9200&quot;</span><span class="token punctuation">]</span>
      index =&gt; <span class="token string">&quot;wf5-user-%{+YYYY.MM.dd}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  if <span class="token punctuation">[</span>fields<span class="token punctuation">]</span><span class="token punctuation">[</span>logtype<span class="token punctuation">]</span> == <span class="token string">&quot;wf5-thirdparty&quot;</span> <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span>
      hosts =&gt; <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9200&quot;</span><span class="token punctuation">]</span>
      index =&gt; <span class="token string">&quot;wf5-thirdparty-%{+YYYY.MM.dd}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
EOF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><ul><li>\u8FD9\u91CC\u901A\u8FC7\u7AEF\u53E3\u4F5C\u4E3A\u8C41\u53E3\uFF0C\u8BA9\u5F7C\u6B64\u6210\u4E3A\u8FDE\u63A5\uFF0C\u6CE8\u610F\u8981\u4E00\u4E00\u5BF9\u5E94\u3002</li><li>\u7167\u5355\u5168\u6536\u65E5\u5FD7\uFF0C\u7136\u540E\u8F6C\u624B\u53D1\u7ED9\u672C\u673A\u7684es\u540C\u5B66\u3002</li></ul><p>\u542F\u52A8\u8FD9\u4E24\u4E2A\u5B9E\u4F8B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nohup</span> /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/wf1.conf --path.data<span class="token operator">=</span>/usr/share/logstash/data5 <span class="token operator">&amp;&gt;</span> /logs/logstash_nohup/wf1.out <span class="token operator">&amp;</span>
<span class="token function">nohup</span> /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/wf5.conf --path.data<span class="token operator">=</span>/usr/share/logstash/data9 <span class="token operator">&amp;&gt;</span> /logs/logstash_nohup/wf5.out <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u542F\u52A8\u4E4B\u540E\u53EF\u4EE5\u6309\u4E0A\u8FB9\u6F14\u793A\u8FC7\u7684\u6B65\u9AA4\uFF0C\u5728kibana\u5F53\u4E2D\u6DFB\u52A0\u7D22\u5F15\uFF0C\u7136\u540E\u67E5\u770B\u65E5\u5FD7\u3002</p><h2 id="_3-\u5408\u7406\u89C4\u5212\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u5408\u7406\u89C4\u5212\u3002" aria-hidden="true">#</a> 3\uFF0C\u5408\u7406\u89C4\u5212\u3002</h2><ul><li>\u5173\u4E8E\u7D22\u5F15\u3002 <ul><li>\u4E0A\u8FB9\u7684\u65B9\u5F0F\u662F\u4E00\u4E2A\u670D\u52A1\u914D\u7F6E\u4E86\u4E00\u4E2A\u7D22\u5F15\uFF0C\u4F17\u6240\u5468\u77E5\uFF0C\u5FAE\u670D\u52A1\u7B2C\u4E00\u5927\u7279\u70B9\u5C31\u662F\u591A\uFF0C\u4E24\u4E2A\u73AF\u5883\u4E0B\u6765\uFF0C\u53D1\u73B0\u6309\u8FD9\u79CD\u65B9\u5F0F\u5206\u914D\u7D22\u5F15\u7684\u8BDD\uFF0C\u4F1A\u5BFC\u81F4es\u91CC\u8FB9\u96C6\u805A\u5F88\u591A\u7684\u7D22\u5F15\u3002\u8FD9\u662F\u5176\u4E00\u3002</li></ul></li><li>\u5173\u4E8E\u7AEF\u53E3\u3002 <ul><li>\u6309\u4E0A\u8FB9\u7684\u601D\u8DEF\uFF0C\u57FA\u672C\u4E0A\u662F\u5916\u90E8\u7684\u4E00\u53F0\u4E3B\u673A\uFF0C\u5C31\u5BF9\u5E94\u542F\u52A8\u4E86\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u8FD9\u6837\u5F88\u5BB9\u6613\u7AEF\u53E3\u6D6A\u8D39\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8FDB\u884C\u4E00\u4E0B\u5408\u7406\u89C4\u5212\u4E0E\u914D\u7F6E\u3002</li></ul></li><li>\u89E3\u51B3\u4E0A\u8FB9\u4E24\u4E2A\u95EE\u9898\u3002 <ul><li>\u7D22\u5F15\u7684\u8BDD\uFF0C\u6211\u8FD9\u8FB9\u89C4\u5212\u7684\u662F\u4E00\u53F0\u4E3B\u673A\u4E00\u4E2A\u7D22\u5F15\uFF0C\u800C\u975E\u4E00\u4E2A\u670D\u52A1\u4E00\u4E2A\u7D22\u5F15\u3002\u5982\u6B64\u7B97\u4E0B\u6765\uFF0C\u53EF\u4EE5\u4ECE\u539F\u6765\u4E8C\u4E09\u5341\u4E2A\u7D22\u5F15\u7F29\u51CF\u5230\u5341\u4E2A\u4EE5\u5185\u3002\u5F53\u7136\u8FD8\u53EF\u4EE5\u4ECE\u5176\u4ED6\u7EF4\u5EA6\u6765\u8FDB\u884C\u533A\u5206\u3002\u5177\u4F53\u64CD\u4F5C\u7684\u529E\u6CD5\u975E\u5E38\u7B80\u5355\uFF0C\u90A3\u5C31\u662F\u5728\u914D\u7F6Elogstash\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u5728output\u5904\u7D22\u5F15\u5F52\u62E2\u5373\u53EF\u3002</li><li>\u7AEF\u53E3\u65B9\u9762\uFF0C\u6211\u7684\u89C4\u5212\u662F\u4E00\u7C7B\u73AF\u5883\u516C\u7528\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u539F\u6765\u9884\u53D1\u7EBF\u4E0A\u4E00\u5171\u5341\u53F0\u670D\u52A1\u7528\u4E86\u5341\u4E2A\u7AEF\u53E3\uFF0C\u73B0\u5728\u9884\u53D1\u7528\u4E00\u4E2A\uFF0C\u7EBF\u4E0A\u7528\u4E00\u4E2A\u3002\u5177\u4F53\u64CD\u4F5C\u5C31\u662Ffilebeat\u5BA2\u6237\u7AEF\u7AEF\u53E3\u7EDF\u4E00\uFF0C\u7136\u540Elogstash\u5B9E\u4F8B\u6C47\u603B\u5230\u4E00\u8D77\u5373\u53EF\u3002</li></ul></li></ul>`,30);function t(e,l){return p}var c=s(a,[["render",t]]);export{c as default};
