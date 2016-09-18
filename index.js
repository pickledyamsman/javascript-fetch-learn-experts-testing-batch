const token = '4a7799eb4863aeaa6a949dac4f26cd8e4dddfe72'
fetch('https://api.github.com/pickledyamsman/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))