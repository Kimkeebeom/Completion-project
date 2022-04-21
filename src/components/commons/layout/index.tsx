import Header from "./header/header.container";
import Navi from "./navi/navi.container";
import styled from "@emotion/styled";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Layout(){

    return(
        <Wrap>
            <Header/>
            <Navi/>
        </Wrap>
    )
}