├── 📁src/
│   ├── 📁config
│   ├── 📁modules/  # Cada módulo tiene su propia carpeta con controladores, servicios, DTOs y otros archivos relacionados
│   │   ├── file-validation/
│   │   │   ├── dtos/
│   │   │   ├── file-validation.controller.ts
│   │   │   ├── file-validation.service.ts
│   │   └── other-modules/
│   ├── 📁provides #encapsulan la lógica para interactuar con APIs externas
│   ├── ├-──
│   ├── main.ts
│   └── app.module.ts
├── ├──📁 utils/     # Funciones genéricas y reutilizables en toda la aplicación
│      ├── date.util.ts
│      └── crypto.util.ts
├── ├──📁 commons/   # Componentes compartidos que pueden ser usados en toda la aplicación
│      ├── logger.ts        
