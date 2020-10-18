import React from 'react';

import cn from 'classnames';
import {useHomeStyles} from '../pages/Home/theme';
import {Divider, List, ListItem, ListItemText, Paper, Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {selectIsTagsLoaded, selectTagsItems} from '../store/ducks/tags/selectors';
import {Link} from 'react-router-dom';

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>,
}

const Tags: React.FC<TweetProps> = ({classes}): React.ReactElement | null => {
    const items = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectIsTagsLoaded);

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader}>
                <b>Актуальные темы</b>
            </Paper>
            {!isLoaded ? (<div></div>) : (
                <List>
                    {
                        items.map(item =>
                            <React.Fragment key={item._id}>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <Link to={`/home/search?q=${item.name}`}>
                                        <ListItemText primary={item.name} secondary={
                                            <Typography component='span' variant='body2'>
                                                Твитов: {item.count}
                                            </Typography>
                                        }>
                                        </ListItemText>
                                    </Link>
                                </ListItem>
                                <Divider component='li'/>
                            </React.Fragment>
                        )
                    }
                </List>)
            }
        </Paper>
    );
};

export default Tags;