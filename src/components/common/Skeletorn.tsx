import React from "react";

interface SkeletonProps {
  children: React.ReactNode;
  className: string;
}

export default function Skeleton({ children, className }: SkeletonProps) {
  return (
    <div className={`px-3 sm:px-12 lg:px-16 xl:px-20 relative ${className}`}>
      {children}
    </div>
  );
}
