import { formatDistanceToNow } from 'date-fns'

export function distanceToNow(date: string) {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}
