import './card.css';

// props : 부모가 자식한테 전달 (객체로)
const Card = ({file,title,text})=>{
    // console.log(data);
    // const flieName = data.flie;
    // const {flie} = data;

    return (
        <div className="card">
            <div className="img-wrap">
                <img src={`/images/${file}.png`} alt='이미지'/>
                <h2>{title}</h2>
            </div>
            <p>{`이건 ${text} 이미지입니다.`}</p>
        </div>
    );
}
export default Card;