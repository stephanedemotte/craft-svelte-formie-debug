export const load = async ({ fetch }) => {

  let res = await fetch('http://craft.ddev.site/graphql', {
    method: 'post',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{ 
        entry(section: "home") { 
          ... on home_Entry {
            form { 
              templateHtml
              templateJs
            }
          }
        } 
      }`
    })
  })

  res = await res.json()

  return res.data;
}
