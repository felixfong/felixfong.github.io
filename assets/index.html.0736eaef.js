import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_1-\u4E0E\u5305\u76F8\u5173\u7684\u64CD\u4F5C\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0E\u5305\u76F8\u5173\u7684\u64CD\u4F5C\u3002" aria-hidden="true">#</a> 1\uFF0C\u4E0E\u5305\u76F8\u5173\u7684\u64CD\u4F5C\u3002</h2><h3 id="_1-\u5BFC\u5165\u5305\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u5BFC\u5165\u5305\u3002" aria-hidden="true">#</a> 1\uFF0C\u5BFC\u5165\u5305\u3002</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token comment">//\u591A\u5305\u5F15\u7528\u65B9\u5F0F1</span>
<span class="token comment">// import &quot;fmt&quot;</span>
<span class="token comment">// import &quot;os&quot;</span>

<span class="token comment">//\u591A\u5305\u5F15\u7528\u65B9\u5F0F2\uFF0C\u5E38\u7528</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is test&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;args is=&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>Args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_2-\u7ED9\u5305\u8D77\u522B\u540D\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u7ED9\u5305\u8D77\u522B\u540D\u3002" aria-hidden="true">#</a> 2\uFF0C\u7ED9\u5305\u8D77\u522B\u540D\u3002</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> io <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	io<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is test&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3-\u70B9\u64CD\u4F5C\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u70B9\u64CD\u4F5C\u3002" aria-hidden="true">#</a> 3\uFF0C<code>.</code>\u70B9\u64CD\u4F5C\u3002</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token punctuation">.</span> <span class="token string">&quot;fmt&quot;</span>
	<span class="token punctuation">.</span> <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;this is test&quot;</span><span class="token punctuation">)</span>
	<span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;args is=&quot;</span><span class="token punctuation">,</span> Args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5728\u5F15\u7528\u5305\u4E4B\u524D\u52A0\u4E00\u4E2A<code>.</code>\uFF0C\u53EF\u4EE5\u5728\u4E0B\u8FB9\u8C03\u7528\u5305\u7684\u65F6\u5019\uFF0C\u53BB\u6389\u524D\u7F00\u5305\u540D\uFF0C\u4F46\u662F\u4E0D\u63A8\u8350\u8FD9\u79CD\u505A\u6CD5\u3002</p><h3 id="_4-\u4E0B\u5212\u7EBF\u64CD\u4F5C\u3002" tabindex="-1"><a class="header-anchor" href="#_4-\u4E0B\u5212\u7EBF\u64CD\u4F5C\u3002" aria-hidden="true">#</a> 4\uFF0C<code>_</code>\u4E0B\u5212\u7EBF\u64CD\u4F5C\u3002</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token boolean">_</span> <span class="token string">&quot;fmt&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5728\u5F15\u7528\u5305\u4E4B\u524D\u52A0\u4E00\u4E2A<code>_</code>\uFF0C\u6709\u65F6\u5019\u4F1A\u7528\u5230\u4E00\u4E2A\u5305\u7684init\u51FD\u6570\uFF0C\u4F46\u662F\u53C8\u4E0D\u9700\u8981\u5F15\u7528\u8FD9\u4E2A\u5305\u7684\u6807\u8BC6\u7B26\uFF0C\u5C31\u53EF\u4EE5\u7528\u8FD9\u4E2A\u4E0B\u5212\u7EBF\u64CD\u4F5C\u3002</p>`,11);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
