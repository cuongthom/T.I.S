import React from "react";
import useWindowSize from "../../hook/useWindowSize";

function Shop() {
  const isMobile = useWindowSize(740);
  return (
    <div className="bg-red-300">
      <div className="w-full">
        <img
          src="../../img/1920x890_c24d5592f6354922a61c2b5a5cf546b6_masterr.jpg"
          placeholder="14/2"
        />
      </div>
      <div className="col text-4xl py-20 text-center pd-shop">
        <h2 className=" font-bold ">Cửa Hàng</h2>
      </div>
      <div className="col flex justify-center text-2xl pb-16">
        <button className="w-12 mx-2">vay</button>
        <button className="w-12 mx-2">Tee</button>
        <button className="w-12 mx-2">Polo</button>
        <button className="w-12 mx-2">jacket</button>
      </div>
      <div className="container px-12 pd-items">
        <div className="row pl-2 pr-2 padding-lr">
          <div className="col-2 bg-red-300 w-60 mx-4 my-2 w-item">
            <img src="../../../public/img/13__4__74c4de614265447f88a4458058e1503a_master.jpg"/>
          </div>
          <div className="col-2 bg-red-300 w-60 mx-4 my-2 w-item">
            <img src="../../../public/img/13__4__74c4de614265447f88a4458058e1503a_master.jpg"/>
          </div>
          <div className="col-2 bg-red-300 w-60 mx-4 my-2 w-item">
            <img src="../../../public/img/13__4__74c4de614265447f88a4458058e1503a_master.jpg"/>
          </div>
          <div className="col-2 bg-red-300 w-60 mx-4 my-2 w-item">
            <img src="../../../public/img/13__4__74c4de614265447f88a4458058e1503a_master.jpg"/>
          </div>
          <div className="col-2 bg-red-300 w-60 mx-4 my-2 w-item">
            <img src="../../../public/img/13__4__74c4de614265447f88a4458058e1503a_master.jpg"/>
          </div>
          <div className="col-2 bg-red-300 w-60 mx-4 my-2 w-item">
            <img src="../../../public/img/13__4__74c4de614265447f88a4458058e1503a_master.jpg"/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Shop;
