!function(){function e(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,i,c,s,r=[],a=!0,l=!1;try{if(c=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;a=!1}else for(;!(a=(n=c.call(o)).done)&&(r.push(n.value),r.length!==t);a=!0);}catch(e){l=!0,i=e}finally{try{if(!a&&null!=o.return&&(s=o.return(),Object(s)!==s))return}finally{if(l)throw i}}return r}}(e,o)||function(e,o){if(!e)return;if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,o)}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}System.register([],(function(t,n){"use strict";return{execute:function(){
/*!
        * Cookie Consent
        * Copyright 2021 Dirk Persky (https://github.com/DirkPersky/npm-dp_cookieconsent/issues)
        * Licensed under AGPL v3+ (https://github.com/DirkPersky/npm-dp_cookieconsent/blob/master/LICENSE)
        */
!function(t,n){if(!t.hasInitialised){!function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}e.prototype=window.Event.prototype,window.CustomEvent=e}(),function(){if("function"==typeof window.Event)return!1;function e(e,t){t=t||{bubbles:!0,cancelable:!0,detail:void 0};var o=document.createEvent("Event");return o.initEvent(e,t.bubbles,t.cancelable,t.detail),o}e.prototype=window.Event.prototype,window.Event=e}();var i={detectRobot:function(e){return new RegExp([/Chrome-Lighthouse/,/bot/,/spider/,/crawl/,/APIs-Google/,/AdsBot/,/Googlebot/,/mediapartners/,/Google Favicon/,/FeedFetcher/,/Google-Read-Aloud/,/DuplexWeb-Google/,/googleweblight/,/bing/,/yandex/,/baidu/,/duckduck/,/yahoo/,/ecosia/,/ia_archiver/,/semrush/].map((function(e){return e.source})).join("|"),"i").test(e)},reformatCheckboxOptions:function(e){return Object.entries(e).map((function(e){var t="true"==String(e[1]).toLowerCase();return{name:e[0],checked:t}}))},getCookie:function(e){var t=("; "+document.cookie).split("; "+e+"=");return t.length<2?void 0:JSON.parse(t.pop().split(";").shift())},setCookie:function(e,t,o,n,i,c){var s=new Date;s.setHours(s.getHours()+24*(o||365));var r=[e+"="+JSON.stringify(t),"expires="+s.toUTCString(),"path="+(i||"/"),"SameSite=Strict"];n&&r.push("domain="+n),c&&r.push("secure"),document.cookie=r.join(";")},prepareCookie:function(e,t){var o={status:"open"},n=this.getCookie(t);return void 0!==n&&this.deepExtend(o,n),this.deepExtend(o,e),{exists:void 0!==n,config:o}},getElementsByTag:function(e,t){return void 0===t&&(t="data-cookieconsent"),document.querySelectorAll(e+"["+t+"]")},deepExtend:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(n in e&&"object"===o(e[n])&&"object"===o(t[n])?this.deepExtend(e[n],t[n]):e[n]=t[n]);return e},appendElement:function(e,t){var o=document.createElement("div"),n=null!=t?t:document.body;o.innerHTML=this.replaceContent(e);var i=o.children[0];return n.appendChild(i),i},applyStyle:function(t,o,n){if(!(t.length<=0||void 0===this.options[o]||void 0===this.options[o][n]))for(var i=0,c=Object.entries(this.options[o][n]);i<c.length;i++){var s=e(c[i],2),r=s[0],a=s[1];switch(r){case"background":t.style.backgroundColor=a;break;case"text":t.style.color=a}}},fireEvent:function(e,t){var o;o=t?new CustomEvent(e,{detail:{$el:t}}):new Event(e),document.dispatchEvent(o)}};t.utils=i;var c=function(){var n={cookie:{name:"dp_cookieconsent_status",path:"/",domain:"",expiryDays:365,secure:!1},position:"bottom-right",content:(new window.DPCookieConsentL10N).getLang(),theme:"edgeless",type:"opt-in",revokable:!0,reloadOnRevoke:!0,checkboxes:[{name:"statistics",checked:!1},{name:"marketing",checked:!1}],palette:{popup:{background:"rgba(0,0,0,0.8)",text:"#ffffff"},button:{background:"#f96332",text:"#ffffff"}},overlay:{notice:!0,box:{background:"rgba(0,0,0,0.8)",text:"#ffffff"},btn:{background:"#f96332",text:"#ffffff"}},onPopupOpen:function(){},onPopupClose:function(){},onInitialise:function(){},onStatusChange:function(e,t){},onRevokeChoice:function(){},compilance:{"opt-in":'<div class="cc-body" id="cookieconsent:body">\r\n    <span class="cc-message" id="cookieconsent:desc">\r\n        {{description}}\r\n        {{selection}}\r\n    </span>\r\n    <div class="cc-compliance cc-highlight">\r\n        {{allow-all}}\r\n        {{allow}}\r\n        {{deny}}\r\n    </div>\r\n</div>'},revokeBtn:'<div class="dp--revoke {{classes}}">\r\n    <i class="dp--icon-fingerprint"></i>\r\n    <span class="dp--hover">{{policy}}</span>\r\n</div>\r\n',overlayLayout:'<div class="dp--overlay-inner">\r\n    <div class="dp--overlay-header">{{notice}}</div>\r\n    <div class="dp--overlay-description">{{desc}}</div>\r\n    <div class="dp--overlay-button">\r\n        <button class="db--overlay-submit" onclick="window.DPCookieConsent.forceAccept(this)" data-cookieconsent="{{type}}" {{style}}>\r\n            {{btn}}\r\n        </button>\r\n    </div>\r\n</div>\r\n',wrap:'<div aria-describedby="cookieconsent:desc" aria-label="cookieconsent" aria-live="polite" class="cc-window {{classes}}" id="cookieconsent:window" role="dialog"></div>',elements:{"allow-all":'<button class="cc-btn cc-allow-all cc-w-100" tabindex="2">\r\n    {{allow-all}}\r\n</button>\r\n',allow:'<button class="cc-btn cc-allow" tabindex="2">\r\n    {{allow}}\r\n</button>\r\n',dismiss:'<button class="cc-btn cc-dismiss" tabindex="2">\r\n    {{dismiss}}\r\n</button>\r\n',deny:'<button class="cc-btn cc-deny" tabindex="2">\r\n    {{deny}}\r\n</button>\r\n',selection:'<div class="dp--cookie-check">\r\n    <label for="dp--cookie-require">\r\n        <input type="checkbox" id="dp--cookie-require" class="dp--check-box" checked="checked" disabled="disabled" tabindex="-1" />\r\n        {{dpRequire}}\r\n    </label>\r\n    <label for="dp--cookie-statistics">\r\n        <input type="checkbox" id="dp--cookie-statistics" class="dp--check-box" {{checked.statistics}} value="" tabindex="1" />\r\n        {{dpStatistik}}\r\n    </label>\r\n    <label for="dp--cookie-marketing">\r\n        <input type="checkbox" id="dp--cookie-marketing" class="dp--check-box" {{checked.marketing}} value="" tabindex="1" />\r\n        {{dpMarketing}}\r\n    </label>\r\n</div>\r\n',description:'{{message}}\r\n\r\n<a class="cc-link"\r\n   role=button\r\n   tabindex="1"\r\n   href="{{href}}"\r\n   rel="noopener noreferrer nofollow"\r\n   target="{{target}}"\r\n>\r\n    {{link}}\r\n</a>\r\n'}};function c(){}return c.prototype.replaceContent=function(t){var o=this.options,n=["cc-"+o.position,"cc-type-"+o.type,"cc-theme-"+o.theme,"cc-hide"];t=t.replace("{{classes}}",n.join(" "));for(var i=0,c=Object.entries(o.elements);i<c.length;i++){var s=e(c[i],2),r=s[0],a=s[1];t=t.replace("{{"+r+"}}",a)}for(var l=0,p=Object.entries(o.content);l<p.length;l++){var d=e(p[l],2),u=d[0],h=d[1];t=t.replace("{{"+u+"}}",h)}return t},c.prototype.templateOverwrites=function(){var e=t.utils.getElementsByTag("script","data-dp-cookieRevoke");e.length>0&&(this.options.revokeBtn=e[0].innerHTML);var o=t.utils.getElementsByTag("script","data-dp-cookieDesc");o.length>0&&(this.options.elements.description=o[0].innerHTML);var n=t.utils.getElementsByTag("script","data-dp-cookieSelect");n.length>0&&(this.options.elements.selection=n[0].innerHTML)},c.prototype.initialise=function(e){i.deepExtend(this.options={},n),"object"===o(e.checkboxes)&&(e.checkboxes=i.reformatCheckboxOptions(e.checkboxes)),"object"===o(e)&&i.deepExtend(this.options,e);var c=this.options.onInitialise.bind(this);this.templateOverwrites(),this.options.revokable&&(this.revokeBtn=t.utils.appendElement.call(this,this.options.revokeBtn),t.utils.applyStyle.call(this,this.revokeBtn,"palette","popup")),this.window=t.utils.appendElement.call(this,this.options.wrap),t.utils.applyStyle.call(this,this.window,"palette","popup"),this.addCompilance(this.window),c(this),this.bindBtns(),this.presetCheckboxes()},c.prototype.presetCheckboxes=function(){var e=this,o=t.utils.getCookie(this.options.cookie.name);void 0!==o&&i.deepExtend(this.options.checkboxes,o.checkboxes);var n=this.compilance.querySelectorAll("input");n.length>0&&n.forEach((function(t){var o=t.id;o=o.replace("dp--cookie-",""),e.options.checkboxes.map((function(e,n){e.name==o&&(t.checked=e.checked)}))}))},c.prototype.addCompilance=function(e){var o=this.options.compilance["opt-in"];void 0!==this.options.compilance[this.options.type]&&(o=this.options.compilance[this.options.type]),this.compilance=t.utils.appendElement.call(this,o,e),this.allowAllBtn=this.compilance.getElementsByClassName("cc-allow-all"),this.allowBtn=this.compilance.getElementsByClassName("cc-allow"),this.denyBtn=this.compilance.getElementsByClassName("cc-deny"),this.dismissBtn=this.compilance.getElementsByClassName("cc-dismiss"),this.allowAllBtn.length>0?t.utils.applyStyle.call(this,this.allowAllBtn[0],"palette","button"):this.allowBtn.length>0&&t.utils.applyStyle.call(this,this.allowBtn[0],"palette","button")},c.prototype.bindBtns=function(){var e=this;this.allowAllBtn.length>0&&(this.allowAllBtn[0].onclick=function(){return e.allowAll.call(e)}),this.allowBtn.length>0&&(this.allowBtn[0].onclick=function(){return e.allow.call(e)}),this.dismissBtn.length>0&&(this.dismissBtn[0].onclick=function(){return e.allow.call(e)}),this.denyBtn.length>0&&(this.denyBtn[0].onclick=function(){return e.denyAll.call(e)}),this.revokeBtn&&(this.revokeBtn.onclick=function(){return e.revoke.call(e)})},c.prototype.allowAll=function(){var e=this,o=this.compilance.querySelectorAll("input");o.length>0&&o.forEach((function(t){var o=t.id;o=o.replace("dp--cookie-",""),e.options.checkboxes.map((function(e,n){e.name==o&&(t.checked=!0)}))})),t.utils.fireEvent("dp--cookie-accept"),this.save()},c.prototype.denyAll=function(){var e=this,o=this.compilance.querySelectorAll("input");o.length>0&&o.forEach((function(t){var o=t.id;o=o.replace("dp--cookie-",""),e.options.checkboxes.map((function(e,n){e.name==o&&(t.checked=!1)}))})),t.utils.fireEvent("dp--cookie-deny"),this.save()},c.prototype.allow=function(){t.utils.fireEvent("dp--cookie-accept"),this.save()},c.prototype.saveCheckboxes=function(e,t){var o=this;this.options.checkboxes.map((function(n,i){n.name==e&&(o.options.checkboxes[i].checked=t)}))},c.prototype.save=function(){var e=this,t=this.compilance.querySelectorAll("input");t.length>0&&t.forEach((function(t){var o=t.id;o=o.replace("dp--cookie-",""),e.saveCheckboxes(o,t.checked)})),this.close()},c.prototype.hasChanged=function(){var e=this,t=!1;return void 0!==this.originalCookie&&void 0!==this.originalCookie.checkboxes&&(this.originalCookie.checkboxes.map((function(o,n){var i=e.options.checkboxes[n];!0===o.checked&&(i&&0!=i.checked||(t=!0,e.options.onStatusChange.bind(e)(i,o)))})),t)},c.prototype.hasConsent=function(){var e=t.utils.getCookie(this.options.cookie.name);return void 0!==e&&"open"!=e.status},c.prototype.saveCookie=function(e){var o=t.utils.prepareCookie(e,this.options.cookie.name);(o.exists||"open"!=o.config.status)&&(t.utils.setCookie(this.options.cookie.name,o.config,this.options.cookie.expiryDays,this.options.cookie.domain,this.options.cookie.path,this.options.cookie.secure),this.hasConsent()&&this.hasChanged()&&this.options.reloadOnRevoke&&location.reload())},c.prototype.revoke=function(){this.options.onRevokeChoice.bind(this)(this),t.utils.fireEvent("dp--cookie-revoke"),this.open()},c.prototype.open=function(){this.revokeBtn&&this.revokeBtn.classList.add("cc-hide"),this.window.classList.remove("cc-hide"),this.originalCookie=t.utils.getCookie(this.options.cookie.name),this.options.onPopupOpen.bind(this)(this),this.saveCookie({status:"open"}),document.querySelector("body").classList.add("dp--cookie-consent")},c.prototype.close=function(){this.window.classList.add("cc-hide"),this.revokeBtn&&this.revokeBtn.classList.remove("cc-hide"),this.options.onPopupClose.bind(this)(this),this.saveCookie({status:"approved",checkboxes:this.options.checkboxes}),document.querySelector("body").classList.remove("dp--cookie-consent"),this.execute()},c.prototype.execute=function(){t.Handler.execute(this.options.checkboxes),t.Overlay.execute(this.options.checkboxes)},new c}();t.popup=c;var s=function(){function e(){}return e.prototype.overlays=function(){t.popup.options.overlay.notice&&(this.templateOverwrites(),this.overlaysView("iframe"),this.overlaysView("dp-content"))},e.prototype.templateOverwrites=function(){var e=t.utils.getElementsByTag("script","data-dp-cookieIframe");e.length>0&&(t.popup.options.overlayLayout=e[0].innerHTML)},e.prototype.overlaysView=function(e){var o=t.utils.getElementsByTag(e);0!=o.length&&o.forEach((function(e){var o=e.getAttribute("data-cookieconsent-notice")||t.popup.options.content.media.notice,n=e.getAttribute("data-cookieconsent-description")||t.popup.options.content.media.desc,i=e.getAttribute("data-cookieconsent-btn")||t.popup.options.content.media.btn,c=e.getAttribute("data-cookieconsent");if(!e.hasAttribute("data-cookieconsent-overlay-loaded")){e.setAttribute("data-cookieconsent-overlay-loaded","loaded");var s=document.createElement("div");s.classList.add("dp--overlay"),t.utils.applyStyle.call(t.popup,s,"overlay","box");var r=t.popup.options.overlayLayout.replace("{{notice}}",o).replace("{{desc}}",n).replace("{{type}}",c).replace("{{btn}}",i),a=(r=t.utils.appendElement.call(t.popup,r,s)).getElementsByClassName("db--overlay-submit");a.length>0&&t.utils.applyStyle.call(t.popup,a[0],"overlay","btn"),e.parentNode.insertBefore(s,e.nextSibling)}}))},e.prototype.execute=function(e){this.executeIframe(e),this.executeContent(e)},e.prototype.ajax=function(e,t,o,n){var i=new XMLHttpRequest;i.open(e,t),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("Content-type","text/html"),i.onload=function(){i.status<200||i.status>=300?n(i):o(i)},i.onerror=function(){n(i)},i.send()},e.prototype.executeContent=function(e){var o=this,n=t.utils.getElementsByTag("dp-content");n.length>0&&n.forEach((function(n){if(t.Handler.typeAllowed(n,e)){n.classList.add("dp--loaded"),n.setAttribute("data-cookieconsent-loaded",n.getAttribute("data-cookieconsent")),n.removeAttribute("data-cookieconsent");var i=n.getAttribute("data-src");i&&i.length>0?o.ajax("GET",i,(function(e){n.innerHTML=e.response,t.utils.fireEvent("dp--cookie-content",n)}),(function(e){})):t.utils.fireEvent("dp--cookie-content",n)}}))},e.prototype.executeIframe=function(e){var o=t.utils.getElementsByTag("iframe");o.length>0&&o.forEach((function(o){if(t.Handler.typeAllowed(o,e)){var n=o.cloneNode(!0);n.getAttribute("data-src")&&(n.src=n.getAttribute("data-src")),o.parentNode.replaceChild(n,o),n.classList.add("dp--loaded"),n.setAttribute("data-cookieconsent-loaded",n.getAttribute("data-cookieconsent")),n.removeAttribute("data-cookieconsent"),t.utils.fireEvent("dp--cookie-iframe",n)}}))},new e}();t.Overlay=s;var r=function(){function e(){}return e.prototype.execute=function(e){var o=this,n=t.utils.getElementsByTag("script");n.length>0&&n.forEach((function(n){if(o.typeAllowed(n,e)){var i=n.innerHTML;i&&i.length&&(i=i.trim()),i&&i.length?(eval.call(o,i),t.utils.fireEvent("dp--cookie-fire",n)):n.getAttribute("data-src")?o.asyncJS(n.getAttribute("data-src"),(function(e){t.utils.fireEvent("dp--cookie-fire",n)})):n.src&&o.asyncJS(n.src,(function(e){t.utils.fireEvent("dp--cookie-fire",n)})),n.setAttribute("data-cookieconsent-loaded",n.getAttribute("data-cookieconsent")),n.removeAttribute("data-cookieconsent")}}))},e.prototype.asyncLoad=function(e,t,o){var n=document,i=n.createElement(t),c=n.getElementsByTagName(t)[0];switch(t){case"script":i.src=e,i.setAttribute("defer","");break;case"link":i.rel="stylesheet",i.type="text/css",i.setAttribute("defer",""),i.href=e}o&&i.addEventListener("load",(function(e){o(null,e)}),!1),c.parentNode.insertBefore(i,c)},e.prototype.asyncJS=function(e,t){this.asyncLoad(e,"script",t)},e.prototype.typeAllowed=function(e,t){var o=e.getAttribute("data-cookieconsent");return-1!==t.map((function(e){if(e.name==o&&!0===e.checked)return!0})).indexOf(!0)},new e}();t.Handler=r,t.initialise=function(e,o){if(o||(o=function(){}),t.popup.initialise(e),t.Overlay.overlays(),o(t.popup),t.utils.fireEvent("dp--cookie-init"),t.popup.hasConsent()||i.detectRobot(navigator.userAgent))return t.popup.close(),void t.utils.fireEvent("dp--cookie-accept-init");t.popup.open()},t.forceAccept=function(e){var o=e.getAttribute("data-cookieconsent"),n=t.popup.compilance.querySelectorAll("input");n.length>0&&(n.forEach((function(e){var n=e.id;n=n.replace("dp--cookie-",""),t.popup.hasConsent()||(e.checked=!1),n==o&&(e.checked=!0)})),t.utils.fireEvent("dp--cookie-accept")),t.popup.save()},t.forceDeny=function(e){var o=e.getAttribute("data-cookieconsent"),n=t.popup.compilance.querySelectorAll("input");n.length>0&&n.forEach((function(e){var n=e.id;n=n.replace("dp--cookie-",""),t.popup.hasConsent()||(e.checked=!1),n==o&&(e.checked=!1)})),t.popup.save()},t.hasInitialised=!0,window.DPCookieConsent=t,window.addEventListener("load",(function(){window.DPCookieConsent.initialise(window.cookieconsent_options||{}),window.DPCookieConsent.loaded=!0}))}}(window.DPCookieConsent||{})}}}))}();
