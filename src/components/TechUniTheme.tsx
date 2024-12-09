import {createSystem, defineConfig} from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                techuni: {
                    blue: {value: "#9cbfbb"},
                },
            },
        },
        keyframes: {
            // TODO keyframe設定
        },
    },
    strictTokens: true,
})

export default createSystem(config)
