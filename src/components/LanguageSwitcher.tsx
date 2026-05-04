"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export function LanguageSwitcher({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  
  return (
    <div className="flex gap-2 text-sm">
      <Link
        href="/mn"
        className={locale === "mn" ? "font-bold text-[#2d5a3d]" : "opacity-60 hover:opacity-100"}
      >
        МН
      </Link>
      <Link
        href="/en"
        className={locale === "en" ? "font-bold text-[#2d5a3d]" : "opacity-60 hover:opacity-100"}
      >
        EN
      </Link>
    </div>
  );
}
