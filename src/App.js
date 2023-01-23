import { AppProvider } from "./context/AppContext";
import Home from "./components/Home";

//App
function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
