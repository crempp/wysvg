;(function(){
	var wysvg = Object.create(SVGElement.prototype);
	
	wysvg.selectText = function(e){
		var text = e.target;
		text.classList.toggle('selected', true);
		var ta = document.createElement('textArea');
		ta.value = text.innerHTML;
		var s = window.getComputedStyle(text);
		//for (var rule in s){
		//	ta.style[rule] = s[rule];
		//}
		var styles = ['font'];
		for (var rule  = 0; rule < styles.length; ++rule){
			ta.style[styles[rule]] = s[styles[rule]];
		}
		ta.style.color = "transparent";
		ta.style.position = "absolute";
		ta.style.top = "50px";
		ta.style.left = "75px";
		ta.style.border = "none";
		ta.style.zIndex = -1;
		ta.addEventListener('input', function(e){
			text.innerHTML = this.value;
		});
		ta.addEventListener('focusout', function(){
			document.body.removeChild(ta);
			text.classList.toggle('selected', false);
		});
		document.body.appendChild(ta);
		ta.focus();
	}
	
	wysvg.clickE = function(e){
		switch (e.target.nodeName.toLowerCase()){
			case ('text'):
				wysvg.selectText(e);
				break;
			default:
				alert("you clicked on the not-text!");
				break;
		}
	};
	
	wysvg.createdCallback = function(){
		var self = this;
		this.addEventListener('click', this.clickE);
	};

	document.registerElement('wy-svg', {
		prototype: wysvg,
		extends: 'svg'
	});
})();

