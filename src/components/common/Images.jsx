import React, { useContext } from "react";
import { ImageContext } from "../../store/ImageContext";
import Image from "./Image";
import Skeleton from "./Skeleton";

const Images = () => {
  const { isLoading, imageList, searchQuery, favoriteList } = useContext(ImageContext);
  return (
    <>
      {window.location.pathname.includes("/favorites") ? (
        <h1 className="mt-8 font-bold text-2xl max-w-7xl mx-auto text-white">
          Favorite Images
        </h1>
      ) : (
        <h1 className="mt-8 font-bold text-2xl max-w-7xl mx-auto text-white">
          Results for{" "}
          <span className="capitalize">{searchQuery || "Cars"}</span>
        </h1>
      )}
      {window.location.pathname.includes("/favorites") ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 my-8 max-w-7xl mx-auto">
          {isLoading ? (
            <Skeleton item={10} />
          ) : favoriteList && favoriteList.length ? (
            favoriteList.map((data, key) => <Image key={key} data={data} />)
          ) : (
            <h1 className="font-bold text-2xl max-w-7xl mx-auto text-white">
              No Data
            </h1>
          )}
        </div>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 my-8 max-w-7xl mx-auto">
          {isLoading ? (
            <Skeleton item={10} />
          ) : (
            imageList.map((data, key) => <Image key={key} data={data} />)
          )}
        </div>
      )}
    </>
  );
};

export default Images;
