// MAIN WINDOW BACKGROUND COLOR
var mainWindow = Ti.UI.createWindow ({
	title: "ABOUT ME",
	backgroundColor: "#f2f2f2"
});

//NAVIGATION WINDOW
var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
});

var titleView = Ti.UI.createView ({
	height: 65,
	backgroundColor: "#fff",
	top: 0
});

//INTRO IMAGE AND BUTTON
var imageBackground = Ti.UI.createImageView ({
		image: "images/mckinney-sequester-headshot.jpg",
		layout: "vertical",
		top: 0
	});
	
var aboutMeView = Ti.UI.createView ({
	backgroundColor: "#7DA63F",
	width: "100%",
	height: 95,
	bottom: 0
});

var aboutMeLabel = Ti.UI.createLabel ({
	text: "Learn About Me",
	color: "#fff",
	font: {fontSize: 33, fontWeight: "bold"},
	align: "center"
});

aboutMeView.add(aboutMeLabel);
mainWindow.add(imageBackground, aboutMeView);

navWindow.open();

//load require file
var loadFile = require("info");