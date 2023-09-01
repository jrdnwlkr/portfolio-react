import About from './About'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact';

const Content = () => {
    return (
        <div className='w-full mx-auto px-12 h-full flex-col min-h-screen py-[160px] bg-gray-900'>
            <About></About>
            <p className='text-gray-500 text-lg sm:text-2xl font-bold max-w-[700px] mb-4 tracking-widest'>
                SKILLS
            </p>
            <Skills></Skills>
            <p className='text-gray-500 text-lg sm:text-2xl font-bold max-w-[700px] mb-4 tracking-widest'>
                WORK
            </p>
            <Project></Project>
            <p className='text-gray-500 text-lg sm:text-2xl font-bold max-w-[700px] mb-4 tracking-widest'>
                CONTACT
            </p>
            <Contact></Contact>
            
        </div>
    )
}

export default Content