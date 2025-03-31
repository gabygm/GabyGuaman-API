src/  # Raíz del proyecto
├── 📁modules/  # Agrupación de los módulos que encapsulan la lógica de negocio
│   ├── auth/  # Autenticación y autorización
│   │   ├── auth.module.ts  # Módulo de autenticación
│   │   ├── auth.service.ts  # Lógica de autenticación
│   │   ├── auth.resolver.ts  # Resolver de GraphQL para autenticación
│   ├── user/  # Gestión de usuarios (Ejemplo)
│   │   ├── user.module.ts  # Módulo de usuarios
│   │   ├── user.service.ts  # Lógica de negocio de usuarios
│   │   ├── user.resolver.ts  # Resolver de GraphQL para usuarios
│   ├── product/  # Gestión de productos (Ejemplo)
│   │   ├── product.module.ts  # Módulo de productos
│   │   ├── product.service.ts  # Lógica de negocio de productos
│   │   ├── product.resolver.ts  # Resolver de GraphQL para productos
├── 📁graphql/  # Esquemas y resolvers de GraphQL
│   ├── schema.graphql  # Esquema principal de GraphQL
│   ├── resolvers/  # Resolver de GraphQL por dominio
│   │   ├── user.resolver.ts  # Resolver de GraphQL para el dominio usuario
│   │   ├── product.resolver.ts  # Resolver de GraphQL para el dominio producto
│   ├── inputs/  # Tipos de entrada de GraphQL
│   │   ├── create-user.input.ts  # Entrada para crear un usuario
│   │   ├── update-product.input.ts  # Entrada para actualizar un producto
├── 📁services/  # Servicios generales (integración con APIs externas, lógica compartida)
│   ├── http-client.service.ts  # Cliente HTTP para hacer peticiones a APIs externas
│   ├── graphql-client.service.ts  # Cliente para interactuar con otros GraphQLs o microservicios
├── 📁interceptors/  # Interceptores para transformar datos o manejar excepciones globales
│   ├── logging.interceptor.ts  # Interceptor para registrar las solicitudes y respuestas
├── 📁middleware/  # Middleware para manejar solicitudes antes de llegar a los resolvers
│   ├── auth.middleware.ts  # Middleware para validar la autenticación
├── 📁config/  # Archivos de configuración de la aplicación
│   ├── graphql.config.ts  # Configuración del servidor GraphQL
│   ├── app.config.ts  # Configuración general de la aplicación
├── 📁utils/  # Funciones reutilizables para toda la aplicación
│   ├── logger.util.ts  # Utilidad para logging centralizado
│   ├── date.util.ts  # Utilidad para manejo de fechas
├── 📁exceptions/  # Manejo de errores personalizados
│   ├── graphql.exception.ts  # Excepción personalizada para manejar errores GraphQL
├── main.ts  # Punto de entrada de la aplicación (arranque de NestJS)
├── app.module.ts  # Módulo principal que importa todos los módulos de la aplicación
