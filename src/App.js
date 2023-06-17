import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" index element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
