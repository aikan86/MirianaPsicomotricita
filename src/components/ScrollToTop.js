import ScrollToTop from './components/ScrollToTop'; // Assicurati che il percorso sia corretto

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Questo componente si attiverà ad ogni cambio pagina */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psicomotricita" element={<Psicomotricita />} />
        {/* ... tutte le altre rotte */}
      </Routes>
      <Footer />
    </Router>
  );
}