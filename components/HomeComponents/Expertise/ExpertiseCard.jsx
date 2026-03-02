const accentColors = ['border-l-Green', 'border-l-ElectricBlue', 'border-l-NeonPurple']

const ExpertiseCard = ({ data, index = 0 }) => {
    if (!data) return null
    const accent = accentColors[index % accentColors.length]
    return (
        <div className={`group rounded-xl border border-DarkGray bg-EveningBlack border-l-4 ${accent} p-5 md:p-6 transition-all duration-300 hover:border-Green/40 hover:shadow-md h-full`}>
            <h3 className="text-Snow font-bold text-base md:text-lg group-hover:text-Green transition-colors mb-2">
                {data.title}
            </h3>
            <p className="text-LightGray text-sm leading-relaxed">
                {data.desc}
            </p>
        </div>
    )
}

export default ExpertiseCard