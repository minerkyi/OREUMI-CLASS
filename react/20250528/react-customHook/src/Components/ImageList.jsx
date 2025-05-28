export default function ImageList({imageList}) {
  return (
    <ul>
      {
        imageList.map((img) => <li key={img.id}><img src={img.download_url} alt="" style={{width: '300px', height: '200px'}} /></li>)
      }
    </ul>
  );
}