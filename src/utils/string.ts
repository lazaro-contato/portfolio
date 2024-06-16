export const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate)
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date')
  }
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${month}/${day}/${year}`
}
