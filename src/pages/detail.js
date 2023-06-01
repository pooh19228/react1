import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';


let Yellowbtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`
let Box = styled.div`
  background : grey;
  padding : 20px;
`

let EventBox = styled.div`
  background : yellow;
  padding : 20px;
`

function Details(props) {
 
  let [count, setCount] = useState(0);
 

  // let [tempEvent, setTempEvent] = useState(<EventBox>2초 안에 결제하면 무료ㅋ</EventBox>);
  let [tempEvent, setTempEvent] = useState(true);

  let { id } = useParams();
  // console.log(id);

  let 찾은상품 =  props.shoes.find(function (x) {return x.id == id });

  useEffect(()=>{
    setTimeout( ()=>{ setTempEvent(false) }, 2000);
    console.log('------렌더링');
  }, [count])

  return (
    <div className="container">
     {/* <div className="event-box" >
      {tempEvent}</div> */}
      {
        tempEvent == true 
        ? <EventBox>2초 안에 결제하면 무료ㅋ</EventBox> : null
      }

      <Box>
        {count}
      <Yellowbtn onClick={()=>{ setCount(count + 1) }}>버튼</Yellowbtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">
            {
             찾은상품.title
            }
          </h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
