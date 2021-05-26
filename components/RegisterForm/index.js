import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { FormValidations } from './formValidations';
import useValidation from './hooks/useValidation';

const initialFormState = {
    credencial: '',
    password: '',
    confirmPassword: ''
}

const RegisterForm = () => {
    let formData = [];

    const [form, setForm] = useState(initialFormState);
    const { errors, invalid } = useValidation(form, FormValidations);

    const setInput = (newValue) => {
        setForm(form => ({ ...form, ...newValue }));
    }

    const submitForm = () => {
        if (localStorage.getItem('formData') != null) {
            formData = JSON.parse(localStorage.getItem('formData'));
        }
        formData.push(form);
        localStorage.setItem('formData', JSON.stringify(formData));
        document.getElementById("newRegister").reset();
    }
    return (
        <>
            <form id="newRegister">
                <Input
                    name="credencial"
                    type="text"
                    placeholder="Credencial"
                    onChange={e => setInput({ credencial: e.target.value })}
                    error={errors.credencial}
                />

                <Input
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    onChange={e => setInput({ password: e.target.value })}
                    error={errors.password}
                />

                <Input
                    name="confirmarSenha"
                    type="password"
                    placeholder="Confirmar Senha"
                    onChange={e => setInput({ confirmPassword: e.target.value })}
                    error={errors.confirmPassword}
                />


                <div className="register--button">
                    <Button handlerButton={submitForm} disabled={invalid} title="Criar" />
                </div>
            </form>
        </>
    );
}
export default RegisterForm;
