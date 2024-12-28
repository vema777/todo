import React from "react";
import './Logup.scss'
import {Card} from "../shared/card/Card";
import {Center} from "../shared/center/Center";
import {TextFormField} from "../shared/textField/TextFormField";
import {ActionButton} from "../shared/customButton/ActionButton";

export function Logup(){
    return(
        <Center>
            <Card>
                <form className={'Register-form'}>
                    <div className={'input-container'}>
                        <TextFormField type={'name'} placeholder={'Name'}></TextFormField>
                        <TextFormField type={'email'} placeholder={'E-Mail Adresse'}></TextFormField>
                        <TextFormField type={'password'} placeholder={'Passwort'}></TextFormField>
                    </div>
                    <ActionButton>Registrieren</ActionButton>
                    <p>Bereits Registriert ?
                        <a href={'/login'}>Jetzt Einloggen</a>
                    </p>

                </form>
            </Card>
        </Center>
    )
}