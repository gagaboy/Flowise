import { Link } from 'react-router-dom'

// material-ui
import { ButtonBase } from '@mui/material'

// project imports
import config from 'config'
import Logo from 'ui-component/extended/Logo'

// project imports
import { MENU_OPEN, SET_MENU } from 'store/actions'
import { useDispatch } from 'react-redux'

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const dispatch = useDispatch()
    const logoClick = () => {
        dispatch({ type: MENU_OPEN, id: 'chatflows' })
    }
    return (
        <ButtonBase disableRipple component={Link} to={config.defaultPath} onClick={logoClick}>
            <Logo />
        </ButtonBase>
    )
}

export default LogoSection
