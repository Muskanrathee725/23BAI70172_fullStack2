export const calculateTotalCarbon = (logs) => {
    return logs.reduce((total, log) => total + log.carbon, 0);
};


// export const mappcarbon = (logs) => {
//     return logs.map(log => ({ item: `${log.activity}, carbon: ${log.carbon}` }));
// }
