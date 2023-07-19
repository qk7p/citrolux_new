import { About } from "./component/About";
import { Footer } from "./component/Footer";
import { Grapefruit } from "./component/Grapefruit";
import { Header } from "./component/Header";
import { Immunity } from "./component/Immunity";
import { Slider } from "./component/Slider";
import { WhereToBuy } from "./component/WhereToBuy";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Slider />
        <Grapefruit />
        <Immunity />
        <WhereToBuy />
      </main>
      <Footer />
    </>
  );
}
