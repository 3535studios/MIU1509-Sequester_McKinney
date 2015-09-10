// APP BACKGROUND COLOR
Ti.UI.setBackgroundColor("#000");

//NAVIGATION WINDOW
var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
});


// DATA
var aboutMe = [
	{question: "1. What is your name?", answer: "Sequester McKinney"}, 
	{question: "2. What is your chat user name, including the host?", answer: "quest, Google Hangout"},
	{question: "3. In which time zone do you reside?", answer: "Eastern Standard Time"},
	{question: "4. Why are you in the Mobile Development Program?", answer: "To learn how to create innovative and cutting-edge mobile applications"},
	{question: "5. How comfortable are you with Javascript?", answer: "I am not very comfortable with JavaScript"},
	{question: "6. How comfortable are you with Titanium?", answer: "I am becoming more comfortable with Titanium"},
	{question: "7. What is your favorite food?", answer: "Fried Chicken"},
	{question: "8. What kind of work do you do?", answer: "Web/Infrastructure Developer"},
	{question: "9. What is your favorite movie?", answer: "Captain America: The Winter Solider"},
	{question: "10. Who is your favorite actor/actress?", answer: "Actor: Anthony Hopkins"}
	
	];

//GETANSWERS FUNCTION
var getAnswers = function() {
	var detailWindow = Ti.UI.createWindow ({
		question: this.text,
		backgroundColor: "f5f5f5"
	});
	
		var detailTitleView = Ti.UI.createView ({
			height: 65,
			backgroundColor: "#fff",
			top: 0
		});
		
		var detailBorder = Ti.UI.createView ({
			backgroundColor: "#dbdbdb",
			height: 1,
			top: detailTitleView.height + detailTitleView.top
		});
		
		var detailTitleLabel = Ti.UI.createLabel ({
			text: this.question,
			font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
			top: 30,
			width: "100%",
			textAlign: "center"
		}); 
		
		var detailText = Ti.UI.createLabel ({
			text: this.answer,
			font: {fontSize: 14, fontFamily: "Arial"},
			top: detailBorder.height + detailBorder.top + 40,
			left: 10,
			right: 10
		});
		
		detailTitleView.add(detailTitleLabel);
		detailWindow.add(detailTitleView, detailBorder, detailText);
		navWindow.openWindow(detailWindow);
};

//CUSTOM TABLE HEADER
var aboutMeTableHeader = Ti.UI.createView ({
	backgroundColor: "#7DA63F"
});

var aboutMeTableHeaderText = Ti.UI.createLabel ({
	text: "Learn About Me",
	font: {fontSize: 20, fontWeight: "bold"},
	color: "#fff",
	padding: 30
});

aboutMeTableHeader.add(aboutMeTableHeaderText);

// TABLE
var about = Ti.UI.createTableView ({
	//top: border.width + border.height
});

if(Ti.Platform.name === "iPhone OS" ) {
	about.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}


// SECTIONS && ROWS

var aboutMeSection = Ti.UI.createTableViewSection ({
	headerView: aboutMeTableHeader
});


for (i=0, j=aboutMe.length; i<j; i++) {
	var theRow = Ti.UI.createTableViewRow ({
		question: aboutMe[i].question,
		answer: aboutMe[i].answer,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS" ) {
		theRow.hasChild = false;
		theRow.hasDetail = true;
}
	
	aboutMeSection.add(theRow);
	theRow.addEventListener("click", getAnswers);
}

var questionSections = [aboutMeSection];

//setData method
about.setData(questionSections);

//mainWindow.add(about);

navWindow.open();