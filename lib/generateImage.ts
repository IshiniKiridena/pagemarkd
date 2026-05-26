import html2canvas from "html2canvas";

export async function captureTemplateElement(
  element: HTMLElement
): Promise<string> {
  const canvas = await html2canvas(element, {
    scale: 1,
    width: 1080,
    height: 1920,
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
    logging: false,
  });

  return canvas.toDataURL("image/png");
}

export function downloadDataUrl(dataUrl: string, filename: string): void {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
