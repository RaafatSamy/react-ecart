import React from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BsCartX } from "react-icons/bs";
import cartEmpty from "../images/cart-empty.png";

function Cart() {
  const [theme] = useThemeHook();
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <Container className="py-4 mt-5">
      <h1
        className={`${
          theme ? "text-light" : "text-light-primary"
        } my-5 text-center`}
      >
        {!isEmpty ? "Cart Products" : "Cart is Empty!"}
        {/* start try to add image */}
        {isEmpty && (
          <div style={{ width: "100%", marginTop: "20px" }}>
            <img
              src={cartEmpty}
              className="img-fluid "
              alt="cartempty"
              style={{ width: "350px", height: "350px" }}
            />
          </div>
        )}
        {/* end  */}
      </h1>
      <Row className="justify-content-center">
        <Table
          responsive="sm"
          striped
          bordered
          hover
          variant={theme ? "dark" : "light"}
          className="mb-5"
        >
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div
                      style={{
                        background: "white",
                        height: "4rem",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ padding: ".25rem" }}>
                        <img
                          src={item.image}
                          style={{ width: "2rem" }}
                          alt={item.title}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6
                      style={{
                        whiteSpace: "nowrap",
                        width: "14rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </h6>
                  </td>
                  <td>Rs. {Math.round(item.price)}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="ms-2"
                    >
                      -
                    </Button>
                    <Button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="ms-2"
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      className="ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {!isEmpty && (
          <Row
            style={{ position: "fixed", bottom: 0 }}
            className={`${
              theme ? "bg-light-black text-light" : "bg-light text-black"
            } justify-content-center w-100`}
          >
            <Col className="py-2">
              <h4>Total Price : Rs. {Math.round(cartTotal)} </h4>
            </Col>
            <Col className="p-0" md={4}>
              <Button
                variant="danger"
                className="m2"
                onClick={() => emptyCart()}
              >
                <BsCartX size="1.7rem" />
                Clear Cart
              </Button>
            </Col>
          </Row>
        )}
      </Row>
    </Container>
  );
}

export default Cart;
