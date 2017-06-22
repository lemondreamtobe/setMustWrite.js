(function($, window, document,undefined){	
	var initSet = {
		color:            'red',  
		'margin-left':    '28px',
		'vertical-align': 'top',
		'line-height':    '37px',
		display:          'inline-block'
	};
	function blurCheck(ele) {
		var val = ele.val();
						
		if (!!(val.replace(/(^\s*)|(\s*$)/g, ""))) {
			var prev = ele.parent().find("span");
			prev.css("visibility","hidden");
		} else {
			var prev = ele.parent().find("span");
			prev.css("visibility","visible");
		};
	};
	$.fn.setMustWrite = function(opt) {
		var setting = $.extend({}, initSet, opt);
		var element = $(this);
		
		if (/setMustWrite/g.test(element.attr('class'))) {
			var spanHtml = $('<span>*</span>');
			spanHtml.css({
				'color':           setting.color,
				'margin-left':     setting['margin-left'],
				'vertical-align':  setting['vertical-align'],
				'line-height':     setting['line-height'],
				'display':         setting.display
			});
			var parent = element.parent();
			parent.prepend(spanHtml);
			
			if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") { 
				element.blur(function(){
					blurCheck(element)
				});
			} else {
				element.on("input", function(){
					blurCheck(element)
				});
			};
			
			if ($.checkMustWrite) {
				return;
			} else {
				$.checkMustWrite = function checkMustWrite() {
					var elementArrays = $('.setMustWrite');
					var eleStorge = [];
					for (var i = 0; i < elementArrays.length; i++) {
						var ele = $(elementArrays[i]);
						var val = ele.val();
						
						if(!!(val.replace(/(^\s*)|(\s*$)/g, ""))) {
							var prev = ele.parent().find("span");
							prev.css("visibility", "hidden");
						} else {
							var prev = ele.parent().find("span");
							prev.css("visibility", "visible");
							var alertInfo = ele.prev().text().replace(/\：/g, '');
							alert(alertInfo + '不能为空');
							eleStorge.push(ele[0]);
						};
					};	
					
					if (eleStorge.length == 0) {
						return;
					} else {
						eleStorge[0].focus();
					};
				};
			};
		} else {
			return;
		};
	};
})(jQuery, window, document);
