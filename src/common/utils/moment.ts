export class Moment {
  static CurrentTime() {
    const today = new Date();
    const curHr = today.getHours();
    let time = '';
    if (curHr < 12) {
      time = 'Chào buổi sáng';
    } else if (curHr < 18) {
      time = 'Chào buổi chiều';
    } else {
      time = 'Chào buổi tối';
    }
    return time;
  }
  static StringToDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    const m = Number(month) - 1;
    const y = Number(year);
    const d = Number(day);
    const date = new Date(y, m, d);
    return date;
  };

  static CountDate = (number: number, plus?: boolean) => {
    if (plus) {
      return new Date().setDate(new Date().getDate() + number ?? new Date().getDate());
    } else return new Date().setDate(new Date().getDate() - number ?? new Date().getDate());
  };

  static InDays(d1: Date, d2: Date) {
    var t2 = d2.getTime();
    var t1 = d1.getTime();

    return parseInt(((t2 - t1) / (24 * 3600 * 1000)).toString());
  }

  static InWeeks(d1: Date, d2: Date) {
    var t2 = d2.getTime();
    var t1 = d1.getTime();

    return parseInt(((t2 - t1) / (24 * 3600 * 1000 * 7)).toString());
  }

  static InMonths(d1: Date, d2: Date) {
    var d1Y = d1.getFullYear();
    var d2Y = d2.getFullYear();
    var d1M = d1.getMonth();
    var d2M = d2.getMonth();

    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
  }

  static InYears(d1: Date, d2: Date) {
    return d2.getFullYear() - d1.getFullYear();
  }

  static DateToUTCCurrent() {
    const date = new Date();
    return date.toISOString();
  }

  static DateCurrent() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    return new Date(year, month, date);
  }

  static PreviousDateTime(
    date?: Date,
    day?: number,
    month?: number,
    year?: number
  ) {
    const currentDate = date ?? new Date();
    const previousDate = new Date(
      new Date(currentDate).setDate(currentDate.getDate() - (day ?? 7))
    );
    const previousMonth = new Date(
      new Date(currentDate).setMonth(currentDate.getMonth() - (month ?? 1))
    );
    const previousYear = new Date(
      new Date(currentDate).setFullYear(currentDate.getFullYear() - (year ?? 1))
    );
    return { date: previousDate, month: previousMonth, year: previousYear };
  }

  static NextDateTime(
    date?: Date,
    day?: number,
    month?: number,
    year?: number
  ) {
    const currentDate = date ?? new Date();
    const nextDate = new Date(
      new Date(currentDate).setDate(currentDate.getDate() + (day ?? 7))
    );
    const nextMonth = new Date(
      new Date(currentDate).setMonth(currentDate.getMonth() + (month ?? 1))
    );
    const nextYear = new Date(
      new Date(currentDate).setFullYear(currentDate.getFullYear() + (year ?? 1))
    );
    return { date: nextDate, month: nextMonth, year: nextYear };
  }
}
