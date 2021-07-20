import styled from 'styled-components'

export const BoxCompany = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const BoxCompanyInternal = styled.div`
    width: 320px;
    height: 70px;
    box-shadow: 0px 4px 12px rgb(222 222 231 / 40%);
    border-radius: 8px;
    margin: 20px 5px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #FFF;
    margin-right: 10px;
`

export const BoxOneTitleStock = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p {
        color: #ACACAC;
        font-family: GraphikLight;

        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        strong {
            font-family: Graphik;
            color: #14171A;
        }
    }
`

export const ImageStock = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: contain;
`

export const DataPercentUp = styled.p`
    textAlign: end;
    color: #79C300;
`

export const DataPercentDown = styled.p`
    textAlign: end;
    color: #D64B45;
`

export const ImageFav = styled.img`
    width: 25px;
    cursor: pointer;
`