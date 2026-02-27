import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import WorkWithMePage from "./pages/WorkWithMePage";
import ForHiringManagersPage from "./pages/ForHiringManagersPage";
import AIPage from "./pages/AIPage";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="work-with-me" element={<WorkWithMePage />} />
          <Route path="for-hiring-managers" element={<ForHiringManagersPage />} />
          <Route path="ai" element={<AIPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
