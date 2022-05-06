import * as I from "./itemsUnit.styles";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function ItemsUnitUI(props) {
  const router = useRouter();
  return (
    <I.ListItems key={uuidv4()}>
      <div>
        <img
          src={
            props.el.images[0]
              ? `https://storage.cloud.google.com/${props.el.images[0]}`
              : `/images/wallpaperbetter.jpg`
          }
          onClick={() => router.push(`/brand/${props.el._id}`)}
        />
        <img
          className="heart"
          src="/images/heart.svg"
          onClick={() => alert("찜!")}
        />
      </div>
      <I.ListInfo>
        <div>
          <span>{props.el.tags}</span>
          <span>{props.el.price}</span>
        </div>
        <p>{props.el.seller.name}</p>
        <p>
          [{props.el.remarks}] {props.el.name}
        </p>
      </I.ListInfo>
    </I.ListItems>
  );
}
