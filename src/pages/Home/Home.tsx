import React, {useEffect} from 'react';
import {
    Grid,
    Paper,
    Typography,
    Container,
    Avatar,
    Button,
    InputAdornment,
    ListItem,
    List,
    ListItemText,
    Divider, ListItemAvatar, IconButton
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';
import cn from 'classnames';

import Tweet from '../../components/Tweet';
import SidebarMenu from '../../components/SidebarMenu';
import AddTweetForm from '../../components/AddTweetForm';
import {useHomeStyles} from './theme';
import SearchTextField from '../../components/SearchTextField';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTweets} from '../../store/ducks/tweets/actionCreators';
import {selectIsTweetsLoaded, selectIsTweetsLoading, selectTweetsItems} from '../../store/ducks/tweets/selectors';
import {fetchTags} from '../../store/ducks/tags/actionCreators';
import Tags from '../../components/Tags';
import { Route } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import FullTweet from './components/FullTweet';

const Home = (): React.ReactElement => {
    const dispatch = useDispatch();
    const classes = useHomeStyles();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);
    const isLoaded = useSelector(selectIsTweetsLoaded);

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch]);

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item sm={1} md={3}>
                    <SidebarMenu classes={classes}/>
                </Grid>
                <Grid item sm={8} md={6}>
                    <Paper className={classes.tweetsWrapper} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Route path='/home/:any'>
                                <BackButton/>
                            </Route>
                            <Route path={['/home', '/home/search']} exact>
                                <Typography variant='h6'>Твиты</Typography>
                            </Route>
                            <Route path='/home/tweet'>
                                <Typography variant='h6'>Твитнуть</Typography>
                            </Route>
                        </Paper>
                        <Route path={['/home', '/home/search']} exact>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes}/>
                                </div>
                                <div className={classes.addFormBottomLine}/>
                            </Paper>
                        </Route>
                        <Route path='/home' exact>
                            {isLoading
                                ? (<div className={classes.tweetsCentred}><CircularProgress/></div>)
                                : !isLoaded
                                    ? (<div></div>)
                                    : (tweets.map((tweet) =>
                                        <Tweet key={tweet._id}
                                               classes={classes}
                                               {...tweet}
                                        />
                                        ))
                            }
                        </Route>
                        <Route path='/home/tweet/:id' component={FullTweet} exact/>
                    </Paper>
                </Grid>
                <Grid item sm={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField variant='outlined'
                                         placeholder='Поиск в твиттере'
                                         fullWidth
                                         inputProps={{
                                             startadornment: (
                                                 <InputAdornment position='start'>
                                                     <SearchIcon/>
                                                 </InputAdornment>
                                             )
                                         }}
                        />
                        <Tags classes={classes}/>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader}>
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar src=''/>
                                    </ListItemAvatar>
                                    <ListItemText primary='Dock Of Shame' secondary={
                                        <Typography component='span' variant='body2'>
                                            @FavDockOfShame
                                        </Typography>
                                    }/>
                                    <Button color='primary'>
                                        <PersonAddIcon/>
                                    </Button>
                                </ListItem>
                                <Divider component='li'/>
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;