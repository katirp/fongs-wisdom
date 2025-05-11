"use client"

import { useState, useEffect } from "react"
import type { Idiom } from "@/types/idiom"
import IdiomCard from "./idiom-card"
import IdiomDialog from "./idiom-dialog"
import { cn } from "@/lib/utils"

interface IdiomGridProps {
    idioms: Idiom[]
    activeCategory: string
}

export default function IdiomGrid({ idioms, activeCategory }: IdiomGridProps) {
    const [selectedIdiom, setSelectedIdiom] = useState<Idiom | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [filteredIdioms, setFilteredIdioms] = useState<Idiom[]>(idioms)
    const [animateCards, setAnimateCards] = useState(true)

    // Filter idioms when category changes
    useEffect(() => {
        setIsDialogOpen(false) // Close dialog when filter changes

        // Trigger exit animation
        setAnimateCards(false)

        // Small delay before filtering to allow for animation
        const timer = setTimeout(() => {
            if (activeCategory === "All") {
                setFilteredIdioms(idioms)
            } else {
                setFilteredIdioms(idioms.filter((idiom) => idiom.categories.includes(activeCategory)))
            }

            // Trigger entrance animation after filtering
            setTimeout(() => {
                setAnimateCards(true)
            }, 50)
        }, 300)

        return () => clearTimeout(timer)
    }, [activeCategory, idioms])

    const handleIdiomClick = (idiom: Idiom) => {
        setSelectedIdiom(idiom)
        setIsDialogOpen(true)
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative min-h-[300px]">
            {filteredIdioms.map((idiom, index) => (
                <div
                    key={idiom.id}
                    className={cn(
                        "transition-all duration-500 ease-in-out",
                        animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                        // Stagger the animations
                        animateCards && `transition-delay-${Math.min(index * 50, 300)}ms`,
                    )}
                >
                    <IdiomCard idiom={idiom} onClick={() => handleIdiomClick(idiom)} />
                </div>
            ))}

            <IdiomDialog idiom={selectedIdiom} open={isDialogOpen} onOpenChange={setIsDialogOpen} />

            {filteredIdioms.length === 0 && (
                <div className="col-span-full text-center py-12 opacity-80">No idioms found in this category.</div>
            )}
        </div>
    )
}
