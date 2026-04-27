import { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogs } from '../store/logsSlice';

const Logs = () => {
    const dispatch = useDispatch();
    const { data = [], status, error } = useSelector((state) => state.logs);

    const handleFetchLogs = useCallback(() => {
        dispatch(fetchLogs());
    }, [dispatch]);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchLogs());
        }
    }, [status, dispatch]);

    const totalCarbon = useMemo(() => {
        return (data || []).reduce((acc, log) => acc + (log.carbon || 0), 0);
    }, [data]);

    if (status === 'loading') {
        return <p>Loading your logs...........</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    const logs = data || [];

    return (
        <div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
                <button
                    onClick={handleFetchLogs}
                    style={{
                        padding: '10px 20px',
                        borderRadius: 6,
                        backgroundColor: '#1db954',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    disabled={status === 'loading'}
                >
                    Fetch Logs
                </button>
            </div>

            <div style={{ textAlign: 'center', marginTop: 8 }}>
                <h3>Total Carbon: {totalCarbon} kg CO2</h3>
            </div>

            <div style={{
                marginLeft: 'auto',
                backgroundColor: '#323232ff',
                marginRight: 'auto',
                maxWidth: '30%',
                padding: 20,
                marginBottom: 10,
                marginTop: 10,
                borderRadius: 10,
                border: '2px solid red'
            }}>
                <h2>High Carbon Emission</h2>
                {logs
                    .filter(ele => ele.carbon >= 4)
                    .map((ele, index) => (
                        <h3 key={index} style={{ color: 'red' }}>
                            {ele.activity} {ele.carbon}
                        </h3>
                    ))}
            </div>

            <div style={{
                marginLeft: 'auto',
                backgroundColor: '#323232ff',
                marginRight: 'auto',
                maxWidth: '30%',
                padding: 20,
                borderRadius: 10,
                border: '2px solid green'
            }}>
                <h2>Low Carbon Emission</h2>
                {logs
                    .filter(ele => ele.carbon < 4)
                    .map((ele, index) => (
                        <h3 key={index} style={{ color: 'green' }}>
                            {ele.activity} {ele.carbon}
                        </h3>
                    ))}
            </div>
        </div>
    );
};

export default Logs;
