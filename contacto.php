<?php
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $baseDeDatos = "contacto";

    $enlace = mysqli_connect ($servidor, $usuario, $clave, $baseDeDatos);

    if(isset($_POST['registro'])){
        $nombre= $_POST ['nombre'];
        $correo= $_POST ['correo'];
        $producto= $_POST ['producto'];

        $insertarDatos = "INSERT INTO contacto VALUES('$nombre','$correo','$producto','')";
        $ejecutarInsertar = mysqli_query ($enlace,$insertarDatos);

        if($ejecutarInsertar){
            
            header('Location: contactos.html');
            exit(); 
        } else {
            echo "Error al enviar el formulario. Por favor, inténtalo de nuevo.";
        }
    }
    
?>