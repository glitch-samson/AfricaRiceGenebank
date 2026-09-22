interface StatCardProps {
    value: string;
    label: string;
    sublabel?: string;
    source?: string;
    trend?: string;
}

export default function StatCard({ value, label, sublabel, source, trend }: StatCardProps) {
    return (
        <div className="stat-card">
            <div className="stat-card-head">
                <span className="stat-card-value">{value}</span>
                {trend && <span className="stat-card-trend">{trend}</span>}
            </div>
            <p className="stat-card-label">{label}</p>
            {sublabel && <p className="stat-card-sublabel">{sublabel}</p>}
            {source && (
                <div className="stat-card-source">
                    <span className="verified-dot" aria-hidden="true" />
                    <span>Verified: {source}</span>
                </div>
            )}
        </div>
    );
}
