import { SectionShell } from './SectionShell'
import { socialLinks } from '../data/content'
import { NeumorphicButton } from './ui/NeumorphicButton'

export function SocialHub() {
  return (
    <SectionShell
      id="social-hub"
      eyebrow="Links"
      title="My links"
      className="h-full"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {socialLinks.map((item) => (
          <NeumorphicButton
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </SectionShell>
  )
}