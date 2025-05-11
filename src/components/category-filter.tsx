"use client"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
    categories: string[]
    activeCategory: string
    onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
    return (
        <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex space-x-2 min-w-max">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            "border border-primary/20 hover:border-primary/50",
                            activeCategory === category
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "bg-background text-foreground hover:bg-accent",
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}
