import React, {useState} from 'react';
import {Avatar, Button, CircularProgress, IconButton, TextareaAutosize} from '@material-ui/core';
import cn from 'classnames';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {useHomeStyles} from '../pages/Home/theme';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddTweet} from '../store/ducks/tweets/actionCreators';
import {selectAddFormState} from '../store/ducks/tweets/selectors';
import Alert from '@material-ui/lab/Alert';
import {AddFormState} from '../store/ducks/tweets/contracts/state';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>,
    maxRows?: number,
}

const AddTweetForm: React.FC<AddTweetFormProps> = ({classes, maxRows}): React.ReactElement => {
    const MAX_LENGTH = 280;
    const [text, setText] = useState<string>('');
    const textLimitPercent = text.length / MAX_LENGTH * 100;
    const dispatch = useDispatch();
    const addFormState = useSelector(selectAddFormState);

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    };

    const handleClickAddTweet = () => {
        dispatch(fetchAddTweet(text));
    };

    // useEffect(() => {
    //     if (addFormState === AddFormState.ERROR)
    //         setVisibleNotification(true);
    // }, [addFormState]);
    //
    // const handleCloseNotification = () => {
    //     setVisibleNotification(false);
    // }

    return (
        <div>
            <div className={classes.addFormBody}>
                <Avatar className={classes.tweetAvatar}
                        src={'https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}/>
                <TextareaAutosize className={classes.addFormTextarea}
                                  placeholder='Что происходит?'
                                  onChange={handleChangeTextarea}
                                  value={text}
                                  rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={cn(classes.tweetFooter)}>
                    <IconButton color='primary'>
                        <ImageOutlinedIcon style={{fontSize: 26}}/>
                    </IconButton>
                    <IconButton color='primary'>
                        <EmojiIcon style={{fontSize: 26}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {!!textLimitPercent &&
                    <>
                        <span>{MAX_LENGTH - text.length > 0 ? MAX_LENGTH - text.length : 0}</span>
                        <div className={classes.addFormCircleProgress}>
                            <CircularProgress variant='static'
                                              size={20}
                                              thickness={4}
                                              value={textLimitPercent > 100 ? 100 : textLimitPercent}
                                              style={textLimitPercent >= 100 ? {color: 'red'} : undefined}
                            />
                            <CircularProgress style={{color: 'rgba(0,0,0,0.1)'}}
                                              variant='static'
                                              size={20}
                                              thickness={4}
                                              value={100}
                            />
                        </div>
                    </>
                    }
                    <Button onClick={handleClickAddTweet}
                            disabled={addFormState === AddFormState.LOADING || !text || textLimitPercent >= 100}
                            color='primary'
                            variant='contained'>
                        {addFormState === AddFormState.LOADING
                            ? <CircularProgress size={16} color='inherit'/>
                            : 'Твитнуть'}
                    </Button>
                </div>
            </div>
            {addFormState === AddFormState.ERROR &&
                <Alert severity='error'>Ошибка при добавлении твита</Alert>
            }
        </div>
    );
};

export default AddTweetForm;