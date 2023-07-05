import Nav from "./components/Nav";
import Card from "./components/Card";
import verse from "../verse";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Nav />

      <div className="cardContainer">
       { verse.map(verse => {
         return <Card key={verse.id} chapter={verse.chapter} chapter_name={verse.chapter_name} verse={verse.verse} text={verse.text} />
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
