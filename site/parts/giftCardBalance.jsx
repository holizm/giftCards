export default ({ giftCard }) => <dl class='balance'>
    <dt class='code'>{giftCard.code}</dt>
    <dd class='balance'>{giftCard.balance}</dd>
    <dd class='currency'>{giftCard.currency?.title}</dd>
</dl>
