import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../component/Home";
import Discover from "../component/pages/Discover";
import AlbumPage from "../component/pages/AlbumPage";
import ArtistPage from "../component/pages/ArtistPage";
import Favorite from "../component/pages/Favorite";
import DetailPage from "../component/DetailPage";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/discover",
      element: <Discover />,
    },
    {
      path: "/album",
      element: <AlbumPage />,
    },
    {
      path: "/artist",
      element: <ArtistPage />,
    },
    {
      path: "/favorite",
      element: <Favorite/>,
    },
    {
      path: "/song/:id",
      element: <DetailPage />,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
