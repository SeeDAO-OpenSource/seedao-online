
/**
 * 获取字符串长度，中文为2，其他为1
 */
export function getStringLength(str: string) {
  const zhReg = /[\u4e00-\u9fa5]+/g
  const zhWords = str.match(zhReg) ?? ([] as string[])
  const zhLen = zhWords.reduce((prev, word) => prev + word.length, 0)
  const otherLen = str.length - zhLen
  const lastLen = zhLen * 2 + otherLen
  return lastLen
}


/**
 * 获取被截短的字符串
 */
export function getEllipsisText(str: string, limit: number) {
  const len = getStringLength(str)
  if (len <= limit) {
    return str
  }
  let result = ''
  let i = 0
  while (getStringLength(result) < limit) {
    result += str[i]
    i++
  }
  return `${result}${str.length === result.length ? '' : '...'}`
}

export const formatAddress = (address: string, start = 6, end = -6): string => {
  return address ? address.slice(0, start) + '...' + address.slice(end) : ''
}
