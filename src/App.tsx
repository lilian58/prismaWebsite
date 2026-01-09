import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Accueil from "./page/Accueil";
import ActivitesSocioeconomiques from "./page/ActivitesSocioeconomiques";
import Actualites from "./page/Actualites";
import BienEtreFemme from "./page/BienEtreFemme";
import FormationJeunes from "./page/FormationJeunes";
import Projets from "./page/Projets";
import Realisations from "./page/Realisations";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout currentPageName="Accueil"><Accueil /></Layout>} />
        <Route path="/ActivitesSocioeconomiques" element={<Layout currentPageName="ActivitesSocioeconomiques"><ActivitesSocioeconomiques /></Layout>} />
        <Route path="/actualites" element={<Layout currentPageName="Actualites"><Actualites /></Layout>} />
        <Route path="/BienEtreFemme" element={<Layout currentPageName="BienEtreFemme"><BienEtreFemme /></Layout>} />
        <Route path="/FormationJeunes" element={<Layout currentPageName="FormationJeunes"><FormationJeunes /></Layout>} />
        <Route path="/projets" element={<Layout currentPageName="Projets"><Projets /></Layout>} />
        <Route path="/realisations" element={<Layout currentPageName="Realisations"><Realisations /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
