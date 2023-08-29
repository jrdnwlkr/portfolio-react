import About from './About'
import Project from './Project'

const Content = () => {
    return (
        <div className='w-full mx-auto px-4 h-full flex-col min-h-screen py-[160px] bg-slate-900'>
            <About></About>
            <Project></Project>
        </div>
    )
}

export default Content