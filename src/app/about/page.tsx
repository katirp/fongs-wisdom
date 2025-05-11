import Image from "next/image"

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-primary mb-8 text-center">Happy Mother's Day Mommy!</h1>

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                {/* Portrait Image - Now Rectangular */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <div className="relative w-64 h-80 md:w-80 md:h-96 overflow-hidden border-4 border-primary/20 shadow-lg rounded-md">
                        <Image
                            src="/mommy.png"
                            alt="Portrait of Master Fong"
                            width={320}
                            height={384}
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* About Text */}
                <div className="w-full md:w-3/5 space-y-4 text-lg">
                    <p>
                        Welcome to Fong{`'`}s Wisdom, a collection of chengyu bestowed upon me by the great Master Shi Fu Fong.
                    </p>

                    <p>
                        Thank you for giving me wisdom and strength. You are my rock! When I am down or I don{`'`}t know what to do, thinking about what you would do gives me clarity.
                        Even my friends know about Shi Fu Fong because I always tell them how awesome you are. I must have done a really good deed in my past life to be born to you. 🥰
                    </p>

                    <p>
                        I wanted to make this website to save all the chengyu and voice memos you send to me so that it{`'`}s easier to come back to and hopefully to learn them by heart eventually.
                    </p>

                    <p>
                        I love you so much, and I{`'`}m so grateful everyday that I have the best parents in the world!! I miss you so much and can{`'`}t wait to play the pigu game with you again soon.
                        🥰🥰🥰❤️❤️❤️
                    </p>

                    <p className="italic text-primary/80 mt-8">
                        "Filial piety is the root of all virtue, and the stem out of which grows all moral teaching. #FilialPiety"
                        <br />— Confucius
                    </p>
                </div>
            </div>
        </main>
    )
}
