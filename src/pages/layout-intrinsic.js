import Image from 'next/image';

const Intrinsic = () => (
	<>
		<Image
			alt='Mountains'
			src='/mountains.jpg'
			layout='intrinsic'
			width={700}
			height={475}
		/>

		<Image
			alt='Mountains2'
			src='/base/mountains.jpg'
			layout='intrinsic'
			width={700}
			height={475}
		/>
	</>
);

export default Intrinsic;
