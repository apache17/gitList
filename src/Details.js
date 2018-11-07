import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Header from './Header';
import axios from 'axios';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            proName: "",uName: "",readmeInfo: [],readme: "",error: ""
        }
    }

    componentDidMount(){
        const {
            match: { params }
        } = this.props;

        this.setState(() => ({
            uName: params.username,
            proName: params.name
        }));

        axios
            .get(`https://api.github.com/repos/${params.username}/${params.name}/readme`)
            .then(readmeInfo => {
                this.setState(() => ({
                    readmeInfo: readmeInfo.data
                }));
                let readme = atob(this.state.readmeInfo.content);
                this.setState(() => ({
                    readme: readme
                }));
            })
    }

    render(){
        return (
            <div>
                <Header title={this.state.proName} handleBack={this.handleBack.bind(this)}/>
                {(<div className="Readme">
                    <section className="five offset-by-two columns">
                        <ReactMarkdown 
                            source={this.state.readme}
                        />
                    </section>
                </div>)}
            </div>
        );
    }

    handleBack(e){
        e.preventDefault();
        this.props.onHandleBack(this.props.history, this.state.uName);
    }
}

Detail.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    onHandleBack: PropTypes.func.isRequired
}

export default Detail;