(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.createjsUICMAsset = function() {
	this.initialize();

	// cmUnit
	this.instance = new lib.cmUnit();
	this.instance.setTransform(0.5,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.5,105,464,405);


// symbols:
(lib.btn_click = function() {
	this.initialize(img.btn_click);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,379,136);


(lib.CMarrow = function() {
	this.initialize(img.CMarrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,105);


(lib.CMbtn = function() {
	this.initialize(img.CMbtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,203);


(lib.CMbtnshadow = function() {
	this.initialize(img.CMbtnshadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,379,136);


(lib.CMtext2 = function() {
	this.initialize(img.CMtext2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,464,74);


(lib.CMtext2_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.CMtext2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,464,74);


(lib.CMbtnshadow_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.CMbtnshadow();
	this.instance.setTransform(-188.9,-67.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-188.9,-67.9,379,136);


(lib.CMbtn_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.CMbtn();
	this.instance.setTransform(-183.9,-100.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.9,-100.9,368,203);


(lib.CMarrow_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.CMarrow();
	this.instance.setTransform(-62.9,-98.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.9,-98.9,124,105);


(lib.CMArrowAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this._arrow = new lib.CMarrow_1();
	this._arrow.setTransform(125,151.5,1,1,0,0,0,62,52.5);

	this.timeline.addTween(cjs.Tween.get(this._arrow).to({y:131.5},33).to({y:151.5},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,105);


(lib.cm00 = function() {
	this.initialize();

	// _text2
	this._text2 = new lib.CMtext2_1();
	this._text2.setTransform(239.5,478.5,1,1,0,0,0,228.5,42.5);

	// _arrow
	this._arrow = new lib.CMArrowAnim();
	this._arrow.setTransform(240.5,180.8,1,1,0,0,0,62.5,75.8);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A07NfQorjEAAkXQAAgxASgvIAA1HMA66AAAIAAWXIABAQQAAEXorDEQorDFsRAAQsQAAorjFg");
	mask.setTransform(238.9,315.8);

	// _btn
	this._btn = new lib.CMbtn_1();
	this._btn.setTransform(240,320.5,1,1,0,0,0,0,0.5);

	this._btn.mask = mask;

	// _shadow
	this._shadow = new lib.CMbtnshadow_1();
	this._shadow.setTransform(428,421.9,1,1,0,0,0,189.5,68);

	this.addChild(this._shadow,this._btn,this._arrow,this._text2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11,105,464,405);


(lib.cmUnit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// cm00
	this.cm00 = new lib.cm00();
	this.cm00.setTransform(240,275,1,1,0,0,0,240,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cm00}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,105,464,405);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;