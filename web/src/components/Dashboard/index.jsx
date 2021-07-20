/* LIBARYS */
import { connect } from 'react-redux'

/* ACTION REDUX */
import { changeCompany } from '../../store/actions/changeCompany'

/* COMPONENTS */
import ChartStock from '../ChartStock'
import ScrollViewStock from '../ScrollViewStock'

/* STYLES */
import { Section, Title, Form, Input, Button, BoxHidden } from './styles'

/* IMAGES */
import IconTitle from '../../assets/images/icon-dashboard.svg'
import IconBtnSearch from '../../assets/images/icon-btn-search.svg'

function Dashboard({ companysFavorite, companysRecent, dispatch }) {

    function handleSubmit(event) {
        event.preventDefault() 
        dispatch(changeCompany(event.target[0].value.toUpperCase()))
        event.target[0].value = ''
    }

    return (
        <Section>
            <Title><img src={IconTitle} /> Dashboard</Title>

            <BoxHidden>
                <ScrollViewStock title="Empresas Favoritas" isButtonFav={true} stocks={companysFavorite} />
            </BoxHidden>

            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Buscar empresa" autocomplete="off" />
                <Button type="submit"><img src={IconBtnSearch} /></Button>
            </Form>

            <ChartStock />

            <ScrollViewStock title="Empresas Recentes" isButtonFav={true} stocks={companysRecent} />
        </Section>
    )
}

export default connect(state => ({ companysFavorite: state.companysFavorite, companysRecent: state.companysRecents }))(Dashboard)