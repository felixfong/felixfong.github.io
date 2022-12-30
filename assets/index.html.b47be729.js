import{e as i}from"./app.dbf5d933.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const p={},t=i('<h2 id="_0-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_0-\u6982\u8FF0" aria-hidden="true">#</a> 0. \u6982\u8FF0</h2><p>\u5728TCP/IP\u7F51\u7EDC\u5206\u5C42\u6A21\u578B\u91CC\uFF0C\u6574\u4E2A\u534F\u8BAE\u5206\u6210\u4E86\u7269\u7406\u5C42\u3001\u94FE\u8DEF\u5C42\u3001\u7F51\u7EDC\u5C42\u3001\u4F20\u8F93\u5C42\u548C\u5E94\u7528\u5C42\u3002\u7269\u7406\u5C42\u5BF9\u5E94\u7F51\u5361\u548C\u7F51\u7EBF\uFF0C\u5E94\u7528\u5C42\u5BF9\u5E94\u5E38\u89C1\u7684Nginx\u548CFtp\u7B49\u5404\u79CD\u5E94\u7528\u3002 Linux\u5B9E\u73B0\u7684\u662F\u94FE\u8DEF\u5C42\u3001\u7F51\u7EDC\u5C42\u548C\u4F20\u8F93\u5C42\u8FD9\u4E09\u5C42\u3002</p><p>\u5728Linux\u5185\u6838\u5B9E\u73B0\u4E2D\uFF0C\u94FE\u8DEF\u5C42\u534F\u8BAE\u9760\u7F51\u5361\u9A71\u52A8\u6765\u5B9E\u73B0\uFF0C\u5185\u6838\u534F\u8BAE\u6808\u6765\u5B9E\u73B0\u7F51\u7EDC\u5C42\u548C\u4F20\u8F93\u5C42\u3002\u5185\u6838\u5BF9\u66F4\u4E0A\u5C42\u7684\u5E94\u7528\u5C42\u63D0\u4F9Bsocket\u63A5\u53E3\u6765\u4F9B\u7528\u6237\u8FDB\u7A0B\u8BBF\u95EE <img src="https://raw.githubusercontent.com/felixfong/illustrations/main/png/linux tcp/ip\u7F51\u7EDC\u5206\u5C42\u6A21\u578B.png" alt="img" title="tcp/ip\u7F51\u7EDC\u5206\u5C42\u6A21\u578B"></p><p>\u9996\u5148\uFF0C\u5728\u5F00\u59CB\u6536\u5305\u4E4B\u524D\uFF0CLinux\u9700\u8981\u505A\u5F88\u591A\u7684\u51C6\u5907\u5DE5\u4F5C\uFF1A</p><ul><li>\u521B\u5EFAksoftirqd\u7EBF\u7A0B\uFF0C\u4E3A\u5B83\u8BBE\u7F6E\u597D\u5B83\u81EA\u5DF1\u7684\u7EBF\u7A0B\u51FD\u6570\uFF0C\u540E\u9762\u7528\u5B83\u6765\u5904\u7406\u8F6F\u4E2D\u65AD</li><li>\u534F\u8BAE\u6808\u6CE8\u518C\uFF0CLinux\u8981\u5B9E\u73B0\u8BB8\u591A\u534F\u8BAE\uFF0C\u6BD4\u5982arp\u3001icmp\u3001ip\u3001udp\u3001tcp\uFF0C\u6BCF\u4E00\u4E2A\u534F\u8BAE\u90FD\u4F1A\u5C06\u81EA\u5DF1\u7684\u5904\u7406\u51FD\u6570\u6CE8\u518C\u4E00\u4E0B\uFF0C\u65B9\u4FBF\u5305\u6765\u4E86\u8FC5\u901F\u627E\u5230\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570</li><li>\u7F51\u5361\u9A71\u52A8\u521D\u59CB\u5316\uFF0C\u6BCF\u4E2A\u9A71\u52A8\u90FD\u6709\u4E00\u4E2A\u521D\u59CB\u5316\u51FD\u6570\uFF0C\u5185\u6838\u4F1A\u8BA9\u9A71\u52A8\u4E5F\u521D\u59CB\u5316\u4E00\u4E0B\uFF0C\u5728\u8FD9\u4E2A\u521D\u59CB\u5316\u8FC7\u7A0B\u4E2D\uFF0C\u628A\u81EA\u5DF1\u7684DMA\u51C6\u5907\u597D\uFF0C\u628ANAPI\u7684poll\u51FD\u6570\u544A\u8BC9\u5185\u6838</li><li>\u542F\u52A8\u7F51\u5361\uFF0C\u5206\u914DRX\u3001TX\u961F\u5217\uFF0C\u6CE8\u518C\u4E2D\u65AD\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570</li></ul><p>\u5F53\u4E0A\u9762ready\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u6253\u5F00\u786C\u4E2D\u65AD\uFF0C\u7B49\u5F85\u6570\u636E\u5305\u7684\u5230\u6765\u4E86\u3002 \u5F53\u6570\u636E\u5230\u6765\u4E86\u4E4B\u540E\uFF0C\u7B2C\u4E00\u4E2A\u8FCE\u63A5\u5B83\u7684\u662F\u7F51\u5361\uFF1A</p><ul><li>\u7F51\u5361\u5C06\u6570\u636E\u5E27DMA\u5230\u5185\u5B58Ring Buffer\u4E2D\uFF0C\u7136\u540E\u5411CPU\u53D1\u8D77\u4E2D\u65AD\u901A\u77E5\uFF1B</li><li>CPU\u54CD\u5E94\u4E2D\u65AD\u8BF7\u6C42\uFF0C\u8C03\u7528\u7F51\u5361\u542F\u52A8\u65F6\u6CE8\u518C\u7684\u4E2D\u65AD\u5904\u7406\u51FD\u6570</li><li>\u4E2D\u65AD\u5904\u7406\u51FD\u6570\u51E0\u4E4E\u6CA1\u5E72\u5565\uFF0C\u5C31\u53D1\u8D77\u4E86\u8F6F\u4E2D\u65AD</li><li>\u5185\u6838\u7EBF\u7A0Bksoftirqd\u7EBF\u7A0B\u53D1\u73B0\u6709\u8F6F\u4E2D\u65AD\u8BF7\u6C42\u5230\u6765\uFF0C\u5148\u5173\u95ED\u786C\u4E2D\u65AD</li><li>ksoftirqd\u7EBF\u7A0B\u5F00\u59CB\u8C03\u7528\u9A71\u52A8\u7684poll\u51FD\u6570\u6536\u5305</li><li>poll\u51FD\u6570\u5C06\u6536\u5230\u7684\u5305\u9001\u5230\u534F\u8BAE\u6808\u6CE8\u518C\u7684ip_rcv\u51FD\u6570\u4E2D</li><li>ip_rcv\u51FD\u6570\u518D\u5C06\u5305\u53D1\u9001\u5230udp_rcv\u51FD\u6570\u4E2D\uFF08\u5BF9\u4E8Etcp\u5305\u53D1\u9001\u5230tcp_rcv\u4E2D\uFF09</li></ul><h2 id="_1-\u7F51\u7EDC\u6027\u80FD\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_1-\u7F51\u7EDC\u6027\u80FD\u5DE5\u5177" aria-hidden="true">#</a> 1. \u7F51\u7EDC\u6027\u80FD\u5DE5\u5177</h2><ul><li>\u7CFB\u7EDF\u80FD\u6253\u5F00\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26 /proc/sys/fs/file-max</li><li>\u914D\u7F6E\u548C\u67E5\u770B\u7F51\u7EDC\u63A5\u53E3 ifconfig/ip</li><li>\u67E5\u770B\u7F51\u7EDC\u8FDE\u63A5\u6570 ss -ltnp</li><li>\u67E5\u770B\u7F51\u7EDC\u63A5\u53E3\u7684\u7F51\u7EDC\u6536\u53D1\u60C5\u51B5 sar</li><li>\u67E5\u770B\u8FDB\u7A0B\u7684\u7F51\u7EDC\u6536\u53D1\u60C5\u51B5 nethogs</li><li>\u67E5\u770Bip\u7684\u7F51\u7EDC\u6536\u53D1\u60C5\u51B5 iftop</li><li>\u67E5\u770B\u548C\u914D\u7F6E\u7F51\u7EDC\u63A5\u53E3 ethool</li><li>\u7F51\u7EDC\u6293\u5305\u5DE5\u5177 tcpdump</li><li>\u914D\u7F6E\u548C\u7BA1\u7406\u9632\u706B\u5899\u53CANAT\u89C4\u5219 iptables</li><li>\u5256\u6790\u5185\u6838\u534F\u8BAE\u6808\u7684\u6027\u80FD perf</li><li>\u52A8\u6001\u8FFD\u8E2A\u5185\u6838\u534F\u8BAE\u6808\u7684\u884C\u4E3A systemtap/bcc</li></ul><p>** CPU **</p><ul><li>uptime\uFF1A\u5FEB\u901F\u67E5\u770B\u7CFB\u7EDFCPU\u8D1F\u8F7D\u60C5\u51B5\uFF1A1\u5206\u949F\u30015\u5206\u949F\u300115\u5206\u949F</li><li>top\uFF1A\u6574\u4F53\u8D1F\u8F7D\u60C5\u51B5\uFF0C\u901A\u8FC7P\u6765\u6392\u5E8FCPU\uFF0CM\u6392\u5E8F\u5185\u5B58</li><li></li></ul><p>** \u5957\u63A5\u5B57 ** \u5957\u63A5\u5B57\u5C4F\u853D\u6389\u4E86linux\u5185\u6838\u4E2D\u4E0D\u540C\u7684\u5DEE\u5F02\uFF0C\u4E3A\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u7EDF\u4E00\u7684\u8BBF\u95EE\u63A5\u53E3\u3002\u6BCF\u4E2A\u5957\u63A5\u5B57\u90FD\u6709\u4E00\u4E2A\u8BFB\u5199\u7F13\u51B2\u533A\u3002</p><ul><li>\u8BFB\u7F13\u51B2\u533A\uFF0C\u7F13\u5B58\u4E86\u8FDC\u7AEF\u53D1\u8FC7\u6765\u7684\u6570\u636E\uFF0C\u5982\u679C\u7F13\u51B2\u533A\u5DF2\u6EE1\uFF0C\u5C31\u4E0D\u80FD\u518D\u63A5\u6536\u65B0\u7684\u6570\u636E\u3002</li><li>\u5199\u7F13\u51B2\u533A\uFF0C\u7F13\u5B58\u4E86\u8981\u53D1\u51FA\u53BB\u7684\u6570\u636E\uFF0C\u5982\u679C\u5199\u7F13\u51B2\u533A\u5DF2\u6EE1\uFF0C\u5E94\u7528\u7A0B\u5E8F\u7684\u5199\u64CD\u4F5C\u5C31\u4F1A\u88AB\u963B\u585E\u3002</li></ul>',13);function e(r,a){return t}var s=l(p,[["render",e]]);export{s as default};
