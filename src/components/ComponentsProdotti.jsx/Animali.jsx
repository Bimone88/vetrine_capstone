import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsByCategory,
  addItemToCart,
  searchProducts,
} from "../../redux/actions/index";
import { Card, Button, Alert, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductForm from "../ProductForm";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import CartDropdown from "./CartDropdown";
import SearchBar from "../SearchBar";
import "../../Animali.css";
import "../../CartDropdown.css";

const Animali = () => {
  const dispatch = useDispatch();
  const displayedProducts = useSelector(
    (state) => state.products.displayedAnimali
  );
  const [cartOpen, setCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProductsByCategory("animali"));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleSearch = (searchTerm) => {
    dispatch(searchProducts(searchTerm));
  };

  return (
    <div className="animali-main-content container">
      <SearchBar onSearch={handleSearch} />
      <h1 className="animali-title">Animali</h1>
      <Alert variant="info">
        Il carrello si trova ANCHE nella pagina{" "}
        <Link to="/Prodotti">Prodotti</Link>.
      </Alert>
      <ProductForm category="animali" />
      <div className="row">
        {Array.isArray(displayedProducts) && displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div className="col-md-12 mb-4" key={product.id}>
              <Card className="animali-product-row">
                <div className="row no-gutters">
                  <div className="col-md-4 animali-product-image-col">
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      alt={product.name}
                      className="animali-product-image"
                    />
                  </div>
                  <div className="col-md-8">
                    <Card.Body className="animali-product-details">
                      <Card.Title className="animali-product-title">
                        {product.name}
                      </Card.Title>
                      <Card.Text className="animali-product-description">
                        {product.description}
                        <br />
                        Prezzo: €{product.price}
                      </Card.Text>
                      <Button
                        variant="primary"
                        className="animali-add-to-cart-button"
                        onClick={() => handleAddToCart(product)}
                      >
                        Aggiungi al Carrello
                      </Button>
                      <FaInfoCircle
                        className="animali-info-icon"
                        onClick={() => handleShowModal(product)}
                      />
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
          ))
        ) : (
          <p>Nessun prodotto trovato.</p>
        )}
      </div>
      <FaShoppingCart className="animali-cart-icon" onClick={toggleCart} />
      {cartOpen && <CartDropdown />}

      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="img-fluid"
            />
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Prezzo:</strong> €{selectedProduct.price}
            </p>
            <p>
              <strong>Venduto da:</strong> {selectedProduct.vendor}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Animali;
