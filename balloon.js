(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"balloon_atlas_", frames: [[287,770,285,260],[0,770,285,260],[0,0,1366,768],[1368,0,624,624],[1368,626,623,275]]}
];


// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["balloon_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["balloon_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.a6c6fc82c4de0080f840b75719f03070_skyvector2sunnyskybackgroundclipart_1366768 = function() {
	this.spriteSheet = ss["balloon_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hotairballoonnobackground = function() {
	this.spriteSheet = ss["balloon_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["balloon_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.051,0.051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,31.7,14), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hotairballoonnobackground();
	this.instance.parent = this;
	this.instance.setTransform(0,0.6,0.157,0.157,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,98.6,98.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a6c6fc82c4de0080f840b75719f03070_skyvector2sunnyskybackgroundclipart_1366768();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.736,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1006,610), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiUVIQkfgYjfl0Qh5jKhFjoQhEjigDj8QgCj7BAjsQBCj2CCi+QCKjLDDhzQC8hvDUghQEOgqC9B0QBqBBBJB0QAtBHA4CKQCvG0hqILQg4EVhnDLQmUMXmqAAQgUAAgTgBg");
	mask.setTransform(92,189);

	// Layer 3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(21.1,2.9,1,1,-0.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(21.1,53.7,162.9,209.2), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ABKJnQgjhCgihsQgmh8gHgRQgmhZkUhmQhagiiMgsIjEg8QiFgsiTBHQguAWhHAtQhOAzgZAOQgwAahNgNQhMgMhJgqQhOgugug/Qg0hHAAhOQAAhVA6g/QA9hCCUhAQD5htNCjVQCYgnBrgBQBdgBBUAcQAtAPByA1QByA1BaAeQBbAeDGAWQD1AbBdATQDFAnCKBOQCqBhBsCqQDAEuk9BXQhaAYioANQiUAMgTALQgYANhNBVQhpBzg3A1QjyDojPAMIgYAAQjFAAhojDg");
	mask_1.setTransform(173.1,81);

	// Layer 3
	this.instance_1 = new lib.Image_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19,20.6,1,1,-0.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(19,17.8,287.6,144.3), null);


(lib.Birdflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(119.2,51,1,1,-2.1,0,0,134.7,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:102.5,regY:158.3,rotation:6.8,x:77.4,y:130.4},0).wait(1).to({rotation:15.8,x:65.4,y:122.9},0).wait(1).to({rotation:24.8,x:54.8,y:113.6},0).wait(1).to({rotation:33.8,x:45.8,y:102.8},0).wait(1).to({rotation:27.8,x:51.6,y:110.2},0).wait(1).to({rotation:21.8,x:58.2,y:116.9},0).wait(1).to({rotation:15.8,x:65.4,y:122.9},0).wait(1).to({rotation:9.8,x:73.2,y:128.1},0).wait(1).to({rotation:3.8,x:81.6,y:132.5},0).wait(1).to({rotation:-2.2,x:90.3,y:136},0).wait(1).to({rotation:-10,x:102.1,y:139.1},0).wait(1).to({rotation:-17.8,x:114.2,y:140.6},0).wait(1).to({rotation:-25.7,x:126.5,y:140.4},0).wait(1).to({rotation:-33.5,x:138.5,y:138.6},0).wait(1).to({rotation:-41.3,x:150.3,y:135.1},0).wait(1).to({rotation:-33.5,x:138.5,y:138.6},0).wait(1).to({rotation:-25.7,x:126.5,y:140.4},0).wait(1).to({rotation:-17.8,x:114.2,y:140.6},0).wait(1).to({rotation:-10,x:102.1,y:139.1},0).wait(1).to({rotation:-2.2,x:90.3,y:136},0).wait(4));

	// Layer 1
	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(158.3,122.5,1,1,0,0,0,173.1,140.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:162.8,regY:89.9,x:148,y:72.2},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-29.7,347.6,335.2);


// stage content:
(lib.balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bird2
	this.instance = new lib.Birdflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(660.8,123.8,0.109,0.109,0,0,0,179.3,161.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:105.9,regY:120.6,scaleY:0.11,rotation:0.3,x:646.3,y:119.7,startPosition:1},0).wait(1).to({scaleX:0.11,scaleY:0.11,rotation:0.5,x:639.9,y:120,startPosition:2},0).wait(1).to({scaleY:0.11,rotation:0.8,x:634.9,y:120.4,startPosition:3},0).wait(1).to({scaleY:0.12,rotation:1.1,x:630,y:120.7,startPosition:4},0).wait(1).to({scaleX:0.11,scaleY:0.12,rotation:1.4,x:625,y:121.1,startPosition:5},0).wait(1).to({scaleY:0.12,rotation:1.6,x:620,y:121.5,startPosition:6},0).wait(1).to({scaleX:0.11,scaleY:0.12,rotation:1.9,x:615,y:121.8,startPosition:7},0).wait(1).to({scaleY:0.12,rotation:2.2,x:610,y:122.1,startPosition:8},0).wait(1).to({scaleY:0.12,rotation:2.4,x:605,y:122.5,startPosition:9},0).wait(1).to({scaleX:0.11,scaleY:0.13,rotation:2.7,x:600.1,y:122.8,startPosition:10},0).wait(1).to({scaleY:0.13,rotation:3,x:595.1,y:123.2,startPosition:11},0).wait(1).to({scaleX:0.11,scaleY:0.13,rotation:3.3,x:590.1,y:123.5,startPosition:12},0).wait(1).to({scaleY:0.13,rotation:3.5,x:585.2,y:123.9,startPosition:13},0).wait(1).to({scaleY:0.13,rotation:3.8,x:580.2,y:124.2,startPosition:14},0).wait(1).to({scaleX:0.12,scaleY:0.13,rotation:4.1,x:576,y:123.7,startPosition:15},0).wait(1).to({scaleY:0.14,rotation:4.3,x:571.8,y:123.3,startPosition:16},0).wait(1).to({scaleX:0.12,scaleY:0.14,rotation:4.6,x:567.6,y:122.8,startPosition:17},0).wait(1).to({scaleY:0.14,rotation:4.9,x:563.5,y:122.4,startPosition:18},0).wait(1).to({scaleY:0.14,rotation:5.2,x:559.3,y:121.9,startPosition:19},0).wait(1).to({scaleX:0.12,scaleY:0.14,rotation:5.4,x:555.1,y:121.5,startPosition:20},0).wait(1).to({scaleY:0.15,rotation:5.7,x:551,y:121,startPosition:21},0).wait(1).to({scaleX:0.12,scaleY:0.15,rotation:6,x:546.8,y:120.6,startPosition:22},0).wait(1).to({scaleY:0.15,rotation:6.3,x:542.7,y:120.1,startPosition:23},0).wait(1).to({scaleY:0.15,rotation:6.5,x:538.5,y:119.7,startPosition:0},0).wait(1).to({scaleX:0.12,scaleY:0.16,rotation:6.8,x:534.3,y:119.2,startPosition:1},0).wait(1).to({scaleY:0.16,rotation:7.1,x:530.2,y:118.8,startPosition:2},0).wait(1).to({scaleX:0.12,scaleY:0.16,rotation:7.3,x:526,y:118.3,startPosition:3},0).wait(1).to({scaleY:0.16,rotation:7.6,x:521.8,y:117.9,startPosition:4},0).wait(1).to({scaleY:0.17,rotation:7.9,x:517.7,y:117.4,startPosition:5},0).wait(1).to({scaleX:0.12,scaleY:0.17,rotation:8.2,x:513.5,y:117,startPosition:6},0).wait(1).to({scaleY:0.17,rotation:8.4,x:509.4,y:116.6,startPosition:7},0).wait(1).to({scaleX:0.12,scaleY:0.17,rotation:8.7,x:505.2,y:116.1,startPosition:8},0).wait(1).to({scaleY:0.17,rotation:9,x:501,y:115.6,startPosition:9},0).wait(1).to({scaleX:0.12,scaleY:0.18,rotation:9.2,x:496.9,y:115.2,startPosition:10},0).wait(1).to({scaleY:0.18,rotation:9.5,x:492.8,y:114.8,startPosition:11},0).wait(1).to({scaleY:0.18,rotation:9.8,x:488.6,y:114.3,startPosition:12},0).wait(1).to({scaleX:0.12,scaleY:0.18,rotation:10.1,x:484.5,y:113.9,startPosition:13},0).wait(1).to({scaleY:0.19,rotation:10.3,x:480.3,y:113.4,startPosition:14},0).wait(1).to({scaleX:0.13,scaleY:0.19,rotation:10.6,x:476.2,y:113,startPosition:15},0).wait(1).to({scaleY:0.19,rotation:10.9,x:472,y:112.5,startPosition:16},0).wait(1).to({scaleY:0.19,rotation:11.1,x:467.8,y:112.1,startPosition:17},0).wait(1).to({scaleX:0.13,scaleY:0.2,rotation:11.4,x:463.7,y:111.6,startPosition:18},0).wait(1).to({scaleY:0.2,rotation:11.7,x:459.6,y:111.1,startPosition:19},0).wait(1).to({scaleX:0.13,scaleY:0.2,rotation:12,x:455.4,y:110.7,startPosition:20},0).wait(1).to({scaleY:0.2,rotation:12.2,x:451.3,y:110.3,startPosition:21},0).wait(1).to({scaleY:0.2,rotation:12.5,x:447.2,y:109.8,startPosition:22},0).wait(1).to({scaleX:0.13,scaleY:0.21,rotation:12.8,x:443,y:109.4,startPosition:23},0).wait(1).to({scaleY:0.21,rotation:13,x:438.9,y:108.9,startPosition:0},0).wait(1).to({scaleX:0.13,scaleY:0.21,rotation:13.3,x:434.7,y:108.5,startPosition:1},0).wait(1).to({scaleY:0.21,rotation:13.6,x:430.6,y:108,startPosition:2},0).wait(1).to({scaleY:0.22,rotation:13.9,x:426.5,y:107.6,startPosition:3},0).wait(1).to({scaleX:0.13,scaleY:0.22,rotation:14.1,x:422.4,y:107.1,startPosition:4},0).wait(1).to({scaleY:0.22,rotation:14.4,x:418.2,y:106.7,startPosition:5},0).wait(1).to({scaleX:0.13,scaleY:0.22,rotation:14.7,x:414.1,y:106.2,startPosition:6},0).wait(1).to({scaleY:0.22,rotation:15,x:410,y:105.8,startPosition:7},0).wait(1).to({x:405.8,y:105.5,startPosition:8},0).wait(1).to({x:401.6,y:105.1,startPosition:9},0).wait(1).to({x:397.4,y:104.8,startPosition:10},0).wait(1).to({x:393.2,y:104.5,startPosition:11},0).wait(1).to({x:389.1,y:104.2,startPosition:12},0).wait(1).to({x:384.9,y:103.9,startPosition:13},0).wait(1).to({x:380.7,y:103.6,startPosition:14},0).wait(1).to({x:376.5,y:103.2,startPosition:15},0).wait(1).to({x:372.4,y:102.9,startPosition:16},0).wait(1).to({x:368.2,y:102.6,startPosition:17},0).wait(1).to({x:364,y:102.3,startPosition:18},0).wait(1).to({x:359.8,y:102,startPosition:19},0).wait(1).to({x:355.6,y:101.7,startPosition:20},0).wait(1).to({x:351.5,y:101.3,startPosition:21},0).wait(1).to({x:347.3,y:101,startPosition:22},0).wait(1).to({x:343.1,y:100.7,startPosition:23},0).wait(1).to({x:338.9,y:100.4,startPosition:0},0).wait(1).to({x:334.7,y:100.1,startPosition:1},0).wait(1).to({x:330.6,y:99.7,startPosition:2},0).wait(1).to({x:326.4,y:99.4,startPosition:3},0).wait(1).to({x:322.2,y:99.1,startPosition:4},0).wait(1).to({x:318,y:98.8,startPosition:5},0).wait(1).to({x:313.8,y:98.5,startPosition:6},0).wait(1).to({x:309.7,y:98.2,startPosition:7},0).wait(1).to({x:305.5,y:97.8,startPosition:8},0).wait(1).to({x:301.3,y:97.5,startPosition:9},0).wait(1).to({x:297.1,y:97.2,startPosition:10},0).wait(1).to({x:293,y:96.9,startPosition:11},0).wait(1).to({x:288.8,y:96.6,startPosition:12},0).wait(1).to({x:284.6,y:96.3,startPosition:13},0).wait(1).to({x:280.4,y:95.9,startPosition:14},0).wait(1).to({x:276.2,y:95.6,startPosition:15},0).wait(1).to({x:272.1,y:95.3,startPosition:16},0).wait(1).to({x:267.9,y:95,startPosition:17},0).wait(1).to({x:263.7,y:94.7,startPosition:18},0).wait(1).to({x:259.5,y:94.4,startPosition:19},0).wait(1).to({x:255.3,y:94,startPosition:20},0).wait(1).to({x:251.2,y:93.7,startPosition:21},0).wait(1).to({x:247,y:93.4,startPosition:22},0).wait(1).to({x:242.8,y:93.1,startPosition:23},0).wait(1).to({x:238.6,y:92.8,startPosition:0},0).wait(1).to({x:234.5,y:92.4,startPosition:1},0).wait(1).to({x:230.3,y:92.1,startPosition:2},0).wait(1).to({x:226.1,y:91.8,startPosition:3},0).wait(1).to({x:221.9,y:91.5,startPosition:4},0).wait(1).to({x:217.7,y:91.2,startPosition:5},0).wait(1).to({x:213.6,y:90.9,startPosition:6},0).wait(1).to({x:209.4,y:90.5,startPosition:7},0).wait(1).to({x:205.2,y:90.2,startPosition:8},0).wait(1).to({x:201,y:89.9,startPosition:9},0).wait(1).to({x:196.8,y:89.6,startPosition:10},0).wait(1).to({x:192.7,y:89.3,startPosition:11},0).wait(1).to({x:188.5,y:89,startPosition:12},0).wait(1).to({x:184.3,y:88.6,startPosition:13},0).wait(1).to({x:180.1,y:88.3,startPosition:14},0).wait(1).to({x:176,y:88,startPosition:15},0).wait(1).to({x:171.8,y:87.7,startPosition:16},0).wait(1).to({x:167.6,y:87.4,startPosition:17},0).wait(1).to({x:163.4,y:87.1,startPosition:18},0).wait(1).to({x:159.2,y:86.7,startPosition:19},0).wait(1).to({x:155.1,y:86.4,startPosition:20},0).wait(1).to({x:150.9,y:86.1,startPosition:21},0).wait(1).to({x:146.7,y:85.8,startPosition:22},0).wait(1).to({x:142.5,y:85.5,startPosition:23},0).wait(1).to({x:138.3,y:85.1,startPosition:0},0).wait(1).to({x:134.2,y:84.8,startPosition:1},0).wait(1).to({x:130,y:84.5,startPosition:2},0).wait(1).to({x:125.8,y:84.2,startPosition:3},0).wait(1).to({x:121.6,y:83.9,startPosition:4},0).wait(1).to({x:117.4,y:83.6,startPosition:5},0).wait(1).to({x:113.3,y:83.2,startPosition:6},0).wait(1).to({x:109.1,y:82.9,startPosition:7},0).wait(1).to({x:104.9,y:82.6,startPosition:8},0).wait(1).to({x:100.7,y:82.3,startPosition:9},0).wait(1).to({x:96.6,y:82,startPosition:10},0).wait(1).to({x:92.4,y:81.7,startPosition:11},0).wait(1).to({x:88.2,y:81.3,startPosition:12},0).wait(1).to({x:84,y:81,startPosition:13},0).wait(1).to({x:79.8,y:80.7,startPosition:14},0).wait(1).to({x:75.7,y:80.4,startPosition:15},0).wait(1).to({x:71.5,y:80.1,startPosition:16},0).wait(1).to({x:67.3,y:79.7,startPosition:17},0).wait(1).to({x:63.1,y:79.4,startPosition:18},0).wait(1).to({x:58.9,y:79.1,startPosition:19},0).wait(1).to({x:54.8,y:78.8,startPosition:20},0).wait(1).to({x:50.6,y:78.5,startPosition:21},0).wait(1).to({x:46.4,y:78.2,startPosition:22},0).wait(1).to({x:42.2,y:77.8,startPosition:23},0).wait(1).to({x:38.1,y:77.5,startPosition:0},0).wait(1).to({x:33.9,y:77.2,startPosition:1},0).wait(1).to({x:29.7,y:76.9,startPosition:2},0).wait(1).to({x:25.5,y:76.6,startPosition:3},0).wait(1).to({x:21.3,y:76.3,startPosition:4},0).wait(1).to({x:17.2,y:75.9,startPosition:5},0).wait(1).to({x:13,y:75.6,startPosition:6},0).wait(1).to({x:8.8,y:75.3,startPosition:7},0).wait(1).to({x:4.7,y:75,startPosition:8},0).wait(1).to({x:0.5,y:74.7,startPosition:9},0).wait(1).to({x:-3.7,y:74.4,startPosition:10},0).wait(1).to({x:-7.9,y:74,startPosition:11},0).wait(1).to({x:-12,y:73.7,startPosition:12},0).wait(1).to({x:-16.2,y:73.4,startPosition:13},0).wait(1).to({x:-20.4,y:73.1,startPosition:14},0).wait(1).to({x:-24.6,y:72.8,startPosition:15},0).wait(1).to({x:-28.8,y:72.4,startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(45));

	// bird
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(618.9,79.9,1,1,3.3,0,0,15.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:6.9,scaleX:1,scaleY:1,rotation:-18,x:599.7,y:108.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-39.6,x:580.7,y:134.3},0).wait(1).to({x:561.8,y:157.1},0).wait(1).to({x:543,y:176.9},0).wait(1).to({x:524.4,y:193.7},0).wait(1).to({x:505.9,y:207.6},0).wait(1).to({x:487.6,y:218.5},0).wait(1).to({regY:7,rotation:-26.4,x:469.5,y:226.5},0).wait(1).to({regY:6.9,rotation:-12.9,x:451.4,y:231.5},0).wait(1).to({rotation:3.9,x:433.5,y:233.5},0).wait(1).to({rotation:22.1,x:415.8,y:232.7},0).wait(1).to({rotation:28.1,x:398.1,y:228.7},0).wait(1).to({regX:15.7,rotation:27.1,x:380.7,y:222},0).wait(1).to({regX:15.6,rotation:25.8,x:363.4,y:212.1},0).wait(1).to({rotation:25.9,x:346.1,y:199.3},0).wait(1).to({regX:15.7,rotation:43.1,x:329.2,y:183.7},0).wait(1).to({regX:15.6,rotation:50.9,x:312.2,y:165},0).wait(1).to({rotation:47.4,x:295.6,y:143.1},0).wait(1).to({rotation:40.3,x:279,y:118.6},0).wait(1).to({rotation:38.9,x:262.6,y:91},0).wait(1).to({rotation:43.8,x:246.3,y:60.5},0).wait(1).to({rotation:45.4,x:230.1,y:27},0).wait(1).to({rotation:45.9,x:214,y:-9.6},0).wait(1).to({regY:6.8,rotation:51.4,x:198.1,y:-49.1},0).to({_off:true},1).wait(190));

	// balloon 
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92.8,328.9,1,1,0.5,0,0,48.2,48.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:49.3,regY:49.3,x:103.3,y:327},0).wait(1).to({x:112.6,y:324.2},0).wait(1).to({x:121.9,y:321.3},0).wait(1).to({x:131.3,y:318.4},0).wait(1).to({x:140.6,y:315.6},0).wait(1).to({x:149.9,y:312.7},0).wait(1).to({x:159.2,y:309.8},0).wait(1).to({x:168.6,y:307},0).wait(1).to({x:177.9,y:304.1},0).wait(1).to({x:187.2,y:301.2},0).wait(1).to({x:196.6,y:298.4},0).wait(1).to({x:205.9,y:295.5},0).wait(1).to({x:215.2,y:292.6},0).wait(1).to({x:224.5,y:289.7},0).wait(1).to({x:233.9,y:286.9},0).wait(1).to({x:243.2,y:284},0).wait(1).to({x:252.5,y:281.1},0).wait(1).to({x:261.9,y:278.3},0).wait(1).to({x:271.2,y:275.4},0).wait(1).to({x:280.5,y:272.5},0).wait(1).to({x:289.9,y:269.7},0).wait(1).to({x:299.2,y:266.8},0).wait(1).to({x:308.5,y:263.9},0).wait(1).to({x:317.8,y:261.1},0).wait(1).to({x:327.2,y:258.2},0).wait(1).to({x:336.5,y:255.3},0).wait(1).to({x:345.8,y:252.4},0).wait(1).to({x:355.2,y:249.6},0).wait(1).to({x:364.5,y:246.7},0).wait(1).to({x:373.8,y:243.8},0).wait(1).to({x:383.1,y:241},0).wait(1).to({x:392.5,y:238.1},0).wait(1).to({x:401.8,y:235.2},0).wait(1).to({x:411.1,y:232.4},0).wait(1).to({x:420.5,y:229.5},0).wait(1).to({x:429.8,y:226.6},0).wait(1).to({x:439.1,y:223.8},0).wait(1).to({x:448.5,y:220.9},0).wait(1).to({x:457.8,y:218},0).wait(1).to({x:447.5,y:215.3},0).wait(1).to({x:437.3,y:212.5},0).wait(1).to({x:427,y:209.8},0).wait(1).to({x:416.7,y:207.1},0).wait(1).to({x:406.5,y:204.3},0).wait(1).to({x:396.2,y:201.6},0).wait(1).to({x:385.9,y:198.9},0).wait(1).to({x:375.7,y:196.1},0).wait(1).to({x:365.4,y:193.4},0).wait(1).to({x:355.1,y:190.7},0).wait(1).to({x:344.9,y:187.9},0).wait(1).to({x:334.6,y:185.2},0).wait(1).to({x:324.4,y:182.5},0).wait(1).to({x:314.1,y:179.7},0).wait(1).to({x:303.8,y:177},0).wait(1).to({x:293.6,y:174.3},0).wait(1).to({x:283.3,y:171.5},0).wait(1).to({x:273,y:168.8},0).wait(1).to({x:262.8,y:166.1},0).wait(1).to({x:252.5,y:163.3},0).wait(1).to({x:242.2,y:160.6},0).wait(1).to({x:232,y:157.9},0).wait(1).to({x:221.7,y:155.1},0).wait(1).to({x:211.4,y:152.4},0).wait(1).to({x:201.2,y:149.7},0).wait(1).to({x:190.9,y:146.9},0).wait(1).to({x:180.7,y:144.2},0).wait(1).to({x:170.4,y:141.5},0).wait(1).to({x:160.1,y:138.7},0).wait(1).to({x:149.9,y:136},0).wait(1).to({x:139.6,y:133.3},0).wait(1).to({x:129.3,y:130.5},0).wait(1).to({x:130,y:132},0).wait(1).to({x:130.7,y:133.4},0).wait(1).to({x:131.5,y:134.9},0).wait(1).to({x:132.2,y:136.3},0).wait(1).to({x:132.9,y:137.8},0).wait(1).to({x:133.6,y:139.2},0).wait(1).to({x:134.3,y:140.7},0).wait(1).to({x:135,y:142.2},0).wait(1).to({x:135.7,y:143.6},0).wait(1).to({x:136.4,y:145.1},0).wait(1).to({x:137.1,y:146.5},0).wait(1).to({x:137.8,y:148},0).wait(1).to({x:138.5,y:149.4},0).wait(1).to({x:139.2,y:150.9},0).wait(1).to({x:139.9,y:152.3},0).wait(1).to({x:140.6,y:153.8},0).wait(1).to({x:141.3,y:155.2},0).wait(1).to({x:142,y:156.7},0).wait(1).to({x:142.8,y:158.2},0).wait(1).to({x:143.5,y:159.6},0).wait(1).to({x:144.2,y:161.1},0).wait(1).to({x:144.9,y:162.5},0).wait(1).to({x:145.6,y:164},0).wait(1).to({x:146.3,y:165.4},0).wait(1).to({x:147,y:166.9},0).wait(1).to({x:147.7,y:168.3},0).wait(1).to({x:148.4,y:169.8},0).wait(1).to({x:149.1,y:171.3},0).wait(1).to({x:149.8,y:172.7},0).wait(1).to({x:150.5,y:174.2},0).wait(1).to({x:151.2,y:175.6},0).wait(1).to({x:151.9,y:177.1},0).wait(1).to({x:152.6,y:178.5},0).wait(1).to({x:153.4,y:180},0).wait(1).to({x:154.1,y:181.4},0).wait(1).to({x:154.8,y:182.9},0).wait(1).to({x:155.5,y:184.3},0).wait(1).to({x:156.2,y:185.8},0).wait(1).to({x:156.9,y:187.3},0).wait(1).to({x:157.6,y:188.7},0).wait(1).to({x:158.3,y:190.2},0).wait(1).to({x:159,y:191.6},0).wait(1).to({x:159.7,y:193.1},0).wait(1).to({x:160.4,y:194.5},0).wait(1).to({x:161.1,y:196},0).wait(1).to({x:161.8,y:197.4},0).wait(1).to({x:162.5,y:198.9},0).wait(1).to({x:163.2,y:200.3},0).wait(1).to({x:163.9,y:201.8},0).wait(1).to({x:164.7,y:203.3},0).wait(1).to({x:165.4,y:204.7},0).wait(1).to({x:166.1,y:206.2},0).wait(1).to({x:166.8,y:207.6},0).wait(1).to({x:167.5,y:209.1},0).wait(1).to({x:168.2,y:210.5},0).wait(1).to({x:168.9,y:212},0).wait(1).to({x:169.6,y:213.4},0).wait(1).to({x:170.3,y:214.9},0).wait(1).to({x:171,y:216.4},0).wait(1).to({x:171.7,y:217.8},0).wait(1).to({x:172.4,y:219.3},0).wait(1).to({x:173.1,y:220.7},0).wait(1).to({x:173.8,y:222.2},0).wait(1).to({x:174.5,y:223.6},0).wait(1).to({x:175.2,y:225.1},0).wait(1).to({x:176,y:226.5},0).wait(1).to({x:176.7,y:228},0).wait(1).to({x:177.4,y:229.4},0).wait(1).to({x:178.1,y:230.9},0).wait(1).to({x:178.8,y:232.4},0).wait(1).to({x:179.5,y:233.8},0).wait(1).to({x:180.2,y:235.3},0).wait(1).to({x:180.9,y:236.7},0).wait(1).to({x:181.6,y:238.2},0).wait(1).to({x:182.3,y:239.6},0).wait(1).to({x:183,y:241.1},0).wait(1).to({x:183.7,y:242.5},0).wait(1).to({x:184.4,y:244},0).wait(1).to({x:185.1,y:245.5},0).wait(1).to({x:185.8,y:246.9},0).wait(1).to({x:186.6,y:248.4},0).wait(1).to({x:187.3,y:249.8},0).wait(1).to({x:188,y:251.3},0).wait(1).to({x:188.7,y:252.7},0).wait(1).to({x:189.4,y:254.2},0).wait(1).to({x:190.1,y:255.6},0).wait(1).to({x:190.8,y:257.1},0).wait(1).to({x:191.5,y:258.5},0).wait(1).to({x:192.2,y:260},0).wait(1).to({x:192.9,y:261.5},0).wait(1).to({x:193.6,y:262.9},0).wait(1).to({x:194.3,y:264.4},0).wait(1).to({x:195,y:265.8},0).wait(1).to({x:195.7,y:267.3},0).wait(1).to({x:196.4,y:268.7},0).wait(1).to({x:197.1,y:270.2},0).wait(1).to({x:197.9,y:271.6},0).wait(1).to({x:198.6,y:273.1},0).wait(1).to({x:199.3,y:274.5},0).wait(1).to({x:200,y:276},0).wait(1).to({x:200.7,y:277.5},0).wait(1).to({x:201.4,y:278.9},0).wait(1).to({x:202.1,y:280.4},0).wait(1).to({x:202.8,y:281.8},0).wait(1).to({x:203.5,y:283.3},0).wait(1).to({x:204.2,y:284.7},0).wait(1).to({x:204.9,y:286.2},0).wait(1).to({x:205.6,y:287.6},0).wait(1).to({x:206.3,y:289.1},0).wait(1).to({x:207,y:290.6},0).wait(1).to({x:207.7,y:292},0).wait(1).to({x:208.4,y:293.5},0).wait(1).to({x:209.2,y:294.9},0).wait(1).to({x:209.9,y:296.4},0).wait(1).to({x:210.6,y:297.8},0).wait(1).to({x:211.3,y:299.3},0).wait(1).to({x:212,y:300.7},0).wait(1).to({x:212.7,y:302.2},0).wait(1).to({x:213.4,y:303.6},0).wait(1).to({x:214.1,y:305.1},0).wait(1).to({x:214.8,y:306.6},0).wait(1).to({x:215.5,y:308},0).wait(1).to({x:216.2,y:309.5},0).wait(1).to({x:216.9,y:310.9},0).wait(1).to({x:217.6,y:312.4},0).wait(1).to({x:218.3,y:313.8},0).wait(1).to({x:219,y:315.3},0).wait(1).to({x:219.8,y:316.7},0).wait(1).to({x:220.5,y:318.2},0).wait(1).to({x:221.2,y:319.6},0).wait(1).to({x:221.9,y:321.1},0).wait(1).to({x:222.6,y:322.6},0).wait(1).to({x:223.3,y:324},0).wait(11));

	// sky
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50,95,1,1,0,0,0,503,305);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:60.4,y:99.6},0).wait(1).to({x:70.8,y:104.2},0).wait(1).to({x:81.2,y:108.8},0).wait(1).to({x:91.6,y:113.4},0).wait(1).to({x:102,y:118},0).wait(1).to({x:112.4,y:122.5},0).wait(1).to({x:122.8,y:127.1},0).wait(1).to({x:133.2,y:131.7},0).wait(1).to({x:143.6,y:136.3},0).wait(1).to({x:154,y:140.9},0).wait(1).to({x:164.4,y:145.4},0).wait(1).to({x:174.8,y:150},0).wait(1).to({x:185.2,y:154.6},0).wait(1).to({x:195.6,y:159.2},0).wait(1).to({x:206,y:163.8},0).wait(1).to({x:216.4,y:168.4},0).wait(1).to({x:226.8,y:172.9},0).wait(1).to({x:237.1,y:177.5},0).wait(1).to({x:247.5,y:182.1},0).wait(1).to({x:257.9,y:186.7},0).wait(1).to({x:268.3,y:191.3},0).wait(1).to({x:278.7,y:195.8},0).wait(1).to({x:289.1,y:200.4},0).wait(1).to({x:299.5,y:205},0).wait(1).to({x:309.9,y:209.6},0).wait(1).to({x:320.3,y:214.2},0).wait(1).to({x:330.7,y:218.7},0).wait(1).to({x:341.1,y:223.3},0).wait(1).to({x:351.5,y:227.9},0).wait(1).to({x:361.9,y:232.5},0).wait(1).to({x:372.3,y:237.1},0).wait(1).to({x:382.7,y:241.7},0).wait(1).to({x:393.1,y:246.2},0).wait(1).to({x:403.5,y:250.8},0).wait(1).to({x:413.8,y:255.4},0).wait(1).to({x:424.2,y:260},0).wait(1).to({x:434.6,y:264.6},0).wait(1).to({x:445,y:269.1},0).wait(1).to({x:455.4,y:273.7},0).wait(1).to({x:465.8,y:278.3},0).wait(1).to({x:476.2,y:282.9},0).wait(1).to({x:486.6,y:287.5},0).wait(1).to({x:497,y:292},0).wait(1).to({x:493,y:291.9},0).wait(1).to({x:488.9,y:291.8},0).wait(1).to({x:484.9,y:291.7},0).wait(1).to({x:480.8,y:291.5},0).wait(1).to({x:476.8,y:291.4},0).wait(1).to({x:472.7,y:291.3},0).wait(1).to({x:468.7,y:291.1},0).wait(1).to({x:464.6,y:291},0).wait(1).to({x:460.6,y:290.9},0).wait(1).to({x:456.6,y:290.8},0).wait(1).to({x:452.5,y:290.6},0).wait(1).to({x:448.5,y:290.5},0).wait(1).to({x:444.4,y:290.4},0).wait(1).to({x:440.4,y:290.2},0).wait(1).to({x:436.3,y:290.1},0).wait(1).to({x:432.3,y:290},0).wait(1).to({x:428.2,y:289.9},0).wait(1).to({x:424.2,y:289.7},0).wait(1).to({x:420.2,y:289.6},0).wait(1).to({x:416.1,y:289.5},0).wait(1).to({x:412.1,y:289.3},0).wait(1).to({x:408,y:289.2},0).wait(1).to({x:404,y:289.1},0).wait(1).to({x:399.9,y:288.9},0).wait(1).to({x:395.9,y:288.8},0).wait(1).to({x:391.8,y:288.7},0).wait(1).to({x:387.8,y:288.6},0).wait(1).to({x:383.8,y:288.4},0).wait(1).to({x:379.7,y:288.3},0).wait(1).to({x:375.7,y:288.2},0).wait(1).to({x:371.6,y:288},0).wait(1).to({x:367.6,y:287.9},0).wait(1).to({x:363.5,y:287.8},0).wait(1).to({x:359.5,y:287.7},0).wait(1).to({x:355.4,y:287.5},0).wait(1).to({x:351.4,y:287.4},0).wait(1).to({x:347.4,y:287.3},0).wait(1).to({x:343.3,y:287.1},0).wait(1).to({x:339.3,y:287},0).wait(1).to({x:335.2,y:286.9},0).wait(1).to({x:331.2,y:286.8},0).wait(1).to({x:327.1,y:286.6},0).wait(1).to({x:323.1,y:286.5},0).wait(1).to({x:319,y:286.4},0).wait(1).to({x:315,y:286.2},0).wait(1).to({x:311,y:286.1},0).wait(1).to({x:306.9,y:286},0).wait(1).to({x:302.9,y:285.8},0).wait(1).to({x:298.8,y:285.7},0).wait(1).to({x:294.8,y:285.6},0).wait(1).to({x:290.7,y:285.5},0).wait(1).to({x:286.7,y:285.3},0).wait(1).to({x:282.6,y:285.2},0).wait(1).to({x:278.6,y:285.1},0).wait(1).to({x:274.6,y:284.9},0).wait(1).to({x:270.5,y:284.8},0).wait(1).to({x:266.5,y:284.7},0).wait(1).to({x:262.4,y:284.6},0).wait(1).to({x:258.4,y:284.4},0).wait(1).to({x:254.3,y:284.3},0).wait(1).to({x:250.3,y:284.2},0).wait(1).to({x:246.2,y:284},0).wait(1).to({x:242.2,y:283.9},0).wait(1).to({x:238.2,y:283.8},0).wait(1).to({x:234.1,y:283.7},0).wait(1).to({x:230.1,y:283.5},0).wait(1).to({x:226,y:283.4},0).wait(1).to({x:222,y:283.3},0).wait(1).to({x:217.9,y:283.1},0).wait(1).to({x:213.9,y:283},0).wait(1).to({x:209.8,y:282.9},0).wait(1).to({x:205.8,y:282.7},0).wait(1).to({x:201.8,y:282.6},0).wait(1).to({x:197.7,y:282.5},0).wait(1).to({x:193.7,y:282.4},0).wait(1).to({x:189.6,y:282.2},0).wait(1).to({x:185.6,y:282.1},0).wait(1).to({x:181.5,y:282},0).wait(1).to({x:177.5,y:281.8},0).wait(1).to({x:173.4,y:281.7},0).wait(1).to({x:169.4,y:281.6},0).wait(1).to({x:165.4,y:281.5},0).wait(1).to({x:161.3,y:281.3},0).wait(1).to({x:157.3,y:281.2},0).wait(1).to({x:153.2,y:281.1},0).wait(1).to({x:149.2,y:280.9},0).wait(1).to({x:145.1,y:280.8},0).wait(1).to({x:141.1,y:280.7},0).wait(1).to({x:137,y:280.5},0).wait(1).to({x:142.9,y:279.7},0).wait(1).to({x:148.8,y:278.9},0).wait(1).to({x:154.7,y:278.1},0).wait(1).to({x:160.5,y:277.3},0).wait(1).to({x:166.4,y:276.5},0).wait(1).to({x:172.3,y:275.6},0).wait(1).to({x:178.2,y:274.8},0).wait(1).to({x:184,y:274},0).wait(1).to({x:189.9,y:273.2},0).wait(1).to({x:195.8,y:272.4},0).wait(1).to({x:201.6,y:271.5},0).wait(1).to({x:207.5,y:270.7},0).wait(1).to({x:213.4,y:269.9},0).wait(1).to({x:219.3,y:269.1},0).wait(1).to({x:225.1,y:268.3},0).wait(1).to({x:231,y:267.4},0).wait(1).to({x:236.9,y:266.6},0).wait(1).to({x:242.8,y:265.8},0).wait(1).to({x:248.6,y:265},0).wait(1).to({x:254.5,y:264.2},0).wait(1).to({x:260.4,y:263.3},0).wait(1).to({x:266.2,y:262.5},0).wait(1).to({x:272.1,y:261.7},0).wait(1).to({x:278,y:260.9},0).wait(1).to({x:283.9,y:260.1},0).wait(1).to({x:289.7,y:259.3},0).wait(1).to({x:295.6,y:258.4},0).wait(1).to({x:301.5,y:257.6},0).wait(1).to({x:307.3,y:256.8},0).wait(1).to({x:313.2,y:256},0).wait(1).to({x:319.1,y:255.2},0).wait(1).to({x:325,y:254.3},0).wait(1).to({x:330.8,y:253.5},0).wait(1).to({x:336.7,y:252.7},0).wait(1).to({x:342.6,y:251.9},0).wait(1).to({x:348.5,y:251.1},0).wait(1).to({x:354.3,y:250.2},0).wait(1).to({x:360.2,y:249.4},0).wait(1).to({x:366.1,y:248.6},0).wait(1).to({x:371.9,y:247.8},0).wait(1).to({x:377.8,y:247},0).wait(1).to({x:383.7,y:246.1},0).wait(1).to({x:389.6,y:245.3},0).wait(1).to({x:395.4,y:244.5},0).wait(1).to({x:401.3,y:243.7},0).wait(1).to({x:407.2,y:242.9},0).wait(1).to({x:413,y:242},0).wait(1).to({x:413.1,y:238},0).wait(1).to({y:233.9},0).wait(1).to({x:413.2,y:229.8},0).wait(1).to({y:225.7},0).wait(1).to({x:413.3,y:221.6},0).wait(1).to({y:217.5},0).wait(1).to({y:213.4},0).wait(1).to({x:413.4,y:209.4},0).wait(1).to({y:205.3},0).wait(1).to({x:413.5,y:201.2},0).wait(1).to({y:197.1},0).wait(1).to({x:413.6,y:193},0).wait(1).to({y:188.9},0).wait(1).to({y:184.8},0).wait(1).to({x:413.7,y:180.8},0).wait(1).to({y:176.7},0).wait(1).to({x:413.8,y:172.6},0).wait(1).to({y:168.5},0).wait(1).to({x:413.9,y:164.4},0).wait(1).to({y:160.3},0).wait(1).to({y:156.3},0).wait(1).to({x:414,y:152.2},0).wait(1).to({y:148.1},0).wait(1).to({x:414.1,y:144},0).wait(1).to({y:139.9},0).wait(1).to({x:414.2,y:135.8},0).wait(1).to({y:131.7},0).wait(1).to({y:127.6},0).wait(1).to({x:414.3,y:123.6},0).wait(1).to({y:119.5},0).wait(1).to({x:414.4,y:115.4},0).wait(1).to({y:111.3},0).wait(1).to({x:414.5,y:107.2},0).wait(1).to({y:103.1},0).wait(1).to({y:99},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-10,1088.4,610);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/balloon_atlas_.png?1495157648271", id:"balloon_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;