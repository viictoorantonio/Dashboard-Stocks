/* STYLES */
import { Aside, Home, Li, Icon, BoxImage } from './styles'

/* IMAGES */
import Logo from '../../assets/images/logo.svg'
import IconHome from '../../assets/images/icon-home.svg'

function Sidebar() {
    return (
        <Aside>
            <Home>
                <img style={{ width: 40 }} src={Logo} alt="LOGO" />
            </Home>

            <ul>
                <Li>
                    <Icon></Icon>
                    <BoxImage>
                        <img src={IconHome} />
                    </BoxImage>
                </Li>
            </ul>
        </Aside>
    )
}

export default Sidebar