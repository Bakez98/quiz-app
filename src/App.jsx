import NavBar from './Components/NavBar'
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import { FetchQuestions } from './Redux/quizReducer/actions';
// import { useEffect } from 'react';


// to run the server for fetching data from it :
//npx json-server --watch data/db.json --port 7000

function App() {

  const ComputerQuiz = lazy(() => import('./Pages/ComputerQuiz/index'));
  const HistoryQuiz = lazy(() => import('./Pages/HistoryQuiz/index'));
  const MathQuiz = lazy(() => import('./Pages/MathQuiz/index'));
  const PhysQuiz = lazy(() => import('./Pages/PhysQuiz/index'));
  const SportsQuiz = lazy(() => import('./Pages/SportsQuiz/index'));

  return (
    <div className="App">
      <NavBar/>
      <Suspense fallback={<div>Loading ......</div>}>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/ComputerQuiz" element={<ComputerQuiz />} />
        <Route path="/HistoryQuiz" element={<HistoryQuiz />} />
        <Route path="/MathQuiz" element={<MathQuiz />} />
        <Route path="/PhysQuiz" element={<PhysQuiz />} />
        <Route path="/SportsQuiz" element={<SportsQuiz />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
