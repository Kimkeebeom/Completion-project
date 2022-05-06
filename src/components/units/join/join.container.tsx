import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import JoinUI from "./join.presenter";
import { CREATE_USER } from "./join.queries";

export default function Join() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const [createEmail, setCreateEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [createName, setCreateName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [errorCheckPassword, setErrorCheckPassword] = useState("");

  const [isActive, setIsActive] = useState(false);

  const onChangeEmail = (event) => {
    setCreateEmail(event.target.value);

    if (event.target.value !== "") {
      setErrorEmail("");
    }
    const CheckEmail = /^\w[0-9a-zA-Z]+@\w[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    if (!CheckEmail.test(event.target.value)) {
      setErrorEmail("이메일 형식에 올바르지 않습니다");
    }

    if (
      CheckEmail.test(event.target.value) &&
      createName &&
      createPassword &&
      checkPassword
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeName = (event) => {
    setCreateName(event.target.value);

    if (event.target.value !== "") {
      setErrorName("");
    }
    const CheckName = /^[0-9a-zA-Z가-힇]{4,8}$/;
    if (!CheckName.test(event.target.value)) {
      setErrorName("4~8자 사이로 입력하세요");
    }

    if (
      createEmail &&
      CheckName.test(event.target.value) &&
      createPassword &&
      checkPassword
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setCreatePassword(event.target.value);

    if (event.target.value !== "") {
      setErrorPassword("");
    }

    const CheckPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/;
    if (!CheckPassword.test(event.target.value)) {
      setErrorPassword("6~10자 영문, 숫자로 입력하세요");
    }

    if (
      createEmail &&
      createName &&
      CheckPassword.test(event.target.value) &&
      checkPassword
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeCheckPassword = (event) => {
    setCheckPassword(event.target.value);

    if (event.target.value !== "") {
      setErrorCheckPassword("");
    }

    if (createPassword !== event.target.value) {
      setErrorCheckPassword("비밀번호가 일치하지 않습니다.");
    }

    if (
      createEmail &&
      createName &&
      createPassword &&
      createPassword === event.target.value
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickCreateButton = async () => {
    // const { email, password, name } = data;
    // console.log(data);

    // if (email && password && name) {
    //   setIsActive(true);
    // }
    console.log("왜 안돼?ㅡㅡ");
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: createEmail,
            password: createPassword,
            name: createName
          }
        }
      });
      Modal.success({ content: "회원가입이 완료되었습니다." });
      router.push("/login");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickCancelButton = () => {
    router.push("/main");
  };

  return (
    <JoinUI
      isActive={isActive}
      errorEmail={errorEmail}
      errorName={errorName}
      errorPassword={errorPassword}
      errorCheckPassword={errorCheckPassword}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onClickCreateButton={onClickCreateButton}
      onClickCancelButton={onClickCancelButton}
    />
  );
}
