// App.js or wherever you are rendering these components
import React from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import CurrentEvents from './components/CurrentEvents';
import Team from './components/Team';
import Contribute from './components/Contribute';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Introduction />
            <div className="content-row">
                <CurrentEvents />
                <Team />
            </div>
            <Contribute />
            <Footer />
        </div>
    );
}

export default App;
