$( function() {
	var state = true;
	$( "#button" ).on( "click", function() {
		if ( state ) {
			$( "#effect" ).animate({
				backgroundColor: "black",
				color: "white",
			}, 1000);
			$("#img").animate({
				height: "220px"
			},500);
			$("#img").animate({
				width: "400px"
			},500);
			$("#block").animate({
				left: "+=70%"
			}, 1000);
		} 
		else {
			$( "#effect" ).animate({
				backgroundColor: "#fafafa",
				color: "black",
			}, 1000 );
			$("#img").animate({
				height: "110px"
			},500);
			$("#img").animate({
				width: "200px"
			},500);
			$("#block").animate({
				left: "-=70%"
			}, 1000);
		}
		state = !state;
	});
});