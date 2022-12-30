import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<p>\u5728\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5411\u7A0B\u5E8F\u4F7F\u7528\u65B9\u62A5\u544A\u9519\u8BEF\u72B6\u6001\u7684\u65B9\u5F0F\u53EF\u4EE5\u662F\u8FD4\u56DE\u4E00\u4E2A\u989D\u5916\u7684error\u7C7B\u578B\u503C\u3002</p><p>\u4F46\u662F\uFF0C\u5F53\u9047\u5230\u4E0D\u53EF\u6062\u590D\u7684\u9519\u8BEF\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u5982\u6570\u7EC4\u8BBF\u95EE\u8D8A\u754C\u3001\u7A7A\u6307\u9488\u5F15\u7528\u7B49\uFF0C\u8FD9\u4E9B\u8FD0\u884C\u65F6\u9519\u8BEF\u4F1A\u5F15\u8D77painc\u5F02\u5E38\u3002\u8FD9\u65F6\uFF0C\u4E0A\u8FF0\u9519\u8BEF\u5904\u7406\u65B9\u5F0F\u663E\u7136\u5C31\u4E0D\u9002\u5408\u4E86\u3002\u53CD\u8FC7\u6765\u8BB2\uFF0C\u5728\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u5E94\u901A\u8FC7\u8C03\u7528panic\u51FD\u6570\u6765\u62A5\u544A\u666E\u901A\u7684\u9519\u8BEF\uFF0C\u800C\u5E94\u8BE5\u53EA\u628A\u5B83\u4F5C\u4E3A\u62A5\u544A\u81F4\u547D\u9519\u8BEF\u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u5F53\u67D0\u4E9B\u4E0D\u5E94\u8BE5\u53D1\u751F\u7684\u573A\u666F\u53D1\u751F\u65F6\uFF0C\u6211\u4EEC\u5C31\u5E94\u8BE5\u8C03\u7528panic\u3002</p><p>\u4E00\u822C\u800C\u8A00\uFF0C\u5F53panic\u5F02\u5E38\u53D1\u751F\u65F6\uFF0C\u7A0B\u5E8F\u4F1A\u4E2D\u65AD\u8FD0\u884C\uFF0C\u5E76\u7ACB\u5373\u6267\u884C\u5728\u8BE5goroutine\uFF08\u53EF\u4EE5\u5148\u7406\u89E3\u6210\u7EBF\u7A0B\uFF0C\u5728\u4E2D\u88AB\u5EF6\u8FDF\u7684\u51FD\u6570\uFF08defer \u673A\u5236\uFF09\u3002\u968F\u540E\uFF0C\u7A0B\u5E8F\u5D29\u6E83\u5E76\u8F93\u51FA\u65E5\u5FD7\u4FE1\u606F\u3002\u65E5\u5FD7\u4FE1\u606F\u5305\u62ECpanic value\u548C\u51FD\u6570\u8C03\u7528\u7684\u5806\u6808\u8DDF\u8E2A\u4FE1\u606F\u3002</p><p>\u4E0D\u662F\u6240\u6709\u7684panic\u5F02\u5E38\u90FD\u6765\u81EA\u8FD0\u884C\u65F6\uFF0C\u76F4\u63A5\u8C03\u7528\u5185\u7F6E\u7684panic\u51FD\u6570\u4E5F\u4F1A\u5F15\u53D1panic\u5F02\u5E38\uFF1Bpanic\u51FD\u6570\u63A5\u53D7\u4EFB\u4F55\u503C\u4F5C\u4E3A\u53C2\u6570\u3002</p><h3 id="_1-\u663E\u793A\u8C03\u7528panic\u51FD\u6570\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u663E\u793A\u8C03\u7528panic\u51FD\u6570\u3002" aria-hidden="true">#</a> 1\uFF0C\u663E\u793A\u8C03\u7528panic\u51FD\u6570\u3002</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">testa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;aaaaaa&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">testb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//fmt.Println(&quot;bbbbb&quot;)</span>
	<span class="token comment">//\u663E\u5F0F\u8C03\u7528panic\u51FD\u6570\uFF0C\u5BFC\u81F4\u7A0B\u5E8F\u4E2D\u65AD</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;this is a panic test&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">testc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ccccc&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">testa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">testb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">testc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_2-\u6570\u7EC4\u8D8A\u754C\u5BFC\u81F4panic\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u7EC4\u8D8A\u754C\u5BFC\u81F4panic\u3002" aria-hidden="true">#</a> 2\uFF0C\u6570\u7EC4\u8D8A\u754C\u5BFC\u81F4panic\u3002</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">testa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;aaaaaa&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">testb</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	a<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">111</span> <span class="token comment">//\u5F53x\u4E3A20\u7684\u65F6\u5019\uFF0C\u4F1A\u5BFC\u81F4\u6570\u7EC4\u8D8A\u754C\uFF0C\u4EA7\u751F\u4E00\u4E2Apanic\uFF0C\u5BFC\u81F4\u7A0B\u5E8F\u5D29\u6E83</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">testc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ccccc&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">testa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">testb</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
	<span class="token function">testc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,8);function t(c,e){return p}var l=s(a,[["render",t]]);export{l as default};
