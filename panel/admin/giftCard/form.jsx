import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='code'
        property='code'
        required
    />
    <Numeric
        placeholder='initialValue'
        property='initialValue'
        required
    />
    <Numeric
        placeholder='balance'
        property='balance'
        required
    />
    <Text
        placeholder='currency'
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
        placeholder='state'
        property='giftCardStatus'
        required
    />
    <DateTime
        placeholder='expiryDate'
        property='expiryDate'
    />
</>

export default <DialogForm inputs={inputs} />
