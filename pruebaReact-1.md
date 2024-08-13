## Prueba React

### Objetivo
>Desarrollar una aplicación en React que consuma datos de un endpoint que proporciona información sobre resultados de competiciones, muestre estos datos en una tabla y utilice una funcionalidad de scroll infinito para cargar más datos conforme el usuario se desplaza hacia abajo.

### Requisitos
> - Componentes React: La aplicación debe estar dividida en componentes funcionales y reutilizables.
> - Estado y Efectos: Uso eficiente de useState y useEffect para gestionar el estado y los efectos secundarios.
> - Consumo de API: Realizar llamadas a un endpoint para obtener datos.
> - Scroll Infinito: Implementar scroll infinito para cargar más datos cuando el usuario llegue al final de la tabla.
> - Diseño Responsivo: La aplicación debe ser responsiva y visualmente atractiva.


#### Para autorización y obtención del JWT:

>curl --location 'https://play.nextcaddy.com/api/login_check' \
--header 'Content-Type: application/json' \
--header 'User-Agent: insomnia/8.6.1' \
--data '{
"username": "666666666",
"password": "admin"
}'

#### Url consumo Endpoint
> https://play.nextcaddy.com/api/results?page=144