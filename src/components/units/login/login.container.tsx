import { useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs
} from "../../../commons/types/generated/types";
import { GlobalContext } from "../../../../pages/_app";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";
import LoginUI from "./login.presenter";

interface FormValues {
  target?: any;
  Email?: string;
  Password?: string;
}

export default function loginMainPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const client = useApolloClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: FormValues) => {
    setEmail(event.target.value);

    if (event.target.value !== "") {
      setErrorEmail("");
    }
    const CheckEmail = /^\w[0-9a-zA-Z]+@\w[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    if (!CheckEmail.test(event.target.value)) {
      setErrorEmail("이메일 형식에 올바르지 않습니다");
    }

    if (CheckEmail.test(event.target.value)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);

    if (event.target.value !== "") {
      setErrorPassword("");
    }

    const CheckPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/;
    if (!CheckPassword.test(event.target.value)) {
      setErrorPassword("6~10자 영문, 숫자로 입력하세요");
    }

    if (CheckPassword.test(event.target.value)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickLogin = async () => {
    console.log("아이디: ", email);
    console.log("비밀번호 : ", password);
    try {
      const result = await loginUser({
        variables: {
          email,
          password
        }
      });
      const accessToken = result.data?.loginUser.accessToken || "";
      console.log(result.data?.loginUser.accessToken);

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      });
      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

      if (setAccessToken) setAccessToken(accessToken);
      if (setUserInfo) setUserInfo(userInfo);

      localStorage.setItem("accessToken", accessToken || "");
      localStorage.setItem("userInfo", JSON.stringify(userInfo) || "");

      console.log(localStorage.getItem("accessToken"));
      console.log(JSON.parse(localStorage.getItem("userInfo") || "{}"));

      // router.push("/main");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      isActive={isActive}
      errorEmail={errorEmail}
      errorPassword={errorPassword}
    />
  );
}
