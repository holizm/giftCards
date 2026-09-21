import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='giftCardsCode'
        property='code'
        required
    />
    <Numeric
        placeholder='giftCardsInitialValue'
        property='initialValue'
        required
    />
    <Numeric
        placeholder='giftCardsBalance'
        property='balance'
        required
    />
    <Text
        placeholder='giftCardsCurrency'
        property='currency'
        required
    />
    <Select
        options={[
            'pending',
            'active',
            'suspended',
            'exhausted',
            'expired',
            'cancelled',
        ]}
        placeholder='stateMachinesState'
        property='giftCardStatus'
        required
    />
    <DateTime
        placeholder='coreExpiryDate'
        property='expiryDate'
    />
</>

export default <DialogForm inputs={inputs} />
