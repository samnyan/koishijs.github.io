import{_ as s,r as d,o as r,c,a as e,e as i,w as n,F as l,d as a,b as o}from"./app.8ea9bd2d.js";const h={},g=a('<h1 id="\u6D4B\u8BD5\u5DE5\u5177-mock" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u5DE5\u5177-mock" aria-hidden="true">#</a> \u6D4B\u8BD5\u5DE5\u5177 (Mock)</h1><p>@koishijs/plugin-mock \u5305\u542B\u4E86\u88AB Koishi \u4F7F\u7528\u7684\u6D4B\u8BD5\u5DE5\u5177\u3002\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2A\u540D\u4E3A <code>mock</code> \u7684\u670D\u52A1\uFF0C\u53EF\u7528\u4E8E\u6A21\u62DF\u4E8B\u4EF6\u4E0A\u62A5\u3001\u7F51\u7EDC\u8BF7\u6C42\u7B49\u7B49\u3002</p><h2 id="\u7C7B-mock" tabindex="-1"><a class="header-anchor" href="#\u7C7B-mock" aria-hidden="true">#</a> \u7C7B\uFF1AMock</h2><h3 id="mock-webhook" tabindex="-1"><a class="header-anchor" href="#mock-webhook" aria-hidden="true">#</a> mock.webhook</h3><ul><li>\u7C7B\u578B: <a href="#%E7%B1%BB-webhook"><code>Webhook</code></a></li></ul><p>\u7528\u4E8E\u6A21\u62DF\u7F51\u7EDC\u8BF7\u6C42\u3002</p><h3 id="mock-client-userid-channelid" tabindex="-1"><a class="header-anchor" href="#mock-client-userid-channelid" aria-hidden="true">#</a> mock.client(userId, channelId?)</h3><ul><li><strong>userId:</strong> <code>string</code> \u7528\u6237 ID</li><li><strong>channelId:</strong> <code>string</code> \u9891\u9053 ID</li><li>\u8FD4\u56DE\u503C: <a href="#%E7%B1%BB-client"><code>Client</code></a></li></ul><p>\u521B\u5EFA\u4E00\u4E2A\u5BA2\u6237\u7AEF\u3002</p><h3 id="mock-receive-session" tabindex="-1"><a class="header-anchor" href="#mock-receive-session" aria-hidden="true">#</a> mock.receive(session)</h3><ul><li><strong>session:</strong> <code>Partial&lt;Session&gt;</code> \u4E8B\u4EF6\u6240\u9700\u7684 Session \u5C5E\u6027</li><li>\u8FD4\u56DE\u503C: <code>string</code></li></ul><p>\u89E6\u53D1\u4F1A\u8BDD\u4E8B\u4EF6\u3002</p><h3 id="mock-inituser-id-authority-data" tabindex="-1"><a class="header-anchor" href="#mock-inituser-id-authority-data" aria-hidden="true">#</a> mock.initUser(id, authority?, data?)</h3><ul><li><strong>id:</strong> <code>string</code> \u7528\u6237 ID</li><li><strong>authority:</strong> <code>number</code> \u6743\u9650\u7B49\u7EA7</li><li><strong>data:</strong> <code>Partial&lt;User&gt;</code> \u5176\u4ED6\u7528\u6237\u6570\u636E</li></ul><p>\u5728\u6570\u636E\u5E93\u4E2D\u521D\u59CB\u5316\u4E00\u4E2A\u7528\u6237\u3002\u7B49\u4EF7\u4E8E <code>database.create(&#39;user&#39;, { mock: id, authority, ...data })</code>\u3002</p><h3 id="mock-initchannel-id-assignee-data" tabindex="-1"><a class="header-anchor" href="#mock-initchannel-id-assignee-data" aria-hidden="true">#</a> mock.initChannel(id, assignee?, data?)</h3><ul><li><strong>id:</strong> <code>string</code> \u9891\u9053 ID</li><li><strong>assignee:</strong> <code>string</code> \u9891\u9053\u4EE3\u7406\u4EBA</li><li><strong>data:</strong> <code>Partial&lt;Channel&gt;</code> \u5176\u4ED6\u9891\u9053\u6570\u636E</li></ul><p>\u5728\u6570\u636E\u5E93\u4E2D\u521D\u59CB\u5316\u4E00\u4E2A\u9891\u9053\u3002\u7B49\u4EF7\u4E8E <code>database.create(&#39;channel&#39;, { platform: &#39;mock&#39;, id, assignee, ...data })</code>\u3002</p><h2 id="\u7C7B-client" tabindex="-1"><a class="header-anchor" href="#\u7C7B-client" aria-hidden="true">#</a> \u7C7B\uFF1AClient</h2><p><strong>\u5BA2\u6237\u7AEF (Client)</strong> \u662F\u5BF9\u53D1\u5F80\u540C\u4E00\u4E0A\u4E0B\u6587\u7684\u591A\u6B21\u6D88\u606F\u7684\u4E00\u4E2A\u62BD\u8C61\u3002\u5B83\u4F7F\u7528 <code>mock.client()</code> \u65B9\u6CD5\u521B\u5EFA\uFF0C\u5E76\u501F\u52A9 <code>mock.receive()</code> \u5B9E\u73B0\u5176\u529F\u80FD\u3002</p>',20),u={class:"custom-container warning"},p=e("p",{class:"custom-container-title"},"WARNING",-1),k=o("\u8FD9\u4E2A\u7C7B\u4E0B\u7684\u5927\u90E8\u5206\u65B9\u6CD5\u7684\u8FD4\u56DE\u90FD\u57FA\u4E8E "),m=o("session.send"),b=o(" \u65B9\u6CD5\u548C "),_=o("after-middleware"),f=o(" \u4E8B\u4EF6\u3002\u5728\u63D0\u4F9B\u4E86\u6781\u5927\u65B9\u4FBF\u7684\u540C\u65F6\uFF0C\u4F1A\u8BDD\u4E5F\u5B58\u5728\u4E00\u4E9B\u9650\u5236\u3002\u5982\u679C\u4F60\u7684\u63D2\u4EF6\u5B58\u5728\u4EE5\u4E0B\u51E0\u79CD\u7279\u6B8A\u60C5\u51B5\u4E4B\u4E00\uFF1A"),x=e("ul",null,[e("li",null,"\u4F7F\u7528\u4E86\u5F02\u6B65\u7684 message \u4E8B\u4EF6\u76D1\u542C\u5668"),e("li",null,"\u4E2D\u95F4\u4EF6\u548C\u6307\u4EE4\u4E2D\u53EF\u80FD\u5B58\u5728\u672A\u963B\u585E\u7684\u5F02\u6B65\u64CD\u4F5C"),e("li",null,"\u76F4\u63A5\u8C03\u7528 Bot API \u800C\u975E session.send")],-1),y=e("p",null,"\u8FD9\u4E2A\u7C7B\u7684\u65B9\u6CD5\u53EF\u80FD\u4F1A\u8FD4\u56DE\u9884\u6599\u4E4B\u5916\u7684\u7ED3\u679C\u3002\u5F53\u7136\uFF0C\u5982\u679C\u8981\u6D4B\u8BD5\u8FD9\u4E9B\u7279\u6B8A\u60C5\u51B5\uFF0C\u6211\u4EEC\u4E5F\u6709\u5176\u4ED6\u7684\u89E3\u51B3\u65B9\u6848\u3002",-1),w=a('<h3 id="client-receive-content" tabindex="-1"><a class="header-anchor" href="#client-receive-content" aria-hidden="true">#</a> client.receive(content)</h3><ul><li><strong>content:</strong> <code>string</code> \u8981\u53D1\u9001\u7684\u4FE1\u606F</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;string[]&gt;</code> \u6536\u5230\u7684\u56DE\u590D\u5217\u8868</li></ul><p>\u6A21\u62DF\u53D1\u9001\u4E00\u6761\u6D88\u606F\u3002</p><h3 id="client-shouldreply-content-reply" tabindex="-1"><a class="header-anchor" href="#client-shouldreply-content-reply" aria-hidden="true">#</a> client.shouldReply(content, reply?)</h3><ul><li><strong>content:</strong> <code>string</code> \u8981\u53D1\u9001\u7ED9\u673A\u5668\u4EBA\u7684\u4FE1\u606F</li><li><strong>reply:</strong> <code>string | RegExp | (string | RegExp)[]</code> \u5E94\u6709\u7684\u56DE\u590D\uFF0C\u5982\u679C\u7565\u53BB\u5219\u4E0D\u4F1A\u8FDB\u884C\u6BD4\u8F83</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u65AD\u8A00\u67D0\u6761\u4FE1\u606F\u5E94\u5B58\u5728\u67D0\u4E9B\u56DE\u590D\u3002</p><h3 id="client-shouldnotreply-content" tabindex="-1"><a class="header-anchor" href="#client-shouldnotreply-content" aria-hidden="true">#</a> client.shouldNotReply(content)</h3><ul><li><strong>content:</strong> <code>string</code> \u8981\u53D1\u9001\u7ED9\u673A\u5668\u4EBA\u7684\u4FE1\u606F</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u65AD\u8A00\u67D0\u6761\u4FE1\u606F\u4E0D\u5E94\u5B58\u5728\u4EFB\u4F55\u56DE\u590D\u3002</p><h2 id="\u7C7B-webhook" tabindex="-1"><a class="header-anchor" href="#\u7C7B-webhook" aria-hidden="true">#</a> \u7C7B\uFF1AWebhook</h2><p><strong>\u7F51\u7EDC\u94A9\u5B50 (Webhook)</strong> \u53EF\u7528\u4E8E\u6A21\u62DF\u5230 Koishi \u670D\u52A1\u5668\u7684\u7F51\u7EDC\u8BF7\u6C42\u3002</p><h3 id="webhook-get-path-headers" tabindex="-1"><a class="header-anchor" href="#webhook-get-path-headers" aria-hidden="true">#</a> webhook.get(path, headers?)</h3><ul><li><strong>path:</strong> <code>string</code> \u8BF7\u6C42\u8DEF\u5F84</li><li><strong>headers:</strong> <code>object</code> \u8BF7\u6C42\u5934</li></ul><p>\u6A21\u62DF GET \u8BF7\u6C42\u3002</p><h3 id="webhook-post-path-body-headers" tabindex="-1"><a class="header-anchor" href="#webhook-post-path-body-headers" aria-hidden="true">#</a> webhook.post(path, body, headers?)</h3><ul><li><strong>path:</strong> <code>string</code> \u8BF7\u6C42\u8DEF\u5F84</li><li><strong>body:</strong> <code>string</code> \u8BF7\u6C42\u6B63\u6587</li><li><strong>headers:</strong> <code>object</code> \u8BF7\u6C42\u5934</li></ul><p>\u6A21\u62DF POST \u8BF7\u6C42\u3002</p>',17);function B(v,I){const t=d("RouterLink");return r(),c(l,null,[g,e("div",u,[p,e("p",null,[k,i(t,{to:"/plugins/other/session.html#session-send"},{default:n(()=>[m]),_:1}),b,i(t,{to:"/plugins/other/events.html#%E4%BA%8B%E4%BB%B6%EF%BC%9Aafter-middleware"},{default:n(()=>[_]),_:1}),f]),x,y]),w],64)}var C=s(h,[["render",B],["__file","mock.html.vue"]]);export{C as default};
