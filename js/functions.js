var i = 0;
var txt = 'Full Stack Developer';
var speed = 180;
var conteudo = [
'Full Stack Developer',
'Cloud & DevOps Analyst'
];
var j = 0;

function typeWriter() {

  document.getElementById("profissao").innerHTML += conteudo[j].charAt(i);
  if (i < conteudo[j].length) {
    i++;
    setTimeout(typeWriter, speed);
  } else {
    j = j == 0 ? j = 1 : 0;
    document.getElementById("profissao").innerHTML = '';
    i = 0;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();