import { resultsContext, useResultsContext } from "./Context/ResultsContext";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Results from "./Pages/Results";

function App() {
  const resultsContextExport = useResultsContext();

  return (
    <resultsContext.Provider value={resultsContextExport}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </resultsContext.Provider>
  )
}

export default App 
