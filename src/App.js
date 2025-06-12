import Header from './components/header';
import SkipBgImage from './assets/images/SkipBgImage.jpeg';
import Footer from './components/footer';
import SkipHiring from './pages/SkipHiringPage';

export default function App() {
  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1e1e1e] relative overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Background blurred orange image overlay */}
        <div
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${SkipBgImage})`,
            filter: 'blur(40px) brightness(0.4)',
            opacity: 0.3,
            zIndex: 0,
          }}
        />

        <div className="flex flex-col min-h-screen">
          <Header />
          {/* Content area */}
          <main className="flex-grow">
            <SkipHiring />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
