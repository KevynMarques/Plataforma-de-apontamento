import React from "react"; 
import { authConfig } from "../../Auth/config";
import { BoxHome, BoxLogin, ButtomLogin, InputDeLogin, Remember, TextLogin, TextRemember} from "./style";






export const Login =()=>{
  return (
    <BoxHome>
    <BoxLogin> 
       <TextLogin>Usuario</TextLogin>
       <InputDeLogin type="email" id="email" name="email" placeholder="DigiteSeuEmail@hotmail.com.br" />
       <TextLogin>Senha</TextLogin>
       <InputDeLogin type="text" id="password" name="password"  placeholder="****************************"/>
      <Remember />
      <TextRemember><p></p>Lembrar-me neste dispositivo</TextRemember>
     <ButtomLogin>
      <p>LOGIN</p>
     </ButtomLogin>
    </BoxLogin>
    </BoxHome>
  )
}