import type { Metadata } from "next";

const PATH = "/countries/iraq/uk-company-formation";
const TITLE = "تأسيس شركة في بريطانيا من العراق 2026 | Seven Oak Prestige";
const DESCRIPTION =
  "أسّس شركتك البريطانية من العراق دون السفر إلى المملكة المتحدة. باقتا بريستيج £299 وإيليت £399 مع خدمات العنوان البريطاني ودعم التأسيس.";

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `https://www.sevenoakprestige.com${PATH}`;

  return {
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
      "تأسيس شركة في بريطانيا من العراق",
      "تسجيل شركة بريطانية من العراق",
      "شركة LTD بريطانية للعراقيين",
      "فتح شركة في انجلترا من بغداد",
      "Seven Oak Prestige Iraq",
      "UK company formation Iraq",
      "UK LTD remote incorporation Iraq",
    ],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      type: "website",
      url: canonical,
      locale: "ar_IQ",
      images: [
        {
          url: "https://www.sevenoakprestige.com/assets/iraq-hero-1280.webp",
          width: 1280,
          height: 725,
          alt: "تأسيس شركة في بريطانيا من العراق - Seven Oak Prestige",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: ["https://www.sevenoakprestige.com/assets/iraq-hero-1280.webp"],
    },
    alternates: {
      canonical,
      languages: {
        ar: canonical,
        "ar-IQ": canonical,
        "x-default": canonical,
      },
    },
  };
}

export default function IraqCountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
