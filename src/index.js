
function zeroPadding(s, n){
    let a = new Array(n).join('0');
    return (a + s).substr(-n);
}

export default class DateUtils {
	static val(value){
		let v = value;
		if(v == null){v = Date.now();}
		return v;
	}
	static getTime(value){
		return new Date(DateUtils.val(value)).getTime();
	}
	static getUtcTime(value){
		let t = new Date(DateUtils.val(value));
		let y = t.getUTCFullYear();
		let m = t.getUTCMonth();
		let d = t.getUTCDate();
		let h = t.getUTCHours();
		let i = t.getUTCMinutes();
		let s = t.getUTCSeconds();
		let a = t.getUTCMilliseconds();
		return new Date(y, m, d, h, i, s, a).getTime();
	}
	static getTimeString(value, noneSecond){
		let t = new Date(DateUtils.val(value));
		let y = t.getFullYear();
		let m = zeroPadding(t.getMonth() + 1, 2);
		let d = zeroPadding(t.getDate(), 2);
		let h = zeroPadding(t.getHours(), 2);
		let i = zeroPadding(t.getMinutes(), 2);
		let s = zeroPadding(t.getSeconds(), 2);
		let r = y + '.' + m + '.' + d + ' - ' + h + ':' + i;
		if(noneSecond){return r;}
		return r + ':' + s;
	}
	static getUtcTimeString(value, noneSecond){
		let t = DateUtils.getTime(value);
		let o = new Date().getTimezoneOffset() * 60000;
		return DateUtils.getTimeString(t - o, noneSecond);
	}
}

// temp
window.DateUtils = DateUtils;

