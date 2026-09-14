export default function AfterPayment() {
    const AFTER_PAYMENT = [
        ["01", "Instant confirmation", "Your payment and selected package are confirmed by email."],
        ["02", "Account created", "Your secure client portal account is created for you."],
        ["03", "Welcome email", "You receive clear instructions and the documents required for your case."],
        ["04", "Secure onboarding", "Complete the form and upload your identity and address evidence."],
        ["05", "Adviser review", "A named adviser checks the details and asks for clarification only when needed."],
        ["06", "Filing", "Once the required checks are complete, we prepare and submit the incorporation."],
    ];

    return (
        <section className="border-t border-border py-16 sm:py-20 px-6">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">After payment</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl text-foreground font-display font-bold">
                    Know Exactly What Happens Next
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Your order moves straight into a clear, secure onboarding process. Nothing is filed until the required
                    information and checks are complete.
                </p>
                <ol className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                    {AFTER_PAYMENT.map(([n, title, text]) => (
                        <li key={n} className="bg-background p-7">
                            <span className="font-display text-xl text-gold">{n}</span>
                            <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
