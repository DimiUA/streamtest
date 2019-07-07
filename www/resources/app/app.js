// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  	root: '#app', // App root element
  	id: 'com.myapp.streamtest', // App bundle ID
  	name: 'Stream Test', // App name
  	theme: 'auto', // Automatic theme detection
  	// App root data
  	data: function () {
		return {
	  		user: {
				firstName: 'John',
				lastName: 'Doe',
		  	},
		};
  	},
  // App root methods
  	methods: {
		helloWorld: function () {
	  		app.dialog.alert('Hello World!');
		},
  	},
	// App routes
	routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  	url: '/'
});


$$('.buttonStart').on('click', function(){

	   var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: source, // 0:Photo Library, 1=Camera, 2=Saved Album
            encodingType: 0 // 0=JPG 1=PNG
        };

        if (!navigator) {
        	alert('navigator not found');
        	return;
        }
        if (!navigator.camera) {
        	alert('camera not found');
        	return;
        }
        navigator.camera.getPicture(
            function(imgData) {
            	alert(imgData);
                //$('.media-object', this.$el).attr('src', "data:image/jpeg;base64,"+imgData);
                /*mainView.router.load({
                    url: 'resources/templates/asset.edit.photo.html',
                    context: {
                        imgSrc: "data:image/jpeg;base64," + imgData
                    }
                });*/

            },
            function() {
                alert('Error taking picture');
            },
            options);

	/*var constraints = navigator.mediaDevices.getSupportedConstraints();
	console.log(constraints);

		navigator.mediaDevices.getUserMedia({
			'video': {
			  	'audio': true,
			    'facingMode': 'environment'
			}
		}).then(function(mediaStream) {
			var mediaControl = document.querySelector('video');
			mediaControl.srcObject = mediaStream;
			mediaControl.src = URL.createObjectURL(mediaStream);
		});*/

	
});