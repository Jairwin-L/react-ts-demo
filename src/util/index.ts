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
  const dateTimeStamp = new Date(time.replace(/-/g,'/')).getTime()
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