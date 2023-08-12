import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Головна",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Наші проєкти",
    path: "/projects",
    icon: <FaIcons.FaSitemap />,
  },
  {
    title: "Про нас",
    path: "/about",
    icon: <FaIcons.FaBook />,
  },
  {
    title: "Наш телеґрам-бот",
    path: "https://t.me/PhonkCheckBot",
    icon: <FaIcons.FaTelegram />,
  },
];