import{r as o,o as i,c as l,b as s,a,F as r,e as t,d as e}from"./app.dbf5d933.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const c={},p=t(`<p>\u4E4B\u524D\u5C31\u542C\u8BF4\u8FC7 neovim\uFF0C\u53EA\u4E0D\u8FC7\u4E00\u76F4\u6CA1\u6709\u6D89\u8DB3\uFF0C\u6700\u8FD1\u6253\u7B97\u7814\u7A76\u4E0B\uFF0C\u5374\u53D1\u73B0\u770B\u4E86\u4E0D\u5C11\u6587\u7AE0\u90FD\u6CA1\u6709\u6E05\u6670\u8BB2\u89E3\u5176\u7528\u6CD5\uFF0C\u8E29\u4E86\u4E00\u4E9B\u5751\u4E4B\u540E\uFF0C\u4ECA\u5929\u6765\u505A\u4E00\u4E0B\u5206\u4EAB\u3002</p><h2 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> neovim
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u66F4\u6539\u522B\u540D\uFF0C\u9E1F\u67AA\u6362\u70AE\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># edit ~/.zshrc</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">vim</span><span class="token operator">=</span><span class="token string">&#39;nvim&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">vi</span><span class="token operator">=</span><span class="token string">&#39;nvim&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_2-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u63D2\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u63D2\u4EF6</h2><h3 id="_1-\u5B89\u88C5\u63D2\u4EF6\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u63D2\u4EF6\u7BA1\u7406\u5668" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5\u63D2\u4EF6\u7BA1\u7406\u5668</h3><p>\u5F88\u591A\u4E30\u5BCC\u7684\u529F\u80FD\u4F9D\u8D56\u4E8E\u63D2\u4EF6\u7684\u52A0\u6301\uFF0C\u5728\u5B89\u88C5\u63D2\u4EF6\u4E4B\u524D\uFF0C\u9700\u8981\u5148\u5B89\u88C5\u63D2\u4EF6\u7684\u7BA1\u7406\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u4F7F\u7528 <code>vim-plug</code>\uFF0C \u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5728\u56FD\u5185\u6267\u884C\u5982\u4E0A\u547D\u4EE4\uFF0C\u90FD\u4F1A\u5F97\u5230\u5982\u4E0B\u56DE\u590D\uFF1A<code>curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused</code>\uFF0C\u6B64\u65F6\u5C06\u5982\u4E0B\u4E00\u7EC4\u6570\u636E\u5199\u5165\u5230 hosts \u4EE5\u907F\u5F00\u8FD9\u4E2A\u62A5\u9519\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;199.232.28.133 raw.githubusercontent.com&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u518D\u6765\u6267\u884C\u4E0A\u8FB9\u7684\u5B89\u88C5\u547D\u4EE4\uFF0C\u5373\u53EF\u6210\u529F\u4E86\u3002</p><h3 id="_2-\u914D\u7F6E\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E\u63D2\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u914D\u7F6E\u63D2\u4EF6</h3><p>\u63D2\u4EF6\u7684\u7BA1\u7406\u7EF4\u62A4\u4F9D\u8D56\u4E8E\u914D\u7F6E\u6587\u4EF6\uFF1A<code>~/.config/nvim/init.vim</code>\uFF0C\u6807\u51C6\u7684\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>call plug<span class="token comment">#begin()</span>
call plug<span class="token comment">#end()</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6240\u9700\u8981\u5B89\u88C5\u7684\u63D2\u4EF6\u5199\u5728\u8FD9\u4E24\u4E2A\u8BED\u53E5\u4E2D\u95F4\uFF0C\u7136\u540E\u901A\u8FC7\u63D2\u4EF6\u7BA1\u7406\u7684\u547D\u4EE4\u8FDB\u884C\u914D\u7F6E\uFF1A</p><ul><li>\u5B89\u88C5\u63D2\u4EF6\uFF1A<code>:PlugInstall</code></li><li>\u66F4\u65B0\u63D2\u4EF6\uFF1A<code>:PlugUpdate</code></li><li>\u5220\u9664\u63D2\u4EF6\uFF1A<code>:PlugClean</code> \uFF08\u9996\u5148\u5728 <code>init.vim</code> \u4E2D\uFF0C\u6CE8\u91CA\u6389\u8BE5\u63D2\u4EF6\uFF0C\u7136\u540E\u6253\u5F00 Nvim\uFF0C \u4F7F\u7528 <code>:PlugClean</code> \u547D\u4EE4\u6E05\u9664\u8BE5\u63D2\u4EF6\uFF09</li><li>\u67E5\u770B\u63D2\u4EF6\u72B6\u6001\uFF1A<code>:PlugStatus</code></li><li>\u5347\u7EA7 vim-plug\uFF1A<code>:PlugUpgrade</code></li></ul><h2 id="_3-\u63D2\u4EF6\u5927\u5168" tabindex="-1"><a class="header-anchor" href="#_3-\u63D2\u4EF6\u5927\u5168" aria-hidden="true">#</a> 3\uFF0C\u63D2\u4EF6\u5927\u5168</h2><h3 id="_1-\u5E95\u90E8\u72B6\u6001\u680Fvim-airline" tabindex="-1"><a class="header-anchor" href="#_1-\u5E95\u90E8\u72B6\u6001\u680Fvim-airline" aria-hidden="true">#</a> 1\uFF0C\u5E95\u90E8\u72B6\u6001\u680F<code>vim-airline</code></h3><p>\u9ED8\u8BA4\u7684 iterm2 \u7684 vim \u754C\u9762\u4E2D\uFF0C\u5E95\u90E8\u72B6\u6001\u680F\u5185\u5BB9\u5F88\u5C11\uFF0C\u901A\u8FC7\u914D\u7F6E\u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u8BA9\u72B6\u6001\u680F\u5185\u5BB9\u66F4\u52A0\u4E30\u5BCC\u4E00\u4E9B\u3002</p><p>\u8FD9\u662F\u5B89\u88C5\u7684\u7B2C\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u4E3A\u4E86\u63D0\u4F9B\u7ED9\u521A\u521A\u63A5\u89E6\u7684\u540C\u5B66\u4E00\u4E2A\u6E05\u6670\u7684\u719F\u6089\u65B9\u5411\uFF0C\u6211\u6765\u5B8C\u6574\u6F14\u793A\u4E00\u4E0B\u5B89\u88C5\u7684\u6D41\u7A0B\uFF0C\u7F51\u4E0A\u6709\u592A\u591A\u4ECB\u7ECD\u7684\u6587\u7AE0\uFF0C\u5F80\u5F80\u90FD\u662F\u6CDB\u6CDB\u800C\u8A00\uFF0C\u8BA9\u521D\u5B66\u7684\u6211\u5982\u5760\u4E94\u91CC\u96FE\uFF0C\u60B2\u5267\u4E0D\u5E94\u91CD\u6F14\uFF0C\u6211\u53EA\u5E0C\u671B\u770B\u5230\u8FD9\u7BC7\u6587\u7AE0\u7684\u670B\u53CB\u4E0D\u9700\u8981\u518D\u53BB\u70B9\u5F00\u5176\u4ED6\u6587\u7AE0\u4E86\u3002</p><p>\u6B63\u50CF\u4E0A\u8FB9\u8BF4\u7684\uFF0C\u5E94\u8BE5\u4E25\u683C\u6309\u7167\u5982\u4E0A\u8BED\u6CD5\u8981\u6C42\uFF0C\u5C06\u8981\u5B89\u88C5\u7684\u63D2\u4EF6\u5199\u5165\u5230\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.config/nvim/init.vim
call plug<span class="token comment">#begin()</span>
Plug <span class="token string">&#39;vim-airline/vim-airline&#39;</span>
call plug<span class="token comment">#end()</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7136\u540E\u8F93\u5165 vim \u8FDB\u5165\u5230 neovim \u4E2D\uFF0C\u63A5\u7740\u952E\u5165<code>:PlugInstall</code>\u56DE\u8F66\u8FDB\u884C\u5B89\u88C5\uFF0C\u5176\u5B9E\u8FD9\u4E2A\u5730\u65B9\u7F16\u8F91\u7684\u65F6\u5019\u5DF2\u7ECF\u652F\u6301\u8865\u5168\uFF0C\u952E\u5165 <code>P</code>\u7136\u540E<code>tab</code>\u4E00\u4E0B\uFF0C\u5C31\u4F1A\u8865\u5168\u4E3A <code>Plug</code>\u4E86\u3002\u770B\u5230 Done \u5219\u8BF4\u660E\u5DF2\u7ECF\u5B89\u88C5\u6210\u529F\u4E86\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/e044c46c851a111a.jpg" alt="img"></p><p>\u7136\u540E\u901A\u8FC7\u4E24\u6B21 <code>:q</code>\u9000\u51FA\u7F16\u8F91\u5668\uFF0C\u63A5\u7740\u518D\u6B21\u8FDB\u5165\uFF0C\u5C31\u80FD\u770B\u5230\u63D2\u4EF6\u5DF2\u7ECF\u751F\u6548\u4E86\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/a74e76e430d4de05.jpg" alt="img"></p>`,27),h=e("\u4E8B\u5B9E\u4E0A"),m=s("code",null,"vim-airline",-1),u=e("\u63D0\u4F9B\u4E86\u5F88\u591A\u4E3B\u9898\u6765\u652F\u6301\u7528\u6237\u81EA\u5B9A\u4E49\uFF0C\u4E0D\u540C\u4E3B\u9898\u53EF\u4EE5\u53C2\u8003"),g={href:"https://github.com/vim-airline/vim-airline/wiki/Screenshots",target:"_blank",rel:"noopener noreferrer"},b=e("\u8FD9\u91CC"),_=e("\u3002\u60F3\u8981\u66F4\u6539\u4E3B\u9898\uFF0C\u9996\u5148\u9700\u8981\u5B89\u88C5\u63D2\u4EF6 "),v={href:"https://github.com/vim-airline/vim-airline-themes",target:"_blank",rel:"noopener noreferrer"},f=e("vim-airlinetheme"),k=e("\uFF1A"),x=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.config/nvim/init.vim
call plug<span class="token comment">#begin()</span>
Plug <span class="token string">&#39;vim-airline/vim-airline&#39;</span>
Plug <span class="token string">&#39;vim-airline/vim-airline-themes&#39;</span>
call plug<span class="token comment">#end()</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\uFF0C\u901A\u8FC7\u5982\u4E0B\u8BBE\u7F6E\u8FDB\u884C\u81EA\u5B9A\u4E49\uFF0C\u540C\u6837\uFF0C\u914D\u7F6E\u4ECD\u7136\u662F\u5199\u5165\u5230 <code>~/.config/nvim/init.vim</code>\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">let</span> g:airline_theme<span class="token operator">=</span><span class="token string">&#39;&lt;theme&gt;&#39;</span> &quot; <span class="token operator">&lt;</span>theme<span class="token operator">&gt;</span> \u4EE3\u8868\u67D0\u4E2A\u4E3B\u9898\u7684\u540D\u79F0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-\u81EA\u52A8\u53CC\u5F15\u53F7-\u62EC\u53F7" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u52A8\u53CC\u5F15\u53F7-\u62EC\u53F7" aria-hidden="true">#</a> 2\uFF0C\u81EA\u52A8\u53CC\u5F15\u53F7 &amp; \u62EC\u53F7</h3>`,4),P=e("\u6211\u4EEC\u65E5\u5E38\u5728\u7F16\u8F91\u5668\u4E2D\u5199\u4EE3\u7801\u65F6\uFF0C\u8F93\u5165\u7684\u5F15\u53F7\u6216\u8005\u62EC\u53F7\u90FD\u4F1A\u9ED8\u8BA4\u81EA\u52A8\u5199\u5165\u4E00\u5BF9\uFF0C\u7136\u540E\u9F20\u6807\u7684\u5149\u6807\u505C\u7559\u5728\u4E2D\u95F4\uFF0C\u8FD9\u91CC\u6211\u4EEC\u901A\u8FC7\u63D2\u4EF6 "),y={href:"https://github.com/jiangmiao/auto-pairs",target:"_blank",rel:"noopener noreferrer"},j=e("auto-paris"),C=e(" \u4E5F\u53EF\u4EE5\u7ED9 vim \u6269\u5C55\u8FD9\u4E2A\u529F\u80FD\u3002"),E=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Plug <span class="token string">&#39;jiangmiao/auto-pairs&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u4E4B\u540E\uFF0C\u5C31\u62E5\u6709\u4E86\u4E0E\u7F16\u8F91\u5668\u4E00\u6837\u7684\u81EA\u52A8\u6269\u5C55\u5F15\u53F7\u7684\u529F\u80FD\u4E86\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/7ea932841608240c.gif" alt="img"></p><p>\u8BE6\u7EC6\u89C4\u5219\u5982\u4E0B\uFF1A</p><p>auto-pairs \u63D2\u4EF6\u7684\u4E3B\u8981\u529F\u80FD\u901A\u8FC7\u5982\u4E0B\u7684\u8868\u683C\u8FDB\u884C\u63CF\u8FF0 (\u8868\u683C\u4E2D <code>\u2502</code> \u8868\u793A\u5F53\u524D\u5149\u6807\u6240\u5728\u4F4D\u7F6E)\u3002</p><table><thead><tr><th><strong>auto-pairs \u529F\u80FD</strong></th><th><strong>\u652F\u6301\u7684\u914D\u5BF9\u7B26\u53F7</strong></th><th><strong>\u539F\u6587\u672C</strong></th><th><strong>\u6309\u952E</strong></th><th><strong>\u65B0\u6587\u672C</strong></th></tr></thead><tbody><tr><td>\u6210\u5BF9\u63D2\u5165</td><td>{}\u3001[]\u3001()\u3001\u201C\u201D\u3001\u201C\u3001\u201D</td><td></td><td>[</td><td>[\u2502]</td></tr><tr><td>\u6210\u5BF9\u5220\u9664</td><td>{}\u3001[]\u3001()\u3001\u201C\u201D\u3001\u201C\u3001\u201D</td><td>foo[\u2502]</td><td>BACKSPACE</td><td>foo\u2502</td></tr><tr><td>\u5220\u9664\u91CD\u590D\u6210\u5BF9\u7B26\u53F7</td><td>{}\u3001[]\u3001()\u3001\u201C\u201D\u3001\u201C\u3001\u201D</td><td>foo\u201C\u201C\u201C\u2502\u201D\u201D\u201D</td><td>BACKSPACE</td><td>foo\u2502</td></tr><tr><td>\u6362\u884C\u5E76\u81EA\u52A8\u7F29\u8FDB</td><td>{}\u3001[]\u3001()</td><td>node{\u2502}</td><td>ENTER</td><td>node{\u2502}</td></tr><tr><td>\u5728\u62EC\u53F7\u5185\u4E24\u4FA7\u5404\u63D2\u5165\u7A7A\u683C</td><td>{}\u3001[]\u3001()</td><td>foo{\u2502}</td><td>SPACE</td><td>foo{\u2502}</td></tr><tr><td>\u8BCD\u540E\u5355\u5F15\u53F7\u4E0D\u6210\u5BF9\u63D2\u5165</td><td>\u2019</td><td>foo\u2502</td><td>\u2019</td><td>foo\u2019\u2502</td></tr><tr><td>\u8DF3\u8FC7\u53F3\u62EC\u53F7</td><td>{}\u3001[]\u3001()</td><td>[foo\u2502]</td><td>]</td><td>[foo]\u2502</td></tr><tr><td>\u5728\u8F6C\u4E49\u7B26 \\ \u540E\u7981\u7528\u63D2\u4EF6</td><td>{}\u3001[]\u3001()\u3001\u201C\u201D\u3001\u201C\u3001\u201D</td><td>foo\\\u2502</td><td>{</td><td>foo{\u2502</td></tr><tr><td>\u5BF9\u5B57\u7B26\u4E32\u52A0\u5C0F\u62EC\u53F7</td><td>C \u8BED\u8A00\u98CE\u683C\u7684\u5B57\u7B26\u4E32</td><td>\u2502\u2018foo\u2019</td><td>ALT+e</td><td>(\u2018foo\u2019)\u2502</td></tr></tbody></table><h3 id="_3-\u6CE8\u91CA\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u6CE8\u91CA\u63D2\u4EF6" aria-hidden="true">#</a> 3\uFF0C\u6CE8\u91CA\u63D2\u4EF6</h3>`,7),N=e("\u5E73\u5E38\u6211\u4EEC\u6CE8\u91CA\u4E00\u884C\u5185\u5BB9\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u4F1A\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u5C24\u5176\u662F\u4E0D\u540C\u8BED\u8A00\u7684\u6CE8\u91CA\uFF0C\u5404\u4E0D\u76F8\u540C\uFF0C\u5728 vim \u4E2D\u64CD\u4F5C\u53EF\u80FD\u4F1A\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u800C "),q={href:"https://github.com/scrooloose/nerdcommenter",target:"_blank",rel:"noopener noreferrer"},w=e("nerdcommenter"),A=e(" \u5C31\u662F\u4E00\u6B3E\u9488\u5BF9\u8FD9\u4E2A\u95EE\u9898\u7684\u63D2\u4EF6\u3002"),S=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Plug <span class="token string">&#39;scrooloose/nerdcommenter&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7528\u6CD5\uFF1A\u901A\u8FC7\u952E\u5165 <code>\\cc</code>\u53EF\u4EE5\u5BF9\u67D0\u884C\u8FDB\u884C\u6CE8\u91CA\uFF0C\u4F7F\u7528 <code>3\\cc</code>\u5219\u53EF\u4EE5\u6CE8\u91CA\u5305\u542B\u5149\u6807\u6240\u5728\u884C\u5F80\u4E0B\u4E09\u884C\u7684\u5185\u5BB9\uFF0C <code>3\\ci</code>\u5207\u6362\u5BF9\u5E94\u884C\u7684\u6CE8\u91CA\u72B6\u6001\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/73f15ec83d15e38b.gif" alt="img"></p><h3 id="_4-\u6587\u4EF6\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#_4-\u6587\u4EF6\u7BA1\u7406\u5668" aria-hidden="true">#</a> 4\uFF0C \u6587\u4EF6\u7BA1\u7406\u5668</h3>`,4),B=e("\u8BA9\u6211\u4EEC\u5728\u7EC8\u7AEF\u91CC\u4E5F\u80FD\u50CF\u56FE\u5F62\u754C\u9762\u4E2D\u4E00\u6837\u7BA1\u7406\u7CFB\u7EDF\u4E2D\u7684\u6587\u4EF6\uFF0C\u63D2\u4EF6\u540D\u5B57\u662F\uFF1A"),L={href:"https://github.com/scrooloose/nerdtree",target:"_blank",rel:"noopener noreferrer"},V=e("scrooloose/nerdtree"),I=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Plug <span class="token string">&#39;scrooloose/nerdtree&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u59FF\u52BF\uFF1A</p><ul><li><code>:NERDTree</code> \u5373\u53EF\u6253\u5F00\u5F53\u524D\u7F16\u8F91\u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55</li><li>\u6309\u4F4F Ctrl, \u53CC\u51FB w \u53EF\u4EE5\u5728\u4E24\u4E2A\u7A97\u53E3\u4E4B\u95F4\u5207\u6362</li><li>\u628A\u5149\u6807\u79FB\u52A8\u5230\u8BE5\u6587\u4EF6\uFF0C\u7136\u540E\u6309 o\uFF0C\u5373\u53EF\u5728\u53F3\u8FB9\u7A97\u53E3\u6253\u5F00\u8BE5\u6587\u4EF6</li><li>\u5728\u8BE5\u7A97\u53E3\u76F4\u63A5\u6309 q \u5373\u53EF\u9000\u51FA</li></ul><p><img src="http://t.eryajf.net/imgs/2021/09/916c4d7c6a2ce174.jpg" alt="img"></p><h3 id="_5-\u9AD8\u4EAE\u663E\u793A\u590D\u5236\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_5-\u9AD8\u4EAE\u663E\u793A\u590D\u5236\u5185\u5BB9" aria-hidden="true">#</a> 5\uFF0C\u9AD8\u4EAE\u663E\u793A\u590D\u5236\u5185\u5BB9</h3>`,5),T=e("\u5728 vim \u5F53\u4E2D\u6211\u4EEC\u6709\u65F6\u5019\u4F1A\u7528"),F=s("code",null,"yy",-1),D=e("\u590D\u5236\u4E00\u4E9B\u884C\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6309\u4E0B"),K=s("code",null,"yy",-1),R=e("\u4E4B\u540E\u4E0D\u4F1A\u6709\u4EFB\u4F55\u53CD\u5E94\uFF0C\u53EA\u80FD\u51ED\u501F\u81EA\u5DF1\u521A\u521A\u7684\u8BB0\u5FC6\u6765\u786E\u8BA4\u590D\u5236\u4E86\u54EA\u4E9B\u5185\u5BB9\uFF0C"),U={href:"https://github.com/machakann/vim-highlightedyank",target:"_blank",rel:"noopener noreferrer"},$=e("vim-highlightedyank"),z=e(" \u63D2\u4EF6\u5219\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5728\u6309\u4E0B"),G=s("code",null,"yy",-1),H=e("\u4E4B\u540E\u9AD8\u4EAE\u663E\u793A\u4E00\u4F1A\u513F\u5C06\u8981\u590D\u5236\u7684\u5185\u5BB9\u3002"),J=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Plug <span class="token string">&#39;machakann/vim-highlightedyank&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u89C9\u5F97\u9AD8\u4EAE\u663E\u793A\u7684\u65F6\u95F4\u592A\u77ED\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u589E\u52A0\u9AD8\u4EAE\u663E\u793A\u7684\u65F6\u95F4\uFF08\u5355\u4F4D\u4E3A\u6BEB\u79D2\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">let</span> g:highlightedyank_highlight_duration <span class="token operator">=</span> <span class="token number">1000</span> &quot; \u9AD8\u4EAE\u6301\u7EED\u65F6\u95F4\u4E3A <span class="token number">1000</span> \u6BEB\u79D2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u76EE\u524D\u6682\u65F6\u5148\u7F57\u5217\u8FD9\u51E0\u4E2A\uFF0C\u4EE5\u540E\u9047\u5230\u4F18\u79C0\u7684\u63D2\u4EF6\uFF0C\u8FD8\u4F1A\u518D\u6536\u96C6\u5206\u4EAB\u3002GitHub \u4E5F\u6709\u5F88\u591A\u4EBA\u5206\u4EAB\u7684\u6210\u719F\u7684\u914D\u7F6E\uFF0C\u53EA\u4E0D\u8FC7\u5982\u679C\u53EA\u6DFB\u52A0\u5374\u4E0D\u77E5\u9053\u4F5C\u7528\uFF0C\u4F3C\u4E4E\u4E5F\u7528\u5904\u4E0D\u5927\u3002</p><h2 id="_4-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_4-\u53C2\u8003" aria-hidden="true">#</a> 4\uFF0C\u53C2\u8003</h2>`,5),M={href:"https://jdhao.github.io/2018/09/05/centos_nvim_install_use_guide/",target:"_blank",rel:"noopener noreferrer"},O=e("Linux \u4E0B Neovim \u914D\u7F6E Python \u5F00\u53D1\u73AF\u5883\u6307\u5357"),Q={href:"https://michael728.github.io/2018/12/02/tools-vim-plugin-config/",target:"_blank",rel:"noopener noreferrer"},W=e("Vim \u63D2\u4EF6\u53CA\u914D\u7F6E");function X(Y,Z){const n=o("ExternalLinkIcon");return i(),l(r,null,[p,s("p",null,[h,m,u,s("a",g,[b,a(n)]),_,s("a",v,[f,a(n)]),k]),x,s("p",null,[P,s("a",y,[j,a(n)]),C]),E,s("p",null,[N,s("a",q,[w,a(n)]),A]),S,s("p",null,[B,s("a",L,[V,a(n)])]),I,s("p",null,[T,F,D,K,R,s("a",U,[$,a(n)]),z,G,H]),J,s("ul",null,[s("li",null,[s("a",M,[O,a(n)])]),s("li",null,[s("a",Q,[W,a(n)])])])],64)}var ne=d(c,[["render",X]]);export{ne as default};
