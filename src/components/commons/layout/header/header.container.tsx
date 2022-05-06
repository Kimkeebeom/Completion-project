import { gql, useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import HeaderUI from "./header.presenter";
import { LOGOUT_USER } from "./header.queries";
import { Modal, Select } from "antd";
import Head from "next/head";

const CHARGE_POINT = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
    }
  }
`;

const FETCH_POINT_HISTORY = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      balance
    }
  }
`;

export default function Header() {
  const { userInfo } = useContext(GlobalContext);

  const [logoutUser] = useMutation(LOGOUT_USER);
  const [isOpen, setIsOpen] = useState(false);

  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation(CHARGE_POINT);
  const { data: pointData } = useQuery(FETCH_POINT_HISTORY, {
    variables: { page: 1 },
  });

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

  const onClickCharge = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
    if (amount) {
      payment();
    }
  };

  const handelCancel = () => {
    setIsOpen(false);
  };

  const { Option } = Select;

  function handleChange(value: number) {
    setAmount(value);
  }

  const payment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "DINGCO",
        amount: amount,
        buyer_email: userInfo?.email,
        buyer_name: userInfo?.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 중구 신당동",
        buyer_postcode: "01181",
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          // console.log(rsp.imp_uid);
          try {
            const result = await createPointTransactionOfLoading({
              variables: { impUid: rsp.imp_uid },
            });
            Modal.info({
              content: `${amount}원이 충전되었습니다`,
              onOk() {
                window.location.replace("/main");
              },
            });
            // console.log(result?.data?.createPointTransactionOfLoading);
          } catch (error) {
            Modal.error({ content: error.message });
          }
        } else {
          // 결제 실패 시 로직,
          Modal.error({
            content: "결제에 실패했습니다. 잠시 후 이용부탁드립니다",
          });
        }
      }
    );
  };

  return (
    <>
      {isOpen && (
        <Modal
          title="적립금 충전하기"
          visible={true}
          onOk={handleOk}
          onCancel={handelCancel}
        >
          충전금액{"  "}
          <Select
            placeholder="충전 금액을 선택해주세요"
            style={{ width: 200 }}
            onChange={handleChange}
          >
            <Option value={100}>100원</Option>
            <Option value={1000}>1000원</Option>
            <Option value={2000}>2000원</Option>
            <Option value={5000}>5000원</Option>
            <Option value={10000}>10,000원</Option>
          </Select>
        </Modal>
      )}

      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <HeaderUI
        userInfo={userInfo}
        pointData={pointData}
        onClickLogout={onClickLogout}
        onClickCharge={onClickCharge}
      />
    </>
  );
}
