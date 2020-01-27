import React, { Component } from 'react';

class UnsafeAlert extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div style=
                {{'background-color':'#8a0010', 
                'font-family': 'brandon-grotesque', 
                'color':'white', 
                'text-align':'center',
                'display': (this.props.showEmailAlert === true) ? 'block': 'none'}} 
                dangerouslySetInnerHTML={{__html: this.props.unsafeText}}>
            </div>
        );
    }
}

export default UnsafeAlert;