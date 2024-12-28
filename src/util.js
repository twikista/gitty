export function formatDate(date) {
  if (date) {
    const newDate = new Date(date)
    return new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'medium',
    }).format(newDate)
  }
}
