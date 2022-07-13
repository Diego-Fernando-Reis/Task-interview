import React, {useState} from "react";
import Title from '../../atoms/title'
import Input from '../../atoms/input'
import Footnotes from "../../atoms/footnotes";
import Button from "../../atoms/button";
import Subtitle from '../../atoms/subtitle'
import Select from "../../atoms/select";
import { FormStyle } from "./style";

function Form(props){
  const[user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const[status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const valueInput = e => setUser({...user, [e.target.name]: e.target.value});
  const addUser = async e =>{
    e.preventDefault();

    if(!validate()) return;

    const saveDataForm = true;

    if(saveDataForm){
      setStatus({
        type: 'success'
      },
      
      alert('Usuário cadastrado com sucesso!'));
      setUser({
        name: '',
        email: '',
        password: ''
      });
      btn.disabled = true;
      btn.style.backgroundColor = 'rgba(128, 128, 128, 0.119)'
      btn.style.color = 'gray'
      btn.style.cursor = 'auto'
    }else{
      setStatus({
        type: 'error',
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
      });
    }
  }
  
  let btn = document.getElementById('btn');
  
  function inputBlur(){
    if(!validate()) return;

    const saveDataForm = true;

    if(saveDataForm){
      btn.style.backgroundColor = 'blue'
      btn.style.cursor = 'pointer'
      btn.disabled = false;
      setStatus({
        type: 'success',
        mensagem: ""
      });
    }else{
      btn.disabled = true;
    }
  }

  

  function validate(){
    if(!user.name) return setStatus({type: 'error',
    mensagem: 'Erro: Necessário preencher o campo nome!'});
    if(!user.email) return setStatus({type: 'error',
    mensagem: 'Erro: Necessário preencher o campo email!'});
    if(!user.password) return setStatus({type: 'error',
    mensagem: 'Erro: Necessário preencher o campo password!'});

    return true;
  }

  return(
    <FormStyle>

      {status.type === 'success' ? <p style={{color: "green"}}>{status.mensagem}</p>: ''}
      {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.mensagem}</p>: ''}
      <form onSubmit={addUser}>
        <Title content={`Let's set up your account`}/>
        <Subtitle content={`Already have an account `} diferent='Sign in'></Subtitle>
        <Input  type="text" placeholder="Your Name" name="name" id="name" func={valueInput} value={user.name} onsubmit={addUser} onblur={inputBlur} onkeypress={inputBlur}/>
        <Input type="text" placeholder="Email Address" name="email" id="email" func={valueInput} value={user.email} onsubmit={addUser} onblur={inputBlur} onkeypress={inputBlur}/>
        <Select content="I would describe my user type as" id="selected" func={props.func}/>
        <Input type="password" placeholder="Password" name="password" id="password" func={valueInput} value={user.password} onblur={inputBlur} onkeypress={inputBlur} onsubmit={addUser}/>
        <Footnotes content="Minimum 8 caracteres"/>
        <Button name="Next" id="btn"/>
        <div id="lastParagraph">
          <Subtitle content={`By clicking the "Next" button, you agree to creating a free account, and to Terms of Service and Privacy Policy`}/>
        </div>
      </form>
    </FormStyle>
    
  )
}

export default Form;