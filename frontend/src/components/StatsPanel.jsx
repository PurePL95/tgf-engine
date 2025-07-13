export default function StatsPanel({ user }) {
    const renderBar = (value, max, label) => (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="font-semibold">{label}</span>
                <span>{value}/{max}</span>
            </div>
            <div className="w-full bg-secondary h-4 rounded overflow-hidden">
                <div
                    className="h-4 bg-accent"
                    style={{ width: `${(value / max) * 100}%` }}
                />
            </div>
        </div>
    )
    return (
        <div>
            {renderBar(user.exp, 100, "EXP")}
            {renderBar(user.hp,  user.hp,  "HP")}
            {renderBar(user.ap,  user.ap,  "AP")}
        </div>
    )
}
