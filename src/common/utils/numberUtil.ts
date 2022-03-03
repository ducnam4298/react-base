class NumberUtil {
  public FormatCurrency(number: number) {
    try {
      return this.FormatChangeValue(number);
    } catch (e) {
      return number;
    }
  }

  public NumberFormat(number: any, decimals?: any, dec_point?: any, thousands_sep?: any) {
    let n = number,
      c = isNaN((decimals = Math.abs(decimals))) ? 2 : decimals;
    let t = thousands_sep === undefined ? ',' : thousands_sep,
      s = n < 0 ? '-' : '';
    let i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
      j: number = i.length > 3 ? i.length % 3 : 0;
    return (
      s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + ' iXu'
    );
  }

  public FormatNumber(number: any, decimals?: any, dec_point?: any, thousands_sep?: any) {
    let n = number,
      c = isNaN((decimals = Math.abs(decimals))) ? 2 : decimals;
    let t = thousands_sep === undefined ? ',' : thousands_sep,
      s = n < 0 ? '-' : '';
    let i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
      j: number = i.length > 3 ? i.length % 3 : 0;

    return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t);
  }
  public FormatIndexNumber(number: any, unit?: number, decimals?: any, thousands_sep?: any) {
    if (unit) {
      number = number / unit;
    }
    if (number) {
      number = number.toString();
    } else return '--';
    let n = number.split('.')[0],
      c = isNaN((decimals = Math.abs(decimals))) ? 2 : decimals;
    var t = thousands_sep === undefined ? ',' : thousands_sep,
      s = number < 0 ? '-' : '';
    var i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
      j: number = i.length > 3 ? i.length % 3 : 0;
    if (number === '0') {
      return '-';
    } else if (number.split('.')[1]) {
      return (
        s +
        (j ? i.substr(0, j) + t : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
        '.' +
        number.split('.')[1].slice(0, 2)
      );
    } else
      return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t);
  }
  public FormatChangeValue(number: any, isZero?: boolean, decimals?: any, thousands_sep?: any) {
    number = parseFloat(number).toFixed(2);
    if (number) {
      number = number.toString();
    } else if (isZero) {
      return '0';
    } else return '--';
    let value = '';
    if (number.split('.')[1]) {
      let decimals = number.split('.')[1].slice(0, 2);
      let prf = number.split('.')[0];
      let n = prf,
        c = isNaN((decimals = Math.abs(decimals))) ? 2 : decimals;
      let t = thousands_sep === undefined ? ',' : thousands_sep,
        s = number < 0 ? '-' : '';
      let i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
        j: number = i.length > 3 ? i.length % 3 : 0;

      prf = s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t);
      value = prf + '.' + decimals;
    } else {
      let prf = number.split('.')[0];
      let n = prf,
        c = isNaN((decimals = Math.abs(decimals))) ? 2 : decimals;
      let t = thousands_sep === undefined ? ',' : thousands_sep,
        s = n < 0 ? '-' : '';
      let i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
        j: number = i.length > 3 ? i.length % 3 : 0;

      prf = s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t);
      value = prf;
    }
    return value;
  }
  public secondsToHms(d: any) {
    d = Number(d);
    var h: any = Math.floor(d / 3600);
    var m: any = Math.floor((d % 3600) / 60);
    var s: any = Math.floor((d % 3600) % 60);
    if (h < 10) {
      h = '0' + h;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }
    if (h >= 0 && m >= 0 && s >= 0) {
      return h + ':' + m + ':' + s;
    } else {
      return '00:00:00';
    }
  }
  public secondsToMs(d: any) {
    d = Number(d);
    var h: any = Math.floor(d / 3600);
    var m: any = Math.floor((d % 3600) / 60);
    var s: any = Math.floor((d % 3600) % 60);
    if (h < 10) {
      h = '0' + h;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }
    if (m >= 0 && s >= 0) {
      return m + ':' + s;
    } else {
      return '00:00';
    }
  }
  public TimeToSeconds(time: string) {
    const data = time.split(':');
    return parseInt(data[2]) + parseInt(data[1]) * 60 + parseInt(data[0]) * 60 * 60;
  }
}

export const numberUtil = new NumberUtil();
