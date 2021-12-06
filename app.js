
let nequipes=Number(document.querySelector("#qtdEquipes").value)
let emailsForm=document.querySelector("#emails")
let btnGerar=document.querySelector("#btnGerar")

let display=document.querySelector("#display")

let equipes=document.createElement("h1")
equipes.innerHTML="Equipes"
let equipeArray=[]

// Criação da listagem
for(n=0; n<nequipes;n++){
  let ul=document.createElement("ol")
  ul.innerHTML=`Equipe ${n+1}`

  equipeArray.push(ul)
}

//Sorteio Aluno

pegarAlunoAleatorio=function(alunos){
  let alunoIndex=Math.floor(Math.random() * alunos.length)
  let aluno=alunos[alunoIndex]
  alunos.splice(alunoIndex, 1); 
  return aluno;
}
//Distribuição dos alunos

distribuiAlunosNasEquipes=function(equipe,alunos,qtdNaEquipe){
  for (aluno=0;aluno<qtdNaEquipe;aluno++){
    let liAluno=document.createElement("li")
    liAluno.innerHTML=pegarAlunoAleatorio(alunos)
    equipe.appendChild(liAluno)
  }
  return equipe
}

btnGerar.addEventListener("click",()=>{
  display.innerHTML=""
  let emails=emailsForm.value.split(',')
  display.appendChild(equipes)
  let alunosPorEquipe=emails.length/nequipes;
  equipeArray.forEach(equipe => {
    equipe.innerHTML=""
    distribuiAlunosNasEquipes(equipe,emails,alunosPorEquipe)
    display.appendChild(equipe)
  });
console.log(emails)
  let btnPdf=document.createElement('input')
  btnPdf.type = 'button';
  btnPdf.value = 'Gerar Pdf';
  btnPdf.id="btnPdf"
  display.appendChild(btnPdf)
  btnPdf.addEventListener("click",()=>window.print())
  
})




