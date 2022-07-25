import "../assets/css/App.css";
import Hero from "../components/Hero";
import { ViewAll } from "../components/ViewAll";
import { Women } from "../components/Women";
import { Men } from "../components/Men";
import { Electronics } from "../components/Electronics";
import { Jewelry } from "../components/Jewelry";

function App() {
  return (
    <div className="app">
      <Hero></Hero>
      <ViewAll></ViewAll>
      <div className="categories">
        <Women></Women>
        <Men></Men>
        <Electronics></Electronics>
        <Jewelry></Jewelry>
      </div>
    </div>
  );
}

export default App;
