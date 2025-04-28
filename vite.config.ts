import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  plugins: [mkcert({
    mkcertPath: "C:\\CS\\gg\\.vite-plugin-mkcert\\mkcert.exe",
    hosts: ["localhost", "example.com", "www.example.com", "127.0.0.1"]
  })],
  server: {
    hmr: {
      clientPort: 443
    }
  }
})
