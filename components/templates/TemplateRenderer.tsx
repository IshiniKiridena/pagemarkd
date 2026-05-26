import { ReadingSessionData, TemplateId } from "@/lib/types";
import { ClassicLibrary } from "./ClassicLibrary";
import { CozyNook } from "./CozyNook";
import { DarkLiterary } from "./DarkLiterary";
import { DataReader } from "./DataReader";
import { ModernMinimal } from "./ModernMinimal";
import { PaperJournal } from "./PaperJournal";
import { TemplateProps } from "./shared";

const TEMPLATE_MAP: Record<
  TemplateId,
  React.ComponentType<TemplateProps>
> = {
  "classic-library": ClassicLibrary,
  "cozy-nook": CozyNook,
  "modern-minimal": ModernMinimal,
  "dark-literary": DarkLiterary,
  "paper-journal": PaperJournal,
  "data-reader": DataReader,
};

interface TemplateRendererProps {
  templateId: TemplateId;
  data: ReadingSessionData;
}

export function TemplateRenderer({
  templateId,
  data,
}: TemplateRendererProps) {
  const Component = TEMPLATE_MAP[templateId];
  return <Component data={data} />;
}
