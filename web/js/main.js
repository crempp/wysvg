// to jquery or not to jquery.  That is the question.
//
// I say yes, it's sorta standard and still makes shit easier to write.
// Especially if we ever want some form of IE support.
//    -- chad

var ready = function(){
	var wysvgs = document.querySelectorAll('wy-svg');
	for (var i = 0; i < wysvgs.length; ++i){
		var item = wysvgs[i]; 
		//wysvg(item);
		//item.editor();
	}
};

document.addEventListener('readystatechange', function(e){
	if (e.target.readyState == 'complete'){
		ready();
	}	
});


