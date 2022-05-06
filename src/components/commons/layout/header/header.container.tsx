import { useMutation } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import HeaderUI from "./header.presenter";
import { LOGOUT_USER } from "./header.queries";
import { Modal } from "antd";

export default function Header() {
  const { userInfo } = useContext(GlobalContext);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogout = () => {
    try {
      logoutUser();
      localStorage.setItem("userInfo", JSON.stringify(""));
      localStorage.setItem("accessToken", "");

      Modal.info({
        content: "로그아웃 되었습니다",
        onOk() {
          window.location.replace("/main");
        },
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return <HeaderUI userInfo={userInfo} onClickLogout={onClickLogout} />;
}
