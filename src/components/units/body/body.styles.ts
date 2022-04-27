import styled from "@emotion/styled";

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #555555;
    background-color: #FFFFFF;
`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 92px;

    & span {
    font-weight: Bold;
    font-size : 22px;
    line-height : 22px;
    }
`

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px 100px;
    margin-top: 100px;
    margin-bottom: 130px;
    /* background-color: green; */
`

export const ListItems = styled.div`
    width: 350px;
    height: 470px;
    overflow: hidden;
    /* border: 1px solid black; */

    > div:nth-of-type(1) {
        height: 80%;
        text-align: center;
        vertical-align: middle;
        object-position: center;
        overflow: hidden;
        img{
            z-index: 1;
            position: relative;
            left: 50%;
            transform: translate(-50%, 0);
            height: 100%;
        }
        .heart {
            z-index: 2;
            position: relative;
            bottom: 530px;
            width: 40px;
            left: 151px;
            cursor: pointer;
        }
    }
`

export const ListInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    
    > div > span:nth-of-type(1){
        font-size: 20px;
        margin-right: 15px;
        font-weight: 700;
        color: red;
    }
    span:nth-of-type(2){
        font-size: 20px;
        font-weight: 700;
    }
`