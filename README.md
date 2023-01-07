# Challenge **greydive**

Realizar una app en React.js que lea el siguiente [archivo JSON](https://drive.google.com/file/d/1hsOMsEHx5mjFSt0nIPovciai8DdLq0Nu/view?usp=sharing) y genere con cada ítem una interfaz de app de encuesta (como Google Forms).

En cuanto a diseño y estética tiene que diferir de Google Forms. Puedes utilizar cualquier librería que creas necesaria.

  

Las respuestas de la encuesta deben ser enviadas a una base de datos de Firebase.

Dicha base de datos tiene que ser de su propiedad. No nos compartas acceso a la base de datos.

  

Por último, traé las respuestas de la base de datos ya mencionada y mostralas en la misma app pero en otra ruta. Al presionar “enviar” en el formulario tiene que aparecer un mensaje y el acceso a esa ruta en donde estarán las respuestas. El diseño y estética queda a libre elección.

# Detalles.

- Utilice  Typescript.  
- Para el formulario usé  Formik, para las validaciones Yup, para las alertas Sweetalert2, para las rutas react-router-dom, utilice este boilerplate [Link](https://github.com/Julian1993ARG/boilerplate-vite-react-typescript).  
- Para el maquetado de formulario utilice el que me da ReactBootstrap, es responsivo, además  está validado, todos los campos son requeridos, la edad debe ser mayor a 18 años, no se puede dar submit hasta que la validaciónes sean pasadas, se valida y muestran los errores luego de mínimamente presionar el campo.  
- Si no llegas a completar el formulario los datos se guardan en localStorage para que cuando vuelvas se inicia desde donde lo dejaste.  
- Al hacer submit luego de pasar las validaciones, se guarda en Firebase en al coleccion "users".  
-