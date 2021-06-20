import { breakpoints, device } from "./breakpoints";
import theme from "./theme";
import { addDays } from "./addDays";
import Cookie from 'js-cookie'

const getCookie = (key, req) => {
    return process.browser
        ? getCookieFromBrowser(key)
        : getCookieFromServer(key, req);
};

 const getCookieFromBrowser = key => {
    // console.log('getCookieFromBrowser', key, Cookies.get(key));
    return Cookie.get(key);
};

const getCookieFromServer = (key, req) => {
    if (!req.headers.cookie) {
        return undefined;
    }
    const rawCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith(`${key}=`));
    if (!rawCookie) {
        return undefined;
    }
    return rawCookie.split('=')[1];
};

export { device, breakpoints, theme, addDays, getCookie };