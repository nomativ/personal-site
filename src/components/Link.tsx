interface LinkProps {
    text: string
    url?: string
}

const Link = ({ text, url }: LinkProps) => {
    if (url) {
        return (
            <a
                href={url}
                className="inline-block text-[#646cff] hover:text-[#535bf2] font-medium"
            >
                {text}
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