function FormatPrice (price) {
    const formatter = new Intl.NumberFormat('en-peso'{
    style: 'currency',
    currency: 'PESO',
})
return formatter.format(price)
}

