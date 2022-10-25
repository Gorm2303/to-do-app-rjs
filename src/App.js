import React, {Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Frontpage from "./Frontpage"

const Page2 = lazy(() => import("./Page2"));

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Suspense fallback="I am loading">
            <Link to="/">Home</Link> <space/>
            <Link to="page2">Page 2</Link>
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
