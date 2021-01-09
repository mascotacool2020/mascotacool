(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,1924,1271]]},
		{name:"index_atlas_2", frames: [[0,1595,1915,336],[1025,811,14,68],[1422,811,437,421],[0,0,1023,1023],[1025,0,504,809],[0,1025,1420,568],[1422,1234,500,250]]}
];


// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.contacto = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gatoplanosconstruyendo = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.LOGO1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.porfin = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.siguenos = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(6);
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


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.siguenos();
	this.instance.setTransform(-165.5,-82.75,0.662,0.6619);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(-165.5,-82.7,331,165.5), null);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.gatoplanosconstruyendo();
	this.instance.setTransform(0,0,0.1329,0.1329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,136,136), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.siguenos();
	this.instance.setTransform(0,0,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,227,113.5), null);


(lib.logo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.LOGO1();
	this.instance.setTransform(0,0,0.4762,0.4762);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo1, new cjs.Rectangle(0,0,240,385.3), null);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-478.7,-84,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-478.7,-84,957.5,168);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.porfin();
	this.instance.setTransform(-449.4,-179.75,0.633,0.633);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(252.1,-41.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-449.4,-179.7,898.8,359.5);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-481.1,-317.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481.1,-317.7,962,635.5);


(lib.Escena_1_texto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// texto
	this.text = new cjs.Text("página web \nen construcción", "76px 'Showcard Gothic'");
	this.text.lineHeight = 96;
	this.text.lineWidth = 751;
	this.text.parent = this;
	this.text.setTransform(130.55,400.3);
	this.text.shadow = new cjs.Shadow("rgba(204,204,204,1)",3,3,52);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.API = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.contacto();
	this.instance.setTransform(0,0,0.3295,0.3295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,138.7);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.movieClip_1 = new lib.Símbolo5();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(165.5,82.75);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,331,165.5), null);


(lib.httpswwwfacebookcomMascotaCool108111497755668 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(24.25,12.4,0.2115,0.2115,0,0,0,114.7,58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,24);


(lib.Escena_1_rectangulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rectangulo
	this.instance = new lib.Interpolación3("synched",0);
	this.instance.setTransform(481.25,497);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:508.5},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Escena_1_QR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// QR
	this.API = new lib.API();
	this.API.name = "API";
	this.API.setTransform(873,82.4,1,1,0,0,0,72,69.4);
	new cjs.ButtonHelper(this.API, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.API).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Escena_1_perrogato = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// perrogato
	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(490.5,314.95,0.9999,0.9999,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:488.15,y:321.85},23,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Escena_1_logo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo1
	this.instance = new lib.logo1();
	this.instance.setTransform(517,192.6,1,1,0,0,0,120,192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Escena_1_gatito = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gatito
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(870.9,513,1,1,0,0,0,68,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:870.8},0).wait(1).to({x:870.7},0).wait(1).to({x:870.6},0).wait(1).to({x:870.55},0).wait(1).to({x:870.45},0).wait(1).to({x:870.35},0).wait(1).to({x:870.25},0).wait(1).to({x:870.2},0).wait(1).to({x:870.1},0).wait(1).to({x:870},0).wait(1).to({x:869.9},0).wait(1).to({x:869.85},0).wait(1).to({x:869.75},0).wait(1).to({x:869.65},0).wait(1).to({x:869.55},0).wait(1).to({x:869.5},0).wait(1).to({x:869.4},0).wait(1).to({x:869.3},0).wait(1).to({x:869.2},0).wait(1).to({x:869.15},0).wait(1).to({x:869.05},0).wait(1).to({x:868.95},0).wait(1).to({x:868.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Escena_1_fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fondo
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(481.1,319.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Escena_1_facebook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// facebook
	this.faceboocito = new lib.Símbolo4();
	this.faceboocito.name = "faceboocito";
	this.faceboocito.setTransform(221.5,133.8,1,1,0,0,0,165.5,82.8);
	new cjs.ButtonHelper(this.faceboocito, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.faceboocito).wait(1).to({regY:82.7,rotation:15.6522,y:132.85},0).wait(1).to({rotation:31.3043,y:132},0).wait(1).to({rotation:46.9565,y:131.15},0).wait(1).to({rotation:62.6087,y:130.35},0).wait(1).to({rotation:78.2609,y:129.45},0).wait(1).to({rotation:93.913,x:221.55,y:128.6},0).wait(1).to({rotation:109.5652,y:127.8},0).wait(1).to({rotation:125.2174,x:221.5,y:126.9},0).wait(1).to({rotation:140.8696,y:126.05},0).wait(1).to({rotation:156.5217,y:125.2},0).wait(1).to({rotation:172.1739,y:124.35},0).wait(1).to({rotation:187.8261,x:221.45,y:123.45},0).wait(1).to({rotation:203.4783,y:122.6},0).wait(1).to({rotation:219.1304,y:121.75},0).wait(1).to({rotation:234.7826,x:221.4,y:120.9},0).wait(1).to({rotation:250.4348,x:221.45,y:120.05},0).wait(1).to({rotation:266.087,x:221.4,y:119.2},0).wait(1).to({rotation:281.7391,y:118.25},0).wait(1).to({rotation:297.3913,x:221.45,y:117.45},0).wait(1).to({rotation:313.0435,y:116.55},0).wait(1).to({rotation:328.6957,x:221.4,y:115.7},0).wait(1).to({rotation:344.3478,x:221.45,y:114.85},0).wait(1).to({rotation:360,x:221.5,y:114},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.paginaconstruccion = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.API = this.QR.API;
		this.faceboocito = this.facebook.faceboocito;
	}
	this.frame_23 = function() {
		this.___loopingOver___ = true;
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.faceboocito.addEventListener("click", fl_ClickToGoToWebPage_7);
		
		function fl_ClickToGoToWebPage_7() {
			window.open("https://www.facebook.com/Mascota-Cool-108111497755668", "_parent");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.API.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("https://api.whatsapp.com/send?phone=593998741295&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20peluquería.%20GRACIAS.", "_parent");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// QR_obj_
	this.QR = new lib.Escena_1_QR();
	this.QR.name = "QR";
	this.QR.setTransform(873,82.4,1,1,0,0,0,873,82.4);
	this.QR.depth = 0;
	this.QR.isAttachedToCamera = 0
	this.QR.isAttachedToMask = 0
	this.QR.layerDepth = 0
	this.QR.layerIndex = 0
	this.QR.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.QR).wait(24));

	// gatito_obj_
	this.gatito = new lib.Escena_1_gatito();
	this.gatito.name = "gatito";
	this.gatito.setTransform(870.9,513,1,1,0,0,0,870.9,513);
	this.gatito.depth = 0;
	this.gatito.isAttachedToCamera = 0
	this.gatito.isAttachedToMask = 0
	this.gatito.layerDepth = 0
	this.gatito.layerIndex = 1
	this.gatito.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.gatito).wait(1).to({regX:869.9,x:869.9},0).wait(23));

	// logo1_obj_
	this.logo1 = new lib.Escena_1_logo1();
	this.logo1.name = "logo1";
	this.logo1.setTransform(517,192.6,1,1,0,0,0,517,192.6);
	this.logo1.depth = 0;
	this.logo1.isAttachedToCamera = 0
	this.logo1.isAttachedToMask = 0
	this.logo1.layerDepth = 0
	this.logo1.layerIndex = 2
	this.logo1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo1).wait(24));

	// facebook_obj_
	this.facebook = new lib.Escena_1_facebook();
	this.facebook.name = "facebook";
	this.facebook.setTransform(221.5,133.8,1,1,0,0,0,221.5,133.8);
	this.facebook.depth = 0;
	this.facebook.isAttachedToCamera = 0
	this.facebook.isAttachedToMask = 0
	this.facebook.layerDepth = 0
	this.facebook.layerIndex = 3
	this.facebook.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.facebook).wait(1).to({regY:123.9,y:123.9},0).wait(23));

	// texto_obj_
	this.texto = new lib.Escena_1_texto();
	this.texto.name = "texto";
	this.texto.setTransform(506.1,495.4,1,1,0,0,0,506.1,495.4);
	this.texto.depth = 0;
	this.texto.isAttachedToCamera = 0
	this.texto.isAttachedToMask = 0
	this.texto.layerDepth = 0
	this.texto.layerIndex = 4
	this.texto.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.texto).wait(1).to({regX:507.5,regY:496.8,x:507.5,y:496.8},0).wait(23));

	// rectangulo_obj_
	this.rectangulo = new lib.Escena_1_rectangulo();
	this.rectangulo.name = "rectangulo";
	this.rectangulo.setTransform(481.3,497,1,1,0,0,0,481.3,497);
	this.rectangulo.depth = 0;
	this.rectangulo.isAttachedToCamera = 0
	this.rectangulo.isAttachedToMask = 0
	this.rectangulo.layerDepth = 0
	this.rectangulo.layerIndex = 5
	this.rectangulo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.rectangulo).wait(24));

	// perrogato_obj_
	this.perrogato = new lib.Escena_1_perrogato();
	this.perrogato.name = "perrogato";
	this.perrogato.setTransform(490.45,314.85,1.0876,1.0876,0,0,0,489.6,315.3);
	this.perrogato.depth = -42.55;
	this.perrogato.isAttachedToCamera = 0
	this.perrogato.isAttachedToMask = 0
	this.perrogato.layerDepth = 0
	this.perrogato.layerIndex = 6
	this.perrogato.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.perrogato).wait(24));

	// fondo_obj_
	this.fondo = new lib.Escena_1_fondo();
	this.fondo.name = "fondo";
	this.fondo.setTransform(481,319.8,1,1,0,0,0,481,319.8);
	this.fondo.depth = 0;
	this.fondo.isAttachedToCamera = 0
	this.fondo.isAttachedToMask = 0
	this.fondo.layerDepth = 0
	this.fondo.layerIndex = 7
	this.fondo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fondo).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,252.4,525.6,461.9);
// library properties:
lib.properties = {
	id: 'A07D59C7C3860841A397E955A6C10F47',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A07D59C7C3860841A397E955A6C10F47'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;