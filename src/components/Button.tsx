interface ButtonProps {
    text: string
    url?: string
}

const Button = ({ text, url }: ButtonProps) => {
    if (url) {
        return (
            <a
                href={url}
                className="group rounded-[9999px] transition duration-800 bg-gradient-to-b from-white/30 to-white/10 hover:from-white/50 hover:to-white/30 active:opacity-80 active:scale-98 outline-none focus:ring-1 focus:ring-[#535bf2]"
            >
                <div className="m-[1px] px-4 py-2 md:w-fit w-full bg-gradient-to-b from-[#323A45] to-[#171F2C] text-stone-300 font-medium rounded-[9999px] transition-all duration-200 group-hover:from-[#333B46] hover:to-[#161F2C] hover:text-white/95 text-center no-underline">
                    {text}
                </div>
            </a>
        )
    }

    return (
        <button className="group rounded-[9999px] transition duration-800 bg-gradient-to-b from-white/30 to-white/10 hover:from-white/50 hover:to-white/30 active:opacity-80 active:scale-98 outline-none focus:ring-1 focus:ring-[#535bf2]">
            <div className="m-[1px] px-4 py-2 md:w-fit w-full bg-gradient-to-b from-[#323A45] to-[#171F2C] text-stone-300 font-medium rounded-[9999px] transition-all duration-200 group-hover:from-[#333B46] hover:to-[#161F2C] hover:text-white/95 text-center no-underline">
                {text}
            </div>
        </button>
    )
}

export default Button