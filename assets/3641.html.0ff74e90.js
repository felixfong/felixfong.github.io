import{e as s}from"./app.dbf5d933.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<p>\u78C1\u76D8\u5206\u533A\u7684\u65F6\u5019\uFF0C\u5E73\u5E38\u90FD\u662F\u4F7F\u7528\u4EA4\u4E92\u5F0F\u7684\u65B9\u5F0F\u8FDB\u884C\uFF0C\u4F46\u662F\u4EA4\u4E92\u5F0F\u6709\u65F6\u5019\u5BF9\u4E00\u4E9B\u6279\u91CF\u7684\uFF0C\u6216\u8005\u811A\u672C\u5F0F\u7684\uFF0C\u5C31\u4E0D\u90A3\u4E48\u53CB\u597D\u4E86\uFF0C\u4ECA\u5929\u521A\u597D\u8981\u5BF9\u4E00\u6279\u8BBE\u5907\u521D\u59CB\u5316\u8FDB\u884C\u5206\u533A\u64CD\u4F5C\uFF0C\u51E0\u767E G \u7684\u4EE5\u53CA\u5341\u6765 T \u7684\u90FD\u6709\uFF0C\u56E0\u6B64\u4E24\u4E2A\u5206\u533A\u547D\u4EE4\u7684\u975E\u4EA4\u4E92\u5F0F\u8FD9\u91CC\u4E00\u5E76\u62FF\u4E0B\u4E86\u3002</p><h2 id="_1-fdisk-\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_1-fdisk-\u5206\u533A" aria-hidden="true">#</a> 1\uFF0Cfdisk \u5206\u533A</h2><p>\u76F4\u63A5\u8FDB\u5165\u6B63\u9898\uFF0C\u5173\u4E8E\u4E24\u79CD\u5206\u533A\u65B9\u5F0F\u7684\u9009\u578B\u7B49\u95EE\u9898\uFF0C\u8FD9\u91CC\u4E0D\u505A\u8BA8\u8BBA\u3002</p><p>\u521B\u5EFA\u5982\u4E0B\u4EA4\u4E92\u6587\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> fdisk.txt
n




w
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>\u6CE8\u610F\uFF1A</code>\u6587\u4EF6\u5185\u5BB9\u5C31\u4E24\u6B65\uFF0C\u4E00\u4E2A <code>n</code>\uFF0C\u4E00\u4E2A <code>w</code>\uFF0C\u4F46\u662F\u6CE8\u610F\u4E2D\u95F4\u6709 4 \u4E2A\u6362\u884C\uFF0C\u8868\u793A\u5206\u533A\u8FC7\u7A0B\u9009\u9879\u4FDD\u6301\u9ED8\u8BA4\uFF0C\u5982\u6B64\u5206\u914D\u6574\u4E2A\u78C1\u76D8\u4E3A\u4E00\u4E2A\u5206\u533A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">fdisk</span> /dev/vdb <span class="token operator">&lt;</span> ./fdisk.txt
<span class="token function">fdisk</span> /dev/vdc <span class="token operator">&lt;</span> ./fdisk.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u63A5\u4E0B\u6765\u5C31\u662F\u683C\u5F0F\u5316\uFF0C\u6302\u8F7D\u7684\u4E8B\u60C5\u4E86\uFF0C\u6BD4\u8F83\u5E38\u89C4\uFF0C\u4E0B\u8FB9\u4F1A\u7ED9\u51FA\u4F8B\u5B50\uFF0C\u8FD9\u91CC\u4E0D\u591A\u8D58\u8FF0\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/ccd8c6e927c02039.jpg" alt="img"></p><h2 id="_2-parted-\u98CE\u683C" tabindex="-1"><a class="header-anchor" href="#_2-parted-\u98CE\u683C" aria-hidden="true">#</a> 2\uFF0Cparted \u98CE\u683C</h2><p>debian \u7CFB\u7EDF\u9ED8\u8BA4\u6CA1\u6709 parted \u547D\u4EE4\uFF0C\u9700\u8981\u5148\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> update
<span class="token function">apt-get</span> -y <span class="token function">install</span> <span class="token function">parted</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540E\u521B\u5EFA\u5982\u4E0B\u4EA4\u4E92\u6587\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$cat</span> parted.txt
mklabel gpt
<span class="token function">yes</span>
mkpart
<span class="token number">1</span>
ext4
<span class="token number">0</span>
<span class="token number">100</span>%
Ignore
q
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6587\u672C\u5185\u4E5F\u90FD\u662F\u683C\u5F0F\u5316\u8FC7\u7A0B\u4E2D\u9700\u8981\u7684\u6B65\u9AA4\uFF0C\u540C\u6837\u662F\u5C06\u6574\u5757\u78C1\u76D8\u5206\u7ED9\u4E00\u4E2A\u5206\u533A\u3002</p><p>\u7136\u540E\u8FDB\u884C\u5206\u533A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">parted</span> /dev/vdd <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vde <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vdf <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vdg <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vdh <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vdi <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vdj <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vdk <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vdl <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vdm <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vdn <span class="token operator">&lt;</span> ./parted.txt
<span class="token function">parted</span> /dev/vdo <span class="token operator">&lt;</span> ./parted.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u7136\u540E\u5BF9\u5982\u4E0A\u5206\u533A\u8FDB\u884C\u683C\u5F0F\u5316\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkfs.ext4 /dev/vdb1
mkfs.ext4 /dev/vdc1
mkfs.ext4 /dev/vdd1
mkfs.ext4 /dev/vde1
mkfs.ext4 /dev/vdf1
mkfs.ext4 /dev/vdg1
mkfs.ext4 /dev/vdh1
mkfs.ext4 /dev/vdi1
mkfs.ext4 /dev/vdj1
mkfs.ext4 /dev/vdk1
mkfs.ext4 /dev/vdl1
mkfs.ext4 /dev/vdm1
mkfs.ext4 /dev/vdn1
mkfs.ext4 /dev/vdo1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u63A5\u7740\u521B\u5EFA\u9700\u8981\u6302\u8F7D\u7684\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /
<span class="token function">mkdir</span> data00 data01 data02 data03 data04 data05 data06 data07 data08 data09 data10 data11 data12 data13
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540E\u5C06\u81EA\u52A8\u6302\u8F7D\u5199\u5165\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdb1 /data00 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdc1 /data01 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdd1 /data02 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vde1 /data03 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdf1 /data04 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdg1 /data05 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdh1 /data06 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdi1 /data07 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdj1 /data08 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdk1 /data09 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdl1 /data10 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdm1 /data11 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdn1 /data12 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/dev/vdo1 /data13 ext4  defaults 0 0&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/fstab
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6267\u884C\u52A0\u8F7D\u547D\u4EE4\uFF0C\u67E5\u770B\u662F\u5426\u6B63\u5E38\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mount</span> -a
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BB0\u5F55\u4E24\u4E2A\u5E38\u7528\u5206\u533A\u547D\u4EE4\u7684\u975E\u4EA4\u4E92\u65B9\u5F0F\uFF0C\u65B9\u4FBF\u65E5\u5E38\u7684\u64CD\u4F5C\u3002</p><h2 id="_3-\u63D2\u66F2" tabindex="-1"><a class="header-anchor" href="#_3-\u63D2\u66F2" aria-hidden="true">#</a> 3\uFF0C\u63D2\u66F2</h2><p>\u8FC7\u7A0B\u4E2D\u8FD8\u9047\u5230\u8FC7\u4E00\u4E2A\u63D2\u66F2\uFF0C<code>vdc</code>\u78C1\u76D8\u5E94\u8BE5\u6309\u7167 fdisk \u98CE\u683C\u6765\u5206\u533A\u5373\u53EF\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u78C1\u76D8\u5E76\u6CA1\u6709\u8D85\u8FC7 2T\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5206\u533A\uFF0C\u4F46\u662F\u5F53\u65F6\u641E\u9519\u4E86\u5206\u533A\u540D\u79F0\uFF0C\u4E8E\u662F\u8BEF\u628A\u6B64\u5206\u533A\u7ED9\u641E\u6210\u4E86 gpt \u98CE\u683C\u7684\uFF0C\u8FD9\u4E2A\u65F6\u5019\u60F3\u8981\u6539\u56DE mbr \u5206\u533A\u7C7B\u578B\uFF0C\u53D1\u73B0\u5E76\u4E0D\u592A\u5BB9\u6613\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">parted</span> /dev/vdc
<span class="token punctuation">(</span>parted<span class="token punctuation">)</span>mktable
New disk label type? msdos
Warning: The existing disk label on /dev/vdc will be destroyed and all data on
this disk will be lost. Do you want to continue?
Yes/No?Yes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>\u6CE8\u610F\uFF1A</code>\u8FD9\u4E2A\u5730\u65B9\u5728\u91CD\u65B0\u5B9A\u4E49\u5206\u533A\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u5E76\u4E0D\u80FD\u5199 mbr\uFF0C\u6216\u8005\u5F62\u5982\u5176\u4ED6\u5206\u533A\u5199\u6210 dos\uFF0C\u5982\u679C\u5199\u6210\u8FD9\u4E9B\uFF0C\u547D\u4EE4\u884C\u5C06\u4F1A\u4E00\u76F4\u62A5\u9519\uFF0C\u6B63\u786E\u7684\u5E94\u8BE5\u662F <code>msdos</code>\uFF0C\u7136\u540E\u5728\u4FDD\u5B58\u9000\u51FA\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6B64\u5206\u533A\u5C31\u53D8\u56DE\u6240\u8C13\u7684 mbr \u5206\u533A\u4E86\u3002</p>`,30);function t(p,l){return e}var d=n(a,[["render",t]]);export{d as default};
