import React, { useContext } from "react";
import Hero from "./scenes/dashbord/Hero.jsx";
import Customers from "./scenes/dashbord/Customers.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./scenes/dashbord/Order.jsx";
import Employees from "./scenes/dashbord/Employees.jsx";
import Calendar from "./scenes/dashbord/Calendar.jsx";
import Kanban from "./scenes/dashbord/Kanban.jsx";
import Editor from "./scenes/dashbord/Editor.jsx";
import LineChart from "./scenes/dashbord/LineChart.jsx";
import Areachart from "./scenes/dashbord/Areachart.jsx";
import Graph from "./scenes/dashbord/Graph.jsx";
import Piechart from "./scenes/dashbord/Piechart.jsx";
import Navbar from "./scenes/global/Navbar.jsx";
import Sidebar  from "./scenes/global/Sidebar.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <div className={`flex`}>
        <Navbar />
        <div className="w-full bg-amber-800">
          <Sidebar />
          <main className="">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/line" element={<LineChart />} />
          <Route path="/area" element={<Areachart />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/piechart" element={<Piechart />} />
        </Routes>
      </main>
        </div>
      </div>
    
    </BrowserRouter>
  );
};

export default App;
