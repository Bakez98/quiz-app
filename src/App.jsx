import NavBar from './Components/NavBar'
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import ProtecedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Login from './Pages/Login';




function App() {

  const ComputerQuiz = lazy(() => import('./Pages/ComputerQuiz/index'));
  const HistoryQuiz = lazy(() => import('./Pages/HistoryQuiz/index'));
  const MathQuiz = lazy(() => import('./Pages/MathQuiz/index'));
  const PhysQuiz = lazy(() => import('./Pages/PhysQuiz/index'));
  const SportsQuiz = lazy(() => import('./Pages/SportsQuiz/index'));
  const NotFound = lazy(()=> import('./Pages/NotFound/NotFound'))

  return (
    <div className="App">
      <NavBar/>
      <Suspense fallback={<div>Loading ......</div>}>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/Home" element={<ProtecedRoute element={<Home/>} />} />
        <Route path="/ComputerQuiz" element={<ProtecedRoute element={<ComputerQuiz/>} />} />
        <Route path="/HistoryQuiz" element={<ProtecedRoute element={<HistoryQuiz/>} />} />
        <Route path="/MathQuiz" element={<ProtecedRoute element={<MathQuiz/>} />} />
        <Route path="/PhysQuiz" element={<ProtecedRoute element={<PhysQuiz/>} />} />
        <Route path="/SportsQuiz" element={<ProtecedRoute element={<SportsQuiz/>} />} />
        <Route path="*" element={<NotFound />} />





      </Routes>
      </Suspense>
    </div>
  )
}

export default App
