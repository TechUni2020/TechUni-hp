import type {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseURI = process.env.BASE_URI;

    return [
        {
            url: `${baseURI}`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${baseURI}/about`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseURI}/sponsor`,
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: `${baseURI}/project`,
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: `${baseURI}/blog`,
            lastModified: new Date(),
            priority: 0.2,
        },
    ]
}
