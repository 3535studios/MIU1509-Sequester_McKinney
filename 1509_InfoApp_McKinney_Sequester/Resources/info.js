//SETUP GRID FOR IMAGES
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images/gallery");
var imageFiles = imagesFolder.getDirectoryListing();
var pHeight = Ti.Platform.displayCaps.platformHeight;
var pWidth = Ti.Platform.displayCaps.platformWidth;
var rowCount = 2;
var margin = 5;
var trueCanvasWidth = pWidth - (rowCount * (margin * 2));
var size =  trueCanvasWidth / rowCount;

//GET GALLERY DETAIL
var getGalleryDetail = function(dataSource) {
	var galleryDetailWindow = Ti.UI.createWindow ({
		backgroundColor: "#D91A2A",
	});
	for (var i=0; i<imageFiles.length; i++) {
		var imageView = Ti.UI.createView ({
			backgroundColor: "#AF0E14",
		});
	
		var fullSizeImage = Ti.UI.createImageView ({
		  image: dataSource
		});
		
		var imageLabel = Ti.UI.createLabel ({
			color: "#fff",
			top: 20,
			text: dataSource
		});
	
}
	
	imageView.add(fullSizeImage);
	galleryDetailWindow.add(imageView,imageLabel);
	navWindow.openWindow(galleryDetailWindow);
};

//OPEN FULL GALLERY WINDOW
var getGallery = function() {
	var galleryWindow = Ti.UI.createWindow ({
		backgroundColor: "#fff",
		layout: "horizontal",
		title: "Women UFC Bantam Weight"
	});
	
var viewContainer = Ti.UI.createScrollView ({
	top: 0,
	width: pWidth,
	contentWidth: pWidth,
	height: "100%",
	showVerticalScrollIndicator: true,
	backgroundColor: "#262626",
	layout: "horizontal",
});
	
for (var i=0; i<imageFiles.length; i++) {
		var view = Ti.UI.createView ({
			backgroundColor: "#D91A2A",
			left: margin,
			right: margin,
			top: margin,
			width: size,
			height: size,
			borderRadius: margin
	});
	
	var thumb = Ti.UI.createImageView ({
		image: "images/gallery/" + imageFiles[i]
	});
	
	view.add(thumb);
	viewContainer.add(view);
	//view.addEventListener("click", getGalleryDetail);
}	

//EVENT PROGATION
viewContainer.addEventListener("click", function(event){
	getGalleryDetail(event.source.image);
	//console.log(event.source.getImage(imageFiles));
});

galleryWindow.add(viewContainer);
navWindow.openWindow(galleryWindow);
	
};
	
openGalleryView.addEventListener("click",getGallery);