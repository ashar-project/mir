import React from "react";
import Cards from "./UI/Cards";
import { Box, TextField, styled } from "@mui/material";

const GaveUp = () => {
	const cardsData = [
		{
			name: "Card 1",
			percentage: 75,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s",
			id: 1,
		},
		{
			name: "Card 2",
			percentage: 60,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&s",
			id: 2,
		},
		{
			name: "Card 3",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qXPZcPR05kF2sg3WdRMQrPWa0fhfCG5jEw&s",
			id: 3,
		},
		{
			name: "Card 4",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNjkaQHLXfokbl1GiKnXl6v7GNgnG8rb3JA&s",
			id: 4,
		},
		{
			name: "Card 5",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNjkaQHLXfokbl1GiKnXl6v7GNgnG8rb3JA&s",
			id: 5,
		},
		{
			name: "Card 6",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-MYBEkDXN23wkyKOXQiosMThViJkoMcCXloSf08A_3KE46tvLMTVDlbmt6TtgCDYOck&usqp=CAU",
			id: 6,
		},
		{
			name: "Card 7",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHuX41NQYJD7q5KsWc3sw8oXE3OgqIZ1qbMhGUJODzd5tcH2H98vWBZpw-APD016oQY4&usqp=CAU",
			id: 7,
		},
		{
			name: "Card 8",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4K5Jr7qOXzWGjkc8cExl4NA1dWOS2LLlE2qWqK4sr9s_c0F4UJatN863_blFebqRQeMY&usqp=CAU",
			id: 8,
		},
		{
			name: "Card 9",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEH14u7rKYD9aCAr-qRwTjpnXljCPuy4xbQSkW4HWJtCFReJNpt0-3ZW3MQyiyaIWoYyI&usqp=CAU",
			id: 9,
		},
		{
			name: "Card 10",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEH14u7rKYD9aCAr-qRwTjpnXljCPuy4xbQSkW4HWJtCFReJNpt0-3ZW3MQyiyaIWoYyI&usqp=CAU",
			id: 10,
		},
		{
			name: "Card 11",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVorsZrMQo7UVzTT-XMhkeFtsF_iNi1Y-jQ&s",
			id: 11,
		},
		{
			name: "Card 12",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbnlySWjQ2vihkJYcZUzYt3_vUrmARoE6yA&s",
			id: 12,
		},
		{
			name: "Card 13",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbnlySWjQ2vihkJYcZUzYt3_vUrmARoE6yA&s",
			id: 13,
		},
		{
			name: "Card 14",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2uf_wifKp7Sy76i0OUlzVp2JlWz7LXYRLQ&s",
			id: 14,
		},
		{
			name: "Card 15",
			percentage: 85,
			imageSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQi2Mm5P8j09P4hPKa1B-t9eIOHzHmR7IBkw&s",
			id: 15,
		},
	];

	return (
		<Wrapper>
			<SearchInput placeholder="Поиск" variant="outlined" />
			<StyledHr />
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

const SearchInput = styled(TextField)(({ theme }) => ({
	marginBottom: "20px",
	width: "300px",
	[theme.breakpoints.down("sm")]: {
    marginLeft: "60px"
	},
}));

const StyledHr = styled("hr")(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		display: "none",
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
