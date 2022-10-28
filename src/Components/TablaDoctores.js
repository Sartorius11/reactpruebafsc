import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';


export default class TablaDoctores extends Component {




    state = {
        doctores: [],
        status: false
    }
    loadDoctores = () => {
        var request = "/api/Doctores";
        var url = Global.urlDoctores + request;
        axios.get(url).then(response => {
            this.setState({
                doctores: response.data,
                status: true
            });
        });
    }
    componentDidMount = () => {
        this.loadDoctores();
    }


    render() {
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Apellido</th>
                                <th>Especialidad</th>
                                <th>Salario</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* se imprimiria los doctores con el .map dentro de la tabla */}
                            {
                                this.state.doctores.map((dotor, index) => {
                                    return (<tr key={dotor.idDoctor}>
                                        <td>{dotor.apellido}</td>
                                        <td>{dotor.especialidad}</td>
                                        <td>{dotor.salario}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    }

