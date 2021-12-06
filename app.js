let nequipes=0
let emailsForm=""
let btnGerar=document.querySelector("#btnGerar")

let display=document.querySelector("#display")

let equipes=document.createElement("h1")
equipes.innerHTML="Equipes (O membro sublihado será o lider da equipe)"



//Sorteio Aluno

pegarAlunoAleatorio=function(alunos){
  let alunoIndex=Math.floor(Math.random() * alunos.length)
  let aluno=alunos[alunoIndex]
  alunos.splice(alunoIndex, 1); 
  return aluno;
}
//Distribuição dos alunos

distribuiAlunosNasEquipes=function(equipe,alunos,qtdNaEquipe){
  if(alunos.length%nequipes==alunos.length && alunos.length!=qtdNaEquipe){
    qtdNaEquipe-=1
  }
  for (aluno=0;aluno<qtdNaEquipe;aluno++){
    let liAluno=document.createElement("li")
    liAluno.innerHTML=pegarAlunoAleatorio(alunos)
    equipe.appendChild(liAluno)
  }
  return equipe
}

btnGerar.addEventListener("click",()=>{
   
  nequipes=Number(document.querySelector("#qtdEquipes").value)
  emailsForm=document.querySelector("#emails")
  display.innerHTML=""
  let emails=emailsForm.value.split(',')
  if(emails[0]==''){
    window.alert("Você deve adicionar os nomes dos alunos")
    return;
  }
  if(nequipes>emails.length){
    window.alert("O número das equipes deve ser inferior ou igual ao número de membros")
    return;
  }
  display.appendChild(equipes)
let equipeArray=[]
  
  let alunosPorEquipe=Math.round(emails.length/nequipes);
  if(alunosPorEquipe>=1){
    
    equipeArray=criaListagem(nequipes)

  }else{
    equipeArray=criaListagem(emails.length)
  }

  i=1
  equipeArray.forEach(equipe => { 
    equipe.innerHTML=""
  
  
    p=document.createElement("h2")
    p.innerHTML=`Equipe ${i}`
    display.appendChild(p)
    
    if(i==equipeArray.length){
      distribuiAlunosNasEquipes(equipe,emails,emails.length)
    }else{
      distribuiAlunosNasEquipes(equipe,emails,alunosPorEquipe)
    }
    i++
    display.appendChild(equipe)
  });
 
  criaBotaoGerarPDF()
})

criaBotaoGerarPDF=function(){
  let btnPdf=document.createElement('input')
  btnPdf.type = 'button';
  btnPdf.value = 'Gerar Pdf';
  btnPdf.id="btnPdf"
  display.appendChild(btnPdf)
  btnPdf.addEventListener("click",()=>window.print())
}

criaListagem=function(nequipes){
let equipeArray=[]
  // Criação da listagem
  for(n=0; n<nequipes;n++){
    let olEquipe=document.createElement("ol")
    equipeArray.push(olEquipe)
  }
  return equipeArray
}


