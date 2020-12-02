import { useEffect, useState, useContext } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Dialog, DialogTitle } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Context } from '../StoreProvider'
import { SET_OPEN_LOGS } from '../types'

export const useStyles = makeStyles((theme) => ({}))

const columnsSchema = [
  { field: 'session', headerName: 'Session', width: 150 },
  { field: 'startTime', headerName: 'Starting Time', width: 220 },
  { field: 'endTime', headerName: 'Ending Time', width: 220 },
  {
    field: 'number',
    headerName: 'Number',
    width: 90,
  },
]

// THIS DARA WILL COME FROM THE  LOCAL_STORAGE
const rows = [
  {
    id: 1,
    session: 'pomodoro',
    startTime: 'Snow',
    endTime: 'Jon',
    number: '1 / 1',
  },
  {
    id: 2,
    session: 'pomodoro',
    startTime: 'Snow',
    endTime: 'Jon',
    number: '1 / 3',
  },
  {
    id: 4,
    session: 'pomodoro',
    startTime: 'Snow',
    endTime: 'Jon',
    number: '1 / 3',
  },
  {
    id: 5,
    session: 'pomodoro',
    startTime: 'Snow',
    endTime: 'Jon',
    number: '1 / 4',
  },
]

const Log = () => {
  const [state, dispatch] = useContext(Context)
  const [open, setOpen] = useState(true)

  useEffect(() => console.log(localStorage), [])

  // console.log(new Date().toLocaleTimeString('en-GB'))

  // new Date().toLocaleDateString('en-GB')

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      onClose={() => dispatch({ type: SET_OPEN_LOGS })}
      aria-labelledby='max-width-dialog-title'
      open={state.openLogs}
    >
      <DialogTitle onClose={true}>Logs</DialogTitle>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows} //THIS DATA WILL COME FROM LOCAL STORE
          columns={columnsSchema}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </Dialog>
  )
}

export default Log
