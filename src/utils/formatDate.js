export function formatDate(date) {
  const newDate = new Date(date);
  return newDate.toLocaleString("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
