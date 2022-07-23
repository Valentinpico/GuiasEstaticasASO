export const Data = [
  {
    titulo: "Guest Addition",
    carpeta: "GA",
    pasos: [
      {
        paso: "1. Damos clic en device y ponemos la opcion de 'insert Guest Additions CD image'",
        img: "GA1",
      },
      {
        paso: "2.- Nos vamos a nuestro explorador de archivos y abrimos el gest additions",
        img: "GA2",
      },
      {
        paso: "3.- Seleccionamos la siguiente opción",
        img: "GA3",
      },
      {
        paso: "4.- Damos click en siguiente",
        img: "GA4",
      },
      {
        paso: "5.- Dejamos por defecto la ubicación de instalacion",
        img: "GA5",
      },
      {
        paso: "6.- Instalamos y con ello tendríamos listo el GEST ADDITIONS en el servidor",
        img: "GA6",
      },
    ],
  },
  {
    titulo: "Tareas post instalacion",
    carpeta: "TP",
    pasos: [
      {
        paso: "1.- Luego de tener el servidor y la GEST ADDITIONS instaladas debemos realizar actividades posterior a la instalacion para ello nos iremos a la consola y nos ubicamos en servidor local",
        img: "TP1",
      },
      {
        paso: "2.- Debemos cambiar el nombre del equipo para ello damos click en las WIN FCCMDGROCKS2 allí posterior a eso en la ventana que se nos abre le damos en cambiar",
        img: "TP2",
      },
      {
        paso: "3.- Cambiamos el nombre del equipo y aceptamos, luego de ello reiniciamos para que se guarden los cambios",
        img: "TP3",
      },
      {
        paso: "4.- Vamos a crear la segunda NIC ya que solo tenemos una por lo tanto, apagamos el servidor y nos vamos a VirtualBox en la configuración de nuestro servidor Windows",
        img: "TP4",
      },
      {
        paso: "5.- Vamos a permitir que la segunda red también este en nuestro servidor",
        img: "TP5",
      },
      {
        paso: "6.- Nos dirigimos a las conexiones de red, dando click derecho en internet y abriendo las configuraciones, luego en cambiar opciones del adaptador y aquí dentro configuramos la NIC",
        img: "TP6",
      },
      {
        paso: "7.- Cambiamos nombres y les asignamos a cada NIC su nombre la primera red va a tener internet por lo tanto se llamara WAN y la segunda que es la red local se llamara LAN",
        img: "TP7",
      },
      {
        paso: "8.- Procedemos a configurar la red LAN en propiedades, luego seleccionamos la IPV4, y allí colocamos los siguientes datos",
        img: "TP8",
      },
      {
        paso: "9.- Tenemos listo el cambio en nuestro servidor local como podemos revisar, el nombre del equipo y las dos NIC tanto la LAN y la WAN tenemos su descripción con las direcciones ip que le dimos a la red LAN y mientras que la otra red quedo por defecto ya que nos dará internet",
        img: "TP9",
      },
      {
        paso: "10.- En esta parte daremos click al lado de WINDOWS UPDATE",
        img: "TP10",
      },
      {
        paso: "11.- Procedemos a habilitar ",
        img: "TP11",
      },
      {
        paso: "12.- Por ultimo debe reiniciar",
        img: "TP12",
      },
    ],
  },
  {
    titulo: "Configuracion de dominio",
    carpeta: "CD",
    pasos: [
      {
        paso: "1.- Primero nos dirigimos a las actividades pendientes que son la configuración del servidor de dominio",
        img: "CD1",
      },
      {
        paso: "2.- En este apartado simplemente nos muestra el nombre de dominio que pusimos y le damos en siguiente",
        img: "CD2",
      },
      {
        paso: "3.- En esta parte podemos ver las caracteristicas que estamos instalando, podemos revisar las opciones como una de ellas esta el nombre del dominio que le dimos al servidor en nuestro caso saldrá cuartonb.com incluso podemos verlo en script mostrándonos esa información en un bloc de notas",
        img: "CD3",
      },
      {
        paso: "4.- Después de haber dado en siguiente podemos empezar a instalar",
        img: "CD4",
      },
      {
        paso: "5.- Posterior a ello procedemos a reiniciar",
        img: "CD5",
      },
      {
        paso: "6.- Al prender el servidor tendremos activado el AD DS y el DNS, terminando la configuración del dominio",
        img: "CD6",
      },
      {
        paso: "7.- Como dato extra tendremos el nombre del dominio en ambas NIC",
        img: "CD7",
      },
    ],
  },
  {
    titulo: "DNS",
    carpeta: "DNS",
    pasos: [
      {
        paso: "1.- Buscamos en herramientas DNS para empezar a configurar",
        img: "DNS1",
      },
      {
        paso: "2.- Entramos al nombre del equipo que cambiamos en la post-instalacion y veremos algunas carpetas",
        img: "DNS2",
      },
      {
        paso: "3.- Nos vamos a zonas de búsqueda de zona inversa y con click derecho agregamos una nueva zona",
        img: "DNS3",
      },
      {
        paso: "4.- Escogemos zona principal y damos click en siguiente",
        img: "DNS4",
      },
      {
        paso: "5.- Escogemos la opción que tiene dominio ya que ahí es donde hemos estado trabajando y damos en siguiente",
        img: "DNS5",
      },
      {
        paso: "6.- Damos click en siguiente",
        img: "DNS6",
      },
      {
        paso: "7.- Damos un nombre en la zona de búsqueda inversa y le asignamos la siguiente id a la red",
        img: "DNS7",
      },
      {
        paso: "8.- Dejamos por default y damos en siguiente",
        img: "DNS8",
      },
      {
        paso: "9.- Y finalizamos",
        img: "DNS9",
      },
      {
        paso: "10.- Luego creamos un nuevo reenviador condicional",
        img: "DNS10",
      },
      {
        paso: "11.- En esta ventana ponemos el dominio DNS que será google.com y en la direccion ip ponemos 8.8.8.8 o también 8.8.4.4 que también funciona en casos de que nos salga algún error ",
        img: "DNS11",
      },
      {
        paso: "12.- Finalizamos con el siguiente resultado",
        img: "DNS12",
      },
    ],
  },
  {
    titulo: "Unidades organizativas",
    carpeta: "UO",
    pasos: [
      {
        paso: "1.- Nos dirigimos en herramientas a usuarios y equipos de Active Directory",
        img: "UO1",
      },
      {
        paso: "2.- Luego podemos crear una nueva unidad organizativa como se muestra en la siguiente imagen dando click derecho en el dominio y damos en nuevo luego una nueva unidad organizativa",
        img: "UO2",
      },
      {
        paso: "3.- Dentro de aquella unidad organizativa que creamos que en mi caso es de la farmacia Santa Martha podemos crear mas U.O como en la imagen yo tengo los siguientes departamentos",
        img: "UO3",
      },
      {
        paso: "4.- También podemos crear usuarios dentro de las Unidades organizativas como se ve en la imagen",
        img: "UO4",
      },
      {
        paso: "5.- Esto nos aparece si creamos una nueva U.O solo debemos poner un nombre a esa unidad y dejar el visto y aceptar",
        img: "UO5",
      },
      {
        paso: "6.- Y acá debemos llenar los campos que nos piden para crear un usuario dentro de las U.O",
        img: "UO6",
      },
      {
        paso: "7.- Así podemos crear unidades organizativas y usuarios para ello siempre se debe tener información sobre los departamentos de una empresa y sus trabajadores para poder crear esta clase de estructuras se debe tener un previo conocimiento mediante investigación a cualquier empresa que deseemos estudiar",
        img: "UO7",
      },
    ],
  },
  {
    titulo: "DHCP",
    carpeta: "DHCP",
    pasos: [
      {
        paso: "1.- Posterior a la instalacion de DHCP que se realiza dando click en agregar roles y dando click en siguiente hasta llegar a roles de servidor y escogemos servidor dhcp, y luego solo siguiente descargando sus caracteristicas para posterior a configurarlo",
        img: "DHCP1",
      },
      {
        paso: "2.- Empezamos su configuración dando click en la bandera con el signo de precaución de amarillo ya que nos indica que falta configurarlo y así damos inicio a la configuración",
        img: "DHCP2",
      },
      {
        paso: "3.- Tenemos el nombre del dominio con usuario administrador",
        img: "DHCP3",
      },
      {
        paso: "4.- Solo cerramos la ventana",
        img: "DHCP4",
      },
      {
        paso: "5.- Agregamos un nuevo ámbito dando click derecho en IPV4 o también donde dice acción en las opciones de arriba allí nos saldrá agregar nuevo ámbito",
        img: "DHCP5",
      },
      {
        paso: "6.- Escribimos el intervalo de direcciones un rango en otras palabras la de la ip inicial y la ip final",
        img: "DHCP6",
      },
      {
        paso: "7.- Escogemos la duración de concesión ",
        img: "DHCP7",
      },
      {
        paso: "8.- Cambiamos ahora lo que hemos realizado en este proceso de configuración",
        img: "DHCP8",
      },
      {
        paso: "9.- Tenemos el nombre del dominio, el nombre del equipo y las direcciones ip agregadas",
        img: "DHCP9",
      },
      {
        paso: "10.- Activamos el ámbito ahora damos en siguiente nomas",
        img: "DHCP10",
      },
      {
        paso: "11.- Finalizamos nada mas",
        img: "DHCP11",
      },
      {
        paso: "12.- Con esto tenemos DHCP listo para mostrar una actividad de conectar y mostrar la ip del cliente en el servidor de windows",
        img: "DHCP12",
      },
      {
        paso: "13.- Por ultimo revisamos que en el servidor WINDOWS en concesiones de direcciones tenemos la ip del cliente y también para estar seguros que es esa vemos que tiene el nombre del equipo del cliente como muestra en la imagen",
        img: "DHCP13",
      },
    ],
  },
  {
    titulo: "Creacion de grupos",
    carpeta: "CG",
    pasos: [
      {
        paso: "1.- Primero debemos abrir las herramientas y escogemos usuarios y equipos de active directory",
        img: "CG1",
      },
      {
        paso: "2.- Luego escogemos alguna unidad organizativa que requiera de grupo eso dependerá de nuestra empresa y sus departamentos ya que los empleados de esa área necesitaran estar en comunicación y pueden estar en alguna oficina aparte o cualquier motivo para transmitir alguna información importante, y posterior a ello damos click derecho y en nuevo escogemos grupo",
        img: "CG2",
      },
      {
        paso: "3.- Luego de ello ponemos un nombre a ese grupo bien puede ser como el nombre del departamento donde están los empleados o como usted desee solo que debe distinguir bien el nombre para que no haya errores o confusiones en los demás departamentos que hagamos grupos también, y dejamos por defecto las demás opciones y aceptamos",
        img: "CG3",
      },
      {
        paso: "4.- Vemos que se creo nuestro grupo",
        img: "CG4",
      },
      {
        paso: "5.- Si abrimos con doble click ese grupo nos mostrara detalles de lo que hicimos anteriormente y lo mas importante es que debemos agregar los usuarios de ese departamento donde creamos el grupo lo hacemos en donde dice miembros, y agregamos los empleados, jefes o usuarios que estén en ese departamento",
        img: "CG5",
      },
      {
        paso: "6.- Aplicamos y Aceptamos los pasos realizados",
        img: "CG6",
      },
      {
        paso: "7.- Por ultimo simplemente podemos darle nuevamente doble click al grupo y en miembros ya tendremos los usuarios que agregamos si en sus areas hay muchas personas y cree usted que es necesario que tengan grupo entonces debe agregar a esos empleados ahí en su grupo ",
        img: "CG7",
      },
    ],
  },
  {
    titulo: "Particion de disco",
    carpeta: "PD",
    pasos: [
      {
        paso: "1.- Nos dirigimos a VirtualBox para crear un nuevo disco en el servidor de Windows",
        img: "PD1",
      },
      {
        paso: "2.- Escogemos CREATE",
        img: "PD2",
      },
      {
        paso: "4.- Escogemos el disco que se creo",
        img: "PD3",
      },
      {
        paso: "5.- Aquí tenemos ya agregado el disco y podemos ver sus caracteristicas",
        img: "PD4",
      },
      {
        paso: "6.- Posterior a ello cerramos esa ventana e iniciamos el servidor para irnos al administrador del servidor y en herramientas escogemos Administración de equipos",
        img: "PD5",
      },
      {
        paso: "7.- Luego nos saldrá aquella ventana donde damos click en administración de discos y luego damos click derecho en el disco 1 para inicializar el disco",
        img: "PD6",
      },
      {
        paso: "8.- Dejamos por defecto y aceptamos",
        img: "PD7",
      },
      {
        paso: "9.- Ahora de nuevo click derecho y escogemos convertir en disco dinámico ",
        img: "PD8",
      },
      {
        paso: "10.- Marcamos el disco 1 y aceptamos",
        img: "PD9",
      },
      {
        paso: "11.- Escogemos nuevo volumen simple",
        img: "PD10",
      },
      {
        paso: "12.- Escogemos el volumen del disco y en siguiente ",
        img: "PD11",
      },
      {
        paso: "13.- Escogemos la letra de unidad que deseemos usar",
        img: "PD12",
      },
      {
        paso: "13.- Escogemos la letra de unidad que deseemos usar",
        img: "PD13",
      },
      {
        paso: "14.- Escogemos el sistema de archivos y le damos un nombre al disco",
        img: "PD14",
      },
      {
        paso: "15.- Y finalizamos ",
        img: "PD15",
      },
    ],
  },
  {
    titulo: "Recursos compartidos",
    carpeta: "RC",
    pasos: [
      {
        paso: "1.- Creamos la siguiente carpeta",
        img: "RC1",
      },
      {
        paso: "2.- Agregamos un nuevo rol ",
        img: "RC2",
      },
      {
        paso: " 2.- Luego de instalarlo nos vamos a la siguiente ubicación",
        img: "RC3",
      },
      {
        paso: "3.- Y creamos un nuevo recurso compartido",
        img: "RC4",
      },
      {
        paso: "4.- Escogemos avanzado y siguiente ",
        img: "RC5",
      },
      {
        paso: "5.- Luego le colocamos la ruta de nuestra carpeta creada al inicio y damos en siguiente",
        img: "RC6",
      },
      {
        paso: "6.- Nos aparece el nombre de la carpeta y ponemos una descripción ",
        img: "RC7",
      },
      {
        paso: "7.- Seleccionamos ambas opciones y damos en siguiente",
        img: "RC8",
      },
      {
        paso: "8.- Personalizaremos los permisos",
        img: "RC9",
      },
      {
        paso: "9.- Dentro de esta escogemos la opción que tenemos en la imagen y damos en siguiente",
        img: "RC10",
      },
      {
        paso: "10.- Aquí escogemos la primera opción",
        img: "RC11",
      },
      {
        paso: "11.- Escogemos la opción de 5 GB",
        img: "RC12",
      },
      {
        paso: "12.- Y creamos ",
        img: "RC13",
      },
      {
        paso: "13.- Una vez completado abrimos el cliente para comprobar que si funciona",
        img: "RC14",
      },
      {
        paso: "14.- Colocamos la direccion siguiente \\192.168.10.100  que es la ip del servidor en el cliente haremos eso",
        img: "RC15",
      },
      {
        paso: "15.- Y una vez ya dado click en OK nos saldrá lo siguiente indicando así que la practica salió bien",
        img: "RC16",
      },
    ],
  },
  {
    titulo: "GPO",
    carpeta: "GPO",
    pasos: [
      {
        paso: "1.- Primero en herramientas vamos a administración de directivas de grupos",
        img: "GPO1",
      },
      {
        paso: "2.- Desplegamos todo eso como se ve en la imagen y dentro de objetos de directiva de grupo crearemos una nueva ",
        img: "GPO2",
      },
      {
        paso: "3.- Editamos la nueva gpo que creamos anteriormente",
        img: "GPO3",
      },
      {
        paso: "4.- Nos dirigimos a esa opción de la imagen y en panel de control les prohibimos a todos los trabajadores no tienen permitido el tumbar la casa",
        img: "GPO4",
      },
      {
        paso: "5.- A esa opción que escogimos dando doble click rellenamos los campos y aplicamos y aceptamos",
        img: "GPO5",
      },
      {
        paso: "6.- Vemos que se creo la directiva y nos toca arrastrarla hasta nuestra empresa que indique esa restricción para todos",
        img: "GPO6",
      },
      {
        paso: "7.- Podemos ver algunas opciones de esa directiva creada entre ellas podemos ver su configuración donde al final salen los pasos que hicimos ",
        img: "GPO7",
      },
      {
        paso: "8.- Ahora como ultimo verificamos que se cumpla esa restricción lo cual vamos al cliente y como la política fue para toda la empresa con cualquier usuario vale probar que funcione",
        img: "GPO8",
      },
      {
        paso: "9.- Y como vemos si nos prohíbe entrar a la opción que nosotros restringimos en el servidor",
        img: "GPO9",
      },
    ],
  },
  {
    titulo: "Instalacion de RockyLinux",
    carpeta: "RL",
    pasos: [
      {
        paso: "1.- Escogemos la maquina virtual y le damos a configuracion",
        img: "RL1",
      },
      {
        paso: "2.- Seleccionamos la máquina virtual y le damos a configuración, luego de eso nos vamos a la parte donde dice almacenamiento(1), dentro de almacenamiento seleccionamos donde esta el número (2) y en la parte donde esta el número 3 seleccionamos nuestro ISO de rockylinux. ",
        img: "RL2",
      },
      {
        paso: "3.- Después de realizar lo anterior mencionado, procedemos a iniciar la máquina para comenzar con la instalación, dandole al boton que se marca en la siguiente imagen:",
        img: "RL3",
      },
      {
        paso: "4.- Comenzamos la configuración del sistema operativo, seleccionamos el idioma",
        img: "RL4",
      },
      {
        paso: "5.- Seleccionamos la zona horaria",
        img: "RL5",
      },
      {
        paso: "6.- Seleccionamos el disco duro",
        img: "RL6",
      },
      {
        paso: "7.- Configuramos la contraseña del usuario root y tendremos todo listo para empezar con la instalación",
        img: "RL7",
      },
      {
        paso: "8.- Instalamos",
        img: "RL8",
      },
    ],
  },
  {
    titulo: "Post instalacion RockyLinux",
    carpeta: "PI",
    pasos: [
      {
        paso: "1.- Comprobación de las actualizaciones. Con el siguiente comando comprobamos las actualizaciones pendientes en nuestro servidor dnf check-update . Nos mostrará un listado de los paquetes pendientes para actualizar, y posterior a ello empezar una actualización de nuestros paquetes. ",
        img: "PI1",
      },
      {
        paso: "2.- Revisión de la versión del sistema operativo. Con el siguiente comando conoceremos la versión del Sistema Operativo instalado uname -mrs Aquí en esta parte podemos ver que nuestra maquina tiene Linux 4.18 como versión.",
        img: "PI2",
      },
      {
        paso: "3.- Actualización del servidor. Descargaremos paquetes de repositorios, instalar, desinstalar y actualizar todos los paquetes necesarios para cumplir con los requisitos de dependencia. dnf update debe contestar a todo que yes o s. ",
        img: "PI3",
      },
      {
        paso: "4.- Reiniciar el servidor Una vez actualizado, es recomendable reiniciar el servidor para que cargue la última versión de Kernel actualizada. Lo haremos con el comando reboot.",
        img: "PI4",
      },
      {
        paso: "5.- El repositorio EPEL tiene muchos más paquetes que son útiles para poder usarlos en ROCKYLINUX o Red Hat y es precisamente lo que significa EPEL o Extra Packages for Enterprise Linux (Paquetes Extra para Enterprice Linux). Desarrollado por Fedora. Repositorio EPEL. dnf install epel-release && dnf update. ",
        img: "PI5",
      },
      {
        paso: "6.- El repositorio Remi es una colección de paquetes creada por Remi Collet (de ahí el nombre). El objetivo es dotar de fuentes adicionales de software a las distribuciones Fedora y Enterprise Linux (entre las que figuran REHL, ROCKYLINUX, etc.) Primero necesitamos tener instalados los repositorios EPEL y después los instalamos haciendo: dnf install https://rpms.remirepo.net/enterprise/remi-release-8.rpm ",
        img: "PI6",
      },
      {
        paso: "7.- INSTALACIÓN DE PAQUETES DE HERRAMIENTAS. Realizaremos la instalación de un paquete de herramientas específico dnf groupinstall 'System Tools' ",
        img: "PI7",
      },
    ],
  },
  {
    titulo: "Nic con nmtui",
    carpeta: "TUI",
    pasos: [
      {
        paso: "1.- Comunicaciones de cliente-servidor con NMTUI",
        img: "TUI1",
      },
      {
        paso: "2.- Primero en la terminal del servidor de Rocky ponemos en la consola nmtui y nos saldrá el recuadro de la imagen. ",
        img: "TUI2",
      },
      {
        paso: "3.- Primero en la terminal del servidor de Rocky ponemos en la consola nmtui y nos saldrá el recuadro de la imagen.",
        img: "TUI3",
      },
      {
        paso: "4.- En este recuadro configuramos las direcciones el DNS y aceptamos los cambios al final. Nos aparece nuestra ip con la mascara de subred /24 por lo que esta bien el proceso.",
        img: "TUI4",
      },
    ],
  },
  {
    titulo: "Bitvise",
    carpeta: "BT",
    pasos: [
      {
        paso: "1.- Conexión terminada entre el cliente Windows con el servidor mediante bitvise ",
        img: "BT1",
      },
      {
        paso: "2.- Vemos el resultado final del manejo de enviar, ya que podemos enviar archivos desde el Cliente Windows al servidor ServeRocky y así mismo viceversa. ",
        img: "BT2",
      },
    ],
  },
  {
    titulo: "SSH",
    carpeta: "SSH",
    pasos: [
      {
        paso: `1.- OPENSSH-SERVER (CORRIENDO Y ACTIVO)   systemctl start sshd Comprobamos que el servicio sshd se este corriendo en el lado del cliente: mkdir gato (en el server rocky creamos el directorio) ls (mostramos los directorios en el servidor) `,
        img: "SSH1",
      },
      {
        paso: `2.- DIRECTORIOS CREADOS (LOS DE COLOR AZUL)
        EL ls -a nos muestra los directorios ocultos y vemos que tenemos gato visible desde el cliente ya que ese directorio lo creamos en el servidor. `,
        img: "SSH2",
      },
      {
        paso: `3.- Aquí fue donde creamos el directorio gato y en la imagen anterior del cliente logramos ver ese directorio que creamos en el servidor.  `,
        img: "SSH3",
      },
    ],
  },
  {
    titulo: "DNF",
    carpeta: "DNF",
    pasos: [
      {
        paso: "1.- Para actualizar un paquete individualmente (consultar que es httpd) El servidor HTTP Apache es un servidor web HTTP de código abierto, para plataformas Unix (BSD, GNU/Linux, etc.), Microsoft Windows, Macintosh y otras, que implementa el protocolo HTTP/1.1 y la noción de sitio virtual según la normativa RFC 2616. Cuando comenzó su desarrollo en 1995 se basó inicialmente en código del popular NCSA HTTPd, pero más tarde fue reescrito por completo. Su nombre se debe a que alguien quería que tuviese la connotación de algo que es firme y enérgico pero no agresivo, y la tribu Apache fue la última en rendirse al que pronto se convertiría en gobierno de Estados Unidos, y en esos momentos la preocupación de su grupo era que llegasen las empresas y civilizasen el paisaje que habían creado los primeros ingenieros de internet. Además Apache consistía solamente en un conjunto de parches a aplicar al servidor de NCSA. En inglés, a patchy server (un servidor parcheado) suena igual que Apache Server. dnf update httpd ",
        img: "DNF1",
      },
      {
        paso: "2.- Listar paquetes instalados. Lista los paquetes instalados y disponibles en el sistema con el siguiente comando: dnf list installed.",
        img: "DNF2",
      },
      {
        paso: "3.- Enumerar paquetes instalados y disponibles Enumera todos los paquetes instalados y disponibles con el siguiente comando: dnf list. ",
        img: "DNF3",
      },
      {
        paso: "4.- Enumerar paquetes enumera solo los paquetes disponibles con el siguiente comando: dnf list available. ",
        img: "DNF4",
      },
      {
        paso: "5.- Búsqueda de paquetes buscar e instalar paquete usamos search dnf search htop ",
        img: "DNF5",
      },
      {
        paso: "6.- Reinstalar un paquete Para reinstalar el paquete htop, debemos hacer: dnf reinstall htop.  ",
        img: "DNF6",
      },
      {
        paso: "7.- Descarga de paquete e instalarlo  Una opción interesante es que podemos descargar los paquetes sin instalarlo dnf download htop. . ",
        img: "DNF7",
      },
    ],
  },
  {
    titulo: "Guest Additions RockyLinux",
    carpeta: "GAR",
    pasos: [
      {
        paso: "1.- Instalamos los encabezados del kernel y DKMS. Lo siguiente es que con la ayuda del repositorio EPEL instalaremos varias herramientas; kernel y DKMS (Dynamic Kernel Module Support) para construir e instalar el módulo Kernel requerido para instalar la función Guest Addition VirtualBox en la distribución AlmaLinux 8.Dé su permiso para instalar escribiendo Y y presione la tecla Enter. ",
        img: "GAR1",
      },
      {
        paso: "2.- Actualizamos el KERNEL aunque, el sistema realizará la actualización del kernel automáticamente para realizar los cambios, sin embargo, a veces puede que no. Por lo tanto, es mejor ejecutar el comando de actualización del kernel antes de reiniciar el sistema.",
        img: "GAR2",
      },
      {
        paso: "3.- Reiniciamos el sistema Finalmente, para aplicar los cambios realizados por Virtualbox Guest Additions y obtener sus funciones en el Guest, simplemente reinicie el sistema. Puede usar el siguiente comando para eso.",
        img: "GAR4",
      },
      {
        paso: "4.- Habilite las funciones compartir clip y arrastrar-soltar",
        img: "GAR4",
      },
      {
        paso: "5.- Instalamos GEST ADDITIONS",
        img: "GAR5",
      },
    ],
  },
  {
    titulo: "Apache",
    carpeta: "AP",
    pasos: [
      {
        paso: "1.- Instalamos el servicio de httpd indispensable para apache con el comando. sudo dnf install httpd",
        img: "AP1",
      },
      {
        paso: `2.- En nuestro caso lo tendremos ya descargado posterior a eso ejecutaremos las siguientes líneas de comandos:

        Activar
        
        sudo sytemctl star httpd
        
        Habilitar
        
        sudo sytemctl enable httpd
        
        Estado
        
        sudo sytemctl status httpd
        
        3.- Procedemos a Habilitar puerto 80 en el firewall y 443 para paginas seguras con los siguientes comandos:
        
        sudo firewall-cmd --zone=public --add-port=80/tcp
        
        sudo firewall-cmd --zone=public --add-port=443/tcp
        
        Luego con sudo firewall-cmd –reload reiniciamos el firewall
        
        Comprobación de instalación de Apache
        
        Abrir navegador firefox (servidor)
        
        Colocar en la barra de dirección: ip del servidor (192.168.9.10), Enter. `,
        img: "AP2",
      },
      {
        paso: "4.- Ahora vamos a crear nuestras paginas web y vamos a la siguiente ruta cd /etc/http/conf Aquí configuramos nuestros puertos para nuestras paginas web",
        img: "AP3",
      },
      {
        paso: "5.- Iremos a la siguiente ruta para configurar el fichero conf.d",
        img: "AP4",
      },
      {
        paso: "6.- Luego regresamos al cd /etc y con el comando sudo nano hosts vamos a agregar los hosts de nuestras paginas web ",
        img: "AP5",
      },
      {
        paso: "7.- Con el comando sudo mkdir crearemos las respectivas carpetas de web 1 y web2 donde posterior a ello con el comando cp vamos a copiar evaluacion.html a web1 y web2",
        img: "AP6",
      },
      {
        paso: "8.- Como paso final podemos modificar el código de los ficheros con el sudo nano evaluacion.html primero desde la web 1 y luego la web2 así al final nos quedara el resultado como indican las imágenes:",
        img: "AP7",
      },
      {
        paso: "",
        img: "AP8",
      },
    ],
  },
  {
    titulo: "MariaDB",
    carpeta: "MDB",
    pasos: [
      {
        paso: `1.- Comenzamos la descargar e instalacion de Mariadb con el comando sudo dnf install mariadb-server 

        Luego de ello debemos darles que si o "y" a todas las opciones presentes en la instalación de mariadb y esto lo hacemos entrando a mariadb con los comandos:
        
        -systemctl start mariadb.service
        
        -systemctl enable mariadb.service
        
        -systemctl status mariadb.service
        
        2.- Ahora ya esta listo, para entrar a mariadb debemos de ejecutar el siguiente comando
        
        mysql -u root -p`,
        img: "MDB1",
      },
      {
        paso:"2.- Podemos probar MariaDB viendo nuestras bases de datos ya creadas con el comando show databases; o tambien podemos crear una con el comando create database (nombre de la base de datos); ",
        img:"MDB2"
      }
    ],
  },

  {
    titulo: "Bind",
    carpeta: "DHCP",
    pasos: [
      {
        paso: "1.- Descargamos Bind y su paquete bind-utils con los comandos: -sudo dnf install bind   -sudo dnf install bind-utils Vemos que con el comando rpm -qa (y colocando el nombre de los paquetes que instalamos), nos saldrá que tenemos instalado de manera correcta bind y bind-utils.",
        img: "BIND1",
      },
 
    ],
  },
  {
    titulo: "DHCP RockyLinux",
    carpeta: "DHCP",
    pasos: [
      {
        paso: "1.- Con el comando sudo dnf install dhcp-server instalaremos este paquete en nuestro servidor. Igual que en el bind podemos verificar que se instalo correctamente mediante el comando rpm -qa dhcp-server.        ",
        img: "DR1",
      },
    ],
  },

];
