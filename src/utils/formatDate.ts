import ruLang from 'date-fns/locale/ru';
import {formatDistance} from 'date-fns';

export const formatDate = (date: Date): string => {
    return formatDistance(
        date,
        new Date(),
        {locale: ruLang}
    );
}