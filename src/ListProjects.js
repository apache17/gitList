import React, {Component} from 'react';
import Header from './Header.js';
import axios from 'axios';
import PropTypes from 'prop-types';

class ListProjects extends Component{
    
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }
    componentDidMount(){
        const {
            match: { params }
        } = this.props;

        axios
            .get(`https://api.github.com/users/${params.username}/repos`)
            .then(projects => 
                this.setState(()=> ({
                    projects: projects.data
                }))
            )        
            .catch(err => console.log(err.message)); // eslint-disable-line
    }
    
    render(){
        return (
            <div>
                <Header title={this.props.match.params.username} handleBack={this.handleBack.bind(this)}/>
                <div className="container list" id="container">
                    <section className="seven offset-by-five columns">
                        <h4>Projects</h4>
                    </section>
                </div>
                <div className="Lista">
                    <section className = "Proyectos">
                        {this.state.projects.map(d => <button   key={d.id}
                                                                onClick = {this.handleOpen.bind(this, d.id, d.name, d.owner.login)}
                                                                className = "boton">{d.name} 
                                                        </button>)}
                    </section>
                </div>
            </div>
           
        );
    }

    handleOpen(id, projectName, user){
        if(this.props.onHandleOpen && projectName && id && user)
            this.props.onHandleOpen(this.props.history, user, id, projectName);
    }
    handleBack(e){
        e.preventDefault();
        this.props.onHandleBack(this.props.history);
    }
}

ListProjects.propTypes = {
    onHandleBack: PropTypes.func.isRequired,
    onHandleOpen: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default ListProjects;