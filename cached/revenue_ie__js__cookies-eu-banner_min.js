!function(e,t,o){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.CookiesEuBanner=t()}(window,function(){var e,t=window.document;return e=function(t,o,i){return this instanceof e?(this.cookieTimeout=33696e6,this.bots=/bot|googlebot|crawler|spider|robot|crawling/i,this.cookieName="hasConsent",this.trackingCookiesNames=["__utma","__utmb","__utmc","__utmt","__utmv","__utmz","_ga","_gat"],this.launchFunction=t,this.waitAccept=null!=o?o:!1,void this.init()):new e(t)},e.prototype={init:function(){return this.isBot()||!this.isToTrack()||this.hasConsent()===!1?!1:this.hasConsent()===!0?(this.launchFunction(),!0):(this.showBanner(),void(this.waitAccept||this.setCookie(this.cookieName,!0)))},showBanner:function(){var e=this,o=t.getElementById("cookies-eu-banner"),i=t.getElementById("cookies-eu-reject"),n=t.getElementById("cookies-eu-accept"),s=t.getElementById("cookies-eu-more");o.style.display="block",s&&this.addEventListener(s,"click",function(){e.deleteCookie(e.cookieName)}),n&&this.addEventListener(n,"click",function(){o.parentNode.removeChild(o),e.setCookie(e.cookieName,!0),e.launchFunction()}),i&&this.addEventListener(i,"click",function(){o.parentNode.removeChild(o),e.setCookie(e.cookieName,!1),e.deleteTrackingCookies()})},hasConsent:function(){return t.cookie.indexOf(this.cookieName+"=true")>-1?!0:t.cookie.indexOf(this.cookieName+"=false")>-1?!1:null},isBot:function(){return this.bots.test(navigator.userAgent)},isToTrack:function(){var e=navigator.doNotTrack||navigator.msDoNotTrack||window.doNotTrack;return null!=e?e&&"yes"!==e&&1!==e&&"1"!==e:!0},deleteTrackingCookies:function(){var e;for(e in this.trackingCookiesNames)this.deleteCookie(e)},setCookie:function(e,o){var i=new Date;i.setTime(i.getTime()+this.cookieTimeout),t.cookie=e+"="+o+";expires="+i.toGMTString()+";path=/"},deleteCookie:function(e){var o=t.location.hostname;0===o.indexOf("www.")&&(o=o.substring(4)),t.cookie=e+"=; domain=."+o+"; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/",t.cookie=e+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/"},addEventListener:function(e,o,i){t.addEventListener?e.addEventListener(o,i):e.attachEvent&&e.attachEvent("on"+o,i)}},e});