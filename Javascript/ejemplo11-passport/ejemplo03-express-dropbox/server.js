var express = require('express');
var passport = require('passport');
var DropboxStrategy = require('passport-dropbox');
var session = require('express-session');

var app = express();

let users = [];

//cuando tenemos session hay que inicializar passport
app.use(passport.initialize());
app.use(session(
    {
        secret:'clave secreta',
        resave: false,
        saveUninitializated: true,
        //secure:true es cuando se utiliza ssl
        cookie:{secure:false}
    }
));

//Hay que indicarle como deserializar y serializar el usuario
passport.serializeUser((user,done)=>{
    done(null,user);
});
passport.deserializeUser((user,done)=>{
    done(null,user);
});


passport.use(new DropboxStrategy({
    consumerKey:'asdfasd534sdf',
    consumerSecret:'asdfasd34f',
    callbackURL:'http://localhost:8080/dropbox'
},(token,tokenSecret,profile,cb)=>{
    //aqui podemos añadir el token en mongo
    console.log("Perfil de Dropbox : ",profile);
    if(users[profile.id]){
        next(null,users[profile.id]);
    }else{
        users[profile.id]=profile;
        next(null,profile);
    }

}));

app.get("/dropbox",passport.authenticate('dropbox'),(request,response)=>{
    response.send("Soy feliz");
})

app.listen(8080);