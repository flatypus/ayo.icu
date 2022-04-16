import Head from 'next/head'
import Image from 'next/image'

function Home() {
	return (
		<div className="fixed">
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className='flex justify-center'>
					<div className='w-1/2 text-justify'>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin enim augue, et pretium erat porta eget. Aenean vitae enim ut lectus suscipit suscipit. Nam in gravida turpis. Sed luctus tortor ac mi auctor, id sollicitudin erat pharetra. Nulla at eros vitae dolor lacinia luctus maximus eu lorem. Nunc elementum malesuada ipsum, et viverra nisl eleifend nec. In porttitor consectetur felis, sed cursus lorem tincidunt in. Pellentesque gravida dictum arcu, sed laoreet lacus hendrerit ut. Nam id iaculis augue. Curabitur commodo sit amet leo cursus suscipit. Donec sagittis, ex sed iaculis volutpat, nisi nisi sollicitudin massa, non sodales turpis tortor quis massa. Morbi eu lacus posuere, laoreet mi eget, accumsan nisl. Suspendisse potenti. Sed ornare, augue quis malesuada imperdiet, quam felis feugiat diam, sit amet laoreet eros velit quis mi. Quisque condimentum mattis massa.</p>
					<br />
					<p>Phasellus arcu lacus, mattis a eleifend in, egestas eu turpis. Mauris quis egestas dolor. Sed et felis arcu. Donec facilisis, leo et varius suscipit, sapien nisl facilisis justo, a pharetra sapien odio vitae mauris. Praesent sagittis odio purus, sed varius enim ultrices at. Quisque eget turpis nisl. Mauris tempor nibh ultrices mi elementum pulvinar. Vivamus lobortis vestibulum urna. Curabitur erat nisl, luctus a rutrum ut, fringilla eget ligula. Proin pulvinar urna ut nisl dignissim semper. Morbi gravida mattis diam, id suscipit orci imperdiet a.</p>
					<br />
					<p>Nulla diam turpis, sodales condimentum sagittis at, gravida sit amet urna. Maecenas in ornare turpis, sed tincidunt risus. Aenean sed consectetur purus. Donec et tempus mi. Ut fermentum in ex vel pulvinar. Phasellus molestie efficitur condimentum. Suspendisse blandit arcu vitae orci dapibus, id maximus quam viverra. Curabitur dictum blandit sagittis. Praesent leo lectus, consectetur et metus at, condimentum malesuada lacus. Etiam rutrum at erat sit amet fringilla. Vivamus elementum tempus urna, vel faucibus leo aliquam a. </p>
					<br />
					<p>Sed posuere arcu ornare velit eleifend, id sagittis augue convallis. Duis lacinia venenatis lacus, at mollis urna consectetur tincidunt. Vestibulum a ipsum in felis vestibulum lobortis id nec sem. Etiam aliquet iaculis enim accumsan mattis. Etiam nec orci ac lectus viverra venenatis id nec nulla. Integer luctus vulputate finibus. Nullam porttitor varius turpis nec ultrices. Sed nec arcu et magna tincidunt dignissim ut at velit. Donec condimentum semper diam, sit amet viverra mi dignissim et. Nulla eleifend diam justo, eget condimentum mauris laoreet ac. Sed viverra, eros a facilisis finibus, urna enim interdum urna, eu placerat orci mi et sem. Curabitur mattis nulla in ante commodo pretium. Ut facilisis elementum risus a ultrices. Aenean sapien massa, ullamcorper porttitor magna non, hendrerit elementum quam. </p>
				</div>
				</div>
				
				
			</main>
		</div>
	)
}

export default Home