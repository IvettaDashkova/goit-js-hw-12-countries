(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OSpC:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("RtS0"),t("lmye"),t("D/wG"),t("JBxO"),t("FdtR"),t("3dw1");var a=t("jffb"),o=t.n(a),c=t("QJ3N");t("bzha"),t("FkYI"),t("OSpC");c.defaults.delay=1e3;var i={input:document.querySelector("#searchCountry"),container:document.querySelector(".containerCountry"),country:""};i.input.addEventListener("input",o()((function(){i.container.innerHTML="",i.country=i.input.value,fetch("https://restcountries.eu/rest/v2/name/"+i.country).then((function(e){return e.json()})).then((function(e){1===e.length&&(!function(e){e.map((function(e){var n='<h2 data-description="name">'+e.name+'</h2><div class="content"><div class="textcontent"><p data-description="capital"><span>Capital: </span>'+e.capital+'</p><p data-description="population"><span>Population: </span>'+e.population+'</p><ul data-description="languages"><span>Languages: </span></ul></div> <img src="'+e.flag+'"></div>';i.container.insertAdjacentHTML("afterbegin",n);e.languages.forEach((function(e){var n=document.createElement("li");n.textContent=e.name,i.container.querySelector('[data-description ="languages"]').append(n)}))}))}(e),Object(c.success)({text:" Your query is correct!"})),e.length>2&&e.length<=10&&(!function(e){var n=document.createElement("ul");e.map((function(e){var t=document.createElement("li");t.textContent=e.name,n.append(t)})),i.container.append(n)}(e),Object(c.info)({text:" For more detailed information please specify the query!"})),e.length>10&&Object(c.error)({text:"Too many matches found. Please enter a more specific query!"})}))}),500))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.b7e5d141cb87221126fe.js.map