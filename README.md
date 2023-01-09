# Challenge **greydive**

  

Realizar una app en React.js que lea el siguiente [archivo JSON](https://drive.google.com/file/d/1hsOMsEHx5mjFSt0nIPovciai8DdLq0Nu/view?usp=sharing) y genere con cada ítem una interfaz de app de encuesta (como Google Forms).

  

En cuanto a diseño y estética tiene que diferir de Google Forms. Puedes utilizar cualquier librería que creas necesaria.

  

  

Las respuestas de la encuesta deben ser enviadas a una base de datos de Firebase.

  

Dicha base de datos tiene que ser de su propiedad. No nos compartas acceso a la base de datos.

  

  

Por último, traé las respuestas de la base de datos ya mencionada y mostralas en la misma app pero en otra ruta. Al presionar “enviar” en el formulario tiene que aparecer un mensaje y el acceso a esa ruta en donde estarán las respuestas. El diseño y estética queda a libre elección.

  

# Detalles.

- Tegnologias:
	- 
	- Typescript, Formik, Yup, bootstrap, React-bootstrap, Sweelert2, vite, xlsx, firebase, Standar, googleAnalyt, react-router-dom, [boilerplate](https://github.com/Julian1993ARG/boilerplate-vite-react-typescript).

- Maquetado:
	- 
	- Para el maquetado se utilizó el sistema de grillas y componentes de bootstrap y React-bootstrap, además el proyecto es responsivo.
- Validaciones:
	- 
	- Full_name: 
		- Requerido.
		- Mínimo 10 caracteres.
		- Máximo 50 caracteres.
		- Sin caracteres especiales.
	- Email:
		- Requerio.
		- Tipo correo electrónico.
	- Birth_date:
		- Requerido.
		- El usuario debe ser mayor de 18 años.
	- Country_of_origin:
		- Requerido.
		- Debe ser uno de los países  válidos.
	- Terms_and_conditions:
		- Requerido.

- Firebase:
	- 
	- Se guardan los datos en una colección llamada "users".

- Extras:
	- 
	- Los valores ingresados en el formulario se guardan en el LocalStorage, en caso de quedar incompleto se podrá continuar desde donde se dejó.  
	- Las respuestas se renderizan en una grilla de cards con los datos del usuario.  
	- Se calculó la edad del usuario restando la fecha actual menos la ingresada.  
	- Se renderiza un gráfico con los datos de los países  más  elegidos.  
	- Se permite descargar la información en formato .xlsx, donde las propiedades serán columnas y los valores serán filas.  
	- La aplicación dispone de dos rutas( /, /results ).  
	- Se utilizó  Lazy  Loading en los dos componentes principales, lo que evita carga innecesaria de información.
