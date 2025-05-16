export default function ProfileCard({image, name, job, isWorking, company}) {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}의 프로필 사진`} />
      <h2>{name}</h2>
      <p>{job}</p>
      <p>{isWorking ? "재직중" : "구직중"}</p>
      {isWorking && <p>${company}에서 일하는 중입니다!</p>}
    </div>
  );


  // return (
  //   <div>
  //     <img src={image} alt="프로필 사진" />
  //     <p>이름: {name}</p>
  //     <p>직업: {job} / {isWorking ? '재직중' : '구직중'}</p>
  //     <p style={isWorking ? null : {display:"none"}}>{company}에서 일하는 중입니다!</p>
  //   </div>
  // );
}