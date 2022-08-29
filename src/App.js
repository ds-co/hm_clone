/**
 * ToDo 1. 전체상품페이지, 로그인, 상품상세페이지
 * ToDo 1-1. 전체상품페이지, 로그인, 상품상세페이지
 * ToDo 2. 전체 상품페이지 : 전체 상품 볼 수 있음
 * ToDo 3. 로그인 버튼 클릭 : 로그인 페이지 등장
 * ToDO 4. 상품디테일을 눌렀으나, 로그인이 안 된 경우 로그인 페이지 먼저 등장
 * ToDo 5. 로그아웃 버튼 클릭 : 로그아웃
 * ToDO 6. 로그아웃 : 상품 디테일 페이지를 볼 수 없고 다시 로그인 페이지 등장
 * ToDo 7. 상품 검색 가능
 *
 * npx json-server --watch db.json --port 3004
 * npm start
 */

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  let [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
