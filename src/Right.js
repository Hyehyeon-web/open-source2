function Right(props) {
	let data = props.propsValue;

	console.log(data);
	return (
		<div className="bottomcon_right">
			<ul className="link-box">
				{/*
				<li><a href="">상품공시실</a></li>
				<li><a href="">서식·약관자료실</a></li>
				<li><a href="">하나소비자세상</a></li>
				<li><a href="">손님의소리</a></li>
				<li><a href="">서민대출</a></li>
				<li><a href="">영업점찾기</a></li>
				*/}

				{
					data.map((d, i) => 
						<RightList key={i} text={d.text} />
					)
				}
			</ul>
		</div>
	);
}

function RightList(props) {

	let { text } = props;

	return (
		<li><a href="">{text}</a></li>
	);
}

export default Right;