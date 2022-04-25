import * as S from "./body.styles";
// import { v4 as uuidv4 } from "uuid";

export default function BodyUI(){

    return(
        <S.Wrapper>
            <S.Header>
                <span>New Arrival</span>
            </S.Header>
            <S.List>
                {new Array(8).fill(1).map((el, index) => {
                return <S.ListItems key={index}>
                     <div>
                         <img src="/images/wallpaperbetter.jpg"/>
                         <img className="heart" src="/images/heart.svg" onClick={()=>alert("찜!")}/>
                     </div>
                    <S.ListInfo>
                        <div>
                            <span>대표태그</span>
                            <span>27,500</span>
                        </div>
                        <p>조이조이</p>
                        <p>[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col...</p>
                    </S.ListInfo>
                </S.ListItems>
                })}
            </S.List>
        </S.Wrapper>
    )
}