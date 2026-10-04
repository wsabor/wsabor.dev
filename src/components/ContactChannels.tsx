import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { contactChannels, type ContactChannel } from "@/data/contact";
import { trackAttrs } from "@/lib/analytics";

const channelIcons: Record<ContactChannel["id"], React.ReactNode> = {
  email: <Mail size={20} aria-hidden="true" />,
  linkedin: <LinkedinIcon size={20} />,
  github: <GithubIcon size={20} />,
};

// Atalhos de contato direto (e-mail, LinkedIn, GitHub). Usado no CTA e em /contact.
// `location` identifica o bloco nos eventos do GA4.
export default function ContactChannels({
  location,
}: {
  location: "cta" | "contact_page";
}) {
  return (
    <ul className="flex flex-col gap-3">
      {contactChannels.map((channel) => (
        <li key={channel.id}>
          <a
            href={channel.href}
            {...trackAttrs("contact_click", { method: channel.id, location })}
            {...(channel.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className="card card-interactive group bg-background/60 flex items-center gap-4 p-4"
          >
            <span className="from-primary/20 to-primary-light/10 ring-primary/20 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ring-1">
              {channelIcons[channel.id]}
            </span>
            <span className="min-w-0 flex-1">
              <span className="text-text-main block font-semibold">
                {channel.label}
              </span>
              <span className="text-text-muted block truncate text-sm">
                {channel.handle}
              </span>
            </span>
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="text-text-muted group-hover:text-primary shrink-0 transition-colors"
            />
            {channel.external && (
              <span className="sr-only">(abre em nova aba)</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
