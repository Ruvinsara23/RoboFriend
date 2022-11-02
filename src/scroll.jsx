import react from 'react';

const Scroll=(props) =>{
    return (
        <div style={{ overflowY: 'scroll',overflow: '',  height: '700px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;