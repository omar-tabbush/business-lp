import Image from "next/image"

const images = [
    '/react.svg',
    '/nestjs.svg',
    '/next.svg',
    '/node.svg',
    '/tailwind.svg',
    '/shadcn.svg',
    'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg'
]

export const StackMarquee = () => {
    return (
        <div className="w-full py-12">
            <div className="mx-auto w-full px-2 md:px-8">
                <div
                    className="group relative mt-2 flex gap-6 overflow-hidden p-2"
                    style={{
                        maskImage:
                            'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                    }}
                >
                    {Array(5)
                        .fill(null)
                        .map((index) => (
                            <div
                                key={index}
                                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6 max-sm:gap-0.5"
                            >
                                {images.map((image, key) => (
                                    <Image
                                        key={key}
                                        src={image}
                                        className="h-10 w-28 px-2 "
                                        alt={`${image}`}
                                        width={40}
                                        height={40}
                                    />
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default StackMarquee
