import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

const AccessPointList = () => {
    const [accessPoints, setAccessPoints] = useState([]);

    useEffect(() => {
        const fetchAccessPoints = async () => {
            try {
                const { data, error } = await supabase.from('access_points').select('*');
                if (error) {
                    throw error;
                }
                setAccessPoints(data);
            } catch (error) {
                console.error('Error fetching access points:', error);
            }
        };

        fetchAccessPoints();
    }, []);

    return (
        <div>
            {accessPoints.map((accessPoint) => (
                <div key={accessPoint.id}>
                    <h3>{accessPoint.name}</h3>
                    <p>{accessPoint.description}</p>
                </div>
            ))}
        </div>
    );
};

export default AccessPointList;
