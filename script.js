$(document).ready(function(){
	$(".light-link").on('click',function(e){
		e.preventDefault();
		var $image = $("#chosen-image");
		$(".outer-lightbox").show();
		$image.attr("src",$(this).attr("src"));
		$(".outer-lightbox").on('click',function(){
			$(this).hide();
		});
	});
});