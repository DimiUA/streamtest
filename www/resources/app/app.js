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
	/*var constraints = navigator.mediaDevices.getSupportedConstraints();
	console.log(constraints);*/

	navigator.mediaDevices.getUserMedia({
		  'video': {
		    'facingMode': 'environment'
		  }
		}).then(function(mediaStream) {
		  var mediaControl = document.querySelector('video');
		  mediaControl.srcObject = mediaStream;
		  mediaControl.src = URL.createObjectURL(mediaStream);
		});

	/*navigator.mediaDevices.getUserMedia({
	    'audio': true,
	    'video': {
	        facingMode: 'user'
	    }
	}).then(function(mediaStream) {
	  // do something with the media stream
	  	$$('.videoContainer').html(`
			<video width="320" height="240" controls>
			  <source src="movie.mp4" type="video/mp4">
			  <source src="movie.ogg" type="video/ogg">
			  Your browser does not support the video tag.
			</video>
	  		`);
	});*/
});