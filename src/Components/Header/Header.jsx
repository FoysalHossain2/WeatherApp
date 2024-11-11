import React from "react";
import Favorite from "./Favorite";
import FavoriteModal from "./FavoriteModal";
import Logo from "./Logo";
import From from "./Search";

const Header = () => {
  return (
    <>
      <header class="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <nav class="container flex items-center justify-between py-6">
          <a href="./index.html">
            <Logo />
          </a>

          <div class="flex items-center gap-4 relative">
            <From />
            <Favorite />

            {/* <!-- Modal --> */}
            <FavoriteModal />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
