function keyBindings() {
	$( "body" ).keypress(function( event ) {
		if ( event.which == 119 ) { directionZ = 'forward'; movementZ = -stepSpeed; }
		if ( event.which == 115 ) { directionZ = 'backwards'; movementZ = +stepSpeed; }
		if ( event.which == 100 ) { directionX = 'right'; movementX = +stepSpeed; }
		if ( event.which == 97 ) { directionX = 'left'; movementX = -stepSpeed; }
		if ( event.which == 122 || event.which == 113 ) { turn = 'left'; }
		if ( event.which == 99 || event.which == 101 ) { turn = 'right'; }
		if ( event.which == 32 ) { camera.position.y = camera.position.y + 0.5; }
		if ( event.which == 96 ) { camera.position.y = camera.position.y - 0.5; }
	});
	$( "body" ).keyup(function( event ) {
		if ( event.which == 87 ) { directionZ = ''; movementZ = 0; }
		if ( event.which == 83 ) { directionZ = ''; movementZ = 0; }
		if ( event.which == 68 ) { directionX = ''; movementX = 0; }
		if ( event.which == 65 ) { directionX = ''; movementX = 0; }
		if ( event.which == 90 || event.which == 81 ) { turn = ''; }
		if ( event.which == 67 || event.which == 69 ) { turn = ''; }
	});

	// We're turning based on the movement of the rat
	$(document).bind('mousemove',function(e){ 
		width = window.innerWidth/2;
		if(e.pageX<width) {
			percentage = parseInt((width-e.pageX)/width*100);
			if(percentage > 20) {
				turn = 'left';
				turnSpeed = (percentage-20)/100;
			} else {
				turn = '';
			}
		} else {
			percentage = parseInt((width-e.pageX)/width*-100);
			if(percentage > 20) {
				turn = 'right';
				turnSpeed = (percentage-20)/100;
			} else {
				turn = '';
			}
		}
	}); 
}

// Check and save the turn variables to see where we're heading
function turnMath() {
	turnDegrees = (camera.rotation.y * 180 / Math.PI).toFixed(0);
	if(turnDegrees<0 || turnDegrees>360) {
		turnFactor = turnDegrees/360;
		turnDegrees = turnDegrees-(Math.floor(turnFactor)*360);
	}

	if(turnDegrees<180 && turnDegrees >= 0) {
		// West
		if(turnDegrees >= 0 && turnDegrees < 90) {
			// North-West
			forwardFactor = (1-(turnDegrees/90));
			sideFactor = (1-(turnDegrees/90)-1);
			$('#fw-x').html(forwardFactor.toFixed(2));
			$('#fw-y').html(sideFactor.toFixed(2));
		} else {
			// South-West
			forwardFactor = (1-(turnDegrees/90));
			sideFactor = (-((turnDegrees-180)/90)*-1);
			$('#fw-x').html(forwardFactor.toFixed(2));
			$('#fw-y').html(sideFactor.toFixed(2));
		}
	} else {
		// East
		if(turnDegrees>270 && turnDegrees < 360) {
			// North-East
			forwardFactor = (1+((turnDegrees-360)/90));
			sideFactor = (-((turnDegrees-360)/90));
			$('#fw-x').html(forwardFactor.toFixed(2));
			$('#fw-y').html(sideFactor.toFixed(2));
		} else {
			// South-East
			forwardFactor = (1+((turnDegrees-180)/90)-2);
			sideFactor = (((turnDegrees-180)/90));
			$('#fw-x').html(forwardFactor.toFixed(2));
			$('#fw-y').html(sideFactor.toFixed(2));
		}
	}
}

// Animate movement when you press the keys
function animateMovement() {
	if(directionZ=='forward') {
		camera.position.z = camera.position.z - (stepSpeed*forwardFactor);
		camera.position.x = camera.position.x + (stepSpeed*sideFactor);
	} else if(directionZ=='backwards') {
		camera.position.z = camera.position.z + (stepSpeed*forwardFactor);
		camera.position.x = camera.position.x - (stepSpeed*sideFactor);
	}
	if(directionX=='right') {
		camera.position.z = camera.position.z + (stepSpeed*sideFactor);
		camera.position.x = camera.position.x + (stepSpeed*forwardFactor);
	} else if(directionX=='left') {
		camera.position.z = camera.position.z - (stepSpeed*sideFactor);
		camera.position.x = camera.position.x - (stepSpeed*forwardFactor);
	}
}

// Set OutOfBounds where objects are located
function outOfBounds(item) {

	var cameraHeight = camera.position.y;

	// Let's get our Bounds
	var x1 = (item.position.x-(item.geometry.parameters.width/2))+1.5;
	var x2 = (item.position.x+(item.geometry.parameters.width/2))-1.5;
	var z1 = (item.position.z-(item.geometry.parameters.depth/2))+1.5;
	var z2 = (item.position.z+(item.geometry.parameters.depth/2))-1.5;

	// Order them properly
	if(x1>x2) { fx1 = x2; fx2 = x1; }
	else { fx1 = x1; fx2 = x2; }
	if(z1>z2) { fz1 = z1; fz2 = z2; }
	else { fz1 = z2; fz2 = z1; }

	// Let's see if we're out of bounds and move backwards
	if(camera.position.x>fx1 && camera.position.x<fx2 && camera.position.z<fz1 && camera.position.z>fz2) {
		if(item.geometry.parameters.height==(cameraHeight+1)) {
			// We're going one level up
			camera.position.y = camera.position.y+1;
		} else if(item.geometry.parameters.height==(cameraHeight-1)) {
			// We're going one level down
			camera.position.y = camera.position.y-1;
		} else if(item.geometry.parameters.height==cameraHeight) {
			// We're hovering here
		} else if(item.geometry.parameters.height < cameraHeight) {
			// We're going down to the highest object we can see
			camera.position.y = item.geometry.parameters.height;
		} else if (item.geometry.parameters.height > cameraHeight){
			// Object is higher, can't go through it
			if(directionZ=='forward') {
				camera.position.z = camera.position.z + (stepSpeed*forwardFactor);
				camera.position.x = camera.position.x - (stepSpeed*sideFactor);
			} else if(directionZ=='backwards') {
				camera.position.z = camera.position.z - (stepSpeed*forwardFactor);
				camera.position.x = camera.position.x + (stepSpeed*sideFactor);
			}
			if(directionX=='right') {
				camera.position.z = camera.position.z - (stepSpeed*sideFactor);
				camera.position.x = camera.position.x - (stepSpeed*forwardFactor);
			} else if(directionX=='left') {
				camera.position.z = camera.position.z + (stepSpeed*sideFactor);
				camera.position.x = camera.position.x + (stepSpeed*forwardFactor);
			}
		}
	}
}