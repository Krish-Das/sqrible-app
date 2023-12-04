import Footer from "./_component/footer";
import Hero from "./_component/hero";
import Navbar from "./_component/navbar";

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      <main className="flex-1 p-3">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
