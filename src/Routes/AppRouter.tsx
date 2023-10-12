import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Subscribed from "../Components/Subscribed";
import Newsletter from "../Components/Newsletter";
import { useState } from "react";

const AppRouter = () => {
    const [email, setEmail] = useState<string>();

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Newsletter setEmail={setEmail} email={email} />}
                />
                <Route
                    path="/subscribed"
                    element={<Subscribed email={email} />}
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;
