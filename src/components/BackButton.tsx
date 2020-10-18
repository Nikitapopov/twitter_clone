import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {IconButton} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const BackButton: React.FC = (): React.ReactElement => {
    let history = useHistory();

    const handleClickButton = () => history.goBack();

    return (
        <IconButton onClick={handleClickButton} style={{ marginRight: 20 }} color='primary'>
            <ArrowBackIcon />
        </IconButton>
    );
};

export default BackButton;