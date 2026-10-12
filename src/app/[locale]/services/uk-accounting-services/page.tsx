import { redirect } from "next/navigation";

export default async function UkAccountingServicesRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "fr") {
    redirect("/fr/services/uk-accounting-non-residents");
  }
  redirect("/services/uk-accounting-non-residents");
}
