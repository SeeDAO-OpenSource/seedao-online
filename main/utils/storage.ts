export const getSessionItem = (key: string) => {
  return sessionStorage.getItem(key)
}

export const setSessionItem = (key: string, val: string) => {
  sessionStorage.setItem(key, val)
}

export const removeSessionItem = (key: string) => {
  sessionStorage.removeItem(key)
}

export const getLocalItem = (key: string) => {
  return localStorage.getItem(key)
}

export const setLocalItem = (key: string, val: string) => {
  localStorage.setItem(key, val)
}

export const removeLocalItem = (key: string) => {
  localStorage.removeItem(key)
}
