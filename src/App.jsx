import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <main className="bg bg-firered min-h-screen bg-[url('/images/bg-intro-mobile.png')] bg-cover px-6 sm:bg-[url('/images/bg-intro-desktop.png')]">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
