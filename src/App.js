import React, {Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Frontpage from "./Frontpage"
import MyNavbar from './Navbar';

const Page2 = lazy(() => import("./Page2"));

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Suspense fallback="I am loading">
            <MyNavbar/>
            <Routes>
              <Route index element={<Frontpage />}/>
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </Suspense>
        </BrowserRouter>        
    </div>
  );
}

export default App;
