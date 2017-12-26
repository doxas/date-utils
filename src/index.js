
export default class DateUtils {
	static getTime(value){
		let v = value;
		if(v == null){v = Date.now();}
		return new Date(v).getTime();
	}
	static getUtcTime(value){
		let v = value;
		if(v == null){v = Date.now();}
		let t = new Date(v);
		let y = t.getUTCFullYear();
		let m = t.getUTCMonth();
		let d = t.getUTCDate();
		let h = t.getUTCHours();
		let i = t.getUTCMinutes();
		let s = t.getUTCSeconds();
		let a = t.getUTCMilliseconds();
		return new Date(y, m, d, h, i, s, a).getTime();
	}
}

// temp
window.DateUtils = DateUtils;

