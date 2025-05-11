import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Idiom } from "@/types/idiom"
import AudioPlayer from "./audio-player"


interface IdiomDialogProps {
    idiom: Idiom | null
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function IdiomDialog({ idiom, open, onOpenChange }: IdiomDialogProps) {
    if (!idiom) return null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-background text-foreground max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-primary">{idiom.chinese}</DialogTitle>
                    <DialogDescription className="text-xl text-primary/80">{idiom.pinyin}</DialogDescription>
                </DialogHeader>
                {idiom.audioUrl && <AudioPlayer audioUrl={idiom.audioUrl} label="Listen to pronunciation" />}
                <div className="mt-6 space-y-5">
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Literal Translation:</h3>
                        <p className="text-base">{idiom.literalTranslation}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Meaning:</h3>
                        <p className="text-base">{idiom.meaning}</p>
                    </div>
                    {idiom.example && (
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Example:</h3>
                            <p className="text-base">{idiom.example}</p>
                        </div>
                    )}
                    {idiom.story && (
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Story:</h3>
                            <p className="text-base">{idiom.story}</p>
                        </div>
                    )}
                    {idiom.categories && idiom.categories.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Categories:</h3>
                            <div className="flex flex-wrap gap-2">
                                {idiom.categories.map((category) => (
                                    <span key={category} className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-sm">
                                        {category}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
