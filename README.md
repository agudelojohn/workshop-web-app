🚀 FASE 1: Configuración inicial y MVP

🔧 Configuración del proyecto
    ✅ Crear proyecto con npx create-next-app@latest (App Router).
    ✅ Configurar TailwindCSS para estilos.
    ✅ Instalar dependencias útiles: react-hook-form, zod, @tanstack/react-query, axios, @auth/core (o next-auth si usas auth).
    ✅ Configurar archivo .env con variables básicas.

🔐 Módulo de Autenticación
    Página de Login (email/contraseña o código).
    Middleware para proteger rutas privadas.
    Persistencia de sesión con cookies o JWT.

📋 Módulo de Citas
    Formulario para agendar cita (tipo de servicio, fecha, vehículo, cliente).
    Página con lista de citas próximas.
    CRUD completo de citas (crear, ver, editar, eliminar).
    Validaciones con Zod y feedback al usuario.

👤 Módulo de Clientes
    Registro de cliente con datos básicos.
    Asociar vehículos al cliente.
    Historial de servicios por cliente.

🚗 Módulo de Vehículos
    Registrar vehículo con: placa, marca, modelo, año.
    Asociar a cliente.
    Mostrar en agenda de servicios.

🧾 Módulo de Servicios
    Crear tipos de servicios (lavado, cambio de aceite, diagnóstico...).
    Asignar servicios a cada cita.
    Marcar servicio como completado.


⚙️ FASE 2: Administración y funcionalidades adicionales

📊 Panel Administrativo
    Dashboard con tarjetas: total clientes, citas del día, servicios completados.
    Reporte de ingresos por mes.
    Lista de empleados (opcional).

🔔 Notificaciones
    Enviar email/SMS de confirmación de cita.
    Recordatorio antes de la cita (opcional).
    Notificación al completar un servicio.

🧑‍🔧 Gestión de empleados (opcional)
    Asignar empleado a un servicio.
    Ver historial por empleado.
    Roles: admin, mecánico, lavador.


📱 FASE 3: Extras y despliegue

🌐 PWA (opcional)
    Convertir la app en PWA para usar en móviles como si fuera una app nativa.

🧾 Facturación
    Generar factura por servicio.
    Descargar como PDF.
    Registrar pagos y deudas.

☁️ Despliegue
    Subir código a GitHub.
    Deploy en Vercel.
    Configurar dominio personalizado (opcional).