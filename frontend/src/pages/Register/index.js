import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css'
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try{
        const response = await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');

        }
        catch(err){
            alert(`Erro no cadastro tente novamente. erro: ${err}`)
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be Te Hero"/>
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da 
                        sua ONG
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Já sou cadastrado
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome da ONG"
                    />

                    <input 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="email@email.com"/>
                    <input 
                        type="number"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input 
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder="Cidade" />
                        <input 
                            type="text"
                            value={uf}
                            onChange={e => setUF(e.target.value)}
                            placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}