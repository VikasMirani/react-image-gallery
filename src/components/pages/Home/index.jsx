import React, { Fragment } from "react";
import SearchField from '../../common/SearchField';
import Images from '../../common/Images';

import "./HomeStyle.css";

const Home = () => {
  return (
    <Fragment>
      <SearchField />
        <Images />
    </Fragment>
  );
};

export default Home;
