import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import FavouriteIcon from "../icons/FavouriteIcon";
import BasketIcon from "../icons/BasketIcon";
import { IconContext } from "react-icons";

const ProductCard = ({ details }) => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  const url = "/product/" + details.id;

  const handleClick = () => {
    navigate(url);
  };

  const style = {
    width: "350px",
  };
  return (
    <div className="card p-1 m-2" style={style}>
      <div className="card-body">
        <div className="card-title d-flex justify-content-between">
          <span>{details.name}</span>
          <span>{details.type}</span>
        </div>
        <img className="card-img-top" alt={details.name} />
        <div className="card-title d-flex justify-content-between">
          <span>{details.location}</span>
          {store.token ? (
            <span>
              {details.price} €/{details.unit}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              {" "}
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-warning"
              >
                Details
              </button>
            </div>
            <div className="col">
              <IconContext.Provider
                value={{ className: "shared-class", size: 25 }}
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