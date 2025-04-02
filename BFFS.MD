src/  # Raíz del proyecto
├── 📁modules/  # Agrupación de los módulos que encapsulan la lógica de negocio
│   ├── product/  # Gestión de productos (Ejemplo)
│   │   ├── product.module.ts  # Módulo de productos
│   │   ├── product.service.ts  # Lógica de negocio de productos
│   │   ├── product.resolver.ts  # Resolver de GraphQL para productos
│   │   ├── schema.graphql  # Esquema principal de entradas
├── 📁services/  # Servicios generales (integración con APIs externas, lógica compartida)
│   ├── http-client.service.ts 
│   ├── graphql-client.service.ts  # Cliente para interactuar con otros GraphQLs o microservicios
├── 📁interceptors/  # Interceptores para transformar datos o manejar excepciones globales
│   ├── logging.interceptor.ts
├── 📁middleware/  # Middleware para manejar solicitudes antes de llegar a los resolvers
│   ├── auth.middleware.ts 
├── 📁config/  # Archivos de configuración de la aplicación
│   ├── graphql.config.ts  # Configuración del servidor GraphQL
│   ├── app.config.ts  # Configuración general de la aplicación
├── 📁utils/  # Funciones reutilizables para toda la aplicación
│   ├── logger.util.ts 
│   ├── date.util.ts 
├── 📁exceptions/  # Manejo de errores personalizados
│   ├── graphql.exception.ts  # Excepción personalizada para manejar errores GraphQL
├── main.ts  
├── app.module.ts 
