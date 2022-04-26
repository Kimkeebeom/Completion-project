import Header from "./header/header.container";
import Navi from "./navi/navi.container";
import styled from "@emotion/styled";
import Banner from "./banner/banner.container";
import Body from "./body/body.container";
import Footer from "./footer/footer.container";

const Wrap = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Layout(){

    return(
        <Wrap>
            <Header/>
            <Navi/>
            <Banner/>
            <Body/>
            <Footer/>
        </Wrap>
    )
}