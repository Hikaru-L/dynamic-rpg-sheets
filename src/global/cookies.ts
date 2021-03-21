import {Cookies} from 'react-cookie'

const hoursInMilliseconds = 60 * 60 * 1000;
const dayInMilliseconds = 24 * hoursInMilliseconds;
const aLotOfYearsInDays = 32768 * dayInMilliseconds;
const cookieHandler = new Cookies()

export const getCookie = (cookieName: string) => {
  return cookieHandler.get(cookieName)
}

export const setCookie = (
  cookieName: string,
  value: string,
  lifespawn?: number
) => {
  const expirationDate = new Date(
    lifespawn
      ? Date.now() + lifespawn * hoursInMilliseconds
      : Date.now() + aLotOfYearsInDays
  );

  cookieHandler.set(cookieName, value, {expires: expirationDate})
}

export const deleteCookie = (cookieName: string) => {
  cookieHandler.remove(cookieName)
}
