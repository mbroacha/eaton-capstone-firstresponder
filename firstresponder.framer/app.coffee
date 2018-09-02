MaterialComponents = require 'MaterialComponents'

/// Login Page ///

username = new MaterialComponents.TextField_Basic
	x: 1019
	y: 309
	width: 370
	height: 76
	themeColor: MaterialComponents.universal
	labelText: "Username"
username.parent = Login_Screen
	
password = new MaterialComponents.TextField_Validation
	x: 1019
	y: 417
	width: 370
	height: 76
	themeColor: MaterialComponents.universal
	labelText: "Password"
	match: ["guest1234"]
password.parent = Login_Screen
	
logindis = new MaterialComponents.RaisedButton
	disabled: true
	labelText: "Login"
	x: 1160
	y: 544
logindis.parent = Login_Screen
	
loginen = new MaterialComponents.RaisedButton
	labelText: "Login"
	themeColor: MaterialComponents.universal
	x: 1160
	y: 544
	opacity: 0.00
loginen.parent = Login_Screen

password.onClick (event, layer) ->
	logindis.opacity = 0.00
	loginen.opacity = 1.00
	
		
/// Upload Data Page ///

skip = new MaterialComponents.FlatButton
	labelText: "skip"
	themeColor: MaterialComponents.universal
	x: 1210
	y: 544
skip.parent = Upload_Data

view = new MaterialComponents.RaisedButton
	labelText: "view data"
	themeColor: MaterialComponents.universal
	x: 1145
	y: 544
	opacity: 0.00
view.parent = Upload_Data

upload = new MaterialComponents.RaisedButton
	labelText: "Upload"
	themeColor: MaterialComponents.universal
	x: 1110
	y: 544
upload.parent = Upload_Data

upload.onClick (event, layer) ->
	new_data.opacity = 0.00
	Polygon.opacity = 0.00
	load.opacity = 1.00

	load.animate
		options:
			time: 1
			curve: Bezier.linear
		rotation: 360

	load.onAnimationEnd ->
		load.opacity = 0.00
		cloud.opacity = 0.00
		donecloud.animate
			options:
				time: 0.2
				curve: Bezier.ease
			opacity: 1.00
		upload.opacity = 0.00
		skip.opacity = 0.00
		view.animate
			options:
				time: 0.2
				curve: Bezier.ease
			opacity: 1.00
			
			
/// Dashboard ///

message = new MaterialComponents.RaisedButton
	labelText: "send message"
	themeColor: MaterialComponents.universal
	x: 1268
	y: 68
message.parent = Dashboard_Overview

message.onClick (event, layer) ->
	FlowComp.showOverlayCenter(message_popup)

#tabs
filter.onMouseOver (event, layer) ->
	filteroverlay.animate
		options:
			time: 0.2
			curve: Bezier.linear
		opacity: 1.00

filter.onMouseOut (event, layer) ->
	filteroverlay.animate
		options:
			time: 0.2
			curve: Bezier.linear
		opacity: 0.00

filtericon.states =
	deselected:
		backgroundColor: "rgba(146,158,170,1)"
	selected:
		backgroundColor: "rgba(51,103,205,1)"
		
filtericon.states.switchInstant "deselected"
filtericon.states.animationOptions = 
	time: 0.1
	
side_sheet.states =
	inactive:
		x: 33
	active:
		x: 354

side_sheet.states.switchInstant "inactive"
side_sheet.states.animationOptions = 
	time: 0.4
	curve: Bezier.ease

filter.onClick (event, layer) ->
	filtericon.stateCycle "selected", "deselected"
	side_sheet.stateCycle "active", "inactive"

update = new MaterialComponents.FlatButton
	labelText: "update data"
	themeColor: MaterialComponents.universal
	x: 1268
	y: 830
update.parent = Dashboard_Overview
	
	
listtab.onClick (event, layer) ->
	selector.animate
		x: 280
		options:
			time: 0.2
			curve: Bezier.easeIn
			
	responses.opacity = 1.00
	listtabselected.opacity = 1.00
	maptabselected.opacity = 0.00
	maptab.opacity = 1.00
	
listtab.onMouseOver ->
	listoverlay.animate
		options:
			time: 0.2
			curve: Bezier.linear
		opacity: 1.00	
		
listtab.onMouseOut ->
	listoverlay.animate
		options:
			time: 0.2
			curve: Bezier.linear
		opacity: 0.00
		
maptabselected.onClick (event, layer) ->
	selector.animate
		x: 92
		options:
			time: 0.2
			curve: Bezier.easeIn
			
	responses.opacity = 0.00
	maptab.opacity = 0.00
	maptabselected.opacity = 1.00
	listtabselected.opacity = 0.00

maptabselected.onMouseOver ->
	mapoverlay.animate
		options:
			time: 0.2
			curve: Bezier.linear
		opacity: 1.00
		
	mapoverlay_1.animate
		options:
			time: 0.2
			curve: Bezier.linear
		opacity: 1.00
		
maptabselected.onMouseOut ->
	mapoverlay.animate
		options:
			time: 0.2
			curve: Bezier.linear
		opacity: 0.00
		
	mapoverlay_1.animate
		options:
			time: 0.2
			curve: Bezier.linear
		opacity: 0.00
		

///Legend///

arrows.onMouseOver (event, layer) ->
	arrows.animate
		shadowY: 8
		shadowSpread: 1
		shadowBlur: 10
		options:
			time: 0.2
			curve: Bezier.ease
			
arrows.onMouseOut (event, layer) ->
	arrows.animate
		shadowY: 1
		shadowBlur: 3
		options:
			time: 0.2
			curve: Bezier.ease
			
arrows.states =
	expand:
		shadowY: 1
		shadowBlur: 3
	reduce:
		shadowY: 0
		shadowBlur: 0
		
arrows.states.switchInstant "expand"
			
arrow_1.states =
	expand:
		rotationZ: 0
	reduce:
		rotationZ: 180
		
arrow_2.states =
	expand:
		rotationZ: 0
	reduce:
		rotationZ: 180
		
arrow_1.states.switchInstant "expand"
arrow_1.states.animationOptions =
	time: 0.1
	
arrow_2.states.switchInstant "expand"
arrow_2.states.animationOptions =
	time: 0.1
			
legend.states =
	invisible:
		y: 869
	visible:
		y: 825
		
small_legend.states =
	invisible:
		y: 869
	visible:
		y:825
		
legend.states.switchInstant "invisible"
legend.states.animationOptions = 
	time: 0.2
	
small_legend.states.switchInstant "invisible"
small_legend.states.animationOptions = 
	time: 0.2
	
arrows.onClick ->
	arrow_1.stateCycle "reduce", "expand"
	arrow_2.stateCycle "reduce", "expand"
	legend.stateCycle "visible", "invisible"
	small_legend.stateCycle "visible", "invisible"
	arrows.stateCycle "reduce", "expand"
	


///Filter Tab///

#regions
northwest.states =
	visible:
		opacity: 1
	invisible: 
		opacity: 0
		
northwest.states.switchInstant "visible"
northwest.states.animationOptions = 
	time: 0.1
		
sanjuan.states =
	visible:
		opacity: 1
	invisible: 
		opacity: 0
		
sanjuan.states.switchInstant "visible"
sanjuan.states.animationOptions = 
	time: 0.1
	
cayey.states =
	visible:
		opacity: 1
	invisible: 
		opacity: 0
		
cayey.states.switchInstant "visible"
cayey.states.animationOptions = 
	time: 0.1
	
utuado.states =
	visible:
		opacity: 1
	invisible: 
		opacity: 0
		
utuado.states.switchInstant "visible"
utuado.states.animationOptions = 
	time: 0.1
	
guayama.states =
	visible:
		opacity: 1
	invisible: 
		opacity: 0
		
guayama.states.switchInstant "visible"
guayama.states.animationOptions = 
	time: 0.1

#region checkboxes
tick.states = 
	active:
		opacity: 1
		scale: 1
	inactive:
		opacity: 0
		scale: 0.25

tick.states.switchInstant "active"
tick.states.animationOptions = 
	time: 0.1
	
tick_1.states = 
	active:
		opacity: 1
		scale: 1
	inactive:
		opacity: 0
		scale: 0.25

tick_1.states.switchInstant "active"
tick_1.states.animationOptions = 
	time: 0.1
	
tick_2.states = 
	active:
		opacity: 1
		scale: 1
	inactive:
		opacity: 0
		scale: 0.25

tick_2.states.switchInstant "active"
tick_2.states.animationOptions = 
	time: 0.1
	
tick_3.states = 
	active:
		opacity: 1
		scale: 1
	inactive:
		opacity: 0
		scale: 0.25

tick_3.states.switchInstant "active"
tick_3.states.animationOptions = 
	time: 0.1
	
tick_4.states = 
	active:
		opacity: 1
		scale: 1
	inactive:
		opacity: 0
		scale: 0.25

tick_4.states.switchInstant "active"
tick_4.states.animationOptions = 
	time: 0.1

Northwest.onClick ->
	tick_4.stateCycle "inactive", "active"
	northwest.stateCycle "invisible", "visible"
	
Utuado.onClick ->
	tick_3.stateCycle "inactive", "active"
	utuado.stateCycle "invisible", "visible"
	
Guayama.onClick ->
	tick_2.stateCycle "inactive", "active"
	guayama.stateCycle "invisible", "visible"
	
Cayey.onClick ->
	tick.stateCycle "inactive", "active"
	cayey.stateCycle "invisible", "visible"
	
SanJuan.onClick ->
	tick_1.stateCycle "inactive", "active"
	sanjuan.stateCycle "invisible", "visible"
	
///Map///

sanjuanarea.onMouseOver ->
	sanjuan1_1.backgroundColor = "rgba(208, 2, 27, 0.8)"
	hover_1.opacity = 1
	
sanjuanarea.onMouseOut ->
	sanjuan1_1.backgroundColor = "rgba(208, 2, 27, 0.6)"
	hover_1.opacity = 0
	
sanjuanarea.onClick ->
	Med_map.animate
		opacity: 0
	Big_map.animate
		scale: 5.00
		opacity: 0
		options:
			time: 1
			curve: Bezier.ease
	sanjuan.animate
		opacity: 0
	cayey.animate
		opacity: 0
	guayama.animate
		opacity: 0
	utuado.animate
		opacity: 0
	northwest.animate
		opacity: 0
	Small_map.animate
		opacity: 1
		scale: 1
		options: 
			time: 0.7
			
	hover.animate
		opacity: 0
			
	overview2.animate
		opacity: 1
		options:
			time: 0.5
			
	legend.opacity = 0
	small_legend.opacity = 1
	
	Small_map.onAnimationEnd ->
		pins.animate
			y: 56
			opacity: 1.00
			options:
				time: 0.3
				curve: Bezier.easeIn


innersanjuan.onMouseOver ->
	sanjuan1.backgroundColor = "rgba(207, 2, 26, 0.8)"
	hover.opacity = 1
	
innersanjuan.onMouseOut ->
	sanjuan1.backgroundColor = "rgba(208, 2, 27, 0.6)"
	hover.opacity = 0
	
innersanjuan.onClick ->
	Med_map.animate
		scale: 5.00
		opacity: 0
		options:
			time: 1
			curve: Bezier.ease
	
	innersanjuan.animate
		opacity: 0		
	sanjuan1.animate
		opacity: 0
	sanjuan2.animate
		opacity: 0
	sanjuan3.animate
		opacity: 0
	sanjuan4.animate
		opacity: 0
	Small_map.animate
		opacity: 1
		scale: 1
		options:
			time: 0.5
			
	hover.animate
		opacity: 0
			
	overview2.animate
		opacity: 1
		options:
			time: 0.5
			
	legend.opacity = 0
	small_legend.opacity = 1
	
	Small_map.onAnimationEnd ->
		pins.animate
			y: 56
			opacity: 1.00
			options:
				time: 0.3
				curve: Bezier.easeIn
			

#zoom

zoom_in.onClick ->
	Big_map.animate
		scale: 5.00
		opacity: 0
		options:
			time: 1
			curve: Bezier.ease
	sanjuan.animate
		opacity: 0
	cayey.animate
		opacity: 0
	guayama.animate
		opacity: 0
	utuado.animate
		opacity: 0
	northwest.animate
		opacity: 0
	Med_map.animate
		opacity: 1
		scale: 1
		options: 
			time: 0.7
			
	Med_map.onAnimationEnd ->
		innersanjuan.animate
			opacity: 1
			options:
				time: 0.1
		sanjuan1.animate
			opacity: 1
			options:
				time: 0.1
		sanjuan2.animate
			opacity: 1
			options:
				time: 0.1
		sanjuan3.animate
			opacity: 1
			options:
				time: 0.1
		sanjuan4.animate
			opacity: 1
			options:
				time: 0.1

zoom_out.onClick ->
	Med_map.animate
		scale: 0.20
		opacity: 0
		options:
			time: 1
			curve: Bezier.ease
			
	Small_map.animate
		scale: 0.20
		opacity: 0
		options:
			time: 1
			curve: Bezier.ease
			
	overview2.animate
		opacity: 0
		
	innersanjuan.animate
		opacity: 0
		options:
			time: 0.1
			
	sanjuan1.animate
		opacity: 0
		options:
			time: 0.1
	
	sanjuan2.animate
		opacity: 0
			
	sanjuan3.animate
		opacity: 0
			
	sanjuan4.animate
		opacity: 0
			
	hover.animate
		opacity: 0	
	
	Big_map.animate
		opacity: 1
		scale: 1
		options: 
			time: 0.5
		
	Big_map.onAnimationEnd ->
		sanjuanarea.animate
			opacity: 1
			options: 
				time: 0.1
				
		sanjuan.animate
			opacity: 1
			options:
				time: 0.1
		cayey.animate
			opacity: 1
			options: 
				time: 0.1
		guayama.animate
			opacity: 1
			options: 
				time: 0.1
		utuado.animate
			opacity: 1
			options: 
				time: 0.1
		northwest.animate
			opacity: 1
			options: 
				time: 0.1
	
	legend.opacity = 1
	small_legend.opacity = 0
	
zoom_in.onMouseOver (event, layer) ->
	zoom_out.animate
		shadowY: 8
		shadowSpread: 1
		shadowBlur: 10
		options:
			time: 0.2
			curve: Bezier.ease
			
zoom_in.onMouseOut (event, layer) ->
	zoom_out.animate
		shadowY: 1
		shadowBlur: 3
		options:
			time: 0.2
			curve: Bezier.ease
	
zoom_out.onMouseOver (event, layer) ->
	zoom_out.animate
		shadowY: 8
		shadowSpread: 1
		shadowBlur: 10
		options:
			time: 0.2
			curve: Bezier.ease
			
zoom_out.onMouseOut (event, layer) ->
	zoom_out.animate
		shadowY: 1
		shadowBlur: 3
		options:
			time: 0.2
			curve: Bezier.ease


/// Flow ///

FlowComp = new FlowComponent
	width: 1440
	height: 900
FlowComp.showNext(Login_Screen)

loginen.onClick ->
	FlowComp.showNext(Upload_Data, animate: false)
	
skip.onClick ->
	FlowComp.showNext(Dashboard_Overview, animate: false)
	
view.onClick ->
	FlowComp.showNext(Dashboard_Overview, animate: false)
	



