import{e as n}from"./app.dbf5d933.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_1-\u6DFB\u52A0\u7528\u6237\u5E76\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#_1-\u6DFB\u52A0\u7528\u6237\u5E76\u6388\u6743" aria-hidden="true">#</a> 1\uFF0C\u6DFB\u52A0\u7528\u6237\u5E76\u6388\u6743</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u7528\u6237</span>
rabbitmqctl add_user rabbitmq <span class="token string">&#39;12345678&#39;</span>
<span class="token comment"># \u6DFB\u52A0\u7528\u6237[\u7BA1\u7406\u5458]\u6807\u7B7E</span>
rabbitmqctl set_user_tags rabbitmq administrator
<span class="token comment"># \u521B\u5EFAvirtual host</span>
rabbitmqctl add_vhost /vhost1
<span class="token comment"># \u4E3A\u7528\u6237\u6388\u6743\u53EF\u4EE5\u8BBF\u95EE\u7684[virtual host]\u548C\u64CD\u4F5C\u7C7B\u578B[\u914D\u7F6E\u3001\u8BFB\u3001\u5199]</span>
rabbitmqctl set_permissions -p /vhost1 rabbitmq <span class="token string">&#39;.*&#39;</span> <span class="token string">&#39;.*&#39;</span> <span class="token string">&#39;.*&#39;</span>
<span class="token comment"># \u542F\u7528rabbitmq_management</span>
rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_2-rabbitmq-\u6743\u9650\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-rabbitmq-\u6743\u9650\u8BE6\u89E3" aria-hidden="true">#</a> 2\uFF0CRabbitMQ \u6743\u9650\u8BE6\u89E3</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89D2\u8272\u5217\u8868:</span>
none\u3001management\u3001policymaker\u3001monitoring\u3001administrator
<span class="token comment"># \u89D2\u8272\u6743\u9650:</span>
\u3010none\u3011
\u4E0D\u80FD\u8BBF\u95EE management_plugin<span class="token punctuation">(</span>\u56FE\u5F62\u7BA1\u7406\u754C\u9762<span class="token punctuation">)</span>
\u3010management\u3011<span class="token punctuation">(</span>\u5355\u4E00virtual hosts\u7528\u6237<span class="token punctuation">)</span>
\u7528\u6237\u53EF\u4EE5\u901A\u8FC7AMQP\u505A\u7684\u4EFB\u4F55\u4E8B\u5916\u52A0\uFF1A
\u5217\u51FA\u81EA\u5DF1\u53EF\u4EE5\u901A\u8FC7AMQP\u767B\u5165\u7684virtual hosts  
\u67E5\u770B\u81EA\u5DF1\u7684virtual hosts\u4E2D\u7684queues, exchanges \u548C bindings
\u67E5\u770B\u548C\u5173\u95ED\u81EA\u5DF1\u7684channels \u548C connections
\u67E5\u770B\u6709\u5173\u81EA\u5DF1\u7684virtual hosts\u7684\u201C\u5168\u5C40\u201D\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u5305\u542B\u5176\u4ED6\u7528\u6237\u5728\u8FD9\u4E9Bvirtual hosts\u4E2D\u7684\u6D3B\u52A8
\u3010policymaker\u3011
management\u53EF\u4EE5\u505A\u7684\u4EFB\u4F55\u4E8B\u5916\u52A0\uFF1A
\u67E5\u770B\u3001\u521B\u5EFA\u548C\u5220\u9664\u81EA\u5DF1\u7684virtual hosts\u6240\u5C5E\u7684policies\u548Cparameters
\u3010monitoring\u3011<span class="token punctuation">(</span>\u76D1\u63A7\u7528\u6237<span class="token punctuation">)</span>
management\u53EF\u4EE5\u505A\u7684\u4EFB\u4F55\u4E8B\u5916\u52A0\uFF1A
\u5217\u51FA\u6240\u6709virtual hosts\uFF0C\u5305\u62EC\u4ED6\u4EEC\u4E0D\u80FD\u767B\u5F55\u7684virtual hosts
\u67E5\u770B\u5176\u4ED6\u7528\u6237\u7684connections\u548Cchannels
\u67E5\u770B\u8282\u70B9\u7EA7\u522B\u7684\u6570\u636E\u5982clustering\u548Cmemory\u4F7F\u7528\u60C5\u51B5
\u67E5\u770B\u771F\u6B63\u7684\u5173\u4E8E\u6240\u6709virtual hosts\u7684\u5168\u5C40\u7684\u7EDF\u8BA1\u4FE1\u606F
\u3010administrator\u3011<span class="token punctuation">(</span>\u5168\u6743\u7528\u6237<span class="token punctuation">)</span>
policymaker\u548Cmonitoring\u53EF\u4EE5\u505A\u7684\u4EFB\u4F55\u4E8B\u5916\u52A0:
\u521B\u5EFA\u548C\u5220\u9664virtual hosts
\u67E5\u770B\u3001\u521B\u5EFA\u548C\u5220\u9664users
\u67E5\u770B\u521B\u5EFA\u548C\u5220\u9664permissions
\u5173\u95ED\u5176\u4ED6\u7528\u6237\u7684connections
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><img src="https://ae01.alicdn.com/kf/HTB1ceCOeMaH3KVjSZFj763FWpXaD.png" alt="img"></p><h2 id="_3-rabbitmq-plugins-\u547D\u4EE4\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_3-rabbitmq-plugins-\u547D\u4EE4\u8BE6\u89E3" aria-hidden="true">#</a> 3\uFF0Crabbitmq-plugins \u547D\u4EE4\u8BE6\u89E3</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u683C\u5F0F\uFF1A</span>
rabbitmq-plugins <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>command options<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793A\u6240\u6709\u7684\u7684\u63D2\u4EF6 -v:\u663E\u793A\u63D2\u4EF6\u7248\u672C -m:\u663E\u793A\u63D2\u4EF6\u540D\u79F0 -E:\u663E\u793A\u660E\u786E\u5DF2\u7ECF\u5F00\u542F\u7684\u63D2\u4EF6 -e:\u663E\u793A\u660E\u786E\u548C\u540E\u53F0\u5F00\u542F\u7684\u63D2\u4EF6</span>
rabbitmq-plugins list <span class="token punctuation">[</span>-v<span class="token operator">|</span>-m<span class="token punctuation">]</span> <span class="token punctuation">[</span>-E<span class="token operator">|</span>-e<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>pattern<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token comment"># \u542F\u7528\u63D2\u4EF6</span>
rabbitmq-plugins <span class="token builtin class-name">enable</span> <span class="token operator">&lt;</span>plugin<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>plugin<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token punctuation">..</span>. <span class="token operator">&lt;</span>plugin_n<span class="token operator">&gt;</span>
<span class="token comment"># \u7981\u7528\u63D2\u4EF6</span>
rabbitmq-plugins disable <span class="token operator">&lt;</span>plugin<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>plugin<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token punctuation">..</span>. <span class="token operator">&lt;</span>plugin_n<span class="token operator">&gt;</span>
<span class="token comment"># \u542F\u7528\u6240\u6709\u63D2\u4EF6</span>
rabbitmq-plugins <span class="token builtin class-name">enable</span> <span class="token punctuation">\\</span>
amqp_client <span class="token punctuation">\\</span>
cowboy <span class="token punctuation">\\</span>
cowlib <span class="token punctuation">\\</span>
rabbitmq_amqp1_0 <span class="token punctuation">\\</span>
rabbitmq_auth_backend_ldap <span class="token punctuation">\\</span>
rabbitmq_auth_mechanism_ssl <span class="token punctuation">\\</span>
rabbitmq_consistent_hash_exchange <span class="token punctuation">\\</span>
rabbitmq_event_exchange <span class="token punctuation">\\</span>
rabbitmq_federation <span class="token punctuation">\\</span>
rabbitmq_federation_management <span class="token punctuation">\\</span>
rabbitmq_jms_topic_exchange <span class="token punctuation">\\</span>
rabbitmq_management <span class="token punctuation">\\</span>
rabbitmq_management_agent <span class="token punctuation">\\</span>
rabbitmq_management_visualiser <span class="token punctuation">\\</span>
rabbitmq_mqtt <span class="token punctuation">\\</span>
rabbitmq_recent_history_exchange <span class="token punctuation">\\</span>
rabbitmq_sharding <span class="token punctuation">\\</span>
rabbitmq_shovel <span class="token punctuation">\\</span>
rabbitmq_shovel_management <span class="token punctuation">\\</span>
rabbitmq_stomp <span class="token punctuation">\\</span>
rabbitmq_top <span class="token punctuation">\\</span>
rabbitmq_tracing <span class="token punctuation">\\</span>
rabbitmq_trust_store <span class="token punctuation">\\</span>
rabbitmq_web_dispatch <span class="token punctuation">\\</span>
rabbitmq_web_stomp <span class="token punctuation">\\</span>
rabbitmq_web_stomp_examples <span class="token punctuation">\\</span>
sockjs <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="_4-rabbitmqctl-\u547D\u4EE4\u5168\u89E3-cli-\u6A21\u5F0F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_4-rabbitmqctl-\u547D\u4EE4\u5168\u89E3-cli-\u6A21\u5F0F\u7BA1\u7406" aria-hidden="true">#</a> 4\uFF0Crabbitmqctl \u547D\u4EE4\u5168\u89E3 (CLI \u6A21\u5F0F\u7BA1\u7406)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u683C\u5F0F\uFF1A</span>
rabbitmqctl <span class="token punctuation">[</span>-n <span class="token operator">&lt;</span>node<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-q<span class="token punctuation">]</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>command options<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token comment"># \u3010\u57FA\u672C\u547D\u4EE4\u3011</span>
<span class="token comment"># \u505C\u6B62\u8FD0\u884Crabbitmq</span>
rabbitmqctl stop <span class="token operator">&lt;</span>pid_file<span class="token operator">&gt;</span>
<span class="token comment"># \u505C\u6B62\u8FD0\u884Crabbitmq\u4E0A\u7684\u5E94\u7528</span>
rabbitmqctl stop_app
<span class="token comment"># \u7B49\u5F85rabbitmq\u670D\u52A1\u542F\u52A8</span>
rabbitmqctl <span class="token function">wait</span> <span class="token operator">&lt;</span>pid_file<span class="token operator">&gt;</span>
<span class="token comment"># \u521D\u59CB\u5316node\u72B6\u6001(\u8981\u5148\u6267\u884Crabbitmqctl stop_app)</span>
rabbitmqctl reset
<span class="token comment"># \u5F3A\u5236\u521D\u59CB\u5316node\u72B6\u6001</span>
rabbitmqctl force_reset
<span class="token comment"># \u8F6E\u8F6C\u65E5\u5FD7\u6587\u4EF6</span>
rabbitmqctl rotate_logs <span class="token operator">&lt;</span>suffix<span class="token operator">&gt;</span>
<span class="token comment"># \u3010cluster\u96C6\u7FA4\u7BA1\u7406\u3011</span>
<span class="token comment"># \u9ED8\u8BA4node\u4EE5disc node\u52A0\u5165\u96C6\u7FA4\uFF0C--ram\u8868\u793Anode\u4EE5ram node\u52A0\u5165\u96C6\u7FA4\u4E2D(\u8981\u5148\u6267\u884Crabbitmqctl stop_app)</span>
rabbitmqctl join_cluster <span class="token operator">&lt;</span>node name<span class="token operator">&gt;</span> --ram
<span class="token comment"># \u663E\u793Acluster\u4E2D\u7684\u6240\u6709node</span>
rabbitmqctl cluster_status
<span class="token comment"># \u6539\u53D8\u4E00\u4E2Acluster\u4E2Dnode\u7684\u6A21\u5F0F\uFF0C\u8BE5\u8282\u70B9\u5728\u8F6C\u6362\u524D\u5FC5\u987B\u5148\u505C\u6B62\uFF0C\u4E0D\u80FD\u628A\u4E00\u4E2A\u96C6\u7FA4\u4E2D\u552F\u4E00\u7684disk node\u8F6C\u5316\u4E3Aram node</span>
rabbitmqctl change_cluster_node_type disc <span class="token operator">|</span> <span class="token function">ram</span>
<span class="token comment"># \u8FDC\u7A0B\u79FB\u9664cluster\u4E2D\u7684\u4E00\u4E2Anode\uFF0C\u524D\u63D0\u662F\u8BE5node\u5FC5\u987B\u5904\u4E8Eoffline\u72B6\u6001\uFF0C\u5982\u679C\u662Fonline\u72B6\u6001\uFF0C\u5219\u9700\u8981\u52A0--offline\u53C2\u6570\u3002</span>
rabbitmqctl forget_cluster_node --offline
<span class="token comment"># \u8FDC\u7A0B\u66F4\u65B0cluster\u4E2D\u7684node</span>
rabbitmqctl update_cluster_nodes clusternode
<span class="token comment"># \u540C\u6B65\u955C\u50CF\u961F\u5217</span>
rabbitmqctl sync_queue queue
<span class="token comment"># \u53D6\u6D88\u540C\u6B65\u955C\u50CF\u961F\u5217</span>
rabbitmqctl cancel_sync_queue queue 
<span class="token comment"># \u3010\u7528\u6237\u7BA1\u7406\u3011</span>
<span class="token comment"># \u6DFB\u52A0rabbitmq\u7528\u6237</span>
rabbitmqctl add_user <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span>
<span class="token comment"># \u5220\u9664rabbitmq\u7528\u6237</span>
rabbitmqctl delete_user <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>
<span class="token comment"># \u6539\u53D8rabbitmq\u7528\u6237\u5BC6\u7801</span>
rabbitmqctl change_password <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>newpassword<span class="token operator">&gt;</span>
<span class="token comment"># \u6E05\u9664\u7528\u6237\u5BC6\u7801\uFF0C\u7981\u6B62\u7528\u6237\u767B\u5F55</span>
rabbitmqctl clear_password <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>
<span class="token comment"># \u8BBE\u7F6E\u7528\u6237\u6807\u7B7E</span>
rabbitmqctl set_user_tags <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>tag<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>tag<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token punctuation">..</span>. <span class="token operator">&lt;</span>tag_n<span class="token operator">&gt;</span>
<span class="token comment"># \u5217\u51FA\u7528\u6237</span>
rabbitmqctl list_users
<span class="token comment"># \u521B\u5EFA\u4E00\u4E2Avhosts</span>
rabbitmqctl add_vhost <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span>
<span class="token comment"># \u5220\u9664\u4E00\u4E2Avhosts</span>
rabbitmqctl delete_vhost <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span>
<span class="token comment"># \u5217\u51FAvhosts</span>
rabbitmqctl list_vhosts <span class="token operator">&lt;</span>vhostinfoitem<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>vhostinfoitem<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token punctuation">..</span>. <span class="token operator">&lt;</span>vhostinfoitem_n<span class="token operator">&gt;</span>
<span class="token comment"># \u9488\u5BF9\u4E00\u4E2Avhosts \u7ED9\u7528\u6237\u8D4B\u4E88\u76F8\u5173\u6743\u9650</span>
rabbitmqctl set_permissions <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>user<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>conf<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>write<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>read<span class="token operator">&gt;</span>
<span class="token comment"># \u6E05\u9664\u4E00\u4E2A\u7528\u6237\u5BF9vhosts\u7684\u6743\u9650</span>
rabbitmqctl clear_permissions <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>
<span class="token comment"># \u5217\u51FA\u54EA\u4E9B\u7528\u6237\u53EF\u4EE5\u8BBF\u95EE\u8BE5vhosts</span>
rabbitmqctl list_permissions <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token comment">#\u5217\u51FA\u8BE5\u7528\u6237\u7684\u8BBF\u95EE\u6743\u9650</span>
rabbitmqctl list_user_permissions <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>
<span class="token comment"># \u4FEE\u6539vhost\u8DEF\u5F84\u53C2\u6570</span>
rabbitmqctl set_parameter <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>component_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>
<span class="token comment"># \u6E05\u9664vhost\u8DEF\u5F84\u53C2\u6570</span>
rabbitmqctl clear_parameter <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>component_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span>
<span class="token comment"># \u5217\u51FAvhost\u8DEF\u5F84\u53C2\u6570</span>
rabbitmqctl list_parameters <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token comment"># \u3010\u7B56\u7565policy\u7BA1\u7406\u3011</span>
<span class="token comment"># name:\u7B56\u7565\u540D\u79F0 pattern:\u5339\u914D\u8D44\u6E90\u6B63\u5219\u8868\u8FBE\u5F0F apply-to:\u7B56\u7565\u5E94\u7528\u7C7B\u578B\u8303\u56F4\uFF0C\u6709[all\u3001queues\u3001exchange] priority:\u6574\u6570\u4F18\u5148\u7EA7 definition:json\u683C\u5F0F\u8BBE\u7F6E\u7684\u7B56\u7565</span>
rabbitmqctl set_policy <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--priority <span class="token operator">&lt;</span>priority<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--apply-to <span class="token operator">&lt;</span>apply-to<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>pattern<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>definition<span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token operator">&gt;</span>
<span class="token comment">#\u6E05\u9664\u4E00\u4E2A\u7B56\u7565</span>
rabbitmqctl clear_policy <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
<span class="token comment"># \u5217\u51FA\u5DF2\u6709\u7684\u7B56\u7565</span>
rabbitmqctl list_policies <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token comment"># \u3010queues exchanges\u3011</span>
<span class="token comment"># \u8FD4\u56DEqueue\u7684\u4FE1\u606F\uFF0C\u5982\u679C\u7701\u7565\u4E86-p\u53C2\u6570\uFF0C\u5219\u9ED8\u8BA4\u663E\u793A\u7684\u662F&quot;/&quot;vhosts\u7684\u4FE1\u606F\u3002</span>
rabbitmqctl list_queues <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>queueinfoitem<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token comment"># \u8FD4\u56DEexchange\u7684\u4FE1\u606F</span>
rabbitmqctl list_exchanges <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>exchangeinfoitem<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token comment"># \u8FD4\u56DE\u7ED1\u5B9A\u4FE1\u606F</span>
rabbitmqctl list_bindings <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>bindinginfoitem<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token comment"># \u8FD4\u56DE\u94FE\u63A5\u4FE1\u606F</span>
rabbitmqctl list_connections <span class="token punctuation">[</span><span class="token operator">&lt;</span>connectioninfoitem<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token comment"># \u8FD4\u56DE\u76EE\u524D\u6240\u6709\u7684channels</span>
rabbitmqctl list_channels <span class="token punctuation">[</span><span class="token operator">&lt;</span>channelinfoitem<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token comment"># \u8FD4\u56DEconsumers</span>
rabbitmqctl list_consumers <span class="token punctuation">[</span>-p <span class="token operator">&lt;</span>vhostpath<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token comment"># \u663E\u793Abroker\u7684\u72B6\u6001</span>
rabbitmqctl status
<span class="token comment"># \u663E\u793A\u73AF\u5883\u53C2\u6570\u7684\u4FE1\u606F</span>
rabbitmqctl environment
<span class="token comment"># \u8FD4\u56DE\u4E00\u4E2A\u670D\u52A1\u72B6\u6001report</span>
rabbitmqctl report
<span class="token comment"># \u8FD4\u56DE\u4E00\u4E2A\u670D\u52A1\u72B6\u6001eval</span>
rabbitmqctl <span class="token builtin class-name">eval</span> <span class="token operator">&lt;</span>expr<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h2 id="_5-rabbitmqctl-\u7BA1\u7406\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-rabbitmqctl-\u7BA1\u7406\u65B9\u5F0F" aria-hidden="true">#</a> 5\uFF0Crabbitmqctl \u7BA1\u7406\u65B9\u5F0F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u7528rabbitmq_management</span>
rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management
<span class="token comment"># (\u4E0D\u6210\u529F\u5219\u5148\u6267\u884C:rabbitmqctl start_app)</span>
<span class="token comment"># web\u8BBF\u95EE\uFF1A</span>
http://<span class="token punctuation">[</span>ip<span class="token punctuation">]</span>:15672
<span class="token comment"># api\u8BBF\u95EE\uFF1A</span>
http://<span class="token punctuation">[</span>ip<span class="token punctuation">]</span>:15672/api
<span class="token comment"># cli\u8BBF\u95EE\uFF1A</span>
http://<span class="token punctuation">[</span>ip<span class="token punctuation">]</span>:15672/cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,11);function t(e,o){return p}var c=s(a,[["render",t]]);export{c as default};
