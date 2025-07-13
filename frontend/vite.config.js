import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// proxy przekieruje każde /users → http://127.0.0.1:8000/users
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5174,          // możesz zmienić lub usunąć
        proxy: {
            "/users": {
                target: "http://127.0.0.1:8001",
                changeOrigin: true,
            },
            "/stats": {
                target: "http://127.0.0.1:8001",
                changeOrigin: true,
            },
        },
    },
});
