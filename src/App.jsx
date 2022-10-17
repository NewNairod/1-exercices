import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Contact from './components/contact';
import Layout from './components/layout';

function App() {

  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Layout />}>
<Route path="home" element={<Home />} />
<Route path="contact" element={<Contact />} />
</Route>
</Routes>
    </BrowserRouter>
  )
}

export default App
