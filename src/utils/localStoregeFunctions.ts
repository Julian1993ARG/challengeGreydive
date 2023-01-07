const getLocalStorage = (key: string) => {
  const localStorageItem = localStorage.getItem(key)
  return localStorageItem ? JSON.parse(localStorageItem) : undefined
}

const setLocalStorage = (key: string, value: any) => {
  const localStorageItem = JSON.stringify(value)
  localStorage.setItem(key, localStorageItem)
}

const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}

export { getLocalStorage, setLocalStorage, removeLocalStorage }
