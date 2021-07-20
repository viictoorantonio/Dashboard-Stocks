import { useEffect } from 'react'

/* LIBARYS */
import { connect } from 'react-redux'
import axios from 'axios'

/* ACTION REDUX */
import { setFavoriteStock, deleteFavoriteStock } from '../../store/actions/favoriteCompany'

/* COMPONENTS */
import Chart from '../Chart'
import Loading from '../Loading'

/* STYLES */
import { Section, TitleStock, BoxOneTitleStock, RowInfo, ImageFav } from './styles'

/* IMAGES */
import IconFav from '../../assets/images/icon-fav.svg'
import IconFavDark from '../../assets/images/icon-fav-dark.svg'
import IconUp from '../../assets/images/icon-up.svg'
import IconDown from '../../assets/images/icon-down.svg'

function setDataCompanySee(company, desc) {
    return {
        type: 'SET_DATA_COMPANY',
        company,
        desc
    }
}

function ChartStock({ company, charts, quote, desc, stockFav, dispatch }) {

    async function pullChart() {
        const companyData = await axios({
            method: 'GET',
            baseURL: `https://cloud.iexapis.com/stable/stock/${company}/batch?types=quote,chart&token=pk_498bd1a6f22542bd8fb0f4041f7c66cf&range=1y`
        })
            .then(response => { return response })
            .catch(err => console.log(err.response))

        const companyDesc = await axios({
            method: 'GET',
            baseURL: `https://cloud.iexapis.com/stable/stock/${company}/company?token=pk_498bd1a6f22542bd8fb0f4041f7c66cf`
        })
            .then(response => { return response })
            .catch(err => console.log(err.response))

        dispatch(setDataCompanySee(companyData.data, companyDesc.data))
    }

    useEffect(() => {
        pullChart()
    }, [company])

    return (
        <Section>

            {charts.length === 0 ? (
                <Loading />
            ) : (
                <>
                    <TitleStock>
                        <BoxOneTitleStock>
                            {stockFav.findIndex(item => item.symbol === quote.symbol) > -1 ? (
                                <ImageFav src={IconFavDark} onClick={() => dispatch(deleteFavoriteStock(quote))} />
                            ) : (
                                <ImageFav src={IconFav} onClick={() => dispatch(setFavoriteStock(quote))} />
                            )}

                            <p><strong>{quote.symbol}</strong><br />{quote.companyName}</p>
                        </BoxOneTitleStock>

                        <div>
                            {quote.changePercent > 0 ? (
                                <>
                                    <p style={{ textAlign: 'end', fontWeight: 600 }}><img src={IconUp} /> ${quote.latestPrice}</p>
                                    <p style={{ textAlign: 'end', color: '#79C300' }}>${quote.change} ({(quote.changePercent * 100).toFixed(2)}%)</p>
                                </>
                            ) : (
                                <>
                                    <p style={{ textAlign: 'end', fontWeight: 600 }}><img src={IconDown} /> ${quote.latestPrice}</p>
                                    <p style={{ textAlign: 'end', color: '#D64B45' }}>${quote.change} ({(quote.changePercent * 100).toFixed(2)}%)</p>
                                </>
                            )}
                        </div>
                    </TitleStock>

                    <Chart data={charts} dataKey="close" />

                    <RowInfo>
                        <p>{desc.companyName}</p>
                        <p>{desc.exchange}</p>
                    </RowInfo>

                    <RowInfo>
                        <a href={`https://${desc.website.replace('https://', '')}`} target="_blank">{desc.website}</a>
                        <p>{desc.industry}</p>
                    </RowInfo>
                </>
            )}

        </Section>
    )
}

export default connect(state => ({ company: state.companySee, charts: state.companySeeChart, quote: state.companySeeQuote, desc: state.companySeeDesc, stockFav: state.companysFavorite }))(ChartStock)