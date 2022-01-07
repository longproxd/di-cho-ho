import React, { useState } from 'react';

export default function Pagination() {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <Pagination count={10} page={page} onChange={handleChange} />
        </div>
    );
}