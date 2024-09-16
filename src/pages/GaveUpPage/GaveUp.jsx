import React from "react";
import { Box, TextField, styled } from "@mui/material";
import { Cards } from "@/components";
import { cardsData } from "@/modules/GaveUp/components";
const GaveUp = () => {
	return (
		<Wrapper>
			<StyledBox>
				{cardsData.map((card) => (
					<StyledContainerCart key={card.id}>
						<Cards
							name={card.name}
							percentage={card.percentage}
							imageSrc={card.imageSrc}
						/>
					</StyledContainerCart>
				))}
			</StyledBox>
		</Wrapper>
	);
};

export default GaveUp;

const Wrapper = styled(Box)(({ theme }) => ({
	margin: "0 auto",
	textAlign: "center",
	maxWidth: "100%",
	padding: "20px",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
}));

const StyledBox = styled(Box)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(5, 1fr)",
	gap: "16px",
	padding: "40px 0",
	width: "100%",
	maxWidth: "1440px",
	margin: "0 auto",
	[theme.breakpoints.down("sm")]: {
		gridTemplateColumns: "repeat(3, 1fr)",
	},
	[theme.breakpoints.down("sm")]: {
		gridTemplateColumns: "repeat(2, 1fr)",
		padding: "40px 0",
	},
}));

const StyledContainerCart = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	padding: "5px",
	gap: "5px",
	[theme.breakpoints.down("sm")]: {
		marginLeft: "-10px",
	},
}));
