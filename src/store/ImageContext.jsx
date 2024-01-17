import React, { createContext, useState, useEffect } from "react";
import imageRest from "../api/imageRest";
export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  
  const [imageList, setImageList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteList, setFavList] = useState([]);
  const [bgImage, setBgImage] = useState('https://source.unsplash.com/random/1600x900/?moon');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = (searchValue) => {
    setLoading(true);
    let query = searchValue ? searchValue : "cars";
    let url = `search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
    imageRest
      .fetchImages(url)
      .then((resp) => {
        let response = resp.results ? [...resp.results] : [];
        response.forEach((el) => {
          favoriteList.forEach(fl => {
            if (el.id === fl.id) {
              el.isFav = true;
            }
          })
        });
        setImageList(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const setFavoriteList = (data) => {
    let list = [...favoriteList];
    let selectedImage = imageList.find(img => img.id === data.id);
    if (!selectedImage) {
      return;
    }
      if (selectedImage.isFav) {
        selectedImage.isFav = false;
        list = favoriteList.filter((dl) => {
          if (dl.id !== selectedImage.id) {
            return dl;
          }
        });
        setFavList(list);
      } else {
        selectedImage.isFav = true;
        list.push(selectedImage);
        setFavList(list);
      }
  }

  return (
    <ImageContext.Provider
      value={{
        imageList,
        isLoading,
        loadData: (key) => loadData(key),
        setSearchQuery,
        searchQuery,
        favoriteList,
        setFavoriteList: (data) => setFavoriteList(data),
        bgImage,
        setBgImage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
