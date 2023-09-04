import React from 'react';

const MoreInfoCard = ({ close }) => {
	

	return (
		<div className="fixed top-0 left-0 w-full h-screen bg-[#000] bg-opacity-50 grid place-content-center" onClick={close}>
			<div className="bg-white w-[400px] h-[400px]">
				More Info here
				<button>back</button>
			</div>
		</div>
	);
};

export default MoreInfoCard;
