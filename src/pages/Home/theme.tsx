import {makeStyles} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        margin: 0,
        padding: 0,
        maxWidth: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg': {
                    color: theme.palette.primary.main,
                },
            },
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 10,
            transition: 'background-color 0.15s ease-in-out',
        }
    },
    sideMenuListItemLabel: {
        fontSize: 20,
        fontWeight: 700,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        bottomTop: '0',
        bottomBottom: '0',
    },
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweetsHeaderUser: {
        display: 'flex',
        alignItems: 'center',
    },
    tweetsHeaderBackArrow: {
        marginRight: 20,
    },
    tweet: {
        display: 'flex',
        alignItems: 'flex-start',
        cursor: 'pointer',
        paddingTop: '15',
        paddingLeft: '20',
        position: 'relative',
        '&:hover': {
            backgroundColor: 'rgb(245, 248,250)',
        }
    },
    tweetWrapper: {
        color: 'inherit',
        textDecoration: 'none',
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
    },
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tweetContent: {
      flex: 1,
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        left: -13,
        maxWidth: '450',
    },
    tweetUserName: {
        color: grey[500],
    },
    tweetPopupMenu: {
        positiosn: 'absolute',
        right: 0,
        top: 0
    },
    fullTweet: {
        padding: 22
    },
    fullTweetText: {
        fontSize: 24,
        marginTop: 20,
        lineHeight: 1.3125,
        wordBreak: 'break-word',
    },
    fullTweetFooter: {

    },
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center',
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            textDecoration: 'none',
            color: 'inherit',
        }
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#e6ecf0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
}));