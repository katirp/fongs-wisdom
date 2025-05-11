"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Idiom } from "@/types/idiom"

interface IdiomCardProps {
    idiom: Idiom
    onClick: () => void
}

export default function IdiomCard({ idiom, onClick }: IdiomCardProps) {
    return (
        <Card
            className="cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200 bg-card text-card-foreground border-primary/20 h-[180px]"
            onClick={onClick}
        >
            <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-3">{idiom.chinese}</h2>
                <p className="text-lg opacity-80">{idiom.pinyin}</p>
            </CardContent>
        </Card>
    )
}
