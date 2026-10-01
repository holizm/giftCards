import { DateTime } from 'list'

export default item => <>
    <td>{item.giftCard?.code}</td>
    <td>{item.giftCardTransactionType}</td>
    <td>{item.amount}</td>
    <DateTime value={item.transactionDate} />
</>
