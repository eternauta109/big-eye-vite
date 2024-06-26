/* eslint-disable react/prop-types */
import { TextField, Box, Typography } from '@mui/material'
import useEventsStore from '../../../store/EventDataContext'

import { useEffect } from 'react'

import { DateTimeRange } from './serviceEventType/Field'

export default function Meeting({ upDate }) {
  const { event, setFieldEvent, options, setEvent } = useEventsStore()

  useEffect(() => {
    !upDate &&
      setEvent({
        ...event,
        title: '',
        description: '',
        subAction: [],
        start: new Date(),
        end: new Date()
      })
  }, [])

  return (
    <>
      <Box>
        <TextField
          required
          fullWidth
          label={`meeting: ${event.title ? event.title.length : 0}/${options.MAXTITLELENGTH}`}
          variant="outlined"
          value={event.title || ''}
          inputProps={{ maxLength: options.MAXTITLELENGTH }}
          name="title"
          sx={{ mb: 2 }}
          onChange={(e) => {
            setFieldEvent({ campo: e.target.name, valore: e.target.value })
          }}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label={`cosa serve: ${event.description ? event.description.length : 0}/${options.MAXDESCRIPTIONLENGTH}`}
          variant="outlined"
          value={event.description || ''}
          inputProps={{ maxLength: options.MAXDESCRIPTIONLENGTH }}
          name="description"
          sx={{ mb: 2 }}
          onChange={(e) => {
            setFieldEvent({ campo: e.target.name, valore: e.target.value })
          }}
        />

        <Box>
          <Typography variant="body2" color="grey" sx={{ mt: 2 }}>
            quando
          </Typography>
          <DateTimeRange />
        </Box>
      </Box>
    </>
  )
}
