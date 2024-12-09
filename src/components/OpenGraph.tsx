import {OpenGraph, OpenGraphType} from "next/dist/lib/metadata/types/opengraph-types";

export function generateOpenGraphMetadata(type: OpenGraphType): OpenGraph {
    const baseURI = process.env.BASE_URI;

    return {
        // title: auto generated,
        // description: auto generated,
        type: type,
        locale: "ja_JP",
        siteName: "Tech.Uni",
        images: [
            {
                url: "/assets/TechUniBanner.png",
                width: 1200,
                height: 630,
            }
        ],
        url: baseURI,
    }
}
