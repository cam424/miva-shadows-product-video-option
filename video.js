// Will need to update this bit to work with live site set up
// Include the following within jsPROD: function(){}


// Video Code Set in PROD page, pulling from custom field code

if (videoCode) {
	var	videoSwitch = $('<li id="' + videoCode + '" class="o-layout__item x-product-layout-images__thumbnail-video"><span class="u-icon-triangle-right"></span></li>');
	$(videoSwitch).appendTo('#thumbnails');

	var videoTrigger = document.getElementById(videoCode),

	// Identifies the Main Frame and generates the iframe for appendation
	mainFrame = document.getElementById('main_frame'),
	mainFrameVideo = document.getElementById('main_frame_video'),
	mainImage = document.getElementById('main_image'),
	videoClearTriggers = $('#thumbnails li img');

	function showVideo(){

		// Checks for variable set after first thumbnail click, only creates iframe after first click fo video thumbnail
		if (mainIframe !== 'undefined') {

			// iframe creation
			var videoLink = videoUrl + '?autoplay=1&loop=1&title=0&byline=0&portrait=0', // Video URL Set in PROD page, pulling from custom field value
				iframe = document.createElement('iframe'),
				iframeId = 'iframe_' + videoCode;

			iframe.frameBorder = 0;
			iframe.width = '500px';
			iframe.height = '500px';
			iframe.setAttribute('src', videoLink);
			iframe.setAttribute('webkitallowfullscreen', '');
			iframe.setAttribute('mozallowfullscreen', '');
			iframe.setAttribute('allowfullscreen', '');
			iframe.setAttribute('id', iframeId);

			var mainIframe = document.getElementById(iframeId); // Sets variable to test against to cache video after inital thumbnail click

		}

		mainImage.setAttribute('src', 'graphics/en-US/cssui/blank.gif'); // Sets Product Image to Blank GIF
		mainFrame.classList.add('main-frame-active'); // Adds active class to trigger responsive video styling
		mainFrameVideo.innerHTML = ''; // Clears Frame of any possible HTML
		mainFrameVideo.appendChild(iframe); // Adds generated iframe to .wrapper
	}

	function clearVideo(){
		mainFrame.classList.remove('main-frame-active');
		mainFrameVideo.innerHTML = '';
	}

	// if video trigger is clicked, video replaces product images
	videoTrigger.addEventListener('click', showVideo );

	// if main image src no longer contains "blank" in substring, video and containers clear themselves from #main_frame
	$(mainImage).on('load', function () {
		var string = $(mainImage).attr('src'),
			substring = 'blank';

		if (string.indexOf(substring) == -1) {
			clearVideo();
		}
	});

	// Reappends video thumbnail to #thumbnails after variant image update on click
	MivaEvents.SubscribeToEvent('variant_changed', function (product_data) {

		setTimeout(postVariantVideo, 1000); // not the best method for this, but works in a pinch. RIP

		function postVariantVideo() {
			
			if ($('#thumbnails .x-product-layout-images__thumbnail-video').length == 0) {

				$(videoSwitch).appendTo('#thumbnails');

			}

		}


	});


}
