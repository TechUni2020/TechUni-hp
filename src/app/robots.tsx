import type {MetadataRoute} from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseURI = process.env.BASE_URI;

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: `${baseURI}/sitemap.xml`,
    }
}
