import withAuth from "../../../src/components/commons/hocs/withAuth";
import Detail from "../../../src/components/units/brand/detail/itemDetail.container";

export function DetailPage() {
  return <Detail />;
}

export default withAuth(DetailPage);
