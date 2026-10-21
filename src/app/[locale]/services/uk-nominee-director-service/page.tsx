import NomineeDirectorPageEn from "./page-en";
import NomineeDirectorPageFr from "./page-fr";

export default async function NomineeDirectorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "fr") {
    return <NomineeDirectorPageFr />;
  }
  return <NomineeDirectorPageEn />;
}
