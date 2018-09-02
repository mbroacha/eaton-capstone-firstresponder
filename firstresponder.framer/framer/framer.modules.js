require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"MaterialComponents":[function(require,module,exports){
var Inputlabel_dark, Inputlabel_light, Label, Shadow, SystemIcon, TextField, box_dark, box_light, input_dark, input_light, label_dark, label_light, line_dark, line_dark_hover, line_light, line_light_hover,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

label_light = "rgba(0,0,0,0.87)";

label_dark = "rgba(255,255,255,1)";

line_light = "rgba(0,0,0,0.54)";

line_dark = "rgba(255,255,255,0.7)";

input_light = "rgba(0,0,0,0.54)";

input_dark = "rgba(255,255,255,1)";

Inputlabel_light = box_light = "rgba(0,0,0,0.54)";

Inputlabel_dark = box_dark = "rgba(255,255,255,0.7)";

line_light_hover = "rgba(0,0,0,0.87)";

line_dark_hover = "rgba(255,255,255,1)";

Label = (function(superClass) {
  extend(Label, superClass);

  function Label(options) {
    var base, base1, base2, base3, base4, base5, base6;
    this.options = options != null ? options : {};
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base = this.options).fontFamily == null) {
      base.fontFamily = "'Roboto', sans serif";
    }
    if ((base1 = this.options).fontSize == null) {
      base1.fontSize = 16;
    }
    if ((base2 = this.options).text == null) {
      base2.text = 'Label';
    }
    if ((base3 = this.options).color == null) {
      base3.color = label_light;
    }
    if ((base4 = this.options).fontWeight == null) {
      base4.fontWeight = 400;
    }
    if ((base5 = this.options).letterSpacing == null) {
      base5.letterSpacing = 0;
    }
    if ((base6 = this.options).name == null) {
      base6.name = "label";
    }
    Label.__super__.constructor.call(this, this.options);
  }

  return Label;

})(TextLayer);

Shadow = (function(superClass) {
  extend(Shadow, superClass);

  function Shadow(options) {
    var base;
    this.options = options != null ? options : {};
    if ((base = this.options).backgroundColor == null) {
      base.backgroundColor = "";
    }
    this.umbra = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: this.options.themeColor,
      borderRadius: this.options.borderRadius,
      shadowColor: "rgba(0,0,0,0.14)",
      name: "umbra"
    });
    this.umbra.states = {
      _12dp: {
        shadowY: 12,
        shadowBlur: 17,
        shadowSpread: 2
      },
      _8dp: {
        shadowY: 4,
        shadowBlur: 15,
        shadowSpread: 0
      },
      _6dp: {
        shadowY: 6,
        shadowBlur: 10,
        shadowSpread: 0
      },
      _4dp: {
        shadowY: 2,
        shadowBlur: 4,
        shadowSpread: 0
      },
      _2dp: {
        shadowY: 0,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _1dp: {
        shadowY: 0,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _0dp: {
        shadowY: 0,
        shadowBlur: 0,
        shadowSpread: 0
      }
    };
    this.penumbra = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: "",
      borderRadius: this.options.borderRadius,
      shadowColor: "rgba(0,0,0,0.12)",
      name: "penumbra"
    });
    this.penumbra.states = {
      _12dp: {
        shadowY: 5,
        shadowBlur: 22,
        shadowSpread: 4
      },
      _8dp: {
        shadowY: 3,
        shadowBlur: 14,
        shadowSpread: 3
      },
      _6dp: {
        shadowY: 1,
        shadowBlur: 18,
        shadowSpread: 0
      },
      _4dp: {
        shadowY: 4,
        shadowBlur: 5,
        shadowSpread: 0
      },
      _2dp: {
        shadowY: 2,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _1dp: {
        shadowY: 2,
        shadowBlur: 2,
        shadowSpread: 0
      },
      _0dp: {
        shadowY: 0,
        shadowBlur: 0,
        shadowSpread: 0
      }
    };
    this.ambient = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: "",
      shadowColor: "rgba(0,0,0,0.20)",
      name: "ambient",
      borderRadius: this.options.borderRadius
    });
    this.ambient.states = {
      _12dp: {
        shadowY: 7,
        shadowBlur: 8,
        shadowSpread: 0
      },
      _8dp: {
        shadowY: 8,
        shadowBlur: 10,
        shadowSpread: 1
      },
      _6dp: {
        shadowY: 3,
        shadowBlur: 5,
        shadowSpread: 0
      },
      _4dp: {
        shadowY: 1,
        shadowBlur: 10,
        shadowSpread: 0
      },
      _2dp: {
        shadowY: 1,
        shadowBlur: 3,
        shadowSpread: 0
      },
      _1dp: {
        shadowY: 1,
        shadowBlur: 3,
        shadowSpread: 0
      },
      _0dp: {
        shadowY: 0,
        shadowBlur: 0,
        shadowSpread: 0
      }
    };
    this.umbra.animationOptions = {
      time: 0.2
    };
    this.penumbra.animationOptions = {
      time: 0.2
    };
    this.ambient.animationOptions = {
      time: 0.2
    };
    this.umbra.states.switchInstant("_2dp");
    this.penumbra.states.switchInstant("_2dp");
    this.ambient.states.switchInstant("_2dp");
    Shadow.__super__.constructor.call(this, this.options);
    this.umbra.parent = this;
    this.penumbra.parent = this;
    this.ambient.parent = this;
    this.array = [this.umbra, this.penumbra, this.ambient];
  }

  return Shadow;

})(Layer);

SystemIcon = (function(superClass) {
  extend(SystemIcon, superClass);

  function SystemIcon(options) {
    var base, base1, base2, base3, base4;
    this.options = options != null ? options : {};
    Utils.insertCSS('@import url(https://fonts.googleapis.com/icon?family=Material+Icons); @import url(https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css); .material-icons.tab{}');
    if ((base = this.options).fontSize == null) {
      base.fontSize = 24;
    }
    if ((base1 = this.options).icon == null) {
      base1.icon = "android";
    }
    this.options.html = "<i class='material-icons tab'>" + this.options.icon + "</i>";
    if ((base2 = this.options).color == null) {
      base2.color = "#009688";
    }
    if ((base3 = this.options).height == null) {
      base3.height = this.options.fontSize;
    }
    if ((base4 = this.options).width == null) {
      base4.width = this.options.fontSize;
    }
    this.options.backgroundColor = "";
    SystemIcon.__super__.constructor.call(this, this.options);
  }

  SystemIcon.define('fontSize', {
    get: function() {
      return this.options.fontSize;
    },
    set: function(value) {
      this.options.fontSize = value;
      return Utils.insertCSS('@import url(https://fonts.googleapis.com/icon?family=Material+Icons); @import url(https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css); .material-icons.tab{}');
    }
  });

  return SystemIcon;

})(Layer);

exports.color = (function(superClass) {
  extend(color, superClass);

  function color(options) {
    this.options = options != null ? options : {};
    this.options = _.defaults(this.options, color.__super__.constructor.call(this, this.options));
  }

  return color;

})(Layer);

exports.red = "#F44336";

exports.red50 = "#FFEBEE";

exports.red100 = "#FFCDD2";

exports.red200 = "#EF9A9A";

exports.red300 = "#E57373";

exports.red400 = "#EF5350";

exports.red500 = "#F44336";

exports.red600 = "#E53935";

exports.red700 = "#D32F2F";

exports.red800 = "#C62828";

exports.red900 = "#B71C1C";

exports.redA100 = "#FF8A80";

exports.redA200 = "#FF5252";

exports.redA400 = "#FF1744";

exports.redA700 = "#D50000";

exports.pink = "#E91E63";

exports.pink50 = "#FCE4EC";

exports.pink100 = "#F8BBD0";

exports.pink200 = "#F48FB1";

exports.pink300 = "#F06292";

exports.pink400 = "#EC407A";

exports.pink500 = "#E91E63";

exports.pink600 = "#D81B60";

exports.pink700 = "#C2185B";

exports.pink800 = "#AD1457";

exports.pink900 = "#880E4F";

exports.pinkA100 = "#FF80AB";

exports.pinkA200 = "#FF4081";

exports.pinkA400 = "#F50057";

exports.pinkA700 = "#C51162";

exports.purple = "#9C27B0";

exports.purple50 = "#F3E5F5";

exports.purple100 = "#E1BEE7";

exports.purple200 = "#CE93D8";

exports.purple300 = "#BA68C8";

exports.purple400 = "#AB47BC";

exports.purple500 = "#9C27B0";

exports.purple600 = "#8E24AA";

exports.purple700 = "#7B1FA2";

exports.purple800 = "#6A1B9A";

exports.purple900 = "#4A148C";

exports.purpleA100 = "#EA80FC";

exports.purpleA200 = "#E040FB";

exports.purpleA400 = "#D500F9";

exports.purpleA700 = "#AA00FF";

exports.deepPurple = "#673AB7";

exports.deepPurple50 = "#EDE7F6";

exports.deepPurple100 = "#D1C4E9";

exports.deepPurple200 = "#B39DDB";

exports.deepPurple300 = "#9575CD";

exports.deepPurple400 = "#7E57C2";

exports.deepPurple500 = "#673AB7";

exports.deepPurple600 = "#5E35B1";

exports.deepPurple700 = "#512DA8";

exports.deepPurple800 = "#4527A0";

exports.deepPurple900 = "#311B92";

exports.deepPurpleA100 = "#B388FF";

exports.deepPurpleA200 = "#7C4DFF";

exports.deepPurpleA400 = "#651FFF";

exports.deepPurpleA700 = "#6200EA";

exports.indigo = "#3F51B5";

exports.indigo50 = "#E8EAF6";

exports.indigo100 = "#C5CAE9";

exports.indigo200 = "#9FA8DA";

exports.indigo300 = "#7986CB";

exports.indigo400 = "#5C6BC0";

exports.indigo500 = "#3F51B5";

exports.indigo600 = "#3949AB";

exports.indigo700 = "#303F9F";

exports.indigo800 = "#283593";

exports.indigo900 = "#1A237E";

exports.indigoA100 = "#8C9EFF";

exports.indigoA200 = "#536DFE";

exports.indigoA400 = "#3D5AFE";

exports.indigoA700 = "#304FFE";

exports.blue = "#2196F3";

exports.blue50 = "#E3F2FD";

exports.blue100 = "#BBDEFB";

exports.blue200 = "#90CAF9";

exports.blue300 = "#64B5F6";

exports.blue400 = "#42A5F5";

exports.blue500 = "#2196F3";

exports.blue600 = "#1E88E5";

exports.blue700 = "#1976D2";

exports.blue800 = "#1565C0";

exports.blue900 = "#0D47A1";

exports.blueA100 = "#82B1FF";

exports.blueA200 = "#448AFF";

exports.blueA400 = "#2979FF";

exports.blueA700 = "#2962FF";

exports.lightBlue = "#03A9F4";

exports.lightBlue50 = "#E1F5FE";

exports.lightBlue100 = "#B3E5FC";

exports.lightBlue200 = "#81D4FA";

exports.lightBlue300 = "#4FC3F7";

exports.lightBlue400 = "#29B6F6";

exports.lightBlue500 = "#03A9F4";

exports.lightBlue600 = "#039BE5";

exports.lightBlue700 = "#0288D1";

exports.lightBlue800 = "#0277BD";

exports.lightBlue900 = "#01579B";

exports.lightBlueA100 = "#80D8FF";

exports.lightBlueA200 = "#40C4FF";

exports.lightBlueA400 = "#00B0FF";

exports.lightBlueA700 = "#0091EA";

exports.cyan = "#00BCD4";

exports.cyan50 = "#E0F7FA";

exports.cyan100 = "#B2EBF2";

exports.cyan200 = "#80DEEA";

exports.cyan300 = "#4DD0E1";

exports.cyan400 = "#26C6DA";

exports.cyan500 = "#00BCD4";

exports.cyan600 = "#00ACC1";

exports.cyan700 = "#0097A7";

exports.cyan800 = "#00838F";

exports.cyan900 = "#006064";

exports.cyanA100 = "#84FFFF";

exports.cyanA200 = "#18FFFF";

exports.cyanA400 = "#00E5FF";

exports.cyanA700 = "#00B8D4";

exports.teal = "#009688";

exports.teal50 = "#E0F2F1";

exports.teal100 = "#B2DFDB";

exports.teal200 = "#80CBC4";

exports.teal300 = "#4DB6AC";

exports.teal400 = "#26A69A";

exports.teal500 = "#009688";

exports.teal600 = "#00897B";

exports.teal700 = "#00796B";

exports.teal800 = "#00695C";

exports.teal900 = "#004D40";

exports.tealA100 = "#A7FFEB";

exports.tealA200 = "#64FFDA";

exports.tealA400 = "#1DE9B6";

exports.tealA700 = "#00BFA5";

exports.green = "#4CAF50";

exports.green50 = "#E8F5E9";

exports.green100 = "#C8E6C9";

exports.green200 = "#A5D6A7";

exports.green300 = "#81C784";

exports.green400 = "#66BB6A";

exports.green500 = "#4CAF50";

exports.green600 = "#43A047";

exports.green700 = "#388E3C";

exports.green800 = "#2E7D32";

exports.green900 = "#1B5E20";

exports.greenA100 = "#B9F6CA";

exports.greenA200 = "#69F0AE";

exports.greenA400 = "#00E676";

exports.greenA700 = "#00C853";

exports.lightGreen = "#8BC34A";

exports.lightGreen50 = "#F1F8E9";

exports.lightGreen100 = "#DCEDC8";

exports.lightGreen200 = "#C5E1A5";

exports.lightGreen300 = "#AED581";

exports.lightGreen400 = "#9CCC65";

exports.lightGreen500 = "#8BC34A";

exports.lightGreen600 = "#7CB342";

exports.lightGreen700 = "#689F38";

exports.lightGreen800 = "#558B2F";

exports.lightGreen900 = "#33691E";

exports.lightGreenA100 = "#CCFF90";

exports.lightGreenA200 = "#B2FF59";

exports.lightGreenA400 = "#76FF03";

exports.lightGreenA700 = "#64DD17";

exports.lime = "#CDDC39";

exports.lime50 = "#F9FBE7";

exports.lime100 = "#F0F4C3";

exports.lime200 = "#E6EE9C";

exports.lime300 = "#DCE775";

exports.lime400 = "#D4E157";

exports.lime500 = "#CDDC39";

exports.lime600 = "#C0CA33";

exports.lime700 = "#AFB42B";

exports.lime800 = "#9E9D24";

exports.lime900 = "#827717";

exports.limeA100 = "#F4FF81";

exports.limeA200 = "#EEFF41";

exports.limeA400 = "#C6FF00";

exports.limeA700 = "#AEEA00";

exports.yellow = "#FFEB3B";

exports.yellow50 = "#FFFDE7";

exports.yellow100 = "#FFF9C4";

exports.yellow200 = "#FFF59D";

exports.yellow300 = "#FFF176";

exports.yellow400 = "#FFEE58";

exports.yellow500 = "#FFEB3B";

exports.yellow600 = "#FDD835";

exports.yellow700 = "#FBC02D";

exports.yellow800 = "#F9A825";

exports.yellow900 = "#F57F17";

exports.yellowA100 = "#FFFF8D";

exports.yellowA200 = "#FFFF00";

exports.yellowA400 = "#FFEA00";

exports.yellowA700 = "#FFD600";

exports.amber = "#FFC107";

exports.amber50 = "#FFF8E1";

exports.amber100 = "#FFECB3";

exports.amber200 = "#FFE082";

exports.amber300 = "#FFD54F";

exports.amber400 = "#FFCA28";

exports.amber500 = "#FFC107";

exports.amber600 = "#FFB300";

exports.amber700 = "#FFA000";

exports.amber800 = "#FF8F00";

exports.amber900 = "#FF6F00";

exports.amberA100 = "#FFE57F";

exports.amberA200 = "#FFD740";

exports.amberA400 = "#FFC400";

exports.amberA700 = "#FFAB00";

exports.orange = "#FF9800";

exports.orange50 = "#FFF3E0";

exports.orange100 = "#FFE0B2";

exports.orange200 = "#FFCC80";

exports.orange300 = "#FFB74D";

exports.orange400 = "#FFA726";

exports.orange500 = "#FF9800";

exports.orange600 = "#FB8C00";

exports.orange700 = "#F57C00";

exports.orange800 = "#EF6C00";

exports.orange900 = "#E65100";

exports.orangeA100 = "#FFD180";

exports.orangeA200 = "#FFAB40";

exports.orangeA400 = "#FF9100";

exports.orangeA700 = "#FF6D00";

exports.deepOrange = "#FF5722";

exports.deepOrange50 = "#FBE9E7";

exports.deepOrange100 = "#FFCCBC";

exports.deepOrange200 = "#FFAB91";

exports.deepOrange300 = "#FF8A65";

exports.deepOrange400 = "#FF7043";

exports.deepOrange500 = "#FF5722";

exports.deepOrange600 = "#F4511E";

exports.deepOrange700 = "#E64A19";

exports.deepOrange800 = "#D84315";

exports.deepOrange900 = "#BF360C";

exports.deepOrangeA100 = "#FF9E80";

exports.deepOrangeA200 = "#FF6E40";

exports.deepOrangeA400 = "#FF3D00";

exports.deepOrangeA700 = "#DD2C00";

exports.brown = "#795548";

exports.brown50 = "#EFEBE9";

exports.brown100 = "#D7CCC8";

exports.brown200 = "#BCAAA4";

exports.brown300 = "#A1887F";

exports.brown400 = "#8D6E63";

exports.brown500 = "#795548";

exports.brown600 = "#6D4C41";

exports.brown700 = "#5D4037";

exports.brown800 = "#4E342E";

exports.brown900 = "#4E342E";

exports.brownA100 = "";

exports.brownA200 = "";

exports.brownA400 = "";

exports.brownA700 = "";

exports.grey = "#9E9E9E";

exports.grey50 = "#FAFAFA";

exports.grey100 = "#F5F5F5";

exports.grey200 = "#EEEEEE";

exports.grey300 = "#E0E0E0";

exports.grey400 = "#BDBDBD";

exports.grey500 = "#9E9E9E";

exports.grey600 = "#757575";

exports.grey700 = "#616161";

exports.grey800 = "#424242";

exports.grey900 = "#212121";

exports.greyA100 = "";

exports.greyA200 = "";

exports.greyA400 = "";

exports.greyA700 = "";

exports.blueGrey = "#607D8B";

exports.blueGrey50 = "#ECEFF1";

exports.blueGrey100 = "#CFD8DC";

exports.blueGrey200 = "#B0BEC5";

exports.blueGrey300 = "#90A4AE";

exports.blueGrey400 = "#78909C";

exports.blueGrey500 = "#607D8B";

exports.blueGrey600 = "#546E7A";

exports.blueGrey700 = "#455A64";

exports.blueGrey800 = "#37474F";

exports.blueGrey900 = "#263238";

exports.black = "#000";

exports.white = "#fff";

exports.lightPrimary = "rgba(0,0,0,0.87)";

exports.lightSecondary = "rgba(0,0,0,0.54)";

exports.lightDisabled = "rgba(0,0,0,0.38)";

exports.darkPrimary = "rgba(255,255,255,1)";

exports.darkSecondary = "rgba(255,255,255, 0.7)";

exports.darkDisabled = "rgba(255,255,255,0.5)";

exports.universal = "#3367CD";

exports.FlatButton = (function(superClass) {
  extend(FlatButton, superClass);

  function FlatButton(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9;
    this.options = options != null ? options : {};
    this.HoverOff = bind(this.HoverOff, this);
    this.Hover = bind(this.Hover, this);
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base = this.options).labelText == null) {
      base.labelText = "Flat Button";
    }
    if ((base1 = this.options).themeColor == null) {
      base1.themeColor = "#009688";
    }
    if ((base2 = this.options).disabled == null) {
      base2.disabled = false;
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    if ((base4 = this.options).directionRipple == null) {
      base4.directionRipple = false;
    }
    if ((base5 = this.options).fontFamily == null) {
      base5.fontFamily = "'Roboto', sans serif";
    }
    if ((base6 = this.options).disableRipple == null) {
      base6.disableRipple = false;
    }
    if ((base7 = this.options).letterSpacing == null) {
      base7.letterSpacing = 0;
    }
    if ((base8 = this.options).fontWeight == null) {
      base8.fontWeight = 600;
    }
    if ((base9 = this.options).fontSize == null) {
      base9.fontSize = 14;
    }
    if (this.options.disabled === true) {
      if (this.options.theme === "dark") {
        this.disabled_labelColor = "rgba(255,255,255,0.3)";
      } else {
        this.disabled_labelColor = "rgba(0,0,0,0.26)";
      }
    }
    _.defaults(this.options, {
      backgroundColor: null,
      height: 48,
      borderRadius: 2,
      width: this.options.labelText.length * ((this.options.fontSize + 3) / 2) + 16 + 16,
      name: "Flat button"
    });
    if (this.options.width < 88) {
      this.options.width = 88;
    }
    if (this.options.dense === true) {
      this.options.width = this.options.labelText.length * ((this.options.fontSize + 2) / 2) + 16 + 16;
      this.buttonHeight = 32;
    } else {
      this.buttonHeight = 36;
    }
    this.bttnBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: this.options.themeColor,
      clip: true,
      borderRadius: 2,
      opacity: 0.12,
      visible: false,
      name: "overlay"
    });
    this.rippleBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: null,
      name: "ripple parent"
    });
    this.ripple = new Layer({
      borderRadius: "100%",
      size: this.options.width,
      backgroundColor: this.options.themeColor,
      scale: 0.3,
      opacity: 0,
      name: "ripple"
    });
    this.label = new TextLayer({
      text: this.options.labelText,
      fontSize: this.options.fontSize,
      textTransform: "Uppercase",
      color: this.options.themeColor,
      fontWeight: this.options.fontWeight,
      fontFamily: this.options.fontFamily,
      letterSpacing: this.options.letterSpacing,
      name: "label"
    });
    FlatButton.__super__.constructor.call(this, this.options);
    this.bttnBG.parent = this.label.parent = this.rippleBG.parent = this;
    this.bttnBG.y = Align.center;
    this.rippleBG.y = Align.center;
    this.rippleBG.clip = true;
    this.ripple.parent = this.rippleBG;
    this.ripple.x = Align.center;
    this.ripple.y = Align.center;
    this.label.x = Align.center;
    this.label.y = Align.center(1);
    if (this.disableRipple === false) {
      this.ripple.destroy();
    }
    this.onClick(this.clicked);
    this.onMouseOver(this.Hover);
    this.onMouseOut(this.HoverOff);
    this.onMouseDown(this.mouseDown);
    this.onMouseUp(this.mouseUp);
  }

  FlatButton.define('disabled', {
    get: function() {
      return this.options.disabled;
    },
    set: function(value) {
      this.options.disabled = value;
      if (this.options.disabled === true) {
        this.label.color = this.disabled_labelColor;
      }
      if (this.options.disabled === false) {
        return this.label.color = this.options.themeColor;
      }
    }
  });

  FlatButton.prototype.Hover = function() {
    if (this.options.disabled === false) {
      return this.bttnBG.visible = true;
    }
  };

  FlatButton.prototype.HoverOff = function() {
    return this.bttnBG.visible = false;
  };

  FlatButton.prototype.mouseDown = function() {
    return this.bttnBG.brightness = 80;
  };

  FlatButton.prototype.mouseUp = function() {
    return this.bttnBG.brightness = 100;
  };

  FlatButton.prototype.clicked = function(ev) {
    var rippleA, rippleB;
    if (this.options.disabled === false) {
      if (this.options.disableRipple === false) {
        if (this.options.directionRipple === true) {
          this.ripple.midX = ev.offsetX;
          this.ripple.midY = ev.offsetY;
          this.ripple.size = (this.options.labelText.length * 8.5 + 16 + 16) * 1.5;
        }
        this.ripple.visible = true;
        this.ripple.scale = 0.4;
        this.ripple.opacity = 0.3;
        rippleA = new Animation({
          layer: this.ripple,
          properties: {
            scale: 0.8
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleB = new Animation({
          layer: this.ripple,
          properties: {
            scale: 1,
            opacity: 0
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleA.start();
        return rippleA.onAnimationEnd(function() {
          return rippleB.start();
        });
      }
    }
  };

  return FlatButton;

})(Layer);

exports.RaisedButton = (function(superClass) {
  extend(RaisedButton, superClass);

  function RaisedButton(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9;
    this.options = options != null ? options : {};
    this.HoverOff = bind(this.HoverOff, this);
    this.Hover = bind(this.Hover, this);
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base = this.options).labelText == null) {
      base.labelText = "Raised button";
    }
    if ((base1 = this.options).themeColor == null) {
      base1.themeColor = "#009688";
    }
    if ((base2 = this.options).disabled == null) {
      base2.disabled = false;
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    if ((base4 = this.options).directionRipple == null) {
      base4.directionRipple = false;
    }
    if ((base5 = this.options).fontFamily == null) {
      base5.fontFamily = "'Roboto', sans serif";
    }
    this.options.height = 48;
    if ((base6 = this.options).disableRipple == null) {
      base6.disableRipple = false;
    }
    if ((base7 = this.options).letterSpacing == null) {
      base7.letterSpacing = 0;
    }
    if ((base8 = this.options).fontWeight == null) {
      base8.fontWeight = 600;
    }
    if ((base9 = this.options).fontSize == null) {
      base9.fontSize = 14;
    }
    if (this.options.disabled === true) {
      if (this.options.theme === "dark") {
        this.disabled_BG = "rgba(255,255,255,0.12)";
        this.disabled_labelColor = "rgba(255,255,255,0.3)";
      } else {
        this.disabled_BG = "rgba(0,0,0,0.12)";
        this.disabled_labelColor = "rgba(0,0,0,0.26)";
      }
    }
    _.defaults(this.options, {
      backgroundColor: "",
      color: "",
      borderRadius: 2,
      name: "Raised button",
      width: this.options.labelText.length * ((this.options.fontSize + 3) / 2) + 16 + 16
    });
    if (this.options.width < 88) {
      this.options.width = 88;
    }
    if (this.options.dense === true) {
      this.buttonHeight = 32;
    } else {
      this.buttonHeight = 36;
    }
    this.shadow = new Shadow({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: this.options.themeColor,
      borderRadius: this.options.borderRadius,
      name: "shadows"
    });
    this.bttnBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      backgroundColor: "#fff",
      clip: true,
      borderRadius: 2,
      opacity: 0,
      name: "overlay"
    });
    this.rippleBG = new Layer({
      width: this.options.width,
      height: this.buttonHeight,
      clip: true,
      borderRadius: 2,
      name: "ripple parent",
      clip: true,
      backgroundColor: ""
    });
    this.ripple = new Layer({
      borderRadius: "100%",
      size: this.options.width,
      backgroundColor: "#fff",
      scale: 0.3,
      opacity: 0,
      name: "ripple"
    });
    this.rippleColor = this.ripple.backgroundColor;
    this.label = new TextLayer({
      text: this.options.labelText,
      fontSize: this.options.fontSize,
      textTransform: "Uppercase",
      color: "#fff",
      fontWeight: this.options.fontWeight,
      fontFamily: this.options.fontFamily,
      letterSpacing: this.options.letterSpacing,
      name: "label"
    });
    RaisedButton.__super__.constructor.call(this, this.options);
    this.label.parent = this.rippleBG.parent = this.shadow.parent = this.bttnBG.parent = this;
    this.shadow.y = this.bttnBG.y = this.rippleBG.y = Align.center;
    this.ripple.parent = this.rippleBG;
    this.ripple.x = Align.center;
    this.ripple.y = Align.center;
    this.label.x = Align.center;
    this.label.y = Align.center(1);
    if (this.disableRipple === false) {
      this.ripple.destroy();
    }
    this.onClick(this.clicked);
    this.onMouseOver(this.Hover);
    this.onMouseOut(this.HoverOff);
    this.onMouseDown(this.mouseDown);
    this.onMouseUp(this.mouseUp);
  }

  RaisedButton.define('disabled', {
    get: function() {
      return this.options.disabled;
    },
    set: function(value) {
      this.options.disabled = value;
      if (this.options.disabled === true) {
        this.label.color = this.disabled_labelColor;
        return this.shadow.backgroundColor = this.disabled_BG;
      } else {
        this.shadow.backgroundColor = this.options.themeColor;
        return this.label.color = "#fff";
      }
    }
  });

  RaisedButton.prototype.Hover = function() {
    var item, j, len, ref, results;
    if (this.options.disabled === false) {
      this.bttnBG.opacity = 0.12;
      ref = this.shadow.array;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        item = ref[j];
        results.push(item.states["switch"]("_8dp"));
      }
      return results;
    }
  };

  RaisedButton.prototype.HoverOff = function() {
    var item, j, len, ref, results;
    this.bttnBG.opacity = 0;
    ref = this.shadow.array;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      results.push(item.states["switch"]("_2dp"));
    }
    return results;
  };

  RaisedButton.prototype.mouseDown = function() {
    if (this.options.disabled === false) {
      this.brightness = 80;
      return this.bttnBG.opacity = 0;
    }
  };

  RaisedButton.prototype.mouseUp = function() {
    return this.brightness = 100;
  };

  RaisedButton.prototype.clicked = function(ev) {
    var rippleA, rippleB;
    if (this.options.disabled === false) {
      if (this.options.disableRipple === false) {
        if (this.options.directionRipple === true) {
          this.ripple.midX = ev.offsetX;
          this.ripple.midY = ev.offsetY;
          this.ripple.size = (this.options.labelText.length * 8.5 + 16 + 16) * 1.5;
        }
        this.ripple.visible = true;
        this.ripple.scale = 0.4;
        this.ripple.opacity = 0.3;
        rippleA = new Animation({
          layer: this.ripple,
          properties: {
            scale: 0.8
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleB = new Animation({
          layer: this.ripple,
          properties: {
            scale: 1,
            opacity: 0
          },
          time: 0.15,
          curve: Bezier.linear
        });
        rippleA.start();
        return rippleA.onAnimationEnd(function() {
          return rippleB.start();
        });
      }
    }
  };

  return RaisedButton;

})(Layer);

exports.FAB = (function(superClass) {
  extend(FAB, superClass);

  function FAB(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9, pd;
    this.options = options != null ? options : {};
    if (Utils.isDesktop()) {
      pd = 24;
    } else {
      pd = 16;
    }
    if ((base = this.options).mini == null) {
      base.mini = false;
    }
    if (this.options.mini === true || Screen.width < 460) {
      if ((base1 = this.options).width == null) {
        base1.width = 40;
      }
      if ((base2 = this.options).height == null) {
        base2.height = 40;
      }
    } else {
      if ((base3 = this.options).width == null) {
        base3.width = 56;
      }
      if ((base4 = this.options).height == null) {
        base4.height = 56;
      }
    }
    if ((base5 = this.options).x == null) {
      base5.x = Screen.width - (this.options.width + pd);
    }
    if ((base6 = this.options).y == null) {
      base6.y = Screen.height - (this.options.width + pd);
    }
    this.options.borderRadius = "100%";
    if ((base7 = this.options).themeColor == null) {
      base7.themeColor = "rgba(255, 255, 255, 0)";
    }
    if ((base8 = this.options).backgroundColor == null) {
      base8.backgroundColor = this.options.themeColor;
    }
    if ((base9 = this.options).icon == null) {
      base9.icon = "add";
    }
    this.overlay = new Layer({
      width: this.options.width,
      height: this.options.height,
      borderRadius: this.options.borderRadius,
      backgroundColor: "rgba(0,0,0,0.12)",
      visible: false,
      name: "overlay"
    });
    this.shadow = new Shadow({
      width: this.options.width,
      height: this.options.height,
      borderRadius: this.options.borderRadius,
      name: "shadow"
    });
    this.shadow.umbra.states.switchInstant("_0dp");
    this.shadow.penumbra.states.switchInstant("_0dp");
    this.shadow.ambient.states.switchInstant("_0dp");
    this.icon = new SystemIcon({
      width: 24,
      height: 24,
      icon: this.options.icon,
      color: "#3367CD",
      name: "icon"
    });
    FAB.__super__.constructor.call(this, this.options);
    this.icon.parent = this.overlay.parent = this.shadow.parent = this;
    this.icon.center();
    if (Utils.isDesktop()) {
      this.onMouseOver(this.Hover);
      this.onMouseOut(this.HoverOff);
      this.onMouseDown(this.mouseDown);
      this.onMouseUp(this.mouseUp);
    } else {
      this.onTapStart(this.mouseDown);
      this.onTapEnd(this.mouseUp);
    }
  }

  FAB.prototype.Hover = function() {
    this.shadow.umbra.states["switch"]("_2dp");
    this.shadow.penumbra.states["switch"]("_2dp");
    return this.shadow.ambient.states["switch"]("_2dp");
  };

  FAB.prototype.HoverOff = function() {
    this.shadow.umbra.states["switch"]("_0dp");
    this.shadow.penumbra.states["switch"]("_0dp");
    return this.shadow.ambient.states["switch"]("_0dp");
  };

  FAB.prototype.mouseDown = function() {
    this.overlay.visible = true;
    this.shadow.umbra.states.switchInstant("_2dp");
    this.shadow.penumbra.states.switchInstant("_2dp");
    return this.shadow.ambient.states.switchInstant("_2dp");
  };

  FAB.prototype.mouseUp = function() {
    this.overlay.visible = false;
    this.shadow.umbra.states.switchInstant("_0dp");
    this.shadow.penumbra.states.switchInstant("_0dp");
    return this.shadow.ambient.states.switchInstant("_0dp");
  };

  return FAB;

})(Layer);

exports.Checkboxes = (function(superClass) {
  extend(Checkboxes, superClass);

  function Checkboxes(options) {
    var ao, base, base1, base2, base3, base4, base5, base6, base7, box, boxCircle, boxColor, check, checkMask, checkY, checks, choice_label, cont, dp, i, j, ref, ripple, t1, t2, theme, themeColor;
    this.options = options != null ? options : {};
    if ((base = this.options).theme == null) {
      base.theme = "light";
    }
    theme = this.options.theme;
    if ((base1 = this.options).name == null) {
      base1.name = "checkboxes";
    }
    if ((base2 = this.options).disableRipple == null) {
      base2.disableRipple = false;
    }
    if (this.options.theme === "dark") {
      if ((base3 = this.options).screenColor == null) {
        base3.screenColor = "#212121";
      }
    } else {
      if ((base4 = this.options).screenColor == null) {
        base4.screenColor = "#fff";
      }
    }
    if ((base5 = this.options).choices == null) {
      base5.choices = ["apples", "bananas", "grapes"];
    }
    if ((base6 = this.options).checkY == null) {
      base6.checkY = -5;
    }
    if (this.themeColor == null) {
      this.themeColor = "#009688";
    }
    themeColor = this.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.boxColor = line_dark;
    } else {
      this.labelColor = label_light;
      this.boxColor = line_light;
    }
    boxColor = this.boxColor;
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base7 = this.options).labelText == null) {
      base7.labelText = "Select fruit";
    }
    _.defaults(this.options, {
      backgroundColor: "",
      height: this.options.choices.length * 36 + 32,
      width: 150
    });
    this.label = new Label({
      color: this.labelColor,
      text: this.options.labelText,
      name: "label"
    });
    Checkboxes.__super__.constructor.call(this, this.options);
    this.label.parent = this;
    checkY = this.options.checkY;
    t1 = 0.2;
    t2 = 0.2;
    checks = [];
    for (i = j = 0, ref = this.options.choices.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      cont = new Layer({
        parent: this,
        height: 40,
        y: i * 40 + 24,
        backgroundColor: "",
        x: 16,
        name: "container"
      });
      box = new Layer({
        backgroundColor: "",
        size: 20,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: this.boxColor,
        parent: cont,
        clip: true,
        name: this.options.choices[i],
        y: Align.center,
        name: this.options.choices[i]
      });
      box.animationOptions = {
        time: t1
      };
      box.states = {
        selected: {
          borderColor: this.options.themeColor,
          backgroundColor: this.options.themeColor
        },
        deselected: {
          borderColor: this.boxColor,
          backgroundColor: this.boxColor
        }
      };
      box.states.switchInstant("deselected");
      box.backgroundColor = this.options.screenColor;
      boxCircle = new Layer({
        parent: box,
        borderRadius: "100%",
        size: 30,
        scale: 0,
        backgroundColor: this.screenColor,
        x: Align.center(2),
        y: Align.center(2),
        name: "overlay"
      });
      boxCircle.animationOptions = {
        time: t1
      };
      boxCircle.states = {
        selected: {
          scale: 0
        },
        deselected: {
          scale: 1,
          backgroundColor: this.options.screenColor
        }
      };
      checkMask = new Layer({
        width: 0,
        height: 20,
        backgroundColor: "",
        parent: box,
        y: checkY,
        x: 3.5,
        parent: box,
        clip: true,
        name: "check mask"
      });
      checkMask.states.selected = {
        properties: {
          width: 20
        },
        time: t2
      };
      checkMask.states.deselected = {
        properties: {
          width: 0
        },
        time: 0.01
      };
      checkMask.states["switch"]("deselected");
      check = new Layer({
        html: '<svg width="13px" height="10px" viewBox="0 0 13 10"><g class="Checkies" stroke="none" stroke-width="1" fill="none"  stroke-linejoin="round"><polyline class="Path-2" stroke="#FFFFFF" stroke-width="2" points="1 5.25 4 9 12 1.5"></polyline></g></svg>',
        width: 20,
        height: 20,
        backgroundColor: "",
        parent: checkMask,
        name: this.options.choices[i],
        y: 0,
        name: "check"
      });
      check.style = {
        fontSize: "18px"
      };
      if (this.options.disableRipple === false) {
        ripple = new Layer({
          size: 50,
          borderRadius: "100px",
          parent: cont,
          y: Align.center,
          x: -15,
          opacity: 0.3,
          visible: false,
          name: "ripple"
        });
        ripple.states.selected = {
          backgroundColor: this.options.themeColor
        };
        if (this.options.theme === "light") {
          ripple.states.deselected = {
            backgroundColor: "#000"
          };
        }
        if (this.options.theme === "dark") {
          ripple.states.deselected = {
            backgroundColor: "#fff"
          };
        }
      }
      choice_label = new Label({
        text: this.options.choices[i],
        parent: cont,
        x: 30,
        color: this.labelColor,
        y: Align.center(-0.5),
        name: "choice ripple"
      });
      checks.push(box);
      ao = this.options;
      dp = this.options.disableRipple;
      ao.activeSelection = [];
      cont.onClick(function() {
        var k, len, pBox, pBoxCircle, pCheckMask, pRipple, pRippleB, pulsaA;
        ao.activeSelection = [];
        if (dp === false) {
          pRipple = this.children[1];
        }
        pCheckMask = this.children[0].children[1];
        pBox = this.children[0];
        pBoxCircle = this.children[0].children[0];
        pBox.stateCycle("selected", "deselected");
        pBoxCircle.stateCycle("selected", "deselected");
        if (pBox.states.current.name === "selected") {
          if (dp === false) {
            pRipple.states.switchInstant("selected");
          }
          Utils.delay(t1, function() {
            return pCheckMask.states["switch"]("selected");
          });
        } else {
          if (dp === false) {
            pRipple.states.switchInstant("deselected");
          }
          pCheckMask.states["switch"]("deselected");
        }
        for (k = 0, len = checks.length; k < len; k++) {
          box = checks[k];
          if (box.states.current.name === "selected") {
            ao.activeSelection.push(box.name);
          }
        }
        if (dp === false) {
          pRipple.visible = true;
          pRipple.scale = 0.4;
          pRipple.opacity = 0.4;
          if (pRipple.states.current.name === "selected") {
            pRipple.opacity = 0.8;
          }
          pulsaA = new Animation({
            layer: pRipple,
            properties: {
              scale: 0.8
            },
            time: 0.15,
            curve: Bezier.linear
          });
          pRippleB = new Animation({
            layer: pRipple,
            properties: {
              scale: 1,
              opacity: 0
            },
            time: 0.15,
            curve: Bezier.linear
          });
          pulsaA.start();
          pulsaA.onAnimationEnd(function() {});
          return pRippleB.start();
        }
      });
      cont.onMouseOver(function() {
        return this.children[0].borderColor = themeColor;
      });
      cont.onMouseOut(function() {
        if (this.children[0].states.current.name === "deselected") {
          return this.children[0].borderColor = boxColor;
        }
      });
    }
  }

  Checkboxes.define('themeColor', {
    get: function() {
      return this.options.themeColor;
    },
    set: function(value) {
      return this.options.themeColor = value;
    }
  });

  Checkboxes.define('choices', {
    get: function() {
      return this.options.choices;
    },
    set: function(value) {
      return this.options.choices = value;
    }
  });

  Checkboxes.define('activeSelection', {
    get: function() {
      return this.options.activeSelection;
    },
    set: function(value) {
      return this.options.activeSelection = value;
    }
  });

  return Checkboxes;

})(Layer);

exports.RadioButtons = (function(superClass) {
  extend(RadioButtons, superClass);

  function RadioButtons(options) {
    var base, base1, base2, base3, base4, bb, boxColor, check, checks, choice_label, circle, circles, cont, dp, helper, i, j, l, oc, ref, ripple, theme, themeColor;
    this.options = options != null ? options : {};
    if ((base = this.options).theme == null) {
      base.theme = "light";
    }
    theme = this.options.theme;
    if ((base1 = this.options).disableRipple == null) {
      base1.disableRipple = false;
    }
    if ((base2 = this.options).choices == null) {
      base2.choices = ["apples", "bananas", "grapes"];
    }
    if ((base3 = this.options).themeColor == null) {
      base3.themeColor = "#009688";
    }
    themeColor = this.options.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.boxColor = line_dark;
    } else {
      this.labelColor = label_light;
      this.boxColor = line_light;
    }
    boxColor = this.boxColor;
    if ((base4 = this.options).labelText == null) {
      base4.labelText = "Select fruit";
    }
    _.defaults(this.options, {
      backgroundColor: "",
      height: this.options.choices.length * 36 + 32,
      width: 150,
      name: "RadioButtons"
    });
    this.label = new Label({
      text: this.options.labelText,
      color: this.labelColor,
      name: "label"
    });
    RadioButtons.__super__.constructor.call(this, this.options);
    this.label.parent = this;
    l = this.options.choices;
    checks = [];
    circles = [];
    for (i = j = 0, ref = this.options.choices.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      cont = new Layer({
        height: 40,
        y: 40 * i + 24,
        backgroundColor: "",
        parent: this,
        name: this.options.choices[i],
        x: 16
      });
      circle = new Layer({
        backgroundColor: "",
        size: 20,
        borderRadius: "100%",
        borderWidth: 2,
        borderColor: this.boxColor,
        parent: cont,
        y: Align.center,
        name: "circle"
      });
      circle.animationOptions = {
        time: 0.001
      };
      circle.states = {
        selected: {
          borderColor: themeColor
        },
        deselected: {
          borderColor: this.boxColor
        }
      };
      circles.push(circle);
      circle.states["switch"]("deselected");
      if (i === this.options.activeSelection) {
        circle.states.switchInstant("selected");
      }
      check = new Layer({
        width: 10,
        height: 10,
        backgroundColor: this.options.themeColor,
        borderRadius: circle.borderRadius,
        parent: circle,
        x: 5,
        y: 5,
        name: i
      });
      check.animationOptions = {
        time: 0.17
      };
      check.states = {
        selected: {
          scale: 1
        },
        deselected: {
          scale: 0
        }
      };
      check.states.switchInstant("deselected");
      checks.push(check);
      if (i === this.options.activeSelection) {
        check.states.switchInstant("selected");
      }
      if (this.options.disableRipple === false) {
        ripple = new Layer({
          size: 50,
          borderRadius: "100px",
          parent: circle,
          y: Align.center(2),
          x: Align.center(2),
          opacity: 0.12,
          visible: false,
          backgroundColor: this.options.themeColor,
          name: "ripple"
        });
      }
      choice_label = new Label({
        text: this.options.choices[i],
        parent: cont,
        x: 30,
        color: this.labelColor,
        y: -0.5,
        y: Align.center,
        name: "choice label"
      });
      helper = new Layer({
        backgroundColor: "",
        height: 5,
        parent: cont,
        width: i,
        name: "helper"
      });
      this.activeSelection = null;
      bb = this.activeSelection;
      dp = this.options.disableRipple;
      oc = this.themeColor;
      cont.onClick(function() {
        var RippleA, RippleB, k, len, len1, m, pCheck, pCircle, pRipple;
        pRipple = this.children[0].children[1];
        pCheck = this.children[0].children[0];
        pCircle = this.children[0];
        for (k = 0, len = checks.length; k < len; k++) {
          check = checks[k];
          if (check.name === pCheck.name) {
            pCheck.states["switch"]("selected");
          } else {
            check.states["switch"]("deselected");
          }
        }
        for (m = 0, len1 = circles.length; m < len1; m++) {
          circle = circles[m];
          circle.states["switch"]("deselected");
        }
        pCircle.states.switchInstant("selected");
        bb = this.name;
        if (dp === false) {
          pRipple.visible = true;
          pRipple.scale = 0.4;
          pRipple.opacity = 0.2;
          if (pRipple.states.current.name === "selected") {
            pRipple.opacity = 0.3;
          }
          RippleA = new Animation({
            layer: pRipple,
            properties: {
              scale: 0.8
            },
            time: 0.15,
            curve: Bezier.linear
          });
          RippleB = new Animation({
            layer: pRipple,
            properties: {
              scale: 1,
              opacity: 0
            },
            time: 0.15,
            curve: Bezier.linear
          });
          RippleA.start();
          return RippleA.onAnimationEnd(function() {
            return RippleB.start();
          });
        }
      });
      cont.onMouseOver(function() {
        return this.children[0].borderColor = themeColor;
      });
      cont.onMouseOut(function() {
        if (this.children[0].states.current.name === "deselected") {
          return this.children[0].borderColor = boxColor;
        }
      });
      this.onClick(function() {
        return this.options.activeSelection = bb;
      });
    }
  }

  RadioButtons.define('activeSelection', {
    get: function() {
      return this.options.activeSelection;
    },
    set: function(value) {
      return this.options.activeSelection = value;
    }
  });

  RadioButtons.define('theme', {
    get: function() {
      return this.options.theme;
    },
    set: function(value) {
      return this.options.theme = value;
    }
  });

  return RadioButtons;

})(Layer);

exports.Switch = (function(superClass) {
  extend(Switch, superClass);

  function Switch(options) {
    var base, base1, base2, base3, base4, ripple, rippleAni, shadow, state, theme, themeColor;
    this.options = options != null ? options : {};
    if ((base = this.options).disableRipple == null) {
      base.disableRipple = false;
    }
    if ((base1 = this.options).activeOnStart == null) {
      base1.activeOnStart = false;
    }
    if ((base2 = this.options).active == null) {
      base2.active = false;
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    theme = this.options.theme;
    if ((base4 = this.options).themeColor == null) {
      base4.themeColor = "#009688";
    }
    themeColor = this.options.themeColor;
    this.thumbColor = this.options.themeColor;
    this.trackColor = this.options.themeColor;
    this.thumb_light_off = "#FAFAFA";
    this.thumb_dark_off = "#bdbdbd";
    this.track_light_off = "rgba(0,0,0,0.38)";
    this.track_dark_off = "rgba(255,255,255,0.3)";
    this.ripple_dark_off = "rgba(255,255,255, 1)";
    this.ripple_light_off = "rgba(0,0,0, 1)";
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.thumbOff = this.thumb_dark_off;
      this.trackOff = this.track_dark_off;
      this.rippleOff = this.ripple_dark_off;
    } else {
      this.labelColor = label_light;
      this.thumbOff = this.thumb_light_off;
      this.trackOff = this.track_light_off;
      this.rippleOff = this.ripple_light_off;
    }
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    _.defaults(this.options, {
      backgroundColor: "",
      height: 48,
      width: 150
    });
    this.track = new Layer({
      width: 40,
      height: 15,
      borderRadius: 15,
      name: "track"
    });
    this.track.animationOptions = {
      time: 0.2
    };
    this.track.states = {
      on: {
        backgroundColor: this.options.themeColor,
        opacity: 0.5
      },
      off: {
        backgroundColor: this.trackOff,
        opacity: 0.38
      }
    };
    delete this.track.states["default"];
    this.track.states.switchInstant("off");
    this.ripple = new Layer({
      size: 50,
      scale: 1,
      borderRadius: 50,
      opacity: 0.2,
      visible: false,
      name: "ripple",
      backgroundColor: this.options.themeColor
    });
    this.thumb = new Layer({
      size: 19,
      borderRadius: 100,
      name: "thumb",
      backgroundColor: this.thumbOff
    });
    this.thumb.animationOptions = {
      time: 0.3
    };
    this.thumb.states = {
      on: {
        x: 21,
        backgroundColor: this.options.themeColor
      },
      off: {
        x: 0,
        backgroundColor: this.thumbOff
      }
    };
    delete this.thumb.states["default"];
    this.thumb.states.switchInstant("off");
    this.label = new Label({
      text: this.options.labelText,
      color: this.labelColor,
      name: "label"
    });
    Switch.__super__.constructor.call(this, this.options);
    this.track.parent = this;
    this.track.y = Align.center;
    this.thumb.parent = this;
    this.thumb.y = Align.center;
    this.label.parent = this;
    this.label.x = 55;
    this.label.y = Align.center;
    if (this.options.disableRipple === false) {
      this.ripple.parent = this.thumb;
      this.ripple.x = -15;
      this.ripple.y = -15;
      ripple = this.ripple;
    }
    shadow = new Shadow({
      parent: this.thumb,
      borderRadius: 100,
      width: this.thumb.width,
      height: this.thumb.width,
      name: "shadow"
    });
    if (this.options.activeOnStart === true) {
      this.thumb.states.switchInstant("on");
      this.track.states.switchInstant("on");
      this.active = true;
    }
    rippleAni = function() {
      var pulsaA, rippleB;
      ripple.visible = true;
      ripple.scale = 0.4;
      pulsaA = new Animation({
        layer: ripple,
        properties: {
          scale: 0.8
        },
        time: 0.15,
        curve: Bezier.linear
      });
      rippleB = new Animation({
        layer: ripple,
        properties: {
          scale: 1,
          opacity: 0
        },
        time: 0.15,
        curve: Bezier.linear
      });
      pulsaA.start();
      return pulsaA.onAnimationEnd(function() {
        return rippleB.start();
      });
    };
    state = null;
    this.onClick(function() {
      var posX;
      this.track.stateCycle();
      this.thumb.stateCycle();
      if (this.options.disableRipple === false) {
        if (this.thumb.states.current.name === "on") {
          this.ripple.backgroundColor = this.options.themeColor;
          this.ripple.opacity = 0.4;
          posX = 20;
          rippleAni();
          this.options.active = true;
        } else {
          posX = 0;
          this.ripple.backgroundColor = this.rippleOff;
          this.ripple.opacity = 0.2;
          rippleAni();
          this.options.active = false;
        }
      }
      if (this.thumb.states.current.name === "on") {
        return this.options.active = true;
      } else {
        return this.options.active = false;
      }
    });
  }

  Switch.define('active', {
    get: function() {
      return this.options.active;
    },
    set: function(value) {
      return this.options.active = value;
    }
  });

  return Switch;

})(Layer);

TextField = (function(superClass) {
  var INPUT_HIDE_PSUEDO_UI, INPUT_SELECTOR_NUMBER, INPUT_SELECTOR_SEARCH;

  extend(TextField, superClass);

  INPUT_HIDE_PSUEDO_UI = "{ -webkit-appearance: none; display: none; }";

  INPUT_SELECTOR_NUMBER = "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button";

  INPUT_SELECTOR_SEARCH = "input[type=search]::-webkit-search-cancel-button";

  Events.Input = "InputField.OnInput";

  Events.Focus = "InputField.OnFocus";

  Events.Blur = "InputField.OnBlur";

  Events.Valid = "InputField.OnValid";

  Events.Invalid = "InputField.OnInvalid";

  Events.Match = "InputField.OnMatch";

  TextField.define("value", {
    get: function() {
      return this.input.value;
    },
    set: function(v) {
      if (!v) {
        return;
      }
      if (this.input) {
        return this.changeInputValue(v);
      }
    }
  });

  function TextField(options) {
    var base, base1, base10, base11, base12, base13, base14, base15, base2, base3, base4, base5, base6, base7, base8, base9, boxColor, inputStyle, key, ref, theme, themeColor, val;
    this.options = options != null ? options : {};
    this.isNumber = false;
    this.isSearch = false;
    this.isEmpty = true;
    this.isValid = null;
    this.originalTextColor = null;
    if ((base = this.options).name == null) {
      base.name = "Basic text field";
    }
    this.options.borderRadius = 0;
    if ((base1 = this.options).placeHolderFocus == null) {
      base1.placeHolderFocus = null;
    }
    this.options.placeHolderColor = "";
    if ((base2 = this.options).placeHolder == null) {
      base2.placeHolder = "";
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    theme = this.options.theme;
    if ((base4 = this.options).themeColor == null) {
      base4.themeColor = "#009688";
    }
    themeColor = this.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = Inputlabel_dark;
      this.inputColor = input_dark;
      this.lineColor = "rgba(255,255,255,0.7)";
      this.lineHoverColor = "rgba(255,255,255,1)";
      this.labelFocusOpacity = 1;
      this.options.backgroundColor = "rgba(0,0,0,0.01)";
    } else {
      this.labelColor = Inputlabel_light;
      this.inputColor = input_light;
      this.lineColor = "rgba(0,0,0,0.42)";
      this.lineHoverColor = "rgba(0,0,0,0.87)";
      this.labelFocusOpacity = 0.87;
      this.options.backgroundColor = "rgba(255,255,255,0.01)";
    }
    boxColor = this.boxColor;
    this.options.color = this.inputColor;
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if (Utils.isMobile()) {
      if ((base5 = this.options).fontSize == null) {
        base5.fontSize = 16 * 2;
      }
      if ((base6 = this.options).lineHeight == null) {
        base6.lineHeight = 24 * 2;
      }
      if (this.options.lineHeight != null) {
        this.options.lineHeight = this.options.lineHeight + "px";
      }
      this.options.height = 70;
    } else {
      if ((base7 = this.options).fontSize == null) {
        base7.fontSize = 16;
      }
      if ((base8 = this.options).lineHeight == null) {
        base8.lineHeight = 24;
      }
      if (this.options.lineHeight != null) {
        this.options.lineHeight = this.options.lineHeight + "px";
      }
      this.options.height = 70;
    }
    if ((base9 = this.options).labelSize == null) {
      base9.labelSize = 16;
    }
    if ((base10 = this.options).fontFamily == null) {
      base10.fontFamily = "'Roboto', sans serif";
    }
    if ((base11 = this.options).fontWeight == null) {
      base11.fontWeight = 400;
    }
    if ((base12 = this.options).letterSpacing == null) {
      base12.letterSpacing = 0;
    }
    if ((base13 = this.options).helperText == null) {
      base13.helperText = "Helper text";
    }
    if ((base14 = this.options).labelText == null) {
      base14.labelText = "Label";
    }
    if ((base15 = this.options).helperTextVisble == null) {
      base15.helperTextVisble = false;
    }
    _.defaults(this.options, {
      width: 200
    });
    this.line = new Layer({
      width: this.options.width,
      height: 1,
      clip: true,
      name: "line",
      backgroundColor: this.lineColor
    });
    this.lineRipple = new Layer({
      backgroundColor: this.options.themeColor,
      width: 0,
      height: 2,
      name: "ripple"
    });
    this.label = new Label({
      text: this.options.labelText,
      fontSize: this.options.labelSize,
      color: this.labelColor,
      name: "label"
    });
    this.helperText = new Label({
      fontSize: 12,
      text: this.options.helperText,
      color: this.labelColor,
      name: "helper Text",
      visible: this.options.helperTextVisble
    });
    this.inputParent = new Layer({
      backgroundColor: this.options.backgroundColor,
      width: this.options.width,
      height: 28,
      name: "input parent"
    });
    TextField.__super__.constructor.call(this, this.options);
    this.helperText.parent = this.line.parent = this.inputParent.parent = this;
    this.helperText.y = 50;
    this.label.parent = this;
    this.label.y = 20;
    this.lineRipple.parent = this.line;
    this.lineRipple.x = Align.center;
    this.line.y = 44;
    this.inputParent.y = 10;
    this.onClick(this.clicked);
    this.onTap(this.clicked);
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
    this.on(Events.Blur, function(value, layer) {
      this.line.height = 1;
      this.lineRipple.width = 0;
      this.lineRipple.x = Align.center;
      this.helperText.color = this.labelColor;
      this.line.backgroundColor = this.lineColor;
      this.options.color = this.inputColor;
      this.label.color = this.labelColor;
      if (this.isEmpty) {
        return this.label.animate({
          properties: {
            fontSize: 16,
            y: 20,
            color: this.labelColor
          },
          time: 0.2
        });
      }
    });
    switch (this.options.type) {
      case "search":
        this.isSearch = true;
        break;
      case "number":
        this.isNumber = true;
        break;
      case "numbers-only":
      case "number-only":
        this.isNumber = true;
        this.options.type = this.options.pattern != null ? "number" : "text";
        this.options.pattern = this.options.pattern != null ? this.options.pattern : PATTERN_NUMBER;
    }
    this.html += (function() {
      switch (false) {
        case !this.isNumber:
          return "<style type='text/css'>" + INPUT_SELECTOR_NUMBER + INPUT_HIDE_PSUEDO_UI + "</style>";
        case !this.isSearch:
          return "<style type='text/css'>" + INPUT_SELECTOR_SEARCH + INPUT_HIDE_PSUEDO_UI + "</style>";
        default:
          return "";
      }
    }).call(this);
    if (this.options.placeHolderColor != null) {
      this.html += "<style type='text/css'>::-webkit-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-moz-placeholder { color: " + this.options.placeHolderColor + "; } :-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } :placeholder-shown { color: " + this.options.placeHolderColor + "; }</style>";
    }
    this.input = document.createElement("input");
    this.input.type = this.options.type;
    if (this.options.value != null) {
      this.input.value = this.options.value;
    }
    if (this.options.placeHolder != null) {
      this.input.placeholder = this.options.placeHolder;
    }
    if (this.options.pattern != null) {
      this.input.pattern = this.options.pattern;
    }
    if (this.options.maxLength != null) {
      this.input.setAttribute("maxLength", this.options.maxLength);
    }
    this.input.setAttribute("autocapitalize", (this.options.autoCapitalize === true ? "on" : "off"));
    this.input.setAttribute("autocomplete", (this.options.autoComplete === true ? "on" : "off"));
    this.input.setAttribute("autocorrect", (this.options.autoCorrect === true ? "on" : "off"));
    this.inputParent._element.appendChild(this.input);
    this.isEmpty = !(((ref = this.options.value) != null ? ref.length : void 0) > 0);
    this.originalTextColor = this.options.color;
    inputStyle = {
      font: this.options.fontWeight + " " + this.options.fontSize + "px/" + this.options.lineHeight + " " + this.options.fontFamily,
      outline: "none",
      textIndent: this.options.indent + "px",
      backgroundColor: "transparent",
      height: "22px",
      width: "100%",
      pointerEvents: "none",
      margin: "0",
      padding: "0",
      "-webkit-appearance": "none"
    };
    for (key in inputStyle) {
      val = inputStyle[key];
      this.input.style[key] = val;
    }
    if (this.options.color != null) {
      this.input.style.color = this.options.color;
    }
    this.input.onfocus = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (_this.options.placeHolderFocus != null) {
          _this.input.placeholder = _this.options.placeHolderFocus;
        }
        document.body.scrollTop = 0;
        return _this.emit(Events.Focus, _this.input.value, _this);
      };
    })(this);
    this.input.onblur = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (!(_this.input.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
          _this.input.placeholder = _this.options.placeHolder;
        }
        return _this.emit(Events.Blur, _this.input.value, _this);
      };
    })(this);
    this.input.oninput = (function(_this) {
      return function() {
        var ref1;
        _this.isEmpty = !(((ref1 = _this.input.value) != null ? ref1.length : void 0) > 0);
        return _this.emit(Events.Input, _this.input.value, _this);
      };
    })(this);
    this.on(Events.TouchEnd, function() {
      return this.input.focus();
    });
    this.on("change:color", function() {
      return this.changeInputTextColor();
    });
    this.on("keydown", function(event) {
      if (event.keyCode === 13) {
        this.line.height = 1;
        this.lineRipple.width = 0;
        this.lineRipple.x = Align.center;
        this.helperText.color = this.labelColor;
        this.line.backgroundColor = this.lineColor;
        this.options.color = this.inputColor;
        this.label.color = this.labelColor;
        if (this.isEmpty) {
          return this.label.animate({
            properties: {
              fontSize: 16,
              y: 20,
              color: this.labelColor
            },
            time: 0.2
          });
        }
      }
    });
  }

  TextField.prototype.clear = function() {
    this.input.value = "";
    this.isValid = null;
    return this.isEmpty = true;
  };

  TextField.prototype.changeInputTextColor = function() {
    return this.input.style.color = this.color.toHexString();
  };

  TextField.prototype.changeInputValue = function(v) {
    this.input.value = v;
    return this.input.oninput();
  };

  TextField.prototype.clicked = function() {
    this.label.animate({
      properties: {
        fontSize: 12,
        y: 0,
        color: this.options.themeColor,
        opacity: this.labelFocusOpacity
      },
      time: 0.2
    });
    this.line.animate({
      properties: {
        height: 2
      },
      time: 0.2
    });
    return this.lineRipple.animate({
      properties: {
        width: this.options.width,
        x: 0
      },
      time: 0.2
    });
  };

  TextField.prototype.hoverOn = function() {
    this.line.height = 2;
    return this.line.backgroundColor = this.lineHoverColor;
  };

  TextField.prototype.hoverOff = function() {
    this.line.height = 1;
    return this.line.backgroundColor = this.lineColor;
  };

  return TextField;

})(Layer);

exports.TextField_Basic = (function(superClass) {
  extend(TextField_Basic, superClass);

  function TextField_Basic(options) {
    this.options = options != null ? options : {};
    TextField_Basic.__super__.constructor.call(this, this.options);
  }

  return TextField_Basic;

})(TextField);

exports.TextField_Validation = (function(superClass) {
  extend(TextField_Validation, superClass);

  function TextField_Validation(options) {
    var base, base1, base2, base3, base4, base5, base6, base7, base8, base9, eyeOff, eyeOn, input;
    this.options = options != null ? options : {};
    if ((this.options.pattern != null) || (this.options.match != null)) {
      this.shouldCheckValidity = true;
    }
    if ((base = this.options).name == null) {
      base.name = "password field";
    }
    if ((base1 = this.options).type == null) {
      base1.type = "password";
    }
    if ((base2 = this.options).pattern == null) {
      base2.pattern = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
    }
    if ((base3 = this.options).eyeVisible == null) {
      base3.eyeVisible = true;
    }
    this.options.color = this.inputColor;
    if (this.options.theme === "dark") {
      this.labelColor = Inputlabel_dark;
    } else {
      this.labelColor = Inputlabel_light;
    }
    this.red = "#FF1744";
    if ((base4 = this.options).helperText == null) {
      base4.helperText = "helperText";
    }
    if ((base5 = this.options).labelText == null) {
      base5.labelText = "Password";
    }
    if ((base6 = this.options).helperTextVisible == null) {
      base6.helperTextVisible = false;
    }
    _.defaults(this.options, {
      backgroundColor: "",
      width: 200
    });
    if (this.options.pattern === "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$") {
      if ((base7 = this.options).helperText == null) {
        base7.helperText = "UpperCase, LowerCase and Number";
      }
    } else if (this.options.pattern === "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$") {
      if ((base8 = this.options).helperText == null) {
        base8.helperText = "Must contain 8 characters, 1 uppercase, 1 lowercase, and 1 number/special character";
      }
    } else {
      if ((base9 = this.options).helperText == null) {
        base9.helperText = "helperText";
      }
    }
    this.errorText = new Label({
      fontSize: 12,
      text: this.options.helperText,
      color: this.red,
      name: "helper Text",
      visible: false
    });
    this.eyeContianer = new Layer({
      width: 22,
      height: 22,
      backgroundColor: "",
      visible: this.options.eyeVisible,
      name: "eyeContianer"
    });
    this.eyeOn = new Layer({
      width: 22,
      height: 16,
      backgroundColor: "",
      visible: false,
      name: "eyeOne",
      html: '<svg width="22px" height="16px" viewBox="0 0 22 16" version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M8.91205938,5.8907 C9.50605938,5.2977 10.2090594,4.9997 11.0210594,4.9997 C11.8340594,4.9997 12.5370594,5.2977 13.1310594,5.8907 C13.7240594,6.4847 14.0210594,7.1877 14.0210594,7.9997 C14.0210594,8.8127 13.7240594,9.5157 13.1310594,10.1097 C12.5370594,10.7027 11.8340594,10.9997 11.0210594,10.9997 C10.2090594,10.9997 9.50605938,10.7027 8.91205938,10.1097 C8.31805938,9.5157 8.02105938,8.8127 8.02105938,7.9997 C8.02105938,7.1877 8.31805938,6.4847 8.91205938,5.8907 M7.48205938,11.5387 C8.46705938,12.5237 9.64605938,13.0157 11.0210594,13.0157 C12.3960594,13.0157 13.5760594,12.5237 14.5600594,11.5387 C15.5450594,10.5547 16.0370594,9.3757 16.0370594,7.9997 C16.0370594,6.6247 15.5450594,5.4457 14.5600594,4.4607 C13.5760594,3.4767 12.3960594,2.9847 11.0210594,2.9847 C9.64605938,2.9847 8.46705938,3.4767 7.48205938,4.4607 C6.49805938,5.4457 6.00605938,6.6247 6.00605938,7.9997 C6.00605938,9.3757 6.49805938,10.5547 7.48205938,11.5387 M4.31805938,2.5627 C6.31805938,1.1877 8.55305938,0.4997 11.0210594,0.4997 C13.4900594,0.4997 15.7240594,1.1877 17.7250594,2.5627 C19.7250594,3.9377 21.1620594,5.7497 22.0370594,7.9997 C21.1620594,10.2497 19.7250594,12.0627 17.7250594,13.4377 C15.7240594,14.8127 13.4900594,15.4997 11.0210594,15.4997 C8.55305938,15.4997 6.31805938,14.8127 4.31805938,13.4377 C2.31805938,12.0627 0.881059375,10.2497 0.006059375,7.9997 C0.881059375,5.7497 2.31805938,3.9377 4.31805938,2.5627" id="Fill-1" fill="' + this.labelColor + '"></path></g></svg>'
    });
    this.eyeOff = new Layer({
      width: 23,
      height: 19,
      backgroundColor: "",
      visible: true,
      name: "eyeOff",
      html: '<svg width="23px" height="19px" viewBox="0 0 23 19" version="1.1" ><g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M11.0331594,6 L11.1741594,6 C11.9861594,6 12.6891594,6.297 13.2831594,6.891 C13.8771594,7.484 14.1741594,8.188 14.1741594,9 L14.1741594,9.188 L11.0331594,6 Z M11.1741594,3.984 C10.5491594,3.984 9.93915937,4.109 9.34615937,4.359 L7.18915937,2.203 C8.40815937,1.734 9.73615937,1.5 11.1741594,1.5 C13.6421594,1.5 15.8691594,2.187 17.8531594,3.562 C19.8381594,4.938 21.2671594,6.75 22.1421594,9 C21.3921594,10.844 20.2521594,12.422 18.7201594,13.734 L15.8141594,10.828 C16.0641594,10.235 16.1891594,9.625 16.1891594,9 C16.1891594,7.625 15.6971594,6.445 14.7131594,5.461 C13.7281594,4.477 12.5491594,3.984 11.1741594,3.984 L11.1741594,3.984 Z M6.72115937,6.797 C6.34615937,7.547 6.15815937,8.281 6.15815937,9 C6.15815937,10.375 6.65015937,11.555 7.63515937,12.539 C8.61915937,13.523 9.79915937,14.016 11.1741594,14.016 C11.8921594,14.016 12.6271594,13.828 13.3771594,13.453 L11.8301594,11.906 C11.5801594,11.969 11.3611594,12 11.1741594,12 C10.3611594,12 9.65815937,11.703 9.06415937,11.109 C8.47015937,10.516 8.17415937,9.813 8.17415937,9 C8.17415937,8.813 8.20515937,8.594 8.26715937,8.344 L6.72115937,6.797 Z M1.18915937,1.266 L2.45515937,0 L20.1741594,17.719 L18.9081594,18.984 C18.7521594,18.828 18.2601594,18.344 17.4311594,17.531 C16.6031594,16.719 15.9701594,16.094 15.5331594,15.656 C14.1891594,16.219 12.7361594,16.5 11.1741594,16.5 C8.70515937,16.5 6.47115937,15.813 4.47115937,14.438 C2.47015937,13.062 1.03315937,11.25 0.158159375,9 C0.939159375,7.062 2.18915937,5.407 3.90815937,4.031 C3.53315937,3.656 3.01015937,3.125 2.33815937,2.437 C1.66615937,1.75 1.28315937,1.359 1.18915937,1.266 L1.18915937,1.266 Z" id="Fill-3" fill="' + this.labelColor + '"></path></g></svg>'
    });
    TextField_Validation.__super__.constructor.call(this, this.options);
    this.eyeContianer.parent = this;
    this.eyeOn.parent = this.eyeOff.parent = this.eyeContianer;
    this.eyeContianer.x = this.width - 22;
    this.eyeContianer.y = 13;
    this.eyeOn.y = 0;
    this.errorText.parent = this;
    this.errorText.y = this.helperText.y;
    this.onClick(this.clicked);
    this.onTap(this.clicked);
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
    eyeOff = this.eyeOff;
    eyeOn = this.eyeOn;
    this.eyeContianer.onClick(function() {
      if (eyeOff.visible === true) {
        eyeOff.visible = false;
        eyeOn.visible = true;
        return input.type = "text";
      } else {
        input.type = "password";
        eyeOff.visible = true;
        return eyeOn.visible = false;
      }
    });
    this.on(Events.Blur, function(value, layer) {
      var errorWobble1, errorWobble2, errorWobble5;
      this.label.color = this.labelColor;
      this.line.height = 1;
      this.lineRipple.width = 0;
      this.lineRipple.x = Align.center;
      if (this.isEmpty) {
        this.label.animate({
          properties: {
            fontSize: this.options.labelSize,
            y: 20,
            color: this.labelColor
          },
          time: 0.2
        });
        if (this.helperTextVisible === true) {
          this.helperText.visible = true;
        }
        return this.errorText.visible = false;
      } else if (this.isValid) {
        this.line.backgroundColor = this.lineColor;
        this.label.color = this.labelColor;
        this.helperText.color = this.labelColor;
        if (this.helperTextVisible === true) {
          this.helperText.visible = true;
        }
        return this.errorText.visible = false;
      } else {
        this.line.backgroundColor = this.red;
        this.label.color = this.red;
        this.errorText.visible = true;
        errorWobble1 = new Animation({
          layer: this.label,
          properties: {
            x: 5
          },
          time: 0.05
        });
        errorWobble2 = new Animation({
          layer: this.label,
          properties: {
            x: -5
          },
          time: 0.05
        });
        errorWobble5 = new Animation({
          layer: this.label,
          properties: {
            x: 0
          },
          time: 0.025
        });
        errorWobble1.start();
        errorWobble1.onAnimationEnd(function() {
          return errorWobble2.start();
        });
        errorWobble2.onAnimationEnd(function() {
          return errorWobble5.start();
        });
        return this.helperText.visible = false;
      }
    });
    this.input.oninput = (function(_this) {
      return function() {
        var ref;
        _this.isEmpty = !(((ref = _this.input.value) != null ? ref.length : void 0) > 0);
        _this.emit(Events.Input, _this.input.value, _this);
        return _this.checkValidity();
      };
    })(this);
    input = this.input;
  }

  TextField_Validation.prototype.checkValidity = function() {
    var ref, validity;
    if (!this.shouldCheckValidity) {
      return;
    }
    if (this.options.pattern != null) {
      validity = this.input.checkValidity();
      this.isEmpty = !(((ref = this.input.value) != null ? ref.length : void 0) > 0);
      if (this.isValid !== validity || this.isEmpty) {
        if (this.isEmpty || !validity) {
          this.isValid = false;
          this.emit(Events.Invalid, this.input.value, this);
        } else {
          this.isValid = true;
          this.emit(Events.Valid, this.input.value, this);
        }
      }
    }
    if (this.checkMatch()) {
      this.isValid = true;
      return this.emit(Events.Match, this.input.value, this);
    }
  };

  TextField_Validation.prototype.checkMatch = function() {
    var j, len, match, ref;
    if (this.options.match == null) {
      return false;
    }
    if (Array.isArray(this.options.match)) {
      ref = this.options.match;
      for (j = 0, len = ref.length; j < len; j++) {
        match = ref[j];
        if (this.input.value.indexOf(match) > -1) {
          return true;
        }
      }
    } else {
      if (this.input.value.indexOf(this.options.match) > -1) {
        return true;
      }
    }
    return false;
  };

  TextField_Validation.prototype.clicked = function() {
    this.label.animate({
      properties: {
        fontSize: 12,
        y: -6,
        color: this.options.themeColor
      },
      time: 0.2
    });
    this.line.animate({
      properties: {
        height: 2
      },
      time: 0.2
    });
    this.lineRipple.animate({
      properties: {
        width: this.options.width,
        x: 0
      },
      time: 0.2
    });
    this.line.backgroundColor = this.lineColor;
    this.label.color = this.themeColor;
    this.helperText.color = this.labelColor;
    this.errorText.visible = false;
    if (this.options.helperTextVisible === true) {
      return this.helperText.visible = true;
    }
  };

  TextField_Validation.prototype.hoverOn = function() {
    this.line.height = 2;
    return this.line.backgroundColor = this.lineHoverColor;
  };

  TextField_Validation.prototype.hoverOff = function() {
    this.line.height = 1;
    return this.line.backgroundColor = this.lineColor;
  };

  TextField_Validation.prototype.eyeClick = function() {
    return this.eye.stateCycle("visible", "visibleOff");
  };

  return TextField_Validation;

})(TextField);

exports.TextArea = (function(superClass) {
  var INPUT_HIDE_PSUEDO_UI, INPUT_SELECTOR_NUMBER, INPUT_SELECTOR_SEARCH, PATTERN_NUMBER, _reflowSiblings, _resizeParent;

  extend(TextArea, superClass);

  PATTERN_NUMBER = "[0-9]*";

  INPUT_HIDE_PSUEDO_UI = "{ -webkit-appearance: none; display: none; }";

  INPUT_SELECTOR_NUMBER = "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button";

  INPUT_SELECTOR_SEARCH = "input[type=search]::-webkit-search-cancel-button";

  Events.Input = "InputField.OnInput";

  Events.Focus = "InputField.OnFocus";

  Events.Blur = "InputField.OnBlur";

  Events.Valid = "InputField.OnValid";

  Events.Invalid = "InputField.OnInvalid";

  Events.Match = "InputField.OnMatch";

  TextArea.define("value", {
    get: function() {
      return this.textarea.value;
    },
    set: function(v) {
      if (!v) {
        return;
      }
      if (this.input) {
        return this.changeInputValue(v);
      }
    }
  });

  function TextArea(options) {
    var base, base1, base10, base11, base12, base13, base14, base15, base16, base17, base18, base19, base2, base20, base21, base22, base3, base4, base5, base6, base7, base8, base9, key, ref, ref1, theme, themeColor, val;
    this.options = options != null ? options : {};
    this._update = bind(this._update, this);
    this.isNumber = false;
    this.isSearch = false;
    this.isEmpty = true;
    this.isValid = null;
    this.originalTextColor = null;
    if ((this.options.pattern != null) || (this.options.match != null)) {
      this.shouldCheckValidity = true;
    }
    if ((base = this.options).name == null) {
      base.name = "Text area";
    }
    this.options.backgroundColor = "rgba(255,255,255,0.01)";
    if ((base1 = this.options).height == null) {
      base1.height = 180;
    }
    if ((base2 = this.options).type == null) {
      base2.type = "text";
    }
    if ((base3 = this.options).fontWeight == null) {
      base3.fontWeight = 400;
    }
    if ((base4 = this.options).fontFamily == null) {
      base4.fontFamily = "'Roboto', sans serif";
    }
    if ((base5 = this.options).indent == null) {
      base5.indent = 0;
    }
    if ((base6 = this.options).placeHolderFocus == null) {
      base6.placeHolderFocus = null;
    }
    if ((base7 = this.options).placeHolderColor == null) {
      base7.placeHolderColor = null;
    }
    if ((base8 = this.options).width == null) {
      base8.width = 300;
    }
    if ((base9 = this.options).themeColor == null) {
      base9.themeColor = "#009688";
    }
    if ((base10 = this.options).labelText == null) {
      base10.labelText = "Type something...";
    }
    if ((base11 = this.options).theme == null) {
      base11.theme = "light";
    }
    theme = this.options.theme;
    if ((base12 = this.options).themeColor == null) {
      base12.themeColor = "#009688";
    }
    themeColor = this.options.themeColor;
    this.red = "#FF1744";
    if (this.options.theme === "dark") {
      this.labelColor = Inputlabel_dark;
      this.inputColor = input_dark;
      this.lineColor = line_dark;
      this.lineHoverColor = "rgba(255,255,255,1)";
      this.labelFocusOpacity = 1;
      this.lineColor = line_dark;
      this.options.color = "#fff";
    } else {
      this.labelColor = Inputlabel_light;
      this.inputColor = input_light;
      this.lineColor = line_light;
      this.lineHoverColor = "rgba(0,0,0,0.87)";
      this.labelFocusOpacity = 0.87;
      this.lineColor = line_light;
      this.options.color = "rgba(0,0,0,0.87)";
    }
    this.options.color = this.inputColor;
    if (Utils.isMobile()) {
      if ((base13 = this.options).fontSize == null) {
        base13.fontSize = 16 * 2;
      }
      if ((base14 = this.options).lineHeight == null) {
        base14.lineHeight = 24 * 2;
      }
      this.options.style = {
        "padding": "56px 32px 32px 32px"
      };
    } else {
      if ((base15 = this.options).fontSize == null) {
        base15.fontSize = 16;
      }
      if ((base16 = this.options).lineHeight == null) {
        base16.lineHeight = 24;
      }
      this.options.style = {
        "padding": "28px 16px 16px 16px"
      };
    }
    if ((base17 = this.options).labelSize == null) {
      base17.labelSize = 16;
    }
    Utils.insertCSS('@import url(https://fonts.googleapis.com/css?family=Roboto);');
    if ((base18 = this.options).fontFamily == null) {
      base18.fontFamily = "'Roboto', sans serif";
    }
    if ((base19 = this.options).fontWeight == null) {
      base19.fontWeight = 400;
    }
    if ((base20 = this.options).letterSpacing == null) {
      base20.letterSpacing = 0;
    }
    if ((base21 = this.options).limitOn == null) {
      base21.limitOn = true;
    }
    if (this.options.limitOn === false) {
      this.options.characterLimit = 1000000000000;
    } else {
      if ((base22 = this.options).characterLimit == null) {
        base22.characterLimit = 200;
      }
    }
    this.label = new Label({
      text: this.options.labelText,
      fontSize: this.options.labelSize,
      color: this.labelColor,
      name: "label",
      name: "label"
    });
    this.limit = new Layer({
      html: "0 / " + this.options.characterLimit,
      backgroundColor: "",
      width: 100,
      height: 12,
      visible: this.options.limitOn,
      name: "limit"
    });
    this.limit.style = {
      color: this.labelColor,
      fontFamily: this.options.fontFamily,
      fontSize: "12px",
      lineHeight: "12px",
      textAlign: "right",
      letterSpacing: this.options.letterSpacing
    };
    this.errorText = new Label({
      fontSize: 12,
      color: this.red,
      name: "error text",
      visible: false,
      text: "Exeeds text limit."
    });
    this.border = new Layer({
      width: this.options.width,
      height: this.options.height,
      backgroundColor: "",
      borderWidth: 1,
      borderColor: this.lineColor,
      borderRadius: 2,
      name: "border"
    });
    TextArea.__super__.constructor.call(this, this.options);
    this.label.parent = this.border.parent = this;
    this.limit.parent = this;
    this.errorText.parent = this;
    this.label.y = 20;
    this.label.x = 16;
    this.limit.x = this.width - 100;
    this.limit.y = this.height + 8;
    this.errorText.y = this.height + 8;
    this.onClick(this.clicked);
    this.on(Events.Blur, function(value, layer) {
      return this.blurred();
    });
    this.on(Events.Focus, function(value, layer) {
      return this.focus();
    });
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
    this.on(Events.Input, function(value, layer) {
      this.limit.html = this.value.length + " / " + this.options.characterLimit;
      if (this.value.length > this.options.characterLimit) {
        this.errorText.visible = true;
        this.limit.color = this.red;
        this.border.borderColor = this.red;
        return this.label.color = this.red;
      } else {
        this.errorText.visible = false;
        this.limit.color = this.labelColor;
        this.border.borderColor = this.options.themeColor;
        return this.label.color = this.options.themeColor;
      }
    });
    switch (this.options.type) {
      case "search":
        this.isSearch = true;
        break;
      case "number":
        this.isNumber = true;
        break;
      case "numbers-only":
      case "number-only":
        this.isNumber = true;
        this.options.type = this.options.pattern != null ? "number" : "text";
        this.options.pattern = this.options.pattern != null ? this.options.pattern : PATTERN_NUMBER;
    }
    this.html += (function() {
      switch (false) {
        case !this.isNumber:
          return "<style type='text/css'>" + INPUT_SELECTOR_NUMBER + INPUT_HIDE_PSUEDO_UI + "</style>";
        case !this.isSearch:
          return "<style type='text/css'>" + INPUT_SELECTOR_SEARCH + INPUT_HIDE_PSUEDO_UI + "</style>";
        default:
          return "";
      }
    }).call(this);
    if (this.options.placeHolderColor != null) {
      this.html += "<style type='text/css'>::-webkit-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-moz-placeholder { color: " + this.options.placeHolderColor + "; } :-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } :placeholder-shown { color: " + this.options.placeHolderColor + "; }</style>";
    }
    this.textarea = document.createElement("textarea");
    if (this.options.value != null) {
      this.textarea.value = this.options.value;
    }
    if (this.options.placeHolder != null) {
      this.input.placeholder = this.options.placeHolder;
    }
    if (this.options.maxLength != null) {
      this.textarea.setAttribute("maxLength", this.options.maxLength);
    }
    this.textarea.setAttribute("autocapitalize", (this.options.autoCapitalize === true ? "on" : "off"));
    this.textarea.setAttribute("autocomplete", (this.options.autoComplete === true ? "on" : "off"));
    this.textarea.setAttribute("autocorrect", (this.options.autoCorrect === true ? "on" : "off"));
    this._element.appendChild(this.textarea);
    this.isEmpty = !(((ref = this.options.value) != null ? ref.length : void 0) > 0);
    this.originalTextColor = this.options.color;
    this._textAreaStyle = {
      fontSize: this.options.fontSize + "px",
      lineHeight: this.options.lineHeight + "px",
      fontWeight: "" + this.options.fontWeight,
      fontFamily: "" + this.options.fontFamily,
      outline: "none",
      textIndent: this.options.indent + "px",
      backgroundColor: "transparent",
      height: "100%",
      width: "100%",
      pointerEvents: "none",
      margin: "0",
      overflow: "hidden",
      resize: "none",
      "-webkit-appearance": "none"
    };
    ref1 = this._textAreaStyle;
    for (key in ref1) {
      val = ref1[key];
      this.textarea.style[key] = val;
    }
    if (this.options.color != null) {
      this.textarea.style.color = this.options.color;
    }
    this.textarea.onfocus = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (_this.options.placeHolderFocus != null) {
          _this.input.placeholder = _this.options.placeHolderFocus;
        }
        document.body.scrollTop = 0;
        return _this.emit(Events.Focus, _this.textarea.value, _this);
      };
    })(this);
    this.textarea.onblur = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (!(_this.textarea.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
          _this.input.placeholder = _this.options.placeHolder;
        }
        return _this.emit(Events.Blur, _this.textarea.value, _this);
      };
    })(this);
    this._textAreaStyleonblur = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (!(_this.input.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
          _this.input.placeholder = _this.options.placeHolder;
        }
        return _this.emit(Events.Blur, _this.input.value, _this);
      };
    })(this);
    this.textarea.oninput = (function(_this) {
      return function() {
        var ref2;
        _this.isEmpty = !(((ref2 = _this.textarea.value) != null ? ref2.length : void 0) > 0);
        _this.emit(Events.Input, _this.textarea.value, _this);
        return _this.checkValidity();
      };
    })(this);
    this.on(Events.TouchEnd, function() {
      return this.textarea.focus();
    });
    this.on("change:color", function() {
      return this.changeInputTextColor();
    });
    this.textarea.onkeydown = (function(_this) {
      return function() {
        return _this._update();
      };
    })(this);
    this.textarea.onkeyup = (function(_this) {
      return function() {
        return _this._update();
      };
    })(this);
    this.textarea.change = (function(_this) {
      return function() {
        return _this._update();
      };
    })(this);
  }

  _resizeParent = function(layer, parentMinHeight, bottomPadding) {
    var allChildrenMaxYs, j, layerParent, len, max, ref, tallestChildMaxY;
    layerParent = layer.parent;
    allChildrenMaxYs = [];
    ref = layerParent.children;
    for (j = 0, len = ref.length; j < len; j++) {
      max = ref[j];
      allChildrenMaxYs.push(max.maxY);
    }
    tallestChildMaxY = Math.max.apply(null, allChildrenMaxYs);
    return layerParent.height = Math.max(tallestChildMaxY + bottomPadding, parentMinHeight);
  };

  _reflowSiblings = function(layer, layerMaxY) {
    var a, j, layerList, ref, ref1, results, yDiff;
    layerList = layer.parent.children;
    results = [];
    for (a = j = ref = layerList.indexOf(layer) + 1, ref1 = layerList.length; ref <= ref1 ? j < ref1 : j > ref1; a = ref <= ref1 ? ++j : --j) {
      yDiff = layerList[a].y - layerMaxY;
      results.push(layerList[a].y = layer.maxY + yDiff);
    }
    return results;
  };

  TextArea.prototype._update = function() {
    return setTimeout((function(_this) {
      return function() {
        var _trueValue, calcHeight, layerMaxY;
        layerMaxY = _this.maxY;
        _trueValue = _this.textarea.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n/g, "<br/>&nbsp;");
        if (_trueValue.trim() === "") {
          _trueValue = "a";
        }
        calcHeight = Utils.round(Utils.textSize(_trueValue, _this._textAreaStyle, {
          width: _this.width
        }).height, 0);
        _this.height = Math.max(calcHeight, _this.options.minHeight);
        if (_this.options.reflowSiblings === true) {
          _reflowSiblings(_this, layerMaxY);
        }
        if (_this.options.resizeParent === true) {
          return _resizeParent(_this, _this.parentOgHeight, _this.options.parentBottomPadding);
        }
      };
    })(this));
  };

  TextArea.prototype.checkValidity = function() {
    if (!this.shouldCheckValidity) {

    }
  };

  TextArea.prototype.clear = function() {
    this.input.value = "";
    this.isValid = null;
    return this.isEmpty = true;
  };

  TextArea.prototype.changeInputTextColor = function() {
    return this.input.style.color = this.color.toHexString();
  };

  TextArea.prototype.changeInputValue = function(v) {
    this.input.value = v;
    return this.input.oninput();
  };

  TextArea.prototype.clicked = function() {
    this.label.animate({
      properties: {
        fontSize: 12,
        y: 8,
        color: this.options.themeColor,
        x: 16
      },
      time: 0.2
    });
    this.border.borderColor = this.options.themeColor;
    return this.border.borderWidth = 2;
  };

  TextArea.prototype.error = function() {
    return this.borderColor = this.red;
  };

  TextArea.prototype.focus = function() {
    this.label.fontSize = 12;
    this.borderColor = this.options.themeColor;
    this.border.borderWidth = 2;
    return this.label.color = this.labelColor;
  };

  TextArea.prototype.hoverOn = function() {
    this.border.borderWidth = 2;
    return this.options.borderColor = this.lineHoverColor;
  };

  TextArea.prototype.hoverOff = function() {
    this.border.borderWidth = 1;
    return this.borderColor = this.lineColor;
  };

  TextArea.prototype.blurred = function(value, layer) {
    this.label.color = this.labelColor;
    this.border.borderColor = this.lineColor;
    if (this.isEmpty) {
      this.label.animate({
        properties: {
          fontSize: 16,
          y: 20,
          x: 16,
          color: this.labelColor
        },
        time: 0.2
      });
      this.border.borderColor = this.labelColor;
    }
    if (this.value.length > this.options.characterLimit) {
      this.errorText.visible = true;
      this.limit.color = this.red;
      this.border.borderColor = this.red;
      this.label.color = this.red;
    }
    return this.border.borderWidth = 1;
  };

  return TextArea;

})(Layer);

exports.TextField_Dropdown = (function(superClass) {
  extend(TextField_Dropdown, superClass);

  function TextField_Dropdown(options) {
    var activeSelection, as, base, base1, base2, base3, base4, base5, base6, choice, choice_label, container, container_ScrollArea, i, item, j, k, label, labelColor, len, placeHolder, ref, ref1, shadow, slider, themeColor;
    this.options = options != null ? options : {};
    if (this.options.theme === "dark") {
      if ((base = this.options).screenColor == null) {
        base.screenColor = "#000";
      }
    }
    if ((base1 = this.options).choices == null) {
      base1.choices = ["apple", "banana", "blueberry", "cantaloupe", "cherry", "coconut", "fig", "grape", "grapefruit", "guava", "kiwifruit", "lemon", "lime", "lychee", "mango", "melon", "orange", "papaya", "passionfruit", "peach", "pear", "pineapple", "plum", "pomegranate", "raspberry", "strawberry", "watermelon"];
    }
    if ((base2 = this.options).labelText == null) {
      base2.labelText = "Select a fruit";
    }
    if ((base3 = this.options).theme == null) {
      base3.theme = "light";
    }
    if ((base4 = this.options).visibleItems == null) {
      base4.visibleItems = 4;
    }
    if ((base5 = this.options).activeSelection == null) {
      base5.activeSelection = null;
    }
    if ((base6 = this.options).themeColor == null) {
      base6.themeColor = "#009688";
    }
    themeColor = this.themeColor;
    if (this.options.theme === "dark") {
      this.labelColor = label_dark;
      this.lineColor = line_dark;
      this.lineHoverColor = line_dark_hover;
      this.inputColor = input_dark;
    } else {
      this.labelColor = label_light;
      this.lineColor = line_light;
      this.lineHoverColor = line_light_hover;
      this.inputColor = input_light;
    }
    _.defaults(this.options, {
      backgroundColor: "",
      height: 50,
      color: "#E91E63",
      width: 150,
      name: "DropDown"
    });
    this.label = new Label({
      text: this.options.labelText,
      color: this.labelColor,
      name: "label",
      fontSize: 12,
      visible: false
    });
    this.placeHolder = new Label({
      text: this.options.labelText,
      color: this.inputColor,
      y: 20,
      name: "label"
    });
    this.arrow = new Layer({
      html: '<svg version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="' + this.lineColor + '" points="0.660133877 0 9.17482706 0 4.91748047 5"></polygon></g></svg>',
      size: 24,
      backgroundColor: "",
      color: "#555",
      width: 10,
      height: 5,
      name: "Arrow"
    });
    this.line = new Layer({
      height: 1,
      width: this.options.width,
      y: 49,
      backgroundColor: this.lineColor,
      name: "line"
    });
    this.container = new Layer({
      width: this.options.width,
      borderRadius: 2,
      backgroundColor: "#fff",
      height: this.options.visibleItems * 50 + 20,
      clip: true,
      name: "container"
    });
    TextField_Dropdown.__super__.constructor.call(this, this.options);
    this.container.states = {
      open: {
        height: this.options.visibleItems * 50 + 20,
        y: 0
      },
      closed: {
        height: 0,
        y: 50
      }
    };
    this.container.states.switchInstant("closed");
    this.container.animationOptions = {
      time: 0.5
    };
    this.label.parent = this;
    this.placeHolder.parent = this;
    this.container.parent = this.arrow.parent = this.line.parent = this;
    this.arrow.y = Align.center(2);
    this.arrow.x = this.options.width - 24;
    this.container.y = 50;
    placeHolder = this.placeHolder;
    label = this.label;
    container = this.container;
    activeSelection = this.activeSelection;
    labelColor = this.labelColor;
    shadow = new Shadow({
      parent: this,
      height: this.options.visibleItems * 50 + 20,
      width: this.width,
      borderRadius: this.container.borderRadius,
      y: 0,
      name: "shadows"
    });
    ref = shadow.array;
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      item.states.open = {
        y: 0,
        height: this.options.visibleItems * 50 + 20
      };
      item.states.closed = {
        height: 0,
        y: 50
      };
      item.animationOptions = {
        time: 0.5
      };
      item.states.switchInstant("_2dp");
      item.states.switchInstant("closed");
    }
    container_ScrollArea = new ScrollComponent({
      parent: this.container,
      width: this.container.width,
      backgroundColor: "",
      height: this.options.visibleItems * 50 + 20,
      name: "scrollArea"
    });
    container_ScrollArea.content.draggable.overdrag = false;
    container_ScrollArea.content.draggable.bounce = false;
    container_ScrollArea.mouseWheelEnabled = true;
    slider = new SliderComponent({
      width: 5,
      height: container_ScrollArea.height - 30,
      y: 15,
      borderRadius: 0,
      parent: container_ScrollArea,
      x: container_ScrollArea.width - 5,
      backgroundColor: "",
      min: 0,
      max: (this.options.choices.length * 50) - 200,
      value: -15,
      name: slider
    });
    slider.fill.backgroundColor = "";
    slider.knob.backgroundColor = "BDBDBD";
    slider.knob.shadowY = 0;
    slider.knob.shadowSpread = 0;
    slider.knob.shadowBlur = 0;
    slider.knob.borderRadius = 1;
    slider.knob.width = 5;
    slider.knob.height = 30;
    slider.on("change:value", function() {
      return container_ScrollArea.content.y = -this.value;
    });
    container_ScrollArea.onMove(function() {
      return slider.value = container_ScrollArea.scrollY;
    });
    as = null;
    for (i = k = 0, ref1 = this.options.choices.length; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
      choice = new Layer({
        parent: container_ScrollArea.content,
        width: container_ScrollArea.width,
        height: 50,
        y: 50 * i + 10,
        backgroundColor: "",
        name: "choice"
      });
      choice_label = new Label({
        text: this.options.choices[i],
        parent: choice,
        x: 20,
        y: Align.center,
        name: this.options.choices[i] + "label",
        color: label_light
      });
      choice.onMouseOver(function() {
        return this.backgroundColor = "#eee";
      });
      choice.onMouseOut(function() {
        return this.backgroundColor = "#fff";
      });
      choice.onClick(function() {
        var len1, m, ref2, results;
        as = this.children[0].text;
        placeHolder.text = this.children[0].text;
        placeHolder.color = labelColor;
        container.states["switch"]("closed");
        label.visible = true;
        ref2 = shadow.array;
        results = [];
        for (m = 0, len1 = ref2.length; m < len1; m++) {
          item = ref2[m];
          results.push(item.states["switch"]("closed"));
        }
        return results;
      });
    }
    container = this.container;
    this.onClick(function() {
      var len1, m, ref2;
      ref2 = shadow.array;
      for (m = 0, len1 = ref2.length; m < len1; m++) {
        item = ref2[m];
        item.states["switch"]("open");
      }
      container.states["switch"]("open");
      return this.activeSelection = as;
    });
    if (Utils.isDesktop()) {
      this.onMouseOver(this.hoverOn);
      this.onMouseOut(this.hoverOff);
    }
  }

  TextField_Dropdown.prototype.hoverOn = function() {
    this.line.height = 2;
    return this.line.backgroundColor = this.lineHoverColor;
  };

  TextField_Dropdown.prototype.hoverOff = function() {
    this.line.height = 1;
    return this.line.backgroundColor = this.lineColor;
  };

  TextField_Dropdown.define('color', {
    get: function() {
      return this.options.color;
    },
    set: function(value) {
      return this.options.color = value;
    }
  });

  TextField_Dropdown.define('choices', {
    get: function() {
      return this.options.choices;
    },
    set: function(value) {
      return this.options.choices = value;
    }
  });

  TextField_Dropdown.define('activeSelection', {
    get: function() {
      return this.options.activeSelection;
    },
    set: function(value) {
      return this.options.activeSelection = value;
    }
  });

  return TextField_Dropdown;

})(Layer);

exports.AppBar = (function(superClass) {
  extend(AppBar, superClass);

  function AppBar(options) {
    var at, base, base1, base10, base11, base12, base13, base2, base3, base4, base5, base6, base7, base8, base9, isMob, menuIcon, setTime, shadow, statusBar, statusBarTime, statusIcons;
    this.options = options != null ? options : {};
    if ((base = this.options).width == null) {
      base.width = Screen.width;
    }
    if ((base1 = this.options).labelText == null) {
      base1.labelText = "Form";
    }
    if ((base2 = this.options).fontSize == null) {
      base2.fontSize = 22;
    }
    if ((base3 = this.options).fontWeight == null) {
      base3.fontWeight = 500;
    }
    if ((base4 = this.options).fontFamily == null) {
      base4.fontFamily = "'Roboto', sans serif";
    }
    this.options.labelColor = "#fff";
    if ((base5 = this.options).themeColor == null) {
      base5.themeColor = "#009688";
    }
    if ((base6 = this.options).backgroundColor == null) {
      base6.backgroundColor = this.options.themeColor;
    }
    if ((base7 = this.options).mobile == null) {
      base7.mobile = false;
    }
    if ((base8 = this.options).menuIconVisble == null) {
      base8.menuIconVisble = true;
    }
    if ((base9 = this.options).name == null) {
      base9.name = "app bar";
    }
    if ((base10 = this.options).statusIconsY == null) {
      base10.statusIconsY = Align.center(-8);
    }
    if ((base11 = this.options).menuIconY == null) {
      base11.menuIconY = Align.center();
    }
    this.appCont = new Layer({
      height: 56,
      width: this.options.width,
      backgroundColor: "",
      name: "app bar contianer"
    });
    if (Utils.isMobile() || this.options.mobile === true) {
      this.statusBar = new Layer({
        width: this.options.width,
        height: 24,
        backgroundColor: "rgba(0,0,0,0.30)",
        name: "status bar"
      });
      if ((base12 = this.options).height == null) {
        base12.height = 80;
      }
      this.appCont.y = 24;
    } else {
      if ((base13 = this.options).height == null) {
        base13.height = 56;
      }
    }
    this.menuIcon = new Layer({
      size: 48,
      backgroundColor: "",
      visible: this.options.menuIconVisble,
      name: "menu icon"
    });
    this.title = new TextLayer({
      text: this.options.labelText,
      fontSize: this.options.fontSize,
      fontFamily: this.options.fontFamily,
      color: this.options.labelColor,
      fontWeight: this.options.fontWeight,
      name: "title"
    });
    AppBar.__super__.constructor.call(this, this.options);
    shadow = new Shadow({
      width: this.width,
      height: this.height,
      name: "shadows"
    });
    shadow.parent = this;
    this.title.parent = this;
    this.title.y = Align.center();
    this.title.x = 16;
    this.appCont.parent = this;
    this.menuIcon.parent = this.title.parent = this.appCont;
    this.menuIcon.x = 16;
    this.menuIcon.y = this.options.menuIconY;
    if (this.menuIcon.visible === true) {
      this.title.x = 48 + 16 + 16;
    }
    menuIcon = new Layer({
      html: '<svg width="18px" height="12px" viewBox="0 0 18 12"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M0,2 L18,2 L18,0 L0,0 L0,2 Z M0,6.97 L18,6.97 L18,5 L0,5 L0,6.97 Z M0,12 L18,12 L18,10 L0,10 L0,12 Z" fill="#fff"></path></g></svg>',
      width: 18,
      height: 12,
      parent: this.menuIcon,
      x: Align.center(),
      y: Align.center(),
      backgroundColor: "",
      name: "icon"
    });
    if (Utils.isMobile() || this.options.mobile === true) {
      this.statusBar.parent = this;
      this.title.y = Align.center(10);
      statusBarTime = new TextLayer({
        fontSize: 13,
        parent: this.statusBar,
        y: Align.center,
        x: this.width - 55,
        color: "#fff",
        fontFamily: "'Roboto', sans serif",
        textAlign: "right",
        name: "status bar time"
      });
      setTime = function() {
        var date, hour, minute, zone;
        date = new Date;
        minute = date.getMinutes();
        hour = date.getHours();
        zone = "AM";
        if (hour < 10) {
          hour = '0' + hour;
        }
        if (hour > 12) {
          hour = hour - 12;
          zone = "PM";
        } else {
          zone = "AM";
        }
        if (minute < 10) {
          minute = '0' + minute;
        }
        statusBarTime.text = hour + ":" + minute + " " + zone;
        return Utils.delay(30, function() {
          return setTime();
        });
      };
      setTime();
      statusIcons = new Layer({
        name: "status icons",
        parent: this.statusBar,
        html: '<svg width="53px" height="16px"><g><path d="M34.6093216,0.60903749 L34.6093216,15.1074592 L20.1108999,15.1074592 L34.6093216,0.60903749 Z M15.294614,7.04747475 L15.3280105,7.08087121 L9.16854076,14.7039773 L3.00907106,7.08087121 L3.04246752,7.04747475 L0.729399342,4.18844697 C3.47371752,2.26016414 6.28773268,1.29602273 9.16854076,1.29602273 C12.0508009,1.29602273 14.863364,2.26016414 17.6091342,4.18844697 L15.294614,7.04747475 Z M51.2229421,2.14400069 C51.574133,2.14400069 51.8764952,2.26795043 52.1243947,2.51772794 C52.3741722,2.76750545 52.5,3.06798967 52.5,3.42105863 L52.5,13.8142529 C52.5,14.1654438 52.3741722,14.4602939 52.1243947,14.6950472 C51.8764952,14.9298005 51.574133,15.0462382 51.2229421,15.0462382 L44.3568776,15.0462382 C44.0038086,15.0462382 43.7033244,14.9298005 43.4535469,14.6950472 C43.2037694,14.4602939 43.0798196,14.1654438 43.0798196,13.8142529 L43.0798196,3.42105863 C43.0798196,3.06798967 43.2037694,2.76750545 43.4535469,2.51772794 C43.7033244,2.26795043 44.0038086,2.14400069 44.3568776,2.14400069 L45.8968592,2.14400069 L45.8968592,0.296022727 L49.6829604,0.296022727 L49.6829604,2.14400069 L51.2229421,2.14400069 Z" fill="#fff"></path></g></svg>',
        backgroundColor: "",
        width: 53,
        height: 16,
        y: this.options.statusIconsY,
        x: this.width - statusBarTime.width - 70
      });
      this.title.y = Align.center;
    }
    at = this;
    statusBar = this.statusBar;
    isMob = this.options.mobile;
    window.onresize = function() {
      at.width = Screen.width;
      shadow.umbra.width = Screen.width;
      shadow.ambient.width = Screen.width;
      shadow.penumbra.width = Screen.width;
      if (Utils.isMobile() || isMob === true) {
        statusBar.width = Screen.width;
        statusBarTime.x = Screen.width - 55;
        return statusIcons.x = Screen.width - statusBarTime.width - 68;
      }
    };
  }

  return AppBar;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvTWF0ZXJpYWxDb21wb25lbnRzLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgTWF0ZXJpYWxDb21wb25lbnRzXG4jIE1hZGUgYnkgVGVzcyBHYWRkIGh0dHBzOi8vbWVkaXVtLmNvbS9AdGVzc2dhZGRcbiMgRWRpdGVkIGJ5IE1vcmdhbiBCcm9hY2hhIHN0cmljdGx5IGZvciB1c2UgaW4gdGhpcyBwcm9qZWN0LlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuIyBUaGlzIHZlcnNpb24gY29udGFpbnNcbiMgMC4gZ2xvYmFsIGVsZW1lbnRzXG4jIDEuIENvbG9yXG4jIDIuIEZsYXRCdXR0b25cbiMgMy4gUmFpc2VkQnV0dG9uXG4jIDQuIEZBQlxuIyA1LiBDaGVja2JveGVzXG4jIDYuIFJhZGlvIEJ1dHRvbnNcbiMgNy4gU3dpdGNoXG4jIDguIFRleHRGaWVsZCAoVGV4dCBmaWVsZHMgZnJhbmtlbnN0aWVuZCBmcm9tIEpvcmRhbiBSb2JlcnQgRG9ic29uJ3MgSW5wdXRGaWVsZClcbiMgOS4gVGV4dEZpZWxkX24gKFRleHQgZmllbGRzIGZyYW5rZW5zdGllbmQgZnJvbSBKb3JkYW4gUm9iZXJ0IERvYnNvbidzIElucHV0RmllbGQpXG4jIDEwLiBUZXh0QXJlYSAoZnJhbmtlbnN0aWVuZCBmcm9tIEpvcmRhbiBSb2JlcnQgRG9ic29uJ3MgSW5wdXRGaWVsZCBhbmQgQmxhaW5lIEJpbGxpbmdzbGV5J3MgQXV0b2dyb3cpXG4jIDExLiBUZXh0RmllbGRfRHJvcGRvd25cbiMgMTIuIEFwcEJhclxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAwLiBHbG9iYWwgRWxlbWVudHMgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIy0tLS0tLS0tLWNvbG9yc1xubGFiZWxfbGlnaHQgPSBcInJnYmEoMCwwLDAsMC44NylcIlxubGFiZWxfZGFyayA9IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5saW5lX2xpZ2h0ID0gXCJyZ2JhKDAsMCwwLDAuNTQpXCJcbmxpbmVfZGFyayA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCJcbmlucHV0X2xpZ2h0ID0gXCJyZ2JhKDAsMCwwLDAuNTQpXCJcbmlucHV0X2RhcmsgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxuSW5wdXRsYWJlbF9saWdodCA9IGJveF9saWdodCA9IFwicmdiYSgwLDAsMCwwLjU0KVwiXG5JbnB1dGxhYmVsX2RhcmsgPSBib3hfZGFyayA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCJcbmxpbmVfbGlnaHRfaG92ZXIgPSBcInJnYmEoMCwwLDAsMC44NylcIlxubGluZV9kYXJrX2hvdmVyID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcblxuXG4jLS0tLS0tLS0tdGV4dGxheWVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY2xhc3MgTGFiZWwgZXh0ZW5kcyBUZXh0TGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7JylcblxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMTZcblx0XHRAb3B0aW9ucy50ZXh0ID89ICdMYWJlbCdcblx0XHRAb3B0aW9ucy5jb2xvciA/PSBsYWJlbF9saWdodFxuXHRcdEBvcHRpb25zLmZvbnRXZWlnaHQgPz0gNDAwXG5cdFx0QG9wdGlvbnMubGV0dGVyU3BhY2luZyA/PSAwXG5cdFx0QG9wdGlvbnMubmFtZSA/PSBcImxhYmVsXCJcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblxuXG4jLS0tLS0tLS0tc2hhZG93LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBTaGFkb3cgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IFwiXCJcblxuXHRcdEB1bWJyYSA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHRib3JkZXJSYWRpdXM6IEBvcHRpb25zLmJvcmRlclJhZGl1c1xuXHRcdFx0c2hhZG93Q29sb3I6IFwicmdiYSgwLDAsMCwwLjE0KVwiXG5cdFx0XHRuYW1lOiBcInVtYnJhXCJcblxuXHRcdEB1bWJyYS5zdGF0ZXMgPVxuXHRcdFx0XzEyZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDEyXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDE3XG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMlxuXHRcdFx0XzhkcDpcblx0XHRcdFx0c2hhZG93WTogNFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAxNVxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF82ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDZcblx0XHRcdFx0c2hhZG93Qmx1cjogMTBcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfNGRwOlxuXHRcdFx0XHRzaGFkb3dZOiAyXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDRcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMmRwOlxuXHRcdFx0XHRzaGFkb3dZOiAwXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDJcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMWRwOlxuXHRcdFx0XHRzaGFkb3dZOiAwXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDJcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMGRwOlxuXHRcdFx0XHRzaGFkb3dZOiAwXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDBcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cblx0XHRAcGVudW1icmEgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAb3B0aW9ucy5ib3JkZXJSYWRpdXNcblx0XHRcdHNoYWRvd0NvbG9yOiBcInJnYmEoMCwwLDAsMC4xMilcIlxuXHRcdFx0bmFtZTogXCJwZW51bWJyYVwiXG5cblx0XHRAcGVudW1icmEuc3RhdGVzID1cblx0XHRcdF8xMmRwOlxuXHRcdFx0XHRzaGFkb3dZOiA1XG5cdFx0XHRcdHNoYWRvd0JsdXI6IDIyXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogNFxuXHRcdFx0XzhkcDpcblx0XHRcdFx0c2hhZG93WTogM1xuXHRcdFx0XHRzaGFkb3dCbHVyOiAxNFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDNcblx0XHRcdF82ZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDFcblx0XHRcdFx0c2hhZG93Qmx1cjogMThcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfNGRwOlxuXHRcdFx0XHRzaGFkb3dZOiA0XG5cdFx0XHRcdHNoYWRvd0JsdXI6IDVcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMmRwOlxuXHRcdFx0XHRzaGFkb3dZOiAyXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDJcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMWRwOlxuXHRcdFx0XHRzaGFkb3dZOiAyXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDJcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfMGRwOlxuXHRcdFx0XHRzaGFkb3dZOiAwXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDBcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cblx0XHRAYW1iaWVudD0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuaGVpZ2h0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdHNoYWRvd0NvbG9yOiBcInJnYmEoMCwwLDAsMC4yMClcIlxuXHRcdFx0bmFtZTogXCJhbWJpZW50XCJcblx0XHRcdGJvcmRlclJhZGl1cyA6IEBvcHRpb25zLmJvcmRlclJhZGl1c1xuXG5cdFx0QGFtYmllbnQuc3RhdGVzID1cblx0XHRcdF8xMmRwOlxuXHRcdFx0XHRzaGFkb3dZOiA3XG5cdFx0XHRcdHNoYWRvd0JsdXI6IDhcblx0XHRcdFx0c2hhZG93U3ByZWFkOiAwXG5cdFx0XHRfOGRwOlxuXHRcdFx0XHRzaGFkb3dZOiA4XG5cdFx0XHRcdHNoYWRvd0JsdXI6IDEwXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMVxuXHRcdFx0XzZkcDpcblx0XHRcdFx0c2hhZG93WTogM1xuXHRcdFx0XHRzaGFkb3dCbHVyOiA1XG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogMFxuXHRcdFx0XzRkcDpcblx0XHRcdFx0c2hhZG93WTogMVxuXHRcdFx0XHRzaGFkb3dCbHVyOiAxMFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF8yZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDFcblx0XHRcdFx0c2hhZG93Qmx1cjogM1xuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF8xZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDFcblx0XHRcdFx0c2hhZG93Qmx1cjogM1xuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblx0XHRcdF8wZHA6XG5cdFx0XHRcdHNoYWRvd1k6IDBcblx0XHRcdFx0c2hhZG93Qmx1cjogMFxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IDBcblxuXHRcdEB1bWJyYS5hbmltYXRpb25PcHRpb25zID0gdGltZTogMC4yXG5cdFx0QHBlbnVtYnJhLmFuaW1hdGlvbk9wdGlvbnMgPSB0aW1lOiAwLjJcblx0XHRAYW1iaWVudC5hbmltYXRpb25PcHRpb25zID0gdGltZTogMC4yXG5cblx0XHRAdW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMmRwXCJcblx0XHRAcGVudW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMmRwXCJcblx0XHRAYW1iaWVudC5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl8yZHBcIlxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEB1bWJyYS5wYXJlbnQgPSBAXG5cdFx0QHBlbnVtYnJhLnBhcmVudCA9IEBcblx0XHRAYW1iaWVudC5wYXJlbnQgPSBAXG5cblx0XHRAYXJyYXkgPSBbQHVtYnJhLCBAcGVudW1icmEsIEBhbWJpZW50XVxuXG5cblxuIy0tLS0tLS0tSWNvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNsYXNzIFN5c3RlbUljb24gZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cdFx0VXRpbHMuaW5zZXJ0Q1NTKCdAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTsgQGltcG9ydCB1cmwoaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2NvZGUuZ2V0bWRsLmlvLzEuMC42L21hdGVyaWFsLmluZGlnby1waW5rLm1pbi5jc3MpOyAubWF0ZXJpYWwtaWNvbnMudGFie30nKVxuXG5cdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMjRcblxuXG5cdFx0QG9wdGlvbnMuaWNvbiA/PSBcImFuZHJvaWRcIlxuXHRcdEBvcHRpb25zLmh0bWwgPSBcIjxpIGNsYXNzPSdtYXRlcmlhbC1pY29ucyB0YWInPlwiICsgQG9wdGlvbnMuaWNvbiArIFwiPC9pPlwiXG5cdFx0QG9wdGlvbnMuY29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gQG9wdGlvbnMuZm9udFNpemVcblx0XHRAb3B0aW9ucy53aWR0aCA/PSBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA9IFwiXCJcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0QGRlZmluZSAnZm9udFNpemUnLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmZvbnRTaXplXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAb3B0aW9ucy5mb250U2l6ZSA9IHZhbHVlXG5cblx0XHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7IEBpbXBvcnQgdXJsKGh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9jb2RlLmdldG1kbC5pby8xLjAuNi9tYXRlcmlhbC5pbmRpZ28tcGluay5taW4uY3NzKTsgLm1hdGVyaWFsLWljb25zLnRhYnt9JylcblxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDEuIENvbG9yICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuY29sb3IgZXh0ZW5kcyBMYXllclxuICAgIGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG4gICAgICAgIEBvcHRpb25zID0gXy5kZWZhdWx0cyBAb3B0aW9ucyxcbiAgICAgICAgc3VwZXIgQG9wdGlvbnNcblxuI3JlZHMtLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0ZXhwb3J0cy5yZWQgPSBcIiNGNDQzMzZcIlxuXHRcdGV4cG9ydHMucmVkNTAgPSBcIiNGRkVCRUVcIlxuXHRcdGV4cG9ydHMucmVkMTAwID0gXCIjRkZDREQyXCJcblx0XHRleHBvcnRzLnJlZDIwMCA9IFwiI0VGOUE5QVwiXG5cdFx0ZXhwb3J0cy5yZWQzMDAgPSBcIiNFNTczNzNcIlxuXHRcdGV4cG9ydHMucmVkNDAwID0gXCIjRUY1MzUwXCJcblx0XHRleHBvcnRzLnJlZDUwMCA9IFwiI0Y0NDMzNlwiXG5cdFx0ZXhwb3J0cy5yZWQ2MDAgPSBcIiNFNTM5MzVcIlxuXHRcdGV4cG9ydHMucmVkNzAwID0gXCIjRDMyRjJGXCJcblx0XHRleHBvcnRzLnJlZDgwMCA9IFwiI0M2MjgyOFwiXG5cdFx0ZXhwb3J0cy5yZWQ5MDAgPSBcIiNCNzFDMUNcIlxuXHRcdGV4cG9ydHMucmVkQTEwMCA9IFwiI0ZGOEE4MFwiXG5cdFx0ZXhwb3J0cy5yZWRBMjAwID0gXCIjRkY1MjUyXCJcblx0XHRleHBvcnRzLnJlZEE0MDAgPSBcIiNGRjE3NDRcIlxuXHRcdGV4cG9ydHMucmVkQTcwMCA9IFwiI0Q1MDAwMFwiXG5cbiNwaW5rLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLnBpbmsgPSBcIiNFOTFFNjNcIlxuXHRcdGV4cG9ydHMucGluazUwID0gXCIjRkNFNEVDXCJcblx0XHRleHBvcnRzLnBpbmsxMDAgPSBcIiNGOEJCRDBcIlxuXHRcdGV4cG9ydHMucGluazIwMCA9IFwiI0Y0OEZCMVwiXG5cdFx0ZXhwb3J0cy5waW5rMzAwID0gXCIjRjA2MjkyXCJcblx0XHRleHBvcnRzLnBpbms0MDAgPSBcIiNFQzQwN0FcIlxuXHRcdGV4cG9ydHMucGluazUwMCA9IFwiI0U5MUU2M1wiXG5cdFx0ZXhwb3J0cy5waW5rNjAwID0gXCIjRDgxQjYwXCJcblx0XHRleHBvcnRzLnBpbms3MDAgPSBcIiNDMjE4NUJcIlxuXHRcdGV4cG9ydHMucGluazgwMCA9IFwiI0FEMTQ1N1wiXG5cdFx0ZXhwb3J0cy5waW5rOTAwID0gXCIjODgwRTRGXCJcblx0XHRleHBvcnRzLnBpbmtBMTAwID0gXCIjRkY4MEFCXCJcblx0XHRleHBvcnRzLnBpbmtBMjAwID0gXCIjRkY0MDgxXCJcblx0XHRleHBvcnRzLnBpbmtBNDAwID0gXCIjRjUwMDU3XCJcblx0XHRleHBvcnRzLnBpbmtBNzAwID0gXCIjQzUxMTYyXCJcblxuXG4jcHVycGxlLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLnB1cnBsZSA9IFwiIzlDMjdCMFwiXG5cdFx0ZXhwb3J0cy5wdXJwbGU1MCA9IFwiI0YzRTVGNVwiXG5cdFx0ZXhwb3J0cy5wdXJwbGUxMDAgPSBcIiNFMUJFRTdcIlxuXHRcdGV4cG9ydHMucHVycGxlMjAwID0gXCIjQ0U5M0Q4XCJcblx0XHRleHBvcnRzLnB1cnBsZTMwMCA9IFwiI0JBNjhDOFwiXG5cdFx0ZXhwb3J0cy5wdXJwbGU0MDAgPSBcIiNBQjQ3QkNcIlxuXHRcdGV4cG9ydHMucHVycGxlNTAwID0gXCIjOUMyN0IwXCJcblx0XHRleHBvcnRzLnB1cnBsZTYwMCA9IFwiIzhFMjRBQVwiXG5cdFx0ZXhwb3J0cy5wdXJwbGU3MDAgPSBcIiM3QjFGQTJcIlxuXHRcdGV4cG9ydHMucHVycGxlODAwID0gXCIjNkExQjlBXCJcblx0XHRleHBvcnRzLnB1cnBsZTkwMCA9IFwiIzRBMTQ4Q1wiXG5cdFx0ZXhwb3J0cy5wdXJwbGVBMTAwID0gXCIjRUE4MEZDXCJcblx0XHRleHBvcnRzLnB1cnBsZUEyMDAgPSBcIiNFMDQwRkJcIlxuXHRcdGV4cG9ydHMucHVycGxlQTQwMCA9IFwiI0Q1MDBGOVwiXG5cdFx0ZXhwb3J0cy5wdXJwbGVBNzAwID0gXCIjQUEwMEZGXCJcblxuI0RlZXAgcHVycGxlLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmRlZXBQdXJwbGUgPSBcIiM2NzNBQjdcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTUwID0gXCIjRURFN0Y2XCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGUxMDAgPSBcIiNEMUM0RTlcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTIwMCA9IFwiI0IzOUREQlwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlMzAwID0gXCIjOTU3NUNEXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGU0MDAgPSBcIiM3RTU3QzJcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTUwMCA9IFwiIzY3M0FCN1wiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlNjAwID0gXCIjNUUzNUIxXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGU3MDAgPSBcIiM1MTJEQThcIlxuXHRcdGV4cG9ydHMuZGVlcFB1cnBsZTgwMCA9IFwiIzQ1MjdBMFwiXG5cdFx0ZXhwb3J0cy5kZWVwUHVycGxlOTAwID0gXCIjMzExQjkyXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGVBMTAwID0gXCIjQjM4OEZGXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGVBMjAwID0gXCIjN0M0REZGXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGVBNDAwID0gXCIjNjUxRkZGXCJcblx0XHRleHBvcnRzLmRlZXBQdXJwbGVBNzAwID0gXCIjNjIwMEVBXCJcbiNpbmRpZ28tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuaW5kaWdvID0gXCIjM0Y1MUI1XCJcblx0XHRleHBvcnRzLmluZGlnbzUwID0gXCIjRThFQUY2XCJcblx0XHRleHBvcnRzLmluZGlnbzEwMCA9IFwiI0M1Q0FFOVwiXG5cdFx0ZXhwb3J0cy5pbmRpZ28yMDAgPSBcIiM5RkE4REFcIlxuXHRcdGV4cG9ydHMuaW5kaWdvMzAwID0gXCIjNzk4NkNCXCJcblx0XHRleHBvcnRzLmluZGlnbzQwMCA9IFwiIzVDNkJDMFwiXG5cdFx0ZXhwb3J0cy5pbmRpZ281MDAgPSBcIiMzRjUxQjVcIlxuXHRcdGV4cG9ydHMuaW5kaWdvNjAwID0gXCIjMzk0OUFCXCJcblx0XHRleHBvcnRzLmluZGlnbzcwMCA9IFwiIzMwM0Y5RlwiXG5cdFx0ZXhwb3J0cy5pbmRpZ284MDAgPSBcIiMyODM1OTNcIlxuXHRcdGV4cG9ydHMuaW5kaWdvOTAwID0gXCIjMUEyMzdFXCJcblx0XHRleHBvcnRzLmluZGlnb0ExMDAgPSBcIiM4QzlFRkZcIlxuXHRcdGV4cG9ydHMuaW5kaWdvQTIwMCA9IFwiIzUzNkRGRVwiXG5cdFx0ZXhwb3J0cy5pbmRpZ29BNDAwID0gXCIjM0Q1QUZFXCJcblx0XHRleHBvcnRzLmluZGlnb0E3MDAgPSBcIiMzMDRGRkVcIlxuI2JsdWUtLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuYmx1ZSA9IFwiIzIxOTZGM1wiXG5cdFx0ZXhwb3J0cy5ibHVlNTAgPSBcIiNFM0YyRkRcIlxuXHRcdGV4cG9ydHMuYmx1ZTEwMCA9IFwiI0JCREVGQlwiXG5cdFx0ZXhwb3J0cy5ibHVlMjAwID0gXCIjOTBDQUY5XCJcblx0XHRleHBvcnRzLmJsdWUzMDAgPSBcIiM2NEI1RjZcIlxuXHRcdGV4cG9ydHMuYmx1ZTQwMCA9IFwiIzQyQTVGNVwiXG5cdFx0ZXhwb3J0cy5ibHVlNTAwID0gXCIjMjE5NkYzXCJcblx0XHRleHBvcnRzLmJsdWU2MDAgPSBcIiMxRTg4RTVcIlxuXHRcdGV4cG9ydHMuYmx1ZTcwMCA9IFwiIzE5NzZEMlwiXG5cdFx0ZXhwb3J0cy5ibHVlODAwID0gXCIjMTU2NUMwXCJcblx0XHRleHBvcnRzLmJsdWU5MDAgPSBcIiMwRDQ3QTFcIlxuXHRcdGV4cG9ydHMuYmx1ZUExMDAgPSBcIiM4MkIxRkZcIlxuXHRcdGV4cG9ydHMuYmx1ZUEyMDAgPSBcIiM0NDhBRkZcIlxuXHRcdGV4cG9ydHMuYmx1ZUE0MDAgPSBcIiMyOTc5RkZcIlxuXHRcdGV4cG9ydHMuYmx1ZUE3MDAgPSBcIiMyOTYyRkZcIlxuI2xpZ2h0IGJsdWUtLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZSA9IFwiIzAzQTlGNFwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWU1MCA9IFwiI0UxRjVGRVwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWUxMDAgPSBcIiNCM0U1RkNcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlMjAwID0gXCIjODFENEZBXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTMwMCA9IFwiIzRGQzNGN1wiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWU0MDAgPSBcIiMyOUI2RjZcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlNTAwID0gXCIjMDNBOUY0XCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTYwMCA9IFwiIzAzOUJFNVwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWU3MDAgPSBcIiMwMjg4RDFcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlODAwID0gXCIjMDI3N0JEXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZTkwMCA9IFwiIzAxNTc5QlwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWVBMTAwID0gXCIjODBEOEZGXCJcblx0XHRleHBvcnRzLmxpZ2h0Qmx1ZUEyMDAgPSBcIiM0MEM0RkZcIlxuXHRcdGV4cG9ydHMubGlnaHRCbHVlQTQwMCA9IFwiIzAwQjBGRlwiXG5cdFx0ZXhwb3J0cy5saWdodEJsdWVBNzAwID0gXCIjMDA5MUVBXCJcbiNjeWFuLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuY3lhbiA9IFwiIzAwQkNENFwiXG5cdFx0ZXhwb3J0cy5jeWFuNTAgPSBcIiNFMEY3RkFcIlxuXHRcdGV4cG9ydHMuY3lhbjEwMCA9IFwiI0IyRUJGMlwiXG5cdFx0ZXhwb3J0cy5jeWFuMjAwID0gXCIjODBERUVBXCJcblx0XHRleHBvcnRzLmN5YW4zMDAgPSBcIiM0REQwRTFcIlxuXHRcdGV4cG9ydHMuY3lhbjQwMCA9IFwiIzI2QzZEQVwiXG5cdFx0ZXhwb3J0cy5jeWFuNTAwID0gXCIjMDBCQ0Q0XCJcblx0XHRleHBvcnRzLmN5YW42MDAgPSBcIiMwMEFDQzFcIlxuXHRcdGV4cG9ydHMuY3lhbjcwMCA9IFwiIzAwOTdBN1wiXG5cdFx0ZXhwb3J0cy5jeWFuODAwID0gXCIjMDA4MzhGXCJcblx0XHRleHBvcnRzLmN5YW45MDAgPSBcIiMwMDYwNjRcIlxuXHRcdGV4cG9ydHMuY3lhbkExMDAgPSBcIiM4NEZGRkZcIlxuXHRcdGV4cG9ydHMuY3lhbkEyMDAgPSBcIiMxOEZGRkZcIlxuXHRcdGV4cG9ydHMuY3lhbkE0MDAgPSBcIiMwMEU1RkZcIlxuXHRcdGV4cG9ydHMuY3lhbkE3MDAgPSBcIiMwMEI4RDRcIlxuI3RlYWwtLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy50ZWFsID0gXCIjMDA5Njg4XCJcblx0XHRleHBvcnRzLnRlYWw1MCA9IFwiI0UwRjJGMVwiXG5cdFx0ZXhwb3J0cy50ZWFsMTAwID0gXCIjQjJERkRCXCJcblx0XHRleHBvcnRzLnRlYWwyMDAgPSBcIiM4MENCQzRcIlxuXHRcdGV4cG9ydHMudGVhbDMwMCA9IFwiIzREQjZBQ1wiXG5cdFx0ZXhwb3J0cy50ZWFsNDAwID0gXCIjMjZBNjlBXCJcblx0XHRleHBvcnRzLnRlYWw1MDAgPSBcIiMwMDk2ODhcIlxuXHRcdGV4cG9ydHMudGVhbDYwMCA9IFwiIzAwODk3QlwiXG5cdFx0ZXhwb3J0cy50ZWFsNzAwID0gXCIjMDA3OTZCXCJcblx0XHRleHBvcnRzLnRlYWw4MDAgPSBcIiMwMDY5NUNcIlxuXHRcdGV4cG9ydHMudGVhbDkwMCA9IFwiIzAwNEQ0MFwiXG5cdFx0ZXhwb3J0cy50ZWFsQTEwMCA9IFwiI0E3RkZFQlwiXG5cdFx0ZXhwb3J0cy50ZWFsQTIwMCA9IFwiIzY0RkZEQVwiXG5cdFx0ZXhwb3J0cy50ZWFsQTQwMCA9IFwiIzFERTlCNlwiXG5cdFx0ZXhwb3J0cy50ZWFsQTcwMCA9IFwiIzAwQkZBNVwiXG4jZ3JlZW4tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmdyZWVuID0gXCIjNENBRjUwXCJcblx0XHRleHBvcnRzLmdyZWVuNTAgPSBcIiNFOEY1RTlcIlxuXHRcdGV4cG9ydHMuZ3JlZW4xMDAgPSBcIiNDOEU2QzlcIlxuXHRcdGV4cG9ydHMuZ3JlZW4yMDAgPSBcIiNBNUQ2QTdcIlxuXHRcdGV4cG9ydHMuZ3JlZW4zMDAgPSBcIiM4MUM3ODRcIlxuXHRcdGV4cG9ydHMuZ3JlZW40MDAgPSBcIiM2NkJCNkFcIlxuXHRcdGV4cG9ydHMuZ3JlZW41MDAgPSBcIiM0Q0FGNTBcIlxuXHRcdGV4cG9ydHMuZ3JlZW42MDAgPSBcIiM0M0EwNDdcIlxuXHRcdGV4cG9ydHMuZ3JlZW43MDAgPSBcIiMzODhFM0NcIlxuXHRcdGV4cG9ydHMuZ3JlZW44MDAgPSBcIiMyRTdEMzJcIlxuXHRcdGV4cG9ydHMuZ3JlZW45MDAgPSBcIiMxQjVFMjBcIlxuXHRcdGV4cG9ydHMuZ3JlZW5BMTAwID0gXCIjQjlGNkNBXCJcblx0XHRleHBvcnRzLmdyZWVuQTIwMCA9IFwiIzY5RjBBRVwiXG5cdFx0ZXhwb3J0cy5ncmVlbkE0MDAgPSBcIiMwMEU2NzZcIlxuXHRcdGV4cG9ydHMuZ3JlZW5BNzAwID0gXCIjMDBDODUzXCJcbiNsaWdodCBncmVlbi0tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbiA9IFwiIzhCQzM0QVwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuNTAgPSBcIiNGMUY4RTlcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjEwMCA9IFwiI0RDRURDOFwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuMjAwID0gXCIjQzVFMUE1XCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW4zMDAgPSBcIiNBRUQ1ODFcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjQwMCA9IFwiIzlDQ0M2NVwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuNTAwID0gXCIjOEJDMzRBXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW42MDAgPSBcIiM3Q0IzNDJcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbjcwMCA9IFwiIzY4OUYzOFwiXG5cdFx0ZXhwb3J0cy5saWdodEdyZWVuODAwID0gXCIjNTU4QjJGXCJcblx0XHRleHBvcnRzLmxpZ2h0R3JlZW45MDAgPSBcIiMzMzY5MUVcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbkExMDAgPSBcIiNDQ0ZGOTBcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbkEyMDAgPSBcIiNCMkZGNTlcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbkE0MDAgPSBcIiM3NkZGMDNcIlxuXHRcdGV4cG9ydHMubGlnaHRHcmVlbkE3MDAgPSBcIiM2NEREMTdcIlxuI2xpbWUtLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMubGltZSA9IFwiI0NEREMzOVwiXG5cdFx0ZXhwb3J0cy5saW1lNTAgPSBcIiNGOUZCRTdcIlxuXHRcdGV4cG9ydHMubGltZTEwMCA9IFwiI0YwRjRDM1wiXG5cdFx0ZXhwb3J0cy5saW1lMjAwID0gXCIjRTZFRTlDXCJcblx0XHRleHBvcnRzLmxpbWUzMDAgPSBcIiNEQ0U3NzVcIlxuXHRcdGV4cG9ydHMubGltZTQwMCA9IFwiI0Q0RTE1N1wiXG5cdFx0ZXhwb3J0cy5saW1lNTAwID0gXCIjQ0REQzM5XCJcblx0XHRleHBvcnRzLmxpbWU2MDAgPSBcIiNDMENBMzNcIlxuXHRcdGV4cG9ydHMubGltZTcwMCA9IFwiI0FGQjQyQlwiXG5cdFx0ZXhwb3J0cy5saW1lODAwID0gXCIjOUU5RDI0XCJcblx0XHRleHBvcnRzLmxpbWU5MDAgPSBcIiM4Mjc3MTdcIlxuXHRcdGV4cG9ydHMubGltZUExMDAgPSBcIiNGNEZGODFcIlxuXHRcdGV4cG9ydHMubGltZUEyMDAgPSBcIiNFRUZGNDFcIlxuXHRcdGV4cG9ydHMubGltZUE0MDAgPSBcIiNDNkZGMDBcIlxuXHRcdGV4cG9ydHMubGltZUE3MDAgPSBcIiNBRUVBMDBcIlxuI3llbGxvdy0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy55ZWxsb3cgPSBcIiNGRkVCM0JcIlxuXHRcdGV4cG9ydHMueWVsbG93NTAgPSBcIiNGRkZERTdcIlxuXHRcdGV4cG9ydHMueWVsbG93MTAwID0gXCIjRkZGOUM0XCJcblx0XHRleHBvcnRzLnllbGxvdzIwMCA9IFwiI0ZGRjU5RFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3czMDAgPSBcIiNGRkYxNzZcIlxuXHRcdGV4cG9ydHMueWVsbG93NDAwID0gXCIjRkZFRTU4XCJcblx0XHRleHBvcnRzLnllbGxvdzUwMCA9IFwiI0ZGRUIzQlwiXG5cdFx0ZXhwb3J0cy55ZWxsb3c2MDAgPSBcIiNGREQ4MzVcIlxuXHRcdGV4cG9ydHMueWVsbG93NzAwID0gXCIjRkJDMDJEXCJcblx0XHRleHBvcnRzLnllbGxvdzgwMCA9IFwiI0Y5QTgyNVwiXG5cdFx0ZXhwb3J0cy55ZWxsb3c5MDAgPSBcIiNGNTdGMTdcIlxuXHRcdGV4cG9ydHMueWVsbG93QTEwMCA9IFwiI0ZGRkY4RFwiXG5cdFx0ZXhwb3J0cy55ZWxsb3dBMjAwID0gXCIjRkZGRjAwXCJcblx0XHRleHBvcnRzLnllbGxvd0E0MDAgPSBcIiNGRkVBMDBcIlxuXHRcdGV4cG9ydHMueWVsbG93QTcwMCA9IFwiI0ZGRDYwMFwiXG4jYW1iZXItLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmFtYmVyID0gXCIjRkZDMTA3XCJcblx0XHRleHBvcnRzLmFtYmVyNTAgPSBcIiNGRkY4RTFcIlxuXHRcdGV4cG9ydHMuYW1iZXIxMDAgPSBcIiNGRkVDQjNcIlxuXHRcdGV4cG9ydHMuYW1iZXIyMDAgPSBcIiNGRkUwODJcIlxuXHRcdGV4cG9ydHMuYW1iZXIzMDAgPSBcIiNGRkQ1NEZcIlxuXHRcdGV4cG9ydHMuYW1iZXI0MDAgPSBcIiNGRkNBMjhcIlxuXHRcdGV4cG9ydHMuYW1iZXI1MDAgPSBcIiNGRkMxMDdcIlxuXHRcdGV4cG9ydHMuYW1iZXI2MDAgPSBcIiNGRkIzMDBcIlxuXHRcdGV4cG9ydHMuYW1iZXI3MDAgPSBcIiNGRkEwMDBcIlxuXHRcdGV4cG9ydHMuYW1iZXI4MDAgPSBcIiNGRjhGMDBcIlxuXHRcdGV4cG9ydHMuYW1iZXI5MDAgPSBcIiNGRjZGMDBcIlxuXHRcdGV4cG9ydHMuYW1iZXJBMTAwID0gXCIjRkZFNTdGXCJcblx0XHRleHBvcnRzLmFtYmVyQTIwMCA9IFwiI0ZGRDc0MFwiXG5cdFx0ZXhwb3J0cy5hbWJlckE0MDAgPSBcIiNGRkM0MDBcIlxuXHRcdGV4cG9ydHMuYW1iZXJBNzAwID0gXCIjRkZBQjAwXCJcbiNvcmFuZ2UtLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLm9yYW5nZSA9IFwiI0ZGOTgwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2U1MCA9IFwiI0ZGRjNFMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2UxMDAgPSBcIiNGRkUwQjJcIlxuXHRcdGV4cG9ydHMub3JhbmdlMjAwID0gXCIjRkZDQzgwXCJcblx0XHRleHBvcnRzLm9yYW5nZTMwMCA9IFwiI0ZGQjc0RFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2U0MDAgPSBcIiNGRkE3MjZcIlxuXHRcdGV4cG9ydHMub3JhbmdlNTAwID0gXCIjRkY5ODAwXCJcblx0XHRleHBvcnRzLm9yYW5nZTYwMCA9IFwiI0ZCOEMwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2U3MDAgPSBcIiNGNTdDMDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlODAwID0gXCIjRUY2QzAwXCJcblx0XHRleHBvcnRzLm9yYW5nZTkwMCA9IFwiI0U2NTEwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2VBMTAwID0gXCIjRkZEMTgwXCJcblx0XHRleHBvcnRzLm9yYW5nZUEyMDAgPSBcIiNGRkFCNDBcIlxuXHRcdGV4cG9ydHMub3JhbmdlQTQwMCA9IFwiI0ZGOTEwMFwiXG5cdFx0ZXhwb3J0cy5vcmFuZ2VBNzAwID0gXCIjRkY2RDAwXCJcbiNkZWVwIG9yYW5nZS0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmRlZXBPcmFuZ2UgPSBcIiNGRjU3MjJcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTUwID0gXCIjRkJFOUU3XCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2UxMDAgPSBcIiNGRkNDQkNcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTIwMCA9IFwiI0ZGQUI5MVwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlMzAwID0gXCIjRkY4QTY1XCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2U0MDAgPSBcIiNGRjcwNDNcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTUwMCA9IFwiI0ZGNTcyMlwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlNjAwID0gXCIjRjQ1MTFFXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2U3MDAgPSBcIiNFNjRBMTlcIlxuXHRcdGV4cG9ydHMuZGVlcE9yYW5nZTgwMCA9IFwiI0Q4NDMxNVwiXG5cdFx0ZXhwb3J0cy5kZWVwT3JhbmdlOTAwID0gXCIjQkYzNjBDXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2VBMTAwID0gXCIjRkY5RTgwXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2VBMjAwID0gXCIjRkY2RTQwXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2VBNDAwID0gXCIjRkYzRDAwXCJcblx0XHRleHBvcnRzLmRlZXBPcmFuZ2VBNzAwID0gXCIjREQyQzAwXCJcbiNicm93bi0tLS0tLS0tLS0tLS1cblx0XHRleHBvcnRzLmJyb3duID0gXCIjNzk1NTQ4XCJcblx0XHRleHBvcnRzLmJyb3duNTAgPSBcIiNFRkVCRTlcIlxuXHRcdGV4cG9ydHMuYnJvd24xMDAgPSBcIiNEN0NDQzhcIlxuXHRcdGV4cG9ydHMuYnJvd24yMDAgPSBcIiNCQ0FBQTRcIlxuXHRcdGV4cG9ydHMuYnJvd24zMDAgPSBcIiNBMTg4N0ZcIlxuXHRcdGV4cG9ydHMuYnJvd240MDAgPSBcIiM4RDZFNjNcIlxuXHRcdGV4cG9ydHMuYnJvd241MDAgPSBcIiM3OTU1NDhcIlxuXHRcdGV4cG9ydHMuYnJvd242MDAgPSBcIiM2RDRDNDFcIlxuXHRcdGV4cG9ydHMuYnJvd243MDAgPSBcIiM1RDQwMzdcIlxuXHRcdGV4cG9ydHMuYnJvd244MDAgPSBcIiM0RTM0MkVcIlxuXHRcdGV4cG9ydHMuYnJvd245MDAgPSBcIiM0RTM0MkVcIlxuXHRcdGV4cG9ydHMuYnJvd25BMTAwID0gXCJcIlxuXHRcdGV4cG9ydHMuYnJvd25BMjAwID0gXCJcIlxuXHRcdGV4cG9ydHMuYnJvd25BNDAwID0gXCJcIlxuXHRcdGV4cG9ydHMuYnJvd25BNzAwID0gXCJcIlxuI2dyZXktLS0tLS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuZ3JleSA9IFwiIzlFOUU5RVwiXG5cdFx0ZXhwb3J0cy5ncmV5NTAgPSBcIiNGQUZBRkFcIlxuXHRcdGV4cG9ydHMuZ3JleTEwMCA9IFwiI0Y1RjVGNVwiXG5cdFx0ZXhwb3J0cy5ncmV5MjAwID0gXCIjRUVFRUVFXCJcblx0XHRleHBvcnRzLmdyZXkzMDAgPSBcIiNFMEUwRTBcIlxuXHRcdGV4cG9ydHMuZ3JleTQwMCA9IFwiI0JEQkRCRFwiXG5cdFx0ZXhwb3J0cy5ncmV5NTAwID0gXCIjOUU5RTlFXCJcblx0XHRleHBvcnRzLmdyZXk2MDAgPSBcIiM3NTc1NzVcIlxuXHRcdGV4cG9ydHMuZ3JleTcwMCA9IFwiIzYxNjE2MVwiXG5cdFx0ZXhwb3J0cy5ncmV5ODAwID0gXCIjNDI0MjQyXCJcblx0XHRleHBvcnRzLmdyZXk5MDAgPSBcIiMyMTIxMjFcIlxuXHRcdGV4cG9ydHMuZ3JleUExMDAgPSBcIlwiXG5cdFx0ZXhwb3J0cy5ncmV5QTIwMCA9IFwiXCJcblx0XHRleHBvcnRzLmdyZXlBNDAwID0gXCJcIlxuXHRcdGV4cG9ydHMuZ3JleUE3MDAgPSBcIlwiXG4jYmx1ZSBncmV5LS0tLS0tLS0tLS0tXG5cdFx0ZXhwb3J0cy5ibHVlR3JleSA9IFwiIzYwN0Q4QlwiXG5cdFx0ZXhwb3J0cy5ibHVlR3JleTUwID0gXCIjRUNFRkYxXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5MTAwID0gXCIjQ0ZEOERDXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5MjAwID0gXCIjQjBCRUM1XCJcblx0XHRleHBvcnRzLmJsdWVHcmV5MzAwID0gXCIjOTBBNEFFXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5NDAwID0gXCIjNzg5MDlDXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5NTAwID0gXCIjNjA3RDhCXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5NjAwID0gXCIjNTQ2RTdBXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5NzAwID0gXCIjNDU1QTY0XCJcblx0XHRleHBvcnRzLmJsdWVHcmV5ODAwID0gXCIjMzc0NzRGXCJcblx0XHRleHBvcnRzLmJsdWVHcmV5OTAwID0gXCIjMjYzMjM4XCJcblxuI2JsYWNrIGFuZCB3aGl0ZS0tLS0tLS0tLVxuXHRcdGV4cG9ydHMuYmxhY2sgPSBcIiMwMDBcIlxuXHRcdGV4cG9ydHMud2hpdGUgPSBcIiNmZmZcIlxuXG4jbGFiZWxzIC0gbGlnaHQgLS0tLS0tLS1cblx0XHRleHBvcnRzLmxpZ2h0UHJpbWFyeSA9IFwicmdiYSgwLDAsMCwwLjg3KVwiXG5cdFx0ZXhwb3J0cy5saWdodFNlY29uZGFyeSA9IFwicmdiYSgwLDAsMCwwLjU0KVwiXG5cdFx0ZXhwb3J0cy5saWdodERpc2FibGVkID0gXCJyZ2JhKDAsMCwwLDAuMzgpXCJcblxuI2xhYmVscyAtIERhcmsgLS0tLS0tLS1cblx0XHRleHBvcnRzLmRhcmtQcmltYXJ5ID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcblx0XHRleHBvcnRzLmRhcmtTZWNvbmRhcnkgPSBcInJnYmEoMjU1LDI1NSwyNTUsIDAuNylcIlxuXHRcdGV4cG9ydHMuZGFya0Rpc2FibGVkID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIlxuXG4jdW5pdmVyc2FsIGNvbG9yIC0tLS0tLVxuXHRcdGV4cG9ydHMudW5pdmVyc2FsID0gXCIjMzM2N0NEXCJcblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDIuIEZsYXRCdXR0b24gICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuRmxhdEJ1dHRvbiBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLSBEZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7JylcblxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSBcIkZsYXQgQnV0dG9uXCJcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0QG9wdGlvbnMuZGlzYWJsZWQgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy50aGVtZSA/PSBcImxpZ2h0XCJcblx0XHRAb3B0aW9ucy5kaXJlY3Rpb25SaXBwbGUgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ID89IFwiJ1JvYm90bycsIHNhbnMgc2VyaWZcIlxuXHRcdEBvcHRpb25zLmRpc2FibGVSaXBwbGUgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID89IDBcblx0XHRAb3B0aW9ucy5mb250V2VpZ2h0ID89IDYwMFxuXHRcdEBvcHRpb25zLmZvbnRTaXplID89IDE0XG5cblx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyB0cnVlXG5cdFx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0XHRAZGlzYWJsZWRfbGFiZWxDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjMpXCJcblx0XHRcdGVsc2Vcblx0XHRcdFx0QGRpc2FibGVkX2xhYmVsQ29sb3IgPSBcInJnYmEoMCwwLDAsMC4yNilcIlxuXG5cblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogbnVsbFxuXHRcdFx0aGVpZ2h0OiA0OFxuXHRcdFx0Ym9yZGVyUmFkaXVzIDogMlxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLmxhYmVsVGV4dC5sZW5ndGggKiAoKEBvcHRpb25zLmZvbnRTaXplICsgMykgLyAyKSArIDE2ICsgMTZcblx0XHRcdG5hbWU6IFwiRmxhdCBidXR0b25cIlxuXG5cblx0XHRpZiBAb3B0aW9ucy53aWR0aCA8IDg4XG5cdFx0XHRAb3B0aW9ucy53aWR0aCA9IDg4XG5cblx0XHRpZiBAb3B0aW9ucy5kZW5zZSBpcyB0cnVlXG5cdFx0XHRAb3B0aW9ucy53aWR0aCA9IEBvcHRpb25zLmxhYmVsVGV4dC5sZW5ndGggKiAoKEBvcHRpb25zLmZvbnRTaXplICsgMikgLyAyKSArIDE2ICsgMTZcblx0XHRcdEBidXR0b25IZWlnaHQgPSAzMlxuXHRcdGVsc2Vcblx0XHRcdEBidXR0b25IZWlnaHQgPSAzNlxuXG4jLS0tLS0tIGhvdmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGJ0dG5CRyA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBidXR0b25IZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0Y2xpcDogdHJ1ZVxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAyXG5cdFx0XHRvcGFjaXR5OiAwLjEyXG5cdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0bmFtZTogXCJvdmVybGF5XCJcblxuIy0tLS0tLS0gcmlwcGxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEByaXBwbGVCRyA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBidXR0b25IZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0bmFtZTogXCJyaXBwbGUgcGFyZW50XCJcblxuXG5cdFx0QHJpcHBsZSA9IG5ldyAgTGF5ZXJcblx0XHRcdGJvcmRlclJhZGl1czogXCIxMDAlXCJcblx0XHRcdHNpemU6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdHNjYWxlOiAwLjNcblx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdG5hbWU6IFwicmlwcGxlXCJcblxuIy0tLS0tLS0gbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBsYWJlbCA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHRleHQgOiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdFx0dGV4dFRyYW5zZm9ybTogXCJVcHBlcmNhc2VcIlxuXHRcdFx0Y29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdGZvbnRXZWlnaHQ6IEBvcHRpb25zLmZvbnRXZWlnaHRcblx0XHRcdGZvbnRGYW1pbHk6IEBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRcdGxldHRlclNwYWNpbmc6IEBvcHRpb25zLmxldHRlclNwYWNpbmdcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXG4jLS0tLS0tLSBzdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBidHRuQkcucGFyZW50ID0gQGxhYmVsLnBhcmVudCA9IEByaXBwbGVCRy5wYXJlbnQgPSBAXG5cdFx0QGJ0dG5CRy55ID0gQWxpZ24uY2VudGVyXG5cdFx0QHJpcHBsZUJHLnkgPSBBbGlnbi5jZW50ZXJcblxuXHRcdEByaXBwbGVCRy5jbGlwID0gdHJ1ZVxuXG5cdFx0QHJpcHBsZS5wYXJlbnQgPSBAcmlwcGxlQkdcblx0XHRAcmlwcGxlLnggPSBBbGlnbi5jZW50ZXJcblx0XHRAcmlwcGxlLnkgPVx0QWxpZ24uY2VudGVyXG5cblx0XHRAbGFiZWwueCA9IEFsaWduLmNlbnRlclxuXHRcdEBsYWJlbC55ID0gQWxpZ24uY2VudGVyKDEpXG5cblx0XHRpZiBAZGlzYWJsZVJpcHBsZSBpcyBmYWxzZVxuXHRcdFx0QHJpcHBsZS5kZXN0cm95KClcblxuIy0tLS0tLS0tIEV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRALm9uQ2xpY2sgQGNsaWNrZWRcblx0XHRALm9uTW91c2VPdmVyIEBIb3ZlclxuXHRcdEAub25Nb3VzZU91dCBASG92ZXJPZmZcblx0XHRALm9uTW91c2VEb3duIEBtb3VzZURvd25cblx0XHRALm9uTW91c2VVcCBAbW91c2VVcFxuXG4jLS0tLS0tLS0gZ2V0dGVycyAmIHNldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdEBkZWZpbmUgJ2Rpc2FibGVkJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5kaXNhYmxlZFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuZGlzYWJsZWQgPSB2YWx1ZVxuXG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyB0cnVlXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEBkaXNhYmxlZF9sYWJlbENvbG9yXG5cblx0XHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIGZhbHNlXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEBvcHRpb25zLnRoZW1lQ29sb3JcblxuXG5cbiMtLS0tLS0tLS0gRXZlbnQgZnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRIb3ZlcjogPT5cblx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyBmYWxzZVxuXHRcdFx0QGJ0dG5CRy52aXNpYmxlID0gdHJ1ZVxuXG5cdEhvdmVyT2ZmOiA9PlxuXHRcdEBidHRuQkcudmlzaWJsZSA9IGZhbHNlXG5cblx0bW91c2VEb3duOiAtPlxuXHRcdEBidHRuQkcuYnJpZ2h0bmVzcyA9IDgwXG5cdG1vdXNlVXA6IC0+XG5cdFx0QGJ0dG5CRy5icmlnaHRuZXNzID0gMTAwXG5cblx0Y2xpY2tlZDogKGV2KSAtPlxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIGZhbHNlXG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlIGlzIGZhbHNlXG5cblx0XHRcdFx0aWYgQG9wdGlvbnMuZGlyZWN0aW9uUmlwcGxlIGlzIHRydWVcblx0XHRcdFx0XHRAcmlwcGxlLm1pZFggPSBldi5vZmZzZXRYXG5cdFx0XHRcdFx0QHJpcHBsZS5taWRZID0gZXYub2Zmc2V0WVxuXHRcdFx0XHRcdEByaXBwbGUuc2l6ZSA9IChAb3B0aW9ucy5sYWJlbFRleHQubGVuZ3RoICogOC41ICsgMTYgKyAxNikgKiAxLjVcblxuXHRcdFx0XHRAcmlwcGxlLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdEByaXBwbGUuc2NhbGUgPSAwLjRcblx0XHRcdFx0QHJpcHBsZS5vcGFjaXR5ID0gMC4zXG5cblx0XHRcdFx0cmlwcGxlQSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRsYXllcjpcdEByaXBwbGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0c2NhbGU6IDAuOFxuXHRcdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXG5cdFx0XHRcdHJpcHBsZUIgID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdFx0bGF5ZXI6XHRAcmlwcGxlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRzY2FsZTogMVxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXG5cdFx0XHRcdHJpcHBsZUEuc3RhcnQoKVxuXG5cdFx0XHRcdHJpcHBsZUEub25BbmltYXRpb25FbmQgLT5cblx0XHRcdFx0XHRyaXBwbGVCLnN0YXJ0KClcblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICAzLiBSYWlzZWRCdXR0b24gICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLlJhaXNlZEJ1dHRvbiBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLSBEZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7JylcblxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSBcIlJhaXNlZCBidXR0b25cIlxuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHRAb3B0aW9ucy5kaXNhYmxlZCA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLnRoZW1lID89IFwibGlnaHRcIlxuXHRcdEBvcHRpb25zLmRpcmVjdGlvblJpcHBsZSA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuaGVpZ2h0ID0gNDhcblx0XHRAb3B0aW9ucy5kaXNhYmxlUmlwcGxlID89IGZhbHNlXG5cdFx0QG9wdGlvbnMubGV0dGVyU3BhY2luZyA/PSAwXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCA/PSA2MDBcblx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAxNFxuXG5cdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgdHJ1ZVxuXHRcdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdFx0QGRpc2FibGVkX0JHID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMTIpXCJcblx0XHRcdFx0QGRpc2FibGVkX2xhYmVsQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC4zKVwiXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBkaXNhYmxlZF9CRyA9IFwicmdiYSgwLDAsMCwwLjEyKVwiXG5cdFx0XHRcdEBkaXNhYmxlZF9sYWJlbENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuMjYpXCJcblxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHRjb2xvcjogXCJcIlxuXHRcdFx0Ym9yZGVyUmFkaXVzIDogMlxuXHRcdFx0bmFtZTogXCJSYWlzZWQgYnV0dG9uXCJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy5sYWJlbFRleHQubGVuZ3RoICogKChAb3B0aW9ucy5mb250U2l6ZSArIDMpIC8gMikgKyAxNiArIDE2XG5cblx0XHRpZiBAb3B0aW9ucy53aWR0aCA8IDg4XG5cdFx0XHRAb3B0aW9ucy53aWR0aCA9IDg4XG5cblx0XHRpZiBAb3B0aW9ucy5kZW5zZSBpcyB0cnVlXG5cdFx0XHRAYnV0dG9uSGVpZ2h0ID0gMzJcblx0XHRlbHNlXG5cdFx0XHRAYnV0dG9uSGVpZ2h0ID0gMzZcblxuIy0tLS0tLS1TaGFkb3dzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBzaGFkb3cgPSBuZXcgU2hhZG93XG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQGJ1dHRvbkhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBAb3B0aW9ucy5ib3JkZXJSYWRpdXNcblx0XHRcdG5hbWU6IFwic2hhZG93c1wiXG5cblxuXG4jLS0tLS0tLWhvdmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAYnR0bkJHID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQGJ1dHRvbkhlaWdodFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIlxuXHRcdFx0Y2xpcDogdHJ1ZVxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAyXG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRuYW1lOiBcIm92ZXJsYXlcIlxuXG4jLS0tLS0tLXJpcHBsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEByaXBwbGVCRyA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IEBidXR0b25IZWlnaHRcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdGJvcmRlclJhZGl1czogMlxuXHRcdFx0bmFtZTogXCJyaXBwbGUgcGFyZW50XCJcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXG5cblx0XHRAcmlwcGxlID0gbmV3ICBMYXllclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjEwMCVcIlxuXHRcdFx0c2l6ZTogQG9wdGlvbnMud2lkdGhcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCJcblx0XHRcdHNjYWxlOjAuM1xuXHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0bmFtZTogXCJyaXBwbGVcIlxuXG5cdFx0QHJpcHBsZUNvbG9yID0gQHJpcHBsZS5iYWNrZ3JvdW5kQ29sb3JcblxuIy0tLS0tLS1sYWJlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBsYWJlbCA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHRleHQgOiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5mb250U2l6ZVxuXHRcdFx0dGV4dFRyYW5zZm9ybTogXCJVcHBlcmNhc2VcIlxuXHRcdFx0Y29sb3I6IFwiI2ZmZlwiXG5cdFx0XHRmb250V2VpZ2h0OiBAb3B0aW9ucy5mb250V2VpZ2h0XG5cdFx0XHRmb250RmFtaWx5OiBAb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0XHRsZXR0ZXJTcGFjaW5nOiBAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblxuIy0tLS0tLS1zdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAcmlwcGxlQkcucGFyZW50ID0gQHNoYWRvdy5wYXJlbnQgPSBAYnR0bkJHLnBhcmVudCA9ICAgQFxuXG5cdFx0QHNoYWRvdy55ID0gQGJ0dG5CRy55ID0gQHJpcHBsZUJHLnkgPSBBbGlnbi5jZW50ZXJcblxuXHRcdEByaXBwbGUucGFyZW50ID0gQHJpcHBsZUJHXG5cdFx0QHJpcHBsZS54ID0gQWxpZ24uY2VudGVyXG5cdFx0QHJpcHBsZS55ID1cdEFsaWduLmNlbnRlclxuXG5cdFx0QGxhYmVsLnggPSBBbGlnbi5jZW50ZXJcblx0XHRAbGFiZWwueSA9IEFsaWduLmNlbnRlcigxKVxuXG5cdFx0aWYgQGRpc2FibGVSaXBwbGUgaXMgZmFsc2Vcblx0XHRcdEByaXBwbGUuZGVzdHJveSgpXG5cbiMtLS0tLS0tLS1FdmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEAub25DbGljayBAY2xpY2tlZFxuXHRcdEAub25Nb3VzZU92ZXIgQEhvdmVyXG5cdFx0QC5vbk1vdXNlT3V0IEBIb3Zlck9mZlxuXHRcdEAub25Nb3VzZURvd24gQG1vdXNlRG93blxuXHRcdEAub25Nb3VzZVVwIEBtb3VzZVVwXG5cbiMtLS0tLS0tLS1nZXR0ZXJzICYgc2V0dGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdEBkZWZpbmUgJ2Rpc2FibGVkJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5kaXNhYmxlZFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QG9wdGlvbnMuZGlzYWJsZWQgPSB2YWx1ZVxuXG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyB0cnVlXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEBkaXNhYmxlZF9sYWJlbENvbG9yXG5cdFx0XHRcdEBzaGFkb3cuYmFja2dyb3VuZENvbG9yID0gQGRpc2FibGVkX0JHXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzaGFkb3cuYmFja2dyb3VuZENvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBcIiNmZmZcIlxuXG4jLS0tLS0tLS0tRXZlbnQgZnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdEhvdmVyOiA9PlxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIGZhbHNlXG5cdFx0XHRAYnR0bkJHLm9wYWNpdHkgPSAwLjEyXG5cdFx0XHRmb3IgaXRlbSBpbiBAc2hhZG93LmFycmF5XG5cdFx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaCBcIl84ZHBcIlxuXHRIb3Zlck9mZjogPT5cblx0XHRAYnR0bkJHLm9wYWNpdHkgPSAwXG5cdFx0Zm9yIGl0ZW0gaW4gQHNoYWRvdy5hcnJheVxuXHRcdFx0aXRlbS5zdGF0ZXMuc3dpdGNoIFwiXzJkcFwiXG5cblx0bW91c2VEb3duOiAtPlxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIGZhbHNlXG5cdFx0XHRAYnJpZ2h0bmVzcyA9IDgwXG5cdFx0XHRAYnR0bkJHLm9wYWNpdHkgPSAwXG5cdG1vdXNlVXA6IC0+XG5cdFx0QGJyaWdodG5lc3MgPSAxMDBcblxuXHRjbGlja2VkOiAoZXYpIC0+XG5cdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgZmFsc2Vcblx0XHRcdGlmIEBvcHRpb25zLmRpc2FibGVSaXBwbGUgaXMgZmFsc2VcblxuXHRcdFx0XHRpZiBAb3B0aW9ucy5kaXJlY3Rpb25SaXBwbGUgaXMgdHJ1ZVxuXHRcdFx0XHRcdEByaXBwbGUubWlkWCA9IGV2Lm9mZnNldFhcblx0XHRcdFx0XHRAcmlwcGxlLm1pZFkgPSBldi5vZmZzZXRZXG5cdFx0XHRcdFx0QHJpcHBsZS5zaXplID0gKEBvcHRpb25zLmxhYmVsVGV4dC5sZW5ndGggKiA4LjUgKyAxNiArIDE2KSAqIDEuNVxuXG5cdFx0XHRcdEByaXBwbGUudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0QHJpcHBsZS5zY2FsZSA9IDAuNFxuXHRcdFx0XHRAcmlwcGxlLm9wYWNpdHkgPSAwLjNcblxuXHRcdFx0XHRyaXBwbGVBID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdGxheWVyOlx0QHJpcHBsZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRzY2FsZTogMC44XG5cdFx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXG5cblx0XHRcdFx0cmlwcGxlQiAgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRsYXllcjpcdEByaXBwbGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdHNjYWxlOiAxXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXG5cblx0XHRcdFx0cmlwcGxlQS5zdGFydCgpXG5cblx0XHRcdFx0cmlwcGxlQS5vbkFuaW1hdGlvbkVuZCAtPlxuXHRcdFx0XHRcdHJpcHBsZUIuc3RhcnQoKVxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDQuIEZBQiAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuRkFCIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLSBEZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHRwZCA9IDI0XG5cdFx0ZWxzZSBwZCA9IDE2XG5cblx0XHRAb3B0aW9ucy5taW5pID89IGZhbHNlXG5cblx0XHRpZiBAb3B0aW9ucy5taW5pIGlzIHRydWUgb3IgU2NyZWVuLndpZHRoIDwgNDYwXG5cdFx0XHRAb3B0aW9ucy53aWR0aCA/PSA0MFxuXHRcdFx0QG9wdGlvbnMuaGVpZ2h0ID89IDQwXG5cdFx0ZWxzZVxuXHRcdFx0QG9wdGlvbnMud2lkdGggPz0gNTZcblx0XHRcdEBvcHRpb25zLmhlaWdodCA/PSA1NlxuXG5cdFx0QG9wdGlvbnMueCA/PSBTY3JlZW4ud2lkdGggLSAoQG9wdGlvbnMud2lkdGggKyBwZClcblx0XHRAb3B0aW9ucy55ID89IFNjcmVlbi5oZWlnaHQgLSAoQG9wdGlvbnMud2lkdGggKyBwZClcblxuXHRcdEBvcHRpb25zLmJvcmRlclJhZGl1cyA9IFwiMTAwJVwiXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIlxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QG9wdGlvbnMuaWNvbiA/PSBcImFkZFwiXG5cbiMtLS0tLS0gb3ZlcmxheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QG92ZXJsYXkgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJvcmRlclJhZGl1czogQG9wdGlvbnMuYm9yZGVyUmFkaXVzXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjEyKVwiXG5cdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0bmFtZTogXCJvdmVybGF5XCJcblxuIy0tLS0tLSBzaGFkb3cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBzaGFkb3cgPSBuZXcgU2hhZG93XG5cdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuaGVpZ2h0XG5cdFx0XHRib3JkZXJSYWRpdXM6IEBvcHRpb25zLmJvcmRlclJhZGl1c1xuXHRcdFx0bmFtZTogXCJzaGFkb3dcIlxuXG5cdFx0QHNoYWRvdy51bWJyYS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl8wZHBcIlxuXHRcdEBzaGFkb3cucGVudW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMGRwXCJcblx0XHRAc2hhZG93LmFtYmllbnQuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMGRwXCJcblxuIy0tLS0tLSBpY29uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAaWNvbiA9IG5ldyBTeXN0ZW1JY29uXG5cdFx0XHR3aWR0aDogMjRcblx0XHRcdGhlaWdodDogMjRcblx0XHRcdGljb246IEBvcHRpb25zLmljb25cblx0XHRcdGNvbG9yOiBcIiMzMzY3Q0RcIlxuXHRcdFx0bmFtZTogXCJpY29uXCJcblxuIy0tLS0tLSBzdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBpY29uLnBhcmVudCA9IEBvdmVybGF5LnBhcmVudCA9IEBzaGFkb3cucGFyZW50ID0gIEBcblx0XHRAaWNvbi5jZW50ZXIoKVxuXG4jLS0tLS0tIGV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0aWYgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdEAub25Nb3VzZU92ZXIgQEhvdmVyXG5cdFx0XHRALm9uTW91c2VPdXQgQEhvdmVyT2ZmXG5cdFx0XHRAb25Nb3VzZURvd24gQG1vdXNlRG93blxuXHRcdFx0QG9uTW91c2VVcCBAbW91c2VVcFxuXHRcdGVsc2Vcblx0XHRcdEBvblRhcFN0YXJ0IEBtb3VzZURvd25cblx0XHRcdEBvblRhcEVuZCBAbW91c2VVcFxuXG4jLS0tLS0tIGV2ZW50IGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRIb3ZlcjogLT5cblx0XHRAc2hhZG93LnVtYnJhLnN0YXRlcy5zd2l0Y2ggXCJfMmRwXCJcblx0XHRAc2hhZG93LnBlbnVtYnJhLnN0YXRlcy5zd2l0Y2ggXCJfMmRwXCJcblx0XHRAc2hhZG93LmFtYmllbnQuc3RhdGVzLnN3aXRjaCBcIl8yZHBcIlxuXG5cdEhvdmVyT2ZmOiAtPlxuXHRcdEBzaGFkb3cudW1icmEuc3RhdGVzLnN3aXRjaCBcIl8wZHBcIlxuXHRcdEBzaGFkb3cucGVudW1icmEuc3RhdGVzLnN3aXRjaCBcIl8wZHBcIlxuXHRcdEBzaGFkb3cuYW1iaWVudC5zdGF0ZXMuc3dpdGNoIFwiXzBkcFwiXG5cblx0bW91c2VEb3duOiAtPlxuXHRcdEBvdmVybGF5LnZpc2libGUgPSB0cnVlXG5cdFx0QHNoYWRvdy51bWJyYS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl8yZHBcIlxuXHRcdEBzaGFkb3cucGVudW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMmRwXCJcblx0XHRAc2hhZG93LmFtYmllbnQuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMmRwXCJcblxuXHRtb3VzZVVwOiAtPlxuXHRcdEBvdmVybGF5LnZpc2libGUgPSBmYWxzZVxuXHRcdEBzaGFkb3cudW1icmEuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJfMGRwXCJcblx0XHRAc2hhZG93LnBlbnVtYnJhLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzBkcFwiXG5cdFx0QHNoYWRvdy5hbWJpZW50LnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiXzBkcFwiXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgNS4gQ2hlY2tib3hlcyAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuQ2hlY2tib3hlcyBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLSBkZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvcHRpb25zLnRoZW1lID89IFwibGlnaHRcIlxuXHRcdHRoZW1lID0gQG9wdGlvbnMudGhlbWVcblx0XHRAb3B0aW9ucy5uYW1lID89IFwiY2hlY2tib3hlc1wiXG5cblx0XHRAb3B0aW9ucy5kaXNhYmxlUmlwcGxlID89IGZhbHNlXG5cblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QG9wdGlvbnMuc2NyZWVuQ29sb3IgPz0gXCIjMjEyMTIxXCJcblx0XHRlbHNlXG5cdFx0XHRAb3B0aW9ucy5zY3JlZW5Db2xvciA/PSBcIiNmZmZcIlxuXG5cdFx0I2xhYmVsIGNob2ljZXNcblx0XHRAb3B0aW9ucy5jaG9pY2VzID89IFtcImFwcGxlc1wiLCBcImJhbmFuYXNcIiwgXCJncmFwZXNcIl1cblxuXHRcdEBvcHRpb25zLmNoZWNrWSA/PSAtNVxuXG4jLS0tLS0tIGNvbG9yc1xuXHRcdEB0aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0dGhlbWVDb2xvciA9IEB0aGVtZUNvbG9yXG5cblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9kYXJrXG5cdFx0XHRAYm94Q29sb3IgPSBsaW5lX2Rhcmtcblx0XHRlbHNlXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2xpZ2h0XG5cdFx0XHRAYm94Q29sb3IgPSBsaW5lX2xpZ2h0XG5cdFx0Ym94Q29sb3IgPSBAYm94Q29sb3JcblxuXHRcdCN0ZXh0IHN0eWxpbmdcblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJTZWxlY3QgZnJ1aXRcIlxuXG5cdFx0I0RlZmF1bHQgcHJvcGVydGllc1xuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHRoZWlnaHQ6IEBvcHRpb25zLmNob2ljZXMubGVuZ3RoICogMzYgKyAzMlxuXHRcdFx0d2lkdGggOiAxNTBcblxuIy0tLS0tLSBRdWVzdGlvbiAgbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBsYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXG4jLS0tLS0tIFN1cGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAbGFiZWwucGFyZW50ID0gQFxuXG5cdFx0Y2hlY2tZID0gQG9wdGlvbnMuY2hlY2tZXG5cbiMtLS0tLS0gdGltZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHQxID0gMC4yXG5cdFx0dDIgPSAwLjJcblxuIy0tLS0tLSBsb29wIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGNoZWNrcyA9IFtdXG5cblx0XHRmb3IgaSBpbiBbMC4uLkBvcHRpb25zLmNob2ljZXMubGVuZ3RoXVxuXG4jLS0tLS0tIGNoZWNrYm94IGNvbnRhaW5lclxuXHRcdFx0Y29udCA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6QFxuXHRcdFx0XHRoZWlnaHQ6IDQwXG5cdFx0XHRcdHk6IGkgKiA0MCArIDI0XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHR4OiAxNlxuXHRcdFx0XHRuYW1lOiBcImNvbnRhaW5lclwiXG5cbiMtLS0tLS0gYm94IHNldHRpbmdzXG5cdFx0XHRib3ggPSBuZXcgTGF5ZXJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0XHRzaXplIDogMjBcblx0XHRcdFx0Ym9yZGVyUmFkaXVzIDogMlxuXHRcdFx0XHRib3JkZXJXaWR0aCA6IDJcblx0XHRcdFx0Ym9yZGVyQ29sb3IgOiBAYm94Q29sb3Jcblx0XHRcdFx0cGFyZW50OiBjb250XG5cdFx0XHRcdGNsaXA6IHRydWVcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXG5cdFx0XHRib3guYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHRcdHRpbWU6IHQxXG5cblx0XHRcdGJveC5zdGF0ZXMgPVxuXHRcdFx0XHRzZWxlY3RlZDpcblx0XHRcdFx0XHRib3JkZXJDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRkZXNlbGVjdGVkOlxuXHRcdFx0XHRcdGJvcmRlckNvbG9yOiBAYm94Q29sb3Jcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBib3hDb2xvclxuXG5cdFx0XHRib3guc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJkZXNlbGVjdGVkXCJcblx0XHRcdGJveC5iYWNrZ3JvdW5kQ29sb3IgPSBAb3B0aW9ucy5zY3JlZW5Db2xvclxuXG4jLS0tLS0tIGJveCBDaXJjbGUgc2V0dGluZ3NcbiMtLS0tLS0gVGhpcyBjcmVhdGUgdGhlIGNpcmNsZSBhbmltYXRpb24gd2l0aGluIHRoZSBib3hcblx0XHRcdGJveENpcmNsZSA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6IGJveFxuXHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTAwJVwiXG5cdFx0XHRcdHNpemU6IDMwXG5cdFx0XHRcdHNjYWxlOiAwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQHNjcmVlbkNvbG9yXG5cdFx0XHRcdHg6IEFsaWduLmNlbnRlcigyKVxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXIoMilcblx0XHRcdFx0bmFtZTogXCJvdmVybGF5XCJcblxuXHRcdFx0Ym94Q2lyY2xlLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHRcdFx0XHR0aW1lOiB0MVxuXG5cdFx0XHRib3hDaXJjbGUuc3RhdGVzID1cblx0XHRcdFx0c2VsZWN0ZWQ6XG5cdFx0XHRcdFx0c2NhbGU6IDBcblx0XHRcdFx0ZGVzZWxlY3RlZDpcblx0XHRcdFx0XHRzY2FsZTogMVxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMuc2NyZWVuQ29sb3JcblxuIy0tLS0tLSBjaGVjayBtYXNrIHNldHRpbmdzXG4jLS0tLS0tIFRoaXMgY3JlYXRlIGRyYXdpbmcgaW4gZWZmZWN0IGZvciB0aGUgY2hlY2tcblx0XHRcdGNoZWNrTWFzayA9IG5ldyBMYXllclxuXHRcdFx0XHR3aWR0aDogMFxuXHRcdFx0XHRoZWlnaHQ6IDIwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHRwYXJlbnQ6IGJveFxuXHRcdFx0XHR5OiBjaGVja1lcblx0XHRcdFx0eDogMy41XG5cdFx0XHRcdHBhcmVudDogYm94XG5cdFx0XHRcdGNsaXA6IHRydWVcblx0XHRcdFx0bmFtZTogXCJjaGVjayBtYXNrXCJcblxuXHRcdFx0Y2hlY2tNYXNrLnN0YXRlcy5zZWxlY3RlZCA9XG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0d2lkdGg6MjBcblx0XHRcdFx0dGltZTogdDJcblxuXHRcdFx0Y2hlY2tNYXNrLnN0YXRlcy5kZXNlbGVjdGVkID1cblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHR3aWR0aDogMFxuXHRcdFx0XHR0aW1lOiAwLjAxXG5cblx0XHRcdGNoZWNrTWFzay5zdGF0ZXMuc3dpdGNoIFwiZGVzZWxlY3RlZFwiXG5cbiMtLS0tLS0gY2hlY2sgc2V0dGluZ3Ncblx0XHRcdGNoZWNrID0gbmV3IExheWVyXG5cdFx0XHRcdGh0bWw6ICc8c3ZnIHdpZHRoPVwiMTNweFwiIGhlaWdodD1cIjEwcHhcIiB2aWV3Qm94PVwiMCAwIDEzIDEwXCI+PGcgY2xhc3M9XCJDaGVja2llc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cG9seWxpbmUgY2xhc3M9XCJQYXRoLTJcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHBvaW50cz1cIjEgNS4yNSA0IDkgMTIgMS41XCI+PC9wb2x5bGluZT48L2c+PC9zdmc+J1xuXHRcdFx0XHR3aWR0aDogMjBcblx0XHRcdFx0aGVpZ2h0OiAyMFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdFx0cGFyZW50OiBjaGVja01hc2tcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHR5OiAwXG5cdFx0XHRcdG5hbWU6IFwiY2hlY2tcIlxuXG5cdFx0XHRjaGVjay5zdHlsZSA9XG5cdFx0XHRcdGZvbnRTaXplOiBcIjE4cHhcIlxuXG4jLS0tLS0tIFJpcHBsZSBzZXR0aW5nc1xuXHRcdFx0aWYgQG9wdGlvbnMuZGlzYWJsZVJpcHBsZSBpcyBmYWxzZVxuXG5cdFx0XHRcdHJpcHBsZSA9IG5ldyBMYXllclxuXHRcdFx0XHRcdHNpemU6IDUwXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjEwMHB4XCJcblx0XHRcdFx0XHRwYXJlbnQ6IGNvbnRcblx0XHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0XHR4OiAtMTVcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjNcblx0XHRcdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0XHRcdG5hbWU6IFwicmlwcGxlXCJcblxuXHRcdFx0XHRyaXBwbGUuc3RhdGVzLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwibGlnaHRcIlxuXHRcdFx0XHRcdHJpcHBsZS5zdGF0ZXMuZGVzZWxlY3RlZCA9XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiXG5cblx0XHRcdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdFx0XHRyaXBwbGUuc3RhdGVzLmRlc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIlxuXG4jLS0tLS0tIGNob2lzZSBsYWJsZXMgc2V0dGluZ3Ncblx0XHRcdGNob2ljZV9sYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0XHR0ZXh0OiBAb3B0aW9ucy5jaG9pY2VzW2ldXG5cdFx0XHRcdHBhcmVudDogY29udFxuXHRcdFx0XHR4OiAzMFxuXHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0eTogQWxpZ24uY2VudGVyKC0wLjUpXG5cdFx0XHRcdG5hbWU6IFwiY2hvaWNlIHJpcHBsZVwiXG5cbiMtLS0tLS0gcG9wdWxhdGluZyBjaGVja3MgYXJyYXlcblx0XHRcdGNoZWNrcy5wdXNoKGJveClcblxuIy0tLS0tLSBjcmVhdGluZyBuZXcgYXJyYXkgdG8gc2VlIHdoYXQgY2hlY2tzIGFyZSBzZWxlY3RlZFxuXHRcdFx0YW8gPSBAb3B0aW9uc1xuXHRcdFx0ZHAgPSBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlXG5cdFx0XHRhby5hY3RpdmVTZWxlY3Rpb24gPSBbXVxuXG4jLS0tLS0tIGV2ZW50IG9uIENsaWNrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Y29udC5vbkNsaWNrIC0+XG5cbiMtLS0tLS0gZXZlbnQgc2V0dXBcblx0XHRcdFx0YW8uYWN0aXZlU2VsZWN0aW9uID0gW10gI2VtcHR5IGFycmF5XG5cblx0XHRcdFx0aWYgZHAgaXMgZmFsc2Vcblx0XHRcdFx0XHRwUmlwcGxlID0gdGhpcy5jaGlsZHJlblsxXVxuXHRcdFx0XHRwQ2hlY2tNYXNrID0gIHRoaXMuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV1cblx0XHRcdFx0cEJveCA9IHRoaXMuY2hpbGRyZW5bMF1cblx0XHRcdFx0cEJveENpcmNsZSA9ICB0aGlzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cbiMtLS0tLS0gYm94IGFuZCBjaGVjayBhbmltYXRpb25cblx0XHRcdFx0cEJveC5zdGF0ZUN5Y2xlKFwic2VsZWN0ZWRcIiwgXCJkZXNlbGVjdGVkXCIpXG5cdFx0XHRcdHBCb3hDaXJjbGUuc3RhdGVDeWNsZShcInNlbGVjdGVkXCIsIFwiZGVzZWxlY3RlZFwiKVxuXG5cdFx0XHRcdGlmIHBCb3guc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRpZiBkcCBpcyBmYWxzZVxuXHRcdFx0XHRcdFx0cFJpcHBsZS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRVdGlscy5kZWxheSB0MSwgLT5cblx0XHRcdFx0XHRcdHBDaGVja01hc2suc3RhdGVzLnN3aXRjaCBcInNlbGVjdGVkXCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIGRwIGlzIGZhbHNlXG5cdFx0XHRcdFx0XHRwUmlwcGxlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRcdFx0cENoZWNrTWFzay5zdGF0ZXMuc3dpdGNoIFwiZGVzZWxlY3RlZFwiXG5cblx0XHRcdFx0IyBwb3B1bGF0ZXMgYXJyYXkgdG8gc2VlIHNlbGVjdGVkIGl0ZW1zXG5cdFx0XHRcdGZvciBib3ggaW4gY2hlY2tzXG5cdFx0XHRcdFx0aWYgYm94LnN0YXRlcy5jdXJyZW50Lm5hbWUgaXMgXCJzZWxlY3RlZFwiXG5cdFx0XHRcdFx0XHRhby5hY3RpdmVTZWxlY3Rpb24ucHVzaChib3gubmFtZSlcblxuIy0tLS0tXHRwUmlwcGxlIGFuaW1hdGlvblxuXHRcdFx0XHRpZiBkcCBpcyBmYWxzZVxuXHRcdFx0XHRcdHBSaXBwbGUudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRwUmlwcGxlLnNjYWxlID0gMC40XG5cdFx0XHRcdFx0cFJpcHBsZS5vcGFjaXR5ID0gMC40XG5cblx0XHRcdFx0XHRpZlx0cFJpcHBsZS5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRcdFx0cFJpcHBsZS5vcGFjaXR5ID0gMC44XG5cblx0XHRcdFx0XHRwdWxzYUEgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRsYXllcjpcdHBSaXBwbGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdHNjYWxlOiAwLjhcblx0XHRcdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXG5cblx0XHRcdFx0XHRwUmlwcGxlQiA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdFx0bGF5ZXI6XHRwUmlwcGxlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0XHRcdHRpbWU6IDAuMTVcblx0XHRcdFx0XHRcdFx0Y3VydmU6IEJlemllci5saW5lYXJcblxuXHRcdFx0XHRcdFx0cHVsc2FBLnN0YXJ0KClcblxuXHRcdFx0XHRcdFx0cHVsc2FBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdFx0XHRwUmlwcGxlQi5zdGFydCgpXG5cbiMtLS0tLS0gZXZlbnQgaG92ZXJcblx0XHRcdGNvbnQub25Nb3VzZU92ZXIgLT5cblx0XHRcdFx0dGhpcy5jaGlsZHJlblswXS5ib3JkZXJDb2xvciA9IHRoZW1lQ29sb3JcblxuXHRcdFx0Y29udC5vbk1vdXNlT3V0IC0+XG5cdFx0XHRcdGlmIHRoaXMuY2hpbGRyZW5bMF0uc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcImRlc2VsZWN0ZWRcIlxuXHRcdFx0XHRcdHRoaXMuY2hpbGRyZW5bMF0uYm9yZGVyQ29sb3IgPSBib3hDb2xvclxuXG4jLS0tLS0tIGdldHRlcnMgYW5kIHNldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdEBkZWZpbmUgJ3RoZW1lQ29sb3InLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2Nob2ljZXMnLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmNob2ljZXNcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmNob2ljZXMgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2FjdGl2ZVNlbGVjdGlvbicsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb24gPSB2YWx1ZVxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDYuIFJhZGlvQnV0dG9ucyAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5SYWRpb0J1dHRvbnMgZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gZGVmYXVsdCBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0dGhlbWUgPSBAb3B0aW9ucy50aGVtZVxuXG5cdFx0QG9wdGlvbnMuZGlzYWJsZVJpcHBsZSA/PSBmYWxzZVxuXG5cdFx0I2xhYmVsIGNob2ljZXNcblx0XHRAb3B0aW9ucy5jaG9pY2VzID89IFtcImFwcGxlc1wiLCBcImJhbmFuYXNcIiwgXCJncmFwZXNcIl1cblxuIy0tLS0tLS0gY29sb3JzXG5cdFx0QG9wdGlvbnMudGhlbWVDb2xvciA/PSBcIiMwMDk2ODhcIlxuXHRcdHRoZW1lQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9kYXJrXG5cdFx0XHRAYm94Q29sb3IgPSBsaW5lX2Rhcmtcblx0XHRlbHNlXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2xpZ2h0XG5cdFx0XHRAYm94Q29sb3IgPSBsaW5lX2xpZ2h0XG5cdFx0Ym94Q29sb3IgPSBAYm94Q29sb3JcblxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSAgXCJTZWxlY3QgZnJ1aXRcIlxuXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdGhlaWdodDogQG9wdGlvbnMuY2hvaWNlcy5sZW5ndGggKiAzNiArIDMyXG5cdFx0XHR3aWR0aCA6IDE1MFxuXHRcdFx0bmFtZTogXCJSYWRpb0J1dHRvbnNcIlxuXG4jLS0tLS0tIFF1ZXN0aW9uIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGxhYmVsID0gbmV3IExhYmVsXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy5sYWJlbFRleHRcblx0XHRcdGNvbG9yOiBAbGFiZWxDb2xvclxuXHRcdFx0bmFtZTogXCJsYWJlbFwiXG5cbiMtLS0tLS0gU3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblxuXHRcdGwgPSBAb3B0aW9ucy5jaG9pY2VzXG5cbiMtLS0tLS0gbG9vcCBhbmQgYXJyYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRjaGVja3MgPSBbXVxuXHRcdGNpcmNsZXMgPSBbXVxuXG5cdFx0Zm9yIGkgaW4gWzAuLi5Ab3B0aW9ucy5jaG9pY2VzLmxlbmd0aF1cblxuXHRcdFx0Y29udCA9IG5ldyBMYXllclxuXHRcdFx0XHRoZWlnaHQ6IDQwXG5cdFx0XHRcdHk6IDQwICogaSArIDI0XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHRwYXJlbnQ6IEBcblx0XHRcdFx0bmFtZTogQG9wdGlvbnMuY2hvaWNlc1tpXVxuXHRcdFx0XHR4OiAxNlxuXG4jLS0tLS0tIGNpcmNsZVxuXG5cdFx0XHRjaXJjbGUgPSBuZXcgTGF5ZXJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0XHRzaXplIDogMjBcblx0XHRcdFx0Ym9yZGVyUmFkaXVzIDogXCIxMDAlXCJcblx0XHRcdFx0Ym9yZGVyV2lkdGggOiAyXG5cdFx0XHRcdGJvcmRlckNvbG9yOiBAYm94Q29sb3Jcblx0XHRcdFx0cGFyZW50OiBjb250XG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRuYW1lOiBcImNpcmNsZVwiXG5cblx0XHRcdGNpcmNsZS5hbmltYXRpb25PcHRpb25zID1cblx0XHRcdFx0dGltZTogMC4wMDFcblxuXHRcdFx0Y2lyY2xlLnN0YXRlcyA9XG5cdFx0XHRcdHNlbGVjdGVkOlxuXHRcdFx0XHRcdGJvcmRlckNvbG9yOiB0aGVtZUNvbG9yXG5cdFx0XHRcdGRlc2VsZWN0ZWQ6XG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IEBib3hDb2xvclxuXG5cdFx0XHRjaXJjbGVzLnB1c2goY2lyY2xlKVxuXHRcdFx0Y2lyY2xlLnN0YXRlcy5zd2l0Y2ggXCJkZXNlbGVjdGVkXCJcblxuXHRcdFx0aWYgaSBpcyBAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb25cblx0XHRcdFx0Y2lyY2xlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwic2VsZWN0ZWRcIlxuXG4jLS0tLS0tIGNoZWNrXG5cblx0XHRcdGNoZWNrID0gbmV3IExheWVyXG5cdFx0XHRcdHdpZHRoOiAxMFxuXHRcdFx0XHRoZWlnaHQ6IDEwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRib3JkZXJSYWRpdXM6IGNpcmNsZS5ib3JkZXJSYWRpdXNcblx0XHRcdFx0cGFyZW50OiBjaXJjbGVcblx0XHRcdFx0eDogNVxuXHRcdFx0XHR5OiA1XG5cdFx0XHRcdG5hbWU6IGlcblxuXHRcdFx0Y2hlY2suYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHRcdHRpbWU6IDAuMTdcblxuXHRcdFx0Y2hlY2suc3RhdGVzID1cblx0XHRcdFx0c2VsZWN0ZWQ6XG5cdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0ZGVzZWxlY3RlZDpcblx0XHRcdFx0XHRzY2FsZTogMFxuXG5cdFx0XHRjaGVjay5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcImRlc2VsZWN0ZWRcIlxuXG5cdFx0XHRjaGVja3MucHVzaChjaGVjaylcblxuXHRcdFx0aWYgaSBpcyBAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb25cblx0XHRcdFx0Y2hlY2suc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJzZWxlY3RlZFwiXG5cbiMtLS0tLS0gcmlwcGxlIHNldHRpbmdzXG5cblx0XHRcdGlmIEBvcHRpb25zLmRpc2FibGVSaXBwbGUgaXMgZmFsc2VcblxuXHRcdFx0XHRyaXBwbGUgPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRzaXplOiA1MFxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxMDBweFwiXG5cdFx0XHRcdFx0cGFyZW50OiBjaXJjbGVcblx0XHRcdFx0XHR5OiBBbGlnbi5jZW50ZXIoMilcblx0XHRcdFx0XHR4OiBBbGlnbi5jZW50ZXIoMilcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjEyXG5cdFx0XHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0XHRuYW1lOiBcInJpcHBsZVwiXG5cbiMtLS0tLS0gY2hvaWNlXG5cblx0XHRcdGNob2ljZV9sYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0XHR0ZXh0OiBAb3B0aW9ucy5jaG9pY2VzW2ldXG5cdFx0XHRcdHBhcmVudDogY29udFxuXHRcdFx0XHR4OiAzMFxuXHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0eTogLTAuNVxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0bmFtZTogXCJjaG9pY2UgbGFiZWxcIlxuXG4jLS0tLS0tIGhlbHBlclxuXG5cdFx0XHRoZWxwZXIgPSBuZXcgTGF5ZXJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRcdGhlaWdodDogNVxuXHRcdFx0XHRwYXJlbnQ6IGNvbnRcblx0XHRcdFx0d2lkdGg6IGlcblx0XHRcdFx0bmFtZTogXCJoZWxwZXJcIlxuXG4jLS0tLS0tIGV2ZW50XG5cblx0XHRcdEBhY3RpdmVTZWxlY3Rpb24gPSBudWxsXG5cdFx0XHRiYiA9IEBhY3RpdmVTZWxlY3Rpb25cblx0XHRcdGRwID0gQG9wdGlvbnMuZGlzYWJsZVJpcHBsZVxuXHRcdFx0b2MgPSBAdGhlbWVDb2xvclxuXG5cdFx0XHRjb250Lm9uQ2xpY2sgLT5cblxuXHRcdFx0XHRwUmlwcGxlID0gdGhpcy5jaGlsZHJlblswXS5jaGlsZHJlblsxXVxuXHRcdFx0XHRwQ2hlY2sgPSB0aGlzLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cdFx0XHRcdHBDaXJjbGUgPSB0aGlzLmNoaWxkcmVuWzBdXG5cblx0XHRcdFx0Zm9yIGNoZWNrIGluIGNoZWNrc1xuXHRcdFx0XHRcdGlmIGNoZWNrLm5hbWUgaXMgcENoZWNrLm5hbWVcblx0XHRcdFx0XHRcdHBDaGVjay5zdGF0ZXMuc3dpdGNoIFwic2VsZWN0ZWRcIlxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGNoZWNrLnN0YXRlcy5zd2l0Y2ggXCJkZXNlbGVjdGVkXCJcblx0XHRcdFx0Zm9yIGNpcmNsZSBpbiBjaXJjbGVzXG5cdFx0XHRcdFx0Y2lyY2xlLnN0YXRlcy5zd2l0Y2ggXCJkZXNlbGVjdGVkXCJcblxuXHRcdFx0XHRwQ2lyY2xlLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwic2VsZWN0ZWRcIlxuXG5cdFx0XHRcdGJiID0gdGhpcy5uYW1lXG5cbiMtLS0tLS0gcmlwcGxlIGFuaW1hdGlvblxuXG5cdFx0XHRcdGlmIGRwIGlzIGZhbHNlXG5cdFx0XHRcdFx0cFJpcHBsZS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdHBSaXBwbGUuc2NhbGUgPSAwLjRcblx0XHRcdFx0XHRwUmlwcGxlLm9wYWNpdHkgPSAwLjJcblxuXHRcdFx0XHRcdGlmIHBSaXBwbGUuc3RhdGVzLmN1cnJlbnQubmFtZSBpcyBcInNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdHBSaXBwbGUub3BhY2l0eSA9IDAuM1xuXG5cdFx0XHRcdFx0UmlwcGxlQSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdGxheWVyOiBwUmlwcGxlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRzY2FsZTogMC44XG5cdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXG5cdFx0XHRcdFx0UmlwcGxlQiA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRcdGxheWVyOiBwUmlwcGxlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRzY2FsZTogMVxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXG5cdFx0XHRcdFx0UmlwcGxlQS5zdGFydCgpXG5cblx0XHRcdFx0XHRSaXBwbGVBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdFx0XHRSaXBwbGVCLnN0YXJ0KClcblxuIy0tLS0tLSBldmVudCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFx0Y29udC5vbk1vdXNlT3ZlciAtPlxuXHRcdFx0XHR0aGlzLmNoaWxkcmVuWzBdLmJvcmRlckNvbG9yID0gdGhlbWVDb2xvclxuXG5cdFx0XHRjb250Lm9uTW91c2VPdXQgLT5cblx0XHRcdFx0aWYgdGhpcy5jaGlsZHJlblswXS5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwiZGVzZWxlY3RlZFwiXG5cdFx0XHRcdFx0dGhpcy5jaGlsZHJlblswXS5ib3JkZXJDb2xvciA9IGJveENvbG9yXG5cblx0XHRcdEBvbkNsaWNrIC0+XG5cdFx0XHRcdEBvcHRpb25zLmFjdGl2ZVNlbGVjdGlvbiA9IGJiXG5cbiMtLS0tLS0gZ2V0dGVyIGFuZCBzZXR0ZXIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0QGRlZmluZSAnYWN0aXZlU2VsZWN0aW9uJyxcblx0XHRnZXQ6IC0+IEBvcHRpb25zLmFjdGl2ZVNlbGVjdGlvblxuXHRcdHNldDogKHZhbHVlKSAtPiBAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb24gPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ3RoZW1lJyxcblx0XHRnZXQ6IC0+IEBvcHRpb25zLnRoZW1lXG5cdFx0c2V0OiAodmFsdWUpIC0+IEBvcHRpb25zLnRoZW1lID0gdmFsdWVcblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICA3LiBTd2l0Y2ggICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuY2xhc3MgZXhwb3J0cy5Td2l0Y2ggZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0gQ3VzdG9tZSBwcm9wZXJ0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb3B0aW9ucy5kaXNhYmxlUmlwcGxlID89IGZhbHNlXG5cdFx0QG9wdGlvbnMuYWN0aXZlT25TdGFydCA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLmFjdGl2ZSA/PSBmYWxzZVxuXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0dGhlbWUgPSBAb3B0aW9ucy50aGVtZVxuXG4jLS0tLS0tIGNvbG9yc1xuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHR0aGVtZUNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEB0aHVtYkNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEB0cmFja0NvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdEB0aHVtYl9saWdodF9vZmYgPSBcIiNGQUZBRkFcIlxuXHRcdEB0aHVtYl9kYXJrX29mZiA9IFwiI2JkYmRiZFwiXG5cdFx0QHRyYWNrX2xpZ2h0X29mZiA9IFwicmdiYSgwLDAsMCwwLjM4KVwiXG5cdFx0QHRyYWNrX2Rhcmtfb2ZmID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMylcIlxuXHRcdEByaXBwbGVfZGFya19vZmYgPSBcInJnYmEoMjU1LDI1NSwyNTUsIDEpXCJcblx0XHRAcmlwcGxlX2xpZ2h0X29mZiA9IFwicmdiYSgwLDAsMCwgMSlcIlxuXG5cdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdEBsYWJlbENvbG9yID0gbGFiZWxfZGFya1xuXHRcdFx0QHRodW1iT2ZmID0gQHRodW1iX2Rhcmtfb2ZmXG5cdFx0XHRAdHJhY2tPZmYgPSBAdHJhY2tfZGFya19vZmZcblx0XHRcdEByaXBwbGVPZmYgPSBAcmlwcGxlX2Rhcmtfb2ZmXG5cdFx0ZWxzZVxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9saWdodFxuXHRcdFx0QHRodW1iT2ZmID0gQHRodW1iX2xpZ2h0X29mZlxuXHRcdFx0QHRyYWNrT2ZmID0gQHRyYWNrX2xpZ2h0X29mZlxuXHRcdFx0QHJpcHBsZU9mZiA9IEByaXBwbGVfbGlnaHRfb2ZmXG5cblx0XHRVdGlscy5pbnNlcnRDU1MoJ0BpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8pOycpXG5cblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0aGVpZ2h0OiA0OFxuXHRcdFx0d2lkdGggOiAxNTBcblxuIy0tLS0tLSB0cmFjayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEB0cmFjayA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IDQwXG5cdFx0XHRoZWlnaHQ6IDE1XG5cdFx0XHRib3JkZXJSYWRpdXM6IDE1XG5cdFx0XHRuYW1lOiBcInRyYWNrXCJcblx0XHRAdHJhY2suYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHR0aW1lOiAwLjJcblxuXHRcdEB0cmFjay5zdGF0ZXMgPVxuXHRcdFx0b246XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRvcGFjaXR5OiAwLjVcblx0XHRcdG9mZjpcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBAdHJhY2tPZmZcblx0XHRcdFx0b3BhY2l0eTogMC4zOFxuXG5cdFx0ZGVsZXRlIEB0cmFjay5zdGF0ZXMuZGVmYXVsdFxuXHRcdEB0cmFjay5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIm9mZlwiXG5cbiMtLS0tLS0gcmlwcGxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEByaXBwbGUgPSBuZXcgTGF5ZXJcblx0XHRcdHNpemU6IDUwXG5cdFx0XHRzY2FsZTogMVxuXHRcdFx0Ym9yZGVyUmFkaXVzOiA1MFxuXHRcdFx0b3BhY2l0eTogMC4yXG5cdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0bmFtZTogXCJyaXBwbGVcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cbiMtLS0tLS0gdGh1bWIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QHRodW1iID0gbmV3IExheWVyXG5cdFx0XHRzaXplOiAxOVxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAxMDBcblx0XHRcdG5hbWU6IFwidGh1bWJcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAdGh1bWJPZmZcblx0XHRAdGh1bWIuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0XHR0aW1lOiAwLjNcblxuXHRcdEB0aHVtYi5zdGF0ZXMgPVxuXHRcdFx0b246XG5cdFx0XHRcdHg6IDIxXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0b2ZmOlxuXHRcdFx0XHR4OiAwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQHRodW1iT2ZmXG5cblx0XHRkZWxldGUgQHRodW1iLnN0YXRlcy5kZWZhdWx0XG5cdFx0QHRodW1iLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwib2ZmXCJcblxuIy0tLS0tLSBsYWJlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblxuIy0tLS0tLSBTdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0QHRyYWNrLnBhcmVudCA9IEBcblx0XHRAdHJhY2sueSA9IEFsaWduLmNlbnRlclxuXG5cdFx0QHRodW1iLnBhcmVudCA9IEBcblx0XHRAdGh1bWIueSA9IEFsaWduLmNlbnRlclxuXG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblx0XHRAbGFiZWwueCA9IDU1XG5cdFx0QGxhYmVsLnkgPSBBbGlnbi5jZW50ZXJcblxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVSaXBwbGUgaXMgZmFsc2Vcblx0XHRcdEByaXBwbGUucGFyZW50ID0gQHRodW1iXG5cdFx0XHRAcmlwcGxlLnggPSAtIDE1XG5cdFx0XHRAcmlwcGxlLnkgPSAtIDE1XG5cdFx0XHRyaXBwbGUgPSBAcmlwcGxlXG5cbiMtLS0tLS0gc2hhZG93cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzaGFkb3cgPSBuZXcgU2hhZG93XG5cdFx0XHRwYXJlbnQ6IEB0aHVtYlxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAxMDBcblx0XHRcdHdpZHRoOiBAdGh1bWIud2lkdGhcblx0XHRcdGhlaWdodDogQHRodW1iLndpZHRoXG5cdFx0XHRuYW1lOiBcInNoYWRvd1wiXG5cbiMtLS0tLS0gYWN0aXZlT25TdGFydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdGlmIEBvcHRpb25zLmFjdGl2ZU9uU3RhcnQgaXMgdHJ1ZVxuXHRcdFx0QHRodW1iLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwib25cIlxuXHRcdFx0QHRyYWNrLnN0YXRlcy5zd2l0Y2hJbnN0YW50IFwib25cIlxuXHRcdFx0QGFjdGl2ZSA9IHRydWVcblxuIy0tLS0tLSByaXBwbGUgYW5pbWF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0cmlwcGxlQW5pID0gLT5cblxuXHRcdFx0cmlwcGxlLnZpc2libGUgPSB0cnVlXG5cdFx0XHRyaXBwbGUuc2NhbGUgPSAwLjRcblxuXHRcdFx0cHVsc2FBID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRsYXllcjogcmlwcGxlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0c2NhbGU6IDAuOFxuXHRcdFx0XHR0aW1lOiAwLjE1XG5cdFx0XHRcdGN1cnZlOiBCZXppZXIubGluZWFyXG5cblx0XHRcdHJpcHBsZUIgPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdGxheWVyOiByaXBwbGVcblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRzY2FsZTogMVxuXHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0dGltZTogMC4xNVxuXHRcdFx0XHRjdXJ2ZTogQmV6aWVyLmxpbmVhclxuXHRcdFx0cHVsc2FBLnN0YXJ0KClcblxuXHRcdFx0cHVsc2FBLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdHJpcHBsZUIuc3RhcnQoKVxuXG4jLS0tLS0tIGV2ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN0YXRlID0gbnVsbFxuXG5cdFx0QG9uQ2xpY2sgLT5cblxuXHRcdFx0QHRyYWNrLnN0YXRlQ3ljbGUoKVxuXHRcdFx0QHRodW1iLnN0YXRlQ3ljbGUoKVxuXG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlUmlwcGxlIGlzIGZhbHNlXG5cdFx0XHRcdGlmIEB0aHVtYi5zdGF0ZXMuY3VycmVudC5uYW1lIGlzIFwib25cIlxuXHRcdFx0XHRcdEByaXBwbGUuYmFja2dyb3VuZENvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXHRcdFx0XHRcdEByaXBwbGUub3BhY2l0eSA9IDAuNFxuXHRcdFx0XHRcdHBvc1ggPSAyMFxuXHRcdFx0XHRcdHJpcHBsZUFuaSgpXG5cdFx0XHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gdHJ1ZVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cG9zWCA9IDBcblx0XHRcdFx0XHRAcmlwcGxlLmJhY2tncm91bmRDb2xvciA9IEByaXBwbGVPZmZcblx0XHRcdFx0XHRAcmlwcGxlLm9wYWNpdHkgPSAwLjJcblx0XHRcdFx0XHRyaXBwbGVBbmkoKVxuXHRcdFx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IGZhbHNlXG5cblxuXHRcdFx0aWYgQHRodW1iLnN0YXRlcy5jdXJyZW50Lm5hbWUgaXMgXCJvblwiXG5cdFx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IHRydWVcblx0XHRcdGVsc2Vcblx0XHRcdFx0QG9wdGlvbnMuYWN0aXZlID0gZmFsc2VcblxuIy0tLS0tLSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0QGRlZmluZSAnYWN0aXZlJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmFjdGl2ZSA9IHZhbHVlXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgOC4gVGV4dEZpZWxkICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIFRleHRGaWVsZCBleHRlbmRzIExheWVyXG5cblx0SU5QVVRfSElERV9QU1VFRE9fVUkgID0gXCJ7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgZGlzcGxheTogbm9uZTsgfVwiXG5cdElOUFVUX1NFTEVDVE9SX05VTUJFUiA9IFwiaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b25cIlxuXHRJTlBVVF9TRUxFQ1RPUl9TRUFSQ0ggPSBcImlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvblwiXG5cblx0RXZlbnRzLklucHV0ICAgPSBcIklucHV0RmllbGQuT25JbnB1dFwiXG5cdEV2ZW50cy5Gb2N1cyAgID0gXCJJbnB1dEZpZWxkLk9uRm9jdXNcIlxuXHRFdmVudHMuQmx1ciAgICA9IFwiSW5wdXRGaWVsZC5PbkJsdXJcIlxuXHRFdmVudHMuVmFsaWQgICA9IFwiSW5wdXRGaWVsZC5PblZhbGlkXCJcblx0RXZlbnRzLkludmFsaWQgPSBcIklucHV0RmllbGQuT25JbnZhbGlkXCJcblx0RXZlbnRzLk1hdGNoICAgPSBcIklucHV0RmllbGQuT25NYXRjaFwiXG5cblx0QGRlZmluZSBcInZhbHVlXCIsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QGlucHV0LnZhbHVlXG5cblx0XHRzZXQ6ICh2KSAtPlxuXHRcdFx0cmV0dXJuIHVubGVzcyB2XG5cdFx0XHRpZiBAaW5wdXRcblx0XHRcdFx0QGNoYW5nZUlucHV0VmFsdWUgdlxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cbiMtLS0tLS0tIGRlZmF1bHQgcHJvcGVydGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGlzTnVtYmVyID0gZmFsc2Vcblx0XHRAaXNTZWFyY2ggPSBmYWxzZVxuXG5cdFx0QGlzRW1wdHkgID0gdHJ1ZVxuXHRcdEBpc1ZhbGlkICA9IG51bGxcblx0XHRAb3JpZ2luYWxUZXh0Q29sb3IgPSBudWxsXG5cblx0XHQjIEZyYW1lciBMYXllciBQcm9wc1xuXHRcdEBvcHRpb25zLm5hbWUgICAgICAgICAgICAgPz0gXCJCYXNpYyB0ZXh0IGZpZWxkXCJcblxuXHRcdEBvcHRpb25zLmJvcmRlclJhZGl1cyAgICAgPSAwXG5cdFx0QG9wdGlvbnMucGxhY2VIb2xkZXJGb2N1cyA/PSBudWxsXG5cdFx0QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvciA9IFwiXCJcblx0XHRAb3B0aW9ucy5wbGFjZUhvbGRlciA/PSAgXCJcIlxuXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0dGhlbWUgPSBAb3B0aW9ucy50aGVtZVxuXG5cdFx0I2NvbG9yc1xuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHR0aGVtZUNvbG9yID0gQHRoZW1lQ29sb3JcblxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IElucHV0bGFiZWxfZGFya1xuXHRcdFx0QGlucHV0Q29sb3IgPSBpbnB1dF9kYXJrXG5cdFx0XHRAbGluZUNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNylcIlxuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcblx0XHRcdEBsYWJlbEZvY3VzT3BhY2l0eSA9IDFcblx0XHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciAgPSBcInJnYmEoMCwwLDAsMC4wMSlcIlxuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gSW5wdXRsYWJlbF9saWdodFxuXHRcdFx0QGlucHV0Q29sb3IgPSBpbnB1dF9saWdodFxuXHRcdFx0QGxpbmVDb2xvciA9IFwicmdiYSgwLDAsMCwwLjQyKVwiXG5cdFx0XHRAbGluZUhvdmVyQ29sb3IgPSBcInJnYmEoMCwwLDAsMC44NylcIlxuXHRcdFx0QGxhYmVsRm9jdXNPcGFjaXR5ID0gMC44N1xuXHRcdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yICA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjAxKVwiXG5cdFx0Ym94Q29sb3IgPSBAYm94Q29sb3JcblxuXHRcdEBvcHRpb25zLmNvbG9yID0gQGlucHV0Q29sb3JcblxuXG5cdFx0I3RleHQgc3R5bGluZ1xuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7JylcblxuXHRcdGlmIFV0aWxzLmlzTW9iaWxlKClcblx0XHRcdEBvcHRpb25zLmZvbnRTaXplID89IDE2ICogMlxuXHRcdFx0QG9wdGlvbnMubGluZUhlaWdodCA/PSAgMjQgKiAyXG5cdFx0XHRAb3B0aW9ucy5saW5lSGVpZ2h0ID0gXCIje0BvcHRpb25zLmxpbmVIZWlnaHR9cHhcIiBpZiBAb3B0aW9ucy5saW5lSGVpZ2h0P1xuXHRcdFx0QG9wdGlvbnMuaGVpZ2h0ID0gNzBcblx0XHRlbHNlXG5cdFx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAxNlxuXHRcdFx0QG9wdGlvbnMubGluZUhlaWdodCA/PSAgMjRcblx0XHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPSBcIiN7QG9wdGlvbnMubGluZUhlaWdodH1weFwiIGlmIEBvcHRpb25zLmxpbmVIZWlnaHQ/XG5cdFx0XHRAb3B0aW9ucy5oZWlnaHQgPSA3MFxuXG5cdFx0QG9wdGlvbnMubGFiZWxTaXplID89MTZcblxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCA/PSA0MDBcblx0XHRAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID89IDBcblxuXHRcdCN0ZXh0IGh0bWxcblx0XHRAb3B0aW9ucy5oZWxwZXJUZXh0ID89IFwiSGVscGVyIHRleHRcIlxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSBcIkxhYmVsXCJcblx0XHRAb3B0aW9ucy5oZWxwZXJUZXh0VmlzYmxlID89IGZhbHNlXG5cblx0XHQjRGVmYXVsdCBwcm9wZXJ0aWVzXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdHdpZHRoIDogMjAwXG5cbiMtLS0tLS0tIEVsZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGluZSA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRoZWlnaHQ6IDFcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdG5hbWU6IFwibGluZVwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBsaW5lQ29sb3JcblxuXHRcdEBsaW5lUmlwcGxlID0gbmV3IExheWVyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdHdpZHRoOiAwXG5cdFx0XHRoZWlnaHQ6IDJcblx0XHRcdG5hbWU6IFwicmlwcGxlXCJcblxuXHRcdEBsYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRmb250U2l6ZTogQG9wdGlvbnMubGFiZWxTaXplXG5cdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXG5cdFx0QGhlbHBlclRleHQgPSBuZXcgTGFiZWxcblx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0dGV4dDogQG9wdGlvbnMuaGVscGVyVGV4dFxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImhlbHBlciBUZXh0XCJcblx0XHRcdHZpc2libGU6IEBvcHRpb25zLmhlbHBlclRleHRWaXNibGVcblxuXHRcdEBpbnB1dFBhcmVudCA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiAyOFxuXHRcdFx0bmFtZTogXCJpbnB1dCBwYXJlbnRcIlxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBoZWxwZXJUZXh0LnBhcmVudCA9IEBsaW5lLnBhcmVudCA9IEBpbnB1dFBhcmVudC5wYXJlbnQgPSAgQFxuXHRcdEBoZWxwZXJUZXh0LnkgPSA1MFxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAXG5cdFx0QGxhYmVsLnkgPSAyMFxuXHRcdEBsaW5lUmlwcGxlLnBhcmVudCA9IEBsaW5lXG5cdFx0QGxpbmVSaXBwbGUueCA9IEFsaWduLmNlbnRlclxuXHRcdEBsaW5lLnkgPSA0NFxuXHRcdEBpbnB1dFBhcmVudC55ID0gMTBcblxuIy0tLS0tLS0gZXZlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvbkNsaWNrIEBjbGlja2VkXG5cdFx0QG9uVGFwIEBjbGlja2VkXG5cblx0XHRpZiBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0QG9uTW91c2VPdmVyIEBob3Zlck9uXG5cdFx0XHRAb25Nb3VzZU91dCBAaG92ZXJPZmZcblxuXHRcdEAub24gRXZlbnRzLkJsdXIsICh2YWx1ZSwgbGF5ZXIpIC0+XG5cdFx0XHRAbGluZS5oZWlnaHQgPSAxXG5cdFx0XHRAbGluZVJpcHBsZS53aWR0aCA9IDBcblx0XHRcdEBsaW5lUmlwcGxlLnggPSBBbGlnbi5jZW50ZXJcblx0XHRcdEBoZWxwZXJUZXh0LmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3Jcblx0XHRcdEBvcHRpb25zLmNvbG9yID0gQGlucHV0Q29sb3Jcblx0XHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cblx0XHRcdGlmIEAuaXNFbXB0eVxuXHRcdFx0XHRAbGFiZWwuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRmb250U2l6ZTogMTZcblx0XHRcdFx0XHRcdHk6IDIwXG5cdFx0XHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0XHR0aW1lOiAwLjJcblxuIy0tLS0tLSBBZGp1c3QgYSBmZXcgdGhpbmdzIGZvciB2YXJpb3VzIHR5cGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzd2l0Y2ggQG9wdGlvbnMudHlwZVxuXHRcdFx0d2hlbiBcInNlYXJjaFwiIHRoZW4gQGlzU2VhcmNoID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlclwiIHRoZW4gQGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlcnMtb25seVwiLCBcIm51bWJlci1vbmx5XCJcblx0XHRcdFx0QGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0XHRAb3B0aW9ucy50eXBlICAgID0gaWYgQG9wdGlvbnMucGF0dGVybj8gdGhlbiBcIm51bWJlclwiICAgICAgICAgIGVsc2UgXCJ0ZXh0XCJcblx0XHRcdFx0QG9wdGlvbnMucGF0dGVybiA9IGlmIEBvcHRpb25zLnBhdHRlcm4/IHRoZW4gQG9wdGlvbnMucGF0dGVybiBlbHNlIFBBVFRFUk5fTlVNQkVSXG5cblx0XHRAaHRtbCArPSBzd2l0Y2hcblx0XHRcdHdoZW4gQGlzTnVtYmVyIHRoZW4gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPiN7SU5QVVRfU0VMRUNUT1JfTlVNQkVSfSN7SU5QVVRfSElERV9QU1VFRE9fVUl9PC9zdHlsZT5cIlxuXHRcdFx0d2hlbiBAaXNTZWFyY2ggdGhlbiBcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+I3tJTlBVVF9TRUxFQ1RPUl9TRUFSQ0h9I3tJTlBVVF9ISURFX1BTVUVET19VSX08L3N0eWxlPlwiXG5cdFx0XHRlbHNlIFwiXCJcblxuXHRcdGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3I/XG5cdFx0XHRAaHRtbCArPSBcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOnBsYWNlaG9sZGVyLXNob3duIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH08L3N0eWxlPlwiXG5cbiMtLS0tLS0gY3JlYXRpbmcgJiBzdHlsaW5nIHRoZSBpbnB1dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwiaW5wdXRcIlxuXG5cdFx0QGlucHV0LnR5cGUgICAgICAgID0gQG9wdGlvbnMudHlwZVxuXHRcdEBpbnB1dC52YWx1ZSAgICAgICA9IEBvcHRpb25zLnZhbHVlICAgICAgICAgICAgICAgICAgaWYgQG9wdGlvbnMudmFsdWU/XG5cdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXIgICAgICAgICAgICBpZiBAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRAaW5wdXQucGF0dGVybiAgICAgPSBAb3B0aW9ucy5wYXR0ZXJuICAgICAgICAgICAgICAgIGlmIEBvcHRpb25zLnBhdHRlcm4/XG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZShcIm1heExlbmd0aFwiLCBAb3B0aW9ucy5tYXhMZW5ndGgpIGlmIEBvcHRpb25zLm1heExlbmd0aD9cblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIiwgKGlmIEBvcHRpb25zLmF1dG9DYXBpdGFsaXplIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsICAgKGlmIEBvcHRpb25zLmF1dG9Db21wbGV0ZSAgIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIiwgICAgKGlmIEBvcHRpb25zLmF1dG9Db3JyZWN0ICAgIGlzIHRydWUgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKSlcblxuXHRcdEBpbnB1dFBhcmVudC5fZWxlbWVudC5hcHBlbmRDaGlsZCBAaW5wdXRcblxuXHRcdCMgU2V0dXAgVmFsdWVzXG5cdFx0QGlzRW1wdHkgICAgICAgICAgID0gIShAb3B0aW9ucy52YWx1ZT8ubGVuZ3RoID4gMClcblx0XHRAb3JpZ2luYWxUZXh0Q29sb3IgPSBAb3B0aW9ucy5jb2xvclxuXG5cdFx0IyBTZXR1cCBJbnB1dCBTdHlsZVxuXHRcdGlucHV0U3R5bGUgPVxuXHRcdFx0Zm9udDogXCIje0BvcHRpb25zLmZvbnRXZWlnaHR9ICN7QG9wdGlvbnMuZm9udFNpemV9cHgvI3tAb3B0aW9ucy5saW5lSGVpZ2h0fSAje0BvcHRpb25zLmZvbnRGYW1pbHl9XCJcblx0XHRcdG91dGxpbmU6IFwibm9uZVwiXG5cdFx0XHR0ZXh0SW5kZW50OiBcIiN7QG9wdGlvbnMuaW5kZW50fXB4XCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRoZWlnaHQ6IFwiMjJweFwiXG5cdFx0XHR3aWR0aDogIFwiMTAwJVwiXG5cdFx0XHRwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuXHRcdFx0bWFyZ2luOiBcIjBcIlxuXHRcdFx0cGFkZGluZzogXCIwXCJcblx0XHRcdFwiLXdlYmtpdC1hcHBlYXJhbmNlXCI6IFwibm9uZVwiXG5cblx0XHRAaW5wdXQuc3R5bGVba2V5XSAgPSB2YWwgZm9yIGtleSwgdmFsIG9mIGlucHV0U3R5bGVcblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBAb3B0aW9ucy5jb2xvciBpZiBAb3B0aW9ucy5jb2xvcj9cblxuXG5cdFx0QGlucHV0Lm9uZm9jdXMgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZUhvbGRlckZvY3VzIGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyRm9jdXM/XG5cdFx0XHRkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcblx0XHRcdEBlbWl0KEV2ZW50cy5Gb2N1cywgQGlucHV0LnZhbHVlLCBAKVxuXG5cdFx0QGlucHV0Lm9uYmx1ciAgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHR1bmxlc3MgQGlucHV0LnBsYWNlaG9sZGVyIGlzIEBvcHRpb25zLnBsYWNlSG9sZGVyIG9yICFAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRcdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXJcblx0XHRcdEBlbWl0KEV2ZW50cy5CbHVyLCBAaW5wdXQudmFsdWUsIEApXG5cblx0XHRAaW5wdXQub25pbnB1dCA9ID0+XG5cdFx0XHRAaXNFbXB0eSA9ICEoIEBpbnB1dC52YWx1ZT8ubGVuZ3RoID4gMClcblx0XHRcdEBlbWl0KEV2ZW50cy5JbnB1dCwgQGlucHV0LnZhbHVlLCBAKVxuXG5cdFx0QG9uIEV2ZW50cy5Ub3VjaEVuZCwgLT4gQGlucHV0LmZvY3VzKClcblx0XHRAb24gXCJjaGFuZ2U6Y29sb3JcIiwgIC0+IEBjaGFuZ2VJbnB1dFRleHRDb2xvcigpXG5cblx0XHRAb24gXCJrZXlkb3duXCIsIChldmVudCkgLT5cblx0XHRcdGlmIGV2ZW50LmtleUNvZGUgaXMgMTNcblx0XHRcdFx0QGxpbmUuaGVpZ2h0ID0gMVxuXHRcdFx0XHRAbGluZVJpcHBsZS53aWR0aCA9IDBcblx0XHRcdFx0QGxpbmVSaXBwbGUueCA9IEFsaWduLmNlbnRlclxuXHRcdFx0XHRAaGVscGVyVGV4dC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3Jcblx0XHRcdFx0QG9wdGlvbnMuY29sb3IgPSBAaW5wdXRDb2xvclxuXHRcdFx0XHRAbGFiZWwuY29sb3IgPSBAbGFiZWxDb2xvclxuXG5cdFx0XHRcdGlmIEAuaXNFbXB0eVxuXHRcdFx0XHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRmb250U2l6ZTogMTZcblx0XHRcdFx0XHRcdFx0eTogMjBcblx0XHRcdFx0XHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRcdFx0XHR0aW1lOiAwLjJcblxuIy0tLS0tLSBldmVudCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdGNsZWFyOiAtPlxuXHRcdEBpbnB1dC52YWx1ZSA9IFwiXCJcblx0XHRAaXNWYWxpZCA9IG51bGxcblx0XHRAaXNFbXB0eSA9IHRydWVcblxuXHRjaGFuZ2VJbnB1dFRleHRDb2xvcjogLT5cblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBAY29sb3IudG9IZXhTdHJpbmcoKVxuXG5cdGNoYW5nZUlucHV0VmFsdWU6ICh2KSAtPlxuXHRcdEBpbnB1dC52YWx1ZSA9IHZcblx0XHRAaW5wdXQub25pbnB1dCgpXG5cblx0Y2xpY2tlZDogLT5cblx0XHRAbGFiZWwuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0Zm9udFNpemU6IDEyXG5cdFx0XHRcdHk6IDBcblx0XHRcdFx0Y29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0b3BhY2l0eTogQGxhYmVsRm9jdXNPcGFjaXR5XG5cdFx0XHR0aW1lOiAwLjJcblxuXHRcdEBsaW5lLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdGhlaWdodDogMlxuXHRcdFx0dGltZTogMC4yXG5cblx0XHRAbGluZVJpcHBsZS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdFx0eDogMFxuXHRcdFx0dGltZTogMC4yXG5cblx0aG92ZXJPbjogLT5cblx0XHRAbGluZS5oZWlnaHQgPSAyXG5cdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQGxpbmVIb3ZlckNvbG9yXG5cblx0aG92ZXJPZmY6IC0+XG5cdFx0QGxpbmUuaGVpZ2h0ID0gMVxuXHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lQ29sb3JcblxuXG5cblxuXG5cblxuXG5cblxuY2xhc3MgZXhwb3J0cy5UZXh0RmllbGRfQmFzaWMgZXh0ZW5kcyBUZXh0RmllbGRcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXG5cblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICA5LiBUZXh0RmllbGRfVmFsaWRhdGlvbiAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuVGV4dEZpZWxkX1ZhbGlkYXRpb24gZXh0ZW5kcyBUZXh0RmllbGRcblxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG4jLS0tLS0tLSBkZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCMgTWFrZSBzdXJlIHdlIHNldCB0aGUgQ2hlY2tpbmcgRmxhZ1xuXHRcdEBzaG91bGRDaGVja1ZhbGlkaXR5ID0gdHJ1ZSBpZiBAb3B0aW9ucy5wYXR0ZXJuPyBvciBAb3B0aW9ucy5tYXRjaD9cblxuXHRcdCMgRnJhbWVyIExheWVyIFByb3BzXG5cdFx0QG9wdGlvbnMubmFtZSAgICAgICAgICAgICA/PSBcInBhc3N3b3JkIGZpZWxkXCJcblxuXHRcdEBvcHRpb25zLnR5cGUgPz0gXCJwYXNzd29yZFwiXG5cdFx0QG9wdGlvbnMucGF0dGVybiA/PSBcIig/PV4uezgsfSQpKCg/PS4qXFxkKXwoPz0uKlxcVyspKSg/IVsuXFxuXSkoPz0uKltBLVpdKSg/PS4qW2Etel0pLiokXCJcblx0XHRAb3B0aW9ucy5leWVWaXNpYmxlID89IHRydWVcblxuXHRcdEBvcHRpb25zLmNvbG9yID0gQGlucHV0Q29sb3JcblxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IElucHV0bGFiZWxfZGFya1xuXHRcdGVsc2Vcblx0XHRcdEBsYWJlbENvbG9yID0gSW5wdXRsYWJlbF9saWdodFxuXG5cdFx0QHJlZCA9IFwiI0ZGMTc0NFwiXG5cblx0XHQjdGV4dCBodG1sXG5cdFx0QG9wdGlvbnMuaGVscGVyVGV4dCA/PSBcImhlbHBlclRleHRcIlxuXHRcdEBvcHRpb25zLmxhYmVsVGV4dCA/PSBcIlBhc3N3b3JkXCJcblx0XHRAb3B0aW9ucy5oZWxwZXJUZXh0VmlzaWJsZSA/PSBmYWxzZVxuXG5cdFx0I0RlZmF1bHQgcHJvcGVydGllc1xuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHR3aWR0aCA6IDIwMFxuXG5cdFx0aWYgQG9wdGlvbnMucGF0dGVybiBpcyBcIl4oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD8hLipcXHMpLiokXCJcblx0XHRcdEBvcHRpb25zLmhlbHBlclRleHQgPz0gXCJVcHBlckNhc2UsIExvd2VyQ2FzZSBhbmQgTnVtYmVyXCJcblx0XHRlbHNlIGlmIEBvcHRpb25zLnBhdHRlcm4gaXMgXCIoPz1eLns4LH0kKSgoPz0uKlxcZCl8KD89LipcXFcrKSkoPyFbLlxcbl0pKD89LipbQS1aXSkoPz0uKlthLXpdKS4qJFwiXG5cdFx0XHRAb3B0aW9ucy5oZWxwZXJUZXh0ID89IFwiTXVzdCBjb250YWluIDggY2hhcmFjdGVycywgMSB1cHBlcmNhc2UsIDEgbG93ZXJjYXNlLCBhbmQgMSBudW1iZXIvc3BlY2lhbCBjaGFyYWN0ZXJcIlxuXHRcdGVsc2UgQG9wdGlvbnMuaGVscGVyVGV4dCA/PSBcImhlbHBlclRleHRcIlxuXG4jLS0tLS0tLSBFbGVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBlcnJvclRleHQgPSBuZXcgTGFiZWxcblx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0dGV4dDogQG9wdGlvbnMuaGVscGVyVGV4dFxuXHRcdFx0Y29sb3I6IEByZWRcblx0XHRcdG5hbWU6IFwiaGVscGVyIFRleHRcIlxuXHRcdFx0dmlzaWJsZTogZmFsc2VcblxuXHRcdEBleWVDb250aWFuZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiAyMlxuXHRcdFx0aGVpZ2h0OiAyMlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHR2aXNpYmxlOiBAb3B0aW9ucy5leWVWaXNpYmxlXG5cdFx0XHRuYW1lOiBcImV5ZUNvbnRpYW5lclwiXG5cblx0XHRAZXllT24gPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiAyMlxuXHRcdFx0aGVpZ2h0OiAxNlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHR2aXNpYmxlOiBmYWxzZVxuXHRcdFx0bmFtZTogXCJleWVPbmVcIlxuXHRcdFx0aHRtbDogJzxzdmcgd2lkdGg9XCIyMnB4XCIgaGVpZ2h0PVwiMTZweFwiIHZpZXdCb3g9XCIwIDAgMjIgMTZcIiB2ZXJzaW9uPVwiMS4xXCI+PGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPiA8cGF0aCBkPVwiTTguOTEyMDU5MzgsNS44OTA3IEM5LjUwNjA1OTM4LDUuMjk3NyAxMC4yMDkwNTk0LDQuOTk5NyAxMS4wMjEwNTk0LDQuOTk5NyBDMTEuODM0MDU5NCw0Ljk5OTcgMTIuNTM3MDU5NCw1LjI5NzcgMTMuMTMxMDU5NCw1Ljg5MDcgQzEzLjcyNDA1OTQsNi40ODQ3IDE0LjAyMTA1OTQsNy4xODc3IDE0LjAyMTA1OTQsNy45OTk3IEMxNC4wMjEwNTk0LDguODEyNyAxMy43MjQwNTk0LDkuNTE1NyAxMy4xMzEwNTk0LDEwLjEwOTcgQzEyLjUzNzA1OTQsMTAuNzAyNyAxMS44MzQwNTk0LDEwLjk5OTcgMTEuMDIxMDU5NCwxMC45OTk3IEMxMC4yMDkwNTk0LDEwLjk5OTcgOS41MDYwNTkzOCwxMC43MDI3IDguOTEyMDU5MzgsMTAuMTA5NyBDOC4zMTgwNTkzOCw5LjUxNTcgOC4wMjEwNTkzOCw4LjgxMjcgOC4wMjEwNTkzOCw3Ljk5OTcgQzguMDIxMDU5MzgsNy4xODc3IDguMzE4MDU5MzgsNi40ODQ3IDguOTEyMDU5MzgsNS44OTA3IE03LjQ4MjA1OTM4LDExLjUzODcgQzguNDY3MDU5MzgsMTIuNTIzNyA5LjY0NjA1OTM4LDEzLjAxNTcgMTEuMDIxMDU5NCwxMy4wMTU3IEMxMi4zOTYwNTk0LDEzLjAxNTcgMTMuNTc2MDU5NCwxMi41MjM3IDE0LjU2MDA1OTQsMTEuNTM4NyBDMTUuNTQ1MDU5NCwxMC41NTQ3IDE2LjAzNzA1OTQsOS4zNzU3IDE2LjAzNzA1OTQsNy45OTk3IEMxNi4wMzcwNTk0LDYuNjI0NyAxNS41NDUwNTk0LDUuNDQ1NyAxNC41NjAwNTk0LDQuNDYwNyBDMTMuNTc2MDU5NCwzLjQ3NjcgMTIuMzk2MDU5NCwyLjk4NDcgMTEuMDIxMDU5NCwyLjk4NDcgQzkuNjQ2MDU5MzgsMi45ODQ3IDguNDY3MDU5MzgsMy40NzY3IDcuNDgyMDU5MzgsNC40NjA3IEM2LjQ5ODA1OTM4LDUuNDQ1NyA2LjAwNjA1OTM4LDYuNjI0NyA2LjAwNjA1OTM4LDcuOTk5NyBDNi4wMDYwNTkzOCw5LjM3NTcgNi40OTgwNTkzOCwxMC41NTQ3IDcuNDgyMDU5MzgsMTEuNTM4NyBNNC4zMTgwNTkzOCwyLjU2MjcgQzYuMzE4MDU5MzgsMS4xODc3IDguNTUzMDU5MzgsMC40OTk3IDExLjAyMTA1OTQsMC40OTk3IEMxMy40OTAwNTk0LDAuNDk5NyAxNS43MjQwNTk0LDEuMTg3NyAxNy43MjUwNTk0LDIuNTYyNyBDMTkuNzI1MDU5NCwzLjkzNzcgMjEuMTYyMDU5NCw1Ljc0OTcgMjIuMDM3MDU5NCw3Ljk5OTcgQzIxLjE2MjA1OTQsMTAuMjQ5NyAxOS43MjUwNTk0LDEyLjA2MjcgMTcuNzI1MDU5NCwxMy40Mzc3IEMxNS43MjQwNTk0LDE0LjgxMjcgMTMuNDkwMDU5NCwxNS40OTk3IDExLjAyMTA1OTQsMTUuNDk5NyBDOC41NTMwNTkzOCwxNS40OTk3IDYuMzE4MDU5MzgsMTQuODEyNyA0LjMxODA1OTM4LDEzLjQzNzcgQzIuMzE4MDU5MzgsMTIuMDYyNyAwLjg4MTA1OTM3NSwxMC4yNDk3IDAuMDA2MDU5Mzc1LDcuOTk5NyBDMC44ODEwNTkzNzUsNS43NDk3IDIuMzE4MDU5MzgsMy45Mzc3IDQuMzE4MDU5MzgsMi41NjI3XCIgaWQ9XCJGaWxsLTFcIiBmaWxsPVwiJyArIEBsYWJlbENvbG9yICsgJ1wiPjwvcGF0aD48L2c+PC9zdmc+J1xuXG5cdFx0QGV5ZU9mZiA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IDIzXG5cdFx0XHRoZWlnaHQ6IDE5XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdHZpc2libGU6IHRydWVcblx0XHRcdG5hbWU6IFwiZXllT2ZmXCJcblx0XHRcdGh0bWw6ICc8c3ZnIHdpZHRoPVwiMjNweFwiIGhlaWdodD1cIjE5cHhcIiB2aWV3Qm94PVwiMCAwIDIzIDE5XCIgdmVyc2lvbj1cIjEuMVwiID48ZyBpZD1cIlBhZ2UtMlwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk0xMS4wMzMxNTk0LDYgTDExLjE3NDE1OTQsNiBDMTEuOTg2MTU5NCw2IDEyLjY4OTE1OTQsNi4yOTcgMTMuMjgzMTU5NCw2Ljg5MSBDMTMuODc3MTU5NCw3LjQ4NCAxNC4xNzQxNTk0LDguMTg4IDE0LjE3NDE1OTQsOSBMMTQuMTc0MTU5NCw5LjE4OCBMMTEuMDMzMTU5NCw2IFogTTExLjE3NDE1OTQsMy45ODQgQzEwLjU0OTE1OTQsMy45ODQgOS45MzkxNTkzNyw0LjEwOSA5LjM0NjE1OTM3LDQuMzU5IEw3LjE4OTE1OTM3LDIuMjAzIEM4LjQwODE1OTM3LDEuNzM0IDkuNzM2MTU5MzcsMS41IDExLjE3NDE1OTQsMS41IEMxMy42NDIxNTk0LDEuNSAxNS44NjkxNTk0LDIuMTg3IDE3Ljg1MzE1OTQsMy41NjIgQzE5LjgzODE1OTQsNC45MzggMjEuMjY3MTU5NCw2Ljc1IDIyLjE0MjE1OTQsOSBDMjEuMzkyMTU5NCwxMC44NDQgMjAuMjUyMTU5NCwxMi40MjIgMTguNzIwMTU5NCwxMy43MzQgTDE1LjgxNDE1OTQsMTAuODI4IEMxNi4wNjQxNTk0LDEwLjIzNSAxNi4xODkxNTk0LDkuNjI1IDE2LjE4OTE1OTQsOSBDMTYuMTg5MTU5NCw3LjYyNSAxNS42OTcxNTk0LDYuNDQ1IDE0LjcxMzE1OTQsNS40NjEgQzEzLjcyODE1OTQsNC40NzcgMTIuNTQ5MTU5NCwzLjk4NCAxMS4xNzQxNTk0LDMuOTg0IEwxMS4xNzQxNTk0LDMuOTg0IFogTTYuNzIxMTU5MzcsNi43OTcgQzYuMzQ2MTU5MzcsNy41NDcgNi4xNTgxNTkzNyw4LjI4MSA2LjE1ODE1OTM3LDkgQzYuMTU4MTU5MzcsMTAuMzc1IDYuNjUwMTU5MzcsMTEuNTU1IDcuNjM1MTU5MzcsMTIuNTM5IEM4LjYxOTE1OTM3LDEzLjUyMyA5Ljc5OTE1OTM3LDE0LjAxNiAxMS4xNzQxNTk0LDE0LjAxNiBDMTEuODkyMTU5NCwxNC4wMTYgMTIuNjI3MTU5NCwxMy44MjggMTMuMzc3MTU5NCwxMy40NTMgTDExLjgzMDE1OTQsMTEuOTA2IEMxMS41ODAxNTk0LDExLjk2OSAxMS4zNjExNTk0LDEyIDExLjE3NDE1OTQsMTIgQzEwLjM2MTE1OTQsMTIgOS42NTgxNTkzNywxMS43MDMgOS4wNjQxNTkzNywxMS4xMDkgQzguNDcwMTU5MzcsMTAuNTE2IDguMTc0MTU5MzcsOS44MTMgOC4xNzQxNTkzNyw5IEM4LjE3NDE1OTM3LDguODEzIDguMjA1MTU5MzcsOC41OTQgOC4yNjcxNTkzNyw4LjM0NCBMNi43MjExNTkzNyw2Ljc5NyBaIE0xLjE4OTE1OTM3LDEuMjY2IEwyLjQ1NTE1OTM3LDAgTDIwLjE3NDE1OTQsMTcuNzE5IEwxOC45MDgxNTk0LDE4Ljk4NCBDMTguNzUyMTU5NCwxOC44MjggMTguMjYwMTU5NCwxOC4zNDQgMTcuNDMxMTU5NCwxNy41MzEgQzE2LjYwMzE1OTQsMTYuNzE5IDE1Ljk3MDE1OTQsMTYuMDk0IDE1LjUzMzE1OTQsMTUuNjU2IEMxNC4xODkxNTk0LDE2LjIxOSAxMi43MzYxNTk0LDE2LjUgMTEuMTc0MTU5NCwxNi41IEM4LjcwNTE1OTM3LDE2LjUgNi40NzExNTkzNywxNS44MTMgNC40NzExNTkzNywxNC40MzggQzIuNDcwMTU5MzcsMTMuMDYyIDEuMDMzMTU5MzcsMTEuMjUgMC4xNTgxNTkzNzUsOSBDMC45MzkxNTkzNzUsNy4wNjIgMi4xODkxNTkzNyw1LjQwNyAzLjkwODE1OTM3LDQuMDMxIEMzLjUzMzE1OTM3LDMuNjU2IDMuMDEwMTU5MzcsMy4xMjUgMi4zMzgxNTkzNywyLjQzNyBDMS42NjYxNTkzNywxLjc1IDEuMjgzMTU5MzcsMS4zNTkgMS4xODkxNTkzNywxLjI2NiBMMS4xODkxNTkzNywxLjI2NiBaXCIgaWQ9XCJGaWxsLTNcIiBmaWxsPVwiJyArIEBsYWJlbENvbG9yICsgJ1wiPjwvcGF0aD48L2c+PC9zdmc+J1xuXG4jLS0tLS0tLSBzdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cblx0XHRAZXllQ29udGlhbmVyLnBhcmVudCA9IEBcblx0XHRAZXllT24ucGFyZW50ID0gQGV5ZU9mZi5wYXJlbnQgPSBAZXllQ29udGlhbmVyXG5cdFx0QGV5ZUNvbnRpYW5lci54ID0gQC53aWR0aCAtIDIyXG5cdFx0QGV5ZUNvbnRpYW5lci55ID0gMTNcblx0XHRAZXllT24ueSA9IDBcblx0XHRAZXJyb3JUZXh0LnBhcmVudCA9IEBcblx0XHRAZXJyb3JUZXh0LnkgPSBAaGVscGVyVGV4dC55XG5cbiMtLS0tLS0tIGV2ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvbkNsaWNrIEBjbGlja2VkXG5cdFx0QG9uVGFwIEBjbGlja2VkXG5cblx0XHRpZiBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0QG9uTW91c2VPdmVyIEBob3Zlck9uXG5cdFx0XHRAb25Nb3VzZU91dCBAaG92ZXJPZmZcblxuXHRcdGV5ZU9mZiA9IEBleWVPZmZcblx0XHRleWVPbiA9IEBleWVPblxuXG5cdFx0QGV5ZUNvbnRpYW5lci5vbkNsaWNrIC0+XG5cdFx0XHRpZiBleWVPZmYudmlzaWJsZSBpcyB0cnVlXG5cdFx0XHRcdGV5ZU9mZi52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0ZXllT24udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0aW5wdXQudHlwZSA9IFwidGV4dFwiXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCJcblx0XHRcdFx0ZXllT2ZmLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGV5ZU9uLnZpc2libGUgPSBmYWxzZVxuXG5cdFx0QC5vbiBFdmVudHMuQmx1ciwgKHZhbHVlLCBsYXllcikgLT5cblx0XHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRAbGluZS5oZWlnaHQgPSAxXG5cdFx0XHRAbGluZVJpcHBsZS53aWR0aCA9IDBcblx0XHRcdEBsaW5lUmlwcGxlLnggPSBBbGlnbi5jZW50ZXJcblxuXHRcdFx0aWYgQC5pc0VtcHR5XG5cdFx0XHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdGZvbnRTaXplOiBAb3B0aW9ucy5sYWJlbFNpemVcblx0XHRcdFx0XHRcdHk6IDIwXG5cdFx0XHRcdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdFx0XHR0aW1lOiAwLjJcblx0XHRcdFx0aWYgQGhlbHBlclRleHRWaXNpYmxlIGlzIHRydWVcblx0XHRcdFx0XHRAaGVscGVyVGV4dC52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0ZWxzZSBpZiBAaXNWYWxpZFxuXHRcdFx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0XHRcdEBoZWxwZXJUZXh0LmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRcdFx0aWYgQGhlbHBlclRleHRWaXNpYmxlIGlzIHRydWVcblx0XHRcdFx0XHRAaGVscGVyVGV4dC52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAcmVkXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEByZWRcblxuXHRcdFx0XHRAZXJyb3JUZXh0LnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGVycm9yV29iYmxlMSA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRsYXllcjogQGxhYmVsXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdHg6IDVcblx0XHRcdFx0XHR0aW1lOiAwLjA1XG5cdFx0XHRcdGVycm9yV29iYmxlMiA9IG5ldyBBbmltYXRpb25cblx0XHRcdFx0XHRsYXllcjogQGxhYmVsXG5cdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdHg6IC0gNVxuXHRcdFx0XHRcdHRpbWU6IDAuMDVcblx0XHRcdFx0ZXJyb3JXb2JibGU1ID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdGxheWVyOiBAbGFiZWxcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0eDogMFxuXHRcdFx0XHRcdHRpbWU6IDAuMDI1XG5cdFx0XHRcdGVycm9yV29iYmxlMS5zdGFydCgpXG5cdFx0XHRcdGVycm9yV29iYmxlMS5vbkFuaW1hdGlvbkVuZCAtPiBlcnJvcldvYmJsZTIuc3RhcnQoKVxuXHRcdFx0XHRlcnJvcldvYmJsZTIub25BbmltYXRpb25FbmQgLT4gZXJyb3JXb2JibGU1LnN0YXJ0KClcblx0XHRcdFx0QGhlbHBlclRleHQudmlzaWJsZSA9IGZhbHNlXG5cbiMtLS0tLS0gQWRqdXN0IGEgZmV3IHRoaW5ncyBmb3IgdmFyaW91cyB0eXBlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGlucHV0Lm9uaW5wdXQgPSA9PlxuXHRcdFx0QGlzRW1wdHkgPSAhKCBAaW5wdXQudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0XHRAZW1pdChFdmVudHMuSW5wdXQsIEBpbnB1dC52YWx1ZSwgQClcblx0XHRcdEBjaGVja1ZhbGlkaXR5KClcblxuXHRcdGlucHV0ID0gQGlucHV0XG5cblx0Y2hlY2tWYWxpZGl0eTogLT5cblx0XHRyZXR1cm4gdW5sZXNzIEBzaG91bGRDaGVja1ZhbGlkaXR5XG5cblx0XHRpZiBAb3B0aW9ucy5wYXR0ZXJuP1xuXHRcdFx0dmFsaWRpdHkgPSBAaW5wdXQuY2hlY2tWYWxpZGl0eSgpXG5cdFx0XHRAaXNFbXB0eSA9ICEoIEBpbnB1dC52YWx1ZT8ubGVuZ3RoID4gMClcblxuXHRcdFx0aWYgQGlzVmFsaWQgaXNudCB2YWxpZGl0eSBvciBAaXNFbXB0eVxuXHRcdFx0XHRpZiBAaXNFbXB0eSBvciAhdmFsaWRpdHlcblx0XHRcdFx0XHRAaXNWYWxpZCA9IGZhbHNlXG5cdFx0XHRcdFx0QGVtaXQoRXZlbnRzLkludmFsaWQsIEBpbnB1dC52YWx1ZSwgQClcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdEBpc1ZhbGlkID0gdHJ1ZVxuXHRcdFx0XHRcdEBlbWl0KEV2ZW50cy5WYWxpZCwgICBAaW5wdXQudmFsdWUsIEApXG5cblx0XHRpZiBAY2hlY2tNYXRjaCgpXG5cdFx0XHRAaXNWYWxpZCA9IHRydWVcblx0XHRcdEBlbWl0KEV2ZW50cy5NYXRjaCwgQGlucHV0LnZhbHVlLCBAKVxuXG5cdGNoZWNrTWF0Y2g6IC0+XG5cdFx0cmV0dXJuIGZhbHNlIHVubGVzcyBAb3B0aW9ucy5tYXRjaD9cblx0XHRpZiBBcnJheS5pc0FycmF5KEBvcHRpb25zLm1hdGNoKVxuXHRcdFx0Zm9yIG1hdGNoIGluIEBvcHRpb25zLm1hdGNoXG5cdFx0XHRcdHJldHVybiB0cnVlIGlmIEBpbnB1dC52YWx1ZS5pbmRleE9mKG1hdGNoKSA+IC0xXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHRydWUgaWYgQGlucHV0LnZhbHVlLmluZGV4T2YoQG9wdGlvbnMubWF0Y2gpID4gLTFcblx0XHRyZXR1cm4gZmFsc2VcblxuIy0tLSBldmVudCBmdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRjbGlja2VkOiAtPlxuXHRcdEBsYWJlbC5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRmb250U2l6ZTogMTJcblx0XHRcdFx0eTogLSA2XG5cdFx0XHRcdGNvbG9yOiBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0XHR0aW1lOiAwLjJcblxuXHRcdEBsaW5lLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdGhlaWdodDogMlxuXHRcdFx0dGltZTogMC4yXG5cblx0XHRAbGluZVJpcHBsZS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHR3aWR0aDogQG9wdGlvbnMud2lkdGhcblx0XHRcdFx0eDogMFxuXHRcdFx0dGltZTogMC4yXG5cblx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cdFx0QGxhYmVsLmNvbG9yID0gQHRoZW1lQ29sb3Jcblx0XHRAaGVscGVyVGV4dC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0QGVycm9yVGV4dC52aXNpYmxlID0gZmFsc2Vcblx0XHRpZiBAb3B0aW9ucy5oZWxwZXJUZXh0VmlzaWJsZSBpcyB0cnVlXG5cdFx0XHRAaGVscGVyVGV4dC52aXNpYmxlID0gdHJ1ZVxuXG5cdGhvdmVyT246IC0+XG5cdFx0QGxpbmUuaGVpZ2h0ID0gMlxuXHRcdEBsaW5lLmJhY2tncm91bmRDb2xvciA9IEBsaW5lSG92ZXJDb2xvclxuXG5cdGhvdmVyT2ZmOiAtPlxuXHRcdEBsaW5lLmhlaWdodCA9IDFcblx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUNvbG9yXG5cblx0ZXllQ2xpY2s6IC0+XG5cdFx0QGV5ZS5zdGF0ZUN5Y2xlKFwidmlzaWJsZVwiLCBcInZpc2libGVPZmZcIilcblxuXG5cblxuXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDEwLiBUZXh0QXJlYSAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLlRleHRBcmVhIGV4dGVuZHMgTGF5ZXJcblxuXHRQQVRURVJOX05VTUJFUiA9IFwiWzAtOV0qXCJcblxuXHRJTlBVVF9ISURFX1BTVUVET19VSSAgPSBcInsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBkaXNwbGF5OiBub25lOyB9XCJcblx0SU5QVVRfU0VMRUNUT1JfTlVNQkVSID0gXCJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiXG5cdElOUFVUX1NFTEVDVE9SX1NFQVJDSCA9IFwiaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uXCJcblxuXHRFdmVudHMuSW5wdXQgICA9IFwiSW5wdXRGaWVsZC5PbklucHV0XCJcblx0RXZlbnRzLkZvY3VzICAgPSBcIklucHV0RmllbGQuT25Gb2N1c1wiXG5cdEV2ZW50cy5CbHVyICAgID0gXCJJbnB1dEZpZWxkLk9uQmx1clwiXG5cdEV2ZW50cy5WYWxpZCAgID0gXCJJbnB1dEZpZWxkLk9uVmFsaWRcIlxuXHRFdmVudHMuSW52YWxpZCA9IFwiSW5wdXRGaWVsZC5PbkludmFsaWRcIlxuXHRFdmVudHMuTWF0Y2ggICA9IFwiSW5wdXRGaWVsZC5Pbk1hdGNoXCJcblxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRnZXQ6IC0+XG5cdFx0XHRAdGV4dGFyZWEudmFsdWVcblxuXHRcdHNldDogKHYpIC0+XG5cdFx0XHRyZXR1cm4gdW5sZXNzIHZcblx0XHRcdGlmIEBpbnB1dFxuXHRcdFx0XHRAY2hhbmdlSW5wdXRWYWx1ZSB2XG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLSBkZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGlzTnVtYmVyID0gZmFsc2Vcblx0XHRAaXNTZWFyY2ggPSBmYWxzZVxuXG5cdFx0QGlzRW1wdHkgID0gdHJ1ZVxuXHRcdEBpc1ZhbGlkICA9IG51bGxcblx0XHRAb3JpZ2luYWxUZXh0Q29sb3IgPSBudWxsXG5cblx0XHQjIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIENoZWNraW5nIEZsYWdcblx0XHRAc2hvdWxkQ2hlY2tWYWxpZGl0eSA9IHRydWUgaWYgQG9wdGlvbnMucGF0dGVybj8gb3IgQG9wdGlvbnMubWF0Y2g/XG5cblx0XHQjIEZyYW1lciBMYXllciBQcm9wc1xuXHRcdEBvcHRpb25zLm5hbWUgICAgICAgICAgICAgPz0gXCJUZXh0IGFyZWFcIlxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciAgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC4wMSlcIlxuXHRcdEBvcHRpb25zLmhlaWdodCA/PSAxODBcblxuXHRcdCMgQ3VzdG9tIExheWVyIFByb3BzXG5cdFx0QG9wdGlvbnMudHlwZSAgICAgICAgICAgICA/PSBcInRleHRcIlxuXHRcdEBvcHRpb25zLmZvbnRXZWlnaHQgICAgICAgPz0gNDAwXG5cdFx0QG9wdGlvbnMuZm9udEZhbWlseSAgICAgICA/PSBcIidSb2JvdG8nLCBzYW5zIHNlcmlmXCJcblx0XHRAb3B0aW9ucy5pbmRlbnQgICAgICAgICAgID89IDBcblx0XHRAb3B0aW9ucy5wbGFjZUhvbGRlckZvY3VzID89IG51bGxcblx0XHRAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yID89IG51bGxcblx0XHRAb3B0aW9ucy53aWR0aCA/PSAzMDBcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0QG9wdGlvbnMubGFiZWxUZXh0ID89IFwiVHlwZSBzb21ldGhpbmcuLi5cIlxuXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0dGhlbWUgPSBAb3B0aW9ucy50aGVtZVxuXG5cdFx0I2NvbG9yc1xuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblxuXHRcdHRoZW1lQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QHJlZCA9IFwiI0ZGMTc0NFwiXG5cblx0XHRpZiBAb3B0aW9ucy50aGVtZSBpcyBcImRhcmtcIlxuXHRcdFx0QGxhYmVsQ29sb3IgPSBJbnB1dGxhYmVsX2Rhcmtcblx0XHRcdEBpbnB1dENvbG9yID0gaW5wdXRfZGFya1xuXHRcdFx0QGxpbmVDb2xvciA9IGxpbmVfZGFya1xuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcblx0XHRcdEBsYWJlbEZvY3VzT3BhY2l0eSA9IDFcblx0XHRcdEBsaW5lQ29sb3IgPSBsaW5lX2Rhcmtcblx0XHRcdEBvcHRpb25zLmNvbG9yID0gXCIjZmZmXCJcblx0XHRlbHNlXG5cdFx0XHRAbGFiZWxDb2xvciA9ICBJbnB1dGxhYmVsX2xpZ2h0XG5cdFx0XHRAaW5wdXRDb2xvciA9IGlucHV0X2xpZ2h0XG5cdFx0XHRAbGluZUNvbG9yID0gbGluZV9saWdodFxuXHRcdFx0QGxpbmVIb3ZlckNvbG9yID0gXCJyZ2JhKDAsMCwwLDAuODcpXCJcblx0XHRcdEBsYWJlbEZvY3VzT3BhY2l0eSA9IDAuODdcblx0XHRcdEBsaW5lQ29sb3IgPSBsaW5lX2xpZ2h0XG5cdFx0XHRAb3B0aW9ucy5jb2xvciA9IFwicmdiYSgwLDAsMCwwLjg3KVwiXG5cblx0XHRAb3B0aW9ucy5jb2xvciA9IEBpbnB1dENvbG9yXG5cblx0XHRpZiBVdGlscy5pc01vYmlsZSgpXG5cdFx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAxNiAqIDJcblx0XHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPz0gIDI0ICogMlxuXHRcdFx0QG9wdGlvbnMuc3R5bGUgPVxuXHRcdFx0XHRcInBhZGRpbmdcIiA6IFwiNTZweCAzMnB4IDMycHggMzJweFwiXG5cdFx0ZWxzZVxuXHRcdFx0QG9wdGlvbnMuZm9udFNpemUgPz0gMTZcblx0XHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgPz0gIDI0XG5cdFx0XHRAb3B0aW9ucy5zdHlsZSA9XG5cdFx0XHRcdFwicGFkZGluZ1wiIDogXCIyOHB4IDE2cHggMTZweCAxNnB4XCJcblxuXHRcdEBvcHRpb25zLmxhYmVsU2l6ZSA/PSAxNlxuXG5cdFx0I3RleHQgc3R5bGluZ1xuXHRcdFV0aWxzLmluc2VydENTUygnQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7JylcblxuXHRcdEBvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCA/PSA0MDBcblx0XHRAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nID89IDBcblx0XHRAb3B0aW9ucy5saW1pdE9uID89IHRydWVcblxuXHRcdGlmIEBvcHRpb25zLmxpbWl0T24gaXMgZmFsc2Vcblx0XHRcdEBvcHRpb25zLmNoYXJhY3RlckxpbWl0ID0gMTAwMDAwMDAwMDAwMFxuXHRcdGVsc2UgQG9wdGlvbnMuY2hhcmFjdGVyTGltaXQgPz0gMjAwXG5cbiMtLS0tLS0tIEVsZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLmxhYmVsU2l6ZVxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblx0XHRcdG5hbWU6IFwibGFiZWxcIlxuXG5cdFx0QGxpbWl0ID0gbmV3IExheWVyXG5cdFx0XHRodG1sOiBcIjAgLyBcIiArIEBvcHRpb25zLmNoYXJhY3RlckxpbWl0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdHdpZHRoOiAxMDBcblx0XHRcdGhlaWdodDogMTJcblx0XHRcdHZpc2libGU6IEBvcHRpb25zLmxpbWl0T25cblx0XHRcdG5hbWU6IFwibGltaXRcIlxuXHRcdEBsaW1pdC5zdHlsZSA9XG5cdFx0XHRjb2xvcjogQGxhYmVsQ29sb3Jcblx0XHRcdGZvbnRGYW1pbHk6IEBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRcdGZvbnRTaXplOiBcIjEycHhcIlxuXHRcdFx0bGluZUhlaWdodDogXCIxMnB4XCJcblx0XHRcdHRleHRBbGlnbjogXCJyaWdodFwiXG5cdFx0XHRsZXR0ZXJTcGFjaW5nOiBAb3B0aW9ucy5sZXR0ZXJTcGFjaW5nXG5cblx0XHRAZXJyb3JUZXh0ID0gbmV3IExhYmVsXG5cdFx0XHRmb250U2l6ZTogMTJcblx0XHRcdGNvbG9yOiBAcmVkXG5cdFx0XHRuYW1lOiBcImVycm9yIHRleHRcIlxuXHRcdFx0dmlzaWJsZTogZmFsc2Vcblx0XHRcdHRleHQ6IFwiRXhlZWRzIHRleHQgbGltaXQuXCJcblxuXHRcdEBib3JkZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5oZWlnaHRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0Ym9yZGVyV2lkdGg6IDFcblx0XHRcdGJvcmRlckNvbG9yOiBAbGluZUNvbG9yXG5cdFx0XHRib3JkZXJSYWRpdXM6IDJcblx0XHRcdG5hbWU6IFwiYm9yZGVyXCJcblxuIy0tLS0tLSBzdXBlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBsYWJlbC5wYXJlbnQgPSBAYm9yZGVyLnBhcmVudCA9IEBcblx0XHRAbGltaXQucGFyZW50ID0gQFxuXHRcdEBlcnJvclRleHQucGFyZW50ID0gQFxuXHRcdEBsYWJlbC55ID0gMjBcblx0XHRAbGFiZWwueCA9IDE2XG5cdFx0QGxpbWl0LnggPSBAd2lkdGggLSAxMDBcblx0XHRAbGltaXQueSA9IEBoZWlnaHQgKyA4XG5cdFx0QGVycm9yVGV4dC55ID0gQGhlaWdodCArIDhcblxuIy0tLS0tLS0gZXZlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdEBvbkNsaWNrIEBjbGlja2VkXG5cblx0XHRALm9uIEV2ZW50cy5CbHVyLCAodmFsdWUsIGxheWVyKSAtPlxuXHRcdFx0QGJsdXJyZWQoKVxuXG5cdFx0QC5vbiBFdmVudHMuRm9jdXMsICh2YWx1ZSwgbGF5ZXIpIC0+XG5cdFx0XHRAZm9jdXMoKVxuXG5cdFx0aWYgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdEAub25Nb3VzZU92ZXIgQGhvdmVyT25cblx0XHRcdEAub25Nb3VzZU91dCBAaG92ZXJPZmZcblxuXHRcdEAub24gRXZlbnRzLklucHV0LCAodmFsdWUsIGxheWVyKSAtPlxuXHRcdFx0QGxpbWl0Lmh0bWwgPSBAdmFsdWUubGVuZ3RoICsgXCIgLyBcIiArIEBvcHRpb25zLmNoYXJhY3RlckxpbWl0XG5cdFx0XHRpZiBAdmFsdWUubGVuZ3RoID4gQG9wdGlvbnMuY2hhcmFjdGVyTGltaXRcblx0XHRcdFx0QGVycm9yVGV4dC52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRAbGltaXQuY29sb3IgPSBAcmVkXG5cdFx0XHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAcmVkXG5cdFx0XHRcdEBsYWJlbC5jb2xvciA9IEByZWRcblx0XHRcdGVsc2Vcblx0XHRcdFx0QGVycm9yVGV4dC52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0QGxpbWl0LmNvbG9yID0gQGxhYmVsQ29sb3Jcblx0XHRcdFx0QGJvcmRlci5ib3JkZXJDb2xvciA9IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0QGxhYmVsLmNvbG9yID0gQG9wdGlvbnMudGhlbWVDb2xvclxuXG4jLS0tLS0tLSBBZGp1c3QgYSBmZXcgdGhpbmdzIGZvciB2YXJpb3VzIHR5cGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRzd2l0Y2ggQG9wdGlvbnMudHlwZVxuXHRcdFx0d2hlbiBcInNlYXJjaFwiIHRoZW4gQGlzU2VhcmNoID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlclwiIHRoZW4gQGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlcnMtb25seVwiLCBcIm51bWJlci1vbmx5XCJcblx0XHRcdFx0QGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0XHRAb3B0aW9ucy50eXBlICAgID0gaWYgQG9wdGlvbnMucGF0dGVybj8gdGhlbiBcIm51bWJlclwiICAgICAgICAgIGVsc2UgXCJ0ZXh0XCJcblx0XHRcdFx0QG9wdGlvbnMucGF0dGVybiA9IGlmIEBvcHRpb25zLnBhdHRlcm4/IHRoZW4gQG9wdGlvbnMucGF0dGVybiBlbHNlIFBBVFRFUk5fTlVNQkVSXG5cblx0XHRAaHRtbCArPSBzd2l0Y2hcblx0XHRcdHdoZW4gQGlzTnVtYmVyIHRoZW4gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPiN7SU5QVVRfU0VMRUNUT1JfTlVNQkVSfSN7SU5QVVRfSElERV9QU1VFRE9fVUl9PC9zdHlsZT5cIlxuXHRcdFx0d2hlbiBAaXNTZWFyY2ggdGhlbiBcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+I3tJTlBVVF9TRUxFQ1RPUl9TRUFSQ0h9I3tJTlBVVF9ISURFX1BTVUVET19VSX08L3N0eWxlPlwiXG5cdFx0XHRlbHNlIFwiXCJcblxuXHRcdGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3I/XG5cdFx0XHRAaHRtbCArPSBcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH0gOnBsYWNlaG9sZGVyLXNob3duIHsgY29sb3I6ICN7QG9wdGlvbnMucGxhY2VIb2xkZXJDb2xvcn07IH08L3N0eWxlPlwiXG5cbiMtLS0tLS0tIGNyZWF0ZSBpbnB1dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwidGV4dGFyZWFcIlxuXG5cdFx0QHRleHRhcmVhLnZhbHVlICAgICAgID0gQG9wdGlvbnMudmFsdWUgICAgICAgICAgICAgICAgICBpZiBAb3B0aW9ucy52YWx1ZT9cblx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZUhvbGRlciAgICAgICAgICAgIGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyP1xuXHRcdEB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJtYXhMZW5ndGhcIiwgQG9wdGlvbnMubWF4TGVuZ3RoKSBpZiBAb3B0aW9ucy5tYXhMZW5ndGg/XG5cdFx0QHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImF1dG9jYXBpdGFsaXplXCIsIChpZiBAb3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZSBpcyB0cnVlIHRoZW4gXCJvblwiIGVsc2UgXCJvZmZcIikpXG5cdFx0QHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCAgIChpZiBAb3B0aW9ucy5hdXRvQ29tcGxldGUgICBpcyB0cnVlIHRoZW4gXCJvblwiIGVsc2UgXCJvZmZcIikpXG5cdFx0QHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsICAgIChpZiBAb3B0aW9ucy5hdXRvQ29ycmVjdCAgICBpcyB0cnVlIHRoZW4gXCJvblwiIGVsc2UgXCJvZmZcIikpXG5cblx0XHRAX2VsZW1lbnQuYXBwZW5kQ2hpbGQgQHRleHRhcmVhXG5cblx0XHQjIFNldHVwIFZhbHVlc1xuXHRcdEBpc0VtcHR5ICAgICAgICAgICA9ICEoQG9wdGlvbnMudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0QG9yaWdpbmFsVGV4dENvbG9yID0gQG9wdGlvbnMuY29sb3JcblxuXHRcdCMgU2V0dXAgSW5wdXQgU3R5bGVcblxuXHRcdEBfdGV4dEFyZWFTdHlsZSA9XG5cdFx0XHRmb250U2l6ZTogXCIje0BvcHRpb25zLmZvbnRTaXplfXB4XCJcblx0XHRcdGxpbmVIZWlnaHQ6IFwiI3tAb3B0aW9ucy5saW5lSGVpZ2h0fXB4XCJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiI3tAb3B0aW9ucy5mb250V2VpZ2h0fVwiXG5cdFx0XHRmb250RmFtaWx5OiBcIiN7QG9wdGlvbnMuZm9udEZhbWlseX1cIlxuXHRcdFx0b3V0bGluZTogXCJub25lXCJcblx0XHRcdHRleHRJbmRlbnQ6IFwiI3tAb3B0aW9ucy5pbmRlbnR9cHhcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0XHRcdGhlaWdodDogXCIxMDAlXCJcblx0XHRcdHdpZHRoOiAgXCIxMDAlXCJcblx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRtYXJnaW46IFwiMFwiXG5cdFx0XHRvdmVyZmxvdzogXCJoaWRkZW5cIlxuXHRcdFx0cmVzaXplOiBcIm5vbmVcIlxuXHRcdFx0XCItd2Via2l0LWFwcGVhcmFuY2VcIjogXCJub25lXCJcblxuXHRcdEB0ZXh0YXJlYS5zdHlsZVtrZXldICA9IHZhbCBmb3Iga2V5LCB2YWwgb2YgQF90ZXh0QXJlYVN0eWxlXG5cdFx0QHRleHRhcmVhLnN0eWxlLmNvbG9yID0gQG9wdGlvbnMuY29sb3IgaWYgQG9wdGlvbnMuY29sb3I/XG5cblx0XHRAdGV4dGFyZWEub25mb2N1cyA9ID0+XG5cdFx0XHRkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcblx0XHRcdEBpbnB1dC5wbGFjZWhvbGRlciA9IEBvcHRpb25zLnBsYWNlSG9sZGVyRm9jdXMgaWYgQG9wdGlvbnMucGxhY2VIb2xkZXJGb2N1cz9cblx0XHRcdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuXHRcdFx0QGVtaXQoRXZlbnRzLkZvY3VzLCBAdGV4dGFyZWEudmFsdWUsIEApXG5cblx0XHRAdGV4dGFyZWEub25ibHVyICA9ID0+XG5cdFx0XHRkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcblx0XHRcdHVubGVzcyBAdGV4dGFyZWEucGxhY2Vob2xkZXIgaXMgQG9wdGlvbnMucGxhY2VIb2xkZXIgb3IgIUBvcHRpb25zLnBsYWNlSG9sZGVyP1xuXHRcdFx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZUhvbGRlclxuXHRcdFx0QGVtaXQoRXZlbnRzLkJsdXIsIEB0ZXh0YXJlYS52YWx1ZSwgQClcblxuXHRcdEBfdGV4dEFyZWFTdHlsZW9uYmx1ciAgPSA9PlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHR1bmxlc3MgQGlucHV0LnBsYWNlaG9sZGVyIGlzIEBvcHRpb25zLnBsYWNlSG9sZGVyIG9yICFAb3B0aW9ucy5wbGFjZUhvbGRlcj9cblx0XHRcdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXJcblx0XHRcdEBlbWl0KEV2ZW50cy5CbHVyLCBAaW5wdXQudmFsdWUsIEApXG5cblx0XHRAdGV4dGFyZWEub25pbnB1dCA9ID0+XG5cdFx0XHRAaXNFbXB0eSA9ICEoIEB0ZXh0YXJlYS52YWx1ZT8ubGVuZ3RoID4gMClcblx0XHRcdEBlbWl0KEV2ZW50cy5JbnB1dCwgQHRleHRhcmVhLnZhbHVlLCBAKVxuXHRcdFx0QGNoZWNrVmFsaWRpdHkoKVxuXG5cdFx0QG9uIEV2ZW50cy5Ub3VjaEVuZCwgLT4gQHRleHRhcmVhLmZvY3VzKClcblx0XHRAb24gXCJjaGFuZ2U6Y29sb3JcIiwgIC0+IEBjaGFuZ2VJbnB1dFRleHRDb2xvcigpXG5cblx0XHQjVXBkYXRlIHRoZSBoZWlnaHQgd2hlbmV2ZXIgYW55dGhpbmcgY2hhbmdlcy5cblx0XHRAdGV4dGFyZWEub25rZXlkb3duID0gPT4gQF91cGRhdGUoKVxuXHRcdEB0ZXh0YXJlYS5vbmtleXVwID0gPT4gQF91cGRhdGUoKVxuXHRcdEB0ZXh0YXJlYS5jaGFuZ2UgPSA9PiBAX3VwZGF0ZSgpXG5cdF9yZXNpemVQYXJlbnQgPSAobGF5ZXIsIHBhcmVudE1pbkhlaWdodCwgYm90dG9tUGFkZGluZykgLT5cblx0XHQjIFZhcmlhYmxlIGZvciBwYXJlbnRcblx0XHRsYXllclBhcmVudCA9IGxheWVyLnBhcmVudFxuXG5cdFx0IyBBcnJheSB0byBzdG9yZSBhbGwgY2hpbGRyZW4ncyBtYXhZc1xuXHRcdGFsbENoaWxkcmVuTWF4WXMgPSBbXVxuXG5cdFx0IyBQdXNoIGVhY2ggbWF4WSB0byBhbiBhcnJheVxuXHRcdGZvciBtYXggaW4gbGF5ZXJQYXJlbnQuY2hpbGRyZW5cblx0XHRcdGFsbENoaWxkcmVuTWF4WXMucHVzaChtYXgubWF4WSlcblxuXHRcdCMgRmluZCB0aGUgYm90dG9tLW1vc3QgbWF4WSB2YWx1ZVxuXHRcdHRhbGxlc3RDaGlsZE1heFkgPSBNYXRoLm1heC5hcHBseShudWxsLCBhbGxDaGlsZHJlbk1heFlzKVxuXG5cdFx0IyBTdG9yZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoYXQgYW5kIHRoZSBwYXJlbnQgbGF5ZXJcblx0XHRsYXllclBhcmVudC5oZWlnaHQgPSBNYXRoLm1heCh0YWxsZXN0Q2hpbGRNYXhZICsgYm90dG9tUGFkZGluZywgcGFyZW50TWluSGVpZ2h0KVxuXG5cdFx0IyBUT0RPIC0gTWFpbnRhaW4gdGhlIGJvdHRvbSBwYWRkaW5nIG9mIHRoZSBwYXJlbnQuXG5cblx0IyBSZWZsb3cgYWxsIHRoZSBzaWJsaW5ncyB1bmRlciB0aGUgdGV4dCBsYXllclxuXHRfcmVmbG93U2libGluZ3MgPSAobGF5ZXIsIGxheWVyTWF4WSkgLT5cblx0XHRsYXllckxpc3QgPSBsYXllci5wYXJlbnQuY2hpbGRyZW5cblx0XHRmb3IgYSBpbiBbbGF5ZXJMaXN0LmluZGV4T2YobGF5ZXIpKzEuLi5sYXllckxpc3QubGVuZ3RoXVxuXHRcdFx0eURpZmYgPSBsYXllckxpc3RbYV0ueSAtIGxheWVyTWF4WVxuXHRcdFx0bGF5ZXJMaXN0W2FdLnkgPSBsYXllci5tYXhZICsgeURpZmZcblx0XHQjIFRPRE8gLSByZWRvIHRoaXMgd2l0aG91dCB0aGUgYXNzdW1wdGlvbiB0aGF0IGFsbCBzaWJsaW5ncyBhZnRlciB0aGUgbGF5ZXIgYXJlIGJlbG93IGl0LlxuXG5cdCMgVXBkYXRlIGhlaWdodCBmdW5jdGlvblxuXHRfdXBkYXRlOiA9PlxuXHRcdHNldFRpbWVvdXQgPT5cblx0XHRcdGxheWVyTWF4WSA9IEAubWF4WVxuXHRcdFx0IyBBZGQgYmFjayBhbnkgbGluZSBicmVha3MgdGhhdCB0aGUgdmFsdWUgbWV0aG9kIGdldHMgcmlkZSBvZlxuXHRcdFx0X3RydWVWYWx1ZSA9IEB0ZXh0YXJlYS52YWx1ZS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKS5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvXFxuL2csIFwiPGJyLz4mbmJzcDtcIik7XG5cblx0XHRcdCMgSWYgaXQncyBlbXB0eSwgbWFrZSBzdXJlIHRoZXJlJ3MgYSBsZXR0ZXIgaW4gdGhlcmUgdG8gY2FsY3VsYXRlICpzb21ldGhpbmcqXG5cdFx0XHRpZiBfdHJ1ZVZhbHVlLnRyaW0oKSA9PSBcIlwiIHRoZW4gX3RydWVWYWx1ZSA9IFwiYVwiXG5cblx0XHRcdCMgQ2FsY3VsYXRlIHRoZSBoZWlnaHQhISFcblx0XHRcdGNhbGNIZWlnaHQgPSBVdGlscy5yb3VuZChVdGlscy50ZXh0U2l6ZShfdHJ1ZVZhbHVlLCBAX3RleHRBcmVhU3R5bGUsIHt3aWR0aDogQC53aWR0aH0pLmhlaWdodCwgMClcblxuXHRcdFx0IyBTZXQgdGhlIGhlaWdodCB0byBlaXRoZXIgdGhlIGNhbGN1bGF0ZWQgaGVpZ2h0LCBvciB0aGUgbWluSGVpZ2h0LCB3aGljaGV2ZXIgaXMgZ3JlYXRlci5cblx0XHRcdEAuaGVpZ2h0ID0gTWF0aC5tYXgoY2FsY0hlaWdodCwgQG9wdGlvbnMubWluSGVpZ2h0KVxuXHRcdFx0aWYgQG9wdGlvbnMucmVmbG93U2libGluZ3MgPT0gdHJ1ZSB0aGVuIF9yZWZsb3dTaWJsaW5ncyhALCBsYXllck1heFkpXG5cdFx0XHRpZiBAb3B0aW9ucy5yZXNpemVQYXJlbnQgPT0gdHJ1ZSB0aGVuIF9yZXNpemVQYXJlbnQoQCwgQHBhcmVudE9nSGVpZ2h0LCBAb3B0aW9ucy5wYXJlbnRCb3R0b21QYWRkaW5nKVxuXG4jLS0tLS0tLSBldmVudCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdGNoZWNrVmFsaWRpdHk6IC0+XG5cdFx0cmV0dXJuIHVubGVzcyBAc2hvdWxkQ2hlY2tWYWxpZGl0eVxuXG5cdGNsZWFyOiAtPlxuXHRcdEBpbnB1dC52YWx1ZSA9IFwiXCJcblx0XHRAaXNWYWxpZCA9IG51bGxcblx0XHRAaXNFbXB0eSA9IHRydWVcblxuXHRjaGFuZ2VJbnB1dFRleHRDb2xvcjogLT5cblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBAY29sb3IudG9IZXhTdHJpbmcoKVxuXG5cdGNoYW5nZUlucHV0VmFsdWU6ICh2KSAtPlxuXHRcdEBpbnB1dC52YWx1ZSA9IHZcblx0XHRAaW5wdXQub25pbnB1dCgpXG5cblx0Y2xpY2tlZDogLT5cblx0XHRAbGFiZWwuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0Zm9udFNpemU6IDEyXG5cdFx0XHRcdHk6IDhcblx0XHRcdFx0Y29sb3I6IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRcdFx0eDogMTZcblx0XHRcdHRpbWU6IDAuMlxuXHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QGJvcmRlci5ib3JkZXJXaWR0aCA9IDJcblxuXHRlcnJvcjogLT5cblx0XHRAYm9yZGVyQ29sb3IgPSBAcmVkXG5cblx0Zm9jdXM6IC0+XG5cdFx0QGxhYmVsLmZvbnRTaXplID0gMTJcblx0XHRAYm9yZGVyQ29sb3IgPSBAb3B0aW9ucy50aGVtZUNvbG9yXG5cdFx0QGJvcmRlci5ib3JkZXJXaWR0aCA9IDJcblx0XHRAbGFiZWwuY29sb3IgPSBAbGFiZWxDb2xvclxuXG5cdGhvdmVyT246IC0+XG5cdFx0QGJvcmRlci5ib3JkZXJXaWR0aCA9IDJcblx0XHRAb3B0aW9ucy5ib3JkZXJDb2xvciA9IEBsaW5lSG92ZXJDb2xvclxuXG5cdGhvdmVyT2ZmOiAtPlxuXHRcdEBib3JkZXIuYm9yZGVyV2lkdGggPSAxXG5cdFx0QGJvcmRlckNvbG9yID0gQGxpbmVDb2xvclxuXG5cdGJsdXJyZWQ6ICh2YWx1ZSwgbGF5ZXIpXHQtPlxuXHRcdEBsYWJlbC5jb2xvciA9IEBsYWJlbENvbG9yXG5cdFx0QGJvcmRlci5ib3JkZXJDb2xvciA9IEBsaW5lQ29sb3JcblxuXHRcdGlmIEAuaXNFbXB0eVxuXHRcdFx0QGxhYmVsLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRmb250U2l6ZTogMTZcblx0XHRcdFx0XHR5OiAyMFxuXHRcdFx0XHRcdHg6IDE2XG5cdFx0XHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRcdHRpbWU6IDAuMlxuXHRcdFx0QGJvcmRlci5ib3JkZXJDb2xvciA9IEBsYWJlbENvbG9yXG5cblx0XHRpZiBAdmFsdWUubGVuZ3RoID4gQG9wdGlvbnMuY2hhcmFjdGVyTGltaXRcblx0XHRcdEBlcnJvclRleHQudmlzaWJsZSA9IHRydWVcblx0XHRcdEBsaW1pdC5jb2xvciA9IEByZWRcblx0XHRcdEBib3JkZXIuYm9yZGVyQ29sb3IgPSBAcmVkXG5cdFx0XHRAbGFiZWwuY29sb3IgPSBAcmVkXG5cblx0XHRAYm9yZGVyLmJvcmRlcldpZHRoID0gMVxuXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAgMTEuIFRleHRGaWVsZF9Ecm9wZG93biAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNsYXNzIGV4cG9ydHMuVGV4dEZpZWxkX0Ryb3Bkb3duIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLSBkZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0aWYgQG9wdGlvbnMudGhlbWUgaXMgXCJkYXJrXCJcblx0XHRcdEBvcHRpb25zLnNjcmVlbkNvbG9yID89IFwiIzAwMFwiXG5cblx0XHRAb3B0aW9ucy5jaG9pY2VzID89IFtcImFwcGxlXCIsIFwiYmFuYW5hXCIsIFwiYmx1ZWJlcnJ5XCIsXCJjYW50YWxvdXBlXCIsIFwiY2hlcnJ5XCIsXCJjb2NvbnV0XCIsIFwiZmlnXCIsIFwiZ3JhcGVcIixcImdyYXBlZnJ1aXRcIixcImd1YXZhXCIsIFwia2l3aWZydWl0XCIsIFwibGVtb25cIixcImxpbWVcIiwgXCJseWNoZWVcIiwgXCJtYW5nb1wiLCBcIm1lbG9uXCIsIFwib3JhbmdlXCIsXCJwYXBheWFcIiwgXCJwYXNzaW9uZnJ1aXRcIiwgXCJwZWFjaFwiLCBcInBlYXJcIixcInBpbmVhcHBsZVwiLCBcInBsdW1cIixcInBvbWVncmFuYXRlXCIsIFwicmFzcGJlcnJ5XCIsIFwic3RyYXdiZXJyeVwiLCBcIndhdGVybWVsb25cIl1cblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJTZWxlY3QgYSBmcnVpdFwiXG5cdFx0QG9wdGlvbnMudGhlbWUgPz0gXCJsaWdodFwiXG5cdFx0QG9wdGlvbnMudmlzaWJsZUl0ZW1zID89IDRcblx0XHRAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb24gPz0gbnVsbFxuXG5cdFx0I2NvbG9yc1xuXHRcdEBvcHRpb25zLnRoZW1lQ29sb3IgPz0gXCIjMDA5Njg4XCJcblx0XHR0aGVtZUNvbG9yID0gQHRoZW1lQ29sb3JcblxuXHRcdGlmIEBvcHRpb25zLnRoZW1lIGlzIFwiZGFya1wiXG5cdFx0XHRAbGFiZWxDb2xvciA9IGxhYmVsX2Rhcmtcblx0XHRcdEBsaW5lQ29sb3IgPSBsaW5lX2Rhcmtcblx0XHRcdEBsaW5lSG92ZXJDb2xvciA9IGxpbmVfZGFya19ob3ZlclxuXHRcdFx0QGlucHV0Q29sb3IgPSBpbnB1dF9kYXJrXG5cdFx0ZWxzZVxuXHRcdFx0QGxhYmVsQ29sb3IgPSBsYWJlbF9saWdodFxuXHRcdFx0QGxpbmVDb2xvciA9IGxpbmVfbGlnaHRcblx0XHRcdEBsaW5lSG92ZXJDb2xvciA9IGxpbmVfbGlnaHRfaG92ZXJcblx0XHRcdEBpbnB1dENvbG9yID0gaW5wdXRfbGlnaHRcblxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHRoZWlnaHQ6IDUwXG5cdFx0XHRjb2xvcjogXCIjRTkxRTYzXCJcblx0XHRcdHdpZHRoIDogMTUwXG5cdFx0XHRuYW1lOiBcIkRyb3BEb3duXCJcblxuIy0tLS0tLSBsYWJlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAbGFiZWwgPSBuZXcgTGFiZWxcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Y29sb3I6IEBsYWJlbENvbG9yXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblx0XHRcdGZvbnRTaXplOiAxMlxuXHRcdFx0dmlzaWJsZTogZmFsc2VcblxuXHRcdEBwbGFjZUhvbGRlciA9IG5ldyBMYWJlbFxuXHRcdFx0dGV4dDogQG9wdGlvbnMubGFiZWxUZXh0XG5cdFx0XHRjb2xvcjogQGlucHV0Q29sb3Jcblx0XHRcdHk6IDIwXG5cdFx0XHRuYW1lOiBcImxhYmVsXCJcblxuIy0tLS0tLSBhcnJvdyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGFycm93ID0gbmV3IExheWVyXG5cdFx0XHRodG1sOiAnPHN2ZyB2ZXJzaW9uPVwiMS4xXCI+PGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwb2x5Z29uIGZpbGw9XCInICsgQGxpbmVDb2xvciArICdcIiBwb2ludHM9XCIwLjY2MDEzMzg3NyAwIDkuMTc0ODI3MDYgMCA0LjkxNzQ4MDQ3IDVcIj48L3BvbHlnb24+PC9nPjwvc3ZnPidcblx0XHRcdHNpemU6IDI0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcblx0XHRcdGNvbG9yOiBcIiM1NTVcIlxuXHRcdFx0d2lkdGg6MTBcblx0XHRcdGhlaWdodDogNVxuXHRcdFx0bmFtZTpcIkFycm93XCJcblxuIy0tLS0tLSBsaW5lIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGxpbmUgPSBuZXcgTGF5ZXJcblx0XHRcdGhlaWdodDogMVxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHR5OiA0OVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBAbGluZUNvbG9yXG5cdFx0XHRuYW1lOiBcImxpbmVcIlxuXG4jLS0tLS0tIGNvbnRhaW5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGNvbnRhaW5lciA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRib3JkZXJSYWRpdXM6IDJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCJcblx0XHRcdGhlaWdodDogQG9wdGlvbnMudmlzaWJsZUl0ZW1zICogNTAgKyAyMFxuXHRcdFx0Y2xpcDogdHJ1ZVxuXHRcdFx0bmFtZTogXCJjb250YWluZXJcIlxuXG4jLS0tLS0tIHN1cGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdEBjb250YWluZXIuc3RhdGVzID1cblx0XHRcdG9wZW46XG5cdFx0XHRcdGhlaWdodDogQG9wdGlvbnMudmlzaWJsZUl0ZW1zICogNTAgKyAyMFxuXHRcdFx0XHR5OiAwXG5cdFx0XHRjbG9zZWQ6XG5cdFx0XHRcdGhlaWdodDogMFxuXHRcdFx0XHR5OiA1MFxuXHRcdEBjb250YWluZXIuc3RhdGVzLnN3aXRjaEluc3RhbnQgXCJjbG9zZWRcIlxuXHRcdEBjb250YWluZXIuYW5pbWF0aW9uT3B0aW9ucyA9IHRpbWU6IDAuNVxuXG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblx0XHRAcGxhY2VIb2xkZXIucGFyZW50ID0gQFxuXHRcdEBjb250YWluZXIucGFyZW50ID0gQGFycm93LnBhcmVudCA9IEBsaW5lLnBhcmVudCA9ICBAXG5cblx0XHRAYXJyb3cueSA9IEFsaWduLmNlbnRlcigyKVxuXHRcdEBhcnJvdy54ID0gQG9wdGlvbnMud2lkdGggLSAyNFxuXHRcdEBjb250YWluZXIueSA9IDUwXG5cblx0XHRwbGFjZUhvbGRlciA9IEBwbGFjZUhvbGRlclxuXHRcdGxhYmVsID0gQGxhYmVsXG5cdFx0Y29udGFpbmVyID0gQGNvbnRhaW5lclxuXHRcdGFjdGl2ZVNlbGVjdGlvbiA9IEBhY3RpdmVTZWxlY3Rpb25cblx0XHRsYWJlbENvbG9yID0gQGxhYmVsQ29sb3JcblxuIy0tLS0tLSBzaGFkb3dzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHNoYWRvdyA9IG5ldyBTaGFkb3dcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy52aXNpYmxlSXRlbXMgKiA1MCArIDIwXG5cdFx0XHR3aWR0aDogQHdpZHRoXG5cdFx0XHRib3JkZXJSYWRpdXM6IEBjb250YWluZXIuYm9yZGVyUmFkaXVzXG5cdFx0XHR5OiAwXG5cdFx0XHRuYW1lOiBcInNoYWRvd3NcIlxuXG5cdFx0Zm9yIGl0ZW0gaW4gc2hhZG93LmFycmF5XG5cdFx0XHRpdGVtLnN0YXRlcy5vcGVuID1cblx0XHRcdFx0eTogMFxuXHRcdFx0XHRoZWlnaHQ6IEBvcHRpb25zLnZpc2libGVJdGVtcyAqIDUwICsgMjBcblx0XHRcdGl0ZW0uc3RhdGVzLmNsb3NlZCA9XG5cdFx0XHRcdGhlaWdodDogMFxuXHRcdFx0XHR5OiA1MFxuXG5cdFx0XHRpdGVtLmFuaW1hdGlvbk9wdGlvbnMgPSB0aW1lOiAwLjVcblxuXHRcdFx0aXRlbS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcIl8yZHBcIlxuXHRcdFx0aXRlbS5zdGF0ZXMuc3dpdGNoSW5zdGFudCBcImNsb3NlZFwiXG5cbiMtLS0tLS0gc2Nyb2xsIGFyZWEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRjb250YWluZXJfU2Nyb2xsQXJlYSA9IG5ldyBTY3JvbGxDb21wb25lbnRcblx0XHRcdHBhcmVudDogQGNvbnRhaW5lclxuXHRcdFx0d2lkdGg6IEBjb250YWluZXIud2lkdGhcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy52aXNpYmxlSXRlbXMgKiA1MCArIDIwXG5cdFx0XHRuYW1lOiBcInNjcm9sbEFyZWFcIlxuXHRcdGNvbnRhaW5lcl9TY3JvbGxBcmVhLmNvbnRlbnQuZHJhZ2dhYmxlLm92ZXJkcmFnID0gZmFsc2Vcblx0XHRjb250YWluZXJfU2Nyb2xsQXJlYS5jb250ZW50LmRyYWdnYWJsZS5ib3VuY2UgPSBmYWxzZVxuXHRcdGNvbnRhaW5lcl9TY3JvbGxBcmVhLm1vdXNlV2hlZWxFbmFibGVkID0gdHJ1ZVxuXG4jLS0tLS0tIHNsaWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHNsaWRlciA9IG5ldyBTbGlkZXJDb21wb25lbnRcblx0XHRcdHdpZHRoOiA1XG5cdFx0XHRoZWlnaHQ6IGNvbnRhaW5lcl9TY3JvbGxBcmVhLmhlaWdodCAtIDMwXG5cdFx0XHR5OiAxNVxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAwXG5cdFx0XHRwYXJlbnQ6IGNvbnRhaW5lcl9TY3JvbGxBcmVhXG5cdFx0XHR4OiBjb250YWluZXJfU2Nyb2xsQXJlYS53aWR0aCAtIDVcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0bWluOiAwXG5cdFx0XHRtYXg6IChAb3B0aW9ucy5jaG9pY2VzLmxlbmd0aCAqIDUwKSAtIDIwMFxuXHRcdFx0dmFsdWU6IC0xNVxuXHRcdFx0bmFtZTogc2xpZGVyXG5cdFx0c2xpZGVyLmZpbGwuYmFja2dyb3VuZENvbG9yID0gXCJcIlxuXG5cdFx0c2xpZGVyLmtub2IuYmFja2dyb3VuZENvbG9yID0gXCJCREJEQkRcIlxuXHRcdHNsaWRlci5rbm9iLnNoYWRvd1kgPSAwXG5cdFx0c2xpZGVyLmtub2Iuc2hhZG93U3ByZWFkID0gMFxuXHRcdHNsaWRlci5rbm9iLnNoYWRvd0JsdXIgPSAwXG5cdFx0c2xpZGVyLmtub2IuYm9yZGVyUmFkaXVzID0gMVxuXHRcdHNsaWRlci5rbm9iLndpZHRoID0gNVxuXHRcdHNsaWRlci5rbm9iLmhlaWdodCA9IDMwXG5cblx0XHRzbGlkZXIub24gXCJjaGFuZ2U6dmFsdWVcIiwgLT5cblx0XHRcdGNvbnRhaW5lcl9TY3JvbGxBcmVhLmNvbnRlbnQueSA9IC0gdGhpcy52YWx1ZVxuXG5cdFx0Y29udGFpbmVyX1Njcm9sbEFyZWEub25Nb3ZlIC0+XG5cdFx0XHRzbGlkZXIudmFsdWUgPSBjb250YWluZXJfU2Nyb2xsQXJlYS5zY3JvbGxZXG5cbiMtLS0tLS0gY2hvaWNlIGxvb3AgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRhcyA9IG51bGxcblxuXHRcdGZvciBpIGluIFswLi4uQG9wdGlvbnMuY2hvaWNlcy5sZW5ndGhdXG5cdFx0XHRjaG9pY2UgPSBuZXcgTGF5ZXJcblx0XHRcdFx0cGFyZW50OiBjb250YWluZXJfU2Nyb2xsQXJlYS5jb250ZW50XG5cdFx0XHRcdHdpZHRoOiBjb250YWluZXJfU2Nyb2xsQXJlYS53aWR0aFxuXHRcdFx0XHRoZWlnaHQ6IDUwXG5cdFx0XHRcdHk6IDUwICogaSArIDEwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0XHRuYW1lOiBcImNob2ljZVwiXG5cblx0XHRcdGNob2ljZV9sYWJlbCA9IG5ldyBMYWJlbFxuXHRcdFx0XHR0ZXh0OiBAb3B0aW9ucy5jaG9pY2VzW2ldXG5cdFx0XHRcdHBhcmVudDogY2hvaWNlXG5cdFx0XHRcdHg6IDIwXG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRuYW1lOiBAb3B0aW9ucy5jaG9pY2VzW2ldICsgXCJsYWJlbFwiXG5cdFx0XHRcdGNvbG9yOiBsYWJlbF9saWdodFxuXG5cdFx0XHRjaG9pY2Uub25Nb3VzZU92ZXIgLT5cblx0XHRcdFx0dGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlZWVcIlxuXG5cdFx0XHRjaG9pY2Uub25Nb3VzZU91dCAtPlxuXHRcdFx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZlwiXG5cblx0XHRcdGNob2ljZS5vbkNsaWNrIC0+XG5cdFx0XHRcdGFzID0gdGhpcy5jaGlsZHJlblswXS50ZXh0XG5cdFx0XHRcdHBsYWNlSG9sZGVyLnRleHQgPSB0aGlzLmNoaWxkcmVuWzBdLnRleHRcblx0XHRcdFx0cGxhY2VIb2xkZXIuY29sb3IgPSBsYWJlbENvbG9yXG5cdFx0XHRcdGNvbnRhaW5lci5zdGF0ZXMuc3dpdGNoIFwiY2xvc2VkXCJcblx0XHRcdFx0bGFiZWwudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0Zm9yIGl0ZW0gaW4gc2hhZG93LmFycmF5XG5cdFx0XHRcdFx0aXRlbS5zdGF0ZXMuc3dpdGNoIFwiY2xvc2VkXCJcblxuXHRcdGNvbnRhaW5lciA9IEBjb250YWluZXJcblxuIy0tLS0tLSBldmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb25DbGljayAtPlxuXHRcdFx0Zm9yIGl0ZW0gaW4gc2hhZG93LmFycmF5XG5cdFx0XHRcdGl0ZW0uc3RhdGVzLnN3aXRjaCBcIm9wZW5cIlxuXHRcdFx0Y29udGFpbmVyLnN0YXRlcy5zd2l0Y2ggXCJvcGVuXCJcblx0XHRcdEBhY3RpdmVTZWxlY3Rpb24gPSBhc1xuXG5cdFx0aWYgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdEBvbk1vdXNlT3ZlciBAaG92ZXJPblxuXHRcdFx0QG9uTW91c2VPdXQgQGhvdmVyT2ZmXG5cbiMtLS0tLS1ldmVudCBmdW5jdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRob3Zlck9uOiAtPlxuXHRcdEBsaW5lLmhlaWdodCA9IDJcblx0XHRAbGluZS5iYWNrZ3JvdW5kQ29sb3IgPSBAbGluZUhvdmVyQ29sb3JcblxuXHRob3Zlck9mZjogLT5cblx0XHRAbGluZS5oZWlnaHQgPSAxXG5cdFx0QGxpbmUuYmFja2dyb3VuZENvbG9yID0gQGxpbmVDb2xvclxuXG4jLS0tLS0tIGdldHRlcnMgYW5kIHNldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRAZGVmaW5lICdjb2xvcicsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QG9wdGlvbnMuY29sb3Jcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmNvbG9yID0gdmFsdWVcblxuXHRAZGVmaW5lICdjaG9pY2VzJyxcblx0XHRnZXQ6IC0+XG5cdFx0XHRAb3B0aW9ucy5jaG9pY2VzXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRcdEBvcHRpb25zLmNob2ljZXMgPSB2YWx1ZVxuXG5cdEBkZWZpbmUgJ2FjdGl2ZVNlbGVjdGlvbicsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QG9wdGlvbnMuYWN0aXZlU2VsZWN0aW9uXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAb3B0aW9ucy5hY3RpdmVTZWxlY3Rpb24gPSB2YWx1ZVxuXG5cblxuXG5cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgIDEyLiBBcHBCYXIgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jbGFzcyBleHBvcnRzLkFwcEJhciBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuIy0tLS0tLSBkZWZhdWx0IHByb3BlcnRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRAb3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRAb3B0aW9ucy5sYWJlbFRleHQgPz0gXCJGb3JtXCJcblx0XHRAb3B0aW9ucy5mb250U2l6ZSA/PSAyMlxuXHRcdEBvcHRpb25zLmZvbnRXZWlnaHQgPz0gNTAwXG5cdFx0QG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIidSb2JvdG8nLCBzYW5zIHNlcmlmXCJcblx0XHRAb3B0aW9ucy5sYWJlbENvbG9yID0gXCIjZmZmXCJcblx0XHRAb3B0aW9ucy50aGVtZUNvbG9yID89IFwiIzAwOTY4OFwiXG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IEBvcHRpb25zLnRoZW1lQ29sb3Jcblx0XHRAb3B0aW9ucy5tb2JpbGUgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy5tZW51SWNvblZpc2JsZSA/PSB0cnVlXG5cdFx0QG9wdGlvbnMubmFtZSA/PSBcImFwcCBiYXJcIlxuXHRcdEBvcHRpb25zLnN0YXR1c0ljb25zWSA/PSBBbGlnbi5jZW50ZXIoLTgpXG5cdFx0QG9wdGlvbnMubWVudUljb25ZID89IEFsaWduLmNlbnRlcigpXG5cbiMtLS0tLS0gZWxlbWVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0QGFwcENvbnQgPSBuZXcgTGF5ZXJcblx0XHRcdGhlaWdodDogNTZcblx0XHRcdHdpZHRoOiBAb3B0aW9ucy53aWR0aFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRuYW1lOiBcImFwcCBiYXIgY29udGlhbmVyXCJcblxuXHRcdGlmIFV0aWxzLmlzTW9iaWxlKCkgb3IgQG9wdGlvbnMubW9iaWxlIGlzIHRydWVcblx0XHRcdEBzdGF0dXNCYXIgPSBuZXcgTGF5ZXJcblx0XHRcdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0XHRcdGhlaWdodDogMjRcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC4zMClcIlxuXHRcdFx0XHRuYW1lOiBcInN0YXR1cyBiYXJcIlxuXHRcdFx0QG9wdGlvbnMuaGVpZ2h0ID89IDgwXG5cdFx0XHRAYXBwQ29udC55ID0gMjRcblx0XHRlbHNlXG5cdFx0XHRAb3B0aW9ucy5oZWlnaHQgPz0gNTZcblxuXHRcdEBtZW51SWNvbiA9IG5ldyBMYXllclxuXHRcdFx0c2l6ZTogNDhcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuXHRcdFx0dmlzaWJsZTogQG9wdGlvbnMubWVudUljb25WaXNibGVcblx0XHRcdG5hbWU6IFwibWVudSBpY29uXCJcblxuXHRcdEB0aXRsZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHRleHQ6IEBvcHRpb25zLmxhYmVsVGV4dFxuXHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLmZvbnRTaXplXG5cdFx0XHRmb250RmFtaWx5OiBAb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0XHRjb2xvcjogQG9wdGlvbnMubGFiZWxDb2xvclxuXHRcdFx0Zm9udFdlaWdodDogQG9wdGlvbnMuZm9udFdlaWdodFxuXHRcdFx0bmFtZTogXCJ0aXRsZVwiXG5cbiMtLS0tLS0gc3VwZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdHNoYWRvdyA9IG5ldyBTaGFkb3dcblx0XHRcdHdpZHRoOiBAd2lkdGhcblx0XHRcdGhlaWdodDogQGhlaWdodFxuXHRcdFx0bmFtZTogXCJzaGFkb3dzXCJcblxuXHRcdHNoYWRvdy5wYXJlbnQgID0gQFxuXHRcdEB0aXRsZS5wYXJlbnQgPSBAXG5cdFx0QHRpdGxlLnkgPSBBbGlnbi5jZW50ZXIoKVxuXHRcdEB0aXRsZS54ID0gMTZcblx0XHRAYXBwQ29udC5wYXJlbnQgPSBAXG5cdFx0QG1lbnVJY29uLnBhcmVudCA9IEB0aXRsZS5wYXJlbnQgPSBAYXBwQ29udFxuXHRcdEBtZW51SWNvbi54ID0gMTZcblx0XHRAbWVudUljb24ueSA9IEBvcHRpb25zLm1lbnVJY29uWVxuXG5cdFx0aWYgIEBtZW51SWNvbi52aXNpYmxlIGlzIHRydWVcblx0XHRcdEB0aXRsZS54ID0gNDggKyAxNiArIDE2XG5cbiMtLS0tLS0gbWVudSBpY29uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cdFx0bWVudUljb24gPSBuZXcgTGF5ZXJcblx0XHRcdGh0bWw6ICc8c3ZnIHdpZHRoPVwiMThweFwiIGhlaWdodD1cIjEycHhcIiB2aWV3Qm94PVwiMCAwIDE4IDEyXCI+PGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNMCwyIEwxOCwyIEwxOCwwIEwwLDAgTDAsMiBaIE0wLDYuOTcgTDE4LDYuOTcgTDE4LDUgTDAsNSBMMCw2Ljk3IFogTTAsMTIgTDE4LDEyIEwxOCwxMCBMMCwxMCBMMCwxMiBaXCIgZmlsbD1cIiNmZmZcIj48L3BhdGg+PC9nPjwvc3ZnPidcblx0XHRcdHdpZHRoOiAxOFxuXHRcdFx0aGVpZ2h0OiAxMlxuXHRcdFx0cGFyZW50OiBAbWVudUljb25cblx0XHRcdHg6IEFsaWduLmNlbnRlcigpXG5cdFx0XHR5OiBBbGlnbi5jZW50ZXIoKVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRuYW1lOiBcImljb25cIlxuXG4jLS0tLS0tIHN0YXR1cyBiYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0aWYgVXRpbHMuaXNNb2JpbGUoKSBvciBAb3B0aW9ucy5tb2JpbGUgaXMgdHJ1ZVxuXHRcdFx0QHN0YXR1c0Jhci5wYXJlbnQgPSBAXG5cdFx0XHRAdGl0bGUueSA9ICBBbGlnbi5jZW50ZXIoMTApXG5cblx0XHRcdHN0YXR1c0JhclRpbWUgPSBuZXcgVGV4dExheWVyXG5cdFx0XHRcdGZvbnRTaXplOiAxM1xuXHRcdFx0XHRwYXJlbnQ6IEBzdGF0dXNCYXJcblx0XHRcdFx0eTogQWxpZ24uY2VudGVyXG5cdFx0XHRcdHg6IEB3aWR0aCAtIDU1XG5cdFx0XHRcdGNvbG9yIDogXCIjZmZmXCJcblx0XHRcdFx0Zm9udEZhbWlseTogXCInUm9ib3RvJywgc2FucyBzZXJpZlwiXG5cdFx0XHRcdHRleHRBbGlnbjogXCJyaWdodFwiXG5cdFx0XHRcdG5hbWU6IFwic3RhdHVzIGJhciB0aW1lXCJcblxuXHRcdFx0c2V0VGltZSA9ICgpIC0+XG5cdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZVxuXHRcdFx0XHRtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKVxuXHRcdFx0XHRob3VyID0gZGF0ZS5nZXRIb3VycygpXG5cblx0XHRcdFx0em9uZSA9IFwiQU1cIlxuXG5cdFx0XHRcdGlmIGhvdXIgPCAxMFxuXHRcdFx0XHRcdGhvdXIgPSAnMCcgKyBob3VyXG5cblx0XHRcdFx0aWYgaG91ciA+IDEyXG5cdFx0XHRcdFx0aG91ciA9IGhvdXIgLSAxMlxuXHRcdFx0XHRcdHpvbmUgPSBcIlBNXCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHpvbmUgPSBcIkFNXCJcblxuXHRcdFx0XHRpZiBtaW51dGUgPCAxMFxuXHRcdFx0XHRcdG1pbnV0ZSA9ICcwJyArIG1pbnV0ZVxuXG5cdFx0XHRcdHN0YXR1c0JhclRpbWUudGV4dCA9IFwiI3tob3VyfToje21pbnV0ZX0gI3t6b25lfVwiXG5cblx0XHRcdFx0VXRpbHMuZGVsYXkgMzAsIC0+XG5cdFx0XHRcdFx0c2V0VGltZSgpXG5cblx0XHRcdHNldFRpbWUoKVxuXG5cdFx0XHRzdGF0dXNJY29ucyA9IG5ldyBMYXllclxuXHRcdFx0XHRuYW1lOiBcInN0YXR1cyBpY29uc1wiXG5cdFx0XHRcdHBhcmVudDogQHN0YXR1c0JhclxuXHRcdFx0XHRodG1sOiAnPHN2ZyB3aWR0aD1cIjUzcHhcIiBoZWlnaHQ9XCIxNnB4XCI+PGc+PHBhdGggZD1cIk0zNC42MDkzMjE2LDAuNjA5MDM3NDkgTDM0LjYwOTMyMTYsMTUuMTA3NDU5MiBMMjAuMTEwODk5OSwxNS4xMDc0NTkyIEwzNC42MDkzMjE2LDAuNjA5MDM3NDkgWiBNMTUuMjk0NjE0LDcuMDQ3NDc0NzUgTDE1LjMyODAxMDUsNy4wODA4NzEyMSBMOS4xNjg1NDA3NiwxNC43MDM5NzczIEwzLjAwOTA3MTA2LDcuMDgwODcxMjEgTDMuMDQyNDY3NTIsNy4wNDc0NzQ3NSBMMC43MjkzOTkzNDIsNC4xODg0NDY5NyBDMy40NzM3MTc1MiwyLjI2MDE2NDE0IDYuMjg3NzMyNjgsMS4yOTYwMjI3MyA5LjE2ODU0MDc2LDEuMjk2MDIyNzMgQzEyLjA1MDgwMDksMS4yOTYwMjI3MyAxNC44NjMzNjQsMi4yNjAxNjQxNCAxNy42MDkxMzQyLDQuMTg4NDQ2OTcgTDE1LjI5NDYxNCw3LjA0NzQ3NDc1IFogTTUxLjIyMjk0MjEsMi4xNDQwMDA2OSBDNTEuNTc0MTMzLDIuMTQ0MDAwNjkgNTEuODc2NDk1MiwyLjI2Nzk1MDQzIDUyLjEyNDM5NDcsMi41MTc3Mjc5NCBDNTIuMzc0MTcyMiwyLjc2NzUwNTQ1IDUyLjUsMy4wNjc5ODk2NyA1Mi41LDMuNDIxMDU4NjMgTDUyLjUsMTMuODE0MjUyOSBDNTIuNSwxNC4xNjU0NDM4IDUyLjM3NDE3MjIsMTQuNDYwMjkzOSA1Mi4xMjQzOTQ3LDE0LjY5NTA0NzIgQzUxLjg3NjQ5NTIsMTQuOTI5ODAwNSA1MS41NzQxMzMsMTUuMDQ2MjM4MiA1MS4yMjI5NDIxLDE1LjA0NjIzODIgTDQ0LjM1Njg3NzYsMTUuMDQ2MjM4MiBDNDQuMDAzODA4NiwxNS4wNDYyMzgyIDQzLjcwMzMyNDQsMTQuOTI5ODAwNSA0My40NTM1NDY5LDE0LjY5NTA0NzIgQzQzLjIwMzc2OTQsMTQuNDYwMjkzOSA0My4wNzk4MTk2LDE0LjE2NTQ0MzggNDMuMDc5ODE5NiwxMy44MTQyNTI5IEw0My4wNzk4MTk2LDMuNDIxMDU4NjMgQzQzLjA3OTgxOTYsMy4wNjc5ODk2NyA0My4yMDM3Njk0LDIuNzY3NTA1NDUgNDMuNDUzNTQ2OSwyLjUxNzcyNzk0IEM0My43MDMzMjQ0LDIuMjY3OTUwNDMgNDQuMDAzODA4NiwyLjE0NDAwMDY5IDQ0LjM1Njg3NzYsMi4xNDQwMDA2OSBMNDUuODk2ODU5MiwyLjE0NDAwMDY5IEw0NS44OTY4NTkyLDAuMjk2MDIyNzI3IEw0OS42ODI5NjA0LDAuMjk2MDIyNzI3IEw0OS42ODI5NjA0LDIuMTQ0MDAwNjkgTDUxLjIyMjk0MjEsMi4xNDQwMDA2OSBaXCIgZmlsbD1cIiNmZmZcIj48L3BhdGg+PC9nPjwvc3ZnPidcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG5cdFx0XHRcdHdpZHRoOiA1M1xuXHRcdFx0XHRoZWlnaHQ6IDE2XG5cdFx0XHRcdHk6IEBvcHRpb25zLnN0YXR1c0ljb25zWVxuXHRcdFx0XHR4OiBAd2lkdGggLSBzdGF0dXNCYXJUaW1lLndpZHRoIC0gNzBcblxuXHRcdFx0QHRpdGxlLnkgPSBBbGlnbi5jZW50ZXJcblxuIy0tLS0tLSBvbiByZXNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0YXQgPSBAXG5cdFx0c3RhdHVzQmFyID0gQHN0YXR1c0JhclxuXHRcdGlzTW9iID0gQG9wdGlvbnMubW9iaWxlXG5cblx0XHR3aW5kb3cub25yZXNpemUgPSAtPlxuXHRcdFx0YXQud2lkdGggPSBTY3JlZW4ud2lkdGhcblx0XHRcdHNoYWRvdy51bWJyYS53aWR0aCA9IFNjcmVlbi53aWR0aFxuXHRcdFx0c2hhZG93LmFtYmllbnQud2lkdGggPSBTY3JlZW4ud2lkdGhcblx0XHRcdHNoYWRvdy5wZW51bWJyYS53aWR0aCA9IFNjcmVlbi53aWR0aFxuXHRcdFx0aWYgVXRpbHMuaXNNb2JpbGUoKSBvciBpc01vYiBpcyB0cnVlXG5cdFx0XHRcdHN0YXR1c0Jhci53aWR0aCA9IFNjcmVlbi53aWR0aFxuXHRcdFx0XHRzdGF0dXNCYXJUaW1lLnggPSBTY3JlZW4ud2lkdGggLSA1NVxuXHRcdFx0XHRzdGF0dXNJY29ucy54ID0gU2NyZWVuLndpZHRoIC0gc3RhdHVzQmFyVGltZS53aWR0aCAtIDY4XG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUNBQTtBRDBCQSxJQUFBLHdNQUFBO0VBQUE7Ozs7QUFBQSxXQUFBLEdBQWM7O0FBQ2QsVUFBQSxHQUFhOztBQUNiLFVBQUEsR0FBYTs7QUFDYixTQUFBLEdBQVk7O0FBQ1osV0FBQSxHQUFjOztBQUNkLFVBQUEsR0FBYTs7QUFDYixnQkFBQSxHQUFtQixTQUFBLEdBQVk7O0FBQy9CLGVBQUEsR0FBa0IsUUFBQSxHQUFXOztBQUM3QixnQkFBQSxHQUFtQjs7QUFDbkIsZUFBQSxHQUFrQjs7QUFJWjs7O0VBQ1EsZUFBQyxPQUFEO0FBRVosUUFBQTtJQUZhLElBQUMsQ0FBQSw0QkFBRCxVQUFTO0lBRXRCLEtBQUssQ0FBQyxTQUFOLENBQWdCLDhEQUFoQjs7VUFFUSxDQUFDLGFBQWM7OztXQUNmLENBQUMsV0FBWTs7O1dBQ2IsQ0FBQyxPQUFROzs7V0FDVCxDQUFDLFFBQVM7OztXQUNWLENBQUMsYUFBYzs7O1dBQ2YsQ0FBQyxnQkFBaUI7OztXQUNs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
