window.addEventListener("load" , function() {
	function $(name) {
			return document.querySelector(name);
		}
		
		$(".yinyue").onclick = function() {
			if($(".music").paused) {
				$(".music").play();
			}else {
				$(".music").pause();
			}
		}
})