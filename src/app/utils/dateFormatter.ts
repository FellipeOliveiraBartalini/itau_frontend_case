export const formatStringDateToString = (dateString: string): string => {
    const dateToString = new Date(dateString).toLocaleDateString('pt-BR');
    if (dateToString === 'Invalid Date') {
        return 'NC';
    }
    return dateToString;
};
