import React, { useState } from 'react';
import axios from 'axios';
import './Payment.css';

const Payment = () => {
    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [selectAppointement, setSelectAppointement] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && firstname && email && selectAppointement) {
            const user = {
                name,
                firstname,
                email,
                selectAppointement,
            };
            //console.log(user);
            axios.post('http://localhost/lmk_project/insert.php', user)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error.response)
                });
        } else {
            alert("champs vide");
        }
    };

    return (
        <div className="Paiement">
            <div className='login-box' >
                <h2>Inscription</h2><br />
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <label>Nom</label>
                        <input
                            type="text"
                            required="required"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="user-box">
                        <label>Prénom</label>
                        <input
                            type="text"
                            required="required"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className="user-box">
                        <label>E-mail</label><br />
                        <input
                            type="email"
                            required="required"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="user-box">
                        <label>Créneau pour contact</label><br />
                        <input
                            type="datetime-local"
                            required="required"
                            value={selectAppointement}
                            onChange={(e) => setSelectAppointement(e.target.value)}
                        />
                    </div>
                    <button
                        type='submit'
                    ><br /><h1>Valider</h1>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
