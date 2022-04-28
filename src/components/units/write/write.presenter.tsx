// import { useForm } from 'react-hook-form';
// import { gql, useMutation } from '@apollo/client';
import 'react-quill/dist/quill.snow.css';
import * as S from "./write.styles";
import dynamic from 'next/dynamic';
import { 
    ButtonHTMLAttributes, 
    ChangeEventHandler, 
    DetailedHTMLProps, 
    LegacyRef, 
    MouseEventHandler, 
    useContext } 
from 'react';
// import { WriteContext } from './write.container';
// import { IMutation, IMutationCreateUseditemArgs } from '../../../commons/types/generated/types';
// import { Modal } from 'antd';

// const { onChangeFile } = useContext(WriteContext)

const ReactQuill = dynamic( () => import('react-quill'), {
    ssr : false
})

// const CREATE_USED_ITEM = gql`
//     mutation createUseditem($createUseditemInput: CreateUseditemInput!){
//         createUseditem(createUseditemInput: $createUseditemInput){
//             _id
//             name
//         }
//     }
// `

interface IWrite{
    onChangeFile: ChangeEventHandler<HTMLInputElement>;
    onClickImage: MouseEventHandler<HTMLImageElement>;
    fileRef: LegacyRef<HTMLInputElement>;
    onClick?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    index: number
    image: [string]
}

export default function WriteUI(props: IWrite){
    // const [createUseditem] = useMutation<
    // Pick<IMutation, 'createUseditem'>,
    // IMutationCreateUseditemArgs
    // >(CREATE_USED_ITEM)

    // const {handleSubmit, setValue, trigger} = useForm({
    //     mode: "onChange",
    // })

    const handleChange = (value: string) => {
        console.log(value)
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
    }

    return (
        <S.Wrapper>
            <S.Top>상품 등록</S.Top>
            <S.Name>
                상품명
                <input type='text' placeholder='상품명을 작성해주세요' />
            </S.Name>
            <S.Summary>
                상품 요약
                <input type='text' placeholder='상품요약을 작성해주세요' />
            </S.Summary>
            <S.Contents>
                상품 내용
                <ReactQuill onChange={handleChange}/>
            </S.Contents>
            <S.Price>
                판매 가격
                <input type='number' placeholder='상품 가격을 입력해주세요'/>
            </S.Price>
            <S.Tag>
                태그 입력
                <input type='tag' placeholder='#태그 #태그 #태그'/>
            </S.Tag>
            <S.Location>
                <div>브랜드 위치</div>
                <S.LocationBody>
                    <S.Img>
                        <img src='/images/mapExample.png'/>
                    </S.Img>
                    <S.AddressBox>
                        <div>
                            <input type='text' placeholder='07250'/>
                            <button>우편번호 검색</button>
                        </div>
                        <S.AddressContents>
                            <input type='address'/>
                            <input type='address'/>
                        </S.AddressContents>
                    </S.AddressBox>
                </S.LocationBody>
            </S.Location>
            <S.ImageBox>
                <div>사진 첨부</div>
                {props.image ? (
                    <img 
                        onClick={props.onClickImage}
                        src={`https://storage.googleapis.com/${props.image}`}    
                    />
                ) : (
                    <button onClick={props.onClickImage}>
                        <>+</>
                        <>Upload</>
                    </button>
                )}
                <input type='file' ref={props.fileRef} onChange={props.onChangeFile}/>
            </S.ImageBox>
            {/* <button onClick={onClickSubmit}>등록하기</button> */}
        </S.Wrapper>
    )
}