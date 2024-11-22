function Appcon(props) {
	let data = props.propsValue;

	return (
		<div className="appcon_inner">
			<ul>
				{/*
				<li>
					<a href=""><img src="/images1/hana_app1.png" alt="hana_app1" /></a>
				</li>
				<li>
					<a href=""><img src="/images1/hana_app2.png" alt="hana_app2" /></a>
				</li>
				<li>
					<a href=""><img src="/images1/hana_app3.png" alt="hana_app3" /></a>
				</li>
				<li>
					<a href=""><img src="/images1/hana_app4.png" alt="hana_app4" /></a>
				</li>
				<li>
					<a href=""><img src="/images1/hana_app5.png" alt="hana_app5" /></a>
				</li>
				<li>
					<a href=""><img src="/images1/hana_app6.png" alt="hana_app6" /></a>
				</li>
				*/}

				{
					data.map((d, i) =>
						<AppconList key={i} src={d.src} idx={d.idx} />
					)
				}
			</ul>
		</div>
	);
}

function AppconList(props) {

	let { src, idx } = props;

	return (
		<li>
			<a href=""><img src={"/images1/" + src} alt={"hana_app" + (idx + 1)} /></a>
		</li>
	);
}

export default Appcon;