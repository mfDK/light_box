$(document).ready(function(){
	$(".light-link").on('click',function(){
		$(".outer-lightbox").show();
		$(".outer-lightbox").on('click',function(){
			$(this).hide();
		});
	});
});