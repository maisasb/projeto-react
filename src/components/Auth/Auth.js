import React from 'react';
import Input from '../UI/Input/Input';

const Auth = props => {

    return (
        <div>
            <Input 
                label="Usuário" 
                top 
                height="big" 
                placeholder="usuário"/>
            <br/>
            <Input 
                label="Senha" 
                top 
                height="big" 
                placeholder="senha"/>
        </div>
    );

}

export default Auth;