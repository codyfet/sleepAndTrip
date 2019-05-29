import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export const AddButton = (funct) => {
   return(
        <div className="add-button-circle">
        <Fab color="primary" aria-label="Add" onClick={funct}>
            <AddIcon className="add-button"/>
        </Fab>
    </div>)
}