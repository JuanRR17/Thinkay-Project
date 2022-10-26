import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import { BsCart, BsFillCartFill } from "react-icons/bs";

const BasketIcon = ({ product }) => {
  const { store, actions } = useContext(Context);

  const basket_prod_ids = store.basket.map((b) => {
    return b.product_id;
  });

  const basket_items_userid = store.basket.map((item) => {
    return item.product.user_id;
  })[0];

  const handleItemInBasket = (elem) => {
    if (!basket_prod_ids.includes(elem.id)) {
      if (!basket_items_userid || basket_items_userid === elem.user_id) {
        actions.add_to_basket(store.data.id, elem.id);
      }
    } else {
      const getBasketProd = store.basket.filter((b) => {
        return b.product_id == elem.id;
      });
      actions.delete_from_basket(getBasketProd[0].id);
    }
  };

  return (
    <>
      {store.token && product.user_id !== store.data?.id ? (
        <span
          type="button"
          onClick={() => handleItemInBasket(product)}
          className="text-success icon"
        >
          {basket_prod_ids.includes(product.id) ? (
            <BsFillCartFill />
          ) : (
            <BsCart />
          )}
        </span>
      ) : null}
    </>
  );
};

BasketIcon.propTypes = { product: PropTypes.object };

export default BasketIcon;
