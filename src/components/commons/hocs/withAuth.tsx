import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const withAuth = (Component) => (props) => {
  // 타입스크립트는 generic 배우고 적용해줄 예정!
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.warning({
        content: "회원전용 페이지입니다",
        onOk() {
          router.push("/main");
        },
      });
    }
  }, []);

  return <Component {...props} />;
};
export default withAuth;
