export const loadImage = (id) => {
    const request1 = fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
                        .then(res => res.json())
    const request2 = fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
                        .then(res => res.json())

    return Promise.all([request1, request2]).then(data => {
        console.log(id, data)
        if(data[0] === false || data[1] === false) return false
        if(data[0] % 2 === 0 && data[1] % 2 === 0) return true
        return false
    }).then(res => {
        if(!res) return loadImage(id)
        return true
    }).catch(_ => false)                 
}