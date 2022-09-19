const ClientStorage = class {
  set(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('localStorage', e);
    }
  }

  get(key: string) {
    try {
      let dataValue = JSON.parse(localStorage.getItem(key) ?? '');
      if (dataValue) return dataValue;
      else return null;
    } catch (e) {
      console.warn('localStorage', e);
    }
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
};

const clientStorage = new ClientStorage();

const SessionStorage = {
  set(key: string, value: any) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('sessionStorage', e);
    }
  },
  get(key: string) {
    try {
      let dataValue = sessionStorage.getItem(key)
        ? JSON.parse(sessionStorage.getItem(key) ?? '')
        : '';
      return dataValue;
    } catch (e) {
      console.warn('sessionStorage', e);
    }
  },
  remove(key: string) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  },
};

const CookieStorage = class {
  setCookie(cname: string, value: any, expDays: number) {
    let d = new Date();
    d.setTime(d.getTime() + expDays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + value + '; ' + expires;
  }
  getCookie(cname: string) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
};

const cookieStorage = new CookieStorage();

export { clientStorage, SessionStorage as sessionStorage, cookieStorage };
