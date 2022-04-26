import * as S from "./footer.styles";

export default function FooterUI(){

    return (
        <S.Wrapper>
            <S.Header>
                <img src="/images/DINGCO.png"/>
            </S.Header>
            <S.Contents>
                <div>
                    <span>(주) 딩코</span>
                    <span>대표: 안우엽</span>
                </div>
                <p>사업자등록번호 717-87-02373</p>
                <p>주소: 서울특별시 구로구 디지털로 300, 패스트파이브</p>
                <p>학원 등록 번호: 제 5845호</p>
                <div>
                    <span>개인정보 처리방침</span>
                    <span>서비스 이용 약관</span>
                </div>
                <p>Copyright © 2022. Dingco Corp., Ltd.</p>
            </S.Contents>
        </S.Wrapper>
    )
}