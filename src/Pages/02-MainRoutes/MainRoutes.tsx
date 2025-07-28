import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FoodProvider } from '../../Components/FoodContext';
import HomePage from '../HomePage';
import DetailsPage from '../DetailsPage';
import SummaryPage from '../SummaryPage';
import Header from "../00-Header/Header";

import Footer from "../01-Footer/Footer";
function App() {
  return (
    <FoodProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
          <Footer />
      </Router>
    </FoodProvider>
  );
}

export default App;
