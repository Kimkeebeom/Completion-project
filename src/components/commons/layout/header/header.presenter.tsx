import * as S from "./header.styles";

export default function HeaderUI(){
    
    return(
        <S.HeaderWrapper>
            <S.HeaderLeft>
                <img src="/images/DINGCO.png"/>
            </S.HeaderLeft>
            <S.HeaderRight>
               <ul>
                   <li>로그인</li>
                   <li>회원가입</li>
                   <li>장바구니</li>
               </ul>
            </S.HeaderRight>
        </S.HeaderWrapper>
    )
}