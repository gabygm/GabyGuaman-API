src/  # Raíz del proyecto
├── 📁controllers/  # Maneja las peticiones HTTP y delega la lógica al servicio
│   ├── item.controller.ts  # Controlador para manejar peticiones relacionadas con items
├── 📁models/  # Define las estructuras de datos y entidades
│   ├── item.model.ts  # Modelo que representa la entidad item
├── 📁services/  # Contiene la lógica de negocio y operaciones sobre los modelos
│   ├── item.service.ts  # Lógica de negocio para gestionar items
├── 📁repositories/  # Gestiona la persistencia de datos
│   ├── item.repository.ts  # Repositorio para manejar la persistencia de items
├── 📁providers/  # Proveedores de servicios externos (llamadas a APIs, etc.)
│   ├── external-api.client.ts  # Proveedor para interactuar con un servicio externo via HTTP
├── 📁middlewares/  # Middleware para procesamiento de solicitudes antes de llegar a los controladores
│   ├── auth.middleware.ts  # Middleware para autenticar las solicitudes
├── 📁config/  # Configuración de la aplicación
│   ├── database.config.ts  # Configuración de la base de datos
├── 📁utils/  # Funciones auxiliares y reutilizables
│   ├── date.util.ts  # Utilidad para manejo de fechas
│   └── crypto.util.ts  # Utilidad para encriptación y manejo de contraseñas
├── 📁exceptions/  # Manejo centralizado de errores
│   ├── not-found.exception.ts  # Excepción para item no encontrado
├── main.ts  # Punto de entrada de la aplicación
├── app.module.ts  # Módulo principal de NestJS que agrupa todas las dependencias
