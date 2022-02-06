import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from '../App';
import { Container } from './RootStyle';

const Root = () => {
    return (
        <Container>
            <Router>
                <App />
            </Router>
        </Container>
    )
};
{/* <Sidebar />
<Routes>
    {
        sidebar.map(({ id, pathname, Component }) => (
            <Route key={id} path={pathname} element={<Component />} />
        ))
    }
    <Route path="*" element={<h1>404 Not Found</h1>} />
</Routes> */}

export default Root;
