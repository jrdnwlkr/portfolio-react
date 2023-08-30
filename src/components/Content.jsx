import About from './About'
import Project from './Project'

const Content = () => {
    return (
        <div className='w-full mx-auto px-4 h-full flex-col min-h-screen py-[160px] bg-slate-900 container'>
            <About></About>
            <p className='text-white text-3xl sm:text-5xl font-black max-w-[700px] mb-4'>
                Work
            </p>
            <Project></Project>
        </div>
    )
}

export default Content