import './App.css';
import Section from './components/Section';

  const Product = [
    {
      img: <img src="https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"/>,
      name: "cocooil",
      preis: "30$",
    },
    {
      img: <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 "/>,
      name: "polaroid",
      preis: "60$"
    },
    {
      img: <img src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>,
      name: "Taycan",
      preis: "20$"
    },
  ]

function App() {
  return (
    <div className="App">
    <h1>Supershop</h1>
    <section>
    {Product.map((elt)=>
      <Section
            img={elt.img}
            name={elt.name}
            preis={elt.model}
      />
    )}
    </section>
    </div>
  );
}

export default App;
