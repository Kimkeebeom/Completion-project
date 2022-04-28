import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, createContext, useRef, useState } from "react";
import { IMutation, IMutationUploadFileArgs } from "../../../commons/types/generated/types";
// import { IWriteContext } from "./write.types";
import WriteUI from "./write.presenter";

// export const WriteContext = createContext<IWriteContext>({})

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`

export default function Write(){
    const fileRef = useRef<HTMLInputElement>(null)

    const [uploadFile] = useMutation<
        Pick<IMutation, 'uploadFile'>,
        IMutationUploadFileArgs
        >(UPLOAD_FILE)
    const [image, setImage] = useState("","")

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        console.log(file)
        try {
            const result = await uploadFile({
                variables: {
                    file: file // shorthandPorperties 가능(key와 value값이 같을 때)
                }
            })
            console.log(result.data?.uploadFile.url)
            setImage(result.data?.uploadFile.url)
        } catch (error) {
            alert(error.message)
        }
    }

    const onClickImage = () => {
        fileRef.current?.click();
    }

    // const value = { 
    //     onChangeFile
    // }

    return (
        // <WriteContext.Provider value={value}>
            <WriteUI
                onChangeFile={onChangeFile}
                image={image}
                fileRef={fileRef}
                onClickImage={onClickImage} index={0}     
           />
        // </WriteContext.Provider>
    )
}