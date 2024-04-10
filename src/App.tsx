import { Header } from "./components/Header"
import { SearchBox } from "./components/SearchBox"

function App() {

  return (
      <div className='h-screen bg-no-repeat bg-cover bg-center bg-[url("./assets/pokemon_background.jpg")]'>
        <Header />
        <SearchBox />
      </div>
  )
}

export default App
