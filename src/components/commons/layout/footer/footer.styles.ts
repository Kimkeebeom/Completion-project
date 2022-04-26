import styled from "@emotion/styled";

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    img{
        width: 169px;
        height: 52px;
        left: 107px;
        margin: 50px 0px 0px 105px;
    }
`
export const Contents = styled.div`
    font-size: 10px;
    font-weight: bold;
    margin: 30px 0px 60px 120px;
    > div > span:nth-of-type(1){
        margin-right: 15px;
    }
    span:nth-of-type(2){
        margin-right: 15px;
    }
`