import algoliasearch from 'algoliasearch';

const client = algoliasearch('1QRJ2OI8QB', '1d13b1cf46177c6407ca653e36e8c3a2');
const index = client.initIndex('codehub');

export const algolia = {
  send: (data) => {
    index
      .saveObject(data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  },

  get :(search)=>{
    index.search(search).then(({ hits }) => {
        setUsers(hits);
      });
  },
  
  update : (data) =>{
    index.partialUpdateObjects(data).then((response) => {
        console.log(response);
      }).catch((err) => console.log(err));
  },

  delete : (id) =>{
    index.deleteObject(id).then(() => {});     
  }
};
