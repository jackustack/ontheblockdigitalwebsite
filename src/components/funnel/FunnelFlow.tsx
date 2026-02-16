"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IndustryCombobox } from "./IndustryCombobox";
import { CityCombobox } from "./CityCombobox";
import { Button } from "@/components/ui/Button";
import { getFunnelRedirectPath } from "@/lib/routing";

type FunnelStep = "cta" | "industry" | "city";

export function FunnelFlow() {
  const [step, setStep] = useState<FunnelStep>("cta");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const router = useRouter();

  function handleCtaClick() {
    setStep("industry");
  }

  function handleIndustrySelect(value: string) {
    setSelectedIndustry(value);
    setStep("city");
  }

  function handleCitySelect(cityName: string, stateAbbr: string) {
    const path = getFunnelRedirectPath(selectedIndustry, cityName, stateAbbr);
    router.push(path);
  }

  if (step === "cta") {
    return (
      <div className="text-center">
        <Button onClick={handleCtaClick} className="text-lg px-8 py-4">
          Want to Know More?
        </Button>
      </div>
    );
  }

  if (step === "industry") {
    return (
      <div className="mx-auto max-w-md">
        <IndustryCombobox onSelect={handleIndustrySelect} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <CityCombobox onSelect={handleCitySelect} />
    </div>
  );
}
