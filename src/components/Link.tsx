import { ArrowRight } from 'lucide-react'

interface LinkProps {
    text: string
    url?: string
    Arrow?: boolean
}

const Link = ({ text, url, Arrow = true }: LinkProps) => {
    if (url) {
        return (
            <a
                href={url}
                className={`inline-block text-[#646cff] md:ml-[16px] hover:text-[#535bf2] font-medium group focus:ring-1 focus:ring-[#535bf2] focus:rounded-xs outline-none ${Arrow ? 'relative' : ''}`}
            >
                {text}
                {Arrow && (
                    <ArrowRight className="md:inline-block hidden transition-transform duration-300 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100 ml-1" size={14} />
                )}
            </a>
        )
    }

    return (
        <link className="">
            {text}
        </link>
    )
}

export default Link