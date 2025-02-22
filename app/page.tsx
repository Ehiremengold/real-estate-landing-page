import Header from "./components/Header";
import FindYour from "./sections/FindYour";
import Footer from "./sections/Footer";
import GlobalReach from "./sections/GlobalReach";
import RecentlyAdded from "./sections/RecentlyAdded";

export default function Home() {
  return (
    <>
      <Header />
      <GlobalReach />
      <RecentlyAdded />
      <FindYour />
      <Footer />
    </>
  );
}
