import { Header, MainContainer, CreateContain } from "./Components";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <AnimatePresence mode="wait">
    {/* <AnimatePresence exitBeforeEnter> */}
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContain />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
