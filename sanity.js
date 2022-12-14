import { createClient } from "next-sanity"
import createImageUrlBuilder from '@sanity/image-url'


export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-12-11",
  useCdn: process.env.NODE_ENV === "production"
}

export const sanityClient = createClient(config)

// Helper function for generating image URLs with only the asset refrence data in your documents.
export const urlFor = (source) => createImageUrlBuilder(config).image(source)