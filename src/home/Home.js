import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import HomeContent from './HomeContent'
import Rome from './rome.jpg'

// const useStyles = makeStyles(theme => ({
//   containerImage: {
//     backgroundImage: `url(${Rome})`
//   }
// }))

export default function Home () {
  // const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        style={{ height: '100vh', background: `linear-gradient(rgba(10, 10, 10, 0.1), rgba(10, 10, 10, 0.3), rgba(10,10,10,0.6)),url(${Rome})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        maxWidth="lg">
        <HomeContent />
      </Container>
    </React.Fragment>
  )
}
