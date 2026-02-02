export const calculateTotalCarbon = (logs) => {
    return logs.reduce((total, log) => total + log.carbon, 0);
};