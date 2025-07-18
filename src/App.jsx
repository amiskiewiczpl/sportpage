import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MedalTable from './pages/MedalTable'
import FormRanking from './pages/FormRanking'
import Country from './pages/Country'
import OlympicHopes from './pages/OlympicHopes'
import History from './pages/History'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medals" element={<MedalTable />} />
          <Route path="/ranking" element={<FormRanking />} />
          <Route path="/country/:id" element={<Country />} />
          <Route path="/hopes" element={<OlympicHopes />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </>
  )
}
