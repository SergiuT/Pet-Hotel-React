const bookingStatus = {
    BOOKED: 'booked',
    PROGRESS: 'progress',
    CANCELLED: 'cancelled',
    COMPLETED: 'completed'
};

export function bookingStatusColor(status) {
    if (!status || status === bookingStatus.COMPLETED) {
        return undefined;
    }

    if (status === bookingStatus.CANCELLED) {
        return '#f5222d';
    }

    if (status === bookingStatus.PROGRESS) {
        return '#02e023';
    }

    if (status === bookingStatus.BOOKED) {
        return '#008cff';
    }

}

export default bookingStatus;