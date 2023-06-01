import "./App.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import bg from "./bg0.png";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Details from "./pages/detail.js";

function App() {
  let [shoes] = useState(data);
  // console.log(shoes);
  let navigate = useNavigate(); //페이지 이동을 도와주는 것. use~이런 것들은 훅이라고 하는 데 유용한 게 들어 있는 함수 같은 것울 말한다.

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link href="#pricing">settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>
              
              <Container>
                <Row >
                  {shoes.map(function (a, i) {
                    return <div key={i} onClick={() => { navigate("/detail/" + i); }}><Content shoes={shoes[i]} i={i}/></div>;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={ <><Details shoes={shoes}/></>}/>
        {/* <Route path="*" element={<>없는 페이지에요</>} /> */}
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버들</div>}></Route>
          <Route path="location" element={<div>회사위치</div>}></Route>
        </Route>

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Content(props) {
  return (
    <Col sm>
      <img
        src={process.env.PUBLIC_URL + "/img/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

function About() {
  return( 
  <div>
    <h4>여기가 바로 about 페이지</h4>
    <Outlet></Outlet>
  </div>
  )
}

function Event(){
  return(
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
