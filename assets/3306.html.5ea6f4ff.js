import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>\u4E4B\u524D\u914D\u7F6E\u9879\u90FD\u662F\u57FA\u4E8E\u5355\u5206\u652F\u7684\u6784\u5EFA\uFF0C\u5F88\u591A\u65F6\u5019\uFF0C\u6211\u4EEC\u66F4\u9700\u8981\u914D\u7F6E\u4E00\u4E2A\u591A\u5206\u652F\u7684\u573A\u666F\u4EE5\u5E94\u5BF9\u66F4\u4E3A\u591A\u5143\u7684\u5DE5\u4F5C\u573A\u666F\u3002</p><p>\u6BD4\u5982\uFF0C\u6211\u5E0C\u671B\u9879\u76EE\u7684\u6D4B\u8BD5\u73AF\u5883\u4EE5\u53CA\u9884\u53D1\u73AF\u5883\u90FD\u662F\u63A8\u9001\u4EE3\u7801\u4E4B\u540E\u81EA\u52A8\u6784\u5EFA\u7684\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u5728Jenkins\u4E2D\u521B\u5EFA\u4E00\u4E2A\u591A\u5206\u652Fpipeline\u9879\u76EE\uFF0C\u6765\u6EE1\u8DB3\u5982\u4E0A\u573A\u666F\u3002</p><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u9879\u76EE\uFF0C\u98CE\u683C\u9009\u62E9\u591A\u5206\u652Fpipeline\uFF0C\u7136\u540E\u8FDB\u884C\u7B80\u5355\u914D\u7F6E\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/659ff590e2702c1c.jpg" alt="img"></p><p>\u7136\u540E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFAJenkinsfile\u6587\u4EF6\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>pipeline <span class="token punctuation">{</span>
    agent any
    environment <span class="token punctuation">{</span>
        remote_dir <span class="token operator">=</span> <span class="token string gstring">&quot;/opt/hello&quot;</span>
    <span class="token punctuation">}</span>
    triggers<span class="token punctuation">{</span>
        <span class="token function">gitlab</span><span class="token punctuation">(</span> triggerOnPush<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                triggerOnMergeRequest<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                branchFilterType<span class="token punctuation">:</span> <span class="token string">&#39;All&#39;</span><span class="token punctuation">,</span>
                secretToken<span class="token punctuation">:</span> <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>env<span class="token punctuation">.</span>git_token<span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    options <span class="token punctuation">{</span>
        <span class="token function">buildDiscarder</span><span class="token punctuation">(</span><span class="token function">logRotator</span><span class="token punctuation">(</span>numToKeepStr<span class="token punctuation">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">disableConcurrentBuilds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">timeout</span><span class="token punctuation">(</span>time<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token string">&#39;MINUTES&#39;</span><span class="token punctuation">)</span>
        <span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u90E8\u7F72\u5230\u6D4B\u8BD5\u73AF\u5883&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                branch <span class="token string">&#39;test&#39;</span>
            <span class="token punctuation">}</span>
            steps<span class="token punctuation">{</span>
                sh <span class="token string">&#39;&#39;&#39;
                    rsync -avz --progress -e &#39;ssh -p 22&#39; --exclude=&#39;Jenkinsfile&#39; --exclude=&#39;.git&#39; --delete \${WORKSPACE}/  root@192.168.3.68:$remote_dir
                &#39;&#39;&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u90E8\u7F72\u5230\u7EBF\u4E0A\u73AF\u5883&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                branch <span class="token string">&#39;master&#39;</span>
            <span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span>
                sh <span class="token string">&#39;&#39;&#39;
                    rsync -avz --progress -e &#39;ssh -p 22&#39; --exclude=&#39;Jenkinsfile&#39; --exclude=&#39;.git&#39; --delete \${WORKSPACE}/  root@192.168.3.61:$remote_dir
                &#39;&#39;&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;delete&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo <span class="token string">&#39;\u6E05\u7406\u5DE5\u4F5C\u76EE\u5F55&#39;</span>
                <span class="token function">cleanWs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    post <span class="token punctuation">{</span>
        success <span class="token punctuation">{</span>
            sh <span class="token string gstring">&quot;echo \u6210\u529F\u4E86&quot;</span>
        <span class="token punctuation">}</span>
        failure <span class="token punctuation">{</span>
            sh <span class="token string gstring">&quot;echo \u5931\u8D25\u4E86&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p>\u914D\u7F6E\u4E86\u81EA\u52A8\u6784\u5EFA\uFF0C\u7136\u540E\u4F7F\u7528when\u53C2\u6570\u5C06\u4E0D\u540C\u5206\u652F\u4EE3\u7801\u5206\u53D1\u5230\u4E0D\u540C\u7684\u90E8\u7F72\u73AF\u5883\u4E2D\u53BB\uFF0C\u5F53\u6211\u4EEC\u7684\u65E5\u5E38\u5F00\u53D1\u5DE5\u4F5C\u5DF2\u7ECF\u5F62\u6210\u89C4\u8303\uFF0C\u90A3\u4E48\u8FD9\u79CD\u591A\u5206\u652F\u6784\u5EFA\u662F\u975E\u5E38\u65B9\u4FBF\u7684\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u968F\u4FBF\u65B0\u5EFA\u5206\u652F\u5F00\u53D1\uFF0C\u5408\u5E76\u5230test\u5E76push\u5C31\u4F1A\u89E6\u53D1\u6D4B\u8BD5\u73AF\u5883\u7684\u6784\u5EFA\uFF0C\u540C\u7406\u4EA6\u7136\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/ace4b956a0b64182.jpg" alt="img"></p><p>\u5F53\u6211\u4EEC\u628AJenkinsfile\u63A8\u4E0A\u53BB\uFF0C\u7136\u540E\u53C8\u521B\u5EFA\u4E86test\u5206\u652F\uFF0C\u8FD9\u91CC\u624B\u52A8\u70B9\u51FB\u68C0\u7D22\uFF0C\u4E24\u4E2A\u5206\u652F\u5C31\u62C9\u4E0B\u6765\u4E86\uFF0C\u7136\u540E\u914D\u7F6E\u4E5F\u4F1A\u843D\u4F4D\u5230\u4E24\u4E2A\u5206\u652F\u4E2D\u53BB\uFF0C\u73B0\u5728\u53EF\u4EE5\u70B9\u5F00test\u5206\u652F\u914D\u7F6E\u770B\u4E00\u773C\uFF1A</p><p>!<img src="http://t.eryajf.net/imgs/2021/09/a14699ee7126fdde.jpg" alt="img"></p><p>\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230Jenkins\u5DF2\u7ECF\u81EA\u52A8\u5C06test\u914D\u7F6E\u843D\u4F4D\u5230\u5BF9\u5E94\u73AF\u5883\u4E2D\u4E86\uFF0C\u4EE5\u4FBF\u4E8E\u6211\u4EEC\u63A8\u9001\u4EE3\u7801\u4E4B\u540E\u81EA\u52A8\u6784\u5EFA\u3002</p><p>\u5F53\u7136\u4E86\uFF0C\u5982\u679C\u6709\u66F4\u52A0\u590D\u6742\u7684\u9700\u6C42\u60C5\u51B5\uFF0C\u53EF\u4EE5\u53D1\u6563\u81EA\u5DF1\u7684\u601D\u7EF4\uFF0C\u7ED3\u5408\u524D\u8FB9\u7684Jenkinsfile\u8BED\u6CD5\uFF0C\u914D\u7F6E\u51FA\u66F4\u52A0\u4E30\u5BCC\u7684\u529F\u80FD\u51FA\u6765\u3002</p>`,12);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
