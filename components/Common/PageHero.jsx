/**
 * Reusable page hero card – same creative layout across About, Education, Experience, Projects, Contact.
 * Dark theme, green accent, optional stats grid.
 */
export default function PageHero({ title, description, icon, stats = [] }) {
  return (
    <div className="relative overflow-hidden mb-8 md:mb-12 rounded-2xl">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-Green/5 via-transparent to-ElectricBlue/5 rounded-2xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-Green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />

      <div className="relative card_stylings p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-DarkGray overflow-hidden">
        {/* Icon + Heading row */}
        <div className="flex items-start gap-4 md:gap-5 mb-5 md:mb-6">
          <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-Green/15 border border-Green/30 flex items-center justify-center text-Green">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-Snow text-2xl sm:text-3xl md:text-4xl font-bold font-circular-bold tracking-tight">
              {title}
            </h1>
            <div className="w-14 md:w-20 h-1 bg-Green rounded-full mt-2" aria-hidden="true" />
          </div>
        </div>

        {/* Description */}
        <p className="text-LightGray text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl font-circular-normal">
          {description}
        </p>

        {/* Optional stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat group hover:shadow-lg hover:border-Green/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`text-xl sm:text-2xl font-bold mb-1 ${stat.colorClass || 'text-Green'}`}>
                  {stat.value}
                </div>
                <div className="text-SilverGray text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
