import styled from "@emotion/styled";

export const NaviWrapper = styled.div`
    width: 100%;
    height: 100px;
    padding: 35px 35px;
    display: flex;
    justify-content: center;
    background-color: #000000;

    & ul {
        display: flex;
        list-style: none;
    }

    & ul > li {
        cursor: pointer;
        position: relative;
        margin-right: 120px;
        font-weight: 700, bold;
        font-size: 22px;
        line-height: 22px;
        color: white;
    }

    & ul > li:last-of-type {
        margin-right: 0px;
    }`