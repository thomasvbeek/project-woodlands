function getMap() {
	var maps = [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,15,9,9,9,9,9,15],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,15,9,9,9,9,9,15],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,15,9,9,9,9,9,15],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,15,9,9,9,9,9,15],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,15,9,9,9,9,9,15],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,15,9,9,9,9,9,15],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,15,9,9,9,9,9,15],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,15,9,9,9,9,9,15],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,15,9,9,9,9,9,15],
		[15,15,15,15,15,15,15,15,15,15,15,15,15,15,9,9,9,9,9,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],
		[15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],
		[15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],
		[15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],
		[15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],
		[15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],
		[15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],
		[15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],
		[15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],
		[15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],
		[15,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],
		[15,9,9,9,9,9,9,9,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,9,9,9,9,9,9,9,15],
		[15,8,8,8,8,8,8,8,15],
		[15,8,8,8,8,8,8,8,15],
		[15,7,7,7,7,7,7,7,15],
		[15,7,7,7,7,7,7,7,15],
		[15,6,6,6,6,6,6,6,15],
		[15,6,6,6,6,6,6,6,15],
		[15,5,5,5,5,5,5,5,15],
		[15,5,5,5,5,5,5,5,15],
		[15,4,4,4,4,4,4,4,15],
		[15,4,4,4,4,4,4,4,15],
		[15,3,3,3,3,3,3,3,15],
		[15,3,3,3,3,3,3,3,15],
		[15,2,2,2,2,2,2,2,15],
		[15,2,2,2,2,2,2,2,15],
		[15,1,1,1,1,1,1,1,15],
		[15,1,1,1,1,1,1,1,15],
		];

	return maps;
}