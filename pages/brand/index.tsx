import withAuth from "../../src/components/commons/hocs/withAuth";

export function BrandPage() {
  return (
    <h1>
      브랜드페이지입니다
      <p>brand</p>
    </h1>
  );
}

export default withAuth(BrandPage);
