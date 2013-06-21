(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.About = function() {
	this.initialize();

	// cmUnit
	this.instance = new lib.About_SearchIcon();
	this.instance.setTransform(512,38);

	this.instance_1 = new lib.About_SearchCancelIcon();
	this.instance_1.setTransform(571,32);

	this.instance_2 = new lib.About_BackButtonIcon();
	this.instance_2.setTransform(27,20);

	// HeaderBg.png
	this.instance_3 = new lib.About_HeaderBg();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,88);


// symbols:
(lib.About_BackButtonIcon = function() {
	this.initialize(img.About_BackButtonIcon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,50);


(lib.About_HeaderBg = function() {
	this.initialize(img.About_HeaderBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,88);


(lib.About_SearchCancelIcon = function() {
	this.initialize(img.About_SearchCancelIcon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,38);


(lib.About_SearchIcon = function() {
	this.initialize(img.About_SearchIcon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,30);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;