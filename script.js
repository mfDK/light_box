$(document).ready(function(){
	$(".light-link").on('click',function(e){
		e.preventDefault();
		var $image = $("#chosen-image");
		$(".outer-lightbox").show();
		$image.attr("src",$(this).attr("src"));
		var imageCap = $image.attr("src");
		if(imageCap == "hulk.jpg"){
			$("#caption").text("The New Hulk is a Korean-American Dude");
		} else if(imageCap == "bengal.jpg"){
			$("#caption").text("Bengal Cats are Beautiful");
		}
		$(".outer-lightbox").on('click',function(){
			$(this).hide();
		});
	});
});