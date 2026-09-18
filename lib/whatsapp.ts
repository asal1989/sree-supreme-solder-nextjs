import { siteConfig } from "@/config/site";

export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Sree Supreme Solder, I would like to enquire about your soldering products.";
