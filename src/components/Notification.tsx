import React, {useState} from 'react';
import {Snackbar} from '@material-ui/core';
import {Alert, Color} from '@material-ui/lab';

interface NotificationProps {
    children: (callback: (text: string, type: Color) => void) => React.ReactElement
}

const Notification: React.FC<NotificationProps> = ({children}): React.ReactElement => {
    const [open, setOpen] = useState(false);
    const [notificationObj, setNotificationObj] = useState<{text: string, type: Color}>();

    const openNotification = (text: string, type: Color) => {
        console.log('openNotificatoin');
        setNotificationObj({
            text, type
        })
        setOpen(true);
    }
    console.log(open, notificationObj);
    return (
        <div>
            {children(openNotification)}
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity={notificationObj?.type}>
                    {notificationObj?.text}
                </Alert>

            </Snackbar>
        </div>
    );
};

export default Notification;