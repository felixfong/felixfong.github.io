import{r as o,o as r,c,b as s,a,F as i,d as n,e as t}from"./app.dbf5d933.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const p={},u=s("hr",null,null,-1),d=s("h2",{id:"_0-\u524D\u8A00",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_0-\u524D\u8A00","aria-hidden":"true"},"#"),n(" 0. \u524D\u8A00")],-1),h=n("\u200B \u73B0\u5982\u4ECA\uFF0C\u6211\u4EEC\u5F88\u591A\u516C\u53F8\u90FD\u4F1A\u5C06\u4EE3\u7801\u6258\u7BA1\u5728\u81EA\u5EFA\u7684GitLab\u4ED3\u5E93\u4E2D\uFF0C\u5F88\u9002\u5408\u56E2\u961F\u534F\u4F5C\u3002\u4F46\u968F\u4E4B\u800C\u6765\u7684\u8FD9\u79CD\u5F00\u6E90\u7248\u672C\u7684\u5DE5\u5177\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5B58\u5728\u7F3A\u9677\uFF0C\u6BD4\u5982"),_={href:"https://github.com/lu-you",target:"_blank",rel:"noopener noreferrer"},b=n("\u8BD7\u4EBA"),g=n("\u4ECA\u5929\u8981\u6298\u817E\u7684SourceGraph\u8FD9\u4E2A\u5DE5\u5177\uFF0C\u5C31\u662F\u6765\u89E3\u51B3\u5F00\u6E90\u7248\u672CGitLab\u4E0D\u652F\u6301\u7684\u5168\u5C40\u68C0\u7D22\u529F\u80FD\u3002"),m=s("h2",{id:"_1-\u5B89\u88C5\u90E8\u7F72sourcegraph",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-\u5B89\u88C5\u90E8\u7F72sourcegraph","aria-hidden":"true"},"#"),n(" 1. \u5B89\u88C5\u90E8\u7F72SourceGraph")],-1),k=n("\u200B "),f={href:"https://docs.sourcegraph.com/?_ga=2.180805039.92929300.1636808002-910905162.1635833823",target:"_blank",rel:"noopener noreferrer"},x=n("\u90E8\u7F72\u53C2\u8003\u94FE\u63A5"),q=s("h3",{id:"_1-1-\u5B89\u88C5\u90E8\u7F72",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-1-\u5B89\u88C5\u90E8\u7F72","aria-hidden":"true"},"#"),n(" 1.1 \u5B89\u88C5\u90E8\u7F72")],-1),v=n("\u76F4\u63A5\u6309\u7167\u5B98\u65B9\u64CD\u4F5C\u50BB\u74DC\u5F0F\u5B89\u88C5\uFF0C\u4EE5\u4E0B\u5B89\u88C5\u662F\u4E3A\u4E86\u5FEB\u901F\u4F53\u9A8C\u7279\u6027\uFF0C\u5B98\u65B9\u63A8\u8350\u751F\u4EA7\u90E8\u7F72\u91C7\u7528docker-compose\u6216\u8005\u76F4\u63A5\u90E8\u7F72\u5728k8s\u4E2D\uFF0C"),G={href:"https://docs.sourcegraph.com/admin/install",target:"_blank",rel:"noopener noreferrer"},y=n("\u53C2\u8003"),L=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -d --publish <span class="token number">7080</span>:7080 --publish <span class="token number">127.0</span>.0.1:3370:3370 --rm --volume ~/.sourcegraph/config:/etc/sourcegraph --volume ~/.sourcegraph/data:/var/opt/sourcegraph sourcegraph/server:3.33.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>--publish\u5C31\u662F\u6211\u4EEC\u5927\u5BB6\u4E60\u60EF\u7684\u66B4\u9732\u7AEF\u53E3\u7684-p\u54E6</code></p><p><code>7080\u662F\u8BBF\u95EEsourceGraph\u670D\u52A1\u7AEF\u53E3\uFF0C3370\u662FGrafana\u7684\u7AEF\u53E3</code></p><h3 id="_1-2-\u914D\u7F6Enginx\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_1-2-\u914D\u7F6Enginx\u4EE3\u7406" aria-hidden="true">#</a> 1.2 \u914D\u7F6ENginx\u4EE3\u7406</h3><p>\u200B \u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u914D\u7F6ENginx\u6765\u5C06\u5176\u670D\u52A1\u8FDB\u884C\u4EE3\u7406\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u8BBF\u95EE\u672C\u673Ahttp://x.x.x.x:7080;</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location  / <span class="token punctuation">{</span>
        proxy_set_header session-name <span class="token variable">$http_session</span>-name<span class="token punctuation">;</span>
        proxy_set_header userId <span class="token variable">$http_userId</span><span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
        proxy_set_header X-Forwarded-For <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_pass http://10.6.6.26:7080<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_1-3-\u8BBF\u95EE\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_1-3-\u8BBF\u95EE\u9875\u9762" aria-hidden="true">#</a> 1.3 \u8BBF\u95EE\u9875\u9762</h3><p>\u200B \u8BBF\u95EE\u5982\u4E0B\u4EE3\u8868\u6210\u529F\uFF0C\u9996\u6B21\u8FDB\u5165\u662F\u53EF\u4EE5\u6CE8\u518C\u4E00\u4E2A\u7BA1\u7406\u5458\u8EAB\u4EFD\u5FEB\u901F\u4F53\u9A8C\uFF0C\u6309\u9875\u9762\u63D0\u793A\u64CD\u4F5C\u5373\u53EF\u3002</p><p>\u200B <img src="http://t.eryajf.net/imgs/2021/11/1972ab50a62d3e8c.png" alt=""></p><h2 id="_2-\u914D\u7F6E-sourcegraph-\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E-sourcegraph-\u7F51\u7AD9" aria-hidden="true">#</a> 2. \u914D\u7F6E Sourcegraph \u7F51\u7AD9</h2><h3 id="_2-1-\u914D\u7F6E\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-1-\u914D\u7F6E\u4ED3\u5E93" aria-hidden="true">#</a> 2.1 \u914D\u7F6E\u4ED3\u5E93</h3><p>\u5165\u53E3\uFF1A<code>Site admin</code> &gt; <code>Repositories</code> &gt; <code>Manage code hosts</code></p><p><img src="http://t.eryajf.net/imgs/2021/11/b806cc3a76bd4daa.png" alt=""></p><h3 id="_2-2-\u914D\u7F6Egitlab\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-2-\u914D\u7F6Egitlab\u4ED3\u5E93" aria-hidden="true">#</a> 2.2 \u914D\u7F6EGitLab\u4ED3\u5E93</h3>`,14),S=n("\u70B9\u51FB\u4E0A\u56FE\u4E2D"),I=s("code",null,"GitLab Self-Managed",-1),j=n("\uFF0C\u4E0B\u56FE\u4E2D\u7684\u914D\u7F6E\u53C2\u8003"),N={href:"https://docs.sourcegraph.com/admin/external_service/gitlab",target:"_blank",rel:"noopener noreferrer"},R=n("\u5B98\u7F51"),$=n("\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801SourceGraph\u672C\u8EAB\u63D0\u4F9B\u7ED9\u4E86\u6211\u4EEC\uFF0C\u8FD9\u70B9\u8FD8\u662F\u5F88\u4E0D\u9519\u7684\uFF0C\u56E0\u4E3A\u4ED6\u7684\u5B98\u65B9\u6587\u6863\u5199\u7684\u5F88\u751F\u786C\uFF1B\u5F53\u6211\u4EEC\u70B9\u51FB\u4E86"),A=s("code",null,"GitLab Self-Managed",-1),D=n("\u4E4B\u540E,\u4F1A\u51FA\u73B0\u5982\u4E0B\u56FE\u4E2D\u753B\u5708\u7684\u90E8\u5206\uFF0C\u4F60\u60F3\u8981\u6DFB\u52A0\u90A3\u79CD\u7C7B\u578B\u7684\u4ED3\u5E93\uFF0C\u90FD\u53EF\u4EE5\u76F4\u63A5\u751F\u6210\u4EE3\u7801\uFF0C\u5B8C\u4E8B\u540E\u6DFB\u52A0\u5373\u53EF\uFF0C\u7B49\u5F85\u5176\u540C\u6B65\u5B8C\u6210\u3002"),E=n("\u200B \u521B\u5EFAgitlab\u7684token\u53C2\u8003"),F={href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#creating-a-personal-access-token",target:"_blank",rel:"noopener noreferrer"},P=n("\u94FE\u63A5"),U=n("\uFF0C\u5EFA\u8BAE\u6388\u6743\u8303\u56F4\u8BBE\u7F6E\u4E3Aread_user, read_api, read_repository"),V=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
<span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://&lt;\u4F60\u7684gitlab\u57DF\u540D&gt;&quot;</span>,
<span class="token string">&quot;token&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;access token&gt;&quot;</span>,
<span class="token string">&quot;projectQuery&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
 <span class="token string">&quot;projects?membership=true&amp;archived=no&quot;</span>
<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="http://t.eryajf.net/imgs/2021/11/53a2c5c768715977.png" alt=""></p>`,2),B=n("\u82E5\u4F60\u914D\u7F6E\u4E86 GitLab \u6388\u6743\u767B\u5F55\uFF08"),M={href:"https://github.com/lu-you",target:"_blank",rel:"noopener noreferrer"},T=n("\u8BD7\u4EBA"),X=n("\u4E0B\u6587\u5373\u5C06\u4ECB\u7ECD\uFF09\uFF0C\u5E0C\u671B"),w=s("strong",null,"\u67E5\u627E\u7684\u4ED3\u5E93\u6743\u9650\u80FD\u8DDF\u6388\u6743\u8D26\u53F7\u8D70",-1),C=n("\u3002\u53EF\u4EE5\u5728\u4ED3\u5E93\u914D\u7F6E\u4E2D\u52A0\u5165 "),z=s("code",null,"Enforce permissions (OAuth)",-1),H=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;authorization&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;identityProvider&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;oauth&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-3-\u914D\u7F6Egitlab\u6388\u6743\u8BBF\u95EEsourcegraph" tabindex="-1"><a class="header-anchor" href="#_2-3-\u914D\u7F6Egitlab\u6388\u6743\u8BBF\u95EEsourcegraph" aria-hidden="true">#</a> 2.3 \u914D\u7F6EGitLab\u6388\u6743\u8BBF\u95EESourceGraph</h3>`,2),O=n("SourceGraph\u652F\u6301\u4E0EGitLab\u6743\u9650\u6253\u901A\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u4E0D\u9700\u8981\u81EA\u5DF1\u7EF4\u62A4\u7528\u6237\u89C4\u5219\uFF0C\u5168\u90E8\u91C7\u7528GitLab\u7684\u6743\u9650\uFF0C\u5373\u4F7FGitLab\u662F\u901A\u8FC7Ldap\uFF0C\u4E14\u7EE7\u627F\u7528\u6237\u6240\u7528\u7684\u7684\u6743\u9650\uFF0C\u6240\u4EE5\u5728\u4EE3\u7801\u68C0\u7D22\u65F6\u8BF7\u6CE8\u610F\uFF0C\u53EA\u80FD\u641C\u7D22\u81EA\u5DF1\u6709\u6743\u9650\u7684\u4ED3\u5E93\u3002\u914D\u7F6E\u53C2\u8003"),Q={href:"https://docs.sourcegraph.com/admin/auth",target:"_blank",rel:"noopener noreferrer"},J=n("\u5B98\u7F51\u94FE\u63A5"),K=n("\uFF0C\u8FD8\u652F\u6301\u5F88\u591A\u79CD\u8BA4\u8BC1\u65B9\u5F0F\u3002"),W=s("p",null,[n("\u5165\u53E3\uFF1A"),s("code",null,"Site admin"),n(" > "),s("code",null,"Configuration"),n(" > "),s("code",null,"Site configuration")],-1),Y=s("h3",{id:"_2-3-1-\u914D\u7F6Egitlab\u7684\u6388\u6743\u5E94\u7528\u7A0B\u5E8F",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-3-1-\u914D\u7F6Egitlab\u7684\u6388\u6743\u5E94\u7528\u7A0B\u5E8F","aria-hidden":"true"},"#"),n(" 2.3.1 \u914D\u7F6Egitlab\u7684\u6388\u6743\u5E94\u7528\u7A0B\u5E8F\uFF0C")],-1),Z=n("\u53C2\u8003"),ss={href:"https://docs.gitlab.com/ee/integration/oauth_provider.html",target:"_blank",rel:"noopener noreferrer"},ns=n("GitLab\u6388\u6743\u94FE\u63A5"),es={class:"custom-container tip"},as=s("p",{class:"custom-container-title"},"TIP",-1),ts=s("li",null,"\u5728 GitLab \u53F3\u4E0A\u89D2\u9009\u62E9\u4F60\u7684\u5934\u50CF",-1),os=s("li",null,"\u9009\u62E9 Settings \uFF08\u6216\u662F Edit profile\uFF09",-1),rs=s("li",null,"\u5728\u5DE6\u4FA7\u8FB9\u680F\u9009\u62E9 Applications",-1),cs=s("li",null,"\u8F93\u5165 Name\uFF0CRedirect URI\uFF0CScopes(\u6388\u6743\u8303\u56F4\u8BBE\u7F6E\u4E3Aapi\u3001read_user)\u3002Redirect URI\u662F\u7528\u6237\u6388\u6743\u56DE\u8C03\u7684\u5730\u5740\uFF0C\u5F62\u5982\uFF1Ahttp://sgdev2.example.com/.auth/gitlab/callback,\u4EC5\u4EC5\u66FF\u6362\u57DF\u540D\u5373\u53EF \u70B9\u51FB\u4FDD\u5B58\uFF0C\u5C31\u80FD\u770B\u5230 Application ID \u548C Secret\u3002",-1),is=n("\u6B64\u5904\u7684\u5C0F\u5751\uFF0C"),ls={href:"https://github.com/lu-you",target:"_blank",rel:"noopener noreferrer"},ps=n("\u8BD7\u4EBA"),us=n("\u662F\u91C7\u7528nginx\u4EE3\u7406\u7684\uFF0C\u6240\u4EE5\u6211\u7684443\u662F\u5728nginx\u4E0A\uFF0C\u771F\u6B63\u7684sourceGraph\u662F\u6CA1\u6709https\u7684\uFF0C\u6545\u56DE\u8C03url\u4E0D\u8981\u586B\u5199https"),ds=n("\u5982\u4E0B\u56FE\uFF0C\u4FBF\u662F"),hs={href:"https://github.com/lu-you",target:"_blank",rel:"noopener noreferrer"},_s=n("\u8BD7\u4EBA"),bs=n("\u914D\u7F6E\u597D\u7684GitLab\u7684"),gs=t(`<p><img src="http://t.eryajf.net/imgs/2021/11/e6c9dd8373e9fd2d.png" alt=""></p><p>\u7136\u540E\uFF0C\u56DE\u5230 sourcegraph \u7F51\u7AD9\u7AD9\u70B9\u8FDB\u884C\u914D\u7F6E\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u5728\u4F60\u7684 sourcegraph \u7AD9\u70B9\u7684\u53F3\u4E0A\u89D2\u9009\u62E9\u4F60\u7684\u5934\u50CF</li><li>\u9009\u62E9 Site admin</li><li>\u5728\u5DE6\u4FA7\u8FB9\u680F\u9009\u62E9 Site configuration</li><li>\u70B9\u51FB Add GitLab sign-in\uFF0C\u4F1A\u81EA\u52A8\u6DFB\u52A0\u5982\u4E0B\u6388\u6743\u4EE3\u7801\u3002</li></ol></div><p>\u5F53\u7136\uFF0C\u6B64\u5904sourceGraph\u4E5F\u662F\u6709\u4EE3\u7801\u63D0\u793A,\u5982\u4E0B\u56FE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;auth.providers&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      // See https://docs.sourcegraph.com/admin/auth<span class="token comment">#gitlab for instructions</span>
      <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;gitlab&quot;</span>,
      <span class="token string">&quot;displayName&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;GitLab&quot;</span>,
      <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;GitLab URL&gt;&quot;</span>,
      <span class="token string">&quot;clientID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;client ID&gt;&quot;</span>,
      <span class="token string">&quot;clientSecret&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;client secret&gt;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="http://t.eryajf.net/imgs/2021/11/b806cc3a76bd4daa.png" alt=""></p><p><code>type</code> \u548C <code>displayName</code> \u4FDD\u6301\u9ED8\u8BA4\u3002<code>&lt;GitLab URL&gt;</code> \u6539\u4E3A\u4F60\u7684 GitLab \u5730\u5740\uFF0C<code>&lt;client ID&gt;</code> \u6539\u4E3A\u4E4B\u524D\u83B7\u5F97\u7684 <code>Application ID</code>\uFF0C<code>&lt;client secret&gt;</code> \u6539\u4E3A <code>Secret</code>\uFF0C\u4FDD\u5B58\u5373\u53EF\u3002</p><p>\u6B64\u65F6\u4F60\u9000\u51FA\uFF0C\u518D\u767B\u5F55\u5C31\u4F1A\u51FA\u73B0\uFF0CGitLab \u6388\u6743\u6309\u94AE\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/11/d738a813e448800e.png" alt=""></p><h2 id="_3-\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#_3-\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA" aria-hidden="true">#</a> 3. \u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA</h2>`,10),ms=n("\u200B sourceGraph\u662F\u652F\u6301\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u7684\uFF0C\u652F\u6301csv\u63D2\u4EF6\uFF0C"),ks={href:"https://sourcegraph.com/extensions/sourcegraph/search-export?_ga=2.173954603.92929300.1636808002-910905162.1635833823",target:"_blank",rel:"noopener noreferrer"},fs=n("\u914D\u7F6E\u53C2\u8003"),xs=s("h2",{id:"_4-\u5C0F\u7ED3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4-\u5C0F\u7ED3","aria-hidden":"true"},"#"),n(" 4. \u5C0F\u7ED3")],-1),qs=n("\u6309\u7406\u5B89\u88C5\u5B8C Sourcegraph\uFF0C\u8FDB\u884C\u4ED3\u5E93\u914D\u7F6E\u540E\uFF0C\u7AD9\u70B9\u5C31\u80FD\u6B63\u5E38\u6295\u5165\u4F7F\u7528\u4E86\u3002\u5173\u4E8E\u7528\u6237\u6388\u6743\uFF0C\u662F"),vs={href:"https://github.com/lu-you",target:"_blank",rel:"noopener noreferrer"},Gs=n("\u8BD7\u4EBA"),ys=n("\u7ECF\u5386\u4E00\u756A\u63A2\u7D22\u7684\u603B\u7ED3\uFF0C\u4E3A\u6709\u6B64\u9700\u6C42\u7684\u4EBA\u5728\u9605\u8BFB\u5B98\u65B9\u6587\u6863\u4E2D\u5373\u5C06\u9677\u5165\u8FF7\u832B\u63D0\u4F9B\u7684\u4E00\u4E2A\u63D0\u793A\u3002"),Ls=s("p",null,"\u6E29\u99A8\u63D0\u793A\uFF1A",-1),Ss=s("li",null,"\u82E5\u662F\u4F60\u901A\u8FC7 GitLab \u6388\u6743\u7BA1\u7406\u7528\u6237\uFF0C\u9700\u786E\u4FDD\u7F51\u7AD9\u7BA1\u7406\u5458\u4E3A\u4EE3\u7801\u4ED3\u5E93\u7684\u7BA1\u7406\u5458\uFF0C\u8FD9\u6837\u80FD\u4FDD\u8BC1\u7528\u6237\u7684\u641C\u7D22\u6C60\u5168\u9762\u3002",-1),Is=s("li",null,"\u514D\u8D39\u7248\u7684 Sourcegraph \u53EA\u80FD\u6CE8\u518C10\u4E2A\u7528\u6237\u54E6\uFF01",-1),js=s("li",null,"\u5347\u7EA7\u5E94\u8BE5\u5728 Sourcegraph \u7684\u8FDE\u7EED\u6B21\u8981\u7248\u672C\u4E4B\u95F4\u8FDB\u884C\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u6B63\u5728\u8FD0\u884CSourcegraph 3.1\uFF0C\u5E76\u4E14\u60F3\u8981\u5347\u7EA7\u52303.3\uFF0C\u5219\u5E94\u8BE5\u5148\u5347\u7EA7\u52303.2\uFF0C\u518D\u5347\u7EA7\u52303.3\u3002",-1),Ns=n("\u67E5\u8BE2\u8BED\u6CD5\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863\u54E6\uFF0C"),Rs={href:"https://docs.sourcegraph.com/code_search/reference/queries",target:"_blank",rel:"noopener noreferrer"},$s=n("\u67E5\u8BE2\u8BED\u6CD5"),As=n("\u5F53\u7136\u5982\u679C\u60A8\u89C9\u5F97\u9875\u9762\u67E5\u8BE2\u4E0D\u723D\uFF0Csource\u5B98\u65B9\u4E5F\u662F\u53EA\u5403\u4E86\u547D\u4EE4\u884C\u67E5\u8BE2\u5DE5\u5177\uFF0C\u4EC0\u4E48\u7248\u672C\u7684\u90FD\u652F\u6301\uFF0C\u53EF\u64CD\u8003\u5176github\u8FDB\u884C\u914D\u7F6E\uFF0C\u975E\u5E38\u7B80\u5355\uFF0C"),Ds={href:"https://github.com/lu-you",target:"_blank",rel:"noopener noreferrer"},Es=n("\u8BD7\u4EBA"),Fs=n("\u61D2\u5F97\u5199\u4E86\u3002"),Ps={href:"https://github.com/lu-you",target:"_blank",rel:"noopener noreferrer"},Us=n("\u8BD7\u4EBA"),Vs=n("\u5E73\u65F6\u559C\u6B22\u7528\u547D\u4EE4\u884C\uFF0C\u7136\u540E\u901A\u8FC7jq\u5DE5\u5177\u6765\u5904\u7406\u3002 "),Bs=n("\u5B98\u7F51api\u67E5\u8BE2\uFF0C"),Ms={href:"https://docs.sourcegraph.com/api/graphql",target:"_blank",rel:"noopener noreferrer"},Ts=n("\u94FE\u63A5"),Xs=n("\u5BA2\u6237\u7AEF\u914D\u7F6E\uFF0C"),ws={href:"https://github.com/sourcegraph/src-cli",target:"_blank",rel:"noopener noreferrer"},Cs=n("\u94FE\u63A5");function zs(Hs,Os){const e=o("ExternalLinkIcon");return r(),c(i,null,[u,d,s("p",null,[h,s("a",_,[b,a(e)]),g]),m,s("p",null,[k,s("a",f,[x,a(e)])]),q,s("p",null,[v,s("a",G,[y,a(e)])]),L,s("p",null,[S,I,j,s("a",N,[R,a(e)]),$,A,D]),s("p",null,[E,s("a",F,[P,a(e)]),U]),V,s("p",null,[B,s("a",M,[T,a(e)]),X,w,C,z]),H,s("p",null,[O,s("a",Q,[J,a(e)]),K]),W,Y,s("p",null,[Z,s("a",ss,[ns,a(e)])]),s("div",es,[as,s("ol",null,[ts,os,rs,cs,s("li",null,[is,s("a",ls,[ps,a(e)]),us])])]),s("p",null,[ds,s("a",hs,[_s,a(e)]),bs]),gs,s("p",null,[ms,s("a",ks,[fs,a(e)])]),xs,s("p",null,[qs,s("a",vs,[Gs,a(e)]),ys]),Ls,s("ul",null,[Ss,Is,js,s("li",null,[Ns,s("a",Rs,[$s,a(e)])]),s("li",null,[As,s("a",Ds,[Es,a(e)]),Fs,s("a",Ps,[Us,a(e)]),Vs,s("ul",null,[s("li",null,[Bs,s("a",Ms,[Ts,a(e)])]),s("li",null,[Xs,s("a",ws,[Cs,a(e)])])])])])],64)}var Ks=l(p,[["render",zs]]);export{Ks as default};