import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 10px auto;
    background-color: #FFF;
    box-shadow: 0px 4px 12px rgba(222, 222, 231, 0.4);
    border-radius: 8px;
    padding: 25px 0;
`

export const TitleStock = styled.div`
    width: 97%;
    margin: 0 auto;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BoxOneTitleStock = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p {
        color: #ACACAC;
        font-family: GraphikLight;

        strong {
            font-family: Graphik;
            color: #14171A;
        }
    }
`

export const RowInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    margin: 10px auto;
    color: #657786;
    text-align: justify;

    @media (max-width: 1400px) {
        flex-direction: column;
        text-align: center;
    }
`

export const ImageFav = styled.img`
    width: 25px;
    cursor: pointer;
`