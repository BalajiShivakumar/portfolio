import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const isUserSite = repoName.endsWith('.github.io')
const ghPagesBase = repoName ? (isUserSite ? '/' : `/${repoName}/`) : '/'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS === 'true' ? ghPagesBase : '/',
})
