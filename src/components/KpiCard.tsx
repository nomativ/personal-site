interface KpiCardProps {
    title: string
    kpi: string
}

const KpiCard = ({ title, kpi }: KpiCardProps) => {

    return (
        <div className="w-fit">
            <p className="text-white/25 tracking-wider uppercase font-bold text-sm">
                {title}
            </p>
            <span className="text-white/90 tracking-tight font-semibold md:text-2xl/8 text-xl">
                {kpi}
            </span>
        </div>
    )
}

export default KpiCard