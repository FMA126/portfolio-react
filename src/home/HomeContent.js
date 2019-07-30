import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
  // root: {
  //   padding: theme.spacing(1),
  //   [theme.breakpoints.down('sm')]: {
  //     backgroundColor: theme.palette.secondary.main,
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     backgroundColor: theme.palette.primary.main,
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     backgroundColor: green[500]
  //   }
  // },
  head: {
    color: '#000000',
    marginTop: 0,
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '8rem'
    }
  },
  para: {
    color: '#ffffff',
    fontWeight: 900,
    fontStyle: 'italic',
    marginTop: 0,
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem'
    }
  }
}))

export default function HomeContent () {
  const classes = styles()
  return (
    <Fragment>
      <h1 className={classes.head}>Merritt Blanks</h1>
      <p className={classes.para}>Software Engineer</p>
    </Fragment>
  )
}
