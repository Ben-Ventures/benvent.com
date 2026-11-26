/**
 * One contact path for the whole site: the same label and the same mailto everywhere it appears (the hero and the
 * closing sections), so visitors never wonder whether different labels go to different places.
 */
export const contactLabel = 'Email Ben'

const address = 'ben@benvent.com'
const subject = 'Project Inquiry'
const body = "Hi Ben,\n\nI'd like to discuss a project. Here's what I'm looking for:\n\n"

export const enquiryHref = () =>
  `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
