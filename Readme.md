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

## Cypress
Las actividades del taller de Cypress se encuentran en el siguiente repositorio: https://github.com/amespinosa11/taller_cypress.

## PlayWright


La principal diferencia entre PlayWright y Puppeteer, es que el segundo provee un API que permite controlar y hacer pruebas sobre Chrome o Chromium, a diferencia de PlayWright que permite realizar en diferentes navegadores como Chromium, WebKit y Firefox.  


| | Cypress | Protractor | Puppeteer | PlayWright |
|--|--------|------------|-----------|------------|
|Interfaz gráfica | Sí | No | No | No |
| Generador de configuración | Sí | Sí (Con angular CLI) | No |
| Locators para AngularJS | No | Sí | No | No |
| Integración con Test frameworks | No, interno (sintaxis jasmine) | Jasmine, Mocha, Cucumber | Principalmente todos | Sí |
| Sistemas operativos | Mac, Linux | Mac, Linux, Windows | Mac, Linux, Windows | Mac, Linux, Windows |
| Grabación de pruebas | Sí | No | No | No |
| Selenium backend | No | Sí | No | No |
| Time-traveling | Sí | No | No | No |

## Autor
Ana María Espinosa
