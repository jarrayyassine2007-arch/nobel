/*alert("bienvenue sur notre site,Prix Nobel")
document.write("<h3>"+"bienvenue sur notre site,Prix Nobel"+"</h3>")
*/
/***********play video**************/
function playvid() {
  document.getElementById("video").play();
  document.getElementById("video").style.width = "700px";
  document.getElementById("video").style.height = "500px";
  document.getElementById("video").style.border = "3px solid red";
  document.getElementById("video").muted = false;
}

/***********pause video************/
function pausevid() {
  document.getElementById("video").pause();
  document.getElementById("video").style.width = "450px";
  document.getElementById("video").style.height = "250px";
  document.getElementById("video").style.border = "none";
}
/*****video est en pause ou en marche*****/
function marche() {
  alert("la vidéo est en marche");
}
function arret() {
  alert("la vidéo est en pause");
}

/********image1 *******/
function image1() {
  document.getElementById("image1").src = "images.jpg";
  document.getElementById("image1").style.background = "black";
  document.getElementById("image1").style.color = "ebad50";
  document.getElementById("image1").style.font = "20px Georgia,serif";
}
/*******niveau d'experience changed********/
function valeur() {
  document.getElementById("p1").value = document.getElementById("p").value;
}

/***compteur de caractere saisie */
function compter() {
  document.getElementById("res").value =
    document.getElementById("pro").value.length + 1;
}
/***activer */
function activer() {
  document.getElementById("ville").disabled = false;
}
//*** */
function ninscrit() {
  if (document.getElementById("homme").checked == true) {
    var g = document.getElementById("homme").value;
  } else {
    var g = document.getElementById("femme").value;
  }
  var v = document.getElementById("pays").value;
  var a = document.getElementById("age").value;
  document.getElementById("ins").readOnly = false;
  document.getElementById("ins").value = g + a + v;
}
/*****controle de saisir sur le nom (alpha,alphanum) */
function alpha(ch) {
  var i = 0;
  while (
    i < ch.length &&
    ch[i].toUpperCase() >= "A" &&
    ch[i].toUpperCase() >= "Z"
  ) {
    i++;
  }
  return i == ch.length;
}
function num(ch) {
  i = 0;
  ch = ch.toUpperCase();
  while (
    i < ch.length &&
    
      ((ch.charAt(i) >= "0" && ch.charAt(i) <= "9") ||
      ch.charAt(i) == "")
  ) {
    i++;
  }
  return i == ch.length;
}
/****fonction valid */
function valid() {
  v = true;
  nom = document.getElementById("nom").value;
  if (nom.length < 3 || alphanum(nom) == false) {
    alert("nom invalide");
    v = false;
  } else {
    nom = nom.trim().totowerCase();
  }

  /***tel */
  var tel = document.getElementById("tel").value;
  if (tel.length != 8 || num(tel) || tel.charCodeAt(0) < 49) {
    alert("verifier le numero de telephone");
    v = false;
  }
  if (
    document.getElementById("homme").checked == false &&
    document.getElementById("femme").checked == false
  ) {
    alert("genre non selectionner");
    v = false;
  }
}
/***date **********/
while (condition) {
  
}