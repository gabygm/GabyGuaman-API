src/
├── 📁  application/ # Lógica de negocio y casos de uso
│   ├── use-cases/
│   └── dtos/
├── 📁 domain/  # Contiene la representación pura del negocio sin dependencias externas
│   ├── entities/ 
│   ├── value-objects/
├── 📁 infrastructure/  # Implementaciones concretas de adaptadores, persistencia y controladores
│   ├── adapters/  # Adaptadores que integran servicios externos y bases de datos
│   │   ├── database/
│   │   │   ├── typeorm-item.repository.ts
│   │   ├── kafka/ 
│   │   │   ├── kafka.repository.ts 
│   ├── controllers/  # manejan las peticiones HTTP
│   │   ├── item.controller.ts
│   ├── services/ # Implementación de conexión con servicios externos
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
