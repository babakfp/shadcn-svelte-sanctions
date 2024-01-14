import { cp, rm } from "fs/promises"

const REGISTRY_INPUT = "shadcn-svelte/apps/www/static/registry"
const REGISTRY_OUTPUT = "dist/registry"

await rm(REGISTRY_OUTPUT, { recursive: true, force: true })
await cp(REGISTRY_INPUT, REGISTRY_OUTPUT, { recursive: true, force: true })
