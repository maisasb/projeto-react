import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import Layout from './hoc/Layout/Layout';
import Result from './components/Result/Result';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Search}></Route>
          <Route path="/Resultados" exact component={Result}></Route>
          <Route path="/Login" exact component={Auth}></Route>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
