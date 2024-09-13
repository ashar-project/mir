import React from "react";
import { Card, Typography, styled, Avatar } from "@mui/material";

const Cards = ({ name, percentage, imageSrc }) => {
	return (
		<StyledCard>
			<StyledAvatar alt={name} src={imageSrc} />
			<Typography variant="h6">{name}</Typography>
			<PercentageText>{percentage}%</PercentageText>
		</StyledCard>
	);
};

export default Cards;

const StyledCard = styled(Card)(({ theme }) => ({
	width: "190px",
	height: "230px",
	background:
		"linear-gradient(180deg, #F8F7FD 0%, #AFDBC4 49.49%, #BDC0EB 100%)",
	borderRadius: "43px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	[theme.breakpoints.down("sm")]: {
		width: "220px",
		height: "230px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "220px",
		height: "240px",
	},
}));

const StyledAvatar = styled(Avatar)(() => ({
	width: "56px",
	height: "56px",
	marginBottom: "10px",
}));

const PercentageText = styled(Typography)(() => ({
	fontSize: "24px",
	fontWeight: "bold",
	marginTop: "10px",
}));
