import { DateValue } from '@mantine/dates'

const handleFormate = (date: DateValue) => date!.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).split('/').reverse().join('-')

export default handleFormate