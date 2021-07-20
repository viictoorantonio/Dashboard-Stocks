/* LIBARYS */
import { connect } from 'react-redux'

/* ACTION REDUX */
import { setFavoriteStock, deleteFavoriteStock } from '../../store/actions/favoriteCompany'

/* STYLES */
import { BoxCompany, BoxCompanyInternal, BoxOneTitleStock, ImageStock, DataPercentUp, DataPercentDown, ImageFav } from './styles'

/* IMAGES */
import IconFav from '../../assets/images/icon-fav.svg'
import IconFavDark from '../../assets/images/icon-fav-dark.svg'
import IconUp from '../../assets/images/icon-up.svg'
import IconDown from '../../assets/images/icon-down.svg'

function CompanyData({ stock, isButtonFav, stockFav, dispatch }) {

    return (
        <BoxCompany>
            <BoxCompanyInternal>

                {isButtonFav && (
                    <>
                        {
                            stockFav.findIndex(item => item.symbol === stock.symbol) > -1 ? (
                                <ImageFav src={IconFavDark} onClick={() => dispatch(deleteFavoriteStock(stock))} />
                            ) : (
                                <ImageFav src={IconFav} onClick={() => dispatch(setFavoriteStock(stock))} />
                            )
                        }
                    </>
                )}

                <BoxOneTitleStock>
                    <ImageStock src={`https://storage.googleapis.com/iexcloud-hl37opg/api/logos/${stock.symbol}.png`} />
                    <p><strong>{stock.symbol}</strong><br />{stock.companyName}</p>
                </BoxOneTitleStock>

                <div>
                    {stock.changePercent > 0 ? (
                        <DataPercentUp>{(stock.changePercent * 100).toFixed(2)}% <img src={IconUp} /></DataPercentUp>
                    ) : (
                        <DataPercentDown>{(stock.changePercent * 100).toFixed(2)}% <img src={IconDown} /></DataPercentDown>
                    )}
                </div>
            </BoxCompanyInternal>
        </BoxCompany>
    )
}

export default connect(state => ({ stockFav: state.companysFavorite }))(CompanyData)