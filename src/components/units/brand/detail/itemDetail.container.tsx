import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DetailUI from "./itemDetail.presenter";
import { TOGGLE_PICK, FETCH_USED_ITEM } from "./itemDetail.queries";

export default function Detail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.itemId)
    }
  });

  const [togglePick] = useMutation(TOGGLE_PICK, {
    variables: { useditemId: String(router.query.itemId) }
  });

  const MoveToproductEdit = () => {
    router.push(`/brand/${router.query.itemId}/edit`);
  };

  return (
    <DetailUI
      data={data}
      MoveToproductEdit={MoveToproductEdit}
      togglePick={togglePick}
    />
  );
}
