!function t(n,o,e){function r(u,s){if(!o[u]){if(!n[u]){var a="function"==typeof require&&require;if(!s&&a)return a(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var f=o[u]={exports:{}};n[u][0].call(f.exports,function(t){var o=n[u][1][t];return r(o||t)},f,f.exports,t,n,o,e)}return o[u].exports}for(var i="function"==typeof require&&require,u=0;u<e.length;u++)r(e[u]);return r}({1:[function(t,n,o){"use strict";var e={production:!1,shortHubUrl:"markwilkins.uberflip.com",fullHubUrl:"https://markwilkins.uberflip.com/",subdir:"markwilkins",remindMeToGit:!0};n.exports=e},{}],2:[function(t,n,o){"use strict";var e,r=t("./dev-options.js");e=r.production?"//cihost.uberflip.com/"+r.subdir+"/includes/":"/includes/",$.ajax({url:e+"header.html?1"}).done(function(t){$("body").prepend(t)}),$.ajax({url:e+"footer.html?1"}).done(function(t){$("body > footer").remove(),$("body").append(t)});var i=function(t){t.preventDefault(),console.log(t.target.href),Hubs.changePage(t.target.href)},u=function(t){var n=new RegExp("^((http[s]?|ftp):/)?/?([^:/s]+)?("+t+")","gi");$("a").not(".onBrand--LocalDevLink").each(function(t,o){var e=$(this).attr("href");if(n.test(e)){var r=e.replace(n,"");"/"!==r[0]&&(r="/"+r),$(this).attr("href",r),$(this).attr("target",""),$(this).on("click",i),$(this).addClass("onBrand--LocalDevLink")}})};r.production||(Hubs.Events.on("load",function(){u(r.shortHubUrl),Hubs.Config.hubBaseUrl="http://localhost:3000/"}),Hubs.Events.on("pageChange",function(){u(r.shortHubUrl),Hubs.Config.hubBaseUrl="http://localhost:3000/"}),Hubs.Events.on("itemsLoaded",function(){u(r.shortHubUrl)})),Hubs.Events.on("load",function(){fixShareWidget()}).on("pageChange",function(){}).on("itemsLoaded",function(t,n){}).on("resize",function(){sideCtaFix(),addThisFix()}).on("scroll",function(){sideCtaFix(),addThisFix()}).on("ctaActivate",function(t){}).on("ctaFormSubmitSuccess",function(t,n,o){}).on("search",function(){})},{"./dev-options.js":1}]},{},[2]);
//# sourceMappingURL=sourceMaps/onbrand.js.map
