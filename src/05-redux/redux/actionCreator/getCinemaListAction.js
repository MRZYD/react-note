import axios from 'axios'

// redux-thunk
// function getCinemaListAction () {
//   return (dispatch) => {
//     axios({
//       url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8494105',
//       method: 'get',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16732355392037828837965825"}',
//         'X-Host': 'mall.film-ticket.cinema.list'
//       }
//     }).then(res => {
//       console.log(res.data.data.cinemas)
//       dispatch({
//         type: "change-list",
//         payload: res.data.data.cinemas
//       })
//     })
//   }
// }

//redux-promise
async function getCinemaListAction () {
  let list = await axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8494105',
    method: 'get',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16732355392037828837965825"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then(res => {
    console.log(res.data.data.cinemas)
    return {
      type: "change-list",
      payload: res.data.data.cinemas
    }
  })

  return list
}

export default getCinemaListAction