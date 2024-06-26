import useEventsStore from '../../../../store/EventDataContext'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'

export const DateTimeRange = () => {
  const { setEvent, event } = useEventsStore()
  return (
    <DateTimeRangePicker
      onChange={(newDateRange) => {
        console.log(newDateRange)
        setEvent({
          ...event,
          start: newDateRange[0],
          end: newDateRange[1]
        })
      }}
      value={event.start ? [event.start, event.end] : [new Date(), new Date()]}
    />
  )
}
