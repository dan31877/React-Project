import { DataGrid } from '@mui/x-data-grid';

// https://swapi.dev/    https://swapi.dev/api/people

const DataGridTable = () => {


    const columns = [
        {
            field: 'name',
            headerName: <span style={{fontWeight: 'bold'}}>Name</span>,
            headerClassName: 'table-header',
            headerAlign: 'center',
            width: 180
        },
        {
            field: 'height',
            headerName: <span style={{fontWeight: 'bold'}}>Height</span>,
            headerClassName: 'table-header',
            headerAlign: 'center',
            width: 130
        },
        {
            field: 'mass',
            headerName: <span style={{fontWeight: 'bold'}}>Mass</span>,
            headerClassName: 'table-header',
            headerAlign: 'center',
            width: 130
        },
        {
            field: 'force_user',
            headerName: <span style={{fontWeight: 'bold'}}>Force User</span>,
            headerClassName: 'table-header',
            headerAlign: 'center',
            width: 130
        },
        {
            field: 'hair_color',
            headerName: <span style={{fontWeight: 'bold'}}>Hair Color</span>,
            headerClassName: 'table-header',
            headerAlign: 'center',
            width: 130
        },
        {
            field: 'birth_year',
            headerName: <span style={{fontWeight: 'bold'}}>Birth Year</span>,
            headerClassName: 'table-header',
            headerAlign: 'center',
            width: 130
        },
        {
            field: 'gender',
            headerName: <span style={{fontWeight: 'bold'}}>Gender</span>,
            headerClassName: 'table-header',
            headerAlign: 'center',
            width: 130
        }

    ];

    const rows = [
        {
            id: 1,
            name: "Luke Skywalker",
            height: 172,
            mass: 77,
            force_user: true,
            hair_color: "Blond",
            birth_year: "19BBY",
            gender: "Male"
        },
        {
            id: 2,
            name: "C-3PO",
            height: 167,
            mass: 75,
            force_user: false,
            hair_color: "N/A",
            birth_year: "112BBY",
            gender: "N/A"
        },
        {
            id: 3,
            name: "R2-D2",
            height: 96,
            mass: 32,
            force_user: false,
            hair_color: "N/A",
            birth_year: "33BBY",
            gender: "N/A"
        },
        {
            id: 4,
            name: "Darth Vader",
            height: 202,
            mass: 136,
            force_user: true,
            hair_color: "None",
            birth_year: "41.9BBY",
            gender: "Male"
        },
        {
            id: 5,
            name: "Obi-Wan Kenobi",
            height: 182,
            mass: 77,
            force_user: true,
            hair_color: "White",
            birth_year: "57BBY",
            gender: "Male"
        }
    ];

    return (
        <div style={{ height: 400, width: '75%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                sx={{
                    height: 300,
                    width: 1,
                    align: 'center',
                    '& .table-header': {
                        backgroundColor: 'lightgrey'
                    },
                }}
            />
        </div>
    );
}

export default DataGridTable; 