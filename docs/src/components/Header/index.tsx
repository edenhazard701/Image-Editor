import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.primary.main,
      marginBottom: `1.45rem`,
      position: 'relative',
    },
    wrapper: {
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
      textAlign: 'center',
    },
    link: {
      color: `white`,
      textDecoration: `none`,
    },
    forkImg: {
      position: 'absolute',
      top: 0,
      right: 0,
      border: 0,
      width: 96,
    },
  })
)

type Props = {
  siteTitle: string
}

const Header = (props: Props) => {
  const { siteTitle } = props
  const classes = useStyles(props)
  return (
    <header className={classes.root}>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.link}>
          <Typography variant="h4" color="inherit">
            {siteTitle}
          </Typography>
        </Link>
        <a href="https://github.com/ValentinH/react-easy-crop">
          <img
            className={classes.forkImg}
            src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
          />
        </a>
      </div>
    </header>
  )
}

export default Header
