export function format(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(date);
}

export function timeAgo(start: Date, end: Date | null) {
  const endDate = end || new Date();
  const yearDiff = endDate.getFullYear() - start.getFullYear();
  const monthDiff = endDate.getMonth() - start.getMonth() + 1;
  const totalMonths = yearDiff * 12 + monthDiff;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  let result = "";

  if (years > 0) {
    result += `${years} ${years === 1 ? "year" : "years"}`;
  }

  if (months > 0) {
    if (result.length > 0) {
      result += " ";
    }
    result += `${months} ${months === 1 ? "month" : "months"}`;
  }

  if (result.length === 0) {
    result = "Less than a month";
  }

  return result;
}
