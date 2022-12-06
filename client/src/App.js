import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment, Suspense } from 'react';
import { DefaultLayout } from './Layout';
import publicRouter from './routes';
import './GlobalStyles/GlobalStyles.scss';

function App() {
    return (
        <Suspense fallback={null}>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRouter.map((route, key) => {
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            const Page = route.component;

                            return (
                                <Route
                                    key={key}
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
        </Suspense>
    );
}

export default App;
