/**
 * @param {string} string
 * @returns {string}
 * @description First letter uppercase
 * @example
 * firstLetterUppercase('hello world') // Hello World
 */
const firstLetterUppercase = (string:string): string => {
  if (!string) return string
  if (typeof string !== 'string') return string
  const array = string.split(' ')
  if (array.length > 1) {
    const newArray = array.map((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1)
    })
    return newArray.join(' ')
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default firstLetterUppercase
