// TV
jQuery.extend(jQuery.easing,{easeOutBack2:function(b,a,c,e,d){b=(a/=d)*a;d=b*a;return c+e*(5*d*b+-15*b*b+19*d+-14*b+6*a)},easeOutCubic:function(b,a,c,e,d){return e*((a=a/d-1)*a*a+1)+c},easeInCubic:function(b,a,c,e,d){return e*(a/=d)*a*a+c}});
function ws_tv(b,a,c){var e=jQuery,d=e(this),l=b.noCanvas||!document.createElement("canvas").getContext,h=b.width,f=b.height,m=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_tv").appendTo(c);if(!l)var n=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(m),g=n.get(0).getContext("2d");this.go=function(k,q){if(l)c.find(".ws_list").css("transform","translate3d(0,0,0)").stop(!0).animate({left:k?
-k+"00%":/Safari/.test(navigator.userAgent)?"0%":0},b.duration,"easeInOutExpo",function(){d.trigger("effectEnd")});else{h=c.width();f=c.height();n.attr({width:h,height:f});var p=e(a.get(k)).clone().css({opacity:0,zIndex:2,maxHeight:"none"}).appendTo(m);wowAnimate(function(a){g.clearRect(0,0,h,f);var b=h;.95<=a&&(b*=1-(a-.95)/(1-.95));g.fillStyle="#111";g.fillRect(0,0,h,f);var c=g.createLinearGradient(0,a*f/2,0,f-a*f/2);c.addColorStop(0,"#111");c.addColorStop(0+.5*a,"#fff");c.addColorStop(.5,"#fff");
c.addColorStop(1+-.5*a,"#fff");c.addColorStop(1,"#111");g.fillStyle=c;g.fillRect((h-b)/2,a*f/2,b,f*(1-a))},0,1,.3*b.duration,"easeOutCubic",function(){wowAnimate(p,{scale:[.9,0],opacity:.5},{scale:[1,1],opacity:1},.3*b.duration,.4*b.duration,"easeOutBack2",function(){c.find(".ws_list").css({left:k?-k+"00%":/Safari/.test(navigator.userAgent)?"0%":0});d.trigger("effectEnd");setTimeout(function(){g.fillStyle="#111";g.clearRect(0,0,h,f);p.remove()},1)})})}}};
// TV
jQuery.extend(jQuery.easing,{easeOutBack2:function(b,a,c,e,d){b=(a/=d)*a;d=b*a;return c+e*(5*d*b+-15*b*b+19*d+-14*b+6*a)},easeOutCubic:function(b,a,c,e,d){return e*((a=a/d-1)*a*a+1)+c},easeInCubic:function(b,a,c,e,d){return e*(a/=d)*a*a+c}});
function ws_tv(b,a,c){var e=jQuery,d=e(this),l=b.noCanvas||!document.createElement("canvas").getContext,h=b.width,f=b.height,m=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_tv").appendTo(c);if(!l)var n=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(m),g=n.get(0).getContext("2d");this.go=function(k,q){if(l)c.find(".ws_list").css("transform","translate3d(0,0,0)").stop(!0).animate({left:k?
-k+"00%":/Safari/.test(navigator.userAgent)?"0%":0},b.duration,"easeInOutExpo",function(){d.trigger("effectEnd")});else{h=c.width();f=c.height();n.attr({width:h,height:f});var p=e(a.get(k)).clone().css({opacity:0,zIndex:2,maxHeight:"none"}).appendTo(m);wowAnimate(function(a){g.clearRect(0,0,h,f);var b=h;.95<=a&&(b*=1-(a-.95)/(1-.95));g.fillStyle="#111";g.fillRect(0,0,h,f);var c=g.createLinearGradient(0,a*f/2,0,f-a*f/2);c.addColorStop(0,"#111");c.addColorStop(0+.5*a,"#fff");c.addColorStop(.5,"#fff");
c.addColorStop(1+-.5*a,"#fff");c.addColorStop(1,"#111");g.fillStyle=c;g.fillRect((h-b)/2,a*f/2,b,f*(1-a))},0,1,.3*b.duration,"easeOutCubic",function(){wowAnimate(p,{scale:[.9,0],opacity:.5},{scale:[1,1],opacity:1},.3*b.duration,.4*b.duration,"easeOutBack2",function(){c.find(".ws_list").css({left:k?-k+"00%":/Safari/.test(navigator.userAgent)?"0%":0});d.trigger("effectEnd");setTimeout(function(){g.fillStyle="#111";g.clearRect(0,0,h,f);p.remove()},1)})})}}};
