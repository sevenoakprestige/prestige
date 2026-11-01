import VirtualBusinessAddressPageEn from "./page-en";
import VirtualBusinessAddressPageFr from "./page-fr";

export default async function VirtualBusinessAddressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "fr") {
    return <VirtualBusinessAddressPageFr />;
  }
  return <VirtualBusinessAddressPageEn />;
}
