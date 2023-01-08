/**
 * Solo strings, pueden ser varios strings ej. julián martinez, todos se retornarán con su primera letra en uppercase.
 */
const firstLetterUppercase = (string:string) => {
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
