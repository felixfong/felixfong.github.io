import{e as n}from"./app.dbf5d933.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h2 id="_1-\u8D44\u6E90\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-\u8D44\u6E90\u9700\u6C42" aria-hidden="true">#</a> 1\uFF0C\u8D44\u6E90\u9700\u6C42</h2><ul><li>\u914D\u7F6E\uFF1A\u5728\u8D8A\u5927\u8D8A\u597D\u7684\u524D\u63D0\u4E0B\uFF0C\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E<code>8C16G</code>\u3002</li><li>\u5B58\u50A8\uFF1A\u5EFA\u8BAE<code>100G\u7CFB\u7EDF\u76D8</code>+<code>800G\u6570\u636E\u76D8</code>\u3002\u76D8\u7684\u89C4\u683C\u8D8A\u9AD8\u8D8A\u597D\u3002\u6700\u4F4E<code>SSD</code>\uFF0C\u5176\u4E2D\u6570\u636E\u76D8\u53EF\u914C\u60C5\u52A0\u5927\uFF0C800G\u6570\u636E\u76D8\u7BA1\u4E09\u4E94\u5E74\u6CA1\u95EE\u9898\u3002 <ul><li>\u6B64\u5904\u8981\u8003\u8651\u5230\u5907\u4EFD\u6587\u4EF6\uFF0C\u5982\u679C\u6570\u636E\u76EE\u5F55\u6709100G\u5DE6\u53F3\uFF0C\u90A3\u4E48\u5907\u4EFD\u6587\u4EF6\u53EF\u80FD\u4F1A\u6709\u516B\u5341\u591AG\uFF0C\u672C\u5730\u4FDD\u7559\u4E0D\u53EF\u8FC7\u591A\uFF0C\u5C3D\u91CF\u5F02\u5730\u5907\u4EFD\u3002</li></ul></li><li><code>\u6CE8\u610F\uFF1A</code><ul><li>\u6CE8\u610F\u6570\u636E\u76D8\u6302\u8F7D\u5230/data\u76EE\u5F55\u4E2D\u3002</li><li>\u6CE8\u610F\u7EC4\u4EF6\u6570\u636E\u76EE\u5F55\u901A\u8FC7\u672C\u5730\u6302\u8F7D\u8FDB\u884C\u4E86\u8F6F\u94FE\uFF0C\u6B64\u4E8B\u513F\u4E0B\u8FB9\u8BE6\u8FF0\u3002</li></ul></li></ul><h2 id="_2-\u5B89\u88C5\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u8F6F\u4EF6" aria-hidden="true">#</a> 2\uFF0C\u5B89\u88C5\u8F6F\u4EF6</h2><p>gitlab\u7684\u5B89\u88C5\u975E\u5E38\u7B80\u5355\uFF0C\u8FD9\u91CC\u4E0D\u505A\u8D58\u8FF0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ yum install -y curl openssh-server postfix cronie
$ curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash
$ yum install gitlab-ce
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9ED8\u8BA4\u5B89\u88C5\u5F53\u524Dyum\u6E90\u5185\u7684\u6700\u65B0\u7248\u672C\uFF0C\u5982\u679C\u60F3\u8981\u5B89\u88C5\u6307\u5B9A\u7248\u672C\uFF0C\u53EF\u8FD0\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A<code>yum install gitlab-ce-11.0.2</code>\u3002</p><h2 id="_3-\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 3\uFF0C\u51C6\u5907\u5DE5\u4F5C</h2><p>\u521B\u5EFA\u6570\u636E\u76F8\u5173\u9700\u6C42\u76EE\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ mkdir -p /data/gitlab-all-in-one/{backups,git-data,var-opt-gitlab}
$ useradd git &amp;&amp; chown -R git.git /data/gitlab-all-in-one
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u8BF4\u660E\uFF1A <ul><li><code>git-data\uFF1A</code>gitlab\u4EE3\u7801\u6570\u636E\u76EE\u5F55\u3002</li><li><code>backups\uFF1A</code>\u6570\u636E\u5907\u4EFD\u76EE\u5F55\u3002</li><li><code>var-opt-gitlab\uFF1A</code>\u7EC4\u4EF6\u6570\u636E\u76EE\u5F55\u3002</li></ul></li></ul><p><code>\u91CD\u8981\uFF1A</code>\u6CE8\u610F\u7EC4\u4EF6\u6570\u636E\u76EE\u5F55\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u9ED8\u8BA4\u4E3A\uFF1A<code>/var/opt/gitlab</code>\uFF0C\u4E3A\u4E86\u4E0E\u7CFB\u7EDF\u76D8\u8FDB\u884C\u9694\u79BB\u4EE5\u53CA\u6570\u636E\u5B58\u50A8\u76EE\u5F55\u7EDF\u4E00\uFF0C\u9700\u8981\u8FDB\u884C\u672C\u5730\u6302\u8F7D\u5904\u7406\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ echo &#39;/data/gitlab-all-in-one/var-opt-gitlab  /var/opt/gitlab  none bind 0 0&#39; &gt;&gt; /etc/fstab
$ mkdir /var/opt/gitlab
$ mount -a
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B64\u65F6\u7CFB\u7EDF\u7684 <code>/var/opt/gitlab</code>\u6700\u7EC8\u6307\u5411\u7684\u5176\u5B9E\u662F <code>/data/gitlab-all-in-one/var-opt-gitlab</code>\u3002</p><p><code>\u6CE8\u610F\uFF1A</code>\u8FD9\u91CC\u5E76<code>\u4E0D\u80FD\u901A\u8FC7\u8F6F\u94FE</code>\u8FDB\u884C\u5904\u7406\uFF0C\u5B9E\u6D4B\u8F6F\u94FE\u7684\u65B9\u5F0F\u4F1A\u5BFC\u81F4\u90E8\u5206\u7EC4\u4EF6\u8D77\u4E0D\u6765\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/0f9814766abf42ae.jpg" alt=""></p><h2 id="_4-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 4\uFF0C\u914D\u7F6E\u6587\u4EF6</h2><p>\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\uFF0C\u5176\u4F59\u672A\u663E\u793A\u6307\u5B9A\u7684\uFF0C\u7EDF\u4E00\u8D70\u9ED8\u8BA4\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ egrep -v &#39;^#|^$&#39; gitlab.rb
external_url &#39;https://gitlab.eryajf.net&#39;
gitlab_rails[&#39;time_zone&#39;] = &#39;Asia/Shanghai&#39;
gitlab_rails[&#39;smtp_enable&#39;] = true
gitlab_rails[&#39;smtp_address&#39;] = &quot;smtp.exmail.qq.com&quot;
gitlab_rails[&#39;smtp_port&#39;] = 465
gitlab_rails[&#39;smtp_user_name&#39;] = &quot;no-reply@eryajf.net&quot;
gitlab_rails[&#39;smtp_password&#39;] = &quot;test&quot;
gitlab_rails[&#39;smtp_authentication&#39;] = &quot;login&quot;
gitlab_rails[&#39;smtp_enable_starttls_auto&#39;] = true
gitlab_rails[&#39;smtp_tls&#39;] = true
gitlab_rails[&#39;gitlab_email_from&#39;] = &#39;no-reply@eryajf.com&#39;
gitlab_rails[&#39;smtp_domain&#39;] = &quot;exmail.qq.com&quot;
gitlab_rails[&#39;ldap_servers&#39;] = YAML.load &lt;&lt;-&#39;EOS&#39;
  main: # &#39;main&#39; is the GitLab &#39;provider ID&#39; of this LDAP server
    label: &#39;LDAP&#39;
    host: &#39;ldap.eryajf.net&#39;
    port: 389
    uid: &#39;sn&#39;
    bind_dn: &#39;cn=admin,dc=eryajf,dc=net&#39;
    password: &#39;test&#39;
    encryption: &#39;plain&#39; # &quot;start_tls&quot; or &quot;simple_tls&quot; or &quot;plain&quot;
    verify_certificates: true
    smartcard_auth: false
    active_directory: false
    allow_username_or_email_login: false
    lowercase_usernames: false
    block_auto_created_users: false
    base: &#39;ou=staff,dc=eryajf,dc=net&#39;
    user_filter: &#39;&#39;
    ## EE only
    group_base: &#39;&#39;
    admin_group: &#39;&#39;
    sync_ssh_keys: false
EOS
gitlab_rails[&#39;manage_backup_path&#39;] = true
gitlab_rails[&#39;backup_path&#39;] = &quot;/data/gitlab-all-in-one/backups&quot;
git_data_dirs({
  &quot;default&quot; =&gt; {
    &quot;path&quot; =&gt; &quot;/data/gitlab-all-in-one/git-data&quot;
   }
})
nginx[&#39;enable&#39;] = true
nginx[&#39;client_max_body_size&#39;] = &#39;512m&#39;
nginx[&#39;redirect_http_to_https&#39;] = true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>\u7136\u540E\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u91CD\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitlab-ctl reconfigure
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5F53\u770B\u5230\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Running handlers:
Running handlers complete
Chef Infra Client finished, 570/1519 resources updated in 03 minutes 11 seconds

Notes:
Default admin account has been configured with following details:
Username: root
Password: You didn&#39;t opt-in to print initial root password to STDOUT.
Password stored to /etc/gitlab/initial_root_password. This file will be cleaned up in first reconfigure run after 24 hours.

NOTE: Because these credentials might be present in your log files in plain text, it is highly recommended to reset the password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

gitlab Reconfigured!
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5219\u8BF4\u660E\u914D\u7F6E\u5B8C\u6210\u4E86\u3002</p>`,23);function l(r,i){return e}var b=a(s,[["render",l]]);export{b as default};
