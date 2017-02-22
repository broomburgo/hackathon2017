/*! hackathon2015 - v1.0.0 - 2017-02-22
* Copyright (c) 2017 Facile.it S.p.A */
function initialize(){var a=[{stylers:[{hue:"#ff6600"},{saturation:10}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]}],b=new google.maps.StyledMapType(a,{name:"Styled Map"}),c={zoom:17,center:base,disableDefaultUI:!0,scrollwheel:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}};map=new google.maps.Map(document.getElementById("map-canvas"),c),marker=new google.maps.Marker({position:base,map:map,animation:google.maps.Animation.DROP}),google.maps.event.addListener(marker,"click",toggleBounce),map.mapTypes.set("map_style",b),map.setMapTypeId("map_style")}function toggleBounce(){null!=marker.getAnimation()?marker.setAnimation(null):marker.setAnimation(google.maps.Animation.BOUNCE)}!function(a,b,c,d){function e(b,c){var f=this;"object"==typeof c&&(delete c.refresh,delete c.render,a.extend(this,c)),this.$element=a(b),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var g=(this.position+"").toLowerCase().match(/\S+/g)||[];if(g.length<1&&g.push("center"),1==g.length&&g.push(g[0]),("top"==g[0]||"bottom"==g[0]||"left"==g[1]||"right"==g[1])&&(g=[g[1],g[0]]),this.positionX!=d&&(g[0]=this.positionX.toLowerCase()),this.positionY!=d&&(g[1]=this.positionY.toLowerCase()),f.positionX=g[0],f.positionY=g[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=a("<div />").prependTo("body");var h=this.$element.find(">.parallax-slider"),i=!1;0==h.length?this.$slider=a("<img />").prependTo(this.$mirror):(this.$slider=h.prependTo(this.$mirror),i=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){f.naturalHeight&&f.naturalWidth||(f.naturalHeight=this.naturalHeight||this.height||1,f.naturalWidth=this.naturalWidth||this.width||1),f.aspectRatio=f.naturalWidth/f.naturalHeight,e.isSetup||e.setup(),e.sliders.push(f),e.isFresh=!1,e.requestRender()}),i||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||h.length>0)&&this.$slider.trigger("load")}function f(d){return this.each(function(){var f=a(this),g="object"==typeof d&&d;this==b||this==c||f.is("body")?e.configure(g):f.data("px.parallax")?"object"==typeof d&&a.extend(f.data("px.parallax"),g):(g=a.extend({},f.data(),g),f.data("px.parallax",new e(this,g))),"string"==typeof d&&("destroy"==d?e.destroy(this):e[d]())})}!function(){for(var a=0,c=["ms","moz","webkit","o"],d=0;d<c.length&&!b.requestAnimationFrame;++d)b.requestAnimationFrame=b[c[d]+"RequestAnimationFrame"],b.cancelAnimationFrame=b[c[d]+"CancelAnimationFrame"]||b[c[d]+"CancelRequestAnimationFrame"];b.requestAnimationFrame||(b.requestAnimationFrame=function(c){var d=(new Date).getTime(),e=Math.max(0,16-(d-a)),f=b.setTimeout(function(){c(d+e)},e);return a=d+e,f}),b.cancelAnimationFrame||(b.cancelAnimationFrame=function(a){clearTimeout(a)})}(),a.extend(e.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var a=e.winHeight,b=e.docHeight,c=Math.min(this.boxOffsetTop,b-a),d=Math.max(this.boxOffsetTop+this.boxHeight-a,0),f=this.boxHeight+(c-d)*(1-this.speed)|0,g=(this.boxOffsetTop-c)*(1-this.speed)|0;if(f*this.aspectRatio>=this.boxWidth){this.imageWidth=f*this.aspectRatio|0,this.imageHeight=f,this.offsetBaseTop=g;var h=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-h:isNaN(this.positionX)?-h/2|0:Math.max(this.positionX,-h)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var h=this.imageHeight-f;this.offsetBaseTop="top"==this.positionY?g:"bottom"==this.positionY?g-h:isNaN(this.positionY)?g-h/2|0:g+Math.max(this.positionY,-h)}},render:function(){var a=e.scrollTop,b=e.scrollLeft,c=this.overScrollFix?e.overScroll:0,d=a+e.winHeight;this.boxOffsetBottom>a&&this.boxOffsetTop<=d?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-a,this.mirrorLeft=this.boxOffsetLeft-b,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-c,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),a.extend(e,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var d=a(c),f=a(b),g=function(){e.winHeight=f.height(),e.winWidth=f.width(),e.docHeight=d.height(),e.docWidth=d.width()},h=function(){var a=f.scrollTop(),b=e.docHeight-e.winHeight,c=e.docWidth-e.winWidth;e.scrollTop=Math.max(0,Math.min(b,a)),e.scrollLeft=Math.max(0,Math.min(c,f.scrollLeft())),e.overScroll=Math.max(a-b,Math.min(a,0))};f.on("resize.px.parallax load.px.parallax",function(){g(),e.isFresh=!1,e.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){h(),e.requestRender()}),g(),h(),this.isReady=!0}},configure:function(b){"object"==typeof b&&(delete b.refresh,delete b.render,a.extend(this.prototype,b))},refresh:function(){a.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),a.each(this.sliders,function(){this.render()})},requestRender:function(){var a=this;this.isBusy||(this.isBusy=!0,b.requestAnimationFrame(function(){a.render(),a.isBusy=!1}))},destroy:function(c){var d,f=a(c).data("px.parallax");for(f.$mirror.remove(),d=0;d<this.sliders.length;d+=1)this.sliders[d]==f&&this.sliders.splice(d,1);a(c).data("px.parallax",!1),0===this.sliders.length&&(a(b).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,e.isSetup=!1)}});var g=a.fn.parallax;a.fn.parallax=f,a.fn.parallax.Constructor=e,a.fn.parallax.noConflict=function(){return a.fn.parallax=g,this},a(c).on("ready.px.parallax.data-api",function(){a('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),$(document).ready(function(){function a(){requestAnimationFrame(a)}$("#text_toggle").click(function(a){return a.preventDefault(),$(".text_hide").slideToggle(),$(this).html("Nascondi"==$(this).text()?"Leggi tutto »":"Nascondi"),!0}),$("#content_tab li").hide(),$("#tabs li:first").attr("id","current"),$("#content_tab li:first").fadeIn(),$("#tabs li a").click(function(a){a.preventDefault(),"current"!=$(this).attr("class")&&($("#content_tab li").hide(),$("#tabs li").attr("class",""),$(this).parent().attr("class","current"),$($(this).attr("href")).fadeIn())}),$("nav a[href^=#]:not([href=#]), .nav[href^=#]:not([href=#])").click(function(a){if(a.preventDefault(),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=$(this.hash);if(b=b.length?b:$("[name="+this.hash.slice(1)+"]"),b.length)return $(".lines-button").hasClass("close")?($(".lines-button").removeClass("close"),$("nav").removeClass("open"),$("html,body").animate({scrollTop:b.offset().top},1e3),!1):($("html,body").animate({scrollTop:b.offset().top-80},1e3),!1)}}),$(".mobile-menu, nav a").click(function(a){$("nav, .mobile-menu").toggleClass("open")});var b=500;$(window).scroll(function(){$(window).scrollTop()>b?$(".floating-button").removeClass("hide"):$(".floating-button").addClass("hide"),window.requestAnimationFrame(a)}),$(".bg").parallax({imageSrc:"images/bg2_.jpg"})});var base=new google.maps.LatLng(45.497536,9.221286),marker,map;google.maps.event.addDomListener(window,"load",initialize);