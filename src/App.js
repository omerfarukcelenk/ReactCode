import React from 'react';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap'

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title="Category List"></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList title="Product List"></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
