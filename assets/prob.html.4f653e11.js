import{_ as n,r as o,o as r,c,e as s,a as e,w as l,F as d,d as h,b as a}from"./app.8ea9bd2d.js";const p={},_=h('<h1 id="\u6982\u7387\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u6982\u7387\u673A\u5236" aria-hidden="true">#</a> \u6982\u7387\u673A\u5236</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u672C\u9875\u4E2D\u9ED8\u8BA4\u673A\u5668\u4EBA\u7684\u6635\u79F0\u4E3A\u201C\u56DB\u5B63\u9171\u201D\u3002</p></div><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><p>\u6211\u4EEC\u6709\u65F6\u4E5F\u5E0C\u671B\u67D0\u4E9B\u56DE\u7B54\u6309\u7167\u7279\u5B9A\u7684\u6982\u7387\u8FDB\u884C\u89E6\u53D1\u3002\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>-p prob</code> \u7684\u8BED\u6CD5\u8FDB\u884C\u8BBE\u7F6E\u3002\u4F8B\u5982 <code># \u95EE\u9898 \u56DE\u7B54 -p 0.2</code> \u8BBE\u7F6E\u7684\u95EE\u9898\u7684\u89E6\u53D1\u6982\u7387\u5373\u4E3A 20%\u3002</p><p>\u90A3\u4E48\u5982\u679C\u4E00\u4E2A\u95EE\u9898\u5B58\u5728\u591A\u4E2A\u56DE\u7B54\uFF0C\u6BCF\u4E2A\u56DE\u7B54\u7684\u89E6\u53D1\u6982\u7387\u53C8\u662F\u5982\u4F55\u8BA1\u7B97\u7684\u5462\uFF1FKoishi \u4F1A\u6C42\u51FA\u6240\u6709\u95EE\u7B54\u7684\u89E6\u53D1\u6982\u7387\u4E4B\u548C\uFF0C\u56E0\u6B64\u5F97\u5230\u4E24\u79CD\u5904\u7406\u65B9\u5F0F\uFF1A</p><ul><li>\u5982\u679C\u603B\u548C\u4E0D\u5927\u4E8E 1\uFF0C\u5219\u6309\u7167\u5404\u81EA\u7684\u6982\u7387\u89E6\u53D1\u5404\u4E2A\u95EE\u9898</li><li>\u5982\u679C\u603B\u548C\u5927\u4E8E 1\uFF0C\u5219\u5404\u4E2A\u95EE\u7B54\u7684\u6982\u7387\u5C06\u88AB\u9664\u4EE5\u8FD9\u4E2A\u603B\u548C\u540E\u4EE5\u5404\u81EA\u7684\u6982\u7387\u89E6\u53D1\u8FD9\u4E2A\u95EE\u9898</li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50\u3002\u5982\u679C\u4E00\u4E2A\u95EE\u9898\u6709\u4E24\u4E2A\u56DE\u7B54\uFF0C\u6982\u7387\u5206\u522B\u4E3A 0.3 \u548C 0.5\uFF0C\u5219\u5B9E\u9645\u64CD\u4F5C\u4E2D\u8FD9\u4E24\u4E2A\u56DE\u7B54\u7684\u89E6\u53D1\u6982\u7387\u5C31\u662F 0.3 \u548C 0.5\u3002\u4F46\u662F\u5982\u679C\u4E00\u4E2A\u95EE\u9898\u6709\u4E24\u4E2A\u56DE\u7B54\uFF0C\u6982\u7387\u5206\u522B\u662F 0.6 \u548C 1\uFF0C\u56E0\u4E3A\u603B\u6982\u7387\u8D85\u8FC7 1\uFF0C\u56E0\u6B64\u4E24\u4E2A\u95EE\u7B54\u7684\u89E6\u53D1\u6982\u7387\u5C06\u88AB\u6807\u51C6\u5316\uFF0C\u5B9E\u9645\u64CD\u4F5C\u4E2D\u5B83\u4EEC\u7684\u89E6\u53D1\u6982\u7387\u5206\u522B\u4E3A 0.375 \u548C 0.625 \u4EE5\u4FDD\u8BC1\u603B\u6982\u7387\u6B63\u597D\u4E3A 1\u3002</p><h2 id="\u79F0\u547C\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u79F0\u547C\u5339\u914D" aria-hidden="true">#</a> \u79F0\u547C\u5339\u914D</h2><p>Koishi \u7684\u6307\u4EE4\u53EF\u4EE5\u901A\u8FC7 @bot \u6216\u4F7F\u7528\u6635\u79F0\u8FDB\u884C\u8C03\u7528\u3002\u540C\u7406\uFF0C\u6559\u5B66\u7CFB\u7EDF\u4E2D\u4E5F\u6709\u4E00\u5957\u7C7B\u4F3C\u7684\u673A\u5236\u7528\u4E8E\u5339\u914D\u542B\u6709\u79F0\u547C\u7684\u6307\u4EE4\u3002</p><p>\u6211\u4EEC\u8BA4\u4E3A\uFF0C\u6BCF\u4E00\u4E2A\u95EE\u9898\u90FD\u62E5\u6709\u4E24\u4E2A\u6982\u7387\uFF0C\u4E00\u4E2A\u662F<strong>\u4E25\u683C\u5339\u914D</strong>\uFF08\u8BF4\u662F\u4E25\u683C\u5B9E\u9645\u4E0A\u5305\u542B\u4E86\u4E0A\u6587\u6240\u4ECB\u7ECD\u7684 <a href="#%E6%A8%A1%E7%B3%8A%E5%8C%B9%E9%85%8D">\u6A21\u7CCA\u5339\u914D</a> \u673A\u5236\uFF09\uFF0C\u6211\u4EEC\u79F0\u4E3A\u6982\u7387 S\uFF1B\u53E6\u4E00\u4E2A\u662F<strong>\u79F0\u547C\u5339\u914D</strong>\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u6982\u7387 A\u3002\u6211\u4EEC\u4E3E\u4E00\u4E9B\u4F8B\u5B50\uFF1A</p><ul><li>\u65E9\u4E0A\u597D\uFF1A\u65E0\u8BBA\u662F\u5BF9\u673A\u5668\u4EBA\u8BF4\uFF0C\u8FD8\u662F\u5BF9\u5176\u4ED6\u7FA4\u53CB\u8BF4\uFF0C\u673A\u5668\u4EBA\u54CD\u5E94\u8FD9\u4E2A\u95EE\u9898\u90FD\u662F\u6B63\u5E38\u7684\uFF0C\u56E0\u6B64\u9002\u5408 S=1\uFF0CA=1\u3002</li><li>\u6211\u559C\u6B22\u4F60\uFF1A\u5982\u679C\u8FD9\u4E2A\u95EE\u9898\u4E0D\u662F\u5BF9\u673A\u5668\u4EBA\u8BF4\u7684\uFF0C\u90A3\u4E48\u673A\u5668\u4EBA\u4E0D\u5E94\u8BE5\u54CD\u5E94\u5B83\uFF0C\u56E0\u6B64\u9002\u5408 S=0\uFF0CA=1\u3002</li><li>\u836D\u8336\uFF1A\u5982\u679C\u8FD9\u4E2A\u95EE\u9898\u88AB\u52A0\u4E0A\u4E86\u673A\u5668\u4EBA\u524D\u7F00\uFF0C\u8FD9\u53E5\u8BDD\u7684\u610F\u601D\u5C31\u53D1\u751F\u4E86\u6539\u53D8\uFF0C\u56E0\u6B64\u9002\u5408 S=1\uFF0CA=0\u3002</li></ul><p>\u8FD9\u91CC\u5BF9<strong>\u524D\u7F00</strong>\u7684\u4E25\u683C\u5B9A\u4E49\u662F\uFF0C\u4E00\u4E2A\u95EE\u9898<strong>\u4EE5\u79F0\u547C\u5F00\u5934\uFF0C\u4E14\u4E4B\u540E\u8FD8\u6709\u5176\u4ED6\u5B57\u7B26</strong>\u3002\u56E0\u6B64\u6635\u79F0\u672C\u8EAB\u4E0D\u5C5E\u4E8E\u542B\u6709\u524D\u7F00\u7684\u95EE\u9898\u3002</p><p>\u5F53\u4E00\u4E2A\u95EE\u9898\u88AB\u521B\u5EFA\u6216\u4FEE\u6539\u65F6\uFF0C-p \u4F1A\u88AB\u7406\u89E3\u6210\u6982\u7387 S\uFF0C-P \u4F1A\u88AB\u7406\u89E3\u6210\u6982\u7387 A\u3002\u5982\u679C\u95EE\u9898\u5B58\u5728\u524D\u7F00\uFF0C\u5219\u5176\u5C06\u88AB\u5220\u9664\uFF0C\u4E14\u9ED8\u8BA4\u6982\u7387\u4E3A p=0, P=1\uFF1B\u5426\u5219\u9ED8\u8BA4\u6982\u7387\u4E3A p=1, P=0\u3002\u5F53\u673A\u5668\u4EBA\u6536\u5230\u4E00\u6761\u6D88\u606F\u65F6\uFF0C\u5982\u679C\u8BE5\u6D88\u606F\u542B\u6709\u524D\u7F00\uFF0C\u5219\u5176\u5C06\u88AB\u5220\u9664\u3002\u4E4B\u540E\u6B63\u5E38\u83B7\u53D6\u53EF\u80FD\u89E6\u53D1\u7684\u95EE\u7B54\u5217\u8868\u3002\u5982\u679C\u4E4B\u524D\u6CA1\u6709\u5220\u9664\u524D\u7F00\uFF0C\u5219\u4F7F\u7528\u8FD9\u4E9B\u95EE\u7B54\u7684\u6982\u7387 S \u6267\u884C\u4E0A\u6587\u4E2D\u7684\u6982\u7387\u673A\u5236\uFF1B\u5426\u5219\u4F7F\u7528\u8FD9\u4E9B\u95EE\u7B54\u7684\u6982\u7387 A \u6267\u884C\u4E0A\u6587\u4E2D\u7684\u6982\u7387\u673A\u5236\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBE\u95EE\u7B54 1 \u548C\u95EE\u7B54 2 \u7684\u95EE\u9898\u90FD\u662F\u201C\u65E9\u4E0A\u597D\u201D\uFF0C\u4E14\u95EE\u7B54 1 \u7684\u89E6\u53D1\u6982\u7387\u4E3A S=0.6\uFF0CA=0.8\uFF0C\u95EE\u7B54 2 \u7684\u89E6\u53D1\u6982\u7387\u4E3A S=1\uFF0CA=0\u3002\u5219\u8F93\u5165\u201C\u65E9\u4E0A\u597D\u201D\u65F6\uFF0C\u95EE\u7B54 1, 2 \u5206\u522B\u53D6\u6982\u7387 0.6, 1\uFF0C\u6700\u7EC8\u7ECF\u8FC7\u6807\u51C6\u5316\uFF0C\u4EE5 0.375 \u7684\u6982\u7387\u89E6\u53D1\u95EE\u7B54 1\uFF0C\u4EE5 0.625 \u7684\u6982\u7387\u89E6\u53D1\u95EE\u7B54 2\u3002\u8F93\u5165\u201C@bot\uFF0C\u65E9\u4E0A\u597D\u201D\u65F6\uFF0C\u95EE\u7B54 1, 2 \u5206\u522B\u53D6\u6982\u7387 0.8, 0\uFF0C\u6700\u7EC8\u4EE5 0.8 \u7684\u6982\u7387\u89E6\u53D1\u95EE\u7B54 1\u3002</p><h2 id="\u79F0\u547C\u672C\u8EAB\u4F5C\u4E3A\u95EE\u9898\u89E6\u53D1" tabindex="-1"><a class="header-anchor" href="#\u79F0\u547C\u672C\u8EAB\u4F5C\u4E3A\u95EE\u9898\u89E6\u53D1" aria-hidden="true">#</a> \u79F0\u547C\u672C\u8EAB\u4F5C\u4E3A\u95EE\u9898\u89E6\u53D1</h2><p>\u4E0A\u9762\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\u4E86\uFF0C\u6635\u79F0\u672C\u8EAB\u4E0D\u5C5E\u4E8E\u542B\u6709\u524D\u7F00\u7684\u95EE\u9898\uFF0C\u56E0\u6B64\u6BD4\u8F83\u7279\u6B8A\u3002\u5982\u679C\u5B83\u672C\u8EAB\u4F5C\u4E3A\u95EE\u9898\u88AB\u89E6\u53D1\uFF0C\u5219\u8BE5\u4F1A\u8BDD\u7684\u77ED\u65F6\u95F4\u5185\uFF0C\u5373\u4F7F\u6CA1\u6709\u524D\u7F00\uFF0C\u83B7\u5F97\u7684\u95EE\u9898\u4E5F\u4F1A\u53D6 S, A \u4E24\u4E2A\u6982\u7387\u7684\u6700\u5927\u503C\u4E3A\u6700\u7EC8\u6982\u7387\u3002\u4E3A\u4EC0\u4E48\u8FD9\u6837\u8BBE\u8BA1\u5462\uFF1F\u56E0\u4E3A\u73B0\u5B9E\u4E2D\uFF0C\u8BB8\u591A\u4EBA\u4F1A\u628A\u8BDD\u62C6\u5F00\u8BF4\u3002\u4E3E\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</p>',16),u=e("p",null,"\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u867D\u7136\u5355\u72EC\u7684\u201C\u6211\u559C\u6B22\u4F60\u201D\u4E0D\u80FD\u89E6\u53D1\u201C\u4F60\u5C31\u662F\u6843\u9971\u7F51\u5927\u4F1A\u5458\u201D\u7684\u56DE\u5E94\uFF08S=0\uFF09\uFF0C\u4F46\u662F\u5982\u679C\u201C\u6211\u559C\u6B22\u4F60\u201D\u7D27\u8DDF\u5728\u4E00\u53E5\u201C\u56DB\u5B63\u9171\u201D\u4E4B\u540E\uFF0C\u663E\u7136\u8FD9\u53E5\u8BDD\u662F\u5BF9\u673A\u5668\u4EBA\u8BF4\u7684\u3002\u56E0\u6B64\u5728 Koishi \u7684\u6559\u5B66\u7CFB\u7EDF\u4E2D\uFF0C\u79F0\u547C\u95EE\u9898\u672C\u8EAB\u80FD\u591F\u6FC0\u6D3B\u5F53\u524D\u4F1A\u8BDD\u7684 A \u6982\u7387\u3002",-1),A=e("h2",{id:"\u91CD\u5B9A\u5411\u5230\u79F0\u547C\u5339\u914D\u95EE\u7B54",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u91CD\u5B9A\u5411\u5230\u79F0\u547C\u5339\u914D\u95EE\u7B54","aria-hidden":"true"},"#"),a(" \u91CD\u5B9A\u5411\u5230\u79F0\u547C\u5339\u914D\u95EE\u7B54")],-1),m=e("p",null,[a("\u5982\u679C\u8981\u91CD\u5B9A\u5411\u5230\u79F0\u547C\u5339\u914D\u7684\u95EE\u7B54\u65F6\uFF0C\u8BF7"),e("strong",null,"\u5728\u76EE\u6807\u95EE\u9898\u4E0A\u4E5F\u52A0\u4E0A\u524D\u7F00"),a("\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u89E6\u53D1\u4E0B\u4E00\u4E2A\u95EE\u9898\u3002\u4F8B\u5982\uFF0C\u4E0B\u9762\u7684\u4F8B\u5B50\u5C06"),e("strong",null,"\u65E0\u6CD5\u5DE5\u4F5C"),a("\uFF1A")],-1),g=a("\u53CD\u8FC7\u6765\uFF0C\u5229\u7528\u8FD9\u79CD\u7279\u6027\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E9B\u66F4\u52A0\u9AD8\u7EA7\u7684\u6548\u679C\u3002\u5047\u5982\u6211\u4EEC\u5E0C\u671B\u6784\u9020\u4E00\u4E2A\u95EE\u7B54\uFF0C\u4F7F\u5F97\u5176\u5728\u6B63\u5E38\u60C5\u51B5\u4E0B\u53EA\u80FD\u5E26\u79F0\u547C\u89E6\u53D1\uFF1B\u4F46\u662F\u5728\u7279\u5B9A\u95EE\u9898\u89E6\u53D1\u540E\u53EF\u4EE5\u4E0D\u5E26\u79F0\u547C\u89E6\u53D1\uFF08\u53C2\u89C1 "),f=a("\u524D\u7F6E\u548C\u540E\u7EE7\u673A\u5236"),b=a("\uFF09\u3002\u5728\u6B63\u5E38\u60C5\u51B5\u4E0B\u8FD9\u662F\u505A\u4E0D\u5230\u7684\uFF0C\u56E0\u4E3A Koishi \u4E0D\u4F1A\u63A5\u53D7\u95EE\u9898\u548C\u56DE\u7B54\u90FD\u76F8\u540C\u7684\u4E24\u4E2A\u6559\u5B66\u95EE\u7B54\u3002\u4F46\u6709\u4E86\u91CD\u5B9A\u5411\u8BED\u6CD5\u4E4B\u540E\uFF0C\u53EA\u9700\u7ED3\u5408\u91CD\u5B9A\u5411\u8BED\u6CD5\u548C\u540E\u7EE7\u673A\u5236\u5C31\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u79CD\u9700\u6C42\uFF1A");function S(x,v){const t=o("panel-view"),i=o("RouterLink");return r(),c(d,null,[_,s(t,{messages:[["Alice","\u56DB\u5B63\u9171\uFF0C\u6211\u559C\u6B22\u4F60"],["\u56DB\u5B63\u9171","\u4F60\u5C31\u662F\u6843\u9971\u7F51\u5927\u4F1A\u5458\uFF1F"]]}),s(t,{messages:[["Alice","\u56DB\u5B63\u9171"],["\u56DB\u5B63\u9171","\u6709\u4EC0\u4E48\u4E8B\u5417\uFF1F"],["Alice","\u6211\u559C\u6B22\u4F60"],["\u56DB\u5B63\u9171","\u4F60\u5C31\u662F\u6843\u9971\u7F51\u5927\u4F1A\u5458\uFF1F"]]}),u,A,m,s(t,{messages:[["Alice","# \u56DB\u5B63\u9171\uFF0C\u81EA\u6211\u4ECB\u7ECD \u5927\u5BB6\u597D\uFF0C\u6211\u53EB\u53E4\u660E\u5730\u604B\uFF01"],["\u56DB\u5B63\u9171","\u95EE\u7B54\u5DF2\u6DFB\u52A0\uFF0C\u7F16\u53F7\u4E3A 1001\u3002"],["Alice","# \u56DB\u5B63\u9171\uFF0C\u4F60\u80FD\u505A\u4EC0\u4E48 => \u81EA\u6211\u4ECB\u7ECD"],["\u56DB\u5B63\u9171","\u95EE\u7B54\u5DF2\u6DFB\u52A0\uFF0C\u7F16\u53F7\u4E3A 1002\u3002"]]}),e("p",null,[g,s(i,{to:"/community/dialogue/pred-succ.html"},{default:l(()=>[f]),_:1}),b]),s(t,{messages:[["Alice","# \u56DB\u5B63\u9171\u722C \u4F60\u624D\u722C\uFF08\u6307"],["\u56DB\u5B63\u9171","\u95EE\u7B54\u5DF2\u6DFB\u52A0\uFF0C\u7F16\u53F7\u4E3A 1011\u3002"],["Alice","# \u6355\u6349 \u6355\u6349\u5931\u8D25\uFF0C\u91CE\u751F\u7684\u56DB\u5B63\u9171\u8DD1\u6389\u4E86 ># \u722C => \u56DB\u5B63\u9171\u722C"],["\u56DB\u5B63\u9171","\u95EE\u7B54\u5DF2\u6DFB\u52A0\uFF0C\u7F16\u53F7\u4E3A 1013\u3002"],["Alice","\u6355\u6349"],["\u56DB\u5B63\u9171","\u6355\u6349\u5931\u8D25\uFF0C\u91CE\u751F\u7684\u56DB\u5B63\u9171\u8DD1\u6389\u4E86"],["Alice","\u722C"],["\u56DB\u5B63\u9171","\u4F60\u624D\u722C\uFF08\u6307"]]})],64)}var E=n(p,[["render",S],["__file","prob.html.vue"]]);export{E as default};
