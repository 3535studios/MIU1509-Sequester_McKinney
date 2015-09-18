// APP BACKGROUND COLOR
Ti.UI.setBackgroundColor("#262626");


//MAIN WINDOW
var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "#f2f2f2",
	title: "Women UFC Fighters"
});

var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
});

var imageBackground = Ti.UI.createImageView ({
		image: "images/background/background.jpg",
		layout: "vertical"
	});
	
var openGalleryView = Ti.UI.createView ({
	backgroundColor: "#AF0E14",
	width: "100%",
	height: 50,
	top: "800px"
});

var openGalleryLabel = Ti.UI.createLabel ({
	text: "SEE YOUR FAVORITE FIGHTER",
	color: "#FFF",
	align: "center"
});

openGalleryView.add(openGalleryLabel);
mainWindow.add(imageBackground, openGalleryView);

navWindow.open();


//LOAD REQUIRED FILE
var loadFile = require("info");