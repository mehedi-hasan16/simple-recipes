import Banner from "./components/Banner/Banner"
import NavBar from "./components/NavBar/NavBar"
import OurRecipes from "./components/OurRecipes/OurRecipes"


function App() {

  return (
    <div className="px-36">
      <NavBar></NavBar>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
    </div>
  )
}

export default App
