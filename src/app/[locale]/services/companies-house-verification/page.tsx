import { redirect } from "next/navigation";

export default async function CompaniesHouseVerificationRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale === "fr") {
    redirect("/fr/services/companies-house-identity-verification");
  }
  redirect("/services/companies-house-identity-verification");
}
