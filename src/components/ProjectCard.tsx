import Tag from './Tag'

interface ProjectCardProps {
    title: string
    discipline: string
    url: string
    image: string
}

const ProjectCard = ({ title, discipline, url, image }: ProjectCardProps) => {

    return (
        <a href={url}>
            <div className="relative h-fit w-full overflow-hidden rounded-3xl bg-linear-to-b from-white/25 hover:from-white/40 to-gray-500/10 hover:to-gray-500/20 shadow-[0px_8px_8px_-4px_rgba(0,0,0,0.15)] group transition-all duration-500">
                <div className="h-96 p-8 m-[1px] flex flex-col justify-between rounded-3xl relative overflow-hidden bg-[#0C131D] transition-all duration-500">
                    <div
                        className="absolute self-center -top-30 w-100 h-50 rounded-full blur-[50px] bg-white/75 mix-blend-overlay z-1"
                    />
                    <img className="w-full h-full left-0 top-0 absolute z-0 transition duration-500 opacity-100 group-hover:opacity-100 group-hover:z-11 object-cover group-hover:scale-105 ease-out" src={image} alt={title} />
                    <div className='justify-start relative z-10 group-hover:blur-[2px] group-hover:opacity-30 transition-all duration-300'>
                        <Tag label={discipline} />
                    </div>
                    <span className='justify-end text-white/90 text-2xl font-semibold leading-8 tracking-tight relative z-10 group-hover:opacity-50 group-hover:blur-[2px] transition-all duration-300'>{title}</span>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard