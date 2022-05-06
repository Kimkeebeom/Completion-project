import ItemsUnit from "../itemUnit/itemsUnit.container";
import * as L from "./itemsList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function ItemsListUI(props) {
  return (
    <>
      {props.isMain && (
        <L.List>
          {props.data?.fetchUseditems.map((el, index) => {
            if (index < 8) return <ItemsUnit el={el} />;
            else return "";
          })}
        </L.List>
      )}

      {!props.isMain && (
        <>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={true}
          >
            <L.List>
              {props.data?.fetchUseditems.map((el, index) => (
                <>
                  <ItemsUnit el={el} />
                </>
              ))}
            </L.List>
          </InfiniteScroll>
        </>
      )}
    </>
  );
}
