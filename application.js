$(document).ready(function(){
	//alert("in js file");
	$('#basecamp').mouseenter(function(){
		$('#title').hide();
		$('#basecampTitle').show();

	});

	$('#basecamp').mouseleave(function(){
		$('#title').show();
		$('#basecampTitle').hide();
	});

	$('#highrise').mouseenter(function(){
		$('#title').hide();
		$('#highriseTitle').show();

	});

	$('#highrise').mouseleave(function(){
		$('#title').show();
		$('#highriseTitle').hide();
	});

	$('#campfire').mouseenter(function(){
		$('#title').hide();
		$('#campfireTitle').show();

	});

	$('#campfire').mouseleave(function(){
		$('#title').show();
		$('#campfireTitle').hide();
	});

	$('#basecamp').mouseenter(function(){
		$('#arrowBase').show();
	})

	$('#basecamp').mouseleave(function(){
		$('#arrowBase').hide();
	})

	$('#highrise').mouseenter(function(){
		$('#arrowHigh').show();
	})

	$('#highrise').mouseleave(function(){
		$('#arrowHigh').hide();
	})

	$('#campfire').mouseenter(function(){
		$('#arrowCamp').show();
	})

	$('#campfire').mouseleave(function(){
		$('#arrowCamp').hide();
	})


});

  WebFontConfig = {
    google: { families: [ 'Crimson+Text:400,600:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();


// 1. get hover function working. Write the function, console.log("some text"); 2. create elements and try to hide show. Hover to hide and show elements. Need to be able to grab the right elements, how do you get the element and then hide it. 