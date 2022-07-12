

function Checked(){
  const inputName = document.getElementById('name').value
  const inputEmail = document.getElementById('email').value
  const inputPassword= document.getElementById('password').value
  const selected = document.getElementById('selected').value
  
  document.getElementById("name").addEventListener("click", watch);
  document.getElementById("email").addEventListener("click", watch);
  document.getElementById("password").addEventListener("click", watch);
  document.getElementById("selected").addEventListener("click", watch);

  function watch(){
    if(inputName !== /^[A-Za-z]{3,}$/){
      alert('Preencha o campo nome corretamente')
    }else if(inputEmail !== /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    ){
      alert('Preencha o campo email corretamente')
    }else if(inputPassword !== /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/){
      alert('Preencha o campo password corretamente')
    }else if(selected === ""){
      alert('Preencha o campo selected corretamente')
    }else{

    }
  }
}  

export default Checked;