import React, {Suspense} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from "./Frontpage"
import MyNavbar from './Navbar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Suspense fallback="I am loading">
            <MyNavbar/>
            <Routes>
              <Route index element={<Frontpage />}/>
            </Routes>
          </Suspense>
        </BrowserRouter>        
    </div>
  );
}

export default App;
