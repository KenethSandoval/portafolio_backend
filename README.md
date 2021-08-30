# Backend de mi portafolio personal

## Idea principal

Realizar un backend con un estricto tema de seguridad para tener solamente un usuario
(administrador) con accesso al panel de administracion, donde podra crear nuevos post
(proyectos propios), llevando el paradigma de programacion funcional con typescript y
siguiendo los principios SOLID e implementando TDD

[*] Modelo de usuario

- Email
- Password
- Fecha de acceso

[*] Model de posts

- Titulo
- Descripcion
- Imagen
- Url demo
- Url github
- Tags(tecnologias y lenguajes)

## Diseño REST

- Publico [] GET /projects: Todos los proyectos publicados

- Admin [] POST /login: Autenticacion del administrador [] POST /create-project: Publicar
  un nuevo proyecto [] UPDATE /projects: Actualizar datos de algun proyecto [] DELETE
  /projects: Eliminar algun proyecto
