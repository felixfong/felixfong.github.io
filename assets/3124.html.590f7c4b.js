import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="_1-\u5B89\u88C5-php7-\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-php7-\u4F9D\u8D56" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5 php7 \u4F9D\u8D56</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum  <span class="token function">install</span> epel-release
yum <span class="token function">install</span> -y gcc gcc-c++ libxml2 libxml2-devel openssl openssl-devel <span class="token function">bzip2</span> bzip2-devel libcurl libcurl-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel gmp gmp-devel libmcrypt libmcrypt-devel readline readline-devel libxslt libxslt-devel pcre-devel autoconf librabbitmq librabbitmq-devel libmcrypt libmcrypt-devel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_2-\u6DFB\u52A0\u7528\u6237\u7528\u6237\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-\u6DFB\u52A0\u7528\u6237\u7528\u6237\u7EC4" aria-hidden="true">#</a> 2\uFF0C\u6DFB\u52A0\u7528\u6237\u7528\u6237\u7EC4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">groupadd</span> www
<span class="token function">useradd</span> -r -g www www
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_3-\u5B89\u88C5-php7-0-27" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5-php7-0-27" aria-hidden="true">#</a> 3\uFF0C\u5B89\u88C5 php7.0.27</h2><p>\u4E0B\u8F7D http://at2.php.net/get/php-7.0.27.tar.gz/from/this/mirror</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -xzvf php php7.0.27.tar.gz
<span class="token builtin class-name">cd</span> php-php7.0.27
./configure <span class="token punctuation">\\</span>
--prefix<span class="token operator">=</span>/usr/local/php <span class="token punctuation">\\</span>
--enable-fpm --with-fpm-user<span class="token operator">=</span>www --with-fpm-group<span class="token operator">=</span>www --enable-inline-optimization --disable-rpath <span class="token punctuation">\\</span>
--enable-shared --enable-soap --with-libxml-dir --with-xmlrpc --with-openssl --with-mhash --with-pcre-regex <span class="token punctuation">\\</span>
--with-sqlite3 --with-zlib --enable-bcmath --with-iconv --with-bz2 --enable-calendar --with-curl --with-cdb <span class="token punctuation">\\</span>
--enable-dom --enable-exif --enable-fileinfo --enable-filter --with-pcre-dir --enable-ftp --with-gd <span class="token punctuation">\\</span>
--with-openssl-dir --with-jpeg-dir --with-png-dir --with-zlib-dir --with-freetype-dir --with-gmp <span class="token punctuation">\\</span>
--enable-gd-jis-conv --with-gettext --with-mhash --enable-json --enable-mbstring --enable-mbregex <span class="token punctuation">\\</span>
--enable-mbregex-backtrack --with-libmbfl --with-onig --enable-pdo --with-mysqli<span class="token operator">=</span>mysqlnd <span class="token punctuation">\\</span>
--with-pdo-mysql<span class="token operator">=</span>mysqlnd --with-zlib-dir --with-pdo-sqlite --with-readline --enable-session --enable-shmop <span class="token punctuation">\\</span>
--enable-simplexml --enable-sockets --enable-sysvmsg --enable-sysvsem --enable-sysvshm --enable-wddx <span class="token punctuation">\\</span>
--with-xsl --enable-zip --enable-mysqlnd-compression-support --with-pear --disable-debug --enable-pcntl
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_4-\u914D\u7F6E-php-fpm" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6E-php-fpm" aria-hidden="true">#</a> 4\uFF0C\u914D\u7F6E php-fpm</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> php.ini-production /usr/local/php/etc/php.ini
<span class="token function">cp</span> /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
<span class="token function">cp</span> /usr/local/php/etc/php-fpm.d/www.conf.default /usr/local/php/etc/php-fpm.d/www.conf
<span class="token function">cp</span> sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_5-\u8BBE\u7F6E-php-ini-\u65F6\u533A" tabindex="-1"><a class="header-anchor" href="#_5-\u8BBE\u7F6E-php-ini-\u65F6\u533A" aria-hidden="true">#</a> 5\uFF0C\u8BBE\u7F6E php.ini \u65F6\u533A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /usr/local/php/etc/php.ini
date.timezone <span class="token operator">=</span> <span class="token string">&quot;Asia/Shanghai&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="http://t.eryajf.net/imgs/2021/09/e9ecfc5e2eca5d0a.jpg" alt="img"></p><h2 id="_6-\u914D\u7F6E\u901A\u8FC7-systemd-\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_6-\u914D\u7F6E\u901A\u8FC7-systemd-\u7BA1\u7406" aria-hidden="true">#</a> 6\uFF0C\u914D\u7F6E\u901A\u8FC7 systemd \u7BA1\u7406</h2><p>\u9996\u5148\u66F4\u6539 pid \u8DEF\u5F84\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/php/etc/php-fpm.conf
//\u4FEE\u6539\u5982\u4E0B\u5185\u5BB9
pid <span class="token operator">=</span> /var/run/php-fpm.pid
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6DFB\u52A0\u542F\u52A8\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /usr/lib/systemd/system/php-fpm.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=php for systemd
After=syslog.target network.target
[Service]
Type=forking
PIDFile=/var/run/php-fpm.pid
ExecStart=/usr/local/php/sbin/php-fpm
ExecReload=/bin/kill -USR2 <span class="token variable">$MAINPID</span>
PrivateTmp=true
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u9A8C\u8BC1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ systemctl daemon-reload
$ systemctl start php-fpm
$ systemctl status php-fpm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_7-\u6DFB\u52A0\u5230\u7CFB\u7EDF\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_7-\u6DFB\u52A0\u5230\u7CFB\u7EDF\u8DEF\u5F84" aria-hidden="true">#</a> 7\uFF0C \u6DFB\u52A0\u5230\u7CFB\u7EDF\u8DEF\u5F84</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
export PHP_HOME=&quot;/usr/local/php&quot;
export PATH=&quot;$PATH:$PHP_HOME/bin&quot;
EOF</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,21);function p(l,i){return e}var c=s(a,[["render",p]]);export{c as default};
