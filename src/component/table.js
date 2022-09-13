import { Table } from "react-bootstrap"
import PropTypes from 'prop-types'; // ES6

const TableOfContent = (props) => {
    const { CAD, EUR, IDR, JPY, CHF, GBP} = props.currency;
    

    const currency = {
        CAD, EUR, IDR, JPY, CHF, GBP
    }

    return(
    <>
        <Table striped style={{marginTop: '200px'}}>
            <thead>
                <tr>
                <th>Currency</th>
                <th>We Buy</th>
                <th>Exchange Rate</th>
                <th>We Sell</th>
                </tr>
            </thead>
            <tbody>
                
                { Object.keys(currency).map((d) => {
                    return(
                        <tr>
                            <td>
                                {d}
                            </td>
                            <td>{ currency[d]*1.05}</td>
                            <td>
                                { currency[d]}
                            </td>
                            <td>{ currency[d]*0.95}</td>
                        </tr> 
                    )
                    }
                )}
                
            </tbody>
        </Table>
    </>
       
    )
}

TableOfContent.propTypes = {
    currency: PropTypes.object
}

TableOfContent.defaulProps = {
    currency: {}
}

export default TableOfContent