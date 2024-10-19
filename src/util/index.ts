const dateformat = require('dateformat-util')
/**
 *
 * date对象格式化方法
 * @param {*} now 当前时间或 new Date(时间戳)
 * @param {*} mask 格式化类型
 * @returns 格式化后的日期str
 */
const formatDate = (now: Date, mask = 'yyyy-MM-dd') => {
	return dateformat.format(now, mask)
}

const arrayRandomColor = () => {
	return "#" + ((color: string) => {
		return new Array(7 - color.length).join("0") + color
	})((Math.random() * 0x1000000 << 0).toString(16))
}

const getDateDiffCountdown = (time: string) => {
	let result = time
	const dateTimeStamp = new Date(time.replace(/-/g, '/')).getTime()
	const minute = 1000 * 60
	const hour = minute * 60
	const day = hour * 24
	const month = day * 30
	const now = new Date().getTime()
	const diffValue = now - dateTimeStamp
	if (diffValue < 0) return
	const monthC: any = diffValue / month
	const weekC: any = diffValue / (7 * day)
	const dayC: any = diffValue / day
	const hourC: any = diffValue / hour
	const minC: any = diffValue / minute
	if (monthC >= 1) {
		result = `${parseInt(monthC)}个月前`
		return result
	}
	if (weekC >= 1) {
		result = `${parseInt(weekC)}周前`
		return result;
	}
	if (dayC >= 1) {
		result = `${parseInt(dayC)}天前`
		return result;
	}
	if (hourC >= 1) {
		result = `${parseInt(hourC)}小时前`
		return result;
	}
	if (minC >= 1) {
		result = `${parseInt(minC)}分钟前`
		return result
	}
	return `刚刚`
}

const isPhone = () => {
	return /Android|webOS|iPhone|iPod|BlackBerry|WindowsCE|Symbian|Android|armv6l|armv5|Mobile|CentOS|mowser|AvantGo|Smartphone|Go.Web|Palm|iPAQ/i.test(navigator.userAgent)
}

export {
	arrayRandomColor,
	formatDate,
	getDateDiffCountdown,
	isPhone
}

function timeFn(d1: any) {
	//如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
	const dateBegin = new Date(d1.replace(/-/g, "/")); //将-转化为/，使用new Date
	const dateEnd = new Date(); //获取当前时间
	const dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
	const dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
	const leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
	const hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
	//计算相差分钟数
	const leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
	const minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
	//计算相差秒数
	const leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
	const seconds = Math.round(leave3 / 1000)
	const timeDom = document.getElementById("time");
	// timeDom.innerHTML = `认识：${dayDiff}天${hours}时${minutes}分${seconds}秒`
	// console.log(`认识：${dayDiff}天${hours}时${minutes}分${seconds}秒`)
}
const t3 = "2019-5-16 18:47";
timeFn(t3);
