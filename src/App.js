import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import KittieKharacteristics from "./components/KittieKharacteristics";
import SelectABreed from "./components/SelectABreed";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div class="card border-dark mx-auto my-4 shadow">
        <section class="card-body">
          <section class="text-center">
            <section>
              <img
                class="card-img-top img-fluid rounded"
                id="cat_image"
                src="./imgs/sadkitten.jpg"
                alt="A Cute Kitten"
              />
            </section>
          </section>
        </section>
        <SelectABreed />
        <KittieKharacteristics />
      </div>
      <Footer />
    </div>
  );
}
