# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



cabron-nfc/
│
├── index.html                
│
│
├── .env.local
│
├── .gitignore
│
├── eslint.config.js
│
├── package-lock-json
│
├── package.json
│
├── postcss.config.js
│
├── README.md
│
├── tailwind.config.js
│
├── vite.config.js               
│                          
│
├── .vercel/
│   ├── project.json
│   └── README.txt          
│
├── api/
│   └── checkout.js                   
│
├── dist/
│              
│
├── node_modules/
│                  
│
├── public/
│   ├── caja.png           
│   ├── favicon.svg              
│   ├── hero.png            
│   ├── icons.svg           
│   ├── llavero.png         
│   ├── product.png           
│   ├── pulsera.png       
│   ├── sticker.png        
│   └── tarjeta.png 
│                  
│
├── src/
│
│     └── App.css
│     │
│     └── App.jsx 
      └── index.css
│     │
│     └──main.jsx              
│                
│
│     └──assets/
│         └──hero.png 
│     ├────components/
           ├── Benefits.jsx          
           ├── BuyModal.jsx              
           ├── Contact.jsx           
           ├── Footer.jsx           
           ├── Hero.jsx         
           ├── HowitWorks.jsx          
           ├── Navbar.jsx      
           ├── Product.jsx  
           ├── ProductDetailsModal.jsx      
           ├── ProductsList.jsx      
           └── Testimonials.jsx               
      ├────context/
            ├── LanguageContext.jsx  
      ├────Language/
            ├── en.json 
            ├── es.json        
      ├────utils/
            ├── scrollTo.js

    
           