import React from 'react';
import axios from 'axios';
import './Payment.css';


export default class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeSelectAppointement = this.onChangeSelectAppointement.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            firstname: '',
            email: '',
            selectAppointement: '',
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }


    onChangeSelectAppointement(e) {
        this.setState({
            selectAppointement: e.target.value
        });
    }

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }



    onSubmit(e) {
        e.preventDefault();

        if (this.state.name != null && this.state.firstname != null && this.state.email != null && this.state.selectAppointement != null) {
            const user = {
                name: this.state.name,
                firstname: this.state.firstname,
                email: this.state.email,
                selectAppointement: this.state.selectAppointement,
            };
            console.log(user);
            axios.post('http://localhost/lmk_project/insert.php', user)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error.response)
                });
        }
        else {
            alert("champs vide");
        }

    }
    render() {

        return (
            <div className="Paiement">
                <div className='login-box' >
                    <h2>Inscription</h2><br />
                    <form onSubmit={this.handleSubmit}>
                        <div className="user-box">
                            <label>Nom</label>
                            <input
                                type="text"
                                required="required"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="user-box">
                            <label>Prénom</label>
                            <input
                                type="text"
                                required="required"
                                value={this.state.firstname}
                                onChange={this.onChangeFirstname}
                            />
                        </div>
                        <div className="user-box">
                            <label>E-mail</label><br />
                            <input
                                type="email"
                                required="required"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <div className="user-box">
                            <label>Créneau pour contact</label><br />
                            <input
                                type="datetime-local"
                                required="required"
                                value={this.state.selectAppointement}
                                onChange={this.onChangeSelectAppointement}
                            />
                        </div>
                        <button
                            type='submit'
                            onClick={this.onSubmit}
                        ><br /><h1>Valider</h1>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
