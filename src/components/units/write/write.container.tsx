import { useState } from "react";
import WriteUI from "./write.presenter";

// export const WriteContext = createContext<IWriteContext>({})

export default function Write() {
  const [images, setImages] = useState(["", ""]);
  // const [image, setImage] = useState<IWrite | string[] >(["",""])

  const onChangeImages = (image: string, index: number) => {
    const newImages = [...images];
    newImages[index] = image;
    setImages(newImages);
    console.log("image:", newImages);
  };

  return (
    // <WriteContext.Provider value={value}>
    <WriteUI onChangeImages={onChangeImages} images={images} />
    // </WriteContext.Provider>
  );
}
