import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import DetailUI from "./itemDetail.presenter";

import { TOGGLE_PICK, FETCH_USED_ITEM, FETCH_PICK } from "./itemDetail.queries";

export default function Detail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.itemId)
    }
  });

  const { data: togglePickedData } = useQuery(FETCH_PICK, {
    variables: {
      search: "",
      page: 0
    }
  });

  const [isActive, setIsActive] = useState(false);

  const [togglePick] = useMutation(TOGGLE_PICK, {
    variables: { useditemId: String(router.query.itemId) }
  });

  const MoveToproductEdit = () => {
    router.push(`/brand/${router.query.itemId}/edit`);
  };

  const onClickTogglePick = async () => {
    // console.log("상품ID:", router.query.itemId)
    console.log("pick:", togglePickedData);
    try {
      const result = await togglePick({
        variables: {
          useditemId: String(router.query.itemId)
        }
      });
      console.log(result);
      setIsActive((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <DetailUI
      lat={data?.fetchUseditem?.useditemAddress?.lat}
      lng={data?.fetchUseditem?.useditemAddress?.lng}
      address={data?.fetchUseditem?.useditemAddress?.address}
      data={data}
      // togglePickedData={togglePickedData}
      isActive={isActive}
      MoveToproductEdit={MoveToproductEdit}
      onClickTogglePick={onClickTogglePick}
    />
  );
}
