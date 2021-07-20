import { useRef } from 'react'

/* COMPONENTS */
import CardCompany from '../CardCompany'

/* STYLES */
import { Section, Title, BoxScrollVertical, BoxArrows, ImageArrows } from './styles'

/* IMAGES */
import IconStats from '../../assets/images/icon-stats.svg'
import IconArrowLeft from '../../assets/images/icon-arrow-left.svg'
import IconArrowRight from '../../assets/images/icon-arrow-right.svg'

function ScrollViewStock({ title, isButtonFav, stocks }) {

    const scrollVertical = useRef(null)

    function scrollLeft() {
        scrollVertical.current.scrollLeft -= 340
    }

    function scrollRight() {
        scrollVertical.current.scrollLeft += 340
    }

    return (
        <Section>
            <Title><img src={IconStats} /> {title}</Title>

            <BoxArrows>
                <ImageArrows src={IconArrowLeft} onClick={scrollLeft} />
                <ImageArrows src={IconArrowRight} onClick={scrollRight} />
            </BoxArrows>

            <BoxScrollVertical ref={scrollVertical}>
                {stocks.map(stock => <CardCompany stock={stock} isButtonFav={isButtonFav} /> )}
            </BoxScrollVertical>
        </Section>
    )
}

export default ScrollViewStock