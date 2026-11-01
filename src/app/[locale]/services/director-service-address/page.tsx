import DirectorServiceAddressPageEn from "./page-en";
import DirectorServiceAddressPageFr from "./page-fr";

export default async function DirectorServiceAddressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "fr") {
    return <DirectorServiceAddressPageFr />;
  }
  return <DirectorServiceAddressPageEn />;
}
