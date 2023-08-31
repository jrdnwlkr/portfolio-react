import About from './About'
import Project from './Project'
import Skills from './Skills'

const Content = () => {
    return (
        <div className='w-full mx-auto px-12 h-full flex-col min-h-screen py-[160px] bg-gray-900'>
            <About></About>
            <Skills></Skills>
            <p className='text-white text-3xl sm:text-5xl font-black max-w-[700px] mb-4'>
                Work
            </p>
            <Project></Project>
        </div>
    )
}

export default Content