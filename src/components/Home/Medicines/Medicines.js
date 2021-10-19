import React, { useEffect, useState } from 'react';
import Medicine from '../Medicine/Medicine';
import './Medicines.css'

const Medicines = () => {
    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setMedicines(data));
    }, [])
    return (
        <div id="medicines">
            <h2 className="text-primary mt-5 mb-2">Best Products</h2>
            <div className="medicine-container">
                {
                    medicines.map(medicine => <Medicine
                        key={medicine.key}
                        medicine={medicine}
                    ></Medicine>)
                }
            </div>
        </div>
    );
};

export default Medicines;
