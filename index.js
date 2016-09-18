const token = ''
fetch('https://api.github.com/pickledyamsman/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
