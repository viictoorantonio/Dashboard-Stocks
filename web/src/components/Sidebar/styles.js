import styled from 'styled-components'

export const Aside = styled.aside`
  width: 100px;
  height: 100vh;

  @media (max-width: 1400px) {
    display: none;
  }
`

export const Home = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const Icon = styled.div`
    width: 5px;
    height: 48px;
    border-radius: 0px 5px 5px 0px;
    background-color: #F06400;
    transition: 100ms;
`

export const BoxImage = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Li = styled.li`
    display: flex;
    cursor: pointer;

    &:hover ${Icon} {
      width: 8px;
    }
`