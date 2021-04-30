import moment from 'moment'
// 分，时，天，转秒
const DATE_CONFIG = {
  m: 60,
  h: 3600,
  d: 86400,
  daysOfYeay: 365
}

// 毫秒转秒
export function millisecond2Second(millisecond) {
  return Math.round(millisecond / 1000)
}

// 计算时间戳之间的秒差
export function relativeSeconds(startStamp, endStamp) {
  if (endStamp) {
    return millisecond2Second(endStamp - startStamp)
  } else {
    const endStamp = new Date().valueOf()
    return millisecond2Second(endStamp - startStamp)
  }
}

// 秒转时分秒
export function seconds2Date(seconds) {
  const dateObj = {
    h: 0,
    m: 0,
    s: 0
  }
  if (seconds < DATE_CONFIG.m) {
    dateObj.s = seconds
    return dateObj
  } else if (seconds < DATE_CONFIG.h) {
    dateObj.m = Math.round(seconds / DATE_CONFIG.m)
    return dateObj
  } else if (seconds < DATE_CONFIG.d) {
    dateObj.h = Math.round(seconds / DATE_CONFIG.h)
    return dateObj
  }
  return dateObj
}

// 获取两个日期之间的相隔天数
export function relativeDays(startStamp, endStamp) {
  return moment(endStamp).diff(moment(startStamp), 'days')
}

// 获取两个日期之间的相隔多少年
export function relativeYears(startStamp, endStamp) {
  return moment(endStamp).diff(moment(startStamp), 'year')
}

/**
 * 人性化显示时间
 *moment(startTemp).format(YYYY-MM-DD HH:mm:ss)
 * @param {number | string} date 时间（时间戳或者字符）默认是时间戳
 * @param {object} [options] 配置项(可选)
 * @param {boolean} options.isString 指定date类型：默认是false. false:数字时间戳 true: YYYY-MM-DD HH:mm:ss (ISO 8601 string)
 * @param {number} options.adjustVal 校正值。单位秒。即两时间相差{adjustVal}显示为刚刚。默认：0
 */
export function getHumanDate(date, options = {}) {
  const { isString, adjustVal = 0, needYesterday = false, monthAndDay = false } = options
  var startTemp
  if (typeof date == "string") {
    startTemp = moment(date, 'YYYY-MM-DD HH:mm:ss').valueOf()
  } else {
    startTemp = date
  }
  // const startTemp = date
  const currDate = moment(new Date(), 'YYYY-MM-DD HH:mm:ss').valueOf()
  const relativeS = relativeSeconds(startTemp, currDate)

  if (Math.abs(relativeS) <= adjustVal) {
    return '刚刚'
  }
  // 时间戳可能由服务器生成，会跟本地时间有误差。
  if (relativeS <= 0 && Math.abs(relativeS) > adjustVal) {
    return `未来 ${moment(startTemp).format('YYYY-MM-DD HH:mm')}`
  }
  if (relativeS < DATE_CONFIG.m) {
    return `${relativeS}秒前`
  } else if (relativeS < DATE_CONFIG.h) {
    return `${seconds2Date(relativeS).m}分钟前`
  } else if (relativeS < DATE_CONFIG.d) {
    return `${seconds2Date(relativeS).h}小时前`
  } else if (needYesterday && relativeDays(startTemp, currDate) === 1) {
    return `昨天 ${moment(startTemp).format('HH:mm')}`
  } else if (needYesterday && relativeDays(startTemp, currDate) === 2) {
    return `前天 ${moment(startTemp).format('HH:mm')}`
  } else if (monthAndDay && relativeYears(currDate, startTemp) === 0) {
    return moment(startTemp).format('MM-DD HH:mm')
  } else {
    return moment(startTemp).format('YYYY-MM-DD')
  }
}
