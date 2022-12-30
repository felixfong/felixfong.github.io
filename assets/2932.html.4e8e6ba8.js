import{e as a}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},e=a(`<h2 id="_1-rabbitmq-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-rabbitmq-\u7B80\u4ECB" aria-hidden="true">#</a> 1\uFF0CRabbitMQ \u7B80\u4ECB</h2><p>RabbitMQ \u662F\u4E00\u4E2A\u5F00\u6E90\u7684 AMQP \u5B9E\u73B0\uFF0C\u670D\u52A1\u5668\u7AEF\u7528 Erlang \u8BED\u8A00\u7F16\u5199\uFF0C\u652F\u6301\u591A\u79CD\u5BA2\u6237\u7AEF\uFF0C\u5982\uFF1APython\u3001Ruby\u3001.NET\u3001Java\u3001JMS\u3001C\u3001PHP\u3001ActionScript\u3001XMPP\u3001STOMP \u7B49\uFF0C\u652F\u6301 AJAX\u3002\u7528\u4E8E\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u5B58\u50A8\u8F6C\u53D1\u6D88\u606F\uFF0C\u5728\u6613\u7528\u6027\u3001\u6269\u5C55\u6027\u3001\u9AD8\u53EF\u7528\u6027\u7B49\u65B9\u9762\u8868\u73B0\u4E0D\u4FD7\u3002</p><p>AMQP\uFF0C\u5373 Advanced message Queuing Protocol\uFF0C\u9AD8\u7EA7\u6D88\u606F\u961F\u5217\u534F\u8BAE\uFF0C\u662F\u5E94\u7528\u5C42\u534F\u8BAE\u7684\u4E00\u4E2A\u5F00\u653E\u6807\u51C6\uFF0C\u4E3A\u9762\u5411\u6D88\u606F\u7684\u4E2D\u95F4\u4EF6\u8BBE\u8BA1\u3002\u6D88\u606F\u4E2D\u95F4\u4EF6\u4E3B\u8981\u7528\u4E8E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u89E3\u8026\uFF0C\u6D88\u606F\u7684\u53D1\u9001\u8005\u65E0\u9700\u77E5\u9053\u6D88\u606F\u4F7F\u7528\u8005\u7684\u5B58\u5728\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002</p><p>AMQP \u7684\u4E3B\u8981\u7279\u5F81\u662F\u9762\u5411\u6D88\u606F\u3001\u961F\u5217\u3001\u8DEF\u7531\uFF08\u5305\u62EC\u70B9\u5BF9\u70B9\u548C\u53D1\u5E03 / \u8BA2\u9605\uFF09\u3001\u53EF\u9760\u6027\u3001\u5B89\u5168\u3002</p><p><img src="https://ae01.alicdn.com/kf/HTB1ceCOeMaH3KVjSZFj763FWpXaD.png" alt="img"></p><h2 id="_2-\u73AF\u5883\u51C6\u5907\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u73AF\u5883\u51C6\u5907\u3002" aria-hidden="true">#</a> 2\uFF0C\u73AF\u5883\u51C6\u5907\u3002</h2><ul><li>CentOS \u7248\u672C\uFF1ACentOS Linux release 7.5.1804 (Core)</li><li>RabbitMQ \u7248\u672C\uFF1ARabbitMQ 3.6</li></ul><p>\u9632\u706B\u5899\u4E4B\u7C7B\u7684\u5168\u90E8\u5173\u6389\u3002</p><h2 id="_3-\u5B89\u88C5\u670D\u52A1\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5\u670D\u52A1\u3002" aria-hidden="true">#</a> 3\uFF0C\u5B89\u88C5\u670D\u52A1\u3002</h2><h3 id="_1-\u5B89\u88C5-erlang" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-erlang" aria-hidden="true">#</a> 1\uFF0C\u5B89\u88C5 Erlang</h3><p>RabbitMQ \u5B89\u88C5\u9700\u8981\u4F9D\u8D56 Erlang \u73AF\u5883</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt
<span class="token function">wget</span> http://www.rabbitmq.com/releases/erlang/erlang-19.0.4-1.el7.centos.x86_64.rpm
yum -y <span class="token function">install</span> erlang-19.0.4-1.el7.centos.x86_64.rpm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-\u5B89\u88C5-rabbitmq" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5-rabbitmq" aria-hidden="true">#</a> 2, \u5B89\u88C5 RabbitMQ</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> http://www.rabbitmq.com/releases/rabbitmq-server/v3.6.10/rabbitmq-server-3.6.10-1.el7.noarch.rpm
yum -y <span class="token function">install</span> rabbitmq-server-3.6.10-1.el7.noarch.rpm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_4-\u542F\u52A8\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u52A8\u670D\u52A1" aria-hidden="true">#</a> 4\uFF0C\u542F\u52A8\u670D\u52A1</h2><p>\u542F\u52A8\u524D\u5148\u6DFB\u52A0\u4E00\u4E0B\u914D\u7F6E\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/rabbitmq/rabbitmq.config
<span class="token punctuation">[</span><span class="token punctuation">{</span>rabbit, <span class="token punctuation">[</span><span class="token punctuation">{</span>loopback_users, <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u8FD9\u91CC\u7684\u610F\u601D\u662F\u5F00\u653E\u4F7F\u7528\uFF0Crabbitmq \u9ED8\u8BA4\u521B\u5EFA\u7684\u7528\u6237 guest\uFF0C\u5BC6\u7801\u4E5F\u662F guest\uFF0C\u8FD9\u4E2A\u7528\u6237\u9ED8\u8BA4\u53EA\u80FD\u662F\u672C\u673A\u8BBF\u95EE\uFF0Clocalhost \u6216\u8005 127.0.0.1\uFF0C\u4ECE\u5916\u90E8\u8BBF\u95EE\u9700\u8981\u6DFB\u52A0\u4E0A\u9762\u7684\u914D\u7F6E\u3002</li></ul><p>\u4FDD\u5B58\u914D\u7F6E\u4E4B\u540E\u542F\u52A8\u670D\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start rabbitmq-server
systemctl status rabbitmq-server
systemctl <span class="token builtin class-name">enable</span> rabbitmq-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_5-\u5F00\u542F-web-\u7BA1\u7406\u3002" tabindex="-1"><a class="header-anchor" href="#_5-\u5F00\u542F-web-\u7BA1\u7406\u3002" aria-hidden="true">#</a> 5\uFF0C\u5F00\u542F web \u7BA1\u7406\u3002</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/sbin/rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management
systemctl restart rabbitmq-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u8BBF\u95EE\uFF1A<code>http://127.0.0.1:15672</code></li><li>\u7528\u6237\u540D\uFF1Aguest</li><li>\u5BC6\u7801\uFF1Aguest</li></ul><h2 id="_6-\u521B\u5EFA\u7BA1\u7406\u7528\u6237\u3002" tabindex="-1"><a class="header-anchor" href="#_6-\u521B\u5EFA\u7BA1\u7406\u7528\u6237\u3002" aria-hidden="true">#</a> 6\uFF0C\u521B\u5EFA\u7BA1\u7406\u7528\u6237\u3002</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rabbitmqctl add_user rabbitmq_isj <span class="token string">&#39;jfghLK&amp;I@#MK&amp;*hi123&#39;</span>
rabbitmqctl set_user_tags rabbitmq_isj administrator
rabbitmqctl add_vhost /isj_vhost
rabbitmqctl  set_permissions -p /isj_vhost rabbitmq_isj <span class="token string">&#39;.*&#39;</span> <span class="token string">&#39;.*&#39;</span> <span class="token string">&#39;.*&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_7-\u53C2\u8003\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_7-\u53C2\u8003\u5730\u5740" aria-hidden="true">#</a> 7\uFF0C\u53C2\u8003\u5730\u5740</h2><ul><li>http://t.cn/Ai09lvBE</li></ul>`,27);function r(i,t){return e}var p=s(n,[["render",r]]);export{p as default};
