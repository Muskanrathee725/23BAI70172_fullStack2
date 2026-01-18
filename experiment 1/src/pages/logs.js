//we have to filter only those features whise carbon fileters are ore than or eual to follow

const mappcarbon = (logs) =>{
    return logs.filter((log) => log.carbon >=4).map(log => ({ item: `${log.activity}, carbon: ${log.carbon}` }) );
}
export default mappcarbon;