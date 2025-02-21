
## 🌍 Deployed Projects  

🚀 **Portfolio Website** – [Live Demo](https://sonunm.vercel.app/)  
📝 **Postify (Blog Application)** – [Live Demo](https://postify-s58m.onrender.com/)  
🚗 **CarvanaX (Car Marketplace)** – [Live Demo](https://carvanax.vercel.app/)  



### TailwindCSS config 

- npm install tailwindcss @tailwindcss/vite

- Make changes in vite.config.js (in the newer versions of tailwind, tailwind.config.js won't be needed)

    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'

    // https://vite.dev/config/
    export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    })

- Add in index.css

    @import "tailwindcss" ; 
