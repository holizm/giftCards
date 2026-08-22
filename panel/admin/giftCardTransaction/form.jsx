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
        placeholder='giftCardsGiftCard'
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
        placeholder='giftCardsTransactionType'
        property='giftCardTransactionType'
        required
    />
    <Numeric
        placeholder='giftCardsAmount'
        property='amount'
        required
    />
    <DateTime
        placeholder='giftCardsTransactionDate'
        property='transactionDate'
        required
    />
    <LongText
        placeholder='giftCardsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
