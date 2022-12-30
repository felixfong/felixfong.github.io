import{r as a,o as p,c as t,b as n,a as e,F as o,e as c,d as l}from"./app.dbf5d933.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=c(`<p>\u4F20\u7EDF\u7684\u81EA\u7531\u98CE\u683C\u5B8C\u6210\u4E4B\u540E\uFF0C\u6765\u5230\u6D41\u6C34\u7EBF\u7684\u914D\u7F6E\u4E8B\u5B9E\u4E0A\u5DF2\u7ECF\u975E\u5E38\u7B80\u5355\u4E86\uFF0C\u4E3B\u9898\u6838\u5FC3\u4EE3\u7801\u53D8\u5316\u4E0D\u591A\uFF0C\u53EA\u9700\u8981\u9075\u7167\u6D41\u6C34\u7EBF\u7684\u8BED\u6CD5\u5408\u7406\u914D\u7F6E\u4F7F\u7528\u5373\u53EF\uFF0C\u6240\u4EE5\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u76F4\u63A5\u5206\u4EAB\u4EE3\u7801\u51FA\u6765\u3002</p><h2 id="_1-\u57FA\u4E8Epipeline\u7684\u5B9A\u5236\u5316\u5355\u673A\u7248\u672C\u53D1\u5E03\u56DE\u6EDA\u914D\u7F6E\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u4E8Epipeline\u7684\u5B9A\u5236\u5316\u5355\u673A\u7248\u672C\u53D1\u5E03\u56DE\u6EDA\u914D\u7F6E\u7BA1\u7406" aria-hidden="true">#</a> 1\uFF0C\u57FA\u4E8Epipeline\u7684\u5B9A\u5236\u5316\u5355\u673A\u7248\u672C\u53D1\u5E03\u56DE\u6EDA\u914D\u7F6E\u7BA1\u7406</h2><p>\u4ECD\u65E7\u5728\u539F\u6765\u4EE3\u7801\u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C\u5C06\u90E8\u7F72\u65B9\u5F0F\u66F4\u6539\u4E3A\u6D41\u6C34\u7EBF\u98CE\u683C\uFF0C\u76EE\u524D\u5B9E\u9A8C\u505A\u4E0B\u6765\uFF0C\u4E0E\u4E0A\u8FB9\u81EA\u7531\u98CE\u683C\u5BF9\u6BD4\uFF0C\u5927\u6982\u6709\u5982\u4E0B\u51E0\u70B9\u4E0D\u540C\uFF1A</p><ul><li>1\uFF0C\u65F6\u95F4\u6233\u4E0D\u592A\u5BB9\u6613\u5B9A\u4E49\uFF0C\u4E0A\u8FB9\u65F6\u95F4\u6233\u4E5F\u53EA\u662F\u5728\u9879\u76EE\u7248\u672C\u76EE\u5F55\u5B9A\u4E49\u7684\u65F6\u5019\u4F7F\u7528\uFF0C\u80FD\u591F\u4FBF\u4E8E\u65E5\u5E38\u6392\u67E5\u786E\u8BA4\u7248\u672C\uFF0C\u4E0D\u8FC7\u73B0\u5728\u6D41\u6C34\u7EBF\u91CC\u8FB9\u65F6\u95F4\u6233\u4E0D\u592A\u5BB9\u6613\u5B9A\u4E49\u4E86\uFF0C\u5C31\u5E72\u6389\u4E86\u65F6\u95F4\u6233\u4E3A\u524D\u7F00\uFF0C\u66F4\u6539\u4E3A\u9879\u76EE\u540D\u4F5C\u4E3A\u7248\u672C\u7684\u524D\u7F00\u3002</li><li>2\uFF0C\u76EE\u524D\u6765\u770B\u6D41\u6C34\u7EBF\u4E2D\u901A\u8FC7cat\u5199\u5165\u811A\u672C\u4E0D\u662F\u5341\u5206\u7406\u60F3\uFF0C\u4E8E\u662F\u8FD9\u4E2A\u811A\u672C\u56FA\u5B9A\u653E\u5728\u4E86\u9879\u76EE\u5DE5\u4F5C\u76EE\u5F55\u3002</li><li>3\uFF0C\u5176\u4ED6\u57FA\u672C\u4E00\u6837\uFF0C\u90E8\u7F72\u4E5F\u662F\u4E00\u6837\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u90FD\u91C7\u7528\u624B\u52A8\u90E8\u7F72\u7684\u65B9\u5F0F\uFF0C\u90E8\u7F72\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u586B\u5165\u5C06\u8981\u6784\u5EFA\u7684\u5206\u652F\uFF0C\u76F4\u63A5\u586B\u5165\u5373\u53EF\u89E6\u53D1\u6784\u5EFA\u3002</li><li>4\uFF0C\u5173\u4E8E\u81EA\u52A8\u6784\u5EFA\uFF0C\u53EF\u4EE5\u5728\u6D4B\u8BD5\u73AF\u5883\u5F15\u7528\uFF0C\u4E0D\u5EFA\u8BAE\u5728\u7EBF\u4E0A\u73AF\u5883\u4E2D\u5F15\u7528\u3002</li></ul><p><code>Jenkinsfile\u5185\u5BB9\uFF1A</code></p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>pipeline <span class="token punctuation">{</span>
    agent any
    environment <span class="token punctuation">{</span>
        project<span class="token operator">=</span><span class="token string gstring">&quot;admin-pipeline&quot;</span>
        git_url <span class="token operator">=</span> <span class="token string gstring">&quot;git@10.3.0.42:jenkins-learn/breeze-college.git&quot;</span>
        remote_port<span class="token operator">=</span><span class="token string gstring">&quot;22&quot;</span>
        remote_user<span class="token operator">=</span><span class="token string gstring">&quot;root&quot;</span>
        remote_ip<span class="token operator">=</span><span class="token string gstring">&quot;10.3.0.42&quot;</span>
        project_dir<span class="token operator">=</span><span class="token string gstring">&quot;/data/www/<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>project<span class="token punctuation">}</span></span>&quot;</span>
        version_dir<span class="token operator">=</span><span class="token string gstring">&quot;/release/<span class="token expression"><span class="token punctuation">$</span>project</span>/<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>project<span class="token punctuation">}</span></span>_<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>BUILD_ID<span class="token punctuation">}</span></span>&quot;</span>
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
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B9A\u4E49\u7248\u672C\u7BA1\u7406\u811A\u672C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps<span class="token punctuation">{</span>
                script<span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
sh <span class="token string">&#39;&#39;&#39;                        
cat &gt; keepfive.sh &lt;&lt; &#39;EOF&#39;
file_path=&quot;/release/admin-pipeline&quot;
while true;do
A=\`ls \${file_path} | wc -l\`
B=\`ls -lrX \${file_path} | tail -n 1 | awk &#39;{print $9}&#39;\`
if [ $A -gt 5 ];then rm -rf \${file_path}/$B;else break;fi;done
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
                script <span class="token punctuation">{</span>
                    <span class="token function">ansiColor</span><span class="token punctuation">(</span><span class="token string">&#39;xterm&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        sh <span class="token string">&#39;&#39;&#39;
                        echo &quot;\u521B\u5EFA\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u7684\u7248\u672C\u76EE\u5F55 \uFF1A\${version_dir}&quot;
                        ssh -p $remote_port $remote_user@$remote_ip &quot;mkdir -p \${version_dir}&quot;
                        [ $? != 0 ] &amp;&amp; echo &quot;\u8BF7\u6CE8\u610F\uFF0C\u5728\u521B\u5EFA\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u7684\u7248\u672C\u76EE\u5F55\u65F6\u51FA\u9519\uFF0C\u6545\u800C\u9000\u51FA\u6784\u5EFA\uFF0C\u53EF\u8054\u7CFB\u8FD0\u7EF4\u540C\u5B66\u5904\u7406\uFF01&quot; &amp;&amp; exit 1
                        echo &quot;\u5C06\u4EE3\u7801\u540C\u6B65\u5230\u8FDC\u7A0B\u4E3B\u673A\u7248\u672C\u76EE\u5F55&quot;
                        rsync -az -e &quot;ssh -p $remote_port&quot; --exclude=&#39;Jenkinsfile&#39; --exclude=&#39;keepfive.sh&#39; --delete \${WORKSPACE}/  $remote_user@$remote_ip:$version_dir/
                        [ $? != 0 ] &amp;&amp; echo &quot;\u8BF7\u6CE8\u610F\uFF0C\u5728\u6267\u884C\u540C\u6B65\u4EE3\u7801\u5230\u7248\u672C\u76EE\u5F55\u65F6\u51FA\u9519\uFF0C\u6545\u800C\u9000\u51FA\u6784\u5EFA\uFF0C\u53EF\u8054\u7CFB\u8FD0\u7EF4\u540C\u5B66\u5904\u7406\uFF01&quot; &amp;&amp; exit 1
                        echo &quot;\u5C06\u4EE3\u7801\u540C\u6B65\u5230\u8FDC\u7A0B\u4E3B\u673A\u7248\u672C\u76EE\u5F55\u6210\u529F\uFF01&quot;
                        echo &quot;\u5C06\u9879\u76EE\u90E8\u7F72\u5230\u751F\u4EA7\u76EE\u5F55&quot;
                        ssh -p $remote_port $remote_user@$remote_ip &quot;ln -snf $version_dir $project_dir&quot;
                        [ $? != 0 ] &amp;&amp; echo &quot;\u8BF7\u6CE8\u610F\uFF0C\u5728\u5C06\u9879\u76EE\u90E8\u7F72\u5230\u751F\u4EA7\u76EE\u5F55\u65F6\u51FA\u9519\uFF0C\u6545\u800C\u9000\u51FA\u6784\u5EFA\uFF0C\u53EF\u8054\u7CFB\u8FD0\u7EF4\u540C\u5B66\u5904\u7406\uFF01&quot; &amp;&amp; exit 1
                        echo &quot;\u5C06\u9879\u76EE\u90E8\u7F72\u5230\u751F\u4EA7\u76EE\u5F55\u6210\u529F\uFF01&quot;
                        echo &quot;\u4F7F\u7248\u672C\u76EE\u5F55\u4FDD\u6301\u4E94\u4E2A\u7248\u672C\u5386\u53F2&quot;
                        ssh -p $remote_port $remote_user@$remote_ip sh &lt; keepfive.sh
                        [ $? != 0 ] &amp;&amp; echo &quot;\u8BF7\u6CE8\u610F\uFF0C\u5728\u6267\u884C\u7248\u672C\u6E05\u7406\u65F6\u51FA\u9519\uFF0C\u5C06\u4F1A\u5F71\u54CD\u56DE\u6EDA\uFF0C\u6545\u800C\u9000\u51FA\u6784\u5EFA\uFF0C\u53EF\u8054\u7CFB\u8FD0\u7EF4\u540C\u5B66\u5904\u7406\uFF01&quot; &amp;&amp; exit 1
                        echo &quot;\u6267\u884C\u7248\u672C\u6E05\u7406\u6210\u529F\uFF01&quot;
                        echo &quot;\u540C\u6B65\u7248\u672C\u53F7\u5230\u672C\u5730&quot;
                        [ ! -d /root/.jenkins/version/$project ] &amp;&amp; mkdir -p /root/.jenkins/version/$project
                        ssh -p $remote_port $remote_user@$remote_ip &quot;ls /release/$project&quot; &gt; /root/.jenkins/version/$project/version.log
                        echo &quot;============&quot;
                        echo &quot;\u4E0A\u7EBF\u90E8\u7F72\u5B8C\u6210\uFF01&quot;
                        echo &quot;============&quot;
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
                script <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        sh <span class="token string">&#39;&#39;&#39;
                            if [ \${version_id} == &quot;0&quot; ];then
                                echo &quot;\u9009\u62E9\u56DE\u6EDA\u7684\u7248\u672C\u662F\u9ED8\u8BA4\uFF0C\u5C06\u56DE\u6EDA\u5230\u4E0A\u6B21\u5236\u54C1\uFF0C\u56DE\u6EDA\u5373\u5C06\u8FDB\u884C...&quot;
                                Version=&quot;/release/$project/\`tail -n2 /root/.jenkins/version/$project/version.log | head -n1\`&quot;
                                ssh -p $remote_port $remote_user@$remote_ip &quot;ln -snf $Version $project_dir&quot;
                                [ $? != 0 ] &amp;&amp; echo &quot;\u8BF7\u6CE8\u610F\uFF0C\u5728\u6267\u884C\u56DE\u6EDA\u65F6\u51FA\u9519\uFF0C\u6545\u800C\u9000\u51FA\u6784\u5EFA\uFF0C\u53EF\u7ACB\u5373\u8054\u7CFB\u8FD0\u7EF4\u540C\u5B66\u5904\u7406\uFF01&quot; &amp;&amp; exit 1
                                echo &quot;==============&quot;
                                echo &quot;\u9879\u76EE\u5DF2\u56DE\u6EDA\u5B8C\u6210\uFF01&quot;
                                echo &quot;==============&quot;
                            else
                                echo &quot;\u9009\u62E9\u56DE\u6EDA\u7684\u7248\u672C\u662F\uFF1A\${version_id}\uFF0C\u5C06\u56DE\u6EDA\u5230 \${version_id} \u7684\u5236\u54C1\uFF0C\u56DE\u6EDA\u5373\u5C06\u8FDB\u884C...&quot;
                                Version=&quot;/release/$project/\`grep &quot;_$version_id&quot; /root/.jenkins/version/$project/version.log\`&quot;
                                ssh -p $remote_port $remote_user@$remote_ip &quot;ln -snf $Version $project_dir&quot;
                                [ $? != 0 ] &amp;&amp; echo &quot;\u8BF7\u6CE8\u610F\uFF0C\u5728\u6267\u884C\u56DE\u6EDA\u65F6\u51FA\u9519\uFF0C\u6545\u800C\u9000\u51FA\u6784\u5EFA\uFF0C\u53EF\u7ACB\u5373\u8054\u7CFB\u8FD0\u7EF4\u540C\u5B66\u5904\u7406\uFF01&quot; &amp;&amp; exit 1
                                echo &quot;\u9879\u76EE\u56DE\u6EDA\u5230 \${version_id} \u5B8C\u6210\uFF01&quot;
                            fi
                        &#39;&#39;&#39;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        echo <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>err<span class="token punctuation">}</span></span>&quot;</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br></div></div><p>\u76EE\u524D\u91C7\u7528\u63A8\u9001\u4EE3\u7801\u81EA\u52A8\u6784\u5EFA\u7684\u65B9\u5F0F\uFF0C\u56DE\u6EDA\u7684\u65B9\u5F0F\u4E0E\u4E0A\u8FB9\u81EA\u7531\u98CE\u683C\u4E00\u81F4\u3002\u57FA\u672C\u4E0A\u5404\u4E2A\u6B65\u9AA4\u4E5F\u90FD\u8FD8\u6BD4\u8F83\u6E05\u6670\uFF0C\u8FD9\u91CC\u53EA\u662F\u628A\u4E3B\u4F53\u90E8\u7F72\u4E0E\u56DE\u6EDA\u7684\u6B65\u9AA4\u7ED9\u5B9A\u4E49\u4E86\uFF0C\u5982\u679C\u81EA\u5DF1\u751F\u4EA7\u5F53\u4E2D\u8FD8\u6709\u5176\u4ED6\u7684\u573A\u666F\uFF0C\u53EF\u4EE5\u81EA\u884C\u914D\u7F6E\u6DFB\u52A0\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/a033d9432fa73296.jpg" alt="img"></p><p>\u540E\u6765\u53C8\u5728\u4E00\u4E2A\u5730\u65B9\u5B66\u5230\u4E86\u65F6\u95F4\u6233\u7684\u5B9A\u4E49\u65B9\u5F0F\uFF0C\u771F\u6B63\u4F7F\u7528\u8D77\u6765\uFF0C\u4F3C\u4E4E\u4E5F\u5E76\u4E0D\u590D\u6742\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token keyword">def</span> <span class="token function">createVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;yyyyMMddHHmmss&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string gstring">&quot;_<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>env<span class="token punctuation">.</span>BUILD_ID<span class="token punctuation">}</span></span>&quot;</span>
<span class="token punctuation">}</span>
pipeline <span class="token punctuation">{</span>
    agent any
    environment <span class="token punctuation">{</span>
        _version <span class="token operator">=</span> <span class="token function">createVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        stage <span class="token punctuation">(</span><span class="token string gstring">&quot;test&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo <span class="token punctuation">$</span><span class="token punctuation">{</span>_version<span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5982\u679C\u5F15\u7528\u8FD9\u4E00\u53D8\u91CF\uFF0C\u53EA\u9700\u8C03\u6574\u4E00\u4E0B\u4E0A\u8FB9\u811A\u672C\u5F15\u7528\u7684\u53D8\u91CF\u5373\u53EF\u3002</p><h2 id="_2-\u57FA\u4E8Epipeline\u7ED3\u5408ansible\u7684\u591A\u4E3B\u673A\u6279\u91CF\u53D1\u5E03\u56DE\u6EDA\u914D\u7F6E\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u4E8Epipeline\u7ED3\u5408ansible\u7684\u591A\u4E3B\u673A\u6279\u91CF\u53D1\u5E03\u56DE\u6EDA\u914D\u7F6E\u7BA1\u7406" aria-hidden="true">#</a> 2\uFF0C\u57FA\u4E8Epipeline\u7ED3\u5408ansible\u7684\u591A\u4E3B\u673A\u6279\u91CF\u53D1\u5E03\u56DE\u6EDA\u914D\u7F6E\u7BA1\u7406</h2><p>\u6D41\u6C34\u7EBF\u4F1A\u6D89\u53CA\u5230\u66F4\u591A\u5185\u5BB9\uFF0C\u811A\u672C\u5982\u4E0B\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token keyword">def</span> <span class="token function">createVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B9A\u4E49\u7248\u672C\u7BA1\u7406\u811A\u672C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps<span class="token punctuation">{</span>
                script<span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
sh <span class="token string">&#39;&#39;&#39;                        
cat &gt; keepfive.sh &lt;&lt; &#39;EOF&#39;
file_path=&quot;/release/admin-pipeline&quot;
while true;do
A=\`ls \${file_path} | wc -l\`
B=\`ls -lrX \${file_path} | tail -n 1 | awk &#39;{print $9}&#39;\`
if [ $A -gt 5 ];then rm -rf \${file_path}/$B;else break;fi;done
EOF
&#39;&#39;&#39;</span>                      
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
cat &gt; hosts.ini &lt;&lt; EOF
[remote]
10.3.9.32 ansible_port=34222
10.3.20.4 ansible_port=34222
EOF
else
cat &gt; hosts.ini &lt;&lt; EOF
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
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B9A\u4E49\u90E8\u7F72\u5267\u672C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps<span class="token punctuation">{</span>
                script<span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
sh <span class="token string">&#39;&#39;&#39;                        
cat &gt; deploy.yml &lt;&lt; EOF
---
- hosts: &quot;remote&quot;
  remote_user: root
  tasks:
    - name: &quot;\u521B\u5EFA\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u7684\u7248\u672C\u76EE\u5F55&quot;
      file: path=/release/\${project}/\${_version} state=directory
    - name: &quot;\u5C06\u4EE3\u7801\u540C\u6B65\u5230\u8FDC\u7A0B\u4E3B\u673A\u7248\u672C\u76EE\u5F55&quot;
      synchronize: 
        src: \${WORKSPACE}/ 
        dest: /release/\${project}/\${_version}/  
        rsync_opts: --exclude-from=excludefile
    - name: &quot;\u5C06\u9879\u76EE\u90E8\u7F72\u5230\u751F\u4EA7\u76EE\u5F55&quot;
      file: path=/data/www/\${project} state=link src=/release/\${project}/\${_version}
    - name: &quot;\u4F7F\u7248\u672C\u76EE\u5F55\u4FDD\u6301\u4E94\u4E2A\u7248\u672C\u5386\u53F2&quot;
      script: keepfive.sh
    - name: &quot;\u751F\u6210\u8FDC\u7A0B\u7248\u672C\u53F7&quot;
      shell: &quot;ls /release/\${project} &gt; /release/version.log&quot;
    - name: &quot;\u540C\u6B65\u7248\u672C\u53F7\u5230\u672C\u5730&quot;
      synchronize: &quot;src=/release/version.log dest=/root/.jenkins/version/\${project}/version.log mode=pull&quot;
EOF
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
hosts.ini
deploy.yml
Jenkinsfile
keepfive.sh
excludefile
rollback.yml
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
                script <span class="token punctuation">{</span>                    
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        sh <span class="token string">&#39;&#39;&#39;
                        ansible-playbook -i hosts.ini deploy.yml
                        &#39;&#39;&#39;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        echo <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>err<span class="token punctuation">}</span></span>&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;\u56DE\u6EDA&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                environment name<span class="token punctuation">:</span> <span class="token string">&#39;mode&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">:</span> <span class="token string">&#39;rollback&#39;</span>
            <span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span>
                script <span class="token punctuation">{</span>
                    <span class="token keyword">try</span><span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span>version_id <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>                        
                            sh <span class="token string">&#39;&#39;&#39;
                                echo &quot;\u9009\u62E9\u56DE\u6EDA\u7684\u7248\u672C\u662F\u9ED8\u8BA4\uFF0C\u5C06\u56DE\u6EDA\u5230\u4E0A\u6B21\u5236\u54C1\uFF0C\u56DE\u6EDA\u5373\u5C06\u8FDB\u884C...&quot;
                                Version=&quot;/release/$project/\`tail -n2 /root/.jenkins/version/$project/version.log | head -n1\`&quot;
cat &gt; rollback.yml &lt;&lt; EOF
---
- hosts: &quot;remote&quot;
  remote_user: root
  tasks:
    - name: &quot;\u5C06\u9879\u76EE\u56DE\u6EDA\u5230\u5BF9\u5E94\u671F\u671B\u7684\u6784\u5EFA&quot;
      file: path=/data/www/\${project} state=link src=\${Version}
EOF
                                ansible-playbook -i hosts.ini rollback.yml
                                echo &quot;==============&quot;
                                echo &quot;\u9879\u76EE\u5DF2\u56DE\u6EDA\u5B8C\u6210\uFF01&quot;
                                echo &quot;==============&quot;
                                &#39;&#39;&#39;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>
                            sh <span class="token string">&#39;&#39;&#39;
                                echo &quot;\u9009\u62E9\u56DE\u6EDA\u7684\u7248\u672C\u662F\uFF1A\${version_id}\uFF0C\u5C06\u56DE\u6EDA\u5230 \${version_id} \u7684\u5236\u54C1\uFF0C\u56DE\u6EDA\u5373\u5C06\u8FDB\u884C...&quot;
                                Version=&quot;/release/$project/\`grep &quot;_$version_id&quot; /root/.jenkins/version/$project/version.log\`&quot;
cat &gt; rollback.yml &lt;&lt; EOF
---
- hosts: &quot;remote&quot;
  remote_user: root
  tasks:
    - name: &quot;\u5C06\u9879\u76EE\u56DE\u6EDA\u5230\u5BF9\u5E94\u671F\u671B\u7684\u6784\u5EFA&quot;
      file: path=/data/www/\${project} state=link src=\${Version}
EOF
                                ansible-playbook -i hosts.ini rollback.yml
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br></div></div><p>\u4F9D\u65E7\u662F\u628A\u6240\u6709\u5185\u5BB9\u90FD\u96C6\u6210\u5728\u4E00\u4E2A\u811A\u672C\u5F53\u4E2D\uFF0C\u65B9\u4FBF\u6574\u4F53\u7EF4\u62A4\u7BA1\u7406\u3002</p><h2 id="_3-\u4F18\u5316\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u4F18\u5316\u65B9\u6848" aria-hidden="true">#</a> 3\uFF0C\u4F18\u5316\u65B9\u6848</h2><p>\u5728\u5B8C\u6210\u8FD9\u4E2A\u5B9E\u9A8C\u4E4B\u540E\uFF0C\u6211\u53C8\u7EE7\u7EED\u524D\u8FDB\uFF0C\u5C06\u811A\u672C\u5F53\u4E2D\u7528\u5230\u7684ansible\u5267\u672C\u8FDB\u884C\u4E86\u4E00\u6CE2\u4F18\u5316\u8C03\u6574\uFF0C\u4EE5\u7B80\u5316\u811A\u672C\u5F53\u4E2D\u7684\u5185\u5BB9\uFF0C\u8BA9\u5267\u672C\u517C\u5BB9\u66F4\u591A\u7684\u9879\u76EE\u6784\u5EFA\uFF0C\u4ECE\u800C\u8FBE\u5230\u591A\u7528\uFF0C\u590D\u7528\u7684\u76EE\u5F55\uFF0C\u65B0\u7684\u601D\u8DEF\u4E5F\u5DF2\u7ECF\u6574\u7406\u6210\u6587\u7AE0\uFF0C\u53EF\u4EE5\u76F4\u63A5\u70B9\u51FB\u4E0B\u8FB9\u6587\u7AE0\u8DF3\u8F6C\u3002</p>`,17),k={href:"https://wiki.eryajf.net/pages/3512.html",target:"_blank",rel:"noopener noreferrer"},b=l(" Jenkins-pipeline\u5B66\u4E60\u7B14\u8BB0\u2013pipeline\u7ED3\u5408ansible\u5267\u672C\u8FDB\u884C\u6279\u91CF\u7684\u90E8\u7F72\u4E0E\u56DE\u6EDA\u914D\u7F6E |\u5750\u800C\u8A00\u4E0D\u5982\u8D77\u800C\u884C\uFF01 \u4E8C\u4E2B\u8BB2\u68B5");function m(g,d){const s=a("ExternalLinkIcon");return p(),t(o,null,[r,n("p",null,[n("a",k,[b,e(s)])])],64)}var _=u(i,[["render",m]]);export{_ as default};
