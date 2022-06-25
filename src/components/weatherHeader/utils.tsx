import format from 'date-fns/format';

export const formatTodayDate = () => format(new Date(), 'cccc, MMMM do');
