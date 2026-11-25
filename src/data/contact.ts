/**
 * One contact path for the whole site: the same label and the same mailto everywhere (hero, closing section,
 * footer), so visitors never wonder whether "Get in Touch", "Email Ben" and "Email" go to different places.
 *
 * The subject line doubles as the measurement for the homepage audience variant (Hero.astro): enquiries from the
 * default page arrive as "Project Inquiry", and from the founder variant as "New Company Inquiry", so the inbox
 * counts each arm without an analytics script.
 */
export const contactLabel = 'Email Ben'

const address = 'ben@benvent.com'
const body = "Hi Ben,\n\nI'd like to discuss a project. Here's what I'm looking for:\n\n"

export const enquirySubjects = {
  default: 'Project Inquiry',
  founder: 'New Company Inquiry',
} as const

export type Audience = keyof typeof enquirySubjects

export const enquiryHref = (audience: Audience = 'default') =>
  `mailto:${address}?subject=${encodeURIComponent(enquirySubjects[audience])}&body=${encodeURIComponent(body)}`
