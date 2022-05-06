import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM } from "../../../../src/components/units/brand/detail/itemDetail.queries";
import Write from "../../../../src/components/units/write/write.container";

export default function ProductEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.itemId) }
  });

  return <Write isEdit={true} data={data} />;
}
