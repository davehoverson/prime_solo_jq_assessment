$(document).ready(function(){
	var clickCount = 0;
	$(".generate").on("click", function(){
		clickCount++;
		var $div = $("<div><p>Line #" + clickCount + "</p><br/><button class = \"color\">Change Color</button><button class = \"remove\">REMOVE</button></div>");
		$(".initial").append($div);

		$(".remove").on("click", function(){
			$(this).closest("div").remove();
			// clickCount--; NOT SURE HOW TO DECREASE THE CLICKCOUNT VAR
			
		})

		// if (clickCount < 0){
		// 		clickCount == 0;
		// 	}; SAME HERE, NOT SURE HOW TO CHANGE THE CLICKCOUNT VAR
			
		$(".color").on("click", function(){
			$(this).toggleClass("red");
		})

	});
});
		

		
