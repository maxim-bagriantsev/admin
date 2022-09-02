// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Overrides Imports
import MuiList from './list'
import MuiPaper from './paper'

const Overrides = (theme: Theme) => {

    const list = MuiList(theme)


    return Object.assign(
        list,
        MuiPaper
    )
}

export default Overrides
