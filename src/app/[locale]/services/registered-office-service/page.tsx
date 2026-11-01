import RegisteredOfficeServicePageEn from "./page-en";
import RegisteredOfficeServicePageFr from "./page-fr";

  export default async function RegisteredOfficeServicePage({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }) {
    const { locale } = await params;
    if (locale === "fr") {
      return <RegisteredOfficeServicePageFr />;
    }
    return <RegisteredOfficeServicePageEn />;
  }
