import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'custom-startup-message',
    configureServer(server) {
      server.httpServer.once('listening', () => {
        const address = server.httpServer.address();
        const host = address.address === '::' ? 'localhost' : address.address;
        const port = address.port;
        console.log(`🚀 Service Registree is Live at: http://${host}:${port}/login`);
      });
    },
  },],
})
