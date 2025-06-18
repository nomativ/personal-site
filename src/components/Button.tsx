interface ButtonProps {
    text: string
    url?: string
}

const Button = ({ text, url }: ButtonProps) => {
    if (url) {
        return (
            <a
                href={url}
                className="px-4 py-2 w-fit bg-gradient-to-b from-[#323A45] to-[#171F2C] text-stone-300 font-medium rounded-[9999px] border border-gray-200 transition-all duration-200 hover:from-[#333B46] hover:to-[#161F2C] hover:border-orange-300 hover:text-white/90 active:bg-gray-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center no-underline"
            >
                {text}
            </a>
        )
    }

    return (
        <button className="px-4 py-2 bg-gradient-to-b from-[#323A45] to-[#171F2C] text-stone-300 font-medium rounded-[9999px] border border-gray-200 transition-all duration-200 hover:from-[#333B46] hover:to-[#161F2C] hover:border-orange-300 hover:text-white/90 active:bg-gray-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center no-underline">
            {text}
        </button>
    )
}

export default Button