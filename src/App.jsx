import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutCompany from './components/AboutCompany';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      <AboutCompany />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;