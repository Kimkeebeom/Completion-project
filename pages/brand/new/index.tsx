import withAuth from "../../../src/components/commons/hocs/withAuth";
import Write from "../../../src/components/units/write/write.container";

export function WritePage() {
  return <Write />;
}

export default withAuth(WritePage);
