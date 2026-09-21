import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>giftCardsGiftCard</th>
    <th>coreTransactionType</th>
    <th>giftCardsAmount</th>
    <th>coreTransactionDate</th>
</>

const row = item => <>
    <td>{item.giftCard?.code}</td>
    <td>{item.giftCardTransactionType}</td>
    <td>{item.amount}</td>
    <DateTime value={item.transactionDate} />
</>

export default <List
    create={Form}
    hasEdit
    headers={headers}
    row={row}
/>
