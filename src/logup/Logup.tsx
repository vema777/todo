import React from "react";
import {Card} from "../shared/card/Card";
import {Center} from "../shared/center/Center";
import {TextFormField} from "../shared/textField/TextFormField";
import {ActionButton} from "../shared/customButton/ActionButton";
//wiso klappt das styling nicht wie in der Login-form?
export function Logup(){
    return(
        <Center>
            <Card>
                <form className={'Register-form'}>
                    <div className={'input-container'}>
                        <TextFormField type={'firstName'} placeholder={'Vorname'}></TextFormField>
                        <TextFormField type={'lastName'} placeholder={'Nachname'}></TextFormField>
                        <TextFormField type={'email'} placeholder={'Email'}></TextFormField>
                        <TextFormField type={'password'} placeholder={'Passwort'}></TextFormField>

                    </div>
                    <ActionButton>Registrieren</ActionButton>
                </form>
            </Card>
        </Center>
    )
}