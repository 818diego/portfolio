import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import Experience from "./pages/Experience";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
