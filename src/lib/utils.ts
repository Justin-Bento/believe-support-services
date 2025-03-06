export function CreateSlug(slug: string) {
  return slug.toString().replace(/\s+/g, "-").toLowerCase()
}