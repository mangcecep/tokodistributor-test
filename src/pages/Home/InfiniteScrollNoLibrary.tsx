import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserServices from "./UserServices";

export default function InfiniteScrollNoLibrary() {

  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (!noData) {
        loadUserList(page);
      }
    }
  }

  useEffect(() => {
    loadUserList(page);
  }, []);

  const loadUserList = (page: any) => {
    setLoading(true);
    setTimeout(() => {
      UserServices.getList(page)
        .then((res) => {
          const newPage = page + 1;
          const newList = userList.concat(res.data);
          setUserList(newList);
          setPage(newPage);
          if (res.data.length === 0)
            setNoData(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        })
    }
      , 1500);
  }

  return (
    <div className="row">
      {userList.map((ps: any, i) =>
      (
        <div className="col-md-3 col-sm-6 col-xs-6 mt-4" key={i}>
          <div className="card-group">
            <div className="card">
              <div className="card-header">
                <Link to="#" className="d-block blur-shadow-image">
                  <img src={ps.image_uri} className="img-fluid shadow border-radius-lg" alt={ps.image_name} />
                </Link>
                <h5 className="font-weight-normal mt-3">
                  <Link to="#">{ps.product_name}</Link>
                </h5>
              </div>
              <div className="card-body">
                <p className="mb-0">Kode Produk: {ps.product_code}</p>
                <p className="mb-0">Kategori: {ps.mainmenu_name} - {ps.submenu_name}</p>
                <p className="mb-0">Variant: {ps.variant_descriptions}</p>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer d-flex">
                <p className="font-weight-normal my-auto">Rp. {ps.normal_price}</p>
                <i className="material-icons position-relative ms-auto text-lg me-1 my-auto">place</i>
                <p className="text-sm my-auto"> {ps.location}</p>
              </div>
            </div>
          </div>
        </div>
      )
      )}
      {loading ? <div className="spinner-border text-primary mx-auto" role="status">
        <span className="sr-only">Loading...</span>
      </div> : ""}
      {noData ? <div className="text-center">no data anymore ...</div> : ""}
    </div>
  );
}