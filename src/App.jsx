import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
  return (
    <>
      <div className="App">
        {/* Scroll Indicator Component */}
        <ScrollIndicator
          url={"https://dummyjson.com/products?limit=100"}
          title={"React Components Showcase"}
        ></ScrollIndicator>
        {/* Also the title card */}

        {/* Accordian Component */}
        <Accordian />

        {/* Random Color Component */}
        <RandomColor />

        {/* Star Rating Component */}
        <StarRating noOfStars={10} />

        {/* Image Slider Component */}
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
      </div>
    </>
  );
}

export default App;
