// import '../styles/globals.css' // 추후에 css가 아닌 emotion으로 변경 및 적용 가능
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

// interface IUserInfo {
//   _id?: string;
//   name?: string;
//   email?: string;
//   // userPoint {
//   //   amount? : number
//   // }
// }

// interface IGlobalContext {
//   accessToken?: string;
//   setAccessToken?: Dispatch<SetStateAction<string>>;
//   userInfo?: IUserInfo;
//   setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
//   basketItem?: any;
//   setBasketItem?: any;
// }

// ()안에는 Context 초기값이 들어간다, 에러가 뜨길래 초기값에 빈 객체를 넣어줌
// export const GlobalContext = createContext<IGlobalContext>({});
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const [basketItem, setBasketItem] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({}); // 초기값은{} 비어있지만 빈객체로 타입이 추론되는것을
  // 방치하기 위해 <IUserInfo>로 타입을 알려주기!
  // const [userInfo, setUserInfo] = useState("");

  const Value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
    basketItem,
    setBasketItem,
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "");
    }

    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo") || ""));
    }
  }, []);

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={Value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
