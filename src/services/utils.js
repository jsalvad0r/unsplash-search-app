import dayjs from 'dayjs'

export const formatAuthorName = (author) => {
  const { first_name, last_name } = author
  if (first_name) {
    return `${first_name} ${last_name?.[0] || ''}`
  }
  return 'Anonymous'
}

export const formatDate = (dateValue) => {
  return dayjs(dateValue).format('MMM D, YYYY')
}
