"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

interface AudioPlayerProps {
    audioUrl: string
    label?: string
}

export default function AudioPlayer({ audioUrl, label }: AudioPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = new Audio(audioUrl)
        audioRef.current = audio

        const setAudioData = () => {
            setDuration(audio.duration)
            setIsLoading(false)
        }

        const setAudioTime = () => {
            setCurrentTime(audio.currentTime)
        }

        const handleAudioEnd = () => {
            setIsPlaying(false)
            setCurrentTime(0)
        }

        // Event listeners
        audio.addEventListener("loadeddata", setAudioData)
        audio.addEventListener("timeupdate", setAudioTime)
        audio.addEventListener("ended", handleAudioEnd)

        // Cleanup
        return () => {
            audio.pause()
            audio.removeEventListener("loadeddata", setAudioData)
            audio.removeEventListener("timeupdate", setAudioTime)
            audio.removeEventListener("ended", handleAudioEnd)
        }
    }, [audioUrl])

    const togglePlay = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00"

        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    return (
        <div className="flex items-center space-x-2 bg-accent/50 rounded-lg p-2 my-2">
            <button
                onClick={togglePlay}
                disabled={isLoading}
                className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-full",
                    "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                    isLoading && "opacity-50 cursor-not-allowed",
                )}
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <div className="flex-1 flex flex-col">
                {label && <span className="text-xs text-foreground/70">{label}</span>}
                <div className="flex items-center space-x-2">
                    <div className="relative w-full h-2 bg-primary/20 rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-primary"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                    </div>
                    <span className="text-xs whitespace-nowrap">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                </div>
            </div>
        </div>
    )
}
