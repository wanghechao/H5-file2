window.addEventListener("load" , function() {
	let shuzi = document.querySelector(".shuzi")
	let num = 0;
	timer = setInterval(function() {
		num++;
		shuzi.innerHTML = "loading..." + num + "%";
		if(num >= 100) {
			clearInterval(timer);
			location.replace("two.html")
		}
		
	} , 50)
	
})