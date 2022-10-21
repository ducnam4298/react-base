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
    let t = thousands_sep === undefined ? ',' : thousands_sep,
      s = number < 0 ? '-' : '';
    let i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
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
  public FormatChangeValue(number: any, isZero?: boolean, decimals?: any, thousands?: any) {
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
      let t = thousands === undefined ? ',' : thousands,
        s = number < 0 ? '-' : '';
      let i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
        j: number = i.length > 3 ? i.length % 3 : 0;

      prf = s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t);
      value = prf + '.' + decimals;
    } else {
      let prf = number.split('.')[0];
      let n = prf,
        c = isNaN((decimals = Math.abs(decimals))) ? 2 : decimals;
      let t = thousands === undefined ? ',' : thousands,
        s = n < 0 ? '-' : '';
      let i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
        j: number = i.length > 3 ? i.length % 3 : 0;

      prf = s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t);
      value = prf;
    }
    return value;
  }
  public nFormatter(number: number, digits?: number) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "nghìn" },
      { value: 1e6, symbol: "triệu" },
      { value: 1e9, symbol: "tỷ" },
      { value: 1e12, symbol: "nghìn tỷ" },
      // { value: 1e15, symbol: "P" },
      // { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let item = lookup
      .slice()
      .reverse()
      .find((item) => {
        return number >= item.value;
      });
    return item
      ? `${(number / item.value).toFixed(digits ?? 3).replace(rx, "$1")} ${item.symbol}`
      : "0";
  }
}

export const numberUtil = new NumberUtil();
