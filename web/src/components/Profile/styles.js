import styled from 'styled-components'

export const Section = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1400px) {
        display: none;
    }
`

export const BoxUser = styled.div`
    width: 90%;
    border: 2px solid #E1E0E7;  
    border-radius: 25px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 20px 0; 
    padding: 5px;
    gap: 10px;
`

export const TextUser = styled.p`
    font-size: 16px;
    line-height: 20px;

    text-align: center;
    letter-spacing: -0.005em;

    color: #0047BB;
`

export const BoxCompanysFav = styled.div`
    width: 90%;
    overflow: auto;
    margin: 0 auto;
    margin-top: 15px;

    &::-webkit-scrollbar {
        width: .3em;
        height: .3em;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #9a9a9a94;
        border-radius: 10px;
    }
`

export const Title = styled.h3`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
`

export const BoxCompany = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`