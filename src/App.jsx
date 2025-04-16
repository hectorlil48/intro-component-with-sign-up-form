import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <main className="bg bg-firered font-poppins min-h-screen bg-[url('/images/bg-intro-mobile.png')] bg-cover px-6 pt-[88px] sm:bg-[url('/images/bg-intro-desktop.png')]">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
