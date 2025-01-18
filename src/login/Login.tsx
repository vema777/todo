import React from 'react';
import './Login.scss';
import {Center} from "../shared/center/Center";
import {Card} from "../shared/card/Card";
import {TextFormField} from "../shared/textField/TextFormField";
import {ActionButton} from "../shared/customButton/ActionButton";

export function Login() {
    return (
        <Center>
            <Card>
                <form className={'Login-form'}>
                    <div className={'input-container'}>
                        <TextFormField type={'email'} placeholder={'E-mail Adresse'}/>
                        <TextFormField type={'password'} placeholder={'Passwort'}/>
                    </div>
                    <a href={'/'}>Passwort vergessen ?</a>
                    <ActionButton>
                        Einloggen
                    </ActionButton>
                    <p>Kein Konto ? <a href={'/register'}>Sich registrieren</a> </p>
                </form>
            </Card>
        </Center>
    )
}