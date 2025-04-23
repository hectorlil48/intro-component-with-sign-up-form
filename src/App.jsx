import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <main className="bg bg-firered font-poppins min-h-screen bg-[url('/images/bg-intro-mobile.png')] bg-cover px-6 pt-[88px] pb-[68px] sm:bg-[url('/images/bg-intro-desktop.png')] lg:px-8 lg:pt-[140px]">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
