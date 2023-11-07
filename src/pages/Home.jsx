import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Background from "../components/Background.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <Background/>
        <Outlet />
    </div>
  );
}
