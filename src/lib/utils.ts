export function CreateSlug(slug: string) {
  return slug.toString().replace(/\s+/g, "-").toLowerCase()
}
// Utility function for conditional class names
export function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}
