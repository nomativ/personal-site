import { LucideIcon } from 'lucide-react'

interface TagProps {
    label: string
    icon?: LucideIcon
}

const Tag = ({ label, icon: Icon }: TagProps) => {
    return (
        <div className="w-fit px-3 py-1 bg-gray-100 rounded-lg font-semibold text-[#0F1825] flex items-center gap-1">
            {label}
            {Icon && (
                <Icon size={14} />
            )}
        </div>
    )
}

export default Tag