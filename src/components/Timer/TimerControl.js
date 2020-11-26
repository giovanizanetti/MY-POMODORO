import React from 'react'
import { Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { PlayArrow, Restore, Pause } from '@material-ui/icons'

const useTimerControlStyles = makeStyles((theme) => ({
  root: { justifyContent: 'center' },
  buttonSecondary: {
    color: 'rgba(0,0,0,.87)',
    backgroundColor: '#4caf50',
    margin: theme.spacing(1),
  },
  controllers: {
    margin: theme.spacing(1),
  },
  mr: {
    marginRight: theme.spacing(0.6),
  },
}))

const TimerControl = ({ isActive, setIsActive, time, setTime }) => {
  const { root, buttonSecondary, controllers, mr } = useTimerControlStyles()
  return (
    <>
      <Toolbar variant='dense' className={root}>
        <Button
          fullWidth={true}
          onClick={() => setIsActive(true)}
          variant='contained'
          className={buttonSecondary}
        >
          <PlayArrow />
          Start
        </Button>
        <Button
          fullWidth={true}
          onClick={() => setIsActive(!isActive)}
          className={controllers}
          variant='contained'
          color='default'
        >
          <Pause />
          Pause
        </Button>
        <Button
          fullWidth={true}
          onClick={() => {
            setIsActive(false)
            setTime(1500)
          }}
          className={controllers}
          variant='contained'
          color='secondary'
        >
          <Restore className={mr} />
          Reset
        </Button>
      </Toolbar>
    </>
  )
}

export default TimerControl
