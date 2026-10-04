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
        giftCard
        required
    />
    <Select
        giftCardTransactionType
        options={[
            'issue',
            'load',
            'redeem',
            'refund',
            'transfer',
            'adjustment',
        ]}
        placeholder='transactionType'
        required
    />
    <Numeric
        amount
        required
    />
    <DateTime
        required
        transactionDate
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
