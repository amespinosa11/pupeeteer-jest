# Puppeteer + Jest 
En este proyecto se realizan pruebas sobre un mock de registro que se encuentra en el siguiente repositorio: https://github.com/amespinosa11/angular-6-registration-login-example.

## Como correr las pruebas 
```
jest
```

En caso de no tener instalado se deben instalar las diferentes dependencias.
```
npm install
```

* Los escenarios de pruebas creados son los siguientes.


| Nombre | Descripción | Resultado esperado | Estado |
| ---------- | ------ | --------- | ------ |
| Register Show Errors | Dar click en botón de registro sin ingresar ningún campo | Obtener errores que los campos son obligatorios | Exitoso |
| Register Show Password min length | Ingresar una contraseña con solo un caracter | Obtener error con la cantidad minima de caracteres requeridos | Exitoso |
| Register Success | Llenar todos los campos según lo indicado y obtener mensaje de exito | Obtener mensaje de exito al registrarse | Exitoso | 

![alt-text](https://github.com/amespinosa11/puppeteer-jest/blob/master/images/results.PNG)

