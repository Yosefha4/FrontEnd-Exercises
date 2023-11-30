// import BlogCard from "./components/BlogCard/BlogCard";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Grades from "./pages/Grades";
// import Payment from "./pages/Payment";
// import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <div className="app">
      <NavBar/>
      <Grades />
      {/* <Pricing /> */}
      {/* <Payment/> */}
      {/* <h1>Front-End Exercises</h1>

      <BlogCard
        tag="Tech"
        title="How I build web development challenges website"
        desc="If you are looking for inspiration to build your own side project"
        personImg="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        personName="Corey Lubin"
        personTime="4 h ago"
/> */}
    </div>
  );
};

export default App;
