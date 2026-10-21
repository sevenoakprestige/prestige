import ShelfCompanyPageEn from "./page-en";
import ShelfCompanyPageFr from "./page-fr";

export default async function ShelfCompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "fr") {
    return <ShelfCompanyPageFr />;
  }
  return <ShelfCompanyPageEn />;
}
