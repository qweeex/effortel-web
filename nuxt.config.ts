// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: true,
    imports: {
        autoImport: true
    },
    typescript: {
        strict: true
    },
})
