import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Editor from "./pages/Editor";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editor/:id" element={<Editor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;