import {
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>giftCardsCode</th>
    <th>giftCardsBalance</th>
    <th>giftCardsCurrency</th>
    <th>giftCardsStatus</th>
</>

const row = item => <>
    <td>{item.code}</td>
    <td>{item.balance}</td>
    <td>{item.currency?.title}</td>
    <td>{item.giftCardStatus}</td>
</>

export default <List
    create={Form}
    filters={<Text property='code' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
