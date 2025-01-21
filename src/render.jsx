import React from 'react';
import ReactDom from 'react-dom/client';
const myelement=(
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <th>Age</th>
        </tr>
        <tr>
            <th>Place</th>
        </tr>
    </table>
);
const container=document.getElementById('root');
const root=ReactDom.createRoot(container);
root.render(my