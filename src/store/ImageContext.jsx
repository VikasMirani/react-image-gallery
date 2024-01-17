import React, { createContext, useState, useEffect } from "react";
import imageRest from "../api/imageRest";
export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  
  const [imageList, setImageList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteList, setFavList] = useState([]);
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    fetchBgImage();
  }, []);

  const fetchBgImage = () => {
    let url = "https://source.unsplash.com/1600x900/?beach";
    imageRest.getBgImage(url).then(resp => {
      setBgImage(resp);
    }).catch(err => {
      console.log(err);
    });
  }

  const loadData = (searchValue) => {
    setLoading(true);
    let query = searchValue ? searchValue : "cars";
    let url = `search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
    imageRest
      .fetchImages(url)
      .then((resp) => {
        let response = resp.results ? resp.results : [];
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
    if (selectedImage.isFav) {
      selectedImage.isFav = false;
      const index = list.indexOf(selectedImage);
      list.splice(index, 1);
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
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
