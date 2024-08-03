<h2>Tracechain - Sistema de Trazabilidad en Javascript sobre Scroll ETH</h2> 

<b>index</b>
es la pagina principal, en ella se encuentra solo un mensaje de bienvenida y para variar la cantidad de cadenas de bloques generadas en el registro unico. 
login

es la puerta de entrada de acceso al sistema, junto con ella tenemos la pagina register y los scripts para administrar cuentas de usuario desde el dashboard de administrador, en la base de datos una sola variable del tipo bool es necesaria para determinar quien ingrese al sistema es usuario o administrador, las opciones de cambiar clave o cerrar la cuenta de manera definitva se realiza desde la pagina de configuracion. 

</b>dashboard</b>
es donde se enceuntra la informacion como registros generados en la db y registros definitvos en la blockchain, estos se dividen en dos colores, colores oscuros para db y colores claros para la blockchain para demostrar visualmente que los registros de la cadena de bloques son unicos e inalterables.

<b>settings</b>
como lo mencione cuando hablaba de login esta seccion se encuentra todas las configuaciones como clave de usuario, informacion del perfil y eliminar definitavamente la cuenta, las cuentas se borran pero sus registros en la blockchain son permanentes. 

<b>profile</b>
nombre, foto y descripcion del usuario en menos de 240 caracteres, un solo enlace permitido, este perfil puede establecerse como publico o privado(solo para usuarios de la plataforma)

<b>registers</b>
como lo menciona esta pagina es para crear y modificar registros en la base de datos, estos funcionan de la siguiente manera, al crearse un nuevo registro tiene dos opciones o tomar el numero de un registro ya existente o generarse de 0, de esta forma tenemos generarda la cadena que previamente sera convertido en un hash.

<b>blockchain</b>
dentro de esta aplicacion tenemos una seccion en donde se genera el libro de operaciones, unico e inalterable. 



