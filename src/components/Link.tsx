import { ArrowRight, ArrowUpRight } from 'lucide-react'

interface LinkProps {
    text: string
    url?: string
    Arrow?: boolean
    newTab?: boolean
}

const Link = ({ text, url, Arrow = true, newTab = false }: LinkProps) => {
    if (url) {
        return (
            <a
                href={url}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
                className={`inline-block text-[#646cff] md:ml-[16px] hover:text-[#535bf2] font-medium group focus:ring-1 focus:ring-[#535bf2] focus:rounded-xs outline-none ${Arrow ? 'relative' : ''}`}
            >
                {text}
                {Arrow && (
                    newTab ? (
                        <ArrowUpRight className="md:inline-block hidden transition-transform duration-300 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus:translate-x-0.5 group-focus:opacity-100 ml-1" size={14} />
                    ) : (
                        <ArrowRight className="md:inline-block hidden transition-transform duration-300 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus:translate-x-0.5 group-focus:opacity-100 ml-1" size={14} />
                    )
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