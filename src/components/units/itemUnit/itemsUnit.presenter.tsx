import * as I from "./itemsUnit.styles";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { ReactChild, ReactFragment, ReactPortal } from "react";

export default function ItemsUnitUI(props: {
  el: {
    images: any[];
    _id: any;
    tags: boolean | ReactChild | ReactFragment | ReactPortal;
    price: boolean | ReactChild | ReactFragment | ReactPortal;
    seller: { name: boolean | ReactChild | ReactFragment | ReactPortal };
    remarks: boolean | ReactChild | ReactFragment | ReactPortal;
    name: boolean | ReactChild | ReactFragment | ReactPortal;
  };
}) {
  const router = useRouter();
  console.log(props.el.images);
  return (
    <I.ListItems key={uuidv4()}>
      <div>
        <div></div>
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
