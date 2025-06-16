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
                className={`inline-block text-[#646cff] ml-[16px] hover:text-[#535bf2] font-medium group ${Arrow ? 'relative' : ''}`}
            >
                {text}
                {Arrow && (
                    <span className="inline-block transition-transform duration-300 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100">
                        →
                    </span>
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