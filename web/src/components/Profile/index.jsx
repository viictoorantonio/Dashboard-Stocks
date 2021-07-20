/* LIBARYS */
import { connect } from 'react-redux'

/* ACTION REDUX */
import { deleteFavoriteStock } from '../../store/actions/favoriteCompany'

/* COMPONENTS */
import CardCompany from '../CardCompany'

/* STYLES */
import { Section, BoxUser, TextUser, BoxCompanysFav, Title, BoxCompany } from './styles'

/* IMAGES */
import IconUser from '../../assets/images/icon-user.svg'
import IconChevron from '../../assets/images/icon-chevron.svg'
import IconFavDark from '../../assets/images/icon-fav-dark.svg'
import IconTrash from '../../assets/images/icon-trash.svg'

function Profile({ stocks, dispatch }) {
    return (
        <Section>
            <BoxUser>
                <img src={IconUser} />
                <TextUser>Victor Antonio Araujo</TextUser>
                <img src={IconChevron} />
            </BoxUser>

            <BoxCompanysFav>
                <Title><img src={IconFavDark} /> Empresas Favoritas</Title>

                {stocks.map(stock => (
                    <BoxCompany>
                        <CardCompany stock={stock} isButtonFav={false} />

                        <img src={IconTrash} style={{ cursor: 'pointer' }} onClick={() => dispatch(deleteFavoriteStock(stock))} />
                    </BoxCompany>
                ))}
            </BoxCompanysFav>
        </Section>
    )
}

export default connect(state => ({ stocks: state.companysFavorite }))(Profile)