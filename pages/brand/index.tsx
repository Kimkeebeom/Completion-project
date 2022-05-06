import withAuth from "../../src/components/commons/hocs/withAuth";
import BestItems from "../../src/components/units/brand/best/bestItems.container";
import styled from "@emotion/styled";
import ItemsList from "../../src/components/units/itemsList/itemsList.container";
import { useRouter } from "next/router";

const Wrap = styled.div`
  width: 95%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button``;

export function BrandPage() {
  const router = useRouter();
  return (
    <Wrap>
      <BestItems />
      <Button onClick={() => router.push("/brand/new")}>상품 등록</Button>
      <hr />
      <ItemsList isMain={false} />
    </Wrap>
  );
}

export default withAuth(BrandPage);
