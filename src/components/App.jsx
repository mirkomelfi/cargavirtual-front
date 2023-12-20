import Album from "./Album"
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/"element={<Album />}/> 
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        
      </BrowserRouter>

    </>

  )
}