import dayjs from "dayjs";

let date = {
  year: "",
  month: "",
  day: "",
  hour: "",
  minute: "",
  second: "",
  week: "",
};

function initDate() {
  date.year = dayjs(`${new Date()}`).format("YYYY");
  date.month = dayjs(`${new Date()}`).format("MM");
  date.day = dayjs(`${new Date()}`).format("DD");
  date.hour = dayjs(`${new Date()}`).format("HH");
  date.minute = dayjs(`${new Date()}`).format("mm");
  date.second = dayjs(`${new Date()}`).format("ss");
  date.week = dayjs().day();
  switch (date.week) {
    case 1:
      date.week = "一";
      break;
    case 2:
      date.week = "二";
      break;
    case 3:
      date.week = "三";
      break;
    case 4:
      date.week = "四";
      break;
    case 5:
      date.week = "五";
      break;
    case 6:
      date.week = "六";
      break;
    case 0:
      date.week = "日";
      break;
  }

  return date;
}
setInterval(() => {
  initDate();
}, 1000);

export default initDate;
