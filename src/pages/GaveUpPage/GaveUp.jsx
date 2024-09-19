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
  padding: "10px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "470px",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "16px",
  padding: "40px 0",
  maxWidth: "1200px",
  margin: "0 auto",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "13px",
  },
  [theme.breakpoints.down("xs")]: {
    gridTemplateColumns: "1fr",
  },
}));

const StyledContainerCart = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "5px",
  [theme.breakpoints.down("sm")]: {
    padding: "15px",
  },
}));

