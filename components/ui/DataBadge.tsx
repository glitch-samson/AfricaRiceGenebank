import React from 'react';

interface DataBadgeProps {
    children: React.ReactNode;
    variant?: 'forest' | 'gold' | 'emerald' | 'slate' | 'outline' | 'treaty';
    size?: 'sm' | 'md';
    className?: string;
}

export default function DataBadge({
    children,
    variant = 'forest',
    size = 'sm',
    className = '',
}: DataBadgeProps) {
    return (
        <span className={`data-badge badge-${variant} badge-${size} ${className}`}>
            {children}
        </span>
    );
}
