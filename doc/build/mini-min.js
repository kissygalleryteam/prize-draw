/*!build time : 2014-10-29 8:52:32 PM*/
KISSY.add(function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a),this.init()}function e(a,b){return parseInt(Math.random()*(b-a+1))}var f,g=b.all,h=[];return a.extend(d,c,{init:function(){this.peopSetCont=g(this.get("peopleSetCont")),this.prizeSetCont=g(this.get("prizeSetCont")),this.numSetCont=g(this.get("peopleNumSetCont")),this.confBtn=g(this.get("configBtn")),this.peopCont=g(this.get("peopleCont")),this.prizeCont=g(this.get("prizeCont")),this.resultCont=g(this.get("resultCont")),this.startBtn=g(this.get("startBtn")),this.endBtn=g(this.get("endBtn")),this.people=[],this.prize=[],this.timeInterval=g(this.get("timeInterval"))[0],this.resetBtn=g(this.get("resetBtn")),this.configCont=g(this.get("configCont")),this.showDrawCont=g(this.get("showDrawCont")),this.bindEvent(),this.initStyle(),this.resetDraw()},initStyle:function(){this.showDrawCont.hide();var a='<style type="text/css">',b=".choosed{-webkit-animation: blink 2s ease 0 infinite;}",c="@-webkit-keyframes blink { 0% {background: #00a651;} 25% {background: #00aeef;} 50% {background: #ffdc7b;} 100% {background: #00a651;}}";a+=b,a+=c,a+="</style>",g(a).appendTo("head")},bindEvent:function(){this.confBtn.length&&this.confBtn.on("click",this._setConfig,this),this.startBtn.length&&this.startBtn.on("click",this.startDraw,this),this.endBtn.length&&this.endBtn.on("click",this.endDraw,this),this.resetBtn.length&&this.resetBtn.on("click",this.resetDraw,this)},_setConfig:function(){var a=this.peopSetCont.val(),b=this.prizeSetCont.val(),c=this.numSetCont.val();localStorage.setItem("people",a),localStorage.setItem("prize",b),localStorage.setItem("peopleNum",c),this.configCont.hide(),this._showPeo(),this._showPrize(),this.showDrawCont.show()},_showPeo:function(){var b=localStorage.getItem("people"),c=[];if(""==a.trim(b))this.people=[];else{b=b.replace(/\uff0c/g,","),this.people=b.split(",");for(var d=0;d<this.people.length;d++)""==a.trim(this.people[d])&&(this.people.splice(d,1),d--)}c.push('<ul id="J_userList">');for(var e=0,f=this.people.length;f>e;e++)c.push('<li id="J_peo'+e+'">'+this.people[e]+"</li>");c.push("</ul>"),this.peopCont&&this.peopCont.html(c.join(""))},_showPrize:function(){var b=localStorage.getItem("prize"),c=[];if(""==a.trim(b))this.prize=[];else{b=b.replace(/\uff0c/g,","),this.prize=b.split(",");for(var d=0;d<this.prize.length;d++)""==a.trim(this.prize[d])&&(this.prize.splice(d,1),d--)}c.push('<ul id="J_prizeList">');for(var e=0,f=this.prize.length;f>e;e++)c.push('<li><input type="radio" name="prize" id="J_prize'+e+'" value="'+this.prize[e]+'"/>'+this.prize[e]+"</li>");c.push("</ul>"),this.prizeCont&&this.prizeCont.html(c.join("")),this.prizeCont.one("input")&&this.prizeCont.one("input").attr("checked",!0)},change:function(b){var c=e(0,b.length-1);a.one("#J_userList")&&a.one("#J_userList").all("li").each(function(d){d.hasClass("choosed")&&d.removeClass("choosed"),a.trim(d.html())==a.trim(b[c])&&d.addClass("choosed")}),localStorage.setItem("luckyOne",b[c])},startDraw:function(){var b=this.people,c=this.change,d=JSON.parse(localStorage.getItem("luckyArr"));if(d)for(var e=0;e<d.length;e++)for(var g=0,h=b.length;h>g;g++)d[e]==a.trim(b[g])&&b.splice(g,1);clearInterval(f),b.length&&(f=setInterval(function(){c(b)},this.timeInterval))},endDraw:function(){clearInterval(f);var a=localStorage.getItem("luckyOne");"null"!=a&&(h.push(a),localStorage.setItem("luckyArr",JSON.stringify(h)),this.showResult(),localStorage.setItem("luckyOne",null))},showResult:function(){var a=localStorage.getItem("luckyOne"),b=this.prizeCont.one(":checked"),c=b&&b.val(),d="";d=c?"<div>\u606d\u559c"+a+"\u83b7\u5f97"+c+"</div>":"<div>\u606d\u559c"+a+"</div>",this.resultCont.append(d)},resetDraw:function(){this.showDrawCont.hide(),this.configCont.show(),f&&clearInterval(f),h=[],localStorage.setItem("people",null),localStorage.setItem("prize",null),localStorage.setItem("luckyOne",null),localStorage.setItem("luckyArr",null),this.resultCont.html("")}},{ATTRS:{configCont:{value:"#J_configCont"},showDrawCont:{value:"#J_showDraw"},peopleSetCont:{value:"#J_candidateInput"},prizeSetCont:{value:"#J_prizeInput"},peopleNumSetCont:{value:"#J_peopleNum"},configBtn:{value:"#J_config"},peopleCont:{value:"#J_candidate"},prizeCont:{value:"#J_prize"},timeInterval:{value:400},resultCont:{value:"#J_result"},startBtn:{value:"#J_start"},endBtn:{value:"#J_end"},resetBtn:{value:"#J_reset"}}}),d},{requires:["node","base"]}),KISSY.add("kg/prize-draw/2.0.0/mini",function(a,b){return b},{requires:["./index"]});