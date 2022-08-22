// use fetch with the url parameter
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=306a3a071f224f729829308fa9f5896a'

const articleAction = (articles) => {
    return {
        type: 'FETCH_ARTICLES',
        value: articles
    }
}

export const fetchArticles = () => {
    // return a function that calls fetch and dispatches "articleAction()"
        // with the list of articles from the API call
    // returning a function that has `dispatch` as its only parameter

    return (dispatch) => {
              // making an asynchronous API call

    fetch(url)
        .then(res => res.json())
        .then(response => {
                      // create a variable to hold an Object for the results

                const action = {
                    type: 'FETCH_ARTICLES',
                    value: response.articles
                }
                          // call `dispatch` to send the action Object to the reducer

                dispatch(action)
        })

    }
}
// another way
// export const fetchArticles = () => {
//     // return a function that calls fetch and dispatches "articleAction()"
//     // with the list of articles from the API call    
//     return (dispatch) => {
//         fetch(url)
//             .then(res => res.json())
//             .then(response => {
//                 dispatch(articleAction(response.articles))
//             })
//     }
// }