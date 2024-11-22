function News(props) {
	let data = props.propsValue;
	console.log(data);
	return (
		<div className="nw_news">
			<div className="first">
				<h3>새소식</h3>
				<a href=""><span>+ 더보기</span></a>
			</div>
			<div className="nw_news_list">
				<ul>
					{
						data.map((d, i) => (
						<NewsList key={i} text={d.text} date={d.date} />
						))
					}	
				</ul>
			</div>
		</div>
	);
}

function NewsList(props) {

	let { text, date } = props;

	return (
		<li>
			<a href="">
				<p>{text}</p>
				<span>{date}</span>
			</a>
		</li>
	);
}

export default News;