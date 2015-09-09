// MAIN WINDOW BACKGROUND COLOR
var mainWindow = Ti.UI.createWindow ({
	title: "ABOUT ME",
	backgroundColor: "#F2F2F2"
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

//CUSTOM TABLE HEADER
var aboutMeTableHeader = Ti.UI.createView ({
	backgroundColor: "#042F56"
});

var aboutMeTableHeaderText = Ti.UI.createLabel ({
	text: "ABOUT ME",
	font: {fontSize: 33, fontWeight: "bold"},
	color: "#fff"
});

aboutMeTableHeader.add(aboutMeTableHeaderText);

// TABLE
var aboutMe = Ti.UI.createTableView ({
	//top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS" ) {
	aboutMe.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

//INTRO IMAGE AND BUTTON
var imageBackground = Ti.UI.createImageView ({
		image: "images/mckinney-sequester-headshot.jpg",
		layout: "vertical",
		top: 0
	});
	
var aboutMeView = Ti.UI.createView ({
	backgroundColor: "#7DA63F",
	width: "100%",
	height: 80,
	bottom: 0
});

var aboutMeLabel = Ti.UI.createLabel ({
	text: "ABOUT ME",
	color: "#fff",
	align: "center"
});

// SECTIONS && ROWS

var aboutMeSection = Ti.UI.createTableViewSection ({
	headerView: aboutMeTableHeader,
});

aboutMeView.add(aboutMeLabel);
mainWindow.add(aboutMeSection,imageBackground, aboutMeView);
navWindow.open();

//load require file
var loadFile = require("info");