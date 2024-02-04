import Landing from "../sections/Landing"
import Categories from "../components/Categories"
import ChosenBlog from "../sections/ChosenBlog"
import SubmitedBlog from "../sections/SubmitedBlog"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <div >

      <Landing />
      <Categories />
      <ChosenBlog />
      <SubmitedBlog />
      <Footer />


    </div>
  )
}
