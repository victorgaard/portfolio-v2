export function format(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(date);
}

export function timeAgo(date: Date) {
  const currentDate = new Date();
  const yearDiff = currentDate.getFullYear() - date.getFullYear();
  const monthDiff = currentDate.getMonth() - (date.getMonth() - 1);

  let result = "";

  if (yearDiff > 0) {
    result += `${yearDiff} ${yearDiff === 1 ? "year" : "years"}`;
  }

  if (monthDiff > 0) {
    if (result.length > 0) {
      result += " ";
    }
    result += `${monthDiff} ${monthDiff === 1 ? "month" : "months"}`;
  }

  if (result.length === 0) {
    result = "Less than a month";
  }

  return result;
}
