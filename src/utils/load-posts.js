export const load_Posts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  //there's a problema: photos: 5000 items, posts: 100 items; there are more photos than posts. let's resolve it with zip function that suits to join two arrays, joining from smaller to the biggest array.(the smaller array and its index to iterate over each value of the constant photosJson)
  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });
  return postsAndPhotos;
};
