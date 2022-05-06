import * as B from "./bestItems.styles";

export default function BestItemsUI(props) {
  console.log(props.data);

  return (
    <B.Wrap>
      <h1>BEST</h1>
      <B.List>
        {props.data?.fetchUseditemsOfTheBest.map((el, index) => {
          if (index < 8)
            return (
              <B.ListItems key={index}>
                <div>
                  <img
                    src="/images/wallpaperbetter.jpg"
                    onClick={() => router.push(`/brand/${el._id}`)}
                  />
                  <img
                    className="heart"
                    src="/images/heart.svg"
                    onClick={() => alert("찜!")}
                  />
                </div>
                <B.ListInfo>
                  <div>
                    <span>{el.tags}</span>
                    <span>{el.price}</span>
                  </div>
                  <p>{el.seller.name}</p>
                  <p>
                    [{el.remarks}] {el.name}
                  </p>
                </B.ListInfo>
              </B.ListItems>
            );
          else return "";
        })}
      </B.List>
    </B.Wrap>
  );
}
