src/
├── 📁 <strong>application/</strong> # Lógica de negocio y casos de uso
│   ├── use-cases/
│   │   ├── create-item.use-case.ts
│   └── dtos/  # Objetos de transferencia de datos (DTOs) para validación y estructura de datos
│       ├── create-item.dto.ts
├── 📁 domain/  # Contiene la representación pura del negocio sin dependencias externas
│   ├── entities/ 
│   │   ├── item.entity.ts
│   ├── repositories/  # Definición de interfaces de acceso a datos (sin implementación)
│   │   ├── item.repository.ts 
│   └── services/  # Servicios de dominio con lógica de negocio pura
│       ├── item.service.ts
├── 📁 infrastructure/  # Implementaciones concretas de adaptadores, persistencia y controladores
│   ├── adapters/  # Adaptadores que integran servicios externos y bases de datos
│   │   ├── database/  # Implementaciones de persistencia
│   │   │   ├── typeorm-item.repository.ts  # Repositorio de items con TypeORM
│   │   ├── kafka/ 
│   │   │   ├── kafka.repository.ts 
│   ├── config/  # Configuración de la aplicación Kafka, BD
│   │   ├── database.config.ts
│   ├── controllers/  # Controladores de NestJS que manejan las peticiones HTTP
│   │   ├── item.controller.ts
│   ├── modules/  # Módulos de NestJS que organizan la aplicación
│   ├── interceptors/  # Interceptores globales para modificar respuestas o manejar tiempos de ejecución
│   ├── middleware/  # Middleware para procesar solicitudes antes de llegar a los controladores
│   ├── exceptions/  # Manejo centralizado de excepciones en la infraestructura
├── 📁 utils/  # Funciones genéricas y reutilizables en toda la aplicación
│   ├── date.util.ts
│   └── crypto.util.ts
├── 📁 commons/  # Componentes compartidos que pueden ser usados en toda la aplicación
│   ├── logger.ts  # Configuración de logging centralizado
├── main.ts 
├── app.module.ts
