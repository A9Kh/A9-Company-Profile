import React from 'react';
import Clients from 'components/clients/Clents';
import Covers from 'components/clients/Covers';
const ClientPage = () => {
    document.title = "K-DATA - Clients";

    return (
        <div>
            <Covers />
            <Clients />
        </div>
    )
}

export default ClientPage;