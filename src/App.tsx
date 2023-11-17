import classes from "./App.module.scss";
import Header from "./components/header/Header.tsx";
import {useAppSelector} from "./hooks/redux.ts";

import HomePage from "./pages/HomePage.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CountryPage from "./pages/CountryPage.tsx";



function App() {
    const theme = useAppSelector(state => state.theme.theme)
  return (
      <BrowserRouter>
        <div className={theme==='light'?[classes.App, classes.light].join(' '):[classes.App, classes.dark].join(' ')}>
            <Header/>
            <Routes>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/home/:cca3'} element={<CountryPage/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/home" replace />}
                />
            </Routes>
        </div>
      </BrowserRouter>

  )
}

export default App
