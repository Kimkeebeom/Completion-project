// import { useForm } from 'react-hook-form';
// import { gql, useMutation } from '@apollo/client';
import "react-quill/dist/quill.snow.css";
import * as S from "./write.styles";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import UploadImage from "../../commons/upload/image/uploadImage.container";
// import { WriteContext } from './write.container';
// import { IMutation, IMutationCreateUseditemArgs } from '../../../commons/types/generated/types';
// const { onChangeFile } = useContext(WriteContext)

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false
});

// const CREATE_USED_ITEM = gql`
//     mutation createUseditem($createUseditemInput: CreateUseditemInput!){
//         createUseditem(createUseditemInput: $createUseditemInput){
//             _id
//             name
//         }
//     }
// `

export default function WriteUI(props) {
  // const [createUseditem] = useMutation<
  // Pick<IMutation, 'createUseditem'>,
  // IMutationCreateUseditemArgs
  // >(CREATE_USED_ITEM)

  // const {handleSubmit, setValue, trigger} = useForm({
  //     mode: "onChange",
  // })

  const handleChange = (value: string) => {
    console.log(value);
    // value값이 <p><br></p>와 같으면 빈 문자로 보여주고 아니면 value값을 보여주기
    // setValue('contents', value === '<p><br></p>' ? "" : value)

    // yup에서 값이 변경되는 것만 인지할 뿐,
    // 검증까지 못하기 때문에 react-hook-form에
    // onChange됐는지 안됐는지 알려주는 기능
    // trigger('contents')
    // }

    // const onClickSubmit = async () => {
    //     try{
    //         const result = await createUseditem({
    //             variables: {
    //                 createUseditemInput:{
    //                     name
    //                 }
    //             }
    //         })
    //         console.log("result:", result)
    //         Modal.success({content:'상품이 성공적으로 등록되었습니다.'})
    //     } catch (error) {
    //         Modal.error({content:error.message})
    //     }
  };

  return (
    <S.Wrapper>
      <div className="titleBox">
        <h1 className="title">상품 등록</h1>
      </div>
      <S.RowWrap>
        <S.Label>상품명</S.Label>
        <S.Input type="text" placeholder="상품명을 작성해주세요" />
      </S.RowWrap>

      <S.RowWrap>
        <S.Label>상품 요약</S.Label>
        <S.Input type="text" placeholder="상품요약을 작성해주세요" />
      </S.RowWrap>

      <S.RowWrap>
        <S.Label>상품 내용</S.Label>
        <div className="ReactQuill">
          <ReactQuill onChange={handleChange} />
        </div>
      </S.RowWrap>

      <S.RowWrap>
        <S.Label>판매 가격</S.Label>
        <S.Input type="number" placeholder="상품 가격을 입력해주세요" />
      </S.RowWrap>

      <S.RowWrap>
        <S.Label>태그 입력</S.Label>
        <S.Input type="tag" placeholder="#태그 #태그 #태그" />
      </S.RowWrap>

      <S.Location>
        <S.Label>브랜드 위치</S.Label>
        <S.RowWrap>
          <S.Img>
            <img src="/images/mapExample.png" />
          </S.Img>
          <S.AddressBox>
            <div>
              <input type="text" placeholder="07250" />
              <button>우편번호 검색</button>
            </div>
            <S.AddressContents>
              <S.AddressInput type="text" readOnly />
              <S.AddressInput type="text" />
            </S.AddressContents>
          </S.AddressBox>
        </S.RowWrap>
      </S.Location>

      <S.ImageBox>
        <span>사진 첨부</span>
        <div className="ImageUploadBox">
          {props.images?.map((el: string, index: number) => (
            <UploadImage
              key={uuidv4()}
              fileRef={""}
              index={index}
              images={el}
            />
          ))}
        </div>
      </S.ImageBox>

      <S.ButtonBox>
        <S.RegisButton>등록</S.RegisButton>
        <S.CancelButton>취소</S.CancelButton>
      </S.ButtonBox>
    </S.Wrapper>
  );
}
