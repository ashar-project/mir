import { gmail, log, LogoTwo, pass } from "@/assets/icon";
import {
	Box,
	Button,
	InputAdornment,
	styled,
	TextField,
	Typography,
} from "@mui/material";

const SignUp = () => {
	return (
		<Container>
			<Logo>
				<Img />
				<TypographyStyled>Добро пожаловать</TypographyStyled>
			</Logo>
			<Block>
				<BlockOne>Регистрация</BlockOne>
				<BlockTwo>
					<Input placeholder="Full Name" />
					<Input
						InputProps={{
							endAdornment: (
								<InputAdornmentStyled position="end">
									<img src={gmail} alt="Gmail" />
								</InputAdornmentStyled>
							),
						}}
						placeholder="Email"
					/>
					<Input
						InputProps={{
							endAdornment: (
								<InputAdornmentStyled position="end">
									<img src={pass} alt="Gmail" />
								</InputAdornmentStyled>
							),
						}}
						placeholder="Password"
					/>
				</BlockTwo>
				<BlockThree>
					<ButtonStyled fullWidth>Регестрация</ButtonStyled>
					<TypographyMui>Войти</TypographyMui>
				</BlockThree>
			</Block>
		</Container>
	);
};

export default SignUp;

const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	maxWidth: "90rem",
	minHeight: "100vh",
	backgroundColor: "white",
	height: "100%",
	margin: "0 auto",

	[theme.breakpoints.down("sm")]: {
		maxWidth: "100%",
		padding: "0 1rem",
		minHeight: "37.5rem",
		backgroundColor: "white",
	},
}));

const InputAdornmentStyled = styled(InputAdornment)(({}) => ({
	position: "relative",
	cursor: "pointer",
	"& > img": {
		position: "absolute",
		right: "0",
		width: "20px",
		cursor: "pointer",
		height: "20px",
	},
}));

const Block = styled(Box)(({ theme }) => ({
	width: "570px",
	height: "500px",
	margin: "0 auto",
	boxShadow: " 0rem 0rem 1.1875rem .1875rem rgba(34, 60, 80, 0.2)",
	display: "flex",
	justifyContent: "start",
	flexDirection: " column",
	alignItems: "center",
	gap: "20px",
	borderRadius: "4px",

	[theme.breakpoints.down("sm")]: {
		backgroundColor: "white",
		width: "20.625rem",
		height: "24.375rem",
		boxShadow: " 0rem 0rem 1.1875rem .1875rem rgba(34, 60, 80, 0.2)",
		margin: "0 auto",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		gap: ".625rem",
	},
}));

const Logo = styled(Box)(({ theme }) => ({
	width: "25rem",
	height: "10rem",
	margin: "20px auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "end",

	[theme.breakpoints.down("sm")]: {
		width: "12.5rem",
		height: "6.25rem",
		margin: "2.5rem auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "end",
	},
}));

const Img = styled("div")(({ theme }) => ({
	width: "79px",
	height: "70px",
	background: `url(${LogoTwo}) center center / cover no-repeat`,

	[theme.breakpoints.down("sm")]: {
		padding: "13px 5px 5px 5px",
		width: "100%",
		height: "100%",
		background: `url(${log}) center center / cover no-repeat`,
	},
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
	fontSize: "1.125rem",
	fontFamily: "Montserrat,sans-serif",
	fontWeight: "500",
	textAlign: "center",

	[theme.breakpoints.down("sm")]: {
		fontSize: "1.125rem",
		fontFamily: "Montserrat,sans-serif",
		textAlign: "center",
	},
}));

const BlockOne = styled(Box)(({ theme }) => ({
	width: "29rem",
	height: "6.25rem",
	textAlign: "center",
	fontSize: "38px",
	fontFamily: "Montserrat,sans-serif",
	lineHeight: "46px",
	display: "flex",
	alignItems: "end",
	justifyContent: "center",

	[theme.breakpoints.down("sm")]: {
		width: "9.0625rem",
		height: "1.6875rem",
		margin: ".3125rem auto",
		textAlign: "center",
		fontWeight: "500",
		fontSize: "1.375rem",
		fontFamily: "Montserrat,sans-serif",
	},
}));

const BlockTwo = styled(Box)(({ theme }) => ({
	width: "29rem",
	height: "10.25rem",
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	position: "relative",

	[theme.breakpoints.down("sm")]: {
		width: "17.8125rem",
		height: "5.5rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: "1.875rem",
		marginBottom: ".9375rem",
		marginTop: "20px",
	},
}));

const BlockThree = styled(Box)(({ theme }) => ({
	width: "25.75rem",
	height: "10.25rem",
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	justifyContent: "center",

	[theme.breakpoints.down("sm")]: {
		width: "15.6875rem",
		height: "7.9375rem",
		display: "flex",
		flexDirection: "column",
		gap: "1.25rem",
		alignItems: "center",
	},
}));

const Input = styled(TextField)(({ theme }) => ({
	width: "100%",
	border: "none",
	padding: 0,

	"& .MuiOutlinedInput-root": {
		border: "none",
		padding: 0,
	},

	"& .MuiOutlinedInput-notchedOutline": {
		border: "none",
		borderBottom: "2px solid black",
		borderRadius: "0rem",
	},

	"& .MuiOutlinedInput-input": {
		border: "transparent",
		padding: "25px 25px 5px 15px",

		"&:-webkit-autofill": {
			WebkitBoxShadow: "0 0 0 100px white inset",
			WebkitTextFillColor: "inherit",
			transition: "background-color 5000s ease-in-out 0s",
		},
	},

	[theme.breakpoints.down("sm")]: {
		"& .MuiOutlinedInput-root": {
			height: "1.5625rem",
			border: "none",
		},

		"& .MuiOutlinedInput-notchedOutline": {
			border: "none",
			borderBottom: ".0625rem solid black",
			borderRadius: "0rem",
		},

		"& .MuiOutlinedInput-input": {
			border: "none",
			padding: "5px 5px 5px 5px",

			"&:-webkit-autofill": {
				WebkitBoxShadow: "0 0 0 100px white inset",
				WebkitTextFillColor: "inherit",
				transition: "background-color 5000s ease-in-out 0s",
			},
		},
	},
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
	backgroundColor: "#37D3D3",
	padding: "13px",
	color: "white",

	[theme.breakpoints.down("sm")]: {
		backgroundColor: "#37D3D3",
		color: "white",
	},
}));

const TypographyMui = styled(Typography)(({ theme }) => ({
	color: "#9A9A9A",
	fontFamily: "Montserrat,sans-serif",
	textAlign: "center",
	textDecoration: "underline",

	[theme.breakpoints.down("sm")]: {
		color: "#9A9A9A",
		fontFamily: "Montserrat,sans-serif",
		fontSize: ".75rem",
		textDecoration: "underline",
	},
}));
