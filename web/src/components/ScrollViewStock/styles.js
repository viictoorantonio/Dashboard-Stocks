import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    height: 140px;
    max-width: 1200px;
    margin: 10px auto;
    padding: 25px 0;
`

export const Title = styled.h1`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 13px;
`

export const BoxScrollVertical = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    overflow: auto;
    margin: 0 auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`

export const BoxArrows = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 10px auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    @media (max-width: 1400px) {
        display: none;
    }
`

export const ImageArrows = styled.img`
    width: 12px;
    cursor: pointer;
`