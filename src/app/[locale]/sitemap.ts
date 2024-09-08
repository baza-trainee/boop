import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: `${process.env.NEXT_PUBLIC_BASE_URL}/ua`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
          pl: `${process.env.NEXT_PUBLIC_BASE_URL}/it`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: `${process.env.NEXT_PUBLIC_BASE_URL}/ua/about`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/about`,
          pl: `${process.env.NEXT_PUBLIC_BASE_URL}/it/about`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/school`,
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: `${process.env.NEXT_PUBLIC_BASE_URL}/ua/school`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/school`,
          pl: `${process.env.NEXT_PUBLIC_BASE_URL}/it/school`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contacts`,
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: `${process.env.NEXT_PUBLIC_BASE_URL}/ua/contacts`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/contacts`,
          pl: `${process.env.NEXT_PUBLIC_BASE_URL}/it/contacts`,
        },
      },
    },
  ];
}
