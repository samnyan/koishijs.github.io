if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const t=s=>l(s,a),u={module:{uri:a},exports:n,require:t};e[a]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(r(...s),n)))}}define(["./workbox-7d6a3f4d"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"51cfd377f8e9dd19a6e30b0fa509c593"},{url:"about/contribute/docs.html",revision:"a2ccb927f325bb8b58f49bb5c51a9ded"},{url:"about/contribute/structure.html",revision:"58de7ac098dca76de56ce5cd2e95f696"},{url:"about/faq.html",revision:"1bba7abd1be5abce8562de7302b9d435"},{url:"about/history.html",revision:"6fa78122daff669dd4ecd352238695d5"},{url:"about/migration.html",revision:"5117c9c13514f0e1e26b228a151df35a"},{url:"about/releases/v4.1.html",revision:"9e1de9c645f34ec6f395a3eb6dade197"},{url:"about/releases/v4.2.html",revision:"8703bf649cdfe455f81e615ce804d1f1"},{url:"about/releases/v4.3.html",revision:"7ec2124567fe134f6904aec32b74b8d6"},{url:"about/releases/v4.4.html",revision:"b2eaed38ecad605eaf8abbd4cfb5340f"},{url:"about/releases/v4.5.html",revision:"f9adf50ee730e002e54f6229b90c0d02"},{url:"about/releases/v4.6.html",revision:"eb489fc91c412706f5ce91f2de98f766"},{url:"about/releases/v4.7.html",revision:"c4bdda6de056dc07a77962fd2cb02041"},{url:"about/releases/v4.8.html",revision:"d4643a5230ebab91ea94d23793e33671"},{url:"api/console/client.html",revision:"d7a63bf37c43ef92b704cf8ed3d0c7c8"},{url:"api/console/server.html",revision:"f8e8c1cc92243918a8a1d500d4b52a11"},{url:"api/core/adapter.html",revision:"a83095307ada76431d2810df4a9d0687"},{url:"api/core/app.html",revision:"5e899c9b24bad12d1e15d64217a1ee00"},{url:"api/core/bot.html",revision:"ad76aff294dad18f8899ca947ba0b2e7"},{url:"api/core/command.html",revision:"f0d4f73dd1564258bb646b623a19a943"},{url:"api/core/context.html",revision:"cf6d1ca73913e420afb86979780c70a8"},{url:"api/core/events.html",revision:"99b11d69907b1a798df32ca2843caef2"},{url:"api/core/session.html",revision:"7eea41e2ea841a303353789895def533"},{url:"api/database/built-in.html",revision:"8dd867a001f1e305908953635aeeb21a"},{url:"api/database/database.html",revision:"bce740f629b2040b4da1557c8af7017c"},{url:"api/database/evaluation.html",revision:"42eb627397e62ff0d1d02ba7a16cf7d4"},{url:"api/database/model.html",revision:"402a4ddc3d3a66bc7a0d7f01d26094e3"},{url:"api/database/query.html",revision:"703003822a8ad8c5994cbfe831563218"},{url:"api/glossary.html",revision:"075e5bff224c078e16e52cdd43190d2f"},{url:"api/index.html",revision:"f3572e11dc31fbfc0a86e09ef58a70a7"},{url:"api/service/assets.html",revision:"6dfe18b94b4d98cdb668fed7cbb9f359"},{url:"api/service/bots.html",revision:"b88f6a1dfd73f6d4ebd160019599b00a"},{url:"api/service/http.html",revision:"eb38ad85cd69b382b2a28a43d7395c00"},{url:"api/service/i18n.html",revision:"c961eeb2065b9e7bb3d10a0f8e50ccac"},{url:"api/service/lifecycle.html",revision:"2e7f37399973bb21a69ce301c237e89c"},{url:"api/service/logger.html",revision:"8ad16ccf4adebac2f7a7cadf857f3ddc"},{url:"api/service/registry.html",revision:"925f5a121aa23eb69632a8ef2ec209a1"},{url:"api/service/router.html",revision:"0aa1de0a38975625f407ece3240b49ae"},{url:"api/service/selector.html",revision:"2c557849b9b2f7418c980058339aef68"},{url:"api/utils/logger.html",revision:"9cc109fbb4e4a58876e5fe92e2ef83ab"},{url:"api/utils/misc.html",revision:"85f1d94668edbab983b0752b133dc18e"},{url:"api/utils/observer.html",revision:"ec81dc190f14e08f94f80ca71fcc613b"},{url:"api/utils/schema.html",revision:"3bdef61f1fb13872bd6199b669b5f1b7"},{url:"api/utils/segment.html",revision:"668b9f1411cc972717fadaa2d51208a4"},{url:"api/utils/template.html",revision:"0cedf88877a027155d8fc9f835265418"},{url:"app-lifecycle.png",revision:"719c2e240dbc39c4380d98912e815214"},{url:"assets/404.35232444.js",revision:null},{url:"assets/404.html.0f07aaf0.js",revision:null},{url:"assets/404.html.33d203a8.js",revision:null},{url:"assets/adapter.html.bfa7d06c.js",revision:null},{url:"assets/adapter.html.d7755def.js",revision:null},{url:"assets/adapter.html.df9a9ade.js",revision:null},{url:"assets/adapter.html.fbc78d92.js",revision:null},{url:"assets/addon.html.37b05803.js",revision:null},{url:"assets/addon.html.a836d47b.js",revision:null},{url:"assets/admin.html.1a5bd55c.js",revision:null},{url:"assets/admin.html.2e3ab623.js",revision:null},{url:"assets/adventure.html.10133d42.js",revision:null},{url:"assets/adventure.html.7dd14c30.js",revision:null},{url:"assets/api.html.d3881b67.js",revision:null},{url:"assets/api.html.e3cb4f6c.js",revision:null},{url:"assets/app.8ea9bd2d.js",revision:null},{url:"assets/app.html.9a9ce60b.js",revision:null},{url:"assets/app.html.f2fad59e.js",revision:null},{url:"assets/assets.html.e537dfe9.js",revision:null},{url:"assets/assets.html.ea10fba9.js",revision:null},{url:"assets/auth.html.1c4293e6.js",revision:null},{url:"assets/auth.html.ac5e2ff4.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/bind.html.77e93351.js",revision:null},{url:"assets/bind.html.bb8823c8.js",revision:null},{url:"assets/binding.html.cbe9d787.js",revision:null},{url:"assets/binding.html.da8311ab.js",revision:null},{url:"assets/boilerplate.html.51c10577.js",revision:null},{url:"assets/boilerplate.html.84052712.js",revision:null},{url:"assets/bot.html.3bc3ba01.js",revision:null},{url:"assets/bot.html.5e5b1767.js",revision:null},{url:"assets/bot.html.c11e4494.js",revision:null},{url:"assets/bot.html.dc148f8a.js",revision:null},{url:"assets/bots.html.a58a310a.js",revision:null},{url:"assets/bots.html.fd3a5bc5.js",revision:null},{url:"assets/broadcast.html.679cd74e.js",revision:null},{url:"assets/broadcast.html.b92e721a.js",revision:null},{url:"assets/built-in.html.9c6f2c19.js",revision:null},{url:"assets/built-in.html.a3571a76.js",revision:null},{url:"assets/builtin.html.8a600daf.js",revision:null},{url:"assets/builtin.html.8d8d63ba.js",revision:null},{url:"assets/callme.html.1719455c.js",revision:null},{url:"assets/callme.html.6ccba797.js",revision:null},{url:"assets/chat.html.6d6b6be0.js",revision:null},{url:"assets/chat.html.af605eae.js",revision:null},{url:"assets/chat.html.c2b50c34.js",revision:null},{url:"assets/chat.html.fb65dd06.js",revision:null},{url:"assets/client.html.77e07a49.js",revision:null},{url:"assets/client.html.aa291492.js",revision:null},{url:"assets/command.html.53c65016.js",revision:null},{url:"assets/command.html.cee662ae.js",revision:null},{url:"assets/commands.html.0d9e7708.js",revision:null},{url:"assets/commands.html.445f2e57.js",revision:null},{url:"assets/commands.html.8f0e77f9.js",revision:null},{url:"assets/commands.html.f021d1df.js",revision:null},{url:"assets/community.html.4564d077.js",revision:null},{url:"assets/community.html.ac66d1f5.js",revision:null},{url:"assets/config.html.0a88a6fb.js",revision:null},{url:"assets/config.html.8cf1f819.js",revision:null},{url:"assets/config.html.aeaa6faf.js",revision:null},{url:"assets/config.html.be07e7ad.js",revision:null},{url:"assets/configuration.html.a328a993.js",revision:null},{url:"assets/configuration.html.ddb47822.js",revision:null},{url:"assets/context.html.3c9c7cc8.js",revision:null},{url:"assets/context.html.4354576f.js",revision:null},{url:"assets/context.html.613c28fc.js",revision:null},{url:"assets/context.html.82f0f43b.js",revision:null},{url:"assets/context.html.a21ecb4f.js",revision:null},{url:"assets/context.html.a550c87e.js",revision:null},{url:"assets/crowdin.html.105d2d8e.js",revision:null},{url:"assets/crowdin.html.c54a5cfb.js",revision:null},{url:"assets/data.html.a4e18ad1.js",revision:null},{url:"assets/data.html.f89cffec.js",revision:null},{url:"assets/database.html.091fda5d.js",revision:null},{url:"assets/database.html.46fd9990.js",revision:null},{url:"assets/dataview.html.1a748589.js",revision:null},{url:"assets/dataview.html.3dd9a711.js",revision:null},{url:"assets/dataview.html.5521b683.js",revision:null},{url:"assets/dataview.html.bbdaf2a1.js",revision:null},{url:"assets/desktop.html.250a7256.js",revision:null},{url:"assets/desktop.html.72c66318.js",revision:null},{url:"assets/development.html.80f97505.js",revision:null},{url:"assets/development.html.e29ef602.js",revision:null},{url:"assets/direct.html.1dd10054.js",revision:null},{url:"assets/direct.html.86c7bece.js",revision:null},{url:"assets/discord.html.05130a2e.js",revision:null},{url:"assets/discord.html.45a09233.js",revision:null},{url:"assets/docker.html.708d10e0.js",revision:null},{url:"assets/docker.html.fb54afbc.js",revision:null},{url:"assets/docs.html.015fa1d3.js",revision:null},{url:"assets/docs.html.dcf72458.js",revision:null},{url:"assets/echo.html.c444a023.js",revision:null},{url:"assets/echo.html.f5f37678.js",revision:null},{url:"assets/evaluation.html.c38f9acf.js",revision:null},{url:"assets/evaluation.html.d87aa5ca.js",revision:null},{url:"assets/events.html.0e7cace0.js",revision:null},{url:"assets/events.html.301c26e8.js",revision:null},{url:"assets/events.html.35aebbae.js",revision:null},{url:"assets/events.html.5b705729.js",revision:null},{url:"assets/events.html.84918b5c.js",revision:null},{url:"assets/events.html.9af2b0f9.js",revision:null},{url:"assets/events.html.a773784a.js",revision:null},{url:"assets/events.html.d3e49293.js",revision:null},{url:"assets/execution.html.c572c8c3.js",revision:null},{url:"assets/execution.html.e8dd9743.js",revision:null},{url:"assets/extension.html.1147f276.js",revision:null},{url:"assets/extension.html.c58c807e.js",revision:null},{url:"assets/faq.html.2f0cf062.js",revision:null},{url:"assets/faq.html.a4a7042b.js",revision:null},{url:"assets/feedback.html.91b9c086.js",revision:null},{url:"assets/feedback.html.afb9261e.js",revision:null},{url:"assets/flow.html.3a564fd8.js",revision:null},{url:"assets/flow.html.e59873b4.js",revision:null},{url:"assets/forward.html.babcf5e7.js",revision:null},{url:"assets/forward.html.d90c6633.js",revision:null},{url:"assets/git.html.6eb7cf7e.js",revision:null},{url:"assets/git.html.a81c7788.js",revision:null},{url:"assets/glossary.html.531f31f7.js",revision:null},{url:"assets/glossary.html.fbea0600.js",revision:null},{url:"assets/help.html.30b49649.js",revision:null},{url:"assets/help.html.80a7abb6.js",revision:null},{url:"assets/history.html.5d299e48.js",revision:null},{url:"assets/history.html.e46e31b4.js",revision:null},{url:"assets/http.html.0dc5f54a.js",revision:null},{url:"assets/http.html.12ec7179.js",revision:null},{url:"assets/i18n.html.4e119abb.js",revision:null},{url:"assets/i18n.html.715bef7e.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.02b1a2db.js",revision:null},{url:"assets/index.html.065f9c80.js",revision:null},{url:"assets/index.html.11aa1be2.js",revision:null},{url:"assets/index.html.156ea795.js",revision:null},{url:"assets/index.html.21f9953a.js",revision:null},{url:"assets/index.html.2987ef38.js",revision:null},{url:"assets/index.html.31ce3b61.js",revision:null},{url:"assets/index.html.32700b59.js",revision:null},{url:"assets/index.html.4138dfdc.js",revision:null},{url:"assets/index.html.43aea0f4.js",revision:null},{url:"assets/index.html.461def15.js",revision:null},{url:"assets/index.html.4cb8d2d2.js",revision:null},{url:"assets/index.html.4d1bab83.js",revision:null},{url:"assets/index.html.54abc448.js",revision:null},{url:"assets/index.html.5c537d31.js",revision:null},{url:"assets/index.html.5c9a4ed0.js",revision:null},{url:"assets/index.html.5fe91549.js",revision:null},{url:"assets/index.html.696b52bc.js",revision:null},{url:"assets/index.html.73d12873.js",revision:null},{url:"assets/index.html.76f92c2a.js",revision:null},{url:"assets/index.html.7bd918d6.js",revision:null},{url:"assets/index.html.87d9f8e6.js",revision:null},{url:"assets/index.html.8cc50d62.js",revision:null},{url:"assets/index.html.8dc704e8.js",revision:null},{url:"assets/index.html.98ec2e5b.js",revision:null},{url:"assets/index.html.a024a969.js",revision:null},{url:"assets/index.html.a7b7e774.js",revision:null},{url:"assets/index.html.a82f7027.js",revision:null},{url:"assets/index.html.a9052065.js",revision:null},{url:"assets/index.html.b97d60dc.js",revision:null},{url:"assets/index.html.bf35bec6.js",revision:null},{url:"assets/index.html.cdc0d1d1.js",revision:null},{url:"assets/index.html.cf42ab09.js",revision:null},{url:"assets/index.html.d4de6367.js",revision:null},{url:"assets/index.html.da2fdbfa.js",revision:null},{url:"assets/index.html.db9205f9.js",revision:null},{url:"assets/index.html.dd5dab6c.js",revision:null},{url:"assets/index.html.ed20acd5.js",revision:null},{url:"assets/insight.html.1d2b9907.js",revision:null},{url:"assets/insight.html.bd05d4c0.js",revision:null},{url:"assets/interp.html.661d736d.js",revision:null},{url:"assets/interp.html.cfd1589f.js",revision:null},{url:"assets/intro.html.a1e4c396.js",revision:null},{url:"assets/intro.html.adfac870.js",revision:null},{url:"assets/introduction.html.919289ed.js",revision:null},{url:"assets/introduction.html.95fb4b68.js",revision:null},{url:"assets/kaiheila.html.0dd6fb51.js",revision:null},{url:"assets/kaiheila.html.ba229453.js",revision:null},{url:"assets/Layout.63373a93.js",revision:null},{url:"assets/level.html.00eff080.js",revision:null},{url:"assets/level.html.51c01004.js",revision:null},{url:"assets/lifecycle.html.2133d0c0.js",revision:null},{url:"assets/lifecycle.html.2d0a9a50.js",revision:null},{url:"assets/lifecycle.html.5389ca18.js",revision:null},{url:"assets/lifecycle.html.e3fbc960.js",revision:null},{url:"assets/local.html.079b92d3.js",revision:null},{url:"assets/local.html.0a9214b5.js",revision:null},{url:"assets/locales.html.79c3a987.js",revision:null},{url:"assets/locales.html.989b1480.js",revision:null},{url:"assets/logger.html.1c64b197.js",revision:null},{url:"assets/logger.html.36a60ebd.js",revision:null},{url:"assets/logger.html.89b6b45f.js",revision:null},{url:"assets/logger.html.a95cfe55.js",revision:null},{url:"assets/logger.html.abf2c354.js",revision:null},{url:"assets/logger.html.fecf7821.js",revision:null},{url:"assets/main.html.b923ff86.js",revision:null},{url:"assets/main.html.da2dca4c.js",revision:null},{url:"assets/manager.html.5c49f2ef.js",revision:null},{url:"assets/manager.html.67a29505.js",revision:null},{url:"assets/manager.html.be3dc5e4.js",revision:null},{url:"assets/manager.html.ea16e614.js",revision:null},{url:"assets/market.html.68fb183c.js",revision:null},{url:"assets/market.html.6c197b59.js",revision:null},{url:"assets/memory.html.89186b0a.js",revision:null},{url:"assets/memory.html.a9074fb2.js",revision:null},{url:"assets/message.html.49cfb74b.js",revision:null},{url:"assets/message.html.7d51b148.js",revision:null},{url:"assets/middleware.html.19ce540e.js",revision:null},{url:"assets/middleware.html.7e61296e.js",revision:null},{url:"assets/middleware.html.98558bc1.js",revision:null},{url:"assets/middleware.html.e6106f4d.js",revision:null},{url:"assets/migration.html.09415b8c.js",revision:null},{url:"assets/migration.html.33222bbe.js",revision:null},{url:"assets/misc.html.02f1b8a0.js",revision:null},{url:"assets/misc.html.22619657.js",revision:null},{url:"assets/misc.html.695a2522.js",revision:null},{url:"assets/misc.html.c2911f57.js",revision:null},{url:"assets/mobile.html.65d20e86.js",revision:null},{url:"assets/mobile.html.d151830c.js",revision:null},{url:"assets/mock.html.ec916e02.js",revision:null},{url:"assets/mock.html.ef193a41.js",revision:null},{url:"assets/model.html.42a6daf2.js",revision:null},{url:"assets/model.html.5ca3c855.js",revision:null},{url:"assets/model.html.69c2f8be.js",revision:null},{url:"assets/model.html.836da26e.js",revision:null},{url:"assets/module.html.0fb775b9.js",revision:null},{url:"assets/module.html.cfa54dc5.js",revision:null},{url:"assets/mongo.html.046f4f99.js",revision:null},{url:"assets/mongo.html.f0416610.js",revision:null},{url:"assets/more.html.2426a618.js",revision:null},{url:"assets/more.html.310f1f84.js",revision:null},{url:"assets/mysql.html.66f2fed1.js",revision:null},{url:"assets/mysql.html.ce599b27.js",revision:null},{url:"assets/nestjs.html.cafa852a.js",revision:null},{url:"assets/nestjs.html.dcd377f2.js",revision:null},{url:"assets/observer.html.64956819.js",revision:null},{url:"assets/observer.html.cb830e0e.js",revision:null},{url:"assets/observer.html.d72798db.js",revision:null},{url:"assets/observer.html.ded5a5e4.js",revision:null},{url:"assets/onebot.html.06d971c0.js",revision:null},{url:"assets/onebot.html.ba8bd44e.js",revision:null},{url:"assets/playground.html.2a16df00.js",revision:null},{url:"assets/playground.html.486cf727.js",revision:null},{url:"assets/presets.html.18b82aa5.js",revision:null},{url:"assets/presets.html.afaebed4.js",revision:null},{url:"assets/prob.html.4f653e11.js",revision:null},{url:"assets/prob.html.df580811.js",revision:null},{url:"assets/publish.html.958f4c1e.js",revision:null},{url:"assets/publish.html.cff4aaf4.js",revision:null},{url:"assets/puppeteer.html.75200fb1.js",revision:null},{url:"assets/puppeteer.html.e8af8c09.js",revision:null},{url:"assets/qqguild.html.567812a3.js",revision:null},{url:"assets/qqguild.html.cb859efb.js",revision:null},{url:"assets/query.html.0aa7e185.js",revision:null},{url:"assets/query.html.961c81bf.js",revision:null},{url:"assets/rate-limit.html.6cd46e89.js",revision:null},{url:"assets/rate-limit.html.7626eee0.js",revision:null},{url:"assets/recall.html.9994d00e.js",revision:null},{url:"assets/recall.html.ef6caa2e.js",revision:null},{url:"assets/regexp.html.2f9a39fc.js",revision:null},{url:"assets/regexp.html.68aa4b81.js",revision:null},{url:"assets/registry.html.70aa095c.js",revision:null},{url:"assets/registry.html.afbca45a.js",revision:null},{url:"assets/remote.html.09e6b4f7.js",revision:null},{url:"assets/remote.html.aca262c7.js",revision:null},{url:"assets/repeater.html.841b5a1c.js",revision:null},{url:"assets/repeater.html.9d368f35.js",revision:null},{url:"assets/respondent.html.1706b177.js",revision:null},{url:"assets/respondent.html.aa19a352.js",revision:null},{url:"assets/router.html.682b51a7.js",revision:null},{url:"assets/router.html.7910e84c.js",revision:null},{url:"assets/s3.html.3d1a6eea.js",revision:null},{url:"assets/s3.html.e6d38d61.js",revision:null},{url:"assets/sandbox.html.351a0873.js",revision:null},{url:"assets/sandbox.html.64c74c71.js",revision:null},{url:"assets/sandbox.html.92e67e5a.js",revision:null},{url:"assets/sandbox.html.9c21dba8.js",revision:null},{url:"assets/sandbox.html.c5887873.js",revision:null},{url:"assets/sandbox.html.e0ce355f.js",revision:null},{url:"assets/schedule.html.5207c217.js",revision:null},{url:"assets/schedule.html.a7a9fa0d.js",revision:null},{url:"assets/schema.html.41c98438.js",revision:null},{url:"assets/schema.html.697113f1.js",revision:null},{url:"assets/schema.html.91763a1a.js",revision:null},{url:"assets/schema.html.b615caac.js",revision:null},{url:"assets/schemastery.html.61c5a88c.js",revision:null},{url:"assets/schemastery.html.7b19756d.js",revision:null},{url:"assets/segment.html.5c4e90a1.js",revision:null},{url:"assets/segment.html.9133dfd6.js",revision:null},{url:"assets/segment.html.d4dfaf99.js",revision:null},{url:"assets/segment.html.f9f29eff.js",revision:null},{url:"assets/selector.html.25cc16ea.js",revision:null},{url:"assets/selector.html.cdc93a20.js",revision:null},{url:"assets/server.html.71e05dac.js",revision:null},{url:"assets/server.html.7655104e.js",revision:null},{url:"assets/server.html.e4e0f559.js",revision:null},{url:"assets/server.html.e83917f8.js",revision:null},{url:"assets/service.html.14878396.js",revision:null},{url:"assets/service.html.1861ec85.js",revision:null},{url:"assets/service.html.8df893e3.js",revision:null},{url:"assets/service.html.b79d1d58.js",revision:null},{url:"assets/session.html.76c4a591.js",revision:null},{url:"assets/session.html.78684d74.js",revision:null},{url:"assets/session.html.c43c3481.js",revision:null},{url:"assets/session.html.dd9d37bc.js",revision:null},{url:"assets/source.html.43be7c56.js",revision:null},{url:"assets/source.html.f89990a6.js",revision:null},{url:"assets/sqlite.html.81a5c506.js",revision:null},{url:"assets/sqlite.html.f2dc8406.js",revision:null},{url:"assets/started.html.8077b5a3.js",revision:null},{url:"assets/started.html.a1d425b5.js",revision:null},{url:"assets/status.html.465cec94.js",revision:null},{url:"assets/status.html.ab515a2c.js",revision:null},{url:"assets/structure.html.3d543683.js",revision:null},{url:"assets/structure.html.851e1485.js",revision:null},{url:"assets/style.7cd9ba7b.css",revision:null},{url:"assets/sudo.html.7619afca.js",revision:null},{url:"assets/sudo.html.b0c289ba.js",revision:null},{url:"assets/telegram.html.5527c4f8.js",revision:null},{url:"assets/telegram.html.5c3c9a31.js",revision:null},{url:"assets/template.html.9b6cbcda.js",revision:null},{url:"assets/template.html.f77e8ef5.js",revision:null},{url:"assets/thirdeye.html.60bf9834.js",revision:null},{url:"assets/thirdeye.html.c5321375.js",revision:null},{url:"assets/translation.html.34fdf216.js",revision:null},{url:"assets/translation.html.a10a5787.js",revision:null},{url:"assets/unit-tests.html.2989f617.js",revision:null},{url:"assets/unit-tests.html.4e6ebe37.js",revision:null},{url:"assets/v4.1.html.c99f6d82.js",revision:null},{url:"assets/v4.1.html.e7905174.js",revision:null},{url:"assets/v4.2.html.4e0d7526.js",revision:null},{url:"assets/v4.2.html.d9341e76.js",revision:null},{url:"assets/v4.3.html.995d45c0.js",revision:null},{url:"assets/v4.3.html.e22f5497.js",revision:null},{url:"assets/v4.4.html.79c5d835.js",revision:null},{url:"assets/v4.4.html.9f934f74.js",revision:null},{url:"assets/v4.5.html.2a8669b4.js",revision:null},{url:"assets/v4.5.html.c0c8199d.js",revision:null},{url:"assets/v4.6.html.bf324f3e.js",revision:null},{url:"assets/v4.6.html.c2179193.js",revision:null},{url:"assets/v4.7.html.7c792750.js",revision:null},{url:"assets/v4.7.html.f56fe25f.js",revision:null},{url:"assets/v4.8.html.5c92fa4c.js",revision:null},{url:"assets/v4.8.html.e65585a6.js",revision:null},{url:"assets/verifier.html.e536d7eb.js",revision:null},{url:"assets/verifier.html.f3f21ef8.js",revision:null},{url:"assets/worker.html.4c60c3bf.js",revision:null},{url:"assets/worker.html.c1388b8b.js",revision:null},{url:"assets/writing.html.0f6f371c.js",revision:null},{url:"assets/writing.html.a4d5bc73.js",revision:null},{url:"assets/writing.html.b096d2e0.js",revision:null},{url:"assets/writing.html.e4cc712d.js",revision:null},{url:"async-method.png",revision:"101dca6bd4016aaa8558fa9d24c9f99d"},{url:"avatar/satori.png",revision:"fbf70f03f5d713d4339fa3b07b40f427"},{url:"avatar/shiki.png",revision:"25c9768987944c4bccb7e6ddd6c693d6"},{url:"chess/othello-1.svg",revision:"44b88417a98379032216b4c3efe1b2ac"},{url:"chess/othello-2.svg",revision:"868c0dae7261d4fff7ef5f91c8862430"},{url:"chess/othello-3.svg",revision:"3126024190c107d8cf6546f74067a352"},{url:"community/decorator/nestjs.html",revision:"680fde5e92ae654835b6c6a77fabb0e7"},{url:"community/decorator/schemastery.html",revision:"531618fe2b43fccff1841d1b9d73834e"},{url:"community/decorator/thirdeye.html",revision:"6c5cd8b2e6d47b8175f5109bb173f441"},{url:"community/dialogue/config.html",revision:"9e0f565cce476bf9af3f6e1981851525"},{url:"community/dialogue/context.html",revision:"f10d7838bb97c756bdb4a8067659f742"},{url:"community/dialogue/events.html",revision:"2dbd3f69c1b856256d2437d418c2533a"},{url:"community/dialogue/flow.html",revision:"3b0c529b01fe5b06793702621ccb84ff"},{url:"community/dialogue/index.html",revision:"fe4b85b1a584184b3cc91614b12148a1"},{url:"community/dialogue/interp.html",revision:"8fd684a92af38b2d428fef53d70e8c27"},{url:"community/dialogue/misc.html",revision:"f82214b4262c1268ef4912ce6611f790"},{url:"community/dialogue/prob.html",revision:"3feb29224698c226b58e7e8ee24268f1"},{url:"community/dialogue/regexp.html",revision:"508c0db205ac5dfdc2431b26f139e2e2"},{url:"community/dialogue/service.html",revision:"1f61c4e8d8ac9727e955adacd5e006e6"},{url:"community/eval/addon.html",revision:"9769b98554c2c4bf9e65ef02bd7504bd"},{url:"community/eval/config.html",revision:"c79827257104794bedcfc45a613d8935"},{url:"community/eval/index.html",revision:"0d5bb649bfe481e99866a81f3c923a44"},{url:"community/eval/main.html",revision:"f2d7c424e5bcb78f02882f666ff38137"},{url:"community/eval/sandbox.html",revision:"7fc37cf596649ed34cdf8fba29ac8e2c"},{url:"community/eval/worker.html",revision:"22b34587f591278897d0219c56378f35"},{url:"community/github/index.html",revision:"db9527645215565600872f0186203c8c"},{url:"community/index.html",revision:"691db158ff671a8f0e9646d590376faf"},{url:"community/pics/api.html",revision:"4e03e4a891adf1b2caed77318aab0775"},{url:"community/pics/commands.html",revision:"a796af6d6f2917da0d0202b51906b623"},{url:"community/pics/community.html",revision:"e5362eaeba9815c00497057cba642c63"},{url:"community/pics/configuration.html",revision:"f9688ef21a6119d9221e73af4e348d07"},{url:"community/pics/intro.html",revision:"e63788d8fcaf4a20ee2133b2178ae181"},{url:"community/pics/middleware.html",revision:"f492f66e33a17b6e83c814139edf2178"},{url:"community/pics/source.html",revision:"521096a4346506e34f744d5bdc14628b"},{url:"community/pics/started.html",revision:"acb5ba4c3ddab541714af45cce99083c"},{url:"console/bot.png",revision:"ef9aaf95cb6b83b3ef33ab67b47203dc"},{url:"console/dependencies.png",revision:"a996814a20d51f3af4a2a868b36a9838"},{url:"console/logger.png",revision:"7cd969db0034baebe4bd788063efe968"},{url:"console/market-search.png",revision:"bcae61957b33254336473e16ccc97ee7"},{url:"console/market.png",revision:"cabd24d808cd534471077b178c0225d0"},{url:"console/sandbox.png",revision:"c3feb122672250d1fd43a7d79a8aea2a"},{url:"console/settings-enable.png",revision:"58bab80cb180a20b0f36448479546af4"},{url:"console/settings.png",revision:"2b9def9f845d038dc23b375af1e466b4"},{url:"console/status.png",revision:"aea8e2f0872c1dda93cfafccca140ed7"},{url:"github/oauth-app-1.png",revision:"626475e1fe826f7cb3c095fe92aa2023"},{url:"github/oauth-app-2.png",revision:"d5ff26d92097474e5e8415fe399f3557"},{url:"guide/adapter/binding.html",revision:"637738956ec92c250d6c7e9d3012c862"},{url:"guide/adapter/bot.html",revision:"a81b04f477844c6b7da343830e468a8c"},{url:"guide/adapter/index.html",revision:"406b6dd609997afd82da461b5ed9c099"},{url:"guide/adapter/writing.html",revision:"cedc9d30e1be7f1ff2af39676af71c71"},{url:"guide/command/execution.html",revision:"e7f0523f32ce57404f93b7ae1bfbdae0"},{url:"guide/command/help.html",revision:"4e330d8226c2070365e08289d0c3d978"},{url:"guide/command/index.html",revision:"b0f27de299f79f32c6d711ce9509aafb"},{url:"guide/command/more.html",revision:"e8369b6e7ca27dc69b5e42cce52e6a00"},{url:"guide/console/data.html",revision:"cb24e592c7316ffc43f676b0ed038c05"},{url:"guide/console/extension.html",revision:"87c5ec429a2fceb8e7986b41d0b8b236"},{url:"guide/console/index.html",revision:"68ccfc4808481c1c25339c9829bd7370"},{url:"guide/database/builtin.html",revision:"711efc3704b9d3aaa052b792369cd911"},{url:"guide/database/index.html",revision:"7fbbd9559fec55c2cf6554a02dfdf925"},{url:"guide/database/model.html",revision:"77789bf12c81827009f4bbc4b93549fd"},{url:"guide/database/observer.html",revision:"b4e582831b83b45bc47dfbe8f77fe824"},{url:"guide/database/writing.html",revision:"79007410f1447e312bb5d57971552de9"},{url:"guide/i18n/crowdin.html",revision:"7a8f1ebcf7480d2521a58213b14aeabd"},{url:"guide/i18n/index.html",revision:"6ce5aed873ec8e3532bfd9537b6cb287"},{url:"guide/i18n/presets.html",revision:"01541bab2b8a9e37fba7e0f0be83442b"},{url:"guide/i18n/translation.html",revision:"c947babb2f662418d45befcb6b829002"},{url:"guide/in-depth/message.html",revision:"1cba2821cec723f12dc0f2bbf1604c8f"},{url:"guide/in-depth/module.html",revision:"740718fc4de72578bb48742c5489375f"},{url:"guide/index.html",revision:"434a1a41af42a2abdc5af36f6bc57ede"},{url:"guide/message/middleware.html",revision:"68b1edb4e2493d2628bde9baf6e695f2"},{url:"guide/message/segment.html",revision:"9138aa2a77442ab8c95b0190d3a96b50"},{url:"guide/message/session.html",revision:"0a3c6ced35716ae0c778a80025c8cc04"},{url:"guide/plugin/context.html",revision:"f728b09339f7957affc2ef873040a681"},{url:"guide/plugin/events.html",revision:"ca660f51bd74e06c07b24c31738ff8f6"},{url:"guide/plugin/index.html",revision:"66bd87ec8d12a5b4986e0c865bdcc93e"},{url:"guide/plugin/lifecycle.html",revision:"11dc523f3256fc2865634b85ad3fbef7"},{url:"guide/plugin/publish.html",revision:"4c43dd8df1443fb3fac6a709eba14582"},{url:"guide/plugin/schema.html",revision:"096c68473a9b75e8c0ec0ab301cecb96"},{url:"guide/plugin/service.html",revision:"fe2478b70320fb435491abffd9a48027"},{url:"guide/testing/sandbox.html",revision:"942eb629a0db1c16c7bd317960c9bb06"},{url:"guide/testing/unit-tests.html",revision:"c6b4aeef8d4d845143706f375e61b244"},{url:"image-search/68670776_p0_master1200.jpg",revision:"ea5151c3c463884d7bab7f0af3810347"},{url:"image-search/73212619_p0_master1200.jpg",revision:"d9435a3e4ce3391677c9d4ee8dd8c05b"},{url:"index.html",revision:"220fcf03402c21bcf99e65c723388800"},{url:"koishi.png",revision:"9b6734ad89cbacff80690bad5e7a9876"},{url:"manual/cli/development.html",revision:"0725213d1be2527914ed469451bba45c"},{url:"manual/cli/index.html",revision:"7a717e23c573a3317148157df32ad420"},{url:"manual/console/adapter.html",revision:"c7f4a1ee15d895b07c276df6312d63b7"},{url:"manual/console/chat.html",revision:"4cda38a28974fb2802aa7dd419eb5bcc"},{url:"manual/console/dataview.html",revision:"d61b3d1c488d783b78e56f5aa2ace51c"},{url:"manual/console/index.html",revision:"d7ada2dc026653d34cc6ef0d1f196076"},{url:"manual/console/manager.html",revision:"b677a2057a3c7ff5cf3ac4e7da7012bc"},{url:"manual/introduction.html",revision:"61afb3b2e7f7f5dd12d17f17d3cb671c"},{url:"manual/starter/boilerplate.html",revision:"9347712b437e487a6d472d9dc2a01043"},{url:"manual/starter/desktop.html",revision:"d6653a98ec9bba19f1d715718bc68b44"},{url:"manual/starter/direct.html",revision:"c6c0ce5334cd76540b0991ca19eef7b4"},{url:"manual/starter/docker.html",revision:"d3e96f15c69d1c26c356a017160bd729"},{url:"manual/starter/index.html",revision:"0b45da02ecb5e4bb1888afc6ada19a1a"},{url:"manual/starter/mobile.html",revision:"01e10341875b784a346618e79bf7281e"},{url:"manual/starter/nodejs/home.jpg",revision:"179b8eb6a22f90b05397be41a0ee7a68"},{url:"manual/starter/server.html",revision:"b8b45048256629b30425650bfab84456"},{url:"market.html",revision:"3fba0e20b74b1156dc9ea7ea312f7861"},{url:"nlp-example.png",revision:"259c6f37539d9c45b3171e09d2b1bb22"},{url:"playground.html",revision:"40d51ee6eda0e4619da4a99737261237"},{url:"plugins/accessibility/admin.html",revision:"9d57c6b4bec5bce9d57a0adb5039274e"},{url:"plugins/accessibility/bind.html",revision:"9467a03531e75fd2f6f3e7c917949e7a"},{url:"plugins/accessibility/callme.html",revision:"a901b12e69ab98a2b44247f896da15e0"},{url:"plugins/accessibility/commands.html",revision:"e4db146d6a2b4b75c23cdf254cb851e5"},{url:"plugins/accessibility/locales.html",revision:"cbab3760ba08f6220be09172c2f74683"},{url:"plugins/accessibility/rate-limit.html",revision:"faba65f1c85dd0ea3cb393048491e78a"},{url:"plugins/accessibility/schedule.html",revision:"407f85e90ec6557074b19c9b68ba0cc1"},{url:"plugins/accessibility/sudo.html",revision:"554bcd4b052f478a41ec01c75669c0e9"},{url:"plugins/accessibility/verifier.html",revision:"7e97a3a06bb96ef4d7276f4356aada75"},{url:"plugins/adapter/discord.html",revision:"0732e772a424f73f0629f24815e025c1"},{url:"plugins/adapter/kaiheila.html",revision:"5974f72fdf985b9920a97bd02ed081b5"},{url:"plugins/adapter/onebot.html",revision:"850b1a88bca594c053e65a0b214cb6d8"},{url:"plugins/adapter/qqguild.html",revision:"6f83c08208915c26ec9a8c37ec74bbde"},{url:"plugins/adapter/telegram.html",revision:"4eaa8235c2855372b8bc4313c813ce77"},{url:"plugins/adventure/events.html",revision:"7b0a2b74e899a9b46e6b95eea11e0219"},{url:"plugins/adventure/index.html",revision:"cb3b6fa5149a30bafc176c2b353835a0"},{url:"plugins/assets/git.html",revision:"675cb9b2b4a0057dcad9672c060fb35e"},{url:"plugins/assets/local.html",revision:"4704df74fe87f35ebd22e5f97b4b5491"},{url:"plugins/assets/remote.html",revision:"a58dd647ba73acfe9e0d40dca9377b05"},{url:"plugins/assets/s3.html",revision:"cf4f09010782d19c50de768e15ab5cbc"},{url:"plugins/common/broadcast.html",revision:"49dd8fcfdac3ce2fde496d02cfd3ced7"},{url:"plugins/common/echo.html",revision:"13e26d68a68e7e0fddff0b64fb71efbb"},{url:"plugins/common/feedback.html",revision:"10c40c031b8978b3e15bf1a9cc85b4a8"},{url:"plugins/common/forward.html",revision:"950494ef5e334829db570e3a57344263"},{url:"plugins/common/recall.html",revision:"502c9ebcaa0ce37ab220733c63a770b1"},{url:"plugins/common/repeater.html",revision:"5c003956791187fca5b4207f56d007c3"},{url:"plugins/common/respondent.html",revision:"f667e2ae5029d99e4652f10ebf5b59a5"},{url:"plugins/console/auth.html",revision:"28751e49bf5499634da6f5bdefc846e0"},{url:"plugins/console/chat.html",revision:"fad67ce74d7e48221d42dda06b18c25b"},{url:"plugins/console/dataview.html",revision:"c11558b4831bf8a392009888b69d5d59"},{url:"plugins/console/index.html",revision:"9fa94c11efb2a5cf4b18cdc4a08220ed"},{url:"plugins/console/insight.html",revision:"fe5e098c7b2036f6a94f2f91fcbbc6ac"},{url:"plugins/console/logger.html",revision:"52ecbd2c2f1005e6a94808668dc62bc6"},{url:"plugins/console/manager.html",revision:"7b1938e97f300a7a7829f037942edc95"},{url:"plugins/console/sandbox.html",revision:"523b1be0b5c44aa654e691618042d129"},{url:"plugins/console/status.html",revision:"24b8e841fe2a48d03ed12760455435af"},{url:"plugins/database/level.html",revision:"56e0a3b9c6c14c68a4d2c332df2246c6"},{url:"plugins/database/memory.html",revision:"084df4c9df655d0e63dee876b1d6f357"},{url:"plugins/database/mongo.html",revision:"e408941f52abdd58b38b3b17e116433a"},{url:"plugins/database/mysql.html",revision:"f58732beb3c1604a330c9b97621ea1ec"},{url:"plugins/database/sqlite.html",revision:"f4a10fd0786b5aea446263960ed8f740"},{url:"plugins/index.html",revision:"60bf6463937cb42a56603e6379dc4063"},{url:"plugins/other/adventure.html",revision:"640dfdcc645dd1e5044ac71ec2492d67"},{url:"plugins/other/mock.html",revision:"98805e10ac6303acba69ecf2377fef76"},{url:"plugins/other/puppeteer.html",revision:"640d92820593f7dce8f1236b15faad6b"}],{})}));
