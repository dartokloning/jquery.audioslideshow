(function(a){a.fn.audioSlideshow=function(b){var c={jPlayerPath:"/lib/swf",suppliedFileType:"mp3",playSelector:".audio-play",pauseSelector:".audio-pause",currentTimeSelector:".play-time",durationSelector:".total-time",playheadSelector:".playhead",timelineSelector:".timeline"};if(b){jQuery.extend(c,b)}return this.each(function(){function q(b){if(b!=o){if(d.get(o)){a(d.get(o)).fadeOut()}a(d.get(b)).fadeIn();o=b}}var b=a(this);var d=b.find(".audio-slides").children();var e=b.find(c.currentTimeSelector);var f=b.find(c.durationSelector);var g=b.find(c.playheadSelector);var h=b.find(c.timelineSelector);var i=b.find(c.playSelector);var j=b.find(c.pauseSelector);var k=d.length;var l=new Array;var m=parseInt(b.attr("data-audio-duration"));var n=false;var o=-1;j.hide();d.each(function(c,d){var e=a(d);e.hide();var f=parseInt(e.attr("data-slide-time"));var g=e.attr("data-thumbnail");if(c>0){l.push(f);var i='<span><img src="'+g+'"></span>';var j=a('<a href="javascript:;" class="marker" data-time="'+f+'">'+i+"</a>");var k=f/m*b.width();j.css("left",k);j.click(function(b){p.jPlayer("play",parseInt(a(this).attr("data-time"))+.5)});h.append(j)}});var p=a("<div></div>");b.append(p);p.jPlayer({ready:function(){a.jPlayer.timeFormat.padMin=false;a(this).jPlayer("setMedia",{mp3:b.attr("data-audio")})},swfPath:c.jPlayerPath,supplied:c.suppliedFileType,preload:"auto",cssSelectorAncestor:""});p.bind(a.jPlayer.event.timeupdate,function(b){var c=b.jPlayer.status.currentTime;m=b.jPlayer.status.duration;var d=c/m*100+"%";e.text(a.jPlayer.convertTime(c));f.text(a.jPlayer.convertTime(m));g.width(d);if(k){var h=0;for(var i=0;i<k;i++){if(l[i]<c){h=i+1}}q(h)}});p.bind(a.jPlayer.event.play,function(a){n=true});d.click(function(a){p.jPlayer("play")});i.click(function(a){i.hide();j.show();p.jPlayer("play")});j.click(function(a){j.hide();i.show();p.jPlayer("pause")});h.click(function(c){var d=c.pageX-a(this).offset().left;var e=d/b.width()*m;p.jPlayer("play",e)});q(0)})}})(jQuery)