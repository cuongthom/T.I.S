import React from "react";
import { BsPersonFill, BsCart2, BsSuitHeart, BsJustify } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import useWindowSize from "../../hook/useWindowSize";
function Header() {
  const isMobile = useWindowSize(740);
  return (
    <div className="container font-mono bg bg-red-300 w-full ">
      <div className="row  ">
        {isMobile ? (
          <div className="col dropdown text-start justify-center flex column-layout-icon">
            <button
              className="icon"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsJustify />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Trang chủ
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sản Phẩm
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Giới thiệu
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="col text-end py-4 pl-20 padding ">
            <h1 className="text-5xl text-start pd-tis">T.I.S</h1>
          </div>
        )}
        {isMobile ? (
          <div className="col justify-center w-50 py-4 ">
            <h1 className="text-5xl text-start text">T.I.S</h1>
          </div>
        ) : (
          <div className=" col-5 flex my-7">
            <p className="text-2xl">Trang chủ</p>
            <p className="text-2xl px-10">Sản Phẩm</p>
            <p className="text-2xl">Giói thiệu</p>
          </div>
        )}

        <div className="col flex justify-end my-8 column-layout-icon">
          <div className=" justify-center">
            <div className="flex pd-tis">
              <div className=" text-2xl px-2 column-layout-items">
                <GoSearch />
              </div>
              <div className=" text-2xl px-2 column-layout-items">
                <BsSuitHeart />
              </div>
              <div className=" text-2xl px-2 column-layout-items">
                <BsCart2 />
              </div>
              <div className=" text-3xl px-2 column-layout-items none">
                <BsPersonFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;
