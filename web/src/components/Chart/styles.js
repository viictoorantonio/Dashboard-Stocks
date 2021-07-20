import styled from 'styled-components'

export const ContainerChart = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 60px;
`

export const BoxTooltip = styled.div`
    width: 100px;
    height: 40px;
    font-size: 10px;
    text-aling: center;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-radius: 4px;

    color: #FFF;
    background-color: #0047BB;

    strong {
        margin-top: 3px;
        font-size: 18px;
    }
`