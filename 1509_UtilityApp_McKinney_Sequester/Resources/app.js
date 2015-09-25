// APP BACKGROUND COLOR
Ti.UI.setBackgroundColor("#000");

//MAIN WINDOW
var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "#f2f2f2",
	title: "Glucose Tracker"
});

//TEXT LABEL
var signUpLabel = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:16 },
  text: 'Enter Your Sign-up Credentials',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 0,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});

//NAVIGATION WINDOW
var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
});


// GLUCOSE DATA
var glucose = [
	{glucoseReading: "456", date: "09/24/15"}, 
	{glucoseReading: "400",  date: "09/24/15"},
	{glucoseReading: "380",  date: "09/24/15"},
	{glucoseReading: "360",  date: "09/24/15"},
	{glucoseReading: "300",  date: "09/24/15"},
	{glucoseReading: "280",  date: "09/24/15"},
	{glucoseReading: "200",  date: "09/24/15"},
	{glucoseReading: "180",  date: "09/24/15"},
	{glucoseReading: "100",  date: "09/24/15"},
	{glucoseReading: "80",  date: "09/24/15"}
	];
	
var nameField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  hintText: 'Enter Your Full Name',
  top: 30, left: 20,
  width: 340, height: 40
});
	
var dateField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  hintText: 'Enter The Date',
  top: 70, left: 20,
  width: 340, height: 40
});

var glucoseField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  hintText: 'Enter Glucose',
  top: 110, left: 20,
  width: 340, height: 40
});

var typeField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#ccc',
  hintText: 'Enter Type of Diabetes',
  top: 150, left: 20,
  width: 340, height: 40
});

var genderField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  hintText: 'Enter Your Gender',
  top: 190, left: 20,
  width: 340, height: 40
});


mainWindow.add(signUpLabel, nameField, dateField, glucoseField, typeField, genderField);
navWindow.open();