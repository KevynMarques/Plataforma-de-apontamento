import React from "react"; 
import { authConfig } from "../../Auth/config";
import { BoxHome, BoxLogin, InputDeLogin, Logar, TextLogin} from "./style";





export const Login =()=>{
  return (
    <BoxHome>
    <BoxLogin> 
       <TextLogin>Usuario</TextLogin>
       <InputDeLogin type="email" id="email" name="email" placeholder="DigiteSeuEmail@hotmail.com.br" />
       <TextLogin>Senha</TextLogin>
       <InputDeLogin type="text" id="password" name="password"  placeholder="****************************"/>
       <Logar></Logar>
    </BoxLogin>
    </BoxHome>
  )
}