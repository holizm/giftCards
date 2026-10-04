import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='giftCard'
        property='giftCard'
        required
    />
    <Select
        options={[
            'issue',
            'load',
            'redeem',
            'refund',
            'transfer',
            'adjustment',
        ]}
        placeholder='transactionType'
        property='giftCardTransactionType'
        required
    />
    <Numeric
        placeholder='amount'
        property='amount'
        required
    />
    <DateTime
        placeholder='transactionDate'
        property='transactionDate'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
