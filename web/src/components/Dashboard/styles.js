import styled from 'styled-components'

export const Section = styled.section`
  width: 60%;
  background-color: #f5f8fa;
  border-radius: 30px 0px 0px 0px;
  padding: 2%;
  overflow: auto;
  margin: 0 auto;

  &::-webkit-scrollbar {
    width: 0em;
  }

  @media (max-width: 1400px) {
    width: 100%;
  }
`

export const Title = styled.h1`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 13px;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
`

export const Input = styled.input`
    width: 345px;
    height: 20px;
    margin: 30px 0;

    padding: 10px;

    font-size: 18px;
    color: #ACACAC;

    background-color: #FFF;
    border: 1px solid #E1E0E7;
    border-radius: 8px;
`

export const Button = styled.button`
    width: 40px;
    height: 40px;
    background-color: #0047BB;
    border: none;
    border-radius: 8px;
    margin-left: -15px;
    cursor: pointer;
`

export const BoxHidden = styled.div`
  display: none;

  @media (max-width: 1400px) {
    display: block;
    width: 100%;
  }
`