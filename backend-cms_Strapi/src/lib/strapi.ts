const {STRAPI_HOST, STRAPI_TOKEN} = process.env 


// Function to query the Strapi API with the given URL and authorization token
export function query(url: string) {
    return fetch(`${STRAPI_HOST}/api/${url}`,{
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    }).then(res => res.json())
}

//Import the query
export function getHomeInfo() {
    return query('home')
    .then(res => {
        console.log(res)
        return res
    })

}