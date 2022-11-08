import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = (event) => {
    setShowMore(!showMore)
  }

  return (
    <div className="container-fluid p-5">
      <div className="row bg-custom text-light bg-opacity-25 p-3">
          <h1 className="display-4 font-weight-normal text-center">Think before throwing away</h1>
          <div className="row d-flex">
            <div className="col">
              <div className="p-lg-1 mx-auto my-5 justify-content-flex-start">
                <h2 className="display-6 font-weight-normal text-center">Sustainability made simple.</h2>
                <br></br>
                <h2 className="motto display-6 font-weight-normal text-center text-light">
                <em>The platform that unites industry and innovation in the framework of bioeconomy towards a circular economic model.</em>
                </h2>
              </div>
            </div>
            <div className="col">
              <img src="https://static.timesofisrael.com/www/uploads/2022/10/iStock-547150468.jpg" className="rounded-circle img-fluid pull-right" alt="Responsive image"></img>
            </div>
                
              
            </div>
          </div>

      <br></br>
      <div className="card-container row justify-content-center"> 
        <div className="card-container card-deck d-flex justify-content-center">
          <div className="card col-4">
            <div className="card-body">
              <h5 className="card-title text-center">What do we do?</h5>
              <p className="card-text text-center">We serve as a platform to connect, on one hand, companies which generate waste with the potential to be reusable, and on the other hand, companies that use this waste to produce their own product, thus returning it to the value chain.</p>
            </div>
          </div>
  <br></br>
          <div className="card col-4">
            <div className="card-body">
              <h5 className="card-title text-center">Why?</h5>
              <p className="card-text text-center">Our aim is to encourage the implementation of initiatives which give a second life to products that are discarded by other companies, thus generating benefits for both parties. <span id="dots">...</span>
              {showMore && "It is very common that companies which are developing a product following the principles of circular economy do not have the knowledge of where to find the by-products they need. We aim to serve as a link between companies and innovators, and not only this, but we also want to serve as a platform for inspiration, advice and transport. Here you can find ideas, reports, support and much more. Through this initiative we hope to contribute to a change in the economic and social model, because without centralizing and unifying information and resources    , many opportunities for cooperation are being lost. Ideas are not lacking, but action is, and now is the time."}
              </p>
              <button onClick={handleShowMore} id="myBtn">Read more</button>    
            </div>
          </div>
  <br></br>
          <div className="card col-4">
            <div className="card-body">
              <h5 className="card-title text-center">Curious about the by-products available?</h5>
              <p className="card-text text-center">Check the list!</p>
              <div className="text-center">
                <Link to="/prod_list">
                  <button className="btn btn-primary">See by-products</button>
                </Link>
              </div>
        </div>
      </div>

</div>
          <div className="card col-4">
            <div className="d-flex justify-content-center">
              {!store.token && (
                <div className="card-body">
                  <p className="card-title">Interested in joining Thinkay?</p>
                  <Link to="/signup">
                    <button className="btn btn-primary center">Sign up</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
      
          {/* 
          <div className="col-md-4">
            <p>Need inspiration? Check out our Blog to get inspired!</p>
            <Link to="/blog">
              <button className="btn btn-primary">Blog</button>
            </Link>
          </div> */}
        </div>
      </div>
    
   
  );
};
