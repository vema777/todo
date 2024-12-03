import './TextFormField.scss';

type Props = {
    type?: string;
    placeholder?: string;
    required?: boolean;
}

export function TextFormField({type, placeholder, required = false}: Props){
    return (
        <input className={'TextFormField'}
               type={type}
               required={required}
               placeholder={placeholder}/>
    )
}