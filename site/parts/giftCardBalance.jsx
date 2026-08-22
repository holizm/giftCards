export default ({ giftCard }) => <dl class='giftCardBalance'>
    <dt class='code'>{giftCard.code}</dt>
    <dd class='balance'>{giftCard.balance}</dd>
    <dd class='currency'>{giftCard.currency?.title}</dd>
</dl>
