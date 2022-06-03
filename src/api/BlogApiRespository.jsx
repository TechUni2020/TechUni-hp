export const getAllBlogs = async (endpoint) => {
    let url = new URL(endpoint)
    let params = {per_page: 10}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    let response = await fetch(endpoint)
    return response.json()
}

// export const getBlog = async (endpoint, id) => {
//     let url = new URL(endpoint)
//     let params = {id: id}
//     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
//     let response = await fetch(url)
// }

export const getBlog = async (endpoint, id) => {
    let response = await fetch(`${endpoint}/${id}`)
    return response.json()
}