import Link from 'next/link';

export default function CompanyFormationVideo() {
    return (
        <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            {/* Subtle ambient glow matching the site aesthetics */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-[400px] w-[400px] rounded-full bg-[#d4af37]/[0.03] blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-4xl text-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    New to company formation?
                </h2>
                <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-foreground/80">
                    Created for beginners, this short video will provide you with everything you need to know about the{' '}
                    <Link href="/services/uk-company-formation-for-non-residents" className="text-[#d4af37] font-medium hover:underline transition-colors">
                        company formation process
                    </Link>{' '}
                    - in the simplest of terms. Watch it and register your company today.
                </p>

                <div className="relative mx-auto max-w-xl overflow-hidden flex justify-center">
                    <video
                        className="w-full max-w-xl rounded-2xl object-none"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/assets/video/prestige_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
