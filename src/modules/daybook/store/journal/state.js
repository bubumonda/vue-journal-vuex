export default () => ({
    isLoading: true,
    entries: [{
        id: new Date().getTime(),
        date: new Date().toDateString(),
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, rem doloremque fugit quae consectetur iure vel voluptatibus provident nam explicabo aut quaerat optio soluta pariatur eaque a perspiciatis natus molesti',
        picture: null
        },
        {
        id: new Date().getTime()+1000,
        date: new Date().toDateString(),
        text: ' rem doloremque fugit quae consectetur iure vel voluptatibus provident nam explicabo aut quaerat optio soluta pariatur eaque a perspiciatis natus molesti',
        picture: null

        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'provident nam explicabo aut quaerat optio soluta pariatur eaque a perspiciatis natus molesti',
            picture: null
    
            }
    ]

})