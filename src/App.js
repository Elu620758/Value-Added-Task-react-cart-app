
import "./App.css";
import { CartProvider } from "./components/CartContext";
import Route from './components/routes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartProvider>
          <Route />
        </CartProvider>
      </header>
    </div>
  );
}

export default App;
