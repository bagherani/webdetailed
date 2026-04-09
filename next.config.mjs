import path from 'node:path'
import { fileURLToPath } from 'node:url'
import createMDX from '@next/mdx'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  turbopack: {
    root: projectRoot,
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    rehypePlugins: ['rehype-prism-plus']
  }
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)