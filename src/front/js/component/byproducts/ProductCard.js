import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import FavouriteIcon from "../icons/FavouriteIcon";
import BasketIcon from "../icons/BasketIcon";
import { IconContext } from "react-icons";
import thinkay from "../../../img/thinkay.jpg";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiPinDistanceLine } from "react-icons/ri";

const ProductCard = ({ details }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const url = "/product/" + details.id;

  const handleClick = () => {
    navigate(url);
  };

  return (
    <div className="product-card card p-1 text-dark bg-gradient border border-success border-3">
      <div className="card-body">
        <div className="card-title d-flex justify-content-between">
          <span className="fw-bolder">{details.name}</span>
          <span>{details.type}</span>
        </div>
        <img
          src={thinkay}
          className="card-img-top img-thumbnail shadow my-2"
          alt={details.name}
        />
        <div className="card-title d-flex justify-content-between">
          <span>
            <MdOutlineLocationOn />
            {details.location}
          </span>
          {store.token ? (
            <span>
              {details.price} €/{details.unit}
            </span>
          ) : (
            ""
          )}
        </div>
        {details.distance && (
          <div>
            <RiPinDistanceLine /> {details.distance} km
          </div>
        )}
        <div className="container">
          <div className="row">
            <div className="col">
              {details.stock > 0 ? (
                ""
              ) : (
                <span className="text-error "> Out of Stock</span>
              )}
            </div>
            <div className="col">
              {" "}
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-success btn-custom"
              >
                Details
              </button>
            </div>
            <div className="col">
              <IconContext.Provider
                value={{ className: "shared-class", size: 30 }}
              >
                <span className="d-flex justify-content-between">
                  <FavouriteIcon product={details} />
                  <BasketIcon product={details} />
                </span>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = { details: PropTypes.object };

export default ProductCard;
