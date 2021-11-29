/*
  -- Datos del nuevo gmail --
  user: neo3dev@gmail.com
  pass: dev321MaIl
  Fec Nac: 28 de junio de 1996

  -- Ejemplo --
  node node_modules/gulp/bin/gulp.js email-send --path=information/p-re-register.html
  yarn email --path=lead/p-december-2018.html
*/

var gulp = require('gulp');
var mail = require('gulp-mail');
var argv = require('yargs').argv;

var config = {
    smtpInfo: {
        auth: {
            user: 'neo3dev@gmail.com',
            pass: 'dev321MaIl'
        },
        host: 'smtp.gmail.com',
        secureConnection: true,
        port: 465
    },
    users: {
        // Victor Morales
        P047613: [
            // 'victormoralesf28@gmail.com',
            // 'victor.morales@sura.pe',

            // 'joel.sanchez@sura.pe',
            // 'joel.sanchez.0705@gmail.com',

            'cynthia.lopezm@sura.pe',
        ],
        NP864710: [
            'rodolfo.cruzado@mdp.com.pe',
            'lennin.cruzado@gmail.com',
            'joel.sanchez.0705@gmail.com',
            'joel.sanchez@sura.pe',
            // 'cynthia.lopezm@sura.pe',
        ]
    },
    userActive: require("os").userInfo().username
}

gulp.task('email-send', function () {
    return gulp.src('./dist/html/' + argv.path)
        .pipe(mail({
            subject: "Mensaje de prueba: " + argv.path,
            to: config.users[config.userActive],
            from: 'neo3dev <neo3dev@gmail.com>',
            smtp: config.smtpInfo
        }));
})
