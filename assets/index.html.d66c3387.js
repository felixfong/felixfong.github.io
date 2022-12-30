import{r as l,o as r,c as t,b as n,a as i,F as p,e as s,d as e}from"./app.dbf5d933.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const o={},u=s(`<h2 id="_1-\u5B89\u88C5brew" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5brew" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5brew</h2><p>\u7F51\u4E0A\u5E38\u89C4\u7684\u5B89\u88C5\u65B9\u5F0F\u90FD\u6BD4\u8F83\u6162\u6216\u8005\u7ECF\u5E38\u5931\u8D25\uFF0C\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u4E00\u952E\u5B89\u88C5\uFF0C\u975E\u5E38\u65B9\u4FBF\uFF0C\u7ED9\u4F5C\u8005\u70B9\u4E2A\u8D5E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD0\u884C\u811A\u672C\u4E4B\u540E\uFF0C\u9009\u62E9\u5BF9\u5E94\u7684\u6E90\u4E4B\u540E\u5C31\u4F1A\u4E00\u952E\u5B89\u88C5brew\u4E86\u3002</p><p>\u5B89\u88C5\u4E00\u4E9B\u5E38\u7528\u8F6F\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew install wget curl telnet lrzsz tcpdump tree jq ack redis autojump zbar nslookup git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5node\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew install node@12

# \u7136\u540E\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF
echo &#39;export PATH=&quot;/usr/local/opt/node@12/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc
echo &#39;export PATH=&quot;/usr/local/opt/icu4c/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc
echo &#39;export PATH=&quot;/usr/local/opt/icu4c/sbin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc
echo &#39;export PATH=&quot;/usr/local/opt/node@12/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc

\u52A0\u8F7D\u4E4B\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,8),b=e("\u53C2\u8003\u6587\u7AE0\uFF1A"),m={href:"https://zhuanlan.zhihu.com/p/111014448",target:"_blank",rel:"noopener noreferrer"},d=e("Homebrew\u56FD\u5185\u5982\u4F55\u81EA\u52A8\u5B89\u88C5"),g=s(`<h2 id="_2-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#_2-oh-my-zsh" aria-hidden="true">#</a> 2\uFF0Coh-my-zsh</h2><h3 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5</h3><p>\u540C\u7406\uFF0C\u5F88\u591A\u8001\u7684\u65B9\u6CD5\u5B89\u88C5\u90FD\u662F\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u6210\u529F\uFF0C\u6700\u540E\u627E\u5230\u4E86\u5982\u4E0B\u6587\u7AE0\u53EF\u4EE5\u6B63\u5E38\u5B89\u88C5\u4E86\u3002</p><ul><li><p>\u4E0B\u8F7D\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># gitee \u6E90
wget https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>\u8C03\u6574\u811A\u672C</p><p>\u628A\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>REPO=\${REPO:-ohmyzsh/ohmyzsh}
REMOTE=\${REMOTE:-https://github.com/\${REPO}.git}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u66FF\u6362\u4E3A\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>REPO=\${REPO:-mirrors/oh-my-zsh}
REMOTE=\${REMOTE:-https://gitee.com/\${REPO}.git}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>\u8FD0\u884C\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8D4B\u4E88\u53EF\u6267\u884C\u6743\u9650
chomd +x install.sh
# \u8FD0\u884C
sh install.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\uFF0C\u4FEE\u6539\u4ED3\u5E93\u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/.oh-my-zsh
git remote set-url origin https://gitee.com/mirrors/oh-my-zsh.git
git pull
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u5207\u6362zsh</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5207\u6362
chsh -s /bin/zsh

# \u67E5\u770B\u5F53\u524Dbash
echo $SHELL
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><h3 id="_2-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E" aria-hidden="true">#</a> 2\uFF0C\u914D\u7F6E</h3><ul><li><p>\u4E3B\u9898</p><p>\u4E3B\u9898\u4F7F\u7528\u4E2A\u4EBA\u8C03\u5236\u7684\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cat .oh-my-zsh/themes/myys.zsh-theme
# VCS
YS_VCS_PROMPT_PREFIX1=&quot; %{$fg[white]%}on%{$reset_color%} &quot;
YS_VCS_PROMPT_PREFIX2=&quot;:%{$fg[cyan]%}&quot;
YS_VCS_PROMPT_SUFFIX=&quot;%{$reset_color%}&quot;
YS_VCS_PROMPT_DIRTY=&quot; %{$fg[red]%}x&quot;
YS_VCS_PROMPT_CLEAN=&quot; %{$fg[green]%}o&quot;

# Git info
local git_info=&#39;$(git_prompt_info)&#39;
ZSH_THEME_GIT_PROMPT_PREFIX=&quot;\${YS_VCS_PROMPT_PREFIX1}git\${YS_VCS_PROMPT_PREFIX2}&quot;
ZSH_THEME_GIT_PROMPT_SUFFIX=&quot;$YS_VCS_PROMPT_SUFFIX&quot;
ZSH_THEME_GIT_PROMPT_DIRTY=&quot;$YS_VCS_PROMPT_DIRTY&quot;
ZSH_THEME_GIT_PROMPT_CLEAN=&quot;$YS_VCS_PROMPT_CLEAN&quot;

# HG info
local hg_info=&#39;$(ys_hg_prompt_info)&#39;
ys_hg_prompt_info() {
	# make sure this is a hg dir
	if [ -d &#39;.hg&#39; ]; then
		echo -n &quot;\${YS_VCS_PROMPT_PREFIX1}hg\${YS_VCS_PROMPT_PREFIX2}&quot;
		echo -n $(hg branch 2&gt;/dev/null)
		if [ -n &quot;$(hg status 2&gt;/dev/null)&quot; ]; then
			echo -n &quot;$YS_VCS_PROMPT_DIRTY&quot;
		else
			echo -n &quot;$YS_VCS_PROMPT_CLEAN&quot;
		fi
		echo -n &quot;$YS_VCS_PROMPT_SUFFIX&quot;
	fi
}
local exit_code=&quot;%(?,,C:%{$fg[red]%}%?%{$reset_color%})&quot;
PROMPT=&quot;
%(#,%{$bg[yellow]%}%{$fg[black]%}%n%{$reset_color%},%{$fg[cyan]%}%n) \\
%{$fg[white]%}in \\
%{$terminfo[bold]$fg[yellow]%}%~%{$reset_color%}\\
\${hg_info}\\
\${git_info}\\
 \\
%{$fg[white]%}[%*] $exit_code
%{$terminfo[bold]$fg[red]%}$ %{$reset_color%}&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>\u7136\u540E\u5728\u914D\u7F6E\u4E2D\u5F15\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cat .zshrc
# HomeBrew
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles
export PATH=&quot;/usr/local/bin:$PATH&quot;
export PATH=&quot;/usr/local/sbin:$PATH&quot;
# HomeBrew END

# Path to your oh-my-zsh installation.
export ZSH=&quot;/Users/liqilong/.oh-my-zsh&quot;
ZSH_THEME=&quot;myys&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>\u63D2\u4EF6</p><p>\u5148\u5B89\u88C5\u4E24\u4E2A\u9ED8\u8BA4\u6CA1\u6709\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

git clone git://github.com/zsh-users/zsh-syntax-highlighting $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u52A0\u5165\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>plugins=(
    git
    cp
    z
    wd
    sudo
    sublime
    git-open
    zsh_reload
    colored-man-pages
    zsh-autosuggestions
    zsh-syntax-highlighting
    web-search
    extract
)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p>\u5386\u53F2\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># history
export HIST_STAMPS=&quot;yyyy-mm-dd&quot;
export HISTSIZE=100000
export HISTFILESIZE=1000000
# \u5FFD\u7565\u91CD\u590D\u7684\u547D\u4EE4
export HISTCONTROL=ignoredups
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul><h2 id="_3-\u8C03\u6574\u542F\u52A8\u53F0\u56FE\u6807\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_3-\u8C03\u6574\u542F\u52A8\u53F0\u56FE\u6807\u5927\u5C0F" aria-hidden="true">#</a> 3,\u8C03\u6574\u542F\u52A8\u53F0\u56FE\u6807\u5927\u5C0F</h2><p>1\u3001\u8C03\u6574\u6BCF\u4E00\u5217\u663E\u793A\u56FE\u6807\u6570\u91CF\uFF0C10\u8868\u793A\u6BCF\u4E00\u5217\u663E\u793A10\u4E2A\uFF0C\u6BD4\u8F83\u4E0D\u9519\uFF0C\u53EF\u6839\u636E\u4E2A\u4EBA\u559C\u597D\u8FDB\u884C\u8BBE\u7F6E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>defaults write com.apple.dock springboard-rows -int 10
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2\u3001\u8C03\u6574\u591A\u5C11\u884C\u663E\u793A\u56FE\u6807\u6570\u91CF\uFF0C\u8FD9\u91CC\u6211\u7528\u7684\u662F8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>defaults write com.apple.dock springboard-rows -int 8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>3\u3001\u91CD\u7F6ELaunchpad</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>defaults write com.apple.dock ResetLaunchPad -bool TRUE
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>4\u3001\u91CD\u542FDock</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>killall Dock
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E\u7684\u65B9\u6CD5\u3002</strong></p><p><strong>\u4EE5\u4E0B\u662F\u6062\u590D\u9ED8\u8BA4\u5927\u5C0F\u7684\u547D\u4EE4\uFF08\u5728Terminal\u6267\u884C\u5373\u53EF\uFF09\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>defaults write com.apple.dock springboard-rows Default
defaults write com.apple.dock springboard-columns Default
defaults write com.apple.dock ResetLaunchPad -bool TRUE
killall Dock
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,18);function h(_,x){const a=l("ExternalLinkIcon");return r(),t(p,null,[u,n("p",null,[b,n("a",m,[d,i(a)])]),g],64)}var T=c(o,[["render",h]]);export{T as default};
