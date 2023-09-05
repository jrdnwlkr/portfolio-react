import About from './About'
import Project from './Project'
import Contact from './Contact';

const Content = () => {
    return (
        <div className='w-full mx-auto px-12 h-full flex-col min-h-screen py-[160px] bg-gray-900'>
            <About></About>
            <Project></Project>
            <Contact></Contact>
            
        </div>
    )
}

export default Content