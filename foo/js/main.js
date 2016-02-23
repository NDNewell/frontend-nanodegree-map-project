/*
* Copyright (c) 2011 Róbert Pataki
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
* 
* ----------------------------------------------------------------------------------------
* 
* Check out my GitHub:	http://github.com/heartcode/
* Send me an email:		heartcode@robertpataki.com
* Follow me on Twitter:	http://twitter.com/#iHeartcode
* Blog:					http://heartcode.robertpataki.com
*/

/**
* CanvasLoader uses the HTML5 canvas element in modern browsers and VML in IE6/7/8 to create and animate the most popular preloader shapes (oval, spiral, rectangle, square and rounded rectangle).<br/><br/>
* It is important to note that CanvasLoader doesn't show up and starts rendering automatically on instantiation. To start rendering and display the loader use the <code>show()</code> method.
* @module CanvasLoader
**/
(function (window) {
	"use strict";
	/**
	* CanvasLoader is a JavaScript UI library that draws and animates circular preloaders using the Canvas HTML object.<br/><br/>
	* A CanvasLoader instance creates two canvas elements which are placed into a placeholder div (the id of the div has to be passed in the constructor). The second canvas is invisible and used for caching purposes only.<br/><br/>
	* If no id is passed in the constructor, the canvas objects are paced in the document directly.
	* @class CanvasLoader
	* @constructor
	* @param id {String} The id of the placeholder div
	* @param opt {Object} Optional parameters<br/><br/>
	* <strong>Possible values of optional parameters:</strong><br/>
	* <ul>
	* <li><strong>id (String):</strong> The id of the CanvasLoader instance</li>
	* <li><strong>safeVML (Boolean):</strong> If set to true, the amount of CanvasLoader shapes are limited in VML mode. It prevents CPU overkilling when rendering loaders with high density. The default value is true.</li>
	**/
	var CanvasLoader = function (id, opt) {
		if (typeof(opt) == "undefined") { opt = {}; }
		this.init(id, opt);
	}, p = CanvasLoader.prototype, engine, engines = ["canvas", "vml"], shapes = ["oval", "spiral", "square", "rect", "roundRect"], cRX = /^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, ie8 = navigator.appVersion.indexOf("MSIE") !== -1 && parseFloat(navigator.appVersion.split("MSIE")[1]) === 8 ? true : false, canSup = !!document.createElement('canvas').getContext, safeDensity = 40, safeVML = true,
	/**
	* Creates a new element with the tag and applies the passed properties on it
	* @method addEl
	* @protected
	* @param tag {String} The tag to be created
	* @param par {String} The DOM element the new element will be appended to
	* @param opt {Object} Additional properties passed to the new DOM element
	* @return {Object} The DOM element
	*/
		addEl = function (tag, par, opt) {
			var el = document.createElement(tag), n;
			for (n in opt) { el[n] = opt[n]; }
			if(typeof(par) !== "undefined") {
				par.appendChild(el);
			}
			return el;
		},
	/**
	* Sets the css properties on the element
	* @method setCSS
	* @protected
	* @param el {Object} The DOM element to be styled
	* @param opt {Object} The style properties
	* @return {Object} The DOM element
	*/
		setCSS = function (el, opt) {
			for (var n in opt) { el.style[n] = opt[n]; }
			return el;
		},
	/**
	* Sets the attributes on the element
	* @method setAttr
	* @protected
	* @param el {Object} The DOM element to add the attributes to
	* @param opt {Object} The attributes
	* @return {Object} The DOM element
	*/
		setAttr = function (el, opt) {
			for (var n in opt) { el.setAttribute(n, opt[n]); }
			return el;
		},
	/**
	* Transforms the cache canvas before drawing
	* @method transCon
	* @protected
	* @param	x {Object} The canvas context to be transformed
	* @param	x {Number} x translation
	* @param	y {Number} y translation
	* @param	r {Number} Rotation radians
	*/
		transCon = function(c, x, y, r) {
			c.save();
			c.translate(x, y);
			c.rotate(r);
			c.translate(-x, -y);
			c.beginPath();
		};
	/** 
	* Initialization method
	* @method init
	* @protected
	* @param id {String} The id of the placeholder div, where the loader will be nested into
	* @param opt {Object} Optional parameters<br/><br/>
	* <strong>Possible values of optional parameters:</strong><br/>
	* <ul>
	* <li><strong>id (String):</strong> The id of the CanvasLoader instance</li>
	* <li><strong>safeVML (Boolean):</strong> If set to true, the amount of CanvasLoader shapes are limited in VML mode. It prevents CPU overkilling when rendering loaders with high density. The default value is true.</li>
	**/
	p.init = function (pId, opt) {
		
		if (typeof(opt.safeVML) === "boolean") { safeVML = opt.safeVML; }
		
		/*
		* Find the containing div by id
		* If the container element cannot be found we use the document body itself
		*/
		try {
			// Look for the parent element
			if (document.getElementById(pId) !== undefined) {
				this.mum = document.getElementById(pId);
			} else {
				this.mum = document.body;
			}
		} catch (error) {
			this.mum = document.body;
		}
		// Creates the parent div of the loader instance
		opt.id = typeof (opt.id) !== "undefined" ? opt.id : "canvasLoader";
		this.cont = addEl("div", this.mum, {id: opt.id});
		if (canSup) {
		// For browsers with Canvas support...
			engine = engines[0];
			// Create the canvas element
			this.can = addEl("canvas", this.cont);
			this.con = this.can.getContext("2d");
			// Create the cache canvas element
			this.cCan = setCSS(addEl("canvas", this.cont), { display: "none" });
			this.cCon = this.cCan.getContext("2d");
		} else {
		// For browsers without Canvas support...
			engine = engines[1];
			// Adds the VML stylesheet
			if (typeof (CanvasLoader.vmlSheet) === "undefined") {
				document.getElementsByTagName("head")[0].appendChild(addEl("style"));
				CanvasLoader.vmlSheet = document.styleSheets[document.styleSheets.length - 1];
				var a = ["group", "oval", "roundrect", "fill"], n;
				for ( var n = 0; n < a.length; ++n ) { CanvasLoader.vmlSheet.addRule(a[n], "behavior:url(#default#VML); position:absolute;"); }
			}
			this.vml = addEl("group", this.cont);
		}
		// Set the RGB color object
		this.setColor(this.color);
		// Draws the shapes on the canvas
		this.draw();
		//Hides the preloader
		setCSS(this.cont, {display: "none"});
	};
/////////////////////////////////////////////////////////////////////////////////////////////
// Property declarations
	/**
	* The div we place the canvas object into
	* @property cont
	* @protected
	* @type Object
	**/
	p.cont = {};
	/**
	* The div we draw the shapes into
	* @property can
	* @protected
	* @type Object
	**/
	p.can = {};
	/**
	* The canvas context
	* @property con
	* @protected
	* @type Object
	**/
	p.con = {};
	/**
	* The canvas we use for caching
	* @property cCan
	* @protected
	* @type Object
	**/
	p.cCan = {};
	/**
	* The context of the cache canvas
	* @property cCon
	* @protected
	* @type Object
	**/
	p.cCon = {};
	/**
	* Adds a timer for the rendering
	* @property timer
	* @protected
	* @type Boolean
	**/
	p.timer = {};
	/**
	* The active shape id for rendering
	* @property activeId
	* @protected
	* @type Number
	**/
	p.activeId = 0;
	/**
	* The diameter of the loader
	* @property diameter
	* @protected
	* @type Number
	* @default 40
	**/
	p.diameter = 40;
	/**
	* Sets the diameter of the loader
	* @method setDiameter
	* @public
	* @param diameter {Number} The default value is 40
	**/
	p.setDiameter = function (diameter) { this.diameter = Math.round(Math.abs(diameter)); this.redraw(); };
	/**
	* Returns the diameter of the loader.
	* @method getDiameter
	* @public
	* @return {Number}
	**/
	p.getDiameter = function () { return this.diameter; };
	/**
	* The color of the loader shapes in RGB
	* @property cRGB
	* @protected
	* @type Object
	**/
	p.cRGB = {};
	/**
	* The color of the loader shapes in HEX
	* @property color
	* @protected
	* @type String
	* @default "#000000"
	**/
	p.color = "#000000";
	/**
	* Sets hexadecimal color of the loader
	* @method setColor
	* @public
	* @param color {String} The default value is '#000000'
	**/
	p.setColor = function (color) { this.color = cRX.test(color) ? color : "#000000"; this.cRGB = this.getRGB(this.color); this.redraw(); };
	/**
	* Returns the loader color in a hexadecimal form
	* @method getColor
	* @public
	* @return {String}
	**/
	p.getColor = function () { return this.color; };
	/**
	* The type of the loader shapes
	* @property shape
	* @protected
	* @type String
	* @default "oval"
	**/
	p.shape = shapes[0];
	/**
	* Sets the type of the loader shapes.<br/>
	* <br/><b>The acceptable values are:</b>
	* <ul>
	* <li>'oval'</li>
	* <li>'spiral'</li>
	* <li>'square'</li>
	* <li>'rect'</li>
	* <li>'roundRect'</li>
	* </ul>
	* @method setShape
	* @public
	* @param shape {String} The default value is 'oval'
	**/
	p.setShape = function (shape) {
		var n;
		for (n in shapes) {
			if (shape === shapes[n]) { this.shape = shape; this.redraw(); break; }
		}
	};
	/**
	* Returns the type of the loader shapes
	* @method getShape
	* @public
	* @return {String}
	**/
	p.getShape = function () { return this.shape; };
	/**
	* The number of shapes drawn on the loader canvas
	* @property density
	* @protected
	* @type Number
	* @default 40
	**/
	p.density = 40;
	/**
	* Sets the number of shapes drawn on the loader canvas
	* @method setDensity
	* @public
	* @param density {Number} The default value is 40
	**/
	p.setDensity = function (density) { 
		if (safeVML && engine === engines[1]) {
			this.density = Math.round(Math.abs(density)) <= safeDensity ? Math.round(Math.abs(density)) : safeDensity;
		} else {
			this.density = Math.round(Math.abs(density));
		}
		if (this.density > 360) { this.density = 360; }
		this.activeId = 0;
		this.redraw();
	};
	/**
	* Returns the number of shapes drawn on the loader canvas
	* @method getDensity
	* @public
	* @return {Number}
	**/
	p.getDensity = function () { return this.density; };
	/**
	* The amount of the modified shapes in percent.
	* @property range
	* @protected
	* @type Number
	**/
	p.range = 1.3;
	/**
	* Sets the amount of the modified shapes in percent.<br/>
	* With this value the user can set what range of the shapes should be scaled and/or faded. The shapes that are out of this range will be scaled and/or faded with a minimum amount only.<br/>
	* This minimum amount is 0.1 which means every shape which is out of the range is scaled and/or faded to 10% of the original values.<br/>
	* The visually acceptable range value should be between 0.4 and 1.5.
	* @method setRange
	* @public
	* @param range {Number} The default value is 1.3
	**/
	p.setRange = function (range) { this.range = Math.abs(range); this.redraw(); };
	/**
	* Returns the modified shape range in percent
	* @method getRange
	* @public
	* @return {Number}
	**/
	p.getRange = function () { return this.range; };
	/**
	* The speed of the loader animation
	* @property speed
	* @protected
	* @type Number
	**/
	p.speed = 2;
	/**
	* Sets the speed of the loader animation.<br/>
	* This value tells the loader how many shapes to skip by each tick.<br/>
	* Using the right combination of the <code>setFPS</code> and the <code>setSpeed</code> methods allows the users to optimize the CPU usage of the loader whilst keeping the animation on a visually pleasing level.
	* @method setSpeed
	* @public
	* @param speed {Number} The default value is 2
	**/
	p.setSpeed = function (speed) { this.speed = Math.round(Math.abs(speed)); };
	/**
	* Returns the speed of the loader animation
	* @method getSpeed
	* @public
	* @return {Number}
	**/
	p.getSpeed = function () { return this.speed; };
	/**
	* The FPS value of the loader animation rendering
	* @property fps
	* @protected
	* @type Number
	**/
	p.fps = 24;
	/**
	* Sets the rendering frequency.<br/>
	* This value tells the loader how many times to refresh and modify the canvas in 1 second.<br/>
	* Using the right combination of the <code>setSpeed</code> and the <code>setFPS</code> methods allows the users to optimize the CPU usage of the loader whilst keeping the animation on a visually pleasing level.
	* @method setFPS
	* @public
	* @param fps {Number} The default value is 24
	**/
	p.setFPS = function (fps) { this.fps = Math.round(Math.abs(fps)); this.reset(); };
	/**
	* Returns the fps of the loader
	* @method getFPS
	* @public
	* @return {Number}
	**/
	p.getFPS = function () { return this.fps; };
// End of Property declarations
/////////////////////////////////////////////////////////////////////////////////////////////	
	/**
	* Return the RGB values of the passed color
	* @method getRGB
	* @protected
	* @param color {String} The HEX color value to be converted to RGB
	*/
	p.getRGB = function (c) {
		c = c.charAt(0) === "#" ? c.substring(1, 7) : c;
		return {r: parseInt(c.substring(0, 2), 16), g: parseInt(c.substring(2, 4), 16), b: parseInt(c.substring(4, 6), 16) };
	};
	/**
	* Draw the shapes on the canvas
	* @method draw
	* @protected
	*/
	p.draw = function () {
		var i = 0, size, w, h, x, y, ang, rads, rad, de = this.density, animBits = Math.round(de * this.range), bitMod, minBitMod = 0, s, g, sh, f, d = 1000, arc = 0, c = this.cCon, di = this.diameter, e = 0.47;
		if (engine === engines[0]) {
			c.clearRect(0, 0, d, d);
			setAttr(this.can, {width: di, height: di});
			setAttr(this.cCan, {width: di, height: di});
			while (i < de) {
				bitMod = i <= animBits ? 1 - ((1 - minBitMod) / animBits * i) : bitMod = minBitMod;
				ang = 270 - 360 / de * i;
				rads = ang / 180 * Math.PI;
				c.fillStyle = "rgba(" + this.cRGB.r + "," + this.cRGB.g + "," + this.cRGB.b + "," + bitMod.toString() + ")";
				switch (this.shape) {
				case shapes[0]:
				case shapes[1]:
					size = di * 0.07;
					x = di * e + Math.cos(rads) * (di * e - size) - di * e;
					y = di * e + Math.sin(rads) * (di * e - size) - di * e;
					c.beginPath();
					if (this.shape === shapes[1]) { c.arc(di * 0.5 + x, di * 0.5 + y, size * bitMod, 0, Math.PI * 2, false); } else { c.arc(di * 0.5 + x, di * 0.5 + y, size, 0, Math.PI * 2, false); }
					break;
				case shapes[2]:
					size = di * 0.12;
					x = Math.cos(rads) * (di * e - size) + di * 0.5;
					y = Math.sin(rads) * (di * e - size) + di * 0.5;
					transCon(c, x, y, rads);
					c.fillRect(x, y - size * 0.5, size, size);
					break;
				case shapes[3]:
				case shapes[4]:
					w = di * 0.3;
					h = w * 0.27;
					x = Math.cos(rads) * (h + (di - h) * 0.13) + di * 0.5;
					y = Math.sin(rads) * (h + (di - h) * 0.13) + di * 0.5;
					transCon(c, x, y, rads);
					if(this.shape === shapes[3]) {
						c.fillRect(x, y - h * 0.5, w, h);
					} else {
						rad = h * 0.55;
						c.moveTo(x + rad, y - h * 0.5);
						c.lineTo(x + w - rad, y - h * 0.5);
						c.quadraticCurveTo(x + w, y - h * 0.5, x + w, y - h * 0.5 + rad);
						c.lineTo(x + w, y - h * 0.5 + h - rad);
						c.quadraticCurveTo(x + w, y - h * 0.5 + h, x + w - rad, y - h * 0.5 + h);
						c.lineTo(x + rad, y - h * 0.5 + h);
						c.quadraticCurveTo(x, y - h * 0.5 + h, x, y - h * 0.5 + h - rad);
						c.lineTo(x, y - h * 0.5 + rad);
						c.quadraticCurveTo(x, y - h * 0.5, x + rad, y - h * 0.5);
					}
					break;
				}
				c.closePath();
				c.fill();
				c.restore();
				++i;
			}
		} else {
			setCSS(this.cont, {width: di, height: di});
			setCSS(this.vml, {width: di, height: di});
			switch (this.shape) {
			case shapes[0]:
			case shapes[1]:
				sh = "oval";
				size = d * 0.14;
				break;
			case shapes[2]:
				sh = "roundrect";
				size = d * 0.12;
				break;
			case shapes[3]:
			case shapes[4]:
				sh = "roundrect";
				size = d * 0.3;
				break;
			}
			w = h = size;
			x = d * 0.5 - h;
			y = -h * 0.5;		
			while (i < de) {
				bitMod = i <= animBits ? 1 - ((1 - minBitMod) / animBits * i) : bitMod = minBitMod;
				ang = 270 - 360 / de * i;
				switch (this.shape) {
				case shapes[1]:
					w = h = size * bitMod;
					x = d * 0.5 - size * 0.5 - size * bitMod * 0.5;
					y = (size - size * bitMod) * 0.5;
					break;
				case shapes[0]:
				case shapes[2]:
					if (ie8) {
						y = 0;
						if(this.shape === shapes[2]) {
							x = d * 0.5 -h * 0.5;
						}
					}
					break;
				case shapes[3]:
				case shapes[4]:
					w = size * 0.95;
					h = w * 0.28;
					if (ie8) {
						x = 0;
						y = d * 0.5 - h * 0.5;
					} else {
						x = d * 0.5 - w;
						y = -h * 0.5;
					}
					arc = this.shape === shapes[4] ? 0.6 : 0; 
					break;
				}
				g = setAttr(setCSS(addEl("group", this.vml), {width: d, height: d, rotation: ang}), {coordsize: d + "," + d, coordorigin: -d * 0.5 + "," + (-d * 0.5)});
				s = setCSS(addEl(sh, g, {stroked: false, arcSize: arc}), { width: w, height: h, top: y, left: x});
				f = addEl("fill", s, {color: this.color, opacity: bitMod});
				++i;
			}
		}
		this.tick(true);
	};
	/**
	* Cleans the canvas
	* @method clean
	* @protected
	*/
	p.clean = function () {
		if (engine === engines[0]) {
			this.con.clearRect(0, 0, 1000, 1000);
		} else {
			var v = this.vml;
			if (v.hasChildNodes()) {
				while (v.childNodes.length >= 1) {
					v.removeChild(v.firstChild);
				}
			}
		}
	};
	/**
	* Redraws the canvas
	* @method redraw
	* @protected
	*/
	p.redraw = function () {
			this.clean();
			this.draw();
	};
	/**
		* Resets the timer
		* @method reset
		* @protected
		*/
		p.reset = function () {
			if (typeof (this.timer) === "number") {
				this.hide();
				this.show();
			}
		};
	/**
	* Renders the loader animation
	* @method tick
	* @protected
	*/
	p.tick = function (init) {
		var c = this.con, di = this.diameter;
		if (!init) { this.activeId += 360 / this.density * this.speed; }
		if (engine === engines[0]) {
			c.clearRect(0, 0, di, di);
			transCon(c, di * 0.5, di * 0.5, this.activeId / 180 * Math.PI);
			c.drawImage(this.cCan, 0, 0, di, di);
			c.restore();
		} else {
			if (this.activeId >= 360) { this.activeId -= 360; }
			setCSS(this.vml, {rotation:this.activeId});
		}
	};
	/**
	* Shows the rendering of the loader animation
	* @method show
	* @public
	*/
	p.show = function () {
		if (typeof (this.timer) !== "number") {
			var t = this;
			this.timer = self.setInterval(function () { t.tick(); }, Math.round(1000 / this.fps));
			setCSS(this.cont, {display: "block"});
		}
	};
	/**
	* Stops the rendering of the loader animation and hides the loader
	* @method hide
	* @public
	*/
	p.hide = function () {
		if (typeof (this.timer) === "number") {
			clearInterval(this.timer);			
			delete this.timer;
			setCSS(this.cont, {display: "none"});
		}
	};
	/**
	* Removes the CanvasLoader instance and all its references
	* @method kill
	* @public
	*/
	p.kill = function () {
		var c = this.cont;
		if (typeof (this.timer) === "number") { this.hide(); }
		if (engine === engines[0]) {
			c.removeChild(this.can);
			c.removeChild(this.cCan);
		} else {
			c.removeChild(this.vml);
		}
		var n;
		for (n in this) { delete this[n]; }
	};
	window.CanvasLoader = CanvasLoader;
}(window));;
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));
;


// Declare global variables map and infoWindow
var map,
    infoWindow,
    spriteSheet = "/img/png/png_sprites.png";

// Create Google Map
function initMap() {

  // Create custom style for the map
    var mapStyle = [{
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [{
            "color": "#525252"
        }, {
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }, {
            "color": "#525252"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }, {
            "color": "#525252"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "color": "#525252"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          { "visibility": "simplified"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          { "visibility": "simplified"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          { "lightness": 50 },
          { "color": "#e8e7e7"
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }, {
            "color": "#e8e7e7"
        }]
    }, {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#56c4d1"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }];

    // Create custom map style
    var customStyle = new google.maps.StyledMapType(mapStyle,
      {name: "Map"});

    // Create the map
    map = new google.maps.Map(document.getElementById('map'), {

    // Set the options for the map
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: [
                'custom_style',
                google.maps.MapTypeId.SATELLITE
            ]
        },
        disableDefaultUI: true,
        zoomControl: true,
        rotateControl: true,
        streetViewControl: true,
        mapTypeControl: true,
        scrollwheel: false,
        scaleControl: true
    });

    // Enable 45 degree tilting of imagery when zoomed in at close levels for
    // certain cities
    map.setTilt(45);

    // Associate the styled map with the corresponding MapTypeId
    map.mapTypes.set('custom_style', customStyle);

    // Set the custom map to display
    map.setMapTypeId('custom_style');

    // Save global refs to marker imgs
    markerIcon = {
        small : {
            url: spriteSheet,
            size: new google.maps.Size(19, 19),
            origin: new google.maps.Point(6, 35),
            anchor: new google.maps.Point(9.5, 9.5)
        },
        selected : {
            url: spriteSheet,
            size: new google.maps.Size(41, 52),
            origin: new google.maps.Point(4, 120),
            anchor: new google.maps.Point(20.5, 52)
        },
        smallFav : {
            url: spriteSheet,
            size: new google.maps.Size(23, 21),
            origin: new google.maps.Point(4, 4),
            anchor: new google.maps.Point(11.5, 10.5)
        },
        selectedFav : {
            url: spriteSheet,
            size: new google.maps.Size(41, 52),
            origin: new google.maps.Point(4, 181),
            anchor: new google.maps.Point(20.5, 52)
        }
    };

    // Create an info window object for displaying the break name
    infoWindow = new google.maps.InfoWindow();
};

// Get current location
navigator.geolocation.getCurrentPosition(success);

function success(position) {

    console.log("get user's location");

    currentLat = position.coords.latitude;
    currentLng = position.coords.longitude;
};

function AppViewModel () {

    this.self = this;

    // Cache common DOM refs
    var $document = $(document);
        $window = $(window),
        $body = $('body'),
        $mapSection = $('.map-section'),
        $mapContainer = $('.map-container'),
        $map = $('#map'),
        $mapSymbol = $('.map-symbol'),
        $locationGrid = $('.location-grid'),
        $searchContainer = $('.search-container'),
        $searchForm = $('.search-form'),
        $clearSymbol = $('.clear'),
        $filtersContainer = $('.filters-container'),
        $favFilterSym = $('.favorite-filter-symbol'),
        $clearFavsBtn = $('.clear-favorites-button'),
        $surfInfoContainer = $('.surf-info-container'),
        $searchSymbol = $('.search-symbol');

    // Cache Firebase database references to all, location, and user data
    var allData = new Firebase("https://dazzling-torch-4012.firebaseio.com"),
        locationData = new Firebase("https://dazzling-torch-4012.firebaseio.com/locationData"),
        users = new Firebase('https://dazzling-torch-4012.firebaseio.com/users');

    // Create write/read error messages to be used as callbacks
    var fireBaseWriteError = function(error) {
        if (error) {
          console.log("data could not be saved." + error);
        } else {
          console.log("data saved successfully.");
        };
    };

    var fireBaseReadError = function (errorObject) {
        console.log("the read failed: " + errorObject.code);
    };

    // Render the error msg when no location data is loaded
    var loadError = function (errorObject) {

        console.log('get location data unsuccessful');

        // Hide sections not able to render properly without location info
        $searchContainer.hide();
        $('.search-section').hide();
        $mapSection.hide();
        $('.surf-info-section').hide();
        $('.list-section').hide();

        // Cache error message, image, and container
        var locationLoadError = '<section class="error-section">' + '<div class="row">' + '<div class="col-xs-12 data-load-error-container">' + '<svg class="no-connection"><use xlink:href="#no_connection"/></svg>' + '<p>Dude! Really?! =(</p>' + '</div>' + '</div>' + '</section>';

        // Cache a reload button
        var reloadButton = '<button type="button" class="btn reload-button">Reload</button>';

        // Attach error msg, img, & reload button
        $('header').after(locationLoadError);
        $('.data-load-error-container').append(reloadButton);
        $('.reload-button').on('click', function(e) {
            location = location;
        });

        fireBaseReadError(errorObject);
    };

    // Get the location data
    locationData.on("value", function(snapshot) {

        // Save the location data snapshot
        var data = snapshot.val();

        console.log('get location data successful');

        // Invoke function to parse the location data
        self.parseLocationData(data);

        // Make sure Google maps api has loaded
        if (typeof google === 'object' && typeof google.maps === 'object') {

          // When loaded, set up Google map
          setUpGoogleMap();

        // If it hasn't loaded, keep checking until it is
        // When it is loaded, generate map markers
        } else {

          var checkGoogle = setInterval(function() {

              // Check if Google maps api has loaded
              if(typeof google === 'object' && typeof google.maps === 'object') {

                  // When loaded, set up Google map
                  setUpGoogleMap();

                  // Stop checking if Google maps api is loaded
                  clearInterval(checkGoogle);
              };
          }, 500);
        };

        // Sets up markers and listeners for Google map
        function setUpGoogleMap () {

          console.log('Google maps api loaded');
          console.log('generate map markers');

          // Populate Google map with markers based on location data
          self.generateMarkers(data);

          // Add map listeners
          self.addMapListeners();
        };

    }, loadError);

    // This array holds the location objects that have been parsed from
    // Firebase
    self.locationArray = [];

    // Check if the above array has been loaded with locations before executing
    // the callback function
    self.onLocationsArrayLoad = function (callback) {

        if(locationArray.length > 0) {

                callback();
        } else {

            var interval = setInterval(function() {

                if(locationArray.length > 0) {

                    clearInterval(interval);

                    callback();
                };
            }, 250);
        };
    };

    // This obervable array holds filtered location objects from search
    // queries and the initital data entered into the location array. It is
    // automatically updated/rendered in the View via Knockout
    self.locationGrid = ko.observableArray("");

    // Create an array that holds keywords that pop up in a small menu
    // within the search bar dynamically during searches
    self.searchKeywords = [];

    // Parse the location data obtained via the api request from Firebase
    self.parseLocationData = function (data) {

        console.log('parse location data');

        // Clear any existing information
        self.locationArray = [];
        self.locationGrid.removeAll();
        self.searchKeywords = [];

        data.forEach(function(obj) {

            /* Iterate through the location data from the data and push each object to the location array above */
            self.locationArray.push(obj);

            /* Iterate through the location data from the data and push each object to the location grid above */
            self.locationGrid.push(obj);

            /* Loop through the location array, obtain all of the break names
            and add them to the search keywords array */
            self.searchKeywords.push(obj.breakName);

            /* If a location keyword already exists in the search keywords
            array do not add it. If it doesn't, add it to the array. This
            avoids having the same location listed multiple times in the pop-up window */
            if(searchKeywords.indexOf(obj.location) < 0) {
                self.searchKeywords.push(obj.location);
            };
        });
    };

    /* Create an empty local array to hold the user's favorites collected from
    firebase's database */
    var userFavorites = [];

    // Set initial loading of location frames to true
    var initLoad = true;

    self.getFavorites = function (authData) {

        // If there are no users logged in, authData will be null
        if(authData === null) {
            console.log('cannot find favorites because there are no logged in users');

        } else {

            /* Get the user's favorites */
            users.child(authData.uid).child("favorites").on("value", function(snapshot) {

                // Save the Firebase snapshot of the user's favorites
                var favorites = snapshot.val();

                /* Clear any existing favorites in the local favorites array
                so it can be filled with updated information. */
                userFavorites = [];

                // If the user has no favorites, log msg in console
                if(favorites === null) {

                    console.log('user has no favorites');

                    // Cache an empty array to replace 'null'
                    var favorites = [];

                    updateFavs();
                    loadFrames();

                // If the user does have favorites saved in Firebase
                // load them
                } else {

                    /* Push each favorite found in the Firebase array into the
                    local favorites array */
                    favorites.forEach(function(obj) {
                        userFavorites.push(obj);
                    });

                    updateFavs();
                    loadFrames();

                };

                // Load location frames
                function updateFavs () {

                    // Update DOM elements (location frames)
                    /* Fill in the hearts of any locations which are the user's
                    favorites */
                    self.updateFavsOnFrames();

                    /* Update the marker image of any markers that match the
                    user's favorites */
                    self.updateFavMarkers(favorites);
                };

                // Load location frames
                function loadFrames () {

                    // If it's the initial page load, show the location frames
                    // If it's not the initial page load, the frames should've // already loaded, so do nothing (initial load = false)
                    if(initLoad) {

                        // Set intial favs loading to false
                        initLoad = false;

                        // Show frames after locations array has been loaded
                        self.onLocationsArrayLoad(showFrames);

                        function showFrames() {
                            self.showLocationFrames(favorites);
                        };
                    };
                };

            }, fireBaseReadError);

        };
    };

    // Add a location to the local favorites array and update Firebase version
    self.addFavorite = function (newFav) {

        // Add location to local array
        userFavorites.push(newFav);

        // Update locations
        if(isLoggedIn) {

            // Update Firebase if logged in
            users.child(allData.getAuth().uid).update({"favorites":userFavorites}, fireBaseWriteError);
        } else {

            self.updateFavsOnFrames();
            self.updateFavMarkers(userFavorites);
        };
    };

    // Remove a location from the local favorites array and update Firebase
    // version
    self.removeFavorite = function (removeFav) {

        /* Create a temporary array to hold any locations that do not match the
        array that is to be removed */
        var updatedFavs = [];

        /* Filter any matching locations to the deleted location out of the
        local favorites array */
        userFavorites.forEach(function(keepFav) {
            if(removeFav !== keepFav) {
                updatedFavs.push(keepFav);
            };
        });

        // Update the locations from the temporary array above if logged in
        if(isLoggedIn) {

            // Update Firebase
            // When Firebase updates, the local favorites array will be
            // replaced
            users.child(allData.getAuth().uid).update({"favorites":updatedFavs}, fireBaseWriteError);

        // If not logged in replace userFavorites with the updateFavs array
        // and update favorites on frames and markers
        } else {
            userFavorites = updatedFavs;
            self.updateFavsOnFrames();
            self.updateFavMarkers(userFavorites);
        };
    };

    // Delete all locations from the local favorites array and update Firebase
    self.removeAllFavorites = function () {

        // Clear the user's existing favorites
        userFavorites = [];

        // Update favorite status
        self.updateFavsOnFrames();

        // Update favorites
        if(isLoggedIn) {

            // Update Firebase if logged in
            users.child(allData.getAuth().uid).update({"favorites":userFavorites}, fireBaseWriteError);
        } else {

            // Just update the markers if not logged in
            self.updateFavMarkers(userFavorites);
        };
    };

    // Check if setting data to local storage is enabled
    self.checkLocalStorage = function () {

        try {

            window.localStorage.test = 'test';
            window.localStorage.removeItem('test');

            return true;

        } catch (e) {

            console.log('local storage disabled (' + e + ')');

            return false;
        }
    };

    // Save the status of local storage availability
    var localStorageEnabled = self.checkLocalStorage();

    // Load the external sprite sheet into the DOM either from local storage
    // or from the server
    $window.load(function () {

        // If local storage is enabled, see if there is an up-to-date local
        // version of the external sprite sheet.
        if(localStorageEnabled) {

            // Cache a ref to the local storage
            // Get the cached version of the external svg sprite sheet and
            // set the current version.
            var localStorage = window.localStorage,
                svgVersionCached = localStorage.getItem('svgVersion'),
                svgVersion = 1;

            // If the cached version of the external svg sprite sheet matches
            // the current one, load it into the DOM.
            if(svgVersionCached == svgVersion) {

                console.log('get external svg sprite sheet from local storage');

                // Save locally save external svg sprite sheet
                var data = localStorage.inlineSVGdata;

                // Load sprites into the DOM
                inlineSVGSprites(data);

            // If it doesn't or it is null, get the external svg sprite sheet
            // from the server
            } else if (svgVersionCached !== svgVersion || svgVersionCached === null) {

                getSVGData();
            };

        // If local storage isn't enabled, load the external svg sprite sheet
        // into the DOM from the server without saving it locally
        } else {

            getSVGData();
        };

        // Get the external svg sprite sheet data
        function getSVGData() {

            // If the request to the external svg sprite sheet fails,
            // show the error in the console
            var readError = setTimeout(function() {
                console.log('get external svg sprite sheet failed');
            }, 5000);

            // Use an ajax request to obtain the contents of the external
            // svg sprite sheet, and load it into the DOM
            $.ajax({
                url: 'img/svg/svg_sprites_v1.svg',
                dataType: "html",
                success: function(data) {

                    clearTimeout(readError);

                    console.log('get external svg sprite sheet from server');

                    // Load sprites into the DOM
                    inlineSVGSprites(data);

                    // If local storage is available save the external sprite
                    // sheet as well as its current version number.
                    if(localStorageEnabled) {saveSVGData(data)};
                }
            });
        };

        // Load the external svg sprite sheet into the DOM so that it
        // is an inlined svg sprite sheet
        function inlineSVGSprites(data) {

            // After inlining, hide it
            $body.prepend(data).children(":nth-child(1)").hide();
        };

        // Save the external svg sprite sheet to local storage
        function saveSVGData(data) {

            console.log('save external svg sprite sheet to local storage');

            localStorage.inlineSVGdata = data;
            localStorage.svgVersion = svgVersion;
        };
    });

    // Prevents back space navigating the page backwards during input/textarea
    // From Andrew Whitaker (https://stackoverflow.
    // com/questions/11112127/prevent-backspace-from-navigating-back-with-
    // jquery-like-googles-homepage)
    $document.on("keydown", function (e) {
        if (e.which === 8 && !$(e.target).is("input, textarea")) {
            e.preventDefault();
        };
    });

    // Create array of map markers
    var markers = [];

    self.generateMarkers = function(locationData) {

        // Loop through locationData and filter out the coordinates
        // & break name for each break. Save the break's coordinates and name
        // in their own variables for easy referencing
        var locationDataLength = locationData.length;

        for(var i = locationDataLength; i--;) {

            var obj = locationData[i];

            // Create a variable to hold each break's coordinates
            var breakCoordinates = ({lat: obj.lat, lng: obj.lng});

            // Create a variable to hold the name of the break
            var breakName = obj.breakName;

            // Create a variable to hold the name of the break location
            var breakLocation = obj.location;

            // Create a marker and set its position. Pass the variables
            // created above as arguments
            self.addMarker(breakName, breakCoordinates, breakLocation, obj);
        };

        // Display markers found in the markers array on the map
        self.displayMarkers(map);

        // Set initial map bounds based on location of markers
        if($map.is(":visible")) {
            self.setMapBounds();
        };
    };

    self.addMarker = function(breakName, breakCoordinates, breakLocation, obj) {

        var marker = new google.maps.Marker({

            position: breakCoordinates,
            map: map,
            icon: markerIcon.small,

            // Set the title for the break marker as the name of the
            // wave/location of the break. This way it can be more easily
            // searched for
            title: breakName + ' ' + '(' + breakLocation + ')'
        });

        // Add marker event listeners
        self.addMarkerListeners(marker, obj);
    };

    self.addMarkerListeners = function(marker, obj) {

        google.maps.event.addListener(marker, 'dblclick', (function(e) {

            // Create an inner function what will at the time of iteration save
            // a double-click event to the relevant marker. When the user
            // double- clicks, the map will zoom in on it
            return function() {

                // Center the map
                map.setCenter(marker.getPosition());

                // Set zoom if marker is clicked and not already zoomed in at
                // 14 or above
                if(map.getZoom() < 14) {
                    map.setZoom(14);
                };
            };
        })(marker));

        google.maps.event.addListener(marker, 'click', (function(e) {

            // Create an inner function what will at the time of iteration save
            // the individual break's name (breakName) within the infoWindow
            // and attach it to the relevant marker
            return function() {

                // Find last selected marker and make pin small again
                self.makeMarkerSmall();

                self.makeMarkerBig(marker);

                self.getInfoWindow(marker);

                // Bounce marker upon clicking
                self.animateMarker(marker);

                // Show surf guide (only if surf guide is already open) when
                // the marker is clicked
                if (guideView) {
                    self.renderSurfGuide(obj);
                } else {

                    // If the surf guide isn't open, hide all location frames
                    // except the one related to the marker
                    self.focusOnFrame(marker);
                };
            };
        })(marker, obj));

        // Location frame pulsates when it's corresponding marker is hovered
        // over
        google.maps.event.addListener(marker, 'mouseover', (function(e) {

            return function() {

                // Remove the marker's title in order to disable the native
                // tooltip from showing (it's ugly!)
                self.removeTitle();

                // Save the current number of visible location frames
                var $numFramesVisible = $('.location-frame:visible').length;

                // Pulsate the marker's related location frame if guide isn't
                // open
                if (!guideView && !mobileView) {

                    // Pulsate the associated location frame
                    self.pulseFrame(marker);

                    // If more than one location frame is in view scroll to the
                    // location frame
                    if($numFramesVisible !== 1) {
                        self.scrollToFrame(marker);
                    };
                };
            };
        })());

        google.maps.event.addListener(marker, 'mouseout', (function(e) {

            // Create an inner function that will at the time of iteration save
            // the behavior to the current marker
            return function() {

                // Reverse pulsate the associated location frame if not in
                // guide or mobile view
                if (!guideView && !mobileView) {
                    self.pulseFrame(marker);
                };
            };
        })());

        // Add marker to the markers array
        markers.push(marker);

        // Add marker's title to the marker titles array
        markerTitles.push(marker.title);
    };

    self.displayMarkers = function(map) {

        // Loop through the markers array and display on the map
        var markersLength = markers.length;

        for (var i = markersLength; i--;) {
            markers[i].setMap(map);
        };
    };

    // Get a marker's name (breakName) not including the location
    self.getMarkerName = function (marker) {

        var markerName = marker.title.replace(/ *\([^)]*\) */g, "");

        return markerName;
    };

    // Set the animation for the selected marker
    self.animateMarker = function (marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        window.setTimeout(function() {
            marker.setAnimation(null);
        }, 730);
    };

    self.makeMarkerBig = function (marker) {

        // Cache the title of the marker not including the location and
        // the current sprite img location
        var markerName = getMarkerName(marker),
            markerIconOrigin = marker.icon.origin;

        // If marker wasn't previously activated, make it big for
        // normal and fav icons
        if (markerIconOrigin === markerIcon.small.origin) {

            console.log('make ' + markerName + "'" + 's marker big');

            // Change the marker's image
            marker.setIcon(markerIcon.selected);

        } else if (markerIconOrigin === markerIcon.smallFav.origin) {

            console.log('make ' + markerName + "'" + 's marker big');

            // Change the marker's image
            marker.setIcon(markerIcon.selectedFav);
        };
    };

    // Find last selected marker and make pin small again
    self.makeMarkerSmall = function () {

        markers.forEach(function(marker) {

            // Cache the title of the marker not including the location and
            // the marker's sprite location
            var markerName = getMarkerName(marker),
                markerIconOrigin = marker.icon.origin;

            if (markerIconOrigin === markerIcon.selected.origin) {

                console.log('make ' + markerName + "'" + 's marker small');

                marker.setIcon(markerIcon.small);

            } else if (markerIconOrigin === markerIcon.selectedFav.origin) {

                console.log('make ' + markerName + "'" + 's marker small');

                marker.setIcon(markerIcon.smallFav);
            };
        });
    };

    // Get the marker that matches the currently opened surf guide
    self.getGuideMarker = function () {

        // Cache DOM ref
        var breakName = $('#guide-break-name').text();

        // Cache the length of the markers array
        var markersLength = markers.length;

        // Iterate through the markers array
        for(var i = markersLength; i--;) {

            // Save ref to indiv markers
            var marker = markers[i];

            // Get the marker's name
            var markerName = getMarkerName(marker);

            // If the currently selected surf guide's break name matches
            // a marker's break name return the marker
            if (breakName === markerName) {

                return marker;
            };
        };
    };

    // When a location frame is hovered over, the associated marker and
    // info window is activated
    self.activateMarker = function(breakName) {

        // Iterate through the markers array
        markers.forEach(function(marker) {

            // Cache the title of the marker not including the location
            var markerName = getMarkerName(marker);

            // Filter markers that match the location frame
            if (markerName === breakName) {

                self.makeMarkerBig(marker);
            };
        });
    };

    // Set all of the relevant markers to visible
    self.resetMarkers = function () {

        console.log('reset markers');

        // Save ref to array length
        var markersLength = markers.length;

        // Iterate through the markers array
        for(var i = markersLength; i--;) {

            // Cache a ref to the marker
            var marker = markers[i];

            // Set all relevant markers to visible if the map is visible
            self.filterMarkers(marker);
        };
    };

    // Change any map markers that match/don't match the user's favorites
    self.updateFavMarkers = function (favorites) {

        // Save ref to number of locations in data
        var numLocations = 0;

        // Count the number of locations in data
        locationData.on("value", function(snapshot) {
            var data = snapshot.val();

            data.forEach(function(obj) {
                numLocations++;
            });
        });

        // If the number of locations matches the markers array length
        // and the markers array length is at least greater than zero,
        // update the favorite status of the markers
        if(numLocations === markers.length && markers.length > 0) {

            updateMarkers();
        } else {

            var favsTimer = setInterval(function () {

                if(numLocations === markers.length && markers.length > 0) {

                    clearInterval(favsTimer);
                    updateMarkers();
                };
            }, 250);
        };

        function updateMarkers () {

            console.log('update marker favorites');

            markers.forEach(function(marker) {

                // Cache the title of the marker not including the location
                // and save a ref to it's sprite location
                var markerName = getMarkerName(marker),
                    markerIconOrigin = marker.icon.origin;

                // If the name matches a user's favorite, change the image
                // Any markers that don't match the user's favs or were never a
                // fav remain unaltered
                if (favorites.indexOf(markerName) > -1) {
                    if(markerIconOrigin === markerIcon.small.origin) {

                        marker.setIcon(markerIcon.smallFav);
                    } else if (markerIconOrigin === markerIcon.selected.origin) {

                        marker.setIcon(markerIcon.selectedFav);
                    };

                // If the name doesn't match, but was a fav, change the img
                // back
                } else if (markerIconOrigin === markerIcon.smallFav.origin) {

                    marker.setIcon(markerIcon.small);
                } else if (markerIconOrigin === markerIcon.selectedFav.origin) {

                    marker.setIcon(markerIcon.selected);
                };
            });
        };
    };

    // Count the number of visible markers
    self.checkVisibleMarkers = function () {

        // Cache the length of the markers array and set another variable
        var markersLength = markers.length;
            numMarkersVisible = 0;

        // Loop through the markers array
        for(var i = markersLength; i--;) {

            // Save a ref to the marker
            var marker = markers[i];

            // Check if the current marker is visible
            if(marker.getVisible()) {

                // Iterate the number of visible markers
                numMarkersVisible++;
            };
        };

        // If no markers are visible (map has been moved to an empty area),
        // display button that centers the map again.
        // If clicked, all markers are made visible and map is recentered
        if(numMarkersVisible < 1) {

            // If the reset button isn't already visible and not in guide view,
            // display the reset map button
            if(!$('.reset-map-container').length && !guideView) {

                console.log('no markers visible');

                // Render reset map button
                self.repositionMap();
            };

        // If any map markers are visible (within the map's viewable area),
        // remove the map reset button if previously shown
        } else if ($('.reset-map-container').length) {

            $('.reset-map-container').remove();
        };
    };

    // Show all of the map's markers
    // If a search has been made, show only those markers that match the search
    // query
    // If the favorites filter is selected, show only those markers that match
    // the user's favorites
    self.filterMarkers = function (marker) {

        // Shorten the marker title to just the break name
        var markerTitle = getMarkerName(marker);

        // If the search container is visible, only display the
        // markers that match the current search query
        if ($searchContainer.is(":visible")) {

            // Cache the current search query
            var search = self.formatText(self.Query()),
                markerTitle = self.formatText(marker.title);

            // Compare the search query with the title of the marker
            if (markerTitle.indexOf(search) > -1) {

                // If there is a match, make the marker visible
                marker.setVisible(true);
            };

        // If the favorites button is selected, only display the markers
        // that are within the users's favorites
        } else if ($('.favorite-filter-selected').length) {

            // Compare the marker title to the user's favs
            if (userFavorites.indexOf(markerTitle) > -1) {

                // If there is a match, make the marker visible
                marker.setVisible(true);
            };

        // If the search container isn't visible, show all markers
        } else {

            // Make all markers visible
            marker.setVisible(true);
        };
    };

    // Update visible markers depending on which ones fall within the current
    // map bounds
    self.manageMarkers = function () {

        console.log('manage markers');

        // Cache the length of the markers array
        var markersLength = markers.length;

        // Iterate through the markers array to check which markers fall
        // within the current map bounds
        for(var i = markersLength; i--;) {

            var marker = markers[i],
                markerIconOrigin = marker.icon.origin;

            // Get map bounds and determine which markers are within them
            if(map.getBounds().contains(marker.getPosition())) {

                // Show any markers that fall within the current map bounds
                self.filterMarkers(marker);

            // If the markers are not within the current map bounds,
            // hide them
            } else {

                // If a marker is selected, don't hide it. This is because
                // there may be times when a user may have purposefully panned
                // away from his or her selection to look at the surrounding
                // area of the map
                if(markerIconOrigin === markerIcon.selected.origin || markerIconOrigin === markerIcon.selectedFav.origin) {
                    marker.setVisible(true);
                } else {
                    marker.setVisible(false);
                };
            };
        };

        // Check the number of visible markers
        self.checkVisibleMarkers();
    };

    // Check if the user's favorites have loaded on the location frames.
    // Once the favs have been rendered or the user has no favorites, show the
    // location frames
    self.showLocationFrames = function(favorites) {

        // Remove page loader if it is visible
        if($pageLoader.is(":visible")) {
            $pageLoader.remove();
        };

        // Save a ref to all location frames currently in the DOM
        var $allLocationFrames = $('.location-frame');

        // If favorites isn't undefined, show locations when favorites array
        // has loaded
        if(typeof favorites !== 'undefined') {

            // If the user has no favorites, show the frames immediately
            if (favorites === null) {

                show();

            // If the number of favorites equals the number of location
            // frames with the fav icon filled in, show frames (this avoids
            // showing the frames first and then filling in the fav icon as
            // the user will see the filling in, which ain't purty)
            } else if (favorites.length === $('.is-a-favorite').length) {

                show();

            // If the number of favorites is not equal to the number of
            // location frames with the fav icon filled in, keep checking
            // until the they have the same value
            } else {

                var checkLocFavsLoaded = setInterval(function() {

                    if(favorites.length === $('.is-a-favorite').length) {

                        clearInterval(checkLocFavsLoaded);

                        show();
                    };
                }, 250);
            };

        // If favorites is undefined (if local storage isn't enabled), show
        // locations immediately
        } else {
            show();
        };

        function show () {

            console.log("show locations");

            $allLocationFrames.show();

            // Add the hover effects for each location frame
            self.addHoverEffects();
        };
    };

    // Iterate through the location frames and fill in the fav icon of any
    // whose break name matches the user's favorites
    self.updateFavsOnFrames = function () {

        console.log("the user's favorite(s) is/are: " + userFavorites.join(', '));
        console.log("update location frame favorites");

        // Cache available location frame references
        var $allLocationFrames = $('.location-frame');

        $allLocationFrames.each(function () {

            // Cache references to location frame, favorite symbol, &
            // break name
            var $locationFrame = $(this),
                $favoriteWrapper = $locationFrame.children(":nth-child(3)"),
                $breakName = $locationFrame.children(":nth-child(2)").text();

            // Filter locations that match the user's favorites
            // When a match is found, add a class to style its fav icon to
            // appear filled in on the frame
            if(userFavorites.indexOf($breakName) > -1) {

                $favoriteWrapper.removeClass('not-a-favorite').addClass('is-a-favorite');
            } else {

                if($favoriteWrapper.hasClass('is-a-favorite')) {

                    $favoriteWrapper.addClass('not-a-favorite').removeClass('is-a-favorite');
                };
            };
        });
    };

    // Open the location frame's relevant surf guide and animate its related
    // marker.
    // This function is called from the View using Knockout
    self.clickLocationFrame = function(obj) {

        // Disable rollover effects on clicking the frame
        rollover = false;

        // Open the surf guide
        self.renderSurfGuide(obj);

        // If the search container is visible when clicking a location frame
        // hide it and change its status
        if($searchContainer.is(":visible")) {
            $searchContainer.hide();
            $searchSymbol.removeClass("search-selected").addClass("search-default");
        };

        // Hide the filters section if favorites are in view
        if($('.favorite-filter-selected').length) {
            $filtersContainer.toggle();
        };

        // Hide the location grid
        $locationGrid.hide();
        // Animate the location's marker if the map is visible
        if($mapContainer.is(":visible")) {

            // Get the marker that is relevant to the surf guide location
            var marker = self.getGuideMarker();

            // Animate the marker
            self.animateMarker(marker);
        };

        // Manage the view to change the layout for the surf guide
        self.manageView();
    };

    // Automatically scroll to the location frame whose marker is being hovered
    // over
    self.scrollToFrame = function (marker) {

        // Cache DOM refs
        var $locationsContainer = $locationGrid,
            $locationFrame = $('.location-frame'),
            $pulsatingLocation = $('.pulse-frame'),
            $oldPosition = $locationsContainer.scrollLeft(),

            // Cache the title of the marker not including the location
            markerName = getMarkerName(marker);

        // Cache the width of the outer container for the locations
        var $locationsCountainerWidth = $locationsContainer.width();

        // Get and cache the outer width of the location frame
        var $frameWidth = $locationFrame.outerWidth(true);

        // Get the space needed on both sides of a location frame to center it
        var spaceLeftNRight = ($locationsCountainerWidth - $frameWidth)/2;

        // Get and cache a ref to the position (index) of frame that is being
        // pulsated (the index doesn't include hidden frames)
        var $targetIndex = $pulsatingLocation.siblings(":visible").addBack().index($pulsatingLocation);

        // Calculate the amt of space preceding the location being hovered over
        // This is done by multiplying the # of the frames preceding the said
        // location by the location frame width
        var spacePreceding = $frameWidth * $targetIndex;

        // Subtract the space needed on the left/right of the frame
        // from the space that precedes the targeted frame
        var newPosition = spacePreceding - spaceLeftNRight;

        console.log("auto scroll to " + markerName + "'s location frame");

        console.log('move scroll position from ' + $oldPosition + ' to ' + newPosition);

        // Set the number by which scrolling will increment left/right
        var scollIncrem = 200;

        // Scroll to the new location using the new position
        // Scroll right if the new scrollLeft position is greater than current
        // position
        if(newPosition > $oldPosition) {

          // Set the beginning scollLeft position on which to iterate
          var transitionRight = $oldPosition;

          // Animate the scrolling
          animateRight = requestAnimationFrame(scrollRight);

          // Create a loop that moves the scroll bar from left to right
          function scrollRight () {

              // Increase the scrollLeft position 200px per loop
              transitionRight+=scollIncrem;

              // If the scrollLeft position is less than the new position
              // move the scrollLeft position incrementally closer to it
              if(transitionRight < newPosition) {

                  $locationsContainer.scrollLeft(transitionRight);

                  // Keep calling the loop until the above if statement is true
                  animateRight = requestAnimationFrame(scrollRight);

              // If the scrollLeft position is greater/equal to the new
              // position, stop the loop
              } else {
                  stopScrolling();
              };
          };

        // Scroll left if the new scrollLeft position is less than current
        // position
        } else {

          // Set the beginning scollLeft position on which to iterate
          var transitionLeft = $oldPosition;

          // Animate the scrolling
          animateLeft = requestAnimationFrame(scrollLeft);

          // Create a loop that moves the scroll bar from right to left
          function scrollLeft () {

              // Increase the scrollLeft 200px per loop
              transitionLeft-=scollIncrem;

              // If the scrollLeft position is greater than the new position
              // move the scrollLeft position incrementally closer to it
              if(transitionLeft >  newPosition) {

                  $locationsContainer.scrollLeft(transitionLeft);

                  // Keep calling the loop until the above if statement is true
                  animateLeft = requestAnimationFrame(scrollLeft);

              // If the scrollLeft position is less/equal to the new position,
              // stop the loop
              } else {
                  stopScrolling();
              };
          };
        };

        // Stop auto scrolling
        function stopScrolling () {

            // Since each iteration towards the new position increments by
            // 200 each time, it will tend to over shoot or fall shy (actually
            // due to the positioning of the container) of the target, which
            // leaves the location frame off center. To avoid this, set the
            // scrollLeft position to the target position at the end of
            // scrolling.It's a negligible distance and unlikely to be noticed
            // by the user.
            $locationsContainer.scrollLeft(newPosition);
            console.log('stop auto scroll');
            console.log('scroll position at: ' + $locationsContainer.scrollLeft());
        };
    };

    // Animates the location frame of a hovered map marker
    self.pulseFrame = function (marker) {

        // Cache DOM references
        var $allLocationFrames = $('.location-frame'),
            $numFramesVisible = $('.location-frame:visible').length,

            // Cache the title of the marker not including the location
            markerName = getMarkerName(marker);

        // If more than one location frame is in view pulsate the frame
        if($numFramesVisible > 1) {

            // Loop through all of the location frames
            $allLocationFrames.each(function() {

                // Cache the current location frame's reference and text
                var $locationFrame = $(this),
                    $breakName = $locationFrame.children(":nth-child(2)").text();

                // If a specific location frame's text matches the currently
                // hovered/unhovered marker, pulsate or reverse pulsate it
                if($breakName === markerName) {

                    // If hovering away from the marker, reverse pulsate its
                    // location frame
                    if($('.pulse-frame').length) {

                        makeFrameSmall($locationFrame);

                    // If hovering over the marker, pulsate its location frame
                    } else {

                        makeFrameBig($locationFrame);
                    };
                };
            });

        // If only one location is in view, do nothing unless hovering away
        // from its marker i.e. the frame needs to be made small again.
        } else if ($numFramesVisible === 1 && $('.pulse-frame').length) {

            // Cache DOM refs to the visible location frame
            // Capture the location name of the visible location frame
            var $locationFrame = $('.location-frame:visible'),
                $locationName = $locationFrame[0].children[1].textContent;

            console.log("make " + $locationName + "'s location frame small");

            // Add/remove necessary classes to animate
            $locationFrame.removeClass("pulse-frame").addClass("pulse-frame-reverse");

            // Remove the reverse pulse effect
            removePulse($locationFrame);
        };

        function makeFrameBig ($locationFrame) {

            console.log("make " + markerName + "'s location frame big");

            // Add necessary class to animate
            $locationFrame.removeClass("pulse-frame-reverse").addClass("pulse-frame");
        };

        function makeFrameSmall ($locationFrame) {

            console.log("make " + markerName + "'s location frame small");

            // Add/remove necessary classes to animate
            $locationFrame.removeClass("pulse-frame").addClass("pulse-frame-reverse");

            // Remove the reverse pulse effect after its animation
            // finishes
            removePulse($locationFrame);
        };

        // Remove the reverse pulse effect
        function removePulse ($locationFrame) {

            // Set a time to remove the effect just after the reverse pulse
            // effect finishes its animation on the previous marker's location
            // frame
            var timer = setTimeout (function() {
                $locationFrame.removeClass("pulse-frame-reverse");
            }, 400);
        };
    };

    // Set the style on the location frames for map view
    self.adjustFrameStyle = function () {

        // Cache DOM elements
        var $allLocationFrames = $('.location-frame'),
            $locationName = $('.location-name'),
            $breakName = $('.break-name'),
            $favorite = $('.favorite');

        // Change all location frames style to map view
        $allLocationFrames.addClass("location-frame-map").removeClass("location-frame-default");

        // Loop through all of the location frames
        // Make sure display for each location frame is inline block
        $allLocationFrames.each(function() {

            // Cache the current location frame's reference and text
            var $locationFrame = $(this);

            // If the location frame is visible, format it for map view
            // If not, keep it hidden
            if($locationFrame.is(":visible")) {
                $locationFrame.css("display", "inline-block");
            };
        });

        // Remove the Bootstrap settings
        $allLocationFrames.removeClass("col-xs-12 col-sm-6 col-md-4");

        // Change break name style to map view style
        $breakName.removeClass("break-name-default").addClass("break-name-map");

        // Change location name style to map view style
        $locationName.removeClass("location-name-default").addClass("location-name-map");

        // Change 'favorite' symbol style to map view style *must change
        // via attr in order to change the class of an inline svg
        $favorite.attr("class", "favorite favorite-map");
    };

    // Show all of the relevant location frames after resetting the map via
    // the reset button when no markers are visible
    self.resetFrames = function () {

        console.log('reset location frames');

        // Save ref to array length
        var markersLength = markers.length;

        var $allLocationFrames = $('.location-frame');

        // Hide the visible location frames
        $allLocationFrames.hide();

        // Iterate through the markers array
        for(var i = markersLength; i--;) {

            // Cache a ref to the marker
            var marker = markers[i];

            // Show all relevant location frames
            self.filterFrames(marker);
        };
    };

    // Show only the frame of the map marker that was clicked on
    self.focusOnFrame = function (marker) {

        // Cache the title of the marker not including the location
        var markerName = getMarkerName(marker);

        // Cache DOM reference to all location frames
        var $allLocationFrames = $('.location-frame');

        // Hide all location frames
        $allLocationFrames.hide();

        // Loop through all of the location frames
        $allLocationFrames.each(function() {

            // Cache the current location frame's reference and break name
            var $locationFrame = $(this),
                $breakName = $locationFrame.children(":nth-child(2)").text();

            // If a specific location frame's break name matches the currenlty
            // selected break, show it
            if($breakName === markerName) {

                console.log('show only ' + markerName + "'s location frame");

                $locationFrame.show();
            };
        });
    };

    // Filter the location frames relevant to the map markers visible
    self.filterFrames = function (marker) {

        // Cache the break name of the marker not including the location
        var markerName = getMarkerName(marker);

        // If the search container is visible, only display the
        // frames of those markers that match the current search
        // query
        if ($searchContainer.is(":visible")) {

            // Cache the current search query and marker title
            var search = self.formatText(self.Query()),
                markerTitle = self.formatText(marker.title);

            // Compare the search query with the title of the
            // markers found within the map's boundaries
            if (markerTitle.indexOf(search) > -1) {

                // If there is a match, make the frame visible
                updateFrames(markerName);
            };

        // If the favorites filter button is selected, only display
        // the frames of those markers that are within the user's
        // favorites
        } else if ($('.favorite-filter-selected').length) {

            // Compare the marker title to the user's favs
            if (userFavorites.indexOf(markerName) > -1) {

                // If there is a match, make the frame visible
                updateFrames(markerName);
            };

        // If the search container isn't visible and the favorites
        // filter isn't selected, display all frames
        } else {

            // Update the visible frames
            updateFrames(markerName);
        };

        // Display the location frames of those markers found
        // within the map's current boundaries and remove those that do not
        function updateFrames (markerName) {

            // Cache DOM reference to all location frames
            var $allLocationFrames = $('.location-frame');

            // Loop through all of the location frames
            $allLocationFrames.each(function() {

                // Cache the current location frame's reference and break name
                var $locationFrame = $(this),
                    $breakName = $locationFrame.children(":nth-child(2)").text();

                // If a specific location frame's text matches the currenlty
                // selected break, show it
                if($breakName === markerName) {

                    $locationFrame.show();
                };
            });
        };
    };

    // Update visible frames depending on markers visible in the view port
    self.manageFrames = function () {

        // Cache the length of the markers array and refs to selected sprite
        // origins
        var markersLength = markers.length,
            markerIconSelectedOrigin = markerIcon.selected.origin,
            markerIconSelectedFavOrigin = markerIcon.selectedFav.origin;

        // Check if any markers are selected, if so do not adjust visible
        // frames. Otherwise, the selected marker's frame will not be the
        // only frame visible as others would be added whenever the map is
        // adjusted
        for(var i = markersLength; i--;) {

            var markerIconOrigin = markers[i].icon.origin;

            // If any of the marker's images matches a 'selected' image
            // End the function
            if(markerIconOrigin === markerIconSelectedOrigin || markerIconOrigin === markerIconSelectedFavOrigin) {
                return;
            };
        };

        console.log('manage location frames');

        var $allLocationFrames = $('.location-frame');

        // Hide the visible location frames
        $allLocationFrames.hide();

        // Iterate backwards through the markers array, so that their
        // location frames when matched are added back to the location grid
        // in the same order
        for(var i = markersLength; i--;) {

            var marker = markers[i];

            // Get map bounds and determine which markers are within them
            // Display the location frames of only those markers found
            // within the maps boundaries
            if(map.getBounds().contains(marker.getPosition())) {

                // Display the frames
                self.filterFrames(marker);
            };
        };
    };

    // Add event listeners for when the map is idle and when a user clicks
    self.addMapListeners = function () {

        // Add map event listener that detects when the map is idle
        // Make markers within the viewport/map bounds visible and those
        // that aren't invisible
        // Show only the location frames and markers whose markers are within
        // view port's map bounds
        google.maps.event.addListener(map, 'idle', function() {

            // Only execute the following code if the map is visible, the surf // guide isn't open, and the managers aren't disabled (window
            // isn't being resized)
            if($map.is(":visible") && !resizeInProgress && !guideView) {

                self.manageFrames();
                self.manageMarkers();
            };
        });

        // When the map is clicked, location frames are made visible.
        // This is useful if they were hidden as a result of a marker being
        // clicked.
        // In addition, all open info windows are closed and any selected
        // markers are made small again
        google.maps.event.addListener(map, 'click', function() {

            // Find last selected marker and make pin small again
            self.makeMarkerSmall();

            // Close any open info windows
            infoWindow.close();

            // If the surf guide isn't visible manage markers and frames
            if (!guideView) {

                // Update visible markers
                self.manageMarkers();

                // Update visible frames
                self.manageFrames();
            };
        });
    };

    // Custom zoom listener that is ONLY ACTIVATED WHEN THE ZOOM CONTROLS ARE
    // USED as opposed to 'zoom_changed' provided by Google which is activated
    // any time the zoom changes whether or not the controls were used (i.e.
    // window/map resizing).
    // The custom listener avoids probs posed by Google's native listener
    self.addMapZoomListener = function () {

        // Wait until the zoom controls have loaded
        var timer = setInterval(function() {

            // Save a ref to the Google zoom controls DOM elem
            var $zoomControls = $('.gm-style').children(':nth-child(8)').children(':nth-child(1)');

            // If the controls have loaded add the listener
            if($zoomControls.length) {

                console.log('zoom listener loaded');

                // Clear the interval
                clearInterval(timer);

                // If a listener has already been loaded (the map was
                // previously opened) remove the old listener
                if(typeof zoomListener !== 'undefined') {
                    $zoomControls.off('click', zoomListener);
                };

                // Attach the zoom listener
                $zoomControls.on('click', function zoomListener() {

                    // If not in guide view zoom in on a marker if selected
                    // when zoom level is adjusted.
                    // This assumes that in guide view, a user may want to pan
                    // and zoom in on locations around the selected location.
                    if(!guideView) {

                        // Cache the markers array length and ref to selected
                        // sprite origins
                        var markersLength = markers.length,
                            markerIconSelectedFavOrigin = markerIcon.selectedFav.origin,
                            markerIconSelectedOrigin = markerIcon.selected.origin;

                        // Search for a selected marker
                        for(var i = markersLength; i--;) {

                            // Save a ref to the current marker and it's
                            // sprite origin
                            var marker = markers[i],
                                markerIconOrigin = marker.icon.origin;

                            // Check if a marker is selected
                            if(markerIconOrigin === markerIconSelectedFavOrigin || markerIconOrigin === markerIconSelectedOrigin) {

                                // Center the map on the selected marker
                                self.centerOnMarker(marker);
                            };
                        };
                    };
                });
            } else {

                console.log('zoom listener not loaded');
            };
        }, 1000);
    };

    // Bring map markers back into view
    self.repositionMap = function () {

        // Cache map container
        var resetMap = '<div class="reset-map-container"></div>';

        // Add the container for the reset button
        $locationGrid.append(resetMap);

        // Cache DOM refs to map container and reset map icon
        var $resetMapContainer = $('.reset-map-container'),
            $resetMapIcon = '<svg class="reset-button" alt="reload location frames and markers button"><use xlink:href="#reset_button"/></svg>';

        // Add the reset map button
        $resetMapContainer.append($resetMapIcon);

        // Cache a ref to the reset button
        $resetButton = $('.reset-button');

        // Add event listener
        // When the button is clicked, re-center the map
        $resetButton.on("click", function() {
            moveMap();
        });

        // Make all of the map markers visible and set the map bounds
        function moveMap () {

            console.log('reposition map');

            // Remove the reset button
            $resetMapContainer.remove();

            // Set a ref to the length of the markers array
            var markersLength = markers.length;

            // Just reset the markers since after the markers are made visible
            // again, the map bounds are set, which triggers the markers AND
            // frames managers
            self.resetMarkers()

            // Set map bounds
            self.setMapBounds();
        };
    };

    // Set up marker for the map display in guide view
    self.setMarkerForGuide = function () {

        // Get the current guide's marker
        var marker = self.getGuideMarker();

        // Make the marker big if not done already
        self.makeMarkerBig(marker);

        // If the info window isn't open, open it and delay the centering
        // of the map over the guide's related marker
        // Not delaying it results in the map jumping due to the info window's
        // lagging effect on the centering of the map (it pushes the map
        // center downwards after the map has been centered on the marker)
        // To avoid this, the info window must be fully loaded before centering
        if(!isInfoWindowOpen(infoWindow)) {

            // Open info window
            self.getInfoWindow(marker);

            // Center the map on the specific marker after a given time
            var timer = setTimeout(function() {

                // Center the map
                self.centerOnMarker(marker);

                // Zoom in on the relevant marker
                map.setZoom(10);

            }, 150);

        // If the info window is already open, center the map immediately
        } else {

            // Center the map
            self.centerOnMarker(marker);

            // Zoom in on the relevant marker
            map.setZoom(10);
        };
    };

    // Center the map on a specific marker
    self.centerOnMarker = function (marker) {

          // Get the marker's name from its title
          var markerName = self.getMarkerName(marker);

          console.log('resize map');

          // Resize the map to adapt to new window size
          google.maps.event.trigger(map, 'resize');

          console.log('center map over ' + markerName);

          // Center the map over the marker
          map.setCenter(marker.getPosition());
    };

    self.setMapBounds = function () {

        console.log('set map bounds');

        // Create map bounds rectangle using the most SW / NE locations
        // to calculate the size
        var bounds = new google.maps.LatLngBounds();

        // Loop through markers and extend bounds to only those markers
        // that are visible
        var markersLength = markers.length;

        for (var i = markersLength; i--;) {
            if(markers[i].visible) {
                bounds.extend(markers[i].getPosition());
            };
        };

        // Fit the map to the bounds calcuated above
        map.fitBounds(bounds);

        // If there's only one marker (i.e. zoom is very high/too close), reset
        // zoom to lower level
        if(map.getZoom() > 12) {
            map.setZoom(12);
        };
    };

    // When the map is in view on a screen larger than 767px, the height is
    // adjusted
    self.adjustMapSize = function () {

        // Save references to DOM elements and heights
        var $locationGridHeight = $locationGrid.outerHeight(),
        $navbarHeight = $('#myNavbar').outerHeight(),
        $windowHeight = $window.height(),
        $newMapHeight = $windowHeight - ($locationGridHeight + $navbarHeight);

        // Adjust the height of the map container
        $mapContainer.css("height", $newMapHeight);

        // If the Google map and its locations have loaded and the frame
        // and marker managers aren't disabled, set the map bounds
        if(markers.length !== 0 && $map.is(":visible") && !resizeInProgress) {
            google.maps.event.trigger(map, 'resize');
            self.setMapBounds();
        };
    };

    // Activate the info window for the selected marker
    self.getInfoWindow = function (marker) {

        // Cache the title of the marker not including the location
        var markerName = getMarkerName(marker);

        console.log('show ' + markerName + "'s info window");

        // Cache the content to be added to the info window
        var iwContent = '<div class="info-window">' + '<p>' + markerName + '</p>' + '<div>';

        // Assign content to InfoWindow object
        infoWindow.setContent(iwContent);

        // Assign the InfoWindow object the appropriate marker
        infoWindow.open(map, marker);

        // Cache refs to elements related to the info window
        // Use .gm-style-iw to transverse to needed elements
        var $iwOuter = $('.gm-style-iw');
            $iwFrame = $iwOuter.parent(),
            $iwContainer = $iwOuter.parent().parent();

        // Hide point at bottom of info window
        $iwFrame.children(':nth-child(1)').children(':nth-child(3)').css("display", "none");

        // Hide the bottom point's background shadow
        $iwFrame.children(':nth-child(1)').children(':nth-child(1)').css("display", "none");

        // Hide info window background
        $iwFrame.children(':nth-child(1)').children(':nth-child(4)').css("display", "none");

        // Hide info window background shadow
        $iwFrame.children(':nth-child(1)').children(':nth-child(2)').css("display", "none");

        // Hide close button
        $iwFrame.children(':nth-child(3)').css("display", "none");

        // Since the info window container takes up space despite not being
        // visible, clickiing the map is not possible where the info window
        // would normally be
        // To remedy this, enable clicking through a DIV to the underlying
        // element(the Google map).
        $iwContainer.css("pointer-events", "none");

        // The above fix doesn't work for Opera and requires the event to be
        // forwarded manually
        $iwContainer.on("mousemove", function(e) {

              // Get the info window's immediate following sibling (Google
              // map) and trigger its handler
              $(this).next().trigger(e);
        });

        // Change the position of the info window to appear just above the
        // marker
        $iwContainer.css({
              left: '11px',
              top: '42px'
        });
    };

    // Check to see if the info window object is already open
    self.isInfoWindowOpen = function (infoWindow){
        var map = infoWindow.getMap();
        return (map !== null && typeof map !== "undefined");
    };

    // When screen size is larger than mobile and map is in view, adjust the
    // hover icons' positioning/size when hovering over a location frame
    self.toggleHoverClasses = function () {

        // Cache refs to selected DOM elements
        var $skillLevelIcon = $('.skill-level-hover'),
            $breakTypeIcon = $('.break-type-hover'),
            $waveDirectionIcon = $('.wave-direction-hover'),
            $bestSeasonIcon = $('.best-season-hover'),
            $miscInfoOneIcon = $('.misc-info-one-hover'),
            $miscInfoTwoIcon = $('.misc-info-two-hover'),
            $distanceInfo = $('.distance-hover'),
            $waterTempInfo = $('.water-temp-hover'),
            $waveSizeInfo = $('.wave-size-hover'),
            $costInfo = $('.cost-hover');

        // Whilst hovering over a location add/remove the appropriate classes
        // in order to change the icons' styling
        if(rollover) {

            $skillLevelIcon.removeClass("skill-level-hover-default").addClass("skill-level-hover-map");

            $breakTypeIcon.removeClass("break-type-hover-default").addClass("break-type-hover-map");

            $waveDirectionIcon.removeClass("wave-direction-hover-default").addClass("wave-direction-hover-map");

            $bestSeasonIcon.removeClass("best-season-hover-default").addClass("best-season-hover-map");

            $miscInfoOneIcon.removeClass("misc-info-one-hover-default").addClass("misc-info-one-hover-map");

            $miscInfoTwoIcon.removeClass("misc-info-two-hover-default").addClass("misc-info-two-hover-map");

            $distanceInfo.removeClass("distance-hover-default").addClass("distance-hover-map");

            $waterTempInfo.removeClass("water-temp-hover-default").addClass("water-temp-hover-map");

            $waveSizeInfo.removeClass("wave-size-hover-default").addClass("wave-size-hover-map");

            $costInfo.removeClass("cost-hover-default").addClass("cost-hover-map");

        // When hovering over a location is finished, add/remove the
        // appropriate classes in order to change the icons' styling back to
        // the default style
        } else {

            console.log('revert hover icons and info back to default style');

            $skillLevelIcon.removeClass("skill-level-hover-map").addClass("skill-level-hover-default");

            $breakTypeIcon.removeClass("break-type-hover-map").addClass("break-type-hover-default");

            $waveDirectionIcon.removeClass("wave-direction-hover-map").addClass("wave-direction-hover-default");

            $bestSeasonIcon.removeClass("best-season-hover-map").addClass("best-season-hover-default");

            $miscInfoOneIcon.removeClass("misc-info-one-hover-map").addClass("misc-info-one-hover-default");

            $miscInfoTwoIcon.removeClass("misc-info-two-hover-map").addClass("misc-info-two-hover-default");

            $distanceInfo.removeClass("distance-hover-map").addClass("distance-hover-default");

            $waterTempInfo.removeClass("water-temp-hover-map").addClass("water-temp-hover-default");

            $waveSizeInfo.removeClass("wave-size-hover-map").addClass("wave-size-hover-default");

            $costInfo.removeClass("cost-hover-map").addClass("cost-hover-default");
        };
    };

    // Set variable for hover effects
    var rollover;

    // When the cursor hovers over a location, remove the text and add
    // a gaussian blur.
    // Display info about each location with the appropriate icons
    self.addHoverEffects = function () {

        console.log('enable hover effect');

        // For each location set variables and add hover effects
        $('.location-frame').each(function () {
            var $locationFrame = $(this),
                $img = $(this).children(":nth-child(1)").children(":nth-child(1)"),
                $breakName = $(this).children(":nth-child(2)"),
                $favoriteWrapper = $(this).children(":nth-child(3)").children(":nth-child(1)"),
                $location = $(this).children(":nth-child(4)");

            $locationFrame.on('mouseenter', function (e) {

                // Enable rollover effects
                rollover = true;

                // Get identifying information from the hovered over
                // locaton frame
                var frameBreakName = e.currentTarget.children[1].textContent;

                console.log('hover over ' + frameBreakName);

                // If in mapView, activate the location frame's
                // associated marker and info window
                if(mapView) {
                    activateMarker(frameBreakName);
                };

                // Iterate through the location array
                self.locationArray.forEach(function(obj) {

                    // Filter locations that match the location frame
                    // When a match is found, display info about the location
                    // as a rollover
                    if (frameBreakName === obj.breakName) {
                        importInfo(obj);
                    };
                });

                // When the mouse is hovering over a location frame
                // show unique information about that location
                function importInfo(obj) {

                    // Blur the location frame's img and reduce its brightess
                    // hide all of the location frame's text and icons
                    $img.css({
                        "-webkit-filter" : "blur(4px) brightness(80%)",
                        "filter" : "blur(4px) brightness(80%)"
                    });
                    $location.hide();
                    $breakName.hide();
                    $favoriteWrapper.hide();

                    // Display icon associated with the skill level
                    // needed to surf the break
                    var skillLevelIcon = displaySkillIcon(obj.skillLevel);
                    $locationFrame.append(skillLevelIcon);

                    // Display the icon associated with the type of
                    // break it is (i.e. what kind of surface is beneath
                    // it
                    var breakIcon = displayBreakIcon(obj.breakDetails);
                    $locationFrame.append(breakIcon);

                    // Display the icon associated with the direction
                    // the wave breaks
                    var directionIcon = displayDirectionIcon(obj.waveDirection);
                    $locationFrame.append(directionIcon);

                    // Display the icon for the best month in which to
                    // surf at the specific break
                    var bestSeasonIcon = displayBestSeasonIcon(obj.optimalTime);
                    $locationFrame.append(bestSeasonIcon);

                    // If there is big wave surfing at this break
                    // display big wave icon. If not, display the
                    // suggested swim attire icon for current season
                    var miscIconOne = displayBigWaveIcon(obj);
                    $locationFrame.append(miscIconOne);

                    // If the wave is well known display the well
                    // known icon, otherwise display a random hazard
                    // icon
                    var miscIconTwo = displayWellKnownIcon(obj);
                    $locationFrame.append(miscIconTwo);

                    // Display the budget cost for the location
                    var costInfo = displayCost(obj.cost);
                    $locationFrame.append(costInfo);

                    // Check if current location is available, if it is
                    // render the distance to the hovered over location in
                    // the top right corner of the picture
                    if(typeof currentLat !== 'undefined') {
                        var distanceInfo = displayDistance(obj.lat, obj.lng);
                        $locationFrame.append(distanceInfo);
                    };

                    // Display average water temp for current season
                    var waterTempInfo = displayCurrentWaterTemp(obj.avgWaterTemp);
                    $locationFrame.append(waterTempInfo);

                    // Display avg wave height for the break
                    var waveSizeInfo = displayWaveSize(obj.avgSize);
                    $locationFrame.append(waveSizeInfo);
                };

                // If screen is larger than mobile view adjust the icons'
                // styling for the map view if enabled
                if(!mobileView && !gridView) {
                    self.toggleHoverClasses();
                };

                console.log('add hover tooltips');

                self.addToolTips();
            });

            // Remove all rollover info when the mouse stops hovering
            $locationFrame.on('mouseleave', function () {

                // Set rollover to false
                rollover = false;

                // Cache a ref to all of the hover icons
                var $allHoverIcons = $('.rollover-info');

                // Remove the tooltips loaded status so they can be loaded
                // again during the next hover (FYI any element that has the // class below will not load tooltips)
                $allHoverIcons.removeClass("tooltip-loaded");

                // if in map view adjust the icons'styling back to default
                if(mapView) {
                    self.toggleHoverClasses();
                };

                // Change the location frame's img back to default seettings
                // Show the location frame's text and icons
                $img.css({
                    "-webkit-filter" : "blur(0px) brightness(100%)",
                    "filter" : "blur(0px) brightness(100%)"
                });
                $location.show();
                $breakName.show();
                $favoriteWrapper.show();

                // If not in grid or guide view, deactivate the location
                // frame's associated marker.
                // Make its pin small again only if its info window isn't open.// If it's info window is open, it is selected and should
                // remain so.
                // If a marker is selected, it also prevents the location
                // frames from being managed (keeps only one location frame
                // visible)
                if(!guideView && !self.isInfoWindowOpen(infoWindow) && !gridView) {
                    self.makeMarkerSmall();
                };

                // Remove all hover icons
                $allHoverIcons.remove();
            });
        });
    };

    // Display the logged in user in console
    self.showUser = function () {

        // cache user data
        var authData = allData.getAuth();

        console.log(authData.uid + " is currently logged in");
    };

    // Set initial log in status as false
    var isLoggedIn = false;

    // Log new users into Firebase
    self.userLogin = function() {

        // If the visiter is a new user, get details and write data to Firebase
        // Log new user in anonymously (tokens last 5 years)
        allData.authAnonymously(function(error, authData) {
            if (error) {
                console.log("login Failed!", error);
            } else {

                // Save the user's favorites and name in the database
                allData.child("users").child(authData.uid).set({

                    // Could put a prompt here to get and set user's name
                    // but won't for now

                    // Initially user has no favorites
                    favorites: []
                });

                // Set log in status to true
                isLoggedIn = true;

                // Display which user is logged in the console every minute
                var displayUser = setInterval(self.showUser, 60000);
            };
        });
    };

    // Create a callback which logs the current authentication state
    self.checkAuthentication = function (authData) {

        // Check user authentication only if local storage is available
        // FYI - It's only available if local storage is enabled
        if(localStorageEnabled) {

            // If user is already logged in, notify in console and update
            // favorites
            if(authData) {

                console.log("user " + authData.uid + " is logged in with " + authData.provider);

                self.getFavorites(authData);

                // Display which user is logged in the console every minute
                var displayUser = setInterval(self.showUser, 60000);

                // Set log in status to true
                isLoggedIn = true;

            // If user is logged out, notify via console and log user in
            } else {

                console.log("user is logged out");
                self.userLogin();
            };

        // If local storage isn't available, show location frames once all of
        // the location data has been parsed
        // Leave log in status at false
        } else {

            console.log('Firebase log in disabled because local storage unavailable');

            // Show frames once location data has been parsed
            self.onLocationsArrayLoad(self.showLocationFrames);
        };
    };

    /* Monitor user authentication state, when there is a change check
       which user is logged in / logged out */
    allData.onAuth(self.checkAuthentication);

    // Add tooltips for those icons that have a title attribute
    // When the element is clicked or hovered over a tooltip is displayed
    self.addToolTips = function () {

        // Save a ref to all elements, and setTimeout variables
        var $elements = $('[title]'),
            toolTipTimer,
            toolTipDelay,
            newEventRef;

        // Iterate through all of the elements
        $elements.each(function() {

            // Save ref to current icon being iterated over
            var $element = $(this);

            // If the element has no tooltips already loaded, load the tooltip
            if(!$element.hasClass("tooltip-loaded")) {

                // In order to disable the native tooltip function, the class
                // of the element must be removed while the mouse is hovered
                // over it.
                // The title needs to first be saved so that it can be used
                // for the tooltip and then re-added.
                var $titleText = $element.attr('title');

                // Indicate that a tooltip has been added to the element
                $element.addClass("tooltip-loaded");

                // Add a listener to the element for when it is clicked or
                // hovered over/off of
                $element.on("click mouseover mouseleave", function(eventRef) {

                    // If a tooltip is already open, cancel the tool tip timer
                    // (which fades the tooltip out) and remove it.
                    // *This is placed before the mouseout/mouseover case
                    // as sometimes when the cursor moves to another very
                    // close element, the mouseover case is detected before
                    // the cursor moves off of the current element, which
                    // results in mouseout not being detected until after.
                    // Putting this in front of both, catches both types of
                    // events
                    if($('.tooltip-info').length) {

                        console.log('hide tooltip');

                        // Cancel the tool tip timer and remove it
                        clearInterval(toolTipTimer);
                        $('.tooltip-info').remove();
                    };

                    // If the toolTipDelay timer is running from a previous
                    // tooltip, cancel it and disable the mousemove listener
                    // (which positions the tooltip in the same location as the
                    // cursor).
                    // *As noted above, this in placed in front of both cases
                    // to ensure detected when appropriate
                    clearTimeout(toolTipDelay);
                    $element.off('mousemove');

                    // Determine the type of event
                    switch (eventRef.type) {
                        case 'mouseover':

                            // Remove the element's title to disable the native
                            // tooltips
                            $element.removeAttr('title');

                            // Add another event listener to the element that
                            // detects mouse movement.
                            // This updates the mouse's position so that when
                            // the tooltip is rendered, it is placed next to
                            // the cursor
                            $element.on('mousemove', function(e) {

                                // Save a new global ref to be passed as an
                                // argument
                                newEventRef = e;
                            });

                            // Determine the time to pass before displaying a
                            // tooltip.
                            // If it is for a hover element (i.e. a rollover
                            // icon that is displayed when hovering the cursor
                            // over the location frame on the  main page), it
                            // is slower.
                            if($element.hasClass("hover-tooltip-only")) {

                                // Set the time variable for hover elements
                                var time = 3000;
                            } else {

                                // Set the time variable for all other elements
                                var time = 2000;
                            };

                            // Delay invoking the tooltip renderer so that the
                            // tooltip does not appear immediately
                            toolTipDelay = setTimeout(function (){

                                console.log('show tooltip');

                                // Remove the listener added above, to avoid
                                // duplicates if this tooltip is invoked again
                                $element.off('mousemove');

                                // Show the element's tooltip
                                renderToolTips($titleText, newEventRef, $element);
                            }, time);

                        break;

                        case 'mouseleave':

                            // Re-add the element's previously saved title
                            $element.attr("title", $titleText);

                        break;

                        case 'click':

                            // If the tooltip is only meant to be displayed
                            // during a hover event, do not show the tooltip
                            // on click
                            if(!$element.hasClass("hover-tooltip-only")) {

                                console.log('show tooltip');

                                // Remove the element's title to disable the
                                // native tooltips
                                $element.removeAttr('title');

                                // Show the element's tooltip
                                renderToolTips($titleText, eventRef, $element);
                            };
                        break
                    };
                });
            };
        });

        // Render the element's tooltip
        function renderToolTips ($titleText, eventRef, $element) {

            // Save tooltip text elem and coordinates, mouse at time of click,
            // and padding between the cursor and the tooltip
            var tooltipText = '<p class="tooltip-info">' + $titleText + '</p>',
                paddingTop = 20,
                x = eventRef.pageX,
                y = eventRef.pageY + paddingTop;

            // Add the the tooltip's text to the page
            $body.append(tooltipText);

            // Cache a ref to the tooltip
            var $tooltip = $('.tooltip-info');

            // Position the tooltip at the coordinates provided above
            // The tooltip should appear 20px below the cursor
            $tooltip.offset({ top: y, left: x });

            // Cache refs to viewport width and get the point for the right
            // corner of the tooltip.
            // Also set a buffer of 20px from the edge of the screen
            var viewportWidth = window.innerWidth,
                viewportWidthBuffer = viewportWidth - 20,
                $tooltipX = $tooltip.offset().left,
                $tooltipWidth = $tooltip.outerWidth(),
                $tooltipRightCorner = $tooltipX + $tooltipWidth;

            // If the right corner of the tooltip falls within the viewport's
            // edge (within 20px), change the tooltips' width to 220.
            // This helps display tooltips properly in mobile view as the
            // elements tend to be very close to the edge of the screen.
            // Without a set width, the tooltip extends only as far as the edge
            // of the screen, which can result in compressed tooltips.
            // If this is the case, the tooltip is adjusted to a wider width.
            if($tooltipRightCorner >= viewportWidthBuffer) {

                // Adjust tooltip width
                $tooltip.outerWidth(220);

                // Reset the variables from above with the new width
                var $tooltipX = $tooltip.offset().left,
                    $tooltipWidth = $tooltip.outerWidth(),
                    $tooltipRightCorner = $tooltipX + $tooltipWidth;
            };

            // If the tooltip extends off of the screen (which will be the
            // case if the tooltip's width was already adjusted above), move
            // it back on screen by the number of px currently off screen plus
            // extra padding to keep it off of the edge of the screen.
            if ($tooltipRightCorner >= viewportWidth) {

                // Save the padding (to place between the tooltip and the edge
                // of the screen), the amount needed to adjust the tooltip's
                // position, and create a new position.
                var paddingRight = -20,
                    adjustX = $tooltipRightCorner - viewportWidth,
                    newX = (x - adjustX) + paddingRight;

                // Move the tooltip to its new position
                $tooltip.offset({ top: y, left: newX });
            };

            // Set a global ref to the time for displaying the tooltip
            // When the time runs out, remove the tooltip
            toolTipTimer = setTimeout(function() {

                // Remove the tooltip
                $tooltip.fadeOut(500, function () {

                    console.log('hide tooltip');

                    $tooltip.remove();
                });
            }, 2000);

            // Add listener to detect mouse movements over the element
            $element.on('mousemove', function () {

                // Remove the mousemove listener to avoid duplicates on element
                $element.off('mousemove');

                // If mouse moves, clear the other timer that closes the
                // the tooltip
                clearTimeout(toolTipTimer);

                // Determine time to pass before closing the tooltip
                // If it is for a hover element, it is faster
                if($element.hasClass("hover-tooltip-only")) {

                    // Set the time variable for hover elements
                    var time = 0;
                } else {

                    // Set the time variable for all other elements
                    var time = 500;
                };

                // Remove the tooltip
                $tooltip.fadeOut(time, function () {

                    console.log('hide tooltip');

                    $tooltip.remove();
                });
            });
        };
    };

    // Cache Google map's element titles that are usually shown in a native
    // tooltip when hovering over that element
    var googleElemTitles = ['Report errors in the road map or imagery to Google', 'Zoom in', 'Zoom out', 'Rotate map 90 degrees', 'Show satellite imagery', 'Change map style'];

    // Save refs to each marker's title
    var markerTitles = [];

    // Remove elem titles in order to disable native tooltips from appearing
    // in Google map
    self.removeTitle = function () {

        // Iterate over each available elem with a title
        $('[title]').each(function() {

            // Save a ref to the elem
            var $this = $(this);

            // If the elem's title matches a Google elem title, delete it
            if(googleElemTitles.indexOf($this.attr('title')) > -1) {

                $this.removeAttr('title');

            // If the elem's title matches a marker's title, delete it
            } else if (markerTitles.indexOf($this.attr('title')) > -1) {

                console.log('disable native marker tooltip');

                $this.removeAttr('title');
            };
        });
    };

    // Remove each Google map elem's title in order to prevent its native
    // tooltip from appearing
    self.removeGoogleElemTitles = function () {

        // Save the length of the Google elems titles array and set the
        // number of elem titles detected to zero
        var googleElemTitlesLength = googleElemTitles.length,
            googleTitleNum = 0;

        // Before removing Google's elem titles, ensure they have all loaded
        var checkElemsLoaded = setInterval(function() {

            // Iterate over each elem that has a title attribute
            $('[title]').each(function() {

                // Save a ref to each individual elem
                var $this = $(this);

                // If the elem matches any of the Google map elems' titles
                // count it
                if(googleElemTitles.indexOf($this.attr('title')) > -1) {

                    // Count the detected elem title
                    googleTitleNum++

                    // Once all of the Google elem titles have been loaded
                    // remove them
                    if(googleTitleNum === googleElemTitlesLength) {

                        clearInterval(checkElemsLoaded);

                        console.log('disable Google tooltips');

                        self.removeTitle();
                    };
                };
            });
        }, 500);
    };

    // Modifiy navbar to sticky navbar upon scrolling down
    // Save a ref to the navbar and its distance from the top of the screen
    var $navbar = $('#navbar-main'),
        $distance = $navbar.offset().top;

    // When scrolling, if the scroll position is greater than the navbar,
    // make the navbar 'sticky'.
    // If/when the scroll position returns to its original position, 'unstick'
    // it
    $window.scroll(function () {
        if($window.scrollTop() > $distance) {
            $navbar.addClass('navbar-fixed-top');
            $body.css("padding-top", "50px");
        } else {
            $navbar.removeClass('navbar-fixed-top');
            $body.css("padding-top", "0px");
        };
    });

    // Show an animated progress spinner on initial page load
    self.canvasLoader = function (id, shape, diameter, density, range, FPS) {

        var cl = new CanvasLoader(id);
        cl.setColor('#35ABBB'); // default is '#000000'
        cl.setShape(shape); // default is 'oval'
        cl.setDiameter(diameter); // default is 40
        cl.setDensity(density); // default is 40
        cl.setRange(range); // default is 1.3
        cl.setFPS(FPS); // default is 24
        cl.show(); // Hidden by default

        return cl;
    };

    // Show canvas loader at initial page load
    $('header').append('<div id="pageLoader"></div>');

    // Save ref to loader
    var $pageLoader = $('#pageLoader');

    // Load indicator
    var cl = self.canvasLoader('pageLoader', 'square', 117, 72, 1.1, 60);

    // Converts :hover CSS to :active CSS on mobile devices.
    // Otherwise, when tapping a button on a mobile device, the button stays in
    // the :hover state until the button is pressed.

    // Inspired by: https://gist.github.com/rcmachado/7303143
    // @author  Michael Vartan <michael@mvartan.com>
    // @version 1.0
    // @date 2014-12-20

    // Check if the device supports touch events
    if('ontouchstart' in document.documentElement) {

        console.log('device supports touch events');

        // Loop through each stylesheet
        for(var sheetI = document.styleSheets.length - 1; sheetI >= 0; sheetI--) {
            var sheet = document.styleSheets[sheetI];

            // Verify if cssRules exists in sheet
            if(sheet.cssRules) {

                // Loop through each rule in sheet
                for(var ruleI = sheet.cssRules.length - 1; ruleI >= 0; ruleI--) {

                    var rule = sheet.cssRules[ruleI];

                    // Verify rule has selector text
                    if(rule.selectorText) {

                    // Replace hover psuedo-class with active psuedo-class
                    rule.selectorText = rule.selectorText.replace(":hover", ":active");
                    };
                };
            };
        };
    };

    // In screen sizes greater than 767px horizontal scrolling is enabled
    // during map view using a plug in
    self.enableHorizontalScrolling = function () {

        // Remove any previous event handlers, so multiples of same handler
        // aren't added
        $locationGrid.off();

        // Create event for when mouse scroll wheel is activated
        $locationGrid.mousewheel(function(e, delta) {
            this.scrollLeft -= (delta * 1);
            e.preventDefault();
        });
    };

    // When the screen width crosses 768px, alter the layout of the page to
    // accommodate the appearence of a horizontal scroll bar for screen widths
    // >= 768px and reverse these effects when the screen width falls below
    // 768px
    self.manageLayout = function () {

        console.log('manage layout');

        // Cache DOM refs to key elements
        var $locationFrame = $('.location-frame'),
            $container = $('#container'),
            $favoriteSymbol = $('.favorite'),
            $breakName = $('.break-name'),
            $locationName = $('.location-name');

        // If the screen width signals a mobile, grid, or guide view, alter
        // the layout accordingly
        if(mobileView || gridView || guideView) {

            // Set the map to default
            $mapContainer.removeClass("map-container-map").addClass("map-container-default");

            // In the mobile view, set the map container away from 100%
            $mapContainer.css("height", "245px");

            // If map icon is selected, set the map to visible instead of
            // default display:none
            if($('.map-selected').length) {
                $mapContainer.show();
            };

            // Set the default classes for the elems below
            $searchContainer.removeClass("search-container-map").addClass("search-container-default");

            $searchForm.removeClass("search-form-map").addClass("search-form-default");

            $clearSymbol.removeClass("clear-map").addClass("clear-default");

            $clearFavsBtn.removeClass("clear-favorites-button-map").addClass("clear-favorites-button-default");

            $locationGrid.removeClass("location-grid-map");

            $locationFrame.removeClass("location-frame-map").addClass("location-frame-default");

            // Change the container away from Bootstrap's 'fluid' class
            $container.removeClass("container-fluid").addClass("container");

            // Remove Bootstrap's 'fluid' row
            $locationGrid.removeClass("row-fluid").addClass("row");

            // Re-add the Bootstrap div settings
            $locationFrame.addClass("col-xs-12 col-sm-6 col-md-4");

            // Change break name style back to default
            $breakName.removeClass("break-name-map").addClass("break-name-default");

            // Change location name style back to default
            $locationName.removeClass("location-name-map").addClass("location-name-default");

            // Change 'favorite' symbol style back to default *must change
            // via attr in order to change the class of an inline svg
            $favoriteSymbol.attr("class", "favorite favorite-default");

            // Remove any listeners attached to the location grid (horiz.
            // scroll)
            $locationGrid.off();

            // If the Google map and its locations have loaded, the frame
            // and marker managers aren't disabled, and the surf guide is
            // hidden, resize the map and set its bounds
            if(markers.length !== 0 && $map.is(":visible") && !guideView && !resizeInProgress) {

                console.log('map is visible');

                google.maps.event.trigger(map, 'resize');

                self.setMapBounds();

            // If the surf guide is open, reset the map size, then center the // map on the selected location's marker
            } else if (guideView && $map.is(":visible")) {

                // Center the map on the selected marker
                self.setMarkerForGuide();
            };

        // If the screen width is larger than a 'mobile' view and the map is
        // visible , alter the layout
        } else {

            console.log('update map view layout');

            // Change following elems to map style
            $mapContainer.removeClass("map-container-default").addClass("map-container-map");

            $searchContainer.addClass("search-container-map").removeClass("search-container-default");

            $searchForm.addClass("search-form-map").removeClass("search-form-default");

            $clearSymbol.addClass("clear-map").removeClass("clear-default");

            $clearFavsBtn.removeClass("clear-favorites-button-default").addClass("clear-favorites-button-map");

            $locationGrid.addClass("location-grid-map");

            // Change the container to Bootstrap's 'fluid' class
            $container.removeClass("container").addClass("container-fluid");

            // Add Bootstrap's 'fluid' class setting to the row
            $locationGrid.removeClass("row").addClass("row-fluid");

            // Reset location frame's elements if locations have loaded
            self.onLocationsArrayLoad(self.adjustFrameStyle);

            // Adjust the map height
            self.adjustMapSize();

            // Enable horizontal scrolling
            self.enableHorizontalScrolling();
        };
    };

    // Set intitial variables for map, grid, guide, and mobile views
    var mobileView,
        mapView,
        gridView,
        guideView;

    // Check the width of the screen
    self.manageView = function () {

        // Set refs to window width
        var $winWidth = window.innerWidth;

        // If the surf guide container is visible and the width is mobile,
        // set as surf guide/mobile view
        if($('.surf-guide-container').length && $winWidth < 768) {

            mapView = false;
            gridView = false;

            mobileView = true;
            guideView = true;

            console.log('view is surf guide/mobile');

        // If the surf guide is visible and the screen is greater than mobile
        // view, set only as surf guide
        } else if($('.surf-guide-container').length && $winWidth >= 768) {

            mapView = false;
            gridView = false;
            mobileView = false;

            guideView = true;

            console.log('view is surf guide');

        // If the screen width is the same size as mobile, set to mobile view
        } else if($winWidth < 768) {

            mapView = false;
            gridView = false;
            guideView = false;

            mobileView = true;

            console.log('view is mobile');

        // If none of the above, set to grid or map view
        } else {

            mobileView = false;
            guideView = false;

                // If map icon is selected, set view to map view
                if($('.map-selected').length) {

                    gridView = false;

                    mapView = true;
                    console.log('view is map');

                // If map icon isn't selected, set view to grid view
                } else {

                    mapView = false;

                    gridView = true;
                    console.log('view is grid');
                };
        };

        // Change the site's current layout depending on the above's outcome
        self.manageLayout();
    };

    // Check the width of the window on inital page load
    self.manageView();

    // Set variables for resizing the map
    var resizeTimer,
        resizeInProgress;

    // Whenever the window is resized, check the view (size of the window)
    // Also, disable the marker and frame managers. Not doing so will result
    // in a blank map and location grid.
    // This is because when resizing the window, the markers are temporarily
    // off screen, which would trigger the managers to reset the map bounds
    // based on 'visible' markers. Since the window is only being resized,
    // disabling the managers and map bounds settin until after the window has
    // been resized, allows the map to be resized with the original markers
    // put back into their original positions.
    // Once resizing has stopped, set the map bounds.
    $window.resize(function() {

        // Check the current view and update the page's styling
        self.manageView();

        console.log('resize window');

        // Only execute if the map is visible and not in guide view
        if($map.is(":visible") && !guideView) {

            // Disable the frame and marker managers
            resizeInProgress = true;

            console.log('disable frame and marker managers');

            // Clear the last time out and start new
            // Once resizing is stopped, the timer will be allowed to
            // fully count down to zero
            clearTimeout(resizeTimer);

            // When this timer reaches zero, the map's bounds are set
            // using the visible markers except during guide view
            // (*FYI if in guide view, the map will be centered on the selected
            // marker, which is executed in the toggle layout function)
            resizeTimer = setTimeout(function() {

                // Only execute if the map is in view and not in guide view
                // Double check it's the correct view just in case the view
                // has changed
                if ($map.is(":visible") && !guideView) {
                    google.maps.event.trigger(map, 'resize');
                    self.setMapBounds();
                };

                // enable the frame and marker managers
                resizeInProgress = false;

                console.log('enable frame and marker managers');

            }, 100);
        };
    });

    // Convert input text to lowercase, remove spaces, remove apostrophes, and
    // remove commas in order to compare like characters & store in a new var.
    // This is used for various funcs throughout the document
    self.formatText = function (text) {

        var formattedText = text.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "");

        return formattedText;
    };

    // self.Query is bound to the input on the View view Knockout. Because it // is an observable variable, it's value will be updated whenever the
    // input on the View is altered
    self.Query = ko.observable("");

    // Filter through the location elements and compare each one to the
    // search terms (value of self.Query). If there is a match, set it to
    // visible
    self.searchLocations = function () {

        // Cache the current formatted search query
        var search = self.formatText(self.Query());

        // Cache DOM reference to all location frames
        var $allLocationFrames = $('.location-frame');

        // Hide all location frames
        $allLocationFrames.hide();

        // Loop through all of the location frames
        $allLocationFrames.each(function() {

            // Cache the current location frame's reference and text (
            // this includes the break and location name)
            var $locationFrame = $(this),
                $locationFrameText = self.formatText($locationFrame.text());

            // If a specific location frame's text matches the search,
            // show it
            if($locationFrameText.indexOf(search) > -1) {

                $locationFrame.show();
            };
        });

        // Compare each marker's title, which holds the break and location
        // name, to the search terms. If it matches, set the marker as visible.
        // If not, hide it
        markers.forEach(function(marker) {

            // Format the marker title and see if the search matches any
            // elements within the it
            if (self.formatText(marker.title).indexOf(search) > -1) {

                marker.setVisible(true);
            } else {
                marker.setVisible(false);
            };
        });

        // If the map is visible, set the map bounds after a search is made
        if ($map.is(":visible")) {

            self.setMapBounds();
        };

        // On each search new versions of the location frames are added. If the
        // map is visible, the layout must be adjusted
        if($mapContainer.is(":visible")) {

            // Update layout
            self.manageLayout();
        };
    };

    // Load jQuery-UI auto complete plug in for search field
    // **Note: Not loaded until the search keywords array is loaded
    self.loadAutoComplete = function () {

        // Set variable for blurring on 'enter' key
        var blurOnEnter = true;

        // Call the jQuery-UI auto complete widget
        $searchForm.autocomplete({

            // All keywords come from the search keywords array
            source: self.searchKeywords,

            // Highlight the pop-up menu item that matches what is currently in
            // the search input field
            autoFocus: true,

            // A search must be at least two characters long before the pop-up
            // window shows
            minLength: 2,

            // Delay the pop-up window from displaying for (x) milliseconds
            delay: 0,

            // When a selection has been made, change the ko variable that
            // represents the search and then activate the search filtering
            // below
            select: function (event, ui) {

                console.log('select suggested location');

                // Set blur on 'enter' key to false
                blurOnEnter = false;

                // Change the query to the selected location
                self.Query(ui.item.value);

                // Call the search function to initiate a search with the
                // selected menu item
                self.searchLocations();

                // Remove focus from search field after selection is made
                $(this).blur();

                // Set blur on 'enter' key to true
                blurOnEnter = true;
            }
        });

        // Add listener to search form to listen for 'enter' key
        // Normally, jQuery ui's autocomplete plugin will blur the field, but
        // that's only when an item as been selected from the autocomplete
        // menu. This fixes the problem.
        $searchForm.on("keydown", function(e) {

            // Blur if 'enter' is pressed
            if(e.keyCode === 13 && blurOnEnter) {
                $(this).blur();
            };
        });

    };

    // Check if search keywords have loaded
    // When they are loaded, load the auto complete listener
    if(self.searchKeywords.length > 1) {

        self.loadAutoComplete();
    } else {

        var interval = setInterval(function() {

            if(self.searchKeywords.length > 1) {
                clearInterval(interval);
                self.loadAutoComplete();
            };
        }, 500);
    };

    // Toggle the search container in and out of view
    self.toggleSearch = function () {

        console.log('toggle search');

        // Reset the page upon showing/hiding the search container
        self.resetPage();

        // Make the search container visible or hidden
        // Hide the clear search symbol each time the search container is
        // hidden
        // If in map view, fade in/out the search container
        if(mapView) {

            if($searchContainer.is(":hidden")) {
                $searchContainer.fadeIn(200);
            } else {
                $searchContainer.fadeOut(200);
                $clearSymbol.hide();
            };

        // If in guide view the guide is closed due to the reset page function
        // above.
        // Show the search container for either the grid or map view
        } else if (guideView) {
                $searchContainer.show();

        // For grid and mobile views, slide in/out the search container and
        // hide the clear search symbol each time it is hidden/displayed
        } else {
            if($searchContainer.is(":hidden")) {
                $searchContainer.slideDown(200);
            } else {
                $searchContainer.slideUp(200);
                $clearSymbol.hide();
            };
        };

        // If the search container is visible, focus on search form and
        // change class to indicate search is selected
        if($('.search-default').length) {

            // Delay focusing on the search field until the search container
            // is fully visible
            setTimeout(function() {
                $searchForm.focus();
            }, 300);

            // Indicate that the search field is open
            $searchSymbol.removeClass("search-default").addClass("search-selected");

        // If search container is not visible, change the class to indicate
        // that search is not selected.
        } else {

            // Indicate that the search field isn't open
            $searchSymbol.removeClass("search-selected").addClass("search-default");
        };
    };

    // When the search symbol is clicked, the search field is displayed with
    // sliding animation
    $searchSymbol.on("click", function () {

        // Sometimes the filters container is toggled by pressing the
        // search button. If the favorites are in view at the time of pressing
        // the search button, the filters container is hidden and the favorite
        // filter symbol is 'deselected'
        if($('.favorite-filter-selected').length) {

            // Hide the filters container
            $filtersContainer.slideUp(200);

            console.log('hide filters container and favorites');

            // Add remove relevant classes
            $favFilterSym.removeClass("favorite-filter-selected").addClass("favorite-filter-default");
        };

        // Enable toggling of the search container if the user's scroll
        // position is at the top of the page. If the user's scroll position is
        // below this, only enable toggling of the search container if the
        // search container is not already visible. If the search container is // visible, instead of hiding it, the search form is brought into
        // focus so the user can make further searches
        if($window.scrollTop() < 56 || $window.scrollTop() >= 56 && $searchContainer.is(":hidden")) {

            // Scroll to top of the page
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // Show/hide the search container
            self.toggleSearch();

        } else {
            $searchForm.focus();
        };
    });

    // When text is entered into the search form, show the clear search symbol
    $searchForm.on("keydown", function() {
        $clearSymbol.show();

    // If the search field is blurred and there is no text entered in the form
    // hide the clear search symbol
    }).on("blur", function() {
        if(!$searchForm.val()) {
            $clearSymbol.hide();
        };
    });

    // If the clear search symbol is clicked, reset the page and hide it
    $clearSymbol.on("click", function() {
        self.resetPage();
        $clearSymbol.hide();
        $searchForm.focus();
    });

    // Display only favorites from the locations array
    self.filterFavorites = function () {

        // If map is in view do not execute. This task is already performed
        // in the manageFrames function for the map view
        // If not in map view, execute this function
        if($map.is(":hidden")) {

            // Cache DOM reference to all location frames
            var $allLocationFrames = $('.location-frame');

            // Hide all location frames
            $allLocationFrames.hide();

            // Loop through all of the location frames
            $allLocationFrames.each(function() {

                // Cache the current location frame's reference and break name
                var $locationFrame = $(this),
                    $breakName = $locationFrame.children(":nth-child(2)").text();

                // If a location frame's break name match's one of the user's
                // favorites, show it
                if(userFavorites.indexOf($breakName) > -1) {

                    $locationFrame.show();
                };
            });
        };

        // Close any open info windows
        infoWindow.close();

        // Find last selected marker and it small again
        self.makeMarkerSmall();

        // Iterate through the markers array and update the map markers
        // with any matching locations to the user's favorites
        markers.forEach(function(marker) {

            // Shorten the marker title to just the break name
            var markerTitle = getMarkerName(marker);

            if (userFavorites.indexOf(markerTitle) > -1) {
                marker.setVisible(true);
            } else {
                marker.setVisible(false);
            };
        });

        console.log('update map with favorites');

        // Set map bounds
        if ($map.is(":visible")) {

            // Set the map bounds & map position
            self.setMapBounds();
        };
    };

    // Bind click event to the 'favorite' icon on the navbar
    $favFilterSym.on( "click", function() {

            // If favorites are already visible close the filters container
            // and show all locations
            if($('.favorite-filter-selected').length) {

                console.log("show all locations");

                // Hide the filters container
                // If the map is visible, fade out the filters container
                // If it isn't visible, slide the filters container up
                if($('.map-container-map').length) {
                    $filtersContainer.fadeOut(200);
                } else {
                    $filtersContainer.slideUp(200);
                };

                // Add & remove relevant classes
                $favFilterSym.removeClass("favorite-filter-selected").addClass("favorite-filter-default");

                // Reset the locations etc.
                self.resetPage();

            // If the favorites are not visible, show them only if the user
            // has favorites in the user favorites array
            } else if (!$('.favorite-filter-selected').length && userFavorites.length > 0) {

                console.log("show favorites only");

                // If the search container is visible, hide it
                if($searchContainer.is(":visible")) {
                    self.toggleSearch();
                };

                // If the surf guide is open, close it
                if(guideView) {
                    self.closeSurfGuide();
                };

                // Add & remove relevant classes
                $favFilterSym.removeClass("favorite-filter-default").addClass("favorite-filter-selected");

                // If the map and search container are visible, adjust the
                // layout after the search container has been toggled. Toggling
                // the layout before the search container has been toggled
                // results in a styling error. Toggling the layout after the
                // search container has completely disappeared, adjusts the
                // layout appropriately
                // Also, filter favorites after the search container
                // has been toggled and before adjusting the layout. Filtering
                // the favorites before results in a flash of unstyled
                // content
                if($map.is(":visible") && $searchContainer.is(":visible")) {

                    // Toggle the layout after the search container is hidden
                    var timer = setTimeout( function () {

                        // Filter the locations to find favorites
                        self.filterFavorites();

                        // Adjust the layout
                        self.manageLayout();

                    }, 300);

                } else {

                        // Filter the locations to find favorites
                        self.filterFavorites();

                        // Adjust the layout
                        self.manageLayout();
                };

                // Show the filters container
                // If the map is visible, fade in the filters container
                // If it isn't visible, slide the filters container down
                if($map.is(":visible")) {
                    $filtersContainer.fadeIn(200);
                } else {
                    $filtersContainer.slideDown(200);
                };

            // If the user has no favorites, simply return the function
            } else {
                console.log('user has no favorites');
                return
            };

            // Scroll to the top of the page only if 'map view' not enabled
            if(!$('.map-container-map').length) {

                // Scroll to top of the page
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            };
    });

    // Bind click event to clear favorites button
    // When button is clicked, hide the filters container, remove/add
    // the necessary classes, delete the user's favorites and reset the
    // page (closes surf guide)
    $clearFavsBtn.on( "click", function () {

        // Hide the filters container
        // If the map is visible, fade only the button out
        // If it isn't visible, slide the filters container up
        if($('.map-container-map').length) {
            $filtersContainer.fadeOut(200);
        } else {
            $filtersContainer.slideUp(200);
        };

        // Add/remove the classes
        $favFilterSym.removeClass("favorite-filter-selected").addClass("favorite-filter-default");

        // Clear the user's favorites
        self.removeAllFavorites();

        // Close the surf guide and reset the page
        self.resetPage();
    });

    // When the map symbol is clicked, hide or show the map
    $mapSymbol.on('click', function(e) {

        // Remove page loader if it is visible
        if($pageLoader.is(":visible")) {
            $pageLoader.remove();
        };

        // Cache refs to DOM
        var $topOfWindow = $window.scrollTop(),
            $bottomOfMap = $mapSection.height(),
            $locationFrames = $('.location-frame'),
            $numLocations = $('.location-frame:visible').length;

        // If clicking the button from map view, close the map and show the
        // grid view of the location frames
        if(mapView) {

            // Select/deselect the map symbol
            $mapSymbol.toggleClass("map-default map-selected");

            // Hide the map immediately
            // When view is checked the map bounds won't be set
            // Map must be hidden immediately to avoid this
            $map.hide();

            // Update the layout (do this after toggling the map symbol)
            // because 'manageView' uses it to determine if map view is
            // enabled
            self.manageView();

            // After checking view, map container is set back to default
            // Default is display:none, which means the slide toggle below
            // will have the opposite effect (it will reopen the map) unless
            // the map is reshown beforehand
            $mapContainer.show();

            // Show relevant loc frames after the map is closed
            // Also set all of the relevant markers to visible
            self.resetFrames();
            self.resetMarkers();

            // Close the map container. Once fully closed, make all markers
            // small & close any open info windows
            $mapContainer.slideToggle(200, function() {

                console.log('close map');

                console.log('close any open info windows');

                infoWindow.close();

                self.makeMarkerSmall();
            });

        // If clicking the button from grid view, close the grid and show the // map view of the locations
        } else if(gridView) {

            // Scroll to top of the page
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // Select/deselect the map symbol
            $mapSymbol.toggleClass("map-default map-selected");

            // Show the map immediately if it was hidden in map view
            if($map.is(":hidden")) {
                $map.show();
            };

            // Update the layout (do this after toggling the map symbol)
            // because 'manageView' uses it to determine if map view is
            // enabled
            self.manageView();

            console.log('open map');

            // Delete Google elem titles to avoid native tooltips from showing
            self.removeGoogleElemTitles();

            // Add custom listener to detect zoom in/out events initiated from
            // map controls (+/-)
            self.addMapZoomListener();

            // Opens the map view by slowly fading into view
            $mapContainer.fadeIn(1000);

            console.log('resize map');

            // Resize the map immediately after it begins to fade in
            // Sometimes the window size is toggled while the map is hidden
            // Or the map size may change between different views
            // This resizes the map to adjust to the window's new dimensions
            google.maps.event.trigger(map, 'resize');

            // Set the map bounds after map size has been adjusted
            self.setMapBounds();

        // The guide view toggling of the map handles both opening and closing
        // the map
        } else if (guideView && !mobileView) {

            // Scroll to top of the page
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // Select/deselect the map symbol
            $mapSymbol.toggleClass("map-default map-selected");

            // Show the map immediately if it was hidden in map view
            if($map.is(":hidden")) {
                $map.show();
            };

            // Toggle the map
            $mapContainer.slideToggle(200, function() {
                if($map.is(":visible")) {

                    console.log('open map');

                    // Delete Google elem titles to avoid native tooltips from
                    // showing
                    self.removeGoogleElemTitles();

                    // Add custom listener to detect zoom in/out events
                    // initiated from map controls (+/-)
                    self.addMapZoomListener();

                    // Center the map over the selected marker
                    self.setMarkerForGuide();

                } else {

                    console.log('close map');};
            });

        // The mobile view toggling of the map view handles both opening
        // and closing of the map.
        // ** If the user's scroll position is above the
        // bottom of the map container, map toggling is enabled.
        // ** If the user's scroll position is below this, only enable
        // toggling of the map if it's not already visible.
        // ** If it is visible, instead of hiding it, the window is scrolled
        // to the top of the page so the user can make use of the map
        } else if (mobileView && $topOfWindow < $bottomOfMap || $topOfWindow >= $bottomOfMap && $mapContainer.is(":hidden")) {

            // Scroll to top of the page
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // Select/deselect the map symbol
            $mapSymbol.toggleClass("map-default map-selected");

            // Show the map immediately if it was hidden in map view
            if($map.is(":hidden")) {
                $map.show();
            };

            // Toggle the map.
            $mapContainer.slideToggle(200, function() {
                if($map.is(":visible")) {

                    console.log('open map');

                    // Delete Google elem titles to avoid native tooltips from
                    // showing
                    self.removeGoogleElemTitles();

                    // Add custom listener to detect zoom in/out events
                    // initiated from map controls (+/-)
                    self.addMapZoomListener();

                    // When map is open and surf guide is visible:
                    if(guideView) {

                        // Center the map over the selected marker
                        self.setMarkerForGuide();

                    // When map is opened and the surf guide is hidden:
                    } else {

                        console.log('resize map');

                        // Resize map and set bounds to adapt to window size
                        google.maps.event.trigger(map, 'resize');
                        self.setMapBounds();
                    };

                // When map is closed and surf guide is visible/hidden:
                } else {

                    // Show all of the relevant location frames after the map
                    // is closed
                    // Also set all of the relevant markers to visible
                    self.resetFrames();
                    self.resetMarkers();

                    console.log('close map');

                    // If not in guide view, close any open info
                    // windows and make any big markers small
                    if(!guideView) {

                        console.log('close any open info windows');

                        infoWindow.close();

                        self.makeMarkerSmall();
                    };
                };
            });
        } else {

            console.log('scroll to map');

            // Scroll to top of the page if the map is already open in
            // mobile view
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        };
    });

    // Reset the the page
    self.resetPage = function () {

        console.log('reset locations & map, clear search, and close surf guide');

        // If the surf guide is open, close it
        if(guideView) {
            self.closeSurfGuide();
        };

        // Clear search field
        $searchForm.val("");

        // Clear any searches
        self.Query("");

        // Close open info windows
        infoWindow.close();

        // Find last selected marker and make pin small again
        self.makeMarkerSmall();

        var $allLocationFrames = $('.location-frame');

        $allLocationFrames.show();

        // If the location grid is hidden, show it
        if($locationGrid.is(":hidden")) {
            // Show the locations
            $locationGrid.show();
        };

        // On each reset, new versions of the location frames are added, so
        // the view must be checked in case layout needs adjusting
        self.manageView();

        // Make all map markers visible
        markers.forEach(function(marker) {
              marker.setVisible(true);
        });

        // If the map is visible, reset the bounds
        if (!$map.is(":hidden")) {

            // Set the map bounds & map position
            self.setMapBounds();
        };
    };

    // Set variables for wind/swell compasses
    var wind, swell;

    // Display detailed information about the location
    self.renderSurfGuide = function (obj) {

        // Scroll to top of the page
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        // Remove any existing information from previous click
        $surfInfoContainer.children(":nth-child(1)").remove();

        // Add surf guide container
        $surfInfoContainer.append('<div class="row surf-guide-container"></div>');

        // Save a ref to the surf guide container
        var $surfGuideContainer = $('.surf-guide-container');

        // Render the name and location of the break at the top of the guide
        var surfGuideHeaderElem = displayTitle(obj.breakName, obj.location);
        $surfGuideContainer.append(surfGuideHeaderElem);
        var $surfGuideHeader = $surfGuideContainer.children(":nth-child(1)");

        // Add the 'favorite' icon to the beginning of the location name
        var favoriteIcon = displayFavoriteIcon(obj.breakName);
        $surfGuideHeader.children(":nth-child(1)").prepend(favoriteIcon);
        addFavoriteListener(obj.breakName);

        // Create a frame to hold the icon container
        $surfGuideContainer.append('<div class="col-xs-12 icon-frame"></div>');

        // Save ref to it
        var $iconFrame = $('.icon-frame');

        // Create a container to hold all icons
        $iconFrame.append('<div class="xs-icon-container sm-icon-container icon-container"></div>');

        // Save a ref to it
        var $iconContainer = $('.icon-container');

        // Check if break has big waves and render
        displayBigWaveIcon(obj, $iconContainer);

        // Check if break is well known and render
        displayWellKnownIcon(obj, $iconContainer);

        // Display icon associated with the skill level
        // needed to surf the break
        var skillLevelIcon = displaySkillIcon(obj.skillLevel);
        $iconContainer.append(skillLevelIcon);

        // Display the icon associated with the direction
        // the wave breaks
        var directionIcon = displayDirectionIcon(obj.waveDirection);
        $iconContainer.append(directionIcon);

        // Display the icon for the break details
        var breakIcon = displayBreakIcon(obj.breakDetails);
        $iconContainer.append(breakIcon);

        // Display the icon for the average wave height
        var waveSizeIcon = displayWaveSize(obj.avgSize);
        $iconContainer.append(waveSizeIcon);

        // Set canvas size for guide compass and suggested attire icons
        var canvasWidth = 100;
        var canvasHeight = 100;

        // Render the optimal swell/wind compass
        displayCompassIcon(obj.optimalSwell, obj.optimalWind, $iconContainer, canvasWidth, canvasHeight);

        // Display icon associated with the optimal tide
        var tideIcon = displayTideIcon(obj.optimalTide);
        $iconContainer.append(tideIcon);

        // Display icon associated with the season with the best conditions
        var bestSeasonIcon = displayBestSeasonIcon(obj.optimalTime);
        $iconContainer.append(bestSeasonIcon);

        // Display icon associated for the suggested water attire for each
        // season
        displaySuggestedAttireIcons(obj.avgWaterTemp, $iconContainer);

        // Display icon associated with the break's climate
        var climateIcon = displayClimateIcon(obj.climate);
        $iconContainer.append(climateIcon);

        // Display the icon associcated with average local costs
        var costIcon = displayCost(obj.cost, $iconContainer);
        $iconContainer.append(costIcon);

        // Check if current location is available, if it is
        // render the distance icon
        if(typeof currentLat !== 'undefined') {

            var distanceIcon = displayDistance(obj.lat, obj.lng);
            $iconContainer.append(distanceIcon);
        };

        // Display an icon for each hazard one might encounter at the break
        displayHazardIcons(obj.hazards, $iconContainer);

        // Add class to newly created divs
        $('.card').addClass('col-xs-4 col-sm-3');

        // Render buttons for guide
        addGuideButtons(obj);

        console.log('add surf guide tooltips');

        // Add tooltips & listeners for each icon
        // When clicked, text descriptions for the icon appear/disappear
        self.addToolTips();

        // Create buttons for opening closing surf guide / view current break
        // conditions
        function addGuideButtons (obj) {

            // Add a button for closing the surf guide
            $surfGuideContainer.prepend('<button type="button" class="btn guide-close-button">✖</button>');

            // Save ref to it
            var $closeGuideBtn = $('.guide-close-button');

            // Add a button for displaying surf conditions
            $surfGuideHeader.append('<button type="button" class="btn conditions-button">Current Conditions</button>');

            // Save global ref to conditions btn
            $conditionsBtn = $('.conditions-button');

            // When the surf conditions button is clicked, display current
            // conditions
            $conditionsBtn.on('click', function(e) {

                // If surf conditions for a particular location have already
                // been displayed, simply make visible again
                if ($('.live-surf-conditions').is(":hidden")) {

                    // Change icon-frame/container size to accomodate live info
                    $iconFrame.addClass('col-sm-6 sm-icon-frame');
                    $iconContainer.addClass('md-icon-container');

                    // Showlive conditions
                    $('.live-surf-conditions').show();

                    // Hide the surf conditions button
                    $conditionsBtn.toggle();

                    // Show the close conditions button
                    $closeConditionsButton.toggle();

                // If surf conditions aren't already cached request new data
                } else {

                        // Hide the surf conditions button
                        $conditionsBtn.toggle();

                        // Check if conditions loader was already loaded, if // not create its container
                        if(!$('#conditionsLoader').length) {

                            // Insert container to hold indicator
                            $surfGuideHeader.append('<div id="conditionsLoader"></div>');
                        };

                        // Save global ref to conditions loader
                        $conditionsLoader = $('#conditionsLoader');

                        // Load conditions loader
                        var cl = self.canvasLoader('conditionsLoader', 'spiral', 72, 33, 1, 23);

                        // Pass info to API function and initiate request
                        getMagicSeaweed(obj.spotID, obj.breakName);
                };
            });

            // When the close surf guide button is clicked the surf guide is
            // removed
            $closeGuideBtn.on('click', function(e) {

                if($('.favorite-filter-selected').length) {

                    // Show the filters container
                    $filtersContainer.toggle();
                    self.filterFavorites();
                };

                self.closeSurfGuide();
            });
        };

        // If the star in the surf guide is clicked, the location is added/
        // deleted from the user's favorites
        function addFavoriteListener (breakName) {

            $('.favorite-wrapper-guide').on("click", function () {

                var $this = $(this);

                // If the location is a favorite, remove it from favorites on
                // click
                if($('.is-a-favorite-guide').length) {

                    // Toggle the necessary classes
                    $this.removeClass("is-a-favorite-guide").addClass("not-a-favorite-guide");

                    console.log("unfavorite " + breakName);

                    // Update user favorites
                    removeFavorite(breakName);

                // If the location isn't a favorite, add it to favorites on
                // click
                } else {

                    // Toggle the necessary classes
                    $this.removeClass("not-a-favorite-guide").addClass("is-a-favorite-guide");

                    console.log("favorite " + breakName);

                    // Update user favorites
                    addFavorite(breakName);
                };
            });
        };

        // Get api data from magic seaweed
        function getMagicSeaweed (spotID, breakName) {

            console.log('get current conditions');

            // Save the name of the current surf guide
            var $currentSurfGuide = $("#guide-break-name").text();

            // Check for the location's spot ID (unique identifier for the
            // break location provided by MSW and stored in model data).
            // If there is no spot ID, immediately display an error message.
            // This also prevents an API request from going through for a non-
            // existing location
            if(spotID === 'none') {

                // Disable progress indicator by removing it
                $conditionsLoader.remove();
                showError();

            } else {

                // If the location object passes the above filter (has a
                // location ID), but times out (no api data is returned), show
                // an error message
                var msRequestTimeout = setTimeout (function() {

                    // Disable progress indicator by removing it
                    $conditionsLoader.remove();
                    showError();

                }, 8000);

                // Load Magic Seaweed API data
                var msUrl = 'http://magicseaweed.com/api/d2983e394d07724e96404fba11c10485/forecast/?spot_id=' + spotID + '&units=us&fields=timestamp,fadedRating,solidRating,swell.minBreakingHeight,swell.maxBreakingHeight,swell.components.primary.*,wind.*,condition.*';

                // Make an ajax request for the location's data from MSW
                $.ajax({
                    url: msUrl,
                    dataType: 'jsonp',
                    success: function(response) {

                        console.log('MSW api request successful');

                        // Get current time & current time plus/minus three
                        // hours
                        var getTime = Date.now();
                        var currentTimeSecs = getTime / 1000;
                        var backThreeHours = currentTimeSecs - 10800;
                        var forwardThreeHours = currentTimeSecs + 10800;

                        // Iterate through forecast objects to get the last
                        // recorded weather data (i.e. within the last 3 hours)
                        var responseLength = response.length;

                        for (var i = responseLength; i--;) {

                            // Save the data element's time
                            var forecastTime = response[i].timestamp;

                            // If the element's time is within the past three
                            // hours, save it
                            if (forecastTime < currentTimeSecs && forecastTime > backThreeHours) {

                                // Save forecast for parsing other information
                                // in a variable
                                var forecastData = response[i];

                            // If there is no data available from within the
                            // previous three hours, get the nearest forecast
                            // up to within 3 hours in the future
                            } else if (forecastTime > currentTimeSecs && forecastTime < forwardThreeHours) {

                                // Save forecast for parsing other information
                                // in a variable
                                var forecastData = response[i];
                            };
                        };

                        // Show forecast in the View
                        renderSurfConditions(forecastData);

                        // Disable error message
                        clearTimeout(msRequestTimeout);

                        // Disable progress indicator by removing it
                        $conditionsLoader.remove();
                    }
                });
            };

            // Display surf conditions in the surf guide
            function renderSurfConditions(forecastData) {

                // Before rendering the surf conditions, check which surf
                // guide is currently open and make sure it matches the API
                // request and that there isn't an error already displayed.
                // This ensures that an api request that takes time to
                // download isn't injected into another surf guide if the user // changes surf guides during the api request processing
                if ($currentSurfGuide === breakName && !$('.conditions-error').length) {

                    // Save wave break height
                    var minBreakHeight = forecastData.swell.minBreakingHeight,maxBreakHeight = forecastData.swell.maxBreakingHeight;

                    // If the min and max are the same, just save the min
                    // height
                    if (minBreakHeight === maxBreakHeight) {
                        var waveHeight = minBreakHeight;

                    // If the min and max are different, save both as a range
                    } else {
                        var waveHeight = minBreakHeight + ' ' + '-' + ' ' + maxBreakHeight;
                    };

                    // Get and save swell height, direction, period
                    var swellHeight = forecastData.swell.components.primary.height,
                        swellPeriod = forecastData.swell.components.primary.period,
                        direction = forecastData.swell.components.primary.direction,
                        swellCompassDirection = forecastData.swell.components.primary.compassDirection;

                    // Get and sav wind speed and direction
                    var windSpeed = forecastData.wind.speed,
                        windDirection = forecastData.wind.direction,
                        compassDirection = forecastData.wind.compassDirection;

                    // Get and save current temperature and weather
                    var temperature = forecastData.condition.temperature,
                        weather = forecastData.condition.weather,
                        weatherImg = 'http://cdnimages.magicseaweed.com/30x30/' + weather + '.png'

                    // Create an array to save the surf conditions ratings
                    rating = [];

                    // Add solid stars to the array equal to number value
                    // retrieved from MSW
                    var solidRatingLength = forecastData.solidRating,
                        solidStar = '<svg class="rating"><use xlink:href="#star_filled"/></svg>';

                    for (var i = solidRatingLength; i--;) {
                        rating.push(solidStar);
                    };

                    // Add faded stars to the array equal to number value
                    // retrieved from MSW
                    var fadedRatingLength = forecastData.fadedRating,
                        fadedStar = '<svg class="rating"><use xlink:href="#star_faded"/></svg>';

                    for (var i = fadedRatingLength; i--;) {
                        rating.push(fadedStar);
                    };

                    // Add empty stars to the array equal 5 minus the total
                    // amount of filled and faded stars
                    var fillEmptyStars = 5 - rating.length,
                        emptyStar = '<svg class="rating"><use xlink:href="#star_empty"/></svg>';

                    for (var i = fillEmptyStars; i--;) {
                        rating.push(emptyStar);
                    };

                    // Combine the array into one line of stars to form the
                    // overall rating of both the surfing conditions and wave
                    // quality
                    var waveRating = rating.join("");

                    // Render containers to hold the compass and live
                    // conditions containers
                    var liveConditionsElem = '<div class="col-xs-12 surf-conditions-container live-surf-conditions"></div>',
                        compassContainer = '<div class="col-xs-12 col-sm-4 col-md-6 live-surf-conditions live-compass" title="Live wind & swell conditions (swell: blue | wind: white)"><canvas id="compass" width="300" height="300"></canvas></div>';

                    // Add compass container
                    $surfGuideHeader.after(compassContainer);

                    // Change icon-frame size to accomodate compass container
                    $iconFrame.addClass('col-sm-6 sm-icon-frame');

                    // Move icon container left
                    $iconContainer.addClass('md-icon-container');

                    // Add container to hold live conditions
                    $surfGuideHeader.after(liveConditionsElem);

                    // Create a live conditions containers for holding surf
                    // conditions data
                    var $surfConditionsContainer = $('.surf-conditions-container'),
                        waveStatsContainer = '<div class="col-xs-12 col-sm-6 surf-conditions-small surf-conditions-waves"></div>',
                        swellStatsContainer = '<div class="col-xs-6 col-sm-3 surf-conditions-small surf-conditions-swell"></div>',
                        windStatsContainer = '<div class="col-xs-6 col-sm-3 surf-conditions-small surf-conditions-wind " title="Wind direction & speed"></div>';

                    // Add live conditions containers
                    $surfConditionsContainer.append(waveStatsContainer);
                    $surfConditionsContainer.append(swellStatsContainer);
                    $surfConditionsContainer.append(windStatsContainer);

                    // Create DOM ref to surf guide title and make elements for
                    // live temperature and MSW banner (clicking the banner
                    // links to MSW's homepage)
                    var $locationName = $('.title'),
                        liveTemp = '<p class="live-temp live-surf-conditions " title="Live weather conditions">' + temperature + " ℉" + '<img class="live-weather" src="' + weatherImg + '" alt="Symbol for current weather">' + '</p>',
                        accreditMSW = '<a href="http://magicseaweed.com" target="_blank"><div class="icon icon-msw_powered_by live-surf-conditions msw-banner"></div></a>';

                    // Render MSW banner
                    $locationName.after(accreditMSW);

                    // Render the temperature and weather image in the surf
                    // guide
                    $locationName.after(liveTemp);

                    // Cache references to each container
                    var $surfConditionsWind = $('.surf-conditions-wind'),
                        $surfConditionsSwell = $('.surf-conditions-swell'),
                        $surfConditionsWaves = $('.surf-conditions-waves');

                    // Create wind elems for live wind conditions
                    var windSpeedInfo = '<p>' + windSpeed + "mph" + '</p>',
                        windIcon = '<svg  alt="Symbol for wind"><use xlink:href="#wind"/></svg>',
                        cardinalDirection = '<p>' + compassDirection + " " + "wind" + '</p>';

                    // Render the wind speed, direction, and wind image in the
                    // right side of the conditions window
                    $surfConditionsWind.append(windSpeedInfo);
                    $surfConditionsWind.append(windIcon);
                    $surfConditionsWind.append(cardinalDirection);

                    // Create swell elems for live swell conditions
                    var swellHeightInfo = '<p>' + swellHeight + "ft" + '</p>',
                        primarySwellInfo = '<p class=" " title="The main swell generating waves">' + "primary" + '</p>',
                        swellPeriodInfo = '<p class=" " title="Live period between waves & current direction">' + "@" + ' ' + swellPeriod + 's' + ' ' + swellCompassDirection + '</p>';

                    // Render the swell elems in the center of the conditions
                    // window
                    $surfConditionsSwell.append(swellHeightInfo);
                    $surfConditionsSwell.append(primarySwellInfo);
                    $surfConditionsSwell.append(swellPeriodInfo);

                    // Create wave hight and rating elems
                    var waveHeightInfo = '<p class="live-wave-height " title="Live wave height">' + waveHeight + "ft" + '</p>',
                        waveRatingInfo = '<p class="star-rating " title="Magic Seaweed Rating: The more solid stars, the better. Unfavorable wind conditions change a solid star to a faded star">' + waveRating + '</p>';

                    // Render the breaking wave height, and wave rating from
                    // above in the left side of the conditions window
                    $surfConditionsWaves.append(waveHeightInfo);
                    $surfConditionsWaves.append(waveRatingInfo);

                    // Render live swell and wind compass
                    renderLiveCompass();

                    function renderLiveCompass () {

                        // Create and save a reference to the canvas
                        var Canvas = document.getElementById('compass'),
                            ctx = Canvas.getContext('2d');

                        // Create a new image source from the css sprite sheet
                        // and draw the compass once it's loaded
                        var sprites = new Image();
                        sprites.src = spriteSheet;
                        sprites.onload = draw;

                        // Using the direction value (degrees), set the amount
                        // of rotation needed on the compass before rendering
                        // the wind/swell icons
                        var windCompassRotation = windDirection * (Math.PI / 180),
                            swellCompassRotation = direction * (Math.PI / 180);

                        // Set common sprite sheet cooridinates for both the
                        // swell and wind icons
                        var srcW = 308,     // source width
                            srcH = 308,     // source height
                            destW = 300,    // destination width
                            destH = 300;    // destination height

                        // Draw the compass. Icon paramenters are as follows:
                        // (img,srcX,srcY,srcW,srcH,destX,destY,destW,destH)
                        function draw() {

                            // Draw the compass icon as a background first and
                            // then save it
                            ctx.drawImage(sprites, 0, 1177, srcW, srcH, 0, 0, destW, destH);
                            ctx.save();

                            // Traverse to the center of the canvas and then
                            ctx.translate(150, 150);

                            // Rotate it by the degrees specified for the wind
                            // direction
                            ctx.rotate(windCompassRotation);

                            // Draw the wind icon
                            ctx.drawImage(sprites, 0, 561, srcW, srcH, -150, -150, destW, destH);

                            // Rotate the canvas back to its original position
                            ctx.rotate(-windCompassRotation);

                            // Rotate the canvas by the degrees specified for
                            // the swell direction
                            ctx.rotate(swellCompassRotation);

                            // Draw the swell icon
                            ctx.drawImage(sprites, 0, 869, srcW, srcH, -150, -150, destW, destH);

                            // Show the saved background (compass icon);
                            ctx.restore();
                        };
                    };

                    // Add button for closing the surf conditions window
                    $surfConditionsWaves.prepend('<button type="button" class="btn conditions-close-button">✖</button>');

                    // Save global ref to close conditions btn
                    $closeConditionsButton = $('.conditions-close-button');

                    // Create DOM ref to all of the live surf conditions
                    // elems
                    var $liveSurfConditions = $('.live-surf-conditions');

                    // When the surf conditions button is clicked the surf
                    // conditions window is closed and all of the live
                    // conditions elems are removed
                    $closeConditionsButton.on('click', function(e) {

                        // Change icon-frame size to account for compass
                        // absence
                        $iconFrame.removeClass('col-sm-6 sm-icon-frame');

                        // Move icons back to original position
                        $iconContainer.removeClass('md-icon-container');

                        // Hide the live surf conditions
                        $liveSurfConditions.hide();

                        // Hide the close conditions button
                        $closeConditionsButton.hide();

                        // Make visible the show surf conditions button
                        $conditionsBtn.show();
                    });

                    console.log('add live conditions tooltips');

                    // Add tool tips for the surf guide icons
                    self.addToolTips();

                } else {

                  return;
                };
            };

            // If an API request doesn't work or there is not spot ID number
            // provided by magic seaweed for the location, show an error
            function showError () {

                console.log('MSW api request unsuccessful');

                // Before rendering the error message, check which surf guide // is currently open and make sure it matches the API request.
                // This ensures that an api request that takes time to
                // download isn't injected into another surf guide if the user
                // changes surf guides during the api request processing
                if ($currentSurfGuide === breakName) {

                    // Create error elems
                    var errorFrame = '<div class="col-xs-12 error-frame"></div>',
                        errorElem = '<div class="error-container"></div>',
                        errorMsg = '<p class="conditions-error">' + breakName + ' ' + "conditions unavailable =(" + '</p>',
                        errorCloseButton = '<button type="button" class="btn error-close-button">✖</button>';

                    // Insert a frame to hold the error container
                    $surfGuideHeader.after(errorFrame);

                    // Create a DOM ref to the error frame
                    var $errorFrame = $('.error-frame');

                    // Insert the error container
                    $errorFrame.append(errorElem);

                    // Create a DOM ref to the error container
                    var $errorContainer = $('.error-container');

                    // Insert the error message
                    $errorContainer.append(errorMsg);

                    // Add a button for closing the error window
                    $errorContainer.prepend(errorCloseButton);

                    // Create a DOM ref to the error close button
                    var $errorCloseButton = $('.error-close-button');

                    // When the conditions close button is clicked remove the
                    // error message
                    $errorCloseButton.on('click', function(e) {

                        // Remove conditions row from DOM
                        $errorFrame.remove();

                        // Remove the close conditions button
                        $closeConditionsButton.remove();

                        // Make visible the show surf conditions button
                        $conditionsBtn.toggle();
                    });

                } else {

                    return;;
                };
            };
        };
    };

    // Get the title of the surf guide
    self.displayTitle = function (breakName, location) {
        var guideTitle = '<div class="col-xs-12 guide-header">' + '<p class="title">' + '<span id="guide-break-name">' + breakName +'</span>' + ',' + ' ' + location + '</p>' + '</div>';
        return guideTitle;
    };

    // Add the favorite icon to the beginning of the surf guide title
    self.displayFavoriteIcon = function(breakName) {

        // Check if the location is one of the user's favorites
        if(userFavorites.indexOf(breakName) > -1) {
            var favorite = true;
        };

        // If the location is one of the user's favorites, fill it in
        // If it isn't, don't fill it
        if(favorite) {
            var icon = '<span class="favorite-wrapper-guide is-a-favorite-guide"><svg class="favorite-guide"><use xlink:href="#star"/></svg></span>';
        } else {
            var icon = '<span class="favorite-wrapper-guide not-a-favorite-guide"><svg class="favorite-guide"><use xlink:href="#star"/></svg></span>';
        };

        return icon;
    };

    // Create an icon elem constructor for each of the surf guide's icons
    // This saves time by not having to rewrite for each guide icon
    self.setUpIcons = function (frameClass, frameTitle, imgClass, img, bgImg, bgImgClass) {

        // If the icon has a background img use an elem with an extra svg frame
        // Otherwise, construct it with only one svg
        if(bgImg) {
            var icon =
                '<div class="' + frameClass + '" title="' + frameTitle + '">' +
                    '<svg class="' + bgImgClass + '"><use xlink:href="' + bgImg + '"/></svg>' +
                    '<svg class="' + imgClass + '"><use xlink:href="' + img + '"/></svg>' +
                '</div>';
        } else {
            var icon =
                '<div class="' + frameClass + '" title="' + frameTitle + '">' +
                    '<svg class="' + imgClass + '"><use xlink:href="' + img + '"/></svg>' +
                '</div>';
        };

        return icon;
    };

    // Get the big wave icon for both the surf guide and location frame hover
    // effects
    self.displayBigWaveIcon = function (obj, $iconContainer) {

        // Set classes according to type of icon
        // Each class styles the icon differently (i.e. black for surf guide
        // and white for the rollover effects)
        if(rollover) {
            var frameClass = "hover-icon-frame rollover-info misc-info-one-hover-default misc-info-one-hover hover-tooltip-only",
                imgClass = "hover-icon";
        } else {
            var frameClass = "big-wave card",
                imgClass = "big-wave-guide";
        };

        // Both types of icons receive the same title and image
        var frameTitle = "Known for big wave surfing",
            img = "#big_wave";

        // Save the constructed icon elem
        var icon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

        // If the location is known for big wave surfing and the user is
        // hovering over the location frame, then the above icon stays set and
        // is returned below. Otherwise, the above icon is immediately
        // rendered in the surf guide.
        if (obj.bigWave && !rollover) {

            // Add big wave card to surf guide
            $iconContainer.append(icon);

            return;

        // If the location is not known for big wave surfing and the user is
        // hovering over the location frame, the icon is switched out with the
        // attire icon and returned below.
        // Otherwise, the function is returned as there is no need to render
        // the suggested attire in the guide (this is done in the
        // displaySuggestedAttire function)
        } else if (!obj.bigWave && rollover) {

            var icon = self.displaySuggestedAttireIcons(obj.avgWaterTemp);

        } else if (!obj.bigWave && !rollover) {

            return;
        };
        return icon;
    };

    // Get the well known icon for both the surf guide and location frame hover
    // effects
    self.displayWellKnownIcon = function (obj, $iconContainer) {

        // Set classes according to type of icon
        // Each class styles the icon differently (i.e. black for surf guide
        // and white for the rollover effects)
        if(rollover) {
                frameClass = "misc-info-two-hover hover-icon-frame rollover-info misc-info-two-hover-default well-known-hover hover-tooltip-only",
                imgClass = "hover-icon";
        } else {
            var frameClass = "well-known card",
                imgClass = "well-known-guide";
        };

        // Both types of icons receive the same title and image
        var frameTitle = "Well known around the world",
            img = "#well_known";

        // Save the constructed icon elem
        var icon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

        // If the location is well known and the user is hovering over the
        // location frame, then the above icon stays set and is returned below.
        // Otherwise, the above icon is immediately rendered in the surf guide.
        if (obj.wellKnown && !rollover) {

            // Add well known card to surf guide
            $iconContainer.append(icon);

            return;

        // If the location is not well known and the user is hovering over the
        // location frame, the icon is switched out with the hazard icon and
        // returned below. Otherwise, the function is returned as there is no
        // need to render the hazard icon in the guide 2x (this is done in
        // the displayHazardIcon function)
        } else if (!obj.wellKnown && rollover) {

            var icon = self.displayHazardIcons(obj.hazards, $iconContainer);

        } else if (!obj.wellKnown && !rollover) {

            return;
        };

        return icon;
    };

    // Get the skill level icon for both the surf guide and location frame
    // hover effects
    self.displaySkillIcon = function (obj) {

        // Set classes according to type of icon
        // Each class styles the icon differently (i.e. black for surf guide
        // and white for the rollover effects)
        if(rollover) {
            var frameClass = "hover-icon-frame rollover-info skill-level-hover-default skill-level-hover hover-tooltip-only",
                imgClass = "hover-icon",
                bgImgClass = "hover-icon skill-level-bg-hover";
        } else {
            var frameClass = "skill-level card",
                imgClass = "skill-level-guide",
                bgImgClass = "skill-level-bg-guide";
        };

        // For styling purposes, create a background image for skill level icon
        // The bg img serves as the levels that will be filled in with an over-
        // lay image. This was needed due to the limits of coloring an svg from
        // an external style sheet via css.
        var bgImg = "#skill_level_all";

        // Check the array for any of the skill levels. For each present skill
        // level in the skill level array, render the appropriate icon
        if(obj.indexOf("beginner") > -1 && obj.indexOf("intermediate") > -1 && obj.indexOf("advanced") > -1) {

            var frameTitle = "Difficulty: All levels",
                img = "#skill_level_all";

            var skillLevelIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img, bgImg, bgImgClass);

        } else if(obj.indexOf("beginner") > -1 && obj.indexOf("intermediate") > -1 && obj.indexOf("advanced") < 0) {

                var frameTitle = "Difficulty: Beginner to Intermediate",
                    img = "#skill_level_beginner_intermediate";

                var skillLevelIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img, bgImg, bgImgClass);

        } else if(obj.indexOf("beginner") > -1 && obj.indexOf("intermediate") < 0 && obj.indexOf("advanced") < 0) {

                var frameTitle = "Difficulty: Beginner",
                    img = "#skill_level_beginner";

                var skillLevelIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img, bgImg, bgImgClass);

        } else if(obj.indexOf("beginner") < 0 && obj.indexOf("intermediate") > -1 && obj.indexOf("advanced") > -1) {

                var frameTitle = "Difficulty: Intermediate to Advanced",
                    img = "#skill_level_intermediate_advanced";

                var skillLevelIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img, bgImg, bgImgClass);

        } else if(obj.indexOf("beginner") < 0 && obj.indexOf("intermediate") > -1 && obj.indexOf("advanced") < 0) {

                var frameTitle = "Difficulty: Intermediate",
                    img = "#skill_level_intermediate";

                var skillLevelIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img, bgImg, bgImgClass);

        } else if(obj.indexOf("beginner") < 0 && obj.indexOf("intermediate") < 0 && obj.indexOf("advanced") > -1) {

                var frameTitle = "Difficulty: Advanced",
                    img = "#skill_level_advanced";

                var skillLevelIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img, bgImg, bgImgClass);
        };

        return skillLevelIcon;

    };

    // Get the wave direction icon for both the surf guide and location frame
    // hover effects
    self.displayDirectionIcon = function (obj) {

        // Set classes according to type of icon
        // Each class styles the icon differently (i.e. black for surf guide
        // and white for the rollover effects)
        if(rollover) {
            var frameClass = "hover-icon-frame rollover-info wave-direction-hover-default wave-direction-hover hover-tooltip-only",
                imgClass = "hover-icon";
        } else {
            var frameClass = "direction card",
                imgClass = "wave-direction-guide";
        };

        // Display the appropriate icon for each case
        switch(obj) {
            case 'left':

                var frameTitle = "Wave breaks left",
                        img = "#direction_left";

                var directionIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

            break;

            case 'right':

                var frameTitle = "Wave breaks right",
                        img = "#direction_right";

                var directionIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            break;

            case 'left & right':

                var frameTitle = "Wave breaks left & right",
                        img = "#direction_both";

                var directionIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            break;
        }

        return directionIcon;
    };

    // Get the break type icon for both the surf guide and location frame
    // hover effects
    self.displayBreakIcon = function (obj) {

        // Set classes according to type of icon
        // Each class styles the icon differently (i.e. black for surf guide
        // and white for the rollover effects)
        if(rollover) {
            var frameClass = "hover-icon-frame rollover-info break-type-hover-default break-type-hover hover-tooltip-only",
                imgClass = "hover-icon";
        } else {
            var frameClass = "break card",
                imgClass = "break-type-guide";
        };

        // Display the appropriate icon for each case
        switch(obj) {
            case 'reef':

                var frameTitle = "Reef break",
                    img = "#break_reef";

                var breakIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            break;

            case 'beach':

                var frameTitle = "Beach break",
                    img = "#break_beach";

                var breakIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            break;

            case 'point':

                var frameTitle = "Point break",
                    img = "#break_point";

                var breakIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            break;

            case 'river mouth':

                var frameTitle = "Breaks at a river mouth",
                    img = "#break_river_mouth";

                var breakIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            break;
        }

        return breakIcon;
    };

    // Get the compass icon to display the best wind and swell conditions
    // for the surf guide only
    self.displayCompassIcon = function (objSwell, objWind, $iconContainer, canvasWidth, canvasHeight) {

        // Create the compass icon container
        $iconContainer.append('<div class="small-compass-guide card " title="Best Swell & Best Wind"><canvas id="compass-small" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas></div>');

        // Load the sprite sheet
        var sprites = new Image();
        sprites.src = spriteSheet;

        // Save a ref to the canvas and set context
        var Canvas = document.getElementById('compass-small'),
            ctx = Canvas.getContext('2d');

        // Draw the compass img as the background for the icon
        // (sprites,srcX,srcY,srcW,srcH,destX,destY,destW,destH)
        ctx.drawImage(sprites, 0, 237, 108, 108, 0, 0, 100, 100);

        // Save compass img
        ctx.save();

        // Save the swell and wind array passed as parameters in an object
        var pointers = {"swell" : objSwell, "wind": objWind };

        // Loop through the swell and wind arrays in order to extract the
        // location's optimal swell and wind conditions
        for (var array in pointers) {

            // Set the source y coordinate for the currently parsed array
            if(array === "swell") {

                var srcY = 345;

            } else {

                var srcY = 453;
            };

            // Set the destination x and y coordinates for the icons (the midd-
            // le of the canvas )
            var destX = canvasWidth / 2,
                destY = canvasHeight / 2;

            // Traverse to the middle of the canvas
            ctx.translate(destX, destY);

            // Save the length of the array
            var directions = pointers[array].length;

            // Parse the array to determine the direction in degrees based
            // on the provided cardinal direction
            for (var i = directions; i--;) {

                switch (pointers[array][i]) {

                    case 'N':
                        var direction = 0;
                    break;

                    case 'NNE':
                        var direction = 22.5;
                    break;

                    case 'NE':
                        var direction = 45;
                    break;

                    case 'ENE':
                        var direction = 67.5;
                    break;

                    case 'E':
                        var direction = 90;
                    break;

                    case 'ESE':
                        var direction = 112.5;
                    break;

                    case 'SE':
                        var direction = 135;
                    break;

                    case 'SSE':
                        var direction = 157.5;
                    break;

                    case 'S':
                        var direction = 180;
                    break;

                    case 'SSW':
                        var direction = 202.5;
                    break;

                    case 'SW':
                        var direction = 225;
                    break;

                    case 'WSW':
                        var direction = 247.5;
                    break;

                    case 'W':
                        var direction = 270;
                    break;

                    case 'WNW':
                        var direction = 292.5;
                    break;

                    case 'NW':
                        var direction = 315;
                    break;

                    case 'NNW':
                        var direction = 337.5;
                    break;
                }

                // Set the pointer angle
                var pointerAngle = direction * (Math.PI / 180);

                // Rotate the canvas according to the pointer angle
                ctx.rotate(pointerAngle);

                // Draw the image using  the following parameters:
                // (sprites,srcX,srcY,srcW,srcH,destX,destY,destW,destH)
                // The variables are commonly shared by all imgs
                ctx.drawImage(sprites, 0, srcY, 108, 108, -destX, -destY, 100, 100);

                // Reset the canvas back to its original position
                ctx.rotate(-pointerAngle);
            };

            // Show the background img (compass img)
            ctx.restore();
        };
    };

    self.displayTideIcon = function (obj) {

        // Set variables for each skill level at zero
        var low = 0;
        var mid = 0;
        var high = 0;

        var tideLength = obj.length;
        for (var i = tideLength; i--;) {
            switch (obj[i]) {
                case 'low':
                    low++;
                break;

                case 'mid':
                    mid++;
                break;

                case 'high':
                    high++;
                break
            }
        };


        var frameClass = "tide card",
            imgClass = "tide-guide";

        if (low === mid && low === high) {

            var frameTitle = "Best Tide: All",
                img = "#tide_all";

            var tideIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

        } else if (low >= mid && low >= high) {
            if(low === mid) {

                var frameTitle = "Best Tide: Low & Mid",
                    img = "#tide_low_mid";

                var tideIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

            } else if (low === high) {

                var frameTitle = "Best Tide: Low & High",
                    img = "#tide_low_high";

                var tideIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            } else {

                var frameTitle = "Best Tide: Low",
                    img = "#tide_low";

                var tideIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            };
        } else if (mid > low && mid >= high) {
            if(mid === high) {

                var frameTitle = "Best Tide: High & Mid",
                    img = "#tide_high_mid";

                var tideIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            } else {

                var frameTitle = "Best Tide: Mid",
                    img = "#tide_low_mid";

                var tideIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            };
        } else {

            var frameTitle = "Best Tide: High",
                img = "#tide_high";

            var tideIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
        };

        return tideIcon;
    };

    self.displayBestSeasonIcon = function (obj) {

        // Set variables for each season at zero
        var spring = 0;
        var summer = 0;
        var autumn = 0;
        var winter = 0;

        /* Tally the number of months fall into a
        particular season */

        var bestSeasonLength = obj.length;

        for (var i = bestSeasonLength; i--;) {
            switch (obj[i]) {
                case ' Dec':
                case ' Jan':
                case ' Feb':
                    winter++;
                break;

                case ' Mar':
                case ' Apr':
                case ' May':
                    spring++;
                break;

                case ' Jun':
                case ' Jul':
                case ' Aug':
                    summer++;
                break

                case ' Sep':
                case ' Oct':
                case ' Nov':
                    autumn++;
                break
            }
        }

        if(rollover) {
            var frameClass = "hover-icon-frame rollover-info best-season-hover-default best-season-hover hover-tooltip-only",
                imgClass = "hover-icon";
        } else {
            var frameClass = "time card",
                imgClass = "best-season-guide";
        };

        /* Filter which seasons are the best for the
        particular break */
        /* Display icon associated with best time of
        year */
        if (winter === spring && winter === summer && winter === autumn) {

            var frameTitle = "Best Season: All",
                img = "#season_all";

            var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

        } else if(winter >= spring && winter >= summer && winter >= autumn) {
            if(winter === spring) {

                var frameTitle = "Best Season: Winter & Spring",
                img = "#season_winter_spring";

                var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

            } else if (winter === summer) {

                var frameTitle = "Best Season: Winter & Summer",
                img = "#season_winter_summer";

                var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            } else if (winter === autumn) {

                var frameTitle = "Best Season: Winter & Autumn",
                img = "#season_winter_autumn";

                var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            } else {

                var frameTitle = "Best Season: Winter",
                img = "#season_winter";

                var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            };
        } else if (spring >= summer && spring >= autumn && spring > winter) {
            if (spring === summer) {

                var frameTitle = "Best Season: Spring & Summer",
                img = "#season_spring_summer";

                var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            } else if (spring === autumn) {

                var frameTitle = "Best Season: Spring & Autumn",
                img = "#season_spring_autumn";

                var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            } else {

                var frameTitle = "Best Season: Spring",
                img = "#season_spring";

                var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            };
        } else if (summer >= autumn && summer > winter && summer > spring) {
            if(summer === autumn) {

                var frameTitle = "Best Season: Summer & Autumn",
                img = "#season_summer_autumn";

                var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            } else {

                var frameTitle = "Best Season: Summer",
                img = "#season_ummer";

                var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
            };
        } else {

                var frameTitle = "Best Season: Autumn",
                img = "#season_autumn";

                var bestSeasonIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
        };

        return bestSeasonIcon;
    };

    self.displaySuggestedAttireIcons = function (obj, $iconContainer) {

        if(!rollover) {

            var season = 0;
            /* Loop through the average water temps for each time of year. Designate specific water attire for each time of year */
            for (var temp in obj) {

                season++;
                var gear = determineGear(obj[temp]);

                drawSeasonIcon(gear, season);

            };

            function drawSeasonIcon(gear, season) {

                var imgClass = "suggested-attire-season-guide suggested-attire-guide";

                if(season === 1) {

                    var frameClass = "water-temp spring card",
                        frameTitle = "Suggested spring attire",
                        img = "#water_temp_spring";

                    var icon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                    $iconContainer.append(icon);
                    $('.spring').append(gear);

                } else if (season === 2) {

                    var frameClass = "water-temp summer card",
                        frameTitle = "Suggested summer attire",
                        img = "#water_temp_summer";

                    var icon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                    $iconContainer.append(icon);
                    $('.summer').append(gear);

                } else if (season === 3) {

                    var frameClass = "water-temp autumn card",
                        frameTitle = "Suggested autumn attire",
                        img = "#water_temp_autumn";

                    var icon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                    $iconContainer.append(icon);
                    $('.autumn').append(gear);

                } else {

                    var frameClass = "water-temp winter card",
                        frameTitle = "Suggested winter attire",
                        img = "#water_temp_winter";

                    var icon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                    $iconContainer.append(icon);
                    $('.winter').append(gear);
                };
            };

            // Highlight current season's attire
            var currentSeason = getCurrentSeason();

            if(currentSeason === 'winter') {
                $('.winter').addClass("highlight-attire");
            } else if (currentSeason === 'spring') {
                $('.spring').addClass("highlight-attire");
            } else if (currentSeason === 'winter') {
                $('.summer').addClass("highlight-attire");
            } else if (currentSeason === 'autumn') {
                $('.autumn').addClass("highlight-attire");
            };

        } else {

            var currentSeason = getCurrentSeason();

            if(currentSeason === 'winter') {
                var suggestedAttireIcon = determineGear(obj.winter);
            } else if (currentSeason === 'spring') {
                var suggestedAttireIcon = determineGear(obj.spring);
            } else if (currentSeason === 'winter') {
                var suggestedAttireIcon = determineGear(obj.summer);
            } else if (currentSeason === 'autumn') {
                var suggestedAttireIcon = determineGear(obj.autumn);
            };

            return suggestedAttireIcon;
        };

        function determineGear (temp) {

            // Cache details for the hover icons
            var frameClass = "hover-icon-frame rollover-info misc-info-one-hover-default misc-info-one-hover hover-tooltip-only",
                imgClass = "hover-icon";

            if(temp > 59) {
                if(temp > 72) {

                    if(rollover) {

                        var img = "#ro_water_attire_boardies",

                        frameTitle = "It's currently warm enough for boardies =)";

                        var gear = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                    } else {

                        var gear = '<svg class="suggested-attire-boardies-guide suggested-attire-guide"><use xlink:href="#water_attire_boardies"/></svg>';
                    };
                } else if (temp > 66) {

                    if(rollover) {

                        var img = "#ro_water_attire_2mm_wetsuit",

                        frameTitle = "A 2mm wetsuit is recommended for this time of year";

                        var gear = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                    } else {
                        var gear = '<svg class="suggested-attire-wetsuit-guide suggested-attire-guide"><use xlink:href="#water_attire_2mm_wetsuit"/></svg>';
                    };
                } else {

                    if(rollover) {

                        var img = "#ro_water_attire_3mm_wetsuit",

                        frameTitle = "A 3mm wetsuit is recommended for this time of year";

                        var gear = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                    } else {
                        var gear = '<svg class="suggested-attire-wetsuit-guide suggested-attire-guide"><use xlink:href="#water_attire_3mm_wetsuit"/></svg>';
                    };
                };
            } else {
                if (temp > 54) {

                    if(rollover) {

                        var img = "#ro_water_attire_4mm_wetsuit",

                        frameTitle = "A 4mm wetsuit and boots are recommended for this time of year";

                        var gear = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                    } else {
                        var gear = '<svg class="suggested-attire-wetsuit-guide suggested-attire-guide"><use xlink:href="#water_attire_4mm_wetsuit"/></svg>';
                    };
                } else if (temp > 48) {
                    if(rollover) {

                        var img = "#ro_water_attire_5mm_wetsuit",

                        frameTitle = "A 5mm wetsuit, gloves, and boots are recommended for this time of year";

                        var gear = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                    } else {
                        var gear = '<svg class="suggested-attire-wetsuit-guide suggested-attire-guide"><use xlink:href="#water_attire_5mm_wetsuit"/></svg>';
                    };
                } else {
                    if(rollover) {

                        var img = "#ro_water_attire_6mm_wetsuit",

                        frameTitle = "A 6mm wetsuit, gloves, boots, and a hood are recommended for this time of year";

                        var gear = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                    } else {
                        var gear = '<svg class="suggested-attire-wetsuit-guide suggested-attire-guide"><use xlink:href="#water_attire_6mm_wetsuit"/></svg>';
                    };
                };
            };

            return gear;
        };
    };

    self.displayClimateIcon = function (obj) {

        var climateIcon = '<div class="climate card " title="Köppen Climate Classification">' + '<p>' + obj  + '</p>' + '</div>';

        return climateIcon;
    };

    self.displayCost = function (obj, $iconContainer) {

      if(rollover) {

          var costInfo = '<p class="rollover-info cost-hover-default cost-hover" title="Estimated minimum daily budget allowance">' + '$' + obj.budget + '</p>';

      } else {

          var midRange = Math.floor((obj.highEnd - obj.budget)/2 + obj.budget);

          var costInfo = $iconContainer.append('<div class="cost card "title="Estimated daily budget allowances: Low, Mid, High">' + '<svg class="cost-guide"><use xlink:href="#cost"/></svg>' + '<p>' + obj.budget + '</p>' + '<p>' + midRange + '</p>' + '<p>' + obj.highEnd +'</p>' + '</div>');
      };

      return costInfo;

    };

    self.displayDistance = function (latDest,lngDest) {

        /* Get distance between both locations using
        the Haversine formula */
        /* Obtain current location from user */
        var latOrigin = currentLat;
        var lngOrigin = currentLng;

        // Set the radius of Earth in mi
        var R = 3959;

        // Calculate radians diff between both locations
        var latR = deg2rad(latDest-latOrigin);
        var lngR = deg2rad(lngDest-lngOrigin);

        var a =
          Math.sin(latR/2) * Math.sin(latR/2) +
          Math.cos(deg2rad(latOrigin)) * Math.cos(deg2rad(latDest)) *
          Math.sin(lngR/2) * Math.sin(lngR/2)
          ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        // Solve for d
        var d = R * c;

        // Round distance to nearest integer
        var result = Math.round(d);

        /* If the distance is greater than 200 miles, calculate the
        average non-stop flight time in hours to the destination using
        an average cruising speed of 450mph */
        if(result > 200) {
            var hours = result/450;

            // If the time is below an hour, set the new time at one hour
            if(hours < 1) {
                var newTime = 1;
            } else {
                var newTime = Math.round(hours);
            };

            /* If distance is greater than avg distance of a direct flight,
            add two hours in layover time */
            if(newTime > 8 && newTime <= 12) {
                var layOver = newTime + 2;
                var flightTime = layOver;

            /* If distance is greater than avg distance of a 1+ connection
             flight, add four hours in layover time */
            } else if (newTime > 12) {
                var layOver = newTime + 4;
                var flightTime = layOver;
            } else {
                var flightTime = newTime;
            };
                var distanceFly = flightTime;

            if(rollover) {
                // Cache distance element with distance
                var distance = '<p class="rollover-info distance-hover-default distance-hover" title="Estimated flight duration from your location">' + distanceFly + 'h' + '</p>';

                return distance;

            } else {

                var distanceIcon = '<div class="distance card" title="Estimated flight duration from your location"><svg class="distance-guide-plane"><use xlink:href="#distance_plane"/></svg>' + '<p class="distance-guide-hours">' + distanceFly + 'h' +'</p></div>';

                return distanceIcon;
            };
        } else {

            var distanceDrive = result;

            if(rollover) {
                // Cache distance element with distance
                var distance = '<p class="rollover-info distance-hover-default distance-hover" title="Estimated distance in miles from your location">' + distanceDrive + 'mi' + '</p>';

                return distance;

            } else {

                var distanceIcon = '<div class="distance card" title="Estimated (straight line) distance in miles from your location (actual distance via roads will be greater)"><svg class="distance-guide-drive"><use xlink:href="#distance"/></svg>' + '<p class="distance-guide-miles">' + distanceDrive + 'mi' +'</p></div>';

                return distanceIcon;
            };
        };

        // Converts degrees to radians
        function deg2rad(deg) {
          return deg * (Math.PI/180)
        }
    }

    self.displayCurrentWaterTemp = function (obj) {

        var currentSeason = getCurrentSeason();

        switch(currentSeason) {
          case 'winter':
            var waterTemp = obj.winter;
          break;

          case 'spring':
            var waterTemp = obj.spring;
          break

          case 'summer':
            var waterTemp = obj.summer;
          break;

          case 'autumn':
            var waterTemp = obj.autumn;
          break
        };

        var waterTempInfo = '<p class="rollover-info water-temp-hover-default water-temp-hover" title="Average ' + currentSeason + ' water temperature">' + waterTemp + '℉' + '</p>';

        return waterTempInfo;
    };

    self.displayWaveSize = function (obj) {
        /* Check if the average maximum wave size
        sometimes goes above the max. If it does, save a plus sign in a variable to add to the min/max wave height */
        if (obj.aboveMax) {
            var plus = '+';
        } else {
            var plus = '';
        };

        if(rollover) {
            /* Cache the average wave height */
            var waveSizeInfo = '<p class="rollover-info wave-size-hover-default wave-size-hover" title="Average wave size">' + obj.min + "-" + obj.max + "'" +'</p>';
        } else {
            var waveSizeInfo = '<div class="wave-size card" title="Average wave size">' + '<svg class="wave-size-guide"><use xlink:href="#wave_range"/></svg>' + '<p>' + obj.min + "-" + obj.max + plus + "ft" + '</p>' + '</div>';
        };

        return waveSizeInfo;
    };

    self.getCurrentSeason = function () {
        // Get today's date and month
        var today = new Date();
        var month = today.getMonth();

        switch (month) {
          case 11 :
          case 0 :
          case 1 :
              var currentSeason = 'winter';
          break;

          case 2:
          case 3:
          case 4:
              var currentSeason = 'spring';
          break;

          case 5:
          case 6:
          case 7:
              var currentSeason = 'summer';
          break;

          case 8:
          case 9:
          case 10:
              var currentSeason = 'autumn';
          break;
        };

        return currentSeason;
    };

    self.displayHazardIcons = function (obj, $iconContainer) {

        if(rollover) {
            /* Generate a number between min and max to
            render a random hazard in case wave is not
            well known */
            // Set a random number within a given range
            var min = 0;
            var max = obj.length;

            var randomArrayItem = Math.floor((Math.random() * (max - min)) + min);

            var randomHazard = obj[randomArrayItem];
            var miscInfoTwoIcon = hazards(randomHazard);

            return miscInfoTwoIcon;

        } else {

            var hazardsLength = obj.length;

            for (var i = hazardsLength; i--;) {
                hazards(obj[i], $iconContainer);
            }

        };

        function hazards (hazard, $iconContainer) {

            if(rollover) {
                var frameClass = "misc-info-two-hover hover-icon-frame rollover-info misc-info-two-hover-default hover-tooltip-only",
                    imgClass = "hover-icon misc-info-two-hover-svg";
            } else {
                var frameClass = "hazard card",
                    imgClass = "hazard-guide";
            };

            switch (hazard) {

                case 'beginners':

                    var frameTitle = "Hazard: Beginners",
                        img = "#hazards_beginners";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);

                break;

                case 'boats':

                    var frameTitle = "Hazard: Boats",
                        img = "#hazards_boats";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'crocs':

                    var frameTitle = "Hazard: Crocodiles",
                        img = "#hazards_crocs";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'crowded':

                    var frameTitle = "Hazard: Crowded",
                        img = "#hazards_crowded";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'dangerous break':

                    var frameTitle = "Hazard: Dangerous break",
                        img = "#hazards_dangerous_break";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'far from shore':

                    var frameTitle = "Hazard: Far from shore",
                        img = "#hazards_far_from_shore";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'pollution':

                    var frameTitle = "Hazard: Pollution",
                        img = "#hazards_pollution";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'rocky bottom':

                    var frameTitle = "Hazard: Rocky bottom",
                        img = "#hazards_rocky_bottom";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'sea snakes':

                    var frameTitle = "Hazard: Sea snakes",
                        img = "#hazards_sea_snakes";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'seals':

                    var frameTitle = "Hazard: Seals",
                        img = "#hazards_seals";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'seaweed':

                    var frameTitle = "Hazard: Seaweed",
                        img = "#hazards_seaweed";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'sewage':

                    var frameTitle = "Hazard: Sewage",
                        img = "#hazards_sewage";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'shallow':

                    var frameTitle = "Hazard: Shallow break",
                        img = "#hazards_shallow";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'sharks':

                    var frameTitle = "Hazard: Sharks",
                        img = "#hazards_sharks";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'strong currents':

                    var frameTitle = "Hazard: Strong currents",
                        img = "#hazards_strong_currents";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'strong rips':

                    var frameTitle = "Hazard: Strong rips",
                        img = "#hazards_strong_rips";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'theft':

                    var frameTitle = "Hazard: Theft",
                        img = "#hazards_theft";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'undertow':

                    var frameTitle = "Hazard: Strong undertow",
                        img = "#hazards_undertow";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'unfriendly':

                    var frameTitle = "Hazard: Unfriendly",
                        img = "#hazards_unfriendly";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

                case 'urchins':

                    var frameTitle = "Hazard: Urchins",
                        img = "#hazards_urchins";

                    var hazardIcon = self.setUpIcons(frameClass, frameTitle, imgClass, img);
                break;

            }

            if(rollover) {

                return hazardIcon;
            } else {

                $iconContainer.append(hazardIcon);
            };

        };
    };

    self.closeSurfGuide = function () {

        console.log('close surf guide');

        console.log('close any open info windows');

        infoWindow.close();

        // Make any big markers small
        self.makeMarkerSmall();

        // Remove both surf conditions and surf guide from DOM
        $surfInfoContainer.children(":nth-child(1)").remove();

        // Adjust the layout
        self.manageView();

        // If the map is hidden, reset the relevant location frames
        if($map.is(":hidden")) {
            self.resetFrames();
        };

        // Show the location grid again
        $locationGrid.show();

        // Show any location frames that were visible before the surf guide
        // was opened
        // Set display to 'inline-block' to avoid styling problems arising
        // from a div that wasn't set to inline before being hidden i.e.
        // clicking a location frame in grid view, opening the map, then
        // closing the guide
        $('.location-frame:visible').css("display", "inline-block");

        // Scroll to the top of the page
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
};

ko.applyBindings(new AppViewModel);