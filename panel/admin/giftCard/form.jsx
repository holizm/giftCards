import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        code
        required
    />
    <Numeric
        initialValue
        required
    />
    <Numeric
        balance
        required
    />
    <Text
        currency
        required
    />
    <Select
        giftCardStatus
        options={[
            'pending',
            'active',
            'suspended',
            'exhausted',
            'expired',
            'cancelled',
        ]}
        placeholder='state'
        required
    />
    <DateTime expiryDate />
</>

export default <DialogForm inputs={inputs} />
