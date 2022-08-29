import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/ds-co/hm_clone/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-detail-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="product-info">{product?.title}</div>
          <div className="product-info">{product?.price}</div>
          <div className="choice">
            {product?.choice == true ? "Conscious Choice" : ""}
          </div>
          <Form.Select size="sm" className="drop-down">
            <option>사이즈 선택</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
          </Form.Select>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/esm/Container";
// const ProductDetail = () => {
//   const [showMeProduct, setShowMeProduct] = useState([]);

//   const getProductDetail = async () => {
//     let url = `http://localhost:3004/products`;
//     let res = await fetch(url);
//     let data = await res.json();
//     setShowMeProduct(data);
//   };
//   useEffect(() => {
//     getProductDetail();
//   }, []);
//   const { id } = useParams();

//   function isProduct(element) {
//     if (element.id == id) {
//       return true;
//     }
//   }
//   const product = showMeProduct.find(isProduct);

//   return (
//     <div className="container">
//       <div className="container">
//         <div className="product-img">
//           <img src={product?.img} />
//         </div>
//         <div className="container">
//           <div className="mb-2">{product?.title}</div>
//           <div className="mb-2">￦{product?.price}</div>
//           <div className="mb-2">
//             {product?.choice == true ? "Conscious Choice" : ""}
//           </div>
//           <Form.Select size="sm" className="w-25 mt-3">
//             <option>사이즈 선택</option>
//             <option value="1">S</option>
//             <option value="2">M</option>
//             <option value="3">L</option>
//           </Form.Select>
//           <button className="w-50 btn btn-dark mt-3">버튼</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
