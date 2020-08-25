export default function MarvFetch(url) {
  const publicKEY = "52660f98699992c175bbb6d6496ae3a6";
  let arr = [];
  fetch(`${url}apikey=${publicKEY}`)
    .then((res) => res.json())
    .then((data) => {
       // console.log(data);
       arr.push(data)
    });

  return arr;
}
