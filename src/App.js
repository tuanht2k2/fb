import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { routes } from './routes';
import Default from './components/layouts/Default';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.component;
            let Layout = Default;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
