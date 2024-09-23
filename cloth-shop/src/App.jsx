import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

//*******************************//////Pages////********************************************************************* */
import Header from './Main-component/Header/Header'
import Main from './Main-component/Main'
import Form from './Form-Component/Form.jsx'
import Men from './Men_component/Men'
import Menshow1 from './Men_component/Product/Menshow1.jsx'
import Navi from './Main-component/Navi.jsx'
import Women from './Women_component/Women'
import Womenshow1 from './Women_component/Product_show/Womenshow1.jsx'
import Children from './Chilren_component/Children'
import Childshow1 from './Chilren_component/Product/Childshow1.jsx';
import CollectionPage from '../src/Collection_component/CollectionPage.jsx';
import Brands from './brands_component/Brands.jsx';
import HolyDay from './HolyDay/HolyDay.jsx';
import Sport from './Sport/Sport.jsx';
import Toppage from './Top/Toppage.jsx';
import Login from './Form-Component/Login.jsx';
import Footer from './Main-component/Footer/Footer.jsx';
import Page404 from './404/Page404.jsx';

//**********************providerContext**************************************************************** */
import Productprovider from './productcontext.jsx/Productcontext.jsx';
import Basketprovider from './basket/Basketcontext.jsx';
import SearchResultsPage from './search/SearchResultsPage .jsx';
import Searchprovider from './search/Searchcontext.jsx'
import TimeAndScrollcontext from "../src/Time&Scrollcontext/TimeAndScrollcontext.jsx"
//************************************************************************************************************** */

function App() {
  return (
    <>
      <Productprovider>
        <Basketprovider>
          <Searchprovider>
            <TimeAndScrollcontext>
              <Navi />
              <Routes>
                <Route path='/home' index element={<Main />} />
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/*' element={<Page404 />} />
                <Route path="/form" element={<Form />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Men" element={<Men />} />
                <Route path="/menshow1/:id" element={<Menshow1 />} />
                <Route path="/Women" element={<Women />} />
                <Route path="/Womenshow1/:id" element={<Womenshow1 />} />
                <Route path="/children" element={<Children />} />
                <Route path="/Childshow1/:id" element={<Childshow1 />} />
                <Route path='/CollectionPage' element={<CollectionPage />} />
                <Route path='/Brands' element={<Brands />} />
                <Route path='/HolyDay' element={<HolyDay />} />
                <Route path='/sport' element={<Sport />} />
                <Route path='/toppage' element={<Toppage />} />
                <Route path="/search" element={<SearchResultsPage />} />
              </Routes>
              <Footer />
            </TimeAndScrollcontext>
          </Searchprovider>
        </Basketprovider>
      </Productprovider >
    </>
  )
}

export default App;
