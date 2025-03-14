import '../style/section.css';
import '../style/global_font.css'
import SearchIcon from '@mui/icons-material/Search';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function ThirdSection() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://18.143.79.95/api/priceData/technical-test");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
        // const interval = setInterval(fetchData, 1000);

        // return () => clearInterval(interval);
    }, []);

    const columns = [
        {
          field: 'base',
          headerName: 'Name',
          sortable: true,
          width: 120,
        },
        { field: 'bid', headerName: 'BUY', width: 110 },
        { field: 'ask', headerName: 'SELL', width: 110 },
        {field: 'spread',headerName: 'Spread',type: 'number',width: 110},
    ];
    
    const paginationModel = { page: 0, pageSize: 9 };

    const transformedData = data.map((item, index) => ({
        id: index + 1,
        base: item.Symbol, 
        bid: Number(item.Bid).toFixed(4), 
        ask: Number(item.Ask).toFixed(4),
        spread: Number(item.Spread).toFixed(4) 
      }));

    return(
        <div className="d-flex py-5 ">
            <div className="search-side">
                <div>
                    <p className='ft-red H2'>Make Your Move</p>
                    <p className='H1'>Trade Over 5600 Global Markets.</p>
                    <p className='H3B'>We Offer Two Levels Of Pricing Depending On Your Account Tier</p>
                </div>
                {/* <div className='pt-3 pb-5' style={{position:'relative'}}>
                    <input
                        className='py-1 px-2'
                        style={{fontSize:"12px", width:'55%'}}
                        type="text" 
                        placeholder='Search Market'
                    />
                    <SearchIcon style={{position:'absolute',left:'48%',top:"20%"}}/>
                </div> */}
                <div className='rule pt-4' >
                    <div>
                        <p className='H3B' style={{margin:0}}>$100</p>
                        <p className='PR'>Minimum Deposit</p>
                    </div>
                    <div>
                        <p className='H3B' style={{margin:0}}>100%</p>
                        <p className='PR'>Security of Funds</p>
                    </div>
                    <div>
                        <p className='H3B' style={{margin:0}}>1:500</p>
                        <p className='PR'>Max Leverage</p>
                    </div>
                    <div>
                        <p className='H3B' style={{margin:0}}>10+</p>
                        <p className='PR'>Funding Options</p>
                    </div>
                    <div>
                        <p className='H3B' style={{margin:0}}>10000+</p>
                        <p className='PR'>Trading Instruments</p>
                    </div>
                    <div>
                        <p className='H3B' style={{margin:0}}> {"< 20ms"}</p>
                        <p className='PR'>Excution Speed</p>
                    </div>
                </div>
            </div>
            {!error && <div>{error}</div>}
            <div className="table-side">
                <Paper>
                        {console.log(data)}
                        <DataGrid
                            rows={transformedData}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[10]}
                            sx={{ border: 0 }}
                        />
                    </Paper>
            
            </div>
        </div>
    )
};
