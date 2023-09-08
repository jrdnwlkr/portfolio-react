import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import PageContent from './PageContent';

const renderPage = (page) => {
    switch (page) {
        case 'About':
            return <About />;
        case 'Project':
            return <Project />;
        case 'Contact':
            return <Contact />;
        default:
            return <About />;
    }
};

function Page ({currentPage, setCurrentPage}) {
    return (
        <div>
            <PageContent>
                {renderPage(currentPage)}
            </PageContent>
        </div>
    )    
}

const rootElement = document.getElementById('root');

ReactDOM.render(<Page currentPage="About" />, rootElement);

export default Page