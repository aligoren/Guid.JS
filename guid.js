class Guid {
	static Random() {
		var seconds = new Date().getTime() / 1000;
		return (((1 + Math.random()) * seconds) | 0).toString(16).substring(1);
	}
	static NewGuid() {
		var s1 = Guid.Random().slice(0, 8) + "-" + Guid.Random().slice(0, 4);
		var s2 = "-4" + Guid.Random().slice(0, 3);
		var s3 = Guid.Random().slice(0, 4);
		var s4 = (Guid.Random() + Guid.Random()).slice(0, 12);
		var guid = (s1 + s2 + "-" + s3 + "-" + s4).toLowerCase();
		return guid;
	}
}
