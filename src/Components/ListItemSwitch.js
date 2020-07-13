import React from 'react';
import Switch from '@material-ui/core/Switch';

function ListItemSwitch(props) {
    return (
        <div>
            <Switch
                checked={props.data}
                onChange={props.handler}
                name="switch"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                value={props.valueData}
            />
        </div>
    );
}

export default ListItemSwitch;