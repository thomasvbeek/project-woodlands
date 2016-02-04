function renderMap( maps, executed ) {	
	var rendered = [];
	for(var i = 0; i < maps.length; i++) {
	    var map = maps[i];
	    for(var j = 0; j < map.length; j++) {
			// var mm = j;
			if(map[j]>0) {
				var number = Math.floor((Math.random() * 99999999999) + 1);

				var geometry = new THREE.BoxGeometry( 1, map[j], 1 );
				var material = new THREE.MeshNormalMaterial( { overdraw: 0.5 } );
				var material = new THREE.MeshLambertMaterial( { color: 0x333333 } );
				// var material = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: false, transparent: true, opacity: 0.1 } );
				window[number] = new THREE.Mesh( geometry, material );
				scene.add( window[number] );
				window[number].position.x = j;
				window[number].position.z = i;
				window[number].position.y = -4.5+(map[j]/2);
				outOfBounds(window[number]);

				rendered.push(window[number]);
			}
	    }
	}
	return rendered;
}