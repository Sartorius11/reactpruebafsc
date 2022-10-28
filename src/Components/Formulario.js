import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';


export default class TablaDoctores extends Component {

selectEspecialidadRef = React.createRef();
    state = {
      //{} PORQUE ES UN OBJETO Y NO UN ARRAY
        especialidad: {},
        status: false,
        idespecialidad: 0
    }

    //ERROR 404 NOT FOUND ?? 

    loadDepartamentos = () => {
      var request= "/api/Doctores/Especialidades"
        var url = Global.urlDoctores+ request;
      //para ver donde esta el error
        console.log(url);

        axios.get(url).then(res => {
            this.setState({
              especialidad: res.data,
                status: true
            });
        });
    }

    //funcion para buscar la especialidad
    buscarEspecialidad = (e) => {
        e.preventDefault();
        var idDept = this.selectEspecialidadRef.current.value;
        this.setState({
          idespecialidad: idDept
        });
    }

    //se cargar
    componentDidMount = () => {
        this.loadDepartamentos();
    }

//se pinta lo que hemos hecho
  render() {
    return (
        <div>
             <h1>Incremento salarial doctores</h1>
            <form>
                <label>Seleccione departamento: </label>
                <select ref={this.selectEspecialidadRef}>
                    {
                        this.state.status === true &&
                        this.state.especialidad.map((dept, index) => {
                            return (<option key={dept.especialidad}>
                                {dept.especialidad}
                            </option>);
                        })
                    }
                </select>
               
                
            </form>
      
        </div>
    )
  }
}
