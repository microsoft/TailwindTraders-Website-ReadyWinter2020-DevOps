import React from 'react';

const UnsafeAlert = function(props) {
    return(
        <div style=
            {{'background-color':'#8a0010', 
            'font-family': 'brandon-grotesque', 
            'color':'white', 
            'text-align':'center',
            'display': (props.showEmailAlert === true) ? 'block': 'none'}} 
            dangerouslySetInnerHTML={{__html: props.unsafeText}}>
        </div>
    )
}
 
export default UnsafeAlert;